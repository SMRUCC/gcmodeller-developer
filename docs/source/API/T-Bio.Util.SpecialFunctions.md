---
title: SpecialFunctions
---

# SpecialFunctions
_namespace: [Bio.Util](N-Bio.Util.html)_

SpecialFunctions

### Methods

#### CopyDirectory
```csharp
Bio.Util.SpecialFunctions.CopyDirectory(System.String,System.String,System.Boolean,System.Boolean)
```
CopyDirectory

|Parameter Name|Remarks|
|--------------|-------|
|oldDirectoryName|oldDirectoryName|
|newDirectoryName|newDirectoryName|
|recursive|recursive|
|laterDateOnly|laterDateOnly|


#### DateProgramWasCompiled
```csharp
Bio.Util.SpecialFunctions.DateProgramWasCompiled
```
Returns the date and time that the Assembly that the program started in was compiled. Note that the time never includes daylight savings.
 In order to work, you must set [assembly: AssemblyVersion("1.0.*")] in AssemblyInfo.cs. This can be done either manually or by
 editing Assembly Information in the project's Properties.

#### DivideWork``1
```csharp
Bio.Util.SpecialFunctions.DivideWork``1(System.Collections.Generic.IEnumerable{``0},Bio.Util.RangeCollection,System.Int64,System.Int64,Bio.Util.RangeCollection)
```
This method will spread out the work items--like dealing cards around the table, you only get every other K'th card,
 where K is the number of people, when batchCount=1. (Or else you get sets of batchCount-contiguous cards).

|Parameter Name|Remarks|
|--------------|-------|
|enumerable|-|
|pieceIndexRangeCollection|-|
|pieceCount|-|
|batchCount|-|
|skipListOrNull|-|

_returns: The item and it's original index in the enumerable._

#### GetEntryOrCallingAssembly
```csharp
Bio.Util.SpecialFunctions.GetEntryOrCallingAssembly
```
GetEntryOrCallingAssembly
_returns: Assembly_

#### VersionToDate
```csharp
Bio.Util.SpecialFunctions.VersionToDate(System.Version)
```
VersionToDate

|Parameter Name|Remarks|
|--------------|-------|
|version|version|

_returns: DateTime_




