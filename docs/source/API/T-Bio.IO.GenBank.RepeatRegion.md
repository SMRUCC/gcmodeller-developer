---
title: RepeatRegion
---

# RepeatRegion
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Region of genome containing repeating units.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.RepeatRegion.#ctor(Bio.IO.GenBank.RepeatRegion)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other RepeatRegion instance.|


#### Clone
```csharp
Bio.IO.GenBank.RepeatRegion.Clone
```
Creates a new RepeatRegion that is a copy of the current RepeatRegion.
_returns: A new RepeatRegion that is a copy of this RepeatRegion._



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
#### MobileElement
Type and name or identifier of the mobile element which is described by the parent feature.
#### Note
Any comment or additional information.
#### OldLocusTag
Feature tag assigned for tracking purposes.
#### RepeatedRange
rpt_unit_range; Identity of a repeat range.
#### RepeatedSequence
rpt_unit_seq; Identity of a repeat sequence.
#### RepeatedSequenceFamily
rpt_family; Type of repeated sequence; ""Alu"" or ""Kpn"", for example.
#### RepeatedSequenceType
rpt_type; Organization of repeated sequence.
#### Satellite
Identifier for a satellite DNA marker, compose of many tandem repeats 
 (identical or related) of a short basic repeated unit.
#### StandardName
Accepted standard name for this feature.

