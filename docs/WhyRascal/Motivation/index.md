---
title: Motivation
sidebar_position: 0
---

#### Synopsis

The distinguishing features of Rascal and how they solve real problems.

#### Description

_Meta-programs_ are programs that analyze, transform or generate other programs. Ordinary programs work on data; meta-programs work on programs. 

The _range of programs_ to which meta-programming can be applied is large: from programs in standard languages like C and Java to domain-specific languages for describing high-level system models or applications in specialized areas like gaming or finance. In some cases, even test results or performance data are used as input for meta-programs.

The _range of kinds of meta programs_ that can be applied is also large. There are simple meta programs that generate boilerplate code from a list of items. There are complex meta programs that reverse engineer and statically analyse a big software system before visualizing the results. When writing all these kinds of meta programs one needs similar operations and similar data-types. 

The _point of Rascal_ is to provide an easy-to-use and easy-to-combine set of primitives to build and manipulate program representations. The point is _not_ to be or provide a unified representation of programs to let generic algorithms operate on. In meta programming the devil is often in the details. Rascal makes sure to not a priori abstract from the important details programming language syntax and semantics. Instead we make sure it is easy to address every important detail.

_Rascal is a domain specific programming language_. We emphasize programming here because Rascal is intended as an engineering tool for programmers that need to construct meta programs. Rascal programs allow running, inspecting, debugging, tracing, profiling, etc. just as normal programs do. The skills of any good programmer are enough to easily write good Rascal programs.

The unique selling point of Rascal is _linguistic integration_ of all the tools you need to make meta-programming effective:
* higher-order type-parameterized functions and algebraic data-types
* immutable (builtin) data collections: lists, sets, maps, relations, trees.
* extensive pattern matching and subsitution primitives for every data-type.
* source locations for provenance of code artefacts and other data sources.
* structured programming with exceptions: `if`, `for`, `while`, `break`, `continue`, `throw`, `try-catch`.
* structured fixed-point programming: `solve`
* lexically scoped backtracking for data generators and non-unitary pattern matching.
* syntax definition and parser generation
* abstract syntax definition and reading in ASTs from external sources
* generic recursive traversal primitives
* relational calculus, list, set and map comprehensions, and reducers, including transitive closures and comprehensions for lists, sets, relations, list relations and maps.
* modular extensibility of syntax, data and functions (!) (no expression problem)

#### Examples

Typical applications of Rascal are:

*  Empirical methods in Software Engineering research: metrics, statistics, impact analysis
*  Design and Implementing of _domain-specific languages_ (DSLs);
*  Design and Implementing of Programming Languages;
*  Writing compilers.
*  Construction of Software Refactorings, ad-hoc or reusable;
*  Analyzing Legacy Software: Reverse-engineering
*  Renovating Legacy Software: Re-engineering
*  Software Verification
*  Model Driven Engineering: model-to-code, code-to-model, model verification, test code generation
*  Debugging

All these cases involve a form of meta-programming: software programs (in a wide sense) are the objects-of-interest 
that are being analyzed, transformed or generated. More often than not, other sources of information (other than source code) are applied in metaprogramming.
Rascal is very generic: it can be applied in domains ranging from compiler construction and implementing domain-specific languages to constraint solving and software renovation.

Since representation of information is central to the approach, Rascal provides a rich set of built-in data types. 
To support extraction and analysis, parsing and advanced pattern matching are provided. 
High-level control structures make analysis and synthesis of complex data structures simple.

#### Benefits

*  __Familiar syntax__ in a _what-you-see is-what-you-get_ style is used even for sophisticated concepts 
   and this makes the language easy to learn and easy to use.
*  __Sophisticated built-in data types__ provide standard solutions for many meta-programming problems.
*  __Safety__ is achieved by finding most errors before the program is executed and by making common errors
   like missing initializations or invalid pointers impossible. 
*  __Local type inference__ makes local variable declarations redundant.
*  __Pattern matching__ can be used to analyze all complex data structures.
*  __Syntax definitions__ make it possible to define new and existing languages and to write tools for them.
*  __Visiting__ makes it easy to traverse data structures and to extract information from them or to synthesize results.
*  __Templates__ enable easy code generation.
*  __Functions as values__ permit programming styles with high re-use.
*  __Generic types__ allow writing functions that are applicable for many different types.
*  __Eclipse integration__ makes Rascal programming a breeze. All familiar tools are at your fingertips.


