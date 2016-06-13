---
title: AmbiguousRnaAlphabet
---

# AmbiguousRnaAlphabet
_namespace: [Bio](N-Bio.html)_

Ambiguous symbols in the RNA.

### Methods

#### #cctor
```csharp
Bio.AmbiguousRnaAlphabet.#cctor
```
Initializes static members of the AmbiguousRnaAlphabet class.

#### #ctor
```csharp
Bio.AmbiguousRnaAlphabet.#ctor
```
Initializes a new instance of the AmbiguousRnaAlphabet class.

#### GetConsensusSymbol
```csharp
Bio.AmbiguousRnaAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus nucleotide for a set of nucleotides.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus nucleotide._



### Properties

#### AC
Gets Ambiguous symbols A-Adenine C-Cytosine.
#### ACU
Gets Ambiguous symbols A-Adenine C-Cytosine U-Uracil.
#### Any
Gets Ambiguous symbol Any.
#### AU
Gets Ambiguous symbols A-Adenine U-Uracil.
#### GA
Gets Ambiguous symbols G-Guanine A-Adenine.
#### GAU
Gets Ambiguous symbols G-Guanine A-Adenine U-Uracil.
#### GC
Gets Ambiguous symbols G-Guanine C-Cytosine.
#### GCA
Gets Ambiguous symbols G-Guanine C-Cytosine A-Adenine.
#### GU
Gets Ambiguous symbols G-Guanine U-Uracil.
#### GUC
Gets Ambiguous symbols G-Guanine U-Uracil C-Cytosine.
#### Instance
New instance of Ambiguous symbol.
#### UC
Gets Ambiguous symbols U-Uracil C-Cytosine.

