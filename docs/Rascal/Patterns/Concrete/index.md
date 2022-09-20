---
title: Concrete Patterns
keywords:
  - "("
  - ")"
  - "`"
  - "<"
  - ">"

---

#### Synopsis

Concrete patterns.

#### Syntax

```rascal
Concrete pattern with expected symbol type: (_Symbol_) ` Token<sub>1</sub> Token<sub>2</sub> ... Token~n~ `
```
```rascal
Typed variable inside a concrete pattern: <_Type_ _Var_>
```

#### Types

#### Function

#### Description

A concrete pattern is a pattern for matching a [Library:module:Parse tree](/Library/ParseTree). The notation of a concrete pattern is the *object language* itself, the language that the parse tree describes. 
In other words, you can use a code example to match parsed code using a concrete pattern. These concrete code examples can contain [Variable](/Rascal/Patterns/Variable)s like the other [Patterns](/Rascal/Patterns).

The mechanism of concete patterns gives a good notation for matching complex structures such as a [Library:module:Parse tree](/Library/ParseTree), and it works in a simple manner:
   
   * the input code is parsed using a parser generated from a [Syntax Definition](/Rascal/Declarations/SyntaxDefinition); this generates parse trees.
   * the pattern example code is parsed using the *same* parser; this generates parse trees with [Variable](/Rascal/Patterns/Variable)s.
   * the parse tree with the [Variable](/Rascal/Patterns/Variable)s is matches against the parse tree of the input code, similarly to the way [Node](/Rascal/Patterns/Node) work.     
 
So, you could say that [Concrete](/Rascal/Patterns/Concrete) are a short notation for otherwise highly complex [Node](/Rascal/Patterns/Node) on [Library:module:Parse tree](/Library/ParseTree).  Note that the [Variable declaration](/Rascal/Patterns/VariableDeclaration)s in a concrete pattern can
only occur in the pattern at the location where the code for a full non-terminal of the [Syntax Definition](/Rascal/Declarations/SyntaxDefinition) would be. The structure of a concrete pattern follows the structure of the 
grammar in the [Syntax definition](/Rascal/Declarations/SyntaxDefinition) and the types of the [Variable](/Rascal/Patterns/Variable)s are the syntax non-terminals of the [Syntax Definition](/Rascal/Declarations/SyntaxDefinition).  

Inside concrete syntax patterns, layout is ignored while pattern matching. So parse trees which have different whitespace and comments but are otherwise the same will match anyway.

#### Examples

Examples (in a context where an appropriate concrete syntax has been defined):

*  Quoted syntax pattern with two pattern variable declarations:

```rascal-shell
rascal>import ParseTree;
ok
rascal>syntax Id = [a-z]+;
ok
rascal>syntax Num = [0-9]+;
ok
rascal>syntax Exp = left Exp "*" Exp > Exp "+" Exp |  Id | Num;
ok
rascal>layout WS = [\ \n\r\t]*;
ok
rascal>visit (parse(#Exp, "x + x")) {
>>>>>>>   case (Exp) `<Id a> + <Id b>` => (Exp) `2 * <Id a>` when a == b
>>>>>>>}
Exp: (Exp) `x + x`
```
Some observations about this example:

** Notice how the non-terminals `Exp` and `Id` from the [Syntax Definition](/Rascal/Declarations/SyntaxDefinition) become types for the pattern.

** When this example pattern actually matches the variable `a` is bound and can be used again like any other [Variable](/Rascal/Patterns/Variable). 


A full example of concrete patterns can be found in [WithLayout](/Recipes/Languages/Exp/Concrete/WithLayout).

#### Benefits

