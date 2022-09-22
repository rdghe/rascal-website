"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[2038],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,C=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(C,i(i({ref:n},u),{},{components:t})):r.createElement(C,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(83117),o=(t(67294),t(3905));const a={title:"CountInLine2"},i=void 0,l={unversionedId:"Recipes/Common/WordCount/CountInLine2/index",id:"Recipes/Common/WordCount/CountInLine2/index",title:"CountInLine2",description:"Synopsis",source:"@site/docs/Recipes/Common/WordCount/CountInLine2/index.md",sourceDirName:"Recipes/Common/WordCount/CountInLine2",slug:"/Recipes/Common/WordCount/CountInLine2/",permalink:"/docs/Recipes/Common/WordCount/CountInLine2/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Common/WordCount/CountInLine2/index.md",tags:[],version:"current",frontMatter:{title:"CountInLine2"},sidebar:"tutorialSidebar",previous:{title:"CountInLine1",permalink:"/docs/Recipes/Common/WordCount/CountInLine1/"},next:{title:"CountInLine3",permalink:"/docs/Recipes/Common/WordCount/CountInLine3/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Count words in a line."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"A slighly more involved manner of using regular matching in a loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'\n//START\n// tag::module[]\nmodule demo::common::WordCount::CountInLine2\n\n\n\nint countInLine2(str S){\n  int count = 0;\n  \n  // \\w matches any word character\n  // \\W matches any non-word character\n  // <...> are groups and should appear at the top level.\n  while (/^\\W*\\w+<rest:.*$>/ := S) { \n    count += 1; \n    S = rest; \n  }\n  return count;\n}\ntest bool tstCountInLine2b() = countInLine2("Jabberwocky by Lewis Carroll") == 4;\n\n')),(0,o.kt)("p",null,"The pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"/^\\W*\\w+<rest:.*$>/")," can be understood as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"^")," makes it anchored, only matches at the begin of the substring ",(0,o.kt)("inlineCode",{parentName:"li"},"S"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\W*")," matches zero or more non-word characters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\\w+")," matches one or more word characters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<rest:.*$>")," matches the remaining part of ",(0,o.kt)("inlineCode",{parentName:"li"},"S")," and assigns the result to the variable ",(0,o.kt)("inlineCode",{parentName:"li"},"rest"),".")),(0,o.kt)("p",null,"Inside the loop ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," is incremented and the new value of ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," becomes\nthe remainder of the current match. To summarize: each iteration\nremoves the first word from ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," and counts it."),(0,o.kt)("p",null,"Here is ",(0,o.kt)("inlineCode",{parentName:"p"},"countInLine2")," in action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::common::WordCount::CountInLine2;\nok\nrascal>countInLine2("Jabberwocky by Lewis Carroll");\nint: 4\n')))}p.isMDXComponent=!0}}]);