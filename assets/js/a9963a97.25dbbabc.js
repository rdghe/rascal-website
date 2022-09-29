"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[15417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Read Eval Print Loop (REPL)"},i=void 0,o={unversionedId:"RascalShell/REPL/index",id:"RascalShell/REPL/index",title:"Read Eval Print Loop (REPL)",description:"Synopsis",source:"@site/docs/RascalShell/REPL/index.md",sourceDirName:"RascalShell/REPL",slug:"/RascalShell/REPL/",permalink:"/docs/RascalShell/REPL/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RascalShell/REPL/index.md",tags:[],version:"current",frontMatter:{title:"Read Eval Print Loop (REPL)"},sidebar:"tutorialSidebar",previous:{title:"Command Completion",permalink:"/docs/RascalShell/Completion/"},next:{title:"Recipes",permalink:"/docs/Recipes/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The Rascal Read Eval Print Loop (REPL)"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The Rascal shell is an interactive console to experiment with Rascal code. You can write\nyour own expressions, statements and declarations right there. Or, you can import library\nmodules and try out their functionality."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Rascal code can be a trivial expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>1+2\nint: 3\n")),(0,a.kt)("p",null,"Or a more complex list comprehension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[ n * n | int n <- [0..10] ]\nlist[int]: [0,1,4,9,16,25,36,49,64,81]\n")),(0,a.kt)("p",null,"Or importing a module and using a function declared in it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import List;\nok\nrascal>size([ n * n | int n <- [0..10] ])\nint: 10\n")),(0,a.kt)("p",null,"Another use is to declare variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int x = 2;\nint: 2\nrascal>int y = 3;\nint: 3\n")),(0,a.kt)("p",null,"and use them later on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>x * y\nint: 6\n")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rascal is quite demanding as far as the proper placement of semicolons (",(0,a.kt)("inlineCode",{parentName:"li"},";"),") is concerned."),(0,a.kt)("li",{parentName:"ul"},"Rascal is a statically typed language but we have not released the type checker yet. Sometimes this\nis confusing because the interpreter will try to run otherwise broken code and produce an error message.")))}u.isMDXComponent=!0}}]);