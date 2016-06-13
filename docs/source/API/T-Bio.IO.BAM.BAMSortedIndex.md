---
title: BAMSortedIndex
---

# BAMSortedIndex
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

This class implements indexer for Sorted BAM Index.
 Reads
 Index for a file (contains data sorted by index) and return index
 Or
 Indices from multiple file (contains data sorted by index in each file) and returns smallest index.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.BAMSortedIndex.#ctor(System.String,Bio.IO.BAM.BAMSortByFields)
```
Constructor to initialize an instance of BAMSortedIndex class with specified filename.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sorted filename.|
|sortType|Type of sort required.|


#### Dispose
```csharp
Bio.IO.BAM.BAMSortedIndex.Dispose(System.Boolean)
```
Dispose field instances

|Parameter Name|Remarks|
|--------------|-------|
|disposeManaged|If disposeManaged equals true, clean all resources|


#### GetEnumerator
```csharp
Bio.IO.BAM.BAMSortedIndex.GetEnumerator
```
Returns the enumerator object
_returns: enumerator object_

#### MoveNext
```csharp
Bio.IO.BAM.BAMSortedIndex.MoveNext
```
Fetches next sorted index.
_returns: Returns true on successful fetch, else return false._

#### Reset
```csharp
Bio.IO.BAM.BAMSortedIndex.Reset
```
Resets this instance to initial state.

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.IO.BAM.BAMSortedIndex.System#Collections#IEnumerable#GetEnumerator
```
Returns the enumerator object



### Properties

#### Current
Gets the current sorted index.
#### currentIndex
Holds current sorted index.
#### data
Next data object to processed in each file.
#### GroupName
Gets or sets the Chromosome name of this Sorted BAM Indexer
#### readers
List of file readers.
#### sortedFilenames
holds filenames (sorted files) like chr1_1, chr1_2, chr2 etc.
#### sortField
Field name using which data is to be sorted.
#### System#Collections#IEnumerator#Current
Gets the current sorted index.

