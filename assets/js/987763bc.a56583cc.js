"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[47733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={title:"No Such Field"},a=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/NoSuchField/index",id:"RunTimeErrors/RuntimeExceptions/NoSuchField/index",title:"No Such Field",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/NoSuchField",slug:"/RunTimeErrors/RuntimeExceptions/NoSuchField/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/index.md",tags:[],version:"current",frontMatter:{title:"No Such Field"},sidebar:"tutorialSidebar",previous:{title:"No Such Annotation",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/"},next:{title:"No Such Key",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchKey/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Field of an abstract data type value cannot be found at runtime."),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data RuntimeException = NoSuchField(str name);")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchField")," is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Selecting a field from an abstract datatype depends on the actual constructor\nbeing used at run time. This exception is thrown when a non-existent field is accessed."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Consider this highly simplified view on persons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data Person = man(str name, bool beard) | woman(str name, bool necklace);\nok\nrascal>jane = woman("jane", false);\nPerson: woman("jane",false)\n')),(0,i.kt)("p",null,"The field ",(0,i.kt)("inlineCode",{parentName:"p"},"beard")," is evidently only applicable to a ",(0,i.kt)("inlineCode",{parentName:"p"},"man"),' but not to a woman\n(didn\'t we say "simplified", above):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>jane.beard;\n|prompt:///|(0,4,<1,0>,<1,4>): NoSuchField("beard")\nok\n')))}u.isMDXComponent=!0}}]);