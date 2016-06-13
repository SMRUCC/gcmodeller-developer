---
title: DynamicProgrammingPairwiseAligner
---

# DynamicProgrammingPairwiseAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Base class for dynamic programming alignment algorithms, including NeedlemanWunsch, 
 SmithWaterman and PairwiseOverlap.
 The basic reference for this code (including NW, SW and Overlap) is Chapter 2 in 
 Biological Sequence Analysis; Durbin, Eddy, Krogh and Mitchison; Cambridge Press; 1998
 The variable names in these classes follow the notation in Durbin et al.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.#ctor
```
Initializes a new instance of the DynamicProgrammingPairwiseAligner class.
 Constructor for all the pairwise aligner (NeedlemanWunsch, SmithWaterman, Overlap).
 Sets default similarity matrix and gap penalties.
 Users will typically reset these using parameters specific to their particular sequences and needs.

#### AddSimpleConsensusToResult
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.AddSimpleConsensusToResult(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Adds consensus to the alignment result. At this point, it is a very simple algorithm
 which puts an ambiguity character where the two aligned sequences do not match.
 Uses X and N for protein and DNA/RNA alignments, respectively.

|Parameter Name|Remarks|
|--------------|-------|
|alignment|
            Alignment to which to add the consensus.  This is the result returned by the main Align
            or AlignSimple method, which contains the aligned sequences but not yet a consensus sequence.
            |


#### Align
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.Align(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32,Bio.ISequence,Bio.ISequence)
```
Pairwise alignment of two sequences using an affine gap penalty. The various algorithms in derived classes (NeedlemanWunsch, 
 SmithWaterman, and PairwiseOverlap) all use this general engine for alignment with an affine gap penalty.

|Parameter Name|Remarks|
|--------------|-------|
|localSimilarityMatrix|Scoring matrix.|
|gapOpenPenalty|Gap open penalty (by convention, use a negative number for this.).|
|gapExtensionPenalty|Gap extension penalty (by convention, use a negative number for this.).|
|inputA|First input sequence.|
|inputB|Second input sequence.|

_returns: A list of sequence alignments._

#### AlignSimple
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.AlignSimple(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,Bio.ISequence,Bio.ISequence)
```
Pairwise alignment of two sequences using a linear gap penalty. The various algorithms in derived classes (NeedlemanWunsch, 
 SmithWaterman, and PairwiseOverlap) all use this general engine for alignment with a linear gap penalty.

|Parameter Name|Remarks|
|--------------|-------|
|localSimilarityMatrix|Scoring matrix.|
|gapPenalty|Gap penalty (by convention, use a negative number for this.).|
|inputA|First input sequence.|
|inputB|Second input sequence.|

_returns: A list of sequence alignments._

#### Bio#Algorithms#Alignment#ISequenceAligner#Align
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.Bio#Algorithms#Alignment#ISequenceAligner#Align(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Aligns two sequences using the affine gap metric, a gap open penalty and a gap extension penalty.
 This method uses the existing gap open and extension penalties and similarity matrix.
 Set these using GapOpenCost, GapExtensionCost and SimilarityMatrix properties before calling this method.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|List of sequences to align.  Must contain exactly two sequences.|

_returns: A list of sequence alignments._

#### Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Aligns two sequences using a linear gap parameter, using existing gap open cost and similarity matrix.
 Set these using GapOpenCost and SimilarityMatrix properties before calling this method.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|List of sequences to align.  Must contain exactly two sequences.|

_returns: A list of sequence alignments._

#### CreateAffineAlignmentJob
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.CreateAffineAlignmentJob(Bio.ISequence,Bio.ISequence)
```
Creates the Affine aligner job

|Parameter Name|Remarks|
|--------------|-------|
|sequenceA|First aligned sequence|
|sequenceB|Second aligned sequence|


#### CreateSimpleAlignmentJob
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.CreateSimpleAlignmentJob(Bio.ISequence,Bio.ISequence)
```
Creates the Simple aligner job

|Parameter Name|Remarks|
|--------------|-------|
|sequenceA|First aligned sequence|
|sequenceB|Second aligned sequence|


#### InitializeAlign
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.InitializeAlign(Bio.ISequence)
```
Initializations to be done before aligning sequences.
 Sets consensus resolver property to correct alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequence|Input sequence.|


#### SimpleAlignPrimer
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.SimpleAlignPrimer(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,Bio.ISequence,Bio.ISequence)
```
Performs initializations and validations required 
 before carrying out sequence alignment.
 Initializes only gap open penalty. Initialization for
 gap extension, if required, has to be done separately.

|Parameter Name|Remarks|
|--------------|-------|
|similarityMatrix|Scoring matrix.|
|gapPenalty|Gap open penalty (by convention, use a negative number for this.).|
|inputA|First input sequence.|
|inputB|Second input sequence.|


#### ValidateAlignInput
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.ValidateAlignInput(Bio.ISequence,Bio.ISequence)
```
Validates input sequences and gap penalties.
 Checks that input sequences use the same alphabet.
 Checks that each symbol in the input sequences exists in the similarity matrix.
 Checks that gap penalties are less than or equal to 0.
 Throws exception if sequences fail these checks.
 Writes warning to ApplicationLog if gap penalty or penalties are positive.

|Parameter Name|Remarks|
|--------------|-------|
|inputA|First input sequence.|
|inputB|Second input sequence.|




### Properties

#### ConsensusResolver
Gets or sets the object that will be used to compute the alignment's consensus.
#### Description
Gets the description of the Aligner. Intended to be filled in 
 by classes deriving from DynamicProgrammingPairwiseAligner class
 with the exact details of the Alignment algorithm.
#### FirstInputSequence
First input sequence.
#### GapExtensionCost
Gets or sets gap extension penalty for use in alignment algorithms. 
 Not used for alignments using a linear gap penalty.
 For alignments using an affine gap, this is the penalty to extend an existing gap.
 This is a negative number, for example GapExtensionCost = -2, not +2.
#### GapOpenCost
Gets or sets gap open penalty for use in alignment algorithms. 
 For alignments using a linear gap penalty, this is the gap penalty.
 For alignments using an affine gap, this is the penalty to open a new gap.
 This is a negative number, for example GapOpenCost = -8, not +8.
#### InternalSimilarityMatrix
Similarity matrix for use in alignment algorithms.
#### Name
Gets the name of the Aligner. Intended to be filled in 
 by classes deriving from DynamicProgrammingPairwiseAligner class
 with the exact name of the Alignment algorithm.
#### SecondInputSequence
Second input sequence.
#### SimilarityMatrix
Gets or sets similarity matrix for use in alignment algorithms.

