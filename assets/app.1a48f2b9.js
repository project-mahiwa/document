import{a3 as i,s,a4 as c,a5 as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,ab as g,ac as y,ad as P,X as v,d as w,u as C,j as R,y as _,ae as b,af as D,ag as E}from"./chunks/framework.be618dab.js";import{t as p}from"./chunks/theme.985cca87.js";const L={extends:p,Layout:()=>i(p.Layout,null,{}),enhanceApp({app:e,router:t,siteData:a}){}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=u(L),T=w({name:"VitePressApp",setup(){const{site:e}=C();return R(()=>{_(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),D(),E(),o.setup&&o.setup(),()=>i(o.Layout)}});async function j(){const e=O(),t=x();t.provide(l,e);const a=d(e.route);return t.provide(f,a),t.component("Content",m),t.component("ClientOnly",h),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:A}),{app:t,router:e,data:a}}function x(){return g(T)}function O(){let e=s,t;return y(a=>{let n=P(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&j().then(({app:e,router:t,data:a})=>{t.go().then(()=>{c(t.route,a.site),e.mount("#app")})});export{j as createApp};