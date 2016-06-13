---
title: TataSignal
---

# TataSignal
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

TATA box; Goldberg-Hogness box; a conserved AT-rich septamer found about 25 bp before the start point 
 of each eukaryotic RNA polymerase II transcript unit which may be involved in positioning the enzyme 
 for correct initiation; consensus=TATA(A or T)A(A or T).

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.TataSignal.#ctor(Bio.IO.GenBank.TataSignal)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other TATASignal instance.|


#### Clone
```csharp
Bio.IO.GenBank.TataSignal.Clone
```
Creates a new TATASignal that is a copy of the current TATASignal.
_returns: A new TATASignal that is a copy of this TATASignal._



### Properties

#### Allele
Name of the allele for the given gene.
 All gene-related features (exon, CDS etc) for a given gene should share the same Allele qualifier value; 
 the Allele qualifier value must, by definition, be different from the Gene qualifier value; when used with 
 the variation feature key, the Allele qualifier value should be that of the variant.
#### Citation
Reference to a citation listed in the entry reference field.
#### DatabaseCrossReference
Database cross-reference: pointer to related information in another database.
#### Experiment
A brief description of the nature of the experimental evidence that supports the feature 
 identification or assignment.
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

