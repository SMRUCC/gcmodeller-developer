---
title: MUMmer
---

# MUMmer
_namespace: [Bio.Algorithms.MUMmer](N-Bio.Algorithms.MUMmer.html)_

MUMmer is a system for rapidly aligning entire genomes or very large protein
 sequences. It is a pair wise sequence algorithm. The algorithm assumes the 
 sequences are closely related, and using this assumption can quickly compare
 sequences that are millions of nucleotides in length. The algorithm is 
 designed to perform high resolution comparison of genome-length sequences.

### Methods

#### #ctor
```csharp
Bio.Algorithms.MUMmer.MUMmer.#ctor(Bio.Algorithms.SuffixTree.ISuffixTree)
```
Initializes a new instance of the MUMmer class with the specified suffix tree.
 This enables to use custom suffix tree.

|Parameter Name|Remarks|
|--------------|-------|
|suffixTree|Suffix tree.|


#### GetMatches
```csharp
Bio.Algorithms.MUMmer.MUMmer.GetMatches(Bio.ISequence)
```
Gets the maximum matches - MaxMatch.
 This method does not considers uniqueness.

|Parameter Name|Remarks|
|--------------|-------|
|querySequence|Query sequence.|

_returns: Returns IEnumerable of MUMs._

#### GetMatchesUniqueInReference
```csharp
Bio.Algorithms.MUMmer.MUMmer.GetMatchesUniqueInReference(Bio.ISequence)
```
Gets the maximum unique matches in reference sequence.

|Parameter Name|Remarks|
|--------------|-------|
|querySequence|Query sequence.|

_returns: Returns IEnumerable of MUMs._



### Properties

#### Description
Gets or sets the description of the MUMmer.
#### LengthOfMUM
Gets or sets the length of MUM.
#### Name
Gets the name of the MUMmer.
#### NoAmbiguity
Gets or sets a value indicating whether only basic symbols should be matched.
 Thus the matches will not contains any ambiguous symbols.
#### ReferenceSequence
Gets the referenceSequence.
#### suffixTree
Holds the suffix tree.

