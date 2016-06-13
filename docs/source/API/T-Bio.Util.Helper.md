---
title: Helper
---

# Helper
_namespace: [Bio.Util](N-Bio.Util.html)_

Generally useful static methods.

### Methods

#### ASCIIEncoding
```csharp
Bio.Util.Helper.ASCIIEncoding(System.Byte[],System.String@)
```
Simple method to take a byte array and convert it to ASCII string.

|Parameter Name|Remarks|
|--------------|-------|
|input|Input bytes|
|output|Output string|

_returns: True/False success_

#### BigMul
```csharp
Bio.Util.Helper.BigMul(System.Int32,System.Int32)
```
Helper method for large multiplication - this function is missing
 from the portable profile.

|Parameter Name|Remarks|
|--------------|-------|
|a|-|
|b|-|


#### CheckCondition
```csharp
Bio.Util.Helper.CheckCondition(System.Boolean,System.Func{System.String})
```
Confirms that a condition is true. Raise an exception if it is not.

|Parameter Name|Remarks|
|--------------|-------|
|condition|The condition to check|
|messageFunction|Function that will generate the message if the condition is false.|

> 
>             messageFunction will only be evaluated of condition is false. Use this version for messages that are costly to compute.
>             

#### CheckCondition``1
```csharp
Bio.Util.Helper.CheckCondition``1(System.Boolean,System.Func{System.String})
```
Confirms that a condition is true. Raise an exception if it is not.

|Parameter Name|Remarks|
|--------------|-------|
|condition|The condition to check|
|messageFunction|Function that will generate the message if the condition is false.|

> 
>             messageFunction will only be evaluated of condition is false. Use this version for messages that are costly to compute.
>             

#### Copy
```csharp
Bio.Util.Helper.Copy(System.Array,System.Int64,System.Array,System.Int64,System.Int64)
```
Copies source array to destination array.

|Parameter Name|Remarks|
|--------------|-------|
|sourceArray|Source array|
|sourceIndex|Source stating index.|
|destinationArray|Destination array|
|destinationIndex|Destination stating index.|
|length|No of elements to copy|


#### CreateDelimitedString
```csharp
Bio.Util.Helper.CreateDelimitedString(System.String,System.Object[])
```
Creates a delimited string containing the object's string values.

|Parameter Name|Remarks|
|--------------|-------|
|delimiter|The string that will delimit the objects|
|objectCollection|The objects to put in the string|

_returns: A delimiter-delimited string_

#### CreateTabString
```csharp
Bio.Util.Helper.CreateTabString(System.Object[])
```
Creates a tab-delimited string containing the object's string values.

|Parameter Name|Remarks|
|--------------|-------|
|objectCollection|The objects to put in the string|

_returns: A tab-delimited string_

#### FileEndsWithZippedExtension
```csharp
Bio.Util.Helper.FileEndsWithZippedExtension(System.String)
```
Determine if file ends with extension ".gz"

|Parameter Name|Remarks|
|--------------|-------|
|fileName|File name.|

_returns: true, if file name ends with zipped extension false otherwise._

#### GenerateAlphabetCheckFailureException
```csharp
Bio.Util.Helper.GenerateAlphabetCheckFailureException(Bio.IAlphabet,System.Byte[])
```
Create a useful error message when a sequence fails validation.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|-|
|data|-|


#### GetCrossReferenceLink
```csharp
Bio.Util.Helper.GetCrossReferenceLink(System.Collections.Generic.IList{Bio.IO.GenBank.CrossReferenceLink})
```
Returns a string which represents specified CrossReferenceLink.

|Parameter Name|Remarks|
|--------------|-------|
|crossReferenceLinks|CrossReferenceLinks.|

_returns: Returns string._

#### GetGenBankAccession
```csharp
Bio.Util.Helper.GetGenBankAccession(Bio.IO.GenBank.GenBankAccession)
```
Returns a string which represents specified GenBankAccession.

|Parameter Name|Remarks|
|--------------|-------|
|accession|GenBankAccession instance.|

_returns: Returns string._

#### GetHexString
```csharp
Bio.Util.Helper.GetHexString(System.Byte[],System.Int32,System.Int32)
```
Gets the HexString from the specified byte array.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|Byte array.|
|startIndex|Start index of array from which HexString is stored.|
|length|Length of HexString to read.|


