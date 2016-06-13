---
title: NativeRect
---

# NativeRect
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

A wrapper for a RECT struct

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.NativeRect.#ctor(System.Int32,System.Int32,System.Int32,System.Int32)
```
Creates a new NativeRect initialized with supplied values.

|Parameter Name|Remarks|
|--------------|-------|
|left__1|Position of left edge|
|top__2|Position of top edge|
|right__3|Position of right edge|
|bottom__4|Position of bottom edge|


#### Equals
```csharp
Microsoft.Windows.Shell.NativeRect.Equals(System.Object)
```
Determines if the NativeRect is equal to another Rect.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Another NativeRect to compare|

_returns: True if this NativeRect is equal to the one provided; false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.NativeRect.GetHashCode
```
Creates a hash code for the NativeRect
_returns: Returns hash code for this NativeRect_

#### op_Equality
```csharp
Microsoft.Windows.Shell.NativeRect.op_Equality(Microsoft.Windows.Shell.NativeRect,Microsoft.Windows.Shell.NativeRect)
```
Determines if two NativeRects are equal.

|Parameter Name|Remarks|
|--------------|-------|
|first|First NativeRect|
|second|Second NativeRect|

_returns: True if first NativeRect is equal to second; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.NativeRect.op_Inequality(Microsoft.Windows.Shell.NativeRect,Microsoft.Windows.Shell.NativeRect)
```
Determines if two NativeRects are not equal

|Parameter Name|Remarks|
|--------------|-------|
|first|First NativeRect|
|second|Second NativeRect|

_returns: True if first is not equal to second; false otherwise._



### Properties

#### Bottom
Position of bottom edge
#### Left
Position of left edge
#### Right
Position of right edge
#### Top
Position of top edge

