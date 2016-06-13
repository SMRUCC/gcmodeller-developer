---
title: LongTerminalRepeat
---

# LongTerminalRepeat
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Long terminal repeat (LTR), a sequence directly repeated at both ends of a defined sequence,
 of the sort typically found in retroviruses.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.LongTerminalRepeat.#ctor(Bio.IO.GenBank.LongTerminalRepeat)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other LongTerminalRepeat instance.|


#### Clone
```csharp
Bio.IO.GenBank.LongTerminalRepeat.Clone
```
Creates a new LongTerminalRepeat that is a copy of the current LongTerminalRepeat.
_returns: A new LongTerminalRepeat that is a copy of this LongTerminalRepeat._



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

