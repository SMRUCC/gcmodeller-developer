---
title: KmerPositionDictionary
---

# KmerPositionDictionary
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

Wrapper for dictionary that maps kmer strings 
 to list of positions of occurrence.

### Methods

#### ContainsKey
```csharp
Bio.Algorithms.Kmer.KmerPositionDictionary.ContainsKey(Bio.ISequence)
```
Determines whether kmer dictionary contains specified key.

|Parameter Name|Remarks|
|--------------|-------|
|key|The key to locate.|

_returns: Boolean indicating if key exists._

#### GetEnumerator
```csharp
Bio.Algorithms.Kmer.KmerPositionDictionary.GetEnumerator
```
Returns an enumerator that iterates through the 
 kmer and corresponding list of positions.
_returns: Enumerator over kmers._



### Properties

#### Count
Gets the number of elements present in this instance.
#### Item
Gets or sets the value associated with the specified key.
#### kmerDictionary
Maps kmer to list of positions of occurrence.

