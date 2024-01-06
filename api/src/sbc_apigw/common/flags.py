# Copyright © 2023 Province of British Columbia
#
# Licensed under the BSD 3 Clause License, (the "License");
# you may not use this file except in compliance with the License.
# The template for the license can be found here
#    https://opensource.org/license/bsd-3-clause/
#
# Redistribution and use in source and binary forms,
# with or without modification, are permitted provided that the
# following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice,
#    this list of conditions and the following disclaimer.
#
# 2. Redistributions in binary form must reproduce the above copyright notice,
#    this list of conditions and the following disclaimer in the documentation
#    and/or other materials provided with the distribution.
#
# 3. Neither the name of the copyright holder nor the names of its contributors
#    may be used to endorse or promote products derived from this software
#    without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS”
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
# THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.
"""Feature flag wrapper for Flask."""
from __future__ import annotations

from contextlib import suppress
from typing import Union

import ldclient
from ldclient import LDClient, Config
from ldclient.integrations.test_data import TestData
from flask import current_app
from flask import has_app_context
from flask import Flask

import sbc_apigw


class Flags:
    """Wrapper around the feature flag system.

    1 client per application.
    """

    COMPONENT_NAME = "featureflags"

    def __init__(self, app: Flask = None):
        """Initialize this object."""
        self.sdk_key = None
        self.app = None

        if app:
            self.init_app(app)

    def init_app(self, app: Flask, td: TestData = None):
        """Initialize the Feature Flag environment.

        Provide TD for TestData.
        """
        self.app = app
        self.sdk_key = app.config.get("LD_SDK_KEY")

        if td:
            client = LDClient(config=Config("testing", update_processor_class=td))
        elif self.sdk_key:
            ldclient.set_config(Config(self.sdk_key))
            client = ldclient.get()

        # with suppress(Exception):
        try:
            if client and client.is_initialized():  # pylint: disable=E0601
                app.extensions[Flags.COMPONENT_NAME] = client
                app.teardown_appcontext(self.teardown)
        except Exception as err:  # noqa: B903
            if app and has_app_context():
                app.logger.warn("issue registering flag service", err)

    def teardown(
        self, exception
    ):  # pylint: disable=unused-argument,no-self-use; flask method signature
        """Destroy all objects created by this extension.

        Ensure we close the client connection nicely.
        """
        with suppress(Exception):
            if client := current_app.extensions.get(Flags.COMPONENT_NAME):
                client.close()

    @staticmethod
    def get_client():
        """Get the currently configured ldclient."""
        with suppress(KeyError):
            client = current_app.extensions[Flags.COMPONENT_NAME]
            return client

        try:
            return ldclient.get()
        except Exception:  # noqa: B902
            return None

    @staticmethod
    def get_anonymous_user():
        """Return an anonymous key."""
        return {"key": "anonymous"}

    @staticmethod
    def flag_user(user: sbc_apigw.models.User, account_id: int = None):
        """Convert User into a Flag user dict."""
        if not isinstance(user, sbc_apigw.models.User):
            return None

        _user = {
            "key": user.sub,
            "firstName": user.firstname,
            "lastName": user.lastname,
            "email": user.email,
            "custom": {
                "loginSource": user.login_source,
            },
        }

        return _user

    @staticmethod
    def value(flag: str, user=None):
        """Retrieve the value  of the (flag, user) tuple."""
        client = Flags.get_client()

        if user:
            flag_user = user
        else:
            flag_user = Flags.get_anonymous_user()

        try:
            return client.variation(flag, flag_user, None)
        except Exception as err:  # noqa: B902
            current_app.logger.error(
                "Unable to read flags: %s" % repr(err), exc_info=True
            )
            return None

    @staticmethod
    def detail(flag: str, user=None) -> Union[bool, int, str]:  # pylint: disable=E1136
        """Return the full flag and meta info."""
        client = current_app.extensions[Flags.COMPONENT_NAME]
        link = client.variation_detail(flag, user, False)
        return link
