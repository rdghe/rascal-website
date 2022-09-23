---
title: UndeclaredVariable
---

#### Synopsis

Use of a variable that has not been declared.

#### Description

A variable can only be used when it has been declared and initialized.
This error is generated when this is not the case. 

The error message is a bit of a *misnomer*, because it is produced when _any identifier_
can not be found. So a name of a function, of a constructor, of a global variable
or a local variable which can not be found in scope, produces said error message.

Remedy:

*  Rename the offending variable name into the name of an existing variable.
*  Introduce a new variable.

#### Examples

Here is an example where an undeclared variables occurs in list splicing:

```rascal-shell
rascal>[1, *x, 3]
ok
```

The remedy is here:

```rascal-shell
rascal>x = 5;
int: 5
rascal>[1, *x, 3]
list[int]: [1,5,3]
```

#### Benefits

* Knowing this error statically means this can never happen at run-time if you do not get the error.
* Variable references are never `null` in Rascal. In fact `null` is not a concept in Rascal at all.

#### Pitfalls

* Not only variable produce `UndeclaredVariable`, also missing function and constructors do.
