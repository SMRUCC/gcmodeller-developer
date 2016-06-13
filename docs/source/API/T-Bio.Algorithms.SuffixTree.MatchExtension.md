---
title: MatchExtension
---

# MatchExtension
_namespace: [Bio.Algorithms.SuffixTree](N-Bio.Algorithms.SuffixTree.html)_

Maximum Unique Match Class.

### Methods

#### #ctor
```csharp
Bio.Algorithms.SuffixTree.MatchExtension.#ctor(Bio.Algorithms.SuffixTree.Match)
```
Initializes a new instance of the MaxUniqueMatchExtension class

|Parameter Name|Remarks|
|--------------|-------|
|mum|Maximum Unique Match|


#### CopyTo
```csharp
Bio.Algorithms.SuffixTree.MatchExtension.CopyTo(Bio.Algorithms.SuffixTree.MatchExtension)
```
Copy the content to MUM.

|Parameter Name|Remarks|
|--------------|-------|
|match|Maximum unique match.|


#### ToString
```csharp
Bio.Algorithms.SuffixTree.MatchExtension.ToString
```
Converts RefStart, QueryStart, Length, Score, WrapScore, IsGood of MatchExtension to string.
_returns: RefStart, QueryStart, Length, Score, WrapScore, IsGood._



### Properties

#### Adjacent
Gets or sets offset to adjacent MUM.
#### From
Gets or sets From (index representing the previous MUM to form LIS) of MUM.
#### ID
Gets or sets cluster Identifier.
#### IsGood
Gets or sets a value indicating whether MUM is Good candidate.
#### IsTentative
Gets or sets a value indicating whether MUM is Tentative candidate.
#### Length
Gets or sets the length of match.
#### Query
Gets or sets the Query sequence.
#### QuerySequenceMumOrder
Gets or sets Sequence Two's MaxUniqueMatch order.
#### QuerySequenceOffset
Gets or sets start index of this match in query sequence.
#### ReferenceSequenceMumOrder
Gets or sets Sequence one's MaxUniqueMatch order.
#### ReferenceSequenceOffset
Gets or sets the start index of this match in reference sequence.
#### Score
Gets or sets score of MUM.
#### WrapScore
Gets or sets wrap score.

