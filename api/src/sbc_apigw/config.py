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
import os

from dotenv import find_dotenv
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))


load_dotenv(find_dotenv())


class Config:
    """Base class configuration that should set reasonable defaults.

    Used as the base for all the other configurations.
    """

    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = "this-really-needs-to-be-changed"
    PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT_OIDC Settings
    JWT_OIDC_WELL_KNOWN_CONFIG = os.getenv("JWT_OIDC_WELL_KNOWN_CONFIG")
    JWT_OIDC_ALGORITHMS = os.getenv("JWT_OIDC_ALGORITHMS")
    JWT_OIDC_JWKS_URI = os.getenv("JWT_OIDC_JWKS_URI")
    JWT_OIDC_ISSUER = os.getenv("JWT_OIDC_ISSUER")
    JWT_OIDC_AUDIENCE = os.getenv("JWT_OIDC_AUDIENCE")
    JWT_OIDC_CLIENT_SECRET = os.getenv("JWT_OIDC_CLIENT_SECRET")
    JWT_OIDC_CACHING_ENABLED = os.getenv("JWT_OIDC_CACHING_ENABLED")
    try:
        JWT_OIDC_JWKS_CACHE_TIMEOUT = int(os.getenv("JWT_OIDC_JWKS_CACHE_TIMEOUT"))
    except:  # pylint:disable=bare-except # noqa: B901, E722
        JWT_OIDC_JWKS_CACHE_TIMEOUT = 300

    # Keycloak auth config baseurl
    KEYCLOAK_BASE_URL = os.getenv("KEYCLOAK_BASE_URL")
    KEYCLOAK_REALMNAME = os.getenv("KEYCLOAK_REALMNAME")
    KEYCLOAK_ADMIN_USERNAME = os.getenv("SBC_AUTH_ADMIN_CLIENT_ID")
    KEYCLOAK_ADMIN_SECRET = os.getenv("SBC_AUTH_ADMIN_CLIENT_SECRET")

    # Service account details
    KEYCLOAK_SERVICE_ACCOUNT_ID = os.getenv("SBC_AUTH_ADMIN_CLIENT_ID")
    KEYCLOAK_SERVICE_ACCOUNT_SECRET = os.getenv("SBC_AUTH_ADMIN_CLIENT_SECRET")

    # Upstream Keycloak settings
    KEYCLOAK_BCROS_BASE_URL = os.getenv("KEYCLOAK_BCROS_BASE_URL")
    KEYCLOAK_BCROS_REALMNAME = os.getenv("KEYCLOAK_BCROS_REALMNAME")
    KEYCLOAK_BCROS_ADMIN_CLIENTID = os.getenv("KEYCLOAK_BCROS_ADMIN_CLIENTID")
    KEYCLOAK_BCROS_ADMIN_SECRET = os.getenv("KEYCLOAK_BCROS_ADMIN_SECRET")

    # API gateway config
    API_GW_CONSUMERS_API_URL = os.getenv("API_GW_CONSUMERS_API_URL", None)
    API_GW_KEY = os.getenv("API_GW_KEY", None)
    API_GW_CONSUMERS_SANDBOX_API_URL = os.getenv(
        "API_GW_CONSUMERS_SANDBOX_API_URL", None
    )
    API_GW_NON_PROD_KEY = os.getenv("API_GW_NON_PROD_KEY", None)
    API_GW_EMAIL_SUFFIX = os.getenv("API_GW_EMAIL_SUFFIX", None)
    API_GW_KC_CLIENT_ID_PATTERN = os.getenv(
        "API_GW_KC_CLIENT_ID_PATTERN", "api-key-account-{account_id}"
    )

    # API Endpoints
    PAY_API_SANDBOX_URL = os.getenv("PAY_API_SANDBOX_URL")
    PAY_API_URL = os.getenv("PAY_API_URL")
    AUTH_API_URL = os.getenv("AUTH_API_URL")
    AUTH_API_SANDBOX_URL = os.getenv("AUTH_API_SANDBOX_URL")


class Production(Config):
    DEBUG = False
    TESTING = False


class Sandbox(Config):
    DEVELOPMENT = True
    DEBUG = True


class Development(Config):
    DEVELOPMENT = True
    DEBUG = True


class Testing(Config):
    TESTING = True

    DATABASE_TEST_USERNAME = os.getenv("DATABASE_TEST_USERNAME", "")
    DATABASE_TEST_PASSWORD = os.getenv("DATABASE_TEST_PASSWORD", "")
    DATABASE_TEST_NAME = os.getenv("DATABASE_TEST_NAME", "")
    DATABASE_TEST_HOST = os.getenv("DATABASE_TEST_HOST", "")
    DATABASE_TEST_PORT = int(os.getenv("DATABASE_TEST_PORT", "5432"))  # POSTGRESQL

    SQLALCHEMY_DATABASE_URI = f"postgresql://{DATABASE_TEST_USERNAME}:{DATABASE_TEST_PASSWORD}@{DATABASE_TEST_HOST}:{DATABASE_TEST_PORT}/{DATABASE_TEST_NAME}"
