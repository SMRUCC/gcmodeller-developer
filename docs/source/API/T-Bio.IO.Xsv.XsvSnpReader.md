---
title: XsvSnpReader
---

# XsvSnpReader
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

This is used to read SNP items from a text reader available as 
 character separated values in a line. There is one SNP item per line and 
 each line has four character separated fields whose column numbers are identified: 
 a chromosome number, the Position, and 
 the two allele values that are valid for that SNP. 
 There may be additional columns too, but their values are ignored.
 Classes that extend from this can override the protected properties and virtual methods 
 to perform Snp file format specific transformations before returning the field values.

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvSnpReader.#ctor(System.IO.TextReader,System.Char[],System.Boolean,System.Boolean,System.Int32,System.Int32,System.Int32,System.Int32)
```
Creates a SNP reader from the given text reader that has character 
 separated values for Snpitems.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Source text reader for the SNP lines|
|separators|Valid character separators between fields in the line 
            e.g. '\t', ',', etc.|
|ignoreWhiteSpace|If true, trims the white space around a field value|
|hasHeader|If true, treats the field values of the first line in 
            the text reader as a header with the names of the fields.|
|chromosomeColumn|The zero-based column number in a line that 
            corresponds to the chromosome field|
|positionColumn|The zero-based column number in a line that 
            corresponds to the Snp position field|
|alleleOneColumn|The zero-based column number in a line that 
            corresponds to the first allele|
|alleleTwoColumn|The zero-based column number in a line that 
            corresponds to the second allele|


#### GetColumnNumber
```csharp
Bio.IO.Xsv.XsvSnpReader.GetColumnNumber(Bio.IO.Xsv.XsvSnpReader.FieldNames)
```
Returns the column number for the given field name

|Parameter Name|Remarks|
|--------------|-------|
|column|Snp field enumerator to get the column number for|

_returns: Returns the column number for the given Snp field enum._

#### GetFieldValue
```csharp
Bio.IO.Xsv.XsvSnpReader.GetFieldValue(Bio.IO.Xsv.XsvSnpReader.FieldNames)
```
Returns the field value as a string for the given field name.

|Parameter Name|Remarks|
|--------------|-------|
|column|field name enumerator to get the string value for|

_returns: Returns the field value as a string for the given field enum._

#### MakeSnpForCurrentLine
```csharp
Bio.IO.Xsv.XsvSnpReader.MakeSnpForCurrentLine
```
Makes a SNP item for the current line in the XSV reader.
 Since the XSV reader reads ahead, this is actually the next 
 SNP item for the enumerator.
_returns: Creates a SnpItem for the current line in the XsvReader_

#### MoveNext
```csharp
Bio.IO.Xsv.XsvSnpReader.MoveNext
```
Go to the next line in the text reader, unless it is the first line in which case, 
 it has already been called in the constructor and we do not move
 the TextReader.
_returns: True if we have a valid SnpItem in the next line moved to_

#### Reset
```csharp
Bio.IO.Xsv.XsvSnpReader.Reset
```
This method is not implemented for XsvSnpReader. Use BufferedSnpReader() instead.

#### SkipToChromosome
```csharp
Bio.IO.Xsv.XsvSnpReader.SkipToChromosome(System.Int32)
```
This moves the cursor to the current/next SNP item containing the given 
 chromosome number (i.e. Current.Chromosome == chromosomeNumber), 
 or beyond the end of the enumerator if none exist. 
 This is useful when traversing sorted SNP sequences and we need to 
 jump to a specific chromosome number.
 The enumerator should be positioned at or after the first item and at or before the last item.

|Parameter Name|Remarks|
|--------------|-------|
|chromosomeNumber|The chromosome number for the Snpitem to move to.|

_returns: True if the cursor was moved to a SnpItem with the given chromosome number. 
            False if no subsequent SnpItems exist with given chromosome number.
            If returning true, the Current item will have given chromosome number.
            _

#### SkipToChromosomePosition
```csharp
Bio.IO.Xsv.XsvSnpReader.SkipToChromosomePosition(System.Int32)
```
This moves the cursor to the current/next SNP item containing the current chromosome number
 and position equal to the given position
 (i.e. Current.Position == position and Current.Chromosome does not change), 
 or beyond the end of the enumerator if none exist.
 The enumerator should be positioned at or after the first item and at 
 or before the last item.
 NOTE: This is useful when traversing sorted SNP sequences and need to jump to a 
 specific chromosome position within current chromosome position.

|Parameter Name|Remarks|
|--------------|-------|
|position|The position within chromosome number for the Snpitem to move to.|

_returns: Returns true if this position is found. 
            False if the next chromosome number is encountered, or end of file is 
            reached before the position is found. If returning true, the Current item 
            will contain the starting chromosome number and given position._



### Properties

#### AlleleOneColumn
the zero-based column number in a line which 
 corresponds to the first allele field for the SNP
#### AlleleTwoColumn
the zero-based column number in a line which 
 corresponds to the second allele field for the SNP
#### ChromosomeColumn
the zero-based column number in a line which 
 corresponds to the chromosome field
#### Current
Gets the element in the collection at the current position of the enumerator.
#### CurrentSnpItem
The SNP item that has been parsed for the current line
#### IsChromosomePositionSorted
If true, the chromosome numbers AND chromosome positions within them 
 are assumed to be sorted when SkipToChromosome* methods are called.
#### IsChromosomeSorted
If true, the chromosome numbers are assumed to be sorted when 
 SkipToChromosome* methods are called.
#### IsFirstLine
True if the current line contains the first line read from the reader
#### PositionColumn
the zero-based column number in a line which 
 corresponds to the Snp position field
#### System#Collections#IEnumerator#Current
Gets the current element in the collection.

