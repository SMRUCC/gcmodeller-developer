---
title: IGraphEndsEroder
---

# IGraphEndsEroder
_namespace: [Bio.Algorithms.Assembly.Padena](N-Bio.Algorithms.Assembly.Padena.html)_

Interface for eroding graph nodes that have
 low coverage.

### Methods

#### ErodeGraphEnds
```csharp
Bio.Algorithms.Assembly.Padena.IGraphEndsEroder.ErodeGraphEnds(Bio.Algorithms.Assembly.Graph.DeBruijnGraph,System.Int32)
```
Erode ends of graph that have low coverage.
 For optimization of another step (dangling link purger)
 in assembly process, this returns a list of integers.
 In case this optimization is not used, a single element
 list containing the number of eroded nodes can be returned.

|Parameter Name|Remarks|
|--------------|-------|
|graph|Input graph.|
|erosionThreshold|Threshold for erosion.|

_returns: List containing the number of nodes eroded._



### Properties

#### Description
Gets the description of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.
#### Name
Gets the name of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.

