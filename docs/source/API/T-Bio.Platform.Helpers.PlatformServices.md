---
title: PlatformServices
---

# PlatformServices
_namespace: [Bio.Platform.Helpers](N-Bio.Platform.Helpers.html)_

PCL version of platform services.

### Methods

#### CreateCompiledRegex
```csharp
Bio.Platform.Helpers.PlatformServices.CreateCompiledRegex(System.String,System.Nullable{System.Text.RegularExpressions.RegexOptions})
```
Creates a Regular Expression; pushed here because some platforms do not support compiling

|Parameter Name|Remarks|
|--------------|-------|
|pattern|Regex pattern|
|options|Optional options|


#### CreateTempStream
```csharp
Bio.Platform.Helpers.PlatformServices.CreateTempStream
```
Creates a temporary stream that is deleted when disposed.
_returns: Stream_

#### GetAssemblies
```csharp
Bio.Platform.Helpers.PlatformServices.GetAssemblies
```
Retrieves the assemblies in the application/package/bundle



### Properties

#### DefaultBufferSize
Default buffer size for parsers
#### Is64BitProcessType
True if this is a 64-bit process
#### MaxSequenceSize
Maximum sequence size for the platform.

