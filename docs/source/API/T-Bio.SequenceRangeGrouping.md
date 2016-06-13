---
title: SequenceRangeGrouping
---

# SequenceRangeGrouping
_namespace: [Bio](N-Bio.html)_

A grouping of SequenceRange objects sorted by their ID values. The
 purpose of these groups is to allow a set of SequenceRange objects
 to be associated together by bucketing them into groups where each
 bucket has a unique SequenceRange ID and all SequenceRange objects
 within the bucket has that same ID.

### Methods

#### #ctor
```csharp
Bio.SequenceRangeGrouping.#ctor(System.Collections.Generic.IEnumerable{Bio.ISequenceRange})
```
Creates a grouping object from a set of currently ungrouped
 ISequenceRange objects.

|Parameter Name|Remarks|
|--------------|-------|
|ranges|Sequence ranges.|


#### Add
```csharp
Bio.SequenceRangeGrouping.Add(Bio.ISequenceRange)
```
Adds a SequenceRange to the grouping, creating a new bucket
 if the ID of the range has not yet been added to the grouping
 or adding to an existing bucket if it has.

|Parameter Name|Remarks|
|--------------|-------|
|range|The range item to add to the grouping|


#### AddParent
```csharp
Bio.SequenceRangeGrouping.AddParent(Bio.ISequenceRange,System.Collections.Generic.IEnumerable{Bio.ISequenceRange})
```
Adds specified parentranges to the specified range's metadata.

|Parameter Name|Remarks|
|--------------|-------|
|range|ISequenceRange instance to which the parentrange to be added.|
|parentRanges|Parent ranges of the specified range.|


#### CopyOfMetadata
```csharp
Bio.SequenceRangeGrouping.CopyOfMetadata(Bio.ISequenceRange,Bio.ISequenceRange)
```
Copies the metadata from specified fromRange to toRange.

|Parameter Name|Remarks|
|--------------|-------|
|toRange|Range to which the metadata has to be copied.|
|fromRange|Range from which the metadata has to be copied.|


#### Flatten
```csharp
Bio.SequenceRangeGrouping.Flatten
```
Ungroups each of the ISequenceRanges and places them into a flat list
 of every ISequenceRange stored across each of the groups in this grouping.
 The resulting list will still be ordered in such a way that each item of
 a particular group will be enumerated before starting the enumeration of
 items from another group.
_returns: The flattened list of sequence ranges._

#### GetGroup
```csharp
Bio.SequenceRangeGrouping.GetGroup(System.String)
```
Returns a list of SequenceRange objects each of which has the
 ID specified in the rangeID parameter.

|Parameter Name|Remarks|
|--------------|-------|
|rangeID|The identification to look up in the grouping|

_returns: The list of sequence ranges of the required group._

#### GetOverlappingRenges
```csharp
Bio.SequenceRangeGrouping.GetOverlappingRenges(Bio.ISequenceRange,System.Collections.Generic.List{Bio.ISequenceRange},System.Int64)
```
Return overlapping ranges from the query sequence ranges for the specified minimal overlap. 
 Note that this method does not verifies the id.
 This method is used by intersect and subtract methods.

|Parameter Name|Remarks|
|--------------|-------|
|refSeqRange|Reference seq range|
|querySeqRanges|Query sequence ranges|
|minimalOverlap|Minimum overlap required.|

_returns: Overlapping Ranges from query ranges._

