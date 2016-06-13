---
title: NewickFormatter
---

# NewickFormatter
_namespace: [Bio.IO.Newick](N-Bio.IO.Newick.html)_

Formats a PhylogeneticTree object into newick text (usually a file). 
 The output is formatted according to the Newick format. A method is 
 also provided for quickly accessing the content in string form 
 for applications that do not need to first write to file.
 Documentation for the latest Newick file format can be found at
 http://evolution.genetics.washington.edu/phylip/newicktree.html
 http://en.wikipedia.org/wiki/Newick_format

### Methods

#### Format
```csharp
Bio.IO.Newick.NewickFormatter.Format(System.IO.Stream,Bio.Phylogenetics.Tree)
```
Writes a PhylogeneticTree to the writer.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The Stream used to write the formatted Phylogenetic tree text, it will remain open.|
|tree|PhylogeneticTree to format.|


#### Write
```csharp
Bio.IO.Newick.NewickFormatter.Write(Bio.Phylogenetics.Node,Bio.Phylogenetics.Edge,System.Text.StringBuilder@)
```
Recursive method to get each node into string

|Parameter Name|Remarks|
|--------------|-------|
|node|tree node|
|edge|edge|
|stringBuilder|output newick string|




### Properties

#### Description
Gets the description of Newick formatter.
 This is intended to give developers some information 
 of the formatter class. This property returns a simple description of what the
 NewickFormatter class achieves.
#### Name
Gets the type of Formatter i.e NEWICK.
 This is intended to give developers some information 
 of the formatter class.
#### SupportedFileTypes
Gets a comma separated values of the possible
 file extensions for a newick file.

