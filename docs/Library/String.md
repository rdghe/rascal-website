---
title: "module String"
---

#### Usage

`import String;`


#### Synopsis

Library functions for strings.

#### Description

For operators on strings see [String](../Rascal/Expressions/Values/String) in the Rascal Language Reference.

The following functions are defined for strings:
* [arbString](../Library/String.md#String-arbString)
* [capitalize](../Library/String.md#String-capitalize)
* [center](../Library/String.md#String-center)
* [charAt](../Library/String.md#String-charAt)
* [chars](../Library/String.md#String-chars)
* [contains](../Library/String.md#String-contains)
* [deescape](../Library/String.md#String-deescape)
* [endsWith](../Library/String.md#String-endsWith)
* [escape](../Library/String.md#String-escape)
* [findAll](../Library/String.md#String-findAll)
* [findFirst](../Library/String.md#String-findFirst)
* [findLast](../Library/String.md#String-findLast)
* [format](../Library/String.md#String-format)
* [fromBase64](../Library/String.md#String-fromBase64)
* [isEmpty](../Library/String.md#String-isEmpty)
* [isValidCharacter](../Library/String.md#String-isValidCharacter)
* [left](../Library/String.md#String-left)
* [replaceAll](../Library/String.md#String-replaceAll)
* [replaceFirst](../Library/String.md#String-replaceFirst)
* [replaceLast](../Library/String.md#String-replaceLast)
* [reverse](../Library/String.md#String-reverse)
* [rexpMatch](../Library/String.md#String-rexpMatch)
* [right](../Library/String.md#String-right)
* [size](../Library/String.md#String-size)
* [split](../Library/String.md#String-split)
* [squeeze](../Library/String.md#String-squeeze)
* [startsWith](../Library/String.md#String-startsWith)
* [stringChar](../Library/String.md#String-stringChar)
* [stringChars](../Library/String.md#String-stringChars)
* [substitute](../Library/String.md#String-substitute)
* [substring](../Library/String.md#String-substring)
* [toBase64](../Library/String.md#String-toBase64)
* [toInt](../Library/String.md#String-toInt)
* [toLocation](../Library/String.md#String-toLocation)
* [toLowerCase](../Library/String.md#String-toLowerCase)
* [toReal](../Library/String.md#String-toReal)
* [toUpperCase](../Library/String.md#String-toUpperCase)
* [trim](../Library/String.md#String-trim)
* [uncapitalize](../Library/String.md#String-uncapitalize)
* [wrap](../Library/String.md#String-wrap)


## function center {#String-center}

* ``str center(str s, int n)``
* ``str center(str s, int n, str pad)``


#### Synopsis

Center a string in given space.

#### Description

*  Center string `s` in string of length `n` using spaces.
*  Center string `s` in string of length `n` using `pad` as padding character.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>center("abc", 10);
str: "   abc    "
rascal>center("abc", 10, "x");
str: "xxxabcxxxx"
```

## function charAt {#String-charAt}

* ``int charAt(str s, int i) throws IndexOutOfBounds``


#### Synopsis

Return character in a string by its index position.

#### Description

Return the character at position `i` in string `s` as integer character code.
Also see [stringChar](../Library/String.md#String-stringChar) that converts character codes back to string.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>charAt("abc", 0);
int: 97
rascal>stringChar(charAt("abc", 0));
str: "a"
```

## function chars {#String-chars}

* ``list[int] chars(str s)``


#### Synopsis

Return characters of a string.
#### Description

Return a list of the characters of `s` as integer character codes.
Also see [stringChars](../Library/String.md#String-stringChars) that converts character codes back to string.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>chars("abc");
list[int]: [97,98,99]
rascal>stringChars(chars("abc")) == "abc";
bool: true
```

## function contains {#String-contains}

* ``bool contains(str input, str find)``


#### Synopsis

Check that a string contains another string.

#### Description

Check whether the string `find` occurs as substring in the string `subject`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>contains("abracadabra", "bra");
bool: true
rascal>contains("abracadabra", "e");
bool: false
```

## function deescape {#String-deescape}

* ``str deescape(str s)``


#### Synopsis

Replace escaped characters by the escaped character itself (using Rascal escape conventions).

## function endsWith {#String-endsWith}

* ``bool endsWith(str subject, str suffix)``


#### Synopsis

Check whether a string ends with a given substring.

#### Description

Yields `true` if string `subject` ends with the string `suffix`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>endsWith("Hello.rsc", ".rsc");
bool: true
```

## function escape {#String-escape}

* ``str escape(str subject, map[str,str] mapping)``


#### Synopsis

Replace single characters in a string.

#### Description

Return a copy of `subject` in which each single character key in replacements
has been replaced by its associated value.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>import IO;
ok
rascal>escape("abracadabra", ("a" : "AA", "c" : "C"));
str: "AAbrAACAAdAAbrAA"
rascal>L = escape("\"Good Morning\", he said", ("\"": "\\\""));
str: "\\\"Good Morning\\\", he said"
rascal>println(L);
println(L);
\"Good Morning\", he said
ok
```

## function findAll {#String-findAll}

* ``list[int] findAll(str subject, str find)``


#### Synopsis

Find all occurrences of a string in another string.

#### Description

Find all occurrences of string `find` in string `subject`.
The result is a (possible empty) list of positions where `find` matches.

See also [find first](../Library/String.md#String-findFirst) and [find last](../Library/String.md#String-findLast).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>findAll("abracadabra", "a");
list[int]: [0,3,5,7,10]
rascal>findAll("abracadabra", "bra");
list[int]: [1,8]
rascal>findAll("abracadabra", "e");
list[int]: []
```

## function findFirst {#String-findFirst}

* ``int findFirst(str subject, str find)``


#### Synopsis

Find the first occurrence of a string in another string.

#### Description

Find the first occurrence of string `find` in string `subject`.
The result is either a position in `subject` or `-1` when `find` is not found.

Also see [find all](../Library/String.md#String-findAll) and [find last](../Library/String.md#String-findLast).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>findFirst("abracadabra", "a");
int: 0
rascal>findFirst("abracadabra", "bra");
int: 1
rascal>findFirst("abracadabra", "e");
int: -1
```

## function findLast {#String-findLast}

* ``int findLast(str subject, str find)``


#### Synopsis

Find the last occurrence of a string in another string.

#### Description

Find the last occurrence of string `find` in string `subject`.
The result is either a position in `subject` or `-1` when `find` is not found.

Also see [find all](../Library/String.md#String-findAll) and [find first](../Library/String.md#String-findFirst).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>findLast("abracadabra", "a");
int: 10
rascal>findLast("abracadabra", "bra");
int: 8
rascal>findLast("abracadabra", "e");
int: -1
```

## function isEmpty {#String-isEmpty}

* ``bool isEmpty(str s)``


#### Synopsis

Check whether a string is empty.

#### Description

Returns `true` if string `s` is empty.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>isEmpty("");
bool: true
rascal>isEmpty("abc");
bool: false
```

## function arbString {#String-arbString}

* ``str arbString(int n)``


#### Synopsis

Generate a arbitrary string.

#### Description

Returns a string of maximum `n` length, with arbitrary characters.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>arbString(3);
str: "66"
rascal>arbString(10);
str: "PrxNPWoes"
```

## function left {#String-left}

* ``str left(str s, int n)``
* ``str left(str s, int n, str pad)``


#### Synopsis

Left alignment of string in given space.

#### Description

*  Left align string `s` in string of length `n` using spaces.
*  Left align string `s` in string of length `n` using `pad` as pad character.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>left("abc", 10);
str: "abc       "
rascal>left("abc", 10, "x");
str: "abcxxxxxxx"
```

## function replaceAll {#String-replaceAll}

* ``str replaceAll(str subject, str find, str replacement)``


#### Synopsis

Replace all occurrences of a string in another string.

#### Description

Return a copy of `subject` in which all occurrences of `find` (if any) have been replaced by `replacement`.
Also see [replace first](../Library/String.md#String-replaceFirst) and [replace last](../Library/String.md#String-replaceLast).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>replaceAll("abracadabra", "a", "A");
str: "AbrAcAdAbrA"
rascal>replaceAll("abracadabra", "ra", "RARA");
str: "abRARAcadabRARA"
rascal>replaceAll("abracadabra", "cra", "CRA");
str: "abracadabra"
```

#### Pitfalls

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

## function replaceFirst {#String-replaceFirst}

* ``str replaceFirst(str subject, str find, str replacement)``


#### Synopsis

Replace the first occurrence of a string in another string.

#### Description

Return a copy of `subject` in which the first occurrence of `find` (if it exists) has been replaced by `replacement`.
Also see [replace all](../Library/String.md#String-replaceAll) and [replace last](../Library/String.md#String-replaceLast).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>replaceFirst("abracadabra", "a", "A");
str: "Abracadabra"
rascal>replaceFirst("abracadabra", "ra", "RARA");
str: "abRARAcadabra"
rascal>replaceFirst("abracadabra", "cra", "CRA");
str: "abracadabra"
```

#### Pitfalls

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

## function replaceLast {#String-replaceLast}

* ``str replaceLast(str subject, str find, str replacement)``


#### Synopsis

Replace the last occurrence of a string in another string.

#### Description

Return a copy of `subject` in which the last occurrence of `find` (if it exists) has been replaced by `replacement`.
Also see [replace first](../Library/String.md#String-replaceFirst) and [replace last](../Library/String.md#String-replaceLast).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>replaceLast("abracadabra", "a", "A");
str: "abracadabrA"
rascal>replaceLast("abracadabra", "ra", "RARA");
str: "abracadabRARA"
rascal>replaceLast("abracadabra", "cra", "CRA");
str: "abracadabra"
```

#### Pitfalls

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

## function reverse {#String-reverse}

* ``str reverse(str s)``


#### Synopsis

Return a string with all characters in reverse order.

#### Description

Returns string with all characters of string `s` in reverse order.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>reverse("abc");
str: "cba"
```

## function right {#String-right}

* ``str right(str s, int n)``
* ``str right(str s, int n, str pad)``


#### Synopsis

Right align s in string of length n using space.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>right("abc", 10);
str: "       abc"
rascal>right("abc", 10, "x");
str: "xxxxxxxabc"
```


#### Synopsis

Right alignment of a string value in a given space.

#### Description

*  Right align string `s` in string of length `n` using spaces.
*  Right align string `s` in string of length `n` using `pad` as pad character.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>right("abc", 10);
str: "       abc"
rascal>right("abc", 10, "x");
str: "xxxxxxxabc"
```

## function size {#String-size}

* ``int size(str s)``


#### Synopsis

Determine length of a string value.

#### Description

Returns the length (number of characters) in string `s`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>size("abc");
int: 3
rascal>size("");
int: 0
```

## function startsWith {#String-startsWith}

* ``bool startsWith(str subject, str prefix)``


#### Synopsis

Check whether a string starts with a given prefix.

#### Description

Yields `true` if string `subject` starts with the string `prefix`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>startsWith("Hello.rsc", "Hell");
bool: true
```

## function stringChar {#String-stringChar}

* ``str stringChar(int char) throws IllegalArgument``


#### Synopsis

Convert a character code into a string. 

## function stringChars {#String-stringChars}

* ``str stringChars(list[int] chars) throws IllegalArgument``


#### Synopsis

Convert a list of character codes into a string.

## function isValidCharacter {#String-isValidCharacter}

* ``bool isValidCharacter(int ch)``


#### Synopsis

Check that a given integer value is a valid Unicode code point.

## function substring {#String-substring}

* ``str substring(str s, int begin)``
* ``str substring(str s, int begin, int end)``


#### Synopsis

Extract a substring from a string value.

#### Description

*  Yields substring of string `s` from index `begin` to the end of the string.
*  Yields substring of string `s` from index `begin` to (but not including) index `end`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>substring("abcdef", 2);
str: "cdef"
rascal>substring("abcdef", 2, 4);
str: "cd"
```

## function toInt {#String-toInt}

* ``int toInt(str s) throws IllegalArgument``
* ``int toInt(str s, int r) throws IllegalArgument``


#### Synopsis

Convert a string value to integer.

#### Description

*  Converts string `s` to integer. 
*  Convert string `s` to integer using radix `r`.


Throws `IllegalArgument` when `s` cannot be converted.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>toInt("11");
int: 11
rascal>toInt("11", 8);
int: 9
```
Now try an erroneous argument:

```rascal-shell
rascal>toInt("abc");
|std:///String.rsc|(11107,480,<549,0>,<575,52>): IllegalArgument("abc","For input string: \"abc\"")
	at *** somewhere ***(|std:///String.rsc|(11107,480,<549,0>,<575,52>))
	at toInt(|prompt:///|(6,5,<1,6>,<1,11>))
ok
```

## function toLowerCase {#String-toLowerCase}

* ``str toLowerCase(str s)``


#### Synopsis

Convert the characters in a string value to lower case.

#### Description

Convert all characters in string `s` to lowercase. Also see [to upper case](../Library/String.md#String-toUpperCase).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>toLowerCase("AaBbCc123");
str: "aabbcc123"
```

## function toReal {#String-toReal}

* ``real toReal(str s)``


#### Synopsis

Convert a string value to real.

#### Description

Converts string `s` to a real. Throws `IllegalArgument` when `s` cannot be converted.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>toReal("2.5e-3");
real: 0.0025
rascal>toReal("123");
real: 123.
rascal>toReal("abc");
|std:///String.rsc|(12024,338,<600,0>,<619,31>): IllegalArgument()
	at *** somewhere ***(|std:///String.rsc|(12024,338,<600,0>,<619,31>))
	at toReal(|prompt:///|(7,5,<1,7>,<1,12>))
ok
```

## function toUpperCase {#String-toUpperCase}

* ``str toUpperCase(str s)``


#### Synopsis

Convert the characters in a string value to upper case.

#### Description

Converts all characters in string `s` to upper case.

Also see [to lower case](../Library/String.md#String-toLowerCase).

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>toUpperCase("AaBbCc123");
str: "AABBCC123"
```

## function trim {#String-trim}

* ``str trim(str s)``


#### Synopsis

Returns string with leading and trailing whitespace removed.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>trim("  jelly
>>>>>>>beans  ");
str: "jelly\nbeans"
```

## function squeeze {#String-squeeze}

* ``str squeeze(str src, str charSet)``


#### Synopsis

Squeeze repeated occurrences of characters.
#### Description

Squeeze repeated occurrences in `src` of characters in `charSet` removed.
See http://commons.apache.org/lang/api-2.6/index.html?org/apache/commons/lang/text/package-summary.html[Apache]
for the allowed syntax in `charSet`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>squeeze("hello", "el");
str: "helo"
```

## function split {#String-split}

* ``list[str] split(str sep, str src)``


#### Synopsis

Split a string into a list of strings based on a literal separator.

## function capitalize {#String-capitalize}

* ``str capitalize(str src)``

## function uncapitalize {#String-uncapitalize}

* ``str uncapitalize(str src)``

## function toBase64 {#String-toBase64}

* ``str toBase64(str src)``

## function fromBase64 {#String-fromBase64}

* ``str fromBase64(str src)``

## function wrap {#String-wrap}

* ``str wrap(str src, int wrapLength)``


#### Synopsis

Word wrap a string to fit in a certain width.

#### Description

Inserts newlines in a string in order to fit the string in a certain width. It only breaks on spaces (' '). 

## function format {#String-format}

* ``str format(str s, str dir, int n, str pad)``

## function rexpMatch {#String-rexpMatch}

* ``bool rexpMatch(str s, str re)``


#### Synopsis

Determine if a string matches the given (Java-syntax) regular expression.

## function toLocation {#String-toLocation}

* ``loc toLocation(str s)``


#### Synopsis

Convert a string value to a (source code) location.

#### Description

*  Converts string `s` to a location.
*  If the scheme is not provided, it is assumed to be `cwd`.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>toLocation("http://grammarware.net");
loc: |http://grammarware.net|
rascal>toLocation("document.xml");
loc: |cwd:///document.xml|
```

## function substitute {#String-substitute}

* ``str substitute(str src, map[loc,str] s)``


#### Synopsis

Substitute substrings in a string based on a substitution map from location to string.

#### Examples


```rascal-shell
rascal>import String;
ok
rascal>substitute("abc", (|stdin:///|(1,1): "d"))
str: "adc"
```