#### Intersect
```csharp
Bio.SequenceRangeGrouping.Intersect(Bio.SequenceRangeGrouping,System.Int64,Bio.IntersectOutputType,System.Boolean)
```
Returns overlapping sequence ranges from this and specified SequenceRangeGroup for each group in this grouping.
 
 For instance if you had in group 'Chr1' the following ranges:
 
 Ranges in this instance Ranges in the query 
 0 to 10 20 to 40
 30 to 50 70 to 100 
 60 to 80 400 to 800
 300 to 500 850 to 900
 600 to 700 900 to 1200
 800 to 1000 
 
 Result for minOverlap set to 1
 1. If outputType is OverlappingPiecesOfIntervals.
 30 to 40
 70 to 80
 400 to 500
 600 o 700
 850 to 900
 900 to 1000
 2. If outputType is OverlappingIntervals
 30 to 50
 60 to 80
 300 to 500
 600 to 700
 800 to 1000
 
 Running this method creates all new ISequenceRange objects and adds them
 to the newly created SequenceRangeGrouping returned here.

|Parameter Name|Remarks|
|--------------|-------|
|query|Query grouping.|
|minOverlap|Minmum length of bases pairs should be overlapped.
            By default this will be set to 1.|
|outputType|
            Type of output required, OverlappingPiecesOfIntervals or OverlappingIntervals. 
            By default this will be set to OverlappingPiecesOfIntervals that is only the base pairs that overlaps with 
            query ranges will be returned.|
|isParentSeqRangesRequired|If this flag is set to true then the sequence ranges from 
            which the new sequence range is created are added to the ParentSeqRanges property of the 
            new sequence ranges.|

_returns: The intersected result._

#### MergeOverlaps
```csharp
Bio.SequenceRangeGrouping.MergeOverlaps(Bio.SequenceRangeGrouping,System.Int64,System.Boolean)
```
Merges query sequence ranges with this sequence ranges.
 
 For example,
 
 Ranges in this instance Ranges in the query 
 3 to 15 4 to 10
 5 to 18 11 to 20
 
 Result for minOverlap set to 1
 3 to 20
 
 Running this method creates all new ISequenceRange objects and adds them
 to the newly created SequenceRangeGrouping returned here.

|Parameter Name|Remarks|
|--------------|-------|
|query|Query sequence ranges.|
|minOverlap|Minmum length of bases pairs should be overlapped.|
|isParentSeqRangesRequired|If this flag is set to true then the sequence ranges from 
            which the new sequence range is created are added to the ParentSeqRanges property of the 
            new sequence range.|

_returns: The merged sequence range grouping._

#### Subtract
```csharp
Bio.SequenceRangeGrouping.Subtract(Bio.SequenceRangeGrouping,System.Int64,Bio.SubtractOutputType,System.Boolean)
```
Subtracts the query SequenceRangeGrouping from this SequenceRangeGrouping.
 
 For example,
 
 Ranges in this instance Ranges in the query 
 1 to 4 2 to 6
 4 to 8 3 to 6
 8 to 12 9 to 14
 25 to 35
 
 Result for minOverlap set to 1
 1. If outputType is IntervalsWithNoOverlap
 25 to 35
 
 2. If outputType is NonOverlappingPiecesOfIntervals
 1 to 2
 6 to 8
 8 to 9
 25 to 35
 
 Running this method creates all new ISequenceRange objects and adds them
 to the newly created SequenceRangeGrouping returned here.

|Parameter Name|Remarks|
|--------------|-------|
|query|Query grouping.|
|minOverlap|Minmum length of overlap. By default this will be set to 1|
|outputType|
            Type of output required, IntervalsWithNoOverlap or NonOverlappingPiecesOfIntervals. 
            By default this will be set to NonOverlappingPiecesOfIntervals that is non overlapping 
            pieces of intervels along with non overlapping ranges from this instance 
            will be returned.
            |
|isParentSeqRangesRequired|If this flag is set to true then the sequence ranges from 
            which the new sequence range is created are added to the ParentSeqRanges property of the 
            new sequence range.|

_returns: The resultant Sequence range grouping._

#### ToString
```csharp
Bio.SequenceRangeGrouping.ToString
```
Converts sequence range from all the groups to string.
_returns: Sequence range from all the groups._



### Properties

#### GroupIDs
An enumeration of all the SequenceRange IDs contained in
 this grouping.
#### GroupRanges
Gets sequence range from all the groups

