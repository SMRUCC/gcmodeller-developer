---
title: ClusterBuilder
---

# ClusterBuilder
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Clustering is a process in which individual matches are grouped in larger
 set called Cluster. The matches in cluster are decided based on paramters 
 like fixed difference allowed, maximum difference allowed, minimum score
 and separation factor that should be satisfied.
 This class implements IClusterBuilder interface.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.#ctor
```
Initializes a new instance of the ClusterBuilder class

#### BuildClusters
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.BuildClusters(System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension},System.Boolean)
```
Get the Cluster from given inputs of matches.
 Steps are as follows:
 1. Sort MUMs based on query sequence start (if sortedByQuerySequenceIndex is false)
 2. Removing overlapping MUMs (in both sequences) and MUMs with same 
 diagonal offset (usually adjacent)
 3. Check for separation between two MUMs
 4. Check the diagonal separation
 5. If MUMs passes above conditions merge them in one cluster.
 6. Sort MUMs using cluster id
 7. Process clusters (Joining clusters)

|Parameter Name|Remarks|
|--------------|-------|
|matchExtensions|List of maximum unique matches|
|sortedByQuerySequenceIndex|Flag to indicate whether the match 
            extensions are already started by query sequence index or not.|

_returns: List of Cluster_

#### FilterMatches
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.FilterMatches(System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension})
```
Removes the duplicate and overlapping maximal unique matches.

|Parameter Name|Remarks|
|--------------|-------|
|matches|List of matches|


#### Find
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.Find(System.Int32)
```
Return the id of the set containing "a" in Union-Find.

|Parameter Name|Remarks|
|--------------|-------|
|matchIndex|Index of the maximal unique match in UnionFind|

_returns: Cluster id_

#### GetClusters
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.GetClusters(System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension},System.Boolean)
```
Process the matches and create clusters

|Parameter Name|Remarks|
|--------------|-------|
|matches|List of matches|
|sortedByQuerySequenceIndex|Flag to indicate whether the match 
            extensions are already started by query sequence index or not.|

_returns: List of clusters_

#### ProcessCluster
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.ProcessCluster(System.Collections.Generic.List{Bio.Algorithms.Alignment.Cluster},System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension},System.Int32,System.Int32)
```
Process the clusters

|Parameter Name|Remarks|
|--------------|-------|
|clusters|List of clusters|
|matches|List of matches|
|indexToSkip|Start index upto which match extension to be ignored.|
|clusterSize|Size of cluster|


#### Sort
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.Sort(System.Collections.Generic.IEnumerable{Bio.Algorithms.SuffixTree.MatchExtension},System.String)
```
Sort by Cluster by specified column

|Parameter Name|Remarks|
|--------------|-------|
|matches|List of matches|
|sortBy|Column to be sorted by|

_returns: Sorted list of cluster_

#### Union
```csharp
Bio.Algorithms.Alignment.ClusterBuilder.Union(System.Int32,System.Int32)
```
Group the matches in Union

|Parameter Name|Remarks|
|--------------|-------|
|firstMatchIndex|Id of first cluster|
|secondMatchIndex|Id of second cluster|




### Properties

#### ClusterID
Property referring to ID of Cluster
#### DefaultFixedSeparation
Default fixed Separation
#### DefaultMaximumSeparation
Default Maximum Separation
#### DefaultMinimumScore
Default Minimum Output Score
#### DefaultSeparationFactor
Default separation factor
#### FixedSeparation
Gets or sets maximum fixed diagonal difference
#### MaximumSeparation
Gets or sets maximum separation between the adjacent matches in clusters
#### MinimumScore
Gets or sets minimum output score
#### ScoreMethod
Gets or sets the method to use while calculating score of a cluster.
 Default is MatchLength.
#### SecondSequenceStart
Property referring to Second sequence start in MUM
#### SeparationFactor
Gets or sets separation factor. Fraction equal to 
 (diagonal difference / match separation) where higher values
 increase the insertion or deletion (indel) tolerance
#### unionFind
This is a list of number which are used to generate the ID of cluster

