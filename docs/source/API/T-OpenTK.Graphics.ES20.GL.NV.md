---
title: NV
---

# NV
_namespace: [OpenTK.Graphics.ES20.GL](N-OpenTK.Graphics.ES20.GL.html)_



### Methods

#### BlendBarrier
```csharp
OpenTK.Graphics.ES20.GL.NV.BlendBarrier
```
[requires: NV_blend_equation_advanced]

#### BlendParameter
```csharp
OpenTK.Graphics.ES20.GL.NV.BlendParameter(OpenTK.Graphics.ES20.All,System.Int32)
```
[requires: NV_blend_equation_advanced]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|value|-|


#### BlitFramebuffer
```csharp
OpenTK.Graphics.ES20.GL.NV.BlitFramebuffer(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.ClearBufferMask,OpenTK.Graphics.ES20.BlitFramebufferFilter)
```
[requires: NV_framebuffer_blit]
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


#### CopyBufferSubData
```csharp
OpenTK.Graphics.ES20.GL.NV.CopyBufferSubData(OpenTK.Graphics.ES20.BufferTarget,OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: NV_copy_buffer]
 Copy part of the data store of a buffer object to the data store of another buffer object

|Parameter Name|Remarks|
|--------------|-------|
|readTarget| 
            Specifies the target from whose data store data should be read.
            |
|writeTarget| 
            Specifies the target to whose data store data should be written.
            |
|readOffset| 
            Specifies the offset, in basic machine units, within the data store of readtarget from which data should be read.
            |
|writeOffset| 
            Specifies the offset, in basic machine units, within the data store of writetarget to which data should be written.
            |
|size| 
            Specifies the size, in basic machine units, of the data to be copied from readtarget to writetarget.
            |


#### CoverageMask
```csharp
OpenTK.Graphics.ES20.GL.NV.CoverageMask(System.Boolean)
```
[requires: NV_coverage_sample]

|Parameter Name|Remarks|
|--------------|-------|
|mask|-|


#### CoverageOperation
```csharp
OpenTK.Graphics.ES20.GL.NV.CoverageOperation(OpenTK.Graphics.ES20.All)
```
[requires: NV_coverage_sample]

|Parameter Name|Remarks|
|--------------|-------|
|operation|-|


#### DeleteFence
```csharp
OpenTK.Graphics.ES20.GL.NV.DeleteFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fences|[length: n]|


#### DeleteFences
```csharp
OpenTK.Graphics.ES20.GL.NV.DeleteFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.ES20.GL.NV.DrawArraysInstanced(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: NV_draw_instanced]
 Draw multiple instances of a range of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, TrianglesLinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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


#### DrawBuffers
```csharp
OpenTK.Graphics.ES20.GL.NV.DrawBuffers(System.Int32,OpenTK.Graphics.ES20.DrawBufferMode*)
```
[requires: NV_draw_buffers]
 Specifies a list of color buffers to be drawn into

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffers in bufs.
            |
|bufs|[length: n] 
            Points to an array of symbolic constants specifying the buffers into which fragment colors or data values will be written.
            |


#### DrawElementsInstanced
```csharp
OpenTK.Graphics.ES20.GL.NV.DrawElementsInstanced(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: NV_draw_instanced]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
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
OpenTK.Graphics.ES20.GL.NV.DrawElementsInstanced``1(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,``0@,System.Int32)
```
[requires: NV_draw_instanced]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
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


#### FinishFence
```csharp
OpenTK.Graphics.ES20.GL.NV.FinishFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### GenFence
```csharp
OpenTK.Graphics.ES20.GL.NV.GenFence
```
[requires: NV_fence]

#### GenFences
```csharp
OpenTK.Graphics.ES20.GL.NV.GenFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### GetFence
```csharp
OpenTK.Graphics.ES20.GL.NV.GetFence(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|pname|-|
|@params|[length: pname]|


#### IsFence
```csharp
OpenTK.Graphics.ES20.GL.NV.IsFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### ReadBuffer
```csharp
OpenTK.Graphics.ES20.GL.NV.ReadBuffer(OpenTK.Graphics.ES20.All)
```
[requires: NV_read_buffer]
 Select a color buffer source for pixels

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies a color buffer. Accepted values are FrontLeft, FrontRight, BackLeft, BackRight, Front, Back, Left, Right, and the constants ColorAttachmenti.
            |


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES20.GL.NV.RenderbufferStorageMultisample(OpenTK.Graphics.ES20.RenderbufferTarget,System.Int32,OpenTK.Graphics.ES20.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: NV_framebuffer_multisample]
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


#### SetFence
```csharp
OpenTK.Graphics.ES20.GL.NV.SetFence(System.UInt32,OpenTK.Graphics.ES20.All)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|condition|-|


#### TestFence
```csharp
OpenTK.Graphics.ES20.GL.NV.TestFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### UniformMatrix2x3
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix2x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix2x4
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix2x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix3x2
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix3x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix3x4
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix3x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### UniformMatrix4x2
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix4x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix4x3
```csharp
OpenTK.Graphics.ES20.GL.NV.UniformMatrix4x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: NV_non_square_matrices]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.ES20.GL.NV.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: NV_instanced_arrays]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |





