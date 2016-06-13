---
title: ContigGraph
---

# ContigGraph
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph](N-Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.html)_

Representation of a De Bruijn Graph.
 Graph is encoded as a collection of de Bruijn nodes.
 The nodes themselves hold the adjacency information.

### Methods

#### AddContigGraphEdges
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.AddContigGraphEdges(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node[],System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.List{System.Int32}},System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.List{System.Int32}})
```
Checks for and adds edges between contigs 
 based on left, right kmer maps.

|Parameter Name|Remarks|
|--------------|-------|
|contigNodes|Array of contig nodes.|
|leftKmerMap|Map of left k-mer to contig nodes.|
|rightKmerMap|Map of right k-mer to contig nodes.|


#### BuildContigGraph
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.BuildContigGraph(System.Collections.Generic.IList{Bio.ISequence},System.Int32)
```
Builds a contig graph from kmer graph using contig data information.
 Creates a graph node for each contig, computes adjacency 
 for contig graph using edge information in kmer graph.
 Finally, all kmer nodes are deleted from the graph.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contig data.|
|kmerLength|Kmer length.|


#### Dispose
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.Dispose(System.Boolean)
```
Dispose field instances.

|Parameter Name|Remarks|
|--------------|-------|
|disposeManaged|If disposeManaged equals true, clean all resources.|


#### GenerateContigAdjacency
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.GenerateContigAdjacency(System.Collections.Generic.IList{Bio.ISequence},System.Int64,Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node[])
```
Generate adjacency information between contig nodes
 by computing overlapping regions between contig sequences.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contig data.|
|kmerLength|Kmer length.|
|contigNodes|Array of contig nodes.|


#### GetNodeSequence
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.GetNodeSequence(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node)
```
Gets the sequence for kmer associated with input node.
 Uses index and position information along with base sequence 
 to construct sequence. 
 There should be atleast one valid position in the node.
 Since all positions indicate the same kmer sequence, 
 the position information from the first kmer is used
 to construct the sequence.

|Parameter Name|Remarks|
|--------------|-------|
|node|Graph Node.|

_returns: Sequence associated with input node._

#### RemoveNodes
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.RemoveNodes(System.Collections.Generic.IEnumerable{Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node})
```
Remove all nodes in input list from graph.

|Parameter Name|Remarks|
|--------------|-------|
|nodes|Nodes to be removed.|


#### ValidateGraph
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph.ValidateGraph(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph)
```
Validate input graph.
 Throws exception if graph is null.

|Parameter Name|Remarks|
|--------------|-------|
|graph|Input graph.|




### Properties

#### baseSequences
Base sequence that holds the list of input sequences.
 Nodes reference into base sequence for k-mers.
#### kmerNodes
List of graph nodes.
#### Nodes
Gets the list of nodes in graph.

