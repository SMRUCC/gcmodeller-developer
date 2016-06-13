---
title: LayoutRefiner
---

# LayoutRefiner
_namespace: [Bio.Algorithms.Assembly.Comparative](N-Bio.Algorithms.Assembly.Comparative.html)_

Class Layout Refiner.

### Methods

#### ExtendDeltas
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.ExtendDeltas(System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment},System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment})
```
Extended Deltas.

|Parameter Name|Remarks|
|--------------|-------|
|leftSideDeltas|Left Side Deltas.|
|rightSideDeltas|Right Side Deltas.|

_returns: Returns Extend Deltas._

#### FindLargestAndSecondLargest
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.FindLargestAndSecondLargest(System.Int32[],System.Byte@,System.Byte@)
```
Find Largest And SecondLargest.

|Parameter Name|Remarks|
|--------------|-------|
|values|Set of Values.|
|indexLargest|Out param largest index.|
|indexSecond|Out param Second largest index.|


#### FindMaxOverlap
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.FindMaxOverlap(System.Collections.Generic.List{System.Byte},System.Collections.Generic.List{System.Byte})
```
Find Max Overlap.

|Parameter Name|Remarks|
|--------------|-------|
|leftExtension|Left Extension.|
|rightExtension|Right Extension.|

_returns: Returns Max overLap._

#### RefineLayout
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.RefineLayout(Bio.Util.DeltaAlignmentCollection)
```
Refines alignment layout by taking in consideration indels (insertions and deletions) and rearrangements between two genomes. 
 Requires mate-pair information to resolve ambiguity.

|Parameter Name|Remarks|
|--------------|-------|
|orderedDeltas|Order deltas.|





