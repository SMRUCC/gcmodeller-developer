---
title: IGraphErrorPurger
---

# IGraphErrorPurger
_namespace: [Bio.Algorithms.Assembly.Padena](N-Bio.Algorithms.Assembly.Padena.html)_

Framework for detecting erroneous nodes and removing them.

### Methods

#### DetectErroneousNodes
```csharp
Bio.Algorithms.Assembly.Padena.IGraphErrorPurger.DetectErroneousNodes(Bio.Algorithms.Assembly.Graph.DeBruijnGraph)
```
Detects nodes that satisfy some error conditions .

|Parameter Name|Remarks|
|--------------|-------|
|deBruijnGraph|Input graph.|

_returns: List of error nodes._

#### RemoveErroneousNodes
```csharp
Bio.Algorithms.Assembly.Padena.IGraphErrorPurger.RemoveErroneousNodes(Bio.Algorithms.Assembly.Graph.DeBruijnGraph,Bio.Algorithms.Assembly.Graph.DeBruijnPathList)
```
Modifies de bruijn graph.
 Removes all the nodes in input.

|Parameter Name|Remarks|
|--------------|-------|
|deBruijnGraph|De Bruijn Graph.|
|nodesList|List of nodes to be removed.|




### Properties

#### Description
Gets the description of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.
#### LengthThreshold
Gets or sets the threshold length.
#### Name
Gets the name of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.

