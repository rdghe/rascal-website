"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[80773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(y,s(s({ref:t},p),{},{components:a})):r.createElement(y,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(83117),i=(a(67294),a(3905));const n={title:"module analysis::statistics::Correlation"},s=void 0,o={unversionedId:"Library/analysis/statistics/Correlation",id:"Library/analysis/statistics/Correlation",title:"module analysis::statistics::Correlation",description:"Usage",source:"@site/docs/Library/analysis/statistics/Correlation.md",sourceDirName:"Library/analysis/statistics",slug:"/Library/analysis/statistics/Correlation",permalink:"/docs/Library/analysis/statistics/Correlation",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/analysis/statistics/Correlation.md",tags:[],version:"current",frontMatter:{title:"module analysis::statistics::Correlation"},sidebar:"tutorialSidebar",previous:{title:"analysis::statistics",permalink:"/docs/Library/analysis/statistics/"},next:{title:"module analysis::statistics::Descriptive",permalink:"/docs/Library/analysis/statistics/Descriptive"}},l={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function PearsonsCorrelation",id:"analysis-statistics-Correlation-PearsonsCorrelation",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"function PearsonsCorrelationStandardErrors",id:"analysis-statistics-Correlation-PearsonsCorrelationStandardErrors",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function PearsonsCorrelationPValues",id:"analysis-statistics-Correlation-PearsonsCorrelationPValues",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function SpearmansCorrelation",id:"analysis-statistics-Correlation-SpearmansCorrelation",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-2",level:4},{value:"Pitfalls",id:"pitfalls-1",level:4},{value:"function covariance",id:"analysis-statistics-Correlation-covariance",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-3",level:4},{value:"Examples",id:"examples",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::statistics::Correlation;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Correlation between data values."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Compute the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Correlation%5Bcorrelation%5D"},"http://en.wikipedia.org/wiki/Correlation[correlation]")," between pairs of data values.\nCorrelation measures the statistical relationship between two sets of data."),(0,i.kt)("p",null,"The following functions are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"PearsonsCorrelation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelationPValues"},"PearsonsCorrelationPValues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelationStandardErrors"},"PearsonsCorrelationStandardErrors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-SpearmansCorrelation"},"SpearmansCorrelation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-covariance"},"covariance"))),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelation"},"function PearsonsCorrelation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num PearsonsCorrelation(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,i.kt)("p",null,"Pearson product-moment correlation coefficient."),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Compute the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient%5BPearson"},"http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient[Pearson")," product-moment correlation coefficient].\nIt is a measure of the strength of the linear dependence between two variables."),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-SpearmansCorrelation"},"spearmans correlation")," when there is a ",(0,i.kt)("em",{parentName:"p"},"monotonous dependence")," between the two variables."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelationStandardErrors"},"function PearsonsCorrelationStandardErrors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[real] PearsonsCorrelationStandardErrors(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,i.kt)("p",null,"Standard errors associated with Pearson correlation. "),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-PearsonsCorrelationPValues"},"function PearsonsCorrelationPValues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list[real] PearsonsCorrelationPValues(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,i.kt)("p",null,"P-values (significance) associated with Pearson correlation."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-SpearmansCorrelation"},"function SpearmansCorrelation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num SpearmansCorrelation(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,i.kt)("p",null,"Spearman's rank correlation coefficient."),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Compute ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Spearman's_rank_correlation_coefficient%5BSpearman's"},"http://en.wikipedia.org/wiki/Spearman's_rank_correlation_coefficient[Spearman's")," rank correlation coefficient].\nThe correlation between the data values is computed by first performing a rank transformation\non the data values using a natural ranking and then computing ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"pearsons correlation"),"."),(0,i.kt)("h4",{id:"pitfalls-1"},"Pitfalls"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation#analysis::statistics::Correlation-PearsonsCorrelation"},"pearsons correlation")," when there is a ",(0,i.kt)("em",{parentName:"p"},"linear dependence")," between the variables."),(0,i.kt)("h2",{id:"analysis-statistics-Correlation-covariance"},"function covariance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num covariance(lrel[num x,num y] values)"))),(0,i.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,i.kt)("p",null,"Covariance of data values."),(0,i.kt)("h4",{id:"description-3"},"Description"),(0,i.kt)("p",null,"Computes the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Covariance%5Bcovariance%5D"},"http://en.wikipedia.org/wiki/Covariance[covariance]")," between the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," values."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Correlation;\nok\nrascal>covariance([<1,12>,<3,12>,<3,11>,<5,7>]);\nnum: -2.5\n")))}u.isMDXComponent=!0}}]);