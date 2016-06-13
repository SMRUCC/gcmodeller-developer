---
title: DifferenceNode
---

# DifferenceNode
_namespace: [Bio](N-Bio.html)_

Node that tracks difference between the two sequences.

### Methods

#### #ctor
```csharp
Bio.DifferenceNode.#ctor(System.Int32,System.Int32,System.Int32,System.Int32)
```
Initializes a new instance of the DifferenceNode class.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex1|Start index in first sequence|
|startIndex2|Start index in second sequence|
|endIndex1|End index in first sequence|
|endIndex2|End index in second sequence|


#### BuildDiffList
```csharp
Bio.DifferenceNode.BuildDiffList(System.Collections.Generic.List{Bio.WordMatch},Bio.ISequence,Bio.ISequence)
```
Builds difference list from match list

|Parameter Name|Remarks|
|--------------|-------|
|matchList|List of matching segments|
|sequence1|First sequence|
|sequence2|Second sequence|

_returns: List of difference nodes_

#### CompareDifferenceNode
```csharp
Bio.DifferenceNode.CompareDifferenceNode(Bio.WordMatch,Bio.WordMatch)
```
Comparison of two word match list nodes
 based on the first sequence start indices

|Parameter Name|Remarks|
|--------------|-------|
|n1|First match list node|
|n2|Second match list node|

_returns: Integer value indicating zero if equal._

#### ComputeFeatures
```csharp
Bio.DifferenceNode.ComputeFeatures(System.Int32,System.Int32,System.Int32,System.Int32,Bio.ISequence,Bio.ISequence,System.Int32,System.Int32)
```
Computes features for current difference

|Parameter Name|Remarks|
|--------------|-------|
|sequence1Start|Start index of difference in first sequence|
|sequence2Start|Start index of difference in second sequence|
|sequence1End|End index of difference in first sequence|
|sequence2End|End index of difference in second sequence|
|sequence1|First sequence|
|sequence2|Second sequence|
|sequence1Index|First sequence index|
|sequence2Index|Second sequence index|

_returns: List of features_

#### OutputDiffList
```csharp
Bio.DifferenceNode.OutputDiffList(System.Collections.Generic.List{Bio.DifferenceNode},Bio.ISequence,Bio.ISequence)
```
Constructs output from input difference list

|Parameter Name|Remarks|
|--------------|-------|
|diffList|Difference list|
|sequence1|First Sequence|
|sequence2|Second Sequence|

_returns: List of features_

#### ToString
```csharp
Bio.DifferenceNode.ToString
```
Constructs a user-friendly string representation.
 Used for debug purpose.
_returns: String representation_



### Properties

#### sequence1End
Gets end index of difference in first sequence
#### sequence1Start
Gets start index of difference in first sequence
#### sequence2End
Gets end index of difference in second sequence
#### sequence2Start
Gets start index of difference in second sequence

