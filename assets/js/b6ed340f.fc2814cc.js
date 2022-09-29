"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[60296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>v,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},v=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||p[b]||l;return n?a.createElement(g,o(o({ref:t},v),{},{components:n})):a.createElement(g,o({ref:t},v))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"Test",sidebar_position:5},o=void 0,s={unversionedId:"Recipes/Languages/Lisra/Test/index",id:"Recipes/Languages/Lisra/Test/index",title:"Test",description:"Synopsis",source:"@site/docs/Recipes/Languages/Lisra/Test/index.md",sourceDirName:"Recipes/Languages/Lisra/Test",slug:"/Recipes/Languages/Lisra/Test/",permalink:"/docs/Recipes/Languages/Lisra/Test/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Lisra/Test/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Test",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Eval",permalink:"/docs/Recipes/Languages/Lisra/Eval/"},next:{title:"Parse",permalink:"/docs/Recipes/Languages/Lisra/Parse/"}},i={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],v={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Tests for the Lisp interpreter."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"It is good practice to write tests for your software."),(0,r.kt)("p",null,"Here are our tests for Lisra:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'module demo::lang::Lisra::Test\n\nimport demo::lang::Lisra::Runtime;\nimport demo::lang::Lisra::Eval;\n\ntest bool eval02() = eval("x").val == Atom("x");\n\ntest bool eval03() = eval("(quote 1)").val == Integer(1);\ntest bool eval04() = eval("(quote 1 2)").val == List([Integer(1), Integer(2)]);\n    \ntest bool eval05() = eval("(+ 1 2)").val == Integer(3);\ntest bool eval06() = eval("(- 5 3)").val == Integer(2);\ntest bool eval07() = eval("(* 5 3)").val == Integer(15);\ntest bool eval08() = eval("(\\< 3 4)").val != FALSE;\ntest bool eval09() = eval("(\\< 3 2)").val == FALSE;\ntest bool eval10() = eval("(\\> 3 2)").val != FALSE;\ntest bool eval11() = eval("(\\>3 4)").val == FALSE;\ntest bool eval12() = eval("(equal? 3 3)").val != FALSE;\ntest bool eval13() = eval("(equal? 3 2)").val == FALSE;\n\ntest bool eval14() = eval("(null? ())").val != FALSE;\ntest bool eval15() = eval("(null? (quote 1 2))").val == FALSE;\n            \ntest bool eval16() = eval("(begin (define swap (lambda (a b) (list b a))) (swap 1 2))").val == \n                     List([Integer(2), Integer(1)]);\ntest bool eval17() = eval("(begin (define * (lambda (a b) (+ a b))) (* 1 2))"). val == Integer(3);\n\ntest bool eval18() = eval("(begin (set! x 1) x)").val == Integer(1);\ntest bool eval19() = eval("(if (\\> 5 2) 10 20)").val == Integer(10);\ntest bool eval20() = eval("(if (\\> 2 5) 10 20)").val == Integer(20);\n\ntest bool eval21() = eval("(begin (define fac (lambda (n) (if (\\> n 1) (* n (fac (- n 1))) 1))) (fac 3))").val == Integer(6);\ntest bool eval22() = eval("(begin (define length (lambda (x) (if(null? x) 0 (+ 1 (length (cdr x)))))) (length (quote (1 2 3))))").val == Integer(3);\ntest bool eval23() = eval("(begin (define rev (lambda (x) (if (null? x) () (append (rev (cdr x)) (car x))))) (rev (quote 1 2 3)))").val == List([Integer(3), Integer(2), Integer(1)]);\ntest bool eval24() = eval("(begin (define F (lambda (x) y)) (set! y 10) (F 1))").val == Integer(10);\n\n')))}p.isMDXComponent=!0}}]);