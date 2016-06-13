---
title: QualitativeSequence
---

# QualitativeSequence
_namespace: [Bio](N-Bio.html)_

This class holds quality scores along with the sequence data.

### Methods

#### #ctor
```csharp
Bio.QualitativeSequence.#ctor(Bio.IAlphabet,Bio.FastQFormatType,System.Byte[],System.Int32[],System.Boolean)
```
Initializes a new instance of the QualitativeSequence class with specified alphabet, quality score type,
 byte array representing symbols and integer array representing base quality scores 
 (Phred or Solexa base according to the FastQ format type).

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to which this instance should conform.|
|fastQFormatType|FastQ format type.|
|sequence|An array of bytes representing the symbols.|
|qualityScores|An array of integers representing the base quality scores 
            (Phred or Solexa base according to the FastQ format type).|
|validate|If this flag is true then validation will be done to see whether the data is valid or not,
            else validation will be skipped.|


#### Convert
```csharp
Bio.QualitativeSequence.Convert(Bio.QualitativeSequence.BaseQualityScoreType,Bio.QualitativeSequence.BaseQualityScoreType,System.Int32[])
```
Converts quality scores from fromQualityScore type to toQualityScore type
 Ex: Phred to Solexa or Solexa to Phred

|Parameter Name|Remarks|
|--------------|-------|
|fromQualityScoreType|from quality score type.|
|toQualityScoreType|to quality score type.|
|qualScores|Quality scores|


#### ConvertEncodedQualityScore
```csharp
Bio.QualitativeSequence.ConvertEncodedQualityScore(Bio.FastQFormatType,Bio.FastQFormatType,System.Byte[])
```
Converts Encoded quality scores from to specified format.

|Parameter Name|Remarks|
|--------------|-------|
|fromFormatType|from fastq format.|
|toFormatType|to fastq format.|
|encodedqualScores|Encoded quality scores.|


#### ConvertPhredToSolexa
```csharp
Bio.QualitativeSequence.ConvertPhredToSolexa(System.Int32)
```
Converts Phred quality score to Solexa quality score.

|Parameter Name|Remarks|
|--------------|-------|
|phredQualityScore|Phred quality score.|


#### ConvertQualityScore
```csharp
Bio.QualitativeSequence.ConvertQualityScore(Bio.FastQFormatType,Bio.FastQFormatType,System.Int32)
```
Converts Quality score from to specified format.

|Parameter Name|Remarks|
|--------------|-------|
|fromFormatType|from fastq format.|
|toFormatType|to fastq format.|
|qualScore|Quality score.|


#### ConvertQualityScores
```csharp
Bio.QualitativeSequence.ConvertQualityScores(Bio.FastQFormatType,Bio.FastQFormatType,System.SByte[])
```
Converts Quality scores from to specified format.

|Parameter Name|Remarks|
|--------------|-------|
|fromFormatType|from fastq format.|
|toFormatType|to fastq format.|
|qualScores|Quality scores.|


#### ConvertSolexaToPhred
```csharp
Bio.QualitativeSequence.ConvertSolexaToPhred(System.Int32)
```
Converts Solexa quality score to Phred quality score.

|Parameter Name|Remarks|
|--------------|-------|
|solexaQualityScore|Solexa quality score.|


#### ConvertTo
```csharp
Bio.QualitativeSequence.ConvertTo(Bio.FastQFormatType)
```
Converts the current instance to the specified FastQ format type 
 and returns a new instance of QualitativeSequence.

|Parameter Name|Remarks|
|--------------|-------|
|formatType|FastQ format type to convert.|


#### DecodeQualityScore
```csharp
Bio.QualitativeSequence.DecodeQualityScore(System.Byte,System.Int32)
```
Decodes the specified encoded quality score using base value.

|Parameter Name|Remarks|
|--------------|-------|
|encodedQualityScore|Encoded quality score.|
|baseValue|Base value used for encoding.|


