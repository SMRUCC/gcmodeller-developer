---
title: Apple
---

# Apple
_namespace: [OpenTK.Graphics.ES11.GL](N-OpenTK.Graphics.ES11.GL.html)_



### Methods

#### ClientWaitSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.ClientWaitSync(System.IntPtr,System.UInt32,System.UInt64)
```
[requires: APPLE_sync]
 Block and wait for a sync object to become signaled

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            The sync object whose status to wait on.
            |
|flags| 
            A bitfield controlling the command flushing behavior. flags may be SyncFlushCommandsBit.
            |
|timeout| 
            The timeout, specified in nanoseconds, for which the implementation should wait for sync to become signaled.
            |


#### CopyTextureLevel
```csharp
OpenTK.Graphics.ES11.GL.Apple.CopyTextureLevel(System.UInt32,System.UInt32,System.Int32,System.Int32)
```
[requires: APPLE_copy_texture_levels]

|Parameter Name|Remarks|
|--------------|-------|
|destinationTexture|-|
|sourceTexture|-|
|sourceBaseLevel|-|
|sourceLevelCount|-|


#### DeleteSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.DeleteSync(System.IntPtr)
```
[requires: APPLE_sync]
 Delete a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            The sync object to be deleted.
            |


#### FenceSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.FenceSync(OpenTK.Graphics.ES11.All,System.UInt32)
```
[requires: APPLE_sync]
 Create a new sync object and insert it into the GL command stream

|Parameter Name|Remarks|
|--------------|-------|
|condition| 
            Specifies the condition that must be met to set the sync object's state to signaled. condition must be SyncGpuCommandsComplete.
            |
|flags| 
            Specifies a bitwise combination of flags controlling the behavior of the sync object. No flags are presently defined for this operation and flags must be zero.flags is a placeholder for anticipated future extensions of fence sync object capabilities.
            |


#### GetInteger64
```csharp
OpenTK.Graphics.ES11.GL.Apple.GetInteger64(OpenTK.Graphics.ES11.All,System.Int64*)
```
[requires: APPLE_sync]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|-|


#### GetSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.GetSync(System.IntPtr,OpenTK.Graphics.ES11.All,System.Int32,System.Int32*,System.Int32*)
```
[requires: APPLE_sync]
 Query the properties of a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies the sync object whose properties to query.
            |
|pname| 
            Specifies the parameter whose value to retrieve from the sync object specified in sync.
            |
|bufSize| 
            Specifies the size of the buffer whose address is given in values.
            |
|length| 
            Specifies the address of an variable to receive the number of integers placed in values.
            |
|values|[length: bufSize] 
            Specifies the address of an array to receive the values of the queried parameter.
            |


#### IsSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.IsSync(System.IntPtr)
```
[requires: APPLE_sync]
 Determine if a name corresponds to a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies a value that may be the name of a sync object.
            |


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES11.GL.Apple.RenderbufferStorageMultisample(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: APPLE_framebuffer_multisample]
 Establish data storage, format, dimensions and sample count of a renderbuffer object's image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target of the allocation and must be Renderbuffer.
            |
|samples| 
            Specifies the number of samples to be used for the renderbuffer object's storage.
            |
|internalformat| 
            Specifies the internal format to use for the renderbuffer object's image.
            |
|width| 
            Specifies the width of the renderbuffer, in pixels.
            |
|height| 
            Specifies the height of the renderbuffer, in pixels.
            |


#### ResolveMultisampleFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Apple.ResolveMultisampleFramebuffer
```
[requires: APPLE_framebuffer_multisample]

#### WaitSync
```csharp
OpenTK.Graphics.ES11.GL.Apple.WaitSync(System.IntPtr,System.UInt32,System.UInt64)
```
[requires: APPLE_sync]
 Instruct the GL server to block until the specified sync object becomes signaled

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies the sync object whose status to wait on.
            |
|flags| 
            A bitfield controlling the command flushing behavior. flags may be zero.
            |
|timeout| 
            Specifies the timeout that the server should wait before continuing. timeout must be TimeoutIgnored.
            |





