function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Landing-BQDjexR-.js","assets/@vue-D0ThA3Gb.js","assets/jsonp-vFb4yeS3.js","assets/copy-to-clipboard-gvHgSpPc.js","assets/toggle-selection-BHUZwh74.js","assets/debug-DNrDnT4L.js","assets/ms-nT7xfLs5.js","assets/vuetify-D23KgkyU.js","assets/vuetify-CA1uVyXs.css","assets/plugin-vueexport-helper-DlAUqK2U.js","assets/404-DmYBuLJo.js","assets/PageLayout-z9M2Khwr.js","assets/GithubSelectDialog.vuevuetypescriptsetuptruelang-BjIFccxg.js","assets/GournalApi-DcqN7mvk.js","assets/vue-router-DNPgXL5n.js","assets/@date-io-B1xM1e2q.js","assets/dayjs-T8SworZD.js","assets/@codemirror-CR24rtOp.js","assets/@lezer-BVwoch6y.js","assets/style-mod-Bc2inJdb.js","assets/w3c-keyname-Vcq4gwWv.js","assets/axios-Cm0UX6qg.js","assets/@mdi-CQcJNtuu.css","assets/Page-Cxq_LS11.js","assets/Setting-BtCfA-Ye.js","assets/EmptyLayout-CTKfGa41.js","assets/OAuth2-BcmYXdw-.js","assets/Editor-CyP1ziU5.js","assets/md-editor-v3-8cv-I_nt.js","assets/@vavt-B4fzJ49s.js","assets/medium-zoom-CHfgT04g.js","assets/markdown-it-DI8MEbma.js","assets/mdurl-k9Sl0PQj.js","assets/uc.micro-kMc2yuuw.js","assets/entities-C20TfXL6.js","assets/linkify-it-DmNjr4Kv.js","assets/punycode.js-Dj65hjkv.js","assets/markdown-it-image-figures-BD49Kf-b.js","assets/markdown-it-task-lists-DKHOi6r0.js","assets/markdown-it-xss-CzKvBubu.js","assets/xss-DnjGkJ2-.js","assets/cssfilter-BjxKUPhv.js","assets/lru-cache-DBLXwll_.js","assets/md-editor-v3-EOWkC2Js.css","assets/Editor-CFM6ckrM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/* empty css             */import{D as f}from"./@date-io-B1xM1e2q.js";import{c as h,V as g,a as A}from"./vuetify-D23KgkyU.js";import{_ as n}from"./@codemirror-CR24rtOp.js";import{c as v,a as E}from"./vue-router-DNPgXL5n.js";import{a as y}from"./axios-Cm0UX6qg.js";import{d as D,P,Q as L,R as I,S as p,c as m,U as R}from"./@vue-D0ThA3Gb.js";import"./dayjs-T8SworZD.js";import"./copy-to-clipboard-gvHgSpPc.js";import"./toggle-selection-BHUZwh74.js";import"./@lezer-BVwoch6y.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const O=h({date:{adapter:f},theme:{defaultTheme:"dark",themes:{dark:{colors:{background:"#344955",primary:"#344955",secondary:"#50727B",info:"#D6DAC8",warning:"#EFBC9B",landing:"#D6DAC8"}},light:{colors:{background:"#D6DAC8",primary:"#D6DAC8",secondary:"#FBF3D5",info:"#344955",warning:"#EFBC9B",landing:"#D6DAC8"}}}}}),a="token",X=e=>{localStorage.setItem(a,e)},T=()=>{localStorage.removeItem(a)},C=()=>localStorage.getItem(a),V=()=>localStorage.getItem(a)!=null;var b={API_URL:"https://api.gournal.me"};const l=()=>{const e=encodeURIComponent(window.location.origin+"/oauth2/redirect");window.open(`${b.API_URL}/login/github?redirect_uri=${e}`,"_self")},w="/api",B=1e4,u=y.create({withCredentials:!0,baseURL:w,timeout:B,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}});u.interceptors.request.use(e=>{const r=C();return e.headers.Authorization="Bearer "+r,e},e=>(console.error(e),Promise.reject(e)));u.interceptors.response.use(e=>{const r=e.data;return!r.success&&r.error&&console.error(r),r.result},e=>{var r;return((r=e.response)==null?void 0:r.status)===401&&(T(),l()),console.error(e),Promise.reject(e)});const U=()=>u.get("/members");var k={API_URL:"https://api.gournal.me"};const d=v({history:E(k.BASE_URL),routes:[{path:"/",component:()=>n(()=>import("./Landing-BQDjexR-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))},{path:"/:pathMatch(.*)*",component:()=>n(()=>import("./404-DmYBuLJo.js"),__vite__mapDeps([10,9,1]))},{path:"/",component:()=>n(()=>import("./PageLayout-z9M2Khwr.js"),__vite__mapDeps([11,12,7,1,8,13,14,15,16,3,4,17,18,19,20,21,22])),meta:{requiresAuth:!0},children:[{name:"Pages",path:"/pages",component:()=>n(()=>import("./Page-Cxq_LS11.js"),__vite__mapDeps([23,14,1,13,7,8,12,15,16,3,4,17,18,19,20,21,22]))},{name:"Setting",path:"/settings",component:()=>n(()=>import("./Setting-BtCfA-Ye.js"),__vite__mapDeps([24,7,1,8,16,3,4,15,17,18,19,20,14,21,22]))}]},{path:"/",component:()=>n(()=>import("./EmptyLayout-CTKfGa41.js"),__vite__mapDeps([25,9,1])),children:[{name:"OAuth2",path:"/oauth2/redirect",component:()=>n(()=>import("./OAuth2-BcmYXdw-.js"),__vite__mapDeps([26,14,1,15,16,3,4,7,8,17,18,19,20,21,22]))},{name:"Edit",path:"/edit/:id",component:()=>n(()=>import("./Editor-CyP1ziU5.js"),__vite__mapDeps([27,28,29,1,17,18,19,20,30,3,4,31,32,33,34,35,36,37,38,39,40,41,42,43,14,13,21,7,8,9,15,16,44,22]))}]}]});d.beforeEach((e,r,s)=>{e.matched.some(t=>t.meta.requiresAuth)?V()?U().then(t=>{s()}):l():s()});function S(e){e.use(O).use(d)}const q=D({__name:"App",setup(e){return(r,s)=>{const i=P("router-view");return L(),I(A,null,{default:p(()=>[m(g,null,{default:p(()=>[m(i)]),_:1})]),_:1})}}}),_=R(q);S(_);_.mount("#app");export{U as g,u as i,l,X as s};
