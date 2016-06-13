---
title: Location
---

# Location
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Location, holds the feature location information.
 This is the default implementation of the ILocation interface.
 This holds Start and End points of location. 
 If in case location refers to some other sequence (for example, J00194.1:1..150) 
 then the accession number information should be stored in the Accession property.
 Resolver property is used to resolve any ambiguity in the location start-data and end-data. 
 By default this will be set to an instance of LocationResolver class.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.Location.#ctor
```
Default constructor.

#### Bio#IO#GenBank#ILocation#Clone
```csharp
Bio.IO.GenBank.Location.Bio#IO#GenBank#ILocation#Clone
```
Creates a new Location that is a copy of the current Location.
_returns: A new ILocation that is a copy of this Location._

#### Clone
```csharp
Bio.IO.GenBank.Location.Clone
```
Creates a new Location that is a copy of the current Location.
_returns: A new Location that is a copy of this Location._

#### CompareTo
```csharp
Bio.IO.GenBank.Location.CompareTo(System.Object)
```
Compares this instance to a specified object and returns an 
 indication of their relative values.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Loction instance to compare.|

_returns:  
            A signed number indicating the relative values of this instance and value.
            Return Value Description Less than zero This instance is less than value.
            Zero This instance is equal to value. Greater than zero This instance is
            greater than value.  -or- value is null.
            _

#### GetLeafLocations
```csharp
Bio.IO.GenBank.Location.GetLeafLocations(System.Collections.Generic.List{Bio.IO.GenBank.ILocation},Bio.IO.GenBank.ILocation)
```
Recursively gets the leaf locations.

|Parameter Name|Remarks|
|--------------|-------|
|locations|Locations list.|
|location|location instance.|


#### GetSubSequence
```csharp
Bio.IO.GenBank.Location.GetSubSequence(Bio.ISequence,System.Collections.Generic.Dictionary{System.String,Bio.ISequence})
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
            the location or sublocations contains accession.|


#### IsInEnd
```csharp
Bio.IO.GenBank.Location.IsInEnd(System.Int32)
```
Returns true if the specified position is within the end positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|


#### IsInRange
```csharp
Bio.IO.GenBank.Location.IsInRange(System.Int32)
```
Returns true if the specified position is within the start and end positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|


#### IsInStart
```csharp
Bio.IO.GenBank.Location.IsInStart(System.Int32)
```
Returns true if the specified position is within the start positions of the location.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position to be verified.|




### Properties

#### Accession
Accession number of referred sequence.
#### EndData
Gets or sets the end position data.
 All positions are one based.
#### LocationEnd
Gets the end position of the location.
 Note that this is one based position.
#### LocationStart
Gets the start position of the location.
 Note that this is one based position.
#### Operator
Operator like none, complement, join and order.
#### Resolver
Gets or sets the ILocationResolver instance used to resolve 
 ambiguity in start-data and end-data
#### Separator
Start and end positions separator.
#### StartData
Gets or sets the start position data.
 All positions are one based.
#### SubLocations
Sub locations.

