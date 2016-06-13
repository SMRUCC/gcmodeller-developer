---
title: ArrayExtensions
---

# ArrayExtensions
_namespace: [Bio.Core.Extensions](N-Bio.Core.Extensions.html)_

Extension methods for arrays

### Methods

#### ConvertAll``2
```csharp
Bio.Core.Extensions.ArrayExtensions.ConvertAll``2(``0[],System.Func{``0,``1})
```
Runs each item through a conversion and returns the produced array.

|Parameter Name|Remarks|
|--------------|-------|
|input|-|
|converter|-|


#### GetLongLength
```csharp
Bio.Core.Extensions.ArrayExtensions.GetLongLength(System.Array)
```
This method provides access to the LongLength property in a 
 portable fashion by looking it up for the platform using reflection.
 The PropertyInfo is cached off for performance.

|Parameter Name|Remarks|
|--------------|-------|
|data|Array|

_returns: 64-bit length_

#### GetRange``1
```csharp
Bio.Core.Extensions.ArrayExtensions.GetRange``1(``0[],System.Int32,System.Int32)
```
Returns a new array with the specified range of values.

|Parameter Name|Remarks|
|--------------|-------|
|data|Source data.|
|startIndex|Index to begind sub array at.|
|length|Length of sub array.|


#### Initialize
```csharp
Bio.Core.Extensions.ArrayExtensions.Initialize
```
Method to locate our cached reflection data.

#### LongCopy
```csharp
Bio.Core.Extensions.ArrayExtensions.LongCopy(System.Array,System.Int64,System.Array,System.Int64,System.Int64)
```
This method performs a 64-bit array copy if the platform supports it.

|Parameter Name|Remarks|
|--------------|-------|
|source|Source array|
|startSource|Starting position|
|dest|Destination array|
|startDest|Starting position|
|count|Count|





