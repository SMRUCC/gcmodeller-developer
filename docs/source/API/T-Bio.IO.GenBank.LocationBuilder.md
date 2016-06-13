---
title: LocationBuilder
---

# LocationBuilder
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

This is the default implementation of the ILocationBuilder interface.
 This class builds the location for the specified location string
 and location string for the specified location instance.

### Methods

#### BuildLocation
```csharp
Bio.IO.GenBank.LocationBuilder.BuildLocation(System.String@)
```
Builds location from the specified location string.

|Parameter Name|Remarks|
|--------------|-------|
|locationString|Location string.|

_returns: A Location instance._

#### BuilSubLocation
```csharp
Bio.IO.GenBank.LocationBuilder.BuilSubLocation(Bio.IO.GenBank.ILocation,System.String@)
```
Builds the sub-locations from the specified string and places in the specified location.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|
|locationString|Location string.|


#### GetLocation
```csharp
Bio.IO.GenBank.LocationBuilder.GetLocation(System.String)
```
Returns a location for the specified location string.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location string.|


#### GetLocationString
```csharp
Bio.IO.GenBank.LocationBuilder.GetLocationString(Bio.IO.GenBank.ILocation)
```
Returns a location string for the specified location.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location instance.|


#### GetNextIndex
```csharp
Bio.IO.GenBank.LocationBuilder.GetNextIndex(System.String)
```
Returns an integer index which indicates the next "," or ")" character.

|Parameter Name|Remarks|
|--------------|-------|
|location|Location string.|





