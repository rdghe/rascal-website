---
title: "lang::rascal::grammar::ParserGenerator"
---

#### Usage

`import lang::rascal::grammar::ParserGenerator;`


## alias Items {#lang-rascal-grammar-ParserGenerator-Items}

* `map[Symbol,map[Item item, tuple[str new, int itemId] new]]`

## data Symbol {#lang-rascal-grammar-ParserGenerator-Symbol}

```rascal
data Symbol (int id = 0, str prefix = "")
```

## function getParserMethodName {#lang-rascal-grammar-ParserGenerator-getParserMethodName}

* ``str getParserMethodName(Sym sym)``
* ``str getParserMethodName(label(_,Symbol s))``
* ``str getParserMethodName(conditional(Symbol s, _))``
* ``default str getParserMethodName(Symbol s)``

## function newGenerate {#lang-rascal-grammar-ParserGenerator-newGenerate}

* ``str newGenerate(str package, str name, Grammar gr)``

## function computeDontNests {#lang-rascal-grammar-ParserGenerator-computeDontNests}

* ``rel[int,int] computeDontNests(Items items, Grammar grammar, Grammar uniqueGrammar)``

## function getItemId {#lang-rascal-grammar-ParserGenerator-getItemId}

* ``int getItemId(Symbol s, int pos, prod(label(str l, Symbol _),list[Symbol] _, set[Attr] _))``

## function getType {#lang-rascal-grammar-ParserGenerator-getType}

* ``Symbol getType(Production p)``
* ``Symbol getType(label(str _, Symbol s))``
* ``Symbol getType(conditional(Symbol s, set[Condition] cs))``
* ``default Symbol getType(Symbol s)``

## function generateNewItems {#lang-rascal-grammar-ParserGenerator-generateNewItems}

* ``map[Symbol,map[Item,tuple[str new, int itemId]]] generateNewItems(Grammar g)``

This function generates Java code to allocate a new item for each position in the grammar.
We first collect these in a map, such that we can generate static fields. It's a simple matter of caching
constants to improve run-time efficiency of the generated parser

## function split {#lang-rascal-grammar-ParserGenerator-split}

* ``str split(str x)``

## function isNonterminal {#lang-rascal-grammar-ParserGenerator-isNonterminal}

* ``bool isNonterminal(Symbol s)``

this function selects all symbols for which a parse method should be generated

## function generateParseMethod {#lang-rascal-grammar-ParserGenerator-generateParseMethod}

* ``str generateParseMethod(Items _, Production p)``

## function generateClassConditional {#lang-rascal-grammar-ParserGenerator-generateClassConditional}

* ``str generateClassConditional(set[Symbol] classes)``

## function generateRangeConditional {#lang-rascal-grammar-ParserGenerator-generateRangeConditional}

* ``str generateRangeConditional(CharRange r)``

## function generateSeparatorExpects {#lang-rascal-grammar-ParserGenerator-generateSeparatorExpects}

* ``str generateSeparatorExpects(Grammar grammar, list[Symbol] seps)``

## function generateSequenceExpects {#lang-rascal-grammar-ParserGenerator-generateSequenceExpects}

* ``str generateSequenceExpects(Grammar grammar, list[Symbol] seps)``

## function generateAltExpects {#lang-rascal-grammar-ParserGenerator-generateAltExpects}

* ``str generateAltExpects(Grammar grammar, list[Symbol] seps)``

## function literals2ints {#lang-rascal-grammar-ParserGenerator-literals2ints}

* ``str literals2ints(list[Symbol] chars)``

## function ciliterals2ints {#lang-rascal-grammar-ParserGenerator-ciliterals2ints}

* ``str ciliterals2ints(list[Symbol] chars)``

## function sym2newitem {#lang-rascal-grammar-ParserGenerator-sym2newitem}

* ``tuple[str new, int itemId] sym2newitem(Grammar grammar, Symbol sym, int dot)``

## function generateCharClassArrays {#lang-rascal-grammar-ParserGenerator-generateCharClassArrays}

* ``str generateCharClassArrays(list[CharRange] ranges)``

## function esc {#lang-rascal-grammar-ParserGenerator-esc}

* ``str esc(Symbol s)``
* ``str esc(str s)``

## function escId {#lang-rascal-grammar-ParserGenerator-escId}

* ``str escId(str s)``

## function sym2name {#lang-rascal-grammar-ParserGenerator-sym2name}

* ``str sym2name(Symbol s)``

## function value2id {#lang-rascal-grammar-ParserGenerator-value2id}

* ``str value2id(value v)``

## function uu {#lang-rascal-grammar-ParserGenerator-uu}

* ``str uu(value s)``

## function v2i {#lang-rascal-grammar-ParserGenerator-v2i}

* ``default str v2i(value v)``

## function makeUnique {#lang-rascal-grammar-ParserGenerator-makeUnique}

* ``Grammar makeUnique(Grammar gr)``
