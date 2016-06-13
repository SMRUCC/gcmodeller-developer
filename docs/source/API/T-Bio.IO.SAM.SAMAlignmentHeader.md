---
title: SAMAlignmentHeader
---

# SAMAlignmentHeader
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

Class to hold SAM Headers.

### Methods

#### #cctor
```csharp
Bio.IO.SAM.SAMAlignmentHeader.#cctor
```
Static constructor.

#### #ctor
```csharp
Bio.IO.SAM.SAMAlignmentHeader.#ctor
```
Creates SAMAlignmentHeader instance.

#### GetReferenceSequenceRanges
```csharp
Bio.IO.SAM.SAMAlignmentHeader.GetReferenceSequenceRanges
```
Returns list of SequenceRanges objects which represents ReferenceSequenceInfo present in this header.

#### GetReferenceSequencesInfoFromSQHeader
```csharp
Bio.IO.SAM.SAMAlignmentHeader.GetReferenceSequencesInfoFromSQHeader
```
Returns list of reference sequences name and length present in SQ header.

#### IsValid
```csharp
Bio.IO.SAM.SAMAlignmentHeader.IsValid
```
VAlidates mandatory tags.
_returns: Returns empty string if mandatory tags are present; otherwise error message._



### Properties

#### Comments
List of comment headers.
#### MandatoryTagsForFieldTypes
Holds the mapping of record field types to its mandatory tags.
 This will be used in the IsValid() method to validate the specified SAMAlignmentHeader.
#### RecordFields
List of record fields.
 It holds all available record fields except comments.
#### ReferenceSequences
Holds the list of reference sequences name and length.
 SAMParser update this property from SQ header if present, else this will be updated from the each 
 alignment information in this case length of reference sequence will be unknown thus set to zero.
 BAMParser update this property from reference information block and not from the SQ header.
 BAMFormatter uses this information to write reference information block.
 SAMFormatter does not requires this information, thus ignores this info.

