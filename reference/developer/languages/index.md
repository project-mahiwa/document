# Support Languages

| Language | Support |
| -------- | :-----: |
| Go       |   Yes   |
| Rust     |   Yet   |
| Zig      |   Yet   |

# Support Languages

## Arduino Compatibility <Badge type="tip" text="partial support" />

See : https://www.arduino.cc/reference/en/

### Digiital I/O <Badge type="warning" text="yet" />

#### digitalRead()

#### degitalWrite()

#### pinMode()

### Analog I/O <Badge type="warning" text="yet" />

#### analogRead()

#### analogReference()

#### analogWrite()

### Time <Badge type="warning" text="yet" />

#### delay()

#### delayMicroseconds()

#### micros()

#### millis()

### Math <Badge type="warning" text="yet" />

::: warning
WebAssembly側で関数作るのと関数呼び出しするのではどっちが早いか測定する必要がありそう。
:::

### Trigonometry <Badge type="warning" text="yet" />

::: warning
上に同じ
:::

### Characters <Badge type="warning" text="yet" />

::: warning
すべて実装必要？
:::

### Rundom Numbers <Badge type="warning" text="yet" />

#### rundom()

#### rundomSeed()

### Bits and Bytes <Badge type="warning" text="yet" />

::: warning
WebAssembly側で関数作るのと関数呼び出しするのではどっちが早いか測定する必要がありそう。
:::

### External Interrupts <Badge type="warning" text="yet" />

#### attachInterrupt()

#### detachInterrupt()

### Interrupts <Badge type="warning" text="yet" />

#### interrupts()

#### noInterrupts()

### Communication <Badge type="warning" text="yet" />

#### Print()

#### Serial()

#### SPI

#### Stream

#### Wire

### USB <Badge type="danger" text="not support" />

## Network <Badge type="warning" text="yet" />

::: warning
RP2040とESP32のWiFi関連のAPIを参考にしたい
:::

## Display <Badge type="warning" text="yet" />

::: warning
M5Stack系のマイコンのLCDを抽象化したい
:::
