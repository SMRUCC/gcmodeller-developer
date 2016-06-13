---
title: LocationRange
---

# LocationRange
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Holds start and end position of a feature in a sequence.
 For example: 
 If location of a feature is "join(1..100,J00194.1:100..202)"
 then we need to two LocationRange instance to hold this location.
 First LocationRange will be
 Accession - empty
 StartPosition -1
 EndPosition - 100
 Second LocationRange will be
 Accession - J00194.1
 StartPoistion - 100
 EndPosition 1 200
 
 Note that the GenBank feature location can be parsed using static method "GetLocationRanges" in GenBankMetadata class.
 For example:
 GenBankMetadata.GetLocationRanges("join(1..100,J00194.1:100..202)") this will return list of LocationRanges.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.LocationRange.#ctor(System.String,System.Int32,System.Int32)
```
Creates a new LocationRange instance from the specified accession, start and end position.

|Parameter Name|Remarks|
|--------------|-------|
|accession|Accession of the sequence.|
|startPosition|Start position.|
|endPosition|End position.|




### Properties

#### Accession
Gets or sets the Accession.
#### EndPosition
Gets or sets the end position.
#### StartPosition
Gets or sets the start position.

