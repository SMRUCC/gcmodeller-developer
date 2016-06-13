---
title: PhylogeneticTreeFormatterExtensions
---

# PhylogeneticTreeFormatterExtensions
_namespace: [Bio](N-Bio.html)_

Phylo Tree Formatter extensions.

### Methods

#### Close
```csharp
Bio.PhylogeneticTreeFormatterExtensions.Close(Bio.IO.IPhylogeneticTreeFormatter)
```
Closes the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter.|


#### Format
```csharp
Bio.PhylogeneticTreeFormatterExtensions.Format(Bio.IO.IPhylogeneticTreeFormatter,Bio.Phylogenetics.Tree,System.String)
```
Writes a single sequence to the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|data|Tree data|
|filename|Filename|


#### Open
```csharp
Bio.PhylogeneticTreeFormatterExtensions.Open(Bio.IO.IPhylogeneticTreeFormatter,System.String)
```
Open a file and parse it with the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|filename|Filename|

_returns: IDisposable to close stream._




