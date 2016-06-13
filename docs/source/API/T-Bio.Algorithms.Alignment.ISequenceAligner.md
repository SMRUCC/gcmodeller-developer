---
title: ISequenceAligner
---

# ISequenceAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

A sequence aligner is an algorithm which takes N sequences as input and produces an 
 alignment of the sequences as output.

### Methods

#### Align
```csharp
Bio.Algorithms.Alignment.ISequenceAligner.Align(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align aligns the set of input sequences using the affine gap model (gap open and gap extension penalties)
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: List of sequence alignments._

#### AlignSimple
```csharp
Bio.Algorithms.Alignment.ISequenceAligner.AlignSimple(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
AlignSimple aligns the set of input sequences using the linear gap model (one gap penalty), 
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: List of sequence alignments._



### Properties

#### ConsensusResolver
Gets or sets the object that will be used to compute the alignment's consensus.
#### Description
Gets the description of the sequence alignment algorithm being
 implemented.This is intended to give developer
 some information of the alignment algorithm.
#### GapExtensionCost
Gets or sets value of GapExtensionCost 
 The GapExtensionCost is the cost of extending an already existing gap.
 This is used for the affine gap model, not used for the linear gap model.
#### GapOpenCost
Gets or sets value of GapOpenCost
 The GapOpenCost is the cost of inserting a gap character into 
 a sequence.
#### Name
Gets the name of the sequence alignment algorithm being
 implemented. This is intended to give developer
 some information of the alignment algorithm.
#### SimilarityMatrix
Gets or sets value of similarity matrix
 The similarity matrix determines the score for any possible pair
 of symbols that are encountered at a common location across the 
 sequences being aligned.

