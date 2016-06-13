---
title: ContextHandle
---

# ContextHandle
_namespace: [OpenTK](N-OpenTK.html)_

Represents a handle to an OpenGL or OpenAL context.

### Methods

#### #ctor
```csharp
OpenTK.ContextHandle.#ctor(System.IntPtr)
```
Constructs a new instance with the specified handle.

|Parameter Name|Remarks|
|--------------|-------|
|h|A System.IntPtr containing the value for this instance.|


#### CompareTo
```csharp
OpenTK.ContextHandle.CompareTo(OpenTK.ContextHandle)
```
Compares the numerical value of this instance to the specified ContextHandle and
 returns a value indicating their relative order.

|Parameter Name|Remarks|
|--------------|-------|
|other|The ContextHandle to compare to.|

_returns: Less than 0, if this instance is less than other; 0 if both are equal; Greater than 0 if other is greater than this instance._

#### Equals
```csharp
OpenTK.ContextHandle.Equals(OpenTK.ContextHandle)
```
Compares this instance to the specified ContextHandle for equality.

|Parameter Name|Remarks|
|--------------|-------|
|other|The ContextHandle to compare to.|

_returns: True if this instance is equal to other; false otherwise._

#### GetHashCode
```csharp
OpenTK.ContextHandle.GetHashCode
```
Returns the hash code for this instance.
_returns: A System.Int32 with the hash code of this instance._

#### op_Equality
```csharp
OpenTK.ContextHandle.op_Equality(OpenTK.ContextHandle,OpenTK.ContextHandle)
```
Compares two ContextHandles for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The ContextHandle to compare.|
|right|The ContextHandle to compare to.|

_returns: True if left is equal to right; false otherwise._

#### op_Explicit
```csharp
OpenTK.ContextHandle.op_Explicit(System.IntPtr)~OpenTK.ContextHandle
```
Converts the specified IntPtr to the equivalent ContextHandle.

|Parameter Name|Remarks|
|--------------|-------|
|p|The System.IntPtr to convert.|

_returns: A ContextHandle equivalent to the specified IntPtr._

#### op_Inequality
```csharp
OpenTK.ContextHandle.op_Inequality(OpenTK.ContextHandle,OpenTK.ContextHandle)
```
Compares two ContextHandles for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The ContextHandle to compare.|
|right|The ContextHandle to compare to.|

_returns: True if left is not equal to right; false otherwise._

#### ToString
```csharp
OpenTK.ContextHandle.ToString
```
Converts this instance to its equivalent string representation.
_returns: A System.String that contains the string representation of this instance._



### Properties

#### Handle
Gets a System.IntPtr that represents the handle of this ContextHandle.
#### Zero
A read-only field that represents a handle that has been initialized to zero.

