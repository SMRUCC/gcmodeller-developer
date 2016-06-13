---
title: Img
---

# Img
_namespace: [OpenTK.Graphics.ES20.GL](N-OpenTK.Graphics.ES20.GL.html)_



### Methods

#### FramebufferTexture2DMultisample
```csharp
OpenTK.Graphics.ES20.GL.Img.FramebufferTexture2DMultisample(OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,System.UInt32,System.Int32,System.Int32)
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
OpenTK.Graphics.ES20.GL.Img.RenderbufferStorageMultisample(OpenTK.Graphics.ES20.RenderbufferTarget,System.Int32,OpenTK.Graphics.ES20.RenderbufferInternalFormat,System.Int32,System.Int32)
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





