---
title: AmbiguousProteinAlphabet
---

# AmbiguousProteinAlphabet
_namespace: [Bio](N-Bio.html)_

Ambiguous characters in the Protein.

### Methods

#### #cctor
```csharp
Bio.AmbiguousProteinAlphabet.#cctor
```
Initializes static members of the AmbiguousProteinAlphabet class.

#### #ctor
```csharp
Bio.AmbiguousProteinAlphabet.#ctor
```
Initializes a new instance of the AmbiguousProteinAlphabet class.

#### GetConsensusSymbol
```csharp
Bio.AmbiguousProteinAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus nucleotide for a set of nucleotides.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus nucleotide._



### Properties

#### B
Gets the Aspartic Acid or Asparagine.
#### Instance
New instance of Ambiguous character.
#### J
Gets the Leucine or Isoleucine.
#### X
Gets X - Xxx - Undetermined or atypical.
#### Z
Gets Z - Glx - Glutamic Acid or Glutamine.

