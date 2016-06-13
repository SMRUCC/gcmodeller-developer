---
title: Minus10Signal
---

# Minus10Signal
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Pribnow box; a conserved region about 10 bp upstream of the start point of bacterial transcription units
 which may be involved in binding RNA polymerase.
 Consensus=TAtAaT.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.Minus10Signal.#ctor(Bio.IO.GenBank.Minus10Signal)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other Minus10Signal instance.|


#### Clone
```csharp
Bio.IO.GenBank.Minus10Signal.Clone
```
Creates a new Minus10Signal that is a copy of the current Minus10Signal.
_returns: A new Minus10Signal that is a copy of this Minus10Signal._



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
#### Operon
Name of the group of contiguous genes transcribed into a single transcript to which that feature belongs.
#### StandardName
Accepted standard name for this feature.

