---
title: PoolItem
---

# PoolItem
_namespace: [Bio.Algorithms.Assembly.OverlapDeNovoAssembler](N-Bio.Algorithms.Assembly.OverlapDeNovoAssembler.html)_

A PoolItem is one item in the merge pool (either a sequence or a contig)
 along with its overlap scores with lower-numbered items.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.PoolItem.#ctor(System.Object,System.Boolean)
```
Initializes a new instance of the PoolItem class.
 constructor that sets item and type.

|Parameter Name|Remarks|
|--------------|-------|
|item|Pool object|
|isContig|Is it contig|


#### FreeSequences
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.PoolItem.FreeSequences
```
Free the item reference when no longer needed.



### Properties

#### _isContig
Flag that distinguished whether _item is a contig or sequence.
#### ConsumedBy
Gets or sets the index of the pool item that replaced it.
 If a pool item has been merged, consumedBy will be
 the index of the pool item that replaced it.
 A negative value means the item is still unmerged.
#### Contig
Gets stored Contig, assuming there is one.
#### IsContig
Gets a value indicating whether item is a contig.
#### Item
Gets or sets the item.
 Item can either be an ISequence, or a Contig.
#### Scores
Gets or sets list of overlap scores.
 List stores the overlap scores with all pool items 
 that have a lower index than this.
#### Sequence
Gets stored sequence, assuming there is one.
#### SequenceOrConsensus
Gets the sequence that will be aligned with other pool items. For
 a contig, this is the consensus; for a sequence, it's just the sequence.

