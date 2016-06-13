---
title: MultiWaySuffixEdge
---

# MultiWaySuffixEdge
_namespace: [Bio.Algorithms.SuffixTree](N-Bio.Algorithms.SuffixTree.html)_

Structure to hold the suffix edge information.

### Methods

#### #ctor
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixEdge.#ctor(System.Int64)
```
Initializes a new instance of the MultiWaySuffixEdge struct.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Index of first symbol of the edge.|


#### GetEndIndex
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixEdge.GetEndIndex(System.Int64)
```
Gets or sets index of last character.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceLength|Length of the sequence for which 
            the suffix tree is created.|

_returns: Returns endIndex of this edge._



### Properties

#### Children
Holds child edges.
#### IsLeaf
Gets a value indicating whether the edge is at the leaf.
#### StartIndex
Gets or sets index of first symbol of this edge.
#### SuffixLink
Holds suffix links.

