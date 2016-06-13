---
title: LocationResolver
---

# LocationResolver
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

This is the default implementation of ILocationResolver.
 This class resolves the start and end positions of a location.
 
 Please see the following table for how this class resolves the ambiguities in start and end data.
 
 Start/End DataResolved StartResolved End
 12.30 12 30
 >30 30 30
 <30 30 30
 23^24 23 24
 100^1 1000 1

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.LocationResolver.#ctor
```
Default constructor.

#### Bio#IO#GenBank#ILocationResolver#Clone
```csharp
Bio.IO.GenBank.LocationResolver.Bio#IO#GenBank#ILocationResolver#Clone
```
Creates a new ILocationResolver that is a copy of the current ILocationResolver.
_returns: A new ILocationResolver that is a copy of this ILocationResolver._

#### Clone
```csharp
Bio.IO.GenBank.LocationResolver.Clone
```
Returns the new LocationResolver instance that is a copy of this instance.

#### GetEnd
```csharp
Bio.IO.GenBank.LocationResolver.GetEnd(Bio.IO.GenBank.ILocation)
```
Returns the end position by resolving the end-data present in the specified location.
 If unable to resolve end-data then an exception will occur.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|


#### GetStart
```csharp
Bio.IO.GenBank.LocationResolver.GetStart(Bio.IO.GenBank.ILocation)
```
Returns the start position by resolving the start-data present in the specified location.
 If unable to resolve start-data then an exception will occur.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|


#### GetSubSequence
```csharp
Bio.IO.GenBank.LocationResolver.GetSubSequence(System.Int32,System.Int32,System.String,System.String,Bio.ISequence,System.Collections.Generic.Dictionary{System.String,Bio.ISequence})
```
Returns the sequence for the specified start and end positions.
 If the accession is null or empty then the source sequence is used to construct the output sequence,
 otherwise appropriate sequence from the referred sequence is used to construct output sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|Start position.|
|end|End position.|
|accession|Accession number.|
|sepataror|Start and End separator.|
|source|Source sequence.|
|referredSequences|Referred Sequences.|


#### IsInEnd
```csharp
Bio.IO.GenBank.LocationResolver.IsInEnd(Bio.IO.GenBank.ILocation,System.Int32)
```
Return true if the specified position is within the end position.
 For example,
 if the end-data of a location is "23.40", this method will 
 return true for the position values ranging from 23 to 40.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified P\position is with in the end position else returns false._

#### IsInRange
```csharp
Bio.IO.GenBank.LocationResolver.IsInRange(Bio.IO.GenBank.ILocation,System.Int32)
```
Returns true if the specified position is with in the start and end positions.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified position is with in the start and end positions else returns false._

#### IsInStart
```csharp
Bio.IO.GenBank.LocationResolver.IsInStart(Bio.IO.GenBank.ILocation,System.Int32)
```
Return true if the specified position is within the start position.
 For example,
 if the start-data of a location is "23.40", this method will 
 return true for the position values ranging from 23 to 40.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|position|Position to be verified.|

_returns: Returns true if the specified position is with in the start position else returns false._

#### ResolveEnd
```csharp
Bio.IO.GenBank.LocationResolver.ResolveEnd(System.String)
```
Resolves and returns the end position.

|Parameter Name|Remarks|
|--------------|-------|
|str|End data.|


#### ResolveStart
```csharp
Bio.IO.GenBank.LocationResolver.ResolveStart(System.String)
```
Resolves and returns the start position.

|Parameter Name|Remarks|
|--------------|-------|
|str|Start data.|





