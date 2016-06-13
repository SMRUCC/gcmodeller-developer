---
title: Parser
---

# Parser
_namespace: [Bio.Util](N-Bio.Util.html)_

A class for parsing strings to values of a desired type.

### Methods

#### Parse
```csharp
Bio.Util.Parser.Parse(System.String,System.Type)
```
Tries to parse a string into the type given

|Parameter Name|Remarks|
|--------------|-------|
|field|The string to parse|
|type|The type to parse into|

_returns: The parsed value_

#### Parse``1
```csharp
Bio.Util.Parser.Parse``1(System.String)
```
Will parse s into T, provided T has a Parse(string) or TryParse(string s, out T t) method defined, or is one of the magical
 special cases we've implemented (including ICollection (comma delimited), Nullable and Enums).

|Parameter Name|Remarks|
|--------------|-------|
|s|the string to parse|

_returns: the value_

#### ParseAll``1
```csharp
Bio.Util.Parser.ParseAll``1(System.Collections.Generic.IEnumerable{System.String})
```
Creates a sequences of values from a sequence of strings

|Parameter Name|Remarks|
|--------------|-------|
|stringSequence|The sequence of strings to parse|

_returns: A sequence of values_

#### TryParse``1
```csharp
Bio.Util.Parser.TryParse``1(System.String,``0@)
```
Will parse s into T, provided T has a Parse(string) or TryParse(string s, out T t) method defined, or is one of the magical
 special cases we've implemented (including ICollection (comma delimited), Nullable and Enums).

|Parameter Name|Remarks|
|--------------|-------|
|s|the string to parse|
|t|the resulting value|

_returns: true, if parsing worked; false, otherwise._

#### TryParseAll``1
```csharp
Bio.Util.Parser.TryParseAll``1(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IList{``0}@)
```
Tries to parse a sequence of strings into a list of values

|Parameter Name|Remarks|
|--------------|-------|
|stringSequence|The sequence of strings to parse|
|result|The list of values|

_returns: true, if parsing worked; false, otherwise._




