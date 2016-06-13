---
title: ISuffixTree
---

# ISuffixTree
_namespace: [Bio.Algorithms.SuffixTree](N-Bio.Algorithms.SuffixTree.html)_

This interface defines the contract to be implemented by suffix tree class.

### Methods

#### SearchMatches
```csharp
Bio.Algorithms.SuffixTree.ISuffixTree.SearchMatches(Bio.ISequence)
```
Gets the matches who's length are greater than or equal to the MinLengthOfMatch.

|Parameter Name|Remarks|
|--------------|-------|
|searchSequence|Query sequence.|

_returns: Returns IEnumerable of matches._

#### SearchMatchesUniqueInReference
```csharp
Bio.Algorithms.SuffixTree.ISuffixTree.SearchMatchesUniqueInReference(Bio.ISequence)
```
Gets the matches unique in reference sequence whos are greater than or equal to the MinLengthOfMatch.

|Parameter Name|Remarks|
|--------------|-------|
|searchSequence|Query sequence.|

_returns: Returns IEnumerable of matches._



### Properties

#### MinLengthOfMatch
Gets or sets Minimum length of match required.
#### Name
Gets the Name of the suffix tree.
#### NoAmbiguity
Gets or sets a value indicating whether to match
 basic symbols only by ignoring the ambiguous symbols or not.
#### Sequence
Gets sequence of Suffix Tree.

