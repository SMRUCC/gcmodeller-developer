---
title: PhylogeneticTreeParserExtensions
---

# PhylogeneticTreeParserExtensions
_namespace: [Bio](N-Bio.html)_

Extensions for the Newick parser and variations.

### Methods

#### Close
```csharp
Bio.PhylogeneticTreeParserExtensions.Close(Bio.IO.IPhylogeneticTreeParser)
```
Closes the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|


#### Open
```csharp
Bio.PhylogeneticTreeParserExtensions.Open(Bio.IO.IPhylogeneticTreeParser,System.String)
```
Opens a sequence file using the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|File to open|

_returns: Disposable object to close the stream._

#### Parse
```csharp
Bio.PhylogeneticTreeParserExtensions.Parse(Bio.IO.IPhylogeneticTreeParser,System.String)
```
Parses the sequences from the open file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|filename|Filename to open|

_returns: Set of parsed sequences._




