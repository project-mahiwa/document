import{_ as a,o as i,c as e,R as s}from"./chunks/framework.OBNbGUgv.js";const g=JSON.parse('{"title":"Troubleshooting Mahiwa","description":"","frontmatter":{},"headers":[],"relativePath":"reference/developer/troubleshooting/index.md","filePath":"reference/developer/troubleshooting/index.md","lastUpdated":1703573595000}'),t={name:"reference/developer/troubleshooting/index.md"},l=s(`<h1 id="troubleshooting-mahiwa" tabindex="-1">Troubleshooting Mahiwa <a class="header-anchor" href="#troubleshooting-mahiwa" aria-label="Permalink to &quot;Troubleshooting Mahiwa&quot;">​</a></h1><p>マイコン実行時のトラブルシューティング</p><p>よくある質問は<a href="/research/qa/">こちら</a></p><h2 id="no-serial-data-received" tabindex="-1">No serial data received <a class="header-anchor" href="#no-serial-data-received" aria-label="Permalink to &quot;No serial data received&quot;">​</a></h2><p>CPUパニックで再起動を繰り返しているときなどは，書込みが成功しにくい</p><ul><li>電源ボタン長押ししながら書込の直前まで持っていくと，動く可能性が高い</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fatal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> occurred:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> No</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serial</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> received.</span></span></code></pre></div><p>のときなどに有効</p><h2 id="a-fatal-error-occurred-could-not-open-portname-the-port-doesn-t-exist" tabindex="-1">A fatal error occurred: Could not open portName, the port doesn&#39;t exist <a class="header-anchor" href="#a-fatal-error-occurred-could-not-open-portname-the-port-doesn-t-exist" aria-label="Permalink to &quot;A fatal error occurred: Could not open portName, the port doesn&#39;t exist&quot;">​</a></h2><ul><li>適切な権限がない</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a+rw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/ttyACM0</span></span></code></pre></div><p>とかで権限を付与するとOK</p><h2 id="m3-loadmodule-memory-allocation-failed" tabindex="-1">m3_LoadModule memory allocation failed <a class="header-anchor" href="#m3-loadmodule-memory-allocation-failed" aria-label="Permalink to &quot;m3_LoadModule memory allocation failed&quot;">​</a></h2><ul><li>マイコンのメモリ不足</li><li>WebAssemblyが線形メモリを1ページ64KiB取るので，memoryのとりすぎなことが多い．</li><li>WebAssemblyビルド時のオプションでメモリ制限して対処</li><li>WASM_STACK_SLOTSの値が大きい場合にも発生(2048byteであれば，多くのマイコンでの動作を確認)</li><li>FreeRTOSでのタスクのスタック割り当てが多い場合でも発生するので，</li></ul><h3 id="関連issue" tabindex="-1">関連Issue <a class="header-anchor" href="#関連issue" aria-label="Permalink to &quot;関連Issue&quot;">​</a></h3><ul><li><a href="https://github.com/project-mahiwa/mahiwa-backend/issues/23" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-backend/issues/23</a></li><li><a href="https://github.com/project-mahiwa/mahiwa-backend/pull/33" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-backend/pull/33</a></li><li><a href="https://github.com/project-mahiwa/mahiwa-frontend-go/issues/13" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-frontend-go/issues/13</a></li></ul><h2 id="missing-imported-function" tabindex="-1">missing imported function <a class="header-anchor" href="#missing-imported-function" aria-label="Permalink to &quot;missing imported function&quot;">​</a></h2><ul><li>wasm実行時にimportする関数情報に過不足があるときに発生</li><li>wasiの関数を誤って呼んだ場合にも起き，TinyGoではprintlnなどを使ってもコンパイラの段階で弾けなくてこのエラーになることがある．</li><li>関数名が正しくても，wasm3登録時の引数のミスでも発動</li></ul><p>例えば</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m3_LinkRawFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(module, serial, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;printLong&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v(I)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">m3_printLong</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>が正しいところを，</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m3_LinkRawFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(module, serial, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;printLong&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v(i)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">m3_printLong</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>になっていてもこのエラーが起きる．</p><h2 id="trap-stack-overflow" tabindex="-1">[trap] stack overflow <a class="header-anchor" href="#trap-stack-overflow" aria-label="Permalink to &quot;\\[trap\\] stack overflow&quot;">​</a></h2><ul><li>stack-sizeが足りない(Rustのno_std対応ライブラリでも意外とすぐこれになる)</li><li>stack-sizeを増やせばなんとかなる場合もある</li></ul><h3 id="関連pr" tabindex="-1">関連PR <a class="header-anchor" href="#関連pr" aria-label="Permalink to &quot;関連PR&quot;">​</a></h3><ul><li><a href="https://github.com/project-mahiwa/mahiwa-frontend-rust/pull/12" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-frontend-rust/pull/12</a></li></ul><h2 id="trap-unreachable-executed" tabindex="-1">[trap] unreachable executed <a class="header-anchor" href="#trap-unreachable-executed" aria-label="Permalink to &quot;\\[trap\\] unreachable executed&quot;">​</a></h2><ul><li>下記のような処理が含まれて到達した場合に発動</li></ul><div class="language-wasm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">wasm</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> $signature_mismatch:random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">result</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> i64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    unreachable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ul><li>TinyGoではうまく実装できなかった処理をこのようにする傾向があるため，コンパイル時の出力を確認することで対処できる可能性が高い</li></ul><h2 id="debug-exception-reason-stack-canary-watchpoint-triggered-wasm3" tabindex="-1">Debug exception reason: Stack canary watchpoint triggered (wasm3) <a class="header-anchor" href="#debug-exception-reason-stack-canary-watchpoint-triggered-wasm3" aria-label="Permalink to &quot;Debug exception reason: Stack canary watchpoint triggered (wasm3)&quot;">​</a></h2><h3 id="関連issue-1" tabindex="-1">関連issue <a class="header-anchor" href="#関連issue-1" aria-label="Permalink to &quot;関連issue&quot;">​</a></h3><ul><li><a href="https://github.com/project-mahiwa/mahiwa-frontend-go/issues/26" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-frontend-go/issues/26</a></li></ul><h2 id="guru-meditation-error-core-1-panic-ed-loadprohibited-exception-was-unhandled" tabindex="-1">Guru Meditation Error: Core 1 panic&#39;ed (LoadProhibited). Exception was unhandled. <a class="header-anchor" href="#guru-meditation-error-core-1-panic-ed-loadprohibited-exception-was-unhandled" aria-label="Permalink to &quot;Guru Meditation Error: Core 1 panic&#39;ed (LoadProhibited). Exception was unhandled.&quot;">​</a></h2><ul><li>不正なメモリ領域へのアクセスでエラーになっている．</li></ul><h2 id="m3-findfunction-function-lookup-failed" tabindex="-1">m3_FindFunction function lookup failed <a class="header-anchor" href="#m3-findfunction-function-lookup-failed" aria-label="Permalink to &quot;m3_FindFunction function lookup failed&quot;">​</a></h2><ul><li>開始のための関数を見つけられていないときに発生</li><li>webassembly上ではrunで開始の想定なのに，_startをfindFunctrionしている場合などに発生</li></ul>`,38),n=[l];function r(o,h,p,d,c,u){return i(),e("div",null,n)}const m=a(t,[["render",r]]);export{g as __pageData,m as default};
