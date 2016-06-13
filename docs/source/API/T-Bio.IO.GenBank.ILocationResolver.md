---
title: ILocationResolver
---

# ILocationResolver
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Interface to resolve the start and end positions of a location.
 Classes which implements this interface should resolve any ambiguity in 
 the start and end positions of a location.
 Please refer LocationResolver for default implementation of this interface.

### Methods

#### Clone
```csharp
Bio.IO.GenBank.ILocationResolver.Clone
```
Creates a new ILocationResolver that is a copy of the current ILocationResolver.
_returns: A new ILocationResolver that is a copy of this ILocationResolver._

#### GetEnd
```csharp
Bio.IO.GenBank.ILocationResolver.GetEnd(Bio.IO.GenBank.ILocation)
```
Returns end position of the specified location.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|


#### GetStart
```csharp
Bio.IO.GenBank.ILocationResolver.GetStart(Bio.IO.GenBank.ILocation)
```
Returns start position of the specified location.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|


#### GetSubSequence
```csharp
Bio.IO.GenBank.ILocationResolver.GetSubSequence(Bio.IO.GenBank.ILocation,Bio.ISequence,System.Collections.Generic.Dictionary{System.String,Bio.ISequence})
```
Returns a sequence which contains bases from the specified sequences as specified by the location.
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
|location|Location instance.|
|sequence|Sequence instance from which the sub sequence has to be returned.|
|referredSequences|A dictionary containing Accession numbers as keys and Sequences as values, this will be used when
            the location or sub-locations contains accession.|


#### IsInEnd
```csharp
Bio.IO.GenBank.ILocationResolver.IsInEnd(Bio.IO.GenBank.ILocation,System.Int32)
```
Return true if the specified position is within the end position.
 For example,
 if the end data of a location is "23.40", this method will 
 return true for the position values ranging from 23 to 40.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified P\position is with in the end position else returns false._

#### IsInRange
```csharp
Bio.IO.GenBank.ILocationResolver.IsInRange(Bio.IO.GenBank.ILocation,System.Int32)
```
Returns true if the specified position is with in the start and end positions.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified position is with in the start and end positions else returns false._

#### IsInStart
```csharp
Bio.IO.GenBank.ILocationResolver.IsInStart(Bio.IO.GenBank.ILocation,System.Int32)
```
Return true if the specified position is within the start position.
 For example,
 if the start data of a location is "23.40", this method will 
 return true for the position values ranging from 23 to 40.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified position is with in the start position else returns false._




