---
title: IPairwiseSequenceAlignment
---

# IPairwiseSequenceAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

An IPairwiseSequenceAlignment is the result of running a Pairwise alignment algorithm on a set 
 of two sequences.

### Methods

#### AddSequence
```csharp
Bio.Algorithms.Alignment.IPairwiseSequenceAlignment.AddSequence(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Add a new Aligned Sequence Object to the end of the list.

|Parameter Name|Remarks|
|--------------|-------|
|pairwiseAlignedSequence|The PairwiseAlignedSequence to add.|




### Properties

#### FirstSequence
Gets accessor for the first sequence.
#### PairwiseAlignedSequences
Gets list of the (output) aligned sequences with score, offset and consensus.
#### SecondSequence
Gets accessor for the second sequence.

