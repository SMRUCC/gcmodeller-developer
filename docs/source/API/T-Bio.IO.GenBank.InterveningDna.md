---
title: InterveningDna
---

# InterveningDna
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Intervening DNA (iDNA) is a DNA which is eliminated through any of several kinds of recombination.
 For example, in the somatic processing of immunoglobulin genes.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.InterveningDna.#ctor(Bio.IO.GenBank.InterveningDna)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other InterveningDNA instance.|


#### Clone
```csharp
Bio.IO.GenBank.InterveningDna.Clone
```
Creates a new InterveningDNA that is a copy of the current InterveningDNA.
_returns: A new InterveningDNA that is a copy of this InterveningDNA._



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
#### StandardName
Accepted standard name for this feature.

