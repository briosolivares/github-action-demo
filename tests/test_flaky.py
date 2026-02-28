import os
from app import add

def test_add():
    assert add(2, 3) == 5

def test_environment_sensitive():
    # This test fails only in CI
    if os.getenv("CI") == "true":
        assert False, "Fails only in CI environment"
    else:
        assert True
