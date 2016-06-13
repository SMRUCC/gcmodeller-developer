---
title: GenBankLocusInfo
---

# GenBankLocusInfo
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Locus provides a short mnemonic name for the sequence entry in gen bank 
 database, chosen to suggest the sequence's definition.
 
 It also contains information like Sequence type, Strand type division code etc.

### Methods

#### Clone
```csharp
Bio.IO.GenBank.GenBankLocusInfo.Clone
```
Creates a new GenBankLocusInfo that is a copy of the current GenBankLocusInfo.
_returns: A new GenBankLocusInfo that is a copy of this GenBankLocusInfo._



### Properties

#### Date
Contains the date the entry was entered or underwent any substantial revisions,
 such as the addition of newly published data.
#### DivisionCode
A DivisionCode specifies which family a sequence belongs to.
#### MoleculeType
Specifies type of the biological sequence.
#### Name
Mnemonic name for the sequence entry.
#### SequenceLength
Specifies the length of the sequence present.
#### SequenceType
Sequence type specifies whether the sequence is a base pair (bp) or an amino acid (aa).
#### Strand
A StrandType specifies whether sequence occurs as a single stranded,
 double stranded or mixed stranded.
#### StrandTopology
A StrandTopology specifies whether the strand is linear or circular.

