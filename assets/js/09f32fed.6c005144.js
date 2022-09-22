"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[52517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(k,l(l({ref:t},o),{},{components:r})):n.createElement(k,l({ref:t},o))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const a={title:"Numbered Lists"},l=void 0,u={unversionedId:"Tutor/Markup/StructureMarkup/NumberedLists/index",id:"Tutor/Markup/StructureMarkup/NumberedLists/index",title:"Numbered Lists",description:"Synopsis",source:"@site/docs/Tutor/Markup/StructureMarkup/NumberedLists/index.md",sourceDirName:"Tutor/Markup/StructureMarkup/NumberedLists",slug:"/Tutor/Markup/StructureMarkup/NumberedLists/",permalink:"/docs/Tutor/Markup/StructureMarkup/NumberedLists/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Tutor/Markup/StructureMarkup/NumberedLists/index.md",tags:[],version:"current",frontMatter:{title:"Numbered Lists"},sidebar:"tutorialSidebar",previous:{title:"NewParagraph",permalink:"/docs/Tutor/Markup/StructureMarkup/NewParagraph/"},next:{title:"Table",permalink:"/docs/Tutor/Markup/StructureMarkup/Table/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],o={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"A (possibly nested) list of numbered points."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2420")," is used to represent a visible space:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1. MarkedText")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2420\u2420\u24201. MarkedText")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2420\u2420\u2420\u2420\u2420\u24201. MarkedText"))),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Numbered Lists create, possibly nested, lists of numbered points.\nThey start with a number followed by a period (",(0,i.kt)("inlineCode",{parentName:"p"},"1."),"). The number of spaces indicates the nesting level, every 3 spaces represents one level."),(0,i.kt)("p",null,"A list item ends with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the start of a new list item."),(0,i.kt)("li",{parentName:"ul"},"an empty line.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../../../Tutor/Markup/StructureMarkup/BulletLists"},"bullet lists")," and ",(0,i.kt)("a",{parentName:"p",href:"../../../../Tutor/Markup/StructureMarkup/NumberedLists"},"numbered lists")," can be mixed."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. First item.\n1. Second item.\n")),(0,i.kt)("p",null,"will produce:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First item."),(0,i.kt)("li",{parentName:"ol"},"Second item.")),(0,i.kt)("p",null,"The input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. First item.\n   1.  First subitem.\n   1.  Second subitem.\n1. Second item\n")),(0,i.kt)("p",null,"will produce:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First item.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"First subitem."),(0,i.kt)("li",{parentName:"ol"},"Second subitem."))),(0,i.kt)("li",{parentName:"ol"},"Second item")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An empty line is required ",(0,i.kt)("em",{parentName:"li"},"after")," a NumberedList")))}c.isMDXComponent=!0}}]);