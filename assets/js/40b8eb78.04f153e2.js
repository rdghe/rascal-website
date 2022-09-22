"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[81916],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80903:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(83117),a=(t(67294),t(3905));const i={title:"IllegalQualifiedDeclaration"},l=void 0,o={unversionedId:"CompileTimeErrors/IllegalQualifiedDeclaration/index",id:"CompileTimeErrors/IllegalQualifiedDeclaration/index",title:"IllegalQualifiedDeclaration",description:"Synopsis",source:"@site/docs/CompileTimeErrors/IllegalQualifiedDeclaration/index.md",sourceDirName:"CompileTimeErrors/IllegalQualifiedDeclaration",slug:"/CompileTimeErrors/IllegalQualifiedDeclaration/",permalink:"/docs/CompileTimeErrors/IllegalQualifiedDeclaration/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/IllegalQualifiedDeclaration/index.md",tags:[],version:"current",frontMatter:{title:"IllegalQualifiedDeclaration"},sidebar:"tutorialSidebar",previous:{title:"DateTimeSyntax",permalink:"/docs/CompileTimeErrors/DateTimeSyntax/"},next:{title:"InvalidDateTimeComparison",permalink:"/docs/CompileTimeErrors/InvalidDateTimeComparison/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Qualified names cannot be declared."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"When the same name is declared in different modules, a qualified name can be used to refer to a specific version of that name.\nThis error is generated when a qualified name is used in a declaration."),(0,a.kt)("p",null,"Remedy: remove the qualification."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Using a qualified name gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data M::D = d();\nok\n")),(0,a.kt)("p",null,"Without the qualification, this is correct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data D = d();\nok\n")))}u.isMDXComponent=!0}}]);