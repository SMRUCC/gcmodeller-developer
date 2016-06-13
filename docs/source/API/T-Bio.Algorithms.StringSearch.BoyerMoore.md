---
title: BoyerMoore
---

# BoyerMoore
_namespace: [Bio.Algorithms.StringSearch](N-Bio.Algorithms.StringSearch.html)_

Implements IPatternFinder interface.
 This class contains the implementation of Boyer-Moore string search algorithm.
 Reference: http://www-igm.univ-mlv.fr/~lecroq/string/node14.html

### Methods

#### FindMatch
```csharp
Bio.Algorithms.StringSearch.BoyerMoore.FindMatch(Bio.ISequence,System.String)
```
Find the matches for given searchString in sequence and returns
 the matched strings with indices found at.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Input sequence.|
|searchPattern|String to be searched.|

_returns: Matches found in sequence._

#### FindMismatchIndex
```csharp
Bio.Algorithms.StringSearch.BoyerMoore.FindMismatchIndex(Bio.ISequence,System.String,System.Int32,System.Int32@,System.Int32@)
```
Find the index at which mismatch occurs

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Input sequence.|
|searchPattern|String to be searched.|
|foundAt|current Found at index.|
|patternIndex|current positon in Input sequence.|
|patternfoundAt|Current posistion in string to be searched.|


#### GetBadCharacterShift
```csharp
Bio.Algorithms.StringSearch.BoyerMoore.GetBadCharacterShift(System.String)
```
Get the bad character heuristics. The text symbol that causes a mismatch, 
 occurs somewhere else in the pattern. Then the pattern can be shifted 
 so that it is aligned to this text symbol.

|Parameter Name|Remarks|
|--------------|-------|
|searchString|Input string.|

_returns: List of bad character shifts._

#### GetGoodSuffixShift
```csharp
Bio.Algorithms.StringSearch.BoyerMoore.GetGoodSuffixShift(System.String)
```
Get the good suffix heuristics. The pattern is shifted by the longest of the 
 two distances that are given by the bad character and the good suffix heuristics.

|Parameter Name|Remarks|
|--------------|-------|
|searchString|Input string.|

_returns: List of good suffix shift._

#### Suffixes
```csharp
Bio.Algorithms.StringSearch.BoyerMoore.Suffixes(System.String)
```
Get the good suffix from search string

|Parameter Name|Remarks|
|--------------|-------|
|searchString|Input string.|

_returns: Good suffixes_



### Properties

#### IgnoreCase
Gets or sets the value indicating whether the match is case sensitive
 
 Note that symbols in Sequence are always Upper case.
#### StartIndex
Gets or sets the Minimum start index of the match
#### Wildcard
Wildcard character

