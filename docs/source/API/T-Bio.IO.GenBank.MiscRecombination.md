---
title: MiscRecombination
---

# MiscRecombination
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Site of any generalized, site-specific or replicative recombination event where there is a breakage and 
 reunion of duplex DNA that cannot be described by other recombination keys or qualifiers of source key (/proviral).

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.MiscRecombination.#ctor(Bio.IO.GenBank.MiscRecombination)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other MiscRecombination instance.|


#### Clone
```csharp
Bio.IO.GenBank.MiscRecombination.Clone
```
Creates a new MiscRecombination that is a copy of the current MiscRecombination.
_returns: A new MiscRecombination that is a copy of this MiscRecombination._



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
#### StandardName
Accepted standard name for this feature.

