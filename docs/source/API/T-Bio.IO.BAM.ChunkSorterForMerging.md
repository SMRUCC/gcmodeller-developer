---
title: ChunkSorterForMerging
---

# ChunkSorterForMerging
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Singleton Class to Sort Chunks to help merging of chunks.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.ChunkSorterForMerging.#ctor
```
Private constructor.

#### Compare
```csharp
Bio.IO.BAM.ChunkSorterForMerging.Compare(Bio.IO.BAM.Chunk,Bio.IO.BAM.Chunk)
```
Compares two Chunks in the following order.
 Compares X.ChunkStart with Y.ChunkStart if the result is non zero then returns the result.
 else compares Y.ChunnkEnd with X.ChunkEnd and returns the result.

|Parameter Name|Remarks|
|--------------|-------|
|x|First chunk to compare.|
|y|Second chunk to compare.|


#### GetInstance
```csharp
Bio.IO.BAM.ChunkSorterForMerging.GetInstance
```
Gets the singleton instance of the ChunkSorterForMerging class.



### Properties

#### Instance
Static instance to maintain single instance.

