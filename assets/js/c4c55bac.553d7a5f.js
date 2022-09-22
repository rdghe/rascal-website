"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(y,o(o({ref:t},p),{},{components:r})):a.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const i={title:"DateTimeSyntax"},o=void 0,l={unversionedId:"CompileTimeErrors/DateTimeSyntax/index",id:"CompileTimeErrors/DateTimeSyntax/index",title:"DateTimeSyntax",description:"Synopsis",source:"@site/docs/CompileTimeErrors/DateTimeSyntax/index.md",sourceDirName:"CompileTimeErrors/DateTimeSyntax",slug:"/CompileTimeErrors/DateTimeSyntax/",permalink:"/docs/CompileTimeErrors/DateTimeSyntax/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/CompileTimeErrors/DateTimeSyntax/index.md",tags:[],version:"current",frontMatter:{title:"DateTimeSyntax"},sidebar:"tutorialSidebar",previous:{title:"Arity",permalink:"/docs/CompileTimeErrors/Arity/"},next:{title:"IllegalQualifiedDeclaration",permalink:"/docs/CompileTimeErrors/IllegalQualifiedDeclaration/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"A datetime value is syntactically incorrect."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Datetime values have a rather complex format as described in ",(0,n.kt)("a",{parentName:"p",href:"../../Rascal/Expressions/Values/DateTime"},"datetime"),".\nSome errors in the format are treated as syntax errors, others generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTimeSyntax")," error."),(0,n.kt)("p",null,"Remedy: Fix the datetime value notation."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"A correct datetime value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>$2013-07-15T09:15:23.123+03:00$;\ndatetime: $2013-07-15T09:15:23.123+03:00$\n")),(0,n.kt)("p",null,"Certain errors, like a wrong day number (here: 40) lead to a parse error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>$2013-07-40T09:15:23.123+03:00$;\nok\n")),(0,n.kt)("p",null,"Others, like a wrong month number (here: 15) lead to a DateTimeSyntax error"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>$2010-15-15T09:15:23.123+03:00$;\n|prompt:///|(0,31,<1,0>,<1,31>): Invalid datetime input: Cannot create date with provided values.\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|\nok\n")))}m.isMDXComponent=!0}}]);