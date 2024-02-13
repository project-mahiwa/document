import{_ as t,c as e,o as a,V as r}from"./chunks/framework.Sh1CwOYD.js";const f=JSON.parse('{"title":"Prime","description":"","frontmatter":{},"headers":[],"relativePath":"research/benchmark/task/prime.md","filePath":"research/benchmark/task/prime.md","lastUpdated":1707784745000}'),d={name:"research/benchmark/task/prime.md"},s=r('<h1 id="prime" tabindex="-1">Prime <a class="header-anchor" href="#prime" aria-label="Permalink to &quot;Prime&quot;">​</a></h1><p>素数2147483647の素数判定に要した時間の測定</p><h2 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-label="Permalink to &quot;条件&quot;">​</a></h2><h3 id="評価言語" tabindex="-1">評価言語 <a class="header-anchor" href="#評価言語" aria-label="Permalink to &quot;評価言語&quot;">​</a></h3><table><thead><tr><th>言語</th><th>言語のバージョン</th><th>マイコン書き込みに用いたコンパイラ・マイコン実行に用いたインタプリタのバージョン</th><th>ビルド時の最適化オプション</th></tr></thead><tbody><tr><td>C/C++</td><td>書き込みボードにより異なる</td><td>PlatformIO Ver6.1.11</td><td>Os(サイズ優先)</td></tr><tr><td>TinyGo</td><td>0.30.0</td><td>LLVM version 16.0.1</td><td>Os</td></tr><tr><td>MicroPython</td><td>1.22.0</td><td>MicroPython 1.22.0</td><td>-</td></tr><tr><td>Rustで生成したWasmをMahiwaで実行</td><td>Mahiwa Frontend Rust v0.3.0 — Rust 1.73.0 — rustup 1.26.0</td><td>Mahiwa Backend v0.3.1 — Wasm3 v0.5.0 — PlatformIO Ver6.1.11</td><td>Os</td></tr><tr><td>TinyGoで生成したWasmをMahiwaで実行</td><td>Mahiwa Frontend Go v0.3.1 — TinyGo 0.30.0 — LLVM version 16.0.1</td><td>Mahiwa Backend v0.3.1 — Wasm3 v0.5.0 — PlatformIO Ver6.1.11</td><td>Os</td></tr></tbody></table><h3 id="評価マイコンボード" tabindex="-1">評価マイコンボード <a class="header-anchor" href="#評価マイコンボード" aria-label="Permalink to &quot;評価マイコンボード&quot;">​</a></h3><table><thead><tr><th>ベンダ</th><th>マイコンボード</th><th>マイコン</th><th>命令セットアーキテクチャ</th><th>RAM(SRAM)</th><th>マイコンのデータシート</th></tr></thead><tbody><tr><td>M5Stack社</td><td>M5Stack Core2</td><td>ESP32-D0WDQ6-V3</td><td>Xtenas 32bit LX6</td><td>520 KB SRAM — 8 MB PSRAM</td><td><a href="https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf" target="_blank" rel="noreferrer">https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf</a></td></tr><tr><td>Raspberry Pi財団</td><td>Raspberry Pi Pico W</td><td>RP2040</td><td>ARMv6-M</td><td>264 KB SRAM</td><td><a href="https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf" target="_blank" rel="noreferrer">https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf</a></td></tr><tr><td>Seeed株式会社</td><td>Seeed Studio XIAO ESP32C3</td><td>ESP32-C3</td><td>RISC-V 32bit IMC</td><td>400 KB SRAM</td><td><a href="https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf" target="_blank" rel="noreferrer">https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf</a></td></tr></tbody></table><h2 id="結果" tabindex="-1">結果 <a class="header-anchor" href="#結果" aria-label="Permalink to &quot;結果&quot;">​</a></h2><h2 id="関連issues" tabindex="-1">関連Issues <a class="header-anchor" href="#関連issues" aria-label="Permalink to &quot;関連Issues&quot;">​</a></h2><ul><li><a href="https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213</a></li></ul><h2 id="備考" tabindex="-1">備考 <a class="header-anchor" href="#備考" aria-label="Permalink to &quot;備考&quot;">​</a></h2><ul><li>最適化オプションはサイズ優先(Arduinoデフォルト)にする <ul><li>PlatformIO(framework=arduino)のビルドはデフォルトがs</li><li>インタプリタ型のMicroPyhonは指定なし</li><li>TinyGoはデフォルトがzだがコマンドライン引数でsを指定</li><li>Rustのリリースビルドはデフォルトが1だがsにする</li></ul></li></ul>',12),i=[s];function o(h,n,l,c,m,p){return a(),e("div",null,i)}const _=t(d,[["render",o]]);export{f as __pageData,_ as default};