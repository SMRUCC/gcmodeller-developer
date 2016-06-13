---
title: KmerDictionary
---

# KmerDictionary
_namespace: [Bio.Algorithms.Assembly.Graph](N-Bio.Algorithms.Assembly.Graph.html)_

Implements a thread safe K-mer dictionary (12 < k < 31) for storing values associated with ulong k-mers.
 Backend is an array of binary search trees

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.#ctor
```
Creates a new dictionary to store and search for deBruijin Nodes

#### AssignBucket
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.AssignBucket(Bio.Algorithms.Kmer.KmerData32)
```
Assign a k-mer encoded as a ulong to a bucket

|Parameter Name|Remarks|
|--------------|-------|
|value|kmer value|

_returns: bucket index_

#### GenerateNodeArray
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.GenerateNodeArray
```
Converts the nodes in the kmer manager into an array
 in order to improve performance and simultaneously destroys tree data structure.

#### GetNodes
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.GetNodes
```
Enumerate through tree returning an array while removing references to left/right children
 so they can become available to GC if not otherwise referenced.
_returns: Set of nodes_

#### SetNewOrGetOld
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.SetNewOrGetOld(Bio.Algorithms.Kmer.KmerData32)
```
Either returns the DeBrujin node associated with the ulong, or
 sets it if an old one does not exist
 Parallel Note: Is thread safe
_returns: The node representing this value_

#### TryGetOld
```csharp
Bio.Algorithms.Assembly.Graph.KmerDictionary.TryGetOld(Bio.Algorithms.Kmer.KmerData32)
```
Returns a node for a given k-mer

|Parameter Name|Remarks|
|--------------|-------|
|kmer|The kmer|

_returns: true if the item has previously been assigned a serial number; otherwise, false._



### Properties

#### _buckets
Each bucket stores a Tree that can be searched.
#### _hashingMask
Mask to hash off higher bits which can be used to get the bucket assignment of a k-mer
#### HashLength
How many bits of the ulong to use to decide which bucket is inserted where?
 Also determines the number of buckets as 2^hashLength,
#### NodeCount
Number of kmers in the dictionary

