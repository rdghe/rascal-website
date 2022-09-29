"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[40999],{3905:(e,i,s)=>{s.d(i,{Zo:()=>p,kt:()=>d});var t=s(67294);function n(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function a(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,t)}return s}function r(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?a(Object(s),!0).forEach((function(i){n(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}function l(e,i){if(null==e)return{};var s,t,n=function(e,i){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],i.indexOf(s)>=0||(n[s]=e[s]);return n}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],i.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var o=t.createContext({}),u=function(e){var i=t.useContext(o),s=i;return e&&(s="function"==typeof e?e(i):r(r({},i),e)),s},p=function(e){var i=u(e.components);return t.createElement(o.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},m=t.forwardRef((function(e,i){var s=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(s),d=n,y=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return s?t.createElement(y,r(r({ref:i},p),{},{components:s})):t.createElement(y,r({ref:i},p))}));function d(e,i){var s=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var a=s.length,r=new Array(a);r[0]=m;var l={};for(var o in i)hasOwnProperty.call(i,o)&&(l[o]=i[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var u=2;u<a;u++)r[u]=s[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},70262:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=s(87462),n=(s(67294),s(3905));const a={title:"module analysis::statistics::SimpleRegression"},r=void 0,l={unversionedId:"Library/analysis/statistics/SimpleRegression",id:"Library/analysis/statistics/SimpleRegression",title:"module analysis::statistics::SimpleRegression",description:"Usage",source:"@site/docs/Library/analysis/statistics/SimpleRegression.md",sourceDirName:"Library/analysis/statistics",slug:"/Library/analysis/statistics/SimpleRegression",permalink:"/docs/Library/analysis/statistics/SimpleRegression",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/statistics/SimpleRegression.md",tags:[],version:"current",frontMatter:{title:"module analysis::statistics::SimpleRegression"},sidebar:"tutorialSidebar",previous:{title:"module analysis::statistics::Inference",permalink:"/docs/Library/analysis/statistics/Inference"},next:{title:"analysis::text",permalink:"/docs/Library/analysis/text/"}},o={},u=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function intercept",id:"analysis-statistics-SimpleRegression-intercept",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"function interceptStdErr",id:"analysis-statistics-SimpleRegression-interceptStdErr",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function meanSquareError",id:"analysis-statistics-SimpleRegression-meanSquareError",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"function R",id:"analysis-statistics-SimpleRegression-R",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-4",level:4},{value:"function regressionSumSquares",id:"analysis-statistics-SimpleRegression-regressionSumSquares",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-5",level:4},{value:"function RSquare",id:"analysis-statistics-SimpleRegression-RSquare",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Description",id:"description-6",level:4},{value:"function significance",id:"analysis-statistics-SimpleRegression-significance",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"function slope",id:"analysis-statistics-SimpleRegression-slope",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"Description",id:"description-8",level:4},{value:"function slopeConfidenceInterval",id:"analysis-statistics-SimpleRegression-slopeConfidenceInterval",level:2},{value:"Synopsis",id:"synopsis-9",level:4},{value:"Description",id:"description-9",level:4},{value:"Pitfalls",id:"pitfalls-1",level:4},{value:"function slopeStdErr",id:"analysis-statistics-SimpleRegression-slopeStdErr",level:2},{value:"Synopsis",id:"synopsis-10",level:4},{value:"Description",id:"description-10",level:4},{value:"function sumOfCrossProducts",id:"analysis-statistics-SimpleRegression-sumOfCrossProducts",level:2},{value:"Synopsis",id:"synopsis-11",level:4},{value:"Description",id:"description-11",level:4},{value:"function sumSquaredErrors",id:"analysis-statistics-SimpleRegression-sumSquaredErrors",level:2},{value:"Synopsis",id:"synopsis-12",level:4},{value:"Description",id:"description-12",level:4},{value:"function totalSumSquares",id:"analysis-statistics-SimpleRegression-totalSumSquares",level:2},{value:"Synopsis",id:"synopsis-13",level:4},{value:"Description",id:"description-13",level:4},{value:"function XSumSquares",id:"analysis-statistics-SimpleRegression-XSumSquares",level:2},{value:"Synopsis",id:"synopsis-14",level:4},{value:"Description",id:"description-14",level:4},{value:"function predict",id:"analysis-statistics-SimpleRegression-predict",level:2},{value:"Synopsis",id:"synopsis-15",level:4},{value:"Description",id:"description-15",level:4}],p={toc:u};function c(e){let{components:i,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,s,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import analysis::statistics::SimpleRegression;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Statistical methods for simple regression."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The following functions are provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-R"},"R")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-RSquare"},"RSquare")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-XSumSquares"},"XSumSquares")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-intercept"},"intercept")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-interceptStdErr"},"interceptStdErr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-meanSquareError"},"meanSquareError")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-predict"},"predict")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-regressionSumSquares"},"regressionSumSquares")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-significance"},"significance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-slope"},"slope")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-slopeConfidenceInterval"},"slopeConfidenceInterval")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-slopeStdErr"},"slopeStdErr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-sumOfCrossProducts"},"sumOfCrossProducts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-sumSquaredErrors"},"sumSquaredErrors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/SimpleRegression#analysis::statistics::SimpleRegression-totalSumSquares"},"totalSumSquares"))),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-intercept"},"function intercept"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num intercept(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"Intercept of regression line."),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Root_of_a_function"},"interce")," of the estimated regression line.\nThe least squares estimate of the intercept is computed using these ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/estimation4.htm"},"normal equations")),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-interceptStdErr"},"function interceptStdErr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num interceptStdErr(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,n.kt)("p",null,"Standard error of intercept estimate."),(0,n.kt)("h4",{id:"description-2"},"Description"),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/standarderrorb0.htm%5Bstandard"},"http://www.xycoon.com/standarderrorb0.htm[standard")," error of the intercept estimate], usually denoted s(b0)."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-meanSquareError"},"function meanSquareError"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num meanSquareError(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,n.kt)("p",null,"Sum of squared errors divided by the degrees of freedom."),(0,n.kt)("h4",{id:"description-3"},"Description"),(0,n.kt)("p",null,"Returns the sum of squared errors divided by the degrees of freedom, usually abbreviated MSE."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-R"},"function R"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num R(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,n.kt)("p",null,"Pearson's product-moment correlation coefficient."),(0,n.kt)("h4",{id:"description-4"},"Description"),(0,n.kt)("p",null,"Computes Pearson's product-moment correlation coefficient.\nMore functions related to this coefficient can be found in ",(0,n.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Correlation"},"Correlation"),"."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-regressionSumSquares"},"function regressionSumSquares"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num regressionSumSquares(list[tuple[num,num]] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,n.kt)("p",null,"Sum of squared deviations of the predicted y values about their mean."),(0,n.kt)("h4",{id:"description-5"},"Description"),(0,n.kt)("p",null,"Returns the sum of squared deviations of the predicted y values about their mean (which equals the mean of y).\nThis is usually abbreviated SSR or ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/SumOfSquares.htm%5BSSM%5D"},"http://www.xycoon.com/SumOfSquares.htm[SSM]"),"."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-RSquare"},"function RSquare"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num RSquare(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,n.kt)("p",null,"Coefficient of determination."),(0,n.kt)("h4",{id:"description-6"},"Description"),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Coefficient_of_determination"},"coefficient of determination")," usually denoted r__^2^.\nIt provides a measure of how well future outcomes are likely to be predicted by the regression model."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-significance"},"function significance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num significance(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,n.kt)("p",null,"Significance of the slope correlation."),(0,n.kt)("h4",{id:"description-7"},"Description"),(0,n.kt)("p",null,"Returns the significance level of the slope (equiv) correlation.\nSpecifically, the returned value is the smallest alpha such that the slope confidence interval with significance level equal to alpha does not include 0. On regression output, this is often denoted Prob(|t| > 0)"),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("p",null,"The validity of this statistic depends on the assumption that the observations included in the model are drawn from a\n",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Bivariate_normal_distribution"},"Bivariate Normal Distribution"),"."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-slope"},"function slope"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num slope(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,n.kt)("p",null,"Slope of regression line."),(0,n.kt)("h4",{id:"description-8"},"Description"),(0,n.kt)("p",null,"Returns the slope of the estimated regression line.\nThe least squares estimate of the slope is computed using the ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/estimation4.htm%5Bnormal"},"http://www.xycoon.com/estimation4.htm[normal")," equations].\nThe slope is sometimes denoted b1."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-slopeConfidenceInterval"},"function slopeConfidenceInterval"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num slopeConfidenceInterval(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-9"},"Synopsis"),(0,n.kt)("p",null,"The 95% slope confidence interval."),(0,n.kt)("h4",{id:"description-9"},"Description"),(0,n.kt)("p",null,"Returns the half-width of a 95% confidence interval for the slope estimate.\nThe 95% confidence interval is"),(0,n.kt)("p",null,"(slope - slopeConfidenceInterval, slope + slopeConfidenceInterval)"),(0,n.kt)("h4",{id:"pitfalls-1"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The validity of this statistic depends on the assumption that the observations included in the model are drawn from a\n",(0,n.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Bivariate_normal_distribution"},"Bivariate Normal Distribution"))),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-slopeStdErr"},"function slopeStdErr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num slopeStdErr(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-10"},"Synopsis"),(0,n.kt)("p",null,"Standard error of slope estimate."),(0,n.kt)("h4",{id:"description-10"},"Description"),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/standarderrorb0.htm%5Bstandard"},"http://www.xycoon.com/standarderrorb0.htm[standard")," error of the slope estimate], usually denoted s(b1)."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-sumOfCrossProducts"},"function sumOfCrossProducts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num sumOfCrossProducts(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-11"},"Synopsis"),(0,n.kt)("p",null,"Sum of cross products of observations."),(0,n.kt)("h4",{id:"description-11"},"Description"),(0,n.kt)("p",null,"Returns the sum of crossproducts, x",(0,n.kt)("strong",{parentName:"p"},"\u1d62*y"),"\u1d62."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-sumSquaredErrors"},"function sumSquaredErrors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num sumSquaredErrors(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-12"},"Synopsis"),(0,n.kt)("p",null,"Sum of squared errors."),(0,n.kt)("h4",{id:"description-12"},"Description"),(0,n.kt)("p",null,"Returns the sum of squared errors (SSE) associated with the regression model.\nThe sum is computed using the computational formula"),(0,n.kt)("p",null,"SSE = SYY - (SXY * SXY / SXX)"),(0,n.kt)("p",null,"where SYY is the sum of the squared deviations of the y values about their mean, SXX is similarly defined and SXY is the sum of the products of x and y mean deviations."),(0,n.kt)("p",null,"The return value is constrained to be non-negative, i.e., if due to rounding errors the computational formula returns a negative result, 0 is returned."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-totalSumSquares"},"function totalSumSquares"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num totalSumSquares(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-13"},"Synopsis"),(0,n.kt)("p",null,"Sum of squared deviations."),(0,n.kt)("h4",{id:"description-13"},"Description"),(0,n.kt)("p",null,"Returns the sum of squared deviations of the y values about their mean.\nThis is defined as ",(0,n.kt)("a",{parentName:"p",href:"http://www.xycoon.com/SumOfSquares.htm%5BSSTO%5D"},"http://www.xycoon.com/SumOfSquares.htm[SSTO]"),"."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-XSumSquares"},"function XSumSquares"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num XSumSquares(lrel[num,num] values) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-14"},"Synopsis"),(0,n.kt)("p",null,"Sum of squared deviations of x values about their mean."),(0,n.kt)("h4",{id:"description-14"},"Description"),(0,n.kt)("p",null,"Returns the sum of squared deviations of the x values about their mean."),(0,n.kt)("h2",{id:"analysis-statistics-SimpleRegression-predict"},"function predict"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"num predict(lrel[num,num] values, num x) throws IllegalArgument"))),(0,n.kt)("h4",{id:"synopsis-15"},"Synopsis"),(0,n.kt)("p",null,"Predict a value."),(0,n.kt)("h4",{id:"description-15"},"Description"),(0,n.kt)("p",null,'Returns the "predicted" ',(0,n.kt)("inlineCode",{parentName:"p"},"y")," value associated with the supplied ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," value, based on regression model derived from the provided data values:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"predict(x) = intercept + slope * x")))}c.isMDXComponent=!0}}]);