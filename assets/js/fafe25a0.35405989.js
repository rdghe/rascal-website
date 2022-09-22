"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[87618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={title:"Pico"},s=void 0,l={unversionedId:"Recipes/Languages/Pico/index",id:"Recipes/Languages/Pico/index",title:"Pico",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/index.md",sourceDirName:"Recipes/Languages/Pico",slug:"/Recipes/Languages/Pico/",permalink:"/docs/Recipes/Languages/Pico/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Pico/index.md",tags:[],version:"current",frontMatter:{title:"Pico"},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/docs/Recipes/Languages/Lisra/Test/"},next:{title:"Abstract",permalink:"/docs/Recipes/Languages/Pico/Abstract/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The classical toy language, including a specialized IDE."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Pico is a toy language that has been used as example over the years in many projects and disguishes,\nPico has a single purpose in life: being so simple that specifications of every possible language aspect are so simple that they fit on a few pages. It can be summarized as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are two types: natural numbers and strings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variables have to be declared.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Statements are assignment, if-then-else and while-do.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expressions may contain naturals, strings, variables, addition (",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"), subtraction (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),") and concatenation (",(0,r.kt)("inlineCode",{parentName:"p"},"||"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The operators ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," have operands of type natural and their result is natural.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The operator ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," has operands of type string and its results is also of type string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tests in if-then-else statement and while-statement should be of type natural."))),(0,r.kt)("p",null,"The following aspects of the Pico language will be discussed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico"},"Pico")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Abstract"},"Abstract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Assembly"},"Assembly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Compile"},"Compile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/ControlFlow"},"ControlFlow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Evaluate"},"Evaluate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/IDE"},"IDE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Load"},"Load")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Syntax"},"Syntax")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Typecheck"},"Typecheck")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Uninit"},"Uninit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/UseDef"},"UseDef")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Recipes/Languages/Pico/Visualize"},"Visualize"))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is a -- not so simple -- Pico program that computes the factorial function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"begin declare input : natural, // <1>\n              output : natural,           \n              repnr : natural,\n              rep : natural;\n      input := 14;\n      output := 1;\n      while input - 1 do // <2>\n          rep := output;\n          repnr := input;\n          while repnr - 1 do\n             output := output + rep;\n             repnr := repnr - 1\n          od;\n          input := input - 1\n      od\nend\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("p",null,"<1> Pico programs do not have input/output statements, so we use variables for that purpose.\n<2> Pico has no multiplication operator so we have to simulate it with repeated addition (yes, simplicity comes at a price!)."))}u.isMDXComponent=!0}}]);