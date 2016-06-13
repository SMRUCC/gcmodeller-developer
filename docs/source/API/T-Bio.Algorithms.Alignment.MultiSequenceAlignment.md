---
title: MultiSequenceAlignment
---

# MultiSequenceAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_



### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.MultiSequenceAlignment.#ctor(System.Collections.Generic.IList{Bio.ISequence})
```


|Parameter Name|Remarks|
|--------------|-------|
|sequences|-|


#### MultipleAlignmentScoreFunction
```csharp
Bio.Algorithms.Alignment.MultiSequenceAlignment.MultipleAlignmentScoreFunction(System.Collections.Generic.List{Bio.ISequence},Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32)
```
Calculate alignment score of a set of aligned sequences.
 The score is the average over all pairs of sequences of their pairwise alignment score.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|a set of aligned sequences|
|similarityMatrix|similarity matrix|
|gapOpenPenalty|negative open gap penalty|
|gapExtensionPenalty|negative extension gap penalty|


#### PairWiseScoreFunction
```csharp
Bio.Algorithms.Alignment.MultiSequenceAlignment.PairWiseScoreFunction(Bio.ISequence,Bio.ISequence,Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32)
```
Calculate pairwise score of a pair of aligned sequences.
 The score is the sum over all position score given by the similarity matrix.
 The positions with only indels, e.g. gaps, are discarded. Gaps in the remaining 
 columns are assessed affined score: g + w * e, where g is open penalty, and e
 is extension penalty.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceA|aligned sequence|
|sequenceB|aligned sequence|
|similarityMatrix|similarity matrix|
|gapOpenPenalty|negative open gap penalty|
|gapExtensionPenalty|negative extension gap penalty|




### Properties

#### MsaScore

#### NumberOfColumns

#### NumberOfSequences

#### Sequences


