---
title: Vertex`1
---

# Vertex`1
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Vertex class.
 Stores incoming and outgoing edges to improve the performance.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.#ctor(System.Int64,`0)
```
Initializes an instance of Vertex class with specified id and data.

|Parameter Name|Remarks|
|--------------|-------|
|id|Id for new Vertex.|
|data|Data to store in new Vertex.|


#### AddIncomingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.AddIncomingEdge(System.Int64)
```
Adds specified edge id to incoming edges list.

|Parameter Name|Remarks|
|--------------|-------|
|edgeID|Edge id to add.|


#### AddOutgoingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.AddOutgoingEdge(System.Int64)
```
Adds specified edge id to outgoing edge list.

|Parameter Name|Remarks|
|--------------|-------|
|edgeId|Edge id to add.|


#### ClearAllEdges
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.ClearAllEdges
```
Removes all edges from incoming and outgoing edge list of the Vertex.

#### ClearIncomingEdges
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.ClearIncomingEdges
```
Removes all edges from incoming edge list of the Vertex.

#### ClearOutgoingEdges
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.ClearOutgoingEdges
```
Removes all edges from outgoing edge list of the Vertex.

#### GetIncomingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.GetIncomingEdge(System.Int32)
```
Gets the incoming edge id present in specified index of incoming edge list in the Vertex.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index of the incoming edge list.|

_returns: Returns Edgeid if the index is valid, else returns -1._

#### GetOutgoingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.GetOutgoingEdge(System.Int32)
```
Gets the outgoing edge id present in specified index of outgoing edge list in the Vertex.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index of the outgoing edge list.|

_returns: Returns Edgeid if the index is valid, else returns -1._

#### RemoveFromIncomingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.RemoveFromIncomingEdge(System.Int64)
```
Searches for the specified edge id in incoming edge list and if found 
 removes it from the incoming edge list.

|Parameter Name|Remarks|
|--------------|-------|
|edgeID|Edge id to remove.|

_returns: Returns true if edge id found and successfully removed from the incoming list, else returns false._

#### RemoveFromOutgoingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.RemoveFromOutgoingEdge(System.Int64)
```
Searches for the specified edge id in outgoing edge list and if found 
 removes it from the outgoing edge list.

|Parameter Name|Remarks|
|--------------|-------|
|edgeId|Edge id to remove.|

_returns: Returns true if edge id found and successfully removed from the outgoing list, else returns false._

#### ReplaceIncomingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.ReplaceIncomingEdge(System.Int32,System.Int64)
```
Replaces the edge id at specified index of incoming edge list of the Vertex with the specified edgeid.

|Parameter Name|Remarks|
|--------------|-------|
|index|Zero baced index of incoming edge list.|
|edgeId|Edge id to replace with.|

_returns: Returns true if the index is valid and replaced with edgeId, else returns false._

#### ReplaceOutgoingEdge
```csharp
Bio.Algorithms.Assembly.Graph.Vertex`1.ReplaceOutgoingEdge(System.Int32,System.Int64)
```
Replaces the edge id at specified index of outgoing edge list of the Vertex with the specified edgeid.

|Parameter Name|Remarks|
|--------------|-------|
|index|Zero baced index of outgoing edge list.|
|edgeId|Edge id to replace with.|

_returns: Returns true if the index is valid and replaced with edgeId, else returns false._



### Properties

#### Data
Gets or sets the data of the Vertex.
#### Id
Gets the id of the Vertex.
#### IncomingEdgeCount
Gets incoming edge count.
#### IncomingEdges
Holds Incoming edges.
#### OutgoingEdgeCount
Gets outgoing edge count.
#### OutgoingEdges
Holds outgoing edges.

