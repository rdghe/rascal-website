---
title: List Slice
keywords:
  - "["
  - ".."
  - "]"

---

#### Synopsis

Retrieve a slice of a list.

#### Syntax

*  `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub>]`
*  `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]`


where _Exp_<sub>2</sub> and _Exp_<sub>4</sub> are optional.

#### Types

//


| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` |  `Exp<sub>3</sub>`  | `Exp<sub>4</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub> ]`   or  `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]`  |
| --- | --- | --- | --- | --- |
| `list[T<sub>1</sub>]` | `int`     | `int`       | `int`     |  `list[T<sub>1</sub>]`                                                                 |


#### Description

List slicing uses the integer values of _Exp_<sub>2</sub> and _Exp_<sub>4</sub> to determine the `begin` (*inclusive*) and `end` (*exclusive*)
of a slice from the list value _L_ of _Exp_<sub>1</sub>. Negative indices count from the end of the list backwards.
Using the second form, an extra index _Exp_<sub>3</sub> is given that determines the
index of the second element in the slice and establishes the `step` between
successive elements in the slice. The default `step` is 1.
If `end` is smaller than `begin`, the slice is constructed backwards.

Let `Len` be the length of _L_ and let _N_<sub>2</sub>, _N_<sub>3</sub> and _N_<sub>4</sub> be the respective values of the expressions
 _Exp_<sub>2</sub>, _Exp_<sub>2</sub> and _Exp_<sub>2</sub> when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

*  _Exp<sub>2</sub>_:
**  If _Exp<sub>2</sub>_ is absent, then `begin = 0`.
**  Otherwise, if _N<sub>2</sub>_ >= 0 then `begin = N<sub>2</sub>` else `begin = N<sub>2</sub> + Len`. 
*  _Exp<sub>4</sub>_:
**  If _Exp<sub>4</sub>_ is absent, then `end = Len`.
**  Otherwise, if _N<sub>4</sub>_ >= 0, then `end = N<sub>4</sub>` else `end = N<sub>4</sub> + Len`.
*  _Exp<sub>3</sub>_:
**  If _Exp<sub>3</sub>_ is absent, then if `begin < end` then `step = 1` else `step = -1`.
**  Otherwise, if `begin < end`, then `step = N<sub>3</sub> - begin` else `step = begin - N<sub>3</sub>`.


Now, the constraints `0 <= begin < Len` and `0 < end < Len` should hold,
otherwise the exception `IndexOutOfBounds` is thrown.

The slice consists of the elements `L[begin]`, `L[begin+step]`, `L[end - step]`.
When `begin >= end`, the elements are listed in reverse order.

#### Examples

Consider the list `L = [0, 10, 20, 30, 40, 50, 60, 70, 80];` as running example.

Here is a view on _L_ that will help to correlate positive and negative indices:


|`i`        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|`L[i]`     | 0 | 10| 20| 30| 40| 50| 60| 70|80  |
|`-i`       | -9| -8| -7| -6| -5| -4| -3| -2| -1 |




Some common use cases (with `begin` <= `end`):


| Slice           | Means:                                                      |
| --- | --- |
| `L[begin..end]` | elements with indices `begin` through `end-1`               |
| `L[begin..]`    | elements with indices `begin` through the rest of the list  |
| `L[..end]`      | elements with indices from the beginning through `end-1`    |
| `L[..]`         | the whole list                                              |
| `L[-1]`         | last element of the list                                    |
| `L[-2..]`       | the last two elements of the list                           |
| `L[..-2]`       | all elements except the last two.                           |



Let's put this into practice now.


```rascal-shell
rascal>L = [0, 10, 20, 30, 40, 50, 60, 70, 80];
list[int]: [0,10,20,30,40,50,60,70,80]
```
Slices with begin < end

```rascal-shell
rascal>L[1..3];
list[int]: [10,20]
rascal>L[1..];       // empty end => end of list
list[int]: [10,20,30,40,50,60,70,80]
rascal>L[..3];       // empty begin => first element of list
list[int]: [0,10,20]
rascal>L[..];        // both empty => whole list
list[int]: [0,10,20,30,40,50,60,70,80]
```
Slices with  begin >= end

```rascal-shell
rascal>L[3..1];      // slice contains elements with indices 3 and 2 (in that order)
list[int]: [30,20]
rascal>L[3..3];      // empty slice when begin == end
list[int]: []
```
Slices with negative begin or end:

```rascal-shell
rascal>L[2..-2];     // equivalent to L[2..7]
list[int]: [20,30,40,50,60]
rascal>L[2..7];
list[int]: [20,30,40,50,60]
rascal>L[-4..-2];    // equivalent to L[5..7]
list[int]: [50,60]
rascal>L[5..7];
list[int]: [50,60]
```
Slices with an explicit second index:

```rascal-shell
rascal>L[1,3..6];
list[int]: [10,30,50]
rascal>L[5,3..];
list[int]: [50,30,10]
```
Explore error cases:

```rascal-shell
rascal>L[..10];
list[int]: [0,10,20,30,40,50,60,70,80]
rascal>L[1..20];
list[int]: [10,20,30,40,50,60,70,80]
```



       
