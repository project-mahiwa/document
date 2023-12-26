import{_ as e,o as t,c as a,R as r}from"./chunks/framework.OBNbGUgv.js";const p=JSON.parse('{"title":"Prime","description":"","frontmatter":{},"headers":[],"relativePath":"research/benchmark/original/prime.md","filePath":"research/benchmark/original/prime.md","lastUpdated":1703573595000}'),i={name:"research/benchmark/original/prime.md"},o=r('<h1 id="prime" tabindex="-1">Prime <a class="header-anchor" href="#prime" aria-label="Permalink to &quot;Prime&quot;">​</a></h1><p>素数判定</p><h2 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-label="Permalink to &quot;条件&quot;">​</a></h2><table><thead><tr><th>対象</th><th>内容</th></tr></thead><tbody><tr><td>使用したマイコン</td><td>M5 Stack Core2</td></tr><tr><td>mahiwa-backend version</td><td>v0.2.1</td></tr><tr><td>PlatformIO version</td><td>v6.1.11</td></tr></tbody></table><h2 id="結果" tabindex="-1">結果 <a class="header-anchor" href="#結果" aria-label="Permalink to &quot;結果&quot;">​</a></h2><h2 id="関連issues" tabindex="-1">関連Issues <a class="header-anchor" href="#関連issues" aria-label="Permalink to &quot;関連Issues&quot;">​</a></h2><ul><li><a href="https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213</a></li></ul><h2 id="備考" tabindex="-1">備考 <a class="header-anchor" href="#備考" aria-label="Permalink to &quot;備考&quot;">​</a></h2><ul><li>Arduinoのsqrtの返り値がf64なので，GoやRustでも同様にf64の精度でsqrtを計算するようにする(意図的に型キャストしている)</li><li>最適化オプションはサイズ優先(Arduinoデフォルト)にする <ul><li>PlatformIO(framework=arduino)のビルドはデフォルトがs</li><li>インタプリタ型のMicroPyhonは指定なし</li><li>TinyGoはデフォルトがzだがコマンドライン引数でsを指定</li><li>Rustのリリースビルドはデフォルトが1だがsにする</li></ul></li></ul>',9),s=[o];function l(n,d,h,c,m,u){return t(),a("div",null,s)}const b=e(i,[["render",l]]);export{p as __pageData,b as default};
