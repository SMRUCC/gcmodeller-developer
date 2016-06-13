---
title: PathPurger
---

# PathPurger
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Removes containing paths and merge Overlapping scaffold paths.
 Containing Paths
 -------------- Contig 1
 -------- Contig 2
 Overlapping Paths
 -------- Contig 1 
 --------- Contig 2.

### Methods

#### PurgePath
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.PurgePath(System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath})
```
Removes containing paths and merge overlapping paths.

|Parameter Name|Remarks|
|--------------|-------|
|scaffoldPaths|Input paths/scaffold.|


#### RemoveContainingPaths
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.RemoveContainingPaths(Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath,Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath)
```
Remove containing paths.

|Parameter Name|Remarks|
|--------------|-------|
|scaffoldPath|Current path.|
|path|Path to be compared with.|

_returns: Containing paths or not._

#### RemoveOverlappingPaths
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.RemoveOverlappingPaths(Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath,Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath)
```
Removes Overlapping paths by generating pairwise overlaps between paths.

|Parameter Name|Remarks|
|--------------|-------|
|scaffoldPath|Current path.|
|path|Path to be compared with.|

_returns: Overlapping paths or not._

#### SearchContainingAndOverlappingPaths
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.SearchContainingAndOverlappingPaths(Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath,System.Boolean[])
```
Search for containing and overlapping paths.

|Parameter Name|Remarks|
|--------------|-------|
|scaffoldPath|Current Path.|
|isConsumed|Path status.|

_returns: Update list or not._

#### StitchPath
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.StitchPath(System.Collections.Generic.IList{System.Collections.Generic.KeyValuePair{Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Edge}},System.Collections.Generic.IList{System.Collections.Generic.KeyValuePair{Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Node,Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.Edge}},System.Int32,System.Int32)
```
Stitches overlapping paths and update the path.

|Parameter Name|Remarks|
|--------------|-------|
|scaffoldPath|Current path.|
|path|Path to be compared with.|
|pos|End position of overlap in first path.|
|pos1|End position of overlap in second path.|


#### UpdatePath
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.PathPurger.UpdatePath(System.Boolean[])
```
Removes all consumed path.

|Parameter Name|Remarks|
|--------------|-------|
|isConsumed|Status of paths.|




### Properties

#### internalScaffoldPaths
Input list of scaffold paths.