#### EncodeQualityScore
```csharp
Bio.QualitativeSequence.EncodeQualityScore(System.Int32,System.Int32)
```
Encodes the specified quality score using base value.

|Parameter Name|Remarks|
|--------------|-------|
|qualityScore|Quality score.|
|baseValue|Base value to use for encoding.|


#### GetAsciiBaseValue
```csharp
Bio.QualitativeSequence.GetAsciiBaseValue(Bio.FastQFormatType)
```
Gets the Ascii base value for the specified format.

|Parameter Name|Remarks|
|--------------|-------|
|formatType|FastQ format.|


#### GetComplementedSequence
```csharp
Bio.QualitativeSequence.GetComplementedSequence
```
Return a new QualitativeSequence representing the complement of this QualitativeSequence.

#### GetDecodedQualScore
```csharp
Bio.QualitativeSequence.GetDecodedQualScore(System.Byte,Bio.FastQFormatType)
```
Gets the decoded quality score from the ASCII encoded quality score.

|Parameter Name|Remarks|
|--------------|-------|
|encodedQualScore|ASCII Encoded quality score.|
|formatType|FastQ format type.|

_returns: Returns quality score._

#### GetDecodedQualScores
```csharp
Bio.QualitativeSequence.GetDecodedQualScores(System.Byte[],Bio.FastQFormatType)
```
Gets the decoded quality scores from the ASCII encoded quality score.

|Parameter Name|Remarks|
|--------------|-------|
|encodedQualScores|ASCII Encoded quality score.|
|formatType|FastQ format type.|

_returns: Returns quality scores._

#### GetDecodedQualScoresInSignedBytes
```csharp
Bio.QualitativeSequence.GetDecodedQualScoresInSignedBytes(System.Byte[],Bio.FastQFormatType)
```
Gets the decoded quality scores from the ASCII encoded quality score.

|Parameter Name|Remarks|
|--------------|-------|
|encodedQualScores|ASCII Encoded quality score.|
|formatType|FastQ format type.|

_returns: Returns quality scores._

#### GetDefaultQualScore
```csharp
Bio.QualitativeSequence.GetDefaultQualScore(Bio.FastQFormatType)
```
Gets the default quality score for the specified FastQFormatType.

|Parameter Name|Remarks|
|--------------|-------|
|type|FastQ format type.|

_returns: Quality score._

#### GetEncodedQualityScore
```csharp
Bio.QualitativeSequence.GetEncodedQualityScore(System.Int64)
```
Gets the encoded quality score found at the specified index if within bounds. Note that the index value start at 0.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index at which the symbol is required.|

_returns: Quality Score at the given index._

#### GetEncodedQualityScores
```csharp
Bio.QualitativeSequence.GetEncodedQualityScores
```
Gets the encoded quality scores.

#### GetEncodedQualScore
```csharp
Bio.QualitativeSequence.GetEncodedQualScore(System.Int32,Bio.FastQFormatType)
```
Gets the ASCII encoded quality score for the given quality score.

|Parameter Name|Remarks|
|--------------|-------|
|qualScore|Quality Score.|
|formatType|FastQ format type.|

_returns: ASCII encoded quality score._

#### GetEncodedQualScores
```csharp
Bio.QualitativeSequence.GetEncodedQualScores(System.SByte[],Bio.FastQFormatType)
```
Gets the ASCII encoded quality scores for the given quality score.

|Parameter Name|Remarks|
|--------------|-------|
|qualScores|Quality Score.|
|formatType|FastQ format type.|

_returns: ASCII encoded quality scores._

#### GetEnumerator
```csharp
Bio.QualitativeSequence.GetEnumerator
```
Gets an enumerator to the bytes present symbols in this sequence.
_returns: An IEnumerator of bytes._

#### GetMaxEncodedQualScore
```csharp
Bio.QualitativeSequence.GetMaxEncodedQualScore(Bio.FastQFormatType)
```
Gets the maximum encoded quality score for the specified FastQFormatType.

