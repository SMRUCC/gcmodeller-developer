---
title: PairwiseSequenceAligner
---

# PairwiseSequenceAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Base class for our pair-wise sequence aligners. This implements the core shared 
 portions of the Smith-Waterman and Needleman-Wunsch aligners.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.#ctor
```
Default constructor

#### Align
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.Align(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32,Bio.ISequence,Bio.ISequence)
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
Bio.Algorithms.Alignment.PairwiseSequenceAligner.AlignSimple(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,Bio.ISequence,Bio.ISequence)
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
Bio.Algorithms.Alignment.PairwiseSequenceAligner.Bio#Algorithms#Alignment#ISequenceAligner#Align(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align aligns the set of input sequences using the affine gap model (gap open and gap extension penalties)
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: List of sequence alignments._

#### Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
AlignSimple aligns the set of input sequences using the linear gap model (one gap penalty), 
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: List of sequence alignments._

#### CreateAlignment
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.CreateAlignment(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.PairwiseSequenceAligner.OptScoreMatrixCell})
```
This is step (3) in the dynamic programming model - to walk the traceback/scoring
 matrix and generate the alignment.

#### CreateAlignmentFromCell
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.CreateAlignmentFromCell(Bio.Algorithms.Alignment.PairwiseSequenceAligner.OptScoreMatrixCell)
```
This takes a specific starting location in the scoring matrix and generates
 an alignment from it using the traceback scores.

|Parameter Name|Remarks|
|--------------|-------|
|startingCell|Starting point|

_returns: Pairwise alignment_

#### CreateTracebackTable
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.CreateTracebackTable
```
This is step (2) in the dynamic programming model - to fill in the scoring matrix
 and calculate the traceback entries. This is algorithm specific and so is left
 as an abstract method.

#### DoAlign
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.DoAlign(Bio.ISequence,Bio.ISequence,System.Boolean)
```
Method which performs the alignment work.

|Parameter Name|Remarks|
|--------------|-------|
|sequence1|First sequence|
|sequence2|Second sequence|
|useAffineGapModel|True to use affine gap model (separate open vs. extension cost)|


#### GetByteArrayFromSequence
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.GetByteArrayFromSequence(Bio.ISequence)
```
Retrieve or copy the sequence array

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|


#### GetScoreTable
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.GetScoreTable
```
This method generates a textual representation of the scoring/traceback matrix
 for diagnostic purposes.
_returns: String_

#### Initialize
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.Initialize
```
This is step (1) in the dynamic programming model - to initialize the default values
 for the scoring matrix and traceback tables.

#### Process
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.Process
```
This method performs the pairwise alignment between two sequences (reference and query).
 It does this using the standard Dynamic Programming model:
 1. Initialization of the scoring matrix (Rs.Length x Qs.Length)
 2. Filling of the scoring matrix and traceback table
 3. Traceback (alignment)
_returns: Aligned sequences_

#### TracebackIsComplete
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAligner.TracebackIsComplete(System.Int32,System.Int32)
```
This method is used to determine when the traceback step is complete.
 It is algorithm specific.

|Parameter Name|Remarks|
|--------------|-------|
|row|Current row|
|col|Current column|

_returns: True if we are finished with the traceback step, false if not._



### Properties

#### _gap
The gap character being used for the shared alphabet between the reference and query sequence.
#### _sequence1
Original sequence
#### _sequence2
Original sequence #2
#### Cols
Columns in ScoreTable
#### ConsensusResolver
Gets or sets the object that will be used to compute the alignment's consensus.
#### Description
Gets the Description of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
#### GapExtensionCost
Gets or sets value of GapExtensionCost 
 The GapExtensionCost is the cost of extending an already existing gap.
 This is only used in the affine gap model
#### GapOpenCost
Gets or sets value of GapOpenCost
 The GapOpenCost is the cost of inserting a gap character into 
 a sequence.
#### h_Gap_Length
This array keeps track of the length of gaps up to a point along the horizontal axis.
 Only used with the affine gap model
#### IncludeScoreTable
True to include the score table and matrix as part of the output.
 This is placed into the Metadata for the alignment. It is turned off by
 default due to the expense of generating it.
#### Name
Gets the name of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
#### QuerySequence
The query sequence being aligned (sequence #2)
#### ReferenceSequence
The reference sequence being aligned (sequence #1)
#### Rows
Rows in ScoreTable
#### ScoreTable
Generated score table - this is filled in with the scoring matrix when debugging
#### SimilarityMatrix
Gets or sets value of similarity matrix
 The similarity matrix determines the score for any possible pair
 of symbols that are encountered at a common location across the 
 sequences being aligned.
#### Traceback
Traceback table built during the matrix creation step
#### usingAffineGapModel
A variable to keep track of whether the traceback table was constructed with an affine gap model.
#### v_Gap_Length
This array keeps track of the length of gaps up to a point along the vertical axis.
 nly used with the affine gap model.

