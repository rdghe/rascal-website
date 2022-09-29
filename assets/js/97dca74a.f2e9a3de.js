"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[8675],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(o),y=i,d=u["".concat(c,".").concat(y)]||u[y]||s[y]||n;return o?r.createElement(d,a(a({ref:t},p),{},{components:o})):r.createElement(d,a({ref:t},p))}));function y(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<n;m++)a[m]=o[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},81662:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=o(87462),i=(o(67294),o(3905));const n={title:"module demo::McCabe"},a=void 0,l={unversionedId:"Library/demo/McCabe",id:"Library/demo/McCabe",title:"module demo::McCabe",description:"Usage",source:"@site/docs/Library/demo/McCabe.md",sourceDirName:"Library/demo",slug:"/Library/demo/McCabe",permalink:"/docs/Library/demo/McCabe",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/McCabe.md",tags:[],version:"current",frontMatter:{title:"module demo::McCabe"},sidebar:"tutorialSidebar",previous:{title:"module demo::Dominators",permalink:"/docs/Library/demo/Dominators"},next:{title:"module demo::Mod17",permalink:"/docs/Library/demo/Mod17"}},c={},m=[{value:"Usage",id:"usage",level:4},{value:"function cyclomaticComplexity",id:"demo-McCabe-cyclomaticComplexity",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function tstCyclomaticComplexity1",id:"demo-McCabe-tstCyclomaticComplexity1",level:2},{value:"function tstCyclomaticComplexity2",id:"demo-McCabe-tstCyclomaticComplexity2",level:2},{value:"function tstCyclomaticComplexity3",id:"demo-McCabe-tstCyclomaticComplexity3",level:2}],p={toc:m};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import demo::McCabe;")),(0,i.kt)("h2",{id:"demo-McCabe-cyclomaticComplexity"},"function cyclomaticComplexity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int cyclomaticComplexity(Graph[&T] CFG)"))),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Compute the cyclomatic complexity of a graph"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"McCabe Complexity (also Cyclomatic Complexity) is a measure for source code\ncomplexity, see ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cyclomatic_complexity"},"http://en.wikipedia.org/wiki/Cyclomatic_complexity"),"\nor McCabe's original article:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"T.J. McCabe, A Complexity Measure, IEEE Transactions on Software Engineering,\nVol. 2, No. 4, p. 308 (1976)")),(0,i.kt)("p",null,"It is defined as a metric on the control flow graph:\n",(0,i.kt)("inlineCode",{parentName:"p"},"number_of_edges - number_of_nodes + 2")),(0,i.kt)("h2",{id:"demo-McCabe-tstCyclomaticComplexity1"},"function tstCyclomaticComplexity1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool tstCyclomaticComplexity1()"))),(0,i.kt)("h2",{id:"demo-McCabe-tstCyclomaticComplexity2"},"function tstCyclomaticComplexity2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool tstCyclomaticComplexity2()"))),(0,i.kt)("h2",{id:"demo-McCabe-tstCyclomaticComplexity3"},"function tstCyclomaticComplexity3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test bool tstCyclomaticComplexity3()"))))}s.isMDXComponent=!0}}]);