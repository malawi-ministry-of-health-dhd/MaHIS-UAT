import{bQ as s,bR as r,bS as a,bT as i,bU as c}from"../index-LsXCTrho.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",(()=>{s((()=>{const n=document.elementFromPoint(e.innerWidth/2,e.innerHeight/2);if(!n)return;const t=r(n);t&&new Promise((o=>a(t,o))).then((()=>{i((async()=>{t.style.setProperty("--overflow","hidden"),await c(t,300),t.style.removeProperty("--overflow")}))}))}))}))};export{m as startStatusTap};
