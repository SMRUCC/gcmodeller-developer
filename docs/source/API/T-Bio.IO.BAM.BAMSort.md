---
title: BAMSort
---

# BAMSort
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Class implements sorting in a SequenceAlignmentMap.
 Sorts the data in "SequenceAlignmentMap" By
 ChromosomeCoordinates
 Or
 ReadNames

### Methods

#### #ctor
```csharp
Bio.IO.BAM.BAMSort.#ctor(Bio.IO.SAM.SequenceAlignmentMap,Bio.IO.BAM.BAMSortByFields)
```
Default Constructor
 Initializes a new instance of the BAMSorter class

|Parameter Name|Remarks|
|--------------|-------|
|seqAlignMap|SequenceAlignmentMap object to be sorted.|
|sortType|Type of sort required.|


#### Sort
```csharp
Bio.IO.BAM.BAMSort.Sort
```
Sorts the SequenceAlignmentMap based on the sort by fields,
 either chromosome coordinates or read names and retuns sorted BAM indexer
_returns: sorted BAM indexer_

#### SortByChromosomeCoordinates
```csharp
Bio.IO.BAM.BAMSort.SortByChromosomeCoordinates
```
Sort the index of SequenceAlignmentMap by RName then by Pos.
 Fill the index (sorted by RName then by Pos) into a list, when the list size reaches
 the maximum limit, write the list to file and clear the list.

#### SortByReadNames
```csharp
Bio.IO.BAM.BAMSort.SortByReadNames
```
Sort the index of SequenceAlignmentMap by QName.
 Fill the index (sorted by QName) into a list, when the list size reaches
 the maximum limit, write the list to file and clear the list.

#### WriteToFile
```csharp
Bio.IO.BAM.BAMSort.WriteToFile(System.Collections.Generic.SortedList{System.Object,System.String})
```
Creates a file in Temp folder.
 Write the data in SortedList to a file.
 Returns the filename

|Parameter Name|Remarks|
|--------------|-------|
|sortedList|List to be written to file.|

_returns: File name._



### Properties

#### sequenceAlignMap
Holds SequenceAlignmentMap object to be sorted.
#### SortedListMaxCount
Maximum limit of sorted bucket.
 Write the list to file once the limit is reached.
 The max count number is an optimized value based on local tests.
#### sortField
Type of sort needed.

