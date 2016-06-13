---
title: Ext
---

# Ext
_namespace: [OpenTK.Graphics.ES11.GL](N-OpenTK.Graphics.ES11.GL.html)_



### Methods

#### BlendEquation
```csharp
OpenTK.Graphics.ES11.GL.Ext.BlendEquation(OpenTK.Graphics.ES11.BlendEquationModeExt)
```
[requires: EXT_blend_minmax]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### DiscardFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Ext.DiscardFramebuffer(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All*)
```
[requires: EXT_discard_framebuffer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|numAttachments|-|
|attachments|[length: numAttachments]|


#### FlushMappedBufferRange
```csharp
OpenTK.Graphics.ES11.GL.Ext.FlushMappedBufferRange(OpenTK.Graphics.ES11.All,System.IntPtr,System.IntPtr)
```
[requires: EXT_map_buffer_range]
 Indicate modifications to a range of a mapped buffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the flush operation. target must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, DispatchIndirectBuffer, DrawIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the start of the buffer subrange, in basic machine units.
            |
|length| 
            Specifies the length of the buffer subrange, in basic machine units.
            |


#### FramebufferTexture2DMultisample
```csharp
OpenTK.Graphics.ES11.GL.Ext.FramebufferTexture2DMultisample(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_multisampled_render_to_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|samples|-|


#### GetGraphicsResetStatus
```csharp
OpenTK.Graphics.ES11.GL.Ext.GetGraphicsResetStatus
```
[requires: EXT_robustness]

#### GetnUniform
```csharp
OpenTK.Graphics.ES11.GL.Ext.GetnUniform(System.UInt32,System.Int32,System.Int32,System.Int32*)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|bufSize|-|
|@params|[length: bufSize]|


#### MapBufferRange
```csharp
OpenTK.Graphics.ES11.GL.Ext.MapBufferRange(OpenTK.Graphics.ES11.All,System.IntPtr,System.IntPtr,System.UInt32)
```
[requires: EXT_map_buffer_range]
 Map a section of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target buffer is bound.
            |
|offset| 
            Specifies a the starting offset within the buffer of the range to be mapped.
            |
|length| 
            Specifies a length of the range to be mapped.
            |
|access| 
            Specifies a combination of access flags indicating the desired access to the range.
            |


#### MultiDrawArrays
```csharp
OpenTK.Graphics.ES11.GL.Ext.MultiDrawArrays(OpenTK.Graphics.ES11.PrimitiveType,System.Int32*,System.Int32*,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|first|[length: primcount] 
            Points to an array of starting indices in the enabled arrays.
            |
|count|[length: primcount] 
            Points to an array of the number of indices to be rendered.
            |
|primcount| 
            Specifies the size of the first and count
            |


#### MultiDrawElements
```csharp
OpenTK.Graphics.ES11.GL.Ext.MultiDrawElements(OpenTK.Graphics.ES11.PrimitiveType,System.Int32*,OpenTK.Graphics.ES11.All,System.IntPtr,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: primcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: primcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the size of the count and indices arrays.
            |


#### MultiDrawElements``1
```csharp
OpenTK.Graphics.ES11.GL.Ext.MultiDrawElements``1(OpenTK.Graphics.ES11.PrimitiveType,System.Int32*,OpenTK.Graphics.ES11.All,``0@,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: primcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: primcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the size of the count and indices arrays.
            |


#### ReadnPixels
```csharp
OpenTK.Graphics.ES11.GL.Ext.ReadnPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32,System.IntPtr)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|width|-|
|height|-|
|format|-|
|type|-|
|bufSize|-|
|data|[length: bufSize]|


#### ReadnPixels``1
```csharp
OpenTK.Graphics.ES11.GL.Ext.ReadnPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32,``0@)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|width|-|
|height|-|
|format|-|
|type|-|
|bufSize|-|
|data|[length: bufSize]|


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES11.GL.Ext.RenderbufferStorageMultisample(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: EXT_multisampled_render_to_texture]
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


#### TexStorage1D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TexStorage1D(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a one-dimensional texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be either Texture1D or ProxyTexture1D.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |


#### TexStorage2D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TexStorage2D(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a two-dimensional or one-dimensional array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureRectangle, ProxyTextureRectangle, or ProxyTextureCubeMap.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |
|height| 
            Specifies the height of the texture, in texels.
            |


#### TexStorage3D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TexStorage3D(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a three-dimensional, two-dimensional array or cube-map array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture3D, ProxyTexture3D, Texture2DArray, ProxyTexture2DArray, TextureCubeArray, or ProxyTextureCubeArray.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |
|height| 
            Specifies the height of the texture, in texels.
            |
|depth| 
            Specifies the depth of the texture, in texels.
            |


#### TextureStorage1D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TextureStorage1D(System.UInt32,OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|


#### TextureStorage2D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TextureStorage2D(System.UInt32,OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|


#### TextureStorage3D
```csharp
OpenTK.Graphics.ES11.GL.Ext.TextureStorage3D(System.UInt32,OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|





