---
title: ThreePrimeUtr
---

# ThreePrimeUtr
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

ThreePrimeUTR (3'UTR) is a Region at the 3' end of a mature transcript (following the stop codon) that 
 is not translated into a protein.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.ThreePrimeUtr.#ctor(Bio.IO.GenBank.ThreePrimeUtr)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other ThreePrimeUTR instance.|


#### Clone
```csharp
Bio.IO.GenBank.ThreePrimeUtr.Clone
```
Creates a new ThreePrimeUTR that is a copy of the current ThreePrimeUTR.
_returns: A new ThreePrimeUTR that is a copy of this ThreePrimeUTR._



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
#### OldLocusTag
Feature tag assigned for tracking purposes.
#### StandardName
Accepted standard name for this feature.
#### TransSplicing
Indicates that exons from two RNA molecules are ligated in intermolecular 
 reaction to form mature RNA.

