---
title: IReadContigMapper
---

# IReadContigMapper
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Interface is used by classes that maps mate pairs to contigs.

### Methods

#### Map
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.IReadContigMapper.Map(System.Collections.Generic.IList{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence},System.Int32)
```
Map reads to contigs.
 Reads are aligned to contigs for distance calculation between
 contigs using mate pair library information, which will aid in scaffold building.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contig sequences.|
|reads|List of paired reads to be mapped.|
|kmerLength|Length of kmer.|

_returns: Read contig Map._




