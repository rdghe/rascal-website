"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[26250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={title:"The Extract-Analyze-SYnthesize (EASY) paradigm"},s=void 0,l={unversionedId:"WhyRascal/EASY/index",id:"WhyRascal/EASY/index",title:"The Extract-Analyze-SYnthesize (EASY) paradigm",description:"Synopsis",source:"@site/docs/WhyRascal/EASY/index.md",sourceDirName:"WhyRascal/EASY",slug:"/WhyRascal/EASY/",permalink:"/docs/WhyRascal/EASY/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/WhyRascal/EASY/index.md",tags:[],version:"current",frontMatter:{title:"The Extract-Analyze-SYnthesize (EASY) paradigm"},sidebar:"tutorialSidebar",previous:{title:"Object-Oriented and Imperative Languages",permalink:"/docs/WhyRascal/CompareWithOtherParadigms/OO/"},next:{title:"Concurrency",permalink:"/docs/WhyRascal/EASY/Concurrency/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Rascal excels in supporting the Extract-Analyze-SYnthesize (EASY) paradigm."),(0,a.kt)("p",null,"![null][workflow.png]","(/assets/WhyRascal/EASY/easy-workflow.png)"),(0,a.kt)("p",null,"// explicitly separate image from Description "),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Many meta-programming problems follow a fixed pattern.\nStarting with some input system (a black box that we usually call ",(0,a.kt)("em",{parentName:"p"},"system-of-interest"),"),\nfirst relevant information is extracted from it and stored in an internal representation.\nThis internal representation is then analyzed and used to synthesize results.\nIf the synthesis indicates this, these steps can be repeated over and over again. These steps are shown in the figure.\nThis is an abstract view on solving meta-programming problems, but is rather common."),(0,a.kt)("p",null,"Rascal has been designed to fully support problem solving that fits the EASY paradigm.\nWe will discuss the following use cases represented by different ",(0,a.kt)("em",{parentName:"p"},"personas"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY"},"EASY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY/Concurrency"},"Concurrency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY/Forensics"},"Forensics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY/ModelDrivenEngineering"},"ModelDrivenEngineering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY/Renovation"},"Renovation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../WhyRascal/EASY/Security"},"Security"))))}u.isMDXComponent=!0}}]);