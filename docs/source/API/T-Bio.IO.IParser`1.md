---
title: IParser`1
---

# IParser`1
_namespace: [Bio.IO](N-Bio.IO.html)_

Typed interface for parsers which return some data structure.

### Methods

#### Parse
```csharp
Bio.IO.IParser`1.Parse(System.IO.Stream)
```
Parses a list of biological sequence texts from a given stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream to pull the data from|

_returns: The collection of parsed objects._

#### ParseOne
```csharp
Bio.IO.IParser`1.ParseOne(System.IO.Stream)
```
Parse a single entity from the given stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream to pull data from|

_returns: Parse entity object_




