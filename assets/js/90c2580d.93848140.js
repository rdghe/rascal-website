"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[19841],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),s=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=s(t.components);return l.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=s(n),k=a,N=p["".concat(d,".").concat(k)]||p[k]||u[k]||o;return n?l.createElement(N,r(r({ref:e},m),{},{components:n})):l.createElement(N,r({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44010:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(83117),a=(n(67294),n(3905));const o={title:"module lang::dot::Dot"},r=void 0,i={unversionedId:"Library/lang/dot/Dot",id:"Library/lang/dot/Dot",title:"module lang::dot::Dot",description:"Usage",source:"@site/docs/Library/lang/dot/Dot.md",sourceDirName:"Library/lang/dot",slug:"/Library/lang/dot/",permalink:"/docs/Library/lang/dot/",draft:!1,editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/docs/docs/Library/lang/dot/Dot.md",tags:[],version:"current",frontMatter:{title:"module lang::dot::Dot"},sidebar:"tutorialSidebar",previous:{title:"module lang::dimacs::\\syntax::Dimacs",permalink:"/docs/Library/lang/dimacs/syntax/Dimacs"},next:{title:"lang::dot",permalink:"/docs/Library/lang/dot/"}},d={},s=[{value:"Usage",id:"usage",level:4},{value:"alias Id",id:"lang-dot-Dot-Id",level:2},{value:"data DotGraph",id:"lang-dot-Dot-DotGraph",level:2},{value:"alias Stms",id:"lang-dot-Dot-Stms",level:2},{value:"alias NodeId",id:"lang-dot-Dot-NodeId",level:2},{value:"alias PortId",id:"lang-dot-Dot-PortId",level:2},{value:"data CompassPt",id:"lang-dot-Dot-CompassPt",level:2},{value:"data Stm",id:"lang-dot-Dot-Stm",level:2},{value:"alias Attr",id:"lang-dot-Dot-Attr",level:2},{value:"alias Attrs",id:"lang-dot-Dot-Attrs",level:2},{value:"alias Outline",id:"lang-dot-Dot-Outline",level:2},{value:"alias Dotline",id:"lang-dot-Dot-Dotline",level:2},{value:"function export",id:"lang-dot-Dot-export",level:2},{value:"function hasOutline",id:"lang-dot-Dot-hasOutline",level:2},{value:"function setCurrentOutline",id:"lang-dot-Dot-setCurrentOutline",level:2},{value:"function toString",id:"lang-dot-Dot-toString",level:2},{value:"function getChildren",id:"lang-dot-Dot-getChildren",level:2},{value:"function reLabel",id:"lang-dot-Dot-reLabel",level:2},{value:"function oAttrs",id:"lang-dot-Dot-oAttrs",level:2},{value:"function oCompassPt",id:"lang-dot-Dot-oCompassPt",level:2},{value:"function oPortId",id:"lang-dot-Dot-oPortId",level:2},{value:"function oNodeId",id:"lang-dot-Dot-oNodeId",level:2},{value:"function oStms",id:"lang-dot-Dot-oStms",level:2},{value:"function oStm",id:"lang-dot-Dot-oStm",level:2}],m={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::dot::Dot;")),(0,a.kt)("h2",{id:"lang-dot-Dot-Id"},"alias Id"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str"))),(0,a.kt)("h2",{id:"lang-dot-Dot-DotGraph"},"data DotGraph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data DotGraph  \n     = graph(Id id, Stms stmts)\n     | digraph(Id id, Stms stmts)\n     ;\n")),(0,a.kt)("p",null,"Abstract Data Type of Dot language"),(0,a.kt)("h2",{id:"lang-dot-Dot-Stms"},"alias Stms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list[Stm]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-NodeId"},"alias NodeId"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[Id, PortId]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-PortId"},"alias PortId"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[Id, CompassPt]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-CompassPt"},"data CompassPt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data CompassPt  \n     = N()\n     | NE()\n     | E()\n     | SE()\n     | S()\n     | SW()\n     | W()\n     | NW()\n     | C()\n     | _()\n     ;\n")),(0,a.kt)("h2",{id:"lang-dot-Dot-Stm"},"data Stm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Stm  \n     = N(Id id, Attrs attrs)\n     | N(Id id)\n     | N(NodeId nid, Attrs attrs)\n     | N(NodeId nid)\n     | E(Id from, Id to, Attrs attrs)\n     | E(Id from, Id to)\n     | E(NodeId nfrom, Id to, Attrs attrs)\n     | E(NodeId nfrom, Id to)\n     | E(Stm sfrom, Id to, Attrs attrs)\n     | E(Stm sfrom, Id to)\n     | E(Id from, NodeId nto, Attrs attrs)\n     | E(Id from, NodeId nto)\n     | E(NodeId nfrom, NodeId nto, Attrs attrs)\n     | E(NodeId nfrom, NodeId nto)\n     | E(Stm sfrom, NodeId nto, Attrs attrs)\n     | E(Stm sfrom, NodeId nto)\n     | E(Id from, Stm sto, Attrs attrs)\n     | E(Id from, Stm sto)\n     | E(NodeId nfrom, Stm sto, Attrs attrs)\n     | E(NodeId nfrom, Stm sto)\n     | E(Stm sfrom, Stm sto, Attrs attrs)\n     | E(Stm sfrom, Stm sto)\n     | S(Id id, Stms stms)\n     | S(Stms stms)\n     | A(Id prop, Id val)\n     | GRAPH(Attrs attrs)\n     | NODE(Attrs attrs)\n     | EDGE(Attrs attrs)\n     ;\n")),(0,a.kt)("h2",{id:"lang-dot-Dot-Attr"},"alias Attr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[str prop,  Id val]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-Attrs"},"alias Attrs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list[Attr]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-Outline"},"alias Outline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"map[int key, list[str] args]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-Dotline"},"alias Dotline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[DotGraph graph, Outline outline]"))),(0,a.kt)("h2",{id:"lang-dot-Dot-export"},"function export"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DotGraph export(DotGraph g)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dotline export(Dotline g)"))),(0,a.kt)("p",null,"Dummy function call needed to tag initialized global variables of type DotGraph.\nIt is possible to select that variable on the outline menu of the Rascal Editor.\nAn application is for example to display dotgraphs."),(0,a.kt)("h2",{id:"lang-dot-Dot-hasOutline"},"function hasOutline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool hasOutline(Dotline _)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool hasOutline(DotGraph _)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-setCurrentOutline"},"function setCurrentOutline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void setCurrentOutline(Dotline current)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-toString"},"function toString"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str toString(digraph(Id id,Stms stms))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str toString(Dotline g)"))),(0,a.kt)("p",null,"Translates DotGraph to String input for dot"),(0,a.kt)("h2",{id:"lang-dot-Dot-getChildren"},"function getChildren"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list[value] getChildren(value key)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-reLabel"},"function reLabel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str reLabel(str prop, str val)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oAttrs"},"function oAttrs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oAttrs(Attrs attrs)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oCompassPt"},"function oCompassPt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(N())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(NE())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(E())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(SE())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(S())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(SW())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(E())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oCompassPt(NW())")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default str oCompassPt(CompassPt _)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oPortId"},"function oPortId"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oPortId(PortId id)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oNodeId"},"function oNodeId"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oNodeId(NodeId id)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oStms"},"function oStms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStms(Stms stms, str sep)"))),(0,a.kt)("h2",{id:"lang-dot-Dot-oStm"},"function oStm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( N(Id id))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( N(Id id, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Id to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Id to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(NodeId from, Id to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Id to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, Id to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, Id to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, NodeId to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, NodeId to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(NodeId from, NodeId to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, NodeId to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, NodeId to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, NodeId to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Stm to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Stm to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(NodeId from, Stm to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Id from, Stm to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, Stm to))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( E(Stm from, Stm to, Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( S(Stms stms))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( S(Id id, Stms stms))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( A(Id prop, Id val))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( GRAPH(Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( EDGE(Attrs attrs))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str oStm( NODE(Attrs attrs))"))))}u.isMDXComponent=!0}}]);