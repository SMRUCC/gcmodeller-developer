---
title: VirtualDeltaAlignmentCollection
---

# VirtualDeltaAlignmentCollection
_namespace: [Bio.Algorithms.Assembly.Comparative.LayoutRefiner](N-Bio.Algorithms.Assembly.Comparative.LayoutRefiner.html)_

Virtual DeltaAlingment collection.
 Holds 1000 times the windows size.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.VirtualDeltaAlignmentCollection.#ctor(Bio.Util.DeltaAlignmentCollection,System.Int32)
```
Initializes a new instance of the VirtualDeltaAlignmentCollection class.

|Parameter Name|Remarks|
|--------------|-------|
|orderedDeltas|-|
|windowSize|-|


#### GetCachedDeltas
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.VirtualDeltaAlignmentCollection.GetCachedDeltas
```
Gets the cached deltas.

#### LoadNextWindow
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.VirtualDeltaAlignmentCollection.LoadNextWindow
```
Loads a window a deltas to the cache.

#### TryUnload
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.VirtualDeltaAlignmentCollection.TryUnload(System.Int64,System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment}@)
```
Trys to unload the delta alignments from the cache.

|Parameter Name|Remarks|
|--------------|-------|
|index|index at which current operations are taking place.
            This is required to judge whether to unload a window of delta alignment or not.|
|unloadedDeltas|If this method succeeded then unloaded deltas are passed back in this parameter.|

_returns: Returns true if a cache window is unloaded else false._

#### Unload
```csharp
Bio.Algorithms.Assembly.Comparative.LayoutRefiner.VirtualDeltaAlignmentCollection.Unload
```
Unloads a cache window.
_returns: Returns unloaded deltas._



### Properties

#### Count
Gets the number of delta alignments present in this instance.
#### Item
Gets the delta alignment present at specified index.

