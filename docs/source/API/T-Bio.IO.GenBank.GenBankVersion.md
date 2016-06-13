---
title: GenBankVersion
---

# GenBankVersion
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

A compound identifier consisting of the primary accession number and 
 a numeric version number associated with the current version of the 
 sequence data in the record. This is followed by an integer key 
 (a "GI") assigned to the sequence by NCBI.

### Methods

#### Clone
```csharp
Bio.IO.GenBank.GenBankVersion.Clone
```
Creates a new GenBankVersion that is a copy of the current GenBankVersion.
_returns: A new GenBankVersion that is a copy of this GenBankVersion._



### Properties

#### Accession
Primary accession number.
#### CompoundAccession
Gets the CompoundAccession that is Accession.Version.
#### GiNumber
GI number.
#### Version
Version number.

