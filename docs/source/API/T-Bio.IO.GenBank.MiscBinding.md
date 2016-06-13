---
title: MiscBinding
---

# MiscBinding
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Site in nucleic acid which covalently or non-covalently binds another moiety that cannot be described
 by any other binding key (primer_bind or protein_bind).

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.MiscBinding.#ctor(Bio.IO.GenBank.MiscBinding)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other MiscBinding instance.|


#### Clone
```csharp
Bio.IO.GenBank.MiscBinding.Clone
```
Creates a new MiscBinding that is a copy of the current MiscBinding.
_returns: A new MiscBinding that is a copy of this MiscBinding._



### Properties

#### Allele
Name of the allele for the given gene.
 All gene-related features (exon, CDS etc) for a given gene should share the same Allele qualifier value; 
 the Allele qualifier value must, by definition, be different from the Gene qualifier value; when used with 
 the variation feature key, the Allele qualifier value should be that of the variant.
#### BoundMoiety
Name of the molecule/complex that may bind to the given feature.
#### Citation
Reference to a citation listed in the entry reference field.
#### DatabaseCrossReference
Database cross-reference: pointer to related information in another database.
#### Experiment
A brief description of the nature of the experimental evidence that supports the feature 
 identification or assignment.
#### Function
Function attributed to a sequence.
#### GeneSymbol
Symbol of the gene corresponding to a sequence region.
#### GeneSynonym
Synonymous, replaced, obsolete or former gene symbol.
#### GenomicMapPosition
Genomic map position of feature.
#### Inference
A structured description of non-experimental evidence that supports the feature 
 identification or assignment.
#### LocusTag
A submitter-supplied, systematic, stable identifier for a gene and its associated 
 features, used for tracking purposes.
#### Note
Any comment or additional information.
#### OldLocusTag
Feature tag assigned for tracking purposes.

