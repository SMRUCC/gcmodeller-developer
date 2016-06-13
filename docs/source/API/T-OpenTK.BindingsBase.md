---
title: BindingsBase
---

# BindingsBase
_namespace: [OpenTK](N-OpenTK.html)_

Provides a common foundation for all flat API bindings and implements the extension loading interface.

### Methods

#### #ctor
```csharp
OpenTK.BindingsBase.#ctor
```
Constructs a new BindingsBase instance.

#### FreeStringArrayPtr
```csharp
OpenTK.BindingsBase.FreeStringArrayPtr(System.IntPtr,System.Int32)
```
Frees a marshalled string that allocated by MarshalStringArrayToPtr.

|Parameter Name|Remarks|
|--------------|-------|
|ptr|An unmanaged pointer allocated with MarshalStringArrayToPtr|
|length|The length of the string array.|


#### FreeStringPtr
```csharp
OpenTK.BindingsBase.FreeStringPtr(System.IntPtr)
```
Frees a marshalled string that allocated by MarshalStringToPtr.

|Parameter Name|Remarks|
|--------------|-------|
|ptr|An unmanaged pointer allocated with MarshalStringToPtr|


#### GetAddress
```csharp
OpenTK.BindingsBase.GetAddress(System.String)
```
Retrieves an unmanaged function pointer to the specified function.

|Parameter Name|Remarks|
|--------------|-------|
|funcname|
            A @"T:System.String" that defines the name of the function.
            |

_returns: 
            A @"T:System.IntPtr" that contains the address of funcname or IntPtr.Zero,
            if the function is not supported by the drivers.
            _
> 
>             Note: some drivers are known to return non-zero values for unsupported functions.
>             Typical values include 1 and 2 - inheritors are advised to check for and ignore these
>             values.
>             

#### MarshalPtrToStringBuilder
```csharp
OpenTK.BindingsBase.MarshalPtrToStringBuilder(System.IntPtr,System.Text.StringBuilder)
```
Marshals a pointer to a null-terminated byte array to the specified StringBuilder.
 This method supports OpenTK and is not intended to be called by user code.

|Parameter Name|Remarks|
|--------------|-------|
|ptr|A pointer to a null-terminated byte array.|
|sb|The StringBuilder to receive the contents of the pointer.|


#### MarshalStringArrayToPtr
```csharp
OpenTK.BindingsBase.MarshalStringArrayToPtr(System.String[])
```
Marshals a System.String array to unmanaged memory by calling
 Marshal.AllocHGlobal for each element.

|Parameter Name|Remarks|
|--------------|-------|
|str_array|The string array to marshal.|

_returns: An unmanaged pointer to an array of null-terminated strings_

#### MarshalStringToPtr
```csharp
OpenTK.BindingsBase.MarshalStringToPtr(System.String)
```
Marshal a System.String to unmanaged memory.
 The resulting string is encoded in ASCII and must be freed
 with FreeStringPtr.

|Parameter Name|Remarks|
|--------------|-------|
|str|The System.String to marshal.|

_returns: 
            An unmanaged pointer containing the marshalled string.
            This pointer must be freed with FreeStringPtr_



### Properties

#### CoreClass
A refection handle to the nested type that contains core functions (i.e. not extensions).
#### CoreFunctionMap
A mapping of core function names to MethodInfo handles.
#### DelegatesClass
A reflection handle to the nested type that contains the function delegates.
#### RebuildExtensionList
Gets or sets a @"T:System.Boolean" that indicates whether the list of supported extensions may have changed.
#### SyncRoot
Gets an object that can be used to synchronize access to the bindings implementation.

