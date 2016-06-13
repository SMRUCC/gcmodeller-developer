---
title: PairwiseAlignedSequence
---

# PairwiseAlignedSequence
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

PairwiseAlignedSequence is a class containing the single aligned unit of pairwise alignment.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.PairwiseAlignedSequence.#ctor(Bio.Algorithms.Alignment.IAlignedSequence)
```
Initializes a new instance of the PairwiseAlignedSequence class
 Internal constructor for creating new instance of 
 PairwiseAlignedSequence from specified IAlignedSequence.

|Parameter Name|Remarks|
|--------------|-------|
|alignedSequence|IAlignedSequence instance.|


#### ToString
```csharp
Bio.Algorithms.Alignment.PairwiseAlignedSequence.ToString
```
Converts the Consensus, First and Second sequences.
_returns: Consensus, First and Second sequences._



### Properties

#### Consensus
Gets or sets Consensus of FirstSequence and SecondSequence.
#### ConsensusKey
Constant string indicating consensus in meta-data.
#### FirstOffset
Gets or sets Offset of FirstSequence.
#### FirstOffsetKey
Constant string indicating offset of first sequence in alignment.
#### FirstSequence
Gets or sets Alignment of First Sequence.
#### Score
Gets or sets Score of the alignment.
#### ScoreKey
Constant string indicating alignment score in meta-data.
#### SecondOffset
Gets or sets Offset of SecondSequence.
#### SecondOffsetKey
Constant string indicating offset of second sequence in alignment.
#### SecondSequence
Gets or sets Alignment of Second Sequence.

