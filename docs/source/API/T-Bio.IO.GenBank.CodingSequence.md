---
title: CodingSequence
---

# CodingSequence
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Coding sequence (CDS); sequence of nucleotides that corresponds with the sequence of amino acids 
 in a protein (location includes stop codon); feature includes amino acid conceptual translation.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.CodingSequence.#ctor(Bio.IO.GenBank.CodingSequence)
```
Private constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other CodingSequence instance.|


#### Clone
```csharp
Bio.IO.GenBank.CodingSequence.Clone
```
Creates a new CodingSequence that is a copy of the current CodingSequence.
_returns: A new CodingSequence that is a copy of this CodingSequence._

#### GetTranslation
```csharp
Bio.IO.GenBank.CodingSequence.GetTranslation
```
Returns protein sequence from the translation.



### Properties

#### Allele
Name of the allele for the given gene.
 All gene-related features (exon, CDS etc) for a given gene should share the same Allele qualifier value; 
 the Allele qualifier value must, by definition, be different from the Gene qualifier value; when used with 
 the variation feature key, the Allele qualifier value should be that of the variant.
#### Citation
Reference to a citation listed in the entry reference field.
#### Codon
Specifies a codon which is different from any found in the reference genetic code.
#### CodonStart
Indicates the offset at which the first complete codon of a coding feature can be found, 
 relative to the first base of that feature.
#### DatabaseCrossReference
Database cross-reference: pointer to related information in another database.
#### EnzymeCommissionNumber
Enzyme Commission number for enzyme product of sequence.
#### Exception
Indicates that the coding region cannot be translated using standard biological rules.
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
#### Operon
Name of the group of contiguous genes transcribed into a single transcript to which that feature belongs.
#### Product
Name of the product associated with the feature, e.g. the mRNA of an mRNA feature, 
 the polypeptide of a CDS, the mature peptide of a mat_peptide, etc.
#### ProteinId
Protein identifier, issued by International collaborators. this qualifier consists of a stable ID 
 portion (3+5 format with 3 position letters and 5 numbers) plus a version number after the decimal point.
#### Pseudo
Indicates that this feature is a non-functional version of the element named by the feature key.
#### RibosomalSlippage
During protein translation, certain sequences can program ribosomes to change to an alternative 
 reading frame by a mechanism known as ribosomal slippage.
#### StandardName
Accepted standard name for this feature.
#### Translation
Automatically generated one-letter abbreviated amino acid sequence derived from either 
 the universal genetic code or the table as specified in Transl_table qualifier and as 
 determined by exceptions in the Transl_except and Codon qualifiers.
#### TranslationalExcept
Translational exception: single codon the translation of which does not conform 
 to genetic code defined by Organism and Codon qualifier.
#### TranslationTable
Definition of genetic code table used if other than universal genetic code table.
#### TransSplicing
Indicates that exons from two RNA molecules are ligated in intermolecular 
 reaction to form mature RNA.

