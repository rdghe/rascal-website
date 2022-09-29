"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[53629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,l=new Array(s);l[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const s={title:"module analysis::statistics::Inference"},l=void 0,r={unversionedId:"Library/analysis/statistics/Inference",id:"Library/analysis/statistics/Inference",title:"module analysis::statistics::Inference",description:"Usage",source:"@site/docs/Library/analysis/statistics/Inference.md",sourceDirName:"Library/analysis/statistics",slug:"/Library/analysis/statistics/Inference",permalink:"/docs/Library/analysis/statistics/Inference",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/statistics/Inference.md",tags:[],version:"current",frontMatter:{title:"module analysis::statistics::Inference"},sidebar:"tutorialSidebar",previous:{title:"module analysis::statistics::Frequency",permalink:"/docs/Library/analysis/statistics/Frequency"},next:{title:"module analysis::statistics::SimpleRegression",permalink:"/docs/Library/analysis/statistics/SimpleRegression"}},o={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function chiSquare",id:"analysis-statistics-Inference-chiSquare",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Examples",id:"examples",level:4},{value:"function chiSquareTest",id:"analysis-statistics-Inference-chiSquareTest",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function tTest",id:"analysis-statistics-Inference-tTest",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Examples",id:"examples-1",level:4},{value:"function anovaFValue",id:"analysis-statistics-Inference-anovaFValue",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-4",level:4},{value:"function anovaPValue",id:"analysis-statistics-Inference-anovaPValue",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-5",level:4},{value:"function anovaTest",id:"analysis-statistics-Inference-anovaTest",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Description",id:"description-6",level:4},{value:"function gini",id:"analysis-statistics-Inference-gini",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Examples",id:"examples-2",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::statistics::Inference;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Statistical inference methods."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"The following functions are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-anovaFValue"},"anovaFValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-anovaPValue"},"anovaPValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-anovaTest"},"anovaTest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-chiSquare"},"chiSquare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-chiSquareTest"},"chiSquareTest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-gini"},"gini")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-tTest"},"tTest"))),(0,i.kt)("h2",{id:"analysis-statistics-Inference-chiSquare"},"function chiSquare"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num chiSquare(lrel[num expected, int observed] values)"))),(0,i.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,i.kt)("p",null,"Chi-square coefficient of data values."),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Compute the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Chi-square_statistic"},"ChiSquare statistic")," comparing observed and expected frequency counts."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Consider an example from the web page mentioned above.\nTo test the hypothesis that a random sample of 100 people has been drawn from a population in which men and women are equal in frequency, the observed number of men and women would be compared to the theoretical frequencies of 50 men and 50 women. If there were 44 men in the sample and 56 women, then we have the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Inference;\nok\nrascal>chiSquare([<50, 44>, <50, 56>])\nnum: 1.44\n")),(0,i.kt)("h2",{id:"analysis-statistics-Inference-chiSquareTest"},"function chiSquareTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num chiSquareTest(lrel[num expected, int observed] values)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool chiSquareTest(lrel[num expected, int observed] values, real alpha)"))),(0,i.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,i.kt)("p",null,"Chi-square test on data values."),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Perform a ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test"},"chi-square test")," comparing\nexpected and observed frequency counts. There are two forms of this test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Returns the ",(0,i.kt)("em",{parentName:"p"},"observed significance level"),", or p-value, associated with a Chi-square goodness of fit test\ncomparing observed frequency counts to expected counts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Performs a Chi-square goodness of fit test evaluating the null hypothesis that the observed counts conform to the frequency distribution described by the expected counts, with significance level ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," (0 < ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," < 0.5). Returns true iff the null hypothesis\ncan be rejected with confidence 1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),"."))),(0,i.kt)("h2",{id:"analysis-statistics-Inference-tTest"},"function tTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num tTest(list[num] sample1, list[num] sample2)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool tTest(list[num] sample1, list[num] sample2, num alpha)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool tTest(num mu, list[num] sample, num alpha)"))),(0,i.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,i.kt)("p",null,"T-test on sample data."),(0,i.kt)("h4",{id:"description-3"},"Description"),(0,i.kt)("p",null,"Perform ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Student's_t-test"},"student's t-test"),"\nThe test is provided in three variants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns the ",(0,i.kt)("em",{parentName:"li"},"observed significance level"),", or ",(0,i.kt)("em",{parentName:"li"},"p-value"),", associated with a two-sample, two-tailed t-test comparing the means of the input samples. The number returned is the smallest significance level at which one can reject the null hypothesis that the two means are equal in favor of the two-sided alternative that they are different. For a one-sided test, divide the returned value by 2. ")),(0,i.kt)("p",null,"The t-statistic used is ",(0,i.kt)("inlineCode",{parentName:"p"},"t = (m1 - m2) / sqrt(var1/n1 + var2/n2)"),"\nwhere "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"  ",(0,i.kt)("inlineCode",{parentName:"strong"},"n1")," is the size of the first sample\n"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"n2")," is the size of the second sample;\n",(0,i.kt)("strong",{parentName:"p"},"  ",(0,i.kt)("inlineCode",{parentName:"strong"},"m1")," is the mean of the first sample;\n"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"m2")," is the mean of the second sample;\n",(0,i.kt)("strong",{parentName:"p"},"  ",(0,i.kt)("inlineCode",{parentName:"strong"},"var1")," is the variance of the first sample;\n"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"var2")," is the variance of the second sample."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Performs a two-sided t-test evaluating the null hypothesis that ",(0,i.kt)("inlineCode",{parentName:"p"},"sample1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sample2")," are drawn from populations with the same mean, with significance level ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),". This test does not assume that the subpopulation variances are equal.\nReturns true iff the null hypothesis that the means are equal can be rejected with confidence 1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),". To perform a 1-sided test, use ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," / 2.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Performs a two-sided t-test evaluating the null hypothesis that the mean of the population from which sample is drawn equals ",(0,i.kt)("inlineCode",{parentName:"p"},"mu"),".\nReturns true iff the null hypothesis can be rejected with confidence 1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),". To perform a 1-sided test, use ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," * 2."))),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,"We use the data from the following ",(0,i.kt)("a",{parentName:"p",href:"http://web.mst.edu/~psyworld/texample.htm#1%5Bexample%5D"},"http://web.mst.edu/~psyworld/texample.htm#1[example]")," to illustrate the t-test.\nFirst, we compute the t-statistic using the formula given above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import util::Math;\nok\nrascal>import analysis::statistics::Descriptive;\nok\nrascal>import List;\nok\nrascal>s1 = [5,7,5,3,5,3,3,9];\nlist[int]: [5,7,5,3,5,3,3,9]\nrascal>s2 = [8,1,4,6,6,4,1,2];\nlist[int]: [8,1,4,6,6,4,1,2]\nrascal>(mean(s1) - mean(s2))/sqrt(variance(s1)/size(s1) + variance(s2)/size(s2));\nreal: 0.84731854581\n")),(0,i.kt)("p",null,"This is the same result as obtained in the cited example.\nWe can also compute it directly using the ",(0,i.kt)("inlineCode",{parentName:"p"},"tTest")," functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>import analysis::statistics::Inference;\nok\nrascal>tTest(s1, s2);\nnum: 0.4115203997374087\n")),(0,i.kt)("p",null,"Observe that this is a smaller value than comes out directly of the formula.\nRecall that: ",(0,i.kt)("em",{parentName:"p"},"The number returned is the smallest significance level at which one can reject the null hypothesis that the two means are equal in favor of the two-sided alternative that they are different."),"\nFinally, we perform the test around the significance level we just obtained:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>tTest(s1,s2,0.40);\nbool: false\nrascal>tTest(s1,s2,0.50);\nbool: true\n")),(0,i.kt)("h2",{id:"analysis-statistics-Inference-anovaFValue"},"function anovaFValue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num anovaFValue(list[list[num]] categoryData)"))),(0,i.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,i.kt)("p",null,"Analysis of Variance (ANOVA) f-value."),(0,i.kt)("h4",{id:"description-4"},"Description"),(0,i.kt)("p",null,"Perform ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Analysis_of_variance"},"Analysis of Variance test"),"\nalso described ",(0,i.kt)("a",{parentName:"p",href:"http://www.statsoft.com/textbook/anova-manova/"},"here")),(0,i.kt)("p",null,"Compute the F statistic -- also known as ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/F-test"},"F-test")," -- using the definitional formula\n",(0,i.kt)("inlineCode",{parentName:"p"},"F = msbg/mswg"),"\nwhere"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"msbg")," = between group mean square."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mswg")," = within group mean square.")),(0,i.kt)("p",null,"are as defined ",(0,i.kt)("a",{parentName:"p",href:"http://faculty.vassar.edu/lowry/ch13pt1.html"},"here")),(0,i.kt)("h2",{id:"analysis-statistics-Inference-anovaPValue"},"function anovaPValue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num anovaPValue(list[list[num]] categoryData)"))),(0,i.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,i.kt)("p",null,"Analysis of Variance (ANOVA) p-value."),(0,i.kt)("h4",{id:"description-5"},"Description"),(0,i.kt)("p",null,"Perform ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Analysis_of_variance"},"Analysis of Variance test"),"\nalso described ",(0,i.kt)("a",{parentName:"p",href:"http://www.statsoft.com/textbook/anova-manova/"},"here")),(0,i.kt)("p",null,"Computes the exact p-value using the formula ",(0,i.kt)("inlineCode",{parentName:"p"},"p = 1 - cumulativeProbability(F)"),"\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-anovaFValue"},"anova f value"),"."),(0,i.kt)("h2",{id:"analysis-statistics-Inference-anovaTest"},"function anovaTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool anovaTest(list[list[num]] categoryData, num alpha)"))),(0,i.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,i.kt)("p",null,"Analysis of Variance (ANOVA) test."),(0,i.kt)("h4",{id:"description-6"},"Description"),(0,i.kt)("p",null,"Perform ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Analysis_of_variance"},"Analysis of Variance"),"\nalso described ",(0,i.kt)("a",{parentName:"p",href:"http://www.statsoft.com/textbook/anova-manova/"},"here")),(0,i.kt)("p",null,"Returns true iff the estimated p-value is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," (0 < ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," <= 0.5)."),(0,i.kt)("p",null,"The exact p-value is computed using the formula ",(0,i.kt)("inlineCode",{parentName:"p"},"p = 1 - cumulativeProbability(F)"),"\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Library/analysis/statistics/Inference#analysis::statistics::Inference-anovaFValue"},"anova f value"),"."),(0,i.kt)("h2",{id:"analysis-statistics-Inference-gini"},"function gini"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"real gini(lrel[num observation,int frequency] values)"))),(0,i.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,i.kt)("p",null,"Gini coefficient."),(0,i.kt)("h4",{id:"description-7"},"Description"),(0,i.kt)("p",null,"Computes the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Gini_coefficient"},"Gini Coefficient"),"\nthat measures the inequality among values in a frequency distribution."),(0,i.kt)("p",null,"The Gini coefficient is computed using Deaton's formula and returns a\nvalue between 0 (completely equal distribution) and\n1 (completely unequal distribution)."),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import analysis::statistics::Inference;\nok\n")),(0,i.kt)("p",null,"A completely equal distribution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>gini([<10000, 1>, <10000, 1>, <10000, 1>]);\nreal: 0.0\n")),(0,i.kt)("p",null,"A rather unequal distribution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>gini([<998000, 1>, <20000, 3>, <117500, 1>, <70000, 2>, <23500, 5>, <45200,1>]);\nreal: 0.8530758129256304\n")))}u.isMDXComponent=!0}}]);