---
title: Abstract
---

#### Synopsis

A version of Exp based on abstract syntax.

#### Description

The [abstract syntax](http://en.wikipedia.org/wiki/Abstract_syntax) for a language is a
data type that is used to represent programs in the language in an _abstract_ form.
Abstract syntax has the following properties:

*  It is "abstract" in the sense that it does not contain textual details such as parentheses,
  layout, and the like.
*  While a language has one grammar (also known as, _concrete syntax_) it may have several abstract syntaxes
  for different purposes: type analysis, code generation, etc.

#### Examples

The abstract syntax for Exp looks like this:

```rascal
// tag::module[]
module demo::lang::Exp::Abstract::Syntax



data Exp = con(int n)          // <1>
         | mul(Exp e1, Exp e2) // <2>
         | add(Exp e1, Exp e2) // <3>
         ;
// end::module[]

```

                
<1> Defines integer constants, e.g., `con(123)`.
<2> Defines multiplication, e.g., `mul(con(2),con(3))`.
<3> Defines addition, e.g., `add(con(2),con(3))`.


Given the abstract syntax for Exp, we can define an interpreter that evaluates
expressions:

```rascal
// tag::module[]
module demo::lang::Exp::Abstract::Eval
import demo::lang::Exp::Abstract::Syntax;

int eval(con(int n)) = n;                            // <1>
int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); // <2>
int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2);
test bool tstEval2() = eval(mul(con(7), con(3))) == 21;
test bool tstEval3() = eval(add(con(7), con(3))) == 10;
test bool tstEval4() = eval(add(con(3), mul(con(4), con(5)))) == 23;

```

           
Here we see Rascal's _pattern-directed invocation_ in action (see [Function Declaration](../../../../Rascal/Declarations/Function)).
The essence is this: in other languages the formal parameters in a function declaration
are just that: formal parameters, i.e., single names that can be used inside the function and
that are bound when the function is called.
In Rascal, however, the formal parameters are actually a _pattern_ and functions
can have arbitrarily complex patterns as (single) formal parameter.
These patterns may bind variables and thus introduce variables that can be used in tthe function body.

The big advantage of pattern-directed invocation is modularity and extensibility:

*  The treatment of the cases in the abstract syntax is decoupled.
*  If the abstract is extended later on with new cases, the functions for the old cases can be reused.


In this example we use this mechanism to define separate functions for each case in the abstract syntax.

<1> Defines the case for evaluating integer constants: they evaluate to themselves.
<2> Defines the case for evaluating multiplication: first evaluate the arguments `e1` and `e2`
    and return the multiplication of their values.
<3> Defines the case for evaluating addition: first evaluate the arguments `e1` and `e2`
    and return the addition of their values.



```rascal-shell
rascal>import demo::lang::Exp::Abstract::Syntax;
ok
rascal>import demo::lang::Exp::Abstract::Eval;
ok
rascal>eval(mul(con(7), con(3)));
int: 21
rascal>eval(add(con(3), mul(con(4), con(5))));
int: 23
```
Entering expressions in abstract syntax form is no fun, and this is where concrete syntax comes to the rescue.


