---
title: PairwiseOverlapAligner
---

# PairwiseOverlapAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Implements the pair-wise overlap alignment algorithm described in Chapter 2 of
 Biological Sequence Analysis; Durbin, Eddy, Krogh and Mitchison; Cambridge Press; 1998.

### Methods

#### CreateAffineAlignmentJob
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapAligner.CreateAffineAlignmentJob(Bio.ISequence,Bio.ISequence)
```
Creates the Affine aligner job

|Parameter Name|Remarks|
|--------------|-------|
|sequenceA|First aligned sequence|
|sequenceB|Second aligned sequence|


#### CreateSimpleAlignmentJob
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapAligner.CreateSimpleAlignmentJob(Bio.ISequence,Bio.ISequence)
```
Creates the Simple aligner job

|Parameter Name|Remarks|
|--------------|-------|
|sequenceA|First aligned sequence|
|sequenceB|Second aligned sequence|




### Properties

#### Description
Gets the description of the pair-wise-Overlap algorithm used.
 This is a overridden property from the abstract parent.
 This property returns a simple description of what 
 PairwiseOverlapAligner class implements.
#### Name
Gets the name of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
 This property returns the Name of our algorithm i.e 
 pair-wise-Overlap algorithm.

