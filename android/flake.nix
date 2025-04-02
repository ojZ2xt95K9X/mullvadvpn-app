{
  description = "Mullvad Android app";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    android = {
      url = "github:tadfisher/android-nixpkgs";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, android, rust-overlay, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };
        android-sdk = android.sdk.${system} (sdkPkgs:
          with sdkPkgs; [
            build-tools-35-0-0
            cmdline-tools-latest
            emulator
            platform-tools
            platforms-android-35
            ndk-27-2-12479018
          ]);
        rust-toolchain = (pkgs.buildPackages.rust-bin.fromRustupToolchainFile
          ../rust-toolchain.toml).override {
            extensions = [ "rust-analyzer" ];
            targets = [
              "armv7-linux-androideabi"
              "aarch64-linux-android"
              "i686-linux-android"
              "x86_64-linux-android"
            ];
          };
      in {
        devShells.default = pkgs.mkShell {
          ANDROID_SDK_ROOT = "${android-sdk}/share/android-sdk";
          ANDROID_NDK_ROOT =
            "${android-sdk}/share/android-sdk/ndk/27.2.12479018";
          NDK_TOOLCHAIN_DIR =
            "$ANDROID_NDK_ROOT/toolchains/llvm/prebuilt/linux-x86_64/bin";
          AR_aarch64_linux_android = "$NDK_TOOLCHAIN_DIR/llvm-ar";
          AR_armv7_linux_androideabi = "$NDK_TOOLCHAIN_DIR/llvm-ar";
          AR_x86_64_linux_android = "$NDK_TOOLCHAIN_DIR/llvm-ar";
          AR_i686_linux_android = "$NDK_TOOLCHAIN_DIR/llvm-ar";
          CC_aarch64_linux_android =
            "$NDK_TOOLCHAIN_DIR/aarch64-linux-android26-clang";
          CC_armv7_linux_androideabi =
            "$NDK_TOOLCHAIN_DIR/armv7a-linux-androideabi26-clang";
          CC_x86_64_linux_android =
            "$NDK_TOOLCHAIN_DIR/x86_64-linux-android26-clang";
          CC_i686_linux_android =
            "$NDK_TOOLCHAIN_DIR/i686-linux-android26-clang";
          CARGO_TARGET_AARCH64_LINUX_ANDROID_LINKER =
            "$NDK_TOOLCHAIN_DIR/aarch64-linux-android26-clang";
          CARGO_TARGET_ARMV7_LINUX_ANDROIDEABI_LINKER =
            "$NDK_TOOLCHAIN_DIR/armv7a-linux-androideabi26-clang";
          CARGO_TARGET_I686_LINUX_ANDROID_LINKER =
            "$NDK_TOOLCHAIN_DIR/i686-linux-android26-clang";
          CARGO_TARGET_X86_64_LINUX_ANDROID_LINKER =
            "$NDK_TOOLCHAIN_DIR/x86_64-linux-android26-clang";
          nativeBuildInputs = [
            pkgs.autoPatchelfHook
          ];
          buildInputs = [
            android-sdk
            rust-toolchain
            pkgs.jdk17
            pkgs.python3Full
            pkgs.go
            pkgs.gcc.cc.lib
          ];
          shellHook = ''
            LD_LIBRARY_PATH=${pkgs.gcc.cc.lib}/lib/
          '';
        };
      });
}
