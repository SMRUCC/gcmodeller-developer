---
title: DeBruijnNode
---

# DeBruijnNode
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Represents a node in the De Bruijn graph
 A node is associated with a k-mer. 
 Also holds adjacency information with other nodes.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.#ctor(Bio.Algorithms.Kmer.KmerData32,System.Byte)
```
Initializes a new instance of the DeBruijnNode class.

#### ComputeValidExtensions
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.ComputeValidExtensions
```
Sets whether valid extensions are required or not.

#### GetExtensionNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetExtensionNodes
```
Returns all the left extension and right extension nodes of the current node.
_returns: Left extension and right extension nodes._

#### GetLeftExtensionNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetLeftExtensionNodes
```
Retrieves all the Left extension nodes of the current node.
_returns: Right extension nodes._

#### GetLeftExtensionNodesWithOrientation
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetLeftExtensionNodesWithOrientation
```
Retrives the list of left extension nodes along with the orientation.
_returns: Dictionary with the left extension node and the orientation._

#### GetOriginalSymbols
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetOriginalSymbols(System.Int32)
```
Gets the original symbols.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Return the decompressed kmer data._

#### GetReverseComplementOfOriginalSymbols
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetReverseComplementOfOriginalSymbols(System.Int32)
```
Gets the reverse complement of original symbols.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Returns the reverse complement of the current node value._

#### GetRightExtensionNodes
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetRightExtensionNodes
```
Retrieves all the Right extension nodes of the current node.
_returns: Right extension nodes._

#### GetRightExtensionNodesWithOrientation
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.GetRightExtensionNodesWithOrientation
```
Retrives the list of right extension nodes along with the orientation.
_returns: Dictionary with the right extension node and the orientation._

#### IsPalindrome
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.IsPalindrome(System.Int32)
```
Checks whether the node value (kmer data) is palindrome or not.
_returns: True if the node value is palindrome otherwise false._

#### MarkExtensionInvalid
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.MarkExtensionInvalid(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Makes extension edge corresponding to the node invalid,
 after checking whether given node is part of left or right extensions.
 Not Thread-safe. Use lock at caller if required.

|Parameter Name|Remarks|
|--------------|-------|
|node|Node for which extension is to be made invalid.|


#### MarkLeftExtensionAsInvalid
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.MarkLeftExtensionAsInvalid(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Marks the LeftExtensions of the current node as invalid.

|Parameter Name|Remarks|
|--------------|-------|
|node|Debruijn node which matches one of the left extensions of the current node.|


#### MarkNodeForDelete
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.MarkNodeForDelete
```
Marks the node for deletion.

#### MarkRightExtensionAsInvalid
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.MarkRightExtensionAsInvalid(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Marks the RightExtensions of the current node as invalid.

|Parameter Name|Remarks|
|--------------|-------|
|node|Debruijn node which matches one of the right extensions of the current node.|


#### PurgeInvalidExtensions
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.PurgeInvalidExtensions
```
Removes all the invalid extensions permanently.

#### RemoveExtensionThreadSafe
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.RemoveExtensionThreadSafe(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Removes edge corresponding to the node from appropriate data structure,
 after checking whether given node is part of left or right extensions.
 Thread-safe method.

|Parameter Name|Remarks|
|--------------|-------|
|node|Node for which extension is to be removed.|


#### RemoveMarkedExtensions
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.RemoveMarkedExtensions
```
Deletes the extension nodes those are marked for deletion.

#### SetExtensionNode
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.SetExtensionNode(System.Boolean,System.Boolean,Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Sets the extension nodes of the current node.

|Parameter Name|Remarks|
|--------------|-------|
|isForwardDirection|True indicates Right extension and false indicates left extension.|
|sameOrientation|Orientation of the connecting edge.|
|extensionNode|Node to which the extension is to be set.|


#### UndoAmbiguousExtensions
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnNode.UndoAmbiguousExtensions
```
Deletes all the extension marked for deletion and sets the node extensions as valid.



### Properties

#### _nodeInfo
Holds a flag to indicate whether this node is deleted or not.
#### _nodeOperations
Holds the value of validextension required, is node marked for deletion , right extension count and left extension count
 in 8, 7, 4 to 6 and 1 to 3 bits respectively.
#### _nodeOrientation
Stores the node orientation.
 First 4 bits Forward links orientation, next 4 bits reverse links orientation (from Right to Left).
 If bit values are 1 then same orientation. If bit values are 0 then orientation is different.
#### _validNodeExtensions
Stores the valid Node extensions
 First 4 bits Forward links orientation, next 4 bits reverse links orientation (from Right to Left).
 If bit values are 0 then valid extension. If bit values are 1 then not a valid extension.
#### ExtensionsCount
Gets the number of extension nodes.
#### IsDeleted
Gets or sets a value indicating whether this node is deleted or not.
 Note: As we are only periodically not deleting any nodes from the Tree, this flag helps to
 identify which nodes are deleted. 
 
 TODO: Ensure this variable cannot be modified without modifying the parent graphs node count
#### IsMarkedForDelete
Gets a value indicating whether the node is marked for deletion or not.
#### IsVisited
A flag that can be used to determine if the node has been visited 
 during a specific step
#### KmerCount
Gets or sets the number of duplicate kmers in the DeBrujin graph.
#### Left
Gets or sets the Left node, used by binary tree.
#### LeftExtension0
Gets or sets the Left Extension node for dna symbol 'A'.
#### LeftExtension1
Gets or sets the Left Extension node for dna symbol 'C'.
#### LeftExtension2
Gets or sets the Left Extension node for dna symbol 'G'.
#### LeftExtension3
Gets or sets the Left Extension node for dna symbol 'T'.
#### LeftExtensionNodesCount
Gets or sets the number of left extension nodes.
#### NodeValue
Gets or sets the value of an DeBrujinNode.
#### ORIGINAL_SYMBOLS

#### Right
Gets or sets the Right Node, used by binary tree.
#### RightExtension0
Gets or sets the RightExtension node for dna symbol 'A'.
#### RightExtension1
Gets or sets the RightExtension node for dna symbol 'C'.
#### RightExtension2
Gets or sets the RightExtension node for dna symbol 'G'.
#### RightExtension3
Gets or sets the RightExtension node for dna symbol 'T'.
#### RightExtensionNodesCount
Gets or sets the number of right extension nodes.
#### ValidExtensionsRequried
Gets or sets a value indicating whether node has valid extension or not.

