---
title: ParserHelper
---

# ParserHelper
_namespace: [Bio.IO.AppliedBiosystems.DataParsers](N-Bio.IO.AppliedBiosystems.DataParsers.html)_

Provides helper methods for converting raw data to .Net data types.

### Methods

#### ConvertSegmentsToArray``2
```csharp
Bio.IO.AppliedBiosystems.DataParsers.ParserHelper.ConvertSegmentsToArray``2(``0[][],System.Func{``0[],``1})
```
Converts the array of segments into a array of values.

|Parameter Name|Remarks|
|--------------|-------|
|segments|-|
|convert|-|


#### SegmentArray``1
```csharp
Bio.IO.AppliedBiosystems.DataParsers.ParserHelper.SegmentArray``1(``0[],System.Int32,System.Boolean)
```
Segments the array and enumerates those segments.

|Parameter Name|Remarks|
|--------------|-------|
|values|-|
|count|-|
|flip|If true flips the order of the segments|


#### ToArray``1
```csharp
Bio.IO.AppliedBiosystems.DataParsers.ParserHelper.ToArray``1(System.String,System.Func{System.String,``0})
```
All ab1 arrays are space seperate strings. Helper function to convert to a property array.

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|parse|-|





