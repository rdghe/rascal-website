"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[34647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const l={title:"Insert",keywords:["insert"]},s=void 0,i={unversionedId:"Rascal/Statements/Insert/index",id:"Rascal/Statements/Insert/index",title:"Insert",description:"Synopsis",source:"@site/docs/Rascal/Statements/Insert/index.md",sourceDirName:"Rascal/Statements/Insert",slug:"/Rascal/Statements/Insert/",permalink:"/docs/Rascal/Statements/Insert/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Statements/Insert/index.md",tags:[],version:"current",frontMatter:{title:"Insert",keywords:["insert"]},sidebar:"tutorialSidebar",previous:{title:"If",permalink:"/docs/Rascal/Statements/If/"},next:{title:"Return",permalink:"/docs/Rascal/Statements/Return/"}},o={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Insert a value in a tree during a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Visit"},"Visit"),"."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"insert Exp;")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"An insert statement may only occur in the action part of a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Visit/PatternWithAction"},"Pattern With Action"),", more precisely in\na case in a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Visit"},"Visit")," expression. The value matched by the pattern of this case is replaced by the value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"."),(0,a.kt)("p",null,"The following rule applies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The static type of ",(0,a.kt)("em",{parentName:"li"},"Exp")," should be a subtype of the type of the value that is replaced.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Consider the following datatype ",(0,a.kt)("inlineCode",{parentName:"p"},"CTree")," and assign a CTree value to variable ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);\nok\nrascal>CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));\nCTree: red(\n  green(\n    leaf(1),\n    red(\n      leaf(2),\n      leaf(3))),\n  red(\n    leaf(4),\n    leaf(5)))\n")),(0,a.kt)("p",null,"We can now switch the arguments of all red nodes as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>visit(T){\n>>>>>>>  case red(CTree l, CTree r): insert red(r,l);\n>>>>>>>}\nCTree: red(\n  red(\n    leaf(5),\n    leaf(4)),\n  green(\n    leaf(1),\n    red(\n      leaf(3),\n      leaf(2))))\n")),(0,a.kt)("p",null,"Since this is a very common idiom, we also have a shorthand for it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>visit(T){\n>>>>>>>  case red(CTree l, CTree r) => red(r,l)\n>>>>>>>}\nCTree: red(\n  red(\n    leaf(5),\n    leaf(4)),\n  green(\n    leaf(1),\n    red(\n      leaf(3),\n      leaf(2))))\n")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("p",null,"There is a glitch in the Rascal syntax that ",(0,a.kt)("em",{parentName:"p"},"requires")," a semicolon after a case (as in the first example),\nbut refuses it in the abbreviated version using ",(0,a.kt)("inlineCode",{parentName:"p"},"=>")," (the second example)."))}u.isMDXComponent=!0}}]);