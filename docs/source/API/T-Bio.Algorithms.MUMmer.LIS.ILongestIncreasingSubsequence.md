---
title: ILongestIncreasingSubsequence
---

# ILongestIncreasingSubsequence
_namespace: [Bio.Algorithms.MUMmer.LIS](N-Bio.Algorithms.MUMmer.LIS.html)_

This interface defines contract for classes implementing
 Longest increasing subsequence.

### Methods

#### GetLongestSequence
```csharp
Bio.Algorithms.MUMmer.LIS.ILongestIncreasingSubsequence.GetLongestSequence(System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.Match})
```
This method will run greedy version of 
 longest increasing subsequence algorithm on the list of Mum.

|Parameter Name|Remarks|
|--------------|-------|
|sortedMums|List of Sorted Mums.|

_returns: Returns the longest subsequence list of Mum._




