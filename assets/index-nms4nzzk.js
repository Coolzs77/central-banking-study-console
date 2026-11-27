const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MockExamCanvas-C10zL4cT.js","./react-vendor-mS0RxIYh.js","./PracticeCanvas-n70glxcn.js","./SyncModal-DQQRplb2.js","./qrcode-DpynCwP9.js"])))=>i.map(i=>d[i]);
var Et=Object.defineProperty;var Dt=(t,s,d)=>s in t?Et(t,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[s]=d;var ie=(t,s,d)=>Dt(t,typeof s!="symbol"?s+"":s,d);import{r as Rt,a as qt,g as zt,b as r,M as Lt,P as ut,c as mt,S as Be,X as Je,T as $t,d as Qt,e as Bt,R as Ot,f as Kt,B as Gt,h as Ht,i as Jt,j as et,k as xt,l as We,m as Yt,L as tt,A as Ut,n as Ie,C as Wt,o as Ye,p as Vt,q as Xt,s as Zt,t as en,u as ft,v as tn,w as nn,x as bt,Z as sn}from"./react-vendor-mS0RxIYh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))I(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const o of g.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&I(o)}).observe(document,{childList:!0,subtree:!0});function d(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function I(h){if(h.ep)return;h.ep=!0;const g=d(h);fetch(h.href,g)}})();var He={exports:{}},Se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt;function rn(){if(nt)return Se;nt=1;var t=Rt(),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,h=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function o(_,k,L){var u,v={},M=null,Q=null;L!==void 0&&(M=""+L),k.key!==void 0&&(M=""+k.key),k.ref!==void 0&&(Q=k.ref);for(u in k)I.call(k,u)&&!g.hasOwnProperty(u)&&(v[u]=k[u]);if(_&&_.defaultProps)for(u in k=_.defaultProps,k)v[u]===void 0&&(v[u]=k[u]);return{$$typeof:s,type:_,key:M,ref:Q,props:v,_owner:h.current}}return Se.Fragment=d,Se.jsx=o,Se.jsxs=o,Se}var st;function on(){return st||(st=1,He.exports=rn()),He.exports}var e=on(),$e={},rt;function an(){if(rt)return $e;rt=1;var t=qt();return $e.createRoot=t.createRoot,$e.hydrateRoot=t.hydrateRoot,$e}var ln=an();const cn=zt(ln),dn="modulepreload",pn=function(t,s){return new URL(t,s).href},it={},Ve=function(s,d,I){let h=Promise.resolve();if(d&&d.length>0){let o=function(u){return Promise.all(u.map(v=>Promise.resolve(v).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};const _=document.getElementsByTagName("link"),k=document.querySelector("meta[property=csp-nonce]"),L=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));h=o(d.map(u=>{if(u=pn(u,I),u in it)return;it[u]=!0;const v=u.endsWith(".css"),M=v?'[rel="stylesheet"]':"";if(!!I)for(let C=_.length-1;C>=0;C--){const p=_[C];if(p.href===u&&(!v||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${M}`))return;const m=document.createElement("link");if(m.rel=v?"stylesheet":dn,v||(m.as="script"),m.crossOrigin="",m.href=u,L&&m.setAttribute("nonce",L),document.head.appendChild(m),v)return new Promise((C,p)=>{m.addEventListener("load",C),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function g(o){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=o,window.dispatchEvent(_),!_.defaultPrevented)throw o}return h.then(o=>{for(const _ of o||[])_.status==="rejected"&&g(_.reason);return s().catch(g)})},hn=[{id:"ivory",name:"道林考卷",swatch:"#fbf8f1",darkSwatch:"#191815",previewPattern:"linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(176,158,128,0.12) 100%)"},{id:"parchment",name:"古典羊皮纸",swatch:"#f4ead2",darkSwatch:"#1c1813",previewPattern:"radial-gradient(circle at 50% 45%, transparent 45%, rgba(139,98,42,0.22) 100%)"},{id:"sage",name:"豆沙护眼",swatch:"#f1f7f2",darkSwatch:"#141b17",previewPattern:"linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(114,148,124,0.14) 100%)"},{id:"kraft",name:"温润牛皮",swatch:"#efe3cd",darkSwatch:"#1b1713",previewPattern:"radial-gradient(circle at 50% 50%, transparent 40%, rgba(110,80,42,0.2) 100%)"},{id:"grid",name:"康奈尔方格",swatch:"#fcfaf5",darkSwatch:"#141820",previewPattern:"linear-gradient(to right, rgba(100,116,139,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.22) 1px, transparent 1px)"},{id:"lined",name:"横线稿纸",swatch:"#fdfbf6",darkSwatch:"#171614",previewPattern:"linear-gradient(to right, transparent 6px, rgba(225,29,72,0.32) 6px, rgba(225,29,72,0.32) 7px, transparent 7px), repeating-linear-gradient(to bottom, transparent 0px, transparent 5px, rgba(59,130,246,0.22) 5px, rgba(59,130,246,0.22) 6px)"},{id:"default",name:"极简白纸",swatch:"#ffffff",darkSwatch:"#151b26",previewPattern:"linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(148,163,184,0.1) 100%)"}],un=[{id:"system",name:"现代黑体",previewFont:'-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif'},{id:"song",name:"印刷宋体",previewFont:'"Source Han Serif SC", "Noto Serif SC", "Songti SC", "SimSun", serif'},{id:"kai",name:"温润楷体",previewFont:'"LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif'},{id:"fangsong",name:"清秀仿宋",previewFont:'"FangSong", "STFangsong", "FangSong_GB2312", serif'},{id:"yuanti",name:"柔和圆体",previewFont:'"Hiragino Sans GB", "YouYuan", "STYuanti", "Microsoft YaHei", sans-serif'},{id:"serif-mix",name:"学术混排",previewFont:'"Times New Roman", "Songti SC", "Noto Serif SC", "SimSun", serif'},{id:"mono-clean",name:"等宽精读",previewFont:'"JetBrains Mono", "Cascadia Code", "Consolas", "Microsoft YaHei", monospace'}],mn=({searchQuery:t,onSearchChange:s,onOpenSync:d,onToggleMobileMenu:I,onToggleMobileRightDrawer:h,isLeftCollapsed:g=!1,onToggleLeftCollapsed:o,isRightCollapsed:_=!1,onToggleRightCollapsed:k,paperTheme:L="ivory",onChangePaperTheme:u,fontTheme:v="system",onChangeFontTheme:M,fontSize:Q=16,onChangeFontSize:m})=>{const[C,p]=r.useState(()=>document.documentElement.classList.contains("dark")),y=()=>{const w=!C;p(w);const j=document.querySelector('meta[name="theme-color"]');w?(document.documentElement.classList.add("dark"),localStorage.setItem("cb_theme","dark"),j&&j.setAttribute("content","#0f0d0a")):(document.documentElement.classList.remove("dark"),localStorage.setItem("cb_theme","light"),j&&j.setAttribute("content","#e7dfd0"))},[l,b]=r.useState("stopwatch"),[A,n]=r.useState(0),[i,x]=r.useState(1500),[c,F]=r.useState(!1),[E,$]=r.useState(!1),[B,z]=r.useState(!1),[ee,Y]=r.useState(!1),G=r.useRef(null),S=r.useRef(null),T=r.useRef(null),N=r.useRef(null);r.useEffect(()=>{const w=j=>{const V=j.target,te=V&&(["INPUT","TEXTAREA","SELECT"].includes(V.tagName)||V.isContentEditable);j.key==="/"&&!te&&!j.ctrlKey&&!j.metaKey&&!j.altKey?(j.preventDefault(),G.current&&G.current.offsetParent!==null?G.current.focus():(Y(!0),requestAnimationFrame(()=>{var he;return(he=S.current)==null?void 0:he.focus()}))):j.key==="Escape"&&(E&&$(!1),B&&z(!1),V&&(V===G.current||V===S.current)&&(t&&s(""),V.blur(),Y(!1)))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[E,B,t,s]),r.useEffect(()=>{if(!E&&!B)return;const w=j=>{E&&T.current&&!T.current.contains(j.target)&&$(!1),B&&N.current&&!N.current.contains(j.target)&&z(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[E,B]),r.useEffect(()=>{let w=null;return c&&(w=setInterval(()=>{l==="stopwatch"?n(j=>j+1):x(j=>j<=1?(F(!1),0):j-1)},1e3)),()=>clearInterval(w)},[c,l]);const D=w=>{const j=Math.floor(w/60),V=w%60;return`${j.toString().padStart(2,"0")}:${V.toString().padStart(2,"0")}`},X=()=>{F(!1),l==="stopwatch"?n(0):x(1500)};return e.jsxs("header",{className:"sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf6ed]/90 dark:bg-[#161411]/90 border-b border-stone-300/70 dark:border-stone-800 transition-colors",children:[e.jsxs("div",{className:"w-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[I&&e.jsx("button",{onClick:I,"aria-label":"切换章节导航",className:"md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg",children:e.jsx(Lt,{className:"w-5 h-5","aria-hidden":"true"})}),o&&e.jsx("button",{onClick:o,"aria-label":g?"展开左侧导航栏":"折叠左侧导航栏",className:"hidden md:inline-flex p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer",children:g?e.jsx(ut,{className:"w-5 h-5","aria-hidden":"true"}):e.jsx(mt,{className:"w-5 h-5","aria-hidden":"true"})}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg clay-button-shadow select-none",children:"央"}),e.jsx("h1",{className:"text-xl font-bold tracking-tight text-slate-900 dark:text-white",children:"中央银行学"})]})]}),e.jsx("div",{className:"flex-1 max-w-md hidden sm:block relative",children:e.jsxs("div",{className:"relative",children:[e.jsx(Be,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500","aria-hidden":"true"}),e.jsx("input",{ref:G,type:"text",name:"globalSearch","aria-label":"搜索题目或关键词",autoComplete:"off",value:t,onChange:w=>s(w.target.value),placeholder:"搜索题目或关键词…",className:"w-full pl-10 pr-9 py-1.5 text-sm rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus:border-sky-500 transition-colors clay-inset-groove"}),t&&e.jsx("button",{onClick:()=>s(""),"aria-label":"清空搜索",className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(Je,{className:"w-3.5 h-3.5","aria-hidden":"true"})})]})}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[e.jsx("button",{onClick:()=>{Y(w=>!w),requestAnimationFrame(()=>{var w;return(w=S.current)==null?void 0:w.focus()})},"aria-label":"搜索题目","aria-expanded":ee,className:"sm:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 clay-button-shadow clay-squash",children:e.jsx(Be,{className:"w-4 h-4","aria-hidden":"true"})}),e.jsxs("div",{className:"relative",ref:T,children:[e.jsxs("div",{className:"flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono font-medium clay-badge-shadow",children:[e.jsxs("button",{onClick:()=>$(!E),"aria-label":"切换计时模式","aria-expanded":E,"aria-haspopup":"menu",className:"flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors",children:[e.jsx($t,{className:"w-3.5 h-3.5 text-sky-500","aria-hidden":"true"}),e.jsx("span",{className:"tabular-nums",children:D(l==="stopwatch"?A:i)})]}),e.jsx("button",{onClick:()=>F(!c),"aria-label":c?"暂停计时":"开始计时",className:"p-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400",children:c?e.jsx(Qt,{className:"w-3.5 h-3.5","aria-hidden":"true"}):e.jsx(Bt,{className:"w-3.5 h-3.5","aria-hidden":"true"})}),e.jsx("button",{onClick:X,"aria-label":"重置计时",className:"p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(Ot,{className:"w-3 h-3","aria-hidden":"true"})})]}),E&&e.jsxs("div",{className:"absolute right-0 mt-2 w-48 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl z-50 text-xs",children:[e.jsx("div",{className:"font-semibold text-slate-700 dark:text-slate-300 mb-1.5 px-2",children:"计时模式"}),e.jsx("button",{onClick:()=>{b("stopwatch"),F(!1),n(0),$(!1)},className:`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${l==="stopwatch"?"bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium":"hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"}`,children:"正向计时"}),e.jsx("button",{onClick:()=>{b("pomodoro"),F(!1),x(1500),$(!1)},className:`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${l==="pomodoro"&&i===1500?"bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium":"hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"}`,children:"番茄钟 25m"}),e.jsx("button",{onClick:()=>{b("pomodoro"),F(!1),x(2700),$(!1)},className:`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${l==="pomodoro"&&i===2700?"bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium":"hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400"}`,children:"长专注 45m"})]})]}),e.jsx("button",{onClick:d,"aria-label":"跨设备同步与数据备份",className:"p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash",children:e.jsx(Kt,{className:"w-4 h-4","aria-hidden":"true"})}),(u||M||m)&&e.jsxs("div",{className:"relative",ref:N,children:[e.jsx("button",{type:"button",onClick:()=>z(w=>!w),"aria-label":"纸张与字体设置","aria-expanded":B,"aria-haspopup":"menu",className:`p-2 rounded-xl border clay-button-shadow clay-squash transition-colors cursor-pointer ${B?"bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700":"text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100/90 dark:bg-slate-800/90 border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"}`,children:e.jsx(Gt,{className:"w-4 h-4","aria-hidden":"true"})}),B&&e.jsxs("div",{role:"menu","aria-label":"纸张质感与阅读字体",className:"absolute right-0 mt-2 w-72 sm:w-80 p-3.5 rounded-2xl bg-white dark:bg-[#151b26] border border-slate-200 dark:border-slate-700 shadow-2xl z-50 space-y-3.5 overscroll-contain",children:[u&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[11px] font-bold text-slate-500 dark:text-slate-400",children:"纸张质感 (7)"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:hn.map(w=>{const j=L===w.id;return e.jsxs("button",{type:"button",role:"menuitemradio","aria-checked":j,onClick:()=>u(w.id),className:`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer text-left ${j?"border-sky-500 bg-sky-50/70 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300":"border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70"}`,children:[e.jsx("span",{className:"w-4 h-4 rounded-md border border-black/15 dark:border-white/20 shrink-0",style:{backgroundColor:C?w.darkSwatch:w.swatch,backgroundImage:w.previewPattern},"aria-hidden":"true"}),e.jsx("span",{className:"truncate",children:w.name})]},w.id)})})]}),M&&e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800",children:[e.jsx("div",{className:"text-[11px] font-bold text-slate-500 dark:text-slate-400",children:"阅读字体 (7)"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:un.map(w=>{const j=v===w.id;return e.jsx("button",{type:"button",role:"menuitemradio","aria-checked":j,onClick:()=>M(w.id),style:{fontFamily:w.previewFont},className:`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer text-left truncate ${j?"border-sky-500 bg-sky-50/70 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300":"border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70"}`,children:w.name},w.id)})})]}),m&&e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800",children:[e.jsx("div",{className:"text-[11px] font-bold text-slate-500 dark:text-slate-400",children:"正文字号"}),e.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>m(Math.max(13,Q-1)),disabled:Q<=13,"aria-label":"减小字号",className:"py-1.5 rounded-xl text-xs font-bold border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 disabled:opacity-40 transition-colors cursor-pointer",children:"A-"}),e.jsxs("button",{type:"button",onClick:()=>m(16),"aria-label":"恢复默认字号 16px","aria-live":"polite",className:"py-1.5 rounded-xl text-xs font-semibold border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors cursor-pointer tabular-nums",children:["A ",Q,"px"]}),e.jsx("button",{type:"button",onClick:()=>m(Math.min(22,Q+1)),disabled:Q>=22,"aria-label":"增大字号",className:"py-1.5 rounded-xl text-xs font-bold border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 disabled:opacity-40 transition-colors cursor-pointer",children:"A+"})]})]})]})]}),e.jsx("button",{onClick:y,"aria-label":C?"切换至明亮模式":"切换至暗黑模式",className:"p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash",children:C?e.jsx(Ht,{className:"w-4 h-4","aria-hidden":"true"}):e.jsx(Jt,{className:"w-4 h-4","aria-hidden":"true"})}),k&&e.jsx("button",{onClick:k,"aria-label":_?"展开右侧栏":"折叠右侧栏",className:"hidden lg:inline-flex p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash transition-colors cursor-pointer",children:_?e.jsx(et,{className:"w-4 h-4","aria-hidden":"true"}):e.jsx(xt,{className:"w-4 h-4","aria-hidden":"true"})}),h&&e.jsx("button",{onClick:h,"aria-label":"打开题号矩阵与大纲",className:"lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash",children:e.jsx(et,{className:"w-4 h-4","aria-hidden":"true"})})]})]}),ee&&e.jsx("div",{className:"sm:hidden px-4 pb-3",children:e.jsxs("div",{className:"relative",children:[e.jsx(Be,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500","aria-hidden":"true"}),e.jsx("input",{ref:S,type:"text",name:"mobileGlobalSearch","aria-label":"搜索题目或关键词",autoComplete:"off",value:t,onChange:w=>s(w.target.value),placeholder:"搜索题目或关键词…",className:"w-full pl-10 pr-9 py-2 text-sm rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus:border-sky-500 clay-inset-groove"}),t&&e.jsx("button",{onClick:()=>s(""),"aria-label":"清空搜索",className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(Je,{className:"w-4 h-4","aria-hidden":"true"})})]})})]})},xn=({currentMode:t,onSelectMode:s,chapters:d,selectedChapterId:I,onSelectChapter:h,memorizedList:g,recitationQuestions:o,homeworkCompleted:_,homeworkQuestions:k,className:L="",onCloseMobile:u,isCollapsed:v=!1,onToggleCollapse:M})=>{const Q=[{id:"recitation",name:"全书速记",icon:We,color:"text-blue-600 dark:text-blue-400"},{id:"homework",name:"平时作业本",icon:Yt,color:"text-emerald-600 dark:text-emerald-400"},{id:"practice",name:"题型专项",icon:tt,color:"text-indigo-600 dark:text-indigo-400"},{id:"mock-exam",name:"期末模考",icon:Ut,color:"text-amber-600 dark:text-amber-400"}],m=p=>{if(t==="homework"){const y=k.filter(n=>n.chapterId===p),l=y.length,b=y.filter(n=>_.includes(n.id)).length,A=l>0?Math.round(b/l*100):0;return{completed:b,total:l,pct:A}}else{const y=o.filter(n=>n.chapterId===p),l=y.length,b=y.filter(n=>g.includes(n.id)).length,A=l>0?Math.round(b/l*100):0;return{completed:b,total:l,pct:A}}},C=p=>["🏛️","⚖️","📑","🏦","📈","💳","🎯","🛠️","🔄","🛡️","🔍"][p-1]||"📌";return v?e.jsxs("aside",{className:`w-16 flex-shrink-0 flex flex-col items-center h-[calc(100vh-4rem)] sticky top-16 border-r border-stone-300/70 dark:border-stone-800 bg-[#f6f1e7]/95 dark:bg-[#161411]/95 backdrop-blur-md py-4 px-2 gap-4 transition-colors duration-200 ${L}`,children:[M&&e.jsx("button",{onClick:M,"aria-label":"展开左侧导航栏",title:"展开左侧栏",className:"w-10 h-10 rounded-md flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-blue-600 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer",children:e.jsx(ut,{className:"w-5 h-5"})}),e.jsx("div",{className:"w-8 h-px bg-stone-300/70 dark:bg-stone-800"}),e.jsx("div",{className:"flex flex-col gap-2",children:Q.map(p=>{const y=p.icon,l=t===p.id;return e.jsx("button",{onClick:()=>s(p.id),"aria-label":p.name,title:p.name,className:`w-10 h-10 rounded-md flex items-center justify-center transition-colors cursor-pointer ${l?"bg-stone-900 text-stone-50 dark:bg-amber-500/20 dark:text-amber-300 border-l-2 border-amber-500":"text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800/70"}`,children:e.jsx(y,{className:`w-5 h-5 ${l?"":p.color}`})},p.id)})})]}):e.jsxs("aside",{className:`w-76 lg:w-80 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-stone-300/70 dark:border-stone-800 bg-[#f6f1e7]/95 dark:bg-[#161411]/95 backdrop-blur-md p-4 overflow-y-auto overscroll-contain gap-5 transition-colors duration-200 ${L}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-1 pb-2 border-b border-stone-300/70 dark:border-stone-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(tt,{className:"w-4 h-4 text-amber-700 dark:text-amber-400"}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400",children:"导航"})]}),M&&e.jsx("button",{onClick:M,"aria-label":"折叠左侧导航栏",title:"折叠左侧栏",className:"hidden md:inline-flex p-1.5 rounded-md text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer",children:e.jsx(mt,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"flex flex-col",children:Q.map(p=>{const y=p.icon,l=t===p.id;return e.jsx("button",{onClick:()=>{s(p.id),u&&u()},className:`flex items-center justify-between px-3 py-2.5 text-xs sm:text-sm font-semibold border-b border-dashed border-stone-300/70 dark:border-stone-800 border-l-2 transition-colors cursor-pointer ${l?"border-l-amber-600 dark:border-l-amber-400 bg-amber-500/10 text-stone-900 dark:text-amber-100 font-bold":"border-l-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/40"}`,children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx(y,{className:`w-4 h-4 ${l?"text-amber-700 dark:text-amber-400":p.color}`}),e.jsx("span",{children:p.name})]})},p.id)})})}),e.jsxs("div",{className:"flex flex-col gap-2 flex-1 min-h-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-1",children:[e.jsx("span",{className:"text-[11px] font-semibold text-stone-600 dark:text-stone-400",children:"章节 (11)"}),e.jsx("button",{onClick:()=>h(null),className:`text-xs font-semibold transition-colors cursor-pointer ${I===null?"text-amber-700 dark:text-amber-400 font-bold":"text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"}`,children:"全部章节"})]}),e.jsx("div",{className:"flex flex-col overflow-y-auto overscroll-contain pr-0.5",children:d.map(p=>{const y=I===p.id,l=m(p.id),b=p.title.replace(/^第[一二三四五六七八九十0-9]+章\s*/,"");return e.jsxs("button",{onClick:()=>{h(y?null:p.id),u&&u()},className:`text-left px-2.5 py-2.5 border-b border-dashed border-stone-300/70 dark:border-stone-800/90 border-l-2 transition-colors flex flex-col gap-1.5 text-xs cursor-pointer ${y?"border-l-amber-600 dark:border-l-amber-400 bg-amber-500/10 font-semibold text-stone-900 dark:text-amber-100":"border-l-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/40"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-1.5 w-full",children:[e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsx("span",{className:"text-sm shrink-0",children:C(p.id)}),e.jsxs("span",{className:"truncate font-semibold",children:["第",p.id,"章 ",b]})]}),e.jsxs("span",{className:`text-[11px] font-mono font-bold flex-shrink-0 tabular-nums ${l.pct===100?"text-emerald-700 dark:text-emerald-400":"text-stone-600 dark:text-stone-400"}`,children:[l.completed,"/",l.total]})]}),e.jsx("div",{className:"w-full h-1 rounded-full bg-stone-300/70 dark:bg-stone-800 overflow-hidden",children:e.jsx("div",{className:`h-full rounded-full transition-colors duration-300 ${l.pct===100?"bg-emerald-500":l.pct>0?"bg-amber-600 dark:bg-amber-500":"bg-transparent"}`,style:{width:`${l.pct}%`}})})]},p.id)})})]})]})},fn={1:["工业革命","货币经营业","经济危机","信用业蓬勃发展"],2:["财政入不敷出","分散发行银行券","资金周转不灵","票据清算机构","殊性决定了对金"],3:["1656年","布鲁塞尔","通货膨胀","民族独立和国家主权"],4:["瑞典银行","英格兰银行","美联储","联邦储备法"],5:["一元式","一级中央银行机构","代行中央银行部分职能","货币联盟"],6:["国有中央银行","金融机构集体","半国有化中央银行","各成员共同所有","无资本金"],7:["董事会或理事会","决策机构和执行机构","主要的决策机构","制衡机制"],8:["参谋顾问","负责日常行","执行货币","贯彻执行金融政策"],9:["垂直领导","派出机构","有利于中央银行","将经济区划与行"],10:["借贷式","经济手段","宏观金融活动","独占货币发行权"],11:["硬辅币","金本位","发行的银行","所有国家的纸币"],12:["存款准备金","最后贷款人","再贴现","数国家商业银行"],13:["国家财政收支","国家公债","黄金和外汇储备","政府顾问"],14:["数字经济","通过提供货币","具体表现为三个趋势","机遇与挑战并存","成三部门经济体系"],15:["基础货币","货币政策手段","资金清算中心","国际金融谈判"],16:["长期目标","通货膨胀","经济手段","约束作用","决策与实施统一"],17:["货币发行权","操作执行权","管理权","控制权","制裁权"],18:["子系统","组成部门","国家授权","根本利益"],19:["宏观经济目标","金融活动","短期行为","协调发展"],20:["议会或者国会","名义上独立性较弱","财政部的指令","独立性"],21:["行政隶属关系","专门管理机构","银行的银行","其他部门"],22:["国务院批准","货币政策委员会","制定和执行货币政策","履行职责"],23:["立法宗旨","理事会或管理委员会","货币政策目标","银行性业务","法律责任","每一会"],24:["金融法规","黄金、外汇储备","代理国库","稽核","金融统计","会计核算","其他业务"],25:["垄断货币发行权","存款准备金","买卖证券","最后贷款人","全国清算"],26:["一般性银行业务","提供担保","承兑与贴现","不动产买卖","商业性证券投资","财政透支"],27:["管理金融的职责","不以盈利为目标","一般商业银行业务","流动性","公开性","主动性","法定范围内"],28:["货币资金","资产负债业务","最高金融管理当局","法定特权"],29:["调控社会货币供应量","法定存款准备金比率","银行体系安全","支付系统","调节现金发行量与货币结构"],30:["强制性","稳定币值","普通居民和企业","纯粹的经济关系","管理者与被管理者的关系"],31:["自存准备","法定存款准备金","超额存款准备金","政策手段","使用主动权"],32:["清偿能力","货币乘数","结构调整","低成本甚至是无成本"],33:["随时可以兑现","库存现金","法定准备金","最容易变现","国库券"],34:["统一准备金比率制","差别存款准备金比率","调整幅度","货币乘数"],35:["缴存法定存款准备金","日平均余额","月平均余额","当期准备金账户制","前期准备金账户制"],36:["银行业金融机构","只对存款计提准备金","中国人民银行","库存现金","前期准备金账户制"],37:["法定存款准备金率","差别存款准备金率","资本充足率","支付利息"],38:["账户资金往来","及时入库","按时拨付","制定和实施货币政策"],39:["法定存款准备金","支付准备金","贸易结算和债务清算","特定机构","宏观调控"],40:["特殊目的","一般为一年","及时足额","少面向所有的金"],41:["发行库","业务库","流通手段和支付手段","对持有者的负债"],42:["经济发行","正常的信贷渠道","财政发行","弥补国家财政赤字"],43:["提供贷款","商业票据再贴现","收购金银和外汇","反向组织货币的回笼"],44:["高度集中于中央银行","黄金或有价证券","财政发行","伸缩性和灵活性"],45:["黄金和外汇","短期商业票据","超额发行税","十足的现金","日本、英国","最高增加额"],46:["印制权和发行权","国民经济需要","商品物资","发行计划"],47:["发行库","业务库","业务库存限额","发行基金","现金回笼"],48:["发行计划","逐级分配指标","现金出入库","调拨命令"],49:["记名式有价证券","调节流通中的货币","回笼资金","有效控制货币供应量"],50:["紧缩的货币政策","经过特许的金融机构","流通中的货币量","备用工具"],51:["国际收支逆差","国际贷款","外汇储备不足","干预市场"],52:["资金周转不灵","源与流","基础货币","再贴现利率"],53:["开设账户","真实票据","未到期的合法票据","惩罚性","再贴现利息","再贴现金额","逾期贷款"],54:["创造或冲销自身的负债","转让价格","准备金存款","倍数扩张"],55:["临时性短缺资金","非货币金融机构","短期性供应","国外资产"],56:["收缩银根","紧缩货币供应量","证券需求","利率结构"],57:["创造的负债","货币乘数","超额储备","直接控制"],58:["逆向操作","利息收入","买卖价差","证券质量","有价证券市场"],59:["政府债券、国库券","二级市场","回购和现券交易","可逆转性"],60:["国际支付手段的准备金","稳定币值","浮动汇率制度","国际收支"],61:["国际收支顺差","有管理的浮动汇率制度","意愿结售汇","安全性、流动性和收益性"],62:["存款准备金账户","公开市场操作","在途资金","支付系统安全"],63:["票据交换所","规则、机构和技术机制","支付结算制度","债权债务清偿"],64:["净结算头寸","日间信贷","一一对应结算","系统风险"],65:["票据交换","异地资金转移","跨国清算系统","CGO","BOJ-NET"],66:["双边或多边轧差","连续（实时）","单笔交易金额巨大","批量、定时"],67:["国际金融合作","不同国家的货币","清算安排","跨国支付系统","国家利益与金融安全"],68:["清偿力危机","到期日","多米诺骨牌效应","零点规则","技术性故障","内部作案"],69:["核心原则","透支头寸","风险防控机制","实时全额结算","小额零售支付系统","识别可能的风险"],70:["全额实时清算","净借记限额管理","会计核算业务处理","8种货币","5万元及以下"],71:["货币供给量","宏观经济政策","总需求","其含义"],72:["稳定币值","经济稳定增长","充分就业","国际收支平衡","宏观经济","自然失业率","国际收支","防范严重的货币"],73:["宏观经济政策","需求管理","间接调控","长期性","微观经济主体","消费、投资","市场主体","长期目标"],74:["最终目标","政策工具","中介指标","传导机制"],75:["扩张型货币政策","紧缩型货币政策","基准利率","公开市场"],76:["信贷政策","利率政策","外汇政策","社会信用总量","市场利率","国际资本流动","汇率政策"],77:["最终目标","中介指标","操作指标","可控性","宏观经济目标"],78:["社会分配不公","价格信号失真","来临时贷出资金","效配置资源","货膨胀造成货币"],79:["消费物价指数","批发物价指数","GNP平减指数","物价变动幅度","容忍"],80:["潜在水平","通货膨胀","长期稳定","货币量"],81:["自然失业率","摩擦性失业","失业率","扩张性货币政策","自然失业"],82:["国际收支","逆差","顺差","汇率政策","资本项目","货币与金融危机"],83:["奥肯定律","劳动密集型","充分就业","经济增长之间既"],84:["菲利普斯曲线","奥肯定律","通货膨胀","稳定币"],85:["紧缩型货币政策","扩张型货币政策","逆差","顺差"],86:["单目标论","双目标论","多目标论","单一目标","双重目标","相对重点"],87:["稳定币值","经济高涨","经济萧条","相对重点","国际收支平衡"],88:["可测性","可控性","抗干扰性","作为中介指标","迅速获取这些指标","操作指标","准确地反映货币"],89:["货币供给量","货币乘数","超额准备率","时滞"],90:["名义利率","预期实际利率","利率弹性","仅能够反映货币"],91:["货币需求曲线","利率波动","货币供给总量","公开市场"],92:["可测性","可控性","抑制通货膨胀","货币供应量","预期实际利率"],93:["贷款量","通货膨胀率","货币流通速度","发展中国家","数据易获得"],94:["借入储备","非借入储备","银根","是中央银行"],95:["基础货币","强力货币","流通中现金","操作指标","货币乘数"],96:["存款准备金率","超额准备","支付和清算","存款准备金","超额准备金","货币政策工具"],97:["流动性","信贷资金","货币供给总量","准备金结构","清偿力","同业","货币乘数"],98:["强烈振荡","流动性困境","它对所有存款","法定存款准备金"],99:["再贴现率","再贴现贷款","政策是中央银行","或降低再贴现率"],100:["信贷结构","告示作用","最后贷款人","再贴现率","货币供给量"],101:["告示效应","利差","再贴现率","货币供给量"],102:["有价证券","利率结构","超额储备","务是指中央银行"],103:["保卫性目标","主动性目标","存款货币银行","货币政策目标"],104:["灵活精巧","伸缩性","可逆转性","存款准备金","交易商","完全受中央银行","可以进行经常性","当中央银行"],105:["告示作用","有价证券市场","如果市场发育程度不够","务作为一种货币"],106:["消费者信用控制","证券市场信用控制","不动产信用控制","优惠利率","耐用消费品","有价证券","不动产抵押贷款","品规定较低利率"],107:["利率控制","信用配额管理","流动性比率","存贷款","信贷分配","拒绝再贴现"],108:["道义劝告","窗口指导","威望","是指中央银行"],109:["定向降准","普遍降准","再贴现","涉农票据","信贷结构"],110:["短期流动性调节工具","SLO","央行票据互换","CBS","临时性波动","银行永续债"],111:["SLF","MLF","PSL","TMLF","政策性银行","中短期抵押贷款","政策性金融机构"],112:["MS","流动性偏好","投资利率弹性","利率变动"],113:["凯恩斯陷阱","利率弹性","有价证券","投资乘数"],114:["托宾","重置成本","米什金","耐用消费品"],115:["持久性收入","弗里德曼","信贷渠道","货币需求","货币渠道"],116:["外部融资溢价","银行贷款渠道","资产负债表渠道","流动性效应","准备金头寸","净资产"],117:["预算约束","利润最大化","自主经营权","家庭预算"],118:["信息不对称","包括三个方面","也深刻影响货币","一的市场给货币"],119:["内部时滞","认识时滞","外部时滞","操作时滞","市场时滞"],120:["6～9个月","1年至2年","时滞","名义收入"],121:["内生变量","外生变量","AD-AS","逆经济风向","最终目标","通货-存款比率"],122:["双紧","双松","紧财政、松信贷","松财政、紧信贷","中介变量","总需求","投资支出","一松一紧"],123:["双支柱","宏观审慎","逆周期","系统性风险","事前—事中—事后","系统风险"],124:["国际本位货币","布雷顿森林体系","牙买加体系","SDR","金本位","多极化"],125:["囚徒困境","汇率政策","利率政策","国际金融市场"],126:["货币危机","银行业危机","按期偿付债务","外国债务危机","系统性金融危机","信用基础","投机性袭击","暂缓偿债"],127:["金融脆弱性理论","剧烈波动","多米诺骨牌效应","泡沫","金融危机具有破坏性"],128:["财政赤字论","财政赤字","自我实现论","成本收益权衡","道德风险","资产负债表效应","克鲁格曼","奥布斯特费尔德","麦金农","阿吉翁"],129:["货币政策失误","货币需求","套期保值型","流动性要求","货币因素","弗里德曼","明斯基","D-D模型","托宾"],130:["过度负债","通货紧缩","中心国家","边缘国家","资产负债率","欧文·费雪","苏特","沃尔芬森"],131:["超周期变化","金融协调","汇率制度","外汇储备","八类应对资本流入对策"],132:["维护存款人信心","全面担保","注资","有毒资产","专项基金"],133:["重组金融机构","优化金融系统","实体经济","量化宽松"],134:["中国金融稳定报告","金融监管政策","应立足整个金","金融稳定并非固化"],135:["系统性金融风险","金融安全","金融结构体系","资源配置效率"],136:["宏观经济","定量指标","27个指标","4个指标"],137:["包括政治保障","包括利率调控","包括支付体系","维护金"],138:["金融安全","经济安全","FSAP","FSIs","14项核心指标","26项鼓励指标"],139:["基于规则","公平与效率","狭义的金融监管","现象"],140:["战略资源","资金枢纽","利率风险","汇率风险","金融秩序","公平竞争","金融业"],141:["公共产品","搭便车","财务杠杆","内在不稳定","效率与稳定","为了控制金"],142:["捕获理论","卡特尔管制","公共选择","特殊利益"],143:["强制性监管法规","紧缩性","泡沫经济","标的实现是货币"],144:["存款人","金融消费者","公平竞争","目标可"],145:["操作自主权","适度竞争","安全与稳健","最低的成本","包括两方面","强化自我约束"],146:["财产基础","资本充足性","8%","支付危机","最后贷款人"],147:["现场检查","非现场检查","资本充足性","资产质量","CAMEL"],148:["牵头监管机构","两类监管机构","伞形","美联储","对于不同的金","证券"],149:["单一监管体制","宏观审慎监管","巴塞尔协议III","国际监管组织","协调发展"],150:["1984年","分业经营","分业监管","国家金融监督管理总局","2023年"],151:["集中统一领导","宏观调控体系","除证券业之外","证券业","统一领导金"],152:["混业经营","金融控股集团","风险预警不及时","跨市场金融创新","对中国原有的金"],153:["宏观审慎监管指标","顺周期性","系统重要性","资本充足性","非理性","单个金"],154:["系统性风险","系统重要性金融机构","审慎监管侧重金","增强彼此的监管效果"],155:["资本缓冲","流动性压力","杠杆率","拨备","抵质押品价值比率"],156:["4.5%","1%","评级公司","中央对手方","影子银行","或有资本"],157:["银行牌照","50%","存贷比例","流量法","存量法"],158:["政策性金融机构","合规性","合作金融机构","80%"],159:["认可论","业务准入","现场监管","非现场监管","注册会计师"],160:["再贴现","时间优先","价格优先","短期使用"],161:["注册制","核准制","认可制","内幕交易","市场操纵"],162:["外汇市场","国际收支平衡","黄金市场","上海黄金交易所"]},It=["调节现金发行量与货币结构","安全性、流动性和收益性","管理者与被管理者的关系","代行中央银行部分职能","八类应对资本流入对策","创造或冲销自身的负债","国家金融监督管理总局","国际支付手段的准备金","如果市场发育程度不够","有管理的浮动汇率制度","规则、机构和技术机制","低成本甚至是无成本","具体表现为三个趋势","决策机构和执行机构","制定和实施货币政策","制定和执行货币政策","反向组织货币的回笼","只对存款计提准备金","国家利益与金融安全","增强彼此的监管效果","差别存款准备金比率","有效控制货币供应量","民族独立和国家主权","法定存款准备金比率","流通手段和支付手段","理事会或管理委员会","短期流动性调节工具","系统重要性金融机构","经过特许的金融机构","缴存法定存款准备金","调控社会货币供应量","贸易结算和债务清算","金融危机具有破坏性","高度集中于中央银行","一级中央银行机构","一般商业银行业务","中国金融稳定报告","事前—事中—事后","会计核算业务处理","前期准备金账户制","半国有化中央银行","单笔交易金额巨大","名义上独立性较弱","宏观审慎监管指标","小额零售支付系统","差别存款准备金率","巴塞尔协议III","弥补国家财政赤字","当期准备金账户制","成三部门经济体系","抵质押品价值比率","政府债券、国库券","最高金融管理当局","未到期的合法票据","法定存款准备金率","统一准备金比率制","证券市场信用控制","调节流通中的货币","贯彻执行金融政策","迅速获取这些指标","金融稳定并非固化","14项核心指标","26项鼓励指标","BOJ-NET","GNP平减指数","一的市场给货币","一般性银行业务","上海黄金交易所","不以盈利为目标","不动产信用控制","不动产抵押贷款","不同国家的货币","中短期抵押贷款","临时性短缺资金","主要的决策机构","也深刻影响货币","仅能够反映货币","伸缩性和灵活性","信用业蓬勃发展","决策与实施统一","净借记限额管理","准确地反映货币","分散发行银行券","务作为一种货币","务是指中央银行","印制权和发行权","双边或多边轧差","可以进行经常性","各成员共同所有","品规定较低利率","商业性证券投资","商业票据再贴现","回购和现券交易","垄断货币发行权","多米诺骨牌效应","奥布斯特费尔德","存款准备金账户","完全受中央银行","审慎监管侧重金","对中国原有的金","对持有者的负债","将经济区划与行","少面向所有的金","布雷顿森林体系","强制性监管法规","或降低再贴现率","所有国家的纸币","扩张型货币政策","扩张性货币政策","收购金银和外汇","政策性金融机构","政策是中央银行","数国家商业银行","普通居民和企业","有利于中央银行","机遇与挑战并存","来临时贷出资金","松财政、紧信贷","标的实现是货币","正常的信贷渠道","殊性决定了对金","法定存款准备金","流通中的货币量","消费者信用控制","独占货币发行权","狭义的金融监管","管理金融的职责","系统性金融危机","系统性金融风险","紧缩型货币政策","紧缩的货币政策","紧缩货币供应量","紧财政、松信贷","纯粹的经济关系","经济增长之间既","维护存款人信心","董事会或理事会","记名式有价证券","识别可能的风险","货币与金融危机","货币政策委员会","货膨胀造成货币","资产负债表效应","资产负债表渠道","超额存款准备金","跨市场金融创新","通货-存款比率","金融脆弱性理论","银行业金融机构","防范严重的货币","非货币金融机构","风险预警不及时","黄金、外汇储备","黄金和外汇储备","黄金或有价证券","5万元及以下","一一对应结算","专门管理机构","业务库存限额","两类监管机构","中国人民银行","价格信号失真","优化金融系统","作为中介指标","信用配额管理","债权债务清偿","全额实时清算","公开市场操作","包括三个方面","包括利率调控","包括支付体系","包括政治保障","单一监管体制","合作金融机构","国家财政收支","国有中央银行","国民经济需要","国际收支平衡","国际收支逆差","国际收支顺差","国际本位货币","国际监管组织","国际资本流动","国际金融合作","国际金融市场","国际金融谈判","外国债务危机","外汇储备不足","外部融资溢价","央行票据互换","存款准备金率","存款货币银行","它对所有存款","宏观审慎监管","宏观经济政策","宏观经济目标","宏观调控体系","宏观金融活动","实时全额结算","对于不同的金","应立足整个金","异地资金转移","强化自我约束","微观经济主体","成本收益权衡","批发物价指数","抑制通货膨胀","投资利率弹性","按期偿付债务","支付系统安全","支付结算制度","是指中央银行","有价证券市场","浮动汇率制度","消费物价指数","物价变动幅度","牵头监管机构","短期商业票据","社会信用总量","社会分配不公","票据清算机构","经济稳定增长","菲利普斯曲线","行政隶属关系","议会或者国会","财政入不敷出","财政部的指令","账户资金往来","货币供给总量","货币政策失误","货币政策工具","货币政策手段","货币政策目标","货币流通速度","货币需求曲线","资产负债业务","资源配置效率","资金周转不灵","资金清算中心","跨国支付系统","跨国清算系统","连续（实时）","逐级分配指标","通过提供货币","重组金融机构","金融控股集团","金融机构集体","金融监管政策","金融结构体系","银行体系安全","银行贷款渠道","除证券业之外","随时可以兑现","集中统一领导","预期实际利率","风险防控机制","1656年","1984年","1年至2年","2023年","27个指标","6～9个月","AD-AS","CAMEL","D-D模型","一般为一年","不动产买卖","中央对手方","临时性波动","为了控制金","主动性目标","使用主动权","保卫性目标","信息不对称","公平与效率","内在不稳定","再贴现利息","再贴现利率","再贴现贷款","再贴现金额","净结算头寸","准备金头寸","准备金存款","准备金结构","凯恩斯陷阱","创造的负债","利润最大化","劳动密集型","包括两方面","十足的现金","卡特尔管制","发展中国家","发行的银行","国务院批准","套期保值型","存款准备金","安全与稳健","当中央银行","意愿结售汇","批量、定时","承兑与贴现","技术性故障","投机性袭击","拒绝再贴现","持久性收入","摩擦性失业","操作执行权","操作自主权","支付准备金","支付和清算","政策性银行","效率与稳定","效配置资源","数据易获得","日平均余额","日本、英国","是中央银行","最低的成本","最后贷款人","最容易变现","最高增加额","月平均余额","欧文·费雪","法定准备金","法定范围内","注册会计师","流动性偏好","流动性压力","流动性困境","流动性效应","流动性比率","流动性要求","流通中现金","消费、投资","清偿力危机","牙买加体系","现金出入库","短期性供应","票据交换所","系统性风险","系统重要性","统一领导金","耐用消费品","联邦储备法","自主经营权","自我实现论","自然失业率","英格兰银行","负责日常行","财政赤字论","货币供应量","货币供给量","货币发行权","货币经营业","资产负债率","资本充足性","资本充足率","超周期变化","超额准备率","超额准备金","超额发行税","逆经济风向","通货膨胀率","金融消费者","银行业危机","银行性业务","银行永续债","银行的银行","非借入储备","非现场检查","非现场监管","黄金和外汇","4.5%","4个指标","8种货币","FSAP","FSIs","TMLF","一松一紧","专项基金","业务准入","中介变量","中介指标","中心国家","买卖价差","买卖证券","二级市场","代理国库","价格优先","优惠利率","会计核算","传导机制","信用基础","信贷分配","信贷政策","信贷渠道","信贷结构","信贷资金","倍数扩张","借入储备","充分就业","克鲁格曼","全国清算","全面担保","公共产品","公共选择","公平竞争","公开市场","其他业务","其他部门","内幕交易","内生变量","内部作案","内部时滞","再贴现率","分业监管","分业经营","利息收入","利率变动","利率弹性","利率控制","利率政策","利率波动","利率结构","利率风险","制衡机制","剧烈波动","协调发展","单一目标","单目标论","参谋顾问","及时入库","及时足额","双目标论","双重目标","发行基金","发行计划","可逆转性","名义利率","名义收入","告示作用","告示效应","商品物资","囚徒困境","回笼资金","国外资产","国家公债","国家授权","国际收支","国际贷款","在途资金","垂直领导","基于规则","基准利率","基础货币","备用工具","外汇储备","外汇市场","外汇政策","外生变量","外部时滞","多目标论","奥肯定律","存贷比例","宏观审慎","宏观经济","宏观调控","定向降准","定量指标","实体经济","家庭预算","履行职责","工业革命","市场主体","市场利率","市场操纵","市场时滞","布鲁塞尔","干预市场","库存现金","开设账户","弗里德曼","强力货币","强烈振荡","影子银行","或有资本","战略资源","执行货币","投资乘数","投资支出","抗干扰性","按时拨付","捕获理论","提供担保","提供贷款","操作指标","操作时滞","支付利息","支付危机","支付系统","收缩银根","政府顾问","政策工具","政策手段","数字经济","无资本金","日间信贷","时间优先","普遍降准","暂缓偿债","最终目标","有价证券","有毒资产","核心原则","根本利益","汇率制度","汇率政策","汇率风险","沃尔芬森","法定特权","法律责任","泡沫经济","派出机构","涉农票据","混业经营","清偿能力","清算安排","潜在水平","灵活精巧","特定机构","特殊利益","特殊目的","现场检查","现场监管","现金回笼","瑞典银行","直接控制","相对重点","真实票据","短期使用","短期行为","票据交换","稳定币值","窗口指导","立法宗旨","系统风险","约束作用","组成部门","经济危机","经济发行","经济安全","经济手段","经济萧条","经济高涨","结构调整","自存准备","自然失业","认识时滞","证券质量","证券需求","评级公司","调拨命令","调整幅度","财产基础","财务杠杆","财政发行","财政赤字","财政透支","货币乘数","货币危机","货币因素","货币渠道","货币联盟","货币资金","货币需求","资产质量","资本缓冲","资本项目","资金枢纽","超额储备","超额准备","转让价格","边缘国家","过度负债","适度竞争","逆向操作","透支头寸","通货紧缩","通货膨胀","逾期贷款","道义劝告","道德风险","重置成本","量化宽松","金融协调","金融安全","金融法规","金融活动","金融秩序","金融统计","银行牌照","长期目标","长期稳定","间接调控","零点规则","需求管理","顺周期性","预算约束","黄金市场","50%","80%","CBS","CGO","MLF","PSL","SDR","SLF","SLO","一元式","业务库","主动性","交易商","伸缩性","借贷式","公开性","其含义","再贴现","净资产","到期日","制裁权","单个金","双支柱","发行库","可控性","可测性","合规性","国库券","多极化","失业率","子系统","存款人","存贷款","存量法","强制性","总需求","惩罚性","控制权","搭便车","明斯基","杠杆率","核准制","每一会","注册制","流动性","流量法","清偿力","源与流","独立性","目标可","硬辅币","稳定币","管理权","米什金","紧缩性","维护金","美联储","认可制","认可论","证券业","货币量","贷款量","逆周期","金本位","金融业","长期性","阿吉翁","非理性","麦金农","1%","8%","MS","伞形","利差","双松","双紧","同业","威望","容忍","托宾","拨备","时滞","泡沫","注资","现象","稽核","苏特","证券","逆差","银根","顺差"],bn=It.slice().sort((t,s)=>s.length-t.length).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),In=new RegExp(`(${bn.join("|")})`,"g"),Xe=({content:t,keywords:s,maskKeywords:d=!1,onToggleClozeAll:I=!1})=>{const[h,g]=r.useState(new Set),o=Ie.useMemo(()=>s&&s.length>0?s.slice().sort((m,C)=>C.length-m.length):It,[s]),_=Ie.useMemo(()=>{if(s&&s.length>0){const m=o.map(C=>C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return new RegExp(`(${m.join("|")})`,"g")}return In},[o,s]);Ie.useEffect(()=>{d||g(new Set)},[d]);let k=0;const L=(m,C)=>{C.stopPropagation(),g(p=>{const y=new Set(p);return y.has(m)?y.delete(m):y.add(m),y})},u=(m,C)=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),L(m,C))},v=(m,C=!1,p="kw")=>m?m.split(_).map((l,b)=>{if(!l)return null;if(o.includes(l)){const n=k++,i=!d||I||h.has(n);return i?e.jsx("strong",{onClick:x=>d&&L(n,x),className:`font-semibold text-rose-600 dark:text-rose-400 transition-colors ${d?"cursor-pointer hover:opacity-75":""}`,children:l},`${p}-${b}`):e.jsxs("span",{role:"button",tabIndex:0,"aria-pressed":i,onClick:x=>L(n,x),onKeyDown:x=>u(n,x),className:"inline-flex items-center justify-center relative mx-1 px-1.5 py-0.5 rounded cursor-pointer select-none transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] align-baseline shadow-xs",style:{background:"repeating-linear-gradient(135deg, rgba(254, 215, 170, 0.95) 0px, rgba(254, 215, 170, 0.95) 6px, rgba(251, 207, 232, 0.95) 6px, rgba(251, 207, 232, 0.95) 12px)",boxShadow:"0 1px 2px rgba(244, 63, 94, 0.15), inset 0 0 0 1px rgba(244, 114, 182, 0.35)",borderRadius:"3px",verticalAlign:"baseline"},children:[e.jsx("span",{className:"opacity-0 select-none pointer-events-none font-bold inline-block leading-normal",children:l}),e.jsx("span",{className:"absolute inset-0 flex items-center justify-center text-[10px] text-rose-400/80 font-bold pointer-events-none select-none tracking-widest",children:"···"})]},`${p}-${b}`)}return C?e.jsx("strong",{className:"font-bold text-slate-900 dark:text-slate-100",children:l},`${p}-${b}`):e.jsx("span",{children:l},`${p}-${b}`)}):null,M=m=>{const C=m.match(/\t*==(\d+)==/);let p=m,y=null;C?(p=m.replace(/\t*==(\d+)==/,""),y=C[1]):p=m.replace(/\t*==\d+==/g,"");const l=p.split(/(\*\*[^*]+\*\*)/g);return e.jsxs("span",{className:"leading-relaxed",children:[l.map((b,A)=>{if(b.startsWith("**")&&b.endsWith("**")&&b.length>=4){const i=b.slice(2,-2),x=l[A+1]||"";if(/^[：:]/.test(x)||i.endsWith("：")||i.endsWith(":"))return e.jsx("strong",{className:"font-bold text-indigo-700 dark:text-indigo-300",children:i},A);if(i.length<=15&&!i.includes("。")&&!i.includes("；")){const $=k++,B=!d||I||h.has($);return B?e.jsx("strong",{onClick:z=>d&&L($,z),className:`font-semibold text-rose-600 dark:text-rose-400 transition-colors ${d?"cursor-pointer hover:opacity-75":""}`,children:i},A):e.jsxs("span",{role:"button",tabIndex:0,"aria-pressed":B,onClick:z=>L($,z),onKeyDown:z=>u($,z),className:"inline-flex items-center justify-center relative mx-1 px-1.5 py-0.5 rounded cursor-pointer select-none transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] align-baseline shadow-xs",style:{background:"repeating-linear-gradient(135deg, rgba(254, 215, 170, 0.95) 0px, rgba(254, 215, 170, 0.95) 6px, rgba(251, 207, 232, 0.95) 6px, rgba(251, 207, 232, 0.95) 12px)",boxShadow:"0 1px 2px rgba(244, 63, 94, 0.15), inset 0 0 0 1px rgba(244, 114, 182, 0.35)",borderRadius:"3px",verticalAlign:"baseline"},children:[e.jsx("span",{className:"opacity-0 select-none pointer-events-none font-bold inline-block leading-normal",children:i}),e.jsx("span",{className:"absolute inset-0 flex items-center justify-center text-[10px] text-rose-400/80 font-bold pointer-events-none select-none tracking-widest",children:"···"})]},A)}return e.jsx(Ie.Fragment,{children:v(i,!0,`bold-${A}`)},A)}const n=b.split(/(\*[^*]+\*)/g);return e.jsx(Ie.Fragment,{children:n.map((i,x)=>{if(i.startsWith("*")&&i.endsWith("*")&&i.length>=2){const c=i.slice(1,-1);return e.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-200",children:v(c,!1,`it-${A}-${x}`)},x)}return e.jsx(Ie.Fragment,{children:v(i,!1,`txt-${A}-${x}`)},x)})},A)}),y&&e.jsxs("span",{className:"ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 select-none align-middle",children:["共 ",y," 点"]})]})},Q=t.split(`
`);return e.jsx("div",{className:"space-y-2 text-slate-700 dark:text-slate-300",children:Q.map((m,C)=>{const p=m.trim();if(!p)return null;const y=m.search(/\S|$/),l=y>=4||m.startsWith("    -"),A=!(y>=2&&y<4||m.startsWith("  -"))&&!l;let n=p;if(n.startsWith("- ")&&(n=n.slice(2)),/^(根据课件|根据教材)/.test(n)){const c=n.match(/\t*==(\d+)==/),F=c?c[1]:null,E=n.replace(/\t*==\d+==/g,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1");return e.jsxs("div",{className:"text-[length:var(--md-source-size,13.5px)] text-slate-500 dark:text-slate-400 leading-relaxed mb-2",children:[e.jsx("span",{children:E}),F&&e.jsxs("span",{className:"ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 select-none align-middle",children:["共 ",F," 点"]})]},C)}const i=/[:：].+$/.test(n);if(!l&&i){const c=n.match(/^([（\(][一二三四五六七八九十0-9]+[）\)][^：:]{1,30}|\d+[\.、]\s*\*\*[^*]+\*\*|\d+[\.、]\s*[^：:]{1,30}|[一二三四五六七八九十]+[、.][^：:]{1,30}|\*[^*]+\*|[^*。；\n：:]{2,25})[：:]([\s\S]+)$/);if(c){const F=c[1].replace(/[:：]$/,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/^[*_]+|[*_]+$/g,"").trim(),$=c[2].trim().split(/[；;]\s*/).map(B=>B.trim()).filter(Boolean);return e.jsxs("div",{className:"mt-3.5 mb-1 pt-0.5 first:mt-0 first:pt-0 space-y-1",children:[e.jsx("h4",{className:"font-extrabold text-[length:var(--md-heading-size,15.5px)] text-emerald-600 dark:text-emerald-400 tracking-wide",children:F}),e.jsx("div",{className:"space-y-1",children:$.map((B,z)=>e.jsxs("div",{className:"flex items-start gap-2 text-[length:var(--md-body-size,14px)] leading-relaxed pl-4 py-0.5 text-slate-700 dark:text-slate-300",children:[e.jsx("span",{className:"text-slate-400 mt-1 select-none text-xs font-mono shrink-0",children:"•"}),e.jsx("div",{className:"flex-1 min-w-0",children:M(B)})]},z))})]},C)}}if((/^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^。；\n]*[:：]?$/.test(n)||/^[\\*]*[一二三四五六七八九十]+[、.][^。；\n]*[:：]?$/.test(n)||/^\*[^*]+\*[:：]?$/.test(n)&&!n.includes("**")||/^\*\*[^*]+\*\*[:：]?$/.test(n)&&n.length<=40||/^\d+[\.、][^。；\n]{1,30}[:：]?$/.test(n)&&!n.includes("。")&&!n.includes("；"))&&!i){const c=n.replace(/[:：]$/,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/^[*_]+|[*_]+$/g,"").trim();return e.jsx("div",{className:"mt-4 mb-1 pt-1 first:mt-0 first:pt-0",children:e.jsx("h4",{className:"font-extrabold text-[length:var(--md-heading-size,15.5px)] text-emerald-600 dark:text-emerald-400 tracking-wide",children:c})},C)}return A?e.jsx("div",{className:"text-[length:var(--md-lead-size,14.5px)] font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-2",children:M(n)},C):e.jsxs("div",{className:`flex items-start gap-2 text-[length:var(--md-body-size,14px)] leading-relaxed ${l?"pl-4 py-0.5 text-slate-600 dark:text-slate-400":"pl-1 py-0.5 text-slate-700 dark:text-slate-300"}`,children:[e.jsx("span",{className:"text-slate-400 mt-1 select-none text-xs font-mono shrink-0",children:"•"}),e.jsx("div",{className:"flex-1 min-w-0",children:M(n)})]},C)})})},gn=[{id:"sec-terms",title:"一、名词解释",meta:"5题 · 15分"},{id:"sec-fill",title:"二、填空题",meta:"15题 · 15分"},{id:"sec-choice",title:"三、单项选择题",meta:"15题 · 15分"},{id:"sec-tf",title:"四、判断改错题",meta:"15题 · 15分"},{id:"sec-short",title:"五、简答题",meta:"3题 · 20分"},{id:"sec-essay",title:"六、论述题",meta:"1题 · 20分"}],ot=({currentMode:t,recitationQuestions:s,currentRecitationQuestionId:d,onSelectRecitationQuestionId:I,memorizedList:h,starredList:g,homeworkQuestions:o,currentHomeworkQuestionId:_,onSelectHomeworkQuestionId:k,homeworkCompletedList:L,selectedHomeworkChapter:u,terminologyList:v,currentTermId:M,onSelectTermId:Q,termMemorizedList:m,termStarredList:C=[],choiceMemorizedList:p=[],choiceStarredList:y=[],tfMemorizedList:l=[],tfStarredList:b=[],fillMemorizedList:A=[],fillStarredList:n=[],shortMemorizedList:i=[],shortStarredList:x=[],essayMemorizedList:c=[],essayStarredList:F=[],practiceTab:E="terms",choiceCount:$=40,tfCount:B=30,fillCount:z=40,shortCount:ee=20,essayCount:Y=6,currentChoiceIndex:G=0,onSelectChoiceIndex:S,currentTfIndex:T=0,onSelectTfIndex:N,currentFillIndex:D=0,onSelectFillIndex:X,currentShortIndex:w=0,onSelectShortIndex:j,currentEssayIndex:V=0,onSelectEssayIndex:te,currentChapterId:he,currentSectionId:oe,currentQuestionText:_e="",chapters:se=[],onSelectSection:ae,onJumpToPracticeTerm:ye,isCollapsed:Fe=!1,onToggleCollapse:ue,className:Ce=""})=>{const[le,ge]=r.useState("matrix"),[ce,Ee]=r.useState(""),[De,Oe]=r.useState(null),Re=r.useMemo(()=>{const f=new Map,P=new Set(h);for(const ne of s){const O=`${ne.chapterId}:${ne.sectionId}`,H=f.get(O)||{total:0,memorized:0};H.total+=1,P.has(ne.id)&&(H.memorized+=1),f.set(O,H)}return f},[s,h]),we=r.useMemo(()=>{const f=ce.trim().toLowerCase(),P=_e.toLowerCase();return(f?v.filter(O=>O.term.toLowerCase().includes(f)||O.definition.toLowerCase().includes(f)):v).map(O=>{const H=O.term.split(/[（(]/)[0].trim().toLowerCase(),J=!!P&&(P.includes(O.term.toLowerCase())||H.length>=2&&P.includes(H));return{term:O,isRelated:J}}).sort((O,H)=>O.isRelated!==H.isRelated?O.isRelated?-1:1:O.term.id-H.term.id)},[v,ce,_e]),de=r.useMemo(()=>{if(t==="exam")return null;if(t==="recitation"){const H=new Set(h),J=new Set(g);return{summaryLabel:"全书速记",progressText:`已背 ${h.length}/${s.length}`,showStarLegend:!0,cells:s.map(q=>({key:q.id,label:q.id,isCurr:d===q.id,isDone:H.has(q.id),isStar:J.has(q.id),onClick:()=>I(q.id)}))}}if(t==="homework"){const H=new Set(L),J=u?o.filter(q=>q.chapterId===u):o;return{summaryLabel:u?`第 ${u} 章作业`:"平时作业",progressText:`已做 ${L.length}/${o.length}`,showStarLegend:!1,cells:J.map(q=>({key:q.id,label:q.id,isCurr:_===q.id,isDone:H.has(q.id),isStar:!1,onClick:()=>k(q.id)}))}}if(E==="terms"){const H=new Set(m),J=new Set(C);return{summaryLabel:"名词解释",progressText:`已掌握 ${m.length}/${v.length}`,showStarLegend:!0,cells:v.map(q=>({key:q.id,label:q.id,isCurr:M===q.id,isDone:H.has(q.id),isStar:J.has(q.id),onClick:()=>Q(q.id)}))}}const P={fill:{label:"填空题",count:z,currentIdx:D,memorized:A,starred:n,onSelect:X},choice:{label:"单选题",count:$,currentIdx:G,memorized:p,starred:y,onSelect:S},truefalse:{label:"判断改错",count:B,currentIdx:T,memorized:l,starred:b,onSelect:N},short:{label:"简答题",count:ee,currentIdx:w,memorized:i,starred:x,onSelect:j},essay:{label:"论述题",count:Y,currentIdx:V,memorized:c,starred:F,onSelect:te}}[E],ne=new Set(P.memorized),O=new Set(P.starred);return{summaryLabel:P.label,progressText:`已掌握 ${P.memorized.length}/${P.count}`,showStarLegend:!0,cells:Array.from({length:P.count},(H,J)=>{const q=J+1;return{key:q,label:q,isCurr:P.currentIdx===J,isDone:ne.has(q),isStar:O.has(q),onClick:()=>{var W;return(W=P.onSelect)==null?void 0:W.call(P,J)}}})}},[t,s,d,I,h,g,o,_,k,L,u,E,v,M,Q,m,C,z,D,A,n,X,$,G,p,y,S,B,T,l,b,N,ee,w,i,x,j,Y,V,c,F,te]);if(Fe)return null;const Ke=f=>{const P=document.getElementById(f);P&&P.scrollIntoView({behavior:"smooth",block:"start"})};return e.jsxs("aside",{"aria-label":"辅助导航栏",className:`w-80 shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-[#f6f1e7]/95 dark:bg-[#161411]/95 border-l border-stone-300/70 dark:border-stone-800 flex flex-col overflow-hidden text-stone-800 dark:text-stone-200 backdrop-blur-md ${Ce}`,children:[e.jsxs("div",{className:"px-3 py-2.5 border-b border-stone-300/70 dark:border-stone-800 flex items-center gap-2 shrink-0",children:[e.jsx("div",{role:"tablist","aria-label":"右侧栏视图",className:"flex-1 grid grid-cols-3 p-0.5 rounded-md bg-stone-200/70 dark:bg-stone-800/80",children:[{id:"matrix",label:"题号"},{id:"outline",label:"大纲"},{id:"terms",label:"名词"}].map(f=>{const P=le===f.id;return e.jsx("button",{type:"button",role:"tab","aria-selected":P,onClick:()=>ge(f.id),className:`py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer ${P?"bg-[#fbf8f1] dark:bg-stone-900 text-stone-900 dark:text-amber-300 shadow-xs":"text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"}`,children:f.label},f.id)})}),ue&&e.jsx("button",{type:"button",onClick:ue,"aria-label":"折叠右侧栏",className:"hidden lg:inline-flex w-8 h-8 rounded-md items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0",children:e.jsx(xt,{className:"w-4 h-4"})})]}),le==="matrix"&&e.jsx("div",{role:"tabpanel",className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:t==="exam"?e.jsxs("div",{className:"flex-1 overflow-y-auto overscroll-contain p-3.5 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-stone-300/70 dark:border-stone-800",children:[e.jsxs("span",{className:"text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5",children:[e.jsx(Wt,{className:"w-3.5 h-3.5 text-purple-600 dark:text-purple-400"}),e.jsx("span",{children:"试卷大题跳转"})]}),e.jsx("span",{className:"text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400",children:"100分"})]}),e.jsx("div",{className:"divide-y divide-stone-200/80 dark:divide-stone-800/80",children:gn.map(f=>e.jsxs("button",{type:"button",onClick:()=>Ke(f.id),className:"w-full px-2 py-2.5 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 flex items-center justify-between text-left transition-colors cursor-pointer",children:[e.jsx("span",{className:"text-xs font-semibold text-stone-800 dark:text-stone-200",children:f.title}),e.jsx("span",{className:"text-xs font-mono tabular-nums text-purple-600 dark:text-purple-400",children:f.meta})]},f.id))})]}):de&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-3.5 py-2.5 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-semibold text-slate-700 dark:text-slate-300",children:de.summaryLabel}),e.jsx("span",{className:"font-mono tabular-nums font-semibold text-blue-600 dark:text-blue-400",children:de.progressText})]}),e.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-xs bg-blue-600"}),"当前"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-xs bg-emerald-500"}),"已掌握"]}),de.showStarLegend&&e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-xs bg-amber-400"}),"收藏"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto overscroll-contain p-3.5",children:e.jsx("div",{className:"grid grid-cols-6 gap-1.5",children:de.cells.map(f=>{let P="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";return f.isCurr?P="bg-blue-600 text-white ring-2 ring-blue-400/70 font-semibold":f.isDone?P="bg-emerald-500/90 text-white hover:bg-emerald-600":f.isStar&&(P="bg-amber-400/90 text-amber-950 hover:bg-amber-400"),e.jsx("button",{type:"button",onClick:f.onClick,"aria-label":`第 ${f.label} 题`,"aria-current":f.isCurr?"true":void 0,className:`h-8 rounded-lg text-xs font-mono tabular-nums flex items-center justify-center transition-colors cursor-pointer ${P}`,children:f.label},f.key)})})})]})}),le==="outline"&&e.jsxs("div",{role:"tabpanel",className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsxs("div",{className:"px-3.5 py-2.5 border-b border-stone-300/70 dark:border-stone-800 flex items-center justify-between shrink-0",children:[e.jsx("span",{className:"text-xs font-semibold text-stone-700 dark:text-stone-300",children:"章节大纲"}),e.jsxs("span",{className:"text-xs font-mono tabular-nums text-stone-500 dark:text-stone-400",children:[se.length," 章"]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto overscroll-contain px-3 divide-y divide-stone-200/80 dark:divide-stone-800/80",children:se.map(f=>{var O,H;const P=f.id===he,ne=((H=(O=f.sections)==null?void 0:O[0])==null?void 0:H.id)||"";return e.jsxs("div",{className:`py-2 transition-colors ${P?"border-l-2 border-l-amber-600 dark:border-l-amber-400 pl-2":""}`,children:[e.jsxs("button",{type:"button",onClick:()=>ae==null?void 0:ae(f.id,ne),className:`w-full px-1 py-1 text-left text-xs font-semibold flex items-center justify-between gap-2 transition-colors cursor-pointer ${P?"text-amber-800 dark:text-amber-300":"text-stone-800 dark:text-stone-200 hover:text-amber-700 dark:hover:text-amber-400"}`,children:[e.jsx("span",{className:"truncate",children:f.title}),e.jsxs("span",{className:"text-[11px] font-mono tabular-nums text-stone-400 shrink-0",children:[f.totalQuestions,"题"]})]}),f.sections&&f.sections.length>0&&e.jsx("div",{className:"pl-2 pt-1 space-y-0.5",children:f.sections.map(J=>{const q=P&&J.id===oe,W=Re.get(`${f.id}:${J.id}`),pe=(W==null?void 0:W.total)??J.questionCount,me=(W==null?void 0:W.memorized)??0;return e.jsxs("button",{type:"button",onClick:()=>ae==null?void 0:ae(f.id,J.id),className:`w-full px-2 py-1 rounded text-left text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${q?"bg-amber-600 text-white font-medium":"text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-200"}`,children:[e.jsx("span",{className:"truncate",children:J.title}),e.jsxs("span",{className:`text-[11px] font-mono tabular-nums shrink-0 ${q?"text-amber-100":"text-stone-400 dark:text-stone-500"}`,children:[me,"/",pe]})]},J.id)})})]},f.id)})})]}),le==="terms"&&e.jsxs("div",{role:"tabpanel",className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsxs("div",{className:"p-3 border-b border-stone-300/70 dark:border-stone-800 space-y-2 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsxs("span",{className:"font-semibold text-stone-700 dark:text-stone-300 tabular-nums",children:["名词 (",v.length,")"]}),ce.trim()&&e.jsxs("span",{className:"text-[11px] font-mono tabular-nums text-stone-500 dark:text-stone-400",children:["匹配 ",we.length," 条"]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(Be,{className:"w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"}),e.jsx("input",{type:"text","aria-label":"搜索核心名词",placeholder:"搜索名词或释义…",value:ce,onChange:f=>Ee(f.target.value),className:"w-full pl-8 pr-8 py-1.5 text-xs rounded-md bg-white/70 dark:bg-stone-900 border border-stone-300/80 dark:border-stone-700 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors"}),ce&&e.jsx("button",{type:"button",onClick:()=>Ee(""),"aria-label":"清空搜索",className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer",children:e.jsx(Je,{className:"w-3.5 h-3.5"})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto overscroll-contain px-3 divide-y divide-stone-200/80 dark:divide-stone-800/80",children:we.length===0?e.jsx("div",{className:"py-8 text-center text-xs text-stone-400 dark:text-stone-500",children:"未找到匹配名词"}):we.map(({term:f,isRelated:P})=>{const ne=m.includes(f.id),O=De===f.id;return e.jsxs("div",{className:`transition-colors ${O?"bg-amber-500/5 dark:bg-amber-500/5":""}`,children:[e.jsxs("button",{type:"button","aria-expanded":O,onClick:()=>Oe(O?null:f.id),className:"w-full px-1 py-2.5 text-left flex items-center justify-between gap-2 cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[e.jsx("span",{className:"text-[11px] font-mono tabular-nums text-stone-400 shrink-0",children:f.id}),e.jsx("span",{className:"text-xs font-semibold text-stone-800 dark:text-stone-100 truncate",children:f.term}),P&&e.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 shrink-0",children:"相关"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[ne&&e.jsx(Ye,{className:"w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"}),e.jsx(Vt,{className:`w-3.5 h-3.5 text-stone-400 transition-transform duration-150 ${O?"rotate-180":""}`})]})]}),O&&e.jsxs("div",{className:"px-2 pb-3 pt-1.5 border-t border-dashed border-stone-200/80 dark:border-stone-800 space-y-2.5 text-xs leading-relaxed text-stone-600 dark:text-stone-300",children:[e.jsx(Xe,{content:f.definition,maskKeywords:!1}),ye&&e.jsx("div",{className:"flex justify-end",children:e.jsxs("button",{type:"button",onClick:()=>ye(f.id),className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 transition-colors cursor-pointer",children:[e.jsx("span",{children:"专项练习"}),e.jsx(Xt,{className:"w-3 h-3"})]})})]})]},f.id)})})]})]})},gt=({currentIndex:t,totalFiltered:s,onPrev:d,onNext:I,onJumpToIndex:h,allItemIds:g,completedItemIds:o,starredItemIds:_=[],isMemorized:k,onToggleMemorized:L,actionLabel:u="背会",isStarred:v,onToggleStar:M,revealed:Q,onToggleRevealed:m,toggleLabel:C="遮挡",onCopy:p,isCopied:y,modeBadge:l})=>{const[b,A]=r.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"sticky top-0 z-10 flex flex-wrap items-center justify-between gap-2 px-1 py-2.5 bg-[#fbf8f1]/95 dark:bg-[#191815]/95 backdrop-blur-sm border-b border-stone-200/90 dark:border-stone-800 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[l&&e.jsx("span",{className:"hidden sm:inline-flex px-2 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80",children:l}),e.jsxs("button",{onClick:d,disabled:t<=0,className:"px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-bold bg-transparent text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border border-stone-300/80 dark:border-stone-700 disabled:opacity-30 transition-colors flex items-center gap-1 cursor-pointer",children:[e.jsx(Zt,{className:"w-4 h-4"}),e.jsx("span",{children:"上一题"})]}),e.jsx("button",{onClick:()=>A(!b),"aria-expanded":b,className:"px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-semibold bg-transparent text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 border border-stone-300/80 dark:border-stone-700 flex items-center gap-1 transition-colors cursor-pointer tabular-nums",children:e.jsxs("span",{children:["第 ",t+1," / ",s," 题 ▾"]})}),e.jsxs("button",{onClick:I,disabled:t>=s-1,className:"px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-bold bg-transparent text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border border-stone-300/80 dark:border-stone-700 disabled:opacity-30 transition-colors flex items-center gap-1 cursor-pointer",children:[e.jsx("span",{children:"下一题"}),e.jsx(en,{className:"w-4 h-4"})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[m&&e.jsxs("button",{onClick:m,className:`px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${Q?"bg-emerald-600 text-white border-emerald-700":"bg-transparent text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border-stone-300/80 dark:border-stone-700"}`,children:[e.jsx(ft,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:C||"遮挡"})]}),e.jsxs("button",{onClick:L,className:`px-2.5 py-1.5 rounded-md border transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer ${k?"bg-emerald-600 text-white border-emerald-700":"bg-transparent text-stone-600 dark:text-stone-400 hover:text-emerald-600 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border-stone-300/80 dark:border-stone-700"}`,children:[e.jsx(Ye,{className:`w-3.5 h-3.5 ${k?"stroke-[3]":""}`}),e.jsx("span",{children:u||"背会"})]}),e.jsxs("button",{onClick:M,className:`px-2.5 py-1.5 rounded-md border transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer ${v?"bg-amber-500 text-white border-amber-600":"bg-transparent text-stone-600 dark:text-stone-400 hover:text-amber-600 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border-stone-300/80 dark:border-stone-700"}`,children:[e.jsx(tn,{className:`w-3.5 h-3.5 ${v?"fill-white text-white":""}`}),e.jsx("span",{children:"收藏"})]}),e.jsxs("button",{onClick:p,className:`px-2.5 py-1.5 rounded-md border transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer ${y?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border-emerald-300 dark:border-emerald-700":"bg-transparent text-stone-600 dark:text-stone-400 hover:text-blue-600 hover:bg-stone-200/60 dark:hover:bg-stone-800/70 border-stone-300/80 dark:border-stone-700"}`,children:[e.jsx(Ye,{className:`w-3.5 h-3.5 ${y?"text-emerald-600":"hidden"}`}),!y&&e.jsx(nn,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"复制"})]})]})]}),b&&e.jsxs("div",{className:"bg-[#fbf8f1] dark:bg-[#191815] rounded-lg p-3.5 border border-stone-300/80 dark:border-stone-800 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-slate-700 dark:text-slate-300",children:"快速定位题目"}),e.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-500",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"}),u!=null&&u.startsWith("已")?u:`已${u||"背会"}`]}),_.length>0&&e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 inline-block"}),"已收藏"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600 inline-block"}),"当前"]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 max-h-52 overflow-y-auto overscroll-contain p-1",children:g.map((n,i)=>{const x=i===t,c=o.includes(n),F=_.includes(n);let E="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200";return x?E="bg-blue-600 text-white ring-2 ring-blue-400 font-bold":c?E="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-400 font-bold":F&&(E="bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300"),e.jsxs("button",{onClick:()=>{h(i),A(!1)},className:`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-colors relative cursor-pointer ${E}`,children:[i+1,c&&!x&&e.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold",children:"✓"})]},n)})})]})]})},at={1:"p1_4-5",2:"p1_6-8",3:"p1_9-10",4:"p1_11-12",5:"p1_14-15",6:"p1_16-18",7:"p1_20",8:"p1_21",9:"p1_24",10:"p1_26-27",11:"p1_28",12:"p1_29-30",13:"p1_31-32",14:"p2_3-6",15:"p2_7-9",16:"p2_11-12",17:"p2_13-14",18:"p2_16",19:"p2_17",20:"p2_18",21:"p2_19-21",22:"p2_22",23:"p3_3-4",24:"p3_5-6",25:"p3_7-8",26:"p3_9",27:"p3_10-11",28:"p3_12-15",29:"p4_3-4",30:"p4_5",31:"p4_6",32:"p4_7",33:"p4_8",34:"p4_8",35:"p4_9-10",36:"p4_11",37:"p4_12",38:"p4_13",39:"p4_13-14",40:"p4_14",41:"p4_15",42:"p4_16",43:"p4_17",44:"p4_17-18",45:"p4_19-21",46:"p4_24",47:"p4_22-23",48:"p4_24",49:"p4_25",50:"p4_26-27",51:"p4_28",52:"p5_3-4",53:"p5_5-8",54:"p5_8-10",55:"p5_11-13",56:"p5_14",57:"p5_15",58:"p5_16",59:"p5_17-20",60:"p5_21-22",61:"p5_25-27",62:"p6_4-5",63:"p6_6-7",64:"p6_9-10",65:"p6_11-12",66:"p6_15",67:"p6_18",68:"p6_22-23",69:"p6_24-25",70:"p6_28-29",71:"p7_3",72:"p7_3",73:"p7_4",74:"p7_5",75:"p7_6",76:"p7_6-7",77:"p7_8",78:"p7_9",79:"p7_10",80:"p7_11",81:"p7_12",82:"p7_13",83:"p7_14",84:"p7_14",85:"p7_15",86:"p7_16",87:"p7_17",88:"p7_18",89:"p7_19-20",90:"p7_21",91:"p7_22-23",92:"p7_24-25",93:"p7_25-26",94:"p7_27",95:"p7_28",96:"p8_3",97:"p8_4",98:"p8_5",99:"p8_6",100:"p8_7",101:"p8_8",102:"p8_9",103:"p8_10",104:"p8_11",105:"p8_12",106:"p8_13-14",107:"p8_15",108:"p8_16",109:"p8_17",110:"p8_18",111:"p8_20",112:"p9_4",113:"p9_5-6",114:"p9_7-8",115:"p9_9-10",116:"p9_11-12",117:"p9_15-18",118:"p9_19-20",119:"p9_22-23",120:"p9_24",121:"p9_25",122:"p9_29",123:"p9_30-32",124:"p9_33-35",125:"p9_37",126:"p10_3",127:"p10_4",128:"p10_7",129:"p10_8-9",130:"p10_10",131:"p10_11",132:"p10_12",133:"p10_13",134:"p10_14-15",135:"p10_16",136:"p10_17",137:"p10_19-20",138:"p10_21",139:"p11_3",140:"p11_4",141:"p11_5",142:"p11_7",143:"p11_8",144:"p11_9",145:"p11_10",146:"p11_11",147:"p11_12",148:"p11_14",149:"p11_15",150:"p11_16",151:"p11_17",152:"p11_18",153:"p11_20",154:"p11_21",155:"p11_22",156:"p11_23",157:"p11_22-24",158:"p11_10-12",159:"p11_10-11",160:"p11_10-11",161:"p11_10-11",162:"p11_8"},lt={1:"p1_6-7",2:"p1_11",3:"p1_12",4:"p1_24",5:"p1_31-32",6:"p1_26-27",7:"p2_7",8:"p2_10",9:"p2_18",10:"p2_19-21",11:"p2_22",12:"p2_20-22",13:"p3_5-6",14:"p3_9",15:"p3_10-11",16:"p4_3-4",17:"p4_6",18:"p4_8-10",19:"p4_17-18",20:"p4_19-21",21:"p4_24",22:"p5_4-6",23:"p5_3-4",24:"p5_5-8",25:"p5_15",26:"p5_21-22",27:"p6_9-10",28:"p6_11-12",29:"p6_18-19",30:"p6_24-25",31:"p6_29",32:"p7_3-5",33:"p7_3",34:"p7_3-4",35:"p7_14-15",36:"p7_16",37:"p8_13-15",38:"p8_7-9",39:"p8_3",40:"p8_5",41:"p9_9-12",42:"p9_19-20",43:"p10_3-4",44:"p10_11-13",45:"p10_14-15",46:"p10_21",47:"p10_19-20",48:"p11_9",49:"p11_10",50:"p11_4",51:"p11_5-7",52:"p11_14",53:"p11_15",54:"p11_22-23"},En={1:"p4_6",2:"p4_9-12",3:"p4_3",4:"p4_15",5:"p5_5-6",6:"p5_6",7:"p5_11",8:"p5_17",9:"p5_18-20",10:"p5_17-20",11:"p5_25-26",12:"p6_10",13:"p6_9",14:"p6_32",15:"p7_3",16:"p7_8",17:"p7_8",18:"p8_3-4",19:"p8_3",20:"p8_13-14",21:"p8_9",22:"p8_13",23:"p8_14",24:"p8_16",25:"p8_16",26:"p10_3",27:"p10_14",28:"p11_19"},Dn={1:"p1_11-12",2:"p1_11-12",3:"p1_16-18",4:"p1_11-12",5:"p1_31-32",6:"p2_13-14",7:"p2_22",8:"p3_10-11",9:"p3_9",10:"p4_6",11:"p4_9-10",12:"p4_24",13:"p4_22-23",14:"p4_19-21",15:"p4_26-27",16:"p5_5-8",17:"p5_17-20",18:"p5_3-4",19:"p5_25-27",20:"p6_9-10",21:"p6_24-25",22:"p7_3",23:"p7_14",24:"p7_18",25:"p7_28",26:"p8_4",27:"p8_5",28:"p8_7",29:"p8_16",30:"p8_20",31:"p9_5-6",32:"p9_22-23",33:"p9_30-32",34:"p9_37",35:"p10_8-9",36:"p10_12",37:"p10_21",38:"p11_12",39:"p11_23",40:"p11_8"},Rn={1:"p1_11-12",2:"p1_14-15",3:"p1_20",4:"p1_16-18",5:"p2_7-9",6:"p2_18",7:"p2_22",8:"p3_7-8",9:"p3_12-15",10:"p4_3-4",11:"p4_12",12:"p4_14",13:"p4_16",14:"p4_26-27",15:"p5_5-8",16:"p5_17-20",17:"p5_17-20",18:"p5_25-27",19:"p6_15",20:"p6_22-23",21:"p6_28-29",22:"p7_5",23:"p7_15",24:"p7_22-23",25:"p7_27",26:"p8_8",27:"p8_10",28:"p8_13-14",29:"p8_18",30:"p9_7-8",31:"p9_9-10",32:"p9_24",33:"p9_29",34:"p10_7",35:"p10_8-9",36:"p10_17",37:"p11_14",38:"p11_16",39:"p11_22",40:"p11_10-11"},qn={1:"p1_14-15",2:"p1_20",3:"p1_24",4:"p2_17",5:"p2_19-21",6:"p3_9",7:"p3_10-11",8:"p4_6",9:"p4_12",10:"p4_22-23",11:"p4_28",12:"p5_5-8",13:"p5_11-13",14:"p5_16",15:"p6_9-10",16:"p6_28-29",17:"p7_10",18:"p7_12",19:"p7_21",20:"p8_11",21:"p8_12",22:"p8_17",23:"p9_7-8",24:"p9_22-23",25:"p9_33-35",26:"p10_7",27:"p10_21",28:"p11_7",29:"p11_21",30:"p11_22-24"},zn={1:"p1_6-8",2:"p1_29-30",3:"p2_11-12",4:"p3_10-11",5:"p4_5",6:"p4_24",7:"p5_3-4",8:"p5_15-16",9:"p5_21-22",10:"p6_4",11:"p6_9-10",12:"p7_25",13:"p7_18",14:"p8_11-12",15:"p8_20",16:"p9_12",17:"p9_37",18:"p10_3",19:"p11_10",20:"p11_21"},Ln={1:"p7_8-9",2:"p8_3-5",3:"p9_30",4:"p10_22",5:"p10_17-21",6:"p11_22-24"};function kn(t){return t.replace(/\s*\(p[^)]+\)\s*$/,"").trim()}function kt(t,s){const[d,I]=r.useState(""),h=r.useRef(t),g=r.useRef(s);return r.useEffect(()=>{const o=h.current,_=g.current;if(h.current=t,g.current=s,o===t&&_===s)return;if(s>_)I("book-turn-next");else if(s<_)I("book-turn-prev");else{I("");return}const k=window.setTimeout(()=>{I("")},320);return()=>{window.clearTimeout(k)}},[t,s]),d}const _n=({questions:t,currentIndex:s,onPrev:d,onNext:I,onJumpToIndex:h,memorizedList:g,starredList:o,onToggleMemorized:_,onToggleStar:k,activeFilter:L="all",onSelectFilter:u,totalCount:v,memorizedCount:M,starredCount:Q,chapters:m=[],selectedChapterId:C=null,onSelectChapter:p})=>{const[y,l]=r.useState(!0),[b,A]=r.useState(!1),n=Math.min(Math.max(0,s),Math.max(0,t.length-1)),i=t[n]||t[0],x=kt((i==null?void 0:i.id)??0,n),c=()=>{if(!i)return;const S=`【第 ${i.id} 题】${i.title} (${i.points}点)

${i.content}`;navigator.clipboard.writeText(S),A(!0),setTimeout(()=>A(!1),2e3)};r.useEffect(()=>{const S=T=>{["INPUT","TEXTAREA","SELECT"].includes(T.target.tagName)||(T.code==="Space"?(T.preventDefault(),l(N=>!N)):T.key==="j"||T.key==="J"||T.key==="ArrowLeft"?(T.preventDefault(),d()):T.key==="k"||T.key==="K"||T.key==="ArrowRight"?(T.preventDefault(),I()):T.key==="m"||T.key==="M"?i&&(T.preventDefault(),_(i.id)):(T.key==="s"||T.key==="S")&&i&&(T.preventDefault(),k(i.id)))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[d,I,i,_,k]);const F=v??t.length,E=M??g.length,$=Math.max(0,F-E),B=Q??o.length,z=u||p?e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 px-1",children:[u&&e.jsx("div",{role:"group","aria-label":"背诵题筛选",className:"flex flex-wrap items-center gap-1.5",children:[{key:"all",label:"全部",count:F},{key:"unmemorized",label:"未背",count:$},{key:"memorized",label:"已背",count:E},{key:"starred",label:"收藏",count:B}].map(S=>{const T=L===S.key;return e.jsxs("button",{type:"button",onClick:()=>u(S.key),"aria-pressed":T,className:`px-3 py-1 rounded-full text-xs font-semibold border transition-colors flex items-center gap-1.5 cursor-pointer ${T?"bg-sky-600 text-white border-sky-700":"bg-transparent text-stone-600 dark:text-stone-400 border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 hover:text-sky-700 dark:hover:text-sky-300"}`,children:[e.jsx("span",{children:S.label}),e.jsx("span",{className:`tabular-nums text-[11px] ${T?"text-sky-100":"text-stone-400 dark:text-stone-500"}`,children:S.count})]},S.key)})}),p&&m.length>0&&e.jsxs("select",{"aria-label":"选择章节",value:C??"",onChange:S=>{const T=S.target.value;p(T?Number(T):null)},className:"ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-[#1c1917] text-stone-700 dark:text-stone-200 border border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 cursor-pointer max-w-[220px] truncate",children:[e.jsx("option",{value:"",children:"全部章节"}),m.map(S=>{const T=S.title.replace(/^第[一二三四五六七八九十0-9]+章\s*/,"");return e.jsxs("option",{value:S.id,children:["第",S.id,"章 ",T]},S.id)})]})]}):null;if(!i)return e.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]",children:[z,e.jsx("div",{className:"book-stage flex-1 flex flex-col items-center justify-center",children:e.jsxs("div",{className:"book-page w-full max-w-2xl p-10 text-center flex flex-col items-center text-stone-600 dark:text-stone-400",children:[e.jsx(We,{className:"w-12 h-12 mb-3 text-stone-300 dark:text-stone-600"}),e.jsx("p",{className:"text-base font-medium mb-3",children:"未找到符合条件的背诵题"}),u&&e.jsx("button",{type:"button",onClick:()=>u("all"),className:"px-4 py-1.5 rounded-md text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors cursor-pointer",children:"查看全部"})]})})]});const ee=g.includes(i.id),Y=o.includes(i.id),G=t.map(S=>S.id);return e.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)] select-text",children:[e.jsx(gt,{currentIndex:n,totalFiltered:t.length,onPrev:d,onNext:I,onJumpToIndex:h,allItemIds:G,completedItemIds:g,starredItemIds:o,isMemorized:ee,onToggleMemorized:()=>_(i.id),actionLabel:"背会",isStarred:Y,onToggleStar:()=>k(i.id),revealed:y,onToggleRevealed:()=>l(S=>!S),toggleLabel:"遮挡",onCopy:c,isCopied:b,modeBadge:"全书速记"}),z,e.jsx("div",{className:"book-stage",children:e.jsxs("article",{className:`book-page ${x} p-6 sm:p-9 lg:px-11 lg:py-9`,children:[e.jsx("button",{type:"button",onClick:()=>k(i.id),"aria-label":Y?"取消收藏":"收藏本题","aria-pressed":Y,"data-starred":Y,className:`book-ribbon ${Y?"is-starred text-amber-500":"text-stone-400 hover:text-amber-500"}`,children:e.jsx(bt,{className:`w-4 h-4 ${Y?"fill-amber-500 text-amber-500":""}`})}),e.jsxs("div",{className:"book-marginalia flex flex-wrap items-center justify-between gap-2.5 pr-10 pb-3 text-xs text-stone-600 dark:text-stone-400",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[e.jsxs("span",{className:"font-mono font-bold text-stone-800 dark:text-stone-200",children:["第 ",i.id," 题 · ",i.chapterTitle.split(" ")[0]]}),i.isCore&&e.jsxs("span",{className:"inline-flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400",children:[e.jsx(sn,{className:"w-3.5 h-3.5"}),"核心必背"]})]}),e.jsx("div",{className:"font-medium text-stone-600 dark:text-stone-400",children:i.sectionTitle})]}),e.jsxs("h2",{className:"py-4 text-[length:var(--book-stem-size,1.15rem)] font-bold leading-relaxed text-slate-900 dark:text-white",children:[e.jsxs("span",{className:"font-mono font-bold mr-1.5 text-slate-900 dark:text-white",children:[i.id,"."]}),e.jsx("span",{children:kn(i.title)}),at[i.id]&&e.jsxs("span",{className:"font-mono text-sm sm:text-base font-semibold text-stone-600 dark:text-stone-400 ml-1",children:["（",at[i.id],"）"]})]}),e.jsx("hr",{className:"book-divider-double my-3"}),e.jsx("div",{className:"pt-2",children:e.jsx(Xe,{content:i.content,keywords:i.keywords,maskKeywords:y})})]})})]})},yn=({questions:t,currentIndex:s,onPrev:d,onNext:I,onJumpToIndex:h,completedList:g,onToggleCompleted:o,starredList:_=[],onToggleStar:k=()=>{},activeFilter:L="all",onSelectFilter:u,totalCount:v,completedCount:M,starredCount:Q,chapters:m=[],selectedChapterId:C=null,onSelectChapter:p})=>{const[y,l]=r.useState(!0),[b,A]=r.useState(!1),[n,i]=r.useState(!1),x=Math.min(Math.max(0,s),Math.max(0,t.length-1)),c=t[x]||t[0],F=kt((c==null?void 0:c.id)??0,x),E=()=>{if(!c)return;const N=`【第 ${c.chapterId} 章 · 第 ${c.id} 题】${c.question}

参考答案：
${c.answer}`;navigator.clipboard.writeText(N),i(!0),setTimeout(()=>i(!1),2e3)};r.useEffect(()=>{const N=D=>{["INPUT","TEXTAREA","SELECT"].includes(D.target.tagName)||(D.code==="Space"?(D.preventDefault(),l(X=>!X)):D.key==="j"||D.key==="J"||D.key==="ArrowLeft"?(D.preventDefault(),d()):D.key==="k"||D.key==="K"||D.key==="ArrowRight"?(D.preventDefault(),I()):(D.key==="m"||D.key==="M")&&c&&(D.preventDefault(),o(c.id)))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[d,I,c,o]);const $=v??t.length,B=M??g.length,z=Math.max(0,$-B),ee=Q??_.length,Y=u||p?e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 px-1",children:[u&&e.jsx("div",{role:"group","aria-label":"作业题筛选",className:"flex flex-wrap items-center gap-1.5",children:[{key:"all",label:"全部",count:$},{key:"uncompleted",label:"未做",count:z},{key:"completed",label:"已做",count:B},{key:"starred",label:"收藏",count:ee}].map(N=>{const D=L===N.key;return e.jsxs("button",{type:"button",onClick:()=>u(N.key),"aria-pressed":D,className:`px-3 py-1 rounded-full text-xs font-semibold border transition-colors flex items-center gap-1.5 cursor-pointer ${D?"bg-sky-600 text-white border-sky-700":"bg-transparent text-stone-600 dark:text-stone-400 border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 hover:text-sky-700 dark:hover:text-sky-300"}`,children:[e.jsx("span",{children:N.label}),e.jsx("span",{className:`tabular-nums text-[11px] ${D?"text-sky-100":"text-stone-400 dark:text-stone-500"}`,children:N.count})]},N.key)})}),p&&m.length>0&&e.jsxs("select",{"aria-label":"选择章节",value:C??"",onChange:N=>{const D=N.target.value;p(D?Number(D):null)},className:"ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-[#1c1917] text-stone-700 dark:text-stone-200 border border-stone-300/80 dark:border-stone-700/80 hover:border-sky-400 dark:hover:border-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 cursor-pointer max-w-[220px] truncate",children:[e.jsx("option",{value:"",children:"全部章节"}),m.map(N=>{const D=N.title.replace(/^第[一二三四五六七八九十0-9]+章\s*/,"");return e.jsxs("option",{value:N.id,children:["第",N.id,"章 ",D]},N.id)})]})]}):null;if(!c)return e.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]",children:[Y,e.jsx("div",{className:"book-stage flex-1 flex flex-col items-center justify-center",children:e.jsxs("div",{className:"book-page w-full max-w-2xl p-10 text-center flex flex-col items-center text-stone-600 dark:text-stone-400",children:[e.jsx(We,{className:"w-12 h-12 mb-3 text-stone-300 dark:text-stone-600"}),e.jsx("p",{className:"text-base font-medium mb-3",children:"当前章节暂无作业题"}),u&&e.jsx("button",{type:"button",onClick:()=>u("all"),className:"px-4 py-1.5 rounded-md text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors cursor-pointer",children:"查看全部"})]})})]});const G=g.includes(c.id),S=_.includes(c.id),T=t.map(N=>N.id);return e.jsxs("div",{className:"flex-1 min-w-0 flex flex-col gap-3 p-3 sm:p-5 lg:p-6 overflow-y-auto max-h-[calc(100vh-4rem)] select-text",children:[e.jsx(gt,{currentIndex:x,totalFiltered:t.length,onPrev:d,onNext:I,onJumpToIndex:h,allItemIds:T,completedItemIds:g,starredItemIds:_,isMemorized:G,onToggleMemorized:()=>o(c.id),actionLabel:"已做",isStarred:S,onToggleStar:()=>k(c.id),revealed:y,onToggleRevealed:()=>l(N=>!N),toggleLabel:"答案",onCopy:E,isCopied:n,modeBadge:"平时作业本"}),Y,e.jsx("div",{className:"book-stage",children:e.jsxs("article",{className:`book-page ${F} p-6 sm:p-9 lg:px-11 lg:py-9`,children:[e.jsx("button",{type:"button",onClick:()=>k(c.id),"aria-label":S?"取消收藏":"收藏本题","aria-pressed":S,"data-starred":S,className:`book-ribbon ${S?"is-starred text-amber-500":"text-stone-400 hover:text-amber-500"}`,children:e.jsx(bt,{className:`w-4 h-4 ${S?"fill-amber-500 text-amber-500":""}`})}),e.jsxs("div",{className:"book-marginalia flex flex-wrap items-center justify-between gap-2.5 pr-10 pb-3 text-xs text-stone-600 dark:text-stone-400",children:[e.jsxs("span",{className:"font-mono font-bold text-stone-800 dark:text-stone-200",children:["第 ",c.chapterId," 章 · ",c.chapterTitle||"中央银行学"]}),e.jsxs("div",{className:"font-mono font-medium text-stone-600 dark:text-stone-400 tabular-nums",children:["第 ",x+1," / ",t.length," 题"]})]}),e.jsxs("h2",{className:"py-4 text-[length:var(--book-stem-size,1.15rem)] font-bold leading-relaxed text-slate-900 dark:text-white",children:[e.jsxs("span",{className:"font-mono font-bold mr-1.5 text-slate-900 dark:text-white",children:[c.id,"."]}),e.jsx("span",{children:c.question}),lt[c.id]&&e.jsxs("span",{className:"font-mono text-sm sm:text-base font-semibold text-stone-600 dark:text-stone-400 ml-1",children:["（",lt[c.id],"）"]})]}),y&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"book-divider-double my-3"}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 mb-3",children:[e.jsx("span",{className:"text-xs font-bold text-stone-600 dark:text-stone-400 tracking-wider",children:"参考解析"}),e.jsxs("button",{type:"button",onClick:()=>A(N=>!N),className:`px-2.5 py-1 rounded-md text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${b?"bg-rose-500 text-white border-rose-600":"bg-transparent text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:text-rose-500 hover:border-rose-400"}`,children:[e.jsx(ft,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:b?"显露关键词":"挖空遮挡"})]})]}),e.jsx(Xe,{content:c.answer,keywords:c.keywords,maskKeywords:b})]})]})]})})]})},Cn="https://api.textdb.online/update/",wn="https://api.textdb.online/",ct="cb-study-console-nwafu:",dt=async t=>{const s=new TextEncoder().encode(t),d=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(d)).map(h=>h.toString(16).padStart(2,"0")).join("")};class Tn{constructor(){ie(this,"accountKey","cb_sync_account");ie(this,"autoSyncKey","cb_auto_sync_enabled");ie(this,"lastSyncedKey","cb_last_synced_time");ie(this,"channel",null);ie(this,"debounceTimer",null);ie(this,"listeners",new Set);ie(this,"isSyncing",!1);ie(this,"lastSyncedDigest","");ie(this,"onExternalUpdate",null);if(typeof window<"u"&&"BroadcastChannel"in window)try{this.channel=new BroadcastChannel("cb_study_sync_channel"),this.channel.onmessage=s=>{var d,I,h;((d=s.data)==null?void 0:d.type)==="STATE_UPDATE"&&((I=s.data)!=null&&I.state)&&((h=this.onExternalUpdate)==null||h.call(this,s.data.state),this.emitStatus("已与同设备其他标签页同步"))}}catch(s){console.warn("BroadcastChannel error",s)}}registerExternalUpdateHandler(s){this.onExternalUpdate=s}subscribe(s){return this.listeners.add(s),s(this.getStatus()),()=>this.listeners.delete(s)}getStatus(){return{account:this.getAccount(),autoSyncEnabled:this.isAutoSyncEnabled(),isSyncing:this.isSyncing,lastSyncedAt:this.getLastSyncedAt(),statusText:this.isSyncing?"正在同步中...":this.getAccount()?"云端就绪":"未绑定账号"}}emitStatus(s){const d=this.getStatus();s&&(d.statusText=s),this.listeners.forEach(I=>I(d))}getAccount(){return(localStorage.getItem(this.accountKey)||"").trim()}setAccount(s){localStorage.setItem(this.accountKey,s.trim()),this.emitStatus(s?`已绑定账号: ${s.trim()}`:"已解绑账号")}isAutoSyncEnabled(){return localStorage.getItem(this.autoSyncKey)!=="false"}setAutoSyncEnabled(s){localStorage.setItem(this.autoSyncKey,s?"true":"false"),this.emitStatus(s?"自动同步已开启":"自动同步已暂停")}getLastSyncedAt(){const s=localStorage.getItem(this.lastSyncedKey);return s?parseInt(s,10):null}setLastSyncedAt(s){localStorage.setItem(this.lastSyncedKey,s.toString())}triggerAutoSync(s){!this.isAutoSyncEnabled()||!this.getAccount()||(this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.pushToCloud(s).catch(d=>console.warn("Auto sync fail",d))},1500))}broadcastLocalChange(s){var d;try{(d=this.channel)==null||d.postMessage({type:"STATE_UPDATE",state:s})}catch(I){console.warn("Broadcast error",I)}}async pushToCloud(s){const d=this.getAccount();if(!d)return{ok:!1,error:"未输入账号"};const I=JSON.stringify({m:s.memorized,s:s.starred,h:s.homeworkCompleted,t:s.termMemorized,ts:s.termStarred||[],cm:s.choiceMemorized||[],cs:s.choiceStarred||[],tm:s.tfMemorized||[],tfs:s.tfStarred||[],fm:s.fillMemorized||[],fs:s.fillStarred||[],sm:s.shortMemorized||[],ss:s.shortStarred||[],em:s.essayMemorized||[],es:s.essayStarred||[],e:s.examHistory.length});if(I===this.lastSyncedDigest)return{ok:!0,updatedAt:this.getLastSyncedAt()||Date.now()};this.isSyncing=!0,this.emitStatus("正在备份到云端...");try{const h=await dt(ct+d.toLowerCase()),g={v:2,ts:Date.now(),data:s},o=JSON.stringify(g),_=await fetch(Cn+h,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"textcontent="+encodeURIComponent(o)});if(!_.ok)throw new Error("HTTP "+_.status);const k=Date.now();return this.lastSyncedDigest=I,this.setLastSyncedAt(k),this.isSyncing=!1,this.emitStatus("云端备份成功"),{ok:!0,updatedAt:k}}catch(h){return this.isSyncing=!1,this.emitStatus("备份失败: "+(h.message||"网络错误")),{ok:!1,error:h.message}}}async pullFromCloud(){const s=this.getAccount();if(!s)return{ok:!1,error:"未输入账号"};this.isSyncing=!0,this.emitStatus("正在从云端拉取...");try{const d=await dt(ct+s.toLowerCase()),I=wn+d+"?t="+Date.now(),h=await fetch(I,{cache:"no-store"});if(h.status===404)return this.isSyncing=!1,this.emitStatus("云端暂无此账号存档"),{ok:!0,found:!1};if(!h.ok)throw new Error("HTTP "+h.status);const g=await h.text();if(!g||!g.trim())return this.isSyncing=!1,this.emitStatus("云端存档为空"),{ok:!0,found:!1};let o;try{o=JSON.parse(g.trim())}catch{o=JSON.parse(decodeURIComponent(g.trim()))}const _=o.data||o;return this.isSyncing=!1,this.setLastSyncedAt(o.ts||Date.now()),this.emitStatus("拉取云端成功"),{ok:!0,found:!0,state:_,updatedAt:o.ts}}catch(d){return this.isSyncing=!1,this.emitStatus("拉取失败: "+(d.message||"网络错误")),{ok:!1,error:d.message}}}}const Pe=new Tn,pt="cb_study_state_v2",Ue={memorized:[],starred:[],homeworkCompleted:[],termMemorized:[],termStarred:[],choiceMemorized:[],choiceStarred:[],tfMemorized:[],tfStarred:[],fillMemorized:[],fillStarred:[],shortMemorized:[],shortStarred:[],essayMemorized:[],essayStarred:[],examHistory:[]};function ht(t){return t?{memorized:Array.isArray(t.memorized)?t.memorized:[],starred:Array.isArray(t.starred)?t.starred:[],homeworkCompleted:Array.isArray(t.homeworkCompleted)?t.homeworkCompleted:[],termMemorized:Array.isArray(t.termMemorized)?t.termMemorized:[],termStarred:Array.isArray(t.termStarred)?t.termStarred:[],choiceMemorized:Array.isArray(t.choiceMemorized)?t.choiceMemorized:[],choiceStarred:Array.isArray(t.choiceStarred)?t.choiceStarred:[],tfMemorized:Array.isArray(t.tfMemorized)?t.tfMemorized:[],tfStarred:Array.isArray(t.tfStarred)?t.tfStarred:[],fillMemorized:Array.isArray(t.fillMemorized)?t.fillMemorized:[],fillStarred:Array.isArray(t.fillStarred)?t.fillStarred:[],shortMemorized:Array.isArray(t.shortMemorized)?t.shortMemorized:[],shortStarred:Array.isArray(t.shortStarred)?t.shortStarred:[],essayMemorized:Array.isArray(t.essayMemorized)?t.essayMemorized:[],essayStarred:Array.isArray(t.essayStarred)?t.essayStarred:[],examHistory:Array.isArray(t.examHistory)?t.examHistory:[]}:Ue}function Sn(){const[t,s]=r.useState(()=>{try{const n=localStorage.getItem(pt);if(n)return ht(JSON.parse(n))}catch(n){console.error("Failed to load study state:",n)}return Ue});r.useEffect(()=>{try{localStorage.setItem(pt,JSON.stringify(t)),Pe.triggerAutoSync(t),Pe.broadcastLocalChange(t)}catch(n){console.error("Failed to persist study state:",n)}},[t]),r.useEffect(()=>{Pe.registerExternalUpdateHandler(n=>{s(i=>({...i,...n}))})},[]);const d=r.useCallback(n=>{s(i=>{const x=i.memorized.includes(n);return{...i,memorized:x?i.memorized.filter(c=>c!==n):[...i.memorized,n]}})},[]),I=r.useCallback(n=>{s(i=>{const x=i.starred.includes(n);return{...i,starred:x?i.starred.filter(c=>c!==n):[...i.starred,n]}})},[]),h=r.useCallback(n=>{s(i=>{const x=i.homeworkCompleted.includes(n);return{...i,homeworkCompleted:x?i.homeworkCompleted.filter(c=>c!==n):[...i.homeworkCompleted,n]}})},[]),g=r.useCallback(n=>{s(i=>{const x=i.termMemorized.includes(n);return{...i,termMemorized:x?i.termMemorized.filter(c=>c!==n):[...i.termMemorized,n]}})},[]),o=r.useCallback((n,i)=>{s(x=>{const c=Array.isArray(x[n])?x[n]:[],F=c.includes(i);return{...x,[n]:F?c.filter(E=>E!==i):[...c,i]}})},[]),_=r.useCallback(n=>o("termStarred",n),[o]),k=r.useCallback(n=>o("choiceMemorized",n),[o]),L=r.useCallback(n=>o("choiceStarred",n),[o]),u=r.useCallback(n=>o("tfMemorized",n),[o]),v=r.useCallback(n=>o("tfStarred",n),[o]),M=r.useCallback(n=>o("fillMemorized",n),[o]),Q=r.useCallback(n=>o("fillStarred",n),[o]),m=r.useCallback(n=>o("shortMemorized",n),[o]),C=r.useCallback(n=>o("shortStarred",n),[o]),p=r.useCallback(n=>o("essayMemorized",n),[o]),y=r.useCallback(n=>o("essayStarred",n),[o]),l=r.useCallback(n=>{s(i=>({...i,examHistory:[n,...i.examHistory]}))},[]),b=r.useCallback(n=>{s(ht(n))},[]),A=r.useCallback(()=>{s(Ue)},[]);return{state:t,toggleMemorized:d,toggleStarred:I,toggleHomeworkCompleted:h,toggleTermMemorized:g,toggleTermStarred:_,toggleChoiceMemorized:k,toggleChoiceStarred:L,toggleTfMemorized:u,toggleTfStarred:v,toggleFillMemorized:M,toggleFillStarred:Q,toggleShortMemorized:m,toggleShortStarred:C,toggleEssayMemorized:p,toggleEssayStarred:y,addExamRecord:l,importState:b,resetAllProgress:A}}const Qe=[{id:1,title:"第一章 中央银行的产生与发展",totalQuestions:13,totalPoints:45,sections:[{id:"1.1",title:"第一节 中央银行的产生过程",questionCount:4,points:15},{id:"1.2",title:"第二节 中央银行的类型与结构",questionCount:5,points:19},{id:"1.3",title:"第三节 中央银行的性质与职能",questionCount:4,points:11}]},{id:2,title:"第二章 中央银行的地位与作用",totalQuestions:9,totalPoints:32,sections:[{id:"2.1",title:"第一节 中央银行的经济地位",questionCount:2,points:9},{id:"2.2",title:"第二节 中央银行的独立性",questionCount:7,points:23}]},{id:3,title:"第三章 中央银行业务活动的法律规范与基本原则",totalQuestions:6,totalPoints:33,sections:[{id:"3.1",title:"第一节 中央银行业务活动法律规范与业务范围",questionCount:4,points:24},{id:"3.2",title:"第二节 中央银行业务活动的原则和分类",questionCount:2,points:9}]},{id:4,title:"第四章 中央银行负债业务",totalQuestions:23,totalPoints:74,sections:[{id:"4.1",title:"第一节 中央银行存款业务",questionCount:12,points:41},{id:"4.2",title:"第二节 中央银行货币发行业务",questionCount:8,points:24},{id:"4.3",title:"第三节 中央银行其他负债业务",questionCount:3,points:9}]},{id:5,title:"第五章 中央银行资产业务",totalQuestions:10,totalPoints:37,sections:[{id:"5.1",title:"第一节 中央银行的再贴现和贷款业务",questionCount:4,points:17},{id:"5.2",title:"第二节 中央银行的证券买卖业务",questionCount:4,points:13},{id:"5.3",title:"第三节 中央银行黄金外汇储备业务",questionCount:2,points:7}]},{id:6,title:"第六章 中央银行支付清算业务",totalQuestions:9,totalPoints:39,sections:[{id:"6.1",title:"第一节 中央银行支付清算业务的产生与发展",questionCount:2,points:7},{id:"6.2",title:"第二节 中央银行的支付清算运行",questionCount:3,points:10},{id:"6.3",title:"第三节 中央银行在跨国支付清算中的作用",questionCount:1,points:5},{id:"6.4",title:"第四节 中央银行支付体系的风险管理",questionCount:2,points:12},{id:"6.5",title:"第五节 中国支付清算体系的发展",questionCount:1,points:5}]},{id:7,title:"第七章 中央银行货币政策及其目标选择",totalQuestions:25,totalPoints:64,sections:[{id:"7.1",title:"第一节 货币政策概述",questionCount:6,points:18},{id:"7.2",title:"第二节 货币政策目标的选择",questionCount:11,points:27},{id:"7.3",title:"第三节 货币政策的中介指标和操作指标",questionCount:8,points:19}]},{id:8,title:"第八章 中央银行的货币政策工具",totalQuestions:16,totalPoints:46,sections:[{id:"8.1",title:"第一节 一般性货币政策工具",questionCount:10,points:28},{id:"8.2",title:"第二节 选择性货币政策工具",questionCount:1,points:4},{id:"8.3",title:"第三节 其他货币政策工具",questionCount:2,points:6},{id:"8.4",title:"第四节 中国货币政策工具改革",questionCount:3,points:8}]},{id:9,title:"第九章 货币政策传导机制与有效性",totalQuestions:14,totalPoints:34,sections:[{id:"9.1",title:"第一节 货币政策传导机制的理论",questionCount:5,points:10},{id:"9.2",title:"第二节 货币政策传导机制的主要影响因素",questionCount:2,points:5},{id:"9.3",title:"第三节 货币政策的作用时滞",questionCount:2,points:4},{id:"9.4",title:"第四节 货币政策的有效性",questionCount:3,points:9},{id:"9.5",title:"第五节 国际货币体系与中央银行货币政策协调",questionCount:2,points:6}]},{id:10,title:"第十章 金融危机、金融稳定与金融安全",totalQuestions:13,totalPoints:40,sections:[{id:"10.1",title:"第一节 金融危机",questionCount:2,points:8},{id:"10.2",title:"第二节 金融危机理论",questionCount:3,points:11},{id:"10.3",title:"第三节 金融危机的防范、化解和治理",questionCount:3,points:8},{id:"10.4",title:"第四节 金融稳定",questionCount:4,points:11},{id:"10.5",title:"第五节 金融安全",questionCount:1,points:2}]},{id:11,title:"第十一章 中央银行金融监管",totalQuestions:24,totalPoints:88,sections:[{id:"11.1",title:"第一节 金融监管概述",questionCount:5,points:17},{id:"11.2",title:"第二节 金融监管的目标与基本原则",questionCount:2,points:8},{id:"11.3",title:"第三节 金融监管的内容与方法",questionCount:2,points:5},{id:"11.4",title:"第四节 金融监管体制",questionCount:5,points:21},{id:"11.5",title:"第五节 宏观审慎监管",questionCount:4,points:22},{id:"11.6",title:"第六节 中央银行金融监管运行（机构与市场监管）",questionCount:6,points:15}]}],vn=[{id:1,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.1",sectionTitle:"第一节 中央银行的产生过程",title:"中央银行产生的历史背景。(p4-5)",points:4,content:`- 中央银行产生于17世纪中后期，形成于19世纪初叶，其深刻的历史背景和客观经济条件包括四个方面：	==4==

  - *（一）市场经济的迅速发展*
    - **18世纪60年代西方国家开始了工业革命**，落后的手工业被机器大工业所代替，社会生产力快速发展和商品经济迅速扩大，促使货币经营业务越来越普遍且日益有利可图。
  - *（二）金融业务的快速发展*
    - **资本主义工商业的发展为货币经营业提供了难得的发展机遇**：传统的货币经营商及高利贷者已不能满足规模不断扩大、数量日益增加的新兴工商企业对资本的需求，客观上需要实力强大的金融机构为其提供资金及信用支持。
  - *（三）资本主义经济危机的频繁出现*
    - **伴随着资本主义经济的空前发展，必然出现连续不断的经济危机**：以英国纺织工业为例，1770—1815年中有5年、1815—1863年的48年中有28年处于危机、不振和停滞状态，各国政府开始从货币制度上寻找原因，企图通过发行银行券来控制和避免频繁的经济危机。
  - *（四）银行信用的普遍化和集中化*
    - **产业革命促使生产力空前提高，进而促使信用业蓬勃发展**：近代资本主义工商业对资金的大量需求与供给使低利息信贷活动和低成本资本的获得成为可能，为近代银行业取代传统货币经营商及高利贷者打下坚实基础，也为中央银行的产生提供了必要的经济基础。`,isCore:!0},{id:2,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.1",sectionTitle:"第一节 中央银行的产生过程",title:"中央银行产生的客观必然性。(p6-8)",points:5,content:`- 社会经济活动中的种种矛盾是中央银行产生和发展的根本动力，其客观必然性表现在五个方面：	==5==

  - *（一）政府对货币财富和银行控制的需要*
    - **国家机器不断强化、战争频频爆发及自然灾害使政府财政入不敷出日益严重**，为了弥补财政亏空，政府对资金需求越来越大，客观上要求建立受其直接控制的银行为自己服务。
  - *（二）统一银行券发行的需要*
    - **银行业发展初期各商业银行分散发行银行券带来两个问题**：一是因银行券不能兑现而出现挤兑现象；二是银行券在流通中受到限制，特别是信用不好的银行所发行的银行券。
  - *（三）信用集中的需要*
    - **生产和流通扩大使社会对资金需求数额越来越大、期限越来越长**：商业银行仅靠自身存款难以满足贷款需求，常采取降低支付准备金、扩大银行券发行量等手段，因贷款不能按时收回、突发性大量提现等经常发生资金周转不灵和兑现困难。
  - *（四）建立票据中心的需要*
    - **商业银行数量增多、业务扩大导致需要处理的票据数量膨胀**：各家银行单独分散结算票据已不能适应市场经济发展要求，客观上需要一个统一的票据清算机构来协调处理票据交换和债权债务关系。
  - *（五）统一金融管理的需要*
    - **金融业的特殊性决定了对金融业的监管不能仅仅依靠政府的行政手段**：否则会扼杀金融市场创造性和活力、降低效率并引发逃避管制，有效方法是由政府通过专门机构制定金融政策和管理条例来统筹、管理和监督全国货币金融活动。`,isCore:!0},{id:3,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.1",sectionTitle:"第一节 中央银行的产生过程",title:"中央银行产生和发展过程中的三次高潮。(p9-10)",points:3,content:`- 中央银行产生和发展的历史经历了三次高潮：	==3==

  - *（一）第一次高潮：1656—1914年*
    - **从1656年最早执行中央银行职能的瑞典银行起，到1913年美联储建立为止**：1694年英格兰银行成立、1800年法兰西银行成立后百余年间，各国纷纷效仿成立本国中央银行（如荷兰、奥地利、丹麦、俄罗斯、德意志联邦、日本、美国等），绝大部分由普通银行通过集中货币发行和提供清算服务及资金支持演变而成。
  - *（二）第二次高潮：第一次世界大战（1914—1918年）和第二次世界大战（1939—1945年）之间*
    - **一战结束后面对世界性金融恐慌和严重通货膨胀**：1920年在布鲁塞尔举行国际经济会议，要求尚未设立中央银行的国家尽快建立中央银行，以共同维护国际货币体制和经济稳定，期间成立了澳大利亚联邦银行、南京国民政府的中央银行、希腊、土耳其、墨西哥、新西兰、加拿大、印度等国中央银行。
  - *（三）第三次高潮：第二次世界大战（1945年）之后*
    - **二战结束后原有殖民地、附属国纷纷独立**：这些国家认识到成立中央银行有利于管理本国货币流通、推动金融经济发展，并将其视为巩固民族独立和国家主权的一大标志，先后建立巴基斯坦、缅甸、菲律宾、古巴、伊拉克、斯里兰卡、洪都拉斯、印尼及大批新独立非洲国家的中央银行。`,isCore:!1},{id:4,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.1",sectionTitle:"第一节 中央银行的产生过程",title:"早期的西方各国中央银行。(p11-12)",points:3,content:`- 早期西方各国中央银行的产生与形成历程：	==3==

  - *（一）第一家中央银行的产生——瑞典银行*
    - **瑞典银行是世界上产生最早的中央银行**，前身是成立于1656年的瑞典里克斯银行，原为发行银行券的私人银行；1668年由政府出资改组为对国会负责的国家银行；1897年获得货币发行独占权并停止商业银行业务，逐渐发展成为瑞典的中央银行。
  - *（二）英格兰银行*
    - **英格兰银行是中央银行发展史上的一个重要里程碑，1694年成立**；尽管比瑞典银行晚38年，但与英国政府的特殊关系使其最早具有中央银行的基本性质和特征，世界各国一般都认为英格兰银行是中央银行的鼻祖。
  - *（三）美联储*
    - **美国1837—1863年为自由银行时期**，银行数剧增、货币流通和信用混乱；1908年5月美国国会成立国家货币委员会，1912年提出特别法案制定折中性的联邦储备制度，1913年12月23日国会通过《联邦储备法》，1914年12月23日美联储正式成立，标志着美国中央银行制度正式形成。`,isCore:!1},{id:5,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.2",sectionTitle:"第二节 中央银行的类型与结构",title:"中央银行的类型。(p14-15)",points:4,content:`- 根据中央银行的制度，大体上可以分为四类：	==4==

  - *（一）单一式中央银行*
    - **国家建立单独的中央银行机构，由其集中行使中央银行职能，统一领导全国金融事业**；通常分为**一元式中央银行制度**（仅有一家中央银行行使权利和履行职能）和**二元式中央银行制度**（在一个国家内设立一定数量的地方中央银行，并由地方银行推选代表组成在全国范围行使央行职能的机构，形成中央和地方两级相对独立的央行机构）。
  - *（二）复合式中央银行*
    - **一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系**；中央一级机构享有制定货币政策、指导地方一级机构工作的最高权力，地方机构执行中央制定的金融方针和政策，但在管辖区内行使职能时享有较大自主权（不受地方政府管辖，与中央一级机构也无直接领导与被领导关系）。
  - *（三）准中央银行*
    - **一个国家（或地区）没有通常意义上的中央银行**，而是由类似于中央银行的机构或者由政府的某个或几个商业银行，代行中央银行部分职能，比较典型的有新加坡等较发达国家（或地区）。
  - *（四）跨国中央银行*
    - **两个以上的国家结成货币联盟，所有成员设立一个共同的中央银行**，负责发行共同货币、制定共同金融政策、实施统一外汇管理制度、执行成员一致通过的决议；成员央行无权制定自己的货币政策，目的是防止通货膨胀、规避汇率风险、促进经济发展。`,isCore:!0},{id:6,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.2",sectionTitle:"第二节 中央银行的类型与结构",title:"中央银行的资本结构。(p16-18)",points:5,content:`- 中央银行的所有制形式大体可以分为五种：	==5==

  - *（一）全部由国家所有*
    - **中央银行的全部资本归国家所有（国有中央银行）**：目前世界上大多数国家采用，通过由国家逐步把私人银行收归国有或政府拨款全额出资建立实现，采取国家所有制形式的还有荷兰、西班牙、加拿大等50多个国家。
  - *（二）集体所有*
    - **中央银行的全部资本属于金融机构集体**：采用这种形式的典型代表是意大利和美国。
  - *（三）公私混合所有*
    - **国家持有中央银行的一部分资本金（一般占总资本金一半以上），其余由私人持有（半国有化中央银行）**：如日本银行的股份由政府认购55%，其余45%由本国金融机构、证券公司、其他法人和个人认购，不设股东大会，私股持有者每年领取最高为5%的股息且无发言权。
  - *（四）多国所有*
    - **跨国中央银行的资本由各成员共同所有**：如欧洲中央银行各成员的中央银行须根据人口数量和GDP认购股份；西非货币联盟、中非货币联盟和东加勒比海货币联盟也采取这种所有制形式。
  - *（五）无资本金的中央银行*
    - **在中央银行建立之初没有资本，而是由国家授权执行中央银行职能**：运用的资金主要是各金融机构的存款和流通中的货币，或由国家法律规定，如韩国银行就是无资本金的特殊法人。`,isCore:!0},{id:7,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.2",sectionTitle:"第二节 中央银行的类型与结构",title:"中央银行的权力结构。(p20)",points:3,content:`- 根据中央银行决策权、执行权和监督权是否独立，可以分为三种模式：	==3==

  - *（一）决策权、执行权和监督权由一个机构统一掌管*
    - **集决策权、执行权和监督权于中央银行董事会或理事会一身**：特点是决策层次少、权力比较集中，优点是有利于政策间衔接和一致、便于迅速决策和实施，缺点是缺乏强有力制衡机制，代表国家有英国、美国、马来西亚、菲律宾等。
  - *（二）决策权、执行权和监督权分属不同的机构*
    - **最高权力机构分为决策机构和执行机构，有时另设监督机构**：各权力机构根据规定各司其职，代表国家有日本、德国、法国、澳大利亚、巴西、韩国等。
  - *（三）决策权、执行权和监督权由不同机构交叉掌管*
    - **设有一个主要的决策机构，同时设有专门的执行机构和监督机构且也拥有一定决策权**：采用这种最高权力机构模式的有瑞士、比利时等国的中央银行。`,isCore:!1},{id:8,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.2",sectionTitle:"第二节 中央银行的类型与结构",title:"中央银行内部机构设置的职能部门。(p21)",points:4,content:`- 中央银行总行内部设置由四大职能部门构成：	==4==

  - *1. 行政管理部门*
    - **中央银行运转的综合性非业务部门**，负责日常行政管理、秘书、人事、后勤等方面工作，例如英格兰银行设有公司服务部。
  - *2. 业务操作部门*
    - **执行货币政策及进行有关业务活动的部门**，主要负责办理货币发行、再贴现、公开市场业务、收受存款准备金、集中清算、发行债券等业务操作。
  - *3. 金融监管部门*
    - **贯彻执行金融政策、监管金融政策实施及对全国金融业有效监督管理的部门**，主要负责对金融机构的事前管理、事后检查以及业务经营活动指导，并领导和规范金融市场。
  - *4. 调研分析部门*
    - **中央银行的情报、参谋顾问部门**，主要负责有关经济金融资料和情报的收集、整理、统计、分析，对国民经济和社会发展情况进行研究，就金融政策向决策部门提出建议。`,isCore:!1},{id:9,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.2",sectionTitle:"第二节 中央银行的类型与结构",title:"中央银行分支机构的设置原则。(p24)",points:3,content:`- 中央银行设置分支机构一般根据以下三种情况进行：	==3==

  - *1. 按经济区域和经济发展需要设置分支机构*
    - **有利于中央银行货币政策集中统一地操作，减少地方政府对货币政策的干预**，从侧面反映中央银行是政府的一个经济部门而非行政机构，世界上绝大多数国家采用这种设置方式。
  - *2. 兼顾经济区域和行政区划设置*
    - **将经济区划与行政区划结合起来设置中央银行的分支机构**，其货币政策与金融监管绩效也很成功，如德国的中央银行和日本的中央银行。
  - *3. 分支机构只是总行的派出机构*
    - **总行对分支机构进行垂直领导，不受地方政府的管辖**，分支机构必须按规定执行和完成总行的政策和任务。`,isCore:!1},{id:10,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.3",sectionTitle:"第三节 中央银行的性质与职能",title:"中央银行的特殊性。(p26-27)",points:2,content:`- 中央银行是代表国家制定和执行货币政策、对国民经济进行宏观调控和对金融业进行监督管理的特殊金融机构，其特殊性表现在两个方面：	==2==

  - *1. 中央银行不同于一般政府机关*
    - **业务具有银行特征且通过经济手段调控并与政府保持相对独立**：中央银行办理存贷款、清算、发行和买卖有价证券等业务，提供资金方式是借贷式的（不以营利为目的），与完全依靠财政拨付经费的政府机关有明显差异；主要通过金融业务活动和经济杠杆、货币政策工具调控经济；与政府是相对独立的关系。
  - *2. 中央银行不同于一般银行和其他金融机构*
    - **从事宏观金融活动、不以营利为目的且独占货币发行权**：中央银行是调节全国货币信用的金融机构，而商行从事微观信用中介活动；不经营一般商行业务，业务经营对象不同；不以营利为目的；在一国金融体系中居于核心、处于超然地位；独占货币发行权，维护本国货币对内和对外价值的基本稳定。`,isCore:!1},{id:11,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.3",sectionTitle:"第三节 中央银行的性质与职能",title:"发行的银行职能。(p28)",points:2,content:`- 发行的银行是指中央银行垄断货币发行特权而成为全国唯一的货币发行机构，具体体现在两个方面：	==2==

  - *1. 垄断纸币发行与硬辅币管理*
    - **目前世界上几乎所有国家的纸币都是由中央银行发行的**；一般硬辅币的铸造、发行有的由中央银行经营管理，有的由财政部门负责、发行收入归财政，然后由中央银行投入流通。
  - *2. 金本位条件下的严格发行制度*
    - **金本位下货币金融稳定取决于两个因素**：第一，银行券能否随时兑换为金币；第二，存款货币能否保证顺利转化为银行券。中央银行集中大量黄金作为储备，银行券发行数量由发行银行所掌握的黄金数量决定。`,isCore:!1},{id:12,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.3",sectionTitle:"第三节 中央银行的性质与职能",title:"银行的银行职能的表现。(p29-30)",points:3,content:`- 银行的银行是指中央银行以商业银行和其他金融机构为对象，而不与工商企业及私人发生直接关系，具体表现在三个方面：	==3==

  - *1. 中央银行是银行存款准备金的保管者*
    - **法律规定商业银行及有关金融机构必须向中央银行缴存一部分存款准备金**：目的一方面在于保证存款机构清偿能力以备提现，保障存款人及金融机构安全；另一方面有利于中央银行调节信用规模和控制货币供应量。央行有权调整存款准备金上缴比率。
  - *2. 中央银行是银行的最后贷款人*
    - **当商业银行发生资金短缺而在同业中难以拆借融通时，可向中央银行申请贷款**：商业银行一般以票据再贴现、证券再抵押方式向中央银行取得贷款。
  - *3. 中央银行是银行票据结算中心*
    - **世界上大多数国家商业银行的票据都通过中央银行进行结算**：一方面为各家银行提供服务、提高效率，另一方面有利于中央银行对商业银行等金融机构的监督和管理；银行业务电子化大大加快了票据清算工作。`,isCore:!1},{id:13,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",sectionId:"1.3",sectionTitle:"第三节 中央银行的性质与职能",title:"政府的银行职能的表现。(p31-32)",points:4,content:`- 政府的银行指中央银行代表政府执行金融政策，代为管理财政收支并为政府提供各种金融服务，具体表现在四个方面：	==4==

  - *1. 中央银行代理国库*
    - **国家财政收支不另设机构，而是交由中央银行代理**：政府财政收支都通过在央行开设的账户进行，央行按国家预算协助财政、税收部门征缴国库存款，并根据财政支付命令向经费使用单位划拨资金。
  - *2. 中央银行给国家以信用支持*
    - **对政府的信贷支持主要有两种形式**：第一，购买国家公债（发行市场认购或交易市场买进）；第二，向财政透支（一般不向财政提供长期贷款，以免成为财政赤字弥补者而不利于货币金融稳定）。
  - *3. 中央银行管理黄金和外汇*
    - **黄金和外汇储备对维护汇率、弥补贸易逆差、体现资信水平及应对突发事件具有重要意义**：央行通过保管经营实现保值增值，通过黄金外汇买卖稳定币值与汇率，通过管理实现国际收支平衡。
  - *4. 中央银行制定或执行金融政策*
    - **独立性强时由央行制定，独立性弱时一般由政府制定、央行执行且央行充当政府顾问**：并负责对金融机构设置撤并审查批准、业务合规与准备金检查监督、报表稽核分析及行政处罚。`,isCore:!0},{id:14,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.1",sectionTitle:"第一节 中央银行的经济地位",title:"现代经济运行的特点。(p3-6)",points:5,content:`- 现代经济运行较之以前传统经济具有五个具体特点：	==5==

  - *（一）实物经济运行和金融运行交融在一起，金融已成为现代经济的核心*
    - **金融在市场资源配置中起到核心作用**：通过提供货币条件、利用信用方式促进资金融通、吸收闲散资金、货币创造、金融市场高效配置资源及金融创新工具结合实体经济投资等，对经济发展的影响力越来越大。
  - *（二）经济全球化与金融国际化相伴而行*
    - **具体表现为三个趋势**：1. 跨国的金融业务比重越来越大；2. 跨国的金融机构迅猛发展；3. 金融市场走向全球一体化。
  - *（三）各种国际性或区域性的经济合作组织发展迅速，对成员方来说既有机遇又有挑战*
    - **机遇与挑战并存**：一方面各国加入合作组织可无偿或以优惠价获得其他成员帮助、弥补本国发展不足；另一方面成员方要服从组织安排、以组织整体利益为重，自身调控和监管时刻面临考验。
  - *（四）各国政府对经济和金融的干预程度不断增加，国际宏观管理的合作日益密切*
    - **政府已成为一个独立的经济部门直接参与到国民经济总体活动之中**：与企业部门和家庭部门共同构成三部门经济体系，通过法律法规、宏观经济政策和行政手段加强对经济运行的调控。
  - *（五）信息化与智能化趋势下，数字经济应运而生*
    - **以互联网新兴技术为依托，在大数据、云计算与人工智能等创新技术支持下**：我国数字经济与数字金融快速发展并处于世界领先地位，既丰富了发达地区融资选择，又扩大了欠发达地区金融覆盖，极大提高了金融服务的普惠性。`,isCore:!0},{id:15,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.1",sectionTitle:"第一节 中央银行的经济地位",title:"中央银行在现代经济中的作用。(p7-9)",points:4,content:`- 中央银行在现代经济体系中处于重要地位，发挥着四个突出作用：	==4==

  - *（一）稳定货币，稳定经济*
    - **中央银行作为发行的银行，为经济发展创造了货币条件，为一国币值的稳定提供了保障**：中央银行是一国唯一能够发行纸币的机构，纸币既构成流通中货币量一部分，又与各金融机构在央行的存款共同构成基础货币。
  - *（二）调节信用，调节经济*
    - **中央银行在整个社会资金运动中处于中心环节，是国民经济的枢纽、货币的供给者和信用活动的调节者**：可以使用调整利率和准备金率、在公开市场上买卖有价证券等货币政策手段对货币和信用量进行调控。
  - *（三）集中清算，加速资金周转*
    - **中央银行作为全国的资金清算中心，为各金融机构提供了票据结算和交换的便利**：各家银行每日营业终了将票据交换差额通过在央行开立的账户相互划拨清算，简化了手续、节约了现金使用、加速了资金周转并提高了结算效率。
  - *（四）推进国际金融的合作和交流*
    - **从对外经济金融关系看，中央银行是国家对外联系的重要纽带**：在国际贸易与交往中提供货币支持，代表国家参与国际金融谈判、磋商、协调与签约，并作为国际金融组织和会议参与者承担维护世界经济秩序的重任。`,isCore:!0},{id:16,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行对政府保持一定独立性的原因。(p11-12)",points:5,content:`- 中央银行对政府保持一定独立性的原因具体包括五个方面：	==5==

  - *1. 有利于维护货币政策的稳定性和货币政策目标的实现，避免政治性经济波动*
    - **中央银行与政府所处地位、行为目标、利益需求及制约因素有所不同**：政府工作侧重点常随社会突出问题变化，中央银行保持一定独立性虽有时与政府短期工作重点矛盾，但符合政府长期目标，有利于经济社会长期持续稳定发展。
  - *2. 可以避免通过增加货币发行或购买国债的方式来弥补财政赤字*
    - **如果中央银行完全按政府指令行事而缺乏独立性**，货币政策服从财政政策需要，使用货币发行弥补政府赤字，会导致通货膨胀。
  - *3. 中央银行在制定和实施货币政策、履行金融监管等方面有较强的专业性和技术性*
    - **中央银行不同于一般行政管理机构和国有化企业**：其调控对象是货币、信用、金融机构与金融市场，调控手段是技术性很强的经济手段，政策直接影响国民经济各部门。
  - *4. 有利于增强政策的综合效力和稳定性*
    - **使中央银行、社会公众与政府部门之间形成互补和制约关系**：也会对政府财政、商业银行执行通货膨胀政策起到约束作用，避免因某项决策或政策失误造成全局性损失。
  - *5. 可以保证货币政策决策与实施的统一*
    - **货币政策应具有连贯性，不应受地方政府过多干预，地位应当比较超然**：较大独立性能够增强宏观调控时效性，保证决策与实施统一，增强政策实施效果。`,isCore:!0},{id:17,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行独立性的主要内容。(p13-14)",points:3,content:`- 中央银行独立性的主要内容包括三个核心方面：	==3==

  - *1. 中央银行享有独立的货币发行权*
    - **包含三层含义**：一是货币发行权高度集中于中央银行并由其垄断，不能搞多头或共同发行；二是发行多少、何时发行、地区分布、面额比例等由央行根据宏观经济政策和客观需要自行决定；三是不在政府干预下搞财政发行，不承担财政透支、不在发行市场直接购买公债、不给财政长期融通资金。
  - *2. 中央银行独立制定和执行货币政策*
    - **包括三方面内容**：一是制定权和操作执行权掌握在央行手中，执行过程不受各级政府和部门干预；二是与政府发生分歧时政府应充分尊重央行经验和意见，防止行政干预造成宏观决策失误；三是执行过程中其他有关部门应尽量配合。
  - *3. 独立监督、监测金融市场*
    - **在国家法律授权和保障下独立行使三项权力**：管理权（管理市场交易、机构建立撤并及定期不定期检查）、控制权（将金融体系和市场业务置于监督控制下）、制裁权（对违法活动或抗拒检查管理的金融机构给予经济或行政制裁）。`,isCore:!1},{id:18,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行保持相对独立性的原因。(p16)",points:3,content:`- 中央银行不能完全独立于政府之外、凌驾于政府之上，保持相对独立性的原因有三个：	==3==

  - *1. 中央银行的政策目标不能背离国家总体经济发展目标*
    - **金融在经济社会大系统中仍是一个子系统**：中央银行作为金融系统的核心和金融管理者，自然应当服从于经济社会大系统的运转，服从于国家的根本利益。
  - *2. 货币政策是整个国家宏观经济政策的一部分*
    - **中央银行是国家整个宏观调控体系中的组成部门**：不管这个部分多么重要，它都不可能超过自己所隶属的这个整体。
  - *3. 中央银行的业务活动和监管都是在国家授权下进行*
    - **虽然主要依靠经济手段并通过具体业务操作实现**：但其业务活动和监管都是在国家授权下进行的，具有一定的行政管理部门性质，央行主要负责人也大都由政府委任。`,isCore:!1},{id:19,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行保持相对独立性应遵循的原则。(p17)",points:2,content:`- 中央银行保持相对独立性应遵循的两项原则：	==2==

  - *1. 必须以国家的宏观经济目标为基本出发点*
    - **货币金融政策的制定及整个业务操作不能自行其是**：既要考虑自身所承担的任务及责任，也要符合国家的宏观经济目标，不能与国家的宏观经济目标相对立。
  - *2. 必须符合金融活动自身的规律性*
    - **业务操作及货币金融政策的制定不能完全受制于政府的短期行为**：应遵循金融活动的特有规律，对政府的短期行为起到一定抑制作用，防止为了特定政治需要和脱离实际的发展计划而牺牲货币政策，影响社会经济稳定与协调发展。`,isCore:!1},{id:20,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行相对独立性的类型。(p18)",points:3,content:`- 根据中央银行独立性的大小，可以分为三种类型：	==3==

  - *1. 独立性较强型*
    - **直接对议会或者国会负责，可以单独制定和执行货币政策**：政府不得对中央银行发布命令和指示，以德国、美国、瑞典、瑞士等国家为典型代表。
  - *2. 独立性居中型*
    - **中央银行隶属政府的财政部，在名义上独立性较弱，但实际上拥有较大的决策与管理权**：以英国、日本、加拿大等国家为典型。
  - *3. 独立性较弱型*
    - **隶属于政府的财政部，无论在名义上还是实际上都比较多地服从政府或财政部的指令**：以意大利、法国、澳大利亚、韩国等国家为典型。`,isCore:!1},{id:21,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中央银行与其他部门的关系。(p19-21)",points:3,content:`- 中央银行与其他部门的关系主要反映在三个方面：	==3==

  - *（一）中央银行与财政部门的关系*
    - **主要反映在三个方面**：1. 行政隶属关系（按独立性强弱分为较强型、居中型、较弱型）；2. 资金与业务往来关系（资本金大都由财政代表国家持有，利润除提存外全部交财政，亏损由财政弥补）；3. 政策关系（货币政策与财政政策需要协调配合，各行其是会抵消作用）。
  - *（二）中央银行与其他金融管理部门之间的关系*
    - **对金融业的具体管理各国存在体制差异**：有些国家全部由中央银行承担，有些国家由中央银行和另外的专门管理机构共同承担；专业化金融监管机构的出现是中央银行独立性的演变和发展。
  - *（三）中央银行与商业银行等金融机构之间的关系*
    - **处于领导和核心地位，基本上是领导与被领导、管理与被管理的关系，但不是行政意义上的隶属关系**：1. 从金融运行看，央行是全部金融活动的核心（货币流通中心、资金运动中心、社会信用活动中心）；2. 从业务关系看，央行是“银行的银行”，提供支付保证、融资、清算等服务；3. 从监督管理职责看，央行发挥“政府的银行”的管理作用，主要通过制定和实施政策及具体金融业务活动实现。`,isCore:!1},{id:22,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",sectionId:"2.2",sectionTitle:"第二节 中央银行的独立性",title:"中国人民银行的独立性。(p22)",points:4,content:`- 中国人民银行按通常标准属于独立性较弱型，但1984年以来独立性不断加强和完善，现行《中华人民共和国中国人民银行法》（2003年12月27日修正）的规定主要体现在四个条款：	==4==

  - *（1）《中国人民银行法》第二条*
    - **“中国人民银行在国务院领导下，制定和执行货币政策，防范和化解金融风险，维护金融稳定。”**
  - *（2）《中国人民银行法》第五条*
    - **“中国人民银行就年度货币供应量、利率、汇率和国务院规定的其他重要事项作出的决定，报国务院批准后执行。”**
  - *（3）《中国人民银行法》第七条*
    - **“中国人民银行在国务院领导下依法独立执行货币政策，履行职责，开展业务，不受地方政府、各级政府部门、社会团体和个人的干涉。”**
  - *（4）《中国人民银行法》第十二条*
    - **“中国人民银行设立货币政策委员会。”**其职责、组成和工作程序由国务院规定，报全国人大常委会备案，在国家宏观调控、货币政策制定和调整中发挥重要作用。`,isCore:!1},{id:23,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.1",sectionTitle:"第一节 中央银行业务活动法律规范与业务范围",title:"中央银行法的一般立法结构。(p3-4)",points:6,content:`- 中央银行法是调整中央银行的金融管理行为及由此产生的金融管理关系的法律规范的总称，其一般立法结构主要有六个部分：	==6==

  - *（一）总则*
    - **一般规定立法宗旨、中央银行所在地、分行体系、分行设立制度与撤销程序、中央银行资本来源及运用限制等**。
  - *（二）中央银行组织机构*
    - **主要包括最高领导机构理事会或管理委员会的组成、人数、来源、任期**：以及监事会职权与违法情况查处、行长或总裁的任期与职责及缺席代理、下设职能机构（业务、发行、国库、金融研究、会计、稽核等）及其职权范围。
  - *（三）中央银行货币政策目标和工具*
    - **明确规定中央银行货币政策目标**，以及为实现货币政策目标、进行宏观经济金融调控可以采用的手段和工具。
  - *（四）中央银行业务*
    - **规定中央银行履行职能所需要开展的一些银行性业务和管理性业务**。
  - *（五）中央银行的预算和决算*
    - **规定预算编制与决算审核程序**：每一会计年度开始前编制预算经理事会批准后执行，年度终了后作出决算报理事会审核，并规定银行会计各项目提取比例及损益调整方法等。
  - *（六）中央银行的法律责任*
    - **主要规定中央银行及其人员违法应承担的法律后果**：从法律责任主体看分为中央银行的责任、主要负责人的责任、直接责任人员的责任；从责任性质看分为行政责任、刑事责任。`,isCore:!0},{id:24,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.1",sectionTitle:"第一节 中央银行业务活动法律规范与业务范围",title:"中央银行的法定业务权利。(p5-6)",points:7,content:`- 中央银行的法定业务权利是指法律赋予中央银行在进行业务活动时可以行使的特殊权利，一般包括七项：	==7==

  - *1. 对金融市场和金融机构进行管理，并发布行政命令和规章制度*
    - **出于保障金融安全、保证金融业健康稳定发展和经济稳定增长的考虑**，各国政府均赋予中央银行制定和执行金融法规、规章的权力。
  - *2. 持有、管理和经营国家黄金、外汇储备*
    - **代理政府保存和管理黄金、外汇储备**：包括调控储备资金总量、调节储备资金结构、负责储备资金保值及经营收益、合理运用储备资金以实现国际收支平衡和汇率基本稳定。
  - *3. 代理国库业务、代理政府债券发行和兑付业务*
    - **代理国库具有四项优越性**：收缴库款方便、库款调拨灵活、资金安全且核算准确、有利于中央银行的宏观调控。
  - *4. 对金融机构和金融市场的相关活动进行稽核、检查*
    - **国际货币基金组织（IMF）要求中央银行对金融业开展稽核等业务**：以相关法律规定为准则、业务数据和会计统计资料为依据，由专职稽核人员进行定期和不定期检查、核对、监督和管理。
  - *5. 对全国的金融活动进行统计调查与分析预测*
    - **统一编制全国金融统计数据、报表**，按照国家规定定期予以公布。
  - *6. 央行财务收支的会计核算和内部监督与管理*
    - **对中央银行自身财务收支进行会计核算**，并开展内部监督与管理。
  - *7. 法律允许的其他业务*
    - **中央银行还可以根据法律开展其他业务**，如外国中央银行或政府存款、非存款货币银行的存款等。`,isCore:!0},{id:25,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.1",sectionTitle:"第一节 中央银行业务活动法律规范与业务范围",title:"中央银行的法定业务范围。(p7-8)",points:5,content:`- 根据中央银行法的规定，中央银行的法定业务范围一般包括五种业务：	==5==

  - *1. 发行货币*
    - **国家赋予中央银行集中与垄断货币发行的权利，使其成为全国唯一的货币发行机构**：垄断货币发行权是中央银行最基本、最重要的特征，是中央银行制度确立的标志，也是进行宏观调控的基础。
  - *2. 集中和保管存款准备金*
    - **负责集中保管银行业等存款金融机构的法定存款准备金和超额存款准备金**：成为金融机构的现金准备中心，并在此基础上为各金融机构办理相互之间的转账结算。
  - *3. 在公开市场上进行证券买卖业务*
    - **以市场交易者身份在金融市场买卖证券**：买入证券是向社会投放货币，卖出证券是将流通中的货币收回；目的是调节和控制货币供给量，不以交易盈利为目的。
  - *4. 为在中央银行开立账户的金融机构办理再贷款和再贴现业务*
    - **以存款准备金和货币发行为资金来源提供资金，成为最后贷款人**：向商业银行提供流动性资金支持如再贷款、再贴现，有利于增强整个信用担保系统的弹性。
  - *5. 组织、参与和管理全国清算*
    - **1854年英格兰银行采取对各银行间每日清算差额进行结算的做法，开了先河**：目前大部分国家央行担负组织管理全国清算的职责，通过金融机构在央行的存款准备金账户划拨资金成为最便捷的清算方式。`,isCore:!0},{id:26,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.1",sectionTitle:"第一节 中央银行业务活动法律规范与业务范围",title:"中央银行的法定业务限制。(p9)",points:6,content:`- 为确保央行认真履行职责、保持信誉权威和超然地位，各国中央银行法对央行业务活动的限制主要包括六个方面：	==6==

  - *1. 不得经营一般性银行业务或非银行金融业务*
    - **严禁中央银行介入一般性银行业务或非银行金融业务**。
  - *2. 不得向任何个人、企业或单位提供担保或直接发放贷款*
    - **不得向任何个人、企业或单位提供担保，不得直接向它们发放贷款**：有的国家还规定不得向地方政府、各级政府部门、非银行金融机构提供贷款。
  - *3. 不得直接从事商业票据的承兑、贴现业务*
    - **严禁中央银行直接办理微观商业票据的承兑与贴现业务**。
  - *4. 不得从事不动产买卖业务*
    - **不得参与不动产买卖等非调控性资产交易**。
  - *5. 不得从事商业性证券投资业务*
    - **不得以营利为目的从事商业性证券投资业务**。
  - *6. 一般不得向财政透支，不得直接认购、包销国债和其他政府债券*
    - **严格限制央行对财政的直接信用融通**，一般不得向财政透支，不得直接认购、包销国债和其他政府债券。`,isCore:!0},{id:27,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.2",sectionTitle:"第二节 中央银行业务活动的原则和分类",title:"中央银行业务活动的原则。(p10-11)",points:7,content:`- 中央银行的性质表明其不同于一般商业银行和金融机构，其业务活动遵循七大原则：	==7==

  - *1. 服从履行职责的需要*
    - **中央银行在一国金融体系中居于核心地位，由相关法律规定其职责**，作为发行的银行、银行的银行和政府的银行，肩负代表国家管理金融的职责。
  - *2. 不以盈利为目标*
    - **以制定和实施货币政策、维护金融和经济稳定为己任**，各项业务活动的开展都要视整个宏观经济和金融形势而定，且不以盈利为目标。
  - *3. 不经营一般商业银行业务*
    - **拥有垄断货币发行、代理国库、集中存款准备金、管理金融机构等特权**，享有一般金融机构不能享有的权利，不经营一般商业银行业务。
  - *4. 保持资产的流动性*
    - **一旦出现商业银行资金紧张甚至整体性银行流动性危机，或政府需要立即支出大笔款项时**，中央银行应该能够立即拥有并付出相当数量的可用资金，这要求其资产保持较高流动性。
  - *5. 保持业务的公开性*
    - **业务操作是为了通过自身行动影响金融机构、企业和一般公众**，保持业务公开性可使社会公众及时清晰了解货币政策意图，形成合理预期，增强货币政策效应。
  - *6. 保持业务的主动性和一定的独立性*
    - **资产负债业务直接与货币供给相关联**：货币发行直接形成流通中货币，存款准备金业务导致基础货币和货币乘数变化，再贴现与公开市场业务是提供基础货币的主要渠道，因而须保持主动性和一定独立性。
  - *7. 业务活动须遵循相应的法律规范*
    - **一般而言，中央银行业务只能在法定范围内进行**，不得经营法律许可以外的业务。`,isCore:!0},{id:28,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",sectionId:"3.2",sectionTitle:"第二节 中央银行业务活动的原则和分类",title:"中央银行业务活动的分类。(p12-15)",points:2,content:`- 按照中央银行的业务活动是否与货币资金的运动相关，一般可将其分为银行类业务和管理类业务两大类：	==2==

  - *（一）银行类业务*
    - **作为发行的银行、银行的银行与政府的银行所从事的业务，直接与货币资金相关并引起货币资金运动或数量变化**：包括1. 资产负债业务（准备金及其存款、货币发行、发行央行债券、再贴现和贷款、公开市场业务、黄金外汇业务）；2. 支付清算业务；3. 经理国库业务；4. 会计业务。
  - *（二）管理类业务*
    - **作为一国最高金融管理当局所从事的业务，与货币资金运动无直接关系且不导致数量或结构变化，需运用法定特权**：主要有存款准备金管理、货币流通管理、货币市场监管、黄金和外汇管理、征信管理、金融风险评估与管理、反洗钱和金融安全管理、国际金融活动与协调管理、金融统计业务以及对金融机构的稽核、检查、审计等业务。`,isCore:!1},{id:29,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"中央银行存款业务的目的。(p3-4)",points:4,content:`- 中央银行吸收存款的目的与商业银行不同（商业银行吸收存款是为了获取资金来源并通过资金运用创造利润，而中央银行是通过资金的运用创造资金来源），主要有四个目的：	==4==

  - *1. 调控信贷规模和货币供应量*
    - **中央银行可以通过存款业务集中相当的资金**，以便于在金融市场上自主地开展再贴现和公开市场操作，从而达到调控社会货币供应量的目的；同时通过对法定存款准备金比率的规定直接限制商业银行创造信用的规模，并通过调整比率间接影响商业银行超额准备金的数量，从而调控商业银行的信贷规模。
  - *2. 维护金融安全*
    - **中央银行可通过对存款制度的不同设计达到其金融监管、控制信贷结构、维持银行体系安全的目的**。例如，根据银行的资产质量来确定其存款准备金的比率，可促使银行提高内部风险管理的水平，提高银行体系抗拒风险的能力。
  - *3. 国内资金清算的需要*
    - **各金融机构在中央银行的存款是维护支付系统正常运转的物质基础**，各金融机构通过在中央银行的存款账户清算其债权债务，这是保障经济稳定运行的条件。
  - *4. 有利于调节现金发行量与货币结构*
    - **存款业务与流通中现金投放具有一定关系**，在资产业务既定的情况下，负债方若存款增加，可减少现金投放或增加回笼；若存款减少，可增加现金投放或减少回笼。存款增减虽不改变中央银行负债总额，但有利于调节现金发行量与货币结构。`,isCore:!0},{id:30,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"中央银行存款业务的特点。(p5)",points:4,content:`- 中央银行作为特殊的金融机构，其性质和职能决定其存款业务不同于一般商业银行的存款业务，具有四个特点：	==4==

  - *1. 存款的强制性*
    - **商业银行办理存款业务遵循“存款自愿，取款自由”的存款原则**，而中央银行收存存款往往遵循一国的金融法规制度，具有一定的强制性，存款数量和利率完全由中央银行确定，也表现出强制性。
  - *2. 存款用途及目标的特殊性*
    - **商业银行吸收存款是为了扩大资金来源争取盈利、实现利润最大化**；中央银行吸收存款是出于宏观调控和行使监管职能的需要，是为了控制信贷规模和调节货币供应量，从而达到稳定币值等目标。
  - *3. 存款人的特定性*
    - **商业银行直接吸收社会个人、工商企业的存款**；中央银行不以普通居民和企业为存款业务对象，而是收存商业银行、非银行金融机构、政府部门及特定部门的存款。
  - *4. 与存款当事人之间关系的特殊性*
    - **商业银行与存款当事人之间是一种纯粹的经济关系**（平等互利的经济关系）；中央银行与存款当事人之间除经济关系之外，还有管理者与被管理者的关系，二者之间并非完全平等的经济利益关系。`,isCore:!0},{id:31,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"存款准备金的含义。(p6)",points:5,content:`- 存款准备金是商业银行为应付客户提取存款和划拨清算的需要而设置的专项资金，其构成划分与两部分性质区别包括：	==5==

  - *自存准备与存储于中央银行的准备金*
    - **自存准备是为保证存款支付和票据清算而保留的货币资金**，通常以库存现金的方式保存在自己的业务库；另一部分则以存款形式存储于中央银行，即为存款准备金。
  - *法定存款准备金与超额存款准备金*
    - **法定存款准备金是由法定存款准备金率及商业银行存款总额来决定的**，必须存在中央银行存款准备金账户；超额存款准备金，也称为一般性存款，是商业银行为保持资金清算或同业资金往来自愿存在中央银行准备金账户上超过法定存款准备金的那部分存款。
  - *政策手段与信用创造条件的区别*
    - **法定存款准备金是中央银行调控信用规模和货币供给量的政策手段**；超额存款准备金是商业银行资产调整和信用创造的条件。
  - *决定因素的区别*
    - **法定存款准备金的大小主要取决于中央银行法定存款准备金比率的高低**；超额存款准备金主要取决于商业银行资产结构的选择以及持有超额准备金的机会成本。
  - *使用主动权的区别*
    - **法定存款准备金商业银行无权动用，其使用主动权在中央银行手中**；超额存款准备金商业银行可以自由使用，其能动性不在中央银行而在商业银行手中。`,isCore:!0},{id:32,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"实行存款准备金制度的意义。(p7)",points:4,content:`- 存款准备金制度是现代中央银行制度的一项极其重要的内容，也是各国中央银行执行货币政策的一个重要工具，意义体现在四个方面：	==4==

  - *(1) 保证银行的资金流动性和现金兑付能力*
    - **保证商业银行等金融机构的清偿能力，以备客户提现**，从而保障存款人的资金安全，同时避免商业银行等金融机构因流动性不足发生信用危机，维护自身的安全。
  - *(2) 控制货币供应量，实现一定的货币政策目标*
    - **货币供应量为基础货币与货币乘数之积，而法定存款准备金比率是决定乘数大小从而决定派生存款倍增能力的重要因素之一**。派生存款和货币供应量对法定存款准备金率的弹性系数很大，准备金率的微小变化将会导致货币供应量的大幅度增加或减少，因而法定存款准备金率可以成为中央银行调节货币供应量的政策工具。
  - *(3) 有助于中央银行进行结构调整*
    - **中央银行借助于准备金的缴存集中银行资金**，通过直接贷款或调整再贷款等计划分配手段，就可以实施以结构调整为目的的信贷控制。
  - *(4) 形成稳定且低成本甚至无成本的资金来源*
    - **中央银行集中的存款准备金不但可以形成中央银行稳定的资金来源，而且是低成本甚至是无成本资金来源**，这是因为中央银行对商业银行和存款机构收缴的存款准备金通常是不付利息的。`,isCore:!0},{id:33,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"规定存款准备金的构成。(p8)",points:2,content:`- 作为法定存款准备金的资产种类一般限定为金融机构在中央银行的存款（有些国家库存现金和政府债券等高度流动性资产也可作为存款准备金），在西方国家存款准备金分为两大类：	==2==

  - *(1) 第一准备（“现金准备”或“主要准备”）*
    - **是指银行应付客户提现，随时可以兑现的资产**，主要包括库存现金及存放在中央银行的法定准备金。
  - *(2) 第二准备（“保证准备”）*
    - **是指银行最容易变现而又不致遭受重大损失的资产**，如国库券及其他流动性资产。`,isCore:!1},{id:34,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"制定和调整法定存款准备金比率。(p8)",points:2,content:`- 商业银行等金融机构吸收的存款必须按法定存款准备金比率提取存款准备金并缴存中央银行，其余部分才能用作放款和投资，主要包括：	==2==

  - *(1) 确定法定存款准备金比率的类型和水平*
    - **法定存款准备金比率有两种类型**：一是统一准备金比率制，即所有金融机构不论存款类型统一采用一个比率，操作较简单；二是差别存款准备金比率，即按金融机构的种类、规模、经营环境及存款类别规定不同比率，有利于中央银行有效控制货币供应量。
  - *(2) 规定法定存款准备金比率的调整幅度*
    - **规定法定存款准备金比率的调整幅度的目的是降低存款准备率调整给商业银行和金融机构带来的巨大冲击**。当中央银行提高法定存款准备金率时，商业银行可运用资金减少、贷款能力下降、货币乘数变小，市场货币流通量相应减少；反之降低则会使货币供应量增加。`,isCore:!1},{id:35,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"按规定计提和管理存款准备金。(p9-10)",points:2,content:`- 按规定计提和管理存款准备金包括两个重要方面：	==2==

  - *(1) 规定存款准备金的缴存范围*
    - **即规定哪些金融机构的哪些存款需要缴存法定存款准备金**。这项规定直接影响该项制度的覆盖范围，决定着它在多大范围内发挥作用。
  - *(2) 确定存款准备金的计提办法*
    - **包括三方面内容**：一是存款准备金计提基础的确定（将调整期内日平均余额扣除应付未付款项，或将调整期末余额扣除应付未付款项，目前世界大多数国家采用月平均余额）；二是确定调整准备金的基期长度（我国目前为一旬）；三是确定以哪一基期的存款作为计提基础（当期准备金账户制或前期准备金账户制）。`,isCore:!1},{id:36,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"我国法定存款准备金制度的主要内容。(p11)",points:5,content:`- 我国的法定存款准备金，是银行业金融机构根据中国人民银行规定，按各项存款或各项负债总额的一定比例向人民银行缴存的存款，主要内容包括：	==5==

  - *(1) 存款准备金制度的实施对象*
    - **《中华人民共和国中国人民银行法》要求银行业金融机构**，即在中华人民共和国境内设立的商业银行、城市信用合作社、农村信用合作社等吸收公众存款的金融机构以及政策性银行按照规定的比例交存存款准备金。
  - *(2) 存款准备金缴存范围*
    - **我国现行的存款准备金制度，只对存款计提准备金**。
  - *(3) 规定和调整存款准备金率的机构*
    - **由中国人民银行规定和调整存款准备金率**。
  - *(4) 存款准备金的构成*
    - **我国商业银行的存款准备金包括三部分**：一是库存现金；二是法定存款准备金；三是超额存款准备金。
  - *(5) 准备金存款的计提*
    - **实行前期准备金账户制以及旬末和月末分别计算基期的方法进行准备金的缴存**。`,isCore:!0},{id:37,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"我国存款准备金制度与西方国家的差异。(p12)",points:2,content:`- 我国法定存款准备金制度与西方国家的通行做法有两方面的差异：	==2==

  - *(1) 未按存款类别计提准备金*
    - **西方国家中央银行对不同流动性的存款一般实行不同的法定存款准备金率**（如活期存款高于定期存款和储蓄存款）；我国虽然实行差别存款准备金率，但只与资本充足率、资产质量状况等指标挂钩（资本充足率越低、不良贷款比率越高，适用比率越高），而不是对所有存款类别按统一比率计提准备金。
  - *(2) 实行对准备金存款支付利息的制度*
    - **西方国家中央银行一般不对商业银行的准备金存款支付利息**；而中国人民银行对法定存款准备金和备付金支付利息，因为在金融职能逐步替代财政职能的过渡时期，我国法定存款准备金率较发达国家高很多，如不支付利息将会影响存款货币银行的经营。`,isCore:!1},{id:38,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"中央银行经理国库的优越性。(p13)",points:3,content:`- 中央银行经理国库业务是其履行政府银行职能的具体体现（国库制度分为独立国库制和委托国库制），其优越性在于：	==3==

  - *(1) 充分利用广泛的账户往来与金融服务关系*
    - **中央银行办理国库存款业务，可以充分利用银行与社会各部门、企业、个人之间密切的账户资金往来及金融服务关系**。
  - *(2) 便于国家预算收支的及时入库与按时拨付*
    - **便于国家预算收入的及时入库和预算支出的按时拨付**。
  - *(3) 为制定和实施货币政策提供重要依据*
    - **中央银行还可及时了解、掌握国家财政收支的现状和发展动态，为制定和实施货币政策提供重要依据**。`,isCore:!1},{id:39,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"中央银行其他存款业务的种类。(p13-14)",points:4,content:`- 除准备金存款和政府存款外，中央银行的其他存款业务包括四个种类：	==4==

  - *(一) 非银行金融机构存款*
    - **包括法定存款准备金和支付准备金两部分**，只是在具体操作和缴存比例上略有不同，目前我国各种非银行金融机构在人民银行的存款主要也是用于支付清算。
  - *(二) 外国存款*
    - **一般是指外国中央银行或外国政府在本国中央银行的存款**，主要是用于贸易结算和债务清算，构成本国的外汇，存款数量多少取决于他国的需要，对本国央行有较大被动性。
  - *(三) 特定机构和私人部门存款*
    - **特定机构是指非金融机构**，中央银行吸收特定机构存款主要是为了特定目的（如对特定地区、特定领域或特定项目发放特殊贷款形成的存款），有时也是为了扩大中央银行资金来源。
  - *(四) 特种存款*
    - **是在中央银行货币政策工具发挥作用有限的特殊情况下**，根据信贷资金的营运情况和银根松紧以及宏观调控的需要，采用存款方式集中部分金融机构一定数量的资金而形成的存款。`,isCore:!0},{id:40,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.1",sectionTitle:"第一节 中央银行存款业务",title:"特种存款业务的特点。(p14)",points:4,content:`- 特种存款业务有以下四个特点：	==4==

  - *1. 非常规性*
    - **中央银行一般只在特殊情况下为了达到特殊目的而开办**。
  - *2. 存款对象具有特定性*
    - **一般很少面向所有的金融机构**。
  - *3. 存款期限较短*
    - **存款期限较短，一般为一年**。
  - *4. 数量和利率完全由中央银行确定，具有一定的强制性*
    - **特定金融机构只能按规定的数量或比率及时足额地完成**。`,isCore:!0},{id:41,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"货币发行的两层含义及意义。(p15)",points:2,content:`- 统一货币发行是中央银行制度形成的基本动因之一，流通中的现金即是中央银行主要负债，其含义与意义包括：	==2==

  - *货币发行的两层含义*
    - **一是指货币从中央银行的发行库通过各家商业银行的业务库流向社会；二是指货币从中央银行流出的数量大于从流通中回笼的数量**，二者通常都被称为货币发行。
  - *货币发行的意义*
    - **既为商品流通和交换提供流通手段和支付手段，也相应筹集了社会资金**，满足中央银行履行其各项职能的需要；每张投入市场的纸币（又称通货）都是中央银行对持有者的负债，或说是持有者对中央银行的债权。`,isCore:!1},{id:42,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"货币发行的种类。(p16)",points:2,content:`- 货币发行按其发行性质可以分为两种：	==2==

  - *1. 经济发行*
    - **指中央银行根据国民经济发展的客观需要增加现金流通量，是通过正常的信贷渠道投放的**（不仅指现金发行，还包括增加存款货币的供应总量），既要满足经济增长对货币的需要，又要避免货币投放过多，防止通货膨胀或通货紧缩的发生。
  - *2. 财政发行*
    - **指为弥补国家财政赤字而进行的货币发行，是政府通过强制力量额外增加的货币发行**（包括国库直接发行和向银行借款或发行公债迫使央行额外增加发行），会形成超经济需要的过多货币量，导致市场供求失衡和物价上涨，影响货币流通、金融秩序的正常运行。`,isCore:!1},{id:43,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"货币发行的渠道。(p17)",points:3,content:`- 中央银行实现货币发行主要是通过资产业务活动，主渠道有三个（并通过同样的渠道反向组织货币的回笼）：	==3==

  - *1. 向商业银行或其他金融机构提供贷款*
    - **一是中央银行向商业银行或其他金融机构提供贷款**。
  - *2. 对商业银行或其他金融机构进行商业票据再贴现*
    - **二是中央银行对商业银行或其他金融机构进行商业票据再贴现**。
  - *3. 收购金银和外汇*
    - **三是中央银行收购金银和外汇**，并通过同样的渠道反向组织货币的回笼，从而满足国民经济发展、商品生产与流通扩张和收缩对流通手段和支付手段的需求。`,isCore:!1},{id:44,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"货币发行的原则。(p17-18)",points:3,content:`- 中央银行组织货币发行业务遵循三大原则：	==3==

  - *（一）垄断发行原则*
    - **是指货币发行权高度集中于中央银行，统一国内的通货形式**。有利于避免多头发行造成的货币流通混乱，增加货币发行收益以增强中央银行实力，便于制定和执行货币政策，灵活有效调节流通中货币量。
  - *（二）信用保证原则*
    - **是指货币投放要有一定的黄金或有价证券作保证**，即通过建立一定的发行准备制度以保证中央银行独立发行，避免出现财政发行。
  - *（三）弹性原则*
    - **是指货币发行要具有一定的伸缩性和灵活性，以适应经济状况变化的需要**，既要充分满足经济发展的要求，避免通货不足导致通货紧缩与经济衰退，也要严格控制货币发行数量，避免因通货过量供应造成通货膨胀与经济混乱。`,isCore:!1},{id:45,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"主要货币发行准备制度。(p19-21)",points:6,content:`- 货币发行准备制度大致经历了金属准备制度、保证准备制度、管理通货制度三个演变阶段，主要发行准备制度有六种：	==6==

  - *1. 现金准备发行制*
    - **货币的发行百分之百以黄金和外汇等现金做准备**。优点是能够严格控制货币发行量，货币价值有十足保证；缺点是缺乏弹性，不能适应经济发展需要。
  - *2. 证券保证准备制*
    - **货币发行以短期商业票据、短期国库券和政府公债做准备**。优点是弥补了现金准备制度的缺陷，发行的货币有了足够弹性；缺点是增加了控制货币发行的难度，易造成货币的财政发行，往往导致货币发行量的失控。
  - *3. 现金准备弹性比例制*
    - **货币发行数量超过规定的现金准备比例时，国家对超过部分的发行征收超额发行税**（若钞票回笼或现金增加达到规定比例则免征发行税）。兼顾了信用保证原则和弹性原则。
  - *4. 证券保证准备限额发行制*
    - **在规定的发行限额内，可全部用规定证券作发行准备，超过限额的发行必须以十足的现金作为发行准备**。有利于限制货币的财政发行，但缺乏弹性。
  - *5. 比例准备制*
    - **指规定货币发行准备中现金与其他有价证券所占的比例**，但各种准备资产的比例难以确定，典型国家有日本、英国。
  - *6. 无准备制度*
    - **中央银行发行货币并不要求持有一定的准备资产**，即国家以行政法规形式规定中央银行货币发行的最高增加额，典型的国家是中国（坚持信用发行原则，实际上发行保证是国家信用和中央银行信用）。`,isCore:!0},{id:46,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"人民币的发行原则。(p24)",points:3,content:`- 我国中央银行的货币发行坚持三大原则：	==3==

  - *1. 集中发行原则*
    - **人民币的印制权和发行权集中于中国人民银行**，中国人民银行是国务院授权的唯一发行货币的机关。
  - *2. 经济发行原则*
    - **中国人民银行发行货币必须根据国民经济需要**，不允许财政部门透支，不允许直接购买政府债券，不允许直接向社会公众和企事业单位直接投放现金；中国的发行准备以商品物资为保证。
  - *3. 计划发行原则*
    - **中国人民银行总行制定发行计划（总限额），报经国务院批准后组织实施**，逐级分配指标。`,isCore:!1},{id:47,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"发行库与业务库的区别与联系。(p22-23)",points:3,content:`- 发行库与业务库在性质、任务和库存限额管理上的核心内容包括：	==3==

  - *1. 发行库及其任务*
    - **发行库是发行基金的保管库**，中国人民银行总行设有总发行库（总库），并在其分支机构设有分支库。主要任务是：统一调度发行基金；具体办理货币发行工作和损伤票币的收回、销毁工作；保管、调运发行基金，调剂市场各种票币的流通比例；办理会计发行业务的会计核算，反映市场货币投放与回笼情况。
  - *2. 业务库与业务库存限额*
    - **业务库是商业银行为了办理日常现金收付业务而建立的金库**，存放的现金是营运资金的组成部分；由上级银行和同级人民银行给每个业务库核定业务库存限额，以减少库存现金、降低交易成本。
  - *3. 发行基金与现金的相互转化*
    - **发行基金是尚未发行的票币（不具备货币职能），现金是现实的流通货币**。当商业银行现金收入超过库存限额时，超过部分存入发行库形成现金回笼（转化为发行基金）；当业务库存现金不足时，从发行库调入商业银行形成现金投放（转化为现金）。`,isCore:!1},{id:48,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.2",sectionTitle:"第二节 中央银行货币发行业务",title:"人民币的发行程序。(p24)",points:2,content:`- 人民币的发行程序主要包括计划审批与出库调拨两个环节：	==2==

  - *1. 制定与逐级分配发行计划*
    - **中国人民银行总行制定发行计划（总限额），报经国务院批准后组织实施**；经与各商业银行总行协商后，核定出各省、自治区和直辖市的货币投放与回笼计划，再经中国人民银行分行与各商业银行分行商定，逐级分配指标。
  - *2. 发行库统一管理与按限额调拨出库*
    - **中国人民银行设立发行库具体办理现金出入库**。发行基金由总库统一管理，下级库只能根据上级库核定的限额和调拨命令办理出库。`,isCore:!1},{id:49,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.3",sectionTitle:"第三节 中央银行其他负债业务",title:"发行中央银行债券的目的及意义。(p25)",points:2,content:`- 中央银行债券是中央银行的主动负债业务，其概念、目的与意义包括：	==2==

  - *中央银行债券的概念与特点*
    - **中央银行债券是中央银行发行的具有固定面额和期限，到期由中央银行还本付息的记名式有价证券**，发行对象主要是国内金融机构；不同于一般金融机构筹集资金，央行发债更多考虑调节流通中的货币，具有可控制性、抗干扰性和预防性。
  - *发行中央银行债券的目的与意义*
    - **在商业银行等金融机构超额储备过多或公开市场操作中缺乏足够适合证券时，通过发行央行债券回笼资金、减少流通中货币**，有效控制货币供应量；当央行买进已发行债券时超额储备增加、货币供应量增加，卖出时则减少；在许多发展中国家往往成为公开市场操作的主要工具（“三大法宝”之一），通过调整自身负债结构减少商业银行可贷资金量，间接控制商业银行贷款规模。`,isCore:!1},{id:50,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.3",sectionTitle:"第三节 中央银行其他负债业务",title:"中央银行债券与国库券的区别。(p26-27)",points:4,content:`- 中央银行债券与国库券存在四个方面的区别：	==4==

  - *1. 政策目标不同*
    - **发行中央银行债券的目的是调控流通中的货币量**，即吸收多余的货币量实行紧缩的货币政策；发行国库券的目的是弥补政府财政收支失衡或财政预算赤字，以促进经济发展。
  - *2. 持有证券的主体不同*
    - **中央银行债券的持有者是经过特许的金融机构**；国库券的持有者可以是金融机构，也可以是其他企业组织、社会团体以及其他的自然人。
  - *3. 金融运行的结果不同*
    - **中央银行债券的发行或回购只影响流通中的货币量**，所获得的资金并不直接参加经济活动；发行国库券所获得的资金直接进入社会生产过程，影响流通中的货币量，并对下一期的财政预算产生直接影响。
  - *4. 作为公开市场操作工具利弊不同*
    - **中央银行债券不受财政预算、国债规模等外在因素影响，操作更便利**，但会导致央行成本过高，通常作为公开市场操作的备用工具；国库券受外在因素影响，但发行及交易成本较低，作为公开市场操作的常用工具。`,isCore:!0},{id:51,chapterId:4,chapterTitle:"第四章 中央银行负债业务",sectionId:"4.3",sectionTitle:"第三节 中央银行其他负债业务",title:"中央银行对外负债的目的。(p28)",points:3,content:`- 中央银行对外负债业务主要包括从国外银行借贷、向外国中央银行借款、申请国际金融机构的贷款、在国外发行中央银行债券等，目的有三个：	==3==

  - *(1) 平衡国际收支*
    - **为弥补国际收支逆差，中央银行通常采取国际贷款的方式**，包括国际金融机构贷款、外国政府贷款和国际性银行贷款等。
  - *(2) 维持本币汇率的既定水平*
    - **当本国的外汇储备不足时，需要通过对外负债筹措外汇**，以保持或增强中央银行对外汇市场的干预能力，调节汇率。
  - *(3) 应对货币危机或金融危机*
    - **一旦出现危机，中央银行在干预市场的过程中，通过对外负债业务从国外筹措外汇资金**，以增强中央银行的调控能力。`,isCore:!1},{id:52,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.1",sectionTitle:"第一节 中央银行的再贴现和贷款业务",title:"再贴现和贷款业务的重要性。(p3-4)",points:3,content:`- 再贴现和贷款是中央银行对商业银行等金融机构提供融资的主要方式，其重要性主要体现在三点：	==3==

  - *（一）再贴现和贷款业务是中央银行履行“最后贷款人”职能的重要手段*
    - **商业银行等金融机构因存款被过度运用出现资金周转不灵、兑现困难时**，中央银行通过再贴现和贷款业务提供必要的资金融通和支持，以保证其正常运营，这是最后的解决手段。
  - *（二）再贴现和贷款业务是中央银行提供基础货币的重要渠道*
    - **中央银行提供的基础货币与商业银行的货币创造是一种源与流的关系**。中央银行虽然不对一般企事业单位发放贷款，不能派生存款，但却掌握着商业银行创造存款货币的源头，是基础货币的创造与提供者。
  - *（三）再贴现利率是中央银行调控货币供应量的重要工具*
    - **当中央银行提高或降低再贴现利率时，将提高或降低商业银行获得资金的价格**，引起商业银行减少或增加贴现的数量，导致金融市场上资金供给的减少或增加以及利率的上升或下降，达到调控信贷规模、影响社会货币量的目的。`,isCore:!1},{id:53,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.1",sectionTitle:"第一节 中央银行的再贴现和贷款业务",title:"再贴现业务的一般规定。(p5-8)",points:7,content:`- 再贴现业务的一般规定包括七个方面：	==7==

  - *1. 再贴现业务的对象*
    - **很多国家都规定只有在中央银行开设账户的商业银行等存款货币银行才能成为再贴现业务的对象**。
  - *2. 再贴现票据的规定*
    - **强调申请再贴现的票据必须是以确实的商品交易为基础的真实票据**（如美联储规定商业票据不超过90天、农产品票据不超过9个月、自偿性票据；英格兰银行规定两家信誉极佳企业签署且国库券距到期日1个月以内；德国规定真实商品交易且三个责任人担保、3个月内到期）。
  - *3. 再贴现业务的申请和审查*
    - **商业银行必须以已办理贴现的未到期的合法票据申请再贴现**，央行审查票据合理性和申请者资金运营状况，通过后申请者在票据上背书并逐笔填制再贴现凭证。
  - *4. 再贴现利率*
    - **申请再贴现的合法票据期限一般不超过3个月，最长期限也在1年以内，所以再贴现利率是一种短期利率**；有些国家将其保持在比货币市场利率高一些的水平上作为“惩罚性”利率，限制商业银行过多向央行融资。
  - *5. 再贴现金额*
    - **再贴现金额是再贴现时实际支付的金额**，由票据面额扣除再贴现利息计算而得（再贴现利息=票据面额×日再贴现率×贴现日数，仅与票据面额和再贴现率有关，与票据原有利息无关）。
  - *6. 再贴现额度的规定*
    - **不少国家为了强化货币政策与金融监管的配合，都限制了商业银行的再贴现金额**，并对过多利用该权利的商业银行进行检查。
  - *7. 再贴现的收回*
    - **再贴现的票据到期后，中央银行通过票据交换和清算系统向承兑单位或承兑银行收回资金**；若存款单位账户资金不足，则退给再贴现的商业银行，按逾期贷款处理。`,isCore:!0},{id:54,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.1",sectionTitle:"第一节 中央银行的再贴现和贷款业务",title:"再贴现业务的作用机制。(p8-10)",points:3,content:`- 再贴现业务的作用机制主要体现在三个方面：	==3==

  - *1. 购买资产创造负债的资产负债表机制*
    - **中央银行通过购买或出售一种资产创造或冲销自身的负债**：通过再贴现购买商业银行票据，在增加自己票据资产的同时，增加负债方的商业银行准备金存款（或新发行货币）；商业银行则增加准备金存款（或现金）、减少票据，从而改变资产构成。
  - *2. 转让价格（再贴现率）影响改变资产构成的能力与成本*
    - **再贴现利率越低，票据转让价格越高，商业银行购买新资产的能力就越大**；反之则小，从而体现中央银行扩大或收缩货币供应量的意图。
  - *3. 准备金存款推动银行体系倍数扩张*
    - **商业银行在中央银行账户中的准备金存款通常是没有利息收入的**，为获取更多利润，商业银行将会把这笔资金用于贷款或购买证券，引起整个银行体系资产负债的倍数扩张，从而控制和调节贷款规模，影响社会货币量的变化。`,isCore:!1},{id:55,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.1",sectionTitle:"第一节 中央银行的再贴现和贷款业务",title:"中央银行贷款业务的分类。(p11-13)",points:4,content:`- 中央银行采用信用放款或抵押放款形式发放贷款，按对象分为四类：	==4==

  - *1. 对商业银行等存款货币银行的贷款*
    - **是中央银行放款中最主要的种类**，目的是解决临时性短缺资金需要、补充流动性及在紧急情况下保证最后清偿能力，主要是短期的流动性贷款或季节性贷款（不能发放长期贷款）。
  - *2. 对非货币金融机构的贷款*
    - **非货币金融机构是指不吸收一般存款的特定金融机构**，在我国国家金融统计中主要包括政策性银行（国家开发银行、中国进出口银行，以及统计归于政策性银行的中国农业发展银行）、金融信托投资公司、证券公司、租赁公司、财务公司。
  - *3. 对政府贷款*
    - **是政府弥补资金亏空的应急措施之一**，可通过直接提供贷款和买入政府债券两条渠道进行；为防止过度透支引发通货膨胀，各国都严格控制，对政府的直接贷款限定为短期性供应并限制限额和期限。
  - *4. 其他贷款*
    - **按照贷款对象主要有两类**：一类是对非金融机构的特定目的贷款（如中国人民银行对落后地区经济开发发放的特殊贷款）；另一类是对外国政府和国外金融机构的贷款（统计在“国外资产”项下，如中日韩与东盟十国货币互换协议）。`,isCore:!0},{id:56,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.2",sectionTitle:"第二节 中央银行的证券买卖业务",title:"中央银行买卖证券的意义。(p14)",points:2,content:`- 中央银行在公开市场买卖证券不是为了盈利，其重要意义体现在两个方面：	==2==

  - *（一）调控商业银行等存款货币机构的准备金和货币供应量*
    - **需要收缩银根时在市场上抛出有价证券，减少银行体系准备金，压缩贷款、紧缩货币供应量**；需要扩张信贷、增加货币供应量时购进有价证券，增加准备金，刺激贷款、扩大货币供应量。
  - *（二）影响利率水平和利率结构*
    - **通过购买有价证券促使证券需求增加，引起价格上升和利率下降；卖出则引起价格下降和利率上升**。同时通过买卖不同证券改变不同证券的供求状况，影响利率结构，进而影响对不同利率敏感的贷款和投资，实现多重货币政策目标。`,isCore:!1},{id:57,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.2",sectionTitle:"第二节 中央银行的证券买卖业务",title:"证券买卖业务与贷款业务的相同之处。(p15)",points:3,content:`- 证券买卖业务与贷款业务在三个方面具有相同之处：	==3==

  - *1. 融资效果相同*
    - **中央银行买入证券实际上是以自己创造的负债来扩大资产，相当于中央银行的贷款**；而卖出证券，则相当于贷款的收回。
  - *2. 对货币供应量的影响相同*
    - **都会通过货币乘数作用引起货币供应量的多倍扩张与收缩**。买进证券同发放贷款一样增加商业银行超额储备、扩大贷款规模和社会货币供应总量；卖出证券则如同收回贷款，引起社会货币供应总量减少。
  - *3. 两者都是中央银行调节和控制货币供应量的工具*
    - **都是中央银行可以直接控制的**，其运用可对基础货币、银行储备、货币供应量、利率及金融机构信贷活动产生直接或间接影响，从而对整个宏观经济运行产生影响。`,isCore:!1},{id:58,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.2",sectionTitle:"第二节 中央银行的证券买卖业务",title:"证券买卖业务与贷款业务的区别。(p16)",points:4,content:`- 证券买卖业务与贷款业务存在四个方面的区别：	==4==

  - *1. 资金流动性不同*
    - **证券随时可以买卖，不存在到期问题，且可进行逆向操作随时修正政策方向**，因此证券买卖业务流动性比有期限约定的贷款业务要强。
  - *2. 两者收益不同*
    - **通过贷款业务可获取一定利息收入**；证券如果到期同样有利息收入，对于未到期的证券买卖虽然没有利息收入，但有买卖价差的收益。
  - *3. 两者依据不同*
    - **证券买卖以证券质量为依据**；信用贷款以商业银行信用为依据，抵押贷款既以商业银行信用为依据，也以抵押物的质量为依据。
  - *4. 两者对经济金融环境的要求不一样*
    - **证券买卖业务对经济金融环境的要求较高，需要以较为发达的有价证券市场为前提**；从事贷款业务则对经济金融环境要求较低，一般国家的中央银行都可以从事贷款业务。`,isCore:!1},{id:59,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.2",sectionTitle:"第二节 中央银行的证券买卖业务",title:"中央银行买卖证券的种类及操作方式。(p17-20)",points:4,content:`- 中央银行证券买卖的种类及业务操作包括四个要点：	==4==

  - *1. 买卖证券的种类*
    - **必须遵循高度流动性原则，主要限定在政府债券、国库券等流动性很高的安全证券**，通常以国债为主要对象（有些国家还允许买卖证券交易所正式挂牌的上市债券）。
  - *2. 证券买卖市场的规定*
    - **为了防止直接购买政府债券沦为弥补财政赤字的工具而引发通货膨胀，一般限定中央银行证券买卖业务只能在二级市场进行**。
  - *3. 买卖证券的方式*
    - **公开市场的证券买卖方式有两种，即回购和现券交易**。回购（防御性）分为正回购（卖出并约定未来买回，收回流动性）和逆回购（相反，投放流动性）；现券交易（主动出击性）分为买断（一次性投放基础货币）和卖断（一次性回笼基础货币）。
  - *4. 证券买卖业务的作用机制*
    - **中央银行处于主动地位，具有弹性大、震荡较小和较强可逆转性的特点**；购进商业银行所持债券在增加债券资产的同时增加商业银行准备金存款（或发行货币），商业银行据此增加贷款或购买其他债券，引起整个银行体系资产负债连续变化。`,isCore:!1},{id:60,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.3",sectionTitle:"第三节 中央银行黄金外汇储备业务",title:"中央银行保管和经营黄金外汇储备的目的和意义。(p21-22)",points:4,content:`- 中央银行保管和经营黄金外汇储备的目的和意义体现在四个方面：	==4==

  - *1. 保管和经营的目的*
    - **最初中央银行持有黄金外汇储备是为了应付银行券兑现的需要**，后来逐渐演变成国际支付手段的准备金（在国际收支发生逆差时用来进行债务清偿）和一国对外经济交往实力的象征。
  - *2. 稳定币值*
    - **在国内商品供应不足之时，从国外进口商品或直接向社会出售黄金外汇**，回笼货币，平抑物价，保持稳定币值。
  - *3. 稳定汇率*
    - **在浮动汇率制度下，中央银行通过买卖黄金外汇，使汇率维持在合理水平**，以稳定本币的对外价值。
  - *4. 调节国际收支*
    - **当一国国际收支出现逆差时，动用黄金外汇储备补足所需外汇的不足**；当经常项目出现顺差、储备充足时，则可用其清偿外债，减少外国资本流入。`,isCore:!0},{id:61,chapterId:5,chapterTitle:"第五章 中央银行资产业务",sectionId:"5.3",sectionTitle:"第三节 中央银行黄金外汇储备业务",title:"中国国际储备管理与规模控制。(p25-27)",points:3,content:`- 中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和SDR四部分构成，主体是外汇储备，其来源、规模管理与构成原则包括：	==3==

  - *1. 中国外汇储备的来源*
    - **第一，国际收支顺差**（货物项目、直接投资的顺差是主要来源）；**第二，制度因素**（1994年以来实施有管理的浮动汇率制度，为抑制人民币升值不断买入外汇抛售本币）；**第三，热钱（hot money）流入**（出于对人民币升值预期流入的短期资本）。
  - *2. 中国外汇储备的规模管理*
    - **第一，促进国际收支平衡**，转变经济发展方式，抑制双顺差不断增长；**第二，改革汇率制度和外汇管理制度**，增加人民币汇率弹性，将强制结售汇向意愿结售汇转变，促进民间藏汇；**第三，加强对跨境资本流动的监管**，控制热钱流入。
  - *3. 保持合理的黄金外汇储备构成*
    - **从安全性、流动性和收益性三方面考虑各储备资产的构成**；由于黄金储备相对稳定、IMF储备头寸和SDR短期变动不大，规模管理中更为重要的是外汇资产规模及不同币种的搭配问题。`,isCore:!1},{id:62,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.1",sectionTitle:"第一节 中央银行支付清算业务的产生与发展",title:"中央银行支付清算业务的重要性。(p4-5)",points:3,content:`- 中央银行支付清算业务的重要性体现在三个方面：	==3==

  - *1. 保障经济和社会生活正常运转*
    - **商业银行等金融机构都在中央银行依法开立存款准备金账户**，同城、异地及跨国交易所产生的债权债务均可通过中央银行得以最终清偿，这对提高资金转移效率、保障经济和社会生活正常进行具有重要意义。
  - *2. 对货币政策的顺利实施具有重要影响*
    - **第一，有效进行公开市场操作的前提之一是拥有灵活、高效的支付体系和清算机制**；第二，有助于增强货币市场的流动性，增强货币政策效应；第三，可通过提供高效率的清算服务，减少在途资金。
  - *3. 与金融稳定有密切关系*
    - **支付系统安全是金融安全的前提**。支付清算系统是金融信息和金融危机的主要传播渠道，一家银行不能履行支付义务很可能引发连锁违约，使整个清算系统发生阻滞或瘫痪，因此中央银行非常重视对支付系统的风险管理。`,isCore:!1},{id:63,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.1",sectionTitle:"第一节 中央银行支付清算业务的产生与发展",title:"中央银行支付清算体系的构成。(p6-7)",points:4,content:`- 支付清算体系是指中央银行向金融机构提供资金清算服务的综合安排，包括四个组成部分：	==4==

  - *（一）清算机构*
    - **是为金融机构提供资金清算服务的中介组织**，组织形式有票据交换所、清算中心、清算协会等（有私营与政府/货币当局组建、地方性与全国性、国内与国际性之分）。
  - *（二）支付系统*
    - **是在既定的规则框架下，由提供支付服务的中介机构和专业技术手段共同组成，用以实现债权债务清偿及资金转移的综合金融安排**，有三个基本组成部分：规则、机构和技术机制；央行对支付系统实行监督并直接拥有和经营大额支付系统。
  - *（三）支付结算制度*
    - **就是关于结算活动的规章政策、操作程序、实施范围等的规定与安排**，中央银行负责制定支付结算制度并负有结算监督职权。
  - *（四）银行间清算制度及操作*
    - **是为实现金融机构之间为客户委托业务和自身经营需要所进行的债权债务清偿与资金划转而制定的规则程序与制度安排**。`,isCore:!0},{id:64,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.2",sectionTitle:"第二节 中央银行的支付清算运行",title:"支付清算运作的基本原理（净额与全额清算）。(p8-11)",points:2,content:`- 支付系统清算包括发出支付信息和实现资金划转两个基本程序，按对转账资金的不同处理方式分为两种系统：	==2==

  - *（一）净额清算系统*
    - **在一定时点（通常为营业日结束时）将收到的转账金额总数减去发出的转账金额总数得出净结算头寸**，通过中央银行或清算银行进行双边或多边划转。优越性：批量处理，大大减少必须支付的绝对量；弊端：净债权银行向净债务银行提供日间信贷产生信用风险和流动性风险隐患，且面临轧差结果被作废的法律风险。
  - *（二）全额清算系统*
    - **对金融机构的每笔转账业务进行一一对应结算**，分为定时（延时）清算和实时（连续）清算（RTGS）。优势：减少跨行清算信用风险、信贷规模和流动性风险，消除交易被作废可能性，限制系统风险；弊端：对发起行清偿能力提出严格要求，参与者需为保持当日流动性付出较大成本。`,isCore:!1},{id:65,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.2",sectionTitle:"第二节 中央银行的支付清算运行",title:"支付清算业务的主要内容。(p12-15)",points:4,content:`- 中央银行支付清算业务的主要内容涵盖四个方面：	==4==

  - *（一）组织票据交换和清算*
    - **票据交换是最基本的行间清算手段之一**，资金清算一般通过各银行或清算机构在中央银行开立的账户完成彼此间的债权债务抵消和资金清算。
  - *（二）办理异地跨行清算*
    - **在全国范围内办理异地资金转移**，中央银行分支机构扣除汇出行账户资金后通过清算中心通知汇入行所在地区央行分支机构划入资金，既提供服务又便于了解情况、实施监督管理。
  - *（三）提供跨国清算服务*
    - **中央银行在对外支付结算和跨国支付系统中发挥着重要作用**，通过跨国清算系统核对后在中央银行账户间完成资金划转。
  - *（四）提供证券和金融衍生工具交易清算服务*
    - **证券交易金额较大、关系公开市场操作效果**，很多央行通过大额支付系统直接提供清算服务，如英格兰银行的中央金边证券系统（CGO）和中央货币市场系统（CMO）、日本银行的BOJ-NET。`,isCore:!0},{id:66,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.2",sectionTitle:"第二节 中央银行的支付清算运行",title:"支付清算系统的主要分类。(p15-18)",points:4,content:`- 支付清算系统按两个维度划分为四类：	==4==

  - *1. 净额定时支付系统（DNS）*
    - **在定期进行双边或多边轧差基础上进行资金转账的支付系统**。特点：延迟清算（存在时间差）、每日预定时间或日终定期最终清算、可基于也可不基于央行货币、西方国家一般由私人部门拥有或运营。
  - *2. 实时全额支付系统（RTGS）*
    - **可以连续（实时）进行资金转账指令处理和最终结算的全额支付系统**。特点：单笔进行不必借贷轧差、实时最终结算、依托央行货币实时转账、采用电信网络实时发送和处理信息。
  - *3. 大额支付系统（HVPS）*
    - **单笔交易金额巨大、交易笔数较少、对安全性要求高、付款时间要求紧迫的支付方式**，是一国支付清算体系的主干线，可分为央行全额连续无透支、央行全额连续有限透支、央行定时差额结算和私营多方净额批量清算四种模式。
  - *4. 小额支付系统（零售支付系统）*
    - **主要处理大量每笔金额相对较小、对时间要求不紧迫的支付指令**（如私人支票、ATM机、POS业务），常采用批量、定时方式处理。`,isCore:!1},{id:67,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.3",sectionTitle:"第三节 中央银行在跨国支付清算中的作用",title:"跨国支付清算的特征。(p19-20)",points:5,content:`- 跨国支付清算既是一项银行业务，也是一种跨国经济行为，具有五个特征：	==5==

  - *（一）具有“国际性”特征*
    - **解决的是国际间的资金转移与债权债务清偿**，其效率不仅取决于各国银行的业务水平，也取决于国际金融合作及跨国支付系统的效率及稳定性。
  - *（二）涉及不同国家的货币*
    - **跨国支付必然涉及不同国家的货币**，基本任务是通过各种货币之间的兑付与转账划拨，实现国际间债权债务的清偿与资金转移。
  - *（三）涉及不同的支付清算安排*
    - **跨国支付根据交易方式及参与者的不同有相应的清算安排**。
  - *（四）需要借助跨国支付系统及银行账户实现跨国行间清算*
    - **跨国支付处理国际间的资金转移与债权债务清偿**，必须借助跨国支付系统实现跨国行间清算。
  - *（五）中央银行在跨国支付清算活动中具有重要作用*
    - **鉴于一国对外支付事关国家利益与金融安全**，中央银行往往通过直接或间接方式介入或进行干预。`,isCore:!0},{id:68,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.4",sectionTitle:"第四节 中央银行支付体系的风险管理",title:"支付系统面临的主要风险类型。(p24-25)",points:6,content:`- 支付系统风险就是支付系统不能正常运行的可能性，通常包括六种风险：	==6==

  - *（一）信用风险*
    - **交易中的订约方既不能在法定的时间内，也不能在法定时间以后的任何时间里全额结算其债务时所构成的风险**，即参与者发生清偿力危机无法履行支付义务所导致的风险。
  - *（二）流动性风险*
    - **交易一方（或结算系统参加者）不能在到期日结算负债的全部金额的风险**，即参与者无法如期结清支付指令所导致的风险。
  - *（三）系统风险*
    - **在支付系统运行中，因某一参加者不能履行债务义务而造成其他参加者无法履约，从而使系统陷入整体性运行瘫痪的可能性**，多米诺骨牌效应将引发严重的系统运行紊乱。
  - *（四）法律风险*
    - **因无法可依或者法律对支付参与者权利义务界定不清所导致的风险**，主要来源有结算终结性、破产法中的“零点规则”、轧差的合法性、抵押物利益和回购协议争议等。
  - *（五）操作风险*
    - **内部或者外部技术问题导致支付活动不能正常进行的风险**，如电子数据处理设备或通信系统出现技术性故障。
  - *（六）道德风险*
    - **因系统运营者和参与者的内部作案导致的系统风险**，内部控制不健全是道德风险爆发的重要原因。`,isCore:!0},{id:69,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.4",sectionTitle:"第四节 中央银行支付体系的风险管理",title:"中央银行支付系统风险的防范与控制措施。(p26-27)",points:6,content:`- 中央银行支付系统风险的防范与控制通常包括六项内容：	==6==

  - *（一）对支付系统进行缜密设计*
    - **是防范和化解支付系统风险的基础**，国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“核心原则”。
  - *（二）对支付系统进行必要的监测*
    - **识别可能的风险并及时采取应对之策**，参与者可提取一定准备金缓冲冲击，并采取事后化解的应急措施。
  - *（三）对大额支付系统透支进行限制*
    - **防止透支者未能在规定期间内补足透支头寸使中央银行蒙受信用风险损失**，采取相应的限制性措施。
  - *（四）对私营大额支付系统进行监控*
    - **由于私营大额多边净额支付系统需通过央行清算服务实现资金最终划转**，央行要求其必须建立风险防控机制，保证各清算参加者净额头寸在规定时间内完成清算。
  - *（五）引入RTGS系统*
    - **消除净额结算所产生的结算时隔**，实时全额结算模式因具有实时（连续）、全额、终局性等特点，成为国际社会广泛采用的风控手段。
  - *（六）对小额零售支付系统进行监控*
    - **小额零售支付系统业务量巨大、种类多、覆盖范围广泛**，其运行风险对银行信誉及社会稳定构成威胁。`,isCore:!0},{id:70,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",sectionId:"6.5",sectionTitle:"第五节 中国支付清算体系的发展",title:"中国人民银行运营的支付系统体系。(p29-31)",points:5,content:`- 中国现代化支付系统（CNAPS）是中国人民银行开发建设的骨干应用系统，目前有5个子系统在运行中：	==5==

  - *1. 大额实时支付系统*
    - **逐笔发送支付指令，全额实时清算资金**，为各银行、企事业单位及金融市场提供快速、高效、安全的支付清算服务，对央行实施货币政策和货币市场交易资金即时清算具有重要作用。
  - *2. 小额批量支付系统*
    - **2006年6月完成全国推广**，采取批量发送支付指令，轧差净额清算资金，实行7×24小时不间断运行，并通过净借记限额管理有效防范信用风险。
  - *3. 中央银行会计核算数据集中系统*
    - **2014年6月30日完成全国营业网点推广**，是中国人民银行为履行职责进行会计核算业务处理的应用系统，体现央行作为资金最终结算者的重要地位。
  - *4. 境内外币支付系统*
    - **主要为国内商业银行提供外币清算服务**，目前已开通港元、英镑、欧元、日元、加拿大元、澳大利亚元、瑞士法郎和美元8种货币支付业务。
  - *5. 网上支付跨行清算系统*
    - **主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务**，可实现跨行账户信息查询及资金归并，便利个人财富管理。`,isCore:!0},{id:71,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"货币政策的含义与地位。(p3)",points:2,content:`- 货币政策是现代市场经济国家重要的宏观经济调控手段之一，其含义与地位包括：	==2==

  - *（一）货币政策的含义*
    - **中央银行为实现一定的经济目标**，运用各种工具调节和控制货币供给量，进而影响宏观经济的方针和措施的总和。
  - *（二）货币政策在宏观经济政策中的地位*
    - **货币政策在国家的宏观经济政策中居于十分重要的地位**，货币政策的变化会引起总需求和总供给的变化、一般价格水平的变化、经济增长速度和经济结构的变化、国际收支平衡的变化等。`,isCore:!1},{id:72,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"货币政策的五大目标。(p3)",points:5,content:`- 货币政策作为国家重要的宏观调控政策之一，主要有五个目标：	==5==

  - *（一）促进社会总需求与总供给的均衡，保持稳定币值*
    - **保持稳定币值**，避免通货膨胀或通货紧缩，促进社会总需求与总供给的均衡。
  - *（二）促进经济稳定增长*
    - **保持宏观经济长期稳定持续的增长**，有效利用资源并增加生产潜力。
  - *（三）促进充分就业，实现社会稳定*
    - **把失业降低到自然失业率水平**，避免总需求不足导致的失业，实现社会稳定。
  - *（四）促进国际收支平衡，保持汇率相对稳定*
    - **调节国际收支失衡**，减少巨额逆差或顺差的发生，保持汇率相对稳定。
  - *（五）保持金融稳定，防范金融危机*
    - **防范严重的货币与金融危机**，维护金融体系与国民经济的稳定安全。`,isCore:!0},{id:73,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"货币政策的特征。(p4-5)",points:4,content:`- 一般来说，货币政策具有以下四个特征：	==4==

  - *（一）货币政策是宏观经济政策*
    - **目标是实现经济增长、充分就业、物价稳定、国际收支平衡**，作用对象是与宏观经济目标有关联的货币供应量、利率、汇率、金融市场有关指标，而非直接涉及微观经济主体活动，与财政政策、收入分配政策、产业政策等共同构成国家宏观调控政策体系。
  - *（二）货币政策是一种需求管理政策，并间接影响总供给*
    - **通过利率、再贴现率、公开市场业务、信贷规模等直接和间接政策手段**，改变市场货币供应量，对消费、投资、进出口等经济行为产生影响，使总需求水平发生变化，最终通过改变总需求而影响总供给，实现宏观经济稳定。
  - *（三）货币政策是一种间接调控政策*
    - **货币政策对宏观经济的调节是通过市场进行的**，政策效果取决于市场主体对货币政策手段实施的反应程度，而不是采取行政控制手段直接对经济主体的行为加以限制。
  - *（四）货币政策目标具有长期性*
    - **充分就业、货币稳定、经济增长和国际收支平衡都是长期目标**，有赖于中央银行利用各种货币政策手段调节和控制，抵御短期冲击，使短期经济运行趋向于长期经济目标。`,isCore:!0},{id:74,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"货币政策的内容与实施流程。(p5)",points:2,content:`- 货币政策的不同组成部分共同形成紧密联系的有机整体，其内容与流程包括：	==2==

  - *（一）货币政策的具体内容*
    - **包括政策的最终目标、实现目标的政策工具、监督控制目标实现的各种可操作性较强的中介指标、货币政策的传导机制以及政策效果等**，各部分相互联系构成有机整体。
  - *（二）货币政策的实施流程*
    - **从确立最终目标开始**，根据相应的传导机制确定具有较强可控性和可操作性的中介指标，最后运用合适的政策工具调节中介指标，其流程为“政策工具 → 中介指标 → 最终目标”。`,isCore:!1},{id:75,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"按作用机制划分的货币政策类型。(p6)",points:2,content:`- 从货币政策的作用机制来看，可分为两种类型：	==2==

  - *（一）扩张型货币政策*
    - **中央银行通过降低基准利率、在公开市场上买入证券、降低再贴现率等政策手段**，向市场投放货币，增加市场货币供给量，增加有购买能力的社会需求，最终达到刺激经济增长的目的。
  - *（二）紧缩型货币政策*
    - **中央银行通过提高基准利率、在公开市场上卖出证券、提高再贴现率等政策手段**，回笼货币，减少市场货币供给量，减少社会总需求，最终达到抑制经济过快增长的目的。`,isCore:!1},{id:76,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.1",sectionTitle:"第一节 货币政策概述",title:"按发挥作用手段划分的货币政策类型。(p6-7)",points:3,content:`- 从货币政策发挥作用的手段来看，可分为三种类型：	==3==

  - *（一）信贷政策*
    - **中央银行为了实现货币政策目标，对信用进行管理而采取的方针和各种措施**。首先调节社会信用总量以适应社会经济发展需要；其次在总量既定条件下调节社会信用构成，合理分配资金，最大限度发挥资金使用效率。
  - *（二）利率政策*
    - **中央银行控制和调节市场利率的方针和各种措施**，包括调节市场利率一般水平和利率结构；发达经济体通过基准利率及再贴现、再贷款政策间接影响，不发达经济体常采取对利率直接管制的措施。
  - *（三）外汇政策*
    - **中央银行控制和调节汇率、实施外汇管制控制国际资本流动和平衡国际收支的方针和各种措施**，具体措施主要有汇率政策和行政管制。`,isCore:!1},{id:77,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"货币政策目标体系的层次结构。(p8)",points:3,content:`- 货币政策目标是由三个层次有机组成的目标体系：	==3==

  - *（一）最终目标*
    - **中央银行通过货币政策操作而最终要达到的宏观经济目标**（如稳定币值、经济增长、充分就业、国际收支平衡等），央行不能直接控制，只能通过货币政策工具施加间接影响和调节。
  - *（二）中介指标*
    - **政策工具操作后，经由中央银行体系内部指标变化引起整个金融体系指标变化的指标**，与最终目标联系紧密，其变动可以较好地预告最终目标可能出现的变动。
  - *（三）操作指标*
    - **直接受货币政策工具调控、可控性强的指标**。最终目标、中介指标和操作指标的宏观性从强到弱，可控性从弱到强，构成一个重要的目标体系。`,isCore:!1},{id:78,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"稳定币值作为首要目标及通胀的不良后果。(p9-11)",points:4,content:`- 抑制通货膨胀、保持价格稳定和稳定币值是货币政策的首要目标，严重的通货膨胀将导致一系列不良后果：	==4==

  - *（一）社会分配不公*
    - **通货膨胀发生时，会使固定收入者实际收入水平下降**，他们的生活水平会因此而下降，从而导致社会分配不公。
  - *（二）借贷风险增加*
    - **通货膨胀来临时贷出资金的人将遭受额外损失**；通货膨胀减速时借入资金的人将遭受额外损失，正常的借贷关系将遭受破坏。
  - *（三）价格信号失真*
    - **市场机制有效配置资源的基础遭到破坏**，经济秩序混乱，并最终影响经济的稳定增长。
  - *（四）货币大幅贬值甚至体系崩溃*
    - **严重的通货膨胀造成货币大幅贬值**，可能导致其货币体系的彻底崩溃；同时，抑制通货膨胀和避免通货紧缩是保持稳定币值目标不可分割的两个方面。`,isCore:!0},{id:79,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"稳定币值目标的量化与指标选取。(p11)",points:2,content:`- 作为货币政策目标，需要对稳定币值目标进行量化才有可能操作，涉及两方面问题：	==2==

  - *（一）稳定币值指标的选取*
    - **一般是用三类指标：GNP平减指数、消费物价指数和批发物价指数**。由于GNP平减指数不便于时时观测，一般观测较多的是消费物价指数和批发物价指数，其中通过观测消费物价指数判断通胀程度更为常见（但生产资料价格波动未必能迅速反映到消费资料价格水平上）。
  - *（二）物价变动幅度以多大为宜*
    - **在不同的经济发展阶段和不同的经济社会背景下，物价的变动幅度及其被容忍的幅度是不同的**，在经济快速发展、经济社会结构发生比较大变化的阶段，物价的变动幅度相对可能大一些。`,isCore:!1},{id:80,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"经济增长目标及其实现要求。(p12)",points:2,content:`- 经济增长是提高社会生活水平的物质保障，也是保护国家安全的必要条件：	==2==

  - *（一）有效利用资源与潜在增长水平*
    - **一国经济为了有效地竞争并且快速增长，必须有效地利用自己的资源，并为了增加生产潜力而进行投资**；低于潜在水平的增长将导致资源浪费，高于潜在水平的增长将导致通货膨胀和资源破坏。
  - *（二）追求长期稳定持续的增长*
    - **宏观经济目标的增长应是长期稳定的增长**，过度追求短期高速甚至超高速增长可能导致经济比例严重失调和剧烈波动；央行应调节流通中货币量，使之与商品流通相一致，在萧条时投放货币刺激需求，在过快增长时回笼货币抑制过度需求。`,isCore:!1},{id:81,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"充分就业目标的内涵与测定。(p13)",points:2,content:`- 充分就业是指任何愿意工作并有能力工作的人都可以找到一个有报酬的工作：	==2==

  - *（一）充分就业的目标是把失业降低到自然失业率水平*
    - **充分就业并不是追求零失业率**。由于摩擦性失业、结构性失业、季节性失业和过渡性失业的存在，一定程度的自然失业在经济正常运行中不可避免，而总需求不足导致的失业应尽量避免。
  - *（二）货币政策对充分就业的影响与测定指标*
    - **在经济衰退、失业严重时实行扩张性货币政策**，对扩大社会总需求、促进经济发展、降低失业率具有重要意义；充分就业一般用失业率指标来测定，各国制定的失业率控制指标不同。`,isCore:!1},{id:82,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"保持国际收支平衡的意义与货币政策调节。(p14)",points:2,content:`- 保持国际收支平衡是保证国民经济持续稳定增长和经济安全甚至政治稳定的重要条件：	==2==

  - *（一）国际收支失衡的不利影响*
    - **巨额逆差可能导致外汇市场对本币信心急剧下降、资本大量外流、外汇储备急剧下降和本币大幅贬值**，并导致严重的货币与金融危机（如20世纪90年代墨西哥金融危机和亚洲金融危机）；长期巨额顺差会使大量外汇储备闲置浪费，使本国货币增发导致或加剧国内通货膨胀，巨额经常项目顺差还可能加剧贸易摩擦。
  - *（二）货币政策通过利率与汇率政策调节国际收支*
    - **在资本项目自由兑换下，提高利率吸引国际资本流入，降低资本项目逆差或增加盈余**（反之亦然）；本币贬值促进出口、抑制进口，但有利于经常项目而不利于资本项目平衡，本币升值则相反，需通过利率与汇率政策配合实现平衡。`,isCore:!1},{id:83,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"充分就业与经济增长的关系。(p15)",points:2,content:`- 充分就业与经济增长之间既有统一性，又有矛盾性：	==2==

  - *（一）奥肯定律揭示的正相关关系*
    - **根据奥肯定律（Okun's Law），失业与经济增长之间通常存在负相关关系**，因而充分就业与经济增长之间通常存在正相关关系。
  - *（二）不同经济增长模式带来的矛盾*
    - **经济增长可采取劳动密集型、资本密集型或资源密集型、知识密集型等不同发展模式**，除劳动密集型外，其他几种增长模式都与充分就业有一定的矛盾。`,isCore:!1},{id:84,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"稳定币值与经济增长和充分就业的关系。(p15)",points:2,content:`- 稳定币值与经济增长及充分就业之间存在短期与长期的不同关系：	==2==

  - *（一）短期内的正相关关系*
    - **根据菲利普斯曲线（Phillips curve）和奥肯定律**，通货膨胀与经济增长和充分就业之间通常存在正相关关系。
  - *（二）较长时期的制约关系*
    - **过高的通货膨胀将破坏正常的经济秩序**，从而迫使经济进行调整，进而降低经济增长和就业。因此从一个较长的时期看，通货膨胀会制约经济增长和就业水平的增加。`,isCore:!1},{id:85,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"稳定币值与国际收支平衡的关系。(p16)",points:3,content:`- 一定时期的物价稳定与国际收支之间的关系，取决于一个国家所处的经济状况：	==3==

  - *（一）国际收支逆差与通货膨胀并存（无冲突）*
    - **采取紧缩型货币政策减少总需求以降低物价时**，总需求减少能减少进口，同时利率上升能刺激资本流入，两者都能极大改善国际收支状况。
  - *（二）国际收支顺差与通货紧缩并存（无冲突）*
    - **采取扩张型货币政策增加总需求以促进经济增长、使物价回升时**，总需求扩大能增加进口，同时利率下调能刺激资本流出，国际收支状况也会得到改善。
  - *（三）国际收支逆差与通货紧缩并存（发生冲突）*
    - **采取扩张型货币政策增加总需求以促使经济复苏和物价回升时**，总需求扩大会进一步增加进口，同时利率下调刺激资本流出，此时国际收支逆差的不平衡状态会更加严重。`,isCore:!1},{id:86,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"货币政策目标选择的三大理论主张。(p17)",points:3,content:`- 由于货币政策目标之间客观上难以多项兼顾，经济理论界存在三种主张：	==3==

  - *（一）单目标论*
    - **认为由于各个宏观经济目标之间存在矛盾性，货币政策只能以单一目标为己任**，派生出两种完全对立的观点：一种主张稳定币值是唯一目标，另一种主张以经济增长为唯一目标。
  - *（二）双目标论*
    - **认为应当同时兼顾稳定币值和经济增长的双重目标**。经济增长是稳定币值的物质基础，币值稳定又有利于经济长期稳定增长，二者互相制约和互相影响。
  - *（三）多目标论*
    - **认为货币政策对各个宏观经济目标都具有十分重要的影响**，不能只以一个或两个目标为政策目标，而应该总体上兼顾各个目标，在不同时期以不同的目标作为相对重点。`,isCore:!1},{id:87,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.2",sectionTitle:"第二节 货币政策目标的选择",title:"货币政策最终目标选择的现实权衡。(p18)",points:2,content:`- 宏观经济调控体系各部分各有侧重点，货币政策最终目标的选择需进行现实权衡：	==2==

  - *（一）以稳定币值为首要目标并兼顾其他目标*
    - **货币政策应以稳定币值为首要目标**，同时必须兼顾促进经济的稳定增长，保持国际收支平衡和汇率稳定。
  - *（二）不同时期的相对重点随国内外经济环境变化*
    - **经济高涨时期以保持物价和稳定币值为首要目标**；经济萧条时期以保持经济稳定增长和充分就业为相对重点；国际收支失衡、汇率急剧波动时期则以保持国际收支平衡、汇率稳定为相对重点。`,isCore:!1},{id:88,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"选择中介指标和操作指标的标准。(p19)",points:4,content:`- 作为一个性能良好的货币政策指标，必须符合以下四个标准：	==4==

  - *（一）相关性*
    - **作为中介指标的金融指标必须与最终目标密切相关**，作为操作指标的金融指标也必须与中介指标密切相关，它们的变动必然对最终目标或中介指标产生可预测的影响。
  - *（二）可测性*
    - **中央银行能够迅速获取这些指标的准确数据**，且指标必须有较明确的定义并便于观察、分析和监测；在政策“偏离轨道”时能够比最终目标更快地发出较为准确的信号。
  - *（三）可控性*
    - **操作指标和中介指标必须是中央银行能够应用货币政策工具对其进行有效控制的金融指标**。
  - *（四）抗干扰性*
    - **应能较准确地反映货币政策效果，并且较少受外来因素的干扰**，只有这样才能通过货币政策工具的操作达到最终目标。`,isCore:!0},{id:89,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"货币供给量作为中介指标的优缺点。(p20-21)",points:2,content:`- 货币供给量作为常用的货币政策中介指标，具有以下优缺点：	==2==

  - *（一）货币供给量作为中介指标的优点*
    - **变动能直接影响经济活动**；中央银行对货币供给量的控制力较强；与货币政策意图联系紧密（增加表示扩张，减少表示紧缩）；不易将政策性效果与非政策性效果相混淆。
  - *（二）货币供给量作为中介指标的缺点*
    - **中央银行对货币供给量的控制能力并不是绝对的**，其变动取决于基础货币和货币乘数（受通货-存款比率、超额准备率等公众和商行行为影响）；通货紧缩时期常出现基础货币增加、利率下降而货币供给总量增长幅度却下降的非常规变动；调控存在一定时滞。`,isCore:!1},{id:90,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"利率作为中介指标的优缺点。(p22)",points:2,content:`- 利率作为货币政策的中介指标，具有以下优缺点：	==2==

  - *（一）利率作为中介指标的优点*
    - **不仅能够反映货币与信用的供给状态，而且能够表现供求状况的相对变化**（利率上升表明银根趋紧，反之趋松）；中央银行能够运用政策工具加以较为有效的控制；数据易于及时收集获得；作用力大，影响面广，与货币政策诸目标间相关性高。
  - *（二）利率作为中介指标的缺点*
    - **中央银行能控制的是名义利率，而对经济运行产生实质影响的是预期实际利率**（名义利率减去通货膨胀预期，很难准确计量与控制）；利率对经济活动的影响依赖市场主体的货币需求利率弹性（受经济体制、金融市场发育程度等影响）。`,isCore:!1},{id:91,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"货币供给量和利率不能同时作为中介指标的原因。(p23-24)",points:2,content:`- 货币供给量和利率不能同时作为一个国家货币政策的中介指标，因为二者之间不具有严格的一一对应关系：	==2==

  - *（一）盯住货币供给总量将导致利率波动*
    - **当货币需求曲线因经济增长率、通货膨胀率或公众持有债券/货币偏好的意外变动而位移时**，若中央银行固定货币总量目标，利率必将在波动区间内剧烈波动。
  - *（二）盯住利率目标将导致货币供给总量波动*
    - **若中央银行固定利率目标**，当货币需求曲线下降或上升时，央行为维持利率目标必须在公开市场出售或购买债券，从而导致货币供给总量相应减少或增加而发生波动。`,isCore:!1},{id:92,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"货币供给量与利率作为中介指标的比较与选择。(p25-26)",points:2,content:`- 货币供给总量目标和利率目标互不相容，二者比较与选择如下：	==2==

  - *（一）可测性、可控性与相关性维度的比较*
    - **可测性上名义利率较快且准确、很少修正，但预期实际利率难以计量**，而货币供给量需多次修正；可控性上央行对货币供给总量有一定控制力，但对利率只能控制名义利率而不能完全控制实际利率；相关性上二者对经济活动影响孰大仍难计量。
  - *（二）根据一定时期经济状况和操作方便程度选择*
    - **当把抑制通货膨胀看作主要任务时，往往选择货币供应量为中介指标**；当通货膨胀不是主要矛盾，而以经济增长为主要目标时，往往选择利率为中介指标。`,isCore:!1},{id:93,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"其他可作为中介指标的金融指标。(p26-28)",points:3,content:`- 除货币供应量和利率外，还有一些指标可以充当中介指标，主要有：	==3==

  - *（一）贷款量*
    - **优点是在金融市场发育程度较低时与最终目标相关、数据易获得、可控性较好**；缺点是金融市场发达时企业融资渠道多导致相关性弱、属行政手段不利于市场机制发挥、难确定正确规模结构，通常只在计划经济、市场欠发达或非常时期（如美国二战及1948、1949、1950～1952、1980年等极短时期）使用。
  - *（二）通货膨胀率*
    - **优点是可以保持央行货币政策独立性**；货币流通速度变化对政策效果影响不大；可综合各方面信息作为决策依据；货币政策透明度高、易为公众理解；对央行行为形成有效约束。
  - *（三）汇率*
    - **在一些实行本币与某国货币挂钩的发展中国家**，汇率成为主要的中介指标。`,isCore:!1},{id:94,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"准备金作为操作指标的作用与口径选择。(p29)",points:2,content:`- 准备金是中央银行各种货币政策工具影响中介指标的主要传递指标：	==2==

  - *（一）准备金的传递作用*
    - **法定准备金率变动直接导致准备金变动，再贴现率变动影响借入储备，公开市场业务影响非借入储备**；商业银行准备金越多则增加贷款能力越强、市场银根宽松（反之则紧缩），有利于及时监测政策工具调控效果。
  - *（二）准备金的计量口径与政策分歧*
    - **计量口径包括准备金总额、法定准备存款、超额准备存款、借入储备、非借入储备等**；货币学派认为准备金总额是最优控制器，而美联储认为非借入储备更好（1979年10月至1982年10月美联储主要使用非借入储备，此后改为借入储备）。`,isCore:!1},{id:95,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",sectionId:"7.3",sectionTitle:"第三节 货币政策的中介指标和操作指标",title:"基础货币作为操作指标的优势及我国实践。(p30)",points:2,content:`- 基础货币被称为“强力货币”和“高能货币”，是中央银行可选择的重要操作指标：	==2==

  - *（一）基础货币作为操作指标的优势*
    - **基础货币由准备金和流通中现金组成**，在货币乘数一定或可预测时控制住基础货币就控制住了货币供给总量；公开市场购买债券不论出售者以现金持有还是存入央行，对基础货币的影响都是一样的，因此央行通过公开市场业务对基础货币的控制比对银行准备金的控制确定性强得多。
  - *（二）基础货币在我国的实践*
    - **基础货币是我国现行的货币政策操作指标**，由于我国目前货币乘数相对稳定，基础货币在货币供应总量形成中具有关键性作用，对存款货币银行贷款能力有决定性影响。`,isCore:!1},{id:96,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"法定存款准备金政策的含义与规定。(p3)",points:2,content:`- 一般性货币政策工具针对全社会信用总量进行调节，其中法定存款准备金政策包括：	==2==

  - *（一）法定存款准备金政策的含义*
    - **中央银行对商业银行等存款性金融机构的存款规定存款准备金率**，强制性要求按规定比率上缴存款准备金，通过调整法定存款准备金率以增加或减少商业银行的超额准备，以收缩或扩张信用。
  - *（二）准备金构成与职能演变*
    - **存款准备金是指金融机构为保证客户提取存款和资金清算需要而准备的资金**，法定之外保留的部分为超额准备金；其初始作用是保证存款的支付和清算，之后才逐渐演变成为货币政策工具。`,isCore:!1},{id:97,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"法定存款准备金政策的三大作用。(p4-5)",points:3,content:`- 法定存款准备金政策具有三大作用：	==3==

  - *（一）保证商业银行等存款货币机构资金的流动性*
    - **强制商业银行将准备金存入中央银行**，从制度上避免商业银行受较好贷款条件诱惑将资金大量贷出而影响流动性和清偿力。
  - *（二）集中一部分信贷资金*
    - **存款准备金缴存中央银行使其集中一部分信贷资金**，用以履行中央银行职能，办理银行同业之间的清算，向金融机构提供信用贷款和再贴现贷款，调剂不同地区和不同银行间短期资金余缺。
  - *（三）调节货币供给总量*
    - **为派生存款规定了量的界限，影响货币乘数**；同时直接影响商业银行准备金结构（提高时法定准备增加、超额准备减少，甚至迫使收回已贷出款项或投资），紧缩或扩张作用相当明显。`,isCore:!1},{id:98,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"法定存款准备金政策工具的优缺点。(p5)",points:2,content:`- 法定存款准备金政策作为一种货币政策工具，具有鲜明的优缺点：	==2==

  - *（一）法定存款准备金政策的优点*
    - **它对所有存款货币银行的影响是平等的**，对货币供给量具有极强的影响力，力度大，速度快，效果明显。
  - *（二）法定存款准备金政策的局限性*
    - **其一，对经济的影响太大**，轻微变动会带来法定存款准备金量巨大变动，通过货币乘数放大可能带来经济强烈振荡；**其二，提高时可能使超额准备金率较低的银行立即陷入流动性困境**，迫使央行通过公开市场或贴现窗口提供流动性支持，因而央行使用时一般比较慎重。`,isCore:!1},{id:99,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"再贴现政策的含义与内容。(p6)",points:2,content:`- 再贴现政策是中央银行的传统一般性货币政策工具之一：	==2==

  - *（一）再贴现政策的含义*
    - **中央银行通过提高或降低再贴现率的办法**，影响商业银行等存款货币机构从中央银行获得的再贴现贷款和超额准备，达到增加或减少货币供给量、实现货币政策目标的一种政策措施。
  - *（二）再贴现政策的两方面内容*
    - **一是再贴现率的调整**；**二是规定向中央银行申请再贴现的资格**。`,isCore:!1},{id:100,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"再贴现政策的四大作用。(p6-7)",points:4,content:`- 再贴现政策在货币调控中发挥四大作用：	==4==

  - *（一）影响准备金和资金成本，从而影响贷款量和货币供给量*
    - **再贴现率提高使贴现窗口借款成本上升**，商业银行减少贴现贷款并收缩贷款和投资规模，市场货币供应量缩减、银根紧缩、市场利率上升；降低再贴现率时作用相反。
  - *（二）对调整信贷结构有一定效果*
    - **通过规定再贴现票据的种类（具有再贴现资格的票据）影响资金投向**，以及对不同分组票据实行差别再贴现率，使货币供给结构与产业政策及央行意图相符合。
  - *（三）产生变动方向和力度的告示作用，影响公众预期*
    - **再贴现率提高意味着央行将实行较为紧缩的货币政策**，反之意味着较为宽松的货币政策，对引导公众预期具有重要作用。
  - *（四）防止金融恐慌*
    - **在发生银行危机时，再贴现是向银行系统提供准备金的特别有效方法**，资金可立刻送到急需的银行手里，是中央银行作为最后贷款人发挥作用的主要形式。`,isCore:!0},{id:101,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"再贴现政策的局限性。(p8)",points:3,content:`- 再贴现政策存在三大局限性：	==3==

  - *（一）告示效应是相对的，有时不能准确反映政策意向*
    - **当市场利率相对于再贴现率上升时，央行虽无紧缩意图但为控制再贴现规模也会提高再贴现率**，这可能被公众误认为是转向紧缩性货币政策的信号。
  - *（二）市场利率与再贴现率利差随市场利率波动*
    - **市场利率的变化与波动可能导致再贴现贷款规模乃至货币供给量发生非政策意图的较大波动**。
  - *（三）控制货币供给量的主动权并不完全在中央银行*
    - **中央银行能够调整再贴现率，但不能强迫商业银行借款**。相对于公开市场业务，再贴现政策效果更难以控制，再贴现率也不能经常反复变动，缺乏灵活性。`,isCore:!1},{id:102,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"公开市场业务的含义与三大作用。(p9-10)",points:3,content:`- 公开市场业务是指中央银行在金融市场买进或卖出有价证券以影响货币供给量和利率的政策措施，其作用有：	==3==

  - *（一）调控存款货币银行准备金和货币供给量*
    - **在金融市场买进或卖出有价证券**，可直接增加或减少商业银行等存款货币机构的超额储备水平，从而影响贷款规模和货币供给总量。
  - *（二）影响利率水平和利率结构*
    - **买进证券时一方面证券需求增加使价格上升影响市场利率，另一方面银行储备增加使货币供给增加影响利率**（卖出方向相反）；买卖不同期限证券可直接改变不同期限证券供求，使利率结构发生变化。
  - *（三）与再贴现政策配合使用，提高货币政策效果*
    - **当提高再贴现率因商业银行持有较多超额储备而难以奏效时**，央行配合在公开市场卖出证券，必然减少商业银行储备，使紧缩政策目标得以实现。`,isCore:!1},{id:103,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"公开市场操作的两大政策目的。(p10, 13)",points:2,content:`- 中央银行开展公开市场操作主要有两大政策目的：	==2==

  - *（一）维持既定的货币政策（保卫性目标）*
    - **预测并抵消公众持有通货数量改变等非央行直接控制因素对银行储备的影响**，通过及时、准确的短期操作，保持存款货币银行储备水平的稳定和既定货币政策目标的实现。
  - *（二）实现货币政策的转变（主动性目标）*
    - **当中央银行货币政策方向和力度发生变化时**，通过连续、同向操作买入或卖出有价证券，增加或减少商业银行储备总量和货币供给总量，达到实施扩张或紧缩的货币政策目标。`,isCore:!1},{id:104,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"公开市场业务的五大优点。(p14)",points:5,content:`- 与其他货币政策工具相比，公开市场业务具有以下五大优点：	==5==

  - *（一）主动权完全在中央银行*
    - **其操作规模大小完全受中央银行自己控制**，而不像再贴现贷款规模那样不完全受中央银行控制。
  - *（二）灵活精巧，避免猛烈冲击*
    - **可用较小的规模和较少的步骤进行操作，较为准确地达到政策目标**，不会像存款准备金政策那样对经济产生过于猛烈的冲击。
  - *（三）具有较强的伸缩性与连续性*
    - **可以进行经常性、连续性的操作**，是中央银行进行日常性调节的较为理想的工具。
  - *（四）具有极强的可逆转性*
    - **当中央银行在公开市场操作中发现错误时，可立即逆向使用该工具以纠正错误**，而其他货币政策工具则不能迅速逆转。
  - *（五）可迅速地操作*
    - **决定改变银行储备和基础货币时，只要向公开市场交易商发出购买或出售指令**，交易便可很快执行。`,isCore:!0},{id:105,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.1",sectionTitle:"第一节 一般性货币政策工具",title:"公开市场业务的两大局限性。(p15, 17)",points:2,content:`- 公开市场业务作为一种货币政策工具，不可避免地存在两大局限性：	==2==

  - *（一）政策意图的告示作用较弱*
    - **公开市场操作较为细微，技术性较强**，不如再贴现政策那样具有明显的政策告示作用。
  - *（二）需要以较为发达的有价证券市场为前提*
    - **如果市场发育程度不够、交易工具太少等**，都将制约公开市场业务的效果。`,isCore:!1},{id:106,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.2",sectionTitle:"第二节 选择性货币政策工具",title:"选择性货币政策工具的特征与四大工具。(p16, 18-19)",points:4,content:`- 选择性货币政策工具也称为结构性货币政策工具，特点是在调节中有特定的资金流向和用途，主要包括：	==4==

  - *（一）消费者信用控制*
    - **对不动产以外各种耐用消费品的分期付款或贷款的管理措施**，包括规定首期付款最低限额、最长期限及可用消费信贷购买的商品种类，在消费膨胀时抑制需求和物价，衰退时放宽刺激消费。
  - *（二）证券市场信用控制*
    - **对有价证券交易规定应支付的保证金限额**（最早在美国货币政策史上出现），限制用借款购买有价证券比重、抑制过度投机、稳定证券价格并调节信贷供给结构。
  - *（三）不动产信用控制*
    - **对金融机构向客户提供不动产抵押贷款的管理措施**，规定贷款最高限额、最长期限和首次付款（及分摊还款）最低金额，限制房地产投机、抑制房地产泡沫。
  - *（四）优惠利率*
    - **对国家拟重点发展的部门、行业和产品规定较低利率以鼓励其发展**，配合产业政策（如基础产业、能源产业、新技术、新材料、出口企业和产品等），有利于产业结构和产品结构调整升级。`,isCore:!0},{id:107,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.3",sectionTitle:"第三节 其他货币政策工具",title:"直接信用控制的四大手段。(p20-21)",points:4,content:`- 直接信用控制（direct credit control）是从质和量两个方面以行政命令或其他方式直接对金融机构信用活动进行的控制，手段包括：	==4==

  - *（一）利率控制*
    - **规定存贷款最高利率和贷款利率下限**是最常使用的直接信用管制工具。
  - *（二）信用配额管理*
    - **又称信贷分配（credit rationing）**，是指中央银行根据金融市场状况及客观经济需要，分别对各个商业银行的信用规模加以分配，限制其最高数量。
  - *（三）流动性比率管理*
    - **流动性比率是指流动资产对总资产的比重**，规定较高比率可迫使商业银行收缩长期放款、扩大短期放款和增加易变现资产，限制信用扩张并降低经营风险（但过高不利于商业银行经营盈利）。
  - *（四）直接干预*
    - **中央银行直接对商业银行的信贷业务放款范围等加以干预**，例如对业务经营不当的商业银行拒绝再贴现或采取高于一般利率的惩罚性利率，直接干涉存款吸收等。`,isCore:!0},{id:108,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.3",sectionTitle:"第三节 其他货币政策工具",title:"间接信用控制的两大手段与特点。(p21)",points:2,content:`- 间接信用控制（indirect credit control）是指中央银行通过道义劝告、窗口指导等办法间接影响商业银行的信用创造：	==2==

  - *（一）道义劝告与窗口指导的具体内容*
    - **道义劝告（moral suasion）是央行利用其声望和地位发出通告、指示或与负责人面谈**，解释政策意图使其自动采取相应措施；**窗口指导（window guidance）是央行根据产业行情、物价趋势和金融市场动向**，规定商业银行贷款重点投向和贷款变动数量等。
  - *（二）间接信用指导的优点与前提条件*
    - **优点是较为灵活**，但其发挥作用的大小取决于中央银行在金融体系中是否具有较强的地位、较高的威望和控制信用的足够法律权利和手段。`,isCore:!1},{id:109,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.4",sectionTitle:"第四节 中国货币政策工具改革",title:"中国法定存款准备金制度与再贴现业务的改革。(p22-23)",points:2,content:`- 近年来中国人民银行对法定存款准备金制度与再贴现业务进行了重要改革：	==2==

  - *（一）法定存款准备金制度的改革*
    - **由“普遍降准”调整为“定向降准”**（2013年以前为全行业调整，2014年开始更多采用“定向调节”引导信贷资源投向），通过设置专门领域的信贷投放占比指标引导商业银行调整信贷结构，并提供“降低法定存款准备金率”的激励。
  - *（二）中国再贴现业务的发展*
    - **2008年以来央行进一步完善再贴现管理**：增加再贴现转授权窗口；扩大对象和机构范围（城乡信用社、存款类外资金融机构法人、存款类新型农村金融机构、企业集团财务公司等）；推广使用商业承兑汇票；对涉农票据、县域企业和金融机构及中小金融机构票据优先办理再贴现；明确可采用回购和买断两种方式。`,isCore:!1},{id:110,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.4",sectionTitle:"第四节 中国货币政策工具改革",title:"公开市场业务创新工具（SLO与CBS）。(p24)",points:2,content:`- 近年来中国人民银行不断开展公开市场业务工具创新：	==2==

  - *（一）短期流动性调节工具（SLO）*
    - **2013年1月创设，作为公开市场常规操作的必要补充**，在银行体系流动性出现临时性波动时相机使用（主要在年末和年初特殊时期用于调节流动性），熨平突发性、临时性因素导致的市场资金供求大幅波动，到期后收回流动性，不会造成长期持续性影响。
  - *（二）央行票据互换（CBS）*
    - **基于传统央行票据工具创设的新型信用衍生工具**，限定在公开市场操作的一级交易商范围内，通过央行票据与银行永续债之间交换实现对银行永续债流动性的支持，进而提高银行资本充足率，间接降低银行永续债成本。`,isCore:!1},{id:111,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",sectionId:"8.4",sectionTitle:"第四节 中国货币政策工具改革",title:"中国新型流动性借贷便利工具（SLF、MLF、PSL、TMLF）。(p25-26)",points:4,content:`- 中国人民银行创设了多种新型流动性借贷便利工具：	==4==

  - *（一）常备借贷便利（SLF）*
    - **2013年初创设，由金融机构主动发起、“一对一”交易、覆盖面广**，主要功能是满足政策性银行和全国性商业银行期限较长（1、3个月）的大额流动性需求，以合格债券及优质信贷资产抵押发放。
  - *（二）中期借贷便利（MLF）*
    - **2014年9月创设，是央行对金融机构发放的中短期抵押贷款**，提供中期基础货币，期限包括3个月、6个月和12个月，是对常备借贷便利期限结构的补充和完善。
  - *（三）抵押补充贷款（PSL）*
    - **对政策性金融机构发放的质押贷款**，作为SLF和MLF的补充，主要功能是支持国民经济重点领域、薄弱环节和社会事业发展而提供期限较长的大额融资，合格抵押品包括高等级债券资产和优质信贷资产。
  - *（四）定向中期常备借贷便利（TMLF）*
    - **对符合宏观审慎监管要求且满足支持中小企业和民营企业信贷融资要求的金融机构提供长期稳定流动性支持**，作为定向降准降息、PSL和MLF的补充工具，需提供合格抵押品，操作期限较MLF更长，续作后最长可达三年。`,isCore:!0},{id:112,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.1",sectionTitle:"第一节 货币政策传导机制的理论",title:"凯恩斯的货币政策传导机制过程。(p4-5)",points:2,content:`- 凯恩斯把对货币需求的分析纳入到对总需求和总供给的分析框架中，传导机制通过两个步骤发挥作用：	==2==

  - *（一）凯恩斯利率传导链条过程*
    - **传导过程为 MS → R → I → E → Y**：货币供应 MS 影响利率 R（流动性偏好途径），利率 R 影响投资 I（投资利率弹性），投资支出 I 引起总支出 E 变化，最终对总产出 Y 产生影响。
  - *（二）利率变动在传导中的关键作用*
    - **扩张性政策增加货币供应使利率下降、投资成本下降**，社会投资支出和就业增加，进而总体消费能力增加、社会总产出增加；紧缩性政策过程相反，利率变动起着关键作用。`,isCore:!1},{id:113,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.1",sectionTitle:"第一节 货币政策传导机制的理论",title:"凯恩斯货币政策传导受阻的两大障碍。(p5-6)",points:2,content:`- 在现实应用中，凯恩斯货币政策传导机制可能因两大因素出现而传导不畅、效果不如预期：	==2==

  - *（一）“凯恩斯陷阱”出现*
    - **当利率极低时，人们会认为利率不大可能再降或有价证券市场价格只会跌落**，不管有多少货币都愿意持在手中。此时货币供应量增加但利率无法下降，货币政策就无效。
  - *（二）投资的利率弹性非常低*
    - **当投资的利率弹性非常低时，利率下降不会对投资量有显著刺激作用**。若投资增量不大，投资乘数作用就非常有限，对经济活动不可能产生重大影响，从而货币政策传导机制受阻。`,isCore:!1},{id:114,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.1",sectionTitle:"第一节 货币政策传导机制的理论",title:"后凯恩斯学派的资产价格传导渠道。(p7-8)",points:2,content:`- 后凯恩斯学派对局部均衡的凯恩斯货币政策传导机制理论进行了补充和发展：	==2==

  - *（一）托宾的 q 理论传导机制*
    - **托宾定义 q = 企业厂商的真实资本的市场价值 / 资本的重置成本**，传导机制为 MS↑ → Ps↑ → q↑ → I↑ → Y↑：货币供应量增加使债券利率降低、股票更有吸引力，股价 Ps 上升使 q 比值上升，最终导致投资 I 与国民收入 Y 增加。
  - *（二）米什金的货币政策传导机制*
    - **传导机制为 MS↑ → Ps↑ → V↑ → D↓ → CA↑ → Y↑**：货币供应量增加使股票价格 Ps 上升，消费者金融资产价值 V 上升，财务困难的可能性 D 下降，最终导致消费者耐用消费品支出 CA 增加与国民收入 Y 增加。`,isCore:!1},{id:115,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.1",sectionTitle:"第一节 货币政策传导机制的理论",title:"货币学派的货币政策传导机制理论及渠道。(p9-11)",points:2,content:`- 以弗里德曼为首的货币学派认为货币对总需求的变动至关重要：	==2==

  - *（一）持久性收入决定论与传导链条*
    - **货币学派认为持久性收入是决定货币需求的主要因素**，货币需求函数稳定从而对利率变动不敏感，传导机制为 MS → A → C → I → P → Y（个人或企业将多余货币直接用于增加消费支出或实物与金融资产支出，资产需求增加引起资产价格上升，使生产者增加生产从而增加名义收入，利率不发生变化）。
  - *（二）短期有效长期中性及双渠道传导*
    - **货币学派认为货币供应量变化在短期内对实际产量和价格影响较大（短期有效）**，在长期内则只会影响物价水平而对总收入影响不大；货币政策的传导一般有货币渠道和信贷渠道两种渠道。`,isCore:!1},{id:116,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.1",sectionTitle:"第一节 货币政策传导机制的理论",title:"货币政策传导机制的信用渠道论（银行贷款与资产负债表）。(p12-14)",points:2,content:`- 20世纪50年代信用渠道理论（又称“信贷观”）提出信息不对称、银行信贷配给等引起的“外部融资溢价”影响投资消费行为，伯南克和格特勒于1995年总结出两个主要途径：	==2==

  - *（一）银行贷款渠道*
    - **银行贷款作为银行资产方重要项目对经济活动的作用甚至超过货币**，银行贷款渠道强调货币政策行为改变商业银行在中央银行的准备金头寸，引起银行对利率和资产负债表构成进行调整，进而影响局部投资水平和产出。
  - *（二）企业、居民资产负债表渠道*
    - **企业资产负债表渠道中，货币政策参数变化引起非货币资产价格和利率水平变化**，直接改变企业净资产水平，放大货币政策影响力；**居民资产负债表渠道（又称流动性效应渠道）中**，紧缩政策引起银行信贷数量下降，使没有其他融资渠道的消费者减少耐用消费品支出。`,isCore:!1},{id:117,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.2",sectionTitle:"第二节 货币政策传导机制的主要影响因素",title:"体制因素对金融机构、企业和居民行为的影响。(p16-19)",points:3,content:`- 货币政策传导机制以利益诱导为基本特征，不同经济体制对微观主体的动力、决策和约束机制产生不同影响：	==3==

  - *（一）体制因素对金融机构的影响*
    - **在市场经济下金融机构作为独立市场主体追求利润最大化、有充分自主经营权、实行自负盈亏与预算约束**，能有效配合央行意图；而在计划经济体制下金融机构只是政府出纳，缺乏内在动力、决策权和预算约束，对外部环境变化反应迟钝。
  - *（二）体制因素对企业行为的影响*
    - **在市场经济下企业作为独立市场主体有追求自身利益最大化的内在动力、充分自主经营权和预算硬约束**；而在计划经济体制下行政依附型企业没有独立经济利益和自主权，没有预算约束或只有软约束，易出现盲目投资和扩张的短期行为。
  - *（三）体制因素对居民行为的影响*
    - **居民经济行为目的是自身效用最大化（消费效用与储蓄投资利润最大化）**；在市场经济下居民有较充分的自主决策权，能对利率、汇率、税率调整做出反应，且无论是市场体制还是计划体制，以收抵支的家庭预算约束机制都要发生作用。`,isCore:!1},{id:118,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.2",sectionTitle:"第二节 货币政策传导机制的主要影响因素",title:"市场因素与信息因素对货币政策传导机制的影响。(p20-21)",points:2,content:`- 除体制因素外，市场因素和信息因素也深刻影响货币政策传导机制：	==2==

  - *（一）市场因素对货币政策传导机制的影响*
    - **包括三个方面**：1. 市场的发育程度（完整统一的市场给货币政策信号传导提供条件，发育不全的市场将小企业和个人排斥在有组织资金市场之外）；2. 市场体系的完善程度（包括各类金融机构、商品和要素市场以及股票、债券、票据、外汇和同业拆借市场等）；3. 市场操作的规范程度（公平竞争与规范操作是价格机制运行的前提，不规范会导致价格混乱、金融泡沫甚至金融危机）。
  - *（二）信息因素对货币政策传导机制的影响*
    - **包括三个方面**：1. 中央银行与公众之间的信息不对称（央行更具信息优势，不对称会给公众决策带来不确定性，影响政策可信度和影响力）；2. 银行与借款人之间信息不对称（借款人更了解自身情况）；3. 信息披露的准确度（企业提供真实信息使信贷观点货币政策有效传导，直接融资市场虚假信息不利于投资决策）。`,isCore:!1},{id:119,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.3",sectionTitle:"第三节 货币政策的作用时滞",title:"货币政策时滞的分类与构成。(p22-24, 27-28)",points:2,content:`- 就总体过程而言，货币政策的作用时滞可分为内部时滞和外部时滞：	==2==

  - *（一）内部时滞（认识时滞与决策时滞）*
    - **内部时滞是央行制定和操作货币政策所需时间**，细分为**认识时滞**（从客观上有需要到央行认识到确实需要实施所耗费的时间，因搜集资料与综合分析需耗时）和**决策时滞**（从认识到需要改变政策到提出新政策所需耗费的时间，因拟定方案、可行性论证和报批需耗时）。
  - *（二）外部时滞（操作时滞与市场时滞）*
    - **外部时滞是从央行实际执行政策到对经济过程产生作用所需时间**，发生在央行以外，细分为**操作时滞**（从调整货币政策工具到对中介目标产生作用的时间）和**市场时滞**（从中介变量变动到对物价上涨率、失业率、GDP增长率等目标变量产生作用的时间）。`,isCore:!1},{id:120,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.3",sectionTitle:"第三节 货币政策的作用时滞",title:"货币政策作用时滞的实证特征与调控难度。(p25, 29)",points:2,content:`- 实证分析表明，货币政策的作用时滞具有较长滞后期，给宏观调控带来显著难度：	==2==

  - *（一）货币政策作用时滞的实证特征*
    - **弗里德曼的研究认为，从货币增长率变化到名义收入变化需要6～9个月的时间**；住宅投资一般需要6个月到1年才能对利率变化做出有力反应，建设新厂房和订购专门设备花费更多时间；因此货币政策对GDP影响的最高点一般要经过1年至2年的滞后才能达到。
  - *（二）时滞导致的调控难度*
    - **衰退打击往往出人意料，刺激经济的影响要到衰退最严重阶段过去后才达到最高点**；若衰退短暂而紧随活跃复苏，货币政策扩张的刺激就会在最不需要它的时候发挥作用，因此确定货币政策的时滞至关重要。`,isCore:!1},{id:121,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.4",sectionTitle:"第四节 货币政策的有效性",title:"货币政策有效性的含义及对经济运行的影响。(p26, 30-32)",points:2,content:`- 货币政策的有效性是指货币政策对经济活动产生的实际效果与货币政策目标之间的有效程度：	==2==

  - *（一）货币政策有效性的两方面含义*
    - **一是货币政策对最终目标的调控能力**（对GDP、CPI、充分就业和国际收支等目标的影响程度）；**二是中央银行对货币政策工具运用是否得当**，能否在适当时机采取适当工具提升有效性。
  - *（二）货币政策对货币供给及经济运行的影响*
    - **货币供给决定涉及“内生变量”与“外生变量”之争**，决定货币供给的三个基本因素是通货-存款比率、准备-存款比率和基础货币；对经济增长、就业和通胀的影响可通过AD-AS模型分析，适当的逆经济风向货币政策有利于抑制经济剧烈波动。`,isCore:!1},{id:122,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.4",sectionTitle:"第四节 货币政策的有效性",title:"货币政策与财政政策的配合模式与效应。(p33-34)",points:4,content:`- 货币政策与财政政策经济范围、决策者、经济目标相同，但在实施者、作用过程和政策工具上不同，其配合模式与效应为：	==4==

  - *（一）“双紧”政策（紧缩货币+紧缩财政）*
    - **工具变量调整方向一致，各中介变量按共同机制对国民收入和物价水平发生作用**，作用力度强、变量间摩擦力小，一旦调整很快产生效应且带有较强惯性。
  - *（二）“双松”政策（宽松货币+宽松财政）*
    - **工具变量调整方向一致，共同刺激总需求与国民收入**，同样具有作用力度强、摩擦力小、见效快且惯性较强的特点。
  - *（三）“紧财政、松信贷”政策（宽松货币+紧缩财政）*
    - **属“一松一紧”配合，工具变量调整方向相反，会产生相互抗衡的摩擦力**，功能损耗大、作用力度较弱，但政策效应比较稳定且不带有很大惯性。
  - *（四）“松财政、紧信贷”政策（紧缩货币+宽松财政）*
    - **同样属“一松一紧”配合**，由于投资支出等共同变量变动方向不明确，两类政策往往只能对自身能够直接影响的变量产生影响，作用力度较弱但效应较稳定。`,isCore:!0},{id:123,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.4",sectionTitle:"第四节 货币政策的有效性",title:"货币政策与宏观审慎政策的“双支柱”调控框架。(p35-37)",points:3,content:`- 我国积极探索建立货币政策和宏观审慎政策“双支柱”调控框架：	==3==

  - *（一）宏观审慎政策与货币政策的关系*
    - **货币政策主要针对整体经济和总量问题、调节总需求，侧重经济和物价水平稳定，以利率等为工具**；宏观审慎管理以防范系统性风险为主要目标、针对加杠杆行为，侧重维护金融稳定，主要调整资本要求、杠杆水平、贷款价值比（LTV）等。二者交互影响，既可能相互强化，也可能形成相互约束。
  - *（二）宏观审慎政策框架的建立*
    - **包括五方面**：明确独立决策模式与策略目标工具；将逆周期资本缓冲、逆周期杠杆率约束等纳入工具箱；推动金融统计数据信息整合形成中间目标；建立系统风险模型并统筹开展压力测试；建立规范的政策沟通和信息发布机制。
  - *（三）宏观审慎政策与货币政策的关联协调*
    - **从系统风险应对的“事前—事中—事后”环节加强机构和部门整合与数据共享**；在技术上促进宏观经济模型和系统风险模型的相互验证、相互补充，提升政策科学性与协调性。`,isCore:!1},{id:124,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.5",sectionTitle:"第五节 国际货币体系与中央银行货币政策协调",title:"国际货币体系的主要内容与演变历程。(p38-41, 49-52)",points:3,content:`- 国际货币体系是由国际货币制度、国际金融机构、国际惯例及历史沿革等组成的有机整体：	==3==

  - *（一）国际货币体系的三大主要内容*
    - **1. 国际本位货币（即国际储备货币）的确定**；**2. 各国货币比价的确定（即国际间的汇率确定）**；**3. 各国对货币的兑换性及调节国际收支不平衡的原则与机制**。
  - *（二）国际货币体系的三个历史阶段*
    - **国际金本位体系**（广义含金币、金块、金汇兑本位制，狭义仅金币本位制）；**布雷顿森林体系**（二战后建立，实行美元与黄金挂钩、其他货币与美元挂钩的“双挂钩”制及可调整的汇率钉住制）；**牙买加体系**（1976年4月形成，黄金非货币化、国际收支调节方式多样化、汇率安排多样化、国际储备多元化且SDR成为储备手段）。
  - *（三）当前国际货币体系的特点与发展趋势*
    - **当前特点为国际货币政策协调作用得到加强、区域性货币联盟的发展**；发展趋势包括朝向多极化发展、朝向由人民币、欧元及美元构成的多储备货币体系发展，以及SDR（“纸黄金”）应用范围不断拓宽。`,isCore:!1},{id:125,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",sectionId:"9.5",sectionTitle:"第五节 国际货币体系与中央银行货币政策协调",title:"国际货币政策协调的必要性、内容与作用。(p42, 53)",points:3,content:`- 现代世界经济中各国政府间经济相互依赖增多，客观上要求加强国际货币政策协调：	==3==

  - *（一）国际货币政策协调的必要性*
    - **随着经济全球化和国际金融化的发展**，客观上要求各中央银行采取政府间协调机制，以克服国际经济竞争中的“囚徒困境”（Prisoner's Dilemma），有效解决国际因素对货币政策制定的困扰。
  - *（二）国际货币政策协调的手段与内容*
    - **一是汇率政策的协调**，历来是国际货币政策协调的核心内容之一；**二是利率政策的协调**，根据利率平价理论，两国利率相对变化必然影响两国汇率，协调利率政策有利于保持国际货币体系稳定。
  - *（三）国际货币政策协调的作用*
    - **有助于保持汇率稳定、促进国际贸易发展和国际资本流动、实现国际收支平衡**；有利于稳定国际金融市场防止剧烈波动，加强金融危机管理，缓解或消解突发严重事件的影响。`,isCore:!1},{id:126,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.1",sectionTitle:"第一节 金融危机",title:"金融危机的含义与四大类型。(p3)",points:4,content:`- 金融危机又称金融风暴，可理解为金融系统中信用基础被破坏而导致的整个金融体系动荡、混乱，国际货币基金组织将其分为四类：	==4==

  - *（一）货币危机（国际收支危机）*
    - **某种货币汇率受到投机性袭击时**，该货币出现持续贬值，或迫使当局扩大外汇储备而大幅度提高利率的现象。
  - *（二）银行业危机*
    - **银行由于实际或潜在的运行障碍或违约而不能按期偿付债务**，或迫使政府出面提供大规模援助以避免违约发生；一家银行的危机发展到一定程度，可能波及其他银行从而引起整个银行系统的危机。
  - *（三）外国债务危机（简称外债危机）*
    - **一国支付系统严重混乱而导致其不能按期偿付对外债务**，被迫宣布暂缓偿债，并要求国际货币基金组织、世界银行等国际经济组织给予再融通的现象。
  - *（四）系统性金融危机（又称“全面金融危机”）*
    - **主要金融领域都出现严重混乱**，如货币危机、银行业危机、外债危机同时或相继发生。`,isCore:!0},{id:127,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.1",sectionTitle:"第一节 金融危机",title:"金融危机的形成机制与三大特点。(p4)",points:4,content:`- 金融脆弱性理论解释了金融危机的形成过程，金融危机具有三大特点：	==4==

  - *（一）金融危机的形成（金融脆弱性理论）*
    - **经济繁荣为金融危机的形成埋下伏笔**，繁荣期贷款人放贷条件宽松、借款人多借款，抵补性借款人比重减小而投机性与高风险借款人比重增大，股票和房地产价格持续上涨；随后经济下滑增速变慢，阻碍信贷资金流入生产部门的事件会引起大规模借贷违约、企业和金融机构破产、失业，金融资产价格泡沫迅速破灭形成危机。
  - *（二）金融危机具有综合性*
    - **金融危机绝不是某个金融行业或金融要素独立的剧烈波动**，往往可能是货币汇率危机、债务危机、银行业危机、保险业危机、股市危机等危机的同时爆发。
  - *（三）金融危机具有传染性*
    - **金融危机的传染性主要体现在金融危机具有明显的多米诺骨牌效应**。
  - *（四）金融危机具有破坏性*
    - **金融危机具有破坏性**，对金融体系与经济社会正常运行造成严重冲击。`,isCore:!0},{id:128,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.2",sectionTitle:"第二节 金融危机理论",title:"四代货币危机理论的核心内容。(p5-8)",points:4,content:`- 四代货币危机理论均基于一国内部经济或政策失衡展开，研究侧重点各有不同：	==4==

  - *（一）第一代货币危机理论（财政赤字论，保罗·克鲁格曼）*
    - **认为国内扩张性货币政策与维持固定汇率之间存在矛盾**，政府为解决财政赤字无限制发行纸币引起通胀，本币面临贬值压力，央行抛外汇维持固定汇率；一旦外汇储备接近耗尽，投机者发起金融攻击迫使央行放弃固定汇率政策，强调必要因素是固定汇率与财政赤字。
  - *（二）第二代货币危机理论（自我实现论，奥布斯特费尔德）*
    - **注重货币政策（利率）与维持固定汇率的成本收益权衡**，维持固定汇率存在无法及时消除政府大量债务的成本，贬值预期推高利率与失业率并促进经济衰退；投机者理性分析后意识到央行因高昂成本无法维持固定汇率，便对本币发动抛售攻击迫使其放弃固定汇率。
  - *（三）第三代货币危机理论（麦金农和克鲁格曼）*
    - **产生于1997年亚洲金融危机背景**，认为新兴市场经济国家普遍存在道德风险问题，东南亚经常账户逆转源于货币大幅贬值和经济严重衰退导致进口大量减少；关键在于货币贬值、高利率及销售下降使企业财务状况恶化（并非银行问题），加强了企业抛售本币的决心。
  - *（四）第四代货币危机理论（克鲁格曼和阿吉翁）*
    - **注重企业外债问题**，认为若本国企业部门的外债水平越高，其资产负债表效应越大，经济出现危机的可能性便越大。`,isCore:!0},{id:129,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.2",sectionTitle:"第二节 金融危机理论",title:"银行业危机的四大理论假说。(p9-10)",points:4,content:`- 银行业危机理论主要包括四大经典学说：	==4==

  - *（一）货币政策失误论（弗里德曼）*
    - **货币需求是稳定函数且货币乘数相对稳定**，货币数量决定物价水平和产出量，金融动荡的根源在于货币政策；货币政策失误可导致小规模、局部的金融问题发展为剧烈的、全面的金融危机。
  - *（二）金融不稳定假说（海曼·明斯基，1963年）*
    - **将借款者分为套期保值型、投机型和蓬齐型**（对应抵补金融型、投机金融型和高风险金融型单位），市场利率提高对投机型影响较大并可能使其转为蓬齐型高风险单位，因对利率敏感且债务沉重而陷入清偿危机或倒闭破产。
  - *（三）银行挤兑论（戴蒙德和迪布维格，1983年，D-D模型）*
    - **银行体系脆弱性源于存款者流动性要求的不确定性和资产方与负债方之间缺乏流动性**，大数定律下平时资金来源稳定，但突发事件导致储户纷纷取款耗尽流动性资产时，理性存款者争相取款引起金融恐慌。
  - *（四）银行体系关键论（托宾，1981年）*
    - **强调金融危机的“货币因素”**，企业过度负债时银行出于安全性严格管理贷款使企业投资减少；企业被迫出售资产清偿债务导致资产缩水和资产价格急速下降，债务链条断裂引发金融连锁反应。`,isCore:!0},{id:130,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.2",sectionTitle:"第二节 金融危机理论",title:"外债危机的三大理论假说。(p11)",points:3,content:`- 外债危机理论主要包括三大理论假说：	==3==

  - *（一）债务—通货紧缩论（欧文·费雪，1932年《繁荣与萧条》）*
    - **认为1929～1933年经济大萧条由企业过度负债和通货紧缩导致**，经济上升期大规模资本投资和资本市场投机使贷款和货币供给增加，造成通胀和过度负债，物价上涨抵消债务实际价值并进一步刺激借款，最终造成通货紧缩并形成恶性循环。
  - *（二）综合性国际债务论（苏特）*
    - **国际债务随经济周期变动而变动**，繁荣期中心国家（发达国家）向边缘国家（发展中国家）输出资本；边缘国家因不当国内宏观经济政策和过于乐观预期积累大量外债，同时出口初级产品收入不断下降，逐渐丧失偿债能力。
  - *（三）资产价格下降论（沃尔芬森）*
    - **在银行体系关键论基础上将研究重点由银行转向企业**，过度负债企业在银行不愿提供或减少贷款时被迫降价出售资产，导致资产负债率增加、财富降低，削弱偿债能力、加重偿债负担并形成恶性循环引发债务危机。`,isCore:!1},{id:131,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.3",sectionTitle:"第三节 金融危机的防范、化解和治理",title:"金融危机的四大防范措施。(p12, 14-15)",points:4,content:`- 金融危机的防范主要有以下四项措施：	==4==

  - *（一）建立金融危机预警模型*
    - **捕捉部分或全部金融指标在短期内的超周期变化信号**，增强对危机爆发的敏感性，并在一定时间内构建应对具体方案以尽可能减缓破坏程度。
  - *（二）促进金融协调与金融合作*
    - **以各国中央银行的有效协调和国际通行的金融监管框架为基础**，加强各国间的金融协调与金融合作，集中有效地监管金融风险。
  - *（三）选择合适的汇率制度，维持适当的外汇储备*
    - **结合本国国情和经济现状选择适宜汇率制度**，并维持适当规模的外汇储备以防范金融危机。
  - *（四）加强金融监管与政策引导*
    - **落实IMF提出的八类应对资本流入对策**：实行更有弹性的浮动汇率、实施财政紧缩、公开市场中和性操作、限制货币增长、对资本流入施加限制、经常账户自由化、资本账户有选择自由化以及加强国内金融体系。`,isCore:!0},{id:132,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.3",sectionTitle:"第三节 金融危机的防范、化解和治理",title:"金融危机的化解举措。(p13, 16)",points:2,content:`- 一旦发生金融危机，政府及金融当局化解危机的举措包括：	==2==

  - *（一）稳定金融市场局势，维护存款人信心*
    - **这是化解金融危机的首要举措**，政府可动用财政资源稳定股市、动用外汇储备干预汇市，动用财政资金为银行提供储蓄和外债业务全面担保并修改监管法律，还可寻求IMF、世界银行及他国央行帮助。
  - *（二）向金融机构注资，促进金融业复苏*
    - **通过非股权性救助、股权性注资和购买“有毒资产”向金融机构注资**，同时可通过设立专项基金、专项资管计划等市场化方式化解存量风险。`,isCore:!1},{id:133,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.3",sectionTitle:"第三节 金融危机的防范、化解和治理",title:"金融危机的治理措施。(p17)",points:2,content:`- 金融危机的中长期治理措施主要包括两个方面：	==2==

  - *（一）重组金融机构，优化金融系统*
    - **对相关金融机构进行整顿、接管或重组**，最大程度降低危机破坏；同时通过优化金融系统、改革金融制度降低危机对金融系统的影响。
  - *（二）重视实体经济发展，加大政策扶持力度*
    - **危机后及时采取货币政策干预经济、刺激实体经济发展**，如实施量化宽松的货币政策增加货币供给量、降低市场利率、增强货币流动性以刺激实体经济。`,isCore:!1},{id:134,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.4",sectionTitle:"第四节 金融稳定",title:"金融稳定的定义与三大特征。(p18-19)",points:4,content:`- 金融稳定可从不同角度界定，并具有三大鲜明特征：	==4==

  - *（一）金融稳定的定义*
    - **从金融稳定角度**指金融机构、金融市场和金融基础设施运行状态良好，与经济社会协调发展且受冲击不降低运行效率；**从金融不稳定角度**指各组成部分及决定因素高效运作并抵御内外冲击的动态过程；**中国人民银行2005年《中国金融稳定报告》**定义为金融体系能够有效发挥其关键功能的状态。
  - *（二）金融稳定具有综合性*
    - **需综合采取货币政策、财政政策、金融监管政策等不同措施**，金融体系包含政府、各类金融机构、金融需求主体、金融制度环境等要素，单一措施无法实现稳定。
  - *（三）金融稳定具有全局性*
    - **金融稳定是经济稳定的前提**，中央银行应立足整个金融体系，既关注国内金融市场、银行业、证券业及保险业动态，又实时监测防范国际金融市场波动影响。
  - *（四）金融稳定具有动态性*
    - **金融稳定并非固化**，会随社会经济发展不断变化，金融系统实时处于动态运行之中。`,isCore:!0},{id:135,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.4",sectionTitle:"第四节 金融稳定",title:"金融稳定的两大目标。(p20)",points:2,content:`- 金融稳定的核心目标包括以下两个方面：	==2==

  - *（一）保障金融市场与金融机构稳定运行，防范化解系统性风险*
    - **保障金融市场和银行业、证券业、保险业等金融机构的稳定运行**，切实防范和化解系统性金融风险。
  - *（二）保障金融安全，优化金融结构，提高资源配置效率*
    - **保障金融安全，优化金融结构体系**，提高金融资源配置效率（体现金融公平），实现金融业长期、稳健发展。`,isCore:!1},{id:136,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.4",sectionTitle:"第四节 金融稳定",title:"金融稳定评估指标体系的构成。(p21)",points:2,content:`- 金融稳定评估指标体系用于监测金融机构安全性、可持续性及整体风险，由两类指标组成：	==2==

  - *（一）宏观经济指标（定量与定性）*
    - **涉及国内和国外宏观经济**：定量指标包括各层次货币供应量增长率、广义货币相对于GDP的比例、通货膨胀率、国内储蓄占GDP的百分比等；定性指标包括国家、政府和法规风险、信息披露制度的建立和完善等。
  - *（二）金融机构内部指标（定量与定性）*
    - **定量指标包括资本充足性、资产负债、资产安全性、盈利性及可持续发展能力五大类27个指标**；定性指标包括内部管理能力中的4个指标。`,isCore:!1},{id:137,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.4",sectionTitle:"第四节 金融稳定",title:"维护金融稳定的联动措施（政策、工具与制度）。(p23-25)",points:3,content:`- 维护金融稳定需要金融政策、金融工具和金融制度的三方联动：	==3==

  - *（一）金融政策*
    - **包括政治保障、货币政策及财政政策**，其中政治保障是维护金融稳定的基础，货币政策和财政政策是维护金融稳定的有效政策工具。
  - *（二）金融工具*
    - **包括利率调控、汇率调控、资本账户管理、流动性管理等**，最终目的是为金融稳定创造良好的金融运行环境，维护金融体系整体稳定。
  - *（三）金融制度*
    - **包括支付体系、信用体系、金融法治体系、投资者保护制度等**，最终目的是为金融稳定创造良好的金融生态环境。`,isCore:!1},{id:138,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",sectionId:"10.5",sectionTitle:"第五节 金融安全",title:"金融安全内涵与金融部门评估规划(FSAP)。(p26)",points:2,content:`- 金融安全是经济安全的核心，国际上通过金融部门评估规划评估金融体系稳健性：	==2==

  - *（一）金融安全的内涵与层次关系*
    - **指货币资金融通安全和整个金融体系实现安全运行的一种状态**；金融稳定是金融安全的基础，金融安全是经济安全的核心，经济安全是国家安全的必要组成。
  - *（二）金融部门评估规划（FSAP）与金融稳健指标（FSIs）*
    - **1999年5月由IMF和世界银行联合推出**，通过宏观、微观和监管层次衡量金融体系是否稳定；宏观层次主要包括金融稳健指标（FSIs，含14项核心指标与26项鼓励指标）评估和压力测试。`,isCore:!1},{id:139,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.1",sectionTitle:"第一节 金融监管概述",title:"金融监管的含义与两大特征。(p3)",points:3,content:`- 对金融监管的内涵界定与基本特征：	==3==

  - *（一）狭义与广义金融监管*
    - **狭义的金融监管**指中央银行或其他金融监管当局依据国家法律法规的授权对整个金融业实施的监督管理；**广义的金融监管**还包括金融机构内部控制与稽核的自律性监管、同业组织的自律性监管、社会中介组织和舆论的社会性监管等。
  - *（二）弥补市场缺陷而非取代市场机制*
    - **监管是政府针对市场机制的缺陷（“失灵”现象）所采取的弥补措施**，它不是要取代市场机制发挥作用。
  - *（三）基于规则的行为*
    - **金融监管是政府基于规则的行为**，政府不是简单的命令与控制，而是在协商利益相关各方的利益立场之后确定监管的规制与程序，在公平与效率之间寻求平衡点。`,isCore:!1},{id:140,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.1",sectionTitle:"第一节 金融监管概述",title:"金融监管的四大客观必要性。(p4)",points:4,content:`- 金融监管的客观必要性体现在以下四个方面：	==4==

  - *（一）金融在现代经济的核心地位决定了金融监管的必要性*
    - **金融是现代经济运行中的基本战略资源和调控宏观经济的重要杠杆**，是国民经济活动的资金枢纽和神经中枢（晴雨表），金融安全是国家经济安全的核心。
  - *（二）金融业的行业特殊性决定了金融监管的重要性*
    - **金融业是风险较大的行业**，不仅有一般行业共有的信用风险、经营风险、市场风险、管理风险，还有金融行业特有的利率风险、汇率风险、国际游资风险。
  - *（三）维护金融秩序，保护公平竞争，提高金融效率，是金融业自身发展的需要*
    - **良好的金融秩序是保证金融安全的重要前提**，公平竞争是保持金融秩序和金融效率的重要条件。
  - *（四）金融监管是金融创新形势下风险管理的必要手段*
    - **金融业的动荡反映了世界范围内各国经济在新形势下的调整与剧变**，对金融监管提出了更高的要求。`,isCore:!0},{id:141,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.1",sectionTitle:"第一节 金融监管概述",title:"金融监管的必要性理论。(p5-6)",points:5,content:`- 金融监管的必要性理论主要包括五大经典理论：	==5==

  - *（一）金融体系的“准公共产品”特性与“搭便车”理论*
    - **金融产品和服务具有公共产品的某些特性**，利用金融产品公共性搭便车的行为日渐兴盛时，投资者决策质量极易受到影响，酿成潜在风险。
  - *（二）金融业财务杠杆理论*
    - **银行业是财务杠杆（资产与资本之比）很高的行业**，使得银行的投资者（股东）和经营者在经营中承担的风险与获取的收益不对称。
  - *（三）金融脆弱性理论*
    - **认为金融体系具有内在不稳定和脆弱的特征**，这是金融监管被依赖的原因。
  - *（四）风险传播的“骨牌效应”理论*
    - **金融机构出现问题往往具有较强的传染性**，为了控制金融风险的传播和由此造成的损失，监管成为必然选择。
  - *（五）金融体系效率与稳定的悖论理论*
    - **效率与稳定性之间存在替代关系**：效率来源于优胜劣汰的充分竞争，但被淘汰机构的支付困难会引发恐慌传播；规模经济带来垄断性并加强稳定却降低效率，需要合理管理调节以实现平衡。`,isCore:!0},{id:142,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.1",sectionTitle:"第一节 金融监管概述",title:"金融监管适度性理论（避免过度监管）。(p7)",points:2,content:`- 避免监管过度的金融监管适度性理论包括两大理论：	==2==

  - *（一）特殊私人部门利益理论（捕获理论与卡特尔管制理论）*
    - **由捕获理论和卡特尔管制理论构成**；捕获理论认为社会公众注定在利益分配中输给被管制集团，政府管制者因资源和专业技术有限而俯首于被管制集团的专家报告、证据及压力，使其特殊利益得到实现和巩固。
  - *（二）社会选择理论*
    - **从公共选择角度动态解释金融监管的历史演变过程**：为社会公众利益初建监管机构→管制当局被动地反映被管制集团的种种利益→管制机构取得自我控制和独立性。`,isCore:!1},{id:143,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.1",sectionTitle:"第一节 金融监管概述",title:"金融监管与货币政策操作的互动配合关系。(p8)",points:3,content:`- 金融监管与货币政策操作之间存在以下三方面关系：	==3==

  - *（一）目标的实现需要中央银行和金融监管当局的密切配合*
    - **银行监管目标的实现是货币政策有效实施的基础**，而独立的货币政策所创造的稳定的货币环境，也是有效实施银行监管、维持金融体系稳定的关键市场环境。
  - *（二）金融监管对货币政策的成效有重大影响*
    - **机构监管所制定的强制性监管法规**，直接对金融机构的经营行为形成影响，进而对货币政策的传导和实施效果直接形成影响。
  - *（三）货币政策操作对金融监管的成效也有重大影响*
    - **例如实行紧缩性货币政策会降低银行清偿能力**；实行过度扩张性货币政策会引发泡沫经济，加大银行潜在危险。`,isCore:!1},{id:144,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.2",sectionTitle:"第二节 金融监管的目标与基本原则",title:"金融监管的总体目标与具体目标。(p9)",points:2,content:`- 金融监管的目标可以分为总体目标和具体目标：	==2==

  - *（一）金融监管的三层总体目标*
    - **一是保证金融机构的正常经营、保护消费者（包括存款人）的利益和金融体系的稳定**；二是创造公平竞争的环境，鼓励金融业在竞争的基础上提高服务效率；三是确保金融机构经营活动符合市场主体行为规范，使中央银行货币政策传导途径畅通并充分发挥调控作用。
  - *（二）金融监管具体目标的四点共性*
    - **包括防范金融风险，确保金融稳定**；保护金融消费者利益；提升金融体系效率；规范金融机构行为，促进公平竞争。`,isCore:!1},{id:145,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.2",sectionTitle:"第二节 金融监管的目标与基本原则",title:"金融监管的六大基本原则。(p10)",points:6,content:`- 金融监管必须遵循六大基本原则：	==6==

  - *（一）监管主体的独立性原则*
    - **监管机构在明确责任和目标下享有操作自主权和充分资源**，并需创造稳健且可持续的宏观经济政策、完善公共金融基础设施、有效市场约束、适度系统性保护机制等先决条件。
  - *（二）适度竞争的原则*
    - **金融监管应该促进市场机制作用的发挥**，监管当局应将创造适度竞争当作工作重心。
  - *（三）依法监管的原则*
    - **包括两方面**：一是监管活动必须依法进行以保证权威性、公正性、严肃性、一贯性；二是所有被监管的金融机构必须接受监管机构的监督与管理，概莫能外。
  - *（四）自我约束的原则*
    - **强化自我约束**，作为金融监管的重要基本原则之一。
  - *（五）安全、稳健与促进创新相结合的原则*
    - **安全与稳健是金融监管追求的主流和可持续发展基础**，金融创新可为金融业带来活力和更多盈利机会。
  - *（六）提高监管效率的原则*
    - **监管应以最低的成本达到监管的目的**。`,isCore:!0},{id:146,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.3",sectionTitle:"第三节 金融监管的内容与方法",title:"金融监管的三大主要内容。(p11)",points:3,content:`- 金融监管的内容涵盖事前、事中、事后三个阶段：	==3==

  - *（一）市场准入的监管（事前监督）*
    - **对进入市场的金融机构进行审查**，通常包括申请人的财产基础、申请人的素质和经历、新金融机构开设以后的盈利前景和对当地金融秩序的影响。
  - *（二）市场运作过程的监管（事中监管）*
    - **对金融机构日常经营过程的监管**，主要包括资本充足性、价格、流动性、资产和负债的风险管理、外汇风险管理、内部管理；1988年《巴塞尔协议》规定资本与加权风险资产比率高于8%（核心资本不低于4%），规定不同风险权重与表外业务换算系数，1996年公布《资本协议市场风险补充规定》。
  - *（三）市场退出的监管（事后处置）*
    - **倒闭也仅仅是最后选择之一，支付危机是导致倒闭的最直接原因**；发生支付危机时首先分析支付危机性质、经营存续可能性及倒闭外部效应，再决定是否通过最后贷款人职能进行援助。`,isCore:!1},{id:147,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.3",sectionTitle:"第三节 金融监管的内容与方法",title:"金融监管的方法手段与骆驼评级体系(CAMEL)。(p12)",points:2,content:`- 金融监管的方法与经典评级体系：	==2==

  - *（一）现场检查与非现场检查*
    - **现场检查（现场稽核）**是由监管当局派监管人员到金融机构进行实地检查；**非现场检查（非现场稽核）**是通过对业务报表和其他资料的检查发现存在问题，现场检查中的重点检查也建立在非现场检查的基础之上。
  - *（二）骆驼评级体系（CAMEL Rating System）*
    - **美国监管当局于20世纪70年代后期开始采用**，监管内容主要包括资本充足性、资产质量、管理能力、盈利能力、资产的流动性五个方面。`,isCore:!1},{id:148,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.4",sectionTitle:"第四节 金融监管体制",title:"金融监管体制的五种基本模式。(p29)",points:5,content:`- 金融监管体制的不同模式主要包括以下五种：	==5==

  - *（一）统一监管型（单一全能型）*
    - **对于不同的金融机构和金融业务**，无论审慎监管还是业务监管，都由一个机构负责监管。
  - *（二）多头监管型*
    - **将金融机构和金融市场一般按照银行、证券、保险划分为3个领域**，分别设置专业的监管机构负责包括审慎监管和业务监管在内的全面监管。
  - *（三）牵头监管型*
    - **在实行分业监管的同时**，为建立及时磋商协调机制、防止监管真空或业务交叉扯皮推诿，特指定一个监管机构为牵头监管机构负责不同监管主体之间的协调工作。
  - *（四）“双峰”监管型*
    - **设置两类监管机构**：一类负责对所有金融机构进行审慎监管，控制金融体系的系统性金融风险；另一类负责对不同金融业务监管，从而达到双重保险的作用。
  - *（五）“伞形”功能监管型*
    - **对同时从事银行、证券、互助基金、保险等业务的金融持股公司实行“伞形”监管制度**：从整体上指定美联储为金融持股公司监管人负责综合监管，同时金融持股公司按所经营业务种类接受不同行业主要功能监管人的监督。`,isCore:!0},{id:149,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.4",sectionTitle:"第四节 金融监管体制",title:"金融监管体制的三大发展趋势。(p30)",points:3,content:`- 国际金融监管体制呈现出三大发展趋势：	==3==

  - *（一）金融监管体系的集中统一化趋势*
    - **将银行业、证券业和保险业统一由一个机构监管的单一监管体制成为趋势**，监管权力趋于集中，也倾向于将金融监管职能从中央银行中分离出去，由专门监管机构实施。
  - *（二）以宏观审慎监管为基础的监管体系正在形成*
    - **针对次贷危机暴露的表外资产过度杠杆化、逆周期资本金不足及《巴塞尔协议II》缺陷**，在G20主导的新型国际金融治理模式下，《巴塞尔协议III》确定了微观审慎监管和宏观审慎监管相互结合的监管新模式。
  - *（三）金融监管的国际合作不断加强*
    - **国际社会积极响应国际监管组织发布的监管协议及监管集团的监管指引、行业最佳实践等**，致力于推动国际金融监管协调发展。`,isCore:!1},{id:150,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.4",sectionTitle:"第四节 金融监管体制",title:"中国金融监管体制的演变历程。(p31)",points:3,content:`- 中国金融监管体制的发展经历了以下主要阶段：	==3==

  - *（一）大一统与央行统一监管阶段（1984年以前至20世纪90年代）*
    - **1984年以前全国只有中国人民银行一家银行**；1984年至20世纪90年代，中国人民银行专门行使央行职能，承担银行业、证券业、保险业的统一监管职能。
  - *（二）“分业经营、分业监管”框架形成阶段（1992—2003年）*
    - **1992年10月成立中国证监会**，1998年11月移交保险业监管职责给中国保监会，2003年4月26日（银监会成立）中国金融业“分业经营、分业监管”的框架得以形成。
  - *（三）金融监管机构改革重构阶段（2017年至今）*
    - **2017年11月成立国务院金融稳定发展委员会**；2018年3月组建中国银行保险监督管理委员会；2023年3月决定在银保监会基础上组建国家金融监督管理总局，不再保留银保监会。`,isCore:!1},{id:151,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.4",sectionTitle:"第四节 金融监管体制",title:"中国现行金融监管体系的组织构成。(p32)",points:5,content:`- 中国现行的金融监管体系由五大机构组成：	==5==

  - *（一）中央金融委员会*
    - **加强党中央对金融工作的集中统一领导**，负责金融稳定和发展的顶层设计、统筹协调、整体推进、督促落实，研究审议金融领域重大政策、重大问题等。
  - *（二）中央金融工作委员会*
    - **统一领导金融系统党的工作**，指导金融系统党的政治建设、思想建设、组织建设、作风建设、纪律建设等。
  - *（三）中国人民银行*
    - **完善宏观调控体系**，强化经济监测预测预警能力，增强宏观调控的前瞻性、针对性、协同性。
  - *（四）国家金融监督管理总局*
    - **依法对除证券业之外的金融业实行统一监督管理**，强化机构监管、行为监管、功能监管、穿透式监管、持续监管，维护金融业合法、稳健运行。
  - *（五）中国证券监督管理委员会*
    - **依法对证券业实行统一监督管理**，强化资本市场监管职责。`,isCore:!0},{id:152,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.4",sectionTitle:"第四节 金融监管体制",title:"中国现行金融监管体制面临的五大挑战。(p33-34)",points:5,content:`- 中国现行的金融监管体制面临五大主要挑战：	==5==

  - *（一）金融全球化对中国监管体制的挑战*
    - **现行体制建立在分业经营模式之上**，在混业经营发展进程中可能造成监管漏洞、重复监管导致监管成本过高、过度监管约束金融创新使体系失去活力。
  - *（二）金融市场的全面开放对中国金融监管体制的挑战*
    - **不仅对中国原有的金融机构形成巨大的竞争压力**，也对中国的金融监管当局提出了严峻的挑战。
  - *（三）金融监管的有效性有待进一步完善*
    - **部分非金融企业通过虚假注资、杠杆资金和关联交易急剧向金融业扩张**，投资控股金融机构形成金融控股集团，蕴含潜在风险但尚未接受与其他金融机构同等的监管。
  - *（四）市场化风险处置机制还需完善*
    - **在金融机构风险积累直至退出市场的过程中**，风险预警不及时、金融机构整改效果不佳，是风险未能化解在萌芽阶段的主要原因。
  - *（五）数字金融监管明显不足*
    - **经济利益促使跨市场金融创新产品层出不穷**，但监管受制于分业体制问题未能及时跟进，失去监管的金融创新使风险和危机如影随形。`,isCore:!0},{id:153,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.5",sectionTitle:"第五节 宏观审慎监管",title:"宏观审慎监管的概念与六大必要性。(p35-36)",points:7,content:`- 宏观审慎监管是指宏观金融管理当局为了减少金融动荡产生的经济成本、确保金融稳定而将金融体系整体作为监管对象的监管模式：	==7==

  - *（一）宏观审慎监管的两种国际构建理念*
    - **一种是保留传统微观审慎监管指标并辅助宏观审慎监管指标**；另一种是将宏观与微观审慎监管融为一体，认为宏观审慎指标体系可以完全替代微观审慎指标体系架构。
  - *（二）顺周期性和逆周期监管问题*
    - **系统性风险具有跟随经济周期不断积累而后释放的顺周期性**，微观审慎监管难以有效调节，宏观审慎监管恰好弥补其不足。
  - *（三）“大而不倒”问题*
    - **指金融机构因规模、不可替代性与系统关联性等因素具有系统重要性而不能任其倒闭**。
  - *（四）机构主体的普遍关联性问题*
    - **单个金融主体实现稳健经营目标并不能说明整个金融体系是安全的**，需要从宏观审慎层面把握系统性风险。
  - *（五）金融稳健性的标准问题*
    - **《巴塞尔协议I》和《巴塞尔协议II》虽明确规定了资本充足性标准**，但并不意味着这些标准就是完善的。
  - *（六）集体行为的非理性问题*
    - **有效市场理论假定参与主体理性且信息完备不会发生系统性危机**，但现实中存在集体非理性，需从宏观审慎角度把握。
  - *（七）激励机制的不合理问题*
    - **金融机构激励机制普遍与员工个人业绩挂钩**，一旦冒险失败，单个机构的非理性行为会让整个金融体系甚至全球经济买单。`,isCore:!0},{id:154,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.5",sectionTitle:"第五节 宏观审慎监管",title:"宏观审慎监管与微观审慎监管的区别与联系。(p37)",points:4,content:`- 宏观审慎监管与微观审慎监管在目的、内容和监管对象上存在明显区别，同时紧密联系：	==4==

  - *（一）目的不同*
    - **宏观审慎监管的目的是防范系统性风险、维护金融体系整体稳定**（直接目标限制系统性危机发生，最终目标减少对实体经济负面冲击）；**微观审慎监管的目的在于控制单个金融机构或行业风险、保护投资者（消费者）利益**。
  - *（二）内容不同*
    - **宏观审慎监管侧重金融机构的整体行为及相互影响力**，关注宏观经济不稳定因素（风险内生、相关性重要、自上而下制定政策）；**微观审慎监管侧重个体行为和风险偏好**（风险外生、相关性无关、自下而上制定政策）。
  - *（三）监管对象不同*
    - **宏观审慎监管更关注具有系统重要性金融机构的行为、金融市场整体趋势及与宏观经济的相互影响**（重点为逆周期调控和系统重要性银行）；**微观审慎监管更关注具体金融机构的合规与风险暴露情况**。
  - *（四）二者的内在联系*
    - **良好的宏观与微观监管可以相互促进，增强彼此的监管效果**。`,isCore:!0},{id:155,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.5",sectionTitle:"第五节 宏观审慎监管",title:"时间维度下宏观审慎监管的五大政策工具。(p38)",points:5,content:`- 时间维度下宏观审慎监管政策工具的选择包括以下五项：	==5==

  - *（一）逆周期资本缓冲*
    - **针对最低资本充足率，在经济繁荣期增加超额资本充足要求**，动态调整资本充足率，让银行在经济上行周期计提资本缓冲以满足下行周期吸收损失的需要。
  - *（二）流动性调控（流动性覆盖率）*
    - **侧重衡量银行短期流动水平**，旨在确保商业银行在设定的严重流动性压力情景下，保持充足、无变现障碍的优质流动性资产以满足未来30日的流动性需求。
  - *（三）设定杠杆率标准*
    - **《巴塞尔协议III》引入杠杆率要求**，采用简单的表内外资产加总之和替代风险加权资产衡量资本充足程度，防范风险加权资产计算过程的模型风险。
  - *（四）设定拨备标准*
    - **银行拨备目的在于真实反映公允价值**，在银行经济效益上升时期提高计提的拨备水平，在经济效益下降时期降低计提的拨备水平。
  - *（五）建立逆周期的抵质押品价值比率标准*
    - **由于经济繁荣期抵质押品市场价格较高、衰退期较低而具有明显顺周期性**，需要建立逆周期的抵质押品价值比率标准加以约束。`,isCore:!0},{id:156,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.5",sectionTitle:"第五节 宏观审慎监管",title:"空间维度下宏观审慎金融监管的六大政策工具。(p39)",points:6,content:`- 空间维度下宏观审慎金融监管政策工具的选择包括以下六项：	==6==

  - *（一）资本充足性的普遍标准*
    - **《巴塞尔协议III》大幅提高高质量核心一级资本最低要求**（一级资本只包括普通股和永久优先股），普通股比例从2%提升至4.5%，一级资本充足率下限从4%提升至6%，并需建立2.5%的资本留存缓冲和0～2.5%的逆周期资本缓冲。
  - *（二）系统重要性金融机构的额外监管要求*
    - **《巴塞尔协议III》为降低银行“大而不倒”带来的道德风险**，对系统重要性银行提出1%的附加资本要求。
  - *（三）改革评级公司*
    - **多数投资者和金融机构对评级公司有较强依赖性并加剧了评级的顺周期性**，运用宏观审慎监管政策可以减少对评级的依赖。
  - *（四）衍生品交易的集中清算*
    - **各国主要有两种监管方式**：一是建立中央对手方（使每笔衍生品交易被记录并有效监督）；二是建立集中、统一的清算体系以规范衍生品交易市场。
  - *（五）加强对影子银行的监管*
    - **影子银行是游离于银行监管体系之外、可能引发系统性危险和监管套利的信用中介体系**（如对冲基金、私募基金等），其引发系统性风险的因素主要包括期限错配、流动性转换、信用转换和高杠杆四个方面。
  - *（六）或有资本的安排与监管*
    - **或有资本是在特定事件发生时公司募集股本或其他实收资本项目的工具**，当银行经营陷入困境时可事先安排或有资本，避免银行资产收缩带来的信贷收缩效应。`,isCore:!0},{id:157,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对商业银行的监管内容。(p45)",points:3,content:`- 中央银行对商业银行的监管涵盖设立开业、日常经营与危机处置三个环节：	==3==

  - *（一）对商业银行设立与开业的监管*
    - **依据核准主义原则建立审批制**，重要标志是授予相关许可证即银行牌照，主要集中在机构准入、业务准入、从业人员准入三个方面。
  - *（二）对商业银行日常经营的监管*
    - **稽核涉及资本充足性、资产质量、贷款集中、流动性、盈利能力、操作风险等**：资本充足性中《巴塞尔协议I》规定核心资本至少占50%且附属资本不超核心资本；中国流动性主要注重存贷比例、资产流动性、中长期贷款比例、拆借资金比例四项指标；盈利能力指标包括成本收入比、资产利润率和资本利润率。
  - *（三）对危机银行的监管*
    - **政策选择顺序为先拯救，无力拯救再采取退出市场安排**；拯救方法包括流量法（通过注入资金改善损益表）和存量法（通过调整资产负债表，如剥离不良资产集中到资产管理公司）。`,isCore:!1},{id:158,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对政策性金融机构与合作金融机构的监管。(p46-47)",points:2,content:`- 中央银行对政策性金融机构和合作金融机构的监管要点如下：	==2==

  - *（一）对政策性金融机构的监管*
    - **主要包括资本充足率、合规性、效益性**：因政府担保贷款风险权数为零，其资本充足率应高于商业银行；合规性监管经营范围、信贷规模、利率执行及会计财务统计真实性与贷款投向；效益性通过利润率、资产利润率、成本率、人均管理费用、利息回收率、资本利润率等监测。
  - *（二）对合作金融机构的监管*
    - **包括市场准入监管和风险监管**：市场准入涵盖股份控制与管理、注册资本和资本充足率监管、从业人员要求（80%以上有一年以上金融工作或相关专业大中专学历）；风险监管依据预警指标体系从资本充足性、流动性、安全性、效益性、综合发展能力及管理能力6个方面实施非现场监管。`,isCore:!1},{id:159,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对信托机构的监管。(p48)",points:2,content:`- 中央银行对信托机构的监管主要包括市场准入与业务运营两方面（附保险公司监管）：	==2==

  - *（一）市场准入监管*
    - **机构设立与变更采用“认可论”方针**，在具备法律要求并履行法律手续基础上，还须经有关行政主管当局对社会利害影响进行审核；业务准入方面各国对业务范围均有明确限制。
  - *（二）业务运营监管*
    - **分为现场监管与非现场监管**，非现场监管主要依托信托投资公司按期上报的经过注册会计师公证的财务报表（集中监管体制下对保险公司实行统一监管，采用财产保险与人身保险分业经营）。`,isCore:!1},{id:160,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对货币市场的监管（票据、拆借与国债）。(p49-50)",points:3,content:`- 中央银行对短期货币市场的监管主要包括三个子市场：	==3==

  - *（一）对商业票据市场的监管*
    - **分别对贴现（持票人、贴现机构、流程及事后核查）、再贴现（对象、操作体系、税收）和承兑（出票人、出票银行、申请人资信状况）作出规定**。
  - *（二）对同业拆借市场的监管*
    - **监管原则包括自愿协调平等互利自主成交、短期使用、按期归还三项原则**；规定涉及参加对象资格审定、拆借期限和利率控制、拆入资金用途管理、拆出资金来源、拆入拆出资金比例限制及违章处罚。
  - *（三）对国债市场的监管*
    - **各企事业单位、机关团体、部队和城乡居民（不含“三资”企业）是认购对象**，通常采用固定利率、浮动利率和保值利率；国债交易价格随行就市，并遵循“时间优先、价格优先”的原则。`,isCore:!1},{id:161,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对资本市场及证券交易行为的监管。(p51-53)",points:3,content:`- 中央银行对资本市场（主要是证券市场）的监管包括以下三方面：	==3==

  - *（一）证券发行市场监管（注册制与核准制）*
    - **注册制仅要求发行人公开真实、可靠和全面的信息，适用于成熟市场**；核准制（许可制/审批制）要求同时符合公司法与证券法实质性条件，适用于发展历史不长市场；中国目前对证券发行和上市的监管属于注册制。
  - *（二）对证券交易所和证券交易服务机构的监管*
    - **包括三种制度**：以美国为代表的注册制（登记制）、以日本为代表的核准制（特许制/许可制）以及以英国为代表的认可制（传统上以自律为原则，无须政府批准）。
  - *（三）对证券市场交易行为的监管*
    - **主要包括三项监管内容**：反内幕交易的监管、禁止市场操纵行为的监管以及反欺诈行为监管。`,isCore:!1},{id:162,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",sectionId:"11.6",sectionTitle:"第六节 中央银行金融监管运行（机构与市场监管）",title:"中央银行对外汇市场和黄金市场的监管。(p53)",points:2,content:`- 中央银行对外汇市场和黄金市场的监管要点如下：	==2==

  - *（一）对外汇市场的监管*
    - **直接目标是弥补市场机制失灵、保护参与者合法权益、维护市场公平效率透明和稳定**，最终目标是维护金融稳定、促进经济增长；中国外汇监管的主要目标是加强外汇管理，促进国际收支平衡，促进国民经济健康发展。
  - *（二）对黄金市场的监管*
    - **中国黄金现货交易、延期交收交易和中远期交易在上海黄金交易所进行**，由中国人民银行监管。`,isCore:!1}],fe=vn.map(t=>({...t,keywords:fn[t.id]||[]})),ke=[{id:1,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"简述中央银行存在的必要性。",points:10,answer:`- 社会经济活动中的种种矛盾是中央银行产生和发展的根本动力，其客观必然性表现在五个方面：

  - *（一）政府对货币财富和银行控制的需要*
    - 国家机器不断强化、战争频频爆发以及自然灾害使政府财政入不敷出日益严重，为弥补财政亏空，客观上要求政府建立受其直接控制的银行为自己服务；
  - *（二）统一银行券发行的需要*
    - 银行券分散发行带来两个问题：一是因银行券不能兑现而出现挤兑现象；二是银行券在流通中受到限制，特别是信用不好的银行所发行的银行券；
  - *（三）信用集中的需要*
    - 社会对资金需求数额越来越大、期限越来越长，商业银行采取降低支付准备金、扩大银行券发行量等手段，因贷款不能按时收回、突发性大量提现等经常发生资金周转不灵和兑现困难；
  - *（四）建立票据中心的需要*
    - 银行数量增多、业务扩大使需要处理的票据数量膨胀，各家银行单独分散结算已不能适应市场经济发展要求，客观上需要统一的票据清算机构协调处理票据交换和债权债务关系；
  - *（五）统一金融管理的需要*
    - 金融业特殊性决定了对金融业的监管不能仅仅依靠政府的行政手段，有效方法是由政府通过专门机构制定金融政策和管理条例来统筹、管理和监督全国货币金融活动。`,keywords:["是中央银行","财政入不敷出","直接控制","发行的银行","现象","资金周转不灵","支付准备金","票据清算机构","票据交换","殊性决定了对金","金融活动"]},{id:2,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"如何理解英格兰银行垄断银行券的发行权是中央银行发展史上的一个重要的里程碑？",points:10,answer:`- 英格兰银行1694年成立，比瑞典银行晚38年，但它是中央银行发展史上的重要里程碑，世界各国一般认为英格兰银行是中央银行的鼻祖：

  - *（一）与英国政府的特殊关系使其最早具备中央银行基本特征*
    - 英格兰银行最早具有和行使中央银行职能，以后各国建立的中央银行及其中央银行制度大多数是以英格兰银行为蓝本发展起来的；
  - *（二）克服了早期分散发行银行券的制度弊端*
    - 早期商业银行分散发券导致不能兑现而引发挤兑、信用不佳银行的银行券流通受限，垄断发行权使中央银行成为全国唯一货币发行机构；
  - *（三）奠定了履行核心央行职能的制度基础*
    - 在金本位条件下通过集中大量黄金储备保证银行券随时兑换金币及存款货币顺利转化为银行券，并由普通银行通过集中货币发行、提供清算服务和资金支持逐步演变成现代中央银行。`,keywords:["是中央银行","英格兰银行","最早具有和行","银行的银行","金本位"]},{id:3,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"试述美联储产生的原因及历史过程。",points:10,answer:`- 美联储成立于1913年（1914年正式成立），其产生经历了一段相当长的摸索和探求过程，比欧洲晚：

  - *（一）美联储产生的原因*
    - 1837—1863年是美国历史上的自由银行时期，在大多数州只要具有一定资本即可申请银行执照，结果造成银行数剧增、货币流通和信用混乱；
  - *（二）美联储建立的历史过程*
    - 1908年5月，美国国会成立国家货币委员会，负责研究全国货币制度并对改革银行和货币法规问题提供建议；
    - 1912年，国家货币委员会提出改进银行制度的特别法案，制定了一种折中性的联邦储备制度；
    - 1913年12月23日，国会通过该法案，即《联邦储备法》，目的是建立更加安全稳妥、更加机动灵活的银行货币体系；
    - 1914年12月23日，美联储正式成立，标志着美国中央银行制度的正式形成。`,keywords:["美联储","史上的自由银行","美国国会","国家货币委员会","联邦储备法","着美国中央银行"]},{id:4,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"从资本结构、权力结构、内部机构和分支机构的角度来说明中央银行组织结构对中央银行的运作方式、货币政策的制定和执行以及金融监管的重要意义。",points:10,answer:`- 中央银行是一个复杂的组织控制系统，其组织结构对其履职运作、货币政策制定执行及金融监管具有重要意义：

  - *（一）资本结构*
    - 包括全部由国家所有（如荷兰、西班牙、加拿大等50多国）、集体所有（意大利、美国）、公私混合所有（如日本银行政府认购55%）、多国所有（如欧洲央行）和无资本金（如韩国银行）五种形式；无论何种形式，国家均拥有直接控制和监督权，私人持股者既无决策权也无经营管理权，从根本上保证央行本质上作为政府机构服务于宏观调控；
  - *（二）权力结构*
    - 分为三权由一个机构统一掌管（如英、美、马、菲，决策层次少、利于政策衔接和迅速实施但缺乏制衡）、三权分属不同机构（如日、德、法、澳、巴、韩，各司其职）和不同机构交叉掌管（如瑞士、比利时）三种模式，直接决定货币政策决策与监管权力的制衡与执行效率；
  - *（三）内部机构*
    - 总行内部设行政管理部门（综合保障）、业务操作部门（货币发行、再贴现、公开市场、准备金、清算等）、金融监管部门（事前管理、事后检查与业务指导）和调研分析部门（情报搜集与政策建议），保障货币政策制定有依据、执行有抓手、监管有实效；
  - *（四）分支机构*
    - 按经济区域设置（利于货币政策集中统一操作、减少地方政府干预）、兼顾经济区域和行政区划设置（如德、日），且分支机构只是总行的派出机构，由总行垂直领导、不受地方政府管辖，确保总行政策与任务高效贯彻。`,keywords:["币政策制定执行","宏观调控","无资本金","分为三权","公开市场","再贴现","垂直领导","派出机构"]},{id:5,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"中央银行的主要职能是什么？不同国家的中央银行职能是否会存在差异？为什么？",points:10,answer:`- 中央银行的性质决定职能，职能是性质的体现：

  - *（一）中央银行的三大主要职能*
    - **发行的银行**：垄断货币发行特权而成为全国唯一的货币发行机构；
    - **银行的银行**：以商业银行和其他金融机构为对象，担任存款准备金的保管者、银行的最后贷款人和银行票据结算中心；
    - **政府的银行**：代表政府执行金融政策、代为管理财政收支并提供服务，包括代理国库、给国家以信用支持、管理黄金和外汇、制定或执行金融政策；
  - *（二）不同国家中央银行职能存在差异*
    - 在金融政策制定权上，独立性很强的国家由中央银行制定；独立性较弱的国家一般由政府制定、中央银行执行并由央行充当政府顾问；
    - 在对金融业具体管理上，有些国家全部由中央银行承担，有些国家由中央银行与专门管理机构共同承担；
  - *（三）存在差异的原因*
    - 各国的政治与经济制度、历史传统、文化背景、经济金融发展水平以及中央银行与政府之间的相对独立性程度各不相同。`,keywords:["性质决定职能","发行的银行","存款准备金","最后贷款人","黄金和外汇","代理国库","政府顾问","独立性","专门管理机构","金融业","的政治与经济制度"]},{id:6,chapterId:1,chapterTitle:"第一章 中央银行的产生与发展",question:"阐述中央银行的性质。",points:10,answer:`- 中央银行是代表国家制定和执行货币政策，对国民经济进行宏观调控和对金融业进行监督管理的特殊金融机构，是一国国民经济的神经中枢和金融体系的核心环节，其特殊性体现在两个方面：

  - *（一）不同于一般政府机关*
    - 业务具有银行特征，办理存贷款、清算、发行和买卖有价证券等业务，提供资金方式是借贷式的，虽不以营利为目的，但与完全依靠国家财政拨付经费的政府机关有明显差异；
    - 宏观调控主要通过金融业务活动、用经济杠杆和货币政策工具实现；
    - 与政府的关系是相对独立的关系，依据客观经济发展状况独立制定执行货币政策，较少受政府干预；
  - *（二）不同于一般银行和其他金融机构*
    - 从事宏观金融活动，而商业银行及其他金融机构主要从事微观信用中介活动；
    - 不经营一般商业银行和其他金融机构业务，业务经营对象不同；
    - 业务不以营利为目的；
    - 在一国金融体系中居于核心、处于超然地位；
    - 独占货币发行权，维护本国货币对内和对外价值的基本稳定。`,keywords:["制定和执行货币政策","宏观调控","有价证券","借贷式","货币政策工具","政策工具","况独立制定执行","宏观金融活动","金融活动","营一般商业银行","业务不","在一国金融体系","独占货币发行权","货币发行权"]},{id:7,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"如何看待中央银行在现代经济中的作用？",points:10,answer:`- 中央银行在现代经济体系中处于重要地位，发挥着四个突出作用：

  - *（一）稳定货币，稳定经济*
    - 中央银行作为发行的银行，为经济发展创造了货币条件，为一国币值的稳定提供了保障；
    - 作为一国唯一能够发行纸币的机构，纸币直接构成流通中货币量的一部分，并与各金融机构在央行的存款共同构成商业银行创造存款货币的基础；
  - *（二）调节信用，调节经济*
    - 现代市场经济以信用货币制度为基础，央行在整个社会资金运动中处于中心环节，是国民经济的枢纽、货币的供给者和信用活动的调节者；
    - 可运用调整利率和准备金率、在公开市场上买卖有价证券等货币政策手段对货币和信用量进行调控；
  - *（三）集中清算，加速资金周转*
    - 作为全国资金清算中心，集中办理票据交换和异地资金转移，各家银行每日营业终了将票据交换差额通过在央行开立的账户相互划拨清算，简化了手续、节约了现金使用、加速了资金周转并提高了结算效率；
  - *（四）推进国际金融的合作和交流*
    - 作为国家对外联系的重要纽带，在国际贸易和交往中提供货币支持，代表国家参与国际金融谈判、磋商、协调与签约，保管外汇储备，并参与国际金融组织和会议承担维护世界经济秩序的重任。`,keywords:["在现代经济体系","发行的银行","货币量","经济以信用货币","货币政策手段","公开市场","异地资金转移","资金清算中心","国际金融谈判","外汇储备"]},{id:8,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"试述中央银行独立性的含义及其内容。",points:10,answer:`- 中央银行的独立性问题，实质上是中央银行与政府之间的关系问题：

  - *（一）中央银行独立性的含义*
    - 指中央银行履行自身职责时，法律赋予其制定和执行货币政策、进行金融监管与调控的自主权，以及为确保自主权有效行使而采取的相关法律措施的自主程度；
    - 包含两层含义：一是中央银行应对政府保持一定独立，自由决定如何实现政策目标；二是独立性是相对的，行使自主权时在一定程度上受制于其他部门（尤其是政府）；
  - *（二）中央银行独立性的三大内容*
    - **享有独立的货币发行权**：货币发行权高度集中并由央行垄断；发行数量、时间、地区分布及面额比例自行决定；不在政府干预下搞财政发行、不承担财政透支、不在发行市场直接购买公债；
    - **独立制定和执行货币政策**：制定权和执行权掌握在央行手中且执行不受各级政府干预；与政府分歧时政府尊重央行意见；有关部门尽量配合央行执行货币政策；
    - **独立监督、监测金融市场**：在法律授权和保障下独立行使对金融体系和金融市场的管理权、控制权和制裁权。`,keywords:["是中央银行","独立性","制定和执行货币政策","执行货币","其他部门","货币发行权","财政发行","独立制定和执行","制裁权","控制权"]},{id:9,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"中央银行的相对独立性有哪些类型？",points:10,answer:`- 根据中央银行独立性的大小，可以分为三种类型：

  - *（一）独立性较强型*
    - 直接对议会或者国会负责，可以单独制定和执行货币政策，政府不得对中央银行发布命令和指示，以德国、美国、瑞典、瑞士等国家为典型代表；
  - *（二）独立性居中型*
    - 中央银行隶属政府的财政部，在名义上独立性较弱，但实际上中央银行拥有较大的决策与管理权的独立性，以英国、日本、加拿大等国家为典型；
  - *（三）独立性较弱型*
    - 隶属于政府的财政部，无论在名义上还是在实际上，在制定和执行政策、履行职责时都比较多地服从政府或财政部的指令，以意大利、法国、澳大利亚、韩国等国家为典型（中国的中国人民银行按照通常标准判断也属于独立性较弱型，但1984年以来独立性正在不断加强和完善）。`,keywords:["独立性","制定和执行货币政策","议会或者国会","名义上独立性较弱","管理权","中国人民银行","财政部的指令"]},{id:10,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"简述中央银行与其他部门之间的关系。",points:10,answer:`- 中央银行与其他部门之间的关系主要体现在三个方面：

  - *（一）与财政部门的关系*
    - **行政隶属关系**：按相对独立性强弱分为较强型、居中型和较弱型；
    - **资金与业务往来关系**：资本金大都由财政代表国家或政府持有，利润除规定提存外全部交国家财政，亏损由国家财政弥补；
    - **政策关系**：货币政策与财政政策需要协调配合才能产生巨大影响力，各行其是会抵消各自作用；
  - *（二）与其他金融管理部门之间的关系*
    - 各国在金融业具体管理上存在体制差异，有些国家全部由央行承担，有些国家由央行与专门管理机构共同承担；专业化金融监管机构的出现是中央银行独立性的演变和发展；
  - *（三）与商业银行等金融机构之间的关系*
    - 从金融运行看，央行是全部金融活动的核心；从业务关系看，央行是“银行的银行”，提供支付保证、融资、清算等服务；从监督管理职责看，央行是领导者和管理者，但双方不是行政意义上的隶属关系，主要通过制定实施政策和具体金融业务活动实现。`,keywords:["其他部门","行政隶属关系","独立性","资金与业务往来关系","各行其是会","专门管理机构","是中央银行","银行的银行","金融活动"]},{id:11,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"简述中国人民银行的独立性。",points:10,answer:`- 按照通常标准判断，中国人民银行属于独立性较弱型，但从1984年专门行使中央银行职能以来，其独立性正在不断加强和完善。根据现行《中华人民共和国中国人民银行法》（2003年12月27日修正）规定，主要表现在四个方面：

  - *（一）《中国人民银行法》第二条*
    - “中国人民银行在国务院领导下，制定和执行货币政策，防范和化解金融风险，维护金融稳定”；
  - *（二）《中国人民银行法》第五条*
    - “中国人民银行就年度货币供应量、利率、汇率和国务院规定的其他重要事项作出的决定，报国务院批准后执行”；
  - *（三）《中国人民银行法》第七条*
    - “中国人民银行在国务院领导下依法独立执行货币政策，履行职责，开展业务，不受地方政府、各级政府部门、社会团体和个人的干涉”；
  - *（四）《中国人民银行法》第十二条*
    - 中国人民银行设立货币政策委员会，其职责、组成和工作程序由国务院规定，报全国人大常委会备案，在国家宏观调控、货币政策制定和调整中发挥重要作用。`,keywords:["中国人民银行","1984年","制定和执行货币政策","执行货币","国务院批准","货币供应量","履行职责","货币政策委员会","宏观调控"]},{id:12,chapterId:2,chapterTitle:"第二章 中央银行的地位与作用",question:"简述中国人民银行在我国金融体系和经济体系中的地位。",points:10,answer:`- 中国人民银行是我国的中央银行，在我国金融体系和国民经济体系中处于核心与领导地位：

  - *（一）在金融体系中的地位*
    - 作为发行的银行、银行的银行和政府的银行，处于现代金融体系的领导和核心地位；
    - 从金融运行看，是货币流通的中心、资金运动的中心和社会信用活动的中心；
    - 从业务和监管看，是各类金融机构的支持者和保证者，也是商业银行等金融机构的领导者和管理者；
  - *（二）在国民经济体系中的地位*
    - 在国务院领导下制定和执行货币政策，防范和化解金融风险，维护金融稳定；
    - 综合运用货币政策手段稳定货币、调节信用、集中清算资金并推进国际金融合作与交流，对国民经济进行宏观调控。`,keywords:["中国人民银行","发行的银行","银行的银行","从金融运行","是各类金","制定和执行货币政策","执行货币","国际金融合作","货币政策手段"]},{id:13,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",question:"简述中央银行的法定业务权利有哪些。",points:10,answer:`- 中央银行的法定业务权利是指法律赋予中央银行在进行业务活动时可以行使的特殊权利，一般包括七项：

  - *（一）对金融市场和金融机构进行管理，并发布行政命令和规章制度*
    - 为保障金融安全、金融业健康稳定发展和经济稳定增长，制定和执行金融法规、规章；
  - *（二）持有、管理和经营国家黄金、外汇储备*
    - 调控储备资金总量、调节储备资金结构、负责储备资金保值及经营收益、合理运用储备资金以实现国际收支平衡和汇率基本稳定；
  - *（三）代理国库业务、代理政府债券发行和兑付业务*
    - 为政府提供金融服务，具有收缴库款方便、库款调拨灵活、资金安全核算准确、有利于央行宏观调控等优越性；
  - *（四）对金融机构和金融市场的相关活动进行稽核、检查*
    - 按照国际货币基金组织（IMF）要求，以相关法律为准则、业务数据和会计统计资料为依据，进行定期和不定期检查、核对、监督和管理；
  - *（五）对全国的金融活动进行统计调查与分析预测*
    - 统一编制全国金融统计数据、报表，按照国家规定定期予以公布；
  - *（六）央行财务收支的会计核算和内部监督与管理*
    - 负责央行自身财务收支的会计核算与内部监督管理；
  - *（七）法律允许的其他业务*
    - 如办理外国中央银行或政府存款、非存款货币银行的存款等。`,keywords:["中央银行的法","经济稳定增长","金融安全","国际收支平衡","国际收支","宏观调控","按照国际货币","金融统计","会计核算","存款货币银行"]},{id:14,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",question:"简述中央银行的法定业务限制有哪些。",points:10,answer:`- 为确保中央银行认真履行职责、合理运用特权、保持高度信誉和超然地位，各国中央银行法对其业务活动主要设有六项限制：

  - *（一）不得经营一般性银行业务或非银行金融业务*
    - 严禁涉足普通商业银行业务或一般非银行金融业务；
  - *（二）不得向任何个人、企业或单位提供担保或直接发放贷款*
    - 有的国家还规定不得向地方政府、各级政府部门、非银行金融机构提供贷款；
  - *（三）不得直接从事商业票据的承兑、贴现业务*
    - 不得直接介入微观商业票据承兑与贴现；
  - *（四）不得从事不动产买卖业务*
    - 禁止从事不动产买卖交易；
  - *（五）不得从事商业性证券投资业务*
    - 禁止开展商业性证券投资活动；
  - *（六）一般不得向财政透支，不得直接认购、包销国债和其他政府债券*
    - 防止财政赤字通过货币发行弥补而引发通货膨胀。`,keywords:["履行职责","金融业","提供贷款","承兑与贴现","不动产买卖","商业性证券投资","证券","财政赤字","通货膨胀"]},{id:15,chapterId:3,chapterTitle:"第三章 中央银行业务活动的法律规范与基本原则",question:"简述中央银行业务活动的原则是什么。",points:10,answer:`- 中央银行的性质表明它不同于一般的商业银行和金融机构，其业务活动遵循七项原则：

  - *（一）服从履行职责的需要*
    - 作为发行的银行、银行的银行和政府的银行，业务活动须服从代表国家管理金融的法定职责需要；
  - *（二）不以盈利为目标*
    - 以制定和实施货币政策、维护金融和经济稳定为己任，各项业务视宏观经济和金融形势而定，不以盈利为目标；
  - *（三）不经营一般商业银行业务*
    - 拥有垄断货币发行、代理国库、集中存款准备金、管理金融机构等特权，不经营一般商业银行业务；
  - *（四）保持资产的流动性*
    - 确保在商业银行资金紧张、出现整体性流动性危机或政府需立即支出大笔款项时，能够立即拥有并付出相当数量的可用资金；
  - *（五）保持业务的公开性*
    - 使社会公众更加及时、清晰地了解中央银行的货币政策意图，以便形成合理预期，增强货币政策效应；
  - *（六）保持业务的主动性和一定的独立性*
    - 资产负债业务直接关联货币供给、基础货币和货币乘数，开展业务须保持主动性和一定独立性；
  - *（七）业务活动须遵循相应的法律规范*
    - 中央银行业务只能在法定范围内进行，不得经营法律许可以外的业务。`,keywords:["一般的商业银行","发行的银行","银行的银行","制定和实施货币政策","不以盈利为目标","一般商业银行业务","存款准备金","流动性","使社会","资产负债业务","基础货币","法定范围内"]},{id:16,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"中央银行存款业务的意义是什么？与商业银行存款有何区别？",points:10,answer:`- 中央银行吸收存款是通过资金的运用创造资金来源，其目的（意义）与商业银行存款的区别如下：

  - *（一）中央银行存款业务的目的与意义（p3-4）*
    - **调控信贷规模和货币供应量**：集中资金以便自主开展再贴现和公开市场操作，并通过规定和调整法定存款准备金比率调控商业银行信贷规模；
    - **维护金融安全**：通过对存款制度的不同设计（如按资产质量确定存款准备金比率）达到金融监管、控制信贷结构、维持银行体系安全的目的；
    - **国内资金清算的需要**：各金融机构在央行的存款是维护支付系统正常运转的物质基础，用于清算债权债务；
    - **有利于调节现金发行量与货币结构**：资产业务既定下，负债方存款增加可减少现金投放或增加回笼，反之亦然。
  - *（二）与商业银行存款的区别（p5）*
    - **存款的强制性**：商行遵循“存款自愿，取款自由”；央行收存存款遵循金融法规制度，具有强制性，数量和利率完全由央行确定；
    - **存款用途及目标的特殊性**：商行追求利润最大化；央行出于宏观调控和行使监管职能需要，以控制信贷规模、调节货币供应量、稳定币值等为目标；
    - **存款人的特定性**：商行吸收个人、工商企业存款；央行不以普通居民和企业为对象，而收存商业银行、非银行金融机构、政府部门及特定部门的存款；
    - **与存款当事人之间关系的特殊性**：商行与存款当事人之间是纯粹的经济关系（平等互利）；央行与存款当事人之间除经济关系外，还有管理者与被管理者的关系。`,keywords:["吸收存款","法定存款准备金比率","法定存款准备金","银行体系安全","信贷结构","支付系统","调节现金发行量与货币结构","金融法规","强制性","利润最大化","货币供应量","普通居民和企业","存款人","管理者与被管理者的关系"]},{id:17,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"什么是存款准备金？包括哪几个部分？",points:10,answer:`- 根据课件第四章第一节（p6），存款准备金的定义与构成如下：

  - *（一）存款准备金的含义*
    - 存款准备金是商业银行为应付客户提取存款和划拨清算的需要而设置的专项资金；
  - *（二）金融机构准备金的两大部分*
    - **自存准备**：为保证存款支付和票据清算而保留的货币资金，通常以库存现金的方式保存在自己的业务库；
    - **存储于中央银行的存款（存款准备金）**：以存款形式存储于中央银行。
  - *（三）存款准备金的两大组成部分*
    - **法定存款准备金**：由法定存款准备金率及商业银行存款总额来决定，必须存在中央银行存款准备金账户，商业银行无权动用；
    - **超额存款准备金（一般性存款）**：商业银行为保持资金清算或同业资金往来而自愿存在中央银行准备金账户上、超过法定存款准备金的那部分存款，商业银行可以自由使用。`,keywords:["存款准备金","是商业银行","库存现金","自存准备","存储于中央银行的存款","法定存款准备金率","存款准备金账户","超额存款准备金","同业"]},{id:18,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"简述存款准备金制度的基本内容。",points:10,answer:`- 根据课件第四章第一节（p8-10），存款准备金制度的基本内容包括三个方面：

  - *（一）规定存款准备金的构成*
    - 一般限定为金融机构在中央银行的存款（部分国家包括库存现金、政府债券等高流动性资产）；西方国家分为**第一准备**（现金准备/主要准备，如库存现金及存放在央行的法定准备金）和**第二准备**（保证准备，如国库券及其他流动性资产）；
  - *（二）制定和调整法定存款准备金比率*
    - 确定比率的类型（**统一准备金比率制**和**差别存款准备金比率制**）和水平；
    - 规定法定存款准备金比率的调整幅度，以降低准备率调整给商业银行和金融机构带来的巨大冲击；
  - *（三）按规定计提和管理存款准备金*
    - **规定存款准备金的缴存范围**：规定哪些金融机构的哪些存款需要缴存法定存款准备金；
    - **确定存款准备金的计提办法**：包括确定计提基础（日平均余额扣除法或期末余额扣除法，多数国家采用月平均余额）、确定调整基期长度（我国目前为一旬）以及确定计提基期（当期准备金账户制或前期准备金账户制）。`,keywords:["包括三个方面","存款准备金","法定准备金","库存现金","差别存款准备金比率","统一准备金比率制","法定存款准备金比率","法定存款准备金","缴存法定存款准备金","前期准备金账户制","当期准备金账户制"]},{id:19,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"中央银行货币发行必须遵循哪些基本原则？为什么？",points:10,answer:`- 根据课件第四章第二节（p17-18），中央银行货币发行必须遵循三大原则：

  - *（一）垄断发行原则*
    - 货币发行权高度集中于中央银行，统一国内的通货形式；
    - **原因**：有利于避免多头发行造成的货币流通混乱，增加货币发行收益以增强央行实力，便于央行制定和执行货币政策、灵活有效调节流通中货币量，便于政府利用央行货币工具管理和调节。
  - *（二）信用保证原则*
    - 货币投放要有一定的黄金或有价证券作保证；
    - **原因**：通过建立一定的发行准备制度以保证中央银行独立发行，避免出现财政发行。
  - *（三）弹性原则*
    - 货币发行要具有一定的伸缩性和灵活性，以适应经济状况变化的需要；
    - **原因**：既要充分满足经济发展的要求，避免通货不足导致通货紧缩与经济衰退；也要严格控制货币发行数量，避免因通货过量供应造成通货膨胀与经济混乱。`,keywords:["中央银行货币","高度集中于中央银行","货币发行权","制定和执行货币政策","执行货币","黄金或有价证券","有价证券","财政发行","伸缩性和灵活性","伸缩性","通货紧缩","通货膨胀"]},{id:20,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"试比较分析各种货币发行制度的优缺点。",points:10,answer:`- 根据课件第四章第二节（p19-21），主要货币发行准备制度有六种，优缺点如下：

  - *（一）现金准备发行制*
    - **优点**：能够严格控制货币发行量，货币价值有十足的保证；**缺点**：缺乏弹性，不能适应经济发展需要；
  - *（二）证券保证准备制*
    - **优点**：弥补了现金准备制度的缺陷，发行的货币有了足够的弹性，给予央行较大调节宏观经济的余地；**缺点**：增加了控制货币发行的难度，易造成货币的财政发行，导致货币发行量失控；
  - *（三）现金准备弹性比例制*
    - **优点**：兼顾了信用保证原则和弹性原则（超额发行征收超额发行税）；**缺点**：控制过度发行的效果取决于超额发行税的制约作用和央行的独立性；
  - *（四）证券保证准备限额发行制*
    - **优点**：有利于限制货币的财政发行（限额内用规定证券，超限额需十足现金准备）；**缺点**：缺乏弹性；
  - *（五）比例准备制（典型国家：日本、英国）*
    - **特点与缺点**：规定货币发行准备中现金与其他有价证券所占的比例，但各种准备资产的比例难以确定；
  - *（六）无准备制度（典型国家：中国）*
    - **特点**：不要求持有一定准备资产，由国家以行政法规形式规定最高增加额，坚持信用发行原则，实际上发行保证是国家信用和中央银行信用。`,keywords:["主要货币发行","够严格控制货币","宏观经济","财政发行","超额发行税","独立性","证券","有价证券","最高增加额"]},{id:21,chapterId:4,chapterTitle:"第四章 中央银行负债业务",question:"简述人民币发行的原则及其程序。",points:10,answer:`- 根据课件第四章第二节（p24），人民币的发行原则与程序如下：

  - *（一）人民币发行的三大原则*
    - **集中发行原则**：人民币的印制权和发行权集中于中国人民银行（国务院授权的唯一发行货币机关）；
    - **经济发行原则**：必须根据国民经济需要，不允许财政部门透支、不允许直接购买政府债券、不允许直接向社会公众和企事业单位投放现金，以商品物资为保证；
    - **计划发行原则**：由中国人民银行总行制定发行计划（总限额），报国务院批准后组织实施；
  - *（二）人民币的发行程序*
    - **计划核定与分配**：总行制定发行计划报国务院批准后，与各商业银行总行协商核定各省、自治区和直辖市的货币投放与回笼计划，再由人民银行分行与商业银行分行商定，逐级分配指标；
    - **出入库管理**：中国人民银行设立发行库具体办理现金出入库，发行基金由总库统一管理，下级库只能根据上级库核定的限额和调拨命令办理出库。`,keywords:["人民币的发行原则","印制权和发行权","中国人民银行","国民经济需要","商品物资","国务院批准","发行计划","逐级分配指标","现金出入库","发行基金"]},{id:22,chapterId:5,chapterTitle:"第五章 中央银行资产业务",question:"解释下列概念。",points:10,answer:`- 根据课件第五章（p4、p6、p11、p14、p18、p23），八个核心概念解析如下：

  - *（一）中央银行资产*
    - 中央银行在开展再贴现和贷款业务、证券买卖业务、黄金外汇储备业务等资产业务过程中形成的各项资产（在资产负债表中表现为资产业务，是投放基础货币的重要途径）；
  - *（二）再贴现业务*
    - 商业银行等金融机构在急需资金时，以通过贴现业务所获得的尚未到期的商业票据向中央银行申请转让，借此获得中央银行资金融通的经济行为（对该商业票据作第二次贴现，是一种特别的放款形式）；
  - *（三）再贴现利率*
    - 中央银行办理再贴现业务所采用的利率（因申请再贴现的合法票据期限一般不超过3个月、最长1年内，故是一种短期利率，对货币市场影响重大，有些国家将其作为高于货币市场利率的“惩罚性”利率）；
  - *（四）中央银行贷款*
    - 中央银行采用信用放款或抵押放款形式，对商业银行等金融机构和政府进行的贷款，是中央银行主要资产业务和向社会提供基础货币的重要渠道；
  - *（五）证券买卖业务*
    - 中央银行作为市场参与者的一员，在公开市场进行证券的买卖（主要限定在政府债券、国库券等流动性很高的安全证券，一般在二级市场进行）；
  - *（六）正回购*
    - 中央银行卖出有价证券，并约定在未来特定日期买回有价证券的交易行为（正回购为央行从市场收回流动性，到期则为央行向市场投放流动性）；
  - *（七）逆回购*
    - 中央银行买入有价证券，并约定在未来特定日期卖回有价证券的交易行为（与正回购相反，旨在向市场投放流动性）；
  - *（八）国际储备*
    - 一国持有的可用作国际支付手段的储备资产，主要由黄金、外汇、在国际货币基金组织（IMF）的储备头寸和未动用的特别提款权（SDR）构成，其中最主要的是黄金和外汇。`,keywords:["根据课件第五章","基础货币","外汇储备","商业银行等金","市场利率","再贴现","是中央银行","政府债券、国库券","二级市场","有价证券","流动性","买入有价证券","黄金和外汇","SDR"]},{id:23,chapterId:5,chapterTitle:"第五章 中央银行资产业务",question:"中央银行的再贴现与贷款业务有何意义？与商业银行贷款业务有何区别？",points:10,answer:`- 根据课件第五章第一节（p3-4、p11），中央银行再贴现与贷款业务的意义及与商行贷款的区别如下：

  - *（一）再贴现与贷款业务的重要性（意义）*
    - **履行“最后贷款人”职能的重要手段**：当商业银行因存款被过度运用出现资金周转不灵、兑现困难时，提供必要的资金融通和支持以保证其正常运营；
    - **提供基础货币的重要渠道**：央行提供的基础货币与商行货币创造是“源与流”的关系，央行掌握着创造存款货币的源头；
    - **调控货币供应量的重要工具**：通过提高或降低再贴现利率改变商行获得资金的价格，调控信贷规模、影响社会货币量；
  - *（二）与商业银行贷款业务的区别*
    - **对象不同**：央行贷款仅面向商业银行等金融机构和政府（不对一般企事业单位发放贷款）；商行面向一般企事业单位和个人；
    - **目的不同**：央行不以获利为动机，旨在提供基础货币、保证商行支付能力及履行最后贷款人职能；商行贷款出于获利动机；
    - **货币创造效应不同**：央行贷款提供的是**基础货币**（不能直接派生存款）；商行贷款直接创造**派生存款**；
    - **期限要求不同**：央行资产应保有最大流动性，对商行贷款主要是短期流动性贷款或季节性贷款，不能发放长期贷款。`,keywords:["再贴现","资金周转不灵","最后贷款人","基础货币","源与流","再贴现利率","货币供应量","央行贷款","在提供基础货币","货币创造效应不同","流动性"]},{id:24,chapterId:5,chapterTitle:"第五章 中央银行资产业务",question:"再贴现业务的主要内容是什么？",points:10,answer:`- 根据课件第五章第一节（p5-8），再贴现业务的一般规定包括七项主要内容：

  - *（一）再贴现业务的对象*
    - 很多国家规定只有在中央银行开设账户的商业银行等存款货币银行才能成为再贴现业务的对象；
  - *（二）再贴现票据的规定*
    - 强调必须是以确实的商品交易为基础的真实票据（如美联储规定商业票据不超过90天、农产品票据不超过9个月；英格兰银行规定两家信誉极佳企业签署且国库券距到期日1个月以内；德国规定真实商品交易且三个责任人担保、3个月内到期）；
  - *（三）再贴现业务的申请和审查*
    - 商业银行必须以已办理贴现的未到期合法票据申请再贴现，央行审查票据合理性和申请者资金运营状况，通过后申请者背书并逐笔填制再贴现凭证；
  - *（四）再贴现利率*
    - 属于短期利率（一般不超过3个月，最长1年内），有些国家将其定在高于货币市场利率的水平上作为“惩罚性”利率；
  - *（五）再贴现金额*
    - 实际支付金额=票据面额−再贴现利息（再贴现利息=票据面额×日再贴现率×贴现日数），仅与票据面额和再贴现率有关；
  - *（六）再贴现额度的规定*
    - 不少国家限制商业银行的再贴现金额，并对过多利用该权利的商业银行进行检查；
  - *（七）再贴现的收回*
    - 票据到期后，央行通过票据交换和清算系统向承兑单位或承兑银行收回资金；若资金不足则退给再贴现商业银行按逾期贷款处理。`,keywords:["再贴现","存款货币银行","开设账户","英格兰银行","真实票据","现的未到期合法","市场利率","惩罚性","再贴现利息","再贴现率","再贴现金额","票据交换","逾期贷款"]},{id:25,chapterId:5,chapterTitle:"第五章 中央银行资产业务",question:"中央银行证券买卖业务与贷款业务有何异同？其作用机制如何？",points:10,answer:`- 根据课件第五章第二节（p15-16、p20），证券买卖业务与贷款业务的异同及作用机制如下：

  - *（一）相同之处（p15）*
    - **融资效果相同**：买入证券相当于中央银行的贷款，卖出证券相当于贷款的收回；
    - **对货币供应量的影响相同**：都会通过货币乘数作用引起货币供应量的多倍扩张与收缩；
    - **都是调节和控制货币供应量的工具**：都由央行直接控制，对基础货币、银行储备、货币供应量、利率及信贷活动产生影响；
  - *（二）不同之处（p16）*
    - **资金流动性不同**：证券随时可买卖、无到期问题、可逆向操作，流动性比贷款强；
    - **收益不同**：贷款获取利息收入；证券到期有利息收入，未到期买卖有买卖价差收益；
    - **依据不同**：证券买卖以证券质量为依据；信用贷款以商行信用为依据，抵押贷款兼以商行信用和抵押物质量为依据；
    - **对经济金融环境要求不同**：证券买卖需以较为发达的有价证券市场为前提，要求较高；贷款业务要求较低；
  - *（三）证券买卖业务的作用机制（p20）*
    - 中央银行处于主动地位，具有弹性大、震荡较小和较强可逆转性的特点；
    - 央行购进商行所持债券，在增加自身债券资产的同时增加商行准备金存款（或发行货币），商行据此增加贷款或购买其他债券，引起整个银行体系资产负债的连续变化。`,keywords:["证券","融资效果相同","货币供应量","货币乘数","基础货币","直接控制","逆向操作","流动性","买卖价差","利息收入","证券质量","有价证券市场","有价证券","可逆转性"]},{id:26,chapterId:5,chapterTitle:"第五章 中央银行资产业务",question:"简述中央银行保管和经营黄金外汇储备的目的与意义。",points:10,answer:`- 根据课件第五章第三节（p21-22），中央银行保管和经营黄金外汇储备的目的与意义如下：

  - *（一）保管和经营的目的*
    - 最初是为了应付银行券兑现的需要；
    - 后来逐渐演变成国际支付手段的准备金（在国际收支发生逆差时用来进行债务清偿）和一国对外经济交往实力的象征；
  - *（二）保管和经营的意义*
    - **稳定币值**：在国内商品供应不足时，从国外进口商品或直接向社会出售黄金外汇，回笼货币，平抑物价，保持稳定币值；
    - **稳定汇率**：在浮动汇率制度下，通过买卖黄金外汇使汇率维持在合理水平，稳定本币对外价值；
    - **调节国际收支**：国际收支出现逆差时动用储备补足外汇不足；经常项目顺差、储备充足时可用其清偿外债，减少外国资本流入。`,keywords:["外汇储备","是为了应付银行","国际支付手段的准备金","国际收支","稳定币值","稳定币","浮动汇率制度","汇率制度","逆差","顺差"]},{id:27,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",question:"净额清算系统和全额清算系统各自的优缺点是什么？",points:10,answer:`- 根据课件第六章第二节（p9-11），净额清算系统与全额清算系统的优缺点如下：

  - *（一）净额清算系统*
    - **优点**：将众多参与机构的收付款项集中轧差，可以批量处理收或付；在阶段之末轧差结算，付款人之间互相提供短期信贷，真正需要支付的只是净差额，大大减少了必须支付的绝对量；
    - **缺点**：整个营业日内净债权银行向净债务银行实际上提供了日间信贷，产生了信用风险和流动性风险隐患；需要进行借贷轧差，面临轧差结果被作废的法律风险；
  - *（二）全额清算系统*
    - **优点**：对每笔转账业务一一对应结算，有利于减少跨行清算的信用风险，通过减少跨行结算的信贷规模和流动性风险以及消除交易被作废的可能性，可以限制系统风险；
    - **缺点**：运行全额清算系统将对发起行的清偿能力提出严格要求，系统参与者需要为保持当日流动性付出较大成本。`,keywords:["p9-11","与机构的收付款","日间信贷","流动性","一一对应结算","系统风险","清偿能力"]},{id:28,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",question:"中央银行的支付清算业务包括哪些内容？",points:10,answer:`- 根据课件第六章第二节（p12-15），中央银行支付清算业务主要包括四个方面：

  - *（一）组织票据交换和清算*
    - 票据交换是最基本的行间清算手段之一，通过各银行或清算机构在中央银行开立的账户完成彼此间的债权债务抵消和资金清算；
  - *（二）办理异地跨行清算*
    - 在全国范围内办理异地资金转移，由汇出行当地央行分支机构扣除账户资金，通过清算中心通知汇入行所在地区央行分支机构划入资金，并借此了解情况、实施监督管理；
  - *（三）提供跨国清算服务*
    - 在对外支付结算和跨国支付系统中发挥重要作用，经跨国清算系统核对后在中央银行账户间完成资金划转；
  - *（四）提供证券和金融衍生工具交易清算服务*
    - 鉴于证券交易金额大、直接关系央行公开市场操作效果，很多央行通过大额支付系统直接提供清算服务（如英格兰银行的CGO和CMO、日本银行的BOJ-NET）。`,keywords:["p12-15","票据交换","异地资金转移","跨国支付系统","跨国清算系统","BOJ-NET","公开市场操作"]},{id:29,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",question:"跨国支付清算具有哪些特征？中央银行在跨国支付清算活动中发挥什么作用？",points:10,answer:`- 根据课件第六章第三节（p19-23），跨国支付清算的特征及中央银行的作用如下：

  - *（一）跨国支付清算的五大特征*
    - 具有“**国际性**”特征，效率取决于各国银行业务水平、国际金融合作及跨国支付系统效率与稳定性；
    - **涉及不同国家的货币**，需通过各种货币之间的兑付与转账划拨实现清偿与资金转移；
    - **涉及不同的支付清算安排**；
    - **需要借助跨国支付系统及银行账户**实现跨国行间清算；
    - **中央银行在跨国支付清算活动中具有重要作用**；
  - *（二）中央银行在跨国支付清算中的作用*
    - **直接或间接介入干预**：鉴于对外支付事关国家利益与金融安全，作为政府的银行施加重要影响；
    - **提供最终清算与净额结算服务**：如CHIPS每个营业日的收付差额须通过美联储的Fedwire实现最终清算；
    - **推出或主导重要跨国支付系统**：如欧洲中央银行推出TARGET实时全额清算系统，德国黑森州央行推出EAF系统；
    - **参与管理并防范风险**：如英格兰银行作为CHAPS结算成员直接参与运行、批准其他成员资格、提供管理清算账户、支持提供实时全额清算以规避多边净额风险、引导建立和修订操作规程。`,keywords:["特征及中央银行","国际金融合作","跨国支付系统","不同国家的货币","清算安排","支付系统及银行","重要作","国家利益与金融安全","金融安全","美联储","如欧洲中央银行","英格兰银行"]},{id:30,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",question:"中央银行是如何对支付系统风险进行防范和控制的？",points:10,answer:`- 根据课件第六章第四节（p24-27），中央银行针对信用、流动性、系统、法律、操作、道德六类风险，采取六项防范与控制措施：

  - *（一）对支付系统进行缜密设计*
    - 这是防范和化解支付系统风险的基础，国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“核心原则”；
  - *（二）对支付系统进行必要的监测*
    - 识别可能风险并及时应对，参与者可提取一定准备金缓冲冲击，并采取事后化解的应急措施；
  - *（三）对大额支付系统透支进行限制*
    - 采取限制性措施，防止透支者未能在规定期间内补足透支头寸导致中央银行蒙受信用风险损失；
  - *（四）对私营大额支付系统进行监控*
    - 要求所有利用央行清算服务的私营大额支付系统必须建立风险防控机制，保证各清算参加者的净额头寸能在规定时间内完成清算；
  - *（五）引入RTGS系统*
    - 消除净额结算所产生的结算时隔（清算和结算分离、结算滞后于清算），实时全额结算成为国际社会广泛采用的风控手段；
  - *（六）对小额零售支付系统进行监控*
    - 小额支付系统业务量巨大、种类多、覆盖范围广泛，其运行风险对银行信誉及社会稳定构成威胁，需加强监控。`,keywords:["流动性","支付系统","核心原则","识别可能风险","透支头寸","风险防控机制","实时全额结算","其运行风险"]},{id:31,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务",question:"改革开放后我国的支付清算体系发生了哪些变革？中国现代化支付系统是如何运行的？",points:10,answer:`- 根据课件第六章第五节（p28-31），改革开放后我国支付清算体系的变革与CNAPS运行如下：

  - *（一）改革开放后支付清算体系的五大变革（p28-29）*
    - 中国人民银行在国家支付清算体系中法律地位的确立（由中央银行制度安排以及法律赋予的职责权力决定）；
    - 支付清算制度体系的变革；
    - 联行清算体系的变革（打破配合计划经济的三级联行清算体系）；
    - 支付清算管理体制的建立；
    - 支付清算体系的现代化建设；
  - *（二）中国现代化支付系统（CNAPS）的运行（p29-31）*
    - **大额实时支付系统**：逐笔发送支付指令，全额实时清算资金；
    - **小额批量支付系统**：2006年6月完成全国推广，批量发送支付指令，轧差净额清算资金，7×24小时不间断运行，实行净借记限额管理；
    - **中央银行会计核算数据集中系统**：2014年6月30日完成全国营业网点推广，是人民银行进行会计核算业务处理的应用系统；
    - **境内外币支付系统**：为国内商业银行提供外币清算服务，已开通港元、英镑、欧元、日元、加拿大元、澳大利亚元、瑞士法郎和美元8种货币支付业务；
    - **网上支付跨行清算系统**：主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务，实现跨行账户信息查询及资金归并。`,keywords:["我国支付清算体系","中国人民银行","支付清算制度体系","联行清算体系","支付清算管理体制","支付清算体系","全额实时清算","支付系统","净借记限额管理","会计核算业务处理","会计核算","8种货币","5万元及以下"]},{id:32,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",question:"简述货币政策的含义、内容与特点。",points:10,answer:`- 根据第七章第一节课件内容，货币政策的含义、内容与特点如下：

  - *（一）货币政策的含义*
    - 中央银行为实现一定的经济目标，运用各种工具调节和控制**货币供给量**，进而影响宏观经济的方针和措施的总和。
  - *（二）货币政策的内容*
    - 包括政策的**最终目标**、实现目标的**政策工具**、监督控制目标实现的**中介指标**、**货币政策的传导机制**以及**政策效果**等；
    - 实施流程为：**政策工具 → 中介指标 → 最终目标**，各环节相互影响、相互制约，共同形成有机整体。
  - *（三）货币政策的特点（特征）*
    - **宏观经济政策**：作用对象是货币供应量、利率、汇率、金融市场有关指标，不直接涉及微观经济主体活动；
    - **需求管理政策，并间接影响总供给**：改变市场货币供应量影响消费、投资、进出口等总需求行为，最终通过改变总需求影响总供给；
    - **间接调控政策**：通过市场进行调节，效果取决于市场主体反应程度，而非采取行政控制手段直接限制；
    - **目标具有长期性**：充分就业、货币稳定、经济增长和国际收支平衡都是长期目标，抵御短期冲击使短期运行趋向长期目标。`,keywords:["特点如下","货币供给量","宏观经济","中介指标","传导机制","政策工具","最终目标","宏观经济政策","微观经济主体","消费、投资","货币供应量","市场主体","间接调控","国际收支平衡"]},{id:33,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",question:"货币政策的主要功能有哪些？",points:10,answer:`- 货币政策是现代市场经济国家重要的宏观经济调控手段之一，其主要功能（目标）体现在以下五个方面：

  - *（一）促进社会总需求与总供给的均衡，保持稳定币值*
    - 通过调节和控制货币供给量，避免通货膨胀或通货紧缩，保持物价稳定和币值稳定（货币政策的首要目标）；
  - *（二）促进经济稳定增长*
    - 利用货币运行为经济运行服务的原理，使流通中货币量与商品流通相一致，保持宏观经济长期稳定持续增长；
  - *（三）促进充分就业，实现社会稳定*
    - 在经济衰退、失业严重时实行扩张性货币政策，扩大社会总需求，把失业降低到自然失业率水平；
  - *（四）促进国际收支平衡，保持汇率相对稳定*
    - 综合运用利率政策、汇率政策及外汇管制等措施，减少国际收支巨额逆差或顺差，保持汇率相对稳定；
  - *（五）保持金融稳定，防范金融危机*
    - 防范因物价剧烈波动或国际收支严重失衡引发的货币与金融危机，维护金融体系稳健运行。`,keywords:["宏观经济","货币供给量","通货紧缩","长期稳定","货币量","扩张性货币政策","自然失业率","利率政策","国际收支","货币与金融危机","剧烈波动"]},{id:34,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",question:"简述货币政策对经济运行的影响。",points:10,answer:`- 货币政策在国家宏观经济政策中居于十分重要的地位，对经济运行的影响主要体现在以下方面：

  - *（一）引起总需求与总供给及价格水平的变化*
    - 货币政策通过利率、再贴现率、公开市场业务、信贷规模等手段改变市场货币供应量，影响消费、投资、进出口等经济行为，进而使社会总需求水平发生变化，并通过改变总需求间接影响总供给和一般价格水平；
  - *（二）调节经济增长速度和经济结构*
    - 扩张型货币政策增加货币供给量和社会需求，刺激经济增长；紧缩型货币政策回笼货币、减少社会总需求，抑制经济过快增长；同时通过信贷政策和利率结构调节，引导资金分配与合理流动，提高资金使用效率；
  - *（三）影响国际资本流动与国际收支平衡*
    - 在资本项目自由兑换条件下，利率和汇率调整会直接影响国际资本流入流出及进出口贸易差额，进而影响国际收支平衡与汇率稳定；
  - *（四）抑制经济剧烈波动*
    - 适当的逆经济风向货币政策能够抵御短期冲击对经济的影响，抑制经济过度膨胀或衰退，促使宏观经济长期稳定持续增长。`,keywords:["宏观经济政策","宏观经济","消费、投资","货币供应量","扩张型货币政策","紧缩型货币政策","国际收支平衡","国际收支","逆经济风向","长期稳定"]},{id:35,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",question:"货币政策目标的基本内涵是什么？它们之间的矛盾体现在哪些方面？",points:10,answer:`- 货币政策四大最终目标各有明确内涵，但在实际运行中既存在统一性又存在矛盾性：

  - *（一）四大最终目标的基本内涵*
    - **稳定币值**：用货币衡量的商品价格在一定时期内不发生急剧波动，抑制通货膨胀并避免通货紧缩；
    - **经济增长**：在有效利用资源的基础上保持宏观经济长期稳定持续的增长，避免低于或高于潜在水平的增长；
    - **充分就业**：任何愿意工作并有能力工作的人都能找到有报酬的工作，将失业降低到自然失业率水平；
    - **国际收支平衡**：避免长期巨额逆差或顺差，保持国际收支平衡与汇率相对稳定。
  - *（二）目标之间的矛盾冲突*
    - **充分就业与经济增长的矛盾**：虽然奥肯定律表明二者通常正相关，但若经济增长采取资本密集型、资源密集型或知识密集型模式，则与充分就业存在一定矛盾；
    - **稳定币值与经济增长、充分就业的矛盾**：短期内菲利普斯曲线表明通胀与增长、就业正相关，但长期内过高通胀破坏经济秩序，迫使经济调整，反而制约经济增长与就业增加；
    - **稳定币值与国际收支平衡的矛盾**：当**国际收支逆差与通货紧缩并存**时，采取扩张型货币政策促进经济复苏和物价回升，会进一步扩大进口并刺激资本流出，导致国际收支逆差更加严重。`,keywords:["最终目标","抑制通货膨胀","稳定币值","宏观经济","潜在水平","自然失业率","充分就业","国际收支平衡","国际收支","奥肯定律","菲利普斯曲线","扩张型货币政策","国际收支逆差"]},{id:36,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择",question:"在理论界，货币政策目标有“双目标”和“多目标”的争论，问题的焦点在什么地方？你赞成哪种观点？",points:10,answer:`- 由于四大货币政策目标之间客观上难以多项兼顾，经济理论界对单目标、双目标和多目标一直存在争论：

  - *（一）争论的焦点问题*
    - 由于各宏观经济目标之间既有统一性又有矛盾性，货币政策不可能同时兼顾四个目标，争论的焦点在于货币政策应当以**单一目标**为己任、兼顾**稳定币值与经济增长双重目标**，还是**总体兼顾多个目标而在不同时期有所侧重**。
  - *（二）“双目标论”与“多目标论”的核心观点*
    - **双目标论**：认为货币政策应当同时兼顾稳定币值和经济增长的双重目标。经济增长是稳定币值的物质基础，币值稳定又有利于经济长期稳定增长，二者互相制约、互相影响，偏重单一目标不利于国民经济稳定协调发展；
    - **多目标论**：认为货币政策作为宏观经济间接调控的主要手段之一，对各宏观经济目标都有十分重要的影响，不能只以一两个目标为政策目标，而应在总体上兼顾各个目标，在不同时期以不同目标作为相对重点。
  - *（三）观点与分析*
    - 赞成**以稳定币值为首要目标，同时兼顾其他目标并根据宏观经济环境动态调整相对重点**（即我国当前确立的“**保持货币稳定币值，并以此促进经济增长**”目标）；
    - 经济高涨期以稳定物价和币值为首要目标，经济萧条期以稳定增长和充分就业为相对重点，国际收支失衡和汇率剧烈波动期则以保持国际收支平衡和汇率稳定为相对重点。`,keywords:["货币政策目标","宏观经济目标","单一目标","协调发展","双目标论","多目标论","相对重点","稳定币值","稳定币","国际收支平衡","充分就业"]},{id:37,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",question:"解释下列名词。",points:10,answer:`- 根据第八章课件内容，十二项货币政策工具核心名词解释如下：

  - *（一）一般性货币政策工具*
    - 对货币供给总量或信用总量进行调节和控制的政策工具，针对全社会信用总量进行调节，主要包括法定存款准备金政策、再贴现政策和公开市场业务；
  - *（二）选择性货币政策工具*
    - 也称为结构性货币政策工具，指中央银行针对某些特殊的经济领域或特殊用途的信贷而采用的信用调节工具，特点是在调节中有特定的资金流向和用途；
  - *（三）法定存款准备金政策*
    - 中央银行对商业银行等存款性金融机构的存款规定存款准备金率，强制要求按规定比率上缴存款准备金，通过调整法定存款准备金率以增加或减少超额准备，收缩或扩张信用的政策；
  - *（四）再贴现政策*
    - 中央银行通过提高或降低再贴现率的办法，影响商业银行等存款货币机构从央行获得的再贴现贷款和超额准备，以调节货币供给量的政策措施（包括再贴现率调整和规定申请资格）；
  - *（五）公开市场业务*
    - 中央银行在金融市场买进或卖出有价证券，以改变商业银行等存款性金融机构的准备金，进而影响货币供给量和利率、实现货币政策目标的政策措施；
  - *（六）消费者信用控制*
    - 中央银行对不动产以外的各种耐用消费品的分期付款或贷款的管理措施（规定首付最低限额、最长期限、可购买商品种类等），目的在于影响消费者对耐用消费品有支付能力的需求；
  - *（七）证券市场信用控制*
    - 中央银行对有价证券的交易规定应支付的保证金限额，目的在于限制用借款购买有价证券的比重，抑制过度投机、稳定证券市场价格并调节信贷供给结构；
  - *（八）不动产信用控制*
    - 中央银行对商业银行等金融机构向客户提供不动产抵押贷款的管理措施，主要是规定贷款最高限额、最长期限和第一次付现的最低金额等，以限制房地产投机、抑制房地产泡沫；
  - *（九）信用配额*
    - 又称为信贷分配，是指中央银行根据金融市场状况及客观经济需要，分别对各个商业银行的信用规模加以分配，限制其最高数量；
  - *（十）流动性比率管理*
    - 中央银行规定商业银行的流动性比率（**流动资产对总资产的比重**），迫使商业银行收缩长期放款、扩大短期放款和增加易变现资产，以限制信用扩张并降低经营风险；
  - *（十一）道义劝告*
    - 中央银行利用其声望和地位，对商业银行和其他金融机构经常发出通告、指示或与各金融机构负责人举行面谈，交流信息、解释政策意图，使其自动采取相应措施贯彻央行政策；
  - *（十二）窗口指导*
    - 中央银行根据产业行情、物价趋势和金融市场动向，规定商业银行的贷款重点投向和贷款变动数量等的间接信用控制措施。`,keywords:["货币政策工具","政策工具","法定存款准备金","社会信用总量","称为结构性货币","法定存款准备金率","存款准备金率","或降低再贴现率","再贴现贷款","货币政策目标","货币供给量","耐用消费品","有价证券","证券"]},{id:38,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",question:"简述法定存款准备金政策、再贴现政策、公开市场业务的作用机制。",points:10,answer:`- 三大一般性货币政策工具通过不同机制调节银行准备金、利率及货币供给量：

  - *（一）法定存款准备金政策的作用机制*
    - **保证流动性与集中信贷资金**：强制将准备金存入央行，保障支付清算并调剂同业短期资金余缺；
    - **调节货币供给总量**：为派生存款规定量的界限，调整法定准备金率直接影响**货币乘数**与商业银行准备金结构（提高时法定准备增加、超额准备减少，甚至迫使收回已贷出款项或投资），产生强有力的紧缩或扩张作用。
  - *（二）再贴现政策的作用机制*
    - **准备金与资金成本渠道**：提高（降低）再贴现率使商业银行借款成本上升（下降），减少（增加）贴现贷款与准备金，进而收缩（扩大）对客户的贷款与投资，改变市场货币供应量与市场利率；
    - **结构调整、告示与最后贷款人机制**：通过规定票据资格和差别再贴现率调整信贷结构；通过再贴现率升降产生政策方向和力度的告示作用，引导公众预期；在银行危机时迅速提供准备金防止金融恐慌。
  - *（三）公开市场业务的作用机制*
    - **调控准备金与货币供给**：在金融市场买卖有价证券，直接增加或减少商业银行超额储备水平，影响贷款规模和货币供给总量；
    - **影响利率水平和结构**：买进（卖出）证券通过改变证券供求价格及货币供给两个渠道影响利率水平，买卖不同期限证券直接改变期限供求从而改变利率结构，并可与再贴现政策配合提高调控效果。`,keywords:["货币政策工具","货币供给量","信贷资金","流动性","货币供给总量","准备金结构","货币供应量","再贴现率","最后贷款人","信贷结构","有价证券","超额储备","利率结构"]},{id:39,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",question:"一般性货币政策工具与选择性货币政策工具的基本区别是什么？",points:10,answer:`- 根据第八章第一节与第二节课件，一般性货币政策工具与选择性货币政策工具的基本区别如下：

  - *（一）调节对象不同*
    - **一般性货币政策工具**是对**货币供给总量或信用总量**进行调节和控制，针对全社会信用总量进行调节；
    - **选择性货币政策工具**（又称结构性货币政策工具）是针对**某些特殊的经济领域或特殊用途的信贷**而采用的信用调节工具。
  - *（二）资金流向约束不同*
    - **一般性货币政策工具**作用于全社会信用总量，不对特定行业或用途的资金流向作专门限制；
    - **选择性货币政策工具**的根本特点在于**在调节中有特定的资金流向和用途**（如耐用消费品信贷、证券保证金、不动产抵押贷款、重点产业优惠利率等）。
  - *（三）影响范围不同*
    - **一般性货币政策工具**的运用会对**整个宏观经济运行**发生影响；
    - **选择性货币政策工具**主要用于调节特定领域信用膨胀或萎缩，配合产业结构和产品结构调整升级，是对一般性总量调节工具的补充。`,keywords:["货币政策工具","政策工具","社会信用总量","货币供给总量","选择性货币政策工具","一般性货币政策工具","不动产抵押贷款","耐用消费品","宏观经济","结构调整"]},{id:40,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具",question:"请比较中央银行三大基本政策工具各自的优缺点及其使用条件。",points:10,answer:`- 中央银行三大基本（一般性）货币政策工具各有其特点、优缺点及适用条件：

  - *（一）法定存款准备金政策*
    - **优点**：对所有存款货币银行的影响是平等的，对货币供给量具有极强的影响力，力度大、速度快、效果明显；
    - **缺点**：对经济影响太大，轻微变动通过货币乘数放大可能带来经济强烈振荡；提高准备金率可能使超额准备金率较低的银行立即陷入流动性困境；
    - **使用条件**：因其对经济有极大冲击力，中央银行使用时一般都比较慎重，不宜作为日常频繁微调工具。
  - *（二）再贴现政策*
    - **优点**：央行可利用其履行最后贷款人职责，体现政策意图，既可调节货币总量又可调节信贷结构；
    - **缺点**：告示效应是相对的，有时不能准确反映政策意向；市场利率与再贴现率利差随市场利率波动，可能引发非政策意图的货币供给量波动；控制货币供给量的主动权不完全在央行（不能强迫商业银行借款），再贴现率不能经常反复变动，缺乏灵活性；
    - **使用条件**：需要商业银行对央行再贴现借款有一定依赖性，且常需与公开市场业务配合使用。
  - *（三）公开市场业务*
    - **优点**：主动权完全在央行；可灵活精巧操作，不会对经济产生猛烈冲击；可进行经常性、连续性操作，伸缩性强；具有极强可逆转性；可向交易商发出指令迅速执行；
    - **缺点与使用条件**：操作较为细微、技术性较强，政策意图的告示作用较弱；**需要以较为发达的有价证券市场为前提**，若市场发育程度不够或交易工具太少将制约其效果。`,keywords:["货币政策工具","政策工具","存款货币银行","货币供给量","流动性困境","超额准备金","日常频繁微调工具","最后贷款人","信贷结构","再贴现率","利率波动","公开市场","可逆转性","灵活精巧"]},{id:41,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",question:"货币政策传导机制理论有哪些？",points:10,answer:`- 根据第九章第一节课件，按时序和学派划分，货币政策传导机制理论主要有以下四类：

  - *（一）凯恩斯的货币政策传导机制理论*
    - 传导过程为 **MS → R → I → E → Y**，即货币供应 MS 通过流动性偏好影响利率 R，利率 R 通过投资利率弹性影响投资 I，再引起总支出 E 和总产出 Y 变化；现实中受“凯恩斯陷阱”和投资利率弹性极低两个因素制约。
  - *（二）后凯恩斯学派的货币政策传导机制理论*
    - **托宾的 q 理论**：定义 $q = 企业厂商的真实资本的市场价值 / 资本的重置成本$，传导机制为 **MS↑ → Ps↑ → q↑ → I↑ → Y↑**；
    - **米什金的传导机制**：传导机制为 **MS↑ → Ps↑ → V↑ → D↓ → CA↑ → Y↑**（股价上升使金融资产价值 V 上升、财务困难可能性 D 下降，从而增加耐用消费品支出 CA 和国民收入 Y）。
  - *（三）货币学派的货币政策传导机制理论*
    - 以弗里德曼为首，认为持久性收入决定稳定的货币需求，对利率不敏感，传导机制为 **MS → A → C → I → P → Y**（多余货币直接用于增加消费或实物与金融资产支出，拉动名义收入）；认为货币政策短期内有效，长期内只影响物价水平。
  - *（四）信用渠道论（信贷观）*
    - 提出信息不对称、银行信贷配给等引起的“外部融资溢价”影响投资消费行为，伯南克和格特勒（1995年）总结为两条途径：**银行贷款渠道**（改变商业银行准备金头寸影响贷款供给）和**企业、居民资产负债表渠道**（改变企业净资产水平及居民流动性效应）。`,keywords:["传导机制","投资利率弹性","凯恩斯陷阱","重置成本","MS","耐用消费品","米什金","持久性收入","名义收入","资产负债表渠道","外部融资溢价"]},{id:42,chapterId:9,chapterTitle:"第九章 货币政策传导机制与有效性",question:"简述货币政策传导机制的主要影响因素。",points:10,answer:`- 根据第九章第二节（及第三节）课件，货币政策传导机制的主要影响因素包括：

  - *（一）体制因素*
    - **对金融机构的影响**：市场经济体制下金融机构追求利润最大化、有自主经营权和预算约束，能有效配合央行意图；计划经济体制下作为政府出纳则反应迟钝；
    - **对企业行为的影响**：市场经济下企业具有动力机制、决策机制和预算硬约束；计划体制下行政依附型企业缺乏动力与自主权，预算软约束导致盲目投资；
    - **对居民行为的影响**：市场经济下居民具有自主决策权，能对利率、汇率、税率调整做出反应，且家庭预算约束始终发挥作用。
  - *（二）市场因素*
    - **市场的发育程度**：完整统一的市场给信号传导提供条件，残缺分割的市场将小企业和个人排斥在外；
    - **市场体系的完善程度**：完善的金融市场（股票、债券、票据、外汇、同业拆借市场等）能增强公开市场影响力并增加传导渠道；
    - **市场操作的规范程度**：公平竞争与规范操作是价格机制运行前提，不规范会引起价格混乱与金融泡沫危机。
  - *（三）信息因素*
    - 包括**中央银行与公众之间的信息不对称**（影响政策可信度和影响力）、**银行与借款人之间信息不对称**以及**信息披露的准确度**（影响信贷观点传导与直接融资决策）。
  - *（四）货币政策的作用时滞（相关制约因素）*
    - 包括**内部时滞**（认识时滞、决策时滞）和**外部时滞**（操作时滞、市场时滞），过长时滞可能导致政策在最不需要的时候发挥作用。`,keywords:["传导机制","利润最大化","自主经营权","对企业行为的影响","家庭预算","预算约束","市场的发育程度","公开市场","同业","公平竞争","泡沫","信息不对称","内部时滞","外部时滞"]},{id:43,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",question:"简述金融危机的含义、分类、形成和特点。",points:10,answer:`- 根据第十章第一节课件内容，金融危机的含义、分类、形成和特点如下：

  - *（一）金融危机的含义*
    - 金融危机又称金融风暴，可理解为金融系统中信用基础被破坏而导致的整个金融体系动荡、混乱。
  - *（二）国际货币基金组织（IMF）四大分类*
    - **货币危机（国际收支危机）**：某种货币汇率受到投机性袭击时，该货币出现持续贬值，或迫使当局扩大外汇储备而大幅度提高利率的现象；
    - **银行业危机**：银行由于实际或潜在的运行障碍或违约而不能按期偿付债务，或迫使政府出面提供大规模援助以避免违约，一家银行危机可能波及整个银行系统；
    - **外国债务危机（外债危机）**：一国支付系统严重混乱导致不能按期偿付对外债务，被迫宣布暂缓偿债并要求IMF、世界银行等给予再融通；
    - **系统性金融危机（全面金融危机）**：主要金融领域都出现严重混乱，如货币危机、银行业危机、外债危机同时或相继发生。
  - *（三）金融危机的形成（金融脆弱性理论）*
    - 经济繁荣期贷款人放贷条件越来越宽松、借款人多借款，抵补性借款人比重减小而投机性与高风险借款人比重增大，股票和房地产价格持续上涨；随后经济下滑增速变慢，阻碍信贷资金流入生产部门的事件引起大规模借贷违约、企业和金融机构破产、失业，金融资产价格泡沫迅速破灭，从而形成金融危机。
  - *（四）金融危机的三大特点*
    - **综合性**：绝不是某个金融行业或要素独立的剧烈波动，往往是货币汇率危机、债务危机、银行业危机、保险业危机、股市危机等同时爆发；
    - **传染性**：主要体现在金融危机具有明显的多米诺骨牌效应；
    - **破坏性**：对金融体系与经济社会正常运行造成严重破坏。`,keywords:["特点如下","信用基础","投机性袭击","国际收支","按期偿付债务","银行业危机","外国债务危机","支付系统","系统性金融危机","货币危机","信贷资金","泡沫","剧烈波动","多米诺骨牌效应"]},{id:44,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",question:"如何防范、化解和治理金融危机？",points:10,answer:`- 根据第十章第三节课件内容，金融危机的防范、化解和治理包括以下措施：

  - *（一）金融危机的防范*
    - **建立金融危机预警模型**：捕捉部分或全部金融指标在短期内的超周期变化信号，增强敏感性并构建具体应对方案以减缓破坏程度；
    - **促进金融协调与金融合作**：以各国央行有效协调和国际通行金融监管框架为基础，加强各国间协调合作，集中有效监管金融风险；
    - **选择合适的汇率制度，维持适当的外汇储备**：结合国情与经济现状选择合适汇率制度并保持适当外汇储备；
    - **加强金融监管与政策引导**：落实IMF应对资本流入的八类对策（更有弹性的浮动汇率、财政紧缩、公开市场中和性操作、限制货币增长、限制资本流入、经常账户自由化、资本账户有选择自由化、加强国内金融体系）。
  - *（二）金融危机的化解*
    - **稳定金融市场局势，维护存款人信心（首要举措）**：动用财政资源稳定股市、动用外汇储备干预汇市；动用财政资金为银行提供储蓄和外债业务全面担保并修改监管法律；寻求IMF、世界银行及他国央行帮助；
    - **向金融机构注资，促进金融业复苏**：通过非股权性救助、股权性注资和购买“有毒资产”向金融机构注资，并可通过设立专项基金、专项资管计划等市场化方式化解存量风险。
  - *（三）金融危机的治理*
    - **重组金融机构，优化金融系统**：对相关金融机构进行整顿、接管或重组，优化金融系统并改革金融制度；
    - **重视实体经济发展，加大政策扶持力度**：及时采取货币政策干预经济、刺激实体经济，如实施量化宽松货币政策增加货币供给量、降低市场利率、增强货币流动性。`,keywords:["治理包括","超周期变化","金融协调","外汇储备","汇率制度","公开市场","维护存款人信心","全面担保","专项基金","有毒资产","优化金融系统","重组金融机构","货币供给量","实体经济"]},{id:45,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",question:"如何正确理解金融稳定含义及其特征和目标？",points:10,answer:`- 根据第十章第四节课件内容，对金融稳定的含义、特征和目标的理解如下：

  - *（一）金融稳定的含义*
    - **从金融稳定角度**：指金融机构、金融市场和金融基础设施运行状态良好，能够与经济、社会保持协调发展，并在面临各种冲击时都不会降低运行效率的一种状态；
    - **从金融不稳定角度**：指金融系统各个组成部分及其决定因素能够良好、高效运作，并能抵御金融系统内部和外部冲击、促进经济良好发展的一种动态过程；
    - **中国人民银行定义**：2005年《中国金融稳定报告》将金融稳定定义为“金融体系能够有效发挥其关键功能的状态”。
  - *（二）金融稳定的三大特征*
    - **综合性**：需综合采取货币政策、财政政策、金融监管政策等不同措施，涵盖政府、各类金融机构、金融需求主体、金融制度环境等要素，单一措施无法实现稳定；
    - **全局性**：金融稳定是经济稳定的前提，央行应立足整个金融体系，既密切关注国内金融市场、银行业、证券业及保险业动态，又实时监测防范国际金融市场波动的影响；
    - **动态性**：金融稳定并非固化，会随着社会经济发展不断变化，金融系统实时处于动态运行之中。
  - *（三）金融稳定的两大目标*
    - **第一**：保障金融市场和银行业、证券业、保险业等金融机构的稳定运行，切实防范和化解系统性金融风险；
    - **第二**：保障金融安全，优化金融结构体系，提高金融资源配置效率，实现金融业长期、稳健发展。`,keywords:["理解如下","协调发展","从金融不稳定角度","中国金融稳定报告","中国人民银行","金融监管政策","国际金融市场","应立足整个金","金融稳定并非固化","系统性金融风险","证券业","资源配置效率","金融结构体系"]},{id:46,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",question:"如何理解金融安全？",points:10,answer:`- 根据第十章第五节课件内容，对金融安全的理解主要包括以下方面：

  - *（一）金融安全的定义*
    - 金融安全（financial security）指货币资金融通安全和整个金融体系实现安全运行的一种状态。
  - *（二）金融安全的战略层次关系*
    - **金融稳定是金融安全的基础**，**金融安全是经济安全的核心**，**经济安全是国家安全的必要组成**。
  - *（三）金融安全的国际评估机制（FSAP与FSIs）*
    - **金融部门评估规划（FSAP）**：产生于亚洲金融危机后，由国际货币基金组织和世界银行于1999年5月联合推出，通过宏观层次、微观层次和监管层次来衡量一个经济体的金融体系是否稳定；
    - **金融稳健指标（FSIs）与压力测试**：宏观层次主要包括FSIs评估和压力测试，其中FSIs包含监管资本/风险加权资产、一级资本/风险加权资产、不良贷款/全部贷款总额、不良贷款净准备/资本等14项核心指标以及26项鼓励指标。`,keywords:["金融安全","货币资金","经济安全","FSAP","14项核心指标","26项鼓励指标"]},{id:47,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全",question:"简述维护金融稳定的框架和具体措施。",points:10,answer:`- 根据第十章第四节课件内容，维护金融稳定的框架和具体措施如下：

  - *（一）维护金融稳定的框架（图10-1）*
    - 中国人民银行通过设立**金融稳定局**切实维护金融稳定，其框架分为三个递进环节：
    - **监测与分析**：全面监测宏观经济运行、金融市场运行、银行业运行、证券业运行、保险业运行、金融基础设施与金融生态环境；
    - **评估和预测**：结合**宏观经济指标**与**金融机构内部指标**进行风险评估和预测；
    - **采取对应措施实现金融稳定**：根据评估预测结果，实施**预防、救助、处置**与**维持、优化、保障**，最终实现金融稳定。
  - *（二）维护金融稳定的具体措施（三方联动）*
    - **金融政策**：包括政治保障、货币政策及财政政策；政治保障是维护金融稳定的基础，货币政策和财政政策是维护金融稳定的有效政策工具；
    - **金融工具**：包括利率调控、汇率调控、资本账户管理、流动性管理等，旨在为金融稳定创造良好的金融运行环境；
    - **金融制度**：包括支付体系、信用体系、金融法治体系、投资者保护制度等，旨在为金融稳定创造良好的金融生态环境。`,keywords:["维护金","中国人民银行","宏观经济","证券业","评估和预测","预防","包括政治保障","政策工具","包括利率调控","流动性","包括支付体系"]},{id:48,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"简述金融监管目标的内容。",points:10,answer:`- 根据第十一章第二节课件内容，金融监管目标分为总体目标和具体目标：

  - *（一）金融监管的三层总体目标*
    - **第一层**：保证金融机构的正常经营、保护消费者（包括存款人）的利益和金融体系的稳定；
    - **第二层**：创造公平竞争的环境，鼓励金融业在竞争的基础上提高服务的效率；
    - **第三层**：确保金融机构的经营活动符合市场经济条件下真正的市场主体的行为规范，从而能够使中央银行的货币政策传导途径畅通，充分发挥中央银行的调控作用。
  - *（二）金融监管具体目标的四点共性*
    - 各国对金融监管具体目标的表述虽有不同，但均具有四点共性：防范金融风险，确保金融稳定；保护金融消费者利益；提升金融体系效率；规范金融机构行为，促进公平竞争。`,keywords:["金融监管目标分","存款人","公平竞争","金融业","市场主体","金融消费者"]},{id:49,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"金融监管的原则有哪些？",points:10,answer:`- 根据第十一章第二节课件内容，金融监管的基本原则包括以下六项：

  - *（一）监管主体的独立性原则*
    - 监管机构在明确的监管责任和目标下享有操作上的自主权和充分的资源，并需创造稳健且可持续的宏观经济政策、完善的公共金融基础设施、有效的市场约束、适度的系统性保护机制等先决条件；
  - *（二）适度竞争的原则*
    - 金融监管应该促进市场机制作用的发挥，监管当局应该将创造适度的竞争当作工作的重心；
  - *（三）依法监管的原则*
    - 一是金融机构的监管活动必须依法进行，以保证监管的权威性、公正性、严肃性、一贯性；二是所有被监管的金融机构必须接受监管机构的监督与管理，概莫能外；
  - *（四）自我约束的原则*
    - 金融监管必须遵循自我约束原则；
  - *（五）安全、稳健与促进创新相结合的原则*
    - 安全与稳健是金融监管追求的主流和金融业可持续发展的基础，金融创新可以为金融业带来活力和更多盈利机会；
  - *（六）提高监管效率的原则*
    - 监管应以最低的成本达到监管的目的。`,keywords:["融监管的基本原则","宏观经济政策","宏观经济","应该促进市场机制","一是金","遵循自我约束原则","安全与稳健","金融业","最低的成本"]},{id:50,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"金融监管的必要性及主要内容是什么？",points:10,answer:`- 根据第十一章第一、三节课件内容，金融监管的必要性及主要内容如下：

  - *（一）金融监管的四大必要性*
    - **金融在现代经济的核心地位**：金融是基本战略资源和调控宏观经济的重要杠杆，是国民经济资金枢纽和神经中枢（晴雨表），金融安全是国家经济安全的核心；
    - **金融业的行业特殊性**：金融业风险较大，除一般行业共有的信用、经营、市场、管理风险外，还有特有的利率风险、汇率风险、国际游资风险；
    - **金融业自身发展的需要**：维护金融秩序、保护公平竞争、提高金融效率；
    - **金融创新形势下风险管理的必要手段**：新形势下各国经济调整与剧变对金融监管提出了更高要求。
  - *（二）金融监管的三大主要内容*
    - **市场准入的监管（事前监督）**：审查申请人的财产基础、素质和经历、新机构开设后的盈利前景及对当地金融秩序的影响；
    - **市场运作过程的监管（事中监管）**：包括资本充足性（1988年《巴塞尔协议》规定资本与加权风险资产比率高于8%、核心资本不低于4%、规定风险权重与表外业务换算系数，1996年公布《资本协议市场风险补充规定》）、价格、流动性、资产和负债风险管理、外汇风险管理、内部管理；
    - **市场退出的监管**：支付危机是导致金融机构倒闭的最直接原因，发生支付危机时首先分析支付危机性质、经营存续可能性及倒闭外部效应，再决定是否通过最后贷款人职能援助，倒闭仅是最后选择之一。`,keywords:["根据第十一章第一","宏观经济","战略资源","利率风险","汇率风险","公平竞争","金融秩序","创新形势下风险","财产基础","资本充足性","流动性","最后贷款人","支付危机"]},{id:51,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"简述金融监管的几种理论的内容。",points:10,answer:`- 根据第十一章第一节课件内容，金融监管的一般理论分为必要性理论与适度性理论两大类：

  - *（一）金融监管的必要性理论*
    - **金融体系的“准公共产品”特性与“搭便车”理论**：金融产品和服务具有公共产品特性，搭便车行为日渐兴盛时投资者决策质量极易受影响，酿成潜在风险；
    - **金融业财务杠杆理论**：银行业财务杠杆（资产与资本之比）很高，使投资者（股东）和经营者承担的风险与获取的收益不对称；
    - **金融脆弱性理论**：认为金融体系具有内在不稳定和脆弱的特征，这是金融监管被依赖的原因；
    - **风险传播的“骨牌效应”理论**：金融机构出现问题具有较强传染性，为控制风险传播和损失，监管成为必然选择；
    - **金融体系效率与稳定的悖论理论**：效率源于优胜劣汰的充分竞争，但淘汰带来的支付困难易引发恐慌；规模经济带来垄断稳定却降低效率，需合理调节平衡。
  - *（二）避免监管过度的金融监管适度性理论*
    - **特殊私人部门利益理论（捕获理论与卡特尔管制理论）**：捕获理论认为社会公众在利益分配中注定输给被管制集团，管制者因资源和专业技术有限而俯首于被管制集团的专家报告、证据及压力，使其特殊利益得以实现和巩固；
    - **社会选择理论**：从公共选择角度动态解释管制的整个历史演变过程——为社会公众利益初建监管机构→管制当局被动地反映被管制集团的种种利益→管制机构取得自我控制和独立性。`,keywords:["融监管的一般理论","公共产品","搭便车","财务杠杆","金融业","金融脆弱性理论","内在不稳定","风险传播的","效率与稳定","卡特尔管制","捕获理论","公共选择","独立性"]},{id:52,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"何谓金融监管体制？主要有哪些类型？",points:10,answer:`- 根据第十一章第四节课件内容，金融监管体制的含义与主要类型如下：

  - *（一）金融监管体制的含义*
    - 金融监管体制是金融监管的职责划分和权力分配的方式和组织制度。确定监管体制的基本原则是既要提高监管效率，避免过分的职能交叉和相互掣肘，又要保持权力的相互制约，防止监管权力过度集中。
  - *（二）金融监管体制的五种主要类型*
    - **统一监管型（单一全能型）**：对于不同的金融机构和金融业务，无论审慎监管还是业务监管，都由一个机构负责监管；
    - **多头监管型**：将金融机构和金融市场一般按照银行、证券、保险划分为3个领域，分别设置专业的监管机构负责全面监管；
    - **牵头监管型**：在实行分业监管的同时，为建立及时磋商协调机制、防止监管真空或业务交叉扯皮推诿，指定一个监管机构为牵头监管机构负责协调；
    - **“双峰”监管型**：设置两类监管机构，一类负责对所有金融机构进行审慎监管以控制系统性金融风险，另一类负责对不同金融业务监管，达到双重保险作用；
    - **“伞形”功能监管型**：对同时从事银行、证券、互助基金、保险等业务的金融持股公司指定美联储为监管人负责综合监管，同时按经营业务种类接受不同行业主要功能监管人的监督。`,keywords:["金融监管体制","融监管体制是金","对于不同的金","金融业","证券","牵头监管机构","分业监管","系统性金融风险","两类监管机构","美联储","伞形"]},{id:53,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"试述金融监管国际合作的理由。",points:10,answer:`- 根据第十章、第十一章课件现有内容（注：第11章课件末尾附有第12章“中央银行金融监管运行”第1—2节，第12章目录虽列有“第三节 中央银行金融监管国际合作”，但课件原文未展开该节正文），金融监管国际合作的依据与要点如下：

  - *（一）金融监管体制的国际合作趋势（第十一章4.3）*
    - **金融监管的国际合作不断加强**：国际社会积极响应国际监管组织发布的监管协议及监管集团的监管指引、行业最佳实践等，致力于推动国际金融监管协调发展。
  - *（二）防范与应对跨国金融风险与危机的需要（第十章1.2、3.1与4.1）*
    - **金融危机具有传染性（多米诺骨牌效应）**，且金融稳定具有全局性，央行需实时监测和防范国际金融市场波动对国内金融市场的影响；维持各国金融系统稳定运行应以各国央行的有效协调和国际通行的金融监管框架为基础，加强金融协调与合作以集中有效监管金融风险、防范金融危机。
  - *（三）应对跨境表外杠杆与构建国际统一审慎标准的需要（第十一章4.3与5.2）*
    - 针对美国次贷危机引发的全球金融危机暴露的银行表外资产过度杠杆化、逆周期资本金不足及《巴塞尔协议II》缺陷，需在G20主导的新型国际金融治理模式下，通过《巴塞尔协议III》确立微观审慎监管和宏观审慎监管相互结合的监管新模式，加强金融监管的国际合作。`,keywords:["中央银行金","国际监管组织","协调发展","多米诺骨牌效应","国际金融市场","巴塞尔协议III","宏观审慎监管"]},{id:54,chapterId:11,chapterTitle:"第十一章 中央银行金融监管",question:"简述不同维度下宏观审慎监管政策工具的选择。",points:10,answer:`- 根据第十一章第五节课件内容，宏观审慎监管政策工具分为时间维度与空间维度两大类：

  - *（一）时间维度下宏观审慎监管的五大政策工具*
    - **逆周期资本缓冲**：在经济繁荣期增加超额资本充足要求，动态调整资本充足率，让银行在经济上行周期计提资本缓冲以满足下行周期吸收损失的需要；
    - **流动性调控（流动性覆盖率）**：确保商业银行在严重流动性压力情景下保持充足、无变现障碍的优质流动性资产，满足未来30日流动性需求；
    - **设定杠杆率标准**：《巴塞尔协议III》采用简单的表内外资产加总之和替代风险加权资产衡量资本充足程度，防范模型风险；
    - **设定拨备标准**：在银行经济效益上升时期提高计提拨备水平，下降时期降低计提拨备水平，以真实反映公允价值；
    - **建立逆周期的抵质押品价值比率标准**：约束抵质押品市场价格随经济繁荣与衰退波动的顺周期性。
  - *（二）空间维度下宏观审慎金融监管的六大政策工具*
    - **资本充足性的普遍标准**：《巴塞尔协议III》将普通股比例从2%提升至4.5%、一级资本充足率下限从4%提升至6%，并设立2.5%资本留存缓冲和0～2.5%逆周期资本缓冲；
    - **系统重要性金融机构的额外监管要求**：对系统重要性银行提出1%的附加资本要求，降低“大而不倒”道德风险；
    - **改革评级公司**：减少金融机构和投资者对评级公司的依赖，抑制评级的顺周期性；
    - **衍生品交易的集中清算**：建立中央对手方并建立集中、统一的清算体系；
    - **加强对影子银行的监管**：重点防控游离于银行监管体系之外的信用中介在期限错配、流动性转换、信用转换和高杠杆四个方面的风险；
    - **或有资本的安排与监管**：在特定事件发生时募集股本或实收资本，避免银行经营陷入困境时资产收缩带来的信贷收缩效应。`,keywords:["宏观审慎监管","宏观审慎","资本充足率","资本缓冲","流动性压力","流动性","巴塞尔协议III","杠杆率","拨备","抵质押品价值比率","顺周期性","资本充足性","4.5%","系统重要性金融机构"]}],be=[{id:1,term:"存款准备金",definition:"商业银行为应付客户提取存款和划拨清算的需要而设置的专项资金，包括自存准备和存储于中央银行的准备金（含法定存款准备金与超额存款准备金）。",nature:"中央银行重要的负债业务，其中法定存款准备金是调控信用规模和货币供给量的政策手段，超额存款准备金是商业银行资产调整和信用创造的条件。",functionOrFeature:"保证商业银行的资金流动性和现金兑付能力，控制货币供应量，有助于中央银行进行结构调整并形成稳定且低成本的资金来源。",totalPoints:3,chapterId:4,chapterTitle:"第四章 中央银行负债业务"},{id:2,term:"法定存款准备金率",definition:"中央银行规定商业银行等存款性金融机构必须按存款或负债总额的一定比例向中央银行缴存法定存款准备金的比率。",nature:"决定货币乘数大小和派生存款倍增能力的重要法定政策参数。",functionOrFeature:"对所有存款货币银行影响平等，力度大、速度快、效果明显，但轻微变动可能带来经济强烈振荡，使用时一般比较慎重。",totalPoints:3,chapterId:4,chapterTitle:"第四章 中央银行负债业务"},{id:3,term:"基础货币",definition:"由商业银行等金融机构的准备金存款和流通中现金两部分组成的货币总量。",nature:"中央银行可直接控制的重要货币政策操作指标，与商业银行的货币创造是一种源与流的关系。",functionOrFeature:"在货币乘数一定或可预测时，控制住基础货币就控制住了货币供给总量，央行通过公开市场业务对其控制确定性强。",totalPoints:3,chapterId:4,chapterTitle:"第四章 中央银行负债业务"},{id:4,term:"货币发行",definition:"包含两层含义：一是指货币从中央银行的发行库通过各家商业银行的业务库流向社会；二是指货币从中央银行流出的数量大于从流通中回笼的数量。",nature:"中央银行最基本、最重要的特权与主要负债业务，每张投入市场的纸币都是中央银行对持有者的负债。",functionOrFeature:"为商品流通和交换提供流通手段和支付手段，遵循集中发行、经济发行和计划发行原则，主要通过再贷款、再贴现和收购金银外汇渠道实现。",totalPoints:3,chapterId:4,chapterTitle:"第四章 中央银行负债业务"},{id:5,term:"再贴现业务",definition:"中央银行买进在中央银行开设账户的商业银行等存款货币银行已办理贴现的未到期合法商业票据，向其融通资金的资产业务。",nature:"中央银行履行“最后贷款人”职能的重要手段，也是中央银行提供基础货币的重要渠道。",functionOrFeature:"商业银行在票据上背书并逐笔填制再贴现凭证，央行按票据面额扣除再贴现利息后支付再贴现金额，到期后通过清算系统收回资金。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:6,term:"再贴现利率",definition:"中央银行办理商业票据再贴现业务时所适用的短期官方利率（申请再贴现的合法票据期限一般不超过3个月，最长也在1年以内）。",nature:"中央银行调控货币供应量的重要政策利率工具，有些国家将其保持在比货币市场利率高一些的水平上作为“惩罚性”利率。",functionOrFeature:"提高或降低再贴现利率会直接改变商业银行获得资金的价格与票据转让价格，具有变动方向和力度的告示作用，影响公众预期。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:7,term:"中央银行贷款（再贷款）",definition:"中央银行采用信用放款或抵押放款形式，向商业银行等存款货币银行、非货币金融机构、政府及其他对象发放的贷款业务。",nature:"中央银行对商业银行等金融机构提供融资的重要资产业务，对商业银行的贷款主要是短期的流动性贷款或季节性贷款。",functionOrFeature:"解决金融机构临时性短缺资金需要、补充流动性并在紧急情况下保证最后清偿能力，是中央银行投放基础货币的重要渠道。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:8,term:"证券买卖业务",definition:"中央银行在公开金融市场上买进或卖出政府债券、国库券等流动性很高的有价证券，不以盈利为目的的资产业务。",nature:"一般限定在二级市场进行的公开市场操作业务，融资效果与再贷款相同但流动性更强。",functionOrFeature:"调控商业银行等存款货币机构的准备金和货币供应量，同时改变不同证券供求以影响利率水平和利率结构。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:9,term:"正回购",definition:"中央银行在公开市场上卖出有价证券，并约定在未来特定日期将证券买回的防御性回购交易方式。",nature:"公开市场证券买卖业务中用于短期收回流动性的操作方式。",functionOrFeature:"减少商业银行超额储备和市场短期流动性，调节货币供给量，具有弹性大、震荡较小和可逆转性强的特点。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:10,term:"逆回购",definition:"中央银行在公开市场上买入有价证券，并约定在未来特定日期将证券卖回给交易对手的防御性回购交易方式。",nature:"公开市场证券买卖业务中用于短期投放流动性的操作方式。",functionOrFeature:"向银行体系注入超额储备与基础货币，平抑市场短期资金紧张，操作主动权完全掌握在中央银行手中。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:11,term:"国际储备",definition:"一国货币当局持有的可用于国际支付和干预外汇市场的储备资产，中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和SDR四部分构成。",nature:"国际支付手段的准备金与一国对外经济交往实力的象征，中国国际储备的主体是外汇储备。",functionOrFeature:"用于稳定币值、稳定汇率以及调节国际收支逆差，构成管理需兼顾安全性、流动性和收益性三方面原则。",totalPoints:3,chapterId:5,chapterTitle:"第五章 中央银行资产业务"},{id:12,term:"实时全额支付系统（RTGS）",definition:"对金融机构的每笔转账业务进行一一对应、连续（实时）处理资金转账指令并完成最终结算的全额支付系统。",nature:"依托央行货币实时转账、采用电信网络实时发送和处理信息的核心支付清算模式。",functionOrFeature:"消除净额结算所产生的结算时隔，减少跨行清算信用风险、信贷规模和流动性风险，但对发起行清偿能力要求严格。",totalPoints:3,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务"},{id:13,term:"净额清算系统",definition:"在一定时点（通常为营业日结束时）将收到的转账金额总数减去发出的转账金额总数得出净结算头寸，通过中央银行或清算银行进行双边或多边划转的系统。",nature:"延迟清算、按每日预定时间或日终定期进行最终资金清算的支付处理模式。",functionOrFeature:"批量处理并大大减少必须支付的绝对量，但存在日间信贷产生的信用与流动性风险隐患及轧差结果被作废的法律风险。",totalPoints:3,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务"},{id:14,term:"支付系统风险",definition:"支付系统不能正常运行的可能性，主要包括信用风险、流动性风险、系统风险、法律风险、操作风险和道德风险六种类型。",nature:"直接关系金融稳定与安全的金融基础设施运行风险，其中系统风险具有多米诺骨牌效应。",functionOrFeature:"中央银行通过缜密设计、监测、限制大额系统透支、监控私营大额与小额系统及引入RTGS系统等方式加以防范与控制。",totalPoints:3,chapterId:6,chapterTitle:"第六章 中央银行支付清算业务"},{id:15,term:"货币政策",definition:"中央银行为实现一定的经济目标，运用各种工具调节和控制货币供给量，进而影响宏观经济的方针和措施的总和。",nature:"现代市场经济国家重要的宏观经济政策、需求管理政策与间接调控政策，且目标具有长期性。",functionOrFeature:"包括最终目标、政策工具、中介指标、传导机制和政策效果等内容，实施流程为“政策工具→中介指标→最终目标”。",totalPoints:3,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择"},{id:16,term:"货币政策中介指标",definition:"货币政策工具操作后，经由中央银行体系内部指标变化引起整个金融体系指标变化、并与最终目标联系紧密的金融指标（如货币供给量、利率）。",nature:"处于操作指标与最终目标之间的中间指示指标，其变动可以较好地预告最终目标可能出现的变动。",functionOrFeature:"选定须符合相关性、可测性、可控性和抗干扰性四大标准；货币供给量和利率不能同时作为中介指标。",totalPoints:3,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择"},{id:17,term:"货币政策操作指标",definition:"直接受货币政策工具调控、可控性强的短期金融指标（如准备金、基础货币）。",nature:"货币政策目标体系中微观可控性最强、位于政策工具与中介指标之间的直接传导指标。",functionOrFeature:"能够迅速反映政策工具操作对银行体系流动性的直接影响，进而传递给中介指标，其中基础货币是我国现行的操作指标。",totalPoints:3,chapterId:7,chapterTitle:"第七章 中央银行货币政策及其目标选择"},{id:18,term:"法定存款准备金政策",definition:"中央银行对商业银行等存款性金融机构的存款规定法定存款准备金率，强制要求其按规定比率上缴准备金，并通过调整比率调节信用的政策。",nature:"一般性货币政策工具之一，初始作用为保证存款支付与清算，后逐渐演变为货币政策工具。",functionOrFeature:"通过保证流动性、集中信贷资金和影响货币乘数调节货币供给总量，对所有银行影响平等但对经济影响大，使用时需慎重。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:19,term:"一般性货币政策工具",definition:"中央银行针对全社会信用总量进行调节的常规性货币政策手段，包括法定存款准备金政策、再贴现政策和公开市场业务。",nature:"间接性、总量性与全局性的货币政策核心工具。",functionOrFeature:"通过影响商业银行准备金、资金成本与基础货币，调节全社会贷款规模、利率水平和货币供给总量。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:20,term:"选择性货币政策工具",definition:"又称结构性货币政策工具，指中央银行在调节中有特定资金流向和用途的政策手段，包括消费者信用控制、证券市场信用控制、不动产信用控制和优惠利率。",nature:"针对特定部门、行业或信贷用途实施差别化调节的结构性工具。",functionOrFeature:"配合产业政策调整信贷资金投向与结构，抑制局部投机泡沫或重点扶持特定产业与产品发展。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:21,term:"公开市场业务",definition:"中央银行在金融市场买进或卖出有价证券以影响货币供给量和利率的一般性货币政策工具。",nature:"主动权完全在中央银行、灵活精巧、伸缩性与连续性强且极易逆转的日常性调节工具。",functionOrFeature:"既可实现维持既定货币政策的保卫性目标，也可实现货币政策转变的主动性目标，但告示作用较弱且需发达证券市场支持。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:22,term:"消费者信用控制",definition:"中央银行对不动产以外各种耐用消费品的分期付款或贷款所采取的管理措施，包括规定首期付款最低限额、最长期限及可用消费信贷购买的商品种类。",nature:"选择性（结构性）货币政策工具的重要组成部分。",functionOrFeature:"在消费膨胀时收紧条件以抑制消费需求和物价上涨，在经济衰退时放宽限制以刺激消费。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:23,term:"不动产信用控制",definition:"中央银行对金融机构向客户提供不动产抵押贷款所采取的管理措施，包括规定贷款最高限额、最长期限和首次付款及分摊还款的最低金额。",nature:"专门针对房地产信贷流向的选择性（结构性）货币政策工具。",functionOrFeature:"限制房地产市场过度投机，抑制房地产泡沫形成，调节信贷资金在产业间的合理配置。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:24,term:"窗口指导",definition:"中央银行根据产业行情、物价趋势和金融市场动向，规定商业银行贷款重点投向和贷款变动数量等的间接信用控制手段。",nature:"具有一定指导性与灵活性的间接信用控制工具。",functionOrFeature:"引导商业银行信贷投放的重点方向与规模变化，其发挥作用取决于央行在金融体系中的地位、威望与法定控制手段。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:25,term:"道义劝告",definition:"中央银行利用其在金融体系中的声望和地位，向金融机构发出通告、指示或与负责人面谈，解释政策意图使其自动采取相应措施的手段。",nature:"非强制性的间接信用控制（indirect credit control）手段。",functionOrFeature:"较为灵活地影响商业银行信用创造活动，有效性依赖于中央银行的权威声望及控制信用的足够法律权利。",totalPoints:3,chapterId:8,chapterTitle:"第八章 中央银行的货币政策工具"},{id:26,term:"金融危机",definition:"又称金融风暴，指金融系统中信用基础被破坏而导致的整个金融体系动荡、混乱，国际货币基金组织将其分为货币危机、银行业危机、外国债务危机和系统性金融危机四类。",nature:"具有综合性、传染性（明显的多米诺骨牌效应）和破坏性的严重金融失衡状态。",functionOrFeature:"经济繁荣期信用过度扩张与高风险借款比重上升为其埋下伏笔，需通过预警模型、国际协调、注资与机构重组等措施防范化解。",totalPoints:3,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全"},{id:27,term:"金融稳定",definition:"金融机构、金融市场和金融基础设施运行状态良好，能够有效发挥其关键功能并抵御内外冲击的动态状态。",nature:"具有综合性、全局性和动态性三大特征，是金融安全的基础与经济稳定的前提。",functionOrFeature:"核心目标是保障金融机构与市场稳定运行、防范化解系统性风险、优化金融结构与提高资源配置效率，需政策、工具与制度三方联动维护。",totalPoints:3,chapterId:10,chapterTitle:"第十章 金融危机、金融稳定与金融安全"},{id:28,term:"宏观审慎监管",definition:"宏观金融管理当局为了减少金融动荡产生的经济成本、确保金融稳定而将金融体系整体作为监管对象的监管模式。",nature:"区别于微观审慎监管的全局性监管框架，侧重金融机构整体行为、相互影响力及宏观经济不稳定因素，自上而下制定政策。",functionOrFeature:"在时间维度运用逆周期资本缓冲、流动性覆盖率、杠杆率、拨备标准和逆周期抵质押品价值比率，在空间维度关注系统重要性金融机构与影子银行等。",totalPoints:3,chapterId:11,chapterTitle:"第十一章 中央银行金融监管"}],ve=[{id:1,chapterId:1,recitationQuestionId:4,stem:"1694年成立、被世界各国一般认为是“中央银行的鼻祖”的是_____。",answers:["英格兰银行"],points:1,explanation:"全书速记第4题指出，英格兰银行于1694年成立，比瑞典银行晚38年，但世界各国一般都认为英格兰银行是中央银行的鼻祖。"},{id:2,chapterId:1,recitationQuestionId:4,stem:"1656年设立、1668年改组为国家银行并最早执行中央银行职能的是_____。",answers:["瑞典银行"],points:1,explanation:"全书速记第4题指出，瑞典银行于1656年设立、1668年改组为国家银行，是最早执行中央银行职能的银行。"},{id:3,chapterId:1,recitationQuestionId:6,stem:"按照中央银行的资本结构划分，中国人民银行属于_____的中央银行。",answers:["全部由国家所有","国家所有"],points:1,explanation:"全书速记第6题指出，全部由国家所有的中央银行资本归国家所有，如英国、法国、德国、中国人民银行等均采用这种形式。"},{id:4,chapterId:1,recitationQuestionId:4,stem:"美国1913年通过《_____》，设立由联邦储备委员会、12家联邦储备银行及会员银行组成的联邦储备体系。",answers:["联邦储备法"],points:1,explanation:"全书速记第4题指出，美国1913年通过《联邦储备法》，设立了由联邦储备委员会、12家联邦储备银行及会员银行组成的联邦储备体系。"},{id:5,chapterId:1,recitationQuestionId:13,stem:"中央银行的三大基本职能是发行的银行、银行的银行和_____。",answers:["政府的银行"],points:1,explanation:"全书速记第11至13题指出，中央银行的三大职能是发行的银行、银行的银行和政府的银行。"},{id:6,chapterId:2,recitationQuestionId:17,stem:"中央银行独立性的主要内容包括：享有独立的货币发行权、独立制定和执行货币政策，以及独立监督、监测_____。",answers:["金融市场"],points:1,explanation:"全书速记第17题指出，中央银行独立性主要反映在享有独立的货币发行权、独立制定和执行货币政策、独立监督监测金融市场三方面。"},{id:7,chapterId:2,recitationQuestionId:22,stem:"中国人民银行的独立性属于在_____领导下的相对独立性。",answers:["国务院"],points:1,explanation:"全书速记第22题指出，我国《中国人民银行法》规定中国人民银行在国务院领导下依法独立执行货币政策，履行职责。"},{id:8,chapterId:3,recitationQuestionId:27,stem:"中央银行业务活动的基本原则包括服从履行职责的需要、不以盈利为目标、不经营一般商业银行业务、保持资产的流动性、保持业务的公开性、保持业务的主动性和一定的_____、遵循相应的法律规范。",answers:["独立性"],points:1,explanation:"全书速记第27题列出了中央银行业务活动的七大原则，其中包括保持业务的主动性和一定的独立性。"},{id:9,chapterId:3,recitationQuestionId:26,stem:"中央银行的法定业务限制明确规定，一般不得向财政_____，不得直接认购、包销国债和其他政府债券。",answers:["透支"],points:1,explanation:"全书速记第26题指出，中央银行一般不得向财政透支，不得直接认购、包销国债和其他政府债券。"},{id:10,chapterId:4,recitationQuestionId:31,stem:"商业银行存放在中央银行的准备金分为法定存款准备金和_____两部分。",answers:["超额存款准备金","超额准备金"],points:1,explanation:"全书速记第31题指出，存储于中央银行的准备金分为法定存款准备金与超额存款准备金。"},{id:11,chapterId:4,recitationQuestionId:35,stem:"我国目前确定调整存款准备金的基期长度为_____。",answers:["一旬"],points:1,explanation:"全书速记第35题指出，我国目前确定调整存款准备金的基期长度为“一旬”。"},{id:12,chapterId:4,recitationQuestionId:46,stem:"我国人民币的发行坚持集中发行原则、_____和计划发行原则三大原则。",answers:["经济发行原则"],points:1,explanation:"全书速记第46题指出，人民币发行的三大原则为集中发行原则、经济发行原则和计划发行原则。"},{id:13,chapterId:4,recitationQuestionId:47,stem:"当商业银行现金收入超过库存限额时，超过部分存入人民银行发行库，转化为发行基金，这一过程称为现金_____。",answers:["回笼","现金回笼"],points:1,explanation:"全书速记第47题指出，当商业银行现金收入超过库存限额时，超过部分存入发行库形成现金回笼（转化为发行基金）。"},{id:14,chapterId:4,recitationQuestionId:45,stem:"中央银行发行货币并不要求持有一定准备资产，而以国家信用和中央银行信用作为发行保证的制度称为_____。",answers:["无准备制度"],points:1,explanation:"全书速记第45题指出，无准备制度下央行发行货币不要求持有一定准备资产，典型国家是中国。"},{id:15,chapterId:4,recitationQuestionId:50,stem:"中央银行债券的发行对象和持有者主要是经过特许的_____，而国库券的持有者可以是金融机构、企业组织、社会团体及自然人。",answers:["金融机构"],points:1,explanation:"全书速记第50题指出，中央银行债券的持有者是经过特许的金融机构。"},{id:16,chapterId:5,recitationQuestionId:53,stem:"商业银行申请再贴现时，必须以已办理贴现的_____合法票据申请再贴现。",answers:["未到期的","未到期"],points:1,explanation:"全书速记第53题指出，商业银行必须以已办理贴现的未到期的合法票据申请再贴现。"},{id:17,chapterId:5,recitationQuestionId:59,stem:"公开市场的证券买卖方式有两种，即回购和_____。",answers:["现券交易"],points:1,explanation:"全书速记第59题指出，公开市场的证券买卖方式有两种，即回购（正回购与逆回购）和现券交易（买断与卖断）。"},{id:18,chapterId:5,recitationQuestionId:52,stem:"再贴现和贷款业务是中央银行履行“最后贷款人”职能的重要手段，也是中央银行提供_____的重要渠道。",answers:["基础货币"],points:1,explanation:"全书速记第52题指出，再贴现和贷款业务是中央银行提供基础货币的重要渠道。"},{id:19,chapterId:5,recitationQuestionId:61,stem:"中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和_____四部分构成，其主体是外汇储备。",answers:["SDR"],points:1,explanation:"全书速记第61题指出，中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和SDR四部分构成。"},{id:20,chapterId:6,recitationQuestionId:64,stem:"按对转账资金的不同处理方式，支付清算系统分为净额清算系统和_____。",answers:["全额清算系统"],points:1,explanation:"全书速记第64题指出，支付清算系统按对转账资金的不同处理方式分为净额清算系统和全额清算系统。"},{id:21,chapterId:6,recitationQuestionId:69,stem:"国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“_____”。",answers:["核心原则"],points:1,explanation:"全书速记第69题指出，国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“核心原则”。"},{id:22,chapterId:7,recitationQuestionId:72,stem:"货币政策的五大目标包括保持稳定币值、促进经济稳定增长、促进充分就业、促进国际收支平衡和保持_____。",answers:["金融稳定"],points:1,explanation:"全书速记第72题指出，货币政策五大目标包含保持金融稳定，防范金融危机。"},{id:23,chapterId:7,recitationQuestionId:84,stem:"根据_____曲线和奥肯定律，在短期内通货膨胀与经济增长和充分就业之间通常存在正相关关系。",answers:["菲利普斯"],points:1,explanation:"全书速记第84题指出，根据菲利普斯曲线（Phillips curve）和奥肯定律，短期内通货膨胀与经济增长和充分就业之间通常存在正相关关系。"},{id:24,chapterId:7,recitationQuestionId:88,stem:"选择货币政策中介指标和操作指标的四大标准是相关性、可测性、可控性和_____。",answers:["抗干扰性"],points:1,explanation:"全书速记第88题指出，选择中介指标和操作指标必须符合相关性、可测性、可控性和抗干扰性四大标准。"},{id:25,chapterId:7,recitationQuestionId:95,stem:"被称为“强力货币”和“高能货币”，并且是我国现行货币政策操作指标的是_____。",answers:["基础货币"],points:1,explanation:"全书速记第95题指出，基础货币被称为“强力货币”和“高能货币”，是我国现行的货币政策操作指标。"},{id:26,chapterId:8,recitationQuestionId:97,stem:"法定存款准备金政策为派生存款规定了量的界限，直接影响_____，从而调节货币供给总量。",answers:["货币乘数"],points:1,explanation:"全书速记第97题指出，法定存款准备金政策为派生存款规定了量的界限，影响货币乘数，进而调节货币供给总量。"},{id:27,chapterId:8,recitationQuestionId:98,stem:"法定存款准备金率的轻微变动会通过货币乘数放大，可能给经济带来强烈_____，因此央行使用时一般比较慎重。",answers:["振荡"],points:1,explanation:"全书速记第98题指出，法定存款准备金率轻微变动会带来法定存款准备金量巨大变动，通过货币乘数放大可能带来经济强烈振荡。"},{id:28,chapterId:8,recitationQuestionId:100,stem:"再贴现政策的四大作用包括影响准备金和资金成本、调整信贷结构、产生_____作用影响公众预期，以及防止金融恐慌。",answers:["告示"],points:1,explanation:"全书速记第100题指出，再贴现政策具有产生变动方向和力度的告示作用，影响公众预期。"},{id:29,chapterId:8,recitationQuestionId:108,stem:"中央银行通过道义劝告、窗口指导等办法间接影响商业银行信用创造的措施称为_____。",answers:["间接信用控制"],points:1,explanation:"全书速记第108题指出，间接信用控制是指中央银行通过道义劝告、窗口指导等办法间接影响商业银行的信用创造。"},{id:30,chapterId:8,recitationQuestionId:111,stem:"2014年9月中国人民银行创设的、期限包括3个月、6个月和12个月的中短期抵押贷款工具是_____（MLF）。",answers:["中期借贷便利"],points:1,explanation:"全书速记第111题指出，中期借贷便利（MLF）于2014年9月创设，是央行对金融机构发放的中短期抵押贷款。"},{id:31,chapterId:9,recitationQuestionId:113,stem:"凯恩斯货币政策传导机制可能因“_____”出现或投资的利率弹性非常低而受阻。",answers:["凯恩斯陷阱"],points:1,explanation:"全书速记第113题指出，凯恩斯货币政策传导受阻的两大障碍是“凯恩斯陷阱”出现和投资的利率弹性非常低。"},{id:32,chapterId:9,recitationQuestionId:119,stem:"货币政策的内部时滞是央行制定和操作货币政策所需时间，细分为认识时滞和_____。",answers:["决策时滞"],points:1,explanation:"全书速记第119题指出，内部时滞细分为认识时滞和决策时滞。"},{id:33,chapterId:9,recitationQuestionId:123,stem:"我国积极探索建立货币政策和_____“双支柱”调控框架，前者侧重经济和物价稳定，后者侧重维护金融稳定。",answers:["宏观审慎政策"],points:1,explanation:"全书速记第123题指出，我国积极探索建立货币政策和宏观审慎政策“双支柱”调控框架。"},{id:34,chapterId:9,recitationQuestionId:125,stem:"随着经济全球化和国际金融化的发展，加强国际货币政策协调可以克服国际经济竞争中的“_____”。",answers:["囚徒困境"],points:1,explanation:"全书速记第125题指出，国际货币政策协调旨在克服国际经济竞争中的“囚徒困境”。"},{id:35,chapterId:10,recitationQuestionId:129,stem:"海曼·明斯基的金融不稳定假说将借款者分为套期保值型、投机型和_____三类。",answers:["蓬齐型"],points:1,explanation:"全书速记第129题指出，海曼·明斯基在1963年提出的金融不稳定假说将借款者分为套期保值型、投机型和蓬齐型。"},{id:36,chapterId:10,recitationQuestionId:132,stem:"在金融危机化解举措中，向金融机构注资可通过非股权性救助、股权性注资和购买“_____”等方式实施。",answers:["有毒资产"],points:1,explanation:"全书速记第132题指出，向金融机构注资可通过非股权性救助、股权性注资和购买“有毒资产”等方式进行。"},{id:37,chapterId:10,recitationQuestionId:138,stem:"1999年5月由IMF和世界银行联合推出的、通过宏观、微观和监管层次衡量金融体系稳定性的规划是_____（FSAP）。",answers:["金融部门评估规划"],points:1,explanation:"全书速记第138题指出，金融部门评估规划（FSAP）于1999年5月由IMF和世界银行联合推出。"},{id:38,chapterId:11,recitationQuestionId:147,stem:"美国监管当局于20世纪70年代后期开始采用的骆驼评级体系（CAMEL），主要考察资本充足性、资产质量、管理能力、盈利能力和_____五个方面。",answers:["资产的流动性","流动性"],points:1,explanation:"全书速记第147题指出，骆驼评级体系监管内容包括资本充足性、资产质量、管理能力、盈利能力、资产的流动性五个方面。"},{id:39,chapterId:11,recitationQuestionId:156,stem:"《巴塞尔协议III》大幅提高高质量核心一级资本最低要求，将普通股比例从2%提升至_____。",answers:["4.5%"],points:1,explanation:"全书速记第156题指出，《巴塞尔协议III》将普通股比例从2%提升至4.5%。"},{id:40,chapterId:11,recitationQuestionId:162,stem:"中国黄金现货交易、延期交收交易和中远期交易在_____进行，由中国人民银行监管。",answers:["上海黄金交易所"],points:1,explanation:"全书速记第162题指出，中国黄金现货交易、延期交收交易和中远期交易在上海黄金交易所进行，由中国人民银行监管。"}],je=[{id:1,chapterId:1,recitationQuestionId:4,stem:"历史上最早执行中央银行职能的银行是（ ）。",options:{A:"英格兰银行",B:"瑞典银行",C:"法兰西银行",D:"美联储"},correctKey:"B",points:1,rationale:"全书速记第4题指出，瑞典银行1656年设立、1668年改组为国家银行，是最早执行中央银行职能的银行；英格兰银行1694年成立，是现代中央银行的鼻祖。"},{id:2,chapterId:1,recitationQuestionId:5,stem:"下列关于“复合式中央银行”的表述，符合课件内容的是（ ）。",options:{A:"一个国家仅设立一家中央银行机构统一行使职能",B:"一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系",C:"一个国家或地区没有通常意义上的中央银行，由类似机构代行部分职能",D:"两个以上国家结成货币联盟共同设立一家中央银行"},correctKey:"B",points:1,rationale:"全书速记第5题指出，复合式中央银行是指一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系；A为一元式单一中央银行，C为准中央银行，D为跨国中央银行。"},{id:3,chapterId:1,recitationQuestionId:7,stem:"中央银行的最高权力机构中，决策权、执行权和监督权由不同机构交叉掌管的代表国家是（ ）。",options:{A:"英国、美国",B:"日本、德国",C:"瑞士、比利时",D:"法国、韩国"},correctKey:"C",points:1,rationale:"全书速记第7题指出，瑞士、比利时等国采用决策权、执行权和监督权由不同机构交叉掌管的模式；英国、美国为统一掌管，日本、德国、法国、韩国为分属不同机构。"},{id:4,chapterId:1,recitationQuestionId:6,stem:"下列中央银行中，属于“公私混合所有”资本结构的是（ ）。",options:{A:"中国人民银行",B:"美联储",C:"日本银行",D:"韩国银行"},correctKey:"C",points:1,rationale:"全书速记第6题指出，日本银行和比利时国家银行属于公私混合所有；中国人民银行属于全部由国家所有，美联储属于集体所有，韩国银行属于无资本金的中央银行。"},{id:5,chapterId:2,recitationQuestionId:15,stem:"在现代经济中，中央银行被称为“金融体系安全的守护者”，主要对应其哪一项作用（ ）。",options:{A:"稳定货币，稳定经济",B:"调节信用，调节经济",C:"集中清算，加速资金周转",D:"推进国际金融的合作和交流"},correctKey:"C",points:1,rationale:"全书速记第15题指出，中央银行在现代经济中的四大作用中，“集中清算，加速资金周转”体现其作为“金融体系安全的守护者”的角色。"},{id:6,chapterId:2,recitationQuestionId:20,stem:"按照中央银行相对独立性的类型划分，英国的英格兰银行和日本银行属于（ ）。",options:{A:"独立性较强型",B:"独立性居中型",C:"独立性较弱型",D:"完全从属型"},correctKey:"B",points:1,rationale:"全书速记第20题指出，英格兰银行、日本银行属于独立性居中型（或次强型）；德国联邦银行、美联储和欧洲中央银行属于独立性较强型。"},{id:7,chapterId:2,recitationQuestionId:22,stem:"下列关于中国人民银行独立性的表述，正确的是（ ）。",options:{A:"中国人民银行直接向全国人大常委会负责，不受国务院领导",B:"中国人民银行在国务院领导下依法独立执行货币政策，不受地方政府、各级政府部门、社会团体和个人的干涉",C:"中国人民银行可以根据地方政府要求直接向其提供贷款",D:"中国人民银行可以按财政部门要求直接认购国债"},correctKey:"B",points:1,rationale:"全书速记第22题指出，中国人民银行在国务院领导下依法独立执行货币政策，履行职责，不受地方政府、各级政府部门、社会团体和个人的干涉。"},{id:8,chapterId:3,recitationQuestionId:25,stem:"根据《中央银行法》的规定，中央银行制度确立的标志以及进行宏观调控的基础是（ ）。",options:{A:"垄断货币发行权",B:"代理国库业务",C:"开展商业性证券投资",D:"向企业提供担保"},correctKey:"A",points:1,rationale:"全书速记第25题指出，垄断货币发行权是中央银行最基本、最重要的特征，是中央银行制度确立的标志，也是进行宏观调控的基础。"},{id:9,chapterId:3,recitationQuestionId:28,stem:"按照是否与货币资金的运动相关划分，下列属于中央银行“管理类业务”的是（ ）。",options:{A:"支付清算业务",B:"经理国库业务",C:"征信管理与反洗钱管理",D:"公开市场业务"},correctKey:"C",points:1,rationale:"全书速记第28题指出，管理类业务与货币资金运动无直接关系且不导致数量或结构变化，包括征信管理、反洗钱和金融安全管理等；A、B、D均属于银行类业务。"},{id:10,chapterId:4,recitationQuestionId:29,stem:"与商业银行吸收存款不同，中央银行存款业务的资金来源形成机制是（ ）。",options:{A:"通过吸收居民储蓄创造资金来源",B:"通过资金的运用创造资金来源",C:"通过高息揽存扩大资金来源",D:"通过财政拨款形成存款负债"},correctKey:"B",points:1,rationale:"全书速记第29题指出，商业银行吸收存款是为了获取资金来源并通过资金运用创造利润，而中央银行是通过资金的运用创造资金来源。"},{id:11,chapterId:4,recitationQuestionId:37,stem:"我国现行存款准备金制度与西方国家通行做法的主要差异之一是（ ）。",options:{A:"我国对活期存款和定期存款实行不同的准备金率",B:"我国对法定存款准备金和备付金支付利息",C:"我国只对企业存款计提准备金",D:"我国商业银行可以自由动用法定存款准备金"},correctKey:"B",points:1,rationale:"全书速记第37题指出，西方国家中央银行一般不对商业银行的准备金存款支付利息，而中国人民银行对法定存款准备金和备付金支付利息。"},{id:12,chapterId:4,recitationQuestionId:40,stem:"下列关于中央银行特种存款业务特点的表述，不正确的是（ ）。",options:{A:"具有非常规性，只在特殊情况下开办",B:"存款对象具有特定性，很少面向所有金融机构",C:"存款期限较长，一般为五年以上",D:"数量和利率完全由中央银行确定，具有一定强制性"},correctKey:"C",points:1,rationale:"全书速记第40题指出，特种存款业务存款期限较短，一般为一年。"},{id:13,chapterId:4,recitationQuestionId:42,stem:"中央银行为弥补国家财政赤字而额外增加的货币发行属于（ ）。",options:{A:"经济发行",B:"财政发行",C:"信用发行",D:"弹性发行"},correctKey:"B",points:1,rationale:"全书速记第42题指出，财政发行是指为弥补国家财政赤字而进行的货币发行，会形成超经济需要的过多货币量。"},{id:14,chapterId:4,recitationQuestionId:50,stem:"下列关于中央银行债券与国库券区别的表述，正确的是（ ）。",options:{A:"中央银行债券旨在弥补财政预算赤字",B:"国库券的持有者仅限于经过特许的金融机构",C:"中央银行债券不受财政预算和国债规模等外在因素影响，操作更便利",D:"中央银行债券的发行和交易成本比国库券更低"},correctKey:"C",points:1,rationale:"全书速记第50题指出，中央银行债券不受财政预算、国债规模等外在因素影响，操作更便利，但会导致央行成本过高，通常作为公开市场操作的备用工具。"},{id:15,chapterId:5,recitationQuestionId:53,stem:"根据课件关于再贴现票据的规定，美联储规定用于再贴现的商业票据期限不超过（ ）。",options:{A:"30天",B:"60天",C:"90天",D:"180天"},correctKey:"C",points:1,rationale:"全书速记第53题指出，美联储规定申请再贴现的商业票据不超过90天、农产品票据不超过9个月。"},{id:16,chapterId:5,recitationQuestionId:59,stem:"为防止直接购买政府债券沦为弥补财政赤字的工具而引发通货膨胀，各国一般限定中央银行证券买卖业务只能在（ ）进行。",options:{A:"一级市场",B:"二级市场",C:"柜台发行市场",D:"场外衍生品市场"},correctKey:"B",points:1,rationale:"全书速记第59题指出，为了防止直接购买政府债券沦为弥补财政赤字的工具而引发通货膨胀，一般限定中央银行证券买卖业务只能在二级市场进行。"},{id:17,chapterId:5,recitationQuestionId:59,stem:"中央银行在公开市场上卖出有价证券，并约定在未来特定日期买回的交易方式称为（ ）。",options:{A:"买断",B:"卖断",C:"正回购",D:"逆回购"},correctKey:"C",points:1,rationale:"全书速记第59题指出，正回购是卖出并约定未来买回，用于收回流动性；逆回购是买入并约定未来卖回，用于投放流动性。"},{id:18,chapterId:5,recitationQuestionId:61,stem:"下列不属于中国外汇储备三大来源的是（ ）。",options:{A:"国际收支顺差",B:"有管理的浮动汇率制度下的外汇市场干预",C:"热钱（短期资本）流入",D:"商业银行向居民发放外汇消费贷款"},correctKey:"D",points:1,rationale:"全书速记第61题指出，中国外汇储备的三大来源为国际收支顺差、制度因素（1994年以来实施有管理的浮动汇率制度）以及热钱流入。"},{id:19,chapterId:6,recitationQuestionId:66,stem:"能够连续（实时）进行资金转账指令处理和最终结算的全额支付系统简称（ ）。",options:{A:"DNS",B:"RTGS",C:"CIPS",D:"CNAPS"},correctKey:"B",points:1,rationale:"全书速记第66题指出，实时全额支付系统（RTGS）可以连续（实时）进行资金转账指令处理和最终结算。"},{id:20,chapterId:6,recitationQuestionId:68,stem:"在支付系统面临的风险中，因无法可依或法律对支付参与者权利义务界定不清（如“零点规则”、轧差合法性争议）导致的风险是（ ）。",options:{A:"信用风险",B:"流动性风险",C:"法律风险",D:"操作风险"},correctKey:"C",points:1,rationale:"全书速记第68题指出，法律风险主要来源有结算终结性、破产法中的“零点规则”、轧差的合法性、抵押物利益和回购协议争议等。"},{id:21,chapterId:6,recitationQuestionId:70,stem:"在中国人民银行运营的支付系统体系中，主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务的是（ ）。",options:{A:"大额实时支付系统",B:"小额批量支付系统",C:"境内外币支付系统",D:"网上支付跨行清算系统"},correctKey:"D",points:1,rationale:"全书速记第70题指出，网上支付跨行清算系统主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务。"},{id:22,chapterId:7,recitationQuestionId:74,stem:"中央银行实施货币政策的标准传导流程是（ ）。",options:{A:"最终目标 → 中介指标 → 政策工具",B:"政策工具 → 中介指标 → 最终目标",C:"中介指标 → 操作指标 → 政策工具",D:"政策工具 → 最终目标 → 操作指标"},correctKey:"B",points:1,rationale:"全书速记第74题指出，货币政策的实施流程为“政策工具 → 中介指标 → 最终目标”。"},{id:23,chapterId:7,recitationQuestionId:85,stem:"在以下哪种宏观经济失衡组合下，使用货币政策同时调节稳定币值与国际收支平衡会发生冲突（ ）。",options:{A:"国际收支逆差与通货膨胀并存",B:"国际收支顺差与通货紧缩并存",C:"国际收支逆差与通货紧缩并存",D:"国际收支平衡与物价稳定并存"},correctKey:"C",points:1,rationale:"全书速记第85题指出，国际收支逆差与通货紧缩并存时，采取扩张型货币政策促使经济复苏和物价回升会增加进口、刺激资本流出，从而使国际收支逆差更加严重。"},{id:24,chapterId:7,recitationQuestionId:91,stem:"货币供给量和利率不能同时作为货币政策中介指标的原因在于（ ）。",options:{A:"两者都在中央银行资产负债表外",B:"盯住货币供给总量将导致利率波动，盯住利率目标将导致货币供给总量波动",C:"利率的变动完全不受公开市场业务影响",D:"货币供给量的变动只取决于财政赤字"},correctKey:"B",points:1,rationale:"全书速记第91题指出，货币供给量和利率之间不具有严格的一一对应关系，盯住货币供给总量将导致利率波动，盯住利率目标将导致货币供给总量波动。"},{id:25,chapterId:7,recitationQuestionId:94,stem:"1979年10月至1982年10月期间，美联储在货币政策操作中主要使用的准备金计量口径是（ ）。",options:{A:"借入储备",B:"非借入储备",C:"法定准备存款",D:"超额准备存款"},correctKey:"B",points:1,rationale:"全书速记第94题指出，1979年10月至1982年10月美联储主要使用非借入储备，此后改为借入储备。"},{id:26,chapterId:8,recitationQuestionId:101,stem:"下列关于再贴现政策局限性的表述，正确的是（ ）。",options:{A:"控制货币供给量的主动权完全在中央银行手中",B:"央行可以直接强迫商业银行向贴现窗口借款",C:"告示效应是相对的，有时不能准确反映央行的政策意向",D:"再贴现率可以每天频繁调整，灵活性极强"},correctKey:"C",points:1,rationale:"全书速记第101题指出，再贴现政策的局限性包括：告示效应是相对的、市场利率与再贴现率利差随市场利率波动、控制货币供给量的主动权并不完全在中央银行。"},{id:27,chapterId:8,recitationQuestionId:103,stem:"中央银行开展公开市场操作时，预测并抵消公众持有通货数量改变等非央行直接控制因素对银行储备的影响，这属于（ ）。",options:{A:"主动性目标",B:"保卫性目标",C:"选择性目标",D:"惩罚性目标"},correctKey:"B",points:1,rationale:"全书速记第103题指出，公开市场操作的两大政策目的为维持既定的货币政策（保卫性目标）和实现货币政策的转变（主动性目标）。"},{id:28,chapterId:8,recitationQuestionId:106,stem:"下列货币政策工具中，不属于选择性（结构性）货币政策工具的是（ ）。",options:{A:"消费者信用控制",B:"证券市场信用控制",C:"不动产信用控制",D:"法定存款准备金政策"},correctKey:"D",points:1,rationale:"全书速记第106题指出，选择性货币政策工具包括消费者信用控制、证券市场信用控制、不动产信用控制和优惠利率；法定存款准备金政策属于一般性货币政策工具。"},{id:29,chapterId:8,recitationQuestionId:110,stem:"中国人民银行基于传统央行票据工具创设、通过央行票据与银行永续债交换以支持银行永续债流动性的工具是（ ）。",options:{A:"SLO",B:"CBS",C:"SLF",D:"PSL"},correctKey:"B",points:1,rationale:"全书速记第110题指出，央行票据互换（CBS）通过央行票据与银行永续债之间交换实现对银行永续债流动性的支持。"},{id:30,chapterId:9,recitationQuestionId:114,stem:"在后凯恩斯学派的传导机制理论中，托宾的 q 理论定义 q 等于（ ）。",options:{A:"企业厂商的真实资本的市场价值 / 资本的重置成本",B:"资本的重置成本 / 企业厂商的真实资本的市场价值",C:"流通中现金 / 商业银行存款总额",D:"名义利率 / 预期通货膨胀率"},correctKey:"A",points:1,rationale:"全书速记第114题指出，托宾定义 q = 企业厂商的真实资本的市场价值 / 资本的重置成本，传导机制为 MS↑ → Ps↑ → q↑ → I↑ → Y↑。"},{id:31,chapterId:9,recitationQuestionId:115,stem:"以弗里德曼为首的货币学派认为，决定货币需求的主要因素是（ ）。",options:{A:"市场名义利率",B:"持久性收入",C:"股票价格指数",D:"银行超额储备"},correctKey:"B",points:1,rationale:"全书速记第115题指出，货币学派认为持久性收入是决定货币需求的主要因素，货币需求函数稳定从而对利率变动不敏感。"},{id:32,chapterId:9,recitationQuestionId:120,stem:"弗里德曼的实证研究表明，从货币增长率变化到名义收入变化一般需要（ ）的时间，而货币政策对GDP影响的最高点一般要经过1年至2年的滞后。",options:{A:"1～3个月",B:"6～9个月",C:"2～3年",D:"3～5年"},correctKey:"B",points:1,rationale:"全书速记第120题指出，弗里德曼的研究认为，从货币增长率变化到名义收入变化需要6～9个月的时间。"},{id:33,chapterId:9,recitationQuestionId:122,stem:"在货币政策与财政政策的配合模式中，既能使政策效应比较稳定又不带有很大惯性的是（ ）。",options:{A:"“双紧”政策",B:"“双松”政策",C:"“一松一紧”配合（紧财政、松信贷或松财政、紧信贷）",D:"完全放弃财政政策"},correctKey:"C",points:1,rationale:"全书速记第122题指出，“一松一紧”配合会产生相互抗衡的摩擦力，作用力度较弱，但政策效应比较稳定且不带有很大惯性。"},{id:34,chapterId:10,recitationQuestionId:128,stem:"在四代货币危机理论中，认为国内扩张性货币政策与维持固定汇率之间存在矛盾（财政赤字论）的代表学者是（ ）。",options:{A:"保罗·克鲁格曼（第一代）",B:"奥布斯特费尔德（第二代）",C:"麦金农和克鲁格曼（第三代）",D:"克鲁格曼和阿吉翁（第四代）"},correctKey:"A",points:1,rationale:"全书速记第128题指出，第一代货币危机理论（财政赤字论，保罗·克鲁格曼）认为国内扩张性货币政策与维持固定汇率之间存在矛盾。"},{id:35,chapterId:10,recitationQuestionId:129,stem:"提出“银行挤兑论（D-D模型）”，认为银行体系脆弱性源于存款者流动性要求不确定性与资产负债流动性不匹配的学者是（ ）。",options:{A:"弗里德曼",B:"海曼·明斯基",C:"戴蒙德和迪布维格",D:"欧文·费雪"},correctKey:"C",points:1,rationale:"全书速记第129题指出，戴蒙德和迪布维格（1983年，D-D模型）提出了银行挤兑论。"},{id:36,chapterId:10,recitationQuestionId:136,stem:"在金融稳定评估指标体系中，金融机构内部定量指标包括资本充足性、资产负债、资产安全性、盈利性及可持续发展能力五大类共（ ）个指标。",options:{A:"14",B:"26",C:"27",D:"40"},correctKey:"C",points:1,rationale:"全书速记第136题指出，金融机构内部定量指标包括五大类27个指标，定性指标包括内部管理能力中的4个指标。"},{id:37,chapterId:11,recitationQuestionId:148,stem:"对同时从事银行、证券、互助基金、保险等业务的金融持股公司，指定美联储为综合监管人并由各行业主要功能监管人分业监督的模式称为（ ）。",options:{A:"统一监管型",B:"多头监管型",C:"“双峰”监管型",D:"“伞形”功能监管型"},correctKey:"D",points:1,rationale:"全书速记第148题指出，“伞形”功能监管型指定美联储为金融持股公司监管人负责综合监管，同时接受不同行业主要功能监管人的监督。"},{id:38,chapterId:11,recitationQuestionId:150,stem:"2023年3月，我国在银保监会基础上组建的统一监管除证券业之外金融业的机构是（ ）。",options:{A:"国务院金融稳定发展委员会",B:"中国银行保险监督管理委员会",C:"国家金融监督管理总局",D:"中国证券监督管理委员会"},correctKey:"C",points:1,rationale:"全书速记第150与151题指出，2023年3月决定在银保监会基础上组建国家金融监督管理总局，依法对除证券业之外的金融业实行统一监督管理。"},{id:39,chapterId:11,recitationQuestionId:155,stem:"下列工具中，属于“空间维度”下宏观审慎金融监管政策工具的是（ ）。",options:{A:"流动性覆盖率",B:"设定拨备标准",C:"逆周期的抵质押品价值比率标准",D:"衍生品交易的集中清算"},correctKey:"D",points:1,rationale:"全书速记第155与156题指出，衍生品交易的集中清算属于空间维度下的宏观审慎政策工具，A、B、C均属于时间维度下的政策工具。"},{id:40,chapterId:11,recitationQuestionId:161,stem:"在证券交易所监管制度中，以英国为代表、传统上以自律为原则且无须政府批准的监管模式是（ ）。",options:{A:"注册制",B:"核准制",C:"认可制",D:"审批制"},correctKey:"C",points:1,rationale:"全书速记第161题指出，对证券交易所的监管包括以美国为代表的注册制、以日本为代表的核准制以及以英国为代表的认可制。"}],Ne=[{id:1,chapterId:1,recitationQuestionId:5,isCorrect:!1,points:1,statement:"复合式中央银行是指一个国家（或地区）没有通常意义上的中央银行，而由商业银行或类似机构代行部分中央银行职能。",errorCorrection:"错误。全书速记第5题指出，题干描述的是“准中央银行”；复合式中央银行是指一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系。"},{id:2,chapterId:1,recitationQuestionId:7,isCorrect:!0,points:1,statement:"在中央银行的权力结构中，日本、德国、法国、澳大利亚、巴西、韩国等国的最高权力机构属于决策权、执行权和监督权分属不同机构的模式。",errorCorrection:"正确。全书速记第7题指出，日本、德国、法国、澳大利亚、巴西、韩国等采用决策权、执行权和监督权分属不同机构的模式。"},{id:3,chapterId:1,recitationQuestionId:9,isCorrect:!0,points:1,statement:"中央银行分支机构的设置一般遵循按经济区域设置、按行政区划设置以及按经济区域与行政区划相结合设置三种原则。",errorCorrection:"正确。全书速记第9题明确列出了中央银行分支机构设置的这三种原则。"},{id:4,chapterId:2,recitationQuestionId:19,isCorrect:!0,points:1,statement:"中央银行保持相对独立性应遵循与经济发展水平和经济体制相适应、服从宏观经济整体利益以及明确职能职责权限范围并立法保障等原则。",errorCorrection:"正确。全书速记第19题指出，中央银行保持相对独立性应遵循国家与宏观经济利益原则以及法律规范原则等。"},{id:5,chapterId:2,recitationQuestionId:21,isCorrect:!1,points:1,statement:"中央银行作为“政府的银行”，应当在财政出现赤字时无条件向财政部门提供直接透支融通。",errorCorrection:"错误。全书速记第21与26题指出，中央银行与财政部门分工合作且相互制约，一般不得向财政透支，不得直接认购、包销国债和其他政府债券。"},{id:6,chapterId:3,recitationQuestionId:26,isCorrect:!1,points:1,statement:"为了支持实体经济发展，中央银行可以直接从事商业票据的承兑和贴现业务，并直接向大型企业提供担保。",errorCorrection:"错误。全书速记第26题指出，中央银行法定业务限制明确规定不得向任何个人、企业或单位提供担保或直接发放贷款，不得直接从事商业票据的承兑、贴现业务。"},{id:7,chapterId:3,recitationQuestionId:27,isCorrect:!0,points:1,statement:"中央银行开展业务活动应保持业务的公开性，使社会公众及时清晰了解货币政策意图并形成合理预期。",errorCorrection:"正确。全书速记第27题指出，保持业务的公开性是中央银行业务活动的重要原则之一。"},{id:8,chapterId:4,recitationQuestionId:31,isCorrect:!0,points:1,statement:"法定存款准备金的使用主动权在中央银行手中，商业银行无权动用；而超额存款准备金商业银行可以自由使用。",errorCorrection:"正确。全书速记第31题明确区分了法定存款准备金与超额存款准备金在使用主动权上的区别。"},{id:9,chapterId:4,recitationQuestionId:37,isCorrect:!1,points:1,statement:"我国现行的法定存款准备金制度和西方国家一样，对活期存款、定期存款和储蓄存款分别按不同流动性设置不同的法定准备金率。",errorCorrection:"错误。全书速记第37题指出，我国未按存款类别计提准备金，差别存款准备金率只与资本充足率、资产质量状况等指标挂钩。"},{id:10,chapterId:4,recitationQuestionId:47,isCorrect:!1,points:1,statement:"中国人民银行发行库保管的发行基金已经进入流通领域，具备现实的货币流通手段和支付手段职能。",errorCorrection:"错误。全书速记第47题指出，发行基金是尚未发行的票币，不具备货币职能；只有调入商业银行进入流通后才转化为现实的流通货币（现金）。"},{id:11,chapterId:4,recitationQuestionId:51,isCorrect:!0,points:1,statement:"中央银行对外负债的主要目的是平衡国际收支、维持本币汇率的既定水平以及应对货币危机或金融危机。",errorCorrection:"正确。全书速记第51题明确指出了中央银行对外负债的这三个目的。"},{id:12,chapterId:5,recitationQuestionId:53,isCorrect:!1,points:1,statement:"再贴现利息的计算不仅取决于票据面额、日再贴现率和贴现日数，还必须扣除商业票据原有的票面利息。",errorCorrection:"错误。全书速记第53题指出，再贴现利息=票据面额×日再贴现率×贴现日数，仅与票据面额和再贴现率有关，与票据原有利息无关。"},{id:13,chapterId:5,recitationQuestionId:55,isCorrect:!0,points:1,statement:"中央银行对商业银行等存款货币银行的贷款主要是短期的流动性贷款或季节性贷款，不能发放长期贷款。",errorCorrection:"正确。全书速记第55题明确指出央行对商业银行主要提供短期流动性贷款或季节性贷款。"},{id:14,chapterId:5,recitationQuestionId:58,isCorrect:!0,points:1,statement:"与中央银行贷款业务相比，证券买卖业务具有更强的资金流动性，但对有价证券市场的发达程度要求更高。",errorCorrection:"正确。全书速记第58题指出，证券买卖业务流动性更强，且需要以较为发达的有价证券市场为前提。"},{id:15,chapterId:6,recitationQuestionId:64,isCorrect:!1,points:1,statement:"净额清算系统逐笔实时全额结算，能够完全消除参与者之间的日间信用风险与流动性风险。",errorCorrection:"错误。全书速记第64题指出，逐笔实时全额结算的是实时全额支付系统（RTGS）；净额清算系统存在日间信贷产生的信用风险、流动性风险隐患及法律风险。"},{id:16,chapterId:6,recitationQuestionId:70,isCorrect:!0,points:1,statement:"中国现代化支付系统（CNAPS）中的小额批量支付系统实行7×24小时不间断运行，并通过净借记限额管理有效防范信用风险。",errorCorrection:"正确。全书速记第70题明确记录了小额批量支付系统的这一运行特征。"},{id:17,chapterId:7,recitationQuestionId:79,isCorrect:!0,points:1,statement:"量化稳定币值目标一般采用GNP平减指数、消费物价指数和批发物价指数三类指标，其中消费物价指数最为常见。",errorCorrection:"正确。全书速记第79题明确列出了这三类稳定币值量化指标。"},{id:18,chapterId:7,recitationQuestionId:81,isCorrect:!1,points:1,statement:"货币政策中的“充分就业”目标意味着要把全社会的失业率彻底降低到零失业率水平。",errorCorrection:"错误。全书速记第81题指出，充分就业并不是追求零失业率，而是把失业降低到自然失业率水平。"},{id:19,chapterId:7,recitationQuestionId:90,isCorrect:!0,points:1,statement:"利率作为货币政策中介指标的主要缺点在于：中央银行能控制的是名义利率，而对经济运行产生实质影响的是预期实际利率。",errorCorrection:"正确。全书速记第90题指出，预期实际利率等于名义利率减去通货膨胀预期，很难准确计量与控制。"},{id:20,chapterId:8,recitationQuestionId:104,isCorrect:!0,points:1,statement:"公开市场业务具有主动权完全在中央银行、灵活精巧、伸缩性与连续性强、极易逆转和可迅速操作五大优点。",errorCorrection:"正确。全书速记第104题明确列出了公开市场业务的这五大优点。"},{id:21,chapterId:8,recitationQuestionId:105,isCorrect:!1,points:1,statement:"与再贴现政策相比，公开市场业务操作具有极强的政策意图告示作用，市场极易直接解读。",errorCorrection:"错误。全书速记第105题指出，公开市场操作较为细微、技术性较强，政策意图的告示作用较弱，不如再贴现政策明显。"},{id:22,chapterId:8,recitationQuestionId:109,isCorrect:!0,points:1,statement:"近年来我国法定存款准备金制度改革由“普遍降准”逐步调整为“定向降准”，以引导信贷资源投向特定领域。",errorCorrection:"正确。全书速记第109题指出，2014年开始我国更多采用“定向调节”引导信贷资源投向。"},{id:23,chapterId:9,recitationQuestionId:114,isCorrect:!1,points:1,statement:"米什金的资产价格传导机制强调货币供应量增加使股票价格上升，从而直接提高企业投资水平。",errorCorrection:"错误。全书速记第114题指出，米什金的传导机制（MS↑ → Ps↑ → V↑ → D↓ → CA↑ → Y↑）强调股价上升提高消费者金融资产价值、降低财务困难可能性，从而增加耐用消费品支出。"},{id:24,chapterId:9,recitationQuestionId:119,isCorrect:!1,points:1,statement:"货币政策从调整政策工具到对中介目标产生作用的时间属于内部时滞中的决策时滞。",errorCorrection:"错误。全书速记第119题指出，从调整货币政策工具到对中介目标产生作用的时间属于外部时滞中的“操作时滞”。"},{id:25,chapterId:9,recitationQuestionId:124,isCorrect:!0,points:1,statement:"1976年4月形成的牙买加体系实现了黄金非货币化、国际收支调节方式多样化、汇率安排多样化及国际储备多元化。",errorCorrection:"正确。全书速记第124题明确概括了牙买加体系的这些特征。"},{id:26,chapterId:10,recitationQuestionId:128,isCorrect:!0,points:1,statement:"第三代货币危机理论认为东南亚经常账户逆转及危机深化源于货币贬值、高利率及销售下降使企业财务状况恶化。",errorCorrection:"正确。全书速记第128题明确指出了第三代货币危机理论（麦金农和克鲁格曼）的这一核心观点。"},{id:27,chapterId:10,recitationQuestionId:138,isCorrect:!0,points:1,statement:"金融稳定是金融安全的基础，金融安全是经济安全的核心，经济安全是国家安全的必要组成部分。",errorCorrection:"正确。全书速记第138题明确界定了这四者之间的层次关系。"},{id:28,chapterId:11,recitationQuestionId:142,isCorrect:!1,points:1,statement:"捕获理论认为政府管制者能够完全独立于被管制集团，始终站在社会公众利益一边作出最优监管决策。",errorCorrection:"错误。全书速记第142题指出，捕获理论认为政府管制者因资源和专业技术有限而俯首于被管制集团的专家报告、证据及压力，使其特殊利益得到实现和巩固。"},{id:29,chapterId:11,recitationQuestionId:154,isCorrect:!0,points:1,statement:"宏观审慎监管侧重金融机构整体行为及相互影响力，自上而下制定政策；微观审慎监管侧重个体行为和风险偏好，自下而上制定政策。",errorCorrection:"正确。全书速记第154题明确对比了宏观审慎监管与微观审慎监管在内容上的区别。"},{id:30,chapterId:11,recitationQuestionId:157,isCorrect:!0,points:1,statement:"中央银行对危机银行的政策选择顺序是先拯救，无力拯救再采取退出市场安排，拯救方法包括流量法和存量法。",errorCorrection:"正确。全书速记第157题明确指出了危机银行处置的政策顺序与流量法、存量法两种拯救方法。"}],Me=[{id:1,chapterId:1,totalPoints:6,question:"简述中央银行产生的客观必然性。",rubricPoints:[{point:"政府对货币财富和银行控制的需要：弥补财政亏空，建立受其直接控制的银行",score:1.2},{point:"统一银行券发行的需要：克服分散发券导致的不能兑现挤兑与流通受限",score:1.2},{point:"信用集中的需要：缓解商业银行资金周转不灵与兑现困难",score:1.2},{point:"建立票据中心的需要：设立统一票据清算机构协调票据交换与债权债务关系",score:1.2},{point:"统一金融管理的需要：制定金融政策和管理条例统筹监督全国货币金融活动",score:1.2}],sampleAnswer:"中央银行的产生是商品经济和银行业发展的客观必然要求，主要体现在五个方面：1. 政府对货币财富和银行控制的需要（弥补财政亏空）；2. 统一银行券发行的需要（避免分散发券引发挤兑与流通受限）；3. 信用集中的需要（避免商业银行降低支付准备金而陷入周转不灵与兑现困难）；4. 建立票据中心的需要（由统一票据清算机构处理票据交换与债权债务关系）；5. 统一金融管理的需要（通过专门机构制定金融政策和管理条例统筹监督货币金融活动）。"},{id:2,chapterId:1,totalPoints:6,question:"简述中央银行作为“银行的银行”职能的具体表现。",rubricPoints:[{point:"集中保管存款准备金：成为商业银行的现金准备中心与存款准备金保管者",score:2},{point:"充当最后贷款人：在商业银行流动性不足时通过再贴现和贷款提供资金支持",score:2},{point:"组织全国银行间的清算：利用各银行在央行的存款准备金账户划拨资金实现清算",score:2}],sampleAnswer:"“银行的银行”职能体现在三方面：1. 集中保管商业银行的存款准备金，成为商业银行和其他存款机构的现金准备中心；2. 充当最后贷款人，在商业银行等金融机构出现流动性不足和兑现困难时提供再贴现和再贷款资金支持；3. 组织全国银行间的清算，使各银行间的债权债务通过央行存款准备金账户划拨实现高效清算。"},{id:3,chapterId:2,totalPoints:6,question:"简述中央银行对政府保持一定独立性的原因。",rubricPoints:[{point:"有利于维护货币政策的稳定性和货币政策目标的实现，避免政治性经济波动（央行与政府所处地位、行为目标及利益需求有所不同）",score:1.2},{point:"可以避免通过增加货币发行或购买国债的方式来弥补财政赤字（防止财政赤字货币化引发通货膨胀）",score:1.2},{point:"中央银行在制定和实施货币政策、履行金融监管等方面有较强的专业性和技术性（调控对象和经济手段高度技术化）",score:1.2},{point:"有利于增强政策的综合效力和稳定性（与社会公众、政府形成互补制约，对财政和商行执行通胀政策起约束作用）",score:1.2},{point:"可以保证货币政策决策与实施的统一（不受地方政府过多干预，增强宏观调控时效性与政策连贯性）",score:1.2}],sampleAnswer:"中央银行对政府保持一定独立性的原因包括五个方面：1. 有利于维护货币政策的稳定性和货币政策目标的实现，避免政治性经济波动；2. 可以避免通过增加货币发行或购买国债的方式来弥补财政赤字，防止引发通货膨胀；3. 中央银行在制定和实施货币政策、履行金融监管等方面有较强的专业性和技术性；4. 有利于增强政策的综合效力和稳定性，对政府财政和商业银行执行通货膨胀政策起到约束作用；5. 可以保证货币政策决策与实施的统一，不受地方政府过多干预，增强宏观调控时效性与政策效果。"},{id:4,chapterId:3,totalPoints:6,question:"简述中央银行业务活动应遵循的基本原则。",rubricPoints:[{point:"服从履行职责的需要与不以盈利为目标",score:2},{point:"不经营一般商业银行业务并保持资产的流动性",score:2},{point:"保持业务的公开性、主动性与一定独立性，并遵循相应法律规范",score:2}],sampleAnswer:"中央银行业务活动遵循七大基本原则：1. 服从履行职责的需要；2. 不以盈利为目标；3. 不经营一般商业银行业务；4. 保持资产的流动性；5. 保持业务的公开性；6. 保持业务的主动性和一定的独立性；7. 业务活动须遵循相应的法律规范。"},{id:5,chapterId:4,totalPoints:6,question:"简述中央银行存款业务与一般商业银行存款业务的区别（特点）。",rubricPoints:[{point:"存款的强制性：遵循金融法规，存款数量和利率由央行确定（商业银行为存款自愿、取款自由）",score:1.5},{point:"存款用途及目标的特殊性：出于宏观调控和监管需要（商业银行为扩大资金来源争取盈利）",score:1.5},{point:"存款人的特定性：收存商业银行、非银行金融机构、政府及特定部门存款（不面向普通居民和企业）",score:1.5},{point:"与存款当事人关系的特殊性：除经济关系外还有管理者与被管理者的关系",score:1.5}],sampleAnswer:"中央银行存款业务具有四个显著特点：1. 存款具有强制性，存款数量和利率由央行依法确定；2. 存款用途及目标在于宏观调控和履行监管职能，而非追逐利润；3. 存款人特定，主要为商业银行、非银行金融机构、政府部门及特定部门；4. 与存款当事人之间不仅存在经济关系，还存在管理者与被管理者的关系。"},{id:6,chapterId:4,totalPoints:6,question:"简述中央银行组织货币发行业务应遵循的三大原则。",rubricPoints:[{point:"集中统一发行原则：货币印制权和发行权集中于中央银行，中国人民银行是国务院授权的唯一发行货币机关",score:2},{point:"经济发行原则：根据国民经济发展的客观需要增加现金流通量，不允许财政部门透支或直接购买政府债券",score:2},{point:"计划发行原则：人民银行总行制定发行计划（总限额），报经国务院批准后核定各省市限额组织实施",score:2}],sampleAnswer:"我国中央银行的货币发行坚持三大原则：1. 集中统一发行原则，人民币的印制权和发行权集中于中国人民银行，由国务院授权唯一发行；2. 经济发行原则，根据国民经济发展的客观需要投放货币，以商品物资作保证，不允许财政部门透支或直接向社会公众投放现金；3. 计划发行原则，由中国人民银行总行制定发行计划（总限额），报经国务院批准后与各商业银行总行协商核定各省区市发行限额并组织实施。"},{id:7,chapterId:5,totalPoints:6,question:"简述再贴现和贷款业务对中央银行的重要性。",rubricPoints:[{point:"履行“最后贷款人”职能的重要手段：在金融机构周转不灵或兑现困难时提供资金融通支持",score:2},{point:"提供基础货币的重要渠道：是商业银行创造存款货币的源头",score:2},{point:"再贴现利率是调控货币供应量的重要工具：通过改变资金价格调节信贷规模与市场利率",score:2}],sampleAnswer:"再贴现和贷款业务的重要性体现在三点：1. 是中央银行履行“最后贷款人”职能的重要手段，可在银行出现流动性困难时提供最后解决手段；2. 是中央银行提供基础货币的重要渠道，掌握着商业银行创造存款货币的源头；3. 再贴现利率是调控货币供应量的重要工具，可通过影响商业银行融资成本来调节信贷规模与社会货币量。"},{id:8,chapterId:5,totalPoints:8,question:"试比较中央银行证券买卖业务与贷款业务的相同点与不同点。",rubricPoints:[{point:"相同点（3分）：融资效果相同（买入扩大资产/负债等同放贷，卖出等同收回）；对货币供应量影响相同（均通过货币乘数引起多倍扩张或收缩）；均是央行可直接控制的货币调控工具",score:3},{point:"不同点——流动性与收益（2.5分）：证券买卖可随时进行且可逆向修正，流动性强于有期限约定的贷款；贷款获利息收入，未到期证券买卖可获价差收益",score:2.5},{point:"不同点——依据与环境要求（2.5分）：证券买卖以证券质量为依据，需发达的有价证券市场为前提；贷款以商业银行信用或抵押物为依据，对金融环境要求较低",score:2.5}],sampleAnswer:`（一）相同点：1. 融资效果相同，买入证券相当于发放贷款，卖出证券相当于收回贷款；2. 对货币供应量影响相同，均通过货币乘数引起多倍扩张或收缩；3. 都是中央银行可直接控制的货币政策调控工具。
（二）不同点：1. 资金流动性不同，证券买卖可随时逆向操作，流动性强于贷款；2. 收益不同，贷款获取利息收入，未到期证券买卖获取价差收益；3. 依据不同，证券买卖依据证券质量，贷款依据银行信用或抵押物质量；4. 对经济金融环境要求不同，证券买卖需要较为发达的有价证券市场，贷款业务对环境要求较低。`},{id:9,chapterId:5,totalPoints:6,question:"简述中央银行保管和经营黄金外汇储备的目的和意义。",rubricPoints:[{point:"最初目的与储备职能：应付银行券兑现，演变为国际支付手段准备金及对外经济实力象征",score:1.5},{point:"稳定币值：国内商品供应不足时进口商品或出售黄金外汇回笼货币、平抑物价",score:1.5},{point:"稳定汇率：在浮动汇率制下通过买卖黄金外汇将汇率维持在合理水平",score:1.5},{point:"调节国际收支：逆差时动用储备补足外汇不足，顺差充足时清偿外债",score:1.5}],sampleAnswer:"中央银行保管和经营黄金外汇储备的目的与意义包括：1. 充当国际支付手段的准备金与一国对外经济交往实力的象征；2. 稳定币值，必要时通过进口或抛售黄金外汇回笼货币以平抑物价；3. 稳定汇率，在浮动汇率制下买卖黄金外汇使本币汇率维持在合理水平；4. 调节国际收支，在逆差时弥补外汇缺口，顺差充足时清偿外债。"},{id:10,chapterId:6,totalPoints:6,question:"简述中央银行支付清算业务的重要性。",rubricPoints:[{point:"保障经济和社会生活正常运转：使同城、异地及跨国债权债务通过央行最终清偿，提高资金转移效率",score:2},{point:"对货币政策顺利实施具有重要影响：是有效开展公开市场操作的前提，增强货币市场流动性并减少在途资金",score:2},{point:"与金融稳定密切相关：支付系统安全是金融安全的前提，防范连锁违约导致清算瘫痪",score:2}],sampleAnswer:"中央银行支付清算业务的重要性体现在三方面：1. 保障经济和社会生活正常运转，金融机构在央行开立准备金账户完成最终清偿，提升资金转移效率；2. 支撑货币政策顺利实施，为公开市场操作提供灵活高效的清算机制，增强货币市场流动性并减少在途资金；3. 维护金融稳定，防止单个机构违约通过支付清算网络引发连锁瘫痪。"},{id:11,chapterId:6,totalPoints:6,question:"简述净额清算系统与全额清算系统的基本原理及各自优缺点。",rubricPoints:[{point:"净额清算系统原理及优缺点：在营业日终将收付转账总额相减得出净头寸划转；优点是批量处理大大减少支付绝对量，弊端是存在日间信贷的信用、流动性风险隐患及法律风险",score:3},{point:"全额清算系统原理及优缺点：对每笔转账业务一一对应结算（含实时全额RTGS）；优点是减少信用与流动性风险、限制系统风险，弊端是对发起行清偿能力与日间流动性成本要求高",score:3}],sampleAnswer:`1. 净额清算系统在营业日结束时将收付转账总额轧差得出净结算头寸划转，优点是批量处理、大大减少必须支付的绝对量，弊端是净债权行向净债务行提供日间信贷产生信用与流动性风险隐患及轧差被作废的法律风险。
2. 全额清算系统对每笔转账一一对应结算（含实时全额RTGS），优势是消除交易作废可能、显著减少信用和流动性风险并限制系统风险，弊端是对发起行清偿能力要求严格、参与者保持当日流动性的成本较高。`},{id:12,chapterId:7,totalPoints:8,question:"试述货币供给量与利率不能同时作为货币政策中介指标的原因及选择原则。",rubricPoints:[{point:"不能同时作为中介指标的原因（4分）：二者不具有严格一一对应关系；盯住货币供给总量时货币需求曲线位移会导致利率剧烈波动；盯住利率目标时央行为维持利率必须在公开市场买卖债券，导致货币供给总量波动",score:4},{point:"维度的比较（2分）：可测性上名义利率较快且准确但预期实际利率难计量；可控性上央行对货币总量有一定控制力但不能完全控制实际利率",score:2},{point:"现实选择原则（2分）：以抑制通货膨胀为主要任务时常选货币供应量；以经济增长为主要目标时常选利率",score:2}],sampleAnswer:`1. 不能同时作为中介指标的原因：货币供给量与利率之间不存在严格的一一对应关系。当货币需求曲线发生意外位移时，若央行盯住货币供给总量目标，利率必将剧烈波动；若央行盯住利率目标，为维持利率水平必须在公开市场买卖债券，从而导致货币供给总量发生波动。
2. 比较与选择：名义利率可测性较快且准确，但预期实际利率难以计量和控制；货币供给量需多次修正但与政策意图联系紧密。实践中，当以抑制通货膨胀为主要任务时，往往选择货币供应量为中介指标；当通胀不是主要矛盾、以经济增长为主要目标时，往往选择利率为中介指标。`},{id:13,chapterId:7,totalPoints:6,question:"简述选择货币政策中介指标和操作指标的四大标准。",rubricPoints:[{point:"相关性：中介指标须与最终目标密切相关，操作指标须与中介指标密切相关",score:1.5},{point:"可测性：央行能迅速获取准确数据，定义明确便于观察、分析与监测",score:1.5},{point:"可控性：必须是央行能够应用货币政策工具对其进行有效控制的金融指标",score:1.5},{point:"抗干扰性：能较准确反映货币政策效果，较少受外来因素干扰",score:1.5}],sampleAnswer:"选择货币政策中介指标和操作指标必须符合四大标准：1. 相关性，指标变动必须对最终目标或中介指标产生可预测的影响；2. 可测性，央行能迅速获取准确数据并比最终目标更快发出信号；3. 可控性，央行能够通过货币政策工具对其进行有效控制；4. 抗干扰性，能够准确反映货币政策效果并较少受外来因素干扰。"},{id:14,chapterId:8,totalPoints:8,question:"试述公开市场业务的五大优点及两大局限性。",rubricPoints:[{point:"五大优点（5分）：主动权完全在中央银行；灵活精巧，避免猛烈冲击；具有较强的伸缩性与连续性；具有极强的可逆转性；可迅速地操作",score:5},{point:"两大局限性（3分）：操作细微技术性强，政策意图的告示作用较弱；需要以较为发达的有价证券市场为前提",score:3}],sampleAnswer:`（一）五大优点：1. 操作规模完全受央行控制，主动权完全在中央银行；2. 灵活精巧，可用较小规模准确达到目标，避免猛烈冲击；3. 具有较强的伸缩性与连续性，适合日常性调节；4. 具有极强的可逆转性，发现偏差可立即逆向操作纠正；5. 可迅速执行指令，操作敏捷。
（二）两大局限性：1. 公开市场操作细微且技术性强，不如再贴现政策那样具有明显的告示作用；2. 需要以较为发达的有价证券市场为前提，市场发育不足或交易工具太少会制约政策效果。`},{id:15,chapterId:8,totalPoints:6,question:"简述中国人民银行创设的四类新型流动性借贷便利工具（SLF、MLF、PSL、TMLF）的主要功能。",rubricPoints:[{point:"常备借贷便利（SLF）：金融机构主动发起、“一对一”交易，满足政策性银行和全国性商行1、3个月大额流动性需求",score:1.5},{point:"中期借贷便利（MLF）：2014年9月创设，3/6/12个月中短期抵押贷款，提供中期基础货币",score:1.5},{point:"抵押补充贷款（PSL）：对政策性金融机构发放质押贷款，支持重点领域、薄弱环节和社会事业长期大额融资",score:1.5},{point:"定向中期常备借贷便利（TMLF）：向符合要求金融机构提供长期稳定流动性支持，支持小微和民营企业融资，期限最长可达三年",score:1.5}],sampleAnswer:`1. 常备借贷便利（SLF）：由金融机构主动发起、“一对一”交易，满足政策性银行和全国性商业银行1个月和3个月的大额流动性需求；
2. 中期借贷便利（MLF）：提供3个月、6个月和12个月中期基础货币，补充完善SLF期限结构；
3. 抵押补充贷款（PSL）：对政策性金融机构发放质押贷款，支持国民经济重点领域、薄弱环节和社会事业长期大额融资；
4. 定向中期常备借贷便利（TMLF）：向符合宏观审慎及支持中小民营企业融资要求的金融机构提供长期稳定流动性支持，续作后最长可达三年。`},{id:16,chapterId:9,totalPoints:8,question:"试述货币政策传导机制的信用渠道论（银行贷款渠道与资产负债表渠道）及货币政策时滞构成。",rubricPoints:[{point:"信用渠道论（4分）：银行贷款渠道强调货币政策改变银行准备金头寸影响贷款供给与投资产出；资产负债表渠道分企业（改变净资产水平放大政策影响）与居民（流动性效应渠道减少耐用消费品支出）",score:4},{point:"内部时滞（2分）：央行制定和操作货币政策所需时间，包括认识时滞与决策时滞",score:2},{point:"外部时滞（2分）：从央行执行政策到对经济产生作用的时间，包括操作时滞与市场时滞",score:2}],sampleAnswer:`（一）信用渠道论（伯南克和格特勒）：1. 银行贷款渠道，货币政策改变商业银行在央行的准备金头寸，引起银行调整利率和资产负债表构成，进而影响投资与产出；2. 资产负债表渠道，包括企业资产负债表渠道（政策改变非货币资产价格和利率，直接改变企业净资产水平并放大政策效应）和居民资产负债表渠道（紧缩政策使银行信贷下降，迫使无其他融资渠道的消费者减少耐用消费品支出）。
（二）货币政策时滞构成：1. 内部时滞，分为认识时滞和决策时滞；2. 外部时滞，分为操作时滞和市场时滞。`},{id:17,chapterId:9,totalPoints:6,question:"简述国际货币政策协调的必要性、主要内容与作用。",rubricPoints:[{point:"必要性：经济全球化和国际金融化下，需要政府间协调机制以克服“囚徒困境”，解决国际因素对本国政策制定的困扰",score:2},{point:"手段与内容：核心是汇率政策协调与利率政策协调（依据利率平价理论，两国利率相对变化影响汇率）",score:2},{point:"作用：保持汇率稳定、促进国际贸易与资本流动、实现国际收支平衡，稳定国际金融市场并加强危机管理",score:2}],sampleAnswer:`1. 必要性：随着经济全球化和国际金融化发展，各国央行需采取政府间协调机制以克服国际经济竞争中的“囚徒困境”。
2. 内容：主要包括汇率政策协调和利率政策协调。
3. 作用：有助于保持汇率稳定、促进国际贸易与资本流动、实现国际收支平衡，同时稳定国际金融市场并加强金融危机管理。`},{id:18,chapterId:10,totalPoints:6,question:"简述金融危机的四大类型及其三大特点。",rubricPoints:[{point:"四大类型（4分）：货币危机（国际收支危机）、银行业危机、外国债务危机（外债危机）、系统性金融危机（全面金融危机）",score:4},{point:"三大特点（2分）：综合性（多领域危机同时爆发）、传染性（明显的多米诺骨牌效应）、破坏性（严重冲击金融体系与经济社会）",score:2}],sampleAnswer:`（一）IMF将金融危机分为四大类型：1. 货币危机（汇率受投机性袭击持续贬值或迫使当局消耗储备、大幅加息）；2. 银行业危机（银行不能按期偿付债务或迫使政府大规模援助，并可能波及全行业）；3. 外国债务危机（支付系统混乱导致不能按期偿付外债并被迫暂缓偿债）；4. 系统性金融危机（主要金融领域均出现严重混乱）。
（二）金融危机具有三大特点：综合性、传染性（多米诺骨牌效应）和破坏性。`},{id:19,chapterId:11,totalPoints:6,question:"简述金融监管的六大基本原则。",rubricPoints:[{point:"监管主体的独立性原则与依法监管原则",score:2},{point:"适度竞争原则与自我约束原则",score:2},{point:"安全、稳健与促进创新相结合原则以及提高监管效率原则",score:2}],sampleAnswer:"金融监管必须遵循六大基本原则：1. 监管主体的独立性原则（享有操作自主权和充分资源）；2. 适度竞争的原则（促进市场机制作用发挥）；3. 依法监管的原则（监管依法进行且所有被监管机构概莫能外）；4. 自我约束的原则；5. 安全、稳健与促进创新相结合的原则；6. 提高监管效率的原则（以最低成本达到监管目的）。"},{id:20,chapterId:11,totalPoints:8,question:"试述宏观审慎监管与微观审慎监管的区别与联系。",rubricPoints:[{point:"目的不同（2分）：宏观审慎旨在防范系统性风险、维护金融体系整体稳定；微观审慎旨在控制单个金融机构或行业风险、保护消费者利益",score:2},{point:"内容不同（2分）：宏观审慎侧重整体行为与相互影响力、风险内生、相关性重要、自上而下制定政策；微观审慎侧重个体行为与风险偏好、风险外生、相关性无关、自下而上制定政策",score:2},{point:"监管对象不同（2分）：宏观审慎重点关注系统重要性金融机构、逆周期调控及整体市场趋势；微观审慎关注具体机构合规与风险暴露",score:2},{point:"内在联系（2分）：良好的宏观与微观监管可以相互促进，增强彼此的监管效果",score:2}],sampleAnswer:`1. 目的不同：宏观审慎监管旨在防范系统性风险、维护金融体系整体稳定；微观审慎监管旨在控制单个金融机构或行业风险、保护消费者利益。
2. 内容不同：宏观审慎侧重金融机构整体行为及相互影响力，认为风险内生、相关性重要，自上而下制定政策；微观审慎侧重个体行为和风险偏好，视风险为外生且相关性无关，自下而上制定政策。
3. 监管对象不同：宏观审慎重点关注系统重要性金融机构行为、逆周期调控及与宏观经济相互影响；微观审慎关注具体机构的合规与风险暴露。
4. 联系：良好的宏观与微观监管相互促进，共同增强监管效果。`}],Ae=[{id:1,chapterId:7,chapterRange:"第七章",topicCategory:"monetary-policy",title:"货币政策最终目标之间的权衡与目标体系构建",totalPoints:20,question:"试结合货币政策五大最终目标之间的冲突与统一关系，论述中央银行应如何权衡最终目标并选择中介指标与操作指标。",rubric:{theory:{desc:"阐明货币政策含义、五大最终目标（稳定币值、经济增长、充分就业、国际收支平衡、金融稳定）及目标体系三层次结构。",score:4},mechanism:{desc:"深入剖析稳定币值与经济增长/充分就业的短期与长期关系（菲利普斯曲线、奥肯定律），以及稳定币值与国际收支平衡在三种失衡组合下的协调与冲突。",score:8},practice:{desc:"结合三大理论主张（单目标、双目标、多目标）与现实权衡，论述中介指标（货币供给量与利率的比较）和操作指标（准备金与基础货币在我国的实践）的选择依据。",score:6},conclusion:{desc:"总结货币政策“政策工具→中介指标→最终目标”实施流程与以稳定币值为首要目标并动态兼顾的原则。",score:2}},sampleAnswer:`一、理论基础（4分）：货币政策是央行运用工具调节货币供给量以实现宏观经济目标的方针措施总和。其目标体系由最终目标、中介指标和操作指标三层次构成，五大最终目标包括稳定币值、经济增长、充分就业、国际收支平衡和金融稳定。
二、作用机制与目标权衡（8分）：1. 充分就业与经济增长受奥肯定律揭示总体正相关，但非劳动密集型增长模式可能存在矛盾；2. 根据菲利普斯曲线和奥肯定律，短期内通胀与经济增长及就业存在正相关，但长期过高通胀会破坏经济秩序并制约增长和就业；3. 稳定币值与国际收支平衡在“逆差+通胀”和“顺差+通缩”下无冲突，但在“逆差+通缩”下扩张政策虽促复苏却会加剧逆差。
三、现实选择与指标搭配（6分）：在单目标、双目标与多目标论的权衡中，现实中应以稳定币值为首要目标，同时根据经济高涨、萧条或国际收支失衡时期动态调整相对重点。中介指标需满足相关性、可测性、可控性和抗干扰性四大标准；货币供给量与利率不能同时作为中介指标，抑制通胀时常选货币供应量，促进增长时常选利率。操作指标中，基础货币被称为“强力货币”和“高能货币”，是我国现行货币政策操作指标。
四、结论（2分）：央行应遵循“政策工具→中介指标→最终目标”的实施流程，保持调控的科学性与动态适应性。`},{id:2,chapterId:8,chapterRange:"第八章",topicCategory:"monetary-policy",title:"中央银行一般性、选择性及中国新型货币政策工具的协同运用",totalPoints:20,question:"试比较一般性货币政策工具的优缺点，并论述我国近年来在准备金制度、公开市场创新及新型借贷便利工具方面的改革实践。",rubric:{theory:{desc:"界定一般性货币政策工具（法定存款准备金政策、再贴现政策、公开市场业务）与选择性货币政策工具的基本内涵。",score:4},mechanism:{desc:"系统分析三大一般性工具的作用机制、各自优势与局限性（如准备金政策震撼大、再贴现主动权不完全在央行、公开市场灵活可逆但告示作用弱）。",score:8},practice:{desc:"详述我国货币政策工具改革：定向降准、再贴现改革、SLO与CBS、以及SLF/MLF/PSL/TMLF等新型借贷便利工具的定位与配合。",score:6},conclusion:{desc:"总结总量工具与结构性工具协同配合对提升宏观调控精准性的意义。",score:2}},sampleAnswer:`一、理论基础（4分）：一般性货币政策工具针对全社会信用总量调节，包括法定存款准备金政策、再贴现政策和公开市场业务；选择性货币政策工具（消费者信用控制、证券市场信用控制、不动产信用控制、优惠利率）则针对特定资金流向与用途。
二、一般性工具机制与优缺点对比（8分）：1. 法定存款准备金政策通过影响货币乘数调节货币供给，对所有银行平等且力度大，但轻微变动易引发经济强烈振荡且可能使超额准备低的银行陷入流动性困境；2. 再贴现政策通过再贴现率和资格规定发挥“最后贷款人”与告示作用，但告示效应具有相对性、利差受市场利率影响且主动权不完全在央行；3. 公开市场业务主动权完全在央行、灵活精巧、伸缩连续性强且可逆转，但告示作用较弱且需发达证券市场。
三、我国工具改革实践（6分）：1. 法定存款准备金由“普遍降准”转向“定向降准”，引导信贷投向；2. 扩大再贴现对象范围并优先支持涉农及中小金融机构票据；3. 创设SLO熨平临时性流动性波动，创设CBS以央行票据互换支持银行永续债流动性；4. 构建SLF、MLF、PSL、TMLF等新型流动性借贷便利体系，补足不同期限结构流动性需求并定向支持重点领域与小微民营企业。
四、结论（2分）：应推动一般性总量工具与结构性、创新型工具协调配合，提高货币政策调控的前瞻性与有效性。`},{id:3,chapterId:9,chapterRange:"第九章",topicCategory:"monetary-policy",title:"货币政策传导机制、有效性制约因素及“双支柱”调控框架",totalPoints:20,question:"试述货币政策传导的主要理论渠道、现实制约因素（体制、市场、信息与时滞），并论述我国建立“双支柱”调控框架的重要意义。",rubric:{theory:{desc:"梳理凯恩斯利率传导（MS→R→I→E→Y）、后凯恩斯资产价格传导（托宾q与米什金）、货币学派（MS→A→C→I→P→Y）及信用渠道论。",score:4},mechanism:{desc:"深入分析传导受阻因素（凯恩斯陷阱、投资利率弹性低）以及体制、市场发育、信息不对称与内外时滞对货币政策有效性的影响。",score:8},practice:{desc:"阐述我国货币政策与财政政策四种配合模式（双紧、双松、一松一紧），并详述货币政策与宏观审慎政策“双支柱”框架的关系与机制建设。",score:6},conclusion:{desc:"总结疏通传导机制与强化双支柱协同的政策结论。",score:2}},sampleAnswer:`一、传导机制理论（4分）：凯恩斯强调 MS→R→I→E→Y 的利率渠道；后凯恩斯学派补充了托宾q理论与米什金耐用消费品资产价格渠道；货币学派基于持久性收入提出 MS→A→C→I→P→Y 链条；信用渠道论则强调银行贷款渠道与企业、居民资产负债表渠道。
二、制约因素与时滞分析（8分）：传导受阻源于“凯恩斯陷阱”或投资利率弹性极低。现实中，市场经济下的机构与企业预算硬约束、完整规范的市场体系以及充分的信息披露有助于政策传导；反之，体制扭曲、市场分割与信息不对称会削弱传导效率。同时，内部时滞（认识、决策）和外部时滞（操作、市场，对GDP最高影响通常滞后1～2年）要求央行具备前瞻性。
三、政策配合与“双支柱”实践（6分）：货币与财政政策可通过“双紧”“双松”快速发力，或通过“一松一紧”实现较稳定调控。更重要的是，我国积极探索货币政策与宏观审慎政策“双支柱”调控框架：货币政策侧重总量与物价稳定，宏观审慎管理针对加杠杆行为、以防范系统性风险和维护金融稳定为目标，在“事前—事中—事后”环节实现数据共享与模型互补。
四、结论（2分）：只有不断完善市场体制、精准把握时滞并深化双支柱协调，才能提升宏观调控的整体效能。`},{id:4,chapterId:10,chapterRange:"第十章",topicCategory:"financial-regulation",title:"金融危机的形成机制、经典理论及防范化解治理体系",totalPoints:20,question:"试结合金融脆弱性理论及货币危机、银行业危机、外债危机理论，论述中央银行应如何构建金融危机的防范、化解与中长期治理体系。",rubric:{theory:{desc:"阐明金融危机四大类型（货币危机、银行业危机、外债危机、系统性金融危机）、三大特点及金融脆弱性形成逻辑。",score:4},mechanism:{desc:"梳理四代货币危机理论、银行业危机四大假说（弗里德曼、明斯基金融不稳定假说、D-D挤兑模型、托宾银行体系关键论）及外债危机三大假说。",score:8},practice:{desc:"系统论述危机“事前防范”（预警模型、国际协调、汇率与储备、IMF八类资本流入对策）、“事中化解”（稳市场信心、向金融机构注资及购买有毒资产）与“事后治理”（重组金融机构、量化宽松等扶持实体经济）。",score:6},conclusion:{desc:"总结全流程危机治理对维护金融稳定与经济安全的重要性。",score:2}},sampleAnswer:`一、概念与特征（4分）：金融危机指信用基础破坏导致的金融体系动荡，分为货币危机、银行业危机、外国债务危机和系统性金融危机四类，具有综合性、传染性（多米诺骨牌效应）和破坏性。金融脆弱性理论指出繁荣期宽松信贷和高风险借款比重上升为危机埋下伏笔。
二、危机理论机制（8分）：1. 四代货币危机理论依次从财政赤字与固定汇率矛盾（克鲁格曼）、维持汇率成本权衡（奥布斯特费尔德）、企业财务恶化（麦金农和克鲁格曼）和企业外债资产负债表效应（克鲁格曼和阿吉翁）解释危机；2. 银行业危机包括货币政策失误论、明斯基将借款者分为套期保值型/投机型/蓬齐型的金融不稳定假说、D-D银行挤兑模型及托宾银行体系关键论；3. 外债危机包括费雪债务—通货紧缩论、苏特综合性国际债务论与沃尔芬森资产价格下降论。
三、全流程治理措施（6分）：1. 防范措施：建立预警模型捕捉超周期信号，加强国际金融协调，选择适宜汇率制度并维持适当外汇储备，落实IMF应对资本流入八类对策；2. 化解举措：首要稳定市场局势与存款人信心（稳股市、干预汇市、全面担保），并通过非股权救助、股权注资及购买“有毒资产”向机构注资；3. 中长期治理：对金融机构整顿接管重组以优化金融系统，同时实施适度货币政策刺激实体经济复苏。
四、结论（2分）：唯有构建事前预警、事中果断救助与事后制度重构相结合的治理体系，方能筑牢金融安全防线。`},{id:5,chapterId:10,chapterRange:"第十章",topicCategory:"financial-regulation",title:"金融稳定与金融安全的内涵、评估体系及联动维护机制",totalPoints:20,question:"试论述金融稳定的三大特征与两大目标，并结合金融稳定评估指标体系及FSAP规划，分析如何通过政策、工具与制度三方联动维护金融稳定与安全。",rubric:{theory:{desc:"阐明金融稳定（央行2005年报告定义）与金融安全的内涵，以及金融稳定、金融安全、经济安全与国家安全的层次关系。",score:4},mechanism:{desc:"深入解析金融稳定的综合性、全局性与动态性三大特征，以及两大核心目标和评估指标体系（宏观经济指标与机构内部五大类27个定量指标、4个定性指标）。",score:8},practice:{desc:"结合IMF与世界银行联合推出的FSAP（含FSIs 14项核心指标与26项鼓励指标及压力测试），论述金融政策、金融工具与金融制度三方联动维护机制。",score:6},conclusion:{desc:"总结维护金融稳定作为央行核心职责与经济稳定前提的战略意义。",score:2}},sampleAnswer:`一、内涵与层次关系（4分）：中国人民银行2005年《中国金融稳定报告》将金融稳定定义为金融体系能够有效发挥其关键功能的状态。金融稳定是金融安全的基础，金融安全是经济安全的核心，经济安全是国家安全的必要组成。
二、特征、目标与评估体系（8分）：金融稳定具有综合性（需货币、财政与监管政策综合施策）、全局性（立足国内国际全市场）与动态性（随经济发展变化）三大特征；其两大目标是保障市场与机构稳定运行、防范系统性风险，以及保障金融安全、优化金融结构、提高资源配置效率。评估指标体系由宏观经济指标（定量与定性）和金融机构内部指标（资本充足性、资产负债、资产安全性、盈利性、可持续发展能力五大类27个定量指标及内部管理4个定性指标）构成。
三、FSAP与三方联动维护（6分）：国际上通过1999年5月IMF和世行推出的FSAP（含FSIs 14项核心指标、26项鼓励指标及压力测试）评估稳健性。维护金融稳定需三方联动：1. 金融政策（政治保障为基础，货币政策与财政政策为工具）；2. 金融工具（利率调控、汇率调控、资本账户管理、流动性管理营造良好运行环境）；3. 金融制度（支付体系、信用体系、金融法治体系、投资者保护制度营造良好生态环境）。
四、结论（2分）：必须坚持政策、工具与制度协同发力，提升风险监测与压力测试能力，守住金融稳定与安全底线。`},{id:6,chapterId:11,chapterRange:"第十一章",topicCategory:"financial-regulation",title:"宏观审慎监管制度框架、工具体系及中国金融监管体制演进",totalPoints:20,question:"试述宏观审慎监管的必要性及其与微观审慎监管的异同，并结合时间维度与空间维度政策工具，分析中国现行金融监管体系的演进与面临的挑战。",rubric:{theory:{desc:"阐明宏观审慎监管的概念、两大国际构建理念及金融监管的六大必要性与适度性理论。",score:4},mechanism:{desc:"深入剖析宏观审慎监管的必要性（顺周期性、“大而不倒”、普遍关联性、稳健标准局限、集体非理性、激励机制不合理），对比宏微观审慎在目的、内容和对象上的区别，并拆解时间与空间维度工具。",score:8},practice:{desc:"梳理中国金融监管体制三大演进阶段与现行五大机构构成（中央金融委、中央金融工委、人民银行、金融监管总局、证监会），分析全球化、全面开放、金控扩张、市场化处置与数字金融五大挑战。",score:6},conclusion:{desc:"总结深化宏观审慎与微观审慎协同、完善现代金融监管体系的方向。",score:2}},sampleAnswer:`一、概念与构建理念（4分）：宏观审慎监管是将金融体系整体作为监管对象以减少金融动荡经济成本的监管模式，存在保留微观指标辅助宏观指标以及宏微观融为一体两种构建理念。
二、必要性、宏微观对比及工具体系（8分）：1. 必要性源于顺周期性、“大而不倒”、机构普遍关联性、巴塞尔I/II标准局限、集体非理性及不合理激励机制；2. 与微观审慎相比，宏观审慎以防范系统性风险为目的、关注整体与内生风险、自上而下制定政策；3. 时间维度工具包括逆周期资本缓冲、流动性覆盖率、杠杆率、拨备标准和逆周期抵质押品价值比率；空间维度工具包括资本充足率普遍标准（《巴塞尔协议III》将普通股比例提至4.5%）、系统重要性银行1%附加资本、改革评级公司、衍生品集中清算、影子银行监管及或有资本安排。
三、中国监管体制演进与挑战（6分）：中国监管体制历经大一统与央行统一监管阶段、“分业经营、分业监管”阶段，以及2017年成立金稳委、2018年组建银保监会、2023年3月组建国家金融监督管理总局的改革重构阶段，形成中央金融委、中央金融工委、人民银行、国家金融监管总局和证监会五大机构构成的现行体系。当前仍面临金融全球化、市场全面开放、金控集团监管有效性、市场化风险处置机制与数字金融监管不足五大挑战。
四、结论（2分）：应强化宏观审慎与微观审慎协同，补齐监管短板，全面提升金融监管效能。`}],jn=r.lazy(()=>Ve(()=>import("./MockExamCanvas-C10zL4cT.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>({default:t.MockExamCanvas}))),Nn=r.lazy(()=>Ve(()=>import("./PracticeCanvas-n70glxcn.js"),__vite__mapDeps([2,1]),import.meta.url).then(t=>({default:t.PracticeCanvas}))),Mn=r.lazy(()=>Ve(()=>import("./SyncModal-DQQRplb2.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(t=>({default:t.SyncModal})));function An(){const{state:t,toggleMemorized:s,toggleStarred:d,toggleHomeworkCompleted:I,toggleTermMemorized:h,toggleTermStarred:g,toggleChoiceMemorized:o,toggleChoiceStarred:_,toggleTfMemorized:k,toggleTfStarred:L,toggleFillMemorized:u,toggleFillStarred:v,toggleShortMemorized:M,toggleShortStarred:Q,toggleEssayMemorized:m,toggleEssayStarred:C,addExamRecord:p,importState:y}=Sn(),l=r.useMemo(()=>{try{const a=localStorage.getItem("cb_nav_state");if(a)return JSON.parse(a)}catch{}return{}},[]),[b,A]=r.useState(l.currentMode||"recitation"),[n,i]=r.useState(l.selectedChapterId??null),[x,c]=r.useState(""),[F,E]=r.useState("all"),[$,B]=r.useState("all"),[z,ee]=r.useState(l.practiceTab||"terms"),[Y,G]=r.useState(l.recitationIndex||0),[S,T]=r.useState(l.homeworkIndex||0),[N,D]=r.useState(l.practiceTermIndex||0),[X,w]=r.useState(l.practiceChoiceIndex||0),[j,V]=r.useState(l.practiceTfIndex||0),[te,he]=r.useState(l.practiceFillIndex||0),[oe,_e]=r.useState(l.practiceShortIndex||0),[se,ae]=r.useState(l.practiceEssayIndex||0);r.useEffect(()=>{try{localStorage.setItem("cb_nav_state",JSON.stringify({currentMode:b,selectedChapterId:n,practiceTab:z,recitationIndex:Y,homeworkIndex:S,practiceTermIndex:N,practiceChoiceIndex:X,practiceTfIndex:j,practiceFillIndex:te,practiceShortIndex:oe,practiceEssayIndex:se}))}catch{}},[b,n,z,Y,S,N,X,j,te,oe,se]);const[ye,Fe]=r.useState(!1),[ue,Ce]=r.useState(!1),[le,ge]=r.useState(!1),[ce,Ee]=r.useState(()=>{try{return localStorage.getItem("cb_left_sidebar_collapsed")==="true"}catch{return!1}}),[De,Oe]=r.useState(()=>{try{return localStorage.getItem("cb_right_sidebar_collapsed")==="true"}catch{return!1}}),[Re,we]=r.useState(()=>{try{return localStorage.getItem("cb_paper_theme")||"ivory"}catch{return"ivory"}}),[de,Ke]=r.useState(()=>{try{return localStorage.getItem("cb_font_theme")||"system"}catch{return"system"}}),[f,P]=r.useState(()=>{try{const a=Number(localStorage.getItem("cb_font_size"));if(Number.isFinite(a)&&a>=13&&a<=22)return a}catch{}return 16}),ne=r.useCallback(a=>{we(a);try{localStorage.setItem("cb_paper_theme",a)}catch{}},[]),O=r.useCallback(a=>{Ke(a);try{localStorage.setItem("cb_font_theme",a)}catch{}},[]),H=r.useCallback(a=>{const R=Math.min(22,Math.max(13,Math.round(a)));P(R);try{localStorage.setItem("cb_font_size",String(R))}catch{}},[]);r.useEffect(()=>{if(!le)return;const a=R=>{R.key==="Escape"&&ge(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[le]);const J=r.useCallback(()=>{Ee(a=>{const R=!a;try{localStorage.setItem("cb_left_sidebar_collapsed",String(R))}catch{}return R})},[]),q=r.useCallback(()=>{Oe(a=>{const R=!a;try{localStorage.setItem("cb_right_sidebar_collapsed",String(R))}catch{}return R})},[]),W=r.useMemo(()=>fe.filter(a=>{if(n&&a.chapterId!==n)return!1;if(x.trim()){const R=x.toLowerCase(),U=a.title.toLowerCase().includes(R),K=a.content.toLowerCase().includes(R);if(!U&&!K)return!1}return!(F==="memorized"&&!t.memorized.includes(a.id)||F==="unmemorized"&&t.memorized.includes(a.id)||F==="starred"&&!t.starred.includes(a.id))}),[n,x,F,t.memorized,t.starred]),pe=r.useMemo(()=>ke.filter(a=>{if(n&&a.chapterId!==n)return!1;if(x.trim()){const R=x.toLowerCase(),U=a.question.toLowerCase().includes(R),K=a.answer.toLowerCase().includes(R);if(!U&&!K)return!1}return!($==="completed"&&!t.homeworkCompleted.includes(a.id)||$==="uncompleted"&&t.homeworkCompleted.includes(a.id)||$==="starred"&&!t.starred.includes(a.id))}),[n,x,$,t.homeworkCompleted,t.starred]),me=r.useMemo(()=>fe.filter(a=>!n||a.chapterId===n),[n]),_t=me.length,yt=r.useMemo(()=>me.filter(a=>t.memorized.includes(a.id)).length,[me,t.memorized]),Ct=r.useMemo(()=>me.filter(a=>t.starred.includes(a.id)).length,[me,t.starred]),Te=r.useMemo(()=>ke.filter(a=>!n||a.chapterId===n),[n]),wt=Te.length,Tt=r.useMemo(()=>Te.filter(a=>t.homeworkCompleted.includes(a.id)).length,[Te,t.homeworkCompleted]),St=r.useMemo(()=>Te.filter(a=>t.starred.includes(a.id)).length,[Te,t.starred]),vt=r.useCallback(a=>{E(a),G(0)},[]),jt=r.useCallback(a=>{B(a),T(0)},[]),qe=r.useCallback(a=>{i(a),G(0),T(0)},[]),Nt=r.useCallback(a=>{const R=W.findIndex(K=>K.id===a);if(R!==-1){G(R);return}const U=fe.findIndex(K=>K.id===a);if(U!==-1){const K=fe[U];n&&K.chapterId!==n&&i(null),F!=="all"&&E("all"),x.trim()&&c(""),G(U)}},[W,n,F,x]),Mt=r.useCallback(a=>{const R=pe.findIndex(K=>K.id===a);if(R!==-1){T(R);return}const U=ke.findIndex(K=>K.id===a);if(U!==-1){const K=ke[U];n&&K.chapterId!==n&&i(null),$!=="all"&&B("all"),x.trim()&&c(""),T(U)}},[pe,n,$,x]),At=r.useCallback((a,R)=>{A("recitation"),i(a),E("all"),c("");const K=fe.filter(Ge=>Ge.chapterId===a).findIndex(Ge=>Ge.sectionId===R);G(K!==-1?K:0)},[]),Pt=r.useCallback(a=>{A("practice"),ee("terms");const R=be.findIndex(U=>U.id===a);R!==-1&&D(R)},[]),ze=Math.min(Math.max(0,Y),Math.max(0,W.length-1)),Le=Math.min(Math.max(0,S),Math.max(0,pe.length-1)),Z=W[ze],re=pe[Le],xe=be[N]||be[0],Ft=r.useMemo(()=>{if(b==="recitation"&&Z)return`${Z.title}
${Z.content}`;if(b==="homework"&&re)return`${re.question}
${re.answer}`;if(b==="practice"){if(z==="terms"&&xe)return`${xe.term}
${xe.definition}`;if(z==="fill"&&ve[te])return ve[te].stem;if(z==="choice"&&je[X])return je[X].stem;if(z==="truefalse"&&Ne[j])return Ne[j].statement;if(z==="short"&&Me[oe])return Me[oe].question;if(z==="essay"&&Ae[se])return Ae[se].question}return""},[b,Z,re,z,xe,te,X,j,oe,se]);r.useEffect(()=>{if(typeof window>"u")return;const a=new URLSearchParams(window.location.search),R=a.get("account"),U=a.get("sync")==="pull";R&&(Pe.setAccount(R),U&&Pe.pullFromCloud().then(K=>{K.ok&&K.found&&K.state&&y(K.state)}))},[y]);const Ze={currentMode:b==="mock-exam"?"exam":b,recitationQuestions:fe,currentRecitationQuestionId:(Z==null?void 0:Z.id)||1,onSelectRecitationQuestionId:Nt,memorizedList:t.memorized,starredList:t.starred,activeFilter:F,onSelectFilter:E,homeworkQuestions:ke,currentHomeworkQuestionId:(re==null?void 0:re.id)||1,onSelectHomeworkQuestionId:Mt,homeworkCompletedList:t.homeworkCompleted,selectedHomeworkChapter:n,onSelectHomeworkChapter:qe,terminologyList:be,currentTermId:(xe==null?void 0:xe.id)||1,onSelectTermId:a=>{const R=be.findIndex(U=>U.id===a);R!==-1&&D(R)},termMemorizedList:t.termMemorized,termStarredList:t.termStarred||[],choiceMemorizedList:t.choiceMemorized||[],choiceStarredList:t.choiceStarred||[],tfMemorizedList:t.tfMemorized||[],tfStarredList:t.tfStarred||[],fillMemorizedList:t.fillMemorized||[],fillStarredList:t.fillStarred||[],shortMemorizedList:t.shortMemorized||[],shortStarredList:t.shortStarred||[],essayMemorizedList:t.essayMemorized||[],essayStarredList:t.essayStarred||[],practiceTab:z,choiceCount:je.length,tfCount:Ne.length,fillCount:ve.length,shortCount:Me.length,essayCount:Ae.length,currentChoiceIndex:X,onSelectChoiceIndex:w,currentTfIndex:j,onSelectTfIndex:V,currentFillIndex:te,onSelectFillIndex:he,currentShortIndex:oe,onSelectShortIndex:_e,currentEssayIndex:se,onSelectEssayIndex:ae,currentChapterId:b==="homework"?(re==null?void 0:re.chapterId)||1:(Z==null?void 0:Z.chapterId)||1,currentSectionId:Z==null?void 0:Z.sectionId,currentQuestionText:Ft,onSelectSection:At,onJumpToPracticeTerm:Pt,isCollapsed:De,onToggleCollapse:q,chapters:Qe};return e.jsxs("div",{className:"min-h-screen bg-[#e7dfd0] dark:bg-[#0f0d0a] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200",children:[e.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:text-xs focus:font-bold focus:shadow-lg",children:"跳至主内容"}),e.jsx(mn,{searchQuery:x,onSearchChange:c,onOpenSync:()=>Fe(!0),onToggleMobileMenu:()=>Ce(!ue),onToggleMobileRightDrawer:()=>ge(a=>!a),isLeftCollapsed:ce,onToggleLeftCollapsed:J,isRightCollapsed:De,onToggleRightCollapsed:q,paperTheme:Re,onChangePaperTheme:ne,fontTheme:de,onChangeFontTheme:O,fontSize:f,onChangeFontSize:H,activeMode:b}),e.jsxs("div",{className:"flex-1 w-full flex items-start overflow-hidden",children:[e.jsx(xn,{currentMode:b,onSelectMode:A,chapters:Qe||[],selectedChapterId:n,onSelectChapter:qe,memorizedList:t.memorized,recitationQuestions:fe||[],homeworkCompleted:t.homeworkCompleted,homeworkQuestions:ke||[],className:`${ue?"fixed inset-y-0 left-0 z-[45] block shadow-2xl":"hidden md:flex"}`,onCloseMobile:()=>Ce(!1),isCollapsed:ue?!1:ce,onToggleCollapse:J}),ue&&e.jsx("div",{className:"fixed inset-0 bg-slate-900/40 z-[42] md:hidden backdrop-blur-sm",onClick:()=>Ce(!1)}),e.jsxs("main",{id:"main-content","data-paper":Re,"data-font":de,style:{"--reader-font-size":`${f}px`,"--reader-font-scale":String(f/16)},className:"paper-canvas flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-hidden flex flex-col",children:[b==="recitation"&&e.jsx(_n,{questions:W,currentIndex:ze,onPrev:()=>G(Math.max(0,ze-1)),onNext:()=>G(Math.min(Math.max(0,W.length-1),ze+1)),onJumpToIndex:G,memorizedList:t.memorized,starredList:t.starred,onToggleMemorized:s,onToggleStar:d,activeFilter:F,onSelectFilter:vt,totalCount:_t,memorizedCount:yt,starredCount:Ct,chapters:Qe,selectedChapterId:n,onSelectChapter:qe}),b==="homework"&&e.jsx(yn,{questions:pe,currentIndex:Le,onPrev:()=>T(Math.max(0,Le-1)),onNext:()=>T(Math.min(Math.max(0,pe.length-1),Le+1)),onJumpToIndex:T,completedList:t.homeworkCompleted,onToggleCompleted:I,starredList:t.starred,onToggleStar:d,activeFilter:$,onSelectFilter:jt,totalCount:wt,completedCount:Tt,starredCount:St,chapters:Qe,selectedChapterId:n,onSelectChapter:qe}),b==="practice"&&e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400",children:"加载中…"}),children:e.jsx(Nn,{terms:be,currentTermIndex:N,onJumpToTermIndex:D,singleChoices:je,currentChoiceIndex:X,onJumpToChoiceIndex:w,trueFalse:Ne,currentTfIndex:j,onJumpToTfIndex:V,fillIns:ve,currentFillIndex:te,onJumpToFillIndex:he,shortAnswers:Me,currentShortIndex:oe,onJumpToShortIndex:_e,essays:Ae,currentEssayIndex:se,onJumpToEssayIndex:ae,termMemorized:t.termMemorized,onToggleTermMemorized:h,termStarred:t.termStarred||[],onToggleTermStarred:g,choiceMemorized:t.choiceMemorized||[],onToggleChoiceMemorized:o,choiceStarred:t.choiceStarred||[],onToggleChoiceStarred:_,tfMemorized:t.tfMemorized||[],onToggleTfMemorized:k,tfStarred:t.tfStarred||[],onToggleTfStarred:L,fillMemorized:t.fillMemorized||[],onToggleFillMemorized:u,fillStarred:t.fillStarred||[],onToggleFillStarred:v,shortMemorized:t.shortMemorized||[],onToggleShortMemorized:M,shortStarred:t.shortStarred||[],onToggleShortStarred:Q,essayMemorized:t.essayMemorized||[],onToggleEssayMemorized:m,essayStarred:t.essayStarred||[],onToggleEssayStarred:C,activePracticeTab:z,onPracticeTabChange:ee,searchQuery:x})}),b==="mock-exam"&&e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex-1 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400",children:"加载中…"}),children:e.jsx(jn,{termsBank:be,fillInsBank:ve,singleChoicesBank:je,trueFalseBank:Ne,shortAnswersBank:Me,essaysBank:Ae,onFinishExam:p})})]}),e.jsx(ot,{...Ze,className:"hidden lg:flex"}),le&&e.jsxs("div",{className:"fixed inset-0 z-[45] lg:hidden flex justify-end",children:[e.jsx("div",{className:"fixed inset-0 z-[42] bg-slate-900/40 backdrop-blur-sm",onClick:()=>ge(!1),"aria-hidden":"true"}),e.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"题号矩阵与大纲",className:"relative z-[45] h-full max-w-full bg-white dark:bg-slate-900 shadow-2xl overscroll-contain flex",children:e.jsx(ot,{...Ze,isCollapsed:!1,onToggleCollapse:()=>ge(!1),className:"flex h-full"})})]})]}),e.jsx(r.Suspense,{fallback:ye?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm text-sm text-white",children:"加载中…"}):null,children:e.jsx(Mn,{isOpen:ye,onClose:()=>Fe(!1),state:t,onImportState:y})})]})}cn.createRoot(document.getElementById("root")).render(e.jsx(Ie.StrictMode,{children:e.jsx(An,{})}));export{gt as C,Ln as E,Dn as F,Xe as M,zn as S,En as T,Rn as a,qn as b,Qe as c,e as j,Pe as s,kt as u};
