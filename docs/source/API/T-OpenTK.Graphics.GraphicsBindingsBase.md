---
title: GraphicsBindingsBase
---

# GraphicsBindingsBase
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Implements BindingsBase for the OpenTK.Graphics namespace (OpenGL and OpenGL|ES).

### Methods

#### GetAddress
```csharp
OpenTK.Graphics.GraphicsBindingsBase.GetAddress(System.String)
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



### Properties

#### EntryPointNamesInstance
with the 1.1 API.
 Contains the list of API entry point names.
 This field must be set by an inheriting class.
#### EntryPointsInstance
Contains the list of API entry points (function pointers).
 This field must be set by an inheriting class.

