---
title: AATree`1
---

# AATree`1
_namespace: [Bio](N-Bio.html)_

Arne Andersson Self Balancing Binary Search Tree.

### Methods

#### #ctor
```csharp
Bio.AATree`1.#ctor(System.Collections.Generic.IComparer{`0})
```
Initializes an instance of AATree class with specified comparer.

|Parameter Name|Remarks|
|--------------|-------|
|comparer|Comparer to compare values.|


#### Add
```csharp
Bio.AATree`1.Add(`0)
```
Tries to add specified value to the AATree.
 If the value is already present in the tree then this method returns without adding.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to add.|

_returns: Returns true if value is added successfully, else returns false._

#### Contains
```csharp
Bio.AATree`1.Contains(`0)
```
Verifies whether the specified value is present in the tree or not.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to verify.|

_returns: Returns true if the specified value is present in the tree, else returns false._

#### InOrderTraversal
```csharp
Bio.AATree`1.InOrderTraversal
```
Gets values using InOrder traversal.

#### PostOrderTraversal
```csharp
Bio.AATree`1.PostOrderTraversal
```
Gets values using PostOrder traversal.

#### PreOrderTraversal
```csharp
Bio.AATree`1.PreOrderTraversal
```
Gets values using PreOrder traversal.

#### Remove
```csharp
Bio.AATree`1.Remove(`0)
```
Tries to remove specified value from the AATree.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to remove.|

_returns: Returns true if the value is found and removed successfully, else returns false._

#### RotateLeft
```csharp
Bio.AATree`1.RotateLeft(Bio.AATree{`0}.AATreeNode,Bio.AATree{`0}.AATreeNode)
```
Split or Rotate left.

|Parameter Name|Remarks|
|--------------|-------|
|parentNode|-|
|node|-|


#### RotateRight
```csharp
Bio.AATree`1.RotateRight(Bio.AATree{`0}.AATreeNode,Bio.AATree{`0}.AATreeNode)
```
Skew or Rotate right.

|Parameter Name|Remarks|
|--------------|-------|
|parentNode|-|
|node|-|


#### TrySearch
```csharp
Bio.AATree`1.TrySearch(`0,Bio.AATree{`0}.AATreeNode@)
```
Searches for the specified value in the AATree.
 If found returns the node containing the value in node out param, else this param contains NullNode.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to search.|
|node|AATree node.|

_returns: Returns true if the value is found, else returns false._



### Properties

#### Comparer
Comparer to compare values.
#### Count
Gets number of elements present in the AATree.
#### DefaultValue
Gets or sets Default value.
 By default this is set to default value of T.
#### NullNode
Holds null node.
#### root
Holds Root node.

