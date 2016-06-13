---
title: KmersOfSequence
---

# KmersOfSequence
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

Contains base sequence, and information regarding associated k-mers.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Kmer.KmersOfSequence.#ctor(Bio.ISequence,System.Int32)
```
Initializes a new instance of the KmersOfSequence class.
 Takes k-mer sequence and k-mer length.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Source sequence.|
|kmerLength|Length of k-mer.|


#### KmersToSequences
```csharp
Bio.Algorithms.Kmer.KmersOfSequence.KmersToSequences
```
Returns the associated k-mers as a list of k-mer sequences.
_returns: List of k-mer sequences._

#### KmerToSequence
```csharp
Bio.Algorithms.Kmer.KmersOfSequence.KmerToSequence(Bio.Algorithms.Kmer.KmersOfSequence.KmerPositions)
```
Builds the sequence corresponding to input kmer, 
 using base sequence.

|Parameter Name|Remarks|
|--------------|-------|
|kmer|Input k-mer.|

_returns: Sequence corresponding to input k-mer._



### Properties

#### BaseSequence
Gets the base sequence.
#### Kmers
Gets the set of associated Kmers.
#### Length
Gets the length of associated k-mers.

