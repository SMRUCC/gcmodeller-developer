---
title: SequenceToMatrixConversion
---

# SequenceToMatrixConversion
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Static class converting sequence to Matrix.

### Methods

#### ConvertAlignedSequenceToSequence
```csharp
Bio.Matrix.SequenceToMatrixConversion.ConvertAlignedSequenceToSequence(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.ISequenceAlignment})
```
Converts Aligned Sequences to List of sequences.

|Parameter Name|Remarks|
|--------------|-------|
|alignment|List of aligned sequences.|

_returns: List of sequences._

#### ConvertBinaryToMultistate
```csharp
Bio.Matrix.SequenceToMatrixConversion.ConvertBinaryToMultistate(System.Collections.Generic.IList{System.Collections.Generic.List{Bio.Distributions.SufficientStatistics}},System.Collections.Generic.IList{System.String})
```
Convert Binary To Multistate.

|Parameter Name|Remarks|
|--------------|-------|
|statistics|statistics.|
|columnValues|column Values.|


#### ConvertDNAToRNA
```csharp
Bio.Matrix.SequenceToMatrixConversion.ConvertDNAToRNA(Bio.ISequence)
```
Transcription (Converts DNA to RNA alphabets.)

|Parameter Name|Remarks|
|--------------|-------|
|seq|DNA sequence.|

_returns: List of List unambiguous RNA characters._

#### CreateSequenceStatistics
```csharp
Bio.Matrix.SequenceToMatrixConversion.CreateSequenceStatistics(System.Collections.Generic.HashSet{System.Byte}[],System.Collections.Generic.IList{System.Collections.Generic.IList{System.Collections.Generic.IList{System.Byte}}},System.Boolean,System.Collections.Generic.IList{System.String}@)
```
Converts positional variations in sequences to statistics

|Parameter Name|Remarks|
|--------------|-------|
|positionalAminoAcidDistribution|Positional distribution of alphabets.|
|sequences|List of List of positional sequence variation.|
|keepOneValueVariables|Keeps variables with single value only.|
|rowValues|Values in rows|

_returns: Positional sequence statistics_

#### GetAminoAcidsUsingAmbigiousDNACodons
```csharp
Bio.Matrix.SequenceToMatrixConversion.GetAminoAcidsUsingAmbigiousDNACodons(System.Byte,System.Byte,System.Byte)
```
Get Amino Acids Using Ambiguous DNA Codons.

|Parameter Name|Remarks|
|--------------|-------|
|firstPos|First position.|
|secondPos|Second position.|
|thirdPos|Third position.|

_returns: Returns list of bytes._

#### GetAminoAcidsUsingAmbigiousRNACodons
```csharp
Bio.Matrix.SequenceToMatrixConversion.GetAminoAcidsUsingAmbigiousRNACodons(System.Byte,System.Byte,System.Byte)
```
Get Amino Acids Using Ambiguous RNA Codons.

|Parameter Name|Remarks|
|--------------|-------|
|firstPos|First position.|
|secondPos|Second position.|
|thirdPos|Third position.|

_returns: Returns list of bytes._

#### GetMerAndPos
```csharp
Bio.Matrix.SequenceToMatrixConversion.GetMerAndPos(System.String)
```
Get Mer And Pos.

|Parameter Name|Remarks|
|--------------|-------|
|variableName|Variable name.|

_returns: Returns KeyValuePair of string and double._

#### RemoveAmbigiousDNACharacters
```csharp
Bio.Matrix.SequenceToMatrixConversion.RemoveAmbigiousDNACharacters(Bio.ISequence)
```
Remove ambiguous DNA characters by converting them into unambiguous characters.

|Parameter Name|Remarks|
|--------------|-------|
|seqs|DNA sequence.|

_returns: List of List of DNA alphabets. _

#### RemoveAmbigiousProteinCharacters
```csharp
Bio.Matrix.SequenceToMatrixConversion.RemoveAmbigiousProteinCharacters(Bio.ISequence)
```
Remove ambiguous protein characters by converting them into unambiguous characters.

|Parameter Name|Remarks|
|--------------|-------|
|seq|Protein sequence.|

_returns: List of List of protein alphabets. _

#### RemoveAmbigiousRNACharacters
```csharp
Bio.Matrix.SequenceToMatrixConversion.RemoveAmbigiousRNACharacters(Bio.ISequence)
```
Remove ambiguous RNA characters by converting them into unambiguous characters.

|Parameter Name|Remarks|
|--------------|-------|
|seq|RNA sequence.|

_returns: List of List of RNA alphabets. _

#### Translation
```csharp
Bio.Matrix.SequenceToMatrixConversion.Translation(Bio.ISequence,System.Int32,System.Boolean,Bio.IAlphabet)
```
Translation.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence.|
|readingFrame|The readingFrame.|
|isMissing|IsMissing flag.|
|alphabet|The Alphabet.|

