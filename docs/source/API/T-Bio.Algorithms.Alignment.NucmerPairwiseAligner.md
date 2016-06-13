---
title: NucmerPairwiseAligner
---

# NucmerPairwiseAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Class which uses nucmer to perform an alignment.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.#ctor
```


#### AddReverseComplementsToSequenceList
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.AddReverseComplementsToSequenceList(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Given a list of sequences, create a new list with the original sequence followed
 by the Reverse Complement of that sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceList|List of sequence.|

_returns: Returns the List of sequence._

#### Align
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.Align(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Align aligns the set of input sequences using the affine gap model (gap open and gap extension penalties)
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|reference|Reference sequence.|
|querySequences|Query sequences.|


#### Alignment
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.Alignment(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence})
```
This method is considered as main execute method which defines the
 step by step algorithm. Derived class flows the defined flow by this
 method.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequenceList|Reference sequence.|
|originalQuerySequences|List of input sequences.|

_returns: A list of sequence alignment._

#### AlignSimple
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.AlignSimple(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
AlignSimple aligns the set of input sequences using the linear gap model (one gap penalty), 
 and returns the best alignment found.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to align.|

_returns: List of sequence alignments._

#### CalculateScore
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.CalculateScore(Bio.ISequence,Bio.ISequence)
```
Calculate the score of alignment.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequence|Query sequence.|

_returns: Score of the alignment._

#### ConcatSequence
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.ConcatSequence(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Concat all the sequences into one sequence with special character.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of reference sequence.|

_returns: Concatenated sequence._

#### ConvertDeltaToAlignment
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.ConvertDeltaToAlignment(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.DeltaAlignment})
```
Convert to delta alignments to sequence alignments.

|Parameter Name|Remarks|
|--------------|-------|
|alignments|List of delta alignments.|

_returns: List of Sequence alignment._

#### FindExtensionLength
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.FindExtensionLength(Bio.ISequence,System.Int32)
```
Find the index of extension.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence object.|
|index|Position at which extension starts.|

_returns: Last index of extension._

#### GetQuerySequences
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.GetQuerySequences(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Int64)
```
Gets the sequences except the sequence at specified index.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|IEnumerable of Sequences.|
|referenceIndex|Reference sequence index.|


#### GetReferenceSequence
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.GetReferenceSequence(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Int64)
```
Gets the sequence at specified index.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|IEnumerable of Sequences.|
|referenceIndex|Reference sequence index.|


#### MakeConsensus
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.MakeConsensus(Bio.ISequence,Bio.ISequence)
```
Analyze the given sequences and store a consensus into its Consensus property.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence.|
|querySequence|Query sequence.|

_returns: Consensus of sequences._

#### ReverseComplementSequenceList
```csharp
Bio.Algorithms.Alignment.NucmerPairwiseAligner.ReverseComplementSequenceList(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Given a list of sequences, create a new list with only the Reverse Complements
 of the original sequences.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceList|List of sequence.|

_returns: Returns the list of sequence._



### Properties

#### BreakLength
Gets or sets number of bases to be extended before stopping alignment.
#### ConsensusResolver
Gets or sets the consensus resolver attached with this aligner.
#### DefaultGapExtensionCost
Default gap extension penalty for use in alignment algorithms
#### DefaultGapOpenCost
Default gap open penalty for use in alignment algorithms
#### DefaultLengthOfMUM
Default minimum length of Matches to be searched in streaming process
#### Description
Gets or Sets the description of the algorithm.
#### FixedSeparation
Gets or sets maximum fixed diagonal difference.
#### ForwardOnly
Align only the forward strands of each sequence.
#### GapExtensionCost
Gets or sets the Gap Extension Cost.
#### GapOpenCost
Gets or sets the Gap Open Cost.
#### IsAlign
Gets or sets a value indicating whether to run Align or AlignSimple.
#### LengthOfMUM
Gets or sets minimum length of Match that can be considered as MUM.
#### MaximumSeparation
Gets or sets maximum separation between the adjacent matches in clusters.
#### MaxMatch
Use all anchor matches regardless of their uniqueness.
#### MinimumScore
Gets or sets minimum output score.
#### Name
Gets or Sets the name of the algorithm.
#### ReverseOnly
Align only the reverse strands of each sequence.
#### SeparationFactor
Gets or sets separation factor. Fraction equal to 
 (diagonal difference / match separation) where higher values
 increase the insertion or deletion (indel) tolerance.
#### SimilarityMatrix
Gets or sets the similarity matrix associated with this aligner.