|Parameter Name|Remarks|
|--------------|-------|
|formatType|FastQ format type.|

_returns: Quality score._

#### GetMinEncodedQualScore
```csharp
Bio.QualitativeSequence.GetMinEncodedQualScore(Bio.FastQFormatType)
```
Gets the minimum encoded quality score for the specified FastQFormatType.

|Parameter Name|Remarks|
|--------------|-------|
|formatType|FastQ format type.|

_returns: Quality score._

#### GetPhredQualityScore
```csharp
Bio.QualitativeSequence.GetPhredQualityScore(System.Int64)
```
Gets the Phred base quality score.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index of the required score.|

_returns: Returns an integer value representing Phred quality score._

#### GetPhredQualityScores
```csharp
Bio.QualitativeSequence.GetPhredQualityScores
```
Gets the Phred base quality scores.

#### GetQualityScore
```csharp
Bio.QualitativeSequence.GetQualityScore(System.Int64)
```
Returns base quality scores at specified index.
 Returns Solexa quality scores if the FastQFormat type of this instance is Solexa Illumina v1.0,
 else returns Phred quality scores.

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### GetQualityScores
```csharp
Bio.QualitativeSequence.GetQualityScores
```
Returns base quality scores.
 Returns Solexa quality scores if the FastQFormat type of this instance is Solexa Illumina v1.0,
 else returns Phred quality scores.

#### GetQualityScoreType
```csharp
Bio.QualitativeSequence.GetQualityScoreType(Bio.FastQFormatType)
```
Gets the quality score type for the specified format.

|Parameter Name|Remarks|
|--------------|-------|
|formatType|FastQ format.|


#### GetReverseComplementedSequence
```csharp
Bio.QualitativeSequence.GetReverseComplementedSequence
```
Return a new QualitativeSequence representing the reverse complement of this QualitativeSequence.

#### GetReversedSequence
```csharp
Bio.QualitativeSequence.GetReversedSequence
```
Return a new QualitativeSequence representing this QualitativeSequence with the orientation reversed.

#### GetSolexaQualityScore
```csharp
Bio.QualitativeSequence.GetSolexaQualityScore(System.Int64)
```
Gets the Solexa base quality score.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index of the required score.|

_returns: Returns an integer value representing Solexa quality score._

#### GetSolexaQualityScores
```csharp
Bio.QualitativeSequence.GetSolexaQualityScores
```
Gets the solexa base quality scores.

#### GetSubSequence
```csharp
Bio.QualitativeSequence.GetSubSequence(System.Int64,System.Int64)
```
Return a new QualitativeSequence representing a range (subsequence) of this QualitativeSequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|The index of the first symbol in the range.|
|length|The number of symbols in the range.|

_returns: The sub-sequence._

#### IndexOfNonGap
```csharp
Bio.QualitativeSequence.IndexOfNonGap(System.Int64)
```
Returns the position of the first symbol beyond startPos that does not 
 have a Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Index value beyond which the non-gap symbol is searched for.|

_returns: If found returns a zero based index of the first non-gap symbol, otherwise returns -1._

#### LastIndexOfNonGap
```csharp
Bio.QualitativeSequence.LastIndexOfNonGap(System.Int64)
```
Returns the index of last non-gap symbol before the specified end position.

|Parameter Name|Remarks|
|--------------|-------|
|endPos|Index value up to which the non-Gap symbol is searched for.|

