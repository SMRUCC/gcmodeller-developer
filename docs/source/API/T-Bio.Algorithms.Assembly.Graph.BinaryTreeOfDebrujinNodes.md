---
title: BinaryTreeOfDebrujinNodes
---

# BinaryTreeOfDebrujinNodes
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

A Binary Search Tree for Debruijin Nodes

### Methods

#### AddOrReturnCurrent
```csharp
Bio.Algorithms.Assembly.Graph.BinaryTreeOfDebrujinNodes.AddOrReturnCurrent(Bio.Algorithms.Kmer.KmerData32)
```
Tries to add specified value to the BinaryTree.
 If the value is already present in the tree then this method returns the value already in the tree.
 Useful when two values that are equal by comparison are not equal by reference.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to add.|

_returns: Returns the value added or already in the tree, else returns false._

#### GetNodes
```csharp
Bio.Algorithms.Assembly.Graph.BinaryTreeOfDebrujinNodes.GetNodes
```
Gets all nodes in tree.

#### MakeNewNode
```csharp
Bio.Algorithms.Assembly.Graph.BinaryTreeOfDebrujinNodes.MakeNewNode(Bio.Algorithms.Kmer.KmerData32)
```
Makes a new DeBruijinNode for a kmer, ignores orientation

|Parameter Name|Remarks|
|--------------|-------|
|value|Kmer to make node with|


#### SearchTree
```csharp
Bio.Algorithms.Assembly.Graph.BinaryTreeOfDebrujinNodes.SearchTree(Bio.Algorithms.Kmer.KmerData32)
```
Searches for a particular node in the tree.

|Parameter Name|Remarks|
|--------------|-------|
|kmerValue|The node to be searched.|

_returns: Actual node in the tree._



### Properties

#### _root
Holds Root node.
#### Count
Gets number of elements present in the BinaryTree.

