"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[50532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(f,s(s({ref:t},u),{},{components:n})):l.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(83117),a=(n(67294),n(3905));const r={title:"Boolean All",keywords:["all"]},s=void 0,o={unversionedId:"Rascal/Expressions/Values/Boolean/All/index",id:"Rascal/Expressions/Values/Boolean/All/index",title:"Boolean All",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Boolean/All/index.md",sourceDirName:"Rascal/Expressions/Values/Boolean/All",slug:"/Rascal/Expressions/Values/Boolean/All/",permalink:"/docs/Rascal/Expressions/Values/Boolean/All/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Boolean/All/index.md",tags:[],version:"current",frontMatter:{title:"Boolean All",keywords:["all"]},sidebar:"tutorialSidebar",previous:{title:"Boolean",permalink:"/docs/Rascal/Expressions/Values/Boolean/"},next:{title:"Boolean And",permalink:"/docs/Rascal/Expressions/Values/Boolean/And/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"All argument expressions are true."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"all ( Exp<sub>1</sub>, Exp<sub>2</sub>, ... )")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,"//"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},"..."),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"all ( Exp<sub>1</sub>, Exp<sub>2</sub>, ... )")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Yields ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when all combinations of values of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"~i~ are true."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Are all integers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 even?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>all(int n <- [1 .. 10], n % 2 == 0);\nbool: false\n")),(0,a.kt)("p",null,"Are all integers 0, 2, 4, 6, 8, 10 even?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>all(int n <- [0, 2 .. 10], n % 2 == 0);\nbool: true\n")),(0,a.kt)("p",null,"When one of the ",(0,a.kt)("em",{parentName:"p"},"Exp"),"~i~ enumerates the elements of an empty list, ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>all(int n <- [], n > 0);\nbool: false\n")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("p",null,"WARNING: The Rascal interpreter and compiler give different results on an empty list.\nThe interpreter returns ",(0,a.kt)("inlineCode",{parentName:"p"},"fals")," for the abo eexample."))}c.isMDXComponent=!0}}]);