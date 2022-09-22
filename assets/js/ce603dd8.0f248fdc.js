"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41878],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return t?a.createElement(m,o(o({ref:r},c),{},{components:t})):a.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30480:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(83117),n=(t(67294),t(3905));const s={title:"Parser"},o=void 0,i={unversionedId:"Rascalopedia/Parser/index",id:"Rascalopedia/Parser/index",title:"Parser",description:"Synopsis",source:"@site/docs/Rascalopedia/Parser/index.md",sourceDirName:"Rascalopedia/Parser",slug:"/Rascalopedia/Parser/",permalink:"/docs/Rascalopedia/Parser/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascalopedia/Parser/index.md",tags:[],version:"current",frontMatter:{title:"Parser"},sidebar:"tutorialSidebar",previous:{title:"ParseTree",permalink:"/docs/Rascalopedia/ParseTree/"},next:{title:"Prettyprinter",permalink:"/docs/Rascalopedia/Prettyprinter/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Check that a text adheres to the rules of a language (and return a ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/ParseTree"},"ParseTree"),")."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Parsing"},"parser")," checks that a text in language ",(0,n.kt)("em",{parentName:"p"},"L")," indeed adheres\nto the syntax rules of language ",(0,n.kt)("em",{parentName:"p"},"L"),". There are two possible answers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Yes"),". A ",(0,n.kt)("a",{parentName:"li",href:"../../Rascalopedia/ParseTree"},"ParseTree")," is returned that shows how the text adheres to the syntax rules."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"No"),". Error messages pin point the location where the text deviates from the syntax rules.")),(0,n.kt)("p",null,"This is shown below:"),(0,n.kt)("p",null,"![null][parser.png]","(/assets/Rascalopedia/Parser/parser.png)"))}u.isMDXComponent=!0}}]);