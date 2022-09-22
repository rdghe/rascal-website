"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={title:"Abstract"},i=void 0,c={unversionedId:"Recipes/Languages/Pico/Abstract/index",id:"Recipes/Languages/Pico/Abstract/index",title:"Abstract",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/Abstract/index.md",sourceDirName:"Recipes/Languages/Pico/Abstract",slug:"/Recipes/Languages/Pico/Abstract/",permalink:"/docs/Recipes/Languages/Pico/Abstract/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Pico/Abstract/index.md",tags:[],version:"current",frontMatter:{title:"Abstract"},sidebar:"tutorialSidebar",previous:{title:"Pico",permalink:"/docs/Recipes/Languages/Pico/"},next:{title:"Assembly",permalink:"/docs/Recipes/Languages/Pico/Assembly/"}},s={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Abstract syntax for Pico."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is the complete abstract syntax for Pico:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"// tag::module[]\nmodule demo::lang::Pico::Abstract\n\n\n\npublic data TYPE = natural() | string(); // <1>\n      \npublic alias PicoId = str; // <2>\n      \npublic data PROGRAM = // <3>\n  program(list[DECL] decls, list[STATEMENT] stats);\n\npublic data DECL =\n  decl(PicoId name, TYPE tp);\n\npublic data EXP = \n       id(PicoId name)\n     | natCon(int iVal)\n     | strCon(str sVal)\n     | add(EXP left, EXP right)\n     | sub(EXP left, EXP right)\n     | conc(EXP left, EXP right)\n     ;\n    \npublic data STATEMENT =\n       asgStat(PicoId name, EXP exp)\n     | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)\n     | whileStat(EXP exp, list[STATEMENT] body)\n     ;\n\nanno loc TYPE@location; // <4>\nanno loc PROGRAM@location;\nanno loc DECL@location;\nanno loc EXP@location;\nanno loc STATEMENT@location;\n\npublic alias Occurrence = tuple[loc location, PicoId name, STATEMENT stat]; // <5>\n// end::module[]\n\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("p",null,"<1> The types that may occur in a Pico program are either natural or string.\n<2> Introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"PicoId")," as an alias for Rascal's ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," datatype.\n<3> Define the various data types that constitute an AST for Pico. Observe that the constructor names match the names used in the concrete syntax, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"strCon"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ifElseStat"),".\n<4> Define an annotation with name ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," and of type ",(0,r.kt)("inlineCode",{parentName:"p"},"loc")," (source code location) for all AST types. This will be used when imploding\na parse tree into an abstract syntax tree.\n<5> Introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"Occurrence")," as a genereic way of describing the location of various items in the AST."))}u.isMDXComponent=!0}}]);