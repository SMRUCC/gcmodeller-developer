---
title: NewickParser
---

# NewickParser
_namespace: [Bio.IO.Newick](N-Bio.IO.Newick.html)_

A NewickParser reads from a source of text that is formatted according to 
 the Newick notation flat file specification, and converts the data to 
 in-memory PhylogeneticTree object. 
 Documentation for the latest Newick file format can be found at
 http://evolution.genetics.washington.edu/phylip/newicktree.html
 http://en.wikipedia.org/wiki/Newick_format

### Methods

#### GetBranch
```csharp
Bio.IO.Newick.NewickParser.GetBranch(System.IO.TextReader,System.Boolean)
```
Gets the Branch node

|Parameter Name|Remarks|
|--------------|-------|
|reader|TextReader we are working with|
|isRoot|-|

_returns: Branch object_

#### GetExtendedMetaData
```csharp
Bio.IO.Newick.NewickParser.GetExtendedMetaData(System.IO.TextReader)
```
Parse Newick extend format files
 http://home.cc.umanitoba.ca/~psgendb/doc/atv/NHX.pdf
 If the string "[(ampersand)(ampersand)NHX" is not present, throws an error (note ampersand used instead of the xml for some nonsense xml parsing reasons)

#### GetLeaf
```csharp
Bio.IO.Newick.NewickParser.GetLeaf(System.IO.TextReader)
```
Get the Leaf node
_returns: Leaf object_

#### GetName
```csharp
Bio.IO.Newick.NewickParser.GetName(System.IO.TextReader)
```
Get the name from the data.

#### GetNode
```csharp
Bio.IO.Newick.NewickParser.GetNode(System.IO.TextReader,System.Boolean)
```
Get collection of (Branch and Leaf) nodes

|Parameter Name|Remarks|
|--------------|-------|
|reader|TextReader|
|isRoot|-|

_returns: PhylogeneticNode object_

#### InternalParse
```csharp
Bio.IO.Newick.NewickParser.InternalParse(System.IO.TextReader)
```
Internal parse method used to parse out the data from a low-level TextReader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Reader|

_returns: Parsed Tree_

#### Parse
```csharp
Bio.IO.Newick.NewickParser.Parse(System.IO.Stream)
```
Parses a Phylogenetic tree text from a reader into a PhylogeneticTree.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a Phylogenetic tree text.|

_returns: A new PhylogeneticTree instance containing parsed data._

#### Peek
```csharp
Bio.IO.Newick.NewickParser.Peek(System.IO.TextReader)
```
Peeks the TextReader char by char
_returns: a character_

#### ReadChar
```csharp
Bio.IO.Newick.NewickParser.ReadChar(System.IO.TextReader)
```
Reads current character
_returns: a character_

#### ReadLength
```csharp
Bio.IO.Newick.NewickParser.ReadLength(System.IO.TextReader)
```
Reads Length
_returns: length_



### Properties

#### Description
Gets the description of Newick parser.
 This is intended to give developers some information 
 of the parser class. This property returns a simple description of what the
 NewickParser class achieves.
#### Name
Gets the type of Parser i.e NEWICK.
 This is intended to give developers some information 
 of the parser class.
#### SupportedFileTypes
Gets a comma separated values of the possible
 file extensions for a Newick file.
#### TreeName
Name for the tree when parsing. If not set, this will be
 set to a default value of "PhylogeneticTree"

