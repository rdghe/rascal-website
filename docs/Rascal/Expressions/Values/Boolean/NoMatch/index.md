---
title: Boolean NoMatch
keywords:
  - "!:="

---

#### Synopsis

Negated [Boolean Match] operator.

#### Syntax

`Pat !:= Exp`

#### Types

//

| `Pat`     | `Exp` |`Pat !:= Exp` |
| --- | --- | --- |
| [Patterns]  | `value` | `bool`           |


#### Function

#### Description

See [Pattern Matching](/RascalConcepts/PatternMatching) for an introduction to pattern matching and [Patterns](/Rascal/Patterns) for a complete description.

#### Examples


```rascal-shell
rascal>123 !:= 456;
bool: true
rascal>[10, *n, 50] !:= [10, 20, 30, 40];
bool: true
rascal>{10, *n, 50} !:= {40, 30, 30, 10};
bool: true
```

#### Benefits

