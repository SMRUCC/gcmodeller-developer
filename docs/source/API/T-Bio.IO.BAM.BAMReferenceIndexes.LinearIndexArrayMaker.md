---
title: LinearIndexArrayMaker
---

# LinearIndexArrayMaker
_namespace: [Bio.IO.BAM.BAMReferenceIndexes](N-Bio.IO.BAM.BAMReferenceIndexes.html)_

Array which holds the linear index and associated offsets for each 
 of the bins possible for all 16 kb regions of this sequence.

### Methods

#### Freeze
```csharp
Bio.IO.BAM.BAMReferenceIndexes.LinearIndexArrayMaker.Freeze
```
Called after all the data has been added

#### UpdateLinearArrayIndex
```csharp
Bio.IO.BAM.BAMReferenceIndexes.LinearIndexArrayMaker.UpdateLinearArrayIndex(Bio.IO.SAM.SAMAlignedSequence,Bio.IO.BAM.FileOffset)
```
Update the linear index array based on an aligned read and its current coordinates

|Parameter Name|Remarks|
|--------------|-------|
|alignedSeq|-|
|offset|-|





