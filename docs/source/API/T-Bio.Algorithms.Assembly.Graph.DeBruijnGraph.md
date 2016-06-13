---
title: DeBruijnGraph
---

# DeBruijnGraph
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Representation of a De Bruijn Graph.
 Graph is encoded as a collection of de Bruijn nodes.
 The nodes themselves hold the adjacency information.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.#ctor(System.Int32)
```
Initializes a new instance of the DeBruijnGraph class.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|


#### Build
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.Build(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Build graph nodes and edges from list of k-mers.
 Creates a node for every unique k-mer (and reverse-complement) 
 in the read. Then, generates adjacency information between nodes 
 by computing pairs of nodes that have overlapping regions 
 between node sequences.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of input sequences.|


#### CompactDeletedNodesFromBigList
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.CompactDeletedNodesFromBigList
```
Compact the node list by removing deleted nodes

#### CompactDeletedNodesFromList
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.CompactDeletedNodesFromList
```
Compact the node list by removing deleted nodes

#### GenerateLinks
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GenerateLinks(Bio.Algorithms.Assembly.Graph.KmerDictionary)
```
Adds the links between the nodes of the graph.

#### GetMarkedNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GetMarkedNodes
```
Gets the nodes present in this graph.
 Nodes marked for delete are not returned.
_returns: List of DeBruin node that are maked for deletion._

#### GetNextSymbolFrom
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GetNextSymbolFrom(Bio.Algorithms.Assembly.Graph.DeBruijnNode,System.Boolean,System.Boolean)
```
Gets the last or first symbol in the node depending on the isForwardDirection flag is true or false.
 If the isSameOrientation flag is false then symbol will be taken from the ReverseComplement of the kmer data.

|Parameter Name|Remarks|
|--------------|-------|
|node|DeBruijn node.|
|isForwardDirection|Flag to indicate whether the node is in forward direction or not.|
|isSameOrientation|Flag to indicate the orientation.|

_returns: Byte represnting the symbol._

#### GetNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GetNodes
```
Gets the nodes present in this graph.
 Nodes marked for delete are not returned.
_returns: The list of all available nodes in the graph._

#### GetNodeSequence
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GetNodeSequence(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Gets the sequence from the specified node.

|Parameter Name|Remarks|
|--------------|-------|
|node|DeBruijn node.|

_returns: Returns an instance of sequence._

#### GetUnvisitedNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.GetUnvisitedNodes
```
Return all nodes in the array with the visit flag set to false.

#### RemoveDeletedNodesFromArray
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.RemoveDeletedNodesFromArray
```
Cleans out the deleted nodes from the array

#### RemoveMarkedNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.RemoveMarkedNodes
```
Removes the nodes which are marked for delete.

#### RemoveNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.RemoveNodes(System.Collections.Generic.IEnumerable{Bio.Algorithms.Assembly.Graph.DeBruijnNode})
```
Remove all nodes in input list from graph.

|Parameter Name|Remarks|
|--------------|-------|
|nodesToRemove|Nodes to be removed.|


#### SetNodeVisitState
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.SetNodeVisitState(System.Boolean)
```
Change the VisitFlag of all nodes in the graph

|Parameter Name|Remarks|
|--------------|-------|
|stateToSet|Visited or Not?|


#### ValidateGraph
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnGraph.ValidateGraph(Bio.Algorithms.Assembly.Graph.DeBruijnGraph)
```
Validate input graph.
 Throws exception if graph is null.

|Parameter Name|Remarks|
|--------------|-------|
|graph|Input graph.|




### Properties

#### _nodeCount
Holds node count.
#### _nodes
Collection of nodes in the graph.
#### _nodesNeedCompacting
Flag to indicate if the node collection should be compacted
 must be set whenever nodes are deleted;
#### _processedSequencesCount
Holds the number of input sequences processed while building graph.
#### _skippedSequencesCount
Holds number of sequences skipped while building graph.
#### GraphBuildCompleted
Gets a value indicating that whether the graph is built or not.
#### KmerLength
Gets the kmerlength of the graph.
#### LinkGenerationCompleted
Gets a value indicating that whether the Link generating is completed or not.
#### NodeCount
Gets or sets the number of nodes available in the graph.
#### ProcessedSequencesCount
Gets number of sequences processed while building the graph.
#### SkippedSequencesCount
Gets number of sequences skipped from the input sequences.

