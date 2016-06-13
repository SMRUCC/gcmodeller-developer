---
title: ModifiedSmithWaterman
---

# ModifiedSmithWaterman
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Implements algorithm to extend given pair of sequences in
 specified direction. This implementation is specific to NUCmer.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.#ctor
```
Initializes a new instance of the ModifiedSmithWaterman class

#### ExtendSequence
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.ExtendSequence(Bio.ISequence,System.Int64,System.Int64@,Bio.ISequence,System.Int64,System.Int64@,System.Collections.Generic.IList{System.Int64},System.Int32)
```
Performs the function specified by the methodName on given pair of
 sequences, represented by the start and end indices.
 Find the diagonal in which the highest score is achieved
 1. Find the dimension of score matrix
 2. Calculate diagonals till maximum score is reached or the end 
 (free the Nodes memory as when the values are no more required)
 a. Create and fill the Matrix
 b. Trim unrequired diagonal nodes (left)
 c. Trim unrequired diagonal nodes (right)
 3. Trace the path back to the highest scoring diagonal and generate the delta

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence|
|referenceStart|Start index of the reference sequence|
|referenceEnd|End index of the reference sequence|
|querySequence|Query sequence|
|queryStart|Start index of the query sequence|
|queryEnd|End index of the query sequence|
|deltas|List of deltas|
|methodName|Name of the method to be implemented|

_returns: Is aligned_

#### GenerateDelta
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.GenerateDelta(System.Collections.Generic.List{Bio.Algorithms.Alignment.Diagonal},System.Int64,System.Int64,System.Int64,System.Collections.Generic.IList{System.Int64})
```
Generate the list of delta

|Parameter Name|Remarks|
|--------------|-------|
|diagonals|List of diagonals|
|counter|diagonal index|
|currentDiagonal|Current diagonal index|
|length|Length of sequence|
|deltas|list of Deltas|


#### GetMatchScore
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.GetMatchScore(System.Int32,System.Int32,Bio.ISequence,System.Int64,Bio.ISequence,System.Int64,System.Int64,System.Int32)
```
Find the Score of the given match

|Parameter Name|Remarks|
|--------------|-------|
|diagonalCounter|diagonal counter|
|diagonalIndex|diagonal index|
|referenceSequence|Reference sequence|
|referenceIndex|Index of symbol in reference|
|querySequence|Query sequence|
|queryIndex|Index of symbol in query|
|length|Length of diagonal|
|methodName|Name of the method to be implemented|

_returns: match Score_

#### GetMaximumScore
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.GetMaximumScore(Bio.Algorithms.Alignment.Score[])
```
Find the Maximum Score in given list

|Parameter Name|Remarks|
|--------------|-------|
|scores|List of scores|

_returns: Maximum score_

#### SetScore
```csharp
Bio.Algorithms.Alignment.ModifiedSmithWaterman.SetScore(Bio.Algorithms.Alignment.Score,System.Int32,System.Int32,System.Int32)
```
Calculate the score of operation

|Parameter Name|Remarks|
|--------------|-------|
|currentScore|Current Score|
|deleteScore|Score of delete|
|insertScore|Score of Insert|
|matchScore|Score of match|




### Properties

#### AlignFlag
Perform alignment
#### BackwardAlignFlag
Align backward till the score or target reached
#### BreakLength
Gets or sets number of bases to be extended before stopping alignment
#### DefaultBreakLength
Number of bases to be extended before stopping alignment
#### DefaultGapExtensionScore
Default substitution score
#### DefaultGapOpeningScore
Default gap opening score
#### DefaultValidScore
Default valid score
#### DeleteState
Represents deletion at the given base
#### DirectionFlag
Direction in which the method has to be implemented
#### ForcedFlag
Force the alignment till the end irrespective of the score
#### ForcedForwardAlignFlag
Ignore score and align to reach the target
#### ForwardAlignFlag
Align forward till the score or target reached
#### GapExtensionScore
Gets or sets substitution score
#### gapOpeningScore
Gets or sets gap opening score
#### InsertState
Represents insertioin at the given base
#### MatchState
Represents a match at the given base
#### MaximumAlignmentLength
Maximum number of bases till the alignment can be extended
#### NoneState
unknown state at the given base
#### OptimalFlag
Maximise the alignment score
#### SeqendFlag
Align till end of shortest sequence
#### SimilarityMatrix
Gets or sets diagonal score to be used to calculate scores.
#### StartState
Represents a start at the given base
#### StopCharacter
Use this character if non alphabet is encountered in sequence
#### ValidScore
Gets or sets valid score

