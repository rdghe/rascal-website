"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[46762],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},460:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(83117),a=(t(67294),t(3905));const o={title:"NoKeywordParameters"},i=void 0,l={unversionedId:"CompileTimeErrors/NoKeywordParameters/index",id:"CompileTimeErrors/NoKeywordParameters/index",title:"NoKeywordParameters",description:"Synopsis",source:"@site/docs/CompileTimeErrors/NoKeywordParameters/index.md",sourceDirName:"CompileTimeErrors/NoKeywordParameters",slug:"/CompileTimeErrors/NoKeywordParameters/",permalink:"/docs/CompileTimeErrors/NoKeywordParameters/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/NoKeywordParameters/index.md",tags:[],version:"current",frontMatter:{title:"NoKeywordParameters"},sidebar:"tutorialSidebar",previous:{title:"ModuleNameMismatch",permalink:"/docs/CompileTimeErrors/ModuleNameMismatch/"},next:{title:"NonAbstractJavaFunction",permalink:"/docs/CompileTimeErrors/NonAbstractJavaFunction/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A function that is declared without keyword parameters is called with keyword parameters."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Functions maybe declared with or without keyword parameters.\nThis error is generated when a function has been declared without keyword parameters but is called with a keyword parameter."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace the keyword parameter in the call by a positional parameter."),(0,a.kt)("li",{parentName:"ul"},"Add a keyword parameter to the function declaration.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int incr(int x) = x + 1;\nint (int): function(|prompt:///|(0,24,<1,0>,<1,24>))\nrascal>incr(3, delta=5);\nint: 4\n")),(0,a.kt)("p",null,"Here is one solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int incr(int x, int delta=1) = x + delta;\nint (int, int delta = ...): function(|prompt:///|(0,41,<1,0>,<1,41>))\nrascal>incr(3, delta=5);\nint: 8\n")))}m.isMDXComponent=!0}}]);