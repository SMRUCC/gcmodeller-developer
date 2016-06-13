---
title: DeBruijnPath
---

# DeBruijnPath
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Represents a path in De Bruijn graph.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnPath.#ctor(Bio.Algorithms.Assembly.Graph.DeBruijnNode)
```
Initializes a new instance of the DeBruijnPath class with specified node.

|Parameter Name|Remarks|
|--------------|-------|
|node|Graph node.|


#### RemoveAll
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnPath.RemoveAll(System.Predicate{Bio.Algorithms.Assembly.Graph.DeBruijnNode})
```
Removes all nodes from path that match the given predicate.

|Parameter Name|Remarks|
|--------------|-------|
|predicate|Predicate to remove nodes.|




### Properties

#### path
List of node in De Bruijn graph path.
#### PathNodes
Gets the list of nodes in path.

