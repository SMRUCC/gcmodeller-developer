---
title: TransferMessengerRna
---

# TransferMessengerRna
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Transfer messenger RNA; tmRNA acts as a tRNA first, and then as an mRNA that encodes a peptide tag; 
 the ribosome translates this mRNA region of tmRNA and attaches the encoded peptide tag to the 
 C-terminus of the unfinished protein; this attached tag targets the protein for destruction or proteolysis.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.TransferMessengerRna.#ctor(Bio.IO.GenBank.TransferMessengerRna)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other TransferMessengerRNA instance.|


#### Clone
```csharp
Bio.IO.GenBank.TransferMessengerRna.Clone
```
Creates a new TransferMessengerRNA that is a copy of the current TransferMessengerRNA.
_returns: A new TransferMessengerRNA that is a copy of this TransferMessengerRNA._



### Properties

#### TagPeptide
Base location encoding the polypeptide for proteolysis tag of tmRNA and its termination codon.

