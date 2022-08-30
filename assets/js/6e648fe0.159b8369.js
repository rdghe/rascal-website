"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[1535],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Optimizing Hash Tries",authors:["jvinju"]},l=void 0,c={permalink:"/blog/2015/10/30/optimizing-hash-tries",editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/blog/blog/2015-10-30-optimizing-hash-tries.md",source:"@site/blog/2015-10-30-optimizing-hash-tries.md",title:"Optimizing Hash Tries",description:"Hash-tries are the data-structure under Rascal's sets, maps and relations. These papers explain how they work and how we make them lean and fast on the JVM. Others have blogged about these results as well. The code can be found in the Capsule project.",date:"2015-10-30T00:00:00.000Z",formattedDate:"October 30, 2015",tags:[],readingTime:1.535,hasTruncateMarker:!1,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"}],frontMatter:{title:"Optimizing Hash Tries",authors:["jvinju"]},prevItem:{title:"Empirical analysis of the relationship between CC and SLOC",permalink:"/blog/2016/01/01/empirical-analysis-of-the-relationship-between-CC-and-SLOC"},nextItem:{title:"From imperative programming to functional programming",permalink:"/blog/2015/03/02/from-imperative-to-functional"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hash-tries are the data-structure under Rascal's sets, maps and relations. These papers explain how they work and how we make them lean and fast on the JVM. ",(0,i.kt)("a",{parentName:"p",href:"https://blog.acolyer.org/2015/11/27/hamt/"},"Others")," have blogged about these results as well. The code can be found in the ",(0,i.kt)("a",{parentName:"p",href:"http://www.usethesource.io/projects/capsule"},"Capsule project"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@inproceedings{oopsla2015,\n  title = {Optimizing Hash-Array Mapped Tries for Fast and Lean Immutable JVM Collections}\n  author = {Michael Steindorder and Jurgen J. Vinju}.\n  year = 2015,\n  booktitle = {Proceedings of the Annual ACM SIGPLAN Conference on Object-Oriented Programming, Systems, Languages, and Applications (OOPSLA)},\n  editor = {Patrick Eugster},\n  fulltext = "http://michael.steindorfer.name/publications/oopsla15.pdf",\n}\n\n@inproceedings{gpce14,\n author = {Steindorfer, Michael J. and Vinju, Jurgen J.},\n title = {Code Specialization for Memory Efficient Hash Tries},\n booktitle = {Proceedings of the 2014 International Conference on Generative Programming: Concepts and Experiences},\n series = {GPCE 2014},\n year = {2014},\n pages = {11--14},\n numpages = {4},\n doi = {10.1145/2658761.2658763},\n publisher = {ACM},\n fulltext = "http://michael.steindorfer.name/publications/gpce14.pdf"\n} \n')),(0,i.kt)("p",null,"The data structures under-pinning collection API (e.g. lists, sets, maps) in the standard libraries of programming languages are used intensively in many applications. The standard libraries of recent Java Virtual Machine languages, such as Clojure or Scala, contain scalable and well-performing immutable collection data structures that are implemented as Hash-Array Mapped Tries (HAMTs). HAMTs already feature efficient lookup, insert, and delete operations, however due to their tree-based nature their memory footprints and the runtime performance of iteration and equality checking lag behind array-based counterparts. This particularly prohibits their application in programs which process larger data sets. In this paper, we propose changes to the HAMT design that increase the overall performance of immutable sets and maps. The resulting general purpose design increases cache locality and features a canonical representation. It outperforms Scala\u2019s and Clojure\u2019s data structure implementations in terms of memory footprint and runtime efficiency of iteration (1.3\u2013 6.7 x) and equality checking (3\u201325.4 x)."))}h.isMDXComponent=!0}}]);