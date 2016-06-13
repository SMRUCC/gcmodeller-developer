---
title: XsvTextReader
---

# XsvTextReader
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

Common class for reading character separated value files
 e.g. tab separated value (.tsv), Comma separated value (.csv), etc.
 There is "one" record per line. There are multiple columns per line,
 each containing one field in the record.
 It adds properties for extracting fields in each line.
 It has properties for ignoring/extracting comment lines prefixed by comment characters.

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvTextReader.#ctor(System.IO.TextReader,System.Char[],System.Boolean,System.Boolean)
```
Creates a Reader to read character separated values as records with fields.

|Parameter Name|Remarks|
|--------------|-------|
|xsvReader|
                The source text reader to read from.
                This should point to the start of the TextReader if this has a header row.
                Else it can point to the start of a line in the TextReader.
            |
|separators|Characters that are valid separators between fields in a line|
|ignoreWhiteSpace|If true, the white spaces around fields are removed.|
|hasHeader|
                If true, the first line of the reader is treated as a header
                row for the fields
            |


#### Dispose
```csharp
Bio.IO.Xsv.XsvTextReader.Dispose(System.Boolean)
```
Derived class implementations

|Parameter Name|Remarks|
|--------------|-------|
|disposing|True if we are disposing, 
            false if this is a GC finalizer (must be called by derived classes)|


#### GoToNextLine
```csharp
Bio.IO.Xsv.XsvTextReader.GoToNextLine
```
Calls the GoToNextLine() of the base class.
 Skips comment lines if present and enabled.

#### System#IDisposable#Dispose
```csharp
Bio.IO.Xsv.XsvTextReader.System#IDisposable#Dispose
```
IDisposable for IEnumerator



### Properties

#### CommentLine
HasCommentLine is true and the current line starts with the CommentPrefix,
 this returns the portion of the line after the comment prefix character.
 Null otherwise.
#### CommentPrefixes
If not null or empty, lines starting with any of these characters this list
 are treated as comment lines. This is effective only if SkipCommentLines is
 set to true.
#### DataIndent
The Xsv files do not have any indents. So override and always return 0.
#### FieldHeaders
Returns the field names that from the header row (first line)
 if present (HasHeaders == true). Null otherwise.
#### fields
Returns the list of fields in the current line as an array of strings.
 This uses the separators defined for this reader to split the current line and
 return the tokens. It trims the tokens if IgnoreWhiteSpace is true.
 If the current line is a comment line, this throws an exception.
 If end of the reader has been reached and HasLines is false, this returns null.
#### HasCommentLine
Returns true if the current line a valid comment line.
 a current line should exist, CommentPrefixes should have one or more valid comment prefix
 chars and the current line should start with one of these chars.
#### HasHeader
If true, the first row of this reader is considered as a header and
 read into FieldHeaders property.
#### HasLines
Gets a value indicating whether current line is not past the end of the formatted text.
#### Line
Gets current line of text.
#### LineData
Since the Xsv files do not have line headers, this returns the entire Line.
#### reader
TextReader we are wrapping.
#### Separators
Characters that separate each column in a line.
#### SkipBlankLines
Gets or sets a value indicating whether or not blank lines should be skipped when GoToNextLine is called.
#### SkipCommentLines
If true, this skips lines that are prefixed with the comment prefix characters.
 This is effective only if CommentPrefixes has one or more prefix characters.
 If set to true, comment lines cannot be read using the CommentLine property.
#### TrimWhiteSpace
If true, this trims the white space around the field values (including header names).
 Else all characters between the separators are returned as field value.

