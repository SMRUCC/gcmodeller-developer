---
title: IPhylogeneticTreeFormatter
---

# IPhylogeneticTreeFormatter
_namespace: [Bio.IO](N-Bio.IO.html)_

Implementations of this interface write a PhylogeneticTree to a particular location, 
 usually a file. The output is formatted according to the particular file format. 
 A method is also provided for quickly accessing the content in string form for 
 applications that do not need to first write to file.

### Methods

#### Format
```csharp
Bio.IO.IPhylogeneticTreeFormatter.Format(System.IO.Stream,Bio.Phylogenetics.Tree)
```
Writes a PhylogeneticTree to the location specified by the writer.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The Stream used to write the formatted Phylogenetic Tree text.|
|tree|PhylogeneticTree to format.|