#### GetInt16
```csharp
Bio.Util.Helper.GetInt16(System.Byte[],System.Int32)
```
Returns 16 bit signed integer from the byte array stored as little-endian.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### GetInt32
```csharp
Bio.Util.Helper.GetInt32(System.Byte[],System.Int32)
```
Returns 32 bit signed integer from the byte array stored as little-endian.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### GetLittleEndianByteArray
```csharp
Bio.Util.Helper.GetLittleEndianByteArray(System.Single)
```
Gets byte array which represents value of float in LittleEndian format.

|Parameter Name|Remarks|
|--------------|-------|
|value|Float value.|


#### GetMatePairedReadType
```csharp
Bio.Util.Helper.GetMatePairedReadType(System.String)
```
Gets the mate paired read type.
 That is for F/1/X1 it provides R/2/Y1.

|Parameter Name|Remarks|
|--------------|-------|
|pairedReadType|Paired read type.|


#### GetNormalRandom
```csharp
Bio.Util.Helper.GetNormalRandom(System.Double,System.Double,System.Int32)
```
Returns random numbers according to an approximate normal distribution
 with an average and standard deviation set by the caller. This is done iteratively
 using the central limit theorem.

|Parameter Name|Remarks|
|--------------|-------|
|average|Average result returned from calling the method|
|standardDeviation|Standard deviation applied to the normal curve|
|steps|
            The number of iterative steps to take in generating each number. The higher this number
            is, the closer to a true normal distribution the results will be, but the higher the
            computation cost. A value between 4 and 8 should be sufficient for most uses.
            |

_returns: A random value_

#### GetPairedReadId
```csharp
Bio.Util.Helper.GetPairedReadId(System.String,System.String,System.String)
```
Concatenates the specified original sequence id, paired read type and library name to paired read id format.

|Parameter Name|Remarks|
|--------------|-------|
|originalSequenceId|Original sequence id.|
|pairedReadType|Paired read type.|
|libraryName|Library name.|


#### GetProjectIdentifier
```csharp
Bio.Util.Helper.GetProjectIdentifier(Bio.IO.GenBank.ProjectIdentifier)
```
Returns a string which represents specified ProjectIdentifier.

|Parameter Name|Remarks|
|--------------|-------|
|projectIdentifier|ProjectIdentifier instance.|

_returns: Returns string._

#### GetReadIdExcludingOtherInfo
```csharp
Bio.Util.Helper.GetReadIdExcludingOtherInfo(System.String)
```
Returns the id exluding the otherinformation part from it.

|Parameter Name|Remarks|
|--------------|-------|
|readId|Read id.|


#### GetReverseComplement
```csharp
Bio.Util.Helper.GetReverseComplement(System.String,System.Char[])
```
Get reverse complement of sequence string.
 Handles only unambiguous DNA sequence strings.
 Note: This method is a light-weight implementation of sequence.ReverseComplement.
 This only works for unambiguous DNA sequences, which is characteristic of the input for de-novo.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence string.|
|reverseComplementBuilder|String builder for building reverse complement.|

_returns: Reverse Complement sequence string._

#### GetSequenceRange
```csharp
Bio.Util.Helper.GetSequenceRange(Bio.ISequence,System.Int64,System.Int64)
```
Get a range of sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Original sequence.|
|start|Start position.|
|length|Length of sequence.|

_returns: New sequence with range specified._

#### GetSequenceSegment
```csharp
Bio.Util.Helper.GetSequenceSegment(Bio.IO.GenBank.SequenceSegment)
```
Returns a string which represents specified SequenceSegment.

|Parameter Name|Remarks|
|--------------|-------|
|segment|SequenceSegment instance.|

_returns: Returns string._

#### GetSingle
```csharp
Bio.Util.Helper.GetSingle(System.Byte[],System.Int32)
```
Returns float from the byte array.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### GetStrandTopology
```csharp
Bio.Util.Helper.GetStrandTopology(Bio.IO.GenBank.SequenceStrandTopology)
```
Returns a string which represents specified SequenceStrandTopology.

