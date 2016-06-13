---
title: MiscFeature
---

# MiscFeature
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Region of biological interest which cannot be described by any other feature key; a new or rare feature.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.MiscFeature.#ctor(Bio.IO.GenBank.MiscFeature)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other MiscFeature instance.|


#### Clone
```csharp
Bio.IO.GenBank.MiscFeature.Clone
```
Creates a new MiscFeature that is a copy of the current MiscFeature.
_returns: A new MiscFeature that is a copy of this MiscFeature._



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
#### Number
A number to indicate the order of genetic elements (e.g., exons or introns) in the 5' to 3' direction.
#### OldLocusTag
Feature tag assigned for tracking purposes.
#### Phenotype
Phenotype conferred by the feature, where phenotype is defined as a physical, biochemical or behavioral 
 characteristic or set of characteristics.
#### Product
Name of the product associated with the feature, e.g. the mRNA of an mRNA feature, 
 the polypeptide of a CDS, the mature peptide of a mat_peptide, etc.
#### Pseudo
Indicates that this feature is a non-functional version of the element named by the feature key.
#### StandardName
Accepted standard name for this feature.

