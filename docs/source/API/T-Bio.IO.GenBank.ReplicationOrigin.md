---
title: ReplicationOrigin
---

# ReplicationOrigin
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Origin of replication (rep_origin); starting site for duplication of nucleic acid to give two identical copies.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.ReplicationOrigin.#ctor(Bio.IO.GenBank.ReplicationOrigin)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other ReplicationOrigin instance.|


#### Clone
```csharp
Bio.IO.GenBank.ReplicationOrigin.Clone
```
Creates a new ReplicationOrigin that is a copy of the current ReplicationOrigin.
_returns: A new ReplicationOrigin that is a copy of this ReplicationOrigin._



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
#### Direction
Direction of DNA replication.
 Values: left, right, or both where left indicates toward the 5' end of the entry sequence 
 (as presented) and right indicates toward the 3' end.
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

