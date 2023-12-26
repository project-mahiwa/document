import{_ as a,o as e,c as r,R as t}from"./chunks/framework.OBNbGUgv.js";const b=JSON.parse('{"title":"Time measurement accuracy","description":"","frontmatter":{},"headers":[],"relativePath":"research/benchmark/time-measurement-accuracy.md","filePath":"research/benchmark/time-measurement-accuracy.md","lastUpdated":1703573595000}'),o={name:"research/benchmark/time-measurement-accuracy.md"},c=t('<h1 id="time-measurement-accuracy" tabindex="-1">Time measurement accuracy <a class="header-anchor" href="#time-measurement-accuracy" aria-label="Permalink to &quot;Time measurement accuracy&quot;">​</a></h1><p>速度比較に置いて用いる手法について取り上げ，一時停止する関数で1秒間止めた時間を測ることで，どの程度正確に実行時間が計測できるのかを示す．</p><p>実行に用いたマイコン : M5Stack Core2</p><h2 id="mahiwa" tabindex="-1">Mahiwa <a class="header-anchor" href="#mahiwa" aria-label="Permalink to &quot;Mahiwa&quot;">​</a></h2><h3 id="from-rust" tabindex="-1">from Rust <a class="header-anchor" href="#from-rust" aria-label="Permalink to &quot;from Rust&quot;">​</a></h3><p>999875(μs)</p><h4 id="from-go" tabindex="-1">from Go <a class="header-anchor" href="#from-go" aria-label="Permalink to &quot;from Go&quot;">​</a></h4><p>1000542(μs)</p><h2 id="c-c-arduino" tabindex="-1">C/C++(Arduino) <a class="header-anchor" href="#c-c-arduino" aria-label="Permalink to &quot;C/C++(Arduino)&quot;">​</a></h2><p>999894(μs)</p><p><a href="https://github.com/project-mahiwa/benchmark-c/issues/10" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/benchmark-c/issues/10</a></p><h2 id="tinygo" tabindex="-1">TinyGo <a class="header-anchor" href="#tinygo" aria-label="Permalink to &quot;TinyGo&quot;">​</a></h2><p>1000005(μs)</p><p><a href="https://github.com/project-mahiwa/benchmark-tinygo/issues/11" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/benchmark-tinygo/issues/11</a></p><h2 id="micropython" tabindex="-1">MicroPython <a class="header-anchor" href="#micropython" aria-label="Permalink to &quot;MicroPython&quot;">​</a></h2><p>1000023(μs)</p><p><a href="https://github.com/project-mahiwa/benchmark-micropython/issues/9" target="_blank" rel="noreferrer">https://github.com/project-mahiwa/benchmark-micropython/issues/9</a></p>',17),i=[c];function h(s,n,m,u,p,l){return e(),r("div",null,i)}const _=a(o,[["render",h]]);export{b as __pageData,_ as default};
