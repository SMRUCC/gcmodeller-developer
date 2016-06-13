---
title: IQualitativeSequence
---

# IQualitativeSequence
_namespace: [Bio](N-Bio.html)_

Sequence with qualitative data

### Methods

#### GetEncodedQualityScore
```csharp
Bio.IQualitativeSequence.GetEncodedQualityScore(System.Int64)
```
Gets the encoded quality score found at the specified index if within bounds. Note that the index value start at 0.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index at which the symbol is required.|

_returns: Quality Score at the given index._

#### GetEncodedQualityScores
```csharp
Bio.IQualitativeSequence.GetEncodedQualityScores
```
Gets the encoded quality scores.



### Properties

#### FormatType
Gets the quality scores format type.
 Ex: Illumina/Solexa/Sanger.

