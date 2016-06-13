---
title: ReadContigMap
---

# ReadContigMap
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Class stores multiple mapping between reads and a contig.
 ------------------- Read Sequence
 ------------------------------ Contig Sequence [Full Overlap]
 ---------------- Contig Sequence [Partial Overlap]
 The Class stores 
 Key: Sequence Id of Read 
 Value
 Key: Sequence of Contig
 Value: List of position of Overlaps of contig with read.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMap.#ctor(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Initializes a new instance of the ReadContigMap class with specified reads.

|Parameter Name|Remarks|
|--------------|-------|
|reads|List of reads.|