|Parameter Name|Remarks|
|--------------|-------|
|strandTopology|Strand topology.|

_returns: Returns string._

#### GetStrandType
```csharp
Bio.Util.Helper.GetStrandType(Bio.IO.GenBank.SequenceStrandType)
```
Returns a string which represents specified SequenceStrandType.

|Parameter Name|Remarks|
|--------------|-------|
|strand|Strand type.|

_returns: Returns string._

#### GetString
```csharp
Bio.Util.Helper.GetString(Bio.Algorithms.Alignment.DeltaAlignment)
```
Gets string representing specified delta alignment.
 This method is used in comparative Utilities to write delta alignments to file.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignment|Delta alignment|


#### GetUInt16
```csharp
Bio.Util.Helper.GetUInt16(System.Byte[],System.Int32)
```
Returns 16 bit unsigned integer from the byte array stored as little-endian.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### GetUInt32
```csharp
Bio.Util.Helper.GetUInt32(System.Byte[],System.Int32)
```
Returns 32 bit unsigned integer from the byte array stored as little-endian.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### GetUInt64
```csharp
Bio.Util.Helper.GetUInt64(System.Byte[],System.Int32)
```
Returns 32 bit unsigned integer from the byte array stored as little-endian.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|byte array.|
|startIndex|Start index of the byte array.|


#### IsBAM
```csharp
Bio.Util.Helper.IsBAM(System.String)
```
Identifies if a file extension is a
 valid extension for BAM formats.
_returns: 
            true  : if it is a valid BAM file extension.
            false : if it is a in-valid BAM file extension.
            _

#### IsFasta
```csharp
Bio.Util.Helper.IsFasta(System.String)
```
Identifies if a file extension is a
 valid extension for FASTA formats.
_returns: 
            True  : if it is a valid fasta file extension.
            False : if it is a in-valid fasta file extension.
            _

#### IsFastQ
```csharp
Bio.Util.Helper.IsFastQ(System.String)
```
Identifies if a file extension is a
 valid extension for FastQ formats.
_returns: 
            True  : if it is a valid fastq file extension.
            False : if it is a in-valid fastq file extension.
            _

#### IsGenBank
```csharp
Bio.Util.Helper.IsGenBank(System.String)
```
Identifies if a file extension is a
 valid extension for GenBank formats.
_returns: 
            true  : if it is a valid GenBank file extension.
            false : if it is a in-valid GenBank file extension.
            _

#### IsValidPatternValue
```csharp
Bio.Util.Helper.IsValidPatternValue(System.String,System.String,System.Text.RegularExpressions.Regex)
```
Validates specified value with the specified regular expression.

|Parameter Name|Remarks|
|--------------|-------|
|name|Name of the field.|
|value|Value to validate.|
|regx|Regular expression object.|

_returns: Returns empty string if valid; otherwise error message._

#### IsValidRange
```csharp
Bio.Util.Helper.IsValidRange(System.String,System.Int32,System.Int32,System.Int32)
```
Validates int value.

|Parameter Name|Remarks|
|--------------|-------|
|name|Name of the field.|
|value|Value to validate.|
|minValue|Minimum value.|
|maxValue|Maximum value.|

_returns: Returns empty string if valid; otherwise error message._

#### IsValidRegexValue
```csharp
Bio.Util.Helper.IsValidRegexValue(System.Text.RegularExpressions.Regex,System.String)
```
Validates specified value with the specified regular expression.

|Parameter Name|Remarks|
|--------------|-------|
|regx|Regular expression object.|
|value|Value to validate.|

_returns: Returns true if value completely match with the specified 
            regular expression; otherwise false._

#### IsZippedFasta
```csharp
Bio.Util.Helper.IsZippedFasta(System.String)
```
Identifies if a file extension is a
 valid extension for FASTA formats that is gzipped.
_returns: 
            True  : if it is a valid gzipped fasta file extension.
            False : if it is a in-valid gzipped fasta file extension.
            _

#### IsZippedFastQ
```csharp
Bio.Util.Helper.IsZippedFastQ(System.String)
```
Identifies if a file extension is a
 valid extension for a gzipped FastQ formats.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|-|


