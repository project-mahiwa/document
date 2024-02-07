# Prime

素数2147483647の素数判定に要した時間の測定

## 条件

### 評価言語

| 言語                               | 言語のバージョン                                                | マイコン書き込みに用いたコンパイラ・マイコン実行に用いたインタプリタのバージョン | ビルド時の最適化オプション |
| ---------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- |
| C/C++                              | 書き込みボードにより異なる                                      | PlatformIO Ver6.1.11                                                             | Os(サイズ優先)             |
| TinyGo                             | 0.30.0                                                          | LLVM version 16.0.1                                                              | Os                         |
| MicroPython                        | 1.22.0                                                          | MicroPython 1.22.0                                                               | -                          |
| Rustで生成したWasmをMahiwaで実行   | Mahiwa Frontend Rust v0.3.0 — Rust 1.73.0 — rustup 1.26.0       | Mahiwa Backend v0.3.1 — Wasm3 v0.5.0 — PlatformIO Ver6.1.11                      | Os                         |
| TinyGoで生成したWasmをMahiwaで実行 | Mahiwa Frontend Go v0.3.1 — TinyGo 0.30.0 — LLVM version 16.0.1 | Mahiwa Backend v0.3.1 — Wasm3 v0.5.0 — PlatformIO Ver6.1.11                      | Os                         |

### 評価マイコンボード

| ベンダ           | マイコンボード            | マイコン        | 命令セットアーキテクチャ | RAM(SRAM)                | マイコンのデータシート                                                                |
| ---------------- | ------------------------- | --------------- | ------------------------ | ------------------------ | ------------------------------------------------------------------------------------- |
| M5Stack社        | M5Stack Core2             | ESP32-D0WDQ6-V3 | Xtenas 32bit LX6         | 520 KB SRAM — 8 MB PSRAM | https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf    |
| Raspberry Pi財団 | Raspberry Pi Pico W       | RP2040          | ARMv6-M                  | 264 KB SRAM              | https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf                        |
| Seeed株式会社    | Seeed Studio XIAO ESP32C3 | ESP32-C3        | RISC-V 32bit IMC         | 400 KB SRAM              | https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf |

## 結果

## 関連Issues

- https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213

## 備考

- 最適化オプションはサイズ優先(Arduinoデフォルト)にする
  - PlatformIO(framework=arduino)のビルドはデフォルトがs
  - インタプリタ型のMicroPyhonは指定なし
  - TinyGoはデフォルトがzだがコマンドライン引数でsを指定
  - Rustのリリースビルドはデフォルトが1だがsにする
