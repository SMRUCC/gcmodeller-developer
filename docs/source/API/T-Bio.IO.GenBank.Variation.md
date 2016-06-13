---
title: Variation
---

# Variation
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

A related strain contains stable mutations from the same gene (e.g., RFLPs, polymorphisms, etc.) 
 which differ from the presented sequence at this location (and possibly others).

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.Variation.#ctor(Bio.IO.GenBank.Variation)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other Variation instance.|


#### Clone
```csharp
Bio.IO.GenBank.Variation.Clone
```
Creates a new Variation that is a copy of the current Variation.
_returns: A new Variation that is a copy of this Variation._



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
#### Frequency
Frequency of the occurrence of a feature.
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
#### Phenotype
Phenotype conferred by the feature, where phenotype is defined as a physical, biochemical or behavioral 
 characteristic or set of characteristics.
#### Product
Name of the product associated with the feature, e.g. the mRNA of an mRNA feature, 
 the polypeptide of a CDS, the mature peptide of a mat_peptide, etc.
#### Replace
Indicates that the sequence identified a feature's intervals is replaced by the sequence shown in ""text"";
 if no sequence is contained within the qualifier, this indicates a deletion.
#### StandardName
Accepted standard name for this feature.

