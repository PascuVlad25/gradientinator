(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();const R={};function qe(e){R.context=e}const Ke=(e,n)=>e===n,ze=Symbol("solid-track"),se={equals:Ke};let Ne=He;const k=1,ie=2,Le={owned:null,cleanups:null,context:null,owner:null};var v=null;let W=null,m=null,C=null,O=null,he=0;function de(e,n){const t=m,o=v,l=e.length===0,s=l?Le:{owned:null,cleanups:null,context:null,owner:n===void 0?o:n},r=l?e:()=>e(()=>I(()=>ae(s)));v=s,m=null;try{return ee(r,!0)}finally{m=t,v=o}}function $(e,n){n=n?Object.assign({},se,n):se;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},o=l=>(typeof l=="function"&&(l=l(t.value)),Ee(t,l));return[Oe.bind(t),o]}function x(e,n,t){const o=me(e,n,!1,k);Z(o)}function Ae(e,n,t){Ne=Ze;const o=me(e,n,!1,k);o.user=!0,O?O.push(o):Z(o)}function Y(e,n,t){t=t?Object.assign({},se,t):se;const o=me(e,n,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=t.equals||void 0,Z(o),Oe.bind(o)}function I(e){if(m===null)return e();const n=m;m=null;try{return e()}finally{m=n}}function Qe(e){Ae(()=>I(e))}function Re(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function Te(e,n){const t=Symbol("context");return{id:t,Provider:tt(t),defaultValue:e}}function Me(e){let n;return(n=Be(v,e.id))!==void 0?n:e.defaultValue}function Xe(e){const n=Y(e),t=Y(()=>pe(n()));return t.toArray=()=>{const o=t();return Array.isArray(o)?o:o!=null?[o]:[]},t}function Oe(){const e=W;if(this.sources&&(this.state||e))if(this.state===k||e)Z(this);else{const n=C;C=null,ee(()=>ce(this),!1),C=n}if(m){const n=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(n)):(m.sources=[this],m.sourceSlots=[n]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Ee(e,n,t){let o=e.value;return(!e.comparator||!e.comparator(o,n))&&(e.value=n,e.observers&&e.observers.length&&ee(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],r=W&&W.running;r&&W.disposed.has(s),(r&&!s.tState||!r&&!s.state)&&(s.pure?C.push(s):O.push(s),s.observers&&ke(s)),r||(s.state=k)}if(C.length>1e6)throw C=[],new Error},!1)),n}function Z(e){if(!e.fn)return;ae(e);const n=v,t=m,o=he;m=v=e,Je(e,e.value,o),m=t,v=n}function Je(e,n,t){let o;try{o=e.fn(n)}catch(l){e.pure&&(e.state=k,e.owned&&e.owned.forEach(ae),e.owned=null),Ie(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ee(e,o):e.value=o,e.updatedAt=t)}function me(e,n,t,o=k,l){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:v,context:null,pure:t};return v===null||v!==Le&&(v.owned?v.owned.push(s):v.owned=[s]),s}function re(e){const n=W;if(e.state===0||n)return;if(e.state===ie||n)return ce(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)(e.state||n)&&t.push(e);for(let o=t.length-1;o>=0;o--)if(e=t[o],e.state===k||n)Z(e);else if(e.state===ie||n){const l=C;C=null,ee(()=>ce(e,t[0]),!1),C=l}}function ee(e,n){if(C)return e();let t=!1;n||(C=[]),O?t=!0:O=[],he++;try{const o=e();return Ye(t),o}catch(o){t||(O=null),C=null,Ie(o)}}function Ye(e){if(C&&(He(C),C=null),e)return;const n=O;O=null,n.length&&ee(()=>Ne(n),!1)}function He(e){for(let n=0;n<e.length;n++)re(e[n])}function Ze(e){let n,t=0;for(n=0;n<e.length;n++){const o=e[n];o.user?e[t++]=o:re(o)}for(R.context&&qe(),n=0;n<t;n++)re(e[n])}function ce(e,n){const t=W;e.state=0;for(let o=0;o<e.sources.length;o+=1){const l=e.sources[o];l.sources&&(l.state===k||t?l!==n&&re(l):(l.state===ie||t)&&ce(l,n))}}function ke(e){const n=W;for(let t=0;t<e.observers.length;t+=1){const o=e.observers[t];(!o.state||n)&&(o.state=ie,o.pure?C.push(o):O.push(o),o.observers&&ke(o))}}function ae(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const s=l.pop(),r=t.observerSlots.pop();o<l.length&&(s.sourceSlots[r]=o,l[o]=s,t.observerSlots[o]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)ae(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function et(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ie(e){throw e=et(e),e}function Be(e,n){return e?e.context&&e.context[n]!==void 0?e.context[n]:Be(e.owner,n):void 0}function pe(e){if(typeof e=="function"&&!e.length)return pe(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const o=pe(e[t]);Array.isArray(o)?n.push.apply(n,o):n.push(o)}return n}return e}function tt(e,n){return function(o){let l;return x(()=>l=I(()=>(v.context={[e]:o.value},Xe(()=>o.children))),void 0),l}}const $e=Symbol("fallback");function Ce(e){for(let n=0;n<e.length;n++)e[n]()}function nt(e,n,t={}){let o=[],l=[],s=[],r=[],i=0,c;return Re(()=>Ce(s)),()=>{const u=e()||[];return u[ze],I(()=>{if(u.length===0)return i!==0&&(Ce(s),s=[],o=[],l=[],i=0,r=[]),t.fallback&&(o=[$e],l[0]=de(p=>(s[0]=p,t.fallback())),i=1),l;for(o[0]===$e&&(s[0](),s=[],o=[],l=[],i=0),c=0;c<u.length;c++)c<o.length&&o[c]!==u[c]?r[c](()=>u[c]):c>=o.length&&(l[c]=de(d));for(;c<o.length;c++)s[c]();return i=r.length=s.length=u.length,o=u.slice(0),l=l.slice(0,i)});function d(p){s[c]=p;const[N,_]=$(u[c]);return r[c]=_,n(N,c)}}}function h(e,n){return I(()=>e(n||{}))}function xe(e){const n="fallback"in e&&{fallback:()=>e.fallback};return Y(nt(()=>e.each,e.children,n||void 0))}function K(e){let n=!1;const t=e.keyed,o=Y(()=>e.when,void 0,{equals:(l,s)=>n?l===s:!l==!s});return Y(()=>{const l=o();if(l){const s=e.children,r=typeof s=="function"&&s.length>0;return n=t||r,r?I(()=>s(l)):s}return e.fallback},void 0,void 0)}function ot(e,n,t){let o=t.length,l=n.length,s=o,r=0,i=0,c=n[l-1].nextSibling,u=null;for(;r<l||i<s;){if(n[r]===t[i]){r++,i++;continue}for(;n[l-1]===t[s-1];)l--,s--;if(l===r){const d=s<o?i?t[i-1].nextSibling:t[s-i]:c;for(;i<s;)e.insertBefore(t[i++],d)}else if(s===i)for(;r<l;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[s-1]&&t[i]===n[l-1]){const d=n[--l].nextSibling;e.insertBefore(t[i++],n[r++].nextSibling),e.insertBefore(t[--s],d),n[l]=t[s]}else{if(!u){u=new Map;let p=i;for(;p<s;)u.set(t[p],p++)}const d=u.get(n[r]);if(d!=null)if(i<d&&d<s){let p=r,N=1,_;for(;++p<l&&p<s&&!((_=u.get(n[p]))==null||_!==d+N);)N++;if(N>d-i){const E=n[r];for(;i<d;)e.insertBefore(t[i++],E)}else e.replaceChild(t[i++],n[r++])}else r++;else n[r++].remove()}}}const ye="_$DX_DELEGATE";function lt(e,n,t,o={}){let l;return de(s=>{l=s,n===document?e():y(n,e(),n.firstChild?null:void 0,t)},o.owner),()=>{l(),n.textContent=""}}function b(e,n,t){const o=document.createElement("template");o.innerHTML=e;let l=o.content.firstChild;return t&&(l=l.firstChild),l}function z(e,n=window.document){const t=n[ye]||(n[ye]=new Set);for(let o=0,l=e.length;o<l;o++){const s=e[o];t.has(s)||(t.add(s),n.addEventListener(s,st))}}function q(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function L(e,n,t){return I(()=>e(n,t))}function y(e,n,t,o){if(t!==void 0&&!o&&(o=[]),typeof n!="function")return ue(e,n,o,t);x(l=>ue(e,n(),l,t),o)}function st(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>{for(;o&&o.nodeType!==8&&o.nodeValue!=="pl-"+e;){let l=o.nextSibling;o.remove(),o=l}o&&o.remove()}));t;){const o=t[n];if(o&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?o.call(t,l,e):o.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function ue(e,n,t,o,l){for(R.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,r=o!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(R.context)return t;if(s==="number"&&(n=n.toString()),r){let i=t[0];i&&i.nodeType===3?i.data=n:i=document.createTextNode(n),t=j(e,t,o,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||s==="boolean"){if(R.context)return t;t=j(e,t,o)}else{if(s==="function")return x(()=>{let i=n();for(;typeof i=="function";)i=i();t=ue(e,i,t,o)}),()=>t;if(Array.isArray(n)){const i=[],c=t&&Array.isArray(t);if(ge(i,n,t,l))return x(()=>t=ue(e,i,t,o,!0)),()=>t;if(R.context){if(!i.length)return t;for(let u=0;u<i.length;u++)if(i[u].parentNode)return t=i}if(i.length===0){if(t=j(e,t,o),r)return t}else c?t.length===0?we(e,i,o):ot(e,t,i):(t&&j(e),we(e,i));t=i}else if(n instanceof Node){if(R.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=j(e,t,o,n);j(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ge(e,n,t,o){let l=!1;for(let s=0,r=n.length;s<r;s++){let i=n[s],c=t&&t[s];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))l=ge(e,i,c)||l;else if(typeof i=="function")if(o){for(;typeof i=="function";)i=i();l=ge(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||l}else e.push(i),l=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return l}function we(e,n,t=null){for(let o=0,l=n.length;o<l;o++)e.insertBefore(n[o],t)}function j(e,n,t,o){if(t===void 0)return e.textContent="";const l=o||document.createTextNode("");if(n.length){let s=!1;for(let r=n.length-1;r>=0;r--){const i=n[r];if(l!==i){const c=i.parentNode===e;!s&&!r?c?e.replaceChild(l,i):e.insertBefore(l,t):c&&i.remove()}else s=!0}}else e.insertBefore(l,t);return[l]}function le(e){const t=(e.startsWith("#")?e.substring(1):e).match(/.{1,2}/g);return{r:parseInt(t[0],16),g:parseInt(t[1],16),b:parseInt(t[2],16)}}function it(e){const n=e.r.toString(16).padStart(2,"0"),t=e.g.toString(16).padStart(2,"0"),o=e.b.toString(16).padStart(2,"0");return`#${n}${t}${o}`}function rt(e,n=500){let t;return(...o)=>{clearTimeout(t),t=setTimeout(()=>e.apply(this,o),n)}}function Pe(e,n){const[t,o,l,s]=n();x(()=>e.value=t());const r=i=>{switch(l){case"string":o(i.target.value);break;case"number":let c=i.target.value===""?1:parseInt(i.target.value);c<s.minValue?c=s.minValue:c>s.maxValue&&(c=s.maxValue),o(c);break}};e.addEventListener("input",rt(r))}var ct=function(e,n){return Object.assign(document.createElement("canvas"),{width:e,height:n})};const ut=()=>{const[e,n]=$(6),[t,o]=$(6),[l,s]=$("#a18cd1"),[r,i]=$("#fbc2eb"),[c,u]=$("#96e6a1"),[d,p]=$("#d4fc79"),[N,_]=$(""),[E,Q]=$(!1),[H,T]=$(!1),[P,A]=$(400),[a,f]=$(600),[g,te]=$(""),ne=()=>le(l()),oe=()=>le(r()),Ge=()=>le(c()),Fe=()=>le(d());function fe(S,w){return Math.floor((ne()[S]*w.topLeftIntensity+oe()[S]*w.topRightIntensity+Ge()[S]*w.bottomLeftIntensity+Fe()[S]*w.bottomRightIntensity)/w.maxIntensity)}function ve(S,w){const G=()=>t()===1?2:t(),F=()=>e()===1?2:e(),X={topLeftIntensity:(G()-w-1)*(F()-S-1),topRightIntensity:w*(F()-S-1),bottomLeftIntensity:(G()-w-1)*S,bottomRightIntensity:w*S,maxIntensity:(G()-1)*(F()-1)},D=fe("r",X),U=fe("g",X),J=fe("b",X);return{r:D,g:U,b:J}}function De(){const S=ct(P(),a()),w=S.getContext("2d"),G=Math.ceil(P()/t()),F=Math.ceil(a()/e());for(let D=0;D<e();D++)for(let U=0;U<t();U++){const J=ve(D,U),Ue=G*U,je=F*D;w.fillStyle=`rgb(${J.r}, ${J.g}, ${J.b})`,w.fillRect(Ue,je,G,F)}const X=S.toDataURL("image/jpeg");te(X)}return{rowsNumber:e,setRowsNumber:n,columnsNumber:t,setColumnsNumber:o,topLeftColorHex:l,setTopLeftColorHex:s,topRightColorHex:r,setTopRightColorHex:i,bottomLeftColorHex:c,setBottomLeftColorHex:u,bottomRightColorHex:d,setBottomRightColorHex:p,copyMessage:N,setCopyMessage:_,isCopyMessageVisible:E,setIsCopyMessageVisible:Q,wallpaperWidth:P,setWallpaperWidth:A,wallpaperHeight:a,setWallpaperHeight:f,isPopupOpen:H,setIsPopupOpen:T,wallpaperData:g,generateColor:ve,generateWallpaper:De}},We=Te(),B=()=>Me(We);function at(e){return h(We.Provider,{get value(){return ut()},get children(){return e.children}})}var V=(e=>(e[e.MatrixSettings=0]="MatrixSettings",e[e.SaveWallpaper=1]="SaveWallpaper",e[e.None=2]="None",e))(V||{});const ft=()=>{const[t,o]=$(4),[l,s]=$(V.MatrixSettings);function r(u){if(l()===u){s(V.None);return}s(u)}const{setRowsNumber:i,setColumnsNumber:c}=B();return Ae(()=>{t()===4?(i(6),c(6)):(c(6),i(1))}),{numberOfColors:t,setNumberOfColors:o,accordionItemOpen:l,accordionItemClicked:r}},Ve=Te(),be=()=>Me(Ve);function dt(e){return h(Ve.Provider,{get value(){return ft()},get children(){return e.children}})}const pt=b('<div id="gradient-matrix"></div>');function gt(){const{rowsNumber:e,columnsNumber:n,generateColor:t}=B(),o=()=>[...new Array(e())],l=()=>[...new Array(n())];return(()=>{const s=pt.cloneNode(!0);return y(s,h(xe,{get each(){return o()},children:(r,i)=>h(xe,{get each(){return l()},children:(c,u)=>h(mt,{get color(){return t(i,u)}})})})),x(r=>{const i=`repeat(${n()}, 1fr)`,c=`repeat(${e()}, 1fr)`;return i!==r._v$&&s.style.setProperty("grid-template-columns",r._v$=i),c!==r._v$2&&s.style.setProperty("grid-template-rows",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),s})()}const ht=b('<div class="cell"></div>');function mt(e){const{isCopyMessageVisible:n,setIsCopyMessageVisible:t,setCopyMessage:o}=B(),l=3e3;let s;const r=()=>{const c=it(e.color);navigator.clipboard.writeText(c),i(`Copied ${c}`)},i=c=>{n()&&(t(!1),clearTimeout(s)),o(c),t(!0),s=setTimeout(()=>{t(!1)},l)};return(()=>{const c=ht.cloneNode(!0);return c.$$click=r,x(()=>c.style.setProperty("background-color",`rgb(${e.color.r}, ${e.color.g}, ${e.color.b})`)),c})()}z(["click"]);const bt=b('<div class="control"><label>Number of Colors:</label><div class="radio-control"><div><input name="colorsNumber" value="2" type="radio"><label for="2">2 Colors</label></div><div><input name="colorsNumber" value="4" type="radio"><label for="4">4 Colors</label></div></div></div>');function vt(){const{numberOfColors:e,setNumberOfColors:n}=be();return(()=>{const t=bt.cloneNode(!0),o=t.firstChild,l=o.nextSibling,s=l.firstChild,r=s.firstChild,i=r.nextSibling,c=s.nextSibling,u=c.firstChild,d=u.nextSibling;return i.$$click=()=>n(2),d.$$click=()=>n(4),x(()=>r.checked=e()===2),x(()=>u.checked=e()===4),t})()}z(["click"]);const $t=b('<div class="control"><label for="topLeftColor">Left Color:</label><input name="topLeftColor" type="color"></div>'),Ct=b('<div class="control"><label for="topRightColor">Right Color:</label><input name="topRightColor" type="color"></div>'),_e=b('<div class="control"><label for="columnsNumber">Columns Number:</label><input name="columnsNumber" type="number" min="1" max="100"></div>'),xt=b('<div class="control"><label for="topLeftColor">Top Left Color:</label><input name="topLeftColor" type="color"></div>'),yt=b('<div class="control"><label for="topRightColor">Top Right Color:</label><input name="topRightColor" type="color"></div>'),wt=b('<div class="control"><label for="bottomLeftColor">Bottom Left Color:</label><input name="bottomLeftColor" type="color"></div>'),_t=b('<div class="control"><label for="bottomRightColor">Bottom Right Color:</label><input name="bottomRightColor" type="color"></div>'),St=b('<div class="control"><label for="rowsNumber">Rows Number:</label><input name="rowsNumber" type="number" min="1" max="100"></div>'),Nt=b('<div class="controls-container accordion-item-content"></div>'),Lt=b('<div class="accordion-item"><div class="accordion-item-header"><h3 class="accordion-item-title">Settings</h3><svg class="accordion-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div>'),M=Pe;function At(){const e={minValue:1,maxValue:100},{rowsNumber:n,setRowsNumber:t,columnsNumber:o,setColumnsNumber:l,topLeftColorHex:s,setTopLeftColorHex:r,topRightColorHex:i,setTopRightColorHex:c,bottomLeftColorHex:u,setBottomLeftColorHex:d,bottomRightColorHex:p,setBottomRightColorHex:N}=B(),{numberOfColors:_,accordionItemOpen:E,accordionItemClicked:Q}=be(),H=()=>E()===V.MatrixSettings;return(()=>{const T=Lt.cloneNode(!0),P=T.firstChild;return P.$$click=()=>Q(V.MatrixSettings),y(T,h(K,{get when(){return H()},get children(){const A=Nt.cloneNode(!0);return y(A,h(vt,{}),null),y(A,h(K,{get when(){return _()===2},get children(){return[(()=>{const a=$t.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[s,r,"string"]),a})(),(()=>{const a=Ct.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[i,c,"string"]),a})(),(()=>{const a=_e.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[o,l,"number",e]),a})()]}}),null),y(A,h(K,{get when(){return _()===4},get children(){return[(()=>{const a=xt.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[s,r,"string"]),a})(),(()=>{const a=yt.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[i,c,"string"]),a})(),(()=>{const a=wt.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[u,d,"string"]),a})(),(()=>{const a=_t.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[p,N,"string"]),a})(),(()=>{const a=St.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[n,t,"number",e]),a})(),(()=>{const a=_e.cloneNode(!0),f=a.firstChild,g=f.nextSibling;return L(M,g,()=>[o,l,"number",e]),a})()]}}),null),A}}),null),x(()=>T.classList.toggle("open",!!H())),T})()}z(["click"]);const Rt=b('<div class="controls-container accordion-item-content"><div class="control"><label for="rowsNumber">Wallpaper width (px):</label><input name="rowsNumber" type="number"></div><div class="control"><label for="columnsNumber">Wallpaper height (px):</label><input name="columnsNumber" type="number"></div><button class="action-button">Generate wallpaper</button></div>'),Tt=b('<div class="accordion-item"><div class="accordion-item-header"><h3 class="accordion-item-title">Save wallpaper</h3><svg class="accordion-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div>'),Se=Pe;function Mt(){const e={minValue:10,maxValue:3e3},{wallpaperWidth:n,setWallpaperWidth:t,wallpaperHeight:o,setWallpaperHeight:l,setIsPopupOpen:s,generateWallpaper:r}=B();function i(){r(),s(!0)}const{accordionItemOpen:c,accordionItemClicked:u}=be(),d=()=>c()===V.SaveWallpaper;return(()=>{const p=Tt.cloneNode(!0),N=p.firstChild;return N.$$click=()=>u(V.SaveWallpaper),y(p,h(K,{get when(){return d()},get children(){const _=Rt.cloneNode(!0),E=_.firstChild,Q=E.firstChild,H=Q.nextSibling,T=E.nextSibling,P=T.firstChild,A=P.nextSibling,a=T.nextSibling;return L(Se,H,()=>[n,t,"number",e]),L(Se,A,()=>[o,l,"number",e]),a.$$click=()=>i(),x(f=>{const g=e.minValue,te=e.maxValue,ne=e.minValue,oe=e.maxValue;return g!==f._v$&&q(H,"min",f._v$=g),te!==f._v$2&&q(H,"max",f._v$2=te),ne!==f._v$3&&q(A,"min",f._v$3=ne),oe!==f._v$4&&q(A,"max",f._v$4=oe),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),_}}),null),x(()=>p.classList.toggle("open",!!d())),p})()}z(["click"]);const Ot=b('<div class="copy-message-container"></div>');function Et(){const[e,n]=$(!1),{copyMessage:t}=B(),o=setTimeout(()=>n(!0),2e3);return Re(()=>clearTimeout(o)),(()=>{const l=Ot.cloneNode(!0);return y(l,t),x(()=>l.classList.toggle("fade-out",!!e())),l})()}const Ht=b('<div class="sidemenu-container"><h1 class="main-title"><div class="small-text"><span class="the">The</span></div>Gradientinator</h1><div class="buttons-container"><button class="mobile-button action-button">Apply Gradient</button><button class="desktop-hide-menu-button action-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>Hide Settings</button></div><button class="mobile-open-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></button></div>');function kt(){const[e,n]=$(!1);return Qe(()=>{window.screen.width>600&&n(!0)}),(()=>{const t=Ht.cloneNode(!0),o=t.firstChild,l=o.nextSibling,s=l.firstChild,r=s.nextSibling,i=l.nextSibling;return y(t,h(At,{}),l),y(t,h(Mt,{}),l),s.$$click=()=>n(!1),r.$$click=()=>n(!1),i.$$click=()=>n(!0),x(()=>t.classList.toggle("opened",!!e())),t})()}z(["click"]);const It=b('<div class="popup-container"><div class="popup"><button class="close-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg></button><div class="wallpaper-container"><img></div><a class="action-button" download="gradientinator.jpeg">Save Wallpaper</a></div><div class="popup-overlay"></div></div>');function Bt(){const{setIsPopupOpen:e,wallpaperData:n}=B();return(()=>{const t=It.cloneNode(!0),o=t.firstChild,l=o.firstChild,s=l.nextSibling,r=s.firstChild,i=s.nextSibling,c=o.nextSibling;return l.$$click=()=>e(!1),c.$$click=()=>e(!1),x(u=>{const d=n(),p=n();return d!==u._v$&&q(r,"src",u._v$=d),p!==u._v$2&&q(i,"href",u._v$2=p),u},{_v$:void 0,_v$2:void 0}),t})()}z(["click"]);const Pt=b('<div class="app-container"><section class="main-section"></section></div>'),Wt=()=>{const{isCopyMessageVisible:e,isPopupOpen:n}=B();return(()=>{const t=Pt.cloneNode(!0),o=t.firstChild;return y(o,h(dt,{get children(){return h(kt,{})}}),null),y(o,h(gt,{}),null),y(t,h(K,{get when(){return e()},get children(){return h(Et,{})}}),null),y(t,h(K,{get when(){return n()},get children(){return h(Bt,{})}}),null),t})()},Vt=document.getElementById("root");lt(()=>h(at,{get children(){return h(Wt,{})}}),Vt);
