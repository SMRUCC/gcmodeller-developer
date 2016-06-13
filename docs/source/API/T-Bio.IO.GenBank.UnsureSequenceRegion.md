---
title: UnsureSequenceRegion
---

# UnsureSequenceRegion
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

UnsureSequenceRegion (Unsure) is a region in which author is unsure of exact sequence.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.UnsureSequenceRegion.#ctor(Bio.IO.GenBank.UnsureSequenceRegion)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other UnsureSequenceRegion instance.|


#### Clone
```csharp
Bio.IO.GenBank.UnsureSequenceRegion.Clone
```
Creates a new UnsureSequenceRegion that is a copy of the current UnsureSequenceRegion.
_returns: A new UnsureSequenceRegion that is a copy of this UnsureSequenceRegion._



### Properties

#### Allele
Name of the allele for the given gene.
 All gene-related features (exon, CDS etc) for a given gene should share the same Allele qualifier value; 
 the Allele qualifier value must, by definition, be different from the Gene qualifier value; when used with 
 the variation feature key, the Allele qualifier value should be that of the variant.
#### Citation
Reference to a citation listed in the entry reference field.
#### Compare
Reference details of an existing public INSD entry to which a comparison is made.
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
#### Replace
Indicates that the sequence identified a feature's intervals is replaced by the sequence shown in ""text"";
 if no sequence is contained within the qualifier, this indicates a deletion.

