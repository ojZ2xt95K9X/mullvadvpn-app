#!/usr/bin/env bash

set -eu

# Build distributable binaries for the test framework.
# TODO: Support macOS

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TEST_FRAMEWORK_ROOT="$SCRIPT_DIR/.."
REPO_ROOT="$TEST_FRAMEWORK_ROOT/.."
# Explicitly set `CARGO_TARGET_DIR` to unify output directory for binaries from the app workspace and the test workspace
export CARGO_TARGET_DIR=${CARGO_TARGET_DIR:-"$TEST_FRAMEWORK_ROOT/target"}

# Build
build_linux() {
    mkdir -p "$TEST_FRAMEWORK_ROOT/dist"
    # Build the test manager
    cargo build -p test-manager --release
    cp "$CARGO_TARGET_DIR/release/test-manager" "$TEST_FRAMEWORK_ROOT/dist/"

    # Build the test runner
    "$SCRIPT_DIR/build-runner.sh" linux
    cp "$CARGO_TARGET_DIR/x86_64-unknown-linux-gnu/release/test-runner" "$TEST_FRAMEWORK_ROOT/dist/"
    cp "$CARGO_TARGET_DIR/x86_64-unknown-linux-gnu/release/connection-checker" "$TEST_FRAMEWORK_ROOT/dist/"

    # Build mullvad-version
    cargo build --manifest-path="$REPO_ROOT/Cargo.toml" --release --bin mullvad-version
    cp "$CARGO_TARGET_DIR/release/mullvad-version" "$TEST_FRAMEWORK_ROOT/dist/"
}

build_linux
