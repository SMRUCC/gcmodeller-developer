---
title: SAMRecordField
---

# SAMRecordField
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

This class holds SAM record fields.
 Record fields are present in the SAM header.
 This class can hold one header line of the SAM header.
 For example, consider the following header line.
 @SQSN:chr20LN:62435964
 In this example SQ is the Type code.
 SN:chr20 and LN:62435964 are SAMRecordFieldTags.

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SAMRecordField.#ctor(System.String)
```
Creates SAMRecordField with the specified type code.

|Parameter Name|Remarks|
|--------------|-------|
|typecode|Type code.|




### Properties

#### Tags
List of SAM RecordFieldTags.
#### Typecode
Record field type code.
 for example. HD, SQ.

