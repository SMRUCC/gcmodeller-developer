---
title: Img
---

# Img
_namespace: [OpenTK.Graphics.ES11.GL](N-OpenTK.Graphics.ES11.GL.html)_



### Methods

#### ClipPlane
```csharp
OpenTK.Graphics.ES11.GL.Img.ClipPlane(OpenTK.Graphics.ES11.All,System.Single*)
```
[requires: IMG_user_clip_plane]
 Specify a plane against which all geometry is clipped

|Parameter Name|Remarks|
|--------------|-------|
|p| 
            Specifies which clipping plane is being positioned. Symbolic names of the form ClipPlanei, where i is an integer between 0 and MaxClipPlanes - 1, are accepted.
            |
|eqn|[length: 4] 
            Specifies the address of an array of four double-precision floating-point values. These values are interpreted as a plane equation.
            |


#### ClipPlanex
```csharp
OpenTK.Graphics.ES11.GL.Img.ClipPlanex(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: IMG_user_clip_plane]

|Parameter Name|Remarks|
|--------------|-------|
|p|-|
|eqn|[length: 4]|


#### FramebufferTexture2DMultisample
```csharp
OpenTK.Graphics.ES11.GL.Img.FramebufferTexture2DMultisample(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.UInt32,System.Int32,System.Int32)
```
[requires: IMG_multisampled_render_to_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|samples|-|


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES11.GL.Img.RenderbufferStorageMultisample(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: IMG_multisampled_render_to_texture]
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