_returns: If found returns a zero based index of the last non-gap symbol, otherwise returns -1._

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.QualitativeSequence.System#Collections#IEnumerable#GetEnumerator
```
Gets an enumerator to the bytes present symbols in this sequence.
_returns: An IEnumerator of bytes._

#### ToString
```csharp
Bio.QualitativeSequence.ToString
```
Returns a string representation of the Qualitative sequence data. This representation
 will come from the symbols in the alphabet defined for the sequence.
 Also their Quality scores.

#### ValidateQualScores
```csharp
Bio.QualitativeSequence.ValidateQualScores(System.Int32[],Bio.FastQFormatType,System.Int32@)
```
Validates whether the specified quality scores are within the FastQFormatType limit or not.

|Parameter Name|Remarks|
|--------------|-------|
|qualScores|Quality scores in base type.|
|formatType|Fastq format type.|
|invalidQualScore|returns invalid quality score if found.|

_returns: Returns true if the specified quality scores are with in the limit, otherwise false._



### Properties

#### Alphabet
Gets the alphabet to which symbols in this sequence belongs to.
#### Count
Gets the number of bytes contained in the Sequence.
#### DefaultQualScore
Default quality score.
#### FormatType
Gets the quality scores format type.
 Ex: Illumina/Solexa/Sanger.
#### ID
Gets or sets the Identifier.
#### Illumina_v1_3_AsciiBaseValue
ASCII Base value for encoding quality scores in Illumina v1.3 format: 64
#### Illumina_v1_3_MaxEncodedQualScore
Maximum encoded quality score for Illumina v1.3 format: 126
#### Illumina_v1_3_MinEncodedQualScore
Minimum encoded quality score for Illumina v1.3 format: 64
#### Illumina_v1_5_AsciiBaseValue
ASCII Base value for encoding quality scores in Illumina v1.5 format: 64
#### Illumina_v1_5_MaxEncodedQualScore
Maximum encoded quality score for Illumina v1.5 format: 126
#### Illumina_v1_5_MinEncodedQualScore
Minimum encoded quality score for Illumina v1.5 format: 64
#### Illumina_v1_8_AsciiBaseValue
ASCII Base value for encoding quality scores in Illumina 1.8 format: 33
#### Illumina_v1_8_MaxEncodedQualScore
Maximum encoded quality score for Illumina v1.8 format: 126
#### Illumina_v1_8_MinEncodedQualScore
Minimum encoded quality score for Illumina v1.8 format: 33
#### Item
Returns the byte which represents the symbol found at the specified index if within bounds. Note 
 that the index value starts at 0.
#### metadata
Gets or sets the metadata for this qualitative sequence.
 
 Many sequence representations when saved to file also contain
 information about that sequence. Unfortunately there is no standard
 around what that data may be from format to format. This property
 allows a place to put structured metadata that can be accessed by
 a particular key.
 
 For example, if species information is stored in a particular Species
 class, you could add it to the dictionary by:
 
 mySequence.Metadata["SpeciesInfo"] = mySpeciesInfo;
 
 To fetch the data you would use:
 
 Species mySpeciesInfo = mySequence.Metadata["SpeciesInfo"];
 
 Particular formats may create their own data model class for information
 unique to their format as well. Such as:
 
 GenBankMetadata genBankData = new GenBankMetadata();
 
 // ... add population code
 
 mySequence.MetaData["GenBank"] = genBankData;.
#### Phred_MaxQualityScore
Phred maximum quality score: 93
#### Phred_MinQualityScore
Phred minimum quality score: 0
#### qualityScores
Holds decoded quality scores
#### Sanger_AsciiBaseValue
ASCII Base value for encoding quality scores in Sanger format: 33
#### Sanger_MaxEncodedQualScore
Maximum encoded quality score for Sanger format: 126
#### Sanger_MinEncodedQualScore
Minimum encoded quality score for Sanger format: 33
#### sequenceData
Holds sequence data.
#### Solexa_Illumina_v1_0_AsciiBaseValue
ASCII Base value for encoding quality scores in Solexa/Illumina 1.0 format: 64
#### Solexa_Illumina_v1_0_MaxEncodedQualScore
Maximum encoded quality score for Solexa/Illumina v1.0 format: 126
#### Solexa_Illumina_v1_0_MinEncodedQualScore
Minimum encoded quality score for Solexa/Illumina v1.0 format: 59
#### Solexa_MaxQualityScore
Solexa maximum quality score: 62
#### Solexa_MinQualityScore
Solexa minimum quality score: -5

