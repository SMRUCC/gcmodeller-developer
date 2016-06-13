---
title: ILocation
---

# ILocation
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Interface to hold location information.

### Methods

#### Clone
```csharp
Bio.IO.GenBank.ILocation.Clone
```
Creates a new ILocation that is a copy of the current ILocation.
_returns: A new ILocation that is a copy of this ILocation._

#### GetLeafLocations
```csharp
Bio.IO.GenBank.ILocation.GetLeafLocations
```
Returns the leaf locations.

#### GetSubSequence
```csharp
Bio.IO.GenBank.ILocation.GetSubSequence(Bio.ISequence,System.Collections.Generic.Dictionary{System.String,Bio.ISequence})
```
Returns a sequence which contains bases from the specified sequences as specified by this location.
 If the location contains accession then the sequence from the referredSequences which matches the 
 accession of the location will be considered.
 
 For example, 
 If a location is "join(100..200, J00089.1:10..50, J00090.2:30..40)"
 bases from 100 to 200 will be taken from the sequence parameter and referredSequences will
 be searched for the J00089.1 and J00090.2 accession if found then those sequences will be considered 
 for constructing the output sequence.
 If the referred sequence is not found in the referredSequences then an exception will occur.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence instance from which the sub sequence has to be returned.|
|referredSequences|A dictionary containing Accession numbers as keys and Sequences as values, this will be used when
            the location or sub-locations contains accession.|


#### IsInEnd
```csharp
Bio.IO.GenBank.ILocation.IsInEnd(System.Int32)
```
Returns true if the specified position is within the end positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|


#### IsInRange
```csharp
Bio.IO.GenBank.ILocation.IsInRange(System.Int32)
```
Returns true if the specified position is within the start and end positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|


#### IsInStart
```csharp
Bio.IO.GenBank.ILocation.IsInStart(System.Int32)
```
Returns true if the specified position is within the start positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|




### Properties

#### Accession
Accession number of referred sequence.
#### EndData
End position data.
 All positions are one based.
#### LocationEnd
End position of the location.
 Note that this is one based position.
#### LocationStart
Start position of the location.
 Note that this is one based position.
#### Operator
Operator like none, complement, join and order.
#### Separator
Start and end positions separator.
#### StartData
Start position data.
 All positions are one based.
#### SubLocations
Sub locations.

