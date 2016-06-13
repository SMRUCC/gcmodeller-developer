---
title: AmbiguousDnaAlphabet
---

# AmbiguousDnaAlphabet
_namespace: [Bio](N-Bio.html)_

Ambiguous symbol in the DNA.

### Methods

#### #cctor
```csharp
Bio.AmbiguousDnaAlphabet.#cctor
```
Initializes static members of the AmbiguousDnaAlphabet class.

#### #ctor
```csharp
Bio.AmbiguousDnaAlphabet.#ctor
```
Initializes a new instance of the AmbiguousDnaAlphabet class.

#### GetConsensusSymbol
```csharp
Bio.AmbiguousDnaAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus nucleotide for a set of nucleotides.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus nucleotide._



### Properties

#### AC
Gets Ambiguous symbol A-Adenine C-Cytosine.
#### ACT
Gets Ambiguous symbol A-Adenine C-Cytosine T-Thymine.
#### Any
Gets Ambiguous symbol Any.
#### AT
Gets Ambiguous symbol A-Adenine T-Thymine.
#### GA
Gets Ambiguous symbol G-Guanine A-Adenine.
#### GAT
Gets Ambiguous symbol G-Guanine A-Adenine T-Thymine.
#### GC
Gets Ambiguous symbol G-Guanine C-Cytosine.
#### GCA
Gets Ambiguous symbol G-Guanine C-Cytosine A-Adenine.
#### GT
Gets Ambiguous symbol G-Guanine T-Thymine.
#### GTC
Gets Ambiguous symbol G-Guanine T-Thymine C-Cytosine.
#### Instance
New instance of Ambiguous symbol.
#### TC
Gets Ambiguous symbol T-Thymine C-Cytosine.

