---
title: BAMReferenceIndexes
---

# BAMReferenceIndexes
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Class to hold BAM file index information related to a reference sequence.
 Holds bin and linear index information for a reference sequence.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.BAMReferenceIndexes.#ctor
```
Create a new instance of the class that will be populated with data to make an instance.

#### AddReadToIndexInformation
```csharp
Bio.IO.BAM.BAMReferenceIndexes.AddReadToIndexInformation(Bio.IO.SAM.SAMAlignedSequence,Bio.IO.BAM.FileOffset)
```
Add a read being parsed to the index

|Parameter Name|Remarks|
|--------------|-------|
|alignedSequence|-|
|offset|-|


#### Freeze
```csharp
Bio.IO.BAM.BAMReferenceIndexes.Freeze
```
Finish creating the class.
 TODO: Separate out into factory method?



### Properties

#### Bins
Gets list of Bin index information.
#### FirstOffSetSeen
The location of the first offset in this file for a read from this index
#### HasMetaData
Does this read have meta data associated with it? (number of mapped/unmapped reads?)
 Note that the meta-data is not standardized yet across implementations
#### LastOffSetSeen
The location of the last offset in this file for a read from this index.
#### LinearIndex
Gets list of Linear file offsets.
 An array holding the linear offsets to be output
#### LinearIndexMaker
An array holding the linear offsets to be output
#### MappedReadsCount
Count of the number of mapped reads, may be inferred from index file.
#### UnMappedReadsCount
Count of the number of unmapped reads (Typically 
 those where a read does not align to a reference but its 
 mate does, though this is not guaranteed).

