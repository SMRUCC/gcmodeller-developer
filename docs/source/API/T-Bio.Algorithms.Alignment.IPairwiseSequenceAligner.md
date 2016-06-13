---
title: IPairwiseSequenceAligner
---

# IPairwiseSequenceAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

A sequence alignment algorithm that aligns exactly two 
 sequences. This may diverge from ISequenceAligner at some 
 point; meanwhile, it's important to maintain the distinction
 (e.g., assembly requires a pairwise algorithm).

### Methods

#### Align
```csharp
Bio.Algorithms.Alignment.IPairwiseSequenceAligner.Align(Bio.ISequence,Bio.ISequence)
```
A convenience method - we know there are exactly two inputs.
 Align uses the affine gap model, which requires a gap open and a gap extension penalty.

|Parameter Name|Remarks|
|--------------|-------|
|sequence1|First input sequence.|
|sequence2|Second input sequence.|

_returns: List of Aligned Sequences._

#### AlignSimple
```csharp
Bio.Algorithms.Alignment.IPairwiseSequenceAligner.AlignSimple(Bio.ISequence,Bio.ISequence)
```
A convenience method - we know there are exactly two inputs.
 AlignSimple uses a single gap penalty.

|Parameter Name|Remarks|
|--------------|-------|
|sequence1|First input sequence.|
|sequence2|Second input sequence.|

_returns: List of Aligned Sequences._




