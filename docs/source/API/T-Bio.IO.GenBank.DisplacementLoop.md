---
title: DisplacementLoop
---

# DisplacementLoop
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Displacement Loop (D-Loop): A region within mitochondrial DNA in which a short stretch of RNA is paired with one strand
 of DNA, displacing the original partner DNA strand in this region; also used to describe the
 displacement of a region of one strand of duplex DNA by a single stranded invader in the 
 reaction catalyzed by RecA protein.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.DisplacementLoop.#ctor(Bio.IO.GenBank.DisplacementLoop)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other DisplacementLoop instance.|


#### Clone
```csharp
Bio.IO.GenBank.DisplacementLoop.Clone
```
Creates a new DisplacementLoop that is a copy of the current DisplacementLoop.
_returns: A new DisplacementLoop that is a copy of this DisplacementLoop._



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

