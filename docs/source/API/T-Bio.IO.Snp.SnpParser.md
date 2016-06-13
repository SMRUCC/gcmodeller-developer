---
title: SnpParser
---

# SnpParser
_namespace: [Bio.IO.Snp](N-Bio.IO.Snp.html)_

Implements common methods for parsing SNPs from a SnpReader into ISequences. 
 This reads Snp items from the SnpReader and stores either of the two alleles
 in a sparse sequence at the same position as the chromosome position.
 Extending classes have to implement the 
 SnpReader GetSnpReader(TextReader reader) method that returns a
 SnpReader for the given TextReader.

### Methods

#### #ctor
```csharp
Bio.IO.Snp.SnpParser.#ctor
```
Initializes a new instance of the SnpParser class.

#### Parse
```csharp
Bio.IO.Snp.SnpParser.Parse(System.IO.Stream)
```
Parses a list of sparse sequences from the reader, one per contiguous 
 chromosome present in the reader. There is one SequenceItem per SnpItem with 
 either of the two alleles in the SnpItem (determined by the ParseAlleleOne property)
 and at the same position in the sequence as the SnpItem.Position.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to be parsed.|

_returns: Returns a list of sparse sequences containing Snp items that were read 
            from the reader, one sequence per contiguous chromosome number and
            retaining the same position in the sequence as the chromosome position._

#### ParseOne
```csharp
Bio.IO.Snp.SnpParser.ParseOne(Bio.IO.ISnpReader)
```
The common ParseOne method called for parsing SNPs
 NOTE: The snpReader.MoveNext must have already been called and 
 the ISnpReader.Current have the first SnpItem to parse into the sequence

|Parameter Name|Remarks|
|--------------|-------|
|snpReader|The ISnpReader to read a Snp chromosome sequence from|

_returns: Returns a SparseSequence containing Snp items from the first contiguous 
            chromosome number read from the snp reader._



### Properties

#### Alphabet
The alphabet to use for parsed ISequence objects.
#### Description
Gets the description of the parser. Intended to be filled in 
 by classes deriving from BasicSequenceParser class
 with the exact details of the parser.
#### Name
Gets the name of the parser. Intended to be filled in 
 by classes deriving from BasicSequenceParser class
 with the exact name of the parser type.
#### ParseAlleleOne
If set to false, this will parse AlleleTwo. If true, this will parse AlleleOne from the SnpReader.
#### SupportedFileTypes
Gets the file types supported by the parser. Intended to be filled in 
 by classes deriving from BasicSequenceParser class
 with the exact details of the file types supported.

