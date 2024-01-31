"use client"
"use client";var wt=Object.create;var ge=Object.defineProperty;var ht=Object.getOwnPropertyDescriptor;var Et=Object.getOwnPropertyNames;var Tt=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty;var Dt=(e,n)=>{for(var t in n)ge(e,t,{get:n[t],enumerable:!0})},je=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of Et(n))!yt.call(e,i)&&i!==t&&ge(e,i,{get:()=>n[i],enumerable:!(r=ht(n,i))||r.enumerable});return e};var z=(e,n,t)=>(t=e!=null?wt(Tt(e)):{},je(n||!e||!e.__esModule?ge(t,"default",{value:e,enumerable:!0}):t,e)),St=e=>je(ge({},"__esModule",{value:!0}),e);var Ft={};Dt(Ft,{Drawer:()=>Wt});module.exports=St(Ft);var L=z(require("@radix-ui/react-dialog")),f=z(require("react"));var De=z(require("react")),Se=De.default.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),be=()=>De.default.useContext(Se);function Re(e,{insertAt:n}={}){if(!e||typeof document=="undefined")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Re(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var ve=require("react"),Rt=typeof window!="undefined"?ve.useLayoutEffect:ve.useEffect;function Me(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function xt(){return Le(/^Mac/)}function Ht(){return Le(/^iPhone/)}function Mt(){return Le(/^iPad/)||xt()&&navigator.maxTouchPoints>1}function $e(){return Ht()||Mt()}function Le(e){return typeof window!="undefined"&&window.navigator!=null?e.test(window.navigator.platform):void 0}var xe=typeof document!="undefined"&&window.visualViewport;function ke(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function ze(e){for(ke(e)&&(e=e.parentElement);e&&!ke(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var $t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),pe=0,He;function Ye(e={}){let{isDisabled:n}=e;Rt(()=>{if(!n)return pe++,pe===1&&($e()?He=Ct():He=Lt()),()=>{pe--,pe===0&&He()}},[n])}function Lt(){return Me(_e(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))}function Ct(){let e,n=0,t=w=>{e=ze(w.target),!(e===document.documentElement&&e===document.body)&&(n=w.changedTouches[0].pageY)},r=w=>{if(!e||e===document.documentElement||e===document.body){w.preventDefault();return}let d=w.changedTouches[0].pageY,u=e.scrollTop,$=e.scrollHeight-e.clientHeight;$!==0&&((u<=0&&d>n||u>=$&&d<n)&&w.preventDefault(),n=d)},i=w=>{let d=w.target;ae(d)&&d!==document.activeElement&&(w.preventDefault(),d.style.transform="translateY(-2000px)",d.focus(),requestAnimationFrame(()=>{d.style.transform=""}))},o=w=>{let d=w.target;ae(d)&&(d.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{d.style.transform="",xe&&(xe.height<window.innerHeight?requestAnimationFrame(()=>{Be(d)}):xe.addEventListener("resize",()=>Be(d),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},b=window.pageXOffset,H=window.pageYOffset,x=Me(_e(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let S=Me(ie(document,"touchstart",t,{passive:!1,capture:!0}),ie(document,"touchmove",r,{passive:!1,capture:!0}),ie(document,"touchend",i,{passive:!1,capture:!0}),ie(document,"focus",o,!0),ie(window,"scroll",s));return()=>{x(),S(),window.scrollTo(b,H)}}function _e(e,n,t){let r=e.style[n];return e.style[n]=t,()=>{e.style[n]=r}}function ie(e,n,t,r){return e.addEventListener(n,t,r),()=>{e.removeEventListener(n,t,r)}}function Be(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=ze(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let r=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom,s=t.getBoundingClientRect().bottom;o>s&&(t.scrollTop+=i-r)}e=t.parentElement}}function ae(e){return e instanceof HTMLInputElement&&!$t.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var qe=z(require("react"));function At(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Ot(...e){return n=>e.forEach(t=>At(t,n))}function Ce(...e){return qe.useCallback(Ot(...e),e)}var Y=z(require("react")),F=null;function Xe({isOpen:e,modal:n,nested:t,hasBeenOpened:r,preventScrollRestoration:i}){let[o,s]=Y.default.useState(typeof window!="undefined"?window.location.href:""),b=Y.default.useRef(0),H=Y.default.useCallback(()=>{if(F===null&&e){F={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:S,innerHeight:w}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-b.current}px`,document.body.style.left=`${-S}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let d=w-window.innerHeight;d&&b.current>=w&&(document.body.style.top=`${-(b.current+d)}px`)}),300)}},[e]),x=Y.default.useCallback(()=>{if(F!==null){let S=-parseInt(document.body.style.top,10),w=-parseInt(document.body.style.left,10);document.body.style.position=F.position,document.body.style.top=F.top,document.body.style.left=F.left,document.body.style.height=F.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(i&&o!==window.location.href){s(window.location.href);return}window.scrollTo(w,S)}),F=null}},[o]);return Y.default.useEffect(()=>{function S(){b.current=window.scrollY}return S(),window.addEventListener("scroll",S),()=>{window.removeEventListener("scroll",S)}},[]),Y.default.useEffect(()=>{t||!r||(e?(H(),n||setTimeout(()=>{x()},500)):x())},[e,r,o,n,t,H,x]),{restorePositionSetting:x}}var _=z(require("react"));var Ke=new WeakMap;function y(e,n,t=!1){if(!e||!(e instanceof HTMLElement)||!n)return;let r={};Object.entries(n).forEach(([i,o])=>{if(i.startsWith("--")){e.style.setProperty(i,o);return}r[i]=e.style[i],e.style[i]=o}),!t&&Ke.set(e,r)}function le(e,n){if(!e||!(e instanceof HTMLElement))return;let t=Ke.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([r,i])=>{e.style[r]=i}))}var R=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function se(e,n){let t=window.getComputedStyle(e),r=t.transform||t.webkitTransform||t.mozTransform,i=r.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[R(n)?13:12]):(i=r.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[R(n)?5:4]):null)}function Ge(e){return 8*(Math.log(e+1)-2)}var T={DURATION:.5,EASE:[.32,.72,0,1]},we=.4;var U=z(require("react"));function Je(e){let n=U.default.useRef(e);return U.default.useEffect(()=>{n.current=e}),U.default.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function It({defaultProp:e,onChange:n}){let t=U.default.useState(e),[r]=t,i=U.default.useRef(r),o=Je(n);return U.default.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),t}function Qe({prop:e,defaultProp:n,onChange:t=()=>{}}){let[r,i]=It({defaultProp:n,onChange:t}),o=e!==void 0,s=o?e:r,b=Je(t),H=U.default.useCallback(x=>{if(o){let w=typeof x=="function"?x(e):x;w!==e&&b(w)}else i(x)},[o,e,i,b]);return[s,H]}function Ze({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:r,overlayRef:i,fadeFromIndex:o,onSnapPointChange:s,direction:b="bottom"}){let[H,x]=Qe({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),S=_.default.useMemo(()=>H===(t==null?void 0:t[t.length-1])||null,[t,H]),w=t&&t.length>0&&(o||o===0)&&!Number.isNaN(o)&&t[o]===H||!t,d=_.default.useMemo(()=>(t==null?void 0:t.findIndex(g=>g===H))||null,[t,H]),u=_.default.useMemo(()=>{var g;return(g=t==null?void 0:t.map(p=>{let v=typeof window!="undefined",C=typeof p=="string",A=0;if(C&&(A=parseInt(p,10)),R(b)){let P=C?A:v?p*window.innerHeight:0;return v?b==="bottom"?window.innerHeight-P:-window.innerHeight+P:P}let N=C?A:v?p*window.innerWidth:0;return v?b==="right"?window.innerWidth-N:-window.innerWidth+N:N}))!=null?g:[]},[t]),$=_.default.useMemo(()=>d!==null?u==null?void 0:u[d]:null,[u,d]),I=_.default.useCallback(g=>{var v;let p=(v=u==null?void 0:u.findIndex(C=>C===g))!=null?v:null;s(p),y(r.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:R(b)?`translate3d(0, ${g}px, 0)`:`translate3d(${g}px, 0, 0)`}),u&&p!==u.length-1&&p!==o?y(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"0"}):y(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),x(p!==null?t==null?void 0:t[p]:null)},[r.current,t,u,o,i,x]);_.default.useEffect(()=>{var g;if(e){let p=(g=t==null?void 0:t.findIndex(v=>v===e))!=null?g:-1;u&&p!==-1&&typeof u[p]=="number"&&I(u[p])}},[e,t,u,I]);function j({draggedDistance:g,closeDrawer:p,velocity:v,dismissible:C}){if(o===void 0)return;let A=b==="bottom"||b==="right"?($!=null?$:0)-g:($!=null?$:0)+g,N=d===o-1,P=d===0,Z=g>0;if(N&&y(i.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),v>2&&!Z){C?p():I(u[0]);return}if(v>2&&Z&&u&&t){I(u[t.length-1]);return}let ee=u==null?void 0:u.reduce((V,X)=>typeof V!="number"||typeof X!="number"?V:Math.abs(X-A)<Math.abs(V-A)?X:V),ue=R(b)?window.innerHeight:window.innerWidth;if(v>we&&Math.abs(g)<ue*.4){let V=Z?1:-1;if(V>0&&S){I(u[t.length-1]);return}if(P&&V<0&&C&&p(),d===null)return;I(u[d+V]);return}I(ee)}function m({draggedDistance:g}){if($===null)return;let p=b==="bottom"||b==="right"?$-g:$+g;(b==="bottom"||b==="right")&&p<u[u.length-1]||(b==="top"||b==="left")&&p>u[u.length-1]||y(r.current,{transform:R(b)?`translate3d(0, ${p}px, 0)`:`translate3d(${p}px, 0, 0)`})}function Q(g,p){if(!t||typeof d!="number"||!u||o===void 0)return null;let v=d===o-1;if(d>=o&&p)return 0;if(v&&!p)return 1;if(!w&&!v)return null;let A=v?d+1:d-1,N=v?u[A]-u[A-1]:u[A+1]-u[A],P=g/Math.abs(N);return v?1-P:P}return{isLastSnapPoint:S,activeSnapPoint:H,shouldFade:w,getPercentageDragged:Q,setActiveSnapPoint:x,activeSnapPointIndex:d,onRelease:j,onDrag:m,snapPointsOffset:u}}var Nt=.25,Pt=100,et=8,q=16,tt=26,nt="vaul-dragging";function rt({open:e,onOpenChange:n,children:t,shouldScaleBackground:r,onDrag:i,onRelease:o,snapPoints:s,nested:b=!1,closeThreshold:H=Nt,scrollLockTimeout:x=Pt,dismissible:S=!0,fadeFromIndex:w=s&&s.length-1,activeSnapPoint:d,setActiveSnapPoint:u,fixed:$,modal:I=!0,onClose:j,direction:m="bottom",preventScrollRestoration:Q=!0}){var Fe;let[g=!1,p]=f.default.useState(!1),[v,C]=f.default.useState(!1),[A,N]=f.default.useState(!1),[P,Z]=f.default.useState(!1),[ee,ue]=f.default.useState(!1),[V,X]=f.default.useState(!1),k=f.default.useRef(null),ce=f.default.useRef(null),he=f.default.useRef(null),Ae=f.default.useRef(null),te=f.default.useRef(null),de=f.default.useRef(!1),Ee=f.default.useRef(null),Te=f.default.useRef(0),K=f.default.useRef(!1),Oe=f.default.useRef(0),l=f.default.useRef(null),Ie=f.default.useRef(((Fe=l.current)==null?void 0:Fe.getBoundingClientRect().height)||0),ye=f.default.useRef(0),at=f.default.useCallback(a=>{s&&a===re.length-1&&(ce.current=new Date)},[]),{activeSnapPoint:lt,activeSnapPointIndex:ne,setActiveSnapPoint:Ne,onRelease:st,snapPointsOffset:re,onDrag:ut,shouldFade:Pe,getPercentageDragged:ct}=Ze({snapPoints:s,activeSnapPointProp:d,setActiveSnapPointProp:u,drawerRef:l,fadeFromIndex:w,overlayRef:k,onSnapPointChange:at,direction:m});Ye({isDisabled:!g||ee||!I||V||!v});let{restorePositionSetting:dt}=Xe({isOpen:g,modal:I,nested:b,hasBeenOpened:v,preventScrollRestoration:Q});function G(){return(window.innerWidth-tt)/window.innerWidth}function ft(a){var c;!S&&!s||l.current&&!l.current.contains(a.target)||(Ie.current=((c=l.current)==null?void 0:c.getBoundingClientRect().height)||0,ue(!0),he.current=new Date,$e()&&window.addEventListener("touchend",()=>de.current=!1,{once:!0}),a.target.setPointerCapture(a.pointerId),Te.current=R(m)?a.screenY:a.screenX)}function Ve(a,c){var O;let h=a,E=(O=window.getSelection())==null?void 0:O.toString(),D=l.current?se(l.current,m):null,M=new Date;if(ce.current&&M.getTime()-ce.current.getTime()<500)return!1;if(D!==null&&(m==="bottom"||m==="right"?D>0:D<0))return!0;if(E&&E.length>0)return!1;if(te.current&&M.getTime()-te.current.getTime()<x&&D===0||c)return te.current=M,!1;for(;h;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop!==0)return te.current=new Date,!1;if(h.getAttribute("role")==="dialog")return!0}h=h.parentNode}return!0}function mt(a){if(!ae(a.target)&&l.current&&ee){let c=m==="bottom"||m==="right"?1:-1,h=(Te.current-(R(m)?a.screenY:a.screenX))*c,E=h>0;if(s&&ne===0&&!S||!de.current&&!Ve(a.target,E))return;if(l.current.classList.add(nt),de.current=!0,y(l.current,{transition:"none"}),y(k.current,{transition:"none"}),s&&ut({draggedDistance:h}),E&&!s){let W=Ge(h),me=Math.min(W*-1,0)*c;y(l.current,{transform:R(m)?`translate3d(0, ${me}px, 0)`:`translate3d(${me}px, 0, 0)`});return}let D=Math.abs(h),M=document.querySelector("[vaul-drawer-wrapper]"),O=D/Ie.current,oe=ct(D,E);oe!==null&&(O=oe);let B=1-O;if((Pe||w&&ne===w-1)&&(i==null||i(a,O),y(k.current,{opacity:`${B}`,transition:"none"},!0)),M&&k.current&&r){let W=Math.min(G()+O*(1-G()),1),me=8-O*8,Ue=Math.max(0,14-O*14);y(M,{borderRadius:`${me}px`,transform:R(m)?`scale(${W}) translate3d(0, ${Ue}px, 0)`:`scale(${W}) translate3d(${Ue}px, 0, 0)`,transition:"none"},!0)}if(!s){let W=D*c;y(l.current,{transform:R(m)?`translate3d(0, ${W}px, 0)`:`translate3d(${W}px, 0, 0)`})}}}f.default.useEffect(()=>()=>{fe(!1),dt()},[]),f.default.useEffect(()=>{var c;function a(){var E;if(!l.current)return;let h=document.activeElement;if(ae(h)||K.current){let D=((E=window.visualViewport)==null?void 0:E.height)||0,M=window.innerHeight-D,O=l.current.getBoundingClientRect().height||0;ye.current||(ye.current=O);let oe=l.current.getBoundingClientRect().top;if(Math.abs(Oe.current-M)>60&&(K.current=!K.current),s&&s.length>0&&re&&ne){let B=re[ne]||0;M+=B}if(Oe.current=M,O>D||K.current){let B=l.current.getBoundingClientRect().height,W=B;B>D&&(W=D-tt),$?l.current.style.height=`${B-Math.max(M,0)}px`:l.current.style.height=`${Math.max(W,D-oe)}px`}else l.current.style.height=`${ye.current}px`;s&&s.length>0&&!K.current?l.current.style.bottom="0px":l.current.style.bottom=`${Math.max(M,0)}px`}}return(c=window.visualViewport)==null||c.addEventListener("resize",a),()=>{var h;return(h=window.visualViewport)==null?void 0:h.removeEventListener("resize",a)}},[ne,s,re]);function J(){l.current&&(j==null||j(),y(l.current,{transform:R(m)?`translate3d(0, ${m==="bottom"?"100%":"-100%"}, 0)`:`translate3d(${m==="right"?"100%":"-100%"}, 0, 0)`,transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),y(k.current,{opacity:"0",transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),fe(!1),setTimeout(()=>{N(!1),p(!1)},300),setTimeout(()=>{s&&Ne(s[0])},T.DURATION*1e3))}f.default.useEffect(()=>{if(!g&&r){let a=setTimeout(()=>{le(document.body)},200);return()=>clearTimeout(a)}},[g,r]),f.default.useEffect(()=>{e?(p(!0),C(!0)):J()},[e]),f.default.useEffect(()=>{P&&(n==null||n(g))},[g]),f.default.useEffect(()=>{Z(!0)},[]);function We(){if(!l.current)return;let a=document.querySelector("[vaul-drawer-wrapper]"),c=se(l.current,m);y(l.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),y(k.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),r&&c&&c>0&&g&&y(a,{borderRadius:`${et}px`,overflow:"hidden",...R(m)?{transform:`scale(${G()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${G()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`},!0)}function gt(a){var O;if(!ee||!l.current)return;l.current.classList.remove(nt),de.current=!1,ue(!1),Ae.current=new Date;let c=se(l.current,m);if(!Ve(a.target,!1)||!c||Number.isNaN(c)||he.current===null)return;let h=Ae.current.getTime()-he.current.getTime(),E=Te.current-(R(m)?a.screenY:a.screenX),D=Math.abs(E)/h;if(D>.05&&(X(!0),setTimeout(()=>{X(!1)},200)),s){st({draggedDistance:E*(m==="bottom"||m==="right"?1:-1),closeDrawer:J,velocity:D,dismissible:S}),o==null||o(a,!0);return}if(m==="bottom"||m==="right"?E>0:E<0){We(),o==null||o(a,!0);return}if(D>we){J(),o==null||o(a,!1);return}let M=Math.min((O=l.current.getBoundingClientRect().height)!=null?O:0,window.innerHeight);if(c>=M*H){J(),o==null||o(a,!1);return}o==null||o(a,!0),We()}f.default.useEffect(()=>{g&&(y(document.documentElement,{scrollBehavior:"auto"}),ce.current=new Date,fe(!0))},[g]),f.default.useEffect(()=>{var a;if(l.current&&A){let c=(a=l==null?void 0:l.current)==null?void 0:a.querySelectorAll("*");c==null||c.forEach(h=>{let E=h;(E.scrollHeight>E.clientHeight||E.scrollWidth>E.clientWidth)&&E.classList.add("vaul-scrollable")})}},[A]);function fe(a){let c=document.querySelector("[vaul-drawer-wrapper]");!c||!r||(a?(y(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),y(document.body,{background:"black"},!0),y(c,{borderRadius:`${et}px`,overflow:"hidden",...R(m)?{transform:`scale(${G()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${G()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})):(le(c,"overflow"),le(c,"transform"),le(c,"borderRadius"),y(c,{transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})))}function bt(a){let c=a?(window.innerWidth-q)/window.innerWidth:1,h=a?-q:0;Ee.current&&window.clearTimeout(Ee.current),y(l.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:`scale(${c}) translate3d(0, ${h}px, 0)`}),!a&&l.current&&(Ee.current=setTimeout(()=>{let E=se(l.current,m);y(l.current,{transition:"none",transform:R(m)?`translate3d(0, ${E}px, 0)`:`translate3d(${E}px, 0, 0)`})},500))}function pt(a,c){if(c<0)return;let h=R(m)?window.innerHeight:window.innerWidth,E=(h-q)/h,D=E+c*(1-E),M=-q+c*q;y(l.current,{transform:R(m)?`scale(${D}) translate3d(0, ${M}px, 0)`:`scale(${D}) translate3d(${M}px, 0, 0)`,transition:"none"})}function vt(a,c){let h=R(m)?window.innerHeight:window.innerWidth,E=c?(h-q)/h:1,D=c?-q:0;c&&y(l.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:R(m)?`scale(${E}) translate3d(0, ${D}px, 0)`:`scale(${E}) translate3d(${D}px, 0, 0)`})}return f.default.createElement(L.Root,{modal:I,onOpenChange:a=>{if(e!==void 0){n==null||n(a);return}a?(C(!0),p(a)):J()},open:g},f.default.createElement(Se.Provider,{value:{visible:A,activeSnapPoint:lt,snapPoints:s,setActiveSnapPoint:Ne,drawerRef:l,overlayRef:k,scaleBackground:fe,onOpenChange:n,onPress:ft,setVisible:N,onRelease:gt,onDrag:mt,dismissible:S,isOpen:g,shouldFade:Pe,closeDrawer:J,onNestedDrag:pt,onNestedOpenChange:bt,onNestedRelease:vt,keyboardIsOpen:K,openProp:e,modal:I,snapPointsOffset:re,direction:m}},t))}var ot=f.default.forwardRef(function({children:e,...n},t){let{overlayRef:r,snapPoints:i,onRelease:o,shouldFade:s,isOpen:b,visible:H}=be(),x=Ce(t,r),S=i&&i.length>0;return f.default.createElement(L.Overlay,{onMouseUp:o,ref:x,"vaul-drawer-visible":H?"true":"false","vaul-overlay":"","vaul-snap-points":b&&S?"true":"false","vaul-snap-points-overlay":b&&s?"true":"false",...n})});ot.displayName="Drawer.Overlay";var it=f.default.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:r,...i},o){let{drawerRef:s,onPress:b,onRelease:H,onDrag:x,dismissible:S,keyboardIsOpen:w,snapPointsOffset:d,visible:u,closeDrawer:$,modal:I,openProp:j,onOpenChange:m,setVisible:Q,direction:g}=be(),p=Ce(o,s);return f.default.useEffect(()=>{Q(!0)},[]),f.default.createElement(L.Content,{onOpenAutoFocus:v=>{var C;e?e(v):(v.preventDefault(),(C=s.current)==null||C.focus())},onPointerDown:b,onPointerDownOutside:v=>{if(n==null||n(v),!I||v.defaultPrevented){v.preventDefault();return}w.current&&(w.current=!1),v.preventDefault(),m==null||m(!1),!(!S||j!==void 0)&&$()},onPointerMove:x,onPointerUp:H,ref:p,style:d&&d.length>0?{"--snap-point-height":`${d[0]}px`,...r}:r,...i,"vaul-drawer":"","vaul-drawer-direction":g,"vaul-drawer-visible":u?"true":"false"})});it.displayName="Drawer.Content";function Vt({onDrag:e,onOpenChange:n,...t}){let{onNestedDrag:r,onNestedOpenChange:i,onNestedRelease:o}=be();if(!r)throw new Error("Drawer.NestedRoot must be placed in another drawer");return f.default.createElement(rt,{nested:!0,onClose:()=>{i(!1)},onDrag:(s,b)=>{r(s,b),e==null||e(s,b)},onOpenChange:s=>{s&&i(s),n==null||n(s)},onRelease:o,...t})}var Wt={Root:rt,NestedRoot:Vt,Content:it,Overlay:ot,Trigger:L.Trigger,Portal:L.Portal,Close:L.Close,Title:L.Title,Description:L.Description};0&&(module.exports={Drawer});
//# sourceMappingURL=index.js.map