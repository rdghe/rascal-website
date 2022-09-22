"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96534],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,b=d["".concat(a,".").concat(m)]||d[m]||l[m]||s;return t?n.createElement(b,p(p({ref:r},u),{},{components:t})):n.createElement(b,p({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,p=new Array(s);p[0]=d;var o={};for(var a in r)hasOwnProperty.call(r,a)&&(o[a]=r[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<s;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14876:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(83117),i=(t(67294),t(3905));const s={title:"UnsupportedSubscriptArity"},p=void 0,o={unversionedId:"CompileTimeErrors/UnsupportedSubscriptArity/index",id:"CompileTimeErrors/UnsupportedSubscriptArity/index",title:"UnsupportedSubscriptArity",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UnsupportedSubscriptArity/index.md",sourceDirName:"CompileTimeErrors/UnsupportedSubscriptArity",slug:"/CompileTimeErrors/UnsupportedSubscriptArity/",permalink:"/docs/CompileTimeErrors/UnsupportedSubscriptArity/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/UnsupportedSubscriptArity/index.md",tags:[],version:"current",frontMatter:{title:"UnsupportedSubscriptArity"},sidebar:"tutorialSidebar",previous:{title:"UnsupportedSubscript",permalink:"/docs/CompileTimeErrors/UnsupportedSubscript/"},next:{title:"Developers manual",permalink:"/docs/Developers/"}},a={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:c};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Wrong number of subscripts is used. "),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Subscription is available for values of various types including:\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/String/Subscription"},"string"),",\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Node/Subscription"},"node"),",\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/List/Subscription"},"list"),",\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Map/Subscription"},"map"),",\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Tuple/Subscription"},"tuple")," and\n",(0,i.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/Relation/Subscription"},"relation"),".\nThis error is generated when subscription is applied to a value that does support subscription but not the number\nof indices that are used."),(0,i.kt)("p",null,"Remedies: correct the number of indices used in the subscription."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>[1,2,3][2,1];\nok\nrascal>("a":1, "b":2, "c":3)["c", "d"];\n|prompt:///|(27,3,<1,27>,<1,30>): Unsupported subscript arity of 2 on type map[str, int]\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|\nok\nrascal><1, 2, 3>[5,6];\n|prompt:///|(12,1,<1,12>,<1,13>): Unsupported subscript arity of 2 on type tuple[int,int,int]\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|\nok\n')))}l.isMDXComponent=!0}}]);