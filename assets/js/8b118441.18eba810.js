"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[91883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,c=m["".concat(o,".").concat(d)]||m[d]||v[d]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),l=(n(67294),n(3905));const i={title:"Eval"},r=void 0,s={unversionedId:"Recipes/Languages/Lisra/Eval/index",id:"Recipes/Languages/Lisra/Eval/index",title:"Eval",description:"Synopsis",source:"@site/docs/Recipes/Languages/Lisra/Eval/index.md",sourceDirName:"Recipes/Languages/Lisra/Eval",slug:"/Recipes/Languages/Lisra/Eval/",permalink:"/docs/Recipes/Languages/Lisra/Eval/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Recipes/Languages/Lisra/Eval/index.md",tags:[],version:"current",frontMatter:{title:"Eval"},sidebar:"tutorialSidebar",previous:{title:"Lisra",permalink:"/docs/Recipes/Languages/Lisra/"},next:{title:"Parse",permalink:"/docs/Recipes/Languages/Lisra/Parse/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:p};function v(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"A Lisp interpreter."),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"Here is the core of our Lisp interpreter. Its basic functionality is to take"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("inlineCode",{parentName:"li"},"Lval")," and an Environment (both defined in ",(0,l.kt)("a",{parentName:"li",href:"../../../../Recipes/Languages/Lisra/Runtime"},"Runtime"),")."),(0,l.kt)("li",{parentName:"ul"},"Distinguish the various forms an ",(0,l.kt)("inlineCode",{parentName:"li"},"Lval")," can have and compute the\neffect of evaluating it."),(0,l.kt)("li",{parentName:"ul"},"Return a ",(0,l.kt)("inlineCode",{parentName:"li"},"Result")," that captures the value just computed and possibleside-effects\non the environment.")),(0,l.kt)("p",null,"Rascal provides pattern-directed dispatch: a function with the same name\ncan have complete patterns as arguments. When called, a pattern match determines which\nvariant of the function will be called. This is used extensively in the definitions below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Lisra::Eval\n\nimport Prelude;\nimport demo::lang::Lisra::Parse;\nimport demo::lang::Lisra::Runtime;\n\nLval eval(Lval x) = eval(x, [()]).val;\n\n// Evaluate an Lval in a given environment and return a Result.\n\nResult eval(str exp) = eval(parse(exp),  [()]);\n\nResult eval(Integer(int x), Env e) = <Integer(x), e>; // <1>\n\nResult eval(var:Atom(str name), Env e) { // <2>\n  n = find(var, e);\n  return <(n < 0) ? var : e[n][var], e>;\n}\n\nResult eval(List([Atom("quote"), *Lval exps]), Env e) = // <3>\n  <size(exps) == 1 ? exps[0] : List(exps), e>;\n\nResult eval(List([Atom("set!"), var, exp]), Env e) { // <4>\n  val = eval(exp, e).val;\n  n = find(var, e);\n  if(n < 0) e[0][var] = val; else e[n][var] = val;\n  return <val, e>;\n}\n                                                            \nResult eval(List([Atom("if"), Lval tst, Lval conseq, Lval alt]), Env e) = // <5>\n  eval(tst, e).val != FALSE ? eval(conseq, e) : eval(alt, e);\n       \n                                                           \nResult eval(List([Atom("begin"), *Lval exps]) , Env e) { // <6>\n  val = FALSE;\n  for(Lval exp <- exps){\n      <val, e> = eval(exp, e);\n  }\n  return <val, e>;\n}\n                                                           \nResult eval(List([Atom("define"), var, exp]), Env e){ // <7>\n   e[0][var] = eval(exp, e).val;\n   return <FALSE, e>;\n}\n                                                            \nResult eval(List([Atom("lambda"), List(list[Lval] vars), exp]), Env defEnv) = // <8>\n  <Closure(Result(list[Lval] args, Env callEnv) { \n                 return eval(exp, makeEnv(vars, args, tail(callEnv, size(defEnv))));\n           }),\n   defEnv>;\n\ndefault Result eval(List([ *Lval exps ]), Env e) { // <9>\n  if(isEmpty(exps))\n     return <List([]), e>;\n  vals = [ eval(exp, e).val | exp <- exps ];\n  return apply(head(vals), tail(vals), e);\n}\n\n//default Result eval(Lval exp, Env e) = <exp, e>;\n\n                                                            \n// Apply an Lval to a list of arguments and return a Result\nResult apply(Closure(Result(list[Lval] args, Env env) fn), list[Lval] args, Env e) { // <10>\n  return <fn(args, e).val, e>;\n}\n\n// <11>\n\nResult apply(Atom("+"),      [Integer(x), Integer(y)],      Env e) = <Integer(x + y), e>;\nResult apply(Atom("-"),      [Integer(x), Integer(y)],      Env e) = <Integer(x - y), e>;\nResult apply(Atom("*"),      [Integer(x), Integer(y)],      Env e) = <Integer(x * y), e>;\nResult apply(Atom("\\<"),     [Lval x, Lval y],              Env e) = <x < y ? TRUE : FALSE, e>;\nResult apply(Atom("\\>"),     [Lval x, Lval y],              Env e) = <x >= y ? TRUE : FALSE, e>;\nResult apply(Atom("equal?"), [Lval x, Lval y],              Env e) = <x == y ? TRUE : FALSE, e>;\nResult apply(Atom("null?"),  [List(list[Lval] x)],          Env e) = <isEmpty(x) ? TRUE : FALSE, e>;\nResult apply(Atom("cons"),   [Lval x, List(list[Lval] y)],  Env e) = <List([x, *y]), e>;\nResult apply(Atom("append"), [List(list[Lval] x), Lval y],  Env e) = <List([*x, y]), e>;\nResult apply(Atom("car"),    [List(list[Lval] x)],          Env e) = <head(x), e>;\nResult apply(Atom("cdr"),    [List(list[Lval] x)],          Env e) = <List(tail(x)), e>;\nResult apply(Atom("list"),   list[Lval] x,                  Env e) = <List(x), e>;\n\ndefault Result apply(Lval a,     list[Lval] b, Env e) { // <12>\n  println("Cannot apply <a> to <b> using <e>");\n  return <FALSE, e>;\n}\n// end::module[]\n\n')),(0,l.kt)("p",null,"We now explain the different cases in more detail:"),(0,l.kt)("p",null,"<1> An integer constant evaluates to itself. Note how ",(0,l.kt)("inlineCode",{parentName:"p"},"Integer(int x)")," is used as first\nargument of this ",(0,l.kt)("inlineCode",{parentName:"p"},"eval")," function. It is a pattern that describes that the constructor ",(0,l.kt)("inlineCode",{parentName:"p"},"Integer"),"\nwith an ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," argument ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is to be matched.\n<2> An atom evaluates to the value to which it is bound or to itself. ",(0,l.kt)("inlineCode",{parentName:"p"},"find")," (see ","[Runtime]",") is used\nto search for the atom in question. The first argument is ",(0,l.kt)("inlineCode",{parentName:"p"},"var:Atom(str name)"),", a pattern that matches\nan ",(0,l.kt)("inlineCode",{parentName:"p"},"Atom"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"var:")," prefix binds the complete atom to a variable ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," to be used in the body of the function.\n<3> A quoted list evaluates to itself. The pattern ",(0,l.kt)("inlineCode",{parentName:"p"},'List([Atom("quote"), exp*])')," matches a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," constructor\nwhose first element is ",(0,l.kt)("inlineCode",{parentName:"p"},'Atom("quote")'),". ",(0,l.kt)("inlineCode",{parentName:"p"},"exp*")," means that the remaining list elements are assignment to ",(0,l.kt)("inlineCode",{parentName:"p"},"exp"),".\nThere are two cases: if the argument list has size 1, its first element is used, otherwise a list with all elements of ",(0,l.kt)("inlineCode",{parentName:"p"},"exp"),"\nvare returned. This ensures that ",(0,l.kt)("inlineCode",{parentName:"p"},'List([Atom("quote"), Integer(17)])')," evaluates to  ",(0,l.kt)("inlineCode",{parentName:"p"},"Integer(17)")," and not to ",(0,l.kt)("inlineCode",{parentName:"p"},"List([ Integer(17)]"),".\n<4> Evaluates a ",(0,l.kt)("inlineCode",{parentName:"p"},"set!")," expression that assigns the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"exp")," to variable ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"."),(0,l.kt)("p",null,"<5> Evaluates the ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," expression. The test ",(0,l.kt)("inlineCode",{parentName:"p"},"tst")," is evaluated and is not false, the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"conseq")," is returned and otherwise\nthat of ",(0,l.kt)("inlineCode",{parentName:"p"},"alt"),"."),(0,l.kt)("p",null,"<6> Evaluates a ",(0,l.kt)("inlineCode",{parentName:"p"},"block")," expression. The list of expressions ",(0,l.kt)("inlineCode",{parentName:"p"},"exps")," is evaluated one by one. Observe that in the for loop\n",(0,l.kt)("inlineCode",{parentName:"p"},"<val, e> = eval(exp, e);")," captures both the value and the environment that results from executing one expression. That new environment is\nis used to evaluate the next expression(s) in the list. The value of the last expression and a possible modied environment are returned."),(0,l.kt)("p",null,"<7> Evaluate a ",(0,l.kt)("inlineCode",{parentName:"p"},"define")," expression that binds the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"exp")," to variable ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),".\nThe value of the expression is bound ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," in the local scope."),(0,l.kt)("p",null,"<8> Evaluate a lambda expression. Essentially we return a ",(0,l.kt)("inlineCode",{parentName:"p"},"Closure")," value that contains the expression in the lambda expression\nproperly wrapped to do variable binding and environment management.\nA Closure contains a function that return type ",(0,l.kt)("inlineCode",{parentName:"p"},"Results")," and has two arguments:\n",(0,l.kt)("inlineCode",{parentName:"p"},"list[lval] args")," the actual parameter values when the closure is applied, and\n",(0,l.kt)("inlineCode",{parentName:"p"},"Env e")," the environment at the site of the call.\nIn the body of the closure we construct a new environment ",(0,l.kt)("inlineCode",{parentName:"p"},"makeEnv(vars, args, tail(callEnv, size(defEnv)))")," that binds the variables\nin the lambda expression to the actual parameter values. What is special here is that we shorten the calling environment to the\nsame length as the defining environment. This implements ",(0,l.kt)("em",{parentName:"p"},"lexical scoping")," and avoids that names are visible in the called\nfunction that were not visible when the function was defined. Remember that Rascal values are immutable, meaning that after a value was\ncreated it cannot be changed. Using the above trick, we ensure that the called function has access to the most recent version of\nits environment."),(0,l.kt)("p",null,"<9> Evaluates an arbitrary list. As a special case, the empty list is returned as false.\nOtherwise, all elements are evaluated and the auxiliary function ",(0,l.kt)("inlineCode",{parentName:"p"}," apply")," is used to apply the value of the first element to the values of",(0,l.kt)("br",{parentName:"p"}),"\n","the remaining elements."),(0,l.kt)("p",null,"<10> Apply an ",(0,l.kt)("inlineCode",{parentName:"p"},"Lval")," to a list of arguments and return a ",(0,l.kt)("inlineCode",{parentName:"p"},"Result"),". The first case handles a ",(0,l.kt)("inlineCode",{parentName:"p"},"Closure"),"; it amounts\nto calling the function in the closure (environment handling and parameter binding are done in the closure as discussed above."),(0,l.kt)("p",null,"<11> Definition of all built-in functions."),(0,l.kt)("p",null,"<12> A default function that prints an error message when an undefined function is called."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Lisra::Runtime;\nok\nrascal>import demo::lang::Lisra::Eval;\nok\nrascal>eval(Integer(5));\nLval: Integer(5)\nrascal>eval(Atom("x"));\nLval: Atom("x")\nrascal>eval(List([Atom("+"), Integer(5), Integer(7)]));\nLval: Integer(12)\n')),(0,l.kt)("h4",{id:"benefits"},"Benefits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A very modular, rule-based, type safe Lisp interpreter.")),(0,l.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is no pleasure to type in ",(0,l.kt)("inlineCode",{parentName:"li"},"Lval"),"s directly, that is why a parser is needed, see ",(0,l.kt)("a",{parentName:"li",href:"../../../../Recipes/Languages/Lisra/Parse"},"Parse"),".")))}v.isMDXComponent=!0}}]);