---
title: IDeNovoAssembler
---

# IDeNovoAssembler
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Representation of any sequence assembly algorithm.
 This interface defines contract for classes implementing De Novo Sequence assembler.

### Methods

#### Assemble
```csharp
Bio.Algorithms.Assembly.IDeNovoAssembler.Assemble(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Assemble the input sequences into the largest possible contigs.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to assemble.|

_returns: IDeNovoAssembly instance which contains list of 
            assembled sequences._



### Properties

#### Description
Gets the description of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.
#### Name
Gets the name of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.

