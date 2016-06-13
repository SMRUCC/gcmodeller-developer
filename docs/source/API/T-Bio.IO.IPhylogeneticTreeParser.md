---
title: IPhylogeneticTreeParser
---

# IPhylogeneticTreeParser
_namespace: [Bio.IO](N-Bio.IO.html)_

Implementations of this interface are designed to parse a phylogenetic tree file 
 format to produce a PhylogeneticTree object model.

### Methods

#### Parse
```csharp
Bio.IO.IPhylogeneticTreeParser.Parse(System.IO.Stream)
```
Parses a phylogenetic tree text from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a phylogenetic tree text, it will be left open.|

_returns: Phylogenetic tree object._



### Properties

#### TreeName
Name for the tree

