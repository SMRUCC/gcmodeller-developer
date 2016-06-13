---
title: OperonRegion
---

# OperonRegion
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Operon is a region containing polycistronic transcript containing genes that encode enzymes 
 that are in the same metabolic pathway and regulatory sequences.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.OperonRegion.#ctor(Bio.IO.GenBank.OperonRegion)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other Operon instance.|


#### Clone
```csharp
Bio.IO.GenBank.OperonRegion.Clone
```
Creates a new OperonRegion that is a copy of the current OperonRegion.
_returns: A new OperonRegion that is a copy of this OperonRegion._



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
#### GenomicMapPosition
Genomic map position of feature.
#### Inference
A structured description of non-experimental evidence that supports the feature 
 identification or assignment.
#### Note
Any comment or additional information.
#### Operon
Name of the group of contiguous genes transcribed into a single transcript to which that feature belongs.
#### Phenotype
Phenotype conferred by the feature, where phenotype is defined as a physical, biochemical or behavioral 
 characteristic or set of characteristics.
#### Pseudo
Indicates that this feature is a non-functional version of the element named by the feature key.
#### StandardName
Accepted standard name for this feature.

