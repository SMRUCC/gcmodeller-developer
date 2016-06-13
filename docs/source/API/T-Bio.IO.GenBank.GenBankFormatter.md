---
title: GenBankFormatter
---

# GenBankFormatter
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Writes an ISequence to a particular location, usually a file. The output is formatted
 according to the GenBank file format. A method is also provided for quickly accessing
 the content in string form for applications that do not need to first write to file.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.GenBankFormatter.#ctor
```
Default constructor.

#### Format
```csharp
Bio.IO.GenBank.GenBankFormatter.Format(Bio.ISequence,System.IO.TextWriter)
```
Writes an ISequence to a GenBank file in the location specified by the writer.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence to format.|
|txtWriter|The TextWriter used to write the formatted sequence text.|

> 
>             This method is overridden to format file-scope metadata that applies to all
>             metadata that applies to all of the sequences in the file.
>             

#### WriteGenBankSection
```csharp
Bio.IO.GenBank.GenBankFormatter.WriteGenBankSection(System.String,System.String,System.String,System.IO.TextWriter)
```




### Properties

#### Description
Gets the description of GenBank formatter.
 This is intended to give developers some information 
 of the formatter class. This property returns a simple description of what the
 GenBankFormatter class achieves.
#### LocationBuilder
Location builder is used to build location string from the location object present in the feature items.
 By default an instance of LocationBuilder class is used to get the location string.
#### Name
Gets the type of Formatter i.e GenBank.
 This is intended to give developers some information 
 of the formatter class.
#### SupportedFileTypes
Gives the supported file types.

