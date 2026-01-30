(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function On(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const U={},ft=[],Ee=()=>{},Fi=()=>!1,on=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nn=e=>e.startsWith("onUpdate:"),le=Object.assign,Zn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},js=Object.prototype.hasOwnProperty,F=(e,t)=>js.call(e,t),K=Array.isArray,ht=e=>an(e)==="[object Map]",Oi=e=>an(e)==="[object Set]",W=e=>typeof e=="function",ee=e=>typeof e=="string",Xe=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ni=e=>(J(e)||W(e))&&W(e.then)&&W(e.catch),Zi=Object.prototype.toString,an=e=>Zi.call(e),qs=e=>an(e).slice(8,-1),Ri=e=>an(e)==="[object Object]",Rn=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mt=On(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Us=/-\w/g,xe=dn(e=>e.replace(Us,t=>t.slice(1).toUpperCase())),Gs=/\B([A-Z])/g,dt=dn(e=>e.replace(Gs,"-$1").toLowerCase()),cn=dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=dn(e=>e?`on${cn(e)}`:""),Je=(e,t)=>!Object.is(e,t),yn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ji=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ui;const un=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ve(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ee(i)?Xs(i):Ve(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ee(e)||J(e))return e}const Js=/;(?![^(]*\))/g,$s=/:([^]+)/,Ys=/\/\*[^]*?\*\//g;function Xs(e){const t={};return e.replace(Ys,"").split(Js).forEach(n=>{if(n){const i=n.split($s);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(e){let t="";if(ee(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const i=ye(e[n]);i&&(t+=i+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const er="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tr=On(er);function qi(e){return!!e||e===""}const Ui=e=>!!(e&&e.__v_isRef===!0),A=e=>ee(e)?e:e==null?"":K(e)||J(e)&&(e.toString===Zi||!W(e.toString))?Ui(e)?A(e.value):JSON.stringify(e,Gi,2):String(e),Gi=(e,t)=>Ui(t)?Gi(e,t.value):ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[kn(i,r)+" =>"]=s,n),{})}:Oi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>kn(n))}:Xe(t)?kn(t):J(t)&&!K(t)&&!Ri(t)?String(t):t,kn=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fe;class nr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fe,!t&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=fe;try{return fe=this,t()}finally{fe=n}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){this._on>0&&--this._on===0&&(fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ir(){return fe}let j;const wn=new WeakSet;class Qi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&fe.active&&fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wn.has(this)&&(wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$i(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gi(this),Yi(this);const t=j,n=we;j=this,we=!0;try{return this.fn()}finally{Xi(this),j=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Un(t);this.deps=this.depsTail=void 0,gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bn(this)&&this.run()}get dirty(){return Bn(this)}}let Ji=0,Tt,Pt;function $i(e,t=!1){if(e.flags|=8,t){e.next=Pt,Pt=e;return}e.next=Tt,Tt=e}function jn(){Ji++}function qn(){if(--Ji>0)return;if(Pt){let t=Pt;for(Pt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Tt;){let t=Tt;for(Tt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Yi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xi(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Un(i),sr(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Bn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(es(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function es(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Lt)||(e.globalVersion=Lt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bn(e))))return;e.flags|=2;const t=e.dep,n=j,i=we;j=e,we=!0;try{Yi(e);const s=e.fn(e._value);(t.version===0||Je(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{j=n,we=i,Xi(e),e.flags&=-3}}function Un(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Un(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function sr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const ts=[];function Ie(){ts.push(we),we=!1}function He(){const e=ts.pop();we=e===void 0?!0:e}function gi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=j;j=void 0;try{t()}finally{j=n}}}let Lt=0;class rr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!j||!we||j===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==j)n=this.activeLink=new rr(j,this),j.deps?(n.prevDep=j.depsTail,j.depsTail.nextDep=n,j.depsTail=n):j.deps=j.depsTail=n,ns(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=j.depsTail,n.nextDep=void 0,j.depsTail.nextDep=n,j.depsTail=n,j.deps===n&&(j.deps=i)}return n}trigger(t){this.version++,Lt++,this.notify(t)}notify(t){jn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qn()}}}function ns(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ns(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Cn=new WeakMap,ot=Symbol(""),En=Symbol(""),Wt=Symbol("");function ie(e,t,n){if(we&&j){let i=Cn.get(e);i||Cn.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Gn),s.map=i,s.key=n),s.track()}}function De(e,t,n,i,s,r){const l=Cn.get(e);if(!l){Lt++;return}const o=c=>{c&&c.trigger()};if(jn(),t==="clear")l.forEach(o);else{const c=K(e),f=c&&Rn(n);if(c&&n==="length"){const g=Number(i);l.forEach((p,y)=>{(y==="length"||y===Wt||!Xe(y)&&y>=g)&&o(p)})}else switch((n!==void 0||l.has(void 0))&&o(l.get(n)),f&&o(l.get(Wt)),t){case"add":c?f&&o(l.get("length")):(o(l.get(ot)),ht(e)&&o(l.get(En)));break;case"delete":c||(o(l.get(ot)),ht(e)&&o(l.get(En)));break;case"set":ht(e)&&o(l.get(ot));break}}qn()}function ct(e){const t=H(e);return t===e?t:(ie(t,"iterate",Wt),me(e)?t:t.map(_e))}function gn(e){return ie(e=H(e),"iterate",Wt),e}function Re(e,t){return Fe(e)?mt(at(e)?_e(t):t):_e(t)}const lr={__proto__:null,[Symbol.iterator](){return _n(this,Symbol.iterator,e=>Re(this,e))},concat(...e){return ct(this).concat(...e.map(t=>K(t)?ct(t):t))},entries(){return _n(this,"entries",e=>(e[1]=Re(this,e[1]),e))},every(e,t){return Le(this,"every",e,t,void 0,arguments)},filter(e,t){return Le(this,"filter",e,t,n=>n.map(i=>Re(this,i)),arguments)},find(e,t){return Le(this,"find",e,t,n=>Re(this,n),arguments)},findIndex(e,t){return Le(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Le(this,"findLast",e,t,n=>Re(this,n),arguments)},findLastIndex(e,t){return Le(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Le(this,"forEach",e,t,void 0,arguments)},includes(...e){return zn(this,"includes",e)},indexOf(...e){return zn(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return zn(this,"lastIndexOf",e)},map(e,t){return Le(this,"map",e,t,void 0,arguments)},pop(){return _t(this,"pop")},push(...e){return _t(this,"push",e)},reduce(e,...t){return fi(this,"reduce",e,t)},reduceRight(e,...t){return fi(this,"reduceRight",e,t)},shift(){return _t(this,"shift")},some(e,t){return Le(this,"some",e,t,void 0,arguments)},splice(...e){return _t(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return _t(this,"unshift",e)},values(){return _n(this,"values",e=>Re(this,e))}};function _n(e,t,n){const i=gn(e),s=i[t]();return i!==e&&!me(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const or=Array.prototype;function Le(e,t,n,i,s,r){const l=gn(e),o=l!==e&&!me(e),c=l[t];if(c!==or[t]){const p=c.apply(e,r);return o?_e(p):p}let f=n;l!==e&&(o?f=function(p,y){return n.call(this,Re(e,p),y,e)}:n.length>2&&(f=function(p,y){return n.call(this,p,y,e)}));const g=c.call(l,f,i);return o&&s?s(g):g}function fi(e,t,n,i){const s=gn(e);let r=n;return s!==e&&(me(e)?n.length>3&&(r=function(l,o,c){return n.call(this,l,o,c,e)}):r=function(l,o,c){return n.call(this,l,Re(e,o),c,e)}),s[t](r,...i)}function zn(e,t,n){const i=H(e);ie(i,"iterate",Wt);const s=i[t](...n);return(s===-1||s===!1)&&Yn(n[0])?(n[0]=H(n[0]),i[t](...n)):s}function _t(e,t,n=[]){Ie(),jn();const i=H(e)[t].apply(e,n);return qn(),He(),i}const ar=On("__proto__,__v_isRef,__isVue"),is=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function dr(e){Xe(e)||(e=String(e));const t=H(this);return ie(t,"has",e),t.hasOwnProperty(e)}class ss{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?xr:as:r?os:ls).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const l=K(t);if(!s){let c;if(l&&(c=lr[n]))return c;if(n==="hasOwnProperty")return dr}const o=Reflect.get(t,n,re(t)?t:i);if((Xe(n)?is.has(n):ar(n))||(s||ie(t,"get",n),r))return o;if(re(o)){const c=l&&Rn(n)?o:o.value;return s&&J(c)?Ln(c):c}return J(o)?s?Ln(o):Jn(o):o}}class rs extends ss{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const l=K(t)&&Rn(n);if(!this._isShallow){const f=Fe(r);if(!me(i)&&!Fe(i)&&(r=H(r),i=H(i)),!l&&re(r)&&!re(i))return f||(r.value=i),!0}const o=l?Number(n)<t.length:F(t,n),c=Reflect.set(t,n,i,re(t)?t:s);return t===H(s)&&(o?Je(i,r)&&De(t,"set",n,i):De(t,"add",n,i)),c}deleteProperty(t,n){const i=F(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&De(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!Xe(n)||!is.has(n))&&ie(t,"has",n),i}ownKeys(t){return ie(t,"iterate",K(t)?"length":ot),Reflect.ownKeys(t)}}class cr extends ss{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ur=new rs,gr=new cr,fr=new rs(!0);const Kn=e=>e,qt=e=>Reflect.getPrototypeOf(e);function hr(e,t,n){return function(...i){const s=this.__v_raw,r=H(s),l=ht(r),o=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,f=s[e](...i),g=n?Kn:t?mt:_e;return!t&&ie(r,"iterate",c?En:ot),le(Object.create(f),{next(){const{value:p,done:y}=f.next();return y?{value:p,done:y}:{value:o?[g(p[0]),g(p[1])]:g(p),done:y}}})}}function Ut(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function pr(e,t){const n={get(s){const r=this.__v_raw,l=H(r),o=H(s);e||(Je(s,o)&&ie(l,"get",s),ie(l,"get",o));const{has:c}=qt(l),f=t?Kn:e?mt:_e;if(c.call(l,s))return f(r.get(s));if(c.call(l,o))return f(r.get(o));r!==l&&r.get(s)},get size(){const s=this.__v_raw;return!e&&ie(H(s),"iterate",ot),s.size},has(s){const r=this.__v_raw,l=H(r),o=H(s);return e||(Je(s,o)&&ie(l,"has",s),ie(l,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const l=this,o=l.__v_raw,c=H(o),f=t?Kn:e?mt:_e;return!e&&ie(c,"iterate",ot),o.forEach((g,p)=>s.call(r,f(g),f(p),l))}};return le(n,e?{add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear")}:{add(s){!t&&!me(s)&&!Fe(s)&&(s=H(s));const r=H(this);return qt(r).has.call(r,s)||(r.add(s),De(r,"add",s,s)),this},set(s,r){!t&&!me(r)&&!Fe(r)&&(r=H(r));const l=H(this),{has:o,get:c}=qt(l);let f=o.call(l,s);f||(s=H(s),f=o.call(l,s));const g=c.call(l,s);return l.set(s,r),f?Je(r,g)&&De(l,"set",s,r):De(l,"add",s,r),this},delete(s){const r=H(this),{has:l,get:o}=qt(r);let c=l.call(r,s);c||(s=H(s),c=l.call(r,s)),o&&o.call(r,s);const f=r.delete(s);return c&&De(r,"delete",s,void 0),f},clear(){const s=H(this),r=s.size!==0,l=s.clear();return r&&De(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hr(s,e,t)}),n}function Qn(e,t){const n=pr(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(F(n,s)&&s in i?n:i,s,r)}const br={get:Qn(!1,!1)},mr={get:Qn(!1,!0)},vr={get:Qn(!0,!1)};const ls=new WeakMap,os=new WeakMap,as=new WeakMap,xr=new WeakMap;function yr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kr(e){return e.__v_skip||!Object.isExtensible(e)?0:yr(qs(e))}function Jn(e){return Fe(e)?e:$n(e,!1,ur,br,ls)}function wr(e){return $n(e,!1,fr,mr,os)}function Ln(e){return $n(e,!0,gr,vr,as)}function $n(e,t,n,i,s){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=kr(e);if(r===0)return e;const l=s.get(e);if(l)return l;const o=new Proxy(e,r===2?i:n);return s.set(e,o),o}function at(e){return Fe(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Fe(e){return!!(e&&e.__v_isReadonly)}function me(e){return!!(e&&e.__v_isShallow)}function Yn(e){return e?!!e.__v_raw:!1}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function _r(e){return!F(e,"__v_skip")&&Object.isExtensible(e)&&ji(e,"__v_skip",!0),e}const _e=e=>J(e)?Jn(e):e,mt=e=>J(e)?Ln(e):e;function re(e){return e?e.__v_isRef===!0:!1}function Ge(e){return zr(e,!1)}function zr(e,t){return re(e)?e:new Sr(e,t)}class Sr{constructor(t,n){this.dep=new Gn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:H(t),this._value=n?t:_e(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||me(t)||Fe(t);t=i?t:H(t),Je(t,n)&&(this._rawValue=t,this._value=i?t:_e(t),this.dep.trigger())}}function Ar(e){return re(e)?e.value:e}const Mr={get:(e,t,n)=>t==="__v_raw"?e:Ar(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return re(s)&&!re(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function ds(e){return at(e)?e:new Proxy(e,Mr)}class Tr{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Gn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return $i(this,!0),!0}get value(){const t=this.dep.track();return es(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pr(e,t,n=!1){let i,s;return W(e)?i=e:(i=e.get,s=e.set),new Tr(i,s,n)}const Gt={},en=new WeakMap;let rt;function Br(e,t=!1,n=rt){if(n){let i=en.get(n);i||en.set(n,i=[]),i.push(e)}}function Cr(e,t,n=U){const{immediate:i,deep:s,once:r,scheduler:l,augmentJob:o,call:c}=n,f=C=>s?C:me(C)||s===!1||s===0?Qe(C,1):Qe(C);let g,p,y,T,L=!1,D=!1;if(re(e)?(p=()=>e.value,L=me(e)):at(e)?(p=()=>f(e),L=!0):K(e)?(D=!0,L=e.some(C=>at(C)||me(C)),p=()=>e.map(C=>{if(re(C))return C.value;if(at(C))return f(C);if(W(C))return c?c(C,2):C()})):W(e)?t?p=c?()=>c(e,2):e:p=()=>{if(y){Ie();try{y()}finally{He()}}const C=rt;rt=g;try{return c?c(e,3,[T]):e(T)}finally{rt=C}}:p=Ee,t&&s){const C=p,X=s===!0?1/0:s;p=()=>Qe(C(),X)}const te=ir(),I=()=>{g.stop(),te&&te.active&&Zn(te.effects,g)};if(r&&t){const C=t;t=(...X)=>{C(...X),I()}}let N=D?new Array(e.length).fill(Gt):Gt;const $=C=>{if(!(!(g.flags&1)||!g.dirty&&!C))if(t){const X=g.run();if(s||L||(D?X.some((G,ze)=>Je(G,N[ze])):Je(X,N))){y&&y();const G=rt;rt=g;try{const ze=[X,N===Gt?void 0:D&&N[0]===Gt?[]:N,T];N=X,c?c(t,3,ze):t(...ze)}finally{rt=G}}}else g.run()};return o&&o($),g=new Qi(p),g.scheduler=l?()=>l($,!1):$,T=C=>Br(C,!1,g),y=g.onStop=()=>{const C=en.get(g);if(C){if(c)c(C,4);else for(const X of C)X();en.delete(g)}},t?i?$(!0):N=g.run():l?l($.bind(null,!0),!0):g.run(),I.pause=g.pause.bind(g),I.resume=g.resume.bind(g),I.stop=I,I}function Qe(e,t=1/0,n){if(t<=0||!J(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,re(e))Qe(e.value,t,n);else if(K(e))for(let i=0;i<e.length;i++)Qe(e[i],t,n);else if(Oi(e)||ht(e))e.forEach(i=>{Qe(i,t,n)});else if(Ri(e)){for(const i in e)Qe(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Qe(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ht(e,t,n,i){try{return i?e(...i):e()}catch(s){fn(s,t,n)}}function Ke(e,t,n,i){if(W(e)){const s=Ht(e,t,n,i);return s&&Ni(s)&&s.catch(r=>{fn(r,t,n)}),s}if(K(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Ke(e[r],t,n,i));return s}}function fn(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||U;if(t){let o=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const g=o.ec;if(g){for(let p=0;p<g.length;p++)if(g[p](e,c,f)===!1)return}o=o.parent}if(r){Ie(),Ht(r,null,10,[e,c,f]),He();return}}Er(e,n,s,i,l)}function Er(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const ce=[];let Be=-1;const pt=[];let je=null,ut=0;const cs=Promise.resolve();let tn=null;function Kr(e){const t=tn||cs;return e?t.then(this?e.bind(this):e):t}function Lr(e){let t=Be+1,n=ce.length;for(;t<n;){const i=t+n>>>1,s=ce[i],r=Dt(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function Xn(e){if(!(e.flags&1)){const t=Dt(e),n=ce[ce.length-1];!n||!(e.flags&2)&&t>=Dt(n)?ce.push(e):ce.splice(Lr(t),0,e),e.flags|=1,us()}}function us(){tn||(tn=cs.then(fs))}function Wr(e){K(e)?pt.push(...e):je&&e.id===-1?je.splice(ut+1,0,e):e.flags&1||(pt.push(e),e.flags|=1),us()}function hi(e,t,n=Be+1){for(;n<ce.length;n++){const i=ce[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;ce.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gs(e){if(pt.length){const t=[...new Set(pt)].sort((n,i)=>Dt(n)-Dt(i));if(pt.length=0,je){je.push(...t);return}for(je=t,ut=0;ut<je.length;ut++){const n=je[ut];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}je=null,ut=0}}const Dt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fs(e){try{for(Be=0;Be<ce.length;Be++){const t=ce[Be];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ht(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Be<ce.length;Be++){const t=ce[Be];t&&(t.flags&=-2)}Be=-1,ce.length=0,gs(),tn=null,(ce.length||pt.length)&&fs()}}let ke=null,hs=null;function nn(e){const t=ke;return ke=e,hs=e&&e.type.__scopeId||null,t}function Dr(e,t=ke,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Si(-1);const r=nn(t);let l;try{l=e(...s)}finally{nn(r),i._d&&Si(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function it(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];r&&(o.oldValue=r[l].value);let c=o.dir[i];c&&(Ie(),Ke(c,n,8,[e.el,o,e,t]),He())}}function Vr(e,t){if(se){let n=se.provides;const i=se.parent&&se.parent.provides;i===n&&(n=se.provides=Object.create(i)),n[e]=t}}function Jt(e,t,n=!1){const i=Il();if(i||bt){let s=bt?bt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(i&&i.proxy):t}}const Ir=Symbol.for("v-scx"),Hr=()=>Jt(Ir);function Sn(e,t,n){return ps(e,t,n)}function ps(e,t,n=U){const{immediate:i,deep:s,flush:r,once:l}=n,o=le({},n),c=t&&i||!t&&r!=="post";let f;if(It){if(r==="sync"){const T=Hr();f=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Ee,T.resume=Ee,T.pause=Ee,T}}const g=se;o.call=(T,L,D)=>Ke(T,g,L,D);let p=!1;r==="post"?o.scheduler=T=>{pe(T,g&&g.suspense)}:r!=="sync"&&(p=!0,o.scheduler=(T,L)=>{L?T():Xn(T)}),o.augmentJob=T=>{t&&(T.flags|=4),p&&(T.flags|=2,g&&(T.id=g.uid,T.i=g))};const y=Cr(e,t,o);return It&&(f?f.push(y):c&&y()),y}function Fr(e,t,n){const i=this.proxy,s=ee(e)?e.includes(".")?bs(i,e):()=>i[e]:e.bind(i,i);let r;W(t)?r=t:(r=t.handler,n=t);const l=Ft(this),o=ps(s,r.bind(i),n);return l(),o}function bs(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Or=Symbol("_vte"),Nr=e=>e.__isTeleport,Zr=Symbol("_leaveCb");function ei(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ei(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const sn=new WeakMap;function Bt(e,t,n,i,s=!1){if(K(e)){e.forEach((L,D)=>Bt(L,t&&(K(t)?t[D]:t),n,i,s));return}if(Ct(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Bt(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?si(i.component):i.el,l=s?null:r,{i:o,r:c}=e,f=t&&t.r,g=o.refs===U?o.refs={}:o.refs,p=o.setupState,y=H(p),T=p===U?Fi:L=>F(y,L);if(f!=null&&f!==c){if(pi(t),ee(f))g[f]=null,T(f)&&(p[f]=null);else if(re(f)){f.value=null;const L=t;L.k&&(g[L.k]=null)}}if(W(c))Ht(c,o,12,[l,g]);else{const L=ee(c),D=re(c);if(L||D){const te=()=>{if(e.f){const I=L?T(c)?p[c]:g[c]:c.value;if(s)K(I)&&Zn(I,r);else if(K(I))I.includes(r)||I.push(r);else if(L)g[c]=[r],T(c)&&(p[c]=g[c]);else{const N=[r];c.value=N,e.k&&(g[e.k]=N)}}else L?(g[c]=l,T(c)&&(p[c]=l)):D&&(c.value=l,e.k&&(g[e.k]=l))};if(l){const I=()=>{te(),sn.delete(e)};I.id=-1,sn.set(e,I),pe(I,n)}else pi(e),te()}}}function pi(e){const t=sn.get(e);t&&(t.flags|=8,sn.delete(e))}un().requestIdleCallback;un().cancelIdleCallback;const Ct=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function Rr(e,t){xs(e,"a",t)}function jr(e,t){xs(e,"da",t)}function xs(e,t,n=se){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(hn(t,i,n),n){let s=n.parent;for(;s&&s.parent;)vs(s.parent.vnode)&&qr(i,t,n,s),s=s.parent}}function qr(e,t,n,i){const s=hn(t,e,i,!0);ys(()=>{Zn(i[t],s)},n)}function hn(e,t,n=se,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Ie();const o=Ft(n),c=Ke(t,n,e,l);return o(),He(),c});return i?s.unshift(r):s.push(r),r}}const Oe=e=>(t,n=se)=>{(!It||e==="sp")&&hn(e,(...i)=>t(...i),n)},Ur=Oe("bm"),Gr=Oe("m"),Qr=Oe("bu"),Jr=Oe("u"),$r=Oe("bum"),ys=Oe("um"),Yr=Oe("sp"),Xr=Oe("rtg"),el=Oe("rtc");function tl(e,t=se){hn("ec",e,t)}const nl="components";function qe(e,t){return sl(nl,e,!0,t)||e}const il=Symbol.for("v-ndc");function sl(e,t,n=!0,i=!1){const s=ke||se;if(s){const r=s.type;{const o=Zl(r,!1);if(o&&(o===t||o===xe(t)||o===cn(xe(t))))return r}const l=bi(s[e]||r[e],t)||bi(s.appContext[e],t);return!l&&i?r:l}}function bi(e,t){return e&&(e[t]||e[xe(t)]||e[cn(xe(t))])}function ne(e,t,n,i){let s;const r=n,l=K(e);if(l||ee(e)){const o=l&&at(e);let c=!1,f=!1;o&&(c=!me(e),f=Fe(e),e=gn(e)),s=new Array(e.length);for(let g=0,p=e.length;g<p;g++)s[g]=t(c?f?mt(_e(e[g])):_e(e[g]):e[g],g,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r)}else if(J(e))if(e[Symbol.iterator])s=Array.from(e,(o,c)=>t(o,c,void 0,r));else{const o=Object.keys(e);s=new Array(o.length);for(let c=0,f=o.length;c<f;c++){const g=o[c];s[c]=t(e[g],g,c,r)}}else s=[];return s}const Wn=e=>e?Fs(e)?si(e):Wn(e.parent):null,Et=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wn(e.parent),$root:e=>Wn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>e.f||(e.f=()=>{Xn(e.update)}),$nextTick:e=>e.n||(e.n=Kr.bind(e.proxy)),$watch:e=>Fr.bind(e)}),An=(e,t)=>e!==U&&!e.__isScriptSetup&&F(e,t),rl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:l,type:o,appContext:c}=e;if(t[0]!=="$"){const y=l[t];if(y!==void 0)switch(y){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(An(i,t))return l[t]=1,i[t];if(s!==U&&F(s,t))return l[t]=2,s[t];if(F(r,t))return l[t]=3,r[t];if(n!==U&&F(n,t))return l[t]=4,n[t];Dn&&(l[t]=0)}}const f=Et[t];let g,p;if(f)return t==="$attrs"&&ie(e.attrs,"get",""),f(e);if((g=o.__cssModules)&&(g=g[t]))return g;if(n!==U&&F(n,t))return l[t]=4,n[t];if(p=c.config.globalProperties,F(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return An(s,t)?(s[t]=n,!0):i!==U&&F(i,t)?(i[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:l}},o){let c;return!!(n[o]||e!==U&&o[0]!=="$"&&F(e,o)||An(t,o)||F(r,o)||F(i,o)||F(Et,o)||F(s.config.globalProperties,o)||(c=l.__cssModules)&&c[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function mi(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dn=!0;function ll(e){const t=ws(e),n=e.proxy,i=e.ctx;Dn=!1,t.beforeCreate&&vi(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:l,watch:o,provide:c,inject:f,created:g,beforeMount:p,mounted:y,beforeUpdate:T,updated:L,activated:D,deactivated:te,beforeDestroy:I,beforeUnmount:N,destroyed:$,unmounted:C,render:X,renderTracked:G,renderTriggered:ze,errorCaptured:Ze,serverPrefetch:Ot,expose:et,inheritAttrs:xt,components:Nt,directives:Zt,filters:mn}=t;if(f&&ol(f,i,null),l)for(const Y in l){const Z=l[Y];W(Z)&&(i[Y]=Z.bind(n))}if(s){const Y=s.call(n,n);J(Y)&&(e.data=Jn(Y))}if(Dn=!0,r)for(const Y in r){const Z=r[Y],tt=W(Z)?Z.bind(n,n):W(Z.get)?Z.get.bind(n,n):Ee,Rt=!W(Z)&&W(Z.set)?Z.set.bind(n):Ee,nt=de({get:tt,set:Rt});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Se=>nt.value=Se})}if(o)for(const Y in o)ks(o[Y],i,n,Y);if(c){const Y=W(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(Z=>{Vr(Z,Y[Z])})}g&&vi(g,e,"c");function oe(Y,Z){K(Z)?Z.forEach(tt=>Y(tt.bind(n))):Z&&Y(Z.bind(n))}if(oe(Ur,p),oe(Gr,y),oe(Qr,T),oe(Jr,L),oe(Rr,D),oe(jr,te),oe(tl,Ze),oe(el,G),oe(Xr,ze),oe($r,N),oe(ys,C),oe(Yr,Ot),K(et))if(et.length){const Y=e.exposed||(e.exposed={});et.forEach(Z=>{Object.defineProperty(Y,Z,{get:()=>n[Z],set:tt=>n[Z]=tt,enumerable:!0})})}else e.exposed||(e.exposed={});X&&e.render===Ee&&(e.render=X),xt!=null&&(e.inheritAttrs=xt),Nt&&(e.components=Nt),Zt&&(e.directives=Zt),Ot&&ms(e)}function ol(e,t,n=Ee){K(e)&&(e=Vn(e));for(const i in e){const s=e[i];let r;J(s)?"default"in s?r=Jt(s.from||i,s.default,!0):r=Jt(s.from||i):r=Jt(s),re(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[i]=r}}function vi(e,t,n){Ke(K(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function ks(e,t,n,i){let s=i.includes(".")?bs(n,i):()=>n[i];if(ee(e)){const r=t[e];W(r)&&Sn(s,r)}else if(W(e))Sn(s,e.bind(n));else if(J(e))if(K(e))e.forEach(r=>ks(r,t,n,i));else{const r=W(e.handler)?e.handler.bind(n):t[e.handler];W(r)&&Sn(s,r,e)}}function ws(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let c;return o?c=o:!s.length&&!n&&!i?c=t:(c={},s.length&&s.forEach(f=>rn(c,f,l,!0)),rn(c,t,l)),J(t)&&r.set(t,c),c}function rn(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&rn(e,r,n,!0),s&&s.forEach(l=>rn(e,l,n,!0));for(const l in t)if(!(i&&l==="expose")){const o=al[l]||n&&n[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const al={data:xi,props:yi,emits:yi,methods:St,computed:St,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:St,directives:St,watch:cl,provide:xi,inject:dl};function xi(e,t){return t?e?function(){return le(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function dl(e,t){return St(Vn(e),Vn(t))}function Vn(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function St(e,t){return e?le(Object.create(null),e,t):t}function yi(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:le(Object.create(null),mi(e),mi(t??{})):t}function cl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const i in t)n[i]=ae(e[i],t[i]);return n}function _s(){return{app:null,config:{isNativeTag:Fi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ul=0;function gl(e,t){return function(i,s=null){W(i)||(i=le({},i)),s!=null&&!J(s)&&(s=null);const r=_s(),l=new WeakSet,o=[];let c=!1;const f=r.app={_uid:ul++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:jl,get config(){return r.config},set config(g){},use(g,...p){return l.has(g)||(g&&W(g.install)?(l.add(g),g.install(f,...p)):W(g)&&(l.add(g),g(f,...p))),f},mixin(g){return r.mixins.includes(g)||r.mixins.push(g),f},component(g,p){return p?(r.components[g]=p,f):r.components[g]},directive(g,p){return p?(r.directives[g]=p,f):r.directives[g]},mount(g,p,y){if(!c){const T=f._ceVNode||ve(i,s);return T.appContext=r,y===!0?y="svg":y===!1&&(y=void 0),e(T,g,y),c=!0,f._container=g,g.__vue_app__=f,si(T.component)}},onUnmount(g){o.push(g)},unmount(){c&&(Ke(o,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(g,p){return r.provides[g]=p,f},runWithContext(g){const p=bt;bt=f;try{return g()}finally{bt=p}}};return f}}let bt=null;const fl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xe(t)}Modifiers`]||e[`${dt(t)}Modifiers`];function hl(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||U;let s=n;const r=t.startsWith("update:"),l=r&&fl(i,t.slice(7));l&&(l.trim&&(s=n.map(g=>ee(g)?g.trim():g)),l.number&&(s=n.map(Qs)));let o,c=i[o=xn(t)]||i[o=xn(xe(t))];!c&&r&&(c=i[o=xn(dt(t))]),c&&Ke(c,e,6,s);const f=i[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ke(f,e,6,s)}}const pl=new WeakMap;function zs(e,t,n=!1){const i=n?pl:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let l={},o=!1;if(!W(e)){const c=f=>{const g=zs(f,t,!0);g&&(o=!0,le(l,g))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!o?(J(e)&&i.set(e,null),null):(K(r)?r.forEach(c=>l[c]=null):le(l,r),J(e)&&i.set(e,l),l)}function pn(e,t){return!e||!on(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,dt(t))||F(e,t))}function ki(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:l,attrs:o,emit:c,render:f,renderCache:g,props:p,data:y,setupState:T,ctx:L,inheritAttrs:D}=e,te=nn(e);let I,N;try{if(n.shapeFlag&4){const C=s||i,X=C;I=Ce(f.call(X,C,g,p,T,y,L)),N=o}else{const C=t;I=Ce(C.length>1?C(p,{attrs:o,slots:l,emit:c}):C(p,null)),N=t.props?o:bl(o)}}catch(C){Kt.length=0,fn(C,e,1),I=ve($e)}let $=I;if(N&&D!==!1){const C=Object.keys(N),{shapeFlag:X}=$;C.length&&X&7&&(r&&C.some(Nn)&&(N=ml(N,r)),$=vt($,N,!1,!0))}return n.dirs&&($=vt($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ei($,n.transition),I=$,nn(te),I}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||on(n))&&((t||(t={}))[n]=e[n]);return t},ml=(e,t)=>{const n={};for(const i in e)(!Nn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function vl(e,t,n){const{props:i,children:s,component:r}=e,{props:l,children:o,patchFlag:c}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?wi(i,l,f):!!l;if(c&8){const g=t.dynamicProps;for(let p=0;p<g.length;p++){const y=g[p];if(l[y]!==i[y]&&!pn(f,y))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===l?!1:i?l?wi(i,l,f):!0:!!l;return!1}function wi(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!pn(n,r))return!0}return!1}function xl({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ss={},As=()=>Object.create(Ss),Ms=e=>Object.getPrototypeOf(e)===Ss;function yl(e,t,n,i=!1){const s={},r=As();e.propsDefaults=Object.create(null),Ts(e,t,s,r);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=i?s:wr(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function kl(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:l}}=e,o=H(s),[c]=e.propsOptions;let f=!1;if((i||l>0)&&!(l&16)){if(l&8){const g=e.vnode.dynamicProps;for(let p=0;p<g.length;p++){let y=g[p];if(pn(e.emitsOptions,y))continue;const T=t[y];if(c)if(F(r,y))T!==r[y]&&(r[y]=T,f=!0);else{const L=xe(y);s[L]=In(c,o,L,T,e,!1)}else T!==r[y]&&(r[y]=T,f=!0)}}}else{Ts(e,t,s,r)&&(f=!0);let g;for(const p in o)(!t||!F(t,p)&&((g=dt(p))===p||!F(t,g)))&&(c?n&&(n[p]!==void 0||n[g]!==void 0)&&(s[p]=In(c,o,p,void 0,e,!0)):delete s[p]);if(r!==o)for(const p in r)(!t||!F(t,p))&&(delete r[p],f=!0)}f&&De(e.attrs,"set","")}function Ts(e,t,n,i){const[s,r]=e.propsOptions;let l=!1,o;if(t)for(let c in t){if(Mt(c))continue;const f=t[c];let g;s&&F(s,g=xe(c))?!r||!r.includes(g)?n[g]=f:(o||(o={}))[g]=f:pn(e.emitsOptions,c)||(!(c in i)||f!==i[c])&&(i[c]=f,l=!0)}if(r){const c=H(n),f=o||U;for(let g=0;g<r.length;g++){const p=r[g];n[p]=In(s,c,p,f[p],e,!F(f,p))}}return l}function In(e,t,n,i,s,r){const l=e[n];if(l!=null){const o=F(l,"default");if(o&&i===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&W(c)){const{propsDefaults:f}=s;if(n in f)i=f[n];else{const g=Ft(s);i=f[n]=c.call(null,t),g()}}else i=c;s.ce&&s.ce._setProp(n,i)}l[0]&&(r&&!o?i=!1:l[1]&&(i===""||i===dt(n))&&(i=!0))}return i}const wl=new WeakMap;function Ps(e,t,n=!1){const i=n?wl:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,l={},o=[];let c=!1;if(!W(e)){const g=p=>{c=!0;const[y,T]=Ps(p,t,!0);le(l,y),T&&o.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!r&&!c)return J(e)&&i.set(e,ft),ft;if(K(r))for(let g=0;g<r.length;g++){const p=xe(r[g]);_i(p)&&(l[p]=U)}else if(r)for(const g in r){const p=xe(g);if(_i(p)){const y=r[g],T=l[p]=K(y)||W(y)?{type:y}:le({},y),L=T.type;let D=!1,te=!0;if(K(L))for(let I=0;I<L.length;++I){const N=L[I],$=W(N)&&N.name;if($==="Boolean"){D=!0;break}else $==="String"&&(te=!1)}else D=W(L)&&L.name==="Boolean";T[0]=D,T[1]=te,(D||F(T,"default"))&&o.push(p)}}const f=[l,o];return J(e)&&i.set(e,f),f}function _i(e){return e[0]!=="$"&&!Mt(e)}const ti=e=>e==="_"||e==="_ctx"||e==="$stable",ni=e=>K(e)?e.map(Ce):[Ce(e)],_l=(e,t,n)=>{if(t._n)return t;const i=Dr((...s)=>ni(t(...s)),n);return i._c=!1,i},Bs=(e,t,n)=>{const i=e._ctx;for(const s in e){if(ti(s))continue;const r=e[s];if(W(r))t[s]=_l(s,r,i);else if(r!=null){const l=ni(r);t[s]=()=>l}}},Cs=(e,t)=>{const n=ni(t);e.slots.default=()=>n},Es=(e,t,n)=>{for(const i in t)(n||!ti(i))&&(e[i]=t[i])},zl=(e,t,n)=>{const i=e.slots=As();if(e.vnode.shapeFlag&32){const s=t._;s?(Es(i,t,n),n&&ji(i,"_",s,!0)):Bs(t,i)}else t&&Cs(e,t)},Sl=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,l=U;if(i.shapeFlag&32){const o=t._;o?n&&o===1?r=!1:Es(s,t,n):(r=!t.$stable,Bs(t,s)),l=t}else t&&(Cs(e,t),l={default:1});if(r)for(const o in s)!ti(o)&&l[o]==null&&delete s[o]},pe=Bl;function Al(e){return Ml(e)}function Ml(e,t){const n=un();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:l,createText:o,createComment:c,setText:f,setElementText:g,parentNode:p,nextSibling:y,setScopeId:T=Ee,insertStaticContent:L}=e,D=(a,u,h,x=null,b=null,m=null,z=void 0,_=null,k=!!u.dynamicChildren)=>{if(a===u)return;a&&!zt(a,u)&&(x=jt(a),Se(a,b,m,!0),a=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:v,ref:B,shapeFlag:M}=u;switch(v){case bn:te(a,u,h,x);break;case $e:I(a,u,h,x);break;case $t:a==null&&N(u,h,x,z);break;case q:Nt(a,u,h,x,b,m,z,_,k);break;default:M&1?X(a,u,h,x,b,m,z,_,k):M&6?Zt(a,u,h,x,b,m,z,_,k):(M&64||M&128)&&v.process(a,u,h,x,b,m,z,_,k,kt)}B!=null&&b?Bt(B,a&&a.ref,m,u||a,!u):B==null&&a&&a.ref!=null&&Bt(a.ref,null,m,a,!0)},te=(a,u,h,x)=>{if(a==null)i(u.el=o(u.children),h,x);else{const b=u.el=a.el;u.children!==a.children&&f(b,u.children)}},I=(a,u,h,x)=>{a==null?i(u.el=c(u.children||""),h,x):u.el=a.el},N=(a,u,h,x)=>{[a.el,a.anchor]=L(a.children,u,h,x,a.el,a.anchor)},$=({el:a,anchor:u},h,x)=>{let b;for(;a&&a!==u;)b=y(a),i(a,h,x),a=b;i(u,h,x)},C=({el:a,anchor:u})=>{let h;for(;a&&a!==u;)h=y(a),s(a),a=h;s(u)},X=(a,u,h,x,b,m,z,_,k)=>{if(u.type==="svg"?z="svg":u.type==="math"&&(z="mathml"),a==null)G(u,h,x,b,m,z,_,k);else{const v=a.el&&a.el._isVueCE?a.el:null;try{v&&v._beginPatch(),Ot(a,u,b,m,z,_,k)}finally{v&&v._endPatch()}}},G=(a,u,h,x,b,m,z,_)=>{let k,v;const{props:B,shapeFlag:M,transition:P,dirs:E}=a;if(k=a.el=l(a.type,m,B&&B.is,B),M&8?g(k,a.children):M&16&&Ze(a.children,k,null,x,b,Mn(a,m),z,_),E&&it(a,null,x,"created"),ze(k,a,a.scopeId,z,x),B){for(const R in B)R!=="value"&&!Mt(R)&&r(k,R,null,B[R],m,x);"value"in B&&r(k,"value",null,B.value,m),(v=B.onVnodeBeforeMount)&&Pe(v,x,a)}E&&it(a,null,x,"beforeMount");const V=Tl(b,P);V&&P.beforeEnter(k),i(k,u,h),((v=B&&B.onVnodeMounted)||V||E)&&pe(()=>{v&&Pe(v,x,a),V&&P.enter(k),E&&it(a,null,x,"mounted")},b)},ze=(a,u,h,x,b)=>{if(h&&T(a,h),x)for(let m=0;m<x.length;m++)T(a,x[m]);if(b){let m=b.subTree;if(u===m||Ds(m.type)&&(m.ssContent===u||m.ssFallback===u)){const z=b.vnode;ze(a,z,z.scopeId,z.slotScopeIds,b.parent)}}},Ze=(a,u,h,x,b,m,z,_,k=0)=>{for(let v=k;v<a.length;v++){const B=a[v]=_?Ue(a[v]):Ce(a[v]);D(null,B,u,h,x,b,m,z,_)}},Ot=(a,u,h,x,b,m,z)=>{const _=u.el=a.el;let{patchFlag:k,dynamicChildren:v,dirs:B}=u;k|=a.patchFlag&16;const M=a.props||U,P=u.props||U;let E;if(h&&st(h,!1),(E=P.onVnodeBeforeUpdate)&&Pe(E,h,u,a),B&&it(u,a,h,"beforeUpdate"),h&&st(h,!0),(M.innerHTML&&P.innerHTML==null||M.textContent&&P.textContent==null)&&g(_,""),v?et(a.dynamicChildren,v,_,h,x,Mn(u,b),m):z||Z(a,u,_,null,h,x,Mn(u,b),m,!1),k>0){if(k&16)xt(_,M,P,h,b);else if(k&2&&M.class!==P.class&&r(_,"class",null,P.class,b),k&4&&r(_,"style",M.style,P.style,b),k&8){const V=u.dynamicProps;for(let R=0;R<V.length;R++){const O=V[R],ue=M[O],ge=P[O];(ge!==ue||O==="value")&&r(_,O,ue,ge,b,h)}}k&1&&a.children!==u.children&&g(_,u.children)}else!z&&v==null&&xt(_,M,P,h,b);((E=P.onVnodeUpdated)||B)&&pe(()=>{E&&Pe(E,h,u,a),B&&it(u,a,h,"updated")},x)},et=(a,u,h,x,b,m,z)=>{for(let _=0;_<u.length;_++){const k=a[_],v=u[_],B=k.el&&(k.type===q||!zt(k,v)||k.shapeFlag&198)?p(k.el):h;D(k,v,B,null,x,b,m,z,!0)}},xt=(a,u,h,x,b)=>{if(u!==h){if(u!==U)for(const m in u)!Mt(m)&&!(m in h)&&r(a,m,u[m],null,b,x);for(const m in h){if(Mt(m))continue;const z=h[m],_=u[m];z!==_&&m!=="value"&&r(a,m,_,z,b,x)}"value"in h&&r(a,"value",u.value,h.value,b)}},Nt=(a,u,h,x,b,m,z,_,k)=>{const v=u.el=a?a.el:o(""),B=u.anchor=a?a.anchor:o("");let{patchFlag:M,dynamicChildren:P,slotScopeIds:E}=u;E&&(_=_?_.concat(E):E),a==null?(i(v,h,x),i(B,h,x),Ze(u.children||[],h,B,b,m,z,_,k)):M>0&&M&64&&P&&a.dynamicChildren&&a.dynamicChildren.length===P.length?(et(a.dynamicChildren,P,h,b,m,z,_),(u.key!=null||b&&u===b.subTree)&&Ks(a,u,!0)):Z(a,u,h,B,b,m,z,_,k)},Zt=(a,u,h,x,b,m,z,_,k)=>{u.slotScopeIds=_,a==null?u.shapeFlag&512?b.ctx.activate(u,h,x,z,k):mn(u,h,x,b,m,z,k):ri(a,u,k)},mn=(a,u,h,x,b,m,z)=>{const _=a.component=Vl(a,x,b);if(vs(a)&&(_.ctx.renderer=kt),Hl(_,!1,z),_.asyncDep){if(b&&b.registerDep(_,oe,z),!a.el){const k=_.subTree=ve($e);I(null,k,u,h),a.placeholder=k.el}}else oe(_,a,u,h,b,m,z)},ri=(a,u,h)=>{const x=u.component=a.component;if(vl(a,u,h))if(x.asyncDep&&!x.asyncResolved){Y(x,u,h);return}else x.next=u,x.update();else u.el=a.el,x.vnode=u},oe=(a,u,h,x,b,m,z)=>{const _=()=>{if(a.isMounted){let{next:M,bu:P,u:E,parent:V,vnode:R}=a;{const Me=Ls(a);if(Me){M&&(M.el=R.el,Y(a,M,z)),Me.asyncDep.then(()=>{a.isUnmounted||_()});return}}let O=M,ue;st(a,!1),M?(M.el=R.el,Y(a,M,z)):M=R,P&&yn(P),(ue=M.props&&M.props.onVnodeBeforeUpdate)&&Pe(ue,V,M,R),st(a,!0);const ge=ki(a),Ae=a.subTree;a.subTree=ge,D(Ae,ge,p(Ae.el),jt(Ae),a,b,m),M.el=ge.el,O===null&&xl(a,ge.el),E&&pe(E,b),(ue=M.props&&M.props.onVnodeUpdated)&&pe(()=>Pe(ue,V,M,R),b)}else{let M;const{el:P,props:E}=u,{bm:V,m:R,parent:O,root:ue,type:ge}=a,Ae=Ct(u);st(a,!1),V&&yn(V),!Ae&&(M=E&&E.onVnodeBeforeMount)&&Pe(M,O,u),st(a,!0);{ue.ce&&ue.ce._def.shadowRoot!==!1&&ue.ce._injectChildStyle(ge);const Me=a.subTree=ki(a);D(null,Me,h,x,a,b,m),u.el=Me.el}if(R&&pe(R,b),!Ae&&(M=E&&E.onVnodeMounted)){const Me=u;pe(()=>Pe(M,O,Me),b)}(u.shapeFlag&256||O&&Ct(O.vnode)&&O.vnode.shapeFlag&256)&&a.a&&pe(a.a,b),a.isMounted=!0,u=h=x=null}};a.scope.on();const k=a.effect=new Qi(_);a.scope.off();const v=a.update=k.run.bind(k),B=a.job=k.runIfDirty.bind(k);B.i=a,B.id=a.uid,k.scheduler=()=>Xn(B),st(a,!0),v()},Y=(a,u,h)=>{u.component=a;const x=a.vnode.props;a.vnode=u,a.next=null,kl(a,u.props,x,h),Sl(a,u.children,h),Ie(),hi(a),He()},Z=(a,u,h,x,b,m,z,_,k=!1)=>{const v=a&&a.children,B=a?a.shapeFlag:0,M=u.children,{patchFlag:P,shapeFlag:E}=u;if(P>0){if(P&128){Rt(v,M,h,x,b,m,z,_,k);return}else if(P&256){tt(v,M,h,x,b,m,z,_,k);return}}E&8?(B&16&&yt(v,b,m),M!==v&&g(h,M)):B&16?E&16?Rt(v,M,h,x,b,m,z,_,k):yt(v,b,m,!0):(B&8&&g(h,""),E&16&&Ze(M,h,x,b,m,z,_,k))},tt=(a,u,h,x,b,m,z,_,k)=>{a=a||ft,u=u||ft;const v=a.length,B=u.length,M=Math.min(v,B);let P;for(P=0;P<M;P++){const E=u[P]=k?Ue(u[P]):Ce(u[P]);D(a[P],E,h,null,b,m,z,_,k)}v>B?yt(a,b,m,!0,!1,M):Ze(u,h,x,b,m,z,_,k,M)},Rt=(a,u,h,x,b,m,z,_,k)=>{let v=0;const B=u.length;let M=a.length-1,P=B-1;for(;v<=M&&v<=P;){const E=a[v],V=u[v]=k?Ue(u[v]):Ce(u[v]);if(zt(E,V))D(E,V,h,null,b,m,z,_,k);else break;v++}for(;v<=M&&v<=P;){const E=a[M],V=u[P]=k?Ue(u[P]):Ce(u[P]);if(zt(E,V))D(E,V,h,null,b,m,z,_,k);else break;M--,P--}if(v>M){if(v<=P){const E=P+1,V=E<B?u[E].el:x;for(;v<=P;)D(null,u[v]=k?Ue(u[v]):Ce(u[v]),h,V,b,m,z,_,k),v++}}else if(v>P)for(;v<=M;)Se(a[v],b,m,!0),v++;else{const E=v,V=v,R=new Map;for(v=V;v<=P;v++){const he=u[v]=k?Ue(u[v]):Ce(u[v]);he.key!=null&&R.set(he.key,v)}let O,ue=0;const ge=P-V+1;let Ae=!1,Me=0;const wt=new Array(ge);for(v=0;v<ge;v++)wt[v]=0;for(v=E;v<=M;v++){const he=a[v];if(ue>=ge){Se(he,b,m,!0);continue}let Te;if(he.key!=null)Te=R.get(he.key);else for(O=V;O<=P;O++)if(wt[O-V]===0&&zt(he,u[O])){Te=O;break}Te===void 0?Se(he,b,m,!0):(wt[Te-V]=v+1,Te>=Me?Me=Te:Ae=!0,D(he,u[Te],h,null,b,m,z,_,k),ue++)}const ai=Ae?Pl(wt):ft;for(O=ai.length-1,v=ge-1;v>=0;v--){const he=V+v,Te=u[he],di=u[he+1],ci=he+1<B?di.el||Ws(di):x;wt[v]===0?D(null,Te,h,ci,b,m,z,_,k):Ae&&(O<0||v!==ai[O]?nt(Te,h,ci,2):O--)}}},nt=(a,u,h,x,b=null)=>{const{el:m,type:z,transition:_,children:k,shapeFlag:v}=a;if(v&6){nt(a.component.subTree,u,h,x);return}if(v&128){a.suspense.move(u,h,x);return}if(v&64){z.move(a,u,h,kt);return}if(z===q){i(m,u,h);for(let M=0;M<k.length;M++)nt(k[M],u,h,x);i(a.anchor,u,h);return}if(z===$t){$(a,u,h);return}if(x!==2&&v&1&&_)if(x===0)_.beforeEnter(m),i(m,u,h),pe(()=>_.enter(m),b);else{const{leave:M,delayLeave:P,afterLeave:E}=_,V=()=>{a.ctx.isUnmounted?s(m):i(m,u,h)},R=()=>{m._isLeaving&&m[Zr](!0),M(m,()=>{V(),E&&E()})};P?P(m,V,R):R()}else i(m,u,h)},Se=(a,u,h,x=!1,b=!1)=>{const{type:m,props:z,ref:_,children:k,dynamicChildren:v,shapeFlag:B,patchFlag:M,dirs:P,cacheIndex:E}=a;if(M===-2&&(b=!1),_!=null&&(Ie(),Bt(_,null,h,a,!0),He()),E!=null&&(u.renderCache[E]=void 0),B&256){u.ctx.deactivate(a);return}const V=B&1&&P,R=!Ct(a);let O;if(R&&(O=z&&z.onVnodeBeforeUnmount)&&Pe(O,u,a),B&6)Rs(a.component,h,x);else{if(B&128){a.suspense.unmount(h,x);return}V&&it(a,null,u,"beforeUnmount"),B&64?a.type.remove(a,u,h,kt,x):v&&!v.hasOnce&&(m!==q||M>0&&M&64)?yt(v,u,h,!1,!0):(m===q&&M&384||!b&&B&16)&&yt(k,u,h),x&&li(a)}(R&&(O=z&&z.onVnodeUnmounted)||V)&&pe(()=>{O&&Pe(O,u,a),V&&it(a,null,u,"unmounted")},h)},li=a=>{const{type:u,el:h,anchor:x,transition:b}=a;if(u===q){Zs(h,x);return}if(u===$t){C(a);return}const m=()=>{s(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(a.shapeFlag&1&&b&&!b.persisted){const{leave:z,delayLeave:_}=b,k=()=>z(h,m);_?_(a.el,m,k):k()}else m()},Zs=(a,u)=>{let h;for(;a!==u;)h=y(a),s(a),a=h;s(u)},Rs=(a,u,h)=>{const{bum:x,scope:b,job:m,subTree:z,um:_,m:k,a:v}=a;zi(k),zi(v),x&&yn(x),b.stop(),m&&(m.flags|=8,Se(z,a,u,h)),_&&pe(_,u),pe(()=>{a.isUnmounted=!0},u)},yt=(a,u,h,x=!1,b=!1,m=0)=>{for(let z=m;z<a.length;z++)Se(a[z],u,h,x,b)},jt=a=>{if(a.shapeFlag&6)return jt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=y(a.anchor||a.el),h=u&&u[Or];return h?y(h):u};let vn=!1;const oi=(a,u,h)=>{let x;a==null?u._vnode&&(Se(u._vnode,null,null,!0),x=u._vnode.component):D(u._vnode||null,a,u,null,null,null,h),u._vnode=a,vn||(vn=!0,hi(x),gs(),vn=!1)},kt={p:D,um:Se,m:nt,r:li,mt:mn,mc:Ze,pc:Z,pbc:et,n:jt,o:e};return{render:oi,hydrate:void 0,createApp:gl(oi)}}function Mn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function st({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Tl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ks(e,t,n=!1){const i=e.children,s=t.children;if(K(i)&&K(s))for(let r=0;r<i.length;r++){const l=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ue(s[r]),o.el=l.el),!n&&o.patchFlag!==-2&&Ks(l,o)),o.type===bn&&(o.patchFlag!==-1?o.el=l.el:o.__elIndex=r+(e.type===q?1:0)),o.type===$e&&!o.el&&(o.el=l.el)}}function Pl(e){const t=e.slice(),n=[0];let i,s,r,l,o;const c=e.length;for(i=0;i<c;i++){const f=e[i];if(f!==0){if(s=n[n.length-1],e[s]<f){t[i]=s,n.push(i);continue}for(r=0,l=n.length-1;r<l;)o=r+l>>1,e[n[o]]<f?r=o+1:l=o;f<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}function Ls(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ls(t)}function zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ws(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ws(t.subTree):null}const Ds=e=>e.__isSuspense;function Bl(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Wr(e)}const q=Symbol.for("v-fgt"),bn=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),Kt=[];let be=null;function w(e=!1){Kt.push(be=e?null:[])}function Cl(){Kt.pop(),be=Kt[Kt.length-1]||null}let Vt=1;function Si(e,t=!1){Vt+=e,e<0&&be&&t&&(be.hasOnce=!0)}function Vs(e){return e.dynamicChildren=Vt>0?be||ft:null,Cl(),Vt>0&&be&&be.push(e),e}function S(e,t,n,i,s,r){return Vs(d(e,t,n,i,s,r,!0))}function lt(e,t,n,i,s){return Vs(ve(e,t,n,i,s,!0))}function Is(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const Hs=({key:e})=>e??null,Yt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||re(e)||W(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function d(e,t=null,n=null,i=0,s=null,r=e===q?0:1,l=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hs(t),ref:t&&Yt(t),scopeId:hs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return o?(ii(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ee(n)?8:16),Vt>0&&!l&&be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&be.push(c),c}const ve=El;function El(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===il)&&(e=$e),Is(e)){const o=vt(e,t,!0);return n&&ii(o,n),Vt>0&&!r&&be&&(o.shapeFlag&6?be[be.indexOf(e)]=o:be.push(o)),o.patchFlag=-2,o}if(Rl(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:o,style:c}=t;o&&!ee(o)&&(t.class=ye(o)),J(c)&&(Yn(c)&&!K(c)&&(c=le({},c)),t.style=Ve(c))}const l=ee(e)?1:Ds(e)?128:Nr(e)?64:J(e)?4:W(e)?2:0;return d(e,t,n,i,s,l,r,!0)}function Kl(e){return e?Yn(e)||Ms(e)?le({},e):e:null}function vt(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:l,children:o,transition:c}=e,f=t?Ll(s||{},t):s,g={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Hs(f),ref:t&&t.ref?n&&r?K(r)?r.concat(Yt(t)):[r,Yt(t)]:Yt(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&ei(g,c.clone(g)),g}function At(e=" ",t=0){return ve(bn,null,e,t)}function Ye(e,t){const n=ve($t,null,e);return n.staticCount=t,n}function Q(e="",t=!1){return t?(w(),lt($e,null,e)):ve($e,null,e)}function Ce(e){return e==null||typeof e=="boolean"?ve($e):K(e)?ve(q,null,e.slice()):Is(e)?Ue(e):ve(bn,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vt(e)}function ii(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ii(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ms(t)?t._ctx=ke:s===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),i&64?(n=16,t=[At(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(s==="style")t.style=Ve([t.style,i.style]);else if(on(s)){const r=t[s],l=i[s];l&&r!==l&&!(K(r)&&r.includes(l))&&(t[s]=r?[].concat(r,l):l)}else s!==""&&(t[s]=i[s])}return t}function Pe(e,t,n,i=null){Ke(e,t,7,[n,i])}const Wl=_s();let Dl=0;function Vl(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Wl,r={uid:Dl++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ps(i,s),emitsOptions:zs(i,s),emit:null,emitted:null,propsDefaults:U,inheritAttrs:i.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=hl.bind(null,r),e.ce&&e.ce(r),r}let se=null;const Il=()=>se||ke;let ln,Hn;{const e=un(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(l=>l(r)):s[0](r)}};ln=t("__VUE_INSTANCE_SETTERS__",n=>se=n),Hn=t("__VUE_SSR_SETTERS__",n=>It=n)}const Ft=e=>{const t=se;return ln(e),e.scope.on(),()=>{e.scope.off(),ln(t)}},Ai=()=>{se&&se.scope.off(),ln(null)};function Fs(e){return e.vnode.shapeFlag&4}let It=!1;function Hl(e,t=!1,n=!1){t&&Hn(t);const{props:i,children:s}=e.vnode,r=Fs(e);yl(e,i,r,t),zl(e,s,n||t);const l=r?Fl(e,t):void 0;return t&&Hn(!1),l}function Fl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,rl);const{setup:i}=n;if(i){Ie();const s=e.setupContext=i.length>1?Nl(e):null,r=Ft(e),l=Ht(i,e,0,[e.props,s]),o=Ni(l);if(He(),r(),(o||e.sp)&&!Ct(e)&&ms(e),o){if(l.then(Ai,Ai),t)return l.then(c=>{Mi(e,c)}).catch(c=>{fn(c,e,0)});e.asyncDep=l}else Mi(e,l)}else Os(e)}function Mi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=ds(t)),Os(e)}function Os(e,t,n){const i=e.type;e.render||(e.render=i.render||Ee);{const s=Ft(e);Ie();try{ll(e)}finally{He(),s()}}}const Ol={get(e,t){return ie(e,"get",""),e[t]}};function Nl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ol),slots:e.slots,emit:e.emit,expose:t}}function si(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ds(_r(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Et)return Et[n](e)},has(t,n){return n in t||n in Et}})):e.proxy}function Zl(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Rl(e){return W(e)&&"__vccOpts"in e}const de=(e,t)=>Pr(e,t,It),jl="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fn;const Ti=typeof window<"u"&&window.trustedTypes;if(Ti)try{Fn=Ti.createPolicy("vue",{createHTML:e=>e})}catch{}const Ns=Fn?e=>Fn.createHTML(e):e=>e,ql="http://www.w3.org/2000/svg",Ul="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,Pi=We&&We.createElement("template"),Gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?We.createElementNS(ql,e):t==="mathml"?We.createElementNS(Ul,e):n?We.createElement(e,{is:n}):We.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const l=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Pi.innerHTML=Ns(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=Pi.content;if(i==="svg"||i==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ql=Symbol("_vtc");function Jl(e,t,n){const i=e[Ql];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Bi=Symbol("_vod"),$l=Symbol("_vsh"),Yl=Symbol(""),Xl=/(?:^|;)\s*display\s*:/;function eo(e,t,n){const i=e.style,s=ee(n);let r=!1;if(n&&!s){if(t)if(ee(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();n[o]==null&&Xt(i,o,"")}else for(const l in t)n[l]==null&&Xt(i,l,"");for(const l in n)l==="display"&&(r=!0),Xt(i,l,n[l])}else if(s){if(t!==n){const l=i[Yl];l&&(n+=";"+l),i.cssText=n,r=Xl.test(n)}}else t&&e.removeAttribute("style");Bi in e&&(e[Bi]=r?i.display:"",e[$l]&&(i.display="none"))}const Ci=/\s*!important$/;function Xt(e,t,n){if(K(n))n.forEach(i=>Xt(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=to(e,t);Ci.test(n)?e.setProperty(dt(i),n.replace(Ci,""),"important"):e[i]=n}}const Ei=["Webkit","Moz","ms"],Tn={};function to(e,t){const n=Tn[t];if(n)return n;let i=xe(t);if(i!=="filter"&&i in e)return Tn[t]=i;i=cn(i);for(let s=0;s<Ei.length;s++){const r=Ei[s]+i;if(r in e)return Tn[t]=r}return t}const Ki="http://www.w3.org/1999/xlink";function Li(e,t,n,i,s,r=tr(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ki,t.slice(6,t.length)):e.setAttributeNS(Ki,t,n):n==null||r&&!qi(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Xe(n)?String(n):n)}function Wi(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ns(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=qi(n):n==null&&o==="string"?(n="",l=!0):o==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function no(e,t,n,i){e.addEventListener(t,n,i)}function io(e,t,n,i){e.removeEventListener(t,n,i)}const Di=Symbol("_vei");function so(e,t,n,i,s=null){const r=e[Di]||(e[Di]={}),l=r[t];if(i&&l)l.value=i;else{const[o,c]=ro(t);if(i){const f=r[t]=ao(i,s);no(e,o,f,c)}else l&&(io(e,o,l,c),r[t]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function ro(e){let t;if(Vi.test(e)){t={};let i;for(;i=e.match(Vi);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dt(e.slice(2)),t]}let Pn=0;const lo=Promise.resolve(),oo=()=>Pn||(lo.then(()=>Pn=0),Pn=Date.now());function ao(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ke(co(i,n.value),t,5,[i])};return n.value=e,n.attached=oo(),n}function co(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ii=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uo=(e,t,n,i,s,r)=>{const l=s==="svg";t==="class"?Jl(e,i,l):t==="style"?eo(e,n,i):on(t)?Nn(t)||so(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):go(e,t,i,l))?(Wi(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Li(e,t,i,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ee(i))?Wi(e,xe(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Li(e,t,i,l))};function go(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ii(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ii(t)&&ee(n)?!1:t in e}const fo=["ctrl","shift","alt","meta"],ho={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fo.some(n=>e[`${n}Key`]&&!t.includes(n))},Qt=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(s,...r)=>{for(let l=0;l<t.length;l++){const o=ho[t[l]];if(o&&o(s,t))return}return e(s,...r)})},po=le({patchProp:uo},Gl);let Hi;function bo(){return Hi||(Hi=Al(po))}const mo=(...e)=>{const t=bo().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=xo(i);if(!s)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,vo(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function vo(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xo(e){return ee(e)?document.querySelector(e):e}const gt=[{id:"lean",title:"Lean Management",icon:"🏭",description:"Verschwendung vermeiden, Wertschöpfung maximieren",color:"primary",slides:[{type:"intro",title:"Lean Management",subtitle:"Methoden zur Optimierung von Produktionsprozessen",icon:"🏭"},{type:"content",title:"Übersicht der Prinzipien im Lean Management",content:`
          <h3>Die 5 Grundpfeiler des Lean Managements</h3>
          <p>Lean Management basiert auf <strong>5 zusammenhängenden Prinzipien</strong>, die wie Puzzleteile ineinandergreifen:</p>

          <div style="background: linear-gradient(135deg, #4c6ef5 0%, #5c7cfa 100%); padding: 30px; border-radius: 16px; margin: 25px 0; color: white;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">⚖️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">1. Wert identifizieren</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Fokus auf kundenrelevanten Nutzen</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">📊</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">2. Wertstromanalyse</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Visualisierung der Prozesskette</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem, margin-bottom: 10px;">⚙️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">3. Prozessoptimierung</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Eliminierung von Engpässen</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem; margin-bottom: 10px;">⏱️</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">4. Just-in-Time</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Bedarfsorientierte Produktion</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 2rem, margin-bottom: 10px;">📈</div>
                <h4 style="margin: 0 0 8px 0; font-size: 1.1rem;">5. Kontinuierliche Verbesserung</h4>
                <p style="margin: 0; font-size: 0.9rem; opacity: 0.95;">Stetige Prozessanpassung</p>
              </div>
            </div>
          </div>

          <h3>Grundpfeiler des Lean Managements - Der Prozesskreislauf</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">1️⃣ Schaffen von Werten</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Eine konsequente Kundenorientierung eliminiert unnötige Prozesse</p>
                </div>
              </div>
              <div style="font-size: 2rem; color: #6366f1;">→</div>
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">2️⃣ Vermeidung von Verschwendung</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Das Eliminieren von Verschwendung schafft Raum für Verbesserungen</p>
                </div>
              </div>
              <div style="font-size: 2rem; color: #6366f1;">→</div>
              <div style="flex: 1; min-width: 200px; text-align: center;">
                <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; padding: 20px; border-radius: 12px; margin-bottom: 10px;">
                  <h4 style="margin: 0 0 10px 0;">3️⃣ Stetige Prozessoptimierung</h4>
                  <p style="margin: 0; font-size: 0.9rem;">Kontinuierliche Optimierung steigert den Kundenwert</p>
                </div>
              </div>
            </div>
          </div>
        `},{type:"content",title:"5S-System - Sauberkeit am Arbeitsplatz",content:`
          <h3>Die 5S-Methode für Sauberkeit am Arbeitsplatz</h3>
          <p>Das 5S-System ist eine japanische Methode zur <strong>systematischen Arbeitsplatzorganisation</strong> und bildet die Grundlage für effiziente Prozesse.</p>

          <div style="margin: 25px 0;">
            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(99, 102, 241, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #6366f1;">
              <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">1</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #6366f1;">Seiri – Sortieren</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Sortieren</em> – alles, was man nicht am Arbeitsplatz (z.B. Schreibtisch) benötigt, wird entfernt.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(16, 185, 129, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #10b981;">
              <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">2</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #10b981;">Seiton – In Ordnung bringen / Systematisieren</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Systematisieren</em> – das, was man braucht, wird nach Wichtigkeit sortiert.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(59, 130, 246, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #3b82f6;">
              <div style="background: linear-gradient(135deg, #3b82f6, #60a5fa); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">3</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #3b82f6;">Seiso – Glänzen / Säubern</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Säubern</em> – der gesamte Arbeitsplatz und alles, was sich darauf befindet, wird gesäubert.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(245, 158, 11, 0.08); border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #f59e0b;">
              <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">4</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #f59e0b;">Seiketsu – Standardisieren Sie</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Standardisieren</em> – die Schritte eins bis drei werden regelmäßig vor und nach der Arbeit angewendet.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(139, 92, 246, 0.08); border-radius: 10px; border-left: 4px solid #8b5cf6;">
              <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">5</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 8px 0; color: #8b5cf6;">Shitsuke – Aufrechterhaltung / Selbstdisziplin</h4>
                <p style="margin: 0; line-height: 1.6;"><em>Selbstdisziplin</em> – alle Mitarbeiter wenden die vier Schritte regelmäßig an; das Management unterstützt sie dabei.</p>
              </div>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">✅ Nutzen des 5S-Systems:</h4>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
              <li>Erhöhte Produktivität durch optimierte Arbeitsabläufe</li>
              <li>Reduzierte Suchzeiten und weniger Verschwendung</li>
              <li>Verbesserte Arbeitssicherheit und Qualität</li>
              <li>Basis für kontinuierliche Verbesserung (Kaizen)</li>
            </ul>
          </div>
        `},{type:"content",title:"Muda, Mura und Muri - Die 3 MU-Methode",content:`
          <h3>Die 3 MU des Lean Managements</h3>
          <p>Im Lean Management werden drei Arten von Problemen unterschieden, die alle mit "Mu" beginnen:</p>

          <div style="background: linear-gradient(135deg, #4c6ef5, #5c7cfa); padding: 30px; border-radius: 16px; margin: 25px 0; color: white;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">🗑️</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Muda</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">7 Arten von Verschwendung</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">📊</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Mura</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">Ungleichmäßige Auslastung</p>
              </div>
              <div style="background: rgba(255, 255, 255, 0.15); padding: 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.3);">
                <div style="font-size: 3rem; text-align: center; margin-bottom: 15px;">⚠️</div>
                <h3 style="margin: 0 0 15px 0; text-align: center; font-size: 1.5rem;">Muri</h3>
                <p style="margin: 0 0 10px 0; text-align: center; font-weight: 600;">Überlastung, ungesunde Tätigkeiten</p>
              </div>
            </div>
          </div>

          <h3>🗑️ Muda - Sieben Arten der Verschwendung im Betrieb</h3>
          <div style="background: rgba(220, 38, 38, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <ol style="line-height: 2; margin: 0;">
              <li><strong>Transport:</strong> Unnötige Bewegungen von Material und Produkten</li>
              <li><strong>Bestände:</strong> Überschüssige Lagerbestände binden Kapital</li>
              <li><strong>Bewegung:</strong> Unnötige Bewegungen von Menschen im Arbeitsablauf</li>
              <li><strong>Warten:</strong> Stillstandszeiten und Wartezeiten in Prozessen</li>
              <li><strong>Überproduktion:</strong> Mehr produzieren als aktuell benötigt wird</li>
              <li><strong>Überbearbeitung / Überverarbeitung:</strong> Mehr Aufwand als vom Kunden gefordert</li>
              <li><strong>Fehler und Nacharbeit:</strong> Ausschuss und Korrekturen</li>
            </ol>
          </div>

          <h3>📊 Mura - Unregelmäßigkeiten und Ungleichmäßigkeiten</h3>
          <div style="background: rgba(245, 158, 11, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0 0 15px 0; line-height: 1.8;"><strong>Mura</strong> bezeichnet <strong>Unregelmäßigkeiten und Ungleichmäßigkeiten in Prozessen</strong>, wie z.B.:</p>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Schwankende Produktionsmengen</li>
              <li>Ungleiche Arbeitslast zwischen Mitarbeitern oder Maschinen</li>
              <li>Unausgeglichene Materialflüsse</li>
            </ul>
            <p style="margin: 15px 0 0 0; line-height: 1.8;"><em>Ungleichmäßigkeiten (Mura) können zu Überlastungen (Muri) führen, die ihrerseits verschiedene Arten von Verschwendungen (Muda) erzeugen.</em></p>
          </div>

          <h3>⚠️ Muri - Überlastung von Menschen und Maschinen</h3>
          <div style="background: rgba(139, 92, 246, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0 0 15px 0; line-height: 1.8;"><strong>Muri</strong> bedeutet <strong>Überlastung von Menschen und Maschinen</strong>, wie z.B.:</p>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Zu hohe Arbeitsbelastung für Mitarbeiter</li>
              <li>Überbeanspruchung von Maschinen über ihre Kapazität hinaus</li>
              <li>Unrealistische Zeitvorgaben und Arbeitsziele</li>
              <li>Gesundheitsrisiken durch übermäßige Belastung</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">🔄 Zusammenhang der 3 MU:</h4>
            <p style="margin: 0; line-height: 1.8;">Ungleichmäßigkeiten (Mura) können zu Überlastungen (Muri) führen, die ihrerseits verschiedene Arten von Verschwendungen (Muda) erzeugen. Die Eliminierung aller drei Arten ist essentiell für ein effizientes Lean Management.</p>
          </div>
        `},{type:"content",title:"Zusammenfassung & Wiederholung",content:`
          <h3>📚 Zusammenfassung: Lean Management</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Hier sind die wichtigsten Konzepte auf einen Blick - perfekt zur Vorbereitung auf das Quiz!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 Hauptziel des Lean Management</h4>
            <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;"><strong>Verschwendung minimieren</strong> und <strong>Wertschöpfung maximieren</strong> durch konsequente Kundenorientierung und kontinuierliche Verbesserung.</p>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">Die 5 Grundprinzipien des Lean Management</h4>
            <ol style="margin: 0; line-height: 2;">
              <li><strong>Wert identifizieren</strong> - Fokus auf kundenrelevanten Nutzen</li>
              <li><strong>Wertstromanalyse</strong> - Visualisierung der Prozesskette</li>
              <li><strong>Prozessoptimierung</strong> - Eliminierung von Engpässen</li>
              <li><strong>Just-in-Time (Pull-Prinzip)</strong> - Bedarfsorientierte Produktion</li>
              <li><strong>Kontinuierliche Verbesserung (Kaizen)</strong> - Stetige Prozessanpassung</li>
            </ol>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">Die 5S-Methode (Arbeitsplatzorganisation)</h4>
            <ol style="margin: 0; line-height: 2;">
              <li><strong>Seiri</strong> - Sortieren (Unnötiges entfernen)</li>
              <li><strong>Seiton</strong> - Systematisieren (Nach Wichtigkeit ordnen)</li>
              <li><strong>Seiso</strong> - Säubern (Arbeitsplatz reinigen)</li>
              <li><strong>Seiketsu</strong> - Standardisieren (Einheitliche Regeln)</li>
              <li><strong>Shitsuke</strong> - Selbstdisziplin (Regeln einhalten)</li>
            </ol>
          </div>

          <div style="background: rgba(139, 92, 246, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #8b5cf6; margin: 0 0 15px 0;">Die 3 MU - Arten der Ineffizienz</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>Muda (Verschwendung)</strong> - 7 Arten: Überproduktion, Wartezeiten, Transport, Überbearbeitung, Bestände, Bewegung, Fehler</li>
              <li><strong>Mura (Ungleichmäßigkeit)</strong> - Schwankungen in Prozessen, unregelmäßige Arbeitsbelastung</li>
              <li><strong>Muri (Überlastung)</strong> - Überbeanspruchung von Menschen und Maschinen</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>Pull-Prinzip = Produktion nur auf Kundenbestellung (nicht auf Vorrat)</li>
              <li>Kaizen = Kontinuierliche Verbesserung durch alle Mitarbeiter</li>
              <li>Die 3 MU hängen zusammen: Mura → Muri → Muda</li>
            </ul>
          </div>
        `}],quiz:{questions:[{question:"Was ist das Hauptziel von Lean Management?",answers:["Maximierung der Produktion","Verschwendung minimieren und Wertschöpfung maximieren","Kosten senken durch Personalabbau","Automatisierung aller Prozesse"],correct:1,explanation:"Lean Management zielt darauf ab, Verschwendung (Muda) zu eliminieren und gleichzeitig die Wertschöpfung für den Kunden zu maximieren."},{question:"Welche der folgenden ist KEINE der 7 Arten der Verschwendung (Muda)?",answers:["Überproduktion","Wartezeiten","Qualitätskontrolle","Bestände"],correct:2,explanation:"Qualitätskontrolle ist keine Verschwendung. Die 7 Mudas sind: Überproduktion, Wartezeiten, Transport, Überbearbeitung, Bestände, Bewegung und Fehler."},{question:"Was bedeutet das Pull-Prinzip im Lean Management?",answers:["Maximale Auslastung der Maschinen","Produktion auf Vorrat","Produktion nur auf Kundenbestellung","Schnellere Lieferzeiten"],correct:2,explanation:"Das Pull-Prinzip bedeutet, dass nur produziert wird, wenn tatsächlich eine Kundenbestellung vorliegt - im Gegensatz zur Produktion auf Vorrat (Push-Prinzip)."},{question:'Wofür steht das "S" in der 5S-Methode an dritter Stelle?',answers:["Sortieren","Systematisieren","Säubern","Standardisieren"],correct:2,explanation:"Die 5S sind in der Reihenfolge: Seiri (Sortieren), Seiton (Systematisieren), Seiso (Säubern), Seiketsu (Standardisieren), Shitsuke (Selbstdisziplin)."},{question:"Was bedeutet Kaizen?",answers:["Automatisierung","Kontinuierliche Verbesserung","Kostenreduktion","Qualitätskontrolle"],correct:1,explanation:'Kaizen bedeutet "kontinuierliche Verbesserung" und ist ein zentrales Element des Lean Managements, bei dem alle Mitarbeiter einbezogen werden.'}]}},{id:"abc-xyz",title:"ABC-XYZ Analyse",icon:"📊",description:"Bewertung und Verteilung von Waren im Lager",color:"secondary",slides:[{type:"intro",title:"ABC-XYZ Analyse",subtitle:"Bewertung und Verteilung der Waren im Lager",icon:"📊"},{type:"content",title:"ABC-Analyse - Grundlagen",content:`
          <h3>Was ist die ABC-Analyse?</h3>
          <p>Die ABC-Analyse ist eine betriebswirtschaftliche Methode zur <strong>Bewertung und Klassifizierung von Waren im Lager</strong> nach ihrem Verbrauchswert.</p>

          <h3>Berechnung</h3>
          <p><strong>Wert × Verbrauch = Verbrauchswert für den Artikel</strong></p>
          <ol>
            <li>Summe der Verbrauchswerte der Artikel berechnen</li>
            <li>Anteil in % = Verbrauchswert einzelner Artikel / Summe der Verbrauchswerte</li>
            <li>Kumulierter Anteil = Anteil in % aufrechnen</li>
            <li>Einteilung in die Klassen A, B oder C</li>
          </ol>

          <h3>Klasseneinteilung</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Kumulierter Anteil</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bedeutung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>A-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0 - 80%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Hoher Wertanteil</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>B-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">80 - 95%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Mittlerer Wertanteil</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>C-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">95 - 100%</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Niedriger Wertanteil</td>
            </tr>
          </table>

          <h3>Praxisbeispiel</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0; font-size: 0.9em;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nummer</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Wert</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauchswert</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Anteil %</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Kum. %</th>
              <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1007</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€136,20</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">4.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€544.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">43,63%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">43,63%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.2);"><strong>A</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1009</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€37,85</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€454.200</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">36,37%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">80,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(99, 102, 241, 0.2);"><strong>A</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1004</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€17,50</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">6.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€105.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8,41%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">88,41%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1006</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€6,25</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€50.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">4,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">92,42%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1001</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€3,25</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">10.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€32.500</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">2,60%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">95,02%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.2);"><strong>B</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1005</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,60</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.400</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€19.840</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,59%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">96,61%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1008</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€2,10</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">6.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.280</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,14%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">97,75%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1002</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,10</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">12.800</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.080</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,13%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">98,88%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1003</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1,75</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">8.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€14.000</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">1,12%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">100,00%</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.2);"><strong>C</strong></td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.05); font-weight: bold;">
              <td colspan="3" style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Gesamt</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">€1.248.700</td>
              <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">100%</td>
              <td colspan="2" style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"></td>
            </tr>
          </table>
        `},{type:"content",title:"XYZ-Analyse - Grundlagen",content:`
          <h3>Was ist die XYZ-Analyse?</h3>
          <p>Die XYZ-Analyse klassifiziert Artikel nach der <strong>Regelmäßigkeit ihres Verbrauchs</strong> und der <strong>Vorhersagegenauigkeit</strong>.</p>

          <h3>Variationskoeffizient (VK)</h3>
          <p><strong>VK = Standardabweichung / Mittelwert</strong></p>
          <p>Der Variationskoeffizient ist ein Maß für die Schwankung des Verbrauchs.</p>

          <h3>Klasseneinteilung</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Klasse</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Variationskoeffizient</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0 - 0,49</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Konstant (gut planbar)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">0,5 - 0,99</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Schwankend (mittel planbar)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z-Klasse</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">> 1</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Sporadisch (schlecht planbar)</td>
            </tr>
          </table>

          <h3>Berechnungsbeispiel</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>Datensatz a) Mittelwert = 50, Standardabweichung = 10</h4>
            <p><strong>VK = 10/50 = 0,2</strong> → <span style="color: #6366f1; font-weight: bold;">Klasse X</span></p>

            <h4>Datensatz b) Mittelwert = 100, Standardabweichung = 20</h4>
            <p><strong>VK = 20/100 = 0,2</strong> → <span style="color: #6366f1; font-weight: bold;">Klasse X</span></p>

            <h4>Datensatz c) Mittelwert = 30, Standardabweichung = 35</h4>
            <p><strong>VK = 35/30 ≈ 1,167</strong> → <span style="color: #f59e0b; font-weight: bold;">Klasse Z</span></p>
          </div>
        `},{type:"content",title:"RSU-Begrifflichkeit",content:`
          <h3>Einteilung der Artikel nach Verbrauchsart</h3>
          <p>Zusätzlich zur ABC-XYZ-Analyse werden Artikel nach ihrer Verbrauchsart klassifiziert:</p>

          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Typ</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bezeichnung</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Beschreibung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>R-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Regelmäßiger Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel mit konstantem und gleichmäßigem Verbrauch</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>S-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Saisonaler Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel mit Schwankungen, die auf saisonale Nachfrage zurückzuführen sind</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>U-Artikel</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Unregelmäßiger Verbrauch</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Artikel, deren Verbrauch unvorhersehbar ist</td>
            </tr>
          </table>
        `},{type:"content",title:"ABC-XYZ Matrix & Beschaffungsstrategien",content:`
          <h3>Kombinierte ABC-XYZ Matrix</h3>
          <p>Die Kombination von ABC- und XYZ-Analyse ergibt eine <strong>9-Felder-Matrix</strong> für differenzierte Beschaffungsstrategien.</p>

          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Verbrauch ↓ / Wert →</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">A (hoch)</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">B (moderat)</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">C (niedrig)</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X (konstant)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Bestellung nach<br>Verbrauch
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y (schwankend)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(245, 158, 11, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(220, 38, 38, 0.15);">
                <strong>Schwer planbar</strong><br>
                Bestellung nach<br>Bedarf
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(139, 92, 246, 0.15);">
                <strong>Keine Planung nötig</strong><br>
                Einmalige Bestellung<br>wenn notwendig
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z (sporadisch)</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(16, 185, 129, 0.15);">
                <strong>Gut planbar</strong><br>
                Just-in-Time oder<br>Just-in-Sequence
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(220, 38, 38, 0.15);">
                <strong>Schwer planbar</strong><br>
                Bestellung nach<br>Bedarf
              </td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); background: rgba(139, 92, 246, 0.15);">
                <strong>Keine Planung nötig</strong><br>
                Einmalige Bestellung<br>wenn notwendig
              </td>
            </tr>
          </table>

          <h3>Strategien im Detail</h3>
          <ul>
            <li><strong>AX-Güter:</strong> Hoher Wert + konstanter Verbrauch → Just-in-Time/Just-in-Sequence, niedrige Lagerbestände</li>
            <li><strong>AY/AZ-Güter:</strong> Hoher Wert + schwankender/sporadischer Verbrauch → Genaue Bedarfsplanung erforderlich</li>
            <li><strong>BY/BZ-Güter:</strong> Mittlerer Wert + unregelmäßig → Bestellung nach tatsächlichem Bedarf</li>
            <li><strong>CX-Güter:</strong> Niedriger Wert + konstant → Bestellung nach Verbrauch, höhere Bestände möglich</li>
            <li><strong>CY/CZ-Güter:</strong> Niedriger Wert + unregelmäßig → Einmalige Bestellung bei Bedarf, minimale Lagerhaltung</li>
          </ul>
        `},{type:"content",title:"Zusammenfassung & Wiederholung",content:`
          <h3>📚 Zusammenfassung: ABC-XYZ Analyse</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Alle wichtigen Formeln und Konzepte im Überblick - jetzt bist du bereit für das Quiz!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 ABC-Analyse: Bewertung nach Wert</h4>
            <p style="margin: 0 0 10px 0; font-size: 1.1rem;"><strong>Formel: Verbrauchswert = Wert × Verbrauch</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>A-Klasse:</strong> 0-80% kumuliert → Hoher Wertanteil</li>
              <li><strong>B-Klasse:</strong> 80-95% kumuliert → Mittlerer Wertanteil</li>
              <li><strong>C-Klasse:</strong> 95-100% kumuliert → Niedriger Wertanteil</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">📊 XYZ-Analyse: Bewertung nach Verbrauchsschwankung</h4>
            <p style="margin: 0 0 10px 0; font-size: 1.1rem;"><strong>Formel: VK = Standardabweichung / Mittelwert</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>X-Klasse:</strong> VK 0-0,49 → Konstanter Verbrauch (gut planbar)</li>
              <li><strong>Y-Klasse:</strong> VK 0,5-0,99 → Schwankender Verbrauch (mittel planbar)</li>
              <li><strong>Z-Klasse:</strong> VK > 1 → Sporadischer Verbrauch (schlecht planbar)</li>
            </ul>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">🔄 RSU-Klassifizierung (Verbrauchsart)</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>R-Artikel:</strong> Regelmäßiger Verbrauch (konstant & gleichmäßig)</li>
              <li><strong>S-Artikel:</strong> Saisonaler Verbrauch (vorhersehbare Schwankungen)</li>
              <li><strong>U-Artikel:</strong> Unregelmäßiger Verbrauch (unvorhersehbar)</li>
            </ul>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">📦 ABC-XYZ Matrix - Beschaffungsstrategien</h4>
            <table style="border-collapse: collapse; width: 100%; font-size: 0.95rem;">
              <tr style="background: rgba(99, 102, 241, 0.1);">
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"></th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">A</th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">B</th>
                <th style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">C</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>X</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Verbrauch</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Y</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Bedarf</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Einmalig</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>Z</strong></td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">JIT/JIS</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Nach Bedarf</td>
                <td style="padding: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">Einmalig</td>
              </tr>
            </table>
          </div>

          <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>ABC = Wert × Verbrauch (Wertanteil) → Kumulierte Prozente</li>
              <li>XYZ = Standardabw. / Mittelwert (Schwankung) → Variationskoeffizient</li>
              <li>AX = Beste Kombination für Just-in-Time/Just-in-Sequence</li>
              <li>CZ = Niedrigster Wert + unvorhersehbar = Einmalige Bestellung</li>
            </ul>
          </div>
        `}],quiz:{questions:[{question:"Wie wird der Verbrauchswert in der ABC-Analyse berechnet?",answers:["Nur der Artikelwert","Wert × Verbrauch","Verbrauch - Wert","Wert / Verbrauch"],correct:1,explanation:"Der Verbrauchswert wird berechnet als: Wert × Verbrauch = Verbrauchswert für den Artikel."},{question:"Welcher kumulierte Anteil charakterisiert A-Artikel?",answers:["0 - 50%","0 - 80%","80 - 95%","95 - 100%"],correct:1,explanation:"A-Artikel machen die ersten 0-80% des kumulierten Verbrauchswerts aus und haben damit den höchsten Wertanteil."},{question:"Wie berechnet man den Variationskoeffizienten (VK) in der XYZ-Analyse?",answers:["Mittelwert / Standardabweichung","Standardabweichung / Mittelwert","Standardabweichung × Mittelwert","Mittelwert - Standardabweichung"],correct:1,explanation:"Der Variationskoeffizient wird berechnet als: VK = Standardabweichung / Mittelwert."},{question:"Ein Artikel hat VK = 0,3. In welche Klasse fällt er?",answers:["X-Klasse (konstanter Verbrauch)","Y-Klasse (schwankender Verbrauch)","Z-Klasse (sporadischer Verbrauch)","Kann nicht bestimmt werden"],correct:0,explanation:"VK = 0,3 liegt im Bereich 0-0,49 und gehört damit zur X-Klasse (konstanter Verbrauch)."},{question:"Welche Beschaffungsstrategie eignet sich für AX-Güter?",answers:["Einmalige Bestellung wenn notwendig","Just-in-Time oder Just-in-Sequence","Bestellung nach Bedarf","Hohe Lagerbestände vorhalten"],correct:1,explanation:"AX-Güter (hoher Wert, konstanter Verbrauch) eignen sich perfekt für Just-in-Time oder Just-in-Sequence Beschaffung."},{question:"Was charakterisiert S-Artikel in der RSU-Klassifizierung?",answers:["Regelmäßiger Verbrauch","Saisonaler Verbrauch mit Schwankungen","Unregelmäßiger Verbrauch","Sporadischer Verbrauch"],correct:1,explanation:"S-Artikel haben einen saisonalen Verbrauch mit Schwankungen, die auf saisonale Nachfrage zurückzuführen sind."}]}},{id:"zielkonflikte",title:"Zielkonflikte",icon:"⚖️",description:"Konkurrierende Ziele in der Produktionsplanung",color:"warning",slides:[{type:"intro",title:"Zielkonflikte",subtitle:"Balance zwischen konkurrierenden Unternehmenszielen",icon:"⚖️"},{type:"content",title:"Was sind Zielkonflikte?",content:`
            <h3>Definition</h3>
            <p>Zielkonflikte entstehen, wenn die <strong>Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt</strong>.</p>

            <h3>Arten von Zielbeziehungen</h3>
            <ul>
              <li><strong>Zielkomplementarität:</strong> Ziele unterstützen sich gegenseitig (win-win)</li>
              <li><strong>Zielneutralität:</strong> Ziele beeinflussen sich nicht</li>
              <li><strong>Zielkonflikt:</strong> Ziele stehen im Widerspruch (trade-off)</li>
            </ul>

            <h3>Typische Zielkonflikte in der Produktion</h3>
            <ol>
              <li><strong>Lieferzeit vs. Lagerkosten</strong>
                <ul>
                  <li>Kurze Lieferzeiten → Hohe Lagerbestände → Hohe Kosten</li>
                  <li>Niedrige Lagerbestände → Längere Lieferzeiten</li>
                </ul>
              </li>
              <li><strong>Qualität vs. Kosten</strong>
                <ul>
                  <li>Höhere Qualität → Höhere Produktionskosten</li>
                  <li>Kostenreduktion → Potenziell niedrigere Qualität</li>
                </ul>
              </li>
              <li><strong>Flexibilität vs. Auslastung</strong>
                <ul>
                  <li>Hohe Flexibilität → Kapazitätsreserven → Niedrigere Auslastung</li>
                  <li>Hohe Auslastung → Wenig Spielraum für Anpassungen</li>
                </ul>
              </li>
              <li><strong>Bestandskosten vs. Fehlmengenkosten</strong>
                <ul>
                  <li>Hohe Bestände → Hohe Lagerkosten aber keine Fehlmengen</li>
                  <li>Niedrige Bestände → Niedrige Lagerkosten aber Risiko von Fehlmengen</li>
                </ul>
              </li>
            </ol>
          `},{type:"content",title:"Beispiel: Maschinenbauer AG",content:`
            <h3>Szenario</h3>
            <p>Die Maschinenbauer AG steht vor einem klassischen Zielkonflikt zwischen <strong>Lieferbereitschaft</strong> und <strong>Kapitalbindung</strong>.</p>

            <h3>Ausgangssituation</h3>
            <ul>
              <li>Kunden erwarten Lieferung innerhalb von 2 Wochen</li>
              <li>Durchschnittliche Produktionszeit: 4 Wochen</li>
              <li>Aktueller Lagerbestand: 500.000 € an Fertigwaren</li>
              <li>Kapitalbindungskosten: 8% p.a.</li>
            </ul>

            <h3>Option A: Hohe Lieferbereitschaft</h3>
            <ul>
              <li>✅ Lagerbestand auf 1.200.000 € erhöhen</li>
              <li>✅ Lieferbereitschaft 98%</li>
              <li>❌ Kapitalbindungskosten: 96.000 € p.a.</li>
              <li>❌ Zusätzliche Lagerkosten: 15.000 € p.a.</li>
            </ul>

            <h3>Option B: Niedrige Kapitalbindung</h3>
            <ul>
              <li>✅ Lagerbestand auf 200.000 € reduzieren</li>
              <li>✅ Kapitalbindungskosten: 16.000 € p.a.</li>
              <li>❌ Lieferbereitschaft nur 75%</li>
              <li>❌ Potenzielle Auftragsverluste</li>
            </ul>

            <h3>Lösungsansätze</h3>
            <ol>
              <li><strong>Kompromiss:</strong> Mittlerer Lagerbestand mit 90% Lieferbereitschaft</li>
              <li><strong>Prozessoptimierung:</strong> Produktionszeit auf 2 Wochen reduzieren (Lean)</li>
              <li><strong>Segmentierung:</strong> A-Produkte auf Lager, C-Produkte auf Bestellung</li>
              <li><strong>Make-to-Order:</strong> Nur auf Kundenbestellung produzieren mit längerer Lieferzeit</li>
            </ol>
          `},{type:"content",title:"Zusammenfassung & Wiederholung",content:`
            <h3>📚 Zusammenfassung: Zielkonflikte</h3>
            <p style="font-size: 1.1rem; margin-bottom: 25px;">Die wichtigsten Konzepte zu Zielkonflikten kompakt zusammengefasst!</p>

            <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">⚖️ Was ist ein Zielkonflikt?</h4>
              <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;">Ein Zielkonflikt entsteht, wenn die <strong>Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt</strong> (Trade-off).</p>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #f59e0b; margin: 0 0 15px 0;">Arten von Zielbeziehungen</h4>
              <ul style="margin: 0; line-height: 2;">
                <li><strong>Zielkomplementarität:</strong> Ziele unterstützen sich gegenseitig (win-win)</li>
                <li><strong>Zielneutralität:</strong> Ziele beeinflussen sich nicht</li>
                <li><strong>Zielkonflikt:</strong> Ziele stehen im Widerspruch (trade-off) ⚠️</li>
              </ul>
            </div>

            <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #6366f1; margin: 0 0 15px 0;">🔄 Die 4 typischen Zielkonflikte in der Produktion</h4>
              <ol style="margin: 0; line-height: 2;">
                <li><strong>Lieferzeit ↔ Lagerkosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Kurze Lieferzeit = Hohe Lagerbestände = Hohe Kosten</li>
                    <li>Niedrige Lagerkosten = Längere Lieferzeiten</li>
                  </ul>
                </li>
                <li><strong>Qualität ↔ Kosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Höhere Qualität = Höhere Produktionskosten</li>
                    <li>Kostenreduktion = Potenziell niedrigere Qualität</li>
                  </ul>
                </li>
                <li><strong>Flexibilität ↔ Auslastung</strong>
                  <ul style="margin-top: 5px;">
                    <li>Hohe Flexibilität = Kapazitätsreserven = Niedrigere Auslastung</li>
                    <li>Hohe Auslastung = Wenig Spielraum für Anpassungen</li>
                  </ul>
                </li>
                <li><strong>Bestandskosten ↔ Fehlmengenkosten</strong>
                  <ul style="margin-top: 5px;">
                    <li>Hohe Bestände = Hohe Lagerkosten, aber keine Fehlmengen</li>
                    <li>Niedrige Bestände = Niedrige Lagerkosten, aber Risiko von Fehlmengen</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
              <h4 style="color: #10b981; margin: 0 0 15px 0;">💡 Lösungsansätze bei Zielkonflikten</h4>
              <ul style="margin: 0; line-height: 2;">
                <li><strong>Kompromiss:</strong> Mittlere Position zwischen beiden Extremen</li>
                <li><strong>Prozessoptimierung:</strong> Lean Management zur Reduzierung des Konflikts</li>
                <li><strong>Segmentierung:</strong> ABC-Analyse für differenzierte Strategien (z.B. A-Produkte auf Lager, C-Produkte auf Bestellung)</li>
                <li><strong>Innovation:</strong> Neue Technologien oder Methoden zur Auflösung des Konflikts</li>
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
              <ul style="margin: 0; line-height: 2;">
                <li>Zielkonflikt = Trade-off (eins verbessern = anderes verschlechtern)</li>
                <li>Klassischer Konflikt: Lieferbereitschaft vs. Kapitalbindung</li>
                <li>Lösungen: Kompromiss, Optimierung, Segmentierung</li>
                <li>ABC-Analyse hilft bei differenzierten Strategien</li>
              </ul>
            </div>
          `}],quiz:{questions:[{question:"Was ist ein Zielkonflikt?",answers:["Wenn zwei Ziele sich gegenseitig unterstützen","Wenn die Verbesserung eines Ziels zur Verschlechterung eines anderen führt","Wenn Ziele sich nicht beeinflussen","Wenn ein Ziel nicht erreicht werden kann"],correct:1,explanation:"Ein Zielkonflikt liegt vor, wenn die Verbesserung eines Ziels automatisch zur Verschlechterung eines anderen Ziels führt (Trade-off)."},{question:"Welcher typische Zielkonflikt besteht zwischen Lieferzeit und Lagerkosten?",answers:["Es gibt keinen Konflikt","Kurze Lieferzeiten erfordern hohe Lagerbestände und damit hohe Kosten","Beide Ziele lassen sich gleichzeitig optimieren","Lieferzeit und Lagerkosten sind unabhängig voneinander"],correct:1,explanation:"Um kurze Lieferzeiten zu garantieren, benötigt man hohe Lagerbestände, was zu hohen Lagerkosten führt. Dies ist ein klassischer Zielkonflikt."},{question:"Im Beispiel der Maschinenbauer AG: Was ist der Hauptkonflikt?",answers:["Qualität vs. Kosten","Lieferbereitschaft vs. Kapitalbindung","Flexibilität vs. Auslastung","Produktion vs. Vertrieb"],correct:1,explanation:"Der Hauptkonflikt besteht zwischen hoher Lieferbereitschaft (hohe Lagerbestände) und niedriger Kapitalbindung (niedrige Lagerbestände)."},{question:"Welche ist KEINE sinnvolle Strategie zur Lösung des Zielkonflikts?",answers:["Prozessoptimierung zur Verkürzung der Produktionszeit","Kompromiss mit mittlerem Lagerbestand","Segmentierung nach ABC-Analyse","Alle Produkte auf maximale Lagermenge erhöhen"],correct:3,explanation:"Alle Produkte maximal zu lagern löst den Zielkonflikt nicht, sondern verschlimmert nur die Kapitalbindung. Besser sind differenzierte Strategien oder Prozessverbesserungen."},{question:"Was bedeutet Zielkomplementarität?",answers:["Ziele stehen im Widerspruch","Ziele unterstützen sich gegenseitig","Ziele sind unabhängig","Ziele können nicht erreicht werden"],correct:1,explanation:"Zielkomplementarität bedeutet, dass die Verfolgung eines Ziels gleichzeitig zur Erreichung eines anderen Ziels beiträgt (win-win Situation)."}]}},{id:"transport",title:"Klassisches Transportmodell",icon:"🚚",description:"Optimierung von Transportkosten in der Logistik",color:"accent",slides:[{type:"intro",title:"Klassisches Transportmodell",subtitle:"Optimale Transportwege und Kostenminimierung",icon:"🚚"},{type:"content",title:"Einführung in das Klassische Transportmodell",content:`
            <h3>Willkommen zur e-Learning-Einheit!</h3>
            <p>In dieser Kurseinheit wird Ihnen ein <strong>Überblick über das Klassische Transportmodell</strong> und den daraus resultierenden Nutzen mit Hilfe von Beispielen nähergebracht.</p>

            <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
              <h4 style="margin: 0 0 15px 0;">✨ Diese Einheit ist animationsunterstützt!</h4>
              <p style="margin: 0; line-height: 1.8;">Sie lernen das Klassische Transportmodell durch interaktive Beispiele und schrittweise Erklärungen kennen.</p>
            </div>

            <h3>Was ist das Klassische Transportmodell (KTM)?</h3>
            <p>Das klassische Transportmodell lässt sich mithilfe von <strong>spezieller linearer Optimierungsverfahren</strong> lösen.</p>
            
            <p>In dieser Kurseinheit lernen Sie verschiedene <strong>Eröffnungsmethoden</strong> kennen, um zu einer zulässigen Basislösung zu gelangen (ohne diese zu optimieren!).</p>

            <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #6366f1;">
              <h4 style="margin: 0 0 15px 0; color: #6366f1;">📊 Grafische Darstellung: Quellen → Senken</h4>
              <p style="margin: 0; line-height: 1.8;">Das Transportmodell beantwortet folgende Frage:</p>
              <p style="margin: 10px 0 0 0; font-weight: 600; color: #6366f1;">„Wie kann ich beim Transportieren von Bedarfen, ausgehend von Quellen zur Senke, Transportkosten minimieren?"</p>
            </div>

            <h3>Zwei Heuristiken zur Findung einer Ausgangslösung</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
              <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">Nordwest-Ecken-Methode</h4>
                <p style="margin: 0; font-style: italic; line-height: 1.6;">„Fange im Nordwesten an und jage dort maximal viel durch!"</p>
              </div>
              <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; text-align: center;">
                <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">Matrix-Minimum-Methode</h4>
                <p style="margin: 0; font-style: italic; line-height: 1.6;">„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</p>
              </div>
            </div>

            <div style="background: rgba(245, 158, 11, 0.08); padding: 20px; border-radius: 12px; margin-top: 25px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; line-height: 1.8;"><strong>Hinweis:</strong> In der Datenverarbeitung wird häufig die <strong>Nord-West-Ecken-Methode</strong> bevorzugt, weil sie einfacher zu programmieren ist und die Zahl der benötigten Iterationen nicht ins Gewicht fällt.</p>
          </div>
        `},{type:"content",title:"Formeln und Legende des KTM",content:`
          <h3>Legende - Wichtige Begriffe</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: rgba(99, 102, 241, 0.1);">
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: left;">Symbol</th>
              <th style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: left;">Bedeutung</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>m</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Angebotsort (Quelle)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>n</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Nachfrageort (Senke)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>a</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Angebotsmenge</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>b</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Bedarfsmenge</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>c</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Transportkosten pro Einheit von Ort i zu Ort j</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);"><strong>x</strong></td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3);">Menge, die vom Ort i zum Ort j transportiert werden</td>
            </tr>
          </table>

          <h3>Zielfunktion - Minimieren</h3>
          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
            <p style="margin: 0 0 10px 0; font-size: 0.9rem;">Minimiere die Gesamttransportkosten:</p>
            <div style="font-size: 1.5rem; font-weight: 600; margin: 15px 0;">
              z = Σ<sub>i=1</sub><sup>m</sup> Σ<sub>j=1</sub><sup>n</sup> c<sub>ij</sub> × x<sub>ij</sub>
            </div>
          </div>

          <h3>Nebenbedingungen</h3>
          <div style="background: rgba(99, 102, 241, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0;">1. Angebotserfüllung (alle Angebote müssen verteilt werden):</h4>
            <div style="font-size: 1.2rem; margin: 10px 0; text-align: center;">
              Σ<sub>j=1</sub><sup>n</sup> x<sub>ij</sub> = a<sub>i</sub> &nbsp;&nbsp; ∀i
            </div>
            
            <h4 style="margin: 20px 0 15px 0;">2. Bedarfserfüllung (alle Bedarfe müssen erfüllt werden):</h4>
            <div style="font-size: 1.2rem; margin: 10px 0; text-align: center;">
              Σ<sub>i=1</sub><sup>m</sup> x<sub>ij</sub> = b<sub>j</sub> &nbsp;&nbsp; ∀j
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin-top: 25px;">
            <h4 style="margin: 0 0 10px 0;">🎯 Ziel des Modells:</h4>
            <p style="margin: 0; line-height: 1.8;">Finde die optimale Transportmenge x<sub>ij</sub> von jedem Angebotsort i zu jedem Nachfrageort j, sodass die <strong>Gesamttransportkosten minimal</strong> sind und alle Angebote sowie Bedarfe erfüllt werden.</p>
          </div>
        `},{type:"content",title:"Nordwest-Ecken-Methode",content:`
          <h3>Nordwest-Ecken-Methode</h3>
          <p><em>„Fange im Nordwesten an und jage dort maximal viel durch!"</em></p>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #6366f1;">
            <h4 style="margin: 0 0 15px 0;">📌 Vorteile:</h4>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Einfacher zu programmieren</li>
              <li>Die Anzahl der benötigten Iterationen fällt nicht ins Gewicht</li>
              <li>Schnelle Ermittlung einer zulässigen Basislösung</li>
            </ul>
          </div>

          <h3>Vorgehensweise:</h3>
          <ol style="line-height: 2;">
            <li>Beginne in der <strong>linken oberen Ecke</strong> (Nordwest-Ecke) der Transportmatrix</li>
            <li>Belege diese Zelle mit der <strong>maximal möglichen Menge</strong>:
              <ul>
                <li>Minimum aus Angebot der Zeile und Bedarf der Spalte</li>
              </ul>
            </li>
            <li>Streiche die erfüllte Zeile oder Spalte
              <ul>
                <li>Wenn Angebot erschöpft → Zeile streichen</li>
                <li>Wenn Bedarf gedeckt → Spalte streichen</li>
              </ul>
            </li>
            <li>Gehe zur nächsten verfügbaren Nordwest-Zelle</li>
            <li>Wiederhole Schritte 2-4 bis alle Angebote und Bedarfe erfüllt sind</li>
          </ol>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
            <h4 style="margin: 0 0 15px 0;">💡 Wichtig:</h4>
            <p style="margin: 0; line-height: 1.8;">Die Nordwest-Ecken-Methode berücksichtigt <strong>NICHT die Transportkosten</strong> bei der Erstellung der Basislösung. Sie liefert zwar eine zulässige Lösung, diese ist aber meistens nicht optimal und muss durch Optimierungsverfahren (z.B. Stepping-Stone, MODI) verbessert werden.</p>
          </div>
        `},{type:"content",title:"Matrix-Minimum-Methode",content:`
          <h3>Matrix-Minimum-Methode</h3>
          <p><em>„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</em></p>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h4 style="margin: 0 0 15px 0;">📌 Vorteile:</h4>
            <ul style="margin: 0; line-height: 1.8;">
              <li>Berücksichtigt die <strong>Transportkosten</strong> bereits bei der Basislösung</li>
              <li>Führt meist zu einer besseren Ausgangslösung als die Nordwest-Ecken-Methode</li>
              <li>Weniger Optimierungsschritte erforderlich</li>
            </ul>
          </div>

          <h3>Vorgehensweise:</h3>
          <ol style="line-height: 2;">
            <li>Suche in der gesamten Transportmatrix die <strong>Zelle mit den geringsten Kosten</strong></li>
            <li>Belege diese Zelle mit der <strong>maximal möglichen Menge</strong>:
              <ul>
                <li>Minimum aus Angebot der Zeile und Bedarf der Spalte</li>
              </ul>
            </li>
            <li>Streiche die erfüllte Zeile oder Spalte
              <ul>
                <li>Wenn Angebot erschöpft → Zeile streichen</li>
                <li>Wenn Bedarf gedeckt → Spalte streichen</li>
              </ul>
            </li>
            <li>Suche in der verbleibenden Matrix erneut die Zelle mit den geringsten Kosten</li>
            <li>Wiederhole Schritte 2-4 bis alle Angebote und Bedarfe erfüllt sind</li>
          </ol>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
            <h4 style="margin: 0 0 15px 0;">💡 Wichtig:</h4>
            <p style="margin: 0; line-height: 1.8;">Die Matrix-Minimum-Methode liefert in der Regel eine <strong>bessere Ausgangslösung</strong> als die Nordwest-Ecken-Methode, da sie die Transportkosten bereits berücksichtigt. Dennoch ist auch diese Lösung meist noch nicht optimal und sollte optimiert werden.</p>
          </div>
        `},{type:"content",title:"Beispielaufgabe: Nordwest-Ecken-Methode",content:`
          <h3>Praxisbeispiel: Nordwest-Ecken-Methode</h3>
          <p>Die Kilometerangaben sollen die Strecken zwischen den Zielorten A und den Auslieferungsorten W darstellen.</p>
          <p><strong>Transportkostensatz: 0,2€ pro Kilometer</strong></p>

          <h3>Ausgangstabelle:</h3>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white;">
              <th style="padding: 12px; border: 2px solid #6366f1;"></th>
              <th style="padding: 12px; border: 2px solid #6366f1;">A1</th>
              <th style="padding: 12px; border: 2px solid #6366f1;">A2</th>
              <th style="padding: 12px; border: 2px solid #6366f1;">Auslieferungs-<br>kapazität</th>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold; background: rgba(99, 102, 241, 0.1);">W1</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">150 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">100 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold; background: rgba(99, 102, 241, 0.1);">W2</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">200 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center;">300 km</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.05);">
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: bold;">Lagerkapazität</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">180</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">200</td>
              <td style="padding: 12px; border: 1px solid rgba(99, 102, 241, 0.3); text-align: center; font-weight: bold;">Σ = 380</td>
            </tr>
          </table>

          <h3>Lösung mit Nordwest-Ecken-Methode:</h3>
          <div style="background: rgba(99, 102, 241, 0.05); padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ol style="line-height: 2; margin: 0;">
              <li><strong>Schritt 1:</strong> Beginne bei W1 → A1 (Nordwest-Ecke)
                <ul>
                  <li>Min(200, 180) = 180 → Belege W1→A1 mit 180</li>
                  <li>A1 ist jetzt voll (Spalte streichen)</li>
                  <li>W1 hat noch 20 übrig</li>
                </ul>
              </li>
              <li><strong>Schritt 2:</strong> Gehe zu W1 → A2
                <ul>
                  <li>Min(20, 200) = 20 → Belege W1→A2 mit 20</li>
                  <li>W1 ist jetzt erschöpft (Zeile streichen)</li>
                  <li>A2 braucht noch 180</li>
                </ul>
              </li>
              <li><strong>Schritt 3:</strong> Gehe zu W2 → A2
                <ul>
                  <li>Min(200, 180) = 180 → Belege W2→A2 mit 180</li>
                  <li>Fertig! Alle Angebote und Bedarfe erfüllt</li>
                </ul>
              </li>
            </ol>
          </div>

          <h3>Kostenberechnung:</h3>
          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <ul style="margin: 0; line-height: 2;">
              <li>W1 → A1: 180 × 150 km × 0,2€/km = <strong>5.400€</strong></li>
              <li>W1 → A2: 20 × 100 km × 0,2€/km = <strong>400€</strong></li>
              <li>W2 → A2: 180 × 300 km × 0,2€/km = <strong>10.800€</strong></li>
            </ul>
            <p style="margin: 20px 0 0 0; font-size: 1.3rem; font-weight: bold; text-align: center; border-top: 2px solid white; padding-top: 15px;">Gesamtkosten: 16.600€</p>
          </div>

          <p style="margin-top: 25px;"><strong>Hinweis:</strong> Diese Lösung ist zulässig, aber möglicherweise nicht optimal. Mit der Matrix-Minimum-Methode oder Optimierungsverfahren könnte eine kostengünstigere Lösung gefunden werden.</p>
        `},{type:"content",title:"Zusammenfassung & Wiederholung",content:`
          <h3>📚 Zusammenfassung: Klassisches Transportmodell</h3>
          <p style="font-size: 1.1rem; margin-bottom: 25px;">Alle wichtigen Formeln, Methoden und Schritte im Überblick!</p>

          <div style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.3rem;">🎯 Ziel des Klassischen Transportmodells</h4>
            <p style="margin: 0; font-size: 1.1rem; line-height: 1.8;"><strong>Minimierung der Gesamttransportkosten</strong> beim Transport von Gütern von mehreren Quellen (Angebotsorten) zu mehreren Senken (Nachfrageorten).</p>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #6366f1; margin: 0 0 15px 0;">📝 Wichtige Begriffe & Symbole</h4>
            <ul style="margin: 0; line-height: 2;">
              <li><strong>m</strong> = Angebotsort (Quelle)</li>
              <li><strong>n</strong> = Nachfrageort (Senke)</li>
              <li><strong>a</strong> = Angebotsmenge</li>
              <li><strong>b</strong> = Bedarfsmenge</li>
              <li><strong>c<sub>ij</sub></strong> = Transportkosten pro Einheit von Ort i zu Ort j</li>
              <li><strong>x<sub>ij</sub></strong> = Menge, die von Ort i zu Ort j transportiert wird</li>
            </ul>
          </div>

          <div style="background: linear-gradient(135deg, #10b981, #34d399); color: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; font-size: 1.2rem;">📊 Zielfunktion & Nebenbedingungen</h4>
            <p style="margin: 0 0 10px 0;"><strong>Zielfunktion (minimieren):</strong></p>
            <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; text-align: center; font-size: 1.2rem; margin: 10px 0;">
              z = Σ Σ c<sub>ij</sub> × x<sub>ij</sub>
            </div>
            <p style="margin: 15px 0 5px 0;"><strong>Nebenbedingungen:</strong></p>
            <ul style="margin: 0; line-height: 2;">
              <li>Alle Angebote müssen verteilt werden: Σ x<sub>ij</sub> = a<sub>i</sub></li>
              <li>Alle Bedarfe müssen erfüllt werden: Σ x<sub>ij</sub> = b<sub>j</sub></li>
            </ul>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #10b981; margin: 0 0 15px 0;">🔄 Zwei Eröffnungsmethoden im Vergleich</h4>
            
            <div style="background: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="margin: 0 0 10px 0; color: #6366f1;">1. Nordwest-Ecken-Methode</h5>
              <p style="margin: 0 0 5px 0;"><em>„Fange im Nordwesten an und jage dort maximal viel durch!"</em></p>
              <ul style="margin: 5px 0 0 0; line-height: 1.8;">
                <li>✅ Einfach zu programmieren</li>
                <li>❌ Berücksichtigt NICHT die Transportkosten</li>
                <li>➡️ Meist nicht optimal, aber schnelle Basislösung</li>
              </ul>
            </div>

            <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="margin: 0 0 10px 0; color: #10b981;">2. Matrix-Minimum-Methode</h5>
              <p style="margin: 0 0 5px 0;"><em>„Fange mit dem geringsten Wert an und jage dort maximal viel durch!"</em></p>
              <ul style="margin: 5px 0 0 0; line-height: 1.8;">
                <li>✅ Berücksichtigt Transportkosten bereits bei Basislösung</li>
                <li>✅ Meist bessere Ausgangslösung als NW-Methode</li>
                <li>➡️ Weniger Optimierungsschritte erforderlich</li>
              </ul>
            </div>
          </div>

          <div style="background: rgba(139, 92, 246, 0.08); padding: 25px; border-radius: 12px; margin: 20px 0;">
            <h4 style="color: #8b5cf6; margin: 0 0 15px 0;">📋 Vorgehensweise bei beiden Methoden</h4>
            <ol style="margin: 0; line-height: 2;">
              <li>Wähle eine Zelle (NW-Ecke oder minimale Kosten)</li>
              <li>Belege mit <strong>maximal möglicher Menge</strong>: min(Angebot, Bedarf)</li>
              <li>Streiche erfüllte Zeile oder Spalte</li>
              <li>Wiederhole bis alle Angebote und Bedarfe erfüllt sind</li>
              <li>Berechne Gesamtkosten: Σ (Menge × Kosten pro Strecke)</li>
            </ol>
          </div>

          <div style="background: linear-gradient(135deg, #f59e0b, #fbbf24); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0;">💡 Merke für das Quiz:</h4>
            <ul style="margin: 0; line-height: 2;">
              <li>Ziel: <strong>Minimierung der Transportkosten</strong></li>
              <li>Voraussetzung: <strong>Angebot = Nachfrage</strong> (ausgeglichenes Modell)</li>
              <li>NW-Ecke: Startet oben links, ignoriert Kosten</li>
              <li>Matrix-Minimum: Startet bei niedrigsten Kosten, meist bessere Lösung</li>
              <li>Beide liefern nur eine <strong>zulässige Basislösung</strong>, nicht zwingend optimal!</li>
            </ul>
          </div>
        `}],quiz:{questions:[{question:"Was ist das Ziel des klassischen Transportmodells?",answers:["Maximierung der Transportgeschwindigkeit","Minimierung der Gesamttransportkosten","Maximierung der transportierten Menge","Minimierung der Anzahl der Transporte"],correct:1,explanation:"Das klassische Transportmodell zielt darauf ab, die Gesamttransportkosten bei der Verteilung von Gütern zu minimieren."},{question:"Welche Voraussetzung gilt für das klassische Transportmodell?",answers:["Angebot muss größer als Nachfrage sein","Nachfrage muss größer als Angebot sein","Angebot muss gleich Nachfrage sein","Angebot und Nachfrage sind unabhängig"],correct:2,explanation:"Beim klassischen Transportmodell muss die Summe der Angebotskapazitäten gleich der Summe der Bedarfe sein (ausgeglichenes Modell)."},{question:"Welche Methode dient zur Ermittlung einer guten Startlösung?",answers:["Stepping-Stone-Methode","MODI-Methode","Vogel'sche Approximationsmethode (VAM)","Simplex-Methode"],correct:2,explanation:"Die Vogel'sche Approximationsmethode (VAM) ist ein heuristisches Verfahren zur Ermittlung einer guten Startlösung für das Transportproblem."},{question:"Wofür wird die Stepping-Stone-Methode verwendet?",answers:["Zur Ermittlung der Startlösung","Zur Verbesserung einer vorhandenen Lösung","Zur Berechnung der Transportkosten","Zur Prüfung der Kapazitäten"],correct:1,explanation:"Die Stepping-Stone-Methode dient zur schrittweisen Verbesserung einer bereits vorhandenen Basislösung bis zum Optimum."},{question:"Im Getränke-Beispiel: Wie hoch sind die optimalen Gesamtkosten?",answers:["1.500€","1.850€","2.000€","2.200€"],correct:1,explanation:"Die optimalen Gesamtkosten betragen 1.850€ (100t×4€ + 100t×6€ + 50t×3€ + 100t×7€)."}]}}],Ne=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},yo={name:"HomePage",emits:["select-module","show-about","show-kontakt","show-datenschutz","show-impressum"],setup(e,{emit:t}){console.log("Loaded modules:",gt);const n=de(()=>!gt||!Array.isArray(gt)?0:gt.reduce((f,g)=>f+g.quiz.questions.length,0));return{modules:gt,totalQuizzes:n,scrollToModules:()=>{const f=document.querySelector(".modules-section");f&&f.scrollIntoView({behavior:"smooth",block:"start"})},showAbout:()=>{console.log("Show About clicked!"),t("show-about")},showKontakt:()=>{t("show-kontakt")},showDatenschutz:()=>{t("show-datenschutz")},showImpressum:()=>{t("show-impressum")},selectModule:f=>{console.log("Module selected:",f),t("select-module",f)}}}},ko={class:"home-page"},wo={class:"container"},_o={class:"hero"},zo={class:"hero-content fade-in"},So={class:"hero-actions"},Ao={class:"hero-stats"},Mo={class:"stat-item slide-in-left"},To={class:"stat-number gradient-text"},Po={class:"stat-item fade-in",style:{"animation-delay":"0.2s"}},Bo={class:"stat-number gradient-text"},Co={class:"modules-section"},Eo={class:"modules-grid"},Ko=["onClick"],Lo={class:"module-title"},Wo={class:"module-description"},Do={class:"module-meta"},Vo={class:"meta-item"},Io={class:"meta-item"},Ho={class:"footer"},Fo={class:"container"},Oo={class:"footer-content"},No={class:"footer-links"},Zo={class:"footer-copyright"};function Ro(e,t,n,i,s,r){return w(),S("div",ko,[d("div",wo,[d("section",_o,[d("div",zo,[t[11]||(t[11]=Ye('<div class="hero-badge" data-v-d6295337>🚀 E-Learning der Zukunft</div><h1 class="hero-title" data-v-d6295337> Willkommen bei <span class="gradient-text glow-text" data-v-d6295337>LearnSpace</span></h1><p class="hero-subtitle" data-v-d6295337> Interaktive E-Learning-Plattform für Produktionswirtschaft &amp; Logistik </p><p class="hero-description" data-v-d6295337> Entdecke die Welt der Produktionswirtschaft im Weltraum-Design. Moderne Didaktik trifft futuristische Technologie. </p>',4)),d("div",So,[d("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...l)=>i.scrollToModules&&i.scrollToModules(...l))}," 🚀 Lernmodule erkunden "),d("button",{class:"btn btn-outline",onClick:t[1]||(t[1]=(...l)=>i.showAbout&&i.showAbout(...l))}," ℹ️ Über uns erfahren ")]),d("div",Ao,[d("div",Mo,[t[6]||(t[6]=d("div",{class:"stat-icon"},"📚",-1)),d("div",To,A(i.modules.length),1),t[7]||(t[7]=d("div",{class:"stat-label"},"Module",-1))]),d("div",Po,[t[8]||(t[8]=d("div",{class:"stat-icon"},"❓",-1)),d("div",Bo,A(i.totalQuizzes),1),t[9]||(t[9]=d("div",{class:"stat-label"},"Quizfragen",-1))]),t[10]||(t[10]=d("div",{class:"stat-item slide-in-right"},[d("div",{class:"stat-icon"},"⚡"),d("div",{class:"stat-number gradient-text"},"100%"),d("div",{class:"stat-label"},"Praxisnah")],-1))])])]),d("section",Co,[t[15]||(t[15]=d("h2",{class:"section-title fade-in"},"Lernmodule",-1)),d("div",Eo,[(w(!0),S(q,null,ne(i.modules,(l,o)=>(w(),S("div",{key:l.id,class:"module-card card",style:Ve({animationDelay:o*.1+"s"}),onClick:c=>i.selectModule(l.id)},[d("div",{class:"module-icon",style:Ve({background:l.color})},A(l.icon),5),d("h3",Lo,A(l.title),1),d("p",Wo,A(l.description),1),d("div",Do,[d("div",Vo,[t[12]||(t[12]=d("span",{class:"meta-icon"},"📚",-1)),d("span",null,A(l.slides.length)+" Themen",1)]),d("div",Io,[t[13]||(t[13]=d("span",{class:"meta-icon"},"❓",-1)),d("span",null,A(l.quiz.questions.length)+" Fragen",1)])]),t[14]||(t[14]=d("div",{class:"module-cta"},[d("span",null,"Modul starten"),d("span",{class:"arrow"},"→")],-1))],12,Ko))),128))])]),t[17]||(t[17]=Ye('<section class="features-section" data-v-d6295337><h2 class="section-title fade-in" data-v-d6295337>Warum LearnSpace?</h2><div class="features-grid" data-v-d6295337><div class="feature-card card slide-in-left" data-v-d6295337><div class="feature-icon" data-v-d6295337>🎯</div><h3 data-v-d6295337>Praxisorientiert</h3><p data-v-d6295337>Lerninhalte basierend auf realen Vorlesungsfolien der HTW</p></div><div class="feature-card card fade-in" data-v-d6295337><div class="feature-icon" data-v-d6295337>✨</div><h3 data-v-d6295337>Interaktiv</h3><p data-v-d6295337>Quizze und Übungen zur Vertiefung des Gelernten</p></div><div class="feature-card card slide-in-right" data-v-d6295337><div class="feature-icon" data-v-d6295337>📊</div><h3 data-v-d6295337>Visuell</h3><p data-v-d6295337>Anschauliche Darstellungen komplexer Konzepte</p></div></div></section>',1)),d("footer",Ho,[d("div",Fo,[d("div",Oo,[t[16]||(t[16]=d("div",{class:"footer-logo"},[d("span",{class:"footer-logo-icon"},"🎓"),d("span",{class:"gradient-text"},"LearnSpace")],-1)),d("div",No,[d("a",{href:"#",class:"footer-link",onClick:t[2]||(t[2]=Qt((...l)=>i.showAbout&&i.showAbout(...l),["prevent"]))},"Über uns"),d("a",{href:"#",class:"footer-link",onClick:t[3]||(t[3]=Qt((...l)=>i.showKontakt&&i.showKontakt(...l),["prevent"]))},"Kontakt"),d("a",{href:"#",class:"footer-link",onClick:t[4]||(t[4]=Qt((...l)=>i.showDatenschutz&&i.showDatenschutz(...l),["prevent"]))},"Datenschutz"),d("a",{href:"#",class:"footer-link",onClick:t[5]||(t[5]=Qt((...l)=>i.showImpressum&&i.showImpressum(...l),["prevent"]))},"Impressum")])]),d("div",Zo," © "+A(new Date().getFullYear())+" LearnSpace - E-Learning Plattform für Produktionswirtschaft & Logistik ",1)])])])])}const jo=Ne(yo,[["render",Ro],["__scopeId","data-v-d6295337"]]),qo={name:"AboutPage",emits:["go-home","select-module"],setup(e,{emit:t}){return{goHome:()=>{console.log("Go Home clicked!"),t("go-home")},startFirstModule:()=>{console.log("Start first module clicked!"),t("select-module","lean")}}}},Uo={class:"about-page"},Go={class:"container"},Qo={class:"cta-section"};function Jo(e,t,n,i,s,r){return w(),S("div",Uo,[t[3]||(t[3]=Ye('<div class="about-hero" data-v-1c0880d6><div class="badge" data-v-1c0880d6>🏭 UNTERNEHMENPORTRAIT</div><h1 class="about-title" data-v-1c0880d6>LearnSpace Industries GmbH</h1><p class="about-subtitle" data-v-1c0880d6>Das fiktive Unternehmen hinter unseren Fallbeispielen</p><div class="company-logo" data-v-1c0880d6>LS</div></div>',1)),d("div",Go,[t[2]||(t[2]=Ye('<div class="section" data-v-1c0880d6><h2 class="section-title gradient-text" data-v-1c0880d6>Über LearnSpace Industries</h2><p class="section-text" data-v-1c0880d6> Die LearnSpace Industries GmbH ist ein mittelständisches Unternehmen der Elektronik- und Maschinenbaubranche mit Hauptsitz in Berlin. Als fiktives Musterunternehmen dient es in dieser E-Learning-Plattform zur Veranschaulichung praxisnaher Anwendungsfälle aus der Produktionswirtschaft und Logistik. </p></div><div class="section" data-v-1c0880d6><h2 class="section-title" data-v-1c0880d6>Unternehmensprofil</h2><div class="profile-grid" data-v-1c0880d6><div class="profile-card" data-v-1c0880d6><div class="profile-icon" data-v-1c0880d6>📅</div><div class="profile-label" data-v-1c0880d6>Gründung</div><div class="profile-value" data-v-1c0880d6>1985</div></div><div class="profile-card" data-v-1c0880d6><div class="profile-icon" data-v-1c0880d6>👥</div><div class="profile-label" data-v-1c0880d6>Mitarbeiter</div><div class="profile-value" data-v-1c0880d6>~750</div></div><div class="profile-card" data-v-1c0880d6><div class="profile-icon" data-v-1c0880d6>💰</div><div class="profile-label" data-v-1c0880d6>Jahresumsatz</div><div class="profile-value" data-v-1c0880d6>85 Mio. €</div></div><div class="profile-card" data-v-1c0880d6><div class="profile-icon" data-v-1c0880d6>📦</div><div class="profile-label" data-v-1c0880d6>Lagerartikel</div><div class="profile-value" data-v-1c0880d6>7.500+</div></div></div></div><div class="section" data-v-1c0880d6><h2 class="section-title" data-v-1c0880d6>Geschäftsbereiche</h2><div class="business-grid" data-v-1c0880d6><div class="business-card card" data-v-1c0880d6><div class="business-icon" data-v-1c0880d6>🔌</div><h3 class="business-title" data-v-1c0880d6>Elektronikfertigung</h3><p class="business-description" data-v-1c0880d6> Produktion von Steuerungskomponenten und Sensorik für die Automatisierungstechnik. </p><ul class="business-list" data-v-1c0880d6><li data-v-1c0880d6>→ Leiterplattenbestückung</li><li data-v-1c0880d6>→ Gehäusemontage</li><li data-v-1c0880d6>→ Qualitätsprüfung</li></ul></div><div class="business-card card" data-v-1c0880d6><div class="business-icon" data-v-1c0880d6>⚙️</div><h3 class="business-title" data-v-1c0880d6>Maschinenbau</h3><p class="business-description" data-v-1c0880d6> Entwicklung und Fertigung von Spezialmaschinen für industrielle Kunden. </p><ul class="business-list" data-v-1c0880d6><li data-v-1c0880d6>→ Montageautomaten</li><li data-v-1c0880d6>→ Prüfanlagen</li><li data-v-1c0880d6>→ Handhabungssysteme</li></ul></div><div class="business-card card" data-v-1c0880d6><div class="business-icon" data-v-1c0880d6>🔧</div><h3 class="business-title" data-v-1c0880d6>Service &amp; Wartung</h3><p class="business-description" data-v-1c0880d6> Umfassender After-Sales-Service für alle gelieferten Anlagen. </p><ul class="business-list" data-v-1c0880d6><li data-v-1c0880d6>→ Ersatzteillogistik</li><li data-v-1c0880d6>→ Wartungsverträge</li><li data-v-1c0880d6>→ Fernwartung</li></ul></div></div></div><div class="section" data-v-1c0880d6><h2 class="section-title" data-v-1c0880d6>Herausforderungen im Unternehmen</h2><p class="section-text" data-v-1c0880d6> Wie viele mittelständische Fertigungsunternehmen steht LearnSpace Industries vor typischen Herausforderungen der modernen Produktionswirtschaft: </p><div class="challenges-grid" data-v-1c0880d6><div class="challenge-card" data-v-1c0880d6><div class="challenge-icon" data-v-1c0880d6>📊</div><h4 class="challenge-title" data-v-1c0880d6>Bestandsoptimierung</h4><p class="challenge-text" data-v-1c0880d6> Balance zwischen hoher Lieferbereitschaft und niedriger Kapitalbindung </p></div><div class="challenge-card" data-v-1c0880d6><div class="challenge-icon" data-v-1c0880d6>🏭</div><h4 class="challenge-title" data-v-1c0880d6>Prozesseffizienz</h4><p class="challenge-text" data-v-1c0880d6> Reduzierung von Verschwendung und Verbesserung der Arbeitsplatzorganisation </p></div><div class="challenge-card" data-v-1c0880d6><div class="challenge-icon" data-v-1c0880d6>🚚</div><h4 class="challenge-title" data-v-1c0880d6>Logistikkosten</h4><p class="challenge-text" data-v-1c0880d6> Optimierung von Transportwegen und Lieferantenbeziehungen </p></div><div class="challenge-card" data-v-1c0880d6><div class="challenge-icon" data-v-1c0880d6>⚖️</div><h4 class="challenge-title" data-v-1c0880d6>Zielkonflikte</h4><p class="challenge-text" data-v-1c0880d6> Abstimmung zwischen Vertrieb, Produktion und Controlling </p></div></div></div><div class="section" data-v-1c0880d6><h2 class="section-title" data-v-1c0880d6>LearnSpace Industries in den Lernmodulen</h2><p class="section-text" data-v-1c0880d6> In jedem Lernmodul wird gezeigt, wie LearnSpace Industries die jeweilige Methode erfolgreich angewendet hat: </p><div class="modules-preview-grid" data-v-1c0880d6><div class="module-preview-card" data-v-1c0880d6><div class="module-preview-icon" data-v-1c0880d6>🔧</div><h4 class="module-preview-title" data-v-1c0880d6>Lean Management &amp; 5S</h4><p class="module-preview-text" data-v-1c0880d6>Einführung der 5S-Methode in der Elektronikfertigung</p></div><div class="module-preview-card" data-v-1c0880d6><div class="module-preview-icon" data-v-1c0880d6>📊</div><h4 class="module-preview-title" data-v-1c0880d6>ABC/XYZ-Analyse</h4><p class="module-preview-text" data-v-1c0880d6>Klassifizierung von 7.500+ Lagerartikeln</p></div><div class="module-preview-card" data-v-1c0880d6><div class="module-preview-icon" data-v-1c0880d6>🚚</div><h4 class="module-preview-title" data-v-1c0880d6>Klassisches Transportmodell</h4><p class="module-preview-text" data-v-1c0880d6>Optimierung der Transportkostenverteilung</p></div><div class="module-preview-card" data-v-1c0880d6><div class="module-preview-icon" data-v-1c0880d6>⚖️</div><h4 class="module-preview-title" data-v-1c0880d6>Zielkonflikte</h4><p class="module-preview-text" data-v-1c0880d6>Lösung des Bestands-Lieferbereitschaft-Dilemmas</p></div></div></div>',5)),d("div",Qo,[d("button",{class:"btn btn-outline",onClick:t[0]||(t[0]=(...l)=>i.goHome&&i.goHome(...l))},"← Zur Startseite"),d("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...l)=>i.startFirstModule&&i.startFirstModule(...l))},"Erstes Modul starten →")])])])}const $o=Ne(qo,[["render",Jo],["__scopeId","data-v-1c0880d6"]]),Yo={name:"KontaktPage",emits:["go-back"],setup(e,{emit:t}){return{goBack:()=>{t("go-back")}}}},Xo={class:"kontakt-page"},ea={class:"container"},ta={class:"content-section"},na={class:"action-section"};function ia(e,t,n,i,s,r){return w(),S("div",Xo,[d("div",ea,[t[2]||(t[2]=d("div",{class:"page-hero"},[d("div",{class:"badge"},"📧 KONTAKT"),d("h1",{class:"page-title gradient-text"},"Kontaktieren Sie uns"),d("p",{class:"page-subtitle"},"Fragen, Anregungen oder Feedback?")],-1)),d("div",ta,[t[1]||(t[1]=Ye('<div class="contact-grid" data-v-899efd0f><div class="contact-card card" data-v-899efd0f><div class="contact-icon" data-v-899efd0f>👤</div><h3 class="contact-title" data-v-899efd0f>Projektleitung</h3><p class="contact-name" data-v-899efd0f>Ahmadbaz Chedo</p><p class="contact-role" data-v-899efd0f>Student, HTW Berlin</p></div><div class="contact-card card" data-v-899efd0f><div class="contact-icon" data-v-899efd0f>📧</div><h3 class="contact-title" data-v-899efd0f>E-Mail</h3><a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="contact-link" data-v-899efd0f> Ahmadbaz.Chedo@Student.HTW-Berlin.de </a><p class="contact-info" data-v-899efd0f>Antwortzeit: Innerhalb von 2-3 Werktagen</p></div><div class="contact-card card" data-v-899efd0f><div class="contact-icon" data-v-899efd0f>🏫</div><h3 class="contact-title" data-v-899efd0f>Institution</h3><p class="contact-name" data-v-899efd0f>Hochschule für Technik und Wirtschaft Berlin</p><p class="contact-address" data-v-899efd0f> Treskowallee 8<br data-v-899efd0f> 10318 Berlin<br data-v-899efd0f> Deutschland </p></div><div class="contact-card card" data-v-899efd0f><div class="contact-icon" data-v-899efd0f>🌐</div><h3 class="contact-title" data-v-899efd0f>Website</h3><a href="https://www.htw-berlin.de" target="_blank" class="contact-link" data-v-899efd0f> www.htw-berlin.de </a><p class="contact-info" data-v-899efd0f>Hochschulwebsite</p></div></div><div class="info-card card" data-v-899efd0f><h2 class="section-title" data-v-899efd0f>Über dieses Projekt</h2><p class="info-text" data-v-899efd0f> Diese E-Learning-Plattform wurde im Rahmen eines Studiums an der Hochschule für Technik und Wirtschaft Berlin (HTW Berlin) entwickelt. Das Projekt dient der Vermittlung von Konzepten der Produktionswirtschaft und Logistik in einem modernen, interaktiven Format. </p><p class="info-text" data-v-899efd0f> Die Plattform kombiniert wissenschaftlich fundierte Inhalte mit einem futuristischen Space-Design, um ein ansprechendes und effektives Lernerlebnis zu schaffen. </p></div><div class="info-card card" data-v-899efd0f><h2 class="section-title" data-v-899efd0f>Häufig gestellte Fragen</h2><div class="faq-item" data-v-899efd0f><h3 class="faq-question" data-v-899efd0f>💡 Kann ich diese Plattform für mein Studium nutzen?</h3><p class="faq-answer" data-v-899efd0f> Ja! Diese Plattform wurde speziell für Studierende entwickelt und steht zu Bildungszwecken zur Verfügung. Die Inhalte basieren auf realen Vorlesungsmaterialien. </p></div><div class="faq-item" data-v-899efd0f><h3 class="faq-question" data-v-899efd0f>🤝 Kann ich zur Plattform beitragen?</h3><p class="faq-answer" data-v-899efd0f> Feedback und Verbesserungsvorschläge sind jederzeit willkommen! Kontaktieren Sie mich gerne per E-Mail. </p></div><div class="faq-item" data-v-899efd0f><h3 class="faq-question" data-v-899efd0f>📊 Werden meine Lerndaten gespeichert?</h3><p class="faq-answer" data-v-899efd0f> Ihre Lerndaten werden ausschließlich lokal in Ihrem Browser gespeichert und niemals an externe Server übertragen. Siehe auch unsere Datenschutzerklärung. </p></div><div class="faq-item" data-v-899efd0f><h3 class="faq-question" data-v-899efd0f>🎓 Ist LearnSpace Industries ein echtes Unternehmen?</h3><p class="faq-answer" data-v-899efd0f> Nein, LearnSpace Industries GmbH ist ein fiktives Musterunternehmen, das zur Veranschaulichung praxisnaher Fallbeispiele dient. </p></div></div><div class="cta-box card" data-v-899efd0f><div class="cta-icon" data-v-899efd0f>✉️</div><h2 class="cta-title" data-v-899efd0f>Haben Sie Fragen oder Feedback?</h2><p class="cta-text" data-v-899efd0f> Ich freue mich über jede Nachricht! Ob Fragen zu den Lerninhalten, technisches Feedback oder Verbesserungsvorschläge – kontaktieren Sie mich gerne. </p><a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="btn btn-primary" data-v-899efd0f> 📧 E-Mail senden </a></div>',4)),d("div",na,[d("button",{class:"btn btn-outline",onClick:t[0]||(t[0]=(...l)=>i.goBack&&i.goBack(...l))},"← Zurück")])])])])}const sa=Ne(Yo,[["render",ia],["__scopeId","data-v-899efd0f"]]),ra={name:"DatenschutzPage",emits:["go-back"],setup(e,{emit:t}){return{goBack:()=>{t("go-back")}}}},la={class:"datenschutz-page"},oa={class:"container"},aa={class:"content-section"},da={class:"action-section"};function ca(e,t,n,i,s,r){return w(),S("div",la,[d("div",oa,[t[2]||(t[2]=d("div",{class:"page-hero"},[d("div",{class:"badge"},"🔒 DATENSCHUTZ"),d("h1",{class:"page-title gradient-text"},"Datenschutzerklärung"),d("p",{class:"page-subtitle"},"Informationen zur Datenverarbeitung")],-1)),d("div",aa,[t[1]||(t[1]=Ye('<div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>1. Datenschutz auf einen Blick</h2><h3 class="subsection-title" data-v-eb16955b>Allgemeine Hinweise</h3><p class="info-text" data-v-eb16955b> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. </p><h3 class="subsection-title" data-v-eb16955b>Datenerfassung auf dieser Website</h3><p class="info-text" data-v-eb16955b><strong data-v-eb16955b>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br data-v-eb16955b> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. </p><p class="info-text" data-v-eb16955b><strong data-v-eb16955b>Wie erfassen wir Ihre Daten?</strong><br data-v-eb16955b> Diese E-Learning-Plattform ist ein Studentenprojekt und erfasst <strong data-v-eb16955b>keine personenbezogenen Daten</strong>. Es werden keine Cookies gesetzt und keine Tracking-Tools verwendet. Alle Daten werden lokal im Browser gespeichert und verlassen Ihr Gerät nicht. </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>2. Hosting und Server</h2><p class="info-text" data-v-eb16955b> Diese Website wird lokal entwickelt und gehostet. Es erfolgt keine Datenübertragung an externe Server. Sollte die Plattform zukünftig online gestellt werden, erfolgt eine Aktualisierung dieser Datenschutzerklärung. </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>3. Allgemeine Hinweise und Pflichtinformationen</h2><h3 class="subsection-title" data-v-eb16955b>Datenschutz</h3><p class="info-text" data-v-eb16955b> Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Diese Plattform wurde zu Bildungszwecken entwickelt und verarbeitet bewusst keine personenbezogenen Daten. </p><h3 class="subsection-title" data-v-eb16955b>Hinweis zur verantwortlichen Stelle</h3><p class="info-text" data-v-eb16955b> Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br data-v-eb16955b><br data-v-eb16955b><strong data-v-eb16955b>Ahmadbaz Chedo</strong><br data-v-eb16955b> Hochschule für Technik und Wirtschaft Berlin<br data-v-eb16955b> E-Mail: Ahmadbaz.Chedo@Student.HTW-Berlin.de </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>4. Datenerfassung auf dieser Website</h2><h3 class="subsection-title" data-v-eb16955b>Lokale Speicherung (LocalStorage)</h3><p class="info-text" data-v-eb16955b> Diese Plattform nutzt die LocalStorage-Funktion Ihres Browsers, um Ihren Lernfortschritt zu speichern. Diese Daten werden ausschließlich lokal auf Ihrem Gerät gespeichert und niemals an externe Server übertragen. Sie können diese Daten jederzeit über die Browser-Einstellungen löschen. </p><h3 class="subsection-title" data-v-eb16955b>Keine Cookies</h3><p class="info-text" data-v-eb16955b> Diese Website verwendet <strong data-v-eb16955b>keine Cookies</strong>. </p><h3 class="subsection-title" data-v-eb16955b>Kein Tracking</h3><p class="info-text" data-v-eb16955b> Diese Website verwendet <strong data-v-eb16955b>keine Analyse-Tools</strong> wie Google Analytics oder ähnliche Tracking-Dienste. </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>5. Ihre Rechte</h2><p class="info-text" data-v-eb16955b> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung. Da diese Plattform jedoch keine personenbezogenen Daten erfasst oder speichert, gibt es in diesem Fall keine zu verwaltenden Daten. </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>6. Externe Links</h2><p class="info-text" data-v-eb16955b> Diese Website kann Links zu externen Websites enthalten. Für die Datenschutzpraktiken dieser externen Websites sind deren jeweilige Betreiber verantwortlich. Wir empfehlen Ihnen, die Datenschutzerklärungen der verlinkten Websites zu lesen. </p></div><div class="info-card card" data-v-eb16955b><h2 class="section-title" data-v-eb16955b>7. Bildungszweck</h2><div class="highlight-box" data-v-eb16955b><div class="highlight-icon" data-v-eb16955b>🎓</div><div class="highlight-content" data-v-eb16955b><h3 class="highlight-title" data-v-eb16955b>Wichtiger Hinweis</h3><p class="info-text" data-v-eb16955b> Diese E-Learning-Plattform wurde ausschließlich zu Bildungszwecken im Rahmen eines Studiums an der HTW Berlin erstellt. Sie dient der Demonstration von Konzepten der Produktionswirtschaft und Logistik. Das dargestellte Unternehmen &quot;LearnSpace Industries GmbH&quot; ist fiktiv. </p></div></div></div>',7)),d("div",da,[d("button",{class:"btn btn-outline",onClick:t[0]||(t[0]=(...l)=>i.goBack&&i.goBack(...l))},"← Zurück")])])])])}const ua=Ne(ra,[["render",ca],["__scopeId","data-v-eb16955b"]]),ga={name:"ImpressumPage",emits:["go-back"],setup(e,{emit:t}){return{goBack:()=>{t("go-back")}}}},fa={class:"impressum-page"},ha={class:"container"},pa={class:"content-section"},ba={class:"action-section"};function ma(e,t,n,i,s,r){return w(),S("div",fa,[d("div",ha,[t[2]||(t[2]=d("div",{class:"page-hero"},[d("div",{class:"badge"},"📄 RECHTLICHE INFORMATIONEN"),d("h1",{class:"page-title gradient-text"},"Impressum"),d("p",{class:"page-subtitle"},"Angaben gemäß § 5 TMG")],-1)),d("div",pa,[t[1]||(t[1]=Ye('<div class="info-card card" data-v-d0cc7efd><h2 class="section-title" data-v-d0cc7efd>Verantwortlich für den Inhalt</h2><div class="info-grid" data-v-d0cc7efd><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>Name:</div><div class="info-value" data-v-d0cc7efd>Ahmadbaz Chedo</div></div><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>Institution:</div><div class="info-value" data-v-d0cc7efd>Hochschule für Technik und Wirtschaft Berlin (HTW Berlin)</div></div><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>E-Mail:</div><div class="info-value" data-v-d0cc7efd><a href="mailto:Ahmadbaz.Chedo@Student.HTW-Berlin.de" class="email-link" data-v-d0cc7efd> Ahmadbaz.Chedo@Student.HTW-Berlin.de </a></div></div></div></div><div class="info-card card" data-v-d0cc7efd><h2 class="section-title" data-v-d0cc7efd>Hochschule für Technik und Wirtschaft Berlin</h2><div class="info-grid" data-v-d0cc7efd><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>Anschrift:</div><div class="info-value" data-v-d0cc7efd> Treskowallee 8<br data-v-d0cc7efd> 10318 Berlin<br data-v-d0cc7efd> Deutschland </div></div><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>Telefon:</div><div class="info-value" data-v-d0cc7efd>+49 30 5019-0</div></div><div class="info-item" data-v-d0cc7efd><div class="info-label" data-v-d0cc7efd>Website:</div><div class="info-value" data-v-d0cc7efd><a href="https://www.htw-berlin.de" target="_blank" class="email-link" data-v-d0cc7efd> www.htw-berlin.de </a></div></div></div></div><div class="info-card card" data-v-d0cc7efd><h2 class="section-title" data-v-d0cc7efd>Projektinformationen</h2><p class="info-text" data-v-d0cc7efd> Diese E-Learning-Plattform wurde im Rahmen eines Studiums an der HTW Berlin erstellt. Sie dient ausschließlich zu Bildungszwecken und zur Demonstration von Konzepten der Produktionswirtschaft und Logistik. </p><p class="info-text" data-v-d0cc7efd><strong data-v-d0cc7efd>LearnSpace Industries GmbH</strong> ist ein fiktives Musterunternehmen und dient nur zur Veranschaulichung praxisnaher Anwendungsfälle. </p></div><div class="info-card card" data-v-d0cc7efd><h2 class="section-title" data-v-d0cc7efd>Haftungsausschluss</h2><h3 class="subsection-title" data-v-d0cc7efd>Haftung für Inhalte</h3><p class="info-text" data-v-d0cc7efd> Die Inhalte dieser Plattform wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. </p><h3 class="subsection-title" data-v-d0cc7efd>Haftung für Links</h3><p class="info-text" data-v-d0cc7efd> Diese Plattform enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. </p><h3 class="subsection-title" data-v-d0cc7efd>Urheberrecht</h3><p class="info-text" data-v-d0cc7efd> Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Plattform unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. </p></div>',4)),d("div",ba,[d("button",{class:"btn btn-outline",onClick:t[0]||(t[0]=(...l)=>i.goBack&&i.goBack(...l))},"← Zurück")])])])])}const va=Ne(ga,[["render",ma],["__scopeId","data-v-d0cc7efd"]]),xa={name:"ContentSlide",props:{content:{type:Object,required:!0},step:{type:Number,required:!0},total:{type:Number,required:!0}}},ya={class:"content-slide card"},ka={class:"slide-header"},wa={class:"slide-title"},_a={class:"slide-number"},za={class:"slide-content"},Sa={key:0,class:"intro-slide"},Aa={class:"intro-icon"},Ma={class:"intro-title gradient-text"},Ta={class:"intro-subtitle"},Pa=["innerHTML"],Ba={key:2,class:"text-content"},Ca={key:3,class:"list-content"},Ea={key:0,class:"intro-text"},Ka={class:"custom-list"},La={class:"item-number"},Wa={class:"item-content"},Da={key:0},Va={key:4,class:"visual-content"},Ia={key:0,class:"intro-text"},Ha={key:1,class:"prinzipien-grid"},Fa={class:"prinzip-number"},Oa={class:"prinzip-title"},Na={class:"prinzip-desc"},Za={key:2,class:"five-s-visual"},Ra={class:"five-s-number"},ja={class:"five-s-info"},qa={class:"five-s-title"},Ua={class:"five-s-translation"},Ga={class:"five-s-desc"},Qa={key:3,class:"three-mu-diagram"},Ja={class:"mu-details"},$a={key:0},Ya={key:4,class:"matrix-visual"},Xa={class:"matrix-table"},ed={class:"matrix-header"},td={class:"row-label"},nd={key:5,class:"abc-xyz-grid"},id={class:"abc-label"},sd={key:0,class:"criteria"},rd={key:5,class:"example-content"},ld={class:"example-header"},od={class:"example-intro"},ad={key:0,class:"nordwest-example"},dd={class:"method-explanation"},cd={class:"transportation-table"},ud={key:0,class:"allocation"},gd={class:"capacity"},fd={class:"demand-row"},hd={key:0,class:"calculation-result"},pd=["innerHTML"],bd={class:"total-cost"};function md(e,t,n,i,s,r){return w(),S("div",ya,[d("div",ka,[d("h2",wa,A(n.content.title),1),d("div",_a,A(n.step)+" / "+A(n.total),1)]),d("div",za,[n.content.type==="intro"?(w(),S("div",Sa,[d("div",Aa,A(n.content.icon),1),d("h1",Ma,A(n.content.title),1),d("p",Ta,A(n.content.subtitle),1)])):n.content.content?(w(),S("div",{key:1,class:"html-content",innerHTML:n.content.content},null,8,Pa)):n.content.type==="text"?(w(),S("div",Ba,[(w(!0),S(q,null,ne(n.content.text,(l,o)=>(w(),S("p",{key:o,class:"paragraph"},A(l),1))),128))])):Q("",!0),n.content.type==="list"?(w(),S("div",Ca,[n.content.intro?(w(),S("p",Ea,A(n.content.intro),1)):Q("",!0),d("ul",Ka,[(w(!0),S(q,null,ne(n.content.items,(l,o)=>(w(),S("li",{key:o,class:"list-item"},[d("span",La,A(o+1),1),d("div",Wa,[l.title?(w(),S("strong",Da,A(l.title)+":",1)):Q("",!0),d("span",null,A(l.text||l),1)])]))),128))])])):Q("",!0),n.content.type==="visual"?(w(),S("div",Va,[n.content.intro?(w(),S("p",Ia,A(n.content.intro),1)):Q("",!0),n.content.layout==="prinzipien"?(w(),S("div",Ha,[(w(!0),S(q,null,ne(n.content.items,(l,o)=>(w(),S("div",{key:o,class:"prinzip-card",style:Ve({animationDelay:o*.1+"s"})},[d("div",Fa,A(o+1),1),d("h3",Oa,A(l.title),1),d("p",Na,A(l.description),1)],4))),128))])):Q("",!0),n.content.layout==="5s"?(w(),S("div",Za,[(w(!0),S(q,null,ne(n.content.items,(l,o)=>(w(),S("div",{key:o,class:"five-s-item",style:Ve({animationDelay:o*.15+"s"})},[d("div",Ra,A(o+1),1),d("div",ja,[d("h3",qa,A(l.term),1),d("p",Ua,A(l.translation),1),d("p",Ga,A(l.description),1)])],4))),128))])):Q("",!0),n.content.layout==="3mu"?(w(),S("div",Qa,[t[0]||(t[0]=d("div",{class:"mu-circles"},[d("div",{class:"mu-circle muda"},[d("h3",null,"Muda"),d("p",null,"Verschwendung")]),d("div",{class:"mu-circle mura"},[d("h3",null,"Mura"),d("p",null,"Unregelmäßigkeit")]),d("div",{class:"mu-circle muri"},[d("h3",null,"Muri"),d("p",null,"Überlastung")])],-1)),d("div",Ja,[(w(!0),S(q,null,ne(n.content.items,(l,o)=>(w(),S("div",{key:o,class:"mu-detail-card"},[d("h4",null,A(l.title),1),d("p",null,A(l.description),1),l.examples?(w(),S("ul",$a,[(w(!0),S(q,null,ne(l.examples,(c,f)=>(w(),S("li",{key:f},A(c),1))),128))])):Q("",!0)]))),128))])])):Q("",!0),n.content.layout==="matrix"?(w(),S("div",Ya,[d("div",Xa,[d("div",ed,[t[1]||(t[1]=d("div",{class:"header-cell"},null,-1)),(w(!0),S(q,null,ne(n.content.columns,l=>(w(),S("div",{key:l,class:"header-cell"},A(l),1))),128))]),(w(!0),S(q,null,ne(n.content.rows,(l,o)=>(w(),S("div",{key:o,class:"matrix-row"},[d("div",td,A(l.label),1),(w(!0),S(q,null,ne(l.values,(c,f)=>(w(),S("div",{key:f,class:"matrix-cell"},A(c),1))),128))]))),128))])])):Q("",!0),n.content.layout==="abc-xyz"?(w(),S("div",nd,[(w(!0),S(q,null,ne(n.content.items,(l,o)=>(w(),S("div",{key:o,class:ye(["abc-item",l.class])},[d("div",id,A(l.label),1),d("h4",null,A(l.title),1),d("p",null,A(l.description),1),l.criteria?(w(),S("div",sd,[t[2]||(t[2]=d("strong",null,"Kriterium:",-1)),At(" "+A(l.criteria),1)])):Q("",!0)],2))),128))])):Q("",!0)])):Q("",!0),n.content.type==="example"?(w(),S("div",rd,[d("div",ld,[d("h3",null,A(n.content.title),1),d("p",od,A(n.content.intro),1)]),n.content.method==="nordwest"?(w(),S("div",ad,[d("div",dd,[d("p",null,[t[3]||(t[3]=d("strong",null,"Transportkostensatz:",-1)),At(" "+A(n.content.cost)+" pro Kilometer",1)])]),d("div",cd,[d("table",null,[d("thead",null,[d("tr",null,[t[4]||(t[4]=d("th",null,null,-1)),(w(!0),S(q,null,ne(n.content.destinations,l=>(w(),S("th",{key:l},A(l),1))),128)),t[5]||(t[5]=d("th",null,"Lagerkapazität",-1))])]),d("tbody",null,[(w(!0),S(q,null,ne(n.content.sources,(l,o)=>(w(),S("tr",{key:l},[d("th",null,A(l),1),(w(!0),S(q,null,ne(n.content.distances[o],(c,f)=>(w(),S("td",{key:f},[At(A(c)+" km ",1),n.content.solution&&n.content.solution[o][f]?(w(),S("span",ud," ("+A(n.content.solution[o][f])+") ",1)):Q("",!0)]))),128)),d("td",gd,A(n.content.sourceCapacity[o]),1)]))),128)),d("tr",fd,[t[6]||(t[6]=d("th",null,"Bedarf",-1)),(w(!0),S(q,null,ne(n.content.demands,l=>(w(),S("td",{key:l,class:"demand"},A(l),1))),128)),t[7]||(t[7]=d("td",null,null,-1))])])])]),n.content.calculation?(w(),S("div",hd,[t[9]||(t[9]=d("h4",null,"Berechnung:",-1)),d("p",{innerHTML:n.content.calculation},null,8,pd),d("div",bd,[t[8]||(t[8]=At(" Gesamttransportkosten: ",-1)),d("strong",null,A(n.content.totalCost)+"€",1)])])):Q("",!0)])):Q("",!0)])):Q("",!0)])])}const vd=Ne(xa,[["render",md],["__scopeId","data-v-86bde213"]]),xd={name:"QuizComponent",props:{quiz:{type:Object,required:!0}},emits:["finish"],setup(e,{emit:t}){const n=Ge(0),i=Ge(null),s=Ge(!1),r=Ge([]),l=Ge(!1),o=de(()=>e.quiz.questions[n.value]),c=de(()=>(n.value+1)/e.quiz.questions.length*100),f=de(()=>i.value===o.value.correct),g=de(()=>r.value.filter(G=>G.isCorrect).length),p=de(()=>r.value.length-g.value),y=de(()=>Math.round(g.value/e.quiz.questions.length*100)),T=de(()=>{const G=y.value;return G>=80?"#10b981":G>=60?"#f59e0b":"#ef4444"}),L=de(()=>{const G=y.value;return G===100?"🏆":G>=80?"🎉":G>=60?"👍":"💪"}),D=de(()=>{const G=y.value;return G===100?"Perfekt! Du hast alle Fragen richtig beantwortet!":G>=80?"Sehr gut! Du hast das Thema gut verstanden!":G>=60?"Gut gemacht! Mit etwas Übung wirst du noch besser!":"Nicht aufgeben! Wiederhole das Material und versuche es erneut!"}),te=2*Math.PI*85,I=de(()=>te-y.value/100*te);return{currentQuestionIndex:n,currentQuestion:o,selectedAnswer:i,showFeedback:s,isCorrect:f,quizProgress:c,selectAnswer:G=>{s.value||(i.value=G,s.value=!0,r.value.push({questionIndex:n.value,selectedAnswer:G,correctAnswer:o.value.correct,isCorrect:G===o.value.correct}))},nextQuestion:()=>{n.value++,i.value=null,s.value=!1},finishQuiz:()=>{l.value=!0,t("finish",{score:g.value,total:e.quiz.questions.length,percentage:y.value,answers:r.value})},resetQuiz:()=>{n.value=0,i.value=null,s.value=!1,r.value=[],l.value=!1},showResults:l,correctAnswers:g,incorrectAnswers:p,scorePercentage:y,scoreColor:T,resultEmoji:L,resultMessage:D,circumference:te,dashOffset:I}}},yd={class:"quiz-component"},kd={key:0,class:"quiz-active card"},wd={class:"quiz-header"},_d={class:"quiz-progress-info"},zd={class:"quiz-progress-bar"},Sd={class:"question-text"},Ad={class:"answers-grid"},Md=["onClick","disabled"],Td={class:"answer-letter"},Pd={class:"answer-text"},Bd={key:0,class:"check-icon"},Cd={key:1,class:"cross-icon"},Ed={class:"feedback-icon"},Kd={class:"feedback-content"},Ld={key:0},Wd={class:"question-navigation"},Dd={key:1,class:"quiz-results card"},Vd={class:"results-header"},Id={class:"results-icon"},Hd={class:"results-subtitle"},Fd={class:"results-stats"},Od={class:"stat-circle"},Nd={class:"progress-ring",width:"200",height:"200"},Zd=["stroke","stroke-dasharray","stroke-dashoffset"],Rd={class:"stat-circle-content"},jd={class:"percentage"},qd={class:"score-text"},Ud={class:"results-details"},Gd={class:"detail-item correct"},Qd={class:"detail-value"},Jd={class:"detail-item incorrect"},$d={class:"detail-value"},Yd={class:"detail-item total"},Xd={class:"detail-value"},ec={class:"results-actions"};function tc(e,t,n,i,s,r){return w(),S("div",yd,[i.showResults?(w(),S("div",Dd,[d("div",Vd,[d("div",Id,A(i.resultEmoji),1),t[4]||(t[4]=d("h2",{class:"results-title"},"Quiz abgeschlossen!",-1)),d("p",Hd,A(i.resultMessage),1)]),d("div",Fd,[d("div",Od,[(w(),S("svg",Nd,[t[5]||(t[5]=d("circle",{class:"progress-ring-circle-bg",stroke:"rgba(99, 102, 241, 0.1)","stroke-width":"15",fill:"transparent",r:"85",cx:"100",cy:"100"},null,-1)),d("circle",{class:"progress-ring-circle",stroke:i.scoreColor,"stroke-width":"15",fill:"transparent",r:"85",cx:"100",cy:"100","stroke-dasharray":i.circumference,"stroke-dashoffset":i.dashOffset},null,8,Zd)])),d("div",Rd,[d("div",jd,A(i.scorePercentage)+"%",1),d("div",qd,A(i.correctAnswers)+" / "+A(n.quiz.questions.length),1)])]),d("div",Ud,[d("div",Gd,[t[6]||(t[6]=d("span",{class:"detail-icon"},"✓",-1)),t[7]||(t[7]=d("span",{class:"detail-label"},"Richtig:",-1)),d("span",Qd,A(i.correctAnswers),1)]),d("div",Jd,[t[8]||(t[8]=d("span",{class:"detail-icon"},"✗",-1)),t[9]||(t[9]=d("span",{class:"detail-label"},"Falsch:",-1)),d("span",$d,A(i.incorrectAnswers),1)]),d("div",Yd,[t[10]||(t[10]=d("span",{class:"detail-icon"},"📊",-1)),t[11]||(t[11]=d("span",{class:"detail-label"},"Gesamt:",-1)),d("span",Xd,A(n.quiz.questions.length),1)])])]),d("div",ec,[d("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...l)=>i.resetQuiz&&i.resetQuiz(...l))}," 🔄 Quiz wiederholen ")]),t[12]||(t[12]=d("div",{class:"completion-message"},[d("p",null,"Zurück zur Startseite in 3 Sekunden...")],-1))])):(w(),S("div",kd,[d("div",wd,[t[3]||(t[3]=d("h2",{class:"quiz-title"},"📝 Quiz",-1)),d("div",_d," Frage "+A(i.currentQuestionIndex+1)+" von "+A(n.quiz.questions.length),1)]),d("div",zd,[d("div",{class:"progress-fill",style:Ve({width:i.quizProgress+"%"})},null,4)]),(w(),S("div",{class:"question-card",key:i.currentQuestionIndex},[d("h3",Sd,A(i.currentQuestion.question),1),d("div",Ad,[(w(!0),S(q,null,ne(i.currentQuestion.answers,(l,o)=>(w(),S("button",{key:o,class:ye(["answer-button",{selected:i.selectedAnswer===o,correct:i.showFeedback&&o===i.currentQuestion.correct,incorrect:i.showFeedback&&i.selectedAnswer===o&&o!==i.currentQuestion.correct}]),onClick:c=>i.selectAnswer(o),disabled:i.showFeedback},[d("span",Td,A(String.fromCharCode(65+o)),1),d("span",Pd,A(l),1),i.showFeedback&&o===i.currentQuestion.correct?(w(),S("span",Bd,"✓")):Q("",!0),i.showFeedback&&i.selectedAnswer===o&&o!==i.currentQuestion.correct?(w(),S("span",Cd,"✗")):Q("",!0)],10,Md))),128))]),i.showFeedback?(w(),S("div",{key:0,class:ye(["feedback-box",{correct:i.isCorrect,incorrect:!i.isCorrect}])},[d("div",Ed,A(i.isCorrect?"🎉":"💡"),1),d("div",Kd,[d("h4",null,A(i.isCorrect?"Richtig!":"Nicht ganz!"),1),i.currentQuestion.explanation?(w(),S("p",Ld,A(i.currentQuestion.explanation),1)):Q("",!0)])],2)):Q("",!0),d("div",Wd,[i.showFeedback&&i.currentQuestionIndex<n.quiz.questions.length-1?(w(),S("button",{key:0,class:"btn btn-primary",onClick:t[0]||(t[0]=(...l)=>i.nextQuestion&&i.nextQuestion(...l))}," Nächste Frage → ")):Q("",!0),i.showFeedback&&i.currentQuestionIndex===n.quiz.questions.length-1?(w(),S("button",{key:1,class:"btn btn-secondary",onClick:t[1]||(t[1]=(...l)=>i.finishQuiz&&i.finishQuiz(...l))}," Quiz beenden ")):Q("",!0)])]))]))])}const nc=Ne(xd,[["render",tc],["__scopeId","data-v-55ed7aff"]]),ic={name:"ModuleView",components:{ContentSlide:vd,QuizComponent:nc},props:{module:{type:Object,required:!0},step:{type:Number,required:!0}},emits:["next","back","home"],methods:{handleQuizFinish(e){setTimeout(()=>{this.$emit("home")},3e3)}}},sc={class:"module-view"},rc={class:"container"},lc={class:"module-container"},oc={class:"module-header fade-in"},ac={class:"module-hero"},dc={class:"module-icon-large"},cc={class:"module-main-title gradient-text"},uc={class:"module-tagline"},gc={key:0,class:"content-view fade-in"},fc={class:"navigation-buttons"},hc={key:1,class:"quiz-view fade-in"};function pc(e,t,n,i,s,r){const l=qe("ContentSlide"),o=qe("QuizComponent");return w(),S("div",sc,[d("div",rc,[d("div",lc,[d("div",oc,[d("div",ac,[d("div",dc,A(n.module.icon),1),d("h1",cc,A(n.module.title),1),d("p",uc,A(n.module.description),1)])]),n.step<=n.module.slides.length?(w(),S("div",gc,[ve(l,{content:n.module.slides[n.step-1],step:n.step,total:n.module.slides.length},null,8,["content","step","total"]),d("div",fc,[d("button",{class:"btn btn-outline",onClick:t[0]||(t[0]=c=>e.$emit("back"))}," ← "+A(n.step===1?"Zurück zur Übersicht":"Zurück"),1),d("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=c=>e.$emit("next"))},A(n.step===n.module.slides.length?"Zum Quiz →":"Weiter →"),1)])])):(w(),S("div",hc,[ve(o,{quiz:n.module.quiz,onFinish:r.handleQuizFinish},null,8,["quiz","onFinish"])]))])])])}const bc=Ne(ic,[["render",pc],["__scopeId","data-v-cdf885ea"]]),mc={name:"App",components:{HomePage:jo,AboutPage:$o,KontaktPage:sa,DatenschutzPage:ua,ImpressumPage:va,ModuleView:bc},setup(){const e=Ge("home"),t=Ge(null),n=Ge(1),i=de(()=>gt.find(L=>L.id===t.value)),s=de(()=>i.value?i.value.slides.length+1:0),r=de(()=>n.value/s.value*100),l=L=>{t.value=L,e.value="module",n.value=1},o=()=>{n.value<s.value&&n.value++},c=()=>{n.value>1?n.value--:f()},f=()=>{e.value="home",t.value=null,n.value=1};return{currentView:e,currentModule:i,currentStep:n,totalSteps:s,progressPercentage:r,selectModule:l,nextStep:o,backStep:c,goHome:f,showAbout:()=>{e.value="about",t.value=null,n.value=1},showKontakt:()=>{e.value="kontakt",t.value=null,n.value=1},showDatenschutz:()=>{e.value="datenschutz",t.value=null,n.value=1},showImpressum:()=>{e.value="impressum",t.value=null,n.value=1}}}},vc={class:"app"},xc={class:"navbar"},yc={class:"container"},kc={class:"nav-content"},wc={class:"nav-links"},_c={key:0,class:"nav-progress"},zc={class:"progress-info"},Sc={class:"module-name"},Ac={class:"progress-text"},Mc={class:"progress-bar"},Tc={class:"main-content"};function Pc(e,t,n,i,s,r){const l=qe("HomePage"),o=qe("AboutPage"),c=qe("KontaktPage"),f=qe("DatenschutzPage"),g=qe("ImpressumPage"),p=qe("ModuleView");return w(),S("div",vc,[d("nav",xc,[d("div",yc,[d("div",kc,[d("div",{class:"nav-brand",onClick:t[0]||(t[0]=(...y)=>i.goHome&&i.goHome(...y))},[...t[6]||(t[6]=[d("span",{class:"logo-icon"},"🎓",-1),d("span",{class:"logo-text gradient-text"},"LearnSpace",-1)])]),d("div",wc,[d("button",{class:ye(["nav-link",{active:i.currentView==="home"}]),onClick:t[1]||(t[1]=(...y)=>i.goHome&&i.goHome(...y))}," 🏠 Start ",2),d("button",{class:ye(["nav-link",{active:i.currentView==="about"}]),onClick:t[2]||(t[2]=(...y)=>i.showAbout&&i.showAbout(...y))}," ℹ️ Über uns ",2),d("button",{class:ye(["nav-link",{active:i.currentView==="kontakt"}]),onClick:t[3]||(t[3]=(...y)=>i.showKontakt&&i.showKontakt(...y))}," 📧 Kontakt ",2),d("button",{class:ye(["nav-link",{active:i.currentView==="datenschutz"}]),onClick:t[4]||(t[4]=(...y)=>i.showDatenschutz&&i.showDatenschutz(...y))}," 🔒 Datenschutz ",2),d("button",{class:ye(["nav-link",{active:i.currentView==="impressum"}]),onClick:t[5]||(t[5]=(...y)=>i.showImpressum&&i.showImpressum(...y))}," 📄 Impressum ",2)]),i.currentModule?(w(),S("div",_c,[d("div",zc,[d("span",Sc,A(i.currentModule.title),1),d("span",Ac,A(i.currentStep)+"/"+A(i.totalSteps),1)]),d("div",Mc,[d("div",{class:"progress-fill",style:Ve({width:i.progressPercentage+"%"})},null,4)])])):Q("",!0)])])]),d("main",Tc,[i.currentView==="home"?(w(),lt(l,{key:0,onSelectModule:i.selectModule,onShowAbout:i.showAbout,onShowKontakt:i.showKontakt,onShowDatenschutz:i.showDatenschutz,onShowImpressum:i.showImpressum},null,8,["onSelectModule","onShowAbout","onShowKontakt","onShowDatenschutz","onShowImpressum"])):i.currentView==="about"?(w(),lt(o,{key:1,onSelectModule:i.selectModule,onGoHome:i.goHome},null,8,["onSelectModule","onGoHome"])):i.currentView==="kontakt"?(w(),lt(c,{key:2,onGoBack:i.goHome},null,8,["onGoBack"])):i.currentView==="datenschutz"?(w(),lt(f,{key:3,onGoBack:i.goHome},null,8,["onGoBack"])):i.currentView==="impressum"?(w(),lt(g,{key:4,onGoBack:i.goHome},null,8,["onGoBack"])):i.currentView==="module"?(w(),lt(p,{key:5,module:i.currentModule,step:i.currentStep,onNext:i.nextStep,onBack:i.backStep,onHome:i.goHome},null,8,["module","step","onNext","onBack","onHome"])):Q("",!0)]),t[7]||(t[7]=Ye('<div class="bg-effects" data-v-907e1ecd><div class="stars" data-v-907e1ecd></div><div class="stars stars2" data-v-907e1ecd></div><div class="stars stars3" data-v-907e1ecd></div><div class="gradient-orb orb-1" data-v-907e1ecd></div><div class="gradient-orb orb-2" data-v-907e1ecd></div><div class="gradient-orb orb-3" data-v-907e1ecd></div><div class="gradient-orb orb-4" data-v-907e1ecd></div></div>',1))])}const Bc=Ne(mc,[["render",Pc],["__scopeId","data-v-907e1ecd"]]);mo(Bc).mount("#app");
