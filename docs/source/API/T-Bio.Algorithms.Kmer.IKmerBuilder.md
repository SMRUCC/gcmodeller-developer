---
title: IKmerBuilder
---

# IKmerBuilder
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

This interface defines contract for classes that implement construction 
 of k-mer sequences from input sequences. It provides methods that take 
 input sequence(s) and construct corresponding k-mers.

### Methods

#### Build
```csharp
Bio.Algorithms.Kmer.IKmerBuilder.Build(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Int32)
```
Builds k-mers for a list of input sequences.
 For each sequence in input list, constructs a KmersOfSequence 
 corresponding to the sequence and associated k-mers.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of input sequences.|
|kmerLength|K-mer length.|

_returns: List of KmersOfSequence instances._




