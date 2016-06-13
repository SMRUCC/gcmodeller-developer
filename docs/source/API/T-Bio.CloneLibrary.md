---
title: CloneLibrary
---

# CloneLibrary
_namespace: [Bio](N-Bio.html)_

Class created for reading data from resource file having library information.
 Singleton design pattern is used to create only one instance of class.

### Methods

#### #ctor
```csharp
Bio.CloneLibrary.#ctor
```
Prevents a default instance of the CloneLibrary class from being created.
 Initializes a instance of the CloneLibrary class.

#### AddLibrary
```csharp
Bio.CloneLibrary.AddLibrary(System.String,System.Single,System.Single)
```
Add Library to existing list of libraries.

|Parameter Name|Remarks|
|--------------|-------|
|libraryName|Name of Library.|
|mean|Mean Length Of Insert.|
|standardDeviation|Standard Deviation Of Insert.|


#### GetLibraryInformation
```csharp
Bio.CloneLibrary.GetLibraryInformation(System.String)
```
Returns information about Library.

|Parameter Name|Remarks|
|--------------|-------|
|libraryName| Name of Library.|

_returns: Struct containing Information about Library._

#### Parse
```csharp
Bio.CloneLibrary.Parse(System.String)
```
Parse Library and convert parsed data into structure.

|Parameter Name|Remarks|
|--------------|-------|
|library|Name of Library.|


#### ReadLibrary
```csharp
Bio.CloneLibrary.ReadLibrary
```
Read Libraries from file.



### Properties

#### GetLibraries
Gets the information about libraries.
#### Guard
Object to use for lock.
#### instance
Gets an instance of this class.
 Property to make sure only one Instance of this class is created.
#### libraries
List of Information about Clone libraries
 Duplicate libraries not allowed.

