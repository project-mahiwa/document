# coremark

## used coremark

https://github.com/wasm3/wasm-coremark coremark-minimal.wasm

coremark-minimal.wasmはwasm3公式のCoremarkのwebassembly移植版で，coremark-minimal版はcoremark本体にwasmで使えるための改変が施されている(coremark.wasm,coremark-emcc.wasmはそのままビルド)

READMEより

> minimal build is more complex, and requires modification of core_main.c.

## 測定結果

details : https://github.com/project-mahiwa/mahiwa-backend/issues/99

| MCU                 | SoC                          | CPU frequency | Architecture | Mahiwa v0.2.1 result | Soc official reference    | Soc official datasheet                                                                                 |
| ------------------- | ---------------------------- | ------------- | ------------ | -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| M5 Stack Core2      | ESP32-D0WDQ6-V3              | 240MHz        | Xtensa       | 8.5663108826         | 1 core at 240 MHz: 504.85 | https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf                     |
| Seed Studio ESP32C3 | ESP32-C3 (Maybe ESP32-C3FH4) | 160MHz        | RISC-V       | 16.8757381439        | null                      | https://www.espressif.com/sites/default/files/documentation/esp32-c3_technical_reference_manual_en.pdf |
| RaspberryPi Pico W  | RP2040                       | 125MHz        | Arm          | 測定終わらず         | null                      | https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf                                         |
| ATOM Matrix         | ESP32-PICO-D4                | 240MHz        | Xtensa       | 8.5703153610         | null                      | https://www.espressif.com/sites/default/files/documentation/esp32-pico_series_datasheet_en.pdf         |
| ATOMS3              | ESP32-S3FN8                  | 240MHz        | Xtensa       | 10.0710000992        | 1 core at 240 MHz: 613.86 | https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf                  |