#### KeysEqual``3
```csharp
Bio.Util.Helper.KeysEqual``3(System.Collections.Generic.IDictionary{``0,``1},System.Collections.Generic.IDictionary{``0,``2})
```
Efficiently (log n) test if two dictionaries have the same key set.

|Parameter Name|Remarks|
|--------------|-------|
|dictionary1|The first dictionary|
|dictionary2|The second dictionary|

_returns: True if the two key sets are "set equal"; false, otherwise._

#### RemoveSequencePolyTail
```csharp
Bio.Util.Helper.RemoveSequencePolyTail(Bio.ISequence,System.Int64,System.Int64)
```
Get a Sequence Poly Tail.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Original sequence.|
|start|Start position.|
|length|Length of sequence.|

_returns: New sequence with range specified._

#### SplitSequence
```csharp
Bio.Util.Helper.SplitSequence(Bio.Sequence,System.Int64,System.Int64)
```
Split sequence for Iron poython.

|Parameter Name|Remarks|
|--------------|-------|
|seq|The sequence.|
|coverage|The coverage.|
|fragment_length|Fragment Length.|

_returns: List of split sequences._

#### StringContainsIllegalCharacters
```csharp
Bio.Util.Helper.StringContainsIllegalCharacters(System.String,System.Char[])
```
Determines if the string contains any characters specified in the list.

|Parameter Name|Remarks|
|--------------|-------|
|toTest|-|
|illegalCharacters|-|


#### StringHasMatch
```csharp
Bio.Util.Helper.StringHasMatch(System.String,System.String[])
```
See if test string is identical to any of the passed list of strings.

|Parameter Name|Remarks|
|--------------|-------|
|test|The string to test.|
|args|Variable number of strings to test against.|

_returns: True if test matches one of the subsequent arguments._

#### StringMultiply
```csharp
Bio.Util.Helper.StringMultiply(System.String,System.Int32)
```
String Multiply. Build a string by concatenating copies of the input string.

|Parameter Name|Remarks|
|--------------|-------|
|str|The string to multiply.|
|count|The number of copies wanted.|

_returns: The multiplied string._

#### ValidatePairedSequenceId
```csharp
Bio.Util.Helper.ValidatePairedSequenceId(System.String,System.String@,System.Boolean@,System.String@,System.String@)
```
Validates the specified sequence id is in the format of paired read or not.
 If so then gets the original sequence id, paired read type and library name from the paired sequence id.
 For Example:
 if the sequence id is "seq1.F:10K!324;abcd;345" then this method will return true and 
 originalSequenceId - "seq1"
 pairedReadType - "F"
 libraryName - "10K"
 if the sequence id is not in the format of "originalSequenceId.{F,R}:LibraryName"
 or "originalSequenceId.{F,R}:LibraryName!otherInfo" then this method will return false.

|Parameter Name|Remarks|
|--------------|-------|
|pairedSequenceId|Paired sequence id.|
|originalSequenceId|Original sequence id part from the specified sequence id.|
|forwardRead|Flag to indicate whether forward read or not.|
|pairedReadType|Paired sequence type part from the specified sequence id.|
|libraryName|Library name part from the specified sequence id.|


#### WrapAroundLeftShift
```csharp
Bio.Util.Helper.WrapAroundLeftShift(System.Int32,System.Int32)
```
Shifts the bits of an int around in a wrapped way. It is useful for creating hashcodes of collections.

|Parameter Name|Remarks|
|--------------|-------|
|someInt|the int to shift|
|count|The number of bits to shift the int|

_returns: The shifted int._



### Properties

#### AlphabetsToShowInToString
Stores the number of alphabets to show in ToString function of a class.
#### GenBankMetadataKey
Key to get GenBankMetadata object from Metadata of a sequence which is parsed from GenBankParser.
#### PairedReadDelimiter
Delimitar "!" used to seperate the PairedRead information with other info in the sequence id.
#### SAMAlignedSequenceHeaderKey
Key to get SAMAlignedSequenceHeader object from Metadata of a aligned sequence which is parsed from SAMParser.
#### SAMAlignmentHeaderKey
Key to get SAMAlignmentHeader object from Metadata of a sequence alignment which is parsed from SAMParser.
#### ZippedFileExtension
The .gz extension to indicate gzipped files

