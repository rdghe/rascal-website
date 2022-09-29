"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},39230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"module demo::Queens"},l=void 0,a={unversionedId:"Library/demo/Queens",id:"Library/demo/Queens",title:"module demo::Queens",description:"Usage",source:"@site/docs/Library/demo/Queens.md",sourceDirName:"Library/demo",slug:"/Library/demo/Queens",permalink:"/docs/Library/demo/Queens",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/Queens.md",tags:[],version:"current",frontMatter:{title:"module demo::Queens"},sidebar:"tutorialSidebar",previous:{title:"module demo::Mod17",permalink:"/docs/Library/demo/Mod17"},next:{title:"module demo::ReachingDefs",permalink:"/docs/Library/demo/ReachingDefs"}},u={},s=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"alias Pos",id:"demo-Queens-Pos",level:2},{value:"function pairs",id:"demo-Queens-pairs",level:2},{value:"function diagonalOverlap",id:"demo-Queens-diagonalOverlap",level:2},{value:"function isSolution",id:"demo-Queens-isSolution",level:2},{value:"function nQueens",id:"demo-Queens-nQueens",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import demo::Queens;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Experiments with the 8-queens puzzle in Rascal"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"See: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Eight_queens_puzzle"},"http://en.wikipedia.org/wiki/Eight_queens_puzzle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Eight_queens_puzzle_solutions"},"http://en.wikipedia.org/wiki/Eight_queens_puzzle_solutions"))),(0,i.kt)("h2",{id:"demo-Queens-Pos"},"alias Pos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuple[int x,int y]"))),(0,i.kt)("h2",{id:"demo-Queens-pairs"},"function pairs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[tuple[&T,&T]] pairs(list[&T] p)"))),(0,i.kt)("h2",{id:"demo-Queens-diagonalOverlap"},"function diagonalOverlap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool diagonalOverlap(Pos l, Pos r)"))),(0,i.kt)("h2",{id:"demo-Queens-isSolution"},"function isSolution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool isSolution(list[Pos] queens)"))),(0,i.kt)("h2",{id:"demo-Queens-nQueens"},"function nQueens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[list[Pos]] nQueens(int n)"))))}d.isMDXComponent=!0}}]);