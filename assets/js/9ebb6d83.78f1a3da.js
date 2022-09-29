"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[81500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={title:"Working on the Tutor Compiler",sidebar_position:0},i=void 0,o={unversionedId:"Developers/TutorCompiler/index",id:"Developers/TutorCompiler/index",title:"Working on the Tutor Compiler",description:"Synopsis",source:"@site/docs/Developers/TutorCompiler/index.md",sourceDirName:"Developers/TutorCompiler",slug:"/Developers/TutorCompiler/",permalink:"/docs/Developers/TutorCompiler/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Developers/TutorCompiler/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Working on the Tutor Compiler",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Developers manual",permalink:"/docs/Developers/"},next:{title:"Working on the Interpreter",permalink:"/docs/Developers/Interpreter/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"How to compile, run and test the tutor compiler."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The tutor compiler translates Rascal modules and Markdown files to Docusaurus Markdown files. The main features are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flattening and fusing a hierarchical tree of markdown files that each describe a single concept"),(0,n.kt)("li",{parentName:"ul"},"Indexing sub-concepts and resolving links to them (internally)"),(0,n.kt)("li",{parentName:"ul"},"Implementing local tables of contents for listing nested subconcepts in the parent file"),(0,n.kt)("li",{parentName:"ul"},"Collecting and linking local image files"),(0,n.kt)("li",{parentName:"ul"},"Supporting subscripts and superscripts as in ",(0,n.kt)("inlineCode",{parentName:"li"},"Type\u2081")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Type^21^")," by translation MDX Text tags."),(0,n.kt)("li",{parentName:"ul"},"Collecting Rascal source modules and the function and data declarations in them to generating API documentations in markdown notation"),(0,n.kt)("li",{parentName:"ul"},"Running ",(0,n.kt)("inlineCode",{parentName:"li"},"rascal-shell")," blocks on the Rascal REPL and collecting resulting HTML visualizations as screenshots (unfinished)"),(0,n.kt)("li",{parentName:"ul"},"Executing the questions DSL to produce embedded interactive questions (unfinished)")),(0,n.kt)("p",null,"The tutor compiler is located here: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/library/lang/rascal/tutor"},"src/org/rascalmpl/library/lang/rascal/tutor"),", with each main feature in a sub-folder. You will find the main compiler file in ",(0,n.kt)("inlineCode",{parentName:"p"},"Compiler.rsc"),". Some of the tutor compiler is written in Java, in particular the interface with the REPL (See ",(0,n.kt)("inlineCode",{parentName:"p"},"lang/rascal/tutor/repl/TutorCommandExecutor.java"),"."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"clone the rascal project first: ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:usethesource/rascal.git")),(0,n.kt)("li",{parentName:"ul"},"compile it, but skip the type-checking of the library: ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn -Drascal.compile.skip -DskipTests package")),(0,n.kt)("li",{parentName:"ul"},"run can be done in several ways:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"use VScode run command to execute ",(0,n.kt)("inlineCode",{parentName:"li"},"RascalShell")," in debug mode"),(0,n.kt)("li",{parentName:"ol"},'use Eclipse to "Run as Java Program", also ',(0,n.kt)("inlineCode",{parentName:"li"},"RascalShell")),(0,n.kt)("li",{parentName:"ol"},"use ",(0,n.kt)("inlineCode",{parentName:"li"},"java -jar target/rascal-<version>-SNAPSHOT.jar"))))),(0,n.kt)("p",null,"Note that it's indeed best to run the rascal REPL as described above, otherwise you might miss fixes in the Java-implemented part of the tutor, or other related changes in the interpreter that needed fixing to build the tutor."),(0,n.kt)("p",null,"So start a Rascal REPL first. At least you need these three modules loaded:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\nrascal>import util::Reflective;\nok\nrascal>import lang::rascal::tutor::Compiler;\nok\n")),(0,n.kt)("p",null,"Then we create the configuration for running the compiler, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"PathConfig")," data-type from ",(0,n.kt)("inlineCode",{parentName:"p"},"util::Reflective"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>pcfg = pathConfig(srcs=[|project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test|] , bin=|tmp:///rascal-tmp/doc|);\nPathConfig: pathConfig(\n  bin=|tmp:///rascal-tmp/doc|,\n  srcs=[|project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test|])\n")),(0,n.kt)("p",null,"As you can see we used a singleton list to select the Test course subfolder, but you could also have listed many directories at the same time. That is necessary for the final product because then the compiler knows how to resolve cross-references between the courses in that list. The compiler will filter this list and select only subfolders, and start from each folder to generate a single ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," file. "),(0,n.kt)("p",null,"Another way to link between courses is via ",(0,n.kt)("inlineCode",{parentName:"p"},"PathConfig.libs"),". The jars in that list, or folders, will  be searched for an ",(0,n.kt)("inlineCode",{parentName:"p"},"doc/index.value")," file which contains all the concepts provided by that library. "),(0,n.kt)("p",null,"Now we run the compiler:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>compile(pcfg);\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/t1.png|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/CallAnalysis|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/CallAnalysis/calls.png|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/If|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/Libraries|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/Libraries/Boolean|\n\ncompiling |project://rascal/src/org/rascalmpl/library/lang/rascal/tutor/examples/Test/Questions|\nlist[Message]: []\n")),(0,n.kt)("p",null,"Afterwards you will find all the generated files in ",(0,n.kt)("inlineCode",{parentName:"p"},"./target/classes/doc/")," including an ",(0,n.kt)("inlineCode",{parentName:"p"},"index.value")," file for later reference, and you can use a mark-down editor or compiler to further process the .md files. Note that these markdown files are ",(0,n.kt)("em",{parentName:"p"},"generated"),", so they should be processed downstream automatically rather than by hand. Nevertheless while debugging it can be useful to explore what has been generated manually using a markdown editor."),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("inlineCode",{parentName:"li"},"src/org/rascalmpl/library/lang/rascal/tutor"),' you will find "throwaway" scripts for translating asciidoctor markdown notation to docusaurus markdown notation. Sometimes it requires running the same script twice or three times to see the desired effects. This is because some rules generate the input for other rules to be transformed again.')))}u.isMDXComponent=!0}}]);