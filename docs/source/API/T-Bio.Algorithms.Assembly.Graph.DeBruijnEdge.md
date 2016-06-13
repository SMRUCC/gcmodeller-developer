---
title: DeBruijnEdge
---

# DeBruijnEdge
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Represents an edge in the de bruijn graph.
 Stores orientation (same or opposite) and whether the edge is valid.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.DeBruijnEdge.#ctor(System.Boolean)
```
Initializes a new instance of the DeBruijnEdge class.
 Creates a 'valid' edge by default.

|Parameter Name|Remarks|
|--------------|-------|
|orientation|Orientation of edge.|




### Properties

#### IsSameOrientation
Gets or sets a value indicating whether orientation of edge is same or opposite.
 If two connected nodes have overlapping sequence, the orientation is 
 true (same orientation). If sequence of one overlaps with the reverse-complement 
 of other's sequence, the orientation is false (opposite orientation).
#### IsValid
Gets or sets a value indicating whether this is a valid edge.
 Used to temporarily remove edges from graph.

