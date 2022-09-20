---
title: "IO"
---

#### Usage

`import IO;`


#### Synopsis

Library functions for input/output.

#### Description

The following input/output functions are defined:
* [Library:constructor:IO::change event](/Library/IO#IO-changeEvent)
* [Library:constructor:IO::created](/Library/IO#IO-created)
* [Library:constructor:IO::deleted](/Library/IO#IO-deleted)
* [Library:constructor:IO::directory](/Library/IO#IO-directory)
* [Library:constructor:IO::file](/Library/IO#IO-file)
* [Library:constructor:IO::modified](/Library/IO#IO-modified)
* [Library:data:IO::Location change event](/Library/IO#IO-LocationChangeEvent)
* [Library:data:IO::Location change type](/Library/IO#IO-LocationChangeType)
* [Library:data:IO::Location type](/Library/IO#IO-LocationType)
* [Library:function:IO::append to file](/Library/IO#IO-appendToFile)
* [Library:function:IO::append to file enc](/Library/IO#IO-appendToFileEnc)
* [Library:function:IO::arb loc](/Library/IO#IO-arbLoc)
* [Library:function:IO::bprintln](/Library/IO#IO-bprintln)
* [Library:function:IO::can encode](/Library/IO#IO-canEncode)
* [Library:function:IO::charsets](/Library/IO#IO-charsets)
* [Library:function:IO::copy](/Library/IO#IO-copy)
* [Library:function:IO::copy directory](/Library/IO#IO-copyDirectory)
* [Library:function:IO::copy file](/Library/IO#IO-copyFile)
* [Library:function:IO::create link](/Library/IO#IO-createLink)
* [Library:function:IO::created](/Library/IO#IO-created)
* [Library:function:IO::exists](/Library/IO#IO-exists)
* [Library:function:IO::find](/Library/IO#IO-find)
* [Library:function:IO::iprint](/Library/IO#IO-iprint)
* [Library:function:IO::iprint exp](/Library/IO#IO-iprintExp)
* [Library:function:IO::iprint to file](/Library/IO#IO-iprintToFile)
* [Library:function:IO::iprint to string](/Library/IO#IO-iprintToString)
* [Library:function:IO::iprintln](/Library/IO#IO-iprintln)
* [Library:function:IO::iprintln exp](/Library/IO#IO-iprintlnExp)
* [Library:function:IO::is directory](/Library/IO#IO-isDirectory)
* [Library:function:IO::is file](/Library/IO#IO-isFile)
* [Library:function:IO::last modified](/Library/IO#IO-lastModified)
* [Library:function:IO::list entries](/Library/IO#IO-listEntries)
* [Library:function:IO::md5 hash](/Library/IO#IO-md5Hash)
* [Library:function:IO::md5 hash file](/Library/IO#IO-md5HashFile)
* [Library:function:IO::mk directory](/Library/IO#IO-mkDirectory)
* [Library:function:IO::move](/Library/IO#IO-move)
* [Library:function:IO::print](/Library/IO#IO-print)
* [Library:function:IO::print exp](/Library/IO#IO-printExp)
* [Library:function:IO::println](/Library/IO#IO-println)
* [Library:function:IO::println exp](/Library/IO#IO-printlnExp)
* [Library:function:IO::read base64](/Library/IO#IO-readBase64)
* [Library:function:IO::read file](/Library/IO#IO-readFile)
* [Library:function:IO::read file bytes](/Library/IO#IO-readFileBytes)
* [Library:function:IO::read file enc](/Library/IO#IO-readFileEnc)
* [Library:function:IO::read file lines](/Library/IO#IO-readFileLines)
* [Library:function:IO::read file lines enc](/Library/IO#IO-readFileLinesEnc)
* [Library:function:IO::register locations](/Library/IO#IO-registerLocations)
* [Library:function:IO::remove](/Library/IO#IO-remove)
* [Library:function:IO::resolve location](/Library/IO#IO-resolveLocation)
* [Library:function:IO::rprint](/Library/IO#IO-rprint)
* [Library:function:IO::rprintln](/Library/IO#IO-rprintln)
* [Library:function:IO::set last modified](/Library/IO#IO-setLastModified)
* [Library:function:IO::to base64](/Library/IO#IO-toBase64)
* [Library:function:IO::touch](/Library/IO#IO-touch)
* [Library:function:IO::unregister locations](/Library/IO#IO-unregisterLocations)
* [Library:function:IO::unwatch](/Library/IO#IO-unwatch)
* [Library:function:IO::uudecode](/Library/IO#IO-uudecode)
* [Library:function:IO::uuencode](/Library/IO#IO-uuencode)
* [Library:function:IO::watch](/Library/IO#IO-watch)
* [Library:function:IO::write base64](/Library/IO#IO-writeBase64)
* [Library:function:IO::write file](/Library/IO#IO-writeFile)
* [Library:function:IO::write file bytes](/Library/IO#IO-writeFileBytes)
* [Library:function:IO::write file enc](/Library/IO#IO-writeFileEnc)
* [Library:function:IO::write file lines](/Library/IO#IO-writeFileLines)


## function registerLocations {#IO-registerLocations}

* ``void registerLocations(str scheme, str authority, map[loc logical, loc physical] m)``


#### Synopsis

register a logical file scheme including the resolution method via a table.

#### Description

Logical source location schemes, such as `|java+interface://JRE/java/util/List|` are used for
precise qualified names of artifacts while abstracting from their physical location in a specific part
of a file on disk or from some webserver or source repository location.

Using this function you can create your own schemes. The authority field is used for scoping the 
names you wish to resolve to certain projects. This way one name can resolve to different locations 
in different projects.


#### Benefits

*  Logical source locations are supported by IDE features such as hyperlinks
*  Logical source locations are supported by all IO functions as well

#### Pitfalls

*  repeated calls to registerLocations for the same `scheme` and `authority` will overwrite the `m` map.
*  the registry is an intentional memory leak; so make sure you use it wisely.
*  when the files references by the physical locations are being written to (edited, removed), then you
may expect problems. The registry is not automatically invalidated.

## function unregisterLocations {#IO-unregisterLocations}

* ``void unregisterLocations(str scheme, str authority)``


#### Synopsis

undo the effect of [registerLocations]

#### Description

For debugging or for memory management you may wish to remove a lookup table.

## function resolveLocation {#IO-resolveLocation}

* ``loc resolveLocation(loc l)``

## function appendToFile {#IO-appendToFile}

* ``void appendToFile(loc file, value V...) throws PathNotFound, IO``


#### Synopsis

Append a value to a file.

#### Description

Append a textual representation of some values to an existing or a newly created file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

#### Encoding

The existing file can be stored using any character set possible, if you know the character set, please use [append to file enc](/Library/IO#IO-appendToFileEnc).
Else the same method of deciding the character set is used as in [read file](/Library/IO#IO-readFile).

#### Pitfalls

*  The same encoding pitfalls as the [read file](/Library/IO#IO-readFile) function.

## function appendToFileEnc {#IO-appendToFileEnc}

* ``void appendToFileEnc(loc file, str charset, value V...) throws PathNotFound, IO``


#### Synopsis

Append a value to a file.

#### Description

Append a textual representation of some values to an existing or a newly created file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded using the charset provided.

## function charsets {#IO-charsets}

* ``set[str] charsets()``


#### Synopsis

Returns all available character sets.

## function canEncode {#IO-canEncode}

* ``set[str] canEncode(str charset)``


#### Synopsis

Returns whether this charset can be used for encoding (use with [write file](/Library/IO#IO-writeFile))

## function bprintln {#IO-bprintln}

* ``bool bprintln(value arg)``


#### Synopsis

Print a value and return true.

#### Description

Print a value and return `true`. This is useful for debugging complex Boolean expressions or comprehensions.
The only difference between this function and [println](/Library/IO/IO-println) is that its return type is `bool` rather than `void`.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>bprintln("Hello World");
bprintln("Hello World");
Hello World
bool: true
```

## function exists {#IO-exists}

* ``bool exists(loc file)``


#### Synopsis

Check whether a given location exists.

#### Description

Check whether a certain location exists, i.e., whether an actual file is associated with it.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
Does the library file `IO.rsc` exist?

```rascal-shell
rascal>exists(|std:///IO.rsc|);
bool: true
```

## function find {#IO-find}

* ``loc find(str name, list[loc] path) throws PathNotFound``


#### Synopsis

Find a named file in a list of locations.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
Find the file `IO.rsc` in the standard library:

```rascal-shell
rascal>find("IO.rsc", [|std:///|]);
loc: |std:///IO.rsc|
```

## function isDirectory {#IO-isDirectory}

* ``bool isDirectory(loc file)``


#### Synopsis

Check whether a given location is a directory.

#### Description

Check whether the location `file` is a directory.

## function iprint {#IO-iprint}

* ``void iprint(value arg, int lineLimit = 1000)``


#### Synopsis

Print an indented representation of a value.

#### Description

See [iprint exp](/Library/IO/IO-iprintExp) for a version that returns its argument as result
and [iprintln](/Library/IO/IO-iprintln) for a version that adds a newline
and [iprint to file](/Library/IO/IO-iprintToFile) for a version that prints to a file.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>iprint(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
iprint(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
ok
```

## function iprintToFile {#IO-iprintToFile}

* ``void iprintToFile(loc file, value arg)``


#### Synopsis

Print an indented representation of a value to the specified location.

#### Description

See [iprint](/Library/IO/IO-iprint) for a version that displays the result on the console
and [iprint exp](/Library/IO/IO-iprintExp) for a version that returns its argument as result
and [iprintln](/Library/IO/IO-iprintln) for a version that adds a newline.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>iprintToFile(|file:///tmp/fruits.txt|, ["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
ok
```

## function iprintToString {#IO-iprintToString}

* ``str iprintToString(value arg)``

## function iprintExp {#IO-iprintExp}

* ``&T iprintExp(&T v)``


#### Synopsis

Print an indented representation of a value and returns the value as result.

#### Description

See [iprintln exp](/Library/IO/IO-iprintlnExp) for a version that adds a newline.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>iprintExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
iprintExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
list[value]: [
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
```

## function iprintlnExp {#IO-iprintlnExp}

* ``&T iprintlnExp(&T v)``


#### Synopsis

Print an indented representation of a value followed by a newline and returns the value as result.

#### Description

See [iprint exp](/Library/IO/IO-iprintExp) for a version that does not add a newline.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>iprintlnExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
iprintlnExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
list[value]: [
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
```

## function iprintln {#IO-iprintln}

* ``void iprintln(value arg, int lineLimit = 1000)``


#### Synopsis

Print a indented representation of a value and add a newline at the end.

#### Description

See [iprintln exp](/Library/IO/IO-iprintlnExp) for a version that returns its argument as result
and [iprint](/Library/IO/IO-iprint) for a version that does not add a newline.

By default we only print the first 1000 lines, if you want to print larger values, either 
use [write text value file](/Library/ValueIO/ValueIO-writeTextValueFile) or change the limit with the lineLimit parameter.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>iprintln(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
iprintln(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
ok
rascal>iprintln([ {"hi"} | i <- [0..1000]], lineLimit = 10);
iprintln([ {"hi"} | i <- [0..1000]], lineLimit = 10);
[
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
...
ok
```

## function isFile {#IO-isFile}

* ``bool isFile(loc file)``


#### Synopsis

Check whether a given location is actually a file (and not a directory).

#### Description

Check whether location `file` is actually a file.

## function lastModified {#IO-lastModified}

* ``datetime lastModified(loc file)``


#### Synopsis

Last modification date of a location.

#### Description

Returns last modification time of the file at location `file`.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
Determine the last modification date of the Rascal standard library:

```rascal-shell
rascal>lastModified(|std:///IO.rsc|);
datetime: $2022-09-19T14:36:02.942+00:00$
```

## function created {#IO-created}

* ``datetime created(loc file)``


#### Synopsis

Creation datetime of a location.

#### Description

Returns the creation time of the file at location `file`.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
Determine the last modification date of the Rascal standard library:

```rascal-shell
rascal>created(|std:///IO.rsc|);
datetime: $2022-09-19T14:36:02.942+00:00$
```

## function touch {#IO-touch}

* ``void touch(loc file)``


#### Synopsis

Set the modification date of a file to `now` or create the file if it did not exist yet
 

## function setLastModified {#IO-setLastModified}

* ``void setLastModified(loc file, datetime timestamp)``

 
#### Synopsis

Set the modification date of a file to the timestamp
 

## function listEntries {#IO-listEntries}

* ``list[str] listEntries(loc file)``


#### Synopsis

List the entries in a directory.

#### Description

List the entries in directory `file`.

#### Examples


```rascal-shell
rascal>import IO;
ok
```
List all entries in the standard library:

```rascal-shell
rascal>listEntries(|std:///|);
list[str]: ["String.rsc","Location.rsc","demo","Prelude$Less.class","Prelude$ReleasableCallback.class","analysis","Set.rsc","util","Node.rsc","Exception.rsc","Type.class","Message.rsc","Prelude$ByteBufferBackedInputStream.class","Prelude$Sorting.class","Prelude.class","ValueIO.rsc","Prelude$NodeComparator.class","lang","Type.rsc","Prelude$3.class","Relation.rsc","Prelude$Distance.class","DateTime.rsc","Boolean.rsc","Prelude$1.class","ListRelation.rsc","List.rsc","resource","Content.rsc","Traversal.rsc","Grammar.rsc","Prelude.rsc","Prelude$Backtrack.class","ParseTree.rsc","Prelude$2.class","IO.rsc","Map.rsc"]
```

## function mkDirectory {#IO-mkDirectory}

* ``void mkDirectory(loc file) throws PathNotFound, IO``


#### Synopsis

Create a new directory.

#### Description

Create a directory at location `file`.

## function print {#IO-print}

* ``void print(value arg)``


#### Synopsis

Print a value without subsequent newline.

#### Description

Print a value on the output stream.
See [println](/Library/IO/IO-println) for a version that adds a newline
and [print exp](/Library/IO/IO-printExp) for a version that returns its argument as value.


#### Examples

Note that the only difference with [println](/Library/IO/IO-println) is that no newline is added after the value is printed

```rascal-shell
rascal>import IO;
ok
rascal>print("Hello World");
print("Hello World");
Hello World
ok
```

NOTE: Since `print` does not add a newline, the prompt `ok` appears at a weird place, i.e., 
glued to the output of `print`.

## function printExp {#IO-printExp}

* ``&T printExp(&T v)``
* ``&T printExp(str msg, &T v)``


#### Synopsis

Print a value and return it as result.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>printExp(3.14);
printExp(3.14);
3.14
real: 3.14
rascal>printExp("The value of PI is approximately ", 3.14);
printExp("The value of PI is approximately ", 3.14);
The value of PI is approximately 3.14
real: 3.14
```

## function println {#IO-println}

* ``void println(value arg)``
* ``void println()``


#### Synopsis

Print a value to the output stream and add a newline.

#### Description

Print a value on the output stream followed by a newline.
See [print](/Library/IO/IO-print) for a version that does not add a newline
and [println exp](/Library/IO/IO-printlnExp) for a version that returns its argument as value.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>println("Hello World");
println("Hello World");
Hello World
ok
```
Introduce variable S and print it:

```rascal-shell
rascal>S = "Hello World";
str: "Hello World"
rascal>println(S);
println(S);
Hello World
ok
```
Introduce variable L and print it:

```rascal-shell
rascal>L = ["a", "b", "c"];
list[str]: ["a","b","c"]
rascal>println(L);
println(L);
["a","b","c"]
ok
```
Use a string template to print several values:

```rascal-shell
rascal>println("<S>: <L>");
println("<S>: <L>");
Hello World: ["a","b","c"]
ok
```
Just print a newline

```rascal-shell
rascal>println();
println();
ok
```

## function printlnExp {#IO-printlnExp}

* ``&T printlnExp(&T v)``
* ``&T printlnExp(str msg, &T v)``


#### Synopsis

Print a value followed by a newline and return it as result.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>printlnExp(3.14);
printlnExp(3.14);
3.14
real: 3.14
rascal>printlnExp("The value of PI is approximately ", 3.14);
printlnExp("The value of PI is approximately ", 3.14);
The value of PI is approximately 3.14
real: 3.14
```
NOTE: Since `printExp` does no produce a newline after its output, the result prompt `real: 3.14` is glued to the
output of `printExp`.

## function rprint {#IO-rprint}

* ``void rprint(value arg)``


#### Synopsis

Raw print of a value.

#### Description


#### Pitfalls

This function is only available for internal use in the Rascal development team.

## function rprintln {#IO-rprintln}

* ``void rprintln(value arg)``


#### Synopsis

Raw print of a value followed by newline.

#### Description

#### Pitfalls

This function is only available for internal use in the Rascal development team.

## function readFile {#IO-readFile}

* ``str readFile(loc file) throws PathNotFound, IO``


#### Synopsis

Read the contents of a location and return it as string value.

#### Description

Return the contents of a file location as a single string.
Also see [read file lines](/Library/IO#IO-readFileLines).

#### Encoding

A text file can be encoded in many different character sets, most common are UTF8, ISO-8859-1, and ASCII.
If you know the encoding of the file, please use the [read file enc](/Library/IO#IO-readFileEnc) and [read file lines enc](/Library/IO#IO-readFileLinesEnc) overloads.
If you do not know, we try to detect this. This detection is explained below:

*  If the implementation of the used scheme in the [location](/Rascal/Expressions/Values/Location) 
   (e.g.,`|project:///|`) defines the charset of the file then this is used.
*  Otherwise if the file contains a UTF8/16/32 http://en.wikipedia.org/wiki/Byte_order_mark[BOM], 
   then this is used.
*  As a last resort the IO library uses heuristics to determine if UTF-8 or UTF-32 could work:
   **  Are the first 32 bytes valid UTF-8? Then use UTF-8.
   **  Are the first 32 bytes valid UTF-32? Then use UTF-32.
*  Finally, we fall back to the system default (as given by the Java Runtime Environment).

*To summarize*, we use UTF-8 by default, except if the [location](/Rascal/Expressions/Values/Location) has available meta-data, the file contains a BOM, or
the first 32 bytes of the file are not valid UTF-8.

#### Pitfalls

*  In case encoding is not known, we try to estimate as best as we can.
*  We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, 
  you might get an decoding error or just strange looking characters.

## function readFileEnc {#IO-readFileEnc}

* ``str readFileEnc(loc file, str charset) throws PathNotFound, IO``


#### Synopsis

Read the contents of a location and return it as string value.

#### Description

Return the contents (decoded using the Character set supplied) of a file location as a single string.
Also see [read file lines enc](/Library/IO#IO-readFileLinesEnc).

## function readBase64 {#IO-readBase64}

* ``str readBase64(loc file) throws PathNotFound, IO``

## function uuencode {#IO-uuencode}

* ``str uuencode(loc file)``

## function writeBase64 {#IO-writeBase64}

* ``void writeBase64(loc file, str content) throws PathNotFound, IO``

## function uudecode {#IO-uudecode}

* ``void uudecode(loc file, str content)``

## function readFileBytes {#IO-readFileBytes}

* ``list[int] readFileBytes(loc file) throws PathNotFound, IO``


#### Synopsis

Read the contents of a file and return it as a list of bytes.

## function readFileLines {#IO-readFileLines}

* ``list[str] readFileLines(loc file) throws PathNotFound, IO``


#### Synopsis

Read the contents of a file location and return it as a list of strings.

#### Description

Return the contents of a file location as a list of lines.
Also see [read file](/Library/IO#IO-readFile).

#### Encoding

Look at [read file](/Library/IO#IO-readFile) to understand how this function chooses the character set. If you know the character set used, please use [read file lines enc](/Library/IO#IO-readFileLinesEnc).

#### Pitfalls

*  In case encoding is not known, we try to estimate as best as we can (see [readFile]).
*  We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, 
  you might get an decoding error or just strange looking characters (see [read file](/Library/IO#IO-readFile)).

## function writeFileLines {#IO-writeFileLines}

* ``void writeFileLines(loc file, list[str] lines)``

#### Synopsis

Writes a list of strings to a file, where each separate string is ended with a newline

#### Benefits


  * mirrors [read file lines](/Library/IO#IO-readFileLines) in its functionality

#### Pitfalls


  * if the individual elements of the list also contain newlines, the output may have more lines than list elements

## function readFileLinesEnc {#IO-readFileLinesEnc}

* ``list[str] readFileLinesEnc(loc file, str charset) throws PathNotFound, IO``


#### Synopsis

Read the contents of a file location and return it as a list of strings.

#### Description

Return the contents (decoded using the Character set supplied) of a file location as a list of lines.
Also see [read file lines](/Library/IO#IO-readFileLines).

## function remove {#IO-remove}

* ``void remove(loc file, bool recursive=true) throws IO``

## function writeFile {#IO-writeFile}

* ``void writeFile(loc file, value V...) throws PathNotFound, IO``


#### Synopsis

Write values to a file.

#### Description

Write a textual representation of some values to a file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded in UTF-8, in case this is not desired, use [write file enc](/Library/IO#IO-writeFileEnc).

## function writeFileBytes {#IO-writeFileBytes}

* ``void writeFileBytes(loc file, list[int] bytes) throws PathNotFound, IO``


#### Synopsis

Write a list of bytes to a file.

## function writeFileEnc {#IO-writeFileEnc}

* ``void writeFileEnc(loc file, str charset, value V...) throws PathNotFound, IO``


#### Synopsis

Write values to a file.

#### Description

Write a textual representation of some values to a file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded using the charset provided.

## function md5HashFile {#IO-md5HashFile}

* ``str md5HashFile(loc file) throws PathNotFound, IO``


#### Synopsis

Read the contents of a location and return its MD5 hash.

#### Description

MD5 hash the contents of a file location.

## function md5Hash {#IO-md5Hash}

* ``str md5Hash(value v)``

## function createLink {#IO-createLink}

* ``str createLink(str title, str target)``

## function toBase64 {#IO-toBase64}

* ``str toBase64(loc file) throws PathNotFound, IO``

## function copy {#IO-copy}

* ``void copy(loc source, loc target, bool recursive=false, bool overwrite=true) throws IO``

## function copyFile {#IO-copyFile}

* ``void copyFile(loc source, loc target)``

## function copyDirectory {#IO-copyDirectory}

* ``void copyDirectory(loc source, loc target)``

## function move {#IO-move}

* ``void move(loc source, loc target, bool overwrite=true) throws IO``

## function arbLoc {#IO-arbLoc}

* ``loc arbLoc()``

## data LocationChangeEvent {#IO-LocationChangeEvent}

```rascal
data LocationChangeEvent  
     = changeEvent(loc src, LocationChangeType changeType, LocationType \type)
     ;
```

## data LocationChangeType {#IO-LocationChangeType}

```rascal
data LocationChangeType  
     = created()
     | deleted()
     | modified()
     ;
```

## data LocationType {#IO-LocationType}

```rascal
data LocationType  
     = file()
     | directory()
     ;
```

## function watch {#IO-watch}

* ``void watch(loc src, bool recursive, void (LocationChangeEvent event) watcher)``

## function unwatch {#IO-unwatch}

* ``void unwatch(loc src, bool recursive, void (LocationChangeEvent event) watcher)``
