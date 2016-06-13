---
title: V1DataParser
---

# V1DataParser
_namespace: [Bio.IO.AppliedBiosystems.DataParsers](N-Bio.IO.AppliedBiosystems.DataParsers.html)_

Parses a major version 1 ab1 data file directory entries. 
 http://www6.appliedbiosystems.com/support/software_community/ABIF_File_Format.pdf
 Note that all numeric values are stored with the higher order byte at the beginning of the entry.

### Methods

#### GetItemValue
```csharp
Bio.IO.AppliedBiosystems.DataParsers.V1DataParser.GetItemValue(Bio.IO.AppliedBiosystems.DataTypes.IAb1DataItem)
```
Returns the item value.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### GetLocalItemValue
```csharp
Bio.IO.AppliedBiosystems.DataParsers.V1DataParser.GetLocalItemValue(Bio.IO.AppliedBiosystems.DataTypes.IAb1DataItem)
```
Returns the bytes containing the item value. Note that the data offset field contains the bytes starting
 at the high-order byte of the 32 bit field.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### GetRemoteItemValue
```csharp
Bio.IO.AppliedBiosystems.DataParsers.V1DataParser.GetRemoteItemValue(Bio.IO.AppliedBiosystems.DataTypes.IAb1DataItem)
```
Returns the bytes containing the item value based on the data offset pointer and data size.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### ParseData
```csharp
Bio.IO.AppliedBiosystems.DataParsers.V1DataParser.ParseData(Bio.IO.AppliedBiosystems.DataParsers.IParserContext)
```
Parser data.

|Parameter Name|Remarks|
|--------------|-------|
|context|-|


#### Visit
```csharp
Bio.IO.AppliedBiosystems.DataParsers.V1DataParser.Visit(Bio.IO.AppliedBiosystems.DataTypes.CStringDataItem)
```
Visit cstring item.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|




### Properties

#### Context
Parser context.
#### MajorVersion
Version this parser works with.

