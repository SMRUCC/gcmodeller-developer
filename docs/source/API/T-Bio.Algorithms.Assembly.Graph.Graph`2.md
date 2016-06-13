---
title: Graph`2
---

# Graph`2
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Graph data structure.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.#ctor
```
Constructor to create an instance of graph.

#### AddEdge
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.AddEdge(`1,System.Int64,System.Int64)
```
Adds new edges to the graph which connects two vertices.
 Note: this method will not validate the present of vertex1 and vertex2 in the graph.

|Parameter Name|Remarks|
|--------------|-------|
|edgeData|Data to store in new edge.|
|vertexId1|Id of the Vertex1.|
|vertexId2|Id of the Vertex2|

_returns: New Edge._

#### AddVertex
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.AddVertex(`0)
```
Adds a new vertex to the graph.

|Parameter Name|Remarks|
|--------------|-------|
|vertexData|Data to store in new vertex.|

_returns: New vertex._

#### DeleteEdge
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.DeleteEdge(System.Int64)
```
Deletes the edge.

|Parameter Name|Remarks|
|--------------|-------|
|edgeId|-|


#### DeleteVertex
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.DeleteVertex(System.Int64)
```
Deletes the node.
 Note this will not delete associated edges.

|Parameter Name|Remarks|
|--------------|-------|
|vertexId|Id of the vertex to be deleted.|


#### GetAdjacentVertices
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.GetAdjacentVertices(Bio.Algorithms.Assembly.Graph.Vertex{`0})
```
Gets the vertices adjacent to given vertex.

|Parameter Name|Remarks|
|--------------|-------|
|vertex|Vertex.|

_returns: Enumerable of vertices adjacent to given vertex._

#### GetEdge
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.GetEdge(System.Int64,System.Int64)
```
Gets the edge containing vertexid1 and vertexid2.

|Parameter Name|Remarks|
|--------------|-------|
|vertexId1|First vertex id|
|vertexId2|Second vertex id.|


#### GetEdges
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.GetEdges
```
Gets existing nodes.

#### GetVertex
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.GetVertex(System.Int64)
```
Gets the vertex for the specified vertexid.

|Parameter Name|Remarks|
|--------------|-------|
|vertexId|Vertex id.|


#### GetVertices
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.GetVertices
```
Gets existing nodes.

#### IsAdjacent
```csharp
Bio.Algorithms.Assembly.Graph.Graph`2.IsAdjacent(Bio.Algorithms.Assembly.Graph.Vertex{`0},Bio.Algorithms.Assembly.Graph.Vertex{`0})
```
Verifies if two vertices are adjacent to each other or not.

|Parameter Name|Remarks|
|--------------|-------|
|vertex1|Vertex1|
|vertex2|Vertex2|

_returns: Returns true if vertices are adjacent to each other else false._



### Properties

#### DeletedEdgeCount
Deleted edges count.
#### DeletedVertexCount
Deleted vertices count.
#### EdgeArray
Holds edges present in the graph.
#### EdgeCount
No of edges present in the graph excluding deleted edges.
#### TotalEdgeCount
Total no of edges in the graph Including deleted edges.
#### TotalVertexCount
Total no of vertices in the graph Including deleted vertices.
#### VertexArray
Holds Vertices present in the graph.
#### VertexCount
# of vertices present in the graph excluding deleted vertices.

