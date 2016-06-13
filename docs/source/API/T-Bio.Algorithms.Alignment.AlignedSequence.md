---
title: AlignedSequence
---

# AlignedSequence
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

AlignedSequence is a class containing the single aligned unit of alignment.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.AlignedSequence.#ctor(Bio.Algorithms.Alignment.IAlignedSequence)
```
Initializes a new instance of the AlignedSequence class
 Internal constructor to create AlignedSequence instance from IAlignedSequence.

|Parameter Name|Remarks|
|--------------|-------|
|alignedSequence|IAlignedSequence instance.|


#### ToString
```csharp
Bio.Algorithms.Alignment.AlignedSequence.ToString
```
Converts sequenceData of all the Sequences in the list to string.
_returns: sequenceData of all the Sequences in the list._



### Properties

#### Metadata
Gets information about the AlignedSequence, like score, offsets, consensus, etc..
#### Sequences
Gets list of sequences involved in the alignment.

