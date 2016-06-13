---
title: DeltaAlignmentSorter
---

# DeltaAlignmentSorter
_namespace: [Bio.Util](N-Bio.Util.html)_

DeltaAlignment sorter.
 Uses AVL tree to sort the deltaAligmments on FirstSequenceStart.

### Methods

#### #ctor
```csharp
Bio.Util.DeltaAlignmentSorter.#ctor(System.Int64)
```
Initializes a new instance of the DeltaAlignmentSorter class with specified capacity.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequenceLength|Reference sequence length.|


#### Add
```csharp
Bio.Util.DeltaAlignmentSorter.Add(Bio.Util.Node)
```
Adds a node.

|Parameter Name|Remarks|
|--------------|-------|
|node|Node to add.|


#### GetHolderFor
```csharp
Bio.Util.DeltaAlignmentSorter.GetHolderFor(System.Int64)
```
Gets the holder for the specified value.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value for which holder is required.|


#### GetSortedIds
```csharp
Bio.Util.DeltaAlignmentSorter.GetSortedIds
```
Gets the ids which are sorted on value.
_returns: IEnumerable of ids._

#### GetSortedNodes
```csharp
Bio.Util.DeltaAlignmentSorter.GetSortedNodes
```
Gets id and value pair sorted on value.
_returns: IEnumerable of id and value pair._

#### IncreaseCapacityTo
```csharp
Bio.Util.DeltaAlignmentSorter.IncreaseCapacityTo(System.Int64)
```
Increases the capacity to specified value.

|Parameter Name|Remarks|
|--------------|-------|
|capacity|New capacity.|

_returns: Returns the last holder._



### Properties

#### Count
Gets the number of delta alignments present.
#### endHolder
Holds the end holder.
#### holderCapacity
Capacity of this holder.
#### holderHooks
In worst scenario i.e, for 1GB chromosome ~1million entries of 
 holder's reference will be added. 
 For 100MB sequence ~105,000 entries will be added.
 Thus it is safe to use List for hooks.
 Note: that first entry of hooks will start at HooksIntervals and not from zero.
 as Root it self is a hook at zero position.
#### HoldersCapacityIncrementsBy
Holds minimum no of holders to be added when value of node being 
 added is more than the holders capacity.
 Adding holders one by one take more time.
 Thus allocate an appropriate number of holders at a time.
#### HooksIntervals
Intervals at which Hooks are needed.
 This value is decided on,
 1. No of elements can be stored in "holderHooks".
 2. Time required to travel in between Hooks.
 The value 1000 is decided as 1GB is the max known chromosome size and thus
 ~1Million entries will be added to the "holderHooks".
#### Root
Gets the first holder.

