---
title: WiggleParserExtensions
---

# WiggleParserExtensions
_namespace: [Bio.IO.Wiggle](N-Bio.IO.Wiggle.html)_

Extensions to the WiggleParser to support Open/Close/Dispose semantics.

### Methods

#### Close
```csharp
Bio.IO.Wiggle.WiggleParserExtensions.Close(Bio.IO.Wiggle.WiggleParser)
```
Closes the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|


#### Open
```csharp
Bio.IO.Wiggle.WiggleParserExtensions.Open(Bio.IO.Wiggle.WiggleParser,System.String)
```
Opens a sequence file using the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|File to open|

_returns: Disposable object to close the stream._

#### Parse
```csharp
Bio.IO.Wiggle.WiggleParserExtensions.Parse(Bio.IO.Wiggle.WiggleParser,System.String)
```
Parses the sequences from the given filename.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|fileName|Filename to open/close|

_returns: Set of parsed sequences._

#### ParseOne
```csharp
Bio.IO.Wiggle.WiggleParserExtensions.ParseOne(Bio.IO.Wiggle.WiggleParser,System.String)
```
Parses the sequences from the given filename.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|fileName|Filename to open/close|

_returns: Set of parsed sequences._




