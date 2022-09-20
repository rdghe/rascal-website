---
title: UseDef
---

#### Synopsis

Compute use-def information for the variables in a Pico program.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

#### Examples

The _definitions_ of a variable are the source code locations where a variable gets a value.
The _uses_ of a variable are the location where the value of that variable is used.
Both concepts are relevant for program analysis and are defined here.

```rascal
// tag::module[]
module demo::lang::Pico::UseDef

import demo::lang::Pico::Abstract;

set[Occurrence] usesExp(EXP e, STATEMENT s) =  // <1>
  u:id(PicoId Id1) := e ? {< u@location, Id1, s>}
                        : {< u@location, Id2, s> | /u:id(PicoId Id2) <- e };
     
set[Occurrence] usesStat(s:asgStat(PicoId Id, EXP e)) = usesExp(e, s); // <2>

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2)) =
   usesExp(e, s) + usesStats(s1) + usesStats(s2);

set[Occurrence] usesStat(s: whileStat(EXP e,
                              list[STATEMENT] s1)) =
   usesExp(e, s) + usesStats(s1);

set[Occurrence] usesStats(list[STATEMENT] stats) =  
   {*usesStat(s) | s <- stats};

public set[Occurrence] uses(PROGRAM p) = usesStats(p.stats);  //<3>

public set[Occurrence] defs(PROGRAM p) =  // <4>
   { < stat@location, v, stat > | /stat:asgStat(PicoId v, EXP _) <- p.stats};
// end::module[] 

```

                
Recall that `Occurrence` was introduced in [Abstract](/Recipes/Languages/Pico/Abstract); it is a parameterized container to associate
program entities with their location.

<1> The function `usesExp` computes a set of occurrences (uses) of Pico identifiers in a given statement:
    * If the expression is itself an identifier, then a singleton set containing that identifier and the statement is returned.
    * If the expression is composite, all its containing identifiers are collected using a descendant (deep) match 
       (`/`, see [Rascal:Descendant]))  in `/u:id(PicoId Id) \<- e`. 
        Note that we use a labeled pattern `u:id(PicoId Id)`,
       so that we can access the whole expression that was matched and retrieve its 
       location information (`u@location`) when we are adding a <location, identifier> pair to the set of occurrences.
       
<2> `useStat` extracts uses from all statement variants.

<3> The function `uses` simply applies `usesStats` to the statement part of its program argument.

<4> The function `defs`  has a Pico program as argument and returns a set of occurrences (definitions) of Pico identifiers.
    The definition consists of a single set comprehension that consists of the following parts:

    *  ` ... \<- P. stats` enumerates all statements in the program.
    *  `/asgStat(PicoId Id, EXP Exp) \<- P.stats` uses again a descendant match to find all assignment statements.
    *  For each assignment statement a (location, identifier) pair is added to the result.

#### Benefits

