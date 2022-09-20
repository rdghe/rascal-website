---
title: MultiVariable Pattern
keywords:
  - "*"

---

#### Synopsis

Multi-variable (also known as Splice-variable) in abstract pattern.

#### Syntax

*  `*Var`
*  `*Type Var`

#### Types

#### Function

#### Description

A multi-variable is an abbreviation for a variable declaration pattern.
It can occur in a list pattern or set pattern and can match zero or more list or set elements.
Optionally the *element type* of the multi-variable may be specified.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
Using lists:

```rascal-shell
rascal>if([10, *N, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeds, N == <N>");
   println("Match succeeds, N == <N>");
Match succeeds, N == [20,30,40]
ok
```
the above is equivalent with:

```rascal-shell
rascal>if([10, *int N, 50] := [10, 20, 30, 40, 50])
>>>>>>>   println("Match succeeds, N == <N>");
   println("Match succeeds, N == <N>");
Match succeeds, N == [20,30,40]
ok
```
Using sets:

```rascal-shell
rascal>if({10, *S, 50} := {50, 40, 30, 30, 10})
>>>>>>>   println("Match succeeds, S == <S>");
   println("Match succeeds, S == <S>");
Match succeeds, S == {40,30}
ok
```
the above is equivalent with:

```rascal-shell
rascal>if({10, *int S, 50} := {50, 40, 30, 30, 10})
>>>>>>>   println("Match succeeds, S == <S>");
   println("Match succeeds, S == <S>");
Match succeeds, S == {40,30}
ok
```

#### Benefits

#### Pitfalls

In older versions of Rascal the type of a multi-variable had to be a list or set type.