_returns: Returns list of list of bytes._

#### TryCreateMatrix``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryCreateMatrix``3(System.Collections.Generic.IList{System.Collections.Generic.IList{System.Collections.Generic.IList{System.Byte}}},System.Collections.Generic.IEnumerable{System.String},System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Create Matrix from positional sequence variation.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of List of positional sequence variation.|
|headerValues|Values of column headers of matrix|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileAndPossiblyConvertDna2AaIgnoreOneValueVariables``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileAndPossiblyConvertDna2AaIgnoreOneValueVariables``3(System.String,``2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs Protein matrix from DNA sequence by not keeping one value variables in matrix.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|missing|The special value that represents missing.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileAndPossiblyConvertDna2AaKeepOneValueVariables``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileAndPossiblyConvertDna2AaKeepOneValueVariables``3(System.String,``2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs Protein matrix from DNA sequence by keeping one value variables in matrix.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|missing|The special value that represents missing.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileAndPossiblyConvertDNAToProtein``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileAndPossiblyConvertDNAToProtein``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@,System.Int32,System.Boolean)
```
Constructs Protein matrix from DNA sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|
|readingFrame|Reading frame used for translation.|
|isMissing|Treat gap as missing values.|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileAndPossiblyConvertDNAToRNA``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileAndPossiblyConvertDNAToRNA``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs RNA matrix from DNA sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileAndPossiblyConvertRNAToProtein``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileAndPossiblyConvertRNAToProtein``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@,System.Int32,System.Boolean)
```
Constructs Protein matrix from RNA sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|
|readingFrame|Reading frame used for translation.|
|isMissing|Treat gap as missing values.|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileForDNASequence``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileForDNASequence``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs DNA matrix from DNA sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileForProteinSequence``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileForProteinSequence``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs Protein matrix from Protein sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileForRNASequence``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileForRNASequence``3(System.String,System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs RNA matrix from RNA sequence.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|keepOneValueVariables|Keeps variables with single value only.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileIgnoreOneValueVariables``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileIgnoreOneValueVariables``3(System.String,``2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs DNA matrix from DNA sequence by ignoring one value variables in matrix.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|missing|The special value that represents missing.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMatrixFromSequenceFileKeepOneValueVariables``3
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMatrixFromSequenceFileKeepOneValueVariables``3(System.String,``2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{``0,``1,``2}@)
```
Constructs DNA matrix from DNA sequence by keeping one value variables in matrix.

|Parameter Name|Remarks|
|--------------|-------|
|filename|Sequence file path.|
|missing|The special value that represents missing.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The matrix created|

_returns: True if the function was able to create a matrix from the information in the file; otherwise, false_

#### TryGetMerAndPos
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryGetMerAndPos(System.String,System.Collections.Generic.KeyValuePair{System.String,System.Double}@)
```
Try Get Mer And Pos.

|Parameter Name|Remarks|
|--------------|-------|
|variableName|Variable name.|
|merAndPos|KeyValuePair of string and double. |


#### TryParseSequenceFile
```csharp
Bio.Matrix.SequenceToMatrixConversion.TryParseSequenceFile(System.String,Bio.IAlphabet,System.Collections.Generic.IList{Bio.ISequence}@)
```
Try Parse Sequence File.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|The fileName.|
|alphabet|The Alphabet.|
|sequences|List of sequences.|

_returns: True if Parsed sequence properly._

#### ValidateFastaFormat
```csharp
Bio.Matrix.SequenceToMatrixConversion.ValidateFastaFormat(System.String)
```
Conforms the file format using information in first line of file.

|Parameter Name|Remarks|
|--------------|-------|
|firstLine|First line of file.|

_returns: Whether file is in fasta format or not._

#### ValidatePhylipFormat
```csharp
Bio.Matrix.SequenceToMatrixConversion.ValidatePhylipFormat(System.String)
```
Conforms the file format using information in first line of file.

|Parameter Name|Remarks|
|--------------|-------|
|firstLine|First line of file.|

_returns: Whether file is in phylip format or not._

#### ValidateSequences
```csharp
Bio.Matrix.SequenceToMatrixConversion.ValidateSequences(System.Collections.Generic.IList{Bio.ISequence})
```
Validate sequence length are equal or not.
 In Multiple Sequence Alignment, all sequences have equal lengths.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|Input sequences.|


#### ValidateTabFormat
```csharp
Bio.Matrix.SequenceToMatrixConversion.ValidateTabFormat(System.String)
```
Conforms the file format using information in first line of file.

|Parameter Name|Remarks|
|--------------|-------|
|firstLine|First line of file.|

_returns: Whether file is in tab format or not._



### Properties

#### ColumnType
Depicts whether output values will be binary or multistate(Discrete states).
#### MixtureSemanticsValue
Depicts output values in case of ambiguous characters.

