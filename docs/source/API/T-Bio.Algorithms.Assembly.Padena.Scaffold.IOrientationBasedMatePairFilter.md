---
title: IOrientationBasedMatePairFilter
---

# IOrientationBasedMatePairFilter
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Filter mate pairs based on support for contig orientation.
 The mate pairs support specific orientation of contigs, 
 based on mapping of reverse read or forward read to specify orientation.
 Orientation 1
 ----------) (------------- 
 contig 1 contig 2
 
 Orientation 2
 ----------) (-------------
 
 contig 2 contig 1

### Methods

#### FilterPairedReads
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.IOrientationBasedMatePairFilter.FilterPairedReads(Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs,System.Int32)
```
Filter mate pairs.

|Parameter Name|Remarks|
|--------------|-------|
|matePairMap|Dictionary of Map between contigs using mate pair information.|
|redundancy|Number of mate pairs require to create a link 
            between two contigs.|

_returns: List of contig mate pairs._




