"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[14169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Static Typing"},s=void 0,i={unversionedId:"RascalConcepts/StaticTyping/index",id:"RascalConcepts/StaticTyping/index",title:"Static Typing",description:"Synopsis",source:"@site/docs/RascalConcepts/StaticTyping/index.md",sourceDirName:"RascalConcepts/StaticTyping",slug:"/RascalConcepts/StaticTyping/",permalink:"/docs/RascalConcepts/StaticTyping/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/RascalConcepts/StaticTyping/index.md",tags:[],version:"current",frontMatter:{title:"Static Typing"},sidebar:"tutorialSidebar",previous:{title:"Rewriting",permalink:"/docs/RascalConcepts/Rewriting/"},next:{title:"Syntax Definition and Parsing",permalink:"/docs/RascalConcepts/SyntaxDefinitionAndParsing/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Static type checking."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Type Lattice",src:a(97233).Z,width:"847",height:"951"})),(0,r.kt)("p",null,"Rascal has a static and a dynamic type system, which interact with eachother. The static type system is used by a type checker (not yet released) to predict errors and give warnings where possibly slipups have been made. The dynamic type system ensures well-formedness of data structures and plays an important role while pattern matching, since many algorithms dispatch on the types of values."),(0,r.kt)("p",null,"Rascal's static type system does not ensure that all functions will go right:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"functions may throw exceptions."),(0,r.kt)("li",{parentName:"ul"},"functions may not be defined for the specific pattern which occur on the call site.")),(0,r.kt)("p",null,"However, the static type system will produce an error when a function will certainly throw an exception, or when it is certainly not defined for a certain case. Also it catches some logical tautologies and contradictions which would lead to dead code."),(0,r.kt)("p",null,"The Rascal types are ordered in a so-called ",(0,r.kt)("em",{parentName:"p"},"type lattice")," shown in the figure above."),(0,r.kt)("p",null,"The arrows describe a ",(0,r.kt)("em",{parentName:"p"},"subtype-of")," relation between types. The type ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," is the ",(0,r.kt)("em",{parentName:"p"},"smallest")," type and\nis included in all other types and the type ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is the ",(0,r.kt)("em",{parentName:"p"},"largest")," type that includes all other types.\nWe also see that ",(0,r.kt)("inlineCode",{parentName:"p"},"rel")," is a subtype of ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," and that each ADT is a subtype of ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),".\nA special role is played by the datatype ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," that is the generic type of syntax trees.\nSyntax trees for specific languages are all subtypes of ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree"),". As a result, syntax trees can be addressed at two levels: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in a generic fashion as ",(0,r.kt)("inlineCode",{parentName:"li"},"Tree")," and,"),(0,r.kt)("li",{parentName:"ul"},"in a specific fashion as a more precisely typed syntax tree.\nFinally, each ",(0,r.kt)("inlineCode",{parentName:"li"},"alias")," is structurally equivalent to one or more specific other types.")),(0,r.kt)("p",null,"Rascal does not provide an explicit casting mechanism (as in Java), but pattern matching can play that role."),(0,r.kt)("p",null,"The language provides higher-order, parametric polymorphism.\nA type aliasing mechanism allows documenting specific uses of a type.\nBuilt-in operators are heavily overloaded.\nFor instance, the operator ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," is used for addition on integers and reals but also for list concatenation,\nset union and the like."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Some example can illustrate the above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int I = 3;\nint: 3\n")),(0,r.kt)("p",null,"Since I is declared as type ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", we cannot assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"real")," value to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>I = 3.5;\n|prompt:///|(4,3,<1,4>,<1,7>): Expected int, but got real\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|\nok\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>num N = 3;\nnum: 3\n")),(0,r.kt)("p",null,"Since N is declared as type ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),", we can assign both ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"real")," values to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>N = 3.5;\nnum: 3.5\n")),(0,r.kt)("p",null,"Since all types are a subtype of type ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", one can assign values of any type to a variable declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>value V = 3;\nvalue: 3\nrascal>V = "abc";\nvalue: "abc"\nrascal>V = false;\nvalue: false\n')),(0,r.kt)("p",null,"We can use pattern matching to classify the actual type of a value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>str classify(value V){\n>>>>>>>  switch(V){\n>>>>>>>    case str S: return "A string";\n>>>>>>>    case bool B: return "A Boolean";\n>>>>>>>    default: return "Another type"; \n>>>>>>>  }\n>>>>>>>}\nstr (value): function(|prompt:///|(0,150,<1,0>,<7,1>))\nrascal>classify(V);\nstr: "A Boolean"\nrascal>V = 3.5;\nvalue: 3.5\nrascal>classify(V);\nstr: "Another type"\n')),(0,r.kt)("p",null,"In addition to these standard examples, it is interesting that all ",(0,r.kt)("a",{parentName:"p",href:"../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Types")," are subtypes of type ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),".\nLet's introduce a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data Color = red(int level) | blue(int level);\nok\n")),(0,r.kt)("p",null,"Unsurprisingly, we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>Color C = red(3);\nColor: red(3)\n")),(0,r.kt)("p",null,"Due to subtyping, we can also have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>node ND = red(3);\nnode: red(3)\n")),(0,r.kt)("p",null,"One example of the actual application of subtypes can be found in\n",(0,r.kt)("a",{parentName:"p",href:"../../Recipes/Common/CountConstructors"},"Count Constructors"),"."))}u.isMDXComponent=!0},97233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type-lattice-9a476acc338596237526acde1ad0c66b.png"}}]);