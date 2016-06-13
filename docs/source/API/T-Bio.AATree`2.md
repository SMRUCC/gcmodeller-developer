---
title: AATree`2
---

# AATree`2
_namespace: [Bio](N-Bio.html)_

Dictionary like implementation using AATree.

### Methods

#### #ctor
```csharp
Bio.AATree`2.#ctor(System.Collections.Generic.IComparer{`0})
```
Initializes an instance of AATree class with specified comparer.

|Parameter Name|Remarks|
|--------------|-------|
|keyComparer|Comparer to compare Keys.|


#### Add
```csharp
Bio.AATree`2.Add(`0,`1)
```
Tries to add specified key and value to the AATree.
 If the key is already present then this method returns without adding.

|Parameter Name|Remarks|
|--------------|-------|
|key|Key to add.|
|value|Value to add.|

_returns: Returns true if add is successful, else returns false._

#### Contains
```csharp
Bio.AATree`2.Contains(`0)
```
Verifies whether the specified key is present in the tree or not.

|Parameter Name|Remarks|
|--------------|-------|
|key|key to verify.|

_returns: Returns true if the specified key is present in the tree, else returns false._

#### InOrderTraversal
```csharp
Bio.AATree`2.InOrderTraversal
```
Gets Key and its associated value using InOrder traversal.

#### PostOrderTraversal
```csharp
Bio.AATree`2.PostOrderTraversal
```
Gets Key and its associated value using PostOrder traversal.

#### PreOrderTraversal
```csharp
Bio.AATree`2.PreOrderTraversal
```
Gets Key and its associated value using PreOrder traversal.

#### Remove
```csharp
Bio.AATree`2.Remove(`0)
```
Tries to remove specified key and associated value from the AATree.

|Parameter Name|Remarks|
|--------------|-------|
|key|Key to remove.|

_returns: Returns true if the key is found and removed successfully, else returns false._

#### TryGetValue
```csharp
Bio.AATree`2.TryGetValue(`0,`1@)
```
Searches for the specified key in the AATree.
 If found returns the associated value in value out param, else this param contains DefaultValue.

|Parameter Name|Remarks|
|--------------|-------|
|key|Key to search.|
|value|Out parameter.|

_returns: Returns true if the key is found, else returns false._



### Properties

#### Count
Gets the number of elements present in the AATree.
#### DefaultValue
Gets or sets the default value for TValue type.
 This DefaultValue is returned from indexer or TryGetValue methods when the key is not found in the AATree.
#### Item
Gets or sets the value for the specified key.
 Get Method,
 if the key is found then the associated value will be returned, else DefaultValue is returned.
 Set Method,
 if the key is found then associated value is replaced with the specified value, 
 else Add method will be called to add key and value.

