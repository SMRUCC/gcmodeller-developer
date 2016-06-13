---
title: GenBankMetadata
---

# GenBankMetadata
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

GenBankMetadata class holds metadata provided 
 by the gen bank flat file format.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.GenBankMetadata.#ctor(Bio.IO.GenBank.GenBankMetadata)
```
Private Constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|GenBankMetadata instance to clone.|


#### Clone
```csharp
Bio.IO.GenBank.GenBankMetadata.Clone
```
Creates a new GenBankMetadata that is a copy of the current GenBankMetadata.
_returns: A new GenBankMetadata that is a copy of this GenBankMetadata._

#### GetCitationsReferredInFeature
```csharp
Bio.IO.GenBank.GenBankMetadata.GetCitationsReferredInFeature(Bio.IO.GenBank.FeatureItem)
```
Returns list of citation references in this metadata which are referred in the specified feature.

|Parameter Name|Remarks|
|--------------|-------|
|item|Feature Item.|


#### GetCitationsReferredInFeatures
```csharp
Bio.IO.GenBank.GenBankMetadata.GetCitationsReferredInFeatures
```
Returns list of citation references in this metadata which are referred in features.

#### GetFeatures
```csharp
Bio.IO.GenBank.GenBankMetadata.GetFeatures(System.String,System.Int32,System.Int32)
```
Returns the features which are partly or completely inside the specified range 
 and belongs to specified accession.
 Note that the startPosition and endPosition are one based position.

|Parameter Name|Remarks|
|--------------|-------|
|accession|Accession number.|
|startPosition|Start position.|
|endPosition|End position|




### Properties

#### Accession
Accession is identifier assigned to each GenBank sequence record.
#### BaseCount
Summary of the number of occurrences of each base pair code 
 (a, c, t, g, and other) in the sequence.
 
 This is obsolete and was removed from the GenBank flat-file 
 format in October 2003.
#### Comments
Cross-references to other sequence entries, comparisons to
 other collections, notes of changes in LOCUS names, and other remarks.
#### Contig
provides information about how individual sequence records can be 
 combined to form larger-scale biological objects, such as chromosomes 
 or complete genomes. Rather than presenting actual sequence data, a 
 special join() statement provides the accession numbers and base pair 
 ranges of the underlying records which comprise the object.
#### DbLink
DBLink provides cross-references to resources that support the existence 
 a sequence record, such as the Project Database and the NCBI 
 Trace Assembly Archive.
#### DbLinks
DBLinks provides a list of cross-references to resources that support the existence 
 a sequence record, such as the Project Database and the NCBI 
 Trace Assembly Archive.
#### DbSource
DBSource provies reference to the GenBank record from which the protein 
 translation was obtained.
#### Definition
Gets or sets the definition.
 Definition is a concise description of the sequence
#### Features
Containing information on portions of the sequence that code for 
 proteins and RNA molecules and information on experimentally determined 
 sites of biological significance.
#### Keywords
Short phrases describing gene products and other information about the sequence.
#### Locus
Gets or sets the locaus information.
 Locus is a short mnemonic name for the entry, chosen to suggest the
 sequence's definition
#### Origin
Specification of how the first base of the reported sequence is 
 operationally located within the genome. Where possible, this 
 includes its location within a larger genetic map.
#### Primary
Provides the reference to the primary GenBank files from which annotations 
 in this file are derived.
#### Project
The identifier of a project (such as a Genome Sequencing Project) 
 to which a GenBank sequence record belongs.
 
 This is obsolete and was removed from the GenBank flat-file format 
 after Release 171.0 in April 2009.
#### References
Citations for all articles containing data reported in this entry.
#### Segment
Segment provides the information on the order in which this entry appears in a
 series of discontinuous sequences from the same molecule.
#### Source
Source provides the common name of the organism or the name most frequently used
 in the literature along with the taxonomic classification levels
#### Version
A compound identifier consisting of the primary accession number and 
 a numeric version number associated with the current version of the 
 sequence data in the record. This is followed by an integer key 
 (a "GI") assigned to the sequence by NCBI.

