---
title: GenBankAccession
---

# GenBankAccession
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Accession is identifier assigned to each GenBank sequence record.
 It contains primary accession number and may contain secondary accession numbers.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.GenBankAccession.#ctor(Bio.IO.GenBank.GenBankAccession)
```
Private Constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|GenBankAccession instance to clone.|


#### Clone
```csharp
Bio.IO.GenBank.GenBankAccession.Clone
```
Creates a new GenBankAccession that is a copy of the current GenBankAccession.
_returns: A new GenBankAccession that is a copy of this GenBankAccession._

#### Contains
```csharp
Bio.IO.GenBank.GenBankAccession.Contains(System.String)
```
Validates whether the specified accession number is present in 
 this Accession as primary or secondary accession number.

|Parameter Name|Remarks|
|--------------|-------|
|accession|Accession number.|

_returns: If found returns true else returns false._



### Properties

#### Primary
Primary accession number.
#### Secondary
List of secondary accession numbers.

