---
title: NativePoint
---

# NativePoint
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

A wrapper for the native POINT structure.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.NativePoint.#ctor(System.Int32,System.Int32)
```
Initialize the NativePoint

|Parameter Name|Remarks|
|--------------|-------|
|x__1|The x coordinate of the point.|
|y__2|The y coordinate of the point.|


#### Equals
```csharp
Microsoft.Windows.Shell.NativePoint.Equals(System.Object)
```
Determines if this NativePoint is equal to another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Another NativePoint to compare|

_returns: True if this NativePoint is equal obj; false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.NativePoint.GetHashCode
```
Gets a hash code for the NativePoint.
_returns: Hash code for the NativePoint_

#### op_Equality
```csharp
Microsoft.Windows.Shell.NativePoint.op_Equality(Microsoft.Windows.Shell.NativePoint,Microsoft.Windows.Shell.NativePoint)
```
Determines if two NativePoints are equal.

|Parameter Name|Remarks|
|--------------|-------|
|first|First NativePoint|
|second|Second NativePoint|

_returns: True if first NativePoint is equal to the second; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.NativePoint.op_Inequality(Microsoft.Windows.Shell.NativePoint,Microsoft.Windows.Shell.NativePoint)
```
Determines if two NativePoints are not equal.

|Parameter Name|Remarks|
|--------------|-------|
|first|First NativePoint|
|second|Second NativePoint|

_returns: True if first NativePoint is not equal to the second; false otherwise._



### Properties

#### X
The X coordinate of the point
#### Y
The Y coordinate of the point

