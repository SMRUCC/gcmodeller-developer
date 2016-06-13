---
title: MUMmerAligner
---

# MUMmerAligner
_namespace: [Bio.Algorithms.MUMmer](N-Bio.Algorithms.MUMmer.html)_

This class is used for Align MUMs.

### Methods

#### #ctor
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.#ctor
```
Initializes a new instance of the MUMmerAligner class.
 Constructor for all the pairwise aligner 
 (NeedlemanWunsch, SmithWaterman, Overlap).
 Sets default similarity matrix and gap penalty.
 Users will typically reset these using parameters 
 specific to their particular sequences
 and needs.

#### Align
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.Align(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align aligns the reference sequence with query sequences using the affine gap model 
 (gap open and gap extension penalties)
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of query sequence.|

_returns: A list of sequence alignments._

#### AlignGap
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.AlignGap(Bio.ISequence,Bio.ISequence,System.Collections.Generic.List{System.Byte},System.Collections.Generic.List{System.Byte},System.Collections.Generic.List{System.Byte},Bio.Algorithms.SuffixTree.Match,Bio.Algorithms.SuffixTree.Match,System.Collections.Generic.List{System.Int64}@)
```
Align the Gap by executing pairwise alignment.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequence|Query Sequence.|
|sequenceResult1|Editable sequence containing alignment first result.|
|sequenceResult2|Editable sequence containing alignment second result.|
|consensusResult|Editable sequence containing consensus sequence.|
|mum1|First MUM of Gap.|
|mum2|Second MUM of Gap.|
|insertions|Insertions made to the aligned sequences.|

_returns: Score of alignment._

#### Alignment
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.Alignment(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
This method is considered as main execute method which defines the
 step by step algorithm. Derived class flows the defined flow by this
 method.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of input sequences.|

_returns: A list of sequence alignments._

#### AlignmentWithAccumulatedMUMs
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.AlignmentWithAccumulatedMUMs(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
This method is considered as main execute method which defines the
 step by step algorithm. Derived class flows the defined flow by this
 method. Store generated MUMs in properties MUMs, SortedMUMs.
 Alignment first finds MUMs for all the query sequence, and then 
 runs pairwise algorithm on gaps to produce alignments.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of input sequences.|

_returns: A list of sequence alignments._

#### AlignmentWithoutAccumulatedMUMs
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.AlignmentWithoutAccumulatedMUMs(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
This method is considered as main execute method which defines the
 step by step algorithm. Derived class flows the defined flow by this
 method. Does not store MUMs, processes MUMs and gaps to find 
 alignment directly.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of input sequences.|

_returns: A list of sequence alignments._

#### AlignSimple
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.AlignSimple(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align the reference sequence and query sequences using an affine gap model.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of query sequence.|

_returns: A list of sequence alignments._

#### Bio#Algorithms#Alignment#ISequenceAligner#Align
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.Bio#Algorithms#Alignment#ISequenceAligner#Align(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align aligns the set of input sequences using the affine gap model 
 (gap open and gap extension penalties)
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: A list of sequence alignments._

#### Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.Bio#Algorithms#Alignment#ISequenceAligner#AlignSimple(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align the list of input sequences using linear gap model.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: A list of sequence alignments._

#### CreateDefaultGap
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.CreateDefaultGap(System.Int64)
```
Create a default gap sequence of given length, pad the symbol - in sequence.

|Parameter Name|Remarks|
|--------------|-------|
|length|Length of gap.|

_returns: Hyphen padded sequence._

#### GetMumsForLIS
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.GetMumsForLIS(System.Collections.Generic.IEnumerable{Bio.Algorithms.SuffixTree.Match})
```
Generates a list of MUMs for computing LIS.

|Parameter Name|Remarks|
|--------------|-------|
|mums|MUMs generated by the MUMmer.|

_returns: List of MUMs._

#### ProcessGaps
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.ProcessGaps(Bio.ISequence,Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.Match})
```
Get all the gaps in each sequence and call pairwise alignment.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|sequence|Query sequence.|
|mums|List of MUMs.|

_returns: Aligned sequences._

#### RunPairWise
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.RunPairWise(Bio.ISequence,Bio.ISequence)
```
Get the alignment using pair wise.

|Parameter Name|Remarks|
|--------------|-------|
|seq1|Sequence 1.|
|seq2|Sequence 2.|

_returns: A list of sequence alignments._

#### Validate
```csharp
Bio.Algorithms.MUMmer.MUMmerAligner.Validate(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Validate the inputs.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequenceList|List of input sequences.|

_returns: Are inputs valid._



### Properties

#### AlignmentChar
Alignment Char.
#### AmbigiousMatchesAllowed
Gets or sets a value indicating whether Ambiguous matches are allowed or not.
#### ConsensusResolver
Gets or sets the object that will be used to compute the alignment's consensus.
#### Description
Gets the description of the Aligner. Intended to be filled in 
 by classes deriving from DynamicProgrammingPairwiseAligner class
 with the exact details of the Alignment algorithm.
#### GapExtensionCost
Gets or sets gap extension penalty for use in alignment algorithms. 
 Not used for alignments using a linear gap penalty.
 For alignments using an affine gap, this is the penalty to
 extend an existing gap.
 This is a negative number, for example GapExtensionCost = -2, not +2.
#### GapOpenCost
Gets or sets gap open penalty for use in alignment algorithms. 
 For alignments using a linear gap penalty, this is the gap penalty.
 For alignments using an affine gap, this is the penalty to open a new gap.
 This is a negative number, for example GapOpenCost = -8, not +8.
#### LengthOfMUM
Gets or sets the length of MUM.
#### MaximumMatchEnabled
Gets or sets a value indicating whether MaxMatch option should be enabled or not.
 If this property is set to true, then mums are generated irrespective of 
 uniqueness in query and reference sequences.
 By default this property is set to false, indicating that matches are unique in reference sequence only.
#### mums
Gets the list of MUMs after applying Longest Increasing Subsequence
 algorithm to order and merge MUMs, for each query sequence.
#### Name
Gets the name of the Aligner. Intended to be filled in 
 by classes deriving from DynamicProgrammingPairwiseAligner class
 with the exact name of the Alignment algorithm.
#### PairWiseAlgorithm
Gets or sets the pair wise aligner which will be executed 
 by end of Mummer.
#### SimilarityMatrix
Gets or sets similarity matrix for use in alignment algorithms.
#### storeMUMs
Gets or sets a value indicating whether the Boolean value indicating 
 whether MUMs generated are to be stored or not.
 Set to false by default.
 Note: Storing MUMs incur memory overhead.
#### UseGapExtensionCost
Gets or sets a value indicating whether to run Align or AlignSimple.

