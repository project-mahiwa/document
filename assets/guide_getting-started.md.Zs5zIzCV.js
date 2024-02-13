import{_ as s,c as a,o as i,V as n}from"./chunks/framework.Sh1CwOYD.js";const E=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1707784745000}'),t={name:"guide/getting-started.md"},e=n(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>ドキュメント整備途中です</p></div><h2 id="development-environment" tabindex="-1">Development Environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development Environment&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6yb_I" id="tab-DXJdoEs" checked="checked"><label for="tab-DXJdoEs">Go</label><input type="radio" name="group-6yb_I" id="tab-mXvlhPf"><label for="tab-mXvlhPf">Rust</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get -u github.com/project-mahiwa/mahiwa-frontend-go</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install mahiwa_frontend_rust</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Rust Crateのリポジトリはmahiwa-frontend-rustですが，Rustではスネークケースが一般的であるため，Crate名はmahiwa_frontend_rustにしています．</p></div><h2 id="flash-environment" tabindex="-1">Flash Environment <a class="header-anchor" href="#flash-environment" aria-label="Permalink to &quot;Flash Environment&quot;">​</a></h2><h3 id="install-mahiwa-burner" tabindex="-1">Install Mahiwa Burner <a class="header-anchor" href="#install-mahiwa-burner" aria-label="Permalink to &quot;Install Mahiwa Burner&quot;">​</a></h3><p><a href="https://github.com/project-mahiwa/mahiwa-burner/releases" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/mahiwa-burner/releases</a> のページより環境にあった最新の書き込みツールをインストールしてください．</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>GUI自体はクロスプラットホームですが， 動作確認済みOSはUbuntu, Arch Linuxのみです．</p></div><h3 id="install-dependency-tools" tabindex="-1">Install dependency tools <a class="header-anchor" href="#install-dependency-tools" aria-label="Permalink to &quot;Install dependency tools&quot;">​</a></h3><p>現段階のMahiwa Burnerでは依存しているCLIアプリケーションを ご自身でインストールしていただく必要があります．</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TVx8l" id="tab-RO7KqR_" checked="checked"><label for="tab-RO7KqR_">Homebrew(MacOS, Linux)</label><input type="radio" name="group-TVx8l" id="tab-yvMfbMm"><label for="tab-yvMfbMm">Pacman(Arch Linux)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install wabt platformio</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman -S git xxd wabt platformio-core</span></span></code></pre></div></div></div><h2 id="write-hello-world" tabindex="-1">Write Hello World <a class="header-anchor" href="#write-hello-world" aria-label="Permalink to &quot;Write Hello World&quot;">​</a></h2><p>Write in your favorite language</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_NG8c" id="tab-KkDA15-" checked="checked"><label for="tab-KkDA15-">Go</label><input type="radio" name="group-_NG8c" id="tab-JoN6QQz"><label for="tab-JoN6QQz">Rust</label></div><div class="blocks"><div class="language-go vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/project-mahiwa/mahiwa-frontend-go/serial</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/project-mahiwa/mahiwa-frontend-go/arduino</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    serial.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello mahiwa written in Go language&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    serial.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mahiwa running&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    arduino.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">900</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#![no_std]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#![no_main]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mahiwa_frontend_rust</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arduino;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mahiwa_frontend_rust</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">serial;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#[no_mangle]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    serial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello mahiwa written in Rust&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        arduino</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">900</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        serial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello mahiwa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="generate-webassembly" tabindex="-1">Generate WebAssembly <a class="header-anchor" href="#generate-webassembly" aria-label="Permalink to &quot;Generate WebAssembly&quot;">​</a></h2><h3 id="コンパイル設定ファイルの用意" tabindex="-1">コンパイル設定ファイルの用意 <a class="header-anchor" href="#コンパイル設定ファイルの用意" aria-label="Permalink to &quot;コンパイル設定ファイルの用意&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rqDAw" id="tab-MCU-eh8" checked="checked"><label for="tab-MCU-eh8">Goの場合はtarget.jsonを追加</label><input type="radio" name="group-rqDAw" id="tab-OAUftyV"><label for="tab-OAUftyV">Rustの場合は.cargo/configを追加</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;inherits&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wasm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;ldflags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;--initial-memory=65536&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;--max-memory=65536&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;-zstack-size=2048&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wasm32-unknown-unknown&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rustflags = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;link-args=-zstack-size=2048 -s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></div></div><h3 id="webassemblyバイナリコードへのコンパイル" tabindex="-1">WebAssemblyバイナリコードへのコンパイル <a class="header-anchor" href="#webassemblyバイナリコードへのコンパイル" aria-label="Permalink to &quot;WebAssemblyバイナリコードへのコンパイル&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jT47k" id="tab-IjIf3Ih" checked="checked"><label for="tab-IjIf3Ih">Go</label><input type="radio" name="group-jT47k" id="tab-gNflR-b"><label for="tab-gNflR-b">Rust</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tinygo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build -target ./target.json -o main.wasm main.go</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build --release</span></span></code></pre></div></div></div><h2 id="flash-to-mcu" tabindex="-1">Flash to MCU <a class="header-anchor" href="#flash-to-mcu" aria-label="Permalink to &quot;Flash to MCU&quot;">​</a></h2><p>Mahiwa Burnerを起動して，手順に従い書き込んでください．</p>`,22),l=[e];function h(p,k,r,d,o,c){return i(),a("div",null,l)}const u=s(t,[["render",h]]);export{E as __pageData,u as default};