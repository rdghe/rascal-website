---
title: Boolean And
keywords:
  - "&&"

---

#### Synopsis

Boolean _and_ operator.

#### Syntax

`Exp<sub>1</sub> && Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> && Exp<sub>2</sub>`  |
| --- | --- | --- |
| `bool`       | `bool`         | `bool`  |


#### Function

#### Description

The _and_ operator on Boolean values defined as follows:

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> && Exp<sub>2</sub>`  |
| --- | --- | --- |
| `true`       | `true`         | `true`  |
| `true`       | `false`         | `false`  |
| `false`       | `true`         | `false`  |
| `false`       | `false`         | `false`  |


Boolean operators have _short circuit_ semantics:  only those operands are evaluated that are needed to compute the result. In the case of the `&&` operator, the result is `false` if `Exp<sub>1</sub>` evaluates to `false`, otherwise `Exp<sub>2</sub>` is evaluated to determine the result.

Note that `&&` backtracks over its argument expressions until it can find an evaluation that yields `true` unless there is none. This may happen if the left or right expression is a non-deterministic pattern match or a value generator.

Variable assignments as a result of matching or generator expressions under a `&&` are visible outside the context of the operator, but only if the context is conditional, such as an if-then-else or a for loop. Note that if one of the argument expressions evaluates to false, then no binding is done either.

#### Examples


```rascal-shell
rascal>true && false;
bool: false
rascal>i <- [1,2,3] && (i % 2 == 0)
bool: true
rascal>import IO;
ok
rascal>if (i <- [1,2,3] && (i % 2 == 0))
>>>>>>>  println("<i> % 2 == 0");
  println("<i> % 2 == 0");
2 % 2 == 0
ok
rascal>for (i <- [1,2,3,4] && (i % 2 == 0)) 
>>>>>>>  println("<i> % 2 == 0");
  println("<i> % 2 == 0");
2 % 2 == 0
4 % 2 == 0
list[void]: []
```

#### Benefits

*  The backtracking `&&` allows one to express searching for a computational solution in concise manner.

#### Pitfalls

*  Side effects to global variables or IO in the context of a backtracking `&&` can lead to more effects than you bargained for.


```rascal-shell
rascal>import IO;
ok
rascal>int i = 0;
int: 0
rascal>bool incr() { i += 1; return true; }
bool (): function(|prompt:///|(0,36,<1,0>,<1,36>))
rascal>for (int j <- [1,2,3] && incr() && (i % 2 == 0)) 
>>>>>>>  println("once true for <j>");
  println("once true for <j>");
once true for 2
list[void]: []
rascal>i;
int: 3
```
