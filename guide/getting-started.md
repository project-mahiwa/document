# Getting Started

::: warning
ドキュメント整備途中です
:::

## Development Environment

::: code-group

```bash [Go]
go get -u github.com/project-mahiwa/mahiwa-frontend-go
```

```bash [Rust]
cargo install mahiwa_frontend_rust
```

:::

:::warning
Rust Crateのリポジトリはmahiwa-frontend-rustですが，Rustではスネークケースが一般的であるため，Crate名はmahiwa_frontend_rustにしています．
:::

## Flash Environment

### Install Mahiwa Burner

https://github.com/project-mahiwa/mahiwa-burner/releases のページより環境にあった最新の書き込みツールをインストールしてください．

:::warning
GUI自体はクロスプラットホームですが，
動作確認済みOSはUbuntu, Arch Linuxのみです．
:::

### Install dependency tools

現段階のMahiwa Burnerでは依存しているCLIアプリケーションを
ご自身でインストールしていただく必要があります．

::: code-group

```bash [Homebrew(MacOS, Linux)]
brew install wabt platformio
```

```bash [Pacman(Arch Linux)]
sudo pacman -S git xxd wabt platformio-core
```

:::

## Write Hello World

Write in your favorite language

::: code-group

```go[Go]
package main

import (
   "github.com/project-mahiwa/mahiwa-frontend-go/serial"
   "github.com/project-mahiwa/mahiwa-frontend-go/arduino"
)

func main() {
    serial.Print("Hello mahiwa written in Go language")
    for {
    serial.Println("mahiwa running")
    arduino.Delay(900)
    }
}
```

```rust[Rust]
#![no_std]
#![no_main]

use mahiwa_frontend_rust::arduino;
use mahiwa_frontend_rust::serial;

#[no_mangle]
fn _start() {
    serial::print("hello mahiwa written in Rust");
    loop {
        arduino::delay(900);
        serial::println("hello mahiwa");
    }
}
```

:::

## Generate WebAssembly

### コンパイル設定ファイルの用意

::: code-group

```json [Goの場合はtarget.jsonを追加]
{
  "inherits": ["wasm"],
  "ldflags": [
    "--initial-memory=65536",
    "--max-memory=65536",
    "-zstack-size=2048"
  ]
}
```

```toml [Rustの場合は.cargo/configを追加]
[build]
target = "wasm32-unknown-unknown"
rustflags = [
  "-C", "link-args=-zstack-size=2048 -s",
]
```

:::

### WebAssemblyバイナリコードへのコンパイル

::: code-group

```bash [Go]
tinygo build -target ./target.json -o main.wasm main.go
```

```bash [Rust]
cargo build --release
```

:::

## Flash to MCU

Mahiwa Burnerを起動して，手順に従い書き込んでください．
