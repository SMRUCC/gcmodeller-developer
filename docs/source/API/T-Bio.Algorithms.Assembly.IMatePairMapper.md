---
title: IMatePairMapper
---

# IMatePairMapper
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Map Reads to Mate Pairs
 Interface can be implemented by classes which map reads to mate pairs
 in another input formats.

### Methods

#### Map
```csharp
Bio.Algorithms.Assembly.IMatePairMapper.Map(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Map Reads to mate pairs.

|Parameter Name|Remarks|
|--------------|-------|
|reads|List of reads.|

_returns: List of mate pairs._

#### MapContigToMatePairs
```csharp
Bio.Algorithms.Assembly.IMatePairMapper.MapContigToMatePairs(System.Collections.Generic.IEnumerable{Bio.ISequence},Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMap)
```
Finds contig pairs having valid mate pairs connection between them.

|Parameter Name|Remarks|
|--------------|-------|
|reads|Input list of reads.|
|alignment|Reads con alignment.|

_returns: Contig Mate pair map._




