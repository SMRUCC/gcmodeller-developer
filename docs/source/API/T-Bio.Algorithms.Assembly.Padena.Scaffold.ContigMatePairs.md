---
title: ContigMatePairs
---

# ContigMatePairs
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Stores information about Contig - Contig mate pair map.
 Forward Contig Reverse Contig
 ---------------) (---------------
 -------) (------
 Forward Reverse
 read read 
 Key: Sequence of Forward Contig
 Value:
 Key: Sequence of reverse contig
 Value: List of mate pair between two contigs.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs.#ctor(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Initializes a new instance of the ContigMatePairs class with specified contigs.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contigs.|





