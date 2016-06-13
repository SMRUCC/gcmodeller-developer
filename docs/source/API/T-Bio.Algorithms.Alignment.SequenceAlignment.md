---
title: SequenceAlignment
---

# SequenceAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

A simple implementation of ISequenceAlignment that stores the 
 result of an alignment.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.SequenceAlignment.#ctor(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Constructor which initializes the sequences.

|Parameter Name|Remarks|
|--------------|-------|
|initialSequences|Sequences|


#### ToString
```csharp
Bio.Algorithms.Alignment.SequenceAlignment.ToString
```
Converts the Aligned Sequences to string.
_returns: Aligned Sequence Data._



### Properties

#### AlignedSequences
Gets list of aligned sequences.
#### Documentation
Gets or sets documentation for this alignment.
#### Metadata
Gets any additional information about the Alignment.
#### Sequences
Gets list of source sequences involved in the alignment.

