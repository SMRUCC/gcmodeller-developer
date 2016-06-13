---
title: Cluster
---

# Cluster
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

An ordered list of matches between two a pair of sequences

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.Cluster.#ctor(System.Collections.Generic.IList{Bio.Algorithms.SuffixTree.MatchExtension},System.Boolean)
```
Initialize a reverse direction instance of the Cluster class

|Parameter Name|Remarks|
|--------------|-------|
|matches|List of matches|
|isReverse|True/False reverse query direction|


#### ToString
```csharp
Bio.Algorithms.Alignment.Cluster.ToString
```
Converts RefStart, QueryStart, Length, Score, WrapScore, IsGood for each cluster to string.
_returns: RefStart, QueryStart, Length, Score, WrapScore, IsGood for each cluster._



### Properties

#### ForwardDirection
Represents forward query sequence direction
#### internalMatches
List of maximum unique matches inside the cluster
#### IsFused
Gets or sets a value indicating whether the cluster is already fused
#### IsReverseQueryDirection
Returns TRUE if this is a REVERSE query sequence direction
#### Matches
Gets list of maximum unique matches inside the cluster
#### queryDirection
Gets or sets the query sequence direction
 FORWARD or REVERSE
#### ReverseDirection
Represents reverse query sequence direction

