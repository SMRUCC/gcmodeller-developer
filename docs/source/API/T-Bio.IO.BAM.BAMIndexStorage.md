---
title: BAMIndexStorage
---

# BAMIndexStorage
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Class to read or write BAMIndex data from a file or a stream.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.BAMIndexStorage.#ctor(System.IO.Stream)
```
Creates new instance of the class with specified stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to use while reading or writing BAMIndex data.|


#### Dispose
```csharp
Bio.IO.BAM.BAMIndexStorage.Dispose(System.Boolean)
```
Dispose the underlying stream.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|If disposing equals true, Requests that the system not call the finalizer for this instance.|


#### LargestBinPossibleForSequenceLength
```csharp
Bio.IO.BAM.BAMIndexStorage.LargestBinPossibleForSequenceLength(System.Int32)
```
Not all sequences can get all possible bins, so this returns the largest sequence length possible

|Parameter Name|Remarks|
|--------------|-------|
|sequenceLength|-|


#### Read
```csharp
Bio.IO.BAM.BAMIndexStorage.Read
```
Returns BAMIndex instance by parsing BAM index source.

#### Write
```csharp
Bio.IO.BAM.BAMIndexStorage.Write(Bio.IO.BAM.BAMIndex)
```
Writes specified BAMIndex data.

|Parameter Name|Remarks|
|--------------|-------|
|bamIndex|BAMIndex instance to write.|




### Properties

#### MaxBins
The highest number of bins allowed, meta-data can be stored in the chunks position for a bin
 this large
#### MaxLinerindexArraySize
The number of 16kb (2^14) bins in the indexing scheme
#### Source
Gets the underlying stream.

