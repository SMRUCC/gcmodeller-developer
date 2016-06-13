---
title: OrientationBasedMatePairFilter
---

# OrientationBasedMatePairFilter
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Filter mate pairs based on support for contig orientation.
 The mate pairs support specific orientation of contigs, 
 based on mapping of reverse read or forward read to specify orientation.
 Orientation 1
 ----------) (------------- 
 contig 1 contig 2
 Orientation 2
 ----------) (-------------
 contig 2 contig 1.

### Methods

#### FilterPairedReads
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.OrientationBasedMatePairFilter.FilterPairedReads(Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs,System.Int32)
```
Filter Paired Read Based on Orientation.

|Parameter Name|Remarks|
|--------------|-------|
|matePairMap|Map between contigs using mate pair information.|
|redundancy|Number of mate pairs required to create a link between two contigs.
             Hierarchical Scaffolding With Bambus
             by: Mihai Pop, Daniel S. Kosack, Steven L. Salzberg 
            Genome Research, Vol. 14, No. 1. (January 2004), pp. 149-159.|





