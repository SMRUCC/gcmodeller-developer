---
title: Ab1ContextToSequenceConverter
---

# Ab1ContextToSequenceConverter
_namespace: [Bio.IO.AppliedBiosystems.Model](N-Bio.IO.AppliedBiosystems.Model.html)_

Converts a parser context into a sequence object type.

### Methods

#### Convert
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ContextToSequenceConverter.Convert(Bio.IO.AppliedBiosystems.DataParsers.IParserContext)
```
Converts the parsed ab1 raw data file into a sequence, with the associated ab1 metadata setup. I use
 this method because only a subset of the data is needed so there is no point in persisting a large amount
 of unused metadata.

|Parameter Name|Remarks|
|--------------|-------|
|context|-|


#### GetNucleotideDataIndex
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ContextToSequenceConverter.GetNucleotideDataIndex(Bio.IO.AppliedBiosystems.DataParsers.IParserContext)
```
Returns the order of nucleotides based on the ab1 color wheel definition.

|Parameter Name|Remarks|
|--------------|-------|
|context|-|


#### GetSequence
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ContextToSequenceConverter.GetSequence(Bio.IO.AppliedBiosystems.DataParsers.IParserContext)
```
Retrieves the user defined sequence.

|Parameter Name|Remarks|
|--------------|-------|
|context|-|





