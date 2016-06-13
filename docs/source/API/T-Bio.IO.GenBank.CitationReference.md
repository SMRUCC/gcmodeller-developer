---
title: CitationReference
---

# CitationReference
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Citations for all articles containing data reported in this sequence.
 
 Citations in PubMed that do not fall within Medline's scope will have only
 a PUBMED identifier. Similarly, citations that *are* in Medline's scope but
 which have not yet been assigned Medline UIs will have only a PUBMED identifier.
 If a citation is present in both the PubMed and Medline databases, both a
 MEDLINE and a PUBMED line will be present.

### Methods

#### Clone
```csharp
Bio.IO.GenBank.CitationReference.Clone
```
Creates a new CitationReference that is a copy of the current CitationReference.
_returns: A new CitationReference that is a copy of this CitationReference._



### Properties

#### Authors
Lists the authors in the order in which they appear in the cited article
 Last names are separated from initials by a comma (no space); there is no comma 
 before the final `and'. The list of authors ends with a period.
#### Consortiums
Lists the collective names of consortiums associated with the citation 
 (eg, International Human Genome Sequencing Consortium), rather than individual author names.
#### Journal
Lists the journal name, volume, year, and page numbers of the citation
#### Location
The range of bases in the sequence entry reported in this citation.
#### Medline
The National Library of Medicine's Medline unique identifier for a citation (if known).
 Medline UIs are 8 digit numbers.
#### Number
Reference number.
#### PubMed
The PubMed unique identifier for a citation (if known). 
 PUBMED ids are numeric, and are record identifiers for article abstracts in the PubMed database.
 
 http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=PubMed
#### Remarks
The REMARK line is a textual comment that specifies the relevance
 of the citation to the entry.
#### Title
Full title of citation. 
 Present in all but unpublished citations.

