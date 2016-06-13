---
title: CaatSignal
---

# CaatSignal
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

CAAT box; part of a conserved sequence located about 75 bp up-stream of the start point
 of eukaryotic transcription units which may be involved in RNA polymerase binding.
 Consensus=GG(C or T)CAATCT.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.CaatSignal.#ctor(Bio.IO.GenBank.CaatSignal)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other CAATSignal instance.|


#### Clone
```csharp
Bio.IO.GenBank.CaatSignal.Clone
```
Creates a new CAATSignal that is a copy of the current CAATSignal.
_returns: A new CAATSignal that is a copy of this CAATSignal._



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

