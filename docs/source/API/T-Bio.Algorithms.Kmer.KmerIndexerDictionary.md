---
title: KmerIndexerDictionary
---

# KmerIndexerDictionary
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

Wrapper for dictionary that maps kmer strings 
 to list of sequence index and positions of occurrence.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Kmer.KmerIndexerDictionary.#ctor(System.Int32)
```
Initializes a new instance of the KmerIndexerDictionary class with specified capacity.

|Parameter Name|Remarks|
|--------------|-------|
|capacity|Number of elements to store.|


#### Add
```csharp
Bio.Algorithms.Kmer.KmerIndexerDictionary.Add(Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Kmer.KmerIndexer})
```
Adds the specified key and value to the dictionary.

|Parameter Name|Remarks|
|--------------|-------|
|key|The key of the element to add.|
|value|The value of the element to add.|


#### ContainsKey
```csharp
Bio.Algorithms.Kmer.KmerIndexerDictionary.ContainsKey(Bio.ISequence)
```
Determines whether kmer dictionary contains specified key.

|Parameter Name|Remarks|
|--------------|-------|
|key|The key to locate.|

_returns: Boolean indicating if key exists._

#### GetEnumerator
```csharp
Bio.Algorithms.Kmer.KmerIndexerDictionary.GetEnumerator
```
Returns an enumerator that iterates through the 
 kmer and corresponding list of positions.
_returns: Enumerator over kmers._

#### TryGetValue
```csharp
Bio.Algorithms.Kmer.KmerIndexerDictionary.TryGetValue(Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Kmer.KmerIndexer}@)
```
Gets the value associated with the specified key.

|Parameter Name|Remarks|
|--------------|-------|
|key|The key of the value to get.|
|value|Contains value associated with.
            the specified key, if key is found.|

_returns: Boolean indicating if key was found._



### Properties

#### Item
Gets or sets the value associated with the specified key.
#### kmerIndexer
Maps kmer to list of KmerIndexer.
 Each KmerIndexer point to places of occurrence of kmer.

