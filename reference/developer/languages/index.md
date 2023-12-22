# Support Languages

| Language |   Support   |                       Repository                       |
| -------- | :---------: | :----------------------------------------------------: |
| Go       |     Yes     |  https://github.com/project-mahiwa/mahiwa-frontend-go  |
| Rust     |     Yes     | https://github.com/project-mahiwa/mahiwa-frontend-rust |
| Zig      |     Yet     | https://github.com/project-mahiwa/mahiwa-frontend-zig  |
| C/C++    | Not support |                                                        |

# Support Languages

## TinyGo Compatibility

See : https://tinygo.org/docs/guides/embedded/resources/

https://tinygo.org/docs/reference/machine/

## MicroPython Compatibility

See : https://micropython-docs-ja.readthedocs.io/ja/latest/library/index.html

<!-- Badge → https://vitepress.dev/reference/default-theme-badge -->

## Arduino Compatibility <Badge type="tip" text="partial support" />

See : https://www.arduino.cc/reference/en/

### Digital I/O <Badge type="tip" text="experimental" />

#### digitalRead()

#### degitalWrite()

#### pinMode()

---

### Analog I/O <Badge type="tip" text="experimental" />

#### analogRead()

#### analogReference() <Badge type="warning" text="yet" />

::: warning
マイコンによって定数が変化するため，一旦実装を保留
:::

#### analogWrite()

---

### Zero, Due & MKR Family <Badge type="danger" text="not support" />

::: warning
一部マイコン限定なので，サポートは一旦見送る(後ほどライブラリとしての追加はあり)
:::

---

### Advanced I/O <Badge type="warning" text="yet" />

::: warning
一旦保留
:::

---

### Time <Badge type="tip" text="experimental" />

#### delay()

#### delayMicroseconds()

#### micros()

#### millis()

---

### Math

::: warning
WebAssembly側で関数作るのと関数呼び出しするのではどっちが早いか測定する必要がありそう。
:::

#### abs()

#### constrain()

#### map()

#### max()

#### min()

#### pow()

#### sq()

#### sqrt()

---

### Trigonometry <Badge type="tip" text="experimental" />

::: warning
上に同じ
:::

#### sin

#### cos

#### tan

---

### Characters <Badge type="warning" text="yet" />

::: warning
すべて実装必要？
:::

---

### Rundom Numbers <Badge type="tip" text="experimental" />

#### rundom()

#### rundomSeed()

---

### Bits and Bytes <Badge type="warning" text="yet" />

::: warning
WebAssembly側で関数作るのと関数呼び出しするのではどっちが早いか測定する必要がありそう。
ポインタ的な使い方ができないのに，これ実装できる？？
:::

---

### External Interrupts <Badge type="warning" text="yet" />

#### attachInterrupt()

#### detachInterrupt()

#### digitalPinToInterrupt()

---

### Interrupts <Badge type="warning" text="yet" />

#### interrupts()

#### noInterrupts()

---

### Communication <Badge type="warning" text="yet" />

#### Print

#### Serial

#### SPI

#### Stream

#### Wire

---

### USB <Badge type="danger" text="not support" />

## Network <Badge type="warning" text="yet" />

::: warning
RP2040とESP32のWiFi関連のAPIを参考にしたい
:::

## Display <Badge type="warning" text="yet" />

::: warning
M5Stack系のマイコンのLCDを抽象化したい
:::
