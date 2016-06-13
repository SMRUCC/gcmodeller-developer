---
title: GffFormatter
---

# GffFormatter
_namespace: [Bio.IO.Gff](N-Bio.IO.Gff.html)_

Writes an ISequence to a particular location, usually a file. The output is formatted
 according to the GFF file format. A method is also provided for quickly accessing
 the content in string form for applications that do not need to first write to file.

### Methods

#### #ctor
```csharp
Bio.IO.Gff.GffFormatter.#ctor
```
Default constructor.

#### Format
```csharp
Bio.IO.Gff.GffFormatter.Format(Bio.ISequence,System.IO.TextWriter)
```
Writes an ISequence to a GenBank file in the location specified by the writer.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence to format.|
|writer|The TextWriter used to write the formatted sequence text.|

> 
>                 This method is overridden to format file-scope metadata that applies to all
>                 metadata that applies to all of the sequences in the file.
>             

#### GetGenericTypeString
```csharp
Bio.IO.Gff.GffFormatter.GetGenericTypeString(Bio.IAlphabet)
```
Returns "DNA", "RNA", "Protein", or null.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|-|


#### GetSubItemString
```csharp
Bio.IO.Gff.GffFormatter.GetSubItemString(Bio.MetadataListItem{System.Collections.Generic.List{System.String}},System.String)
```
Returns a tab plus the sub-item text or a "." if the sub-item is absent.

|Parameter Name|Remarks|
|--------------|-------|
|feature|-|
|subItemName|-|


#### WriteCommonMetadata
```csharp
Bio.IO.Gff.GffFormatter.WriteCommonMetadata(Bio.ISequence,System.Collections.Generic.IEnumerable{Bio.ISequence},System.IO.TextWriter,System.String,System.String,System.String,System.Int32)
```
Writes common metadata.

|Parameter Name|Remarks|
|--------------|-------|
|commonSeq|-|
|sequenceList|-|
|writer|-|
|source|-|
|version|-|
|type|-|
|startFrom|-|


#### WriteFeatures
```csharp
Bio.IO.Gff.GffFormatter.WriteFeatures(Bio.ISequence,System.IO.TextWriter)
```
Skips the sequence if it has no features, and skips any features that don't
 have all the mandatory fields.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|
|writer|-|


#### WriteHeaders
```csharp
Bio.IO.Gff.GffFormatter.WriteHeaders(System.Collections.Generic.ICollection{Bio.ISequence},System.IO.TextWriter)
```
The headers for all sequences go at the top of the file before any features.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceList|-|
|writer|-|


#### WriteSeqData
```csharp
Bio.IO.Gff.GffFormatter.WriteSeqData(Bio.ISequence,System.String,System.IO.TextWriter)
```
Writes the sequence to the specified writer.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|
|type|-|
|writer|-|




### Properties

#### Description
Gets the description of GFF formatter.
 This is intended to give developers some information
 of the formatter class. This property returns a simple description of what the
 GffFormatter class achieves.
#### Name
Gets the type of Formatter i.e GFF.
 This is intended to give developers some information
 of the formatter class.
#### ShouldWriteSequenceData
Whether or not sequence data will be written as part of the GFF header information;
 This property is required as GFF files normally do not contain sequence data.
 Defaults value is true.
#### SupportedFileTypes
Gives the Supported types.

