---
title: ILowCoverageContigPurger
---

# ILowCoverageContigPurger
_namespace: [Bio.Algorithms.Assembly.Padena](N-Bio.Algorithms.Assembly.Padena.html)_

Interface removing contigs with low coverage.

### Methods

#### RemoveLowCoverageContigs
```csharp
Bio.Algorithms.Assembly.Padena.ILowCoverageContigPurger.RemoveLowCoverageContigs(Bio.Algorithms.Assembly.Graph.DeBruijnGraph,System.Double)
```
Build contigs from graph. For contigs whose coverage is less than 
 the specified threshold, remove graph nodes belonging to them.

|Parameter Name|Remarks|
|--------------|-------|
|deBruijnGraph|DeBruijn Graph.|
|coverageThresholdForContigs|Coverage Threshold for contigs.|

_returns: Number of nodes removed._




