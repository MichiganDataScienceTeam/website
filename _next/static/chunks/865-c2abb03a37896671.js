(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(4788),o=r(8754),l=r(1757),i=r(224),a=l._(r(7294)),u=o._(r(2636)),c=r(7757),s=r(3735),f=r(3341);r(4210);let d=o._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/website/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;o.current(n._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}function y(e){let[t,r]=a.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:l,qualityInt:u,className:c,imgStyle:s,blurStyle:f,isLazy:d,fetchPriority:p,fill:g,placeholder:h,loading:v,srcString:b,config:w,unoptimized:_,loader:C,onLoadRef:E,onLoadingCompleteRef:j,setBlurComplete:O,setShowAltText:P,onLoad:S,onError:x}=e,M=i._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=d?"lazy":v,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",n._({},M,y(p),{loading:v,width:l,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n._({},s,f)},r,{ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,b,h,E,j,O,_))},[b,h,E,j,O,x,_,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,h,E,j,O,_)},onError:e=>{P(!0),"blur"===h&&O(!0),x&&x(e)}})))}),b=(0,a.forwardRef)((e,t)=>{let r,o;var l,{src:m,sizes:b,unoptimized:w=!1,priority:_=!1,loading:C,className:E,quality:j,width:O,height:P,fill:S,style:x,onLoad:M,onLoadingComplete:k,placeholder:z="empty",blurDataURL:R,fetchPriority:I,layout:L,objectFit:N,objectPosition:A,lazyBoundary:T,lazyRoot:D}=e,B=i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=(0,a.useContext)(f.ImageConfigContext),F=(0,a.useMemo)(()=>{let e=p||U||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n._({},e,{allSizes:t,deviceSizes:r})},[U]),W=B,q=W.loader||d.default;delete W.loader;let G="__next_img_default"in q;if(G){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:r}=t,n=i._(t,["config"]);return e(n)}}if(L){"fill"===L&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(x=n._({},x,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!b&&(b=t)}let H="",K=h(O),V=h(P);if("object"==typeof(l=m)&&(g(l)||void 0!==l.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,H=e.src,!S){if(K||V){if(K&&!V){let t=K/e.width;V=Math.round(e.height*t)}else if(!K&&V){let t=V/e.height;K=Math.round(e.width*t)}}else K=e.width,V=e.height}}let J=!_&&("lazy"===C||void 0===C);(!(m="string"==typeof m?m:H)||m.startsWith("data:")||m.startsWith("blob:"))&&(w=!0,J=!1),F.unoptimized&&(w=!0),G&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0),_&&(I="high");let[Y,$]=(0,a.useState)(!1),[Q,X]=(0,a.useState)(!1),Z=h(j),ee=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},Q?{}:{color:"transparent"},x),et="blur"===z&&R&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:K,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:i,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i),s=u.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:u.map((e,n)=>"".concat(a({config:t,src:r,quality:l,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:r,quality:l,width:u[s]})}}({config:F,src:m,unoptimized:w,width:K,quality:Z,sizes:b,loader:q}),en=m,eo=(0,a.useRef)(M);(0,a.useEffect)(()=>{eo.current=M},[M]);let el=(0,a.useRef)(k);(0,a.useEffect)(()=>{el.current=k},[k]);let ei=n._({isLazy:J,imgAttributes:er,heightInt:V,widthInt:K,qualityInt:Z,className:E,imgStyle:ee,blurStyle:et,loading:C,config:F,fetchPriority:I,fill:S,unoptimized:w,placeholder:z,loader:q,srcString:en,onLoadRef:eo,onLoadingCompleteRef:el,setBlurComplete:$,setShowAltText:X},W);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,n._({},ei,{ref:t})),_?a.default.createElement(u.default,null,a.default.createElement("link",n._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},y(I)))):null)}),w=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(4788),o=r(8754),l=r(224),i=o._(r(7294)),a=r(4532),u=r(3353),c=r(1410),s=r(9064),f=r(370),d=r(9955),p=r(4224),g=r(508),h=r(1516),m=r(4266),y=new Set;function v(e,t,r,n,o){if(o||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=i.default.forwardRef(function(e,t){let r,o;let{href:c,as:y,children:w,prefetch:_,passHref:C,replace:E,shallow:j,scroll:O,locale:P,onClick:S,onMouseEnter:x,onTouchStart:M,legacyBehavior:k=!1}=e,z=l._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=w,k&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let R=!1!==_,I=i.default.useContext(d.RouterContext),L=i.default.useContext(p.AppRouterContext),N=null!=I?I:L,A=!I,{href:T,as:D}=i.default.useMemo(()=>{if(!I){let e=b(c);return{href:e,as:y?b(y):e}}let[e,t]=(0,a.resolveHref)(I,c,!0);return{href:e,as:y?(0,a.resolveHref)(I,y):t||e}},[I,c,y]),B=i.default.useRef(T),U=i.default.useRef(D);k&&(o=i.default.Children.only(r));let F=k?o&&"object"==typeof o&&o.ref:t,[W,q,G]=(0,g.useIntersection)({rootMargin:"200px"}),H=i.default.useCallback(e=>{(U.current!==D||B.current!==T)&&(G(),U.current=D,B.current=T),W(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[D,F,T,G,W]);i.default.useEffect(()=>{N&&q&&R&&v(N,T,D,{locale:P},A)},[D,T,q,P,R,null==I?void 0:I.locale,N,A]);let K={ref:H,onClick(e){k||"function"!=typeof S||S(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:c,scroll:a}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?i.default.startTransition(g):g()}(e,N,T,D,E,j,O,P,A,R)},onMouseEnter(e){k||"function"!=typeof x||x(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),N&&(R||!A)&&v(N,T,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),N&&(R||!A)&&v(N,T,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)}};if((0,s.isAbsoluteUrl)(D))K.href=D;else if(!k||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);K.href=t||(0,m.addBasePath)((0,f.addLocale)(D,e,null==I?void 0:I.defaultLocale))}return k?i.default.cloneElement(o,K):i.default.createElement("a",n._({},z,K),r)}),_=w;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),o=r(29),l="function"==typeof IntersectionObserver,i=new Map,a=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,c=u||!l,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),i.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,s,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l,objectFit:i}=e,a=n||t,u=o||r,c=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function u(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,u=e.title,c=a(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}}]);