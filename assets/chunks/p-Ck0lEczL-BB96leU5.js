import{ad as o,ae as s,af as r,ag as i,ah as d}from"../index-1dJPXL1s.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",(()=>{o((()=>{const n=document.elementFromPoint(e.innerWidth/2,e.innerHeight/2);if(!n)return;const t=s(n);t&&new Promise((a=>r(t,a))).then((()=>{i((async()=>{t.style.setProperty("--overflow","hidden"),await d(t,300),t.style.removeProperty("--overflow")}))}))}))}))};export{m as startStatusTap};
