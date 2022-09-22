"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(a),k=s,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(83117),s=(a(67294),a(3905));const r={title:"List",keywords:["[","]"]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/List/index",id:"Rascal/Expressions/Values/List/index",title:"List",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/List/index.md",sourceDirName:"Rascal/Expressions/Values/List",slug:"/Rascal/Expressions/Values/List/",permalink:"/docs/Rascal/Expressions/Values/List/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/List/index.md",tags:[],version:"current",frontMatter:{title:"List",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Integer",permalink:"/docs/Rascal/Expressions/Values/Integer/"},next:{title:"List Append",permalink:"/docs/Rascal/Expressions/Values/List/Append/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"List values."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"[ Exp<sub>1</sub>, Exp<sub>2</sub>, ... ]")),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("p",null,"//"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},"..."),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"[ Exp<sub>1</sub>, Exp<sub>2</sub>, ... ]")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"T<sub>1</sub>")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"T<sub>2</sub>")),(0,s.kt)("td",{parentName:"tr",align:null},"..."),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"list[lub(T<sub>1</sub>, T<sub>2</sub>, ... )]"))))),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"A list is an ordered sequence of values and has the following properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All elements have the same static type."),(0,s.kt)("li",{parentName:"ul"},"The order of the elements matters."),(0,s.kt)("li",{parentName:"ul"},"A list may contain an element more than once.")),(0,s.kt)("p",null,"The type of a list has the form ",(0,s.kt)("inlineCode",{parentName:"p"},"list[T]"),",\nwhere ",(0,s.kt)("inlineCode",{parentName:"p"},"T")," is an arbitrary type."),(0,s.kt)("p",null,"When a value or variable of type list occurs inside a list, that list value is inserted as list element.\nTo achieve ",(0,s.kt)("em",{parentName:"p"},"splicing")," of these elements, i.e., the insertion of the elements of the list value rather than the whole list,\nit has to be prefixed by the splice operator ",(0,s.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,s.kt)("p",null,"The following operators are provided on list:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List"},"List")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Append"},"Append")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Comprehension"},"Comprehension")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Concatenation"},"Concatenation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Difference"},"Difference")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Equal"},"Equal")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Insert"},"Insert")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Intersection"},"Intersection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/NotEqual"},"NotEqual")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Product"},"Product")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Slice"},"Slice")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Splice"},"Splice")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/StrictSubList"},"StrictSubList")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/StrictSuperList"},"StrictSuperList")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/SubList"},"SubList")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/Subscription"},"Subscription")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/SuperList"},"SuperList")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/in"},"in")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../../../Rascal/Expressions/Values/List/notin"},"notin"))),(0,s.kt)("p",null,"There are also ",(0,s.kt)("a",{parentName:"p",href:"/docs/Library/List"},"library functions")," available for List."),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>[1, 2, 3];\nlist[int]: [1,2,3]\nrascal>[<1,10>, <2,20>, <3,30>];\nlrel[int,int]: [\n  <1,10>,\n  <2,20>,\n  <3,30>\n]\nrascal>[1, "b", 3];\nlist[value]: [1,"b",3]\nrascal>[<"a",10>, <"b",20>, <"c",30>];\nlrel[str,int]: [\n  <"a",10>,\n  <"b",20>,\n  <"c",30>\n]\nrascal>[["a", "b"], ["c", "d", "e"]];\nlist[list[str]]: [\n  ["a","b"],\n  ["c","d","e"]\n]\n')),(0,s.kt)("p",null,"List splicing works as follows: by prefixing ",(0,s.kt)("inlineCode",{parentName:"p"},"L")," by the splice operator, its elements are included as elements in the enclosing list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>L = [1, 2, 3];\nlist[int]: [1,2,3]\nrascal>[10, L, 20];\nlist[value]: [\n  10,\n  [1,2,3],\n  20\n]\nrascal>[10, *L, 20];\nlist[int]: [10,1,2,3,20]\n")))}c.isMDXComponent=!0}}]);