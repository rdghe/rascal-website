"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[83286],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},z=Object.keys(n);for(i=0;i<z.length;i++)t=z[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(n);for(i=0;i<z.length;i++)t=z[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=i.createContext({}),l=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=l(n.components);return i.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,z=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),c=l(t),f=r,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||z;return t?i.createElement(m,a(a({ref:e},u),{},{components:t})):i.createElement(m,a({ref:e},u))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var z=t.length,a=new Array(z);a[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:r,a[1]=o;for(var l=2;l<z;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},46048:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>z,metadata:()=>o,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const z={title:"FizzBuzz",sidebar_position:6},a=void 0,o={unversionedId:"Recipes/Basic/FizzBuzz/index",id:"Recipes/Basic/FizzBuzz/index",title:"FizzBuzz",description:"Synopsis",source:"@site/docs/Recipes/Basic/FizzBuzz/index.md",sourceDirName:"Recipes/Basic/FizzBuzz",slug:"/Recipes/Basic/FizzBuzz/",permalink:"/docs/Recipes/Basic/FizzBuzz/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Basic/FizzBuzz/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"FizzBuzz",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Bottles Of Beer",permalink:"/docs/Recipes/Basic/BottlesOfBeer/"},next:{title:"Quine",permalink:"/docs/Recipes/Basic/Quine/"}},s={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:l};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"We solve a well-known job interview puzzle."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html"},"FizzBuzz")," is a well-known puzzle that is used at job interviews.\nIt is defined as follows:"),(0,r.kt)("p",null,'  Write a program that prints the numbers from 1 to 100.\nBut for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".\nFor numbers which are multiples of both three and five print "FizzBuzz".'),(0,r.kt)("p",null,"Surprisingly, many candidates fail to pass this test.\nSolutions to FizzBuzz in various languages are available ",(0,r.kt)("a",{parentName:"p",href:"http://www.geekschool.org/programming/fizzbuzz/"},"here"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are a few possible Rascal solutions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'\nmodule demo::basic::FizzBuzz\n\nimport IO;\n\n\nvoid fizzbuzz1() {\n   for (int n <- [1 .. 101]){\n      fb = ((n % 3 == 0) ? "Fizz" : "") + ((n % 5 == 0) ? "Buzz" : "");\n      println((fb == "") ?"<n>" : fb);\n   }\n}\n\n\nvoid fizzbuzz2() {\n  for (n <- [1..101]) \n    switch(<n % 3 == 0, n % 5 == 0>) {\n      case <true,true>  : println("FizzBuzz");\n      case <true,false> : println("Fizz");\n      case <false,true> : println("Buzz");\n      default: println(n);\n    }\n}\n \n \nvoid fizzbuzz3() {\n  for (n <- [1..101]) {\n    if (n % 3 == 0) {\n      print("Fizz");\n    }\n    if (n % 5 == 0) {\n      print("Buzz");\n    } else if (n % 3 != 0) {\n      print(n);\n    }\n    println("");\n  }\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import demo::basic::FizzBuzz;\nok\nrascal>fizzbuzz1();\n1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz\nok\n")))}p.isMDXComponent=!0}}]);