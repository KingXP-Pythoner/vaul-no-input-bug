"use client"
"use client";import*as L from"@radix-ui/react-dialog";import m from"react";import Ve from"react";var Ee=Ve.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{},direction:"bottom"}),me=()=>Ve.useContext(Ee);function Te(e,{insertAt:n}={}){if(!e||typeof document=="undefined")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Te(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);import{useEffect as gt,useLayoutEffect as bt}from"react";var pt=typeof window!="undefined"?bt:gt;function Se(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}function vt(){return xe(/^Mac/)}function wt(){return xe(/^iPhone/)}function ht(){return xe(/^iPad/)||vt()&&navigator.maxTouchPoints>1}function Re(){return wt()||ht()}function xe(e){return typeof window!="undefined"&&window.navigator!=null?e.test(window.navigator.platform):void 0}var ye=typeof document!="undefined"&&window.visualViewport;function We(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function Ue(e){for(We(e)&&(e=e.parentElement);e&&!We(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var Et=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),ge=0,De;function je(e={}){let{isDisabled:n}=e;pt(()=>{if(!n)return ge++,ge===1&&(Re()?De=yt():De=Tt()),()=>{ge--,ge===0&&De()}},[n])}function Tt(){return Se(ke(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`))}function yt(){let e,n=0,t=w=>{e=Ue(w.target),!(e===document.documentElement&&e===document.body)&&(n=w.changedTouches[0].pageY)},r=w=>{if(!e||e===document.documentElement||e===document.body){w.preventDefault();return}let d=w.changedTouches[0].pageY,u=e.scrollTop,$=e.scrollHeight-e.clientHeight;$!==0&&((u<=0&&d>n||u>=$&&d<n)&&w.preventDefault(),n=d)},a=w=>{let d=w.target;ie(d)&&d!==document.activeElement&&(w.preventDefault(),d.style.transform="translateY(-2000px)",d.focus(),requestAnimationFrame(()=>{d.style.transform=""}))},o=w=>{let d=w.target;ie(d)&&(d.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{d.style.transform="",ye&&(ye.height<window.innerHeight?requestAnimationFrame(()=>{Fe(d)}):ye.addEventListener("resize",()=>Fe(d),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},b=window.pageXOffset,H=window.pageYOffset,x=Se(ke(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let S=Se(oe(document,"touchstart",t,{passive:!1,capture:!0}),oe(document,"touchmove",r,{passive:!1,capture:!0}),oe(document,"touchend",a,{passive:!1,capture:!0}),oe(document,"focus",o,!0),oe(window,"scroll",s));return()=>{x(),S(),window.scrollTo(b,H)}}function ke(e,n,t){let r=e.style[n];return e.style[n]=t,()=>{e.style[n]=r}}function oe(e,n,t,r){return e.addEventListener(n,t,r),()=>{e.removeEventListener(n,t,r)}}function Fe(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=Ue(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let r=t.getBoundingClientRect().top,a=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom,s=t.getBoundingClientRect().bottom;o>s&&(t.scrollTop+=a-r)}e=t.parentElement}}function ie(e){return e instanceof HTMLInputElement&&!Et.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}import*as Be from"react";function Dt(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function St(...e){return n=>e.forEach(t=>Dt(t,n))}function He(...e){return Be.useCallback(St(...e),e)}import K from"react";var F=null;function ze({isOpen:e,modal:n,nested:t,hasBeenOpened:r,preventScrollRestoration:a}){let[o,s]=K.useState(typeof window!="undefined"?window.location.href:""),b=K.useRef(0),H=K.useCallback(()=>{if(F===null&&e){F={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:S,innerHeight:w}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-b.current}px`,document.body.style.left=`${-S}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let d=w-window.innerHeight;d&&b.current>=w&&(document.body.style.top=`${-(b.current+d)}px`)}),300)}},[e]),x=K.useCallback(()=>{if(F!==null){let S=-parseInt(document.body.style.top,10),w=-parseInt(document.body.style.left,10);document.body.style.position=F.position,document.body.style.top=F.top,document.body.style.left=F.left,document.body.style.height=F.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(a&&o!==window.location.href){s(window.location.href);return}window.scrollTo(w,S)}),F=null}},[o]);return K.useEffect(()=>{function S(){b.current=window.scrollY}return S(),window.addEventListener("scroll",S),()=>{window.removeEventListener("scroll",S)}},[]),K.useEffect(()=>{t||!r||(e?(H(),n||setTimeout(()=>{x()},500)):x())},[e,r,o,n,t,H,x]),{restorePositionSetting:x}}import G from"react";var Ye=new WeakMap;function y(e,n,t=!1){if(!e||!(e instanceof HTMLElement)||!n)return;let r={};Object.entries(n).forEach(([a,o])=>{if(a.startsWith("--")){e.style.setProperty(a,o);return}r[a]=e.style[a],e.style[a]=o}),!t&&Ye.set(e,r)}function ae(e,n){if(!e||!(e instanceof HTMLElement))return;let t=Ye.get(e);t&&(n?e.style[n]=t[n]:Object.entries(t).forEach(([r,a])=>{e.style[r]=a}))}var R=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function le(e,n){let t=window.getComputedStyle(e),r=t.transform||t.webkitTransform||t.mozTransform,a=r.match(/^matrix3d\((.+)\)$/);return a?parseFloat(a[1].split(", ")[R(n)?13:12]):(a=r.match(/^matrix\((.+)\)$/),a?parseFloat(a[1].split(", ")[R(n)?5:4]):null)}function _e(e){return 8*(Math.log(e+1)-2)}var T={DURATION:.5,EASE:[.32,.72,0,1]},be=.4;import B from"react";function qe(e){let n=B.useRef(e);return B.useEffect(()=>{n.current=e}),B.useMemo(()=>(...t)=>{var r;return(r=n.current)==null?void 0:r.call(n,...t)},[])}function Rt({defaultProp:e,onChange:n}){let t=B.useState(e),[r]=t,a=B.useRef(r),o=qe(n);return B.useEffect(()=>{a.current!==r&&(o(r),a.current=r)},[r,a,o]),t}function Xe({prop:e,defaultProp:n,onChange:t=()=>{}}){let[r,a]=Rt({defaultProp:n,onChange:t}),o=e!==void 0,s=o?e:r,b=qe(t),H=B.useCallback(x=>{if(o){let w=typeof x=="function"?x(e):x;w!==e&&b(w)}else a(x)},[o,e,a,b]);return[s,H]}function Ke({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:r,overlayRef:a,fadeFromIndex:o,onSnapPointChange:s,direction:b="bottom"}){let[H,x]=Xe({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),S=G.useMemo(()=>H===(t==null?void 0:t[t.length-1])||null,[t,H]),w=t&&t.length>0&&(o||o===0)&&!Number.isNaN(o)&&t[o]===H||!t,d=G.useMemo(()=>(t==null?void 0:t.findIndex(g=>g===H))||null,[t,H]),u=G.useMemo(()=>{var g;return(g=t==null?void 0:t.map(p=>{let v=typeof window!="undefined",C=typeof p=="string",A=0;if(C&&(A=parseInt(p,10)),R(b)){let P=C?A:v?p*window.innerHeight:0;return v?b==="bottom"?window.innerHeight-P:-window.innerHeight+P:P}let N=C?A:v?p*window.innerWidth:0;return v?b==="right"?window.innerWidth-N:-window.innerWidth+N:N}))!=null?g:[]},[t]),$=G.useMemo(()=>d!==null?u==null?void 0:u[d]:null,[u,d]),I=G.useCallback(g=>{var v;let p=(v=u==null?void 0:u.findIndex(C=>C===g))!=null?v:null;s(p),y(r.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:R(b)?`translate3d(0, ${g}px, 0)`:`translate3d(${g}px, 0, 0)`}),u&&p!==u.length-1&&p!==o?y(a.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"0"}):y(a.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),x(p!==null?t==null?void 0:t[p]:null)},[r.current,t,u,o,a,x]);G.useEffect(()=>{var g;if(e){let p=(g=t==null?void 0:t.findIndex(v=>v===e))!=null?g:-1;u&&p!==-1&&typeof u[p]=="number"&&I(u[p])}},[e,t,u,I]);function U({draggedDistance:g,closeDrawer:p,velocity:v,dismissible:C}){if(o===void 0)return;let A=b==="bottom"||b==="right"?($!=null?$:0)-g:($!=null?$:0)+g,N=d===o-1,P=d===0,Q=g>0;if(N&&y(a.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),v>2&&!Q){C?p():I(u[0]);return}if(v>2&&Q&&u&&t){I(u[t.length-1]);return}let Z=u==null?void 0:u.reduce((V,Y)=>typeof V!="number"||typeof Y!="number"?V:Math.abs(Y-A)<Math.abs(V-A)?Y:V),se=R(b)?window.innerHeight:window.innerWidth;if(v>be&&Math.abs(g)<se*.4){let V=Q?1:-1;if(V>0&&S){I(u[t.length-1]);return}if(P&&V<0&&C&&p(),d===null)return;I(u[d+V]);return}I(Z)}function f({draggedDistance:g}){if($===null)return;let p=b==="bottom"||b==="right"?$-g:$+g;(b==="bottom"||b==="right")&&p<u[u.length-1]||(b==="top"||b==="left")&&p>u[u.length-1]||y(r.current,{transform:R(b)?`translate3d(0, ${p}px, 0)`:`translate3d(${p}px, 0, 0)`})}function J(g,p){if(!t||typeof d!="number"||!u||o===void 0)return null;let v=d===o-1;if(d>=o&&p)return 0;if(v&&!p)return 1;if(!w&&!v)return null;let A=v?d+1:d-1,N=v?u[A]-u[A-1]:u[A+1]-u[A],P=g/Math.abs(N);return v?1-P:P}return{isLastSnapPoint:S,activeSnapPoint:H,shouldFade:w,getPercentageDragged:J,setActiveSnapPoint:x,activeSnapPointIndex:d,onRelease:U,onDrag:f,snapPointsOffset:u}}var xt=.25,Ht=100,Ge=8,z=16,Je=26,Qe="vaul-dragging";function Ze({open:e,onOpenChange:n,children:t,shouldScaleBackground:r,onDrag:a,onRelease:o,snapPoints:s,nested:b=!1,closeThreshold:H=xt,scrollLockTimeout:x=Ht,dismissible:S=!0,fadeFromIndex:w=s&&s.length-1,activeSnapPoint:d,setActiveSnapPoint:u,fixed:$,modal:I=!0,onClose:U,direction:f="bottom",preventScrollRestoration:J=!0}){var Ne;let[g=!1,p]=m.useState(!1),[v,C]=m.useState(!1),[A,N]=m.useState(!1),[P,Q]=m.useState(!1),[Z,se]=m.useState(!1),[V,Y]=m.useState(!1),j=m.useRef(null),ue=m.useRef(null),pe=m.useRef(null),Me=m.useRef(null),ee=m.useRef(null),ce=m.useRef(!1),ve=m.useRef(null),we=m.useRef(0),_=m.useRef(!1),$e=m.useRef(0),l=m.useRef(null),Le=m.useRef(((Ne=l.current)==null?void 0:Ne.getBoundingClientRect().height)||0),he=m.useRef(0),nt=m.useCallback(i=>{s&&i===ne.length-1&&(ue.current=new Date)},[]),{activeSnapPoint:rt,activeSnapPointIndex:te,setActiveSnapPoint:Ce,onRelease:ot,snapPointsOffset:ne,onDrag:it,shouldFade:Ae,getPercentageDragged:at}=Ke({snapPoints:s,activeSnapPointProp:d,setActiveSnapPointProp:u,drawerRef:l,fadeFromIndex:w,overlayRef:j,onSnapPointChange:nt,direction:f});je({isDisabled:!g||Z||!I||V||!v});let{restorePositionSetting:lt}=ze({isOpen:g,modal:I,nested:b,hasBeenOpened:v,preventScrollRestoration:J});function q(){return(window.innerWidth-Je)/window.innerWidth}function st(i){var c;!S&&!s||l.current&&!l.current.contains(i.target)||(Le.current=((c=l.current)==null?void 0:c.getBoundingClientRect().height)||0,se(!0),pe.current=new Date,Re()&&window.addEventListener("touchend",()=>ce.current=!1,{once:!0}),i.target.setPointerCapture(i.pointerId),we.current=R(f)?i.screenY:i.screenX)}function Oe(i,c){var O;let h=i,E=(O=window.getSelection())==null?void 0:O.toString(),D=l.current?le(l.current,f):null,M=new Date;if(ue.current&&M.getTime()-ue.current.getTime()<500)return!1;if(D!==null&&(f==="bottom"||f==="right"?D>0:D<0))return!0;if(E&&E.length>0)return!1;if(ee.current&&M.getTime()-ee.current.getTime()<x&&D===0||c)return ee.current=M,!1;for(;h;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop!==0)return ee.current=new Date,!1;if(h.getAttribute("role")==="dialog")return!0}h=h.parentNode}return!0}function ut(i){if(!ie(i.target)&&l.current&&Z){let c=f==="bottom"||f==="right"?1:-1,h=(we.current-(R(f)?i.screenY:i.screenX))*c,E=h>0;if(s&&te===0&&!S||!ce.current&&!Oe(i.target,E))return;if(l.current.classList.add(Qe),ce.current=!0,y(l.current,{transition:"none"}),y(j.current,{transition:"none"}),s&&it({draggedDistance:h}),E&&!s){let W=_e(h),fe=Math.min(W*-1,0)*c;y(l.current,{transform:R(f)?`translate3d(0, ${fe}px, 0)`:`translate3d(${fe}px, 0, 0)`});return}let D=Math.abs(h),M=document.querySelector("[vaul-drawer-wrapper]"),O=D/Le.current,re=at(D,E);re!==null&&(O=re);let k=1-O;if((Ae||w&&te===w-1)&&(a==null||a(i,O),y(j.current,{opacity:`${k}`,transition:"none"},!0)),M&&j.current&&r){let W=Math.min(q()+O*(1-q()),1),fe=8-O*8,Pe=Math.max(0,14-O*14);y(M,{borderRadius:`${fe}px`,transform:R(f)?`scale(${W}) translate3d(0, ${Pe}px, 0)`:`scale(${W}) translate3d(${Pe}px, 0, 0)`,transition:"none"},!0)}if(!s){let W=D*c;y(l.current,{transform:R(f)?`translate3d(0, ${W}px, 0)`:`translate3d(${W}px, 0, 0)`})}}}m.useEffect(()=>()=>{de(!1),lt()},[]),m.useEffect(()=>{var c;function i(){var E;if(!l.current)return;let h=document.activeElement;if(ie(h)||_.current){let D=((E=window.visualViewport)==null?void 0:E.height)||0,M=window.innerHeight-D,O=l.current.getBoundingClientRect().height||0;he.current||(he.current=O);let re=l.current.getBoundingClientRect().top;if(Math.abs($e.current-M)>60&&(_.current=!_.current),s&&s.length>0&&ne&&te){let k=ne[te]||0;M+=k}if($e.current=M,O>D||_.current){let k=l.current.getBoundingClientRect().height,W=k;k>D&&(W=D-Je),$?l.current.style.height=`${k-Math.max(M,0)}px`:l.current.style.height=`${Math.max(W,D-re)}px`}else l.current.style.height=`${he.current}px`;s&&s.length>0&&!_.current?l.current.style.bottom="0px":l.current.style.bottom=`${Math.max(M,0)}px`}}return(c=window.visualViewport)==null||c.addEventListener("resize",i),()=>{var h;return(h=window.visualViewport)==null?void 0:h.removeEventListener("resize",i)}},[te,s,ne]);function X(){l.current&&(U==null||U(),y(l.current,{transform:R(f)?`translate3d(0, ${f==="bottom"?"100%":"-100%"}, 0)`:`translate3d(${f==="right"?"100%":"-100%"}, 0, 0)`,transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),y(j.current,{opacity:"0",transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),de(!1),setTimeout(()=>{N(!1),p(!1)},300),setTimeout(()=>{s&&Ce(s[0])},T.DURATION*1e3))}m.useEffect(()=>{if(!g&&r){let i=setTimeout(()=>{ae(document.body)},200);return()=>clearTimeout(i)}},[g,r]),m.useEffect(()=>{e?(p(!0),C(!0)):X()},[e]),m.useEffect(()=>{P&&(n==null||n(g))},[g]),m.useEffect(()=>{Q(!0)},[]);function Ie(){if(!l.current)return;let i=document.querySelector("[vaul-drawer-wrapper]"),c=le(l.current,f);y(l.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`}),y(j.current,{transition:`opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,opacity:"1"}),r&&c&&c>0&&g&&y(i,{borderRadius:`${Ge}px`,overflow:"hidden",...R(f)?{transform:`scale(${q()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${q()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`},!0)}function ct(i){var O;if(!Z||!l.current)return;l.current.classList.remove(Qe),ce.current=!1,se(!1),Me.current=new Date;let c=le(l.current,f);if(!Oe(i.target,!1)||!c||Number.isNaN(c)||pe.current===null)return;let h=Me.current.getTime()-pe.current.getTime(),E=we.current-(R(f)?i.screenY:i.screenX),D=Math.abs(E)/h;if(D>.05&&(Y(!0),setTimeout(()=>{Y(!1)},200)),s){ot({draggedDistance:E*(f==="bottom"||f==="right"?1:-1),closeDrawer:X,velocity:D,dismissible:S}),o==null||o(i,!0);return}if(f==="bottom"||f==="right"?E>0:E<0){Ie(),o==null||o(i,!0);return}if(D>be){X(),o==null||o(i,!1);return}let M=Math.min((O=l.current.getBoundingClientRect().height)!=null?O:0,window.innerHeight);if(c>=M*H){X(),o==null||o(i,!1);return}o==null||o(i,!0),Ie()}m.useEffect(()=>{g&&(y(document.documentElement,{scrollBehavior:"auto"}),ue.current=new Date,de(!0))},[g]),m.useEffect(()=>{var i;if(l.current&&A){let c=(i=l==null?void 0:l.current)==null?void 0:i.querySelectorAll("*");c==null||c.forEach(h=>{let E=h;(E.scrollHeight>E.clientHeight||E.scrollWidth>E.clientWidth)&&E.classList.add("vaul-scrollable")})}},[A]);function de(i){let c=document.querySelector("[vaul-drawer-wrapper]");!c||!r||(i?(y(document.body,{background:document.body.style.backgroundColor||document.body.style.background}),y(document.body,{background:"black"},!0),y(c,{borderRadius:`${Ge}px`,overflow:"hidden",...R(f)?{transform:`scale(${q()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${q()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})):(ae(c,"overflow"),ae(c,"transform"),ae(c,"borderRadius"),y(c,{transitionProperty:"transform, border-radius",transitionDuration:`${T.DURATION}s`,transitionTimingFunction:`cubic-bezier(${T.EASE.join(",")})`})))}function dt(i){let c=i?(window.innerWidth-z)/window.innerWidth:1,h=i?-z:0;ve.current&&window.clearTimeout(ve.current),y(l.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:`scale(${c}) translate3d(0, ${h}px, 0)`}),!i&&l.current&&(ve.current=setTimeout(()=>{let E=le(l.current,f);y(l.current,{transition:"none",transform:R(f)?`translate3d(0, ${E}px, 0)`:`translate3d(${E}px, 0, 0)`})},500))}function ft(i,c){if(c<0)return;let h=R(f)?window.innerHeight:window.innerWidth,E=(h-z)/h,D=E+c*(1-E),M=-z+c*z;y(l.current,{transform:R(f)?`scale(${D}) translate3d(0, ${M}px, 0)`:`scale(${D}) translate3d(${M}px, 0, 0)`,transition:"none"})}function mt(i,c){let h=R(f)?window.innerHeight:window.innerWidth,E=c?(h-z)/h:1,D=c?-z:0;c&&y(l.current,{transition:`transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`,transform:R(f)?`scale(${E}) translate3d(0, ${D}px, 0)`:`scale(${E}) translate3d(${D}px, 0, 0)`})}return m.createElement(L.Root,{modal:I,onOpenChange:i=>{if(e!==void 0){n==null||n(i);return}i?(C(!0),p(i)):X()},open:g},m.createElement(Ee.Provider,{value:{visible:A,activeSnapPoint:rt,snapPoints:s,setActiveSnapPoint:Ce,drawerRef:l,overlayRef:j,scaleBackground:de,onOpenChange:n,onPress:st,setVisible:N,onRelease:ct,onDrag:ut,dismissible:S,isOpen:g,shouldFade:Ae,closeDrawer:X,onNestedDrag:ft,onNestedOpenChange:dt,onNestedRelease:mt,keyboardIsOpen:_,openProp:e,modal:I,snapPointsOffset:ne,direction:f}},t))}var et=m.forwardRef(function({children:e,...n},t){let{overlayRef:r,snapPoints:a,onRelease:o,shouldFade:s,isOpen:b,visible:H}=me(),x=He(t,r),S=a&&a.length>0;return m.createElement(L.Overlay,{onMouseUp:o,ref:x,"vaul-drawer-visible":H?"true":"false","vaul-overlay":"","vaul-snap-points":b&&S?"true":"false","vaul-snap-points-overlay":b&&s?"true":"false",...n})});et.displayName="Drawer.Overlay";var tt=m.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:n,onAnimationEnd:t,style:r,...a},o){let{drawerRef:s,onPress:b,onRelease:H,onDrag:x,dismissible:S,keyboardIsOpen:w,snapPointsOffset:d,visible:u,closeDrawer:$,modal:I,openProp:U,onOpenChange:f,setVisible:J,direction:g}=me(),p=He(o,s);return m.useEffect(()=>{J(!0)},[]),m.createElement(L.Content,{onOpenAutoFocus:v=>{var C;e?e(v):(v.preventDefault(),(C=s.current)==null||C.focus())},onPointerDown:b,onPointerDownOutside:v=>{if(n==null||n(v),!I||v.defaultPrevented){v.preventDefault();return}w.current&&(w.current=!1),v.preventDefault(),f==null||f(!1),!(!S||U!==void 0)&&$()},onPointerMove:x,onPointerUp:H,ref:p,style:d&&d.length>0?{"--snap-point-height":`${d[0]}px`,...r}:r,...a,"vaul-drawer":"","vaul-drawer-direction":g,"vaul-drawer-visible":u?"true":"false"})});tt.displayName="Drawer.Content";function Mt({onDrag:e,onOpenChange:n,...t}){let{onNestedDrag:r,onNestedOpenChange:a,onNestedRelease:o}=me();if(!r)throw new Error("Drawer.NestedRoot must be placed in another drawer");return m.createElement(Ze,{nested:!0,onClose:()=>{a(!1)},onDrag:(s,b)=>{r(s,b),e==null||e(s,b)},onOpenChange:s=>{s&&a(s),n==null||n(s)},onRelease:o,...t})}var nn={Root:Ze,NestedRoot:Mt,Content:tt,Overlay:et,Trigger:L.Trigger,Portal:L.Portal,Close:L.Close,Title:L.Title,Description:L.Description};export{nn as Drawer};
//# sourceMappingURL=index.mjs.map