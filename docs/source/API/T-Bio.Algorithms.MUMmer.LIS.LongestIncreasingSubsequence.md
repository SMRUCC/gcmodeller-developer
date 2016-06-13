---
title: LongestIncreasingSubsequence
---

# LongestIncreasingSubsequence
_namespace: [Bio.Algorithms.MUMmer.LIS](N-Bio.Algorithms.MUMmer.LIS.html)_

This class implements an algorithm to find the longest increasing
 subsequence from the list of MUMs. In the process 
 1. Removes the criss-cross mums.
 2. Removes the overlapping portion of MUM by trimming the appropriate MUM.

### Methods

#### ConvertToMUMExtension
```csharp
Bio.Algorithms.MUMmer.LIS.LongestIncreasingSubsequence.ConvertToMUMExtension(System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.Match})
```
Convert given list of MUMs to MaxUniqueMatchExtension

|Parameter Name|Remarks|
|--------------|-------|
|sortedMums|List of MUMs|

_returns: List of MaxUniqueMatchExtension_

#### GetLongestSequence
```csharp
Bio.Algorithms.MUMmer.LIS.LongestIncreasingSubsequence.GetLongestSequence(System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.Match})
```
Find the longest increasing sub sequence from the given set of MUMs.

|Parameter Name|Remarks|
|--------------|-------|
|sortedMums|List of sorted MUMs.|

_returns: Longest Increasing Subsequence._

#### SortMum
```csharp
Bio.Algorithms.MUMmer.LIS.LongestIncreasingSubsequence.SortMum(System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.Match})
```
Sorts the MUMs.

|Parameter Name|Remarks|
|--------------|-------|
|mumList|List of MUMs.|

_returns: Sorted list of MUMs._




