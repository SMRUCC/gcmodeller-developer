---
title: Node
---

# Node
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph](N-Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.html)_

Represents a node in the Overlap graph
 A node is associated with a contig. 
 Also holds adjacency information with other nodes.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.#ctor(System.Int64,System.Int32)
```
Initializes a new instance of the Node class.
 Creates graph node with sequence index.

|Parameter Name|Remarks|
|--------------|-------|
|length|Length of contig.|
|sequenceIndex|Sequence Index for contig.|


#### AddLeftEndExtension
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.AddLeftEndExtension(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,System.Boolean)
```
Add node with given orientation to left extension edges.
 Not thread-safe. Use lock at caller if required.

|Parameter Name|Remarks|
|--------------|-------|
|node|Node to add left-extension to.|
|isSameOrientation|Orientation of connecting edge.|


#### AddRightEndExtension
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.AddRightEndExtension(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,System.Boolean)
```
Add node with given orientation to right extension edges.
 Not thread-safe. Use lock at caller if required.

|Parameter Name|Remarks|
|--------------|-------|
|node|Node to add right-extension to.|
|isSameOrientation|Orientation of connecting edge.|


#### IsMarked
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.IsMarked
```
Check if node is marked as visited
 Checks if the contig count field is set to a specific value.
_returns: True if marked; otherwise false._

#### MarkNode
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.MarkNode
```
Mark nodes as visited.
 WARNING: DO NOT USE this if you need contig count information.
 contig count field is being re-used for this purpose.
 Old value of contig count will be over-written.

#### ValidateNode
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node.ValidateNode(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node)
```
Check if input node is null.

|Parameter Name|Remarks|
|--------------|-------|
|node|Input node.|




### Properties

#### contigLength
Gets the length of contig.
#### coverage
Coverage of contig. (No. of reads aligned to contig)
#### ExtensionsCount
Gets the total number of extension edges for the node.
#### isMarked
Depicts that whether the node is marked or not.
#### leftEndExtensionNodes
Left Extension edges. Edge contains connecting node, and orientation of edge. 
 A left-end extension edge will be added from node A to node B, if there is an 
 overlap of length (k-1) between left end of sequence A and right end of sequences B. 
 Orientation is same, if overlapping sequences in adjacent nodes 
 are normal orientation. Orientation is opposite, if one of the 
 sequences is reverse complement.
#### LeftExtensionNodes
Gets the left extension edges.
#### rightEndExtensionNodes
Right Extension edges. Edge contains connecting node, and orientation of edge. 
 A right-end extension edge will be added from node A to node B, if there is an 
 overlap of length (k-1) between right end of sequence A and left end of sequences B. 
 Orientation is same, if overlapping sequences in adjacent nodes 
 are normal orientation. Orientation is opposite, if one of the 
 sequences is reverse complement.
#### RightExtensionNodes
Gets the right extension edges.
#### sequenceIndex
Gets index of source sequence for contig.

