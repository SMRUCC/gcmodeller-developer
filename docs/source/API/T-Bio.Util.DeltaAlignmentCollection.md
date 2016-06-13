---
title: DeltaAlignmentCollection
---

# DeltaAlignmentCollection
_namespace: [Bio.Util](N-Bio.Util.html)_

This class provides indexer access to the DeltaAlignments stored in the specified delta alignment file. 
 This class uses a file to hold DeltaAlignment id's from the deltaAlignment file.
 As the id of delta alignment itself is the location in the file, using DeltaAlignmentParser 
 and FastASequencePositionParser this class gets the delta alignment on demand.

### Methods

#### #ctor
```csharp
Bio.Util.DeltaAlignmentCollection.#ctor(System.IO.Stream,Bio.Util.FastASequencePositionParser)
```
Initializes a new instance of the DeltaAlignmentCollection class.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignmentStream|Delta alignment stream.|
|fastASequencePositionParser|Query/Reads filename.|


#### Dispose
```csharp
Bio.Util.DeltaAlignmentCollection.Dispose(System.Boolean)
```
Disposes the underlying streams used.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|Flag to indicate whether it is called from dispose method or not.|


#### GetDeltaAlignmentFor
```csharp
Bio.Util.DeltaAlignmentCollection.GetDeltaAlignmentFor(System.String)
```
Gets the list of delta alignments for the specified sequence id.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceId|Sequence id.|


#### GetDeltaAlignmentIdFor
```csharp
Bio.Util.DeltaAlignmentCollection.GetDeltaAlignmentIdFor(System.String,System.String@)
```
Gets the first delta alignment's id for the specified sequence id.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceId|Sequence id.|
|fullSequenceId|Full id of the sequence id.|

_returns: Delta alignment id._

#### GetDeltaAlignmentsByReads
```csharp
Bio.Util.DeltaAlignmentCollection.GetDeltaAlignmentsByReads
```
Gets Delta alignments grouped by read sequence id.

#### LoadAllFromFile
```csharp
Bio.Util.DeltaAlignmentCollection.LoadAllFromFile
```
Loads this collection with delta alignment from file.



### Properties

#### BytesPerRecord
Bytes required per delta alignment record.
#### collectionFileReader
FileStream to read collectionFile.
#### Count
Gets the no of delta alignment present in this collection.
#### DeltaAlignmentParser
Gets the DeltaAlignment parser.
#### DeltaAlignmentStream
Gets Delta alignments file name.
#### disposeFastASequencePositionParser
Flag to indicate whether disposing this instance should dispose FastASequencePositionParser or not.
#### fastASequencePositionParser
FastASequencePositionParser instance.
#### Item
Gets the Delta alignment present at the specified index.
#### QueryStream
Gets Query or read file name.
#### readBuffer
Buffer to use while reading collectionFile.

