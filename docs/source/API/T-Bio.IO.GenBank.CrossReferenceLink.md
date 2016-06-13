---
title: CrossReferenceLink
---

# CrossReferenceLink
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

CrossReferenceLink provides cross-references to resources that support the existence 
 a sequence record, such as the Project Database and the NCBI 
 Trace Assembly Archive.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.CrossReferenceLink.#ctor(Bio.IO.GenBank.CrossReferenceLink)
```
Private Constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|CrossReferenceLink instance to clone.|


#### Clone
```csharp
Bio.IO.GenBank.CrossReferenceLink.Clone
```
Creates a new CrossReferenceLink that is a copy of the current CrossReferenceLink.
_returns: A new CrossReferenceLink that is a copy of this CrossReferenceLink._



### Properties

#### Numbers
Project numbers.
#### Type
A CrossReferenceType specifies whether the DBLink is 
 referring to project or a Trace Assembly Archive.

