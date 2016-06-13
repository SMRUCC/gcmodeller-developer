---
title: DeltaAlignmentParser
---

# DeltaAlignmentParser
_namespace: [Bio.Util](N-Bio.Util.html)_

This parser reads from a source of text that contains DeltaAlignments
 and converts the data to in-memory DeltaAlignment objects.

### Methods

#### #ctor
```csharp
Bio.Util.DeltaAlignmentParser.#ctor(System.IO.Stream,Bio.Util.FastASequencePositionParser)
```
Initializes a new instance of the DeltaAlignmentParser class by 
 loading the specified filename.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Name of the File.|
|queryParser|FastASequencePositionParser instance.|


#### Dispose
```csharp
Bio.Util.DeltaAlignmentParser.Dispose(System.Boolean)
```
Dispose the stream.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### GetDeltaAlignmentAt
```csharp
Bio.Util.DeltaAlignmentParser.GetDeltaAlignmentAt(System.Int64)
```
Gets the DeltaAlignment at specified position of the file.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position at which delta alignment is required.|

_returns: Delta alignment._

#### GetPositions
```csharp
Bio.Util.DeltaAlignmentParser.GetPositions
```
Gets the position of DeltaAlignments in the specified file.

#### GetQuerySeqIdAt
```csharp
Bio.Util.DeltaAlignmentParser.GetQuerySeqIdAt(System.Int64)
```
Gets the query sequence id in the DeltaAlignment at specified position.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position of the delta alignment.|


#### GetQuerySeqIds
```csharp
Bio.Util.DeltaAlignmentParser.GetQuerySeqIds
```
Gets Delta alignment id and query sequence ids pairs.

#### Parse
```csharp
Bio.Util.DeltaAlignmentParser.Parse
```
Returns an IEnumerable of DeltaAlignment in the file being parsed.
_returns: Returns DeltaAlignment collection._

#### ParseFrom
```csharp
Bio.Util.DeltaAlignmentParser.ParseFrom(System.IO.StreamReader)
```
Starts parsing from the specified StreamReader.

|Parameter Name|Remarks|
|--------------|-------|
|streamReader|Stream reader to parse.|

_returns: IEnumerable of DeltaAlignments._

#### ReadNextLine
```csharp
Bio.Util.DeltaAlignmentParser.ReadNextLine(System.IO.StreamReader)
```
Gets the next line skipping the blank lines.

|Parameter Name|Remarks|
|--------------|-------|
|streamReader|Stream reader.|




### Properties

#### deltaStream
Stream for Delta file.
#### parsingReaders
List holding all the open parsing readers.
#### QueryParser
Gets the query parser.

