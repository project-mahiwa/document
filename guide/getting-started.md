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
cargo install mahiwa-frontend-rust
```

:::

## Flash Environment

### Install platformIO Core(CLI)

::: code-group

```bash [Homebrew(MacOS, Linux)]
brew install platformio
```

```bash [Yay(Arch Linux)]
yay -S platformio-git
```

:::

### Clone Mahiwa Backend

```bash
git clone https://github.com/project-mahiwa/mahiwa-backend.git
```

## Write Hello World

Write in your favorite language

::: code-group

```go[Go]
package main

import (
   "github.com/project-mahiwa/mahiwa-frontend-go/serial"
   "github.com/project-mahiwa/mahiwa-frontend-go/arduino"
)


func setup() {
    serial.Print("Hello mahiwa")
}

func loop() {
    serial.Println("mahiwa running")
    arduino.Delay(900)
}

func main() {
    setup()
    for {
        loop()
    }
}
```

```rust[Rust]
🚧constructing
```

:::

## Generate WebAssembly

::: code-group

```bash [Go]
🚧constructing
```

```bash [Rust]
🚧constructing
```

:::

## Setup WebAssembly

```bash
🚧constructing
```

## Flash to MCU

```bash
cd {path to mahiwa-backend dir}
```

::: code-group

```bash [RaspberryPi Pico W]
make r-pico-w
```

```bash [ATOM Matrix]
make r-atom-m
```

```bash [ATOM S3]
make r-atom-s3
```

```bash [M5Stack Core2]
make r-core2
```

```bash [M5Stamp C3, C3U]
make r-c3
```

:::
