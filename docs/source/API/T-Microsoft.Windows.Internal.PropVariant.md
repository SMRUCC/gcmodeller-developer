---
title: PropVariant
---

# PropVariant
_namespace: [Microsoft.Windows.Internal](N-Microsoft.Windows.Internal.html)_

Represents the OLE struct PROPVARIANT.
 This class is intended for internal use only.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Internal.PropVariant.#ctor(System.Double)
```
Set a double

#### Dispose
```csharp
Microsoft.Windows.Internal.PropVariant.Dispose
```
Disposes the object, calls the clear function.

#### Finalize
```csharp
Microsoft.Windows.Internal.PropVariant.Finalize
```
Finalizer

#### FromObject
```csharp
Microsoft.Windows.Internal.PropVariant.FromObject(System.Object)
```
Attempts to create a PropVariant by finding an appropriate constructor.

|Parameter Name|Remarks|
|--------------|-------|
|value|Object from which PropVariant should be created.|


#### SetIUnknown
```csharp
Microsoft.Windows.Internal.PropVariant.SetIUnknown(System.Object)
```
Set an IUnknown value

|Parameter Name|Remarks|
|--------------|-------|
|value|The new value to set.|


#### SetSafeArray
```csharp
Microsoft.Windows.Internal.PropVariant.SetSafeArray(System.Array)
```
Set a safe array value

|Parameter Name|Remarks|
|--------------|-------|
|array|The new value to set.|


#### ToString
```csharp
Microsoft.Windows.Internal.PropVariant.ToString
```
Provides an simple string representation of the contained data and type.



### Properties

#### IsNullOrEmpty
Checks if this has an empty or null value
#### Value
Gets the variant value.
#### VarType
Gets or sets the variant type.

