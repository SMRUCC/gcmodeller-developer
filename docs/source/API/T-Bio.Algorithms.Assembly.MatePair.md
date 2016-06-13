---
title: MatePair
---

# MatePair
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Stores mate pair information.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.MatePair.#ctor(System.String,System.String,System.String)
```
Initializes a new instance of the MatePair class with specified library name,
 forward read and reverse read.

|Parameter Name|Remarks|
|--------------|-------|
|forwardReadID|ID of forward read.|
|reverseReadID|ID of reverse read.|
|library|Library used to sequence reads.|


#### GetForwardRead
```csharp
Bio.Algorithms.Assembly.MatePair.GetForwardRead(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Sequence of forward read.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of input reads.|

_returns: Sequence of forward read._

#### GetReverseRead
```csharp
Bio.Algorithms.Assembly.MatePair.GetReverseRead(System.Collections.Generic.IList{Bio.ISequence})
```
Gets the Sequence of reverse read from given list.

|Parameter Name|Remarks|
|--------------|-------|
|sequences|List of input reads.|

_returns: Sequence of reverse read._

#### ToString
```csharp
Bio.Algorithms.Assembly.MatePair.ToString
```
Converts ForwardReadID, ReverseReadID, MeanLength, Standard Deviation of MatePair to string.
_returns: ForwardReadID, ReverseReadID, MeanLength, Standard Deviation._

#### Validate
```csharp
Bio.Algorithms.Assembly.MatePair.Validate(Bio.ISequence,Bio.ISequence,System.String)
```
Validates the Input.

|Parameter Name|Remarks|
|--------------|-------|
|forwardRead|Sequence of forward read.|
|reverseRead|Sequence of reverse read.|
|library|Name of libarary.|

_returns: Are inputs valid._



### Properties

#### forwardRead
Stores sequence ID of forward read.
#### ForwardReadID
Gets or sets sequence of Forward Read.
#### Library
Gets and sets Name of Library.
#### MeanLengthOfLibrary
Gets mean length of Insert for Library.
#### reverseRead
Stores sequence ID of reverse read.
#### ReverseReadID
Gets or sets sequence for Reverse Read.
#### StandardDeviationOfLibrary
Gets standard deviation of insert lengths for a library.

