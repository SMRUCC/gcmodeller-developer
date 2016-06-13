---
title: TracePath
---

# TracePath
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Performs Breadth First Search on Contig Overlap Graph
 using distance between contigs as constrain.

### Methods

#### DistanceConstraint
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.DistanceConstraint(Bio.Algorithms.Assembly.Padena.Scaffold.Paths,System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair}})
```
Apply Distance constrains on given two nodes.
 The distances between contigs are calculated using paired read information.

|Parameter Name|Remarks|
|--------------|-------|
|childPath|Destination node.|
|contigPairedReadMaps|Map of contigs and paired reads.|

_returns: Whether Distance between contig nodes lie in constraint or not._

#### FindPaths
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.FindPaths(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph,Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs,System.Int32,System.Int32)
```
Performs Breadth First Search to traverse through graph to generate scaffold paths.

|Parameter Name|Remarks|
|--------------|-------|
|overlapGraph|Contig Overlap Graph.|
|contigPairedReadMaps|InterContig Distances.|
|lengthOfKmer|Length of Kmer.|
|searchDepth|Depth to which graph is searched.|

_returns: List of paths/scaffold._

#### GetPathLength
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.GetPathLength(Bio.Algorithms.Assembly.Padena.Scaffold.Paths)
```
Get length of path traversed using BFS.

|Parameter Name|Remarks|
|--------------|-------|
|childPath|Path travelled to reach destination node.|

_returns: Distance between first and last contig node._

#### LeftExtension
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.LeftExtension(System.Collections.Generic.KeyValuePair{Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Edge},System.Collections.Generic.Queue{Bio.Algorithms.Assembly.Padena.Scaffold.Paths},System.Collections.Generic.List{Bio.Algorithms.Assembly.Padena.Scaffold.Paths},Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath,System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair}})
```
Add left extension of the nodes to queue.

|Parameter Name|Remarks|
|--------------|-------|
|node|Current node.|
|search|Queue for BFS.|
|paths|List of paths.|
|familyTree|Nodes visited for construction of paths.|
|contigPairedReadMap|Contig and valid mate pair map.|


#### RightExtension
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.RightExtension(System.Collections.Generic.KeyValuePair{Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Edge},System.Collections.Generic.Queue{Bio.Algorithms.Assembly.Padena.Scaffold.Paths},System.Collections.Generic.List{Bio.Algorithms.Assembly.Padena.Scaffold.Paths},Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath,System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair}})
```
Add right extension of the nodes to queue.

|Parameter Name|Remarks|
|--------------|-------|
|node|Current node.|
|search|Queue for BFS.|
|paths|List of paths.|
|familyTree|Nodes visited for construction of paths.|
|contigPairedReadMap|Contig and valid mate pair map.|


#### TraverseGraph
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.TracePath.TraverseGraph(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair}})
```
Performs Breadth First Search.

|Parameter Name|Remarks|
|--------------|-------|
|node|Start Node.|
|contigPairedReadMap|Map of all contigs having valid 
            mate pairs with given node contig.|

_returns: List of paths._



### Properties

#### depth
Depth to which graph is traversed.
#### graph
Contig Overlap Graph.
#### kmerLength
Length of Kmer (indicates kmer -1 overlap between contigs).

