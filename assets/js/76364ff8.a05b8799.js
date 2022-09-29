"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[31824],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>d});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)l=o[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(l),d=n,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return l?i.createElement(k,a(a({ref:t},m),{},{components:l})):i.createElement(k,a({ref:t},m))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,a=new Array(o);a[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,a[1]=r;for(var p=2;p<o;p++)a[p]=l[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}u.displayName="MDXCreateElement"},72229:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=l(87462),n=(l(67294),l(3905));const o={title:"module demo::lang::Pico::Compile"},a=void 0,r={unversionedId:"Library/demo/lang/Pico/Compile",id:"Library/demo/lang/Pico/Compile",title:"module demo::lang::Pico::Compile",description:"Usage",source:"@site/docs/Library/demo/lang/Pico/Compile.md",sourceDirName:"Library/demo/lang/Pico",slug:"/Library/demo/lang/Pico/Compile",permalink:"/docs/Library/demo/lang/Pico/Compile",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Pico/Compile.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Pico::Compile"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Pico::Assembly",permalink:"/docs/Library/demo/lang/Pico/Assembly"},next:{title:"module demo::lang::Pico::ControlFlow",permalink:"/docs/Library/demo/lang/Pico/ControlFlow"}},s={},p=[{value:"Usage",id:"usage",level:4},{value:"alias Instrs",id:"demo-lang-Pico-Compile-Instrs",level:2},{value:"function compileExp",id:"demo-lang-Pico-Compile-compileExp",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"function nextLabel",id:"demo-lang-Pico-Compile-nextLabel",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function compileStat",id:"demo-lang-Pico-Compile-compileStat",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function compileStats",id:"demo-lang-Pico-Compile-compileStats",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function compileDecls",id:"demo-lang-Pico-Compile-compileDecls",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"function compileProgram",id:"demo-lang-Pico-Compile-compileProgram",level:2},{value:"Synopsis",id:"synopsis-5",level:4}],m={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import demo::lang::Pico::Compile;")),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-Instrs"},"alias Instrs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Instr]"))),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-compileExp"},"function compileExp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(natCon(int N))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(strCon(str S))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(id(PicoId Id))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(add(EXP E1, EXP E2))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(sub(EXP E1, EXP E2))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileExp(conc(EXP E1, EXP E2))"))),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Compile expressions to stackmachine instructions"),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-nextLabel"},"function nextLabel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str nextLabel()"))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"Unique label generation"),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-compileStat"},"function compileStat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(asgStat(PicoId Id, EXP Exp))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(ifElseStat(EXP Exp,                                list[STATEMENT] Stats1,                               list[STATEMENT] Stats2))")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileStat(whileStat(EXP Exp,                               list[STATEMENT] Stats1))"))),(0,n.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,n.kt)("p",null,"Compile a statement"),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-compileStats"},"function compileStats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileStats(list[STATEMENT] Stats1)"))),(0,n.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,n.kt)("p",null,"Compile a list of statements"),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-compileDecls"},"function compileDecls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileDecls(list[DECL] Decls)"))),(0,n.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,n.kt)("p",null,"Compile declarations"),(0,n.kt)("h2",{id:"demo-lang-Pico-Compile-compileProgram"},"function compileProgram"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileProgram(PROGRAM P)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Instrs compileProgram(str txt)"))),(0,n.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,n.kt)("p",null,"Compile a Pico program"))}c.isMDXComponent=!0}}]);