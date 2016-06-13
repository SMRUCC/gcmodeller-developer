---
title: Codons
---

# Codons
_namespace: [Bio.Algorithms.Translation](N-Bio.Algorithms.Translation.html)_

A class which stores a table of mappings from triplets of RNA nucleotides
 to Amino Acids. This mapping comes from the standard Axiom of Genetics
 triplet rule. This class provides the basic lookup functionality from the
 codons. The ProteinTranslation class provides methods for translating
 whole RNA sequences.
 In order to perform mapping from DNA, it is suggested that you first
 use the Transcription class to create the RNA sequence

### Methods

#### #cctor
```csharp
Bio.Algorithms.Translation.Codons.#cctor
```
Initializes the Codon map dictionary.

#### Lookup
```csharp
Bio.Algorithms.Translation.Codons.Lookup(Bio.ISequence,System.Int32)
```
Lookup an amino acid within a sequence starting a certain offset.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The source sequence to lookup from.|
|offset|
            The offset within the sequence from which to look at the next three
            nucleotides. Note that this offset begins its count at zero. Thus
            looking at a sequence described by "AUGGCG" and using a offset of 0
            would lookup the amino acid for codon "AUG" while using a offset of 1
            would lookup the amino acid for codon "UGG".
            |

_returns: An amino acid from the protein alphabet_

#### TryLookup
```csharp
Bio.Algorithms.Translation.Codons.TryLookup(Bio.ISequence,System.Int32,System.Byte@)
```
Tries to lookup an amino acid within a sequence starting a certain offset.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The source sequence to lookup from.|
|offset|
            The offset within the sequence from which to look at the next three
            nucleotides. Note that this offset begins its count at zero. Thus
            looking at a sequence described by "AUGGCG" and using a offset of 0
            would lookup the amino acid for codon "AUG" while using a offset of 1
            would lookup the amino acid for codon "UGG".
            |
|aminoAcid|An amino acid from the protein alphabet|

_returns: true, if the triplet of nucleotides could
            be mapped, false otherwise_



### Properties

#### CodonMap
The mapping dictionary.

