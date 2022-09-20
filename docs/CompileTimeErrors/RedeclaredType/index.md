---
title: RedeclaredType
---

#### Synopsis

A type with the same name has been declared before.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Some declarations introduce new type names. Most important are an 
[algebraic data type](/Rascal/Declarations/AlgebraicDataType) and [alias](/Rascal/Declarations/Alias).
This error signals that the same type name is used for incompatible purposes.

Remedy: rename one of the type names.

#### Examples


```rascal-shell
rascal>data D = d(int x);
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```


```rascal-shell
rascal>alias D = int;
ok
rascal>alias D = str;
|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|
ok
```

#### Benefits

