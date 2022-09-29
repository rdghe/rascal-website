"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[43980],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:a},p),{},{components:t})):r.createElement(f,l({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17226:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const i={title:"Declarations",details:["Module","Import","Program","StaticTyping","AlgebraicDataType","Declarations-Variable","Function","SyntaxDefinition","Alias","Declarations-Annotation","Tag"],sidebar_position:0},l=void 0,o={unversionedId:"Rascal/Declarations/index",id:"Rascal/Declarations/index",title:"Declarations",description:"Synopsis",source:"@site/docs/Rascal/Declarations/index.md",sourceDirName:"Rascal/Declarations",slug:"/Rascal/Declarations/",permalink:"/docs/Rascal/Declarations/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Declarations",details:["Module","Import","Program","StaticTyping","AlgebraicDataType","Declarations-Variable","Function","SyntaxDefinition","Alias","Declarations-Annotation","Tag"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Rascal Language Reference",permalink:"/docs/Rascal/"},next:{title:"Module Declaration",permalink:"/docs/Rascal/Declarations/Module/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:s};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"The entities that can be declared in Rascal programs."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The following concepts are relevant for declarations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Module/"},"Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Import/"},"Import")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Program/"},"./Program")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/StaticTyping/"},"./static typing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/AlgebraicDataType/"},"algebraic data type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Variable/"},"Variable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Function/"},"./Function")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/SyntaxDefinition/"},"syntax definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Alias/"},"Alias")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Annotation/"},"Annotation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Tag/"},"Tag"))))}u.isMDXComponent=!0}}]);