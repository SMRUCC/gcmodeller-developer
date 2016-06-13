---
title: IClusterBuilder
---

# IClusterBuilder
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Contract defined to implement class that creates clusters.
 Takes list of maximum unique matches as input and creates clusters

### Methods

#### BuildClusters
```csharp
Bio.Algorithms.Alignment.IClusterBuilder.BuildClusters(System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension},System.Boolean)
```
Build the list of clusters for given MUMs

|Parameter Name|Remarks|
|--------------|-------|
|matchExtensions|List of MUMs|
|sortedByQuerySequenceIndex|Flag to indicate whether the match 
            extensions are already started by query sequence index or not.|

_returns: List of Cluster_



### Properties

#### FixedSeparation
Gets or sets maximum fixed diagonal difference
#### MaximumSeparation
Gets or sets maximum separation between the adjacent matches in clusters
#### MinimumScore
Gets or sets minimum output score
#### ScoreMethod
Gets or sets the method to use while calculating score of a cluster.
#### SeparationFactor
Gets or sets separation factor. Fraction equal to 
 (diagonal difference / match separation) where higher values
 increase the insertion or deletion (indel) tolerance

