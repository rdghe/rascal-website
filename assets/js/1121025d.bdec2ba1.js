"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[50586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const i={title:"Location",keywords:["|","(",")"]},l=void 0,o={unversionedId:"Rascal/Expressions/Values/Location/index",id:"Rascal/Expressions/Values/Location/index",title:"Location",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Location/index.md",sourceDirName:"Rascal/Expressions/Values/Location",slug:"/Rascal/Expressions/Values/Location/",permalink:"/docs/Rascal/Expressions/Values/Location/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Rascal/Expressions/Values/Location/index.md",tags:[],version:"current",frontMatter:{title:"Location",keywords:["|","(",")"]},sidebar:"tutorialSidebar",previous:{title:"ListRelation Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/TransitiveClosure/"},next:{title:"Location AddSegment",permalink:"/docs/Rascal/Expressions/Values/Location/AddSegment/"}},p={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"(Source code) location values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"| Uri | ( O, L, < BL, BC > , < EL,EC > )"),"\nwhere:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Uri")," is an arbitrary Uniform Resource Identifier (URI).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"O")," and ",(0,r.kt)("em",{parentName:"p"},"L")," are integer expressions giving the offset of this location to the begin of file, respectively, its length.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"BL")," and ",(0,r.kt)("em",{parentName:"p"},"BC")," are integers expressions giving the begin line and begin column.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"EL")," and ",(0,r.kt)("em",{parentName:"p"},"EC")," are integers expressions giving the end line and end column."))),(0,r.kt)("p",null,"The part following the second pipe symbol (",(0,r.kt)("inlineCode",{parentName:"p"},"|"),") is optional."),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loc")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Location values are represented by the type ",(0,r.kt)("inlineCode",{parentName:"p"},"loc")," and serve the following purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Providing a uniform mechanism for accessing local or remote files. This is used in all IO-related library functions."),(0,r.kt)("li",{parentName:"ul"},"If the optional part is present they serve as text coordinates in a specific local or remote source file.\nThis is very handy to associate a source code location which extracted facts.")),(0,r.kt)("p",null,"URIs are explained in ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"Uniform Resource Identifier"),". From their original definition in RFC3986 we cite the following useful overview of an URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"\n         foo://example.com:8042/over/there?name=ferret#nose\n         \\_/   \\______________/\\_________/ \\_________/ \\__/\n          |           |            |            |        |\n       scheme     authority       path        query   fragment\n          |   _____________________|__\n         / \\ /                        \\\n         urn:example:animal:ferret:nose\n")),(0,r.kt)("p",null,"The elements of a location value can be accessed and modified using the standard mechanism of field selection and field assignment. The corresponding field names are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"top"),": the URI of the location without precise positioning information (offset, length, begin, end).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"uri"),": the URI of the location as a string. Also subfields of the URI can be accessed:"))),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme"),": the scheme (or protocol) to be used;"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"authority"),": the domain where the data are located, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),": the host where the URI is hosted (part of authority), as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),": port on host (part of authority), as a ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),": path name of file on host, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"extension"),": file name extension, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),": query data, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"fragment"),": the fragment name following the path name and query data, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),": user info (only present in schemes like mailto), as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," : removes the last segment from the path component, if any, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," : the last segment of the path, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),";"),(0,r.kt)("p",null,"** ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," : the contents of a directory, if the loc is a directory, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"list[loc]"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"offset"),": start of text area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"length"),": length of text area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"begin.line"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"begin.column"),": begin line and column of text area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"end.line"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end.column")," end line and column of text area."))),(0,r.kt)("p",null,"Supported protocols are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scheme name and pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://host:port/path?query#fragment")),(0,r.kt)("td",{parentName:"tr",align:null},"access a remote file via the web.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file:///path")),(0,r.kt)("td",{parentName:"tr",align:null},"access a local file on the file system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cwd:///path")),(0,r.kt)("td",{parentName:"tr",align:null},"access the current working directory (the directory from which Rascal was started).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"home:///path")),(0,r.kt)("td",{parentName:"tr",align:null},"access the home directory of the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"std:///path")),(0,r.kt)("td",{parentName:"tr",align:null},"access the Rascal standard library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tmp:///path")),(0,r.kt)("td",{parentName:"tr",align:null},"access the temporay file directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jar:url!/[entry]")),(0,r.kt)("td",{parentName:"tr",align:null},"access any entry in a zip file (or a jar)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rascal://qualifiedModulename")),(0,r.kt)("td",{parentName:"tr",align:null},"access the source code of a Rascal module name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project://projectName/projectRelativePath")),(0,r.kt)("td",{parentName:"tr",align:null},"access a project in the current instance of Eclipse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bundleresource://bundleId/bundleRelativePath")),(0,r.kt)("td",{parentName:"tr",align:null},"access OSGI bundles. Only active in Eclipse context")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Locations with specific position information should always be generated automatically but for the curious here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>|file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)\nloc: |file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)\n")),(0,r.kt)("p",null,"Note that this is equivalent to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>|home://pico.trm|(0,1,<2,3>,<4,5>)\nloc: |home://pico.trm|(0,1,<2,3>,<4,5>)\n")),(0,r.kt)("p",null,"You could read a webpage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>println(readFile(|http://www.example.org|))\nprintln(readFile(|http://www.example.org|))\n<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>    \n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\nok\n')),(0,r.kt)("p",null,"Addition on locations creates longer paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>x = |tmp://myTempDirectory|;\nloc: |tmp://myTempDirectory|\nrascal>x += "myTempFile.txt";\nloc: |tmp://myTempDirectory/myTempFile.txt|\n')))}c.isMDXComponent=!0}}]);