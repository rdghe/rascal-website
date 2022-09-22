"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[47704],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(83117),r=(t(67294),t(3905));const i={title:"CountInLine1"},a=void 0,c={unversionedId:"Recipes/Common/WordCount/CountInLine1/index",id:"Recipes/Common/WordCount/CountInLine1/index",title:"CountInLine1",description:"Synopsis",source:"@site/docs/Recipes/Common/WordCount/CountInLine1/index.md",sourceDirName:"Recipes/Common/WordCount/CountInLine1",slug:"/Recipes/Common/WordCount/CountInLine1/",permalink:"/docs/Recipes/Common/WordCount/CountInLine1/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Common/WordCount/CountInLine1/index.md",tags:[],version:"current",frontMatter:{title:"CountInLine1"},sidebar:"tutorialSidebar",previous:{title:"Word Count",permalink:"/docs/Recipes/Common/WordCount/"},next:{title:"CountInLine2",permalink:"/docs/Recipes/Common/WordCount/CountInLine2/"}},s={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Count words in a line."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"We count words using a regular expression match in a for loop.\nEach time that the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"/[a-zA-Z0-9_]+/")," matches, the body of the loop is executed\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," is incremented."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'\n//START\n// tag::module[]\nmodule demo::common::WordCount::CountInLine1\n\n\n\nint countInLine1(str S){\n  int count = 0;\n  for(/[a-zA-Z0-9_]+/ := S){\n       count += 1;\n  }\n  return count;\n}\ntest bool tstCountInLine1b() = countInLine1("Jabberwocky by Lewis Carroll") == 4;\n\n')),(0,r.kt)("p",null,"Let's try it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::common::WordCount::CountInLine1;\nok\nrascal>countInLine1("Jabberwocky by Lewis Carroll");\nint: 4\n')))}p.isMDXComponent=!0}}]);