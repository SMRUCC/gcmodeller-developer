---
title: GenBankParser
---

# GenBankParser
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

A GenBankParser reads from a source of text that is formatted according to the GenBank flat
 file specification, and converts the data to in-memory ISequence objects. For advanced
 users, the ability to select an encoding for the internal memory representation is
 provided. There is also a default encoding for each alphabet that may be encountered.
 Documentation for the latest GenBank file format can be found at
 ftp.ncbi.nih.gov/genbank/gbrel.txt

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.GenBankParser.#ctor
```
Default constructor chooses default encoding based on alphabet.

#### AddQualifierToFeature
```csharp
Bio.IO.GenBank.GenBankParser.AddQualifierToFeature(Bio.IO.GenBank.FeatureItem,System.String,System.String)
```
Adds a qualifier to the feature object. The sub-items of a feature are referred to as qualifiers. These do not have unique
 keys, so they are stored as lists in the SubItems dictionary.

|Parameter Name|Remarks|
|--------------|-------|
|feature|The feature to which qualifier is to be added.|
|qualifierKey|The qualifier key to be added to the feature.|
|qualifierValue|The qualifier value.|


#### CopyMetadata
```csharp
Bio.IO.GenBank.GenBankParser.CopyMetadata(Bio.ISequence)
```
Copy file-scope metadata to all the sequences in the list.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|The sequence.|

_returns: The metadata sequence._

#### GetAlphabet
```csharp
Bio.IO.GenBank.GenBankParser.GetAlphabet(Bio.IO.GenBank.MoleculeType)
```
Returns the alphabet depending on the specified molecule type.

|Parameter Name|Remarks|
|--------------|-------|
|moleculeType|Molecule type.|

_returns: IAlphabet instance._

#### GetLineData
```csharp
Bio.IO.GenBank.GenBankParser.GetLineData(System.String,System.Int32)
```
Gets the line Data.

|Parameter Name|Remarks|
|--------------|-------|
|line|The Line to be processed.|
|dataIndent|The Indent for line Data Calculation.|

_returns: Returns the line Data(excluding the line header)._

#### GetLineHeader
```csharp
Bio.IO.GenBank.GenBankParser.GetLineHeader(System.String,System.Int32)
```
Gets the Line Header.

|Parameter Name|Remarks|
|--------------|-------|
|line|The Line to be processed.|
|dataIndent|The Indent for Header Calculation.|

_returns: Returns the header._

#### GoToNextLine
```csharp
Bio.IO.GenBank.GenBankParser.GoToNextLine(System.String,System.IO.StreamReader)
```
Reads the next line of text, storing it in the Line property. If SkipBlankLines is
 true, any lines containing only white space are skipped.

|Parameter Name|Remarks|
|--------------|-------|
|line|The current line.|
|streamReader|The stream reader.|

_returns: The next line._

#### Parse
```csharp
Bio.IO.GenBank.GenBankParser.Parse(System.IO.Stream)
```
Parses a single GenBank text from a reader into a sequence.
_returns: A new Sequence instance containing parsed data._

#### ParseComments
```csharp
Bio.IO.GenBank.GenBankParser.ParseComments(System.String,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank Comments from the GenBank file.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseFeatures
```csharp
Bio.IO.GenBank.GenBankParser.ParseFeatures(System.String,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank features from the GenBank file.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseHeaders
```csharp
Bio.IO.GenBank.GenBankParser.ParseHeaders(Bio.Sequence@,System.Int32,System.String,System.IO.StreamReader)
```
Parses the GenBank headers from the GenBank file.
 parses everything before the features section

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence.|
|noOfSequence|The current sequence index.|
|line|parse line|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseLocusByTokens
```csharp
Bio.IO.GenBank.GenBankParser.ParseLocusByTokens(System.String,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank LOCUS using a token based approach which provides more flexibility for 
 GenBank documents that do not follow the standard 100%.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseMultiLineData
```csharp
Bio.IO.GenBank.GenBankParser.ParseMultiLineData(System.String@,System.String,System.Int32,System.IO.StreamReader)
```
Parses the GenBank Origin data from the GenBank file. 
 returns a string of the data for a header block that spans multiple lines

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|lineBreakSubstitution|The line break string to be substituted.|
|dataIndent|The data indent for the line.|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseOne
```csharp
Bio.IO.GenBank.GenBankParser.ParseOne(System.IO.Stream)
```
Parse a single entity from the given stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream to pull data from|

_returns: Parse entity object_

#### ParseOrigin
```csharp
Bio.IO.GenBank.GenBankParser.ParseOrigin(System.String@,Bio.IO.GenBank.GenBankMetadata,System.IO.StreamReader)
```
Parses the GenBank Origin data from the GenBank file.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|metadata|The GenBank metadata.|
|stream|The stream reader.|


#### ParseReferences
```csharp
Bio.IO.GenBank.GenBankParser.ParseReferences(System.String,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank Reference information from the GenBank file.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|

_returns: The parsed line._

#### ParseSequence
```csharp
Bio.IO.GenBank.GenBankParser.ParseSequence(System.String@,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank Sequence from the GenBank file. 
 Handle optional BASE COUNT, then ORIGIN and sequence data.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|


#### ParseSource
```csharp
Bio.IO.GenBank.GenBankParser.ParseSource(System.String,Bio.Sequence@,System.IO.StreamReader)
```
Parses the GenBank source data from the GenBank file.

|Parameter Name|Remarks|
|--------------|-------|
|line|parse line|
|sequence|The sequence.|
|stream|The stream reader.|

_returns: The parsed line._



### Properties

#### Alphabet
The alphabet to use for parsed ISequence objects. If this is not set, an alphabet will
 be determined based on the file being parsed.
#### Description
Gets the description of GenBank parser.
 This is intended to give developers some information 
 of the formatter class. This property returns a simple description of what the
 GenBankParser class achieves.
#### LocationBuilder
Location builder is used to build location objects from the location string 
 present in the features.
 By default an instance of LocationBuilder class is used to build location objects.
#### Name
Gets the type of Parser i.e GenBank.
 This is intended to give developers some information 
 of the parser class.
#### SupportedFileTypes
Supported file types.

