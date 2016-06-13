---
title: Ab1Header
---

# Ab1Header
_namespace: [Bio.IO.AppliedBiosystems](N-Bio.IO.AppliedBiosystems.html)_

The header contains information about the abi file. This should always have the same format regardless of file version and so should
 be read first and then an appropriate parser chosen based on the file version.

### Methods

#### #ctor
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.#ctor(System.IO.BinaryReader)
```
Creates a new header and loads it from the specified stream.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|


#### ReadDirectories
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.ReadDirectories(System.IO.BinaryReader)
```
Reads all directories entries based on the intiial directory entry header @"P:Bio.IO.AppliedBiosystems.Ab1Header.DirectoryEntryDefinition".

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|


#### ReadDirectoryStructure
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.ReadDirectoryStructure(System.Byte[])
```
Reads the definition directory entry.

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### ValidateFileSignature
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.ValidateFileSignature(System.Byte[])
```
Validates the file signature. Ensures this is an abi file.

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### ValidateFileVersion
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.ValidateFileVersion(System.Byte[])
```
Validate the file version.

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### ValidateHeader
```csharp
Bio.IO.AppliedBiosystems.Ab1Header.ValidateHeader(System.IO.BinaryReader)
```
Validates the header matches this parser.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|




### Properties

#### DirectoryEntries
Contains a list of all entries found within the file. This does not include the initial header directory.
#### DirectoryEntryDefinition
The first directory entry found after the header. This defines the following content of the file.
#### FileSignature
Identifies the file as an abi file. These are the first four bytes and should be ABIF.
#### MajorVersion
Major version pulled from the @"P:Bio.IO.AppliedBiosystems.Ab1Header.Version" property.
#### Version
Version of the abi file.

