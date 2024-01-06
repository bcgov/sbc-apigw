
from contextlib import contextmanager

@contextmanager
def nested_session(session):
    try:
        sess = session.begin_nested()
        yield sess
        sess.rollback()
    except:
        pass
    finally:
        pass
