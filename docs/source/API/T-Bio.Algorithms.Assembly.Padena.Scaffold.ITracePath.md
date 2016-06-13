---
title: ITracePath
---

# ITracePath
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Traverse through Contig overalp graphs to generate scaffold paths.

### Methods

#### FindPaths
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ITracePath.FindPaths(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph,Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs,System.Int32,System.Int32)
```
Performs Breadth First Search to traverse through graph to generate scaffold paths.

|Parameter Name|Remarks|
|--------------|-------|
|overlapGraph|Contig Overlap Graph.|
|contigPairedReadMaps|InterContig Distances.|
|lengthOfKmer|Length of Kmer|
|searchDepth|Depth to which graph is searched.|

_returns: List of paths/scaffold_




