---
title: SequenceToKmerBuilder
---

# SequenceToKmerBuilder
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

Constructs k-mers from given input sequence(s).
 For each input sequence, k-mers are constructed by sliding 
 a frame of size kmerLength along the input sequence, 
 and extracting sub-sequence inside the frame.

### Methods

#### Build
```csharp
Bio.Algorithms.Kmer.SequenceToKmerBuilder.Build(Bio.ISequence,System.Int32)
```
For input sequence, constructs k-mers by sliding 
 a frame of size kmerLength along the input sequence.
 Track positions of occurrence for each kmer in sequence.
 Constructs KmersOfSequence for sequence and associated k-mers.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Input sequence.|
|kmerLength|K-mer length.|

_returns: KmersOfSequence constructed from sequence and associated k-mers._

#### BuildKmerDictionary
```csharp
Bio.Algorithms.Kmer.SequenceToKmerBuilder.BuildKmerDictionary(Bio.ISequence,System.Int32)
```
For input sequence, constructs k-mers by sliding 
 a frame of size kmerLength along the input sequence.
 Track positions of occurance for each kmer in sequence.
 Constructs KmersOfSequence for sequence and associated k-mers.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Input sequence.|
|kmerLength|K-mer length.|

_returns: KmersOfSequence constructed from sequence and associated k-mers._

#### GetKmerSequences
```csharp
Bio.Algorithms.Kmer.SequenceToKmerBuilder.GetKmerSequences(Bio.ISequence,System.Int32)
```
Gets the set of kmer strings that occur in given sequences.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Source Sequence.|
|kmerLength|Kmer Length.|

_returns: Set of kmer strings._




