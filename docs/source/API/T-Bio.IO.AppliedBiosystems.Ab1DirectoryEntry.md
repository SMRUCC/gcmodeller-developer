---
title: Ab1DirectoryEntry
---

# Ab1DirectoryEntry
_namespace: [Bio.IO.AppliedBiosystems](N-Bio.IO.AppliedBiosystems.html)_

A directory entry is a section of bytes that identify an element of metadata within an abi file. The structure of this entry is defined
 in: http://www6.appliedbiosystems.com/support/software_community/ABIF_File_Format.pdf

### Methods

#### #ctor
```csharp
Bio.IO.AppliedBiosystems.Ab1DirectoryEntry.#ctor(System.Byte[])
```
Reads an entry from the buffer.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|




### Properties

#### Buffer
Raw data associated with this entry.
#### DataOffset
Number of bytes in the file this entry is offset. This is only valid for
 items of size greater than 4 bytes.
#### DataSize
Size in bytes of the entry.
#### ElementCount
The number of elements in the directory entry.
#### ElementSize
The size of each element.
#### ElementTypeCode
Identifies the type of element.
#### Reserved
Data handle - this is not used and is reserved.
#### TagName
Name of the element.
#### TagNumber
An arbitrary number associated with the directory entry. It is customary for this
 value to be less than 1000.

