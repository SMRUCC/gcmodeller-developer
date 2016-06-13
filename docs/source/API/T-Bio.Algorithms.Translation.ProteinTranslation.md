---
title: ProteinTranslation
---

# ProteinTranslation
_namespace: [Bio.Algorithms.Translation](N-Bio.Algorithms.Translation.html)_

Provides the means of translating an RNA sequence into an Protein
 sequence of amino acids.

### Methods

#### Translate
```csharp
Bio.Algorithms.Translation.ProteinTranslation.Translate(Bio.ISequence,System.Int32)
```
Translates the RNA sequence passed in as a source into a Protein
 sequence of amino acids. Allows the setting of a particular index
 into the source sequence for the start of translation.
 For instance if you wanted to translate all the phases of an RNA
 sequence you could perform the following:
 Sequence rnaSeq = new Sequence(Alphabets.RNA), "AUGCGCCCG");
 Sequence phase1 = ProteinTranslation.Translate(rnaSeq, 0);
 Sequence phase2 = ProteinTranslation.Translate(rnaSeq, 1);
 Sequence phase3 = ProteinTranslation.Translate(rnaSeq, 2);

|Parameter Name|Remarks|
|--------------|-------|
|source|The source RNA sequence to translate from|
|nucleotideOffset|
            An offset into the source sequence from which to begin translation.
            Note that this offset begins counting from 0. Set this parameter to
            0 to translate the entire source sequence. Set it to 1 to ignore the
            first nucleotide in the source sequence, etc.
            |

_returns: The translated sequence._




