---
title: Angle
---

# Angle
_namespace: [OpenTK.Graphics.ES30.GL](N-OpenTK.Graphics.ES30.GL.html)_



### Methods

#### BlitFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.Angle.BlitFramebuffer(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.ClearBufferMask,OpenTK.Graphics.ES30.BlitFramebufferFilter)
```
[requires: ANGLE_framebuffer_blit]
 Copy a block of pixels from the read framebuffer to the draw framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|srcX0| 
            Specify the bounds of the source rectangle within the read buffer of the read framebuffer.
            |
|srcY0| 
            Specify the bounds of the source rectangle within the read buffer of the read framebuffer.
            |
|srcX1| 
            Specify the bounds of the source rectangle within the read buffer of the read framebuffer.
            |
|srcY1| 
            Specify the bounds of the source rectangle within the read buffer of the read framebuffer.
            |
|dstX0| 
            Specify the bounds of the destination rectangle within the write buffer of the write framebuffer.
            |
|dstY0| 
            Specify the bounds of the destination rectangle within the write buffer of the write framebuffer.
            |
|dstX1| 
            Specify the bounds of the destination rectangle within the write buffer of the write framebuffer.
            |
|dstY1| 
            Specify the bounds of the destination rectangle within the write buffer of the write framebuffer.
            |
|mask| 
            The bitwise OR of the flags indicating which buffers are to be copied. The allowed flags are ColorBufferBit, DepthBufferBit and StencilBufferBit.
            |
|filter| 
            Specifies the interpolation to be applied if the image is stretched. Must be Nearest or Linear.
            |


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.ES30.GL.Angle.DrawArraysInstanced(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: ANGLE_instanced_arrays]
 Draw multiple instances of a range of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan and Triangles are accepted.
            |
|first| 
            Specifies the starting index in the enabled arrays.
            |
|count| 
            Specifies the number of indices to be rendered.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstanced
```csharp
OpenTK.Graphics.ES30.GL.Angle.DrawElementsInstanced(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: ANGLE_instanced_arrays]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan and Triangles are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstanced``1
```csharp
OpenTK.Graphics.ES30.GL.Angle.DrawElementsInstanced``1(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,``0@,System.Int32)
```
[requires: ANGLE_instanced_arrays]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan and Triangles are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### GetTranslatedShaderSource
```csharp
OpenTK.Graphics.ES30.GL.Angle.GetTranslatedShaderSource(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: ANGLE_translated_shader_source]

|Parameter Name|Remarks|
|--------------|-------|
|shader|-|
|bufsize|-|
|length|[length: 1]|
|source|-|


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES30.GL.Angle.RenderbufferStorageMultisample(OpenTK.Graphics.ES30.RenderbufferTarget,System.Int32,OpenTK.Graphics.ES30.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: ANGLE_framebuffer_multisample]
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


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.ES30.GL.Angle.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: ANGLE_instanced_arrays]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |





