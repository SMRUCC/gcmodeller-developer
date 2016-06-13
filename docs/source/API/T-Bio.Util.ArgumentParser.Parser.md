---
title: Parser
---

# Parser
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Parser Class.

### Methods

#### CollectionsTryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.CollectionsTryParse``1(System.String,``0@)
```
Collections Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### EnumTryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.EnumTryParse``1(System.String,``0@)
```
Enum Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### GenericCollectionsTryParse``2
```csharp
Bio.Util.ArgumentParser.Parser.GenericCollectionsTryParse``2(System.String,``0@)
```
Generic Collections Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### GenericTryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.GenericTryParse``1(System.String,``0@)
```
Generic Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### HasParseMethod
```csharp
Bio.Util.ArgumentParser.Parser.HasParseMethod(System.Type)
```
Checks if this type has a Parse or TryParse static method that takes a string as the argument.

|Parameter Name|Remarks|
|--------------|-------|
|type|The Type.|

_returns: True if has parsed method properly._

#### NullableTryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.NullableTryParse``1(System.String,``0@)
```
Nullable Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### Parse
```csharp
Bio.Util.ArgumentParser.Parser.Parse(System.String,System.Type)
```
This method should be updated to use the rest of the methods in this class.

|Parameter Name|Remarks|
|--------------|-------|
|field|the Field.|
|type|Type.|

_returns: Parsed Object._

#### Parse``1
```csharp
Bio.Util.ArgumentParser.Parser.Parse``1(System.String)
```
Will parse s into T, provided T has a Parse(string) or TryParse(string s, out T t) method defined, or is one of the magical
 special cases we've implemented (including ICollection (comma delimited), Nullable and Enums).

|Parameter Name|Remarks|
|--------------|-------|
|text|-|


#### ParseAll``1
```csharp
Bio.Util.ArgumentParser.Parser.ParseAll``1(System.Collections.Generic.IEnumerable{System.String})
```
Parse All.

|Parameter Name|Remarks|
|--------------|-------|
|values|The Values.|

_returns: List of Parsed types._

#### StringTryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.StringTryParse``1(System.String,``0@)
```
String Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|s|-|
|t|-|


#### TryParse``1
```csharp
Bio.Util.ArgumentParser.Parser.TryParse``1(System.String,``0@)
```
Will parse s into T, provided T has a Parse(string) or TryParse(string s, out T t) method defined, or is one of the magical
 special cases we've implemented (including ICollection (comma delimited), Nullable and Enums).

|Parameter Name|Remarks|
|--------------|-------|
|s|s|
|t|t|

_returns: bool_

#### TryParseAll``1
```csharp
Bio.Util.ArgumentParser.Parser.TryParseAll``1(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IList{``0}@)
```
Try Parse All.

|Parameter Name|Remarks|
|--------------|-------|
|values|The Values.|
|result|The List result.|

_returns: True if Parsed all._




