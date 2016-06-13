---
title: Ab1Metadata
---

# Ab1Metadata
_namespace: [Bio.IO.AppliedBiosystems.Model](N-Bio.IO.AppliedBiosystems.Model.html)_

Stores abi metadata associated with a sequence.

### Methods

#### #ctor
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.#ctor
```
Empty constructor.

#### AllColorData
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.AllColorData
```
Returns all color data.

#### SetAb1Data
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.SetAb1Data(Bio.ISequence,Bio.IO.AppliedBiosystems.Model.Ab1Metadata)
```
Sets ab1 metadata on a sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|
|metadata|-|


#### SetColorData
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.SetColorData(System.Byte,Bio.IO.AppliedBiosystems.Model.Ab1ColorData)
```
Sets color data based on the specific sequence.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|
|data|-|


#### Trim
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.Trim(System.Int32,System.Int32)
```
Trims residue sepecific data for the new range.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Starting residue to include.|
|length|Number of residues to trim to.|


#### TryGetAb1Data
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1Metadata.TryGetAb1Data(Bio.ISequence)
```
Attempts to get ab1 metadata from the sequence. Returns null if none is found.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|




### Properties

#### AdenineColorData
Contains color data associated with Adenine.
#### ConfidenceData
Confidence data for reads, identifying how confident the chosen nucleotide is at any given point.
#### CytosineColorData
Contains color data associated with Cytosine.
#### GuanineColorData
Contains color data associated with Guanine.
#### MetadataKey
Metadata Key
#### PeakLocations
Index of the color data for each chosen peak location. This identifies the read that was used to pick the
 nucleotide at a given point.
#### ThymineColorData
Contains color data associated with Thymine.

