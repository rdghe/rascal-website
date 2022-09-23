---
title: Variable Declaration
---

#### Synopsis

Declare a variable.

#### Syntax

*  `Type Name = Exp ;`
*  `Type Name;`

#### Types

|`Type`  | `Exp` |
| --- | --- |
| `Type` | `<: Type` |


#### Description

The effect of a variable declaration is to introduce a new variable _Name_ and
to assign the value of expression _Exp_ to _Name_. A mention of _Name_ later on in the same scope
will be replaced by this value, provided that _Name_\'s value has not been changed by an intermediate assignment. 

When a variable is declared, it has as scope the nearest enclosing block, or the module when declared at the module level.

The following rules apply:

*  Double declarations in the same scope are not allowed.

*  The type of _Exp_ should be compatible with _Type_, i.e., it should be a subtype of _Type_.


As a convenience, also declarations without an initialization expression are permitted inside functions (but not at the module level)
 and have the form
```rascal
_Type_ _Name_; 
```
and only introduce the variable _Name_.

Rascal provides local type inference, which allows the implicit declaration of variables that are used locally in functions. The following rules apply:

*  An implicitly declared variable is declared at the level of the current scope, this may the whole function body or a block nested in it.

*  An implicitly declared variable gets as type the type of the first value that is assignment to it.

*  If a variable is implicitly declared in different execution path of a function, all these implicit declarations should result in the same type.

*  All uses of an implicitly declared variable must be compatible with its implicit type.

#### Examples

Two explicit variable declarations:

```rascal-shell
rascal>int max = 100;
int: 100
rascal>min = 0;
int: 0
```
An implicit variable declaration

```rascal-shell
rascal>day = {<"mon", 1>, <"tue", 2>, <"wed",3>, 
>>>>>>>       <"thu", 4>, <"fri", 5>, <"sat",6>, <"sun",7>};
rel[str,int]: {
  <"thu",4>,
  <"tue",2>,
  <"sat",6>,
  <"wed",3>,
  <"fri",5>,
  <"sun",7>,
  <"mon",1>
}
```
Variable declaration and assignment leading to type error

```rascal-shell
rascal>int month = 12;
int: 12
rascal>month ="December";
|prompt:///|(7,10,<1,7>,<1,17>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```

#### Pitfalls

*  Local type inference for variables always uses the smallest possible scope for a variable; this implies that
  a variable introduced in an inner scope is not available outside that scope. Here is how things can go wrong:


```rascal-shell
rascal>if( 4 > 3){ x = "abc"; } else { x = "def";}
str: "abc"
rascal>x;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

