---
title: GL
---

# GL
_namespace: [OpenTK.Graphics.ES30](N-OpenTK.Graphics.ES30.html)_

Provides access to OpenGL ES 3.0 methods.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.ES30.GL.#ctor
```
Constructs a new instance.

#### ActiveTexture
```csharp
OpenTK.Graphics.ES30.GL.ActiveTexture(OpenTK.Graphics.ES30.TextureUnit)
```
[requires: v2.0 or ES_VERSION_2_0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation-dependent, but must be at least 32. texture must be one of Texturei, where i ranges from zero to the value of MaxCombinedTextureImageUnits minus one. The initial value is Texture0.
            |


#### AttachShader
```csharp
OpenTK.Graphics.ES30.GL.AttachShader(System.UInt32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attaches a shader object to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to which a shader object will be attached.
            |
|shader| 
            Specifies the shader object that is to be attached.
            |


#### BeginQuery
```csharp
OpenTK.Graphics.ES30.GL.BeginQuery(OpenTK.Graphics.ES30.QueryTarget,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delimit the boundaries of a query object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target type of query object established between glBeginQuery and the subsequent glEndQuery. The symbolic constant must be one of AnySamplesPassed, AnySamplesPassedConservative, or TransformFeedbackPrimitivesWritten.
            |
|id| 
            Specifies the name of a query object.
            |


#### BeginTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.BeginTransformFeedback(OpenTK.Graphics.ES30.TransformFeedbackPrimitiveType)
```
[requires: v3.0 or ES_VERSION_3_0]
 Start transform feedback operation

|Parameter Name|Remarks|
|--------------|-------|
|primitiveMode| 
            Specify the output type of the primitives that will be recorded into the buffer objects that are bound for transform feedback.
            |


#### BindAttribLocation
```csharp
OpenTK.Graphics.ES30.GL.BindAttribLocation(System.UInt32,System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Associates a generic vertex attribute index with a named attribute variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object in which the association is to be made.
            |
|index| 
            Specifies the index of the generic vertex attribute to be bound.
            |
|name| 
            Specifies a null terminated string containing the name of the vertex shader attribute variable to which index is to be bound.
            |


#### BindBuffer
```csharp
OpenTK.Graphics.ES30.GL.BindBuffer(OpenTK.Graphics.ES30.BufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the buffer object is bound. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|buffer| 
            Specifies the name of a buffer object.
            |


#### BindBufferBase
```csharp
OpenTK.Graphics.ES30.GL.BindBufferBase(OpenTK.Graphics.ES30.BufferRangeTarget,System.UInt32,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Bind a buffer object to an indexed buffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be either TransformFeedbackBuffer or UniformBuffer.
            |
|index| 
            Specify the index of the binding point within the array specified by target.
            |
|buffer| 
            The name of a buffer object to bind to the specified binding point.
            |


#### BindBufferRange
```csharp
OpenTK.Graphics.ES30.GL.BindBufferRange(OpenTK.Graphics.ES30.BufferRangeTarget,System.UInt32,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Bind a range within a buffer object to an indexed buffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be either TransformFeedbackBuffer or UniformBuffer.
            |
|index| 
            Specify the index of the binding point within the array specified by target.
            |
|buffer| 
            The name of a buffer object to bind to the specified binding point.
            |
|offset| 
            The starting offset in basic machine units into the buffer object buffer.
            |
|size| 
            The amount of data in machine units that can be read from the buffet object while used as an indexed target.
            |


#### BindFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.BindFramebuffer(OpenTK.Graphics.ES30.FramebufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a framebuffer to a framebuffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target of the binding operation.
            |
|framebuffer| 
            Specifies the name of the framebuffer object to bind.
            |


#### BindRenderbuffer
```csharp
OpenTK.Graphics.ES30.GL.BindRenderbuffer(OpenTK.Graphics.ES30.RenderbufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a renderbuffer to a renderbuffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the renderbuffer target of the binding operation. target must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the name of the renderbuffer object to bind.
            |


#### BindSampler
```csharp
OpenTK.Graphics.ES30.GL.BindSampler(System.UInt32,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Bind a named sampler to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|unit| 
            Specifies the index of the texture unit to which the sampler is bound.
            |
|sampler| 
            Specifies the name of a sampler.
            |


#### BindTexture
```csharp
OpenTK.Graphics.ES30.GL.BindTexture(OpenTK.Graphics.ES30.TextureTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture is bound. Must be either Texture2D, Texture3D, Texture2DArray, or TextureCubeMap,
            |
|texture| 
            Specifies the name of a texture.
            |


#### BindTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.BindTransformFeedback(OpenTK.Graphics.ES30.TransformFeedbackTarget,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Bind a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which to bind the transform feedback object id. target must be TransformFeedback.
            |
|id| 
            Specifies the name of a transform feedback object reserved by glGenTransformFeedbacks.
            |


#### BindVertexArray
```csharp
OpenTK.Graphics.ES30.GL.BindVertexArray(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Bind a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the name of the vertex array to bind.
            |


#### BlendColor
```csharp
OpenTK.Graphics.ES30.GL.BlendColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set the blend color

|Parameter Name|Remarks|
|--------------|-------|
|red| 
            specify the components of BlendColor
            |
|green| 
            specify the components of BlendColor
            |
|blue| 
            specify the components of BlendColor
            |
|alpha| 
            specify the components of BlendColor
            |


#### BlendEquation
```csharp
OpenTK.Graphics.ES30.GL.BlendEquation(OpenTK.Graphics.ES30.BlendEquationMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.ES30.GL.BlendEquationSeparate(OpenTK.Graphics.ES30.BlendEquationMode,OpenTK.Graphics.ES30.BlendEquationMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.ES30.GL.BlendFunc(OpenTK.Graphics.ES30.BlendingFactorSrc,OpenTK.Graphics.ES30.BlendingFactorDest)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|sfactor| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The initial value is One.
            |
|dfactor| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.ES30.GL.BlendFuncSeparate(OpenTK.Graphics.ES30.BlendingFactorSrc,OpenTK.Graphics.ES30.BlendingFactorDest,OpenTK.Graphics.ES30.BlendingFactorSrc,OpenTK.Graphics.ES30.BlendingFactorDest)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|sfactorRGB| 
            Specifies how the red, green, and blue blending factors are computed. The initial value is One.
            |
|dfactorRGB| 
            Specifies how the red, green, and blue destination blending factors are computed. The initial value is Zero.
            |
|sfactorAlpha| 
            Specified how the alpha source blending factor is computed. The initial value is One.
            |
|dfactorAlpha| 
            Specified how the alpha destination blending factor is computed. The initial value is Zero.
            |


#### BlitFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.BlitFramebuffer(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.ClearBufferMask,OpenTK.Graphics.ES30.BlitFramebufferFilter)
```
[requires: v3.0 or ES_VERSION_3_0]
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


#### BufferData
```csharp
OpenTK.Graphics.ES30.GL.BufferData(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.ES30.BufferUsageHint)
```
[requires: v2.0 or ES_VERSION_2_0]
 Creates and initializes a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|usage| 
            Specifies the expected usage pattern of the data store. The symbolic constant must be StreamDraw, StreamRead, StreamCopy, StaticDraw, StaticRead, StaticCopy, DynamicDraw, DynamicRead, or DynamicCopy.
            |


#### BufferData``1
```csharp
OpenTK.Graphics.ES30.GL.BufferData``1(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,``0@,OpenTK.Graphics.ES30.BufferUsageHint)
```
[requires: v2.0 or ES_VERSION_2_0]
 Creates and initializes a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|usage| 
            Specifies the expected usage pattern of the data store. The symbolic constant must be StreamDraw, StreamRead, StreamCopy, StaticDraw, StaticRead, StaticCopy, DynamicDraw, DynamicRead, or DynamicCopy.
            |


#### BufferSubData
```csharp
OpenTK.Graphics.ES30.GL.BufferSubData(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Updates a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the offset into the buffer object's data store where data replacement will begin, measured in bytes.
            |
|size| 
            Specifies the size in bytes of the data store region being replaced.
            |
|data|[length: size] 
            Specifies a pointer to the new data that will be copied into the data store.
            |


#### BufferSubData``1
```csharp
OpenTK.Graphics.ES30.GL.BufferSubData``1(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Updates a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the offset into the buffer object's data store where data replacement will begin, measured in bytes.
            |
|size| 
            Specifies the size in bytes of the data store region being replaced.
            |
|data|[length: size] 
            Specifies a pointer to the new data that will be copied into the data store.
            |


#### CheckFramebufferStatus
```csharp
OpenTK.Graphics.ES30.GL.CheckFramebufferStatus(OpenTK.Graphics.ES30.FramebufferTarget)
```
[requires: v2.0 or ES_VERSION_2_0]
 Check the completeness status of a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the framebuffer completeness check.
            |


#### Clear
```csharp
OpenTK.Graphics.ES30.GL.Clear(OpenTK.Graphics.ES30.ClearBufferMask)
```
[requires: v2.0 or ES_VERSION_2_0]
 Clear buffers to preset values

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Bitwise OR of masks that indicate the buffers to be cleared. The three masks are ColorBufferBit, DepthBufferBit, and StencilBufferBit.
            |


#### ClearBuffer
```csharp
OpenTK.Graphics.ES30.GL.ClearBuffer(OpenTK.Graphics.ES30.ClearBuffer,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Clear individual buffers of the currently bound draw framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            Specify the buffer to clear.
            |
|drawbuffer| 
            Specify a particular draw buffer to clear.
            |
|value|[length: buffer] 
            For color buffers, a pointer to a four-element vector specifying R, G, B and A values to clear the buffer to. For depth buffers, a pointer to a single depth value to clear the buffer to. For stencil buffers, a pointer to a single stencil value to clear the buffer to.
            |


#### ClearColor
```csharp
OpenTK.Graphics.ES30.GL.ClearColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify clear values for the color buffers

|Parameter Name|Remarks|
|--------------|-------|
|red| 
            Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0.
            |
|green| 
            Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0.
            |
|blue| 
            Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0.
            |
|alpha| 
            Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0.
            |


#### ClearDepth
```csharp
OpenTK.Graphics.ES30.GL.ClearDepth(System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|d| 
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### ClearStencil
```csharp
OpenTK.Graphics.ES30.GL.ClearStencil(System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the clear value for the stencil buffer

|Parameter Name|Remarks|
|--------------|-------|
|s| 
            Specifies the index used when the stencil buffer is cleared. The initial value is 0.
            |


#### ClientWaitSync
```csharp
OpenTK.Graphics.ES30.GL.ClientWaitSync(System.IntPtr,OpenTK.Graphics.ES30.ClientWaitSyncFlags,System.UInt64)
```
[requires: v3.0 or ES_VERSION_3_0]
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


#### ColorMask
```csharp
OpenTK.Graphics.ES30.GL.ColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable and disable writing of frame buffer color components

|Parameter Name|Remarks|
|--------------|-------|
|red| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|green| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|blue| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|alpha| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |


#### CompileShader
```csharp
OpenTK.Graphics.ES30.GL.CompileShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Compiles a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be compiled.
            |


#### CompressedTexImage2D
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D and cube-mapped texture images that are at least 2048 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D and cube-mapped texture images that are at least 2048 texels high.
            |
|border| 
            This value must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexImage2D``1
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexImage2D``1(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D and cube-mapped texture images that are at least 2048 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D and cube-mapped texture images that are at least 2048 texels high.
            |
|border| 
            This value must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexImage3D
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexImage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,OpenTK.Graphics.ES30.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D, or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image.
            |
|height| 
            Specifies the height of the texture image.
            |
|depth| 
            Specifies the depth of the texture image.
            |
|border| 
            This value must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexImage3D``1
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexImage3D``1(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,OpenTK.Graphics.ES30.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D, or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image.
            |
|height| 
            Specifies the height of the texture image.
            |
|depth| 
            Specifies the depth of the texture image.
            |
|border| 
            This value must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage2D
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexSubImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|format| 
            Specifies the format of the compressed image data stored at address data.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage2D``1
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexSubImage2D``1(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|format| 
            Specifies the format of the compressed image data stored at address data.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage3D
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexSubImage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|zoffset| 
            Specifies a texel offset in the z direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|depth| 
            Specifies the depth of the texture subimage.
            |
|format| 
            Specifies the format of the compressed image data stored at address data.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage3D``1
```csharp
OpenTK.Graphics.ES30.GL.CompressedTexSubImage3D``1(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,System.Int32,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|zoffset| 
            Specifies a texel offset in the z direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|depth| 
            Specifies the depth of the texture subimage.
            |
|format| 
            Specifies the format of the compressed image data stored at address data.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CopyBufferSubData
```csharp
OpenTK.Graphics.ES30.GL.CopyBufferSubData(OpenTK.Graphics.ES30.BufferTarget,OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
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


#### CopyTexImage2D
```csharp
OpenTK.Graphics.ES30.GL.CopyTexImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.TextureCopyComponentCount,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Copy pixels into a 2D texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the internal format of the texture. Must be one of the following symbolic constants: Alpha, Luminance, LuminanceAlpha, Rgb, Rgba, R8, Rg8, Rgb565, Rgb8, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Srgb8, Srgb8Alpha8, R8i, R8ui, R16i, R16ui, R32i, R32ui, Rg8i, Rg8ui, Rg16i, Rg16ui, Rg32i, Rg32ui, Rgba8i, Rgba8ui, Rgb10A2ui, Rgba16i, Rgba16ui, Rgba32i, Rgba32ui.
            |
|x| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|width| 
            Specifies the width of the texture image.
            |
|height| 
            Specifies the height of the texture image.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |


#### CopyTexSubImage2D
```csharp
OpenTK.Graphics.ES30.GL.CopyTexSubImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Copy a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|x| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |


#### CopyTexSubImage3D
```csharp
OpenTK.Graphics.ES30.GL.CopyTexSubImage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Copy a three-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|zoffset| 
            Specifies a texel offset in the z direction within the texture array.
            |
|x| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |


#### CreateProgram
```csharp
OpenTK.Graphics.ES30.GL.CreateProgram
```
[requires: v2.0 or ES_VERSION_2_0]
 Creates a program object

#### CreateShader
```csharp
OpenTK.Graphics.ES30.GL.CreateShader(OpenTK.Graphics.ES30.ShaderType)
```
[requires: v2.0 or ES_VERSION_2_0]
 Creates a shader object

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the type of shader to be created. Must be one of VertexShader or FragmentShader.
            |


#### CullFace
```csharp
OpenTK.Graphics.ES30.GL.CullFace(OpenTK.Graphics.ES30.CullFaceMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify whether front- or back-facing polygons can be culled

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies whether front- or back-facing polygons are candidates for culling. Symbolic constants Front, Back, and FrontAndBack are accepted. The initial value is Back.
            |


#### DebugMessageCallback
```csharp
OpenTK.Graphics.ES30.GL.DebugMessageCallback(OpenTK.Graphics.ES30.DebugProc,System.IntPtr)
```
Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageCallback``1
```csharp
OpenTK.Graphics.ES30.GL.DebugMessageCallback``1(OpenTK.Graphics.ES30.DebugProc,``0@)
```
Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageControl
```csharp
OpenTK.Graphics.ES30.GL.DebugMessageControl(OpenTK.Graphics.ES30.DebugSourceControl,OpenTK.Graphics.ES30.DebugTypeControl,OpenTK.Graphics.ES30.DebugSeverityControl,System.Int32,System.UInt32*,System.Boolean)
```
Control the reporting of debug messages in a debug context

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of debug messages to enable or disable.
            |
|type| 
            The type of debug messages to enable or disable.
            |
|severity| 
            The severity of debug messages to enable or disable.
            |
|count| 
            The length of the array ids.
            |
|ids|[length: count] 
            The address of an array of unsigned integers contianing the ids of the messages to enable or disable.
            |
|enabled| 
            A Boolean flag determining whether the selected messages should be enabled or disabled.
            |


#### DebugMessageInsert
```csharp
OpenTK.Graphics.ES30.GL.DebugMessageInsert(OpenTK.Graphics.ES30.DebugSourceExternal,OpenTK.Graphics.ES30.DebugType,System.UInt32,OpenTK.Graphics.ES30.DebugSeverity,System.Int32,System.String)
```
Inject an application-supplied message into the debug message queue

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of the debug message to insert.
            |
|type| 
            The type of the debug message insert.
            |
|id| 
            The user-supplied identifier of the message to insert.
            |
|severity| 
            The severity of the debug messages to insert.
            |
|length| 
            The length string contained in the character array whose address is given by message.
            |
|buf|[length: buf,length] 
            The address of a character array containing the message to insert.
            |


#### DeleteBuffer
```csharp
OpenTK.Graphics.ES30.GL.DeleteBuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteBuffers
```csharp
OpenTK.Graphics.ES30.GL.DeleteBuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer objects to be deleted.
            |
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.DeleteFramebuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: n] 
            A pointer to an array containing n framebuffer objects to be deleted.
            |


#### DeleteFramebuffers
```csharp
OpenTK.Graphics.ES30.GL.DeleteFramebuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer objects to be deleted.
            |
|framebuffers|[length: n] 
            A pointer to an array containing n framebuffer objects to be deleted.
            |


#### DeleteProgram
```csharp
OpenTK.Graphics.ES30.GL.DeleteProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Deletes a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be deleted.
            |


#### DeleteQueries
```csharp
OpenTK.Graphics.ES30.GL.DeleteQueries(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of query objects to be deleted.
            |
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### DeleteQuery
```csharp
OpenTK.Graphics.ES30.GL.DeleteQuery(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### DeleteRenderbuffer
```csharp
OpenTK.Graphics.ES30.GL.DeleteRenderbuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: n] 
            A pointer to an array containing n renderbuffer objects to be deleted.
            |


#### DeleteRenderbuffers
```csharp
OpenTK.Graphics.ES30.GL.DeleteRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer objects to be deleted.
            |
|renderbuffers|[length: n] 
            A pointer to an array containing n renderbuffer objects to be deleted.
            |


#### DeleteSampler
```csharp
OpenTK.Graphics.ES30.GL.DeleteSampler(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete named sampler objects

|Parameter Name|Remarks|
|--------------|-------|
|samplers|[length: count] 
            Specifies an array of sampler objects to be deleted.
            |


#### DeleteSamplers
```csharp
OpenTK.Graphics.ES30.GL.DeleteSamplers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete named sampler objects

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of sampler objects to be deleted.
            |
|samplers|[length: count] 
            Specifies an array of sampler objects to be deleted.
            |


#### DeleteShader
```csharp
OpenTK.Graphics.ES30.GL.DeleteShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Deletes a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be deleted.
            |


#### DeleteSync
```csharp
OpenTK.Graphics.ES30.GL.DeleteSync(System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            The sync object to be deleted.
            |


#### DeleteTexture
```csharp
OpenTK.Graphics.ES30.GL.DeleteTexture(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteTextures
```csharp
OpenTK.Graphics.ES30.GL.DeleteTextures(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of textures to be deleted.
            |
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.DeleteTransformFeedback(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete transform feedback objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of names of transform feedback objects to delete.
            |


#### DeleteTransformFeedbacks
```csharp
OpenTK.Graphics.ES30.GL.DeleteTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete transform feedback objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of transform feedback objects to delete.
            |
|ids|[length: n] 
            Specifies an array of names of transform feedback objects to delete.
            |


#### DeleteVertexArray
```csharp
OpenTK.Graphics.ES30.GL.DeleteVertexArray(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DeleteVertexArrays
```csharp
OpenTK.Graphics.ES30.GL.DeleteVertexArrays(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array objects to be deleted.
            |
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DepthFunc
```csharp
OpenTK.Graphics.ES30.GL.DepthFunc(OpenTK.Graphics.ES30.DepthFunction)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value used for depth buffer comparisons

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the depth comparison function. Symbolic constants Never, Less, Equal, Lequal, Greater, Notequal, Gequal, and Always are accepted. The initial value is Less.
            |


#### DepthMask
```csharp
OpenTK.Graphics.ES30.GL.DepthMask(System.Boolean)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable or disable writing into the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|flag| 
            Specifies whether the depth buffer is enabled for writing. If flag is False, depth buffer writing is disabled. Otherwise, it is enabled. Initially, depth buffer writing is enabled.
            |


#### DepthRange
```csharp
OpenTK.Graphics.ES30.GL.DepthRange(System.Single,System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify mapping of depth values from normalized device coordinates to window coordinates

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|f| 
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DetachShader
```csharp
OpenTK.Graphics.ES30.GL.DetachShader(System.UInt32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Detaches a shader object from a program object to which it is attached

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object from which to detach the shader object.
            |
|shader| 
            Specifies the shader object to be detached.
            |


#### Disable
```csharp
OpenTK.Graphics.ES30.GL.Disable(OpenTK.Graphics.ES30.EnableCap)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|cap|-|


#### DisableVertexAttribArray
```csharp
OpenTK.Graphics.ES30.GL.DisableVertexAttribArray(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### DrawArrays
```csharp
OpenTK.Graphics.ES30.GL.DrawArrays(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

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


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.ES30.GL.DrawArraysInstanced(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawBuffers
```csharp
OpenTK.Graphics.ES30.GL.DrawBuffers(System.Int32,OpenTK.Graphics.ES30.DrawBufferMode*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specifies a list of color buffers to be drawn into

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffers in bufs.
            |
|bufs|[length: n] 
            Points to an array of symbolic constants specifying the buffers into which fragment colors or data values will be written.
            |


#### DrawElements
```csharp
OpenTK.Graphics.ES30.GL.DrawElements(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

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


#### DrawElements``1
```csharp
OpenTK.Graphics.ES30.GL.DrawElements``1(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

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


#### DrawElementsInstanced
```csharp
OpenTK.Graphics.ES30.GL.DrawElementsInstanced(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstanced``1
```csharp
OpenTK.Graphics.ES30.GL.DrawElementsInstanced``1(OpenTK.Graphics.ES30.PrimitiveType,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,``0@,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawRangeElements
```csharp
OpenTK.Graphics.ES30.GL.DrawRangeElements(OpenTK.Graphics.ES30.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan and Triangles are accepted.
            |
|start| 
            Specifies the minimum array index contained in indices.
            |
|end| 
            Specifies the maximum array index contained in indices.
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


#### DrawRangeElements``1
```csharp
OpenTK.Graphics.ES30.GL.DrawRangeElements``1(OpenTK.Graphics.ES30.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.ES30.DrawElementsType,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan and Triangles are accepted.
            |
|start| 
            Specifies the minimum array index contained in indices.
            |
|end| 
            Specifies the maximum array index contained in indices.
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


#### Enable
```csharp
OpenTK.Graphics.ES30.GL.Enable(OpenTK.Graphics.ES30.EnableCap)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable or disable server-side GL capabilities

|Parameter Name|Remarks|
|--------------|-------|
|cap| 
            Specifies a symbolic constant indicating a GL capability.
            |


#### EnableVertexAttribArray
```csharp
OpenTK.Graphics.ES30.GL.EnableVertexAttribArray(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable or disable a generic vertex attribute array

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be enabled or disabled.
            |


#### EndQuery
```csharp
OpenTK.Graphics.ES30.GL.EndQuery(OpenTK.Graphics.ES30.QueryTarget)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### EndTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.EndTransformFeedback
```
[requires: v3.0 or ES_VERSION_3_0]

#### FenceSync
```csharp
OpenTK.Graphics.ES30.GL.FenceSync(OpenTK.Graphics.ES30.SyncCondition,OpenTK.Graphics.ES30.WaitSyncFlags)
```
[requires: v3.0 or ES_VERSION_3_0]
 Create a new sync object and insert it into the GL command stream

|Parameter Name|Remarks|
|--------------|-------|
|condition| 
            Specifies the condition that must be met to set the sync object's state to signaled. condition must be SyncGpuCommandsComplete.
            |
|flags| 
            Specifies a bitwise combination of flags controlling the behavior of the sync object. No flags are presently defined for this operation and flags must be zero.flags is a placeholder for anticipated future extensions of fence sync object capabilities.
            |


#### Finish
```csharp
OpenTK.Graphics.ES30.GL.Finish
```
[requires: v2.0 or ES_VERSION_2_0]
 Block until all GL execution is complete

#### Flush
```csharp
OpenTK.Graphics.ES30.GL.Flush
```
[requires: v2.0 or ES_VERSION_2_0]
 Force execution of GL commands in finite time

#### FlushMappedBufferRange
```csharp
OpenTK.Graphics.ES30.GL.FlushMappedBufferRange(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Indicate modifications to a range of a mapped buffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the flush operation. target must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the start of the buffer subrange, in basic machine units.
            |
|length| 
            Specifies the length of the buffer subrange, in basic machine units.
            |


#### FramebufferRenderbuffer
```csharp
OpenTK.Graphics.ES30.GL.FramebufferRenderbuffer(OpenTK.Graphics.ES30.FramebufferTarget,OpenTK.Graphics.ES30.FramebufferAttachment,OpenTK.Graphics.ES30.RenderbufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attach a renderbuffer as a logical buffer to the currently bound framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer.
            |
|renderbuffertarget| 
            Specifies the renderbuffer target and must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the name of an existing renderbuffer object of type renderbuffertarget to attach.
            |


#### FramebufferTexture2D
```csharp
OpenTK.Graphics.ES30.GL.FramebufferTexture2D(OpenTK.Graphics.ES30.FramebufferTarget,OpenTK.Graphics.ES30.FramebufferAttachment,OpenTK.Graphics.ES30.TextureTarget2d,System.UInt32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attach a level of a texture object as a logical buffer to the currently bound framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer. attachment must be ColorAttachmenti, DepthAttachment, StencilAttachment or DepthStencilAttachment.
            |
|textarget| 
            Specifies a 2D texture target, or for cube map textures, which face is to be attached.
            |
|texture| 
            Specifies the texture object to attach to the framebuffer attachment point named by attachment.
            |
|level| 
            Specifies the mipmap level of texture to attach.
            |


#### FramebufferTextureLayer
```csharp
OpenTK.Graphics.ES30.GL.FramebufferTextureLayer(OpenTK.Graphics.ES30.FramebufferTarget,OpenTK.Graphics.ES30.FramebufferAttachment,System.UInt32,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Attach a single layer of a texture to a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer. attachment must be ColorAttachmenti, DepthAttachment, StencilAttachment or DepthStencilAttachmment.
            |
|texture| 
            Specifies the texture object to attach to the framebuffer attachment point named by attachment.
            |
|level| 
            Specifies the mipmap level of texture to attach.
            |
|layer| 
            Specifies the layer of texture to attach.
            |


#### FrontFace
```csharp
OpenTK.Graphics.ES30.GL.FrontFace(OpenTK.Graphics.ES30.FrontFaceDirection)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define front- and back-facing polygons

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies the orientation of front-facing polygons. Cw and Ccw are accepted. The initial value is Ccw.
            |


#### GenBuffer
```csharp
OpenTK.Graphics.ES30.GL.GenBuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate buffer object names

#### GenBuffers
```csharp
OpenTK.Graphics.ES30.GL.GenBuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate buffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer object names to be generated.
            |
|buffers|[length: n] 
            Specifies an array in which the generated buffer object names are stored.
            |


#### GenerateMipmap
```csharp
OpenTK.Graphics.ES30.GL.GenerateMipmap(OpenTK.Graphics.ES30.TextureTarget)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate mipmaps for a specified texture target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture whose mimaps to generate is bound. target must be Texture2D, Texture3D, Texture2DArray or TextureCubeMap.
            |


#### GenFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.GenFramebuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate framebuffer object names

#### GenFramebuffers
```csharp
OpenTK.Graphics.ES30.GL.GenFramebuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate framebuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer object names to generate.
            |
|framebuffers|[length: n] 
            Specifies an array in which the generated framebuffer object names are stored.
            |


#### GenQueries
```csharp
OpenTK.Graphics.ES30.GL.GenQueries(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate query object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of query object names to be generated.
            |
|ids|[length: n] 
            Specifies an array in which the generated query object names are stored.
            |


#### GenQuery
```csharp
OpenTK.Graphics.ES30.GL.GenQuery
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate query object names

#### GenRenderbuffer
```csharp
OpenTK.Graphics.ES30.GL.GenRenderbuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate renderbuffer object names

#### GenRenderbuffers
```csharp
OpenTK.Graphics.ES30.GL.GenRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate renderbuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer object names to generate.
            |
|renderbuffers|[length: n] 
            Specifies an array in which the generated renderbuffer object names are stored.
            |


#### GenSampler
```csharp
OpenTK.Graphics.ES30.GL.GenSampler
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate sampler object names

#### GenSamplers
```csharp
OpenTK.Graphics.ES30.GL.GenSamplers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate sampler object names

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of sampler object names to generate.
            |
|samplers|[length: count] 
            Specifies an array in which the generated sampler object names are stored.
            |


#### GenTexture
```csharp
OpenTK.Graphics.ES30.GL.GenTexture
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate texture names

#### GenTextures
```csharp
OpenTK.Graphics.ES30.GL.GenTextures(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate texture names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of texture names to be generated.
            |
|textures|[length: n] 
            Specifies an array in which the generated texture names are stored.
            |


#### GenTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.GenTransformFeedback
```
[requires: v3.0 or ES_VERSION_3_0]
 Reserve transform feedback object names

#### GenTransformFeedbacks
```csharp
OpenTK.Graphics.ES30.GL.GenTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Reserve transform feedback object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of transform feedback object names to reserve.
            |
|ids|[length: n] 
            Specifies an array of into which the reserved names will be written.
            |


#### GenVertexArray
```csharp
OpenTK.Graphics.ES30.GL.GenVertexArray
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate vertex array object names

#### GenVertexArrays
```csharp
OpenTK.Graphics.ES30.GL.GenVertexArrays(System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Generate vertex array object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array object names to generate.
            |
|arrays|[length: n] 
            Specifies an array in which the generated vertex array object names are stored.
            |


#### GetActiveAttrib
```csharp
OpenTK.Graphics.ES30.GL.GetActiveAttrib(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.ES30.All*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns information about an active attribute variable for the specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|index| 
            Specifies the index of the attribute variable to be queried.
            |
|bufSize| 
            Specifies the maximum number of characters OpenGL is allowed to write in the character buffer indicated by name.
            |
|length|[length: 1] 
            Returns the number of characters actually written by OpenGL in the string indicated by name (excluding the null terminator) if a value other than Null is passed.
            |
|size|[length: 1] 
            Returns the size of the attribute variable.
            |
|type|[length: 1] 
            Returns the data type of the attribute variable.
            |
|name|[length: bufSize] 
            Returns a null terminated string containing the name of the attribute variable.
            |


#### GetActiveUniform
```csharp
OpenTK.Graphics.ES30.GL.GetActiveUniform(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.ES30.All*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns information about an active uniform variable for the specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|index| 
            Specifies the index of the uniform variable to be queried.
            |
|bufSize| 
            Specifies the maximum number of characters OpenGL is allowed to write in the character buffer indicated by name.
            |
|length|[length: 1] 
            Returns the number of characters actually written by OpenGL in the string indicated by name (excluding the null terminator) if a value other than Null is passed.
            |
|size|[length: 1] 
            Returns the size of the uniform variable.
            |
|type|[length: 1] 
            Returns the data type of the uniform variable.
            |
|name|[length: bufSize] 
            Returns a null terminated string containing the name of the uniform variable.
            |


#### GetActiveUniformBlock
```csharp
OpenTK.Graphics.ES30.GL.GetActiveUniformBlock(System.UInt32,System.UInt32,OpenTK.Graphics.ES30.All,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Query information about an active uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program containing the uniform block.
            |
|uniformBlockIndex| 
            Specifies the index of the uniform block within program.
            |
|pname| 
            Specifies the name of the parameter to query.
            |
|@params|[length: program, uniformBlockIndex, pname] 
            Specifies the address of a variable to receive the result of the query.
            |


#### GetActiveUniformBlockName
```csharp
OpenTK.Graphics.ES30.GL.GetActiveUniformBlockName(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v3.0 or ES_VERSION_3_0]
 Retrieve the name of an active uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program containing the uniform block.
            |
|uniformBlockIndex| 
            Specifies the index of the uniform block within program.
            |
|bufSize| 
            Specifies the size of the buffer addressed by uniformBlockName.
            |
|length|[length: 1] 
            Specifies the address of a variable to receive the number of characters that were written to uniformBlockName.
            |
|uniformBlockName|[length: bufSize] 
            Specifies the address an array of characters to receive the name of the uniform block at uniformBlockIndex.
            |


#### GetActiveUniforms
```csharp
OpenTK.Graphics.ES30.GL.GetActiveUniforms(System.UInt32,System.Int32,System.UInt32*,OpenTK.Graphics.ES30.All,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Returns information about several active uniform variables for the specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|uniformCount| 
            Specifies both the number of elements in the array of indices uniformIndices and the number of parameters written to params upon successful return.
            |
|uniformIndices|[length: uniformCount] 
            Specifies the address of an array of uniformCount integers containing the indices of uniforms within program whose parameter pname should be queried.
            |
|pname| 
            Specifies the property of each uniform in uniformIndices that should be written into the corresponding element of params.
            |
|@params|[length: uniformCount, pname] 
            Specifies the address of an array of uniformCount integers which are to receive the value of pname for each uniform in uniformIndices.
            |


#### GetAttachedShaders
```csharp
OpenTK.Graphics.ES30.GL.GetAttachedShaders(System.UInt32,System.Int32,System.Int32*,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the handles of the shader objects attached to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|maxCount| 
            Specifies the size of the array for storing the returned object names.
            |
|count|[length: 1] 
            Returns the number of names actually returned in shaders.
            |
|shaders|[length: maxCount] 
            Specifies an array that is used to return the names of attached shader objects.
            |


#### GetAttribLocation
```csharp
OpenTK.Graphics.ES30.GL.GetAttribLocation(System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the location of an attribute variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|name| 
            Points to a null terminated string containing the name of the attribute variable whose location is to be queried.
            |


#### GetBoolean
```csharp
OpenTK.Graphics.ES30.GL.GetBoolean(OpenTK.Graphics.ES30.GetPName,System.Boolean*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetBufferParameter
```csharp
OpenTK.Graphics.ES30.GL.GetBufferParameter(OpenTK.Graphics.ES30.BufferTarget,OpenTK.Graphics.ES30.BufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return parameters of a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, ElementArrayBuffer, PixelPackBuffer, or PixelUnpackBuffer.
            |
|pname| 
            Specifies the symbolic name of a buffer object parameter. Accepted values are BufferAccess, BufferMapped, BufferSize, or BufferUsage.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetBufferPointer
```csharp
OpenTK.Graphics.ES30.GL.GetBufferPointer(OpenTK.Graphics.ES30.BufferTarget,OpenTK.Graphics.ES30.BufferPointer,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return the pointer to a mapped buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the pointer to be returned.  The symbolic constant must be BufferMapPointer.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetBufferPointer``1
```csharp
OpenTK.Graphics.ES30.GL.GetBufferPointer``1(OpenTK.Graphics.ES30.BufferTarget,OpenTK.Graphics.ES30.BufferPointer,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return the pointer to a mapped buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the pointer to be returned.  The symbolic constant must be BufferMapPointer.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.ES30.GL.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.ES30.DebugSourceExternal*,OpenTK.Graphics.ES30.DebugType*,System.UInt32*,OpenTK.Graphics.ES30.DebugSeverity*,System.Int32*,System.Text.StringBuilder)
```
Retrieve messages from the debug message log

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            The number of debug messages to retrieve from the log.
            |
|bufSize| 
            The size of the buffer whose address is given by messageLog.
            |
|sources|[length: count] 
            The address of an array of variables to receive the sources of the retrieved messages.
            |
|types|[length: count] 
            The address of an array of variables to receive the types of the retrieved messages.
            |
|ids|[length: count] 
            The address of an array of unsigned integers to receive the ids of the retrieved messages.
            |
|severities|[length: count] 
            The address of an array of variables to receive the severites of the retrieved messages.
            |
|lengths|[length: count] 
            The address of an array of variables to receive the lengths of the received messages.
            |
|messageLog|[length: bufSize] 
            The address of an array of characters that will receive the messages.
            |


#### GetError
```csharp
OpenTK.Graphics.ES30.GL.GetError
```
[requires: v2.0 or ES_VERSION_2_0]
 Return error information

#### GetFloat
```csharp
OpenTK.Graphics.ES30.GL.GetFloat(OpenTK.Graphics.ES30.GetPName,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetFragDataLocation
```csharp
OpenTK.Graphics.ES30.GL.GetFragDataLocation(System.UInt32,System.String)
```
[requires: v3.0 or ES_VERSION_3_0]
 Query the bindings of color numbers to user-defined varying out variables

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the program containing varying out variable whose binding to query
            |
|name|[length: name] 
            The name of the user-defined varying out variable whose binding to query
            |


#### GetFramebufferAttachmentParameter
```csharp
OpenTK.Graphics.ES30.GL.GetFramebufferAttachmentParameter(OpenTK.Graphics.ES30.FramebufferTarget,OpenTK.Graphics.ES30.FramebufferAttachment,OpenTK.Graphics.ES30.FramebufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Retrieve information about attachments of a bound framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the query operation.
            |
|attachment| 
            Specifies the attachment within target
            |
|pname| 
            Specifies the parameter of attachment to query.
            |
|@params|[length: pname] 
            Specifies the address of a variable receive the value of pname for attachment.
            |


#### GetInteger
```csharp
OpenTK.Graphics.ES30.GL.GetInteger(OpenTK.Graphics.ES30.GetPName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetInteger64
```csharp
OpenTK.Graphics.ES30.GL.GetInteger64(OpenTK.Graphics.ES30.GetPName,System.Int64*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetInternalformat
```csharp
OpenTK.Graphics.ES30.GL.GetInternalformat(OpenTK.Graphics.ES30.ImageTarget,OpenTK.Graphics.ES30.SizedInternalFormat,OpenTK.Graphics.ES30.InternalFormatParameter,System.Int32,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Retrieve information about implementation-dependent support for internal formats

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Indicates the usage of the internal format. target must be Renderbuffer.
            |
|internalformat| 
            Specifies the internal format about which to retrieve information.
            |
|pname| 
            Specifies the type of information to query.
            |
|bufSize| 
            Specifies the maximum number of integers that may be written to params by the function.
            |
|@params|[length: bufSize] 
            Specifies the address of a variable into which to write the retrieved information.
            |


#### GetObjectLabel
```csharp
OpenTK.Graphics.ES30.GL.GetObjectLabel(OpenTK.Graphics.ES30.ObjectLabelIdentifier,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
Retrieve the label of a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|identifier| 
            The namespace from which the name of the object is allocated.
            |
|name| 
            The name of the object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length|[length: 1] 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetObjectPtrLabel
```csharp
OpenTK.Graphics.ES30.GL.GetObjectPtrLabel(System.IntPtr,System.Int32,System.Int32*,System.Text.StringBuilder)
```
Retrieve the label of a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            The name of the sync object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length|[length: 1] 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetObjectPtrLabel``1
```csharp
OpenTK.Graphics.ES30.GL.GetObjectPtrLabel``1(``0@,System.Int32,System.Int32*,System.Text.StringBuilder)
```
Retrieve the label of a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            The name of the sync object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length|[length: 1] 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetPointer
```csharp
OpenTK.Graphics.ES30.GL.GetPointer(OpenTK.Graphics.ES30.GetPointervPName,System.IntPtr)
```
Return the address of the specified pointer

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the array or buffer pointer to be returned. Symbolic constants ColorArrayPointer, EdgeFlagArrayPointer, FogCoordArrayPointer, FeedbackBufferPointer, IndexArrayPointer, NormalArrayPointer, SecondaryColorArrayPointer, SelectionBufferPointer, TextureCoordArrayPointer, or VertexArrayPointer are accepted.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetPointer``1
```csharp
OpenTK.Graphics.ES30.GL.GetPointer``1(OpenTK.Graphics.ES30.GetPointervPName,``0@)
```
Return the address of the specified pointer

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the array or buffer pointer to be returned. Symbolic constants ColorArrayPointer, EdgeFlagArrayPointer, FogCoordArrayPointer, FeedbackBufferPointer, IndexArrayPointer, NormalArrayPointer, SecondaryColorArrayPointer, SelectionBufferPointer, TextureCoordArrayPointer, or VertexArrayPointer are accepted.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetProgram
```csharp
OpenTK.Graphics.ES30.GL.GetProgram(System.UInt32,OpenTK.Graphics.ES30.GetProgramParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns a parameter from a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are ActiveAttributes, ActiveAttributeMaxLength, ActiveUniforms, ActiveUniformBlocks, ActiveUniformBlockMaxNameLength, ActiveUniformMaxLength, AttachedShaders, DeleteStatus, InfoLogLength, LinkStatus, ProgramBinaryRetrievableHint, TransformFeedbackBufferMode, TransformFeedbackVaryings, TransformFeedbackVaryingMaxLength and ValidateStatus.
            |
|@params|[length: pname] 
            Returns the requested object parameter.
            |


#### GetProgramBinary
```csharp
OpenTK.Graphics.ES30.GL.GetProgramBinary(System.UInt32,System.Int32,System.Int32*,OpenTK.Graphics.ES30.All*,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return a binary representation of a program object's compiled and linked executable source

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object whose binary representation to retrieve.
            |
|bufSize| 
            Specifies the size of the buffer whose address is given by binary.
            |
|length|[length: 1] 
            Specifies the address of a variable to receive the number of bytes written into binary.
            |
|binaryFormat|[length: 1] 
            Specifies the address of a variable to receive a token indicating the format of the binary data returned by the GL.
            |
|binary|[length: bufSize] 
            Specifies the address an array into which the GL will return program's binary representation.
            |


#### GetProgramBinary``1
```csharp
OpenTK.Graphics.ES30.GL.GetProgramBinary``1(System.UInt32,System.Int32,System.Int32*,OpenTK.Graphics.ES30.All*,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return a binary representation of a program object's compiled and linked executable source

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object whose binary representation to retrieve.
            |
|bufSize| 
            Specifies the size of the buffer whose address is given by binary.
            |
|length|[length: 1] 
            Specifies the address of a variable to receive the number of bytes written into binary.
            |
|binaryFormat|[length: 1] 
            Specifies the address of a variable to receive a token indicating the format of the binary data returned by the GL.
            |
|binary|[length: bufSize] 
            Specifies the address an array into which the GL will return program's binary representation.
            |


#### GetProgramInfoLog
```csharp
OpenTK.Graphics.ES30.GL.GetProgramInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the information log for a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object whose information log is to be queried.
            |
|bufSize| 
            Specifies the size of the character buffer for storing the returned information log.
            |
|length|[length: 1] 
            Returns the length of the string returned in infoLog (excluding the null terminator).
            |
|infoLog|[length: bufSize] 
            Specifies an array of characters that is used to return the information log.
            |


#### GetQuery
```csharp
OpenTK.Graphics.ES30.GL.GetQuery(OpenTK.Graphics.ES30.QueryTarget,OpenTK.Graphics.ES30.GetQueryParam,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return parameters of a query object target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a query object target. Must be AnySamplesPassed, AnySamplesPassedConservative, or TransformFeedbackPrimitivesWritten.
            |
|pname| 
            Specifies the symbolic name of a query object target parameter. Must be CurrentQuery.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetQueryObject
```csharp
OpenTK.Graphics.ES30.GL.GetQueryObject(System.UInt32,OpenTK.Graphics.ES30.GetQueryObjectParam,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return parameters of a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies the name of a query object.
            |
|pname| 
            Specifies the symbolic name of a query object parameter. Accepted values are QueryResult or QueryResultAvailable.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetRenderbufferParameter
```csharp
OpenTK.Graphics.ES30.GL.GetRenderbufferParameter(OpenTK.Graphics.ES30.RenderbufferTarget,OpenTK.Graphics.ES30.RenderbufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Retrieve information about a bound renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the query operation. target must be Renderbuffer.
            |
|pname| 
            Specifies the parameter whose value to retrieve from the renderbuffer bound to target.
            |
|@params|[length: pname] 
            Specifies the address of an array to receive the value of the queried parameter.
            |


#### GetSamplerParameter
```csharp
OpenTK.Graphics.ES30.GL.GetSamplerParameter(System.UInt32,OpenTK.Graphics.ES30.SamplerParameterName,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return sampler parameter values

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies name of the sampler object from which to retrieve parameters.
            |
|pname| 
            Specifies the symbolic name of a sampler parameter. TextureMagFilter, TextureMinFilter, TextureMinLod, TextureMaxLod, TextureWrapS, TextureWrapT, TextureWrapR, TextureCompareMode, and TextureCompareFunc are accepted.
            |
|@params|[length: pname] 
            Returns the sampler parameters.
            |


#### GetShader
```csharp
OpenTK.Graphics.ES30.GL.GetShader(System.UInt32,OpenTK.Graphics.ES30.ShaderParameter,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns a parameter from a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are ShaderType, DeleteStatus, CompileStatus, InfoLogLength, ShaderSourceLength.
            |
|@params|[length: pname] 
            Returns the requested object parameter.
            |


#### GetShaderInfoLog
```csharp
OpenTK.Graphics.ES30.GL.GetShaderInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the information log for a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object whose information log is to be queried.
            |
|bufSize| 
            Specifies the size of the character buffer for storing the returned information log.
            |
|length|[length: 1] 
            Returns the length of the string returned in infoLog (excluding the null terminator).
            |
|infoLog|[length: bufSize] 
            Specifies an array of characters that is used to return the information log.
            |


#### GetShaderPrecisionFormat
```csharp
OpenTK.Graphics.ES30.GL.GetShaderPrecisionFormat(OpenTK.Graphics.ES30.ShaderType,OpenTK.Graphics.ES30.ShaderPrecision,System.Int32*,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Retrieve the range and precision for numeric formats supported by the shader compiler

|Parameter Name|Remarks|
|--------------|-------|
|shadertype| 
            Specifies the type of shader whose precision to query. shaderType must be VertexShader or FragmentShader.
            |
|precisiontype| 
            Specifies the numeric format whose precision and range to query.
            |
|range|[length: 2] 
            Specifies the address of array of two integers into which encodings of the implementation's numeric range are returned.
            |
|precision|[length: 2] 
            Specifies the address of an integer into which the numeric precision of the implementation is written.
            |


#### GetShaderSource
```csharp
OpenTK.Graphics.ES30.GL.GetShaderSource(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the source code string from a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be queried.
            |
|bufSize| 
            Specifies the size of the character buffer for storing the returned source code string.
            |
|length|[length: 1] 
            Returns the length of the string returned in source (excluding the null terminator).
            |
|source|[length: bufSize] 
            Specifies an array of characters that is used to return the source code string.
            |


#### GetString
```csharp
OpenTK.Graphics.ES30.GL.GetString(OpenTK.Graphics.ES30.StringNameIndexed,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Return a string describing the current GL connection

|Parameter Name|Remarks|
|--------------|-------|
|name| 
            Specifies a symbolic constant, one of Extensions, Renderer, ShadingLanguageVersion, Vendor, or Version. glGetStringi accepts only the Extensions token.
            |
|index| 
            For glGetStringi, specifies the index of the string to return.
            |


#### GetSync
```csharp
OpenTK.Graphics.ES30.GL.GetSync(System.IntPtr,OpenTK.Graphics.ES30.SyncParameterName,System.Int32,System.Int32*,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
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
|length|[length: 1] 
            Specifies the address of an variable to receive the number of integers placed in values.
            |
|values|[length: bufSize] 
            Specifies the address of an array to receive the values of the queried parameter.
            |


#### GetTexParameter
```csharp
OpenTK.Graphics.ES30.GL.GetTexParameter(OpenTK.Graphics.ES30.TextureTarget,OpenTK.Graphics.ES30.GetTextureParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return texture parameter values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the symbolic name of the target texture. Texture2D, Texture2DArray, Texture3D, and TextureCubeMap are accepted.
            |
|pname| 
            Specifies the symbolic name of a texture parameter. TextureBaseLevel, TextureCompareFunc, TextureCompareMode, TextureImmutableFormat, TextureMagFilter, TextureMaxLevel, TextureMaxLod, TextureMinFilter, TextureMinLod, TextureSwizzleR, TextureSwizzleG, TextureSwizzleB, TextureSwizzleA, TextureWrapS, TextureWrapT, and TextureWrapR are accepted.
            |
|@params|[length: pname] 
            Returns the texture parameters.
            |


#### GetTransformFeedbackVarying
```csharp
OpenTK.Graphics.ES30.GL.GetTransformFeedbackVarying(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.ES30.TransformFeedbackType*,System.Text.StringBuilder)
```
[requires: v3.0 or ES_VERSION_3_0]
 Retrieve information about varying variables selected for transform feedback

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the target program object.
            |
|index| 
            The index of the varying variable whose information to retrieve.
            |
|bufSize| 
            The maximum number of characters, including the null terminator, that may be written into name.
            |
|length|[length: 1] 
            The address of a variable which will receive the number of characters written into name, excluding the null-terminator. If length is Null no length is returned.
            |
|size|[length: 1] 
            The address of a variable that will receive the size of the varying.
            |
|type|[length: 1] 
            The address of a variable that will recieve the type of the varying.
            |
|name|[length: bufSize] 
            The address of a buffer into which will be written the name of the varying.
            |


#### GetUniform
```csharp
OpenTK.Graphics.ES30.GL.GetUniform(System.UInt32,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Returns the value of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|location| 
            Specifies the location of the uniform variable to be queried.
            |
|@params|[length: program,location] 
            Returns the value of the specified uniform variable.
            |


#### GetUniformBlockIndex
```csharp
OpenTK.Graphics.ES30.GL.GetUniformBlockIndex(System.UInt32,System.String)
```
[requires: v3.0 or ES_VERSION_3_0]
 Retrieve the index of a named uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program containing the uniform block.
            |
|uniformBlockName| 
            Specifies the address an array of characters containing the name of the uniform block whose index to retrieve.
            |


#### GetUniformIndices
```csharp
OpenTK.Graphics.ES30.GL.GetUniformIndices(System.UInt32,System.Int32,System.String[],System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Retrieve the index of a named uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program containing uniforms whose indices to query.
            |
|uniformCount| 
            Specifies the number of uniforms whose indices to query.
            |
|uniformNames|[length: uniformCount] 
            Specifies the address of an array of pointers to buffers containing the names of the queried uniforms.
            |
|uniformIndices|[length: uniformCount] 
            Specifies the address of an array that will receive the indices of the uniforms.
            |


#### GetUniformLocation
```csharp
OpenTK.Graphics.ES30.GL.GetUniformLocation(System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Returns the location of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|name| 
            Points to a null terminated string containing the name of the uniform variable whose location is to be queried.
            |


#### GetVertexAttrib
```csharp
OpenTK.Graphics.ES30.GL.GetVertexAttrib(System.UInt32,OpenTK.Graphics.ES30.VertexAttribParameter,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return a generic vertex attribute parameter

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the generic vertex attribute parameter to be queried.
            |
|pname| 
            Specifies the symbolic name of the vertex attribute parameter to be queried. Accepted values are VertexAttribArrayBufferBinding, VertexAttribArrayEnabled, VertexAttribArraySize, VertexAttribArrayStride, VertexAttribArrayType, VertexAttribArrayNormalized, VertexAttribArrayInteger, VertexAttribArrayDivisor, or CurrentVertexAttrib.
            |
|@params|[length: 4] 
            Returns the requested data.
            |


#### GetVertexAttribI
```csharp
OpenTK.Graphics.ES30.GL.GetVertexAttribI(System.UInt32,OpenTK.Graphics.ES30.All,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: 1]|


#### GetVertexAttribPointer
```csharp
OpenTK.Graphics.ES30.GL.GetVertexAttribPointer(System.UInt32,OpenTK.Graphics.ES30.VertexAttribPointerParameter,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the address of the specified generic vertex attribute pointer

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the generic vertex attribute parameter to be returned.
            |
|pname| 
            Specifies the symbolic name of the generic vertex attribute parameter to be returned. Must be VertexAttribArrayPointer.
            |
|pointer|[length: 1] 
            Returns the pointer value.
            |


#### GetVertexAttribPointer``1
```csharp
OpenTK.Graphics.ES30.GL.GetVertexAttribPointer``1(System.UInt32,OpenTK.Graphics.ES30.VertexAttribPointerParameter,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the address of the specified generic vertex attribute pointer

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the generic vertex attribute parameter to be returned.
            |
|pname| 
            Specifies the symbolic name of the generic vertex attribute parameter to be returned. Must be VertexAttribArrayPointer.
            |
|pointer|[length: 1] 
            Returns the pointer value.
            |


#### Hint
```csharp
OpenTK.Graphics.ES30.GL.Hint(OpenTK.Graphics.ES30.HintTarget,OpenTK.Graphics.ES30.HintMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify implementation-specific hints

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating the behavior to be controlled. FragmentShaderDerivativeHint, and GenerateMipmapHint are accepted.
            |
|mode| 
            Specifies a symbolic constant indicating the desired behavior. Fastest, Nicest, and DontCare are accepted.
            |


#### InvalidateFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.InvalidateFramebuffer(OpenTK.Graphics.ES30.FramebufferTarget,System.Int32,OpenTK.Graphics.ES30.FramebufferAttachment*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Invalidate the contents of attachments within a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the invalidate operation. Must be Framebuffer.
            |
|numAttachments| 
            Specifies how many attachments are supplied in the attachments list.
            |
|attachments|[length: numAttachments] 
            A list of numAttachments attachments to invalidate.
            |


#### InvalidateSubFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.InvalidateSubFramebuffer(OpenTK.Graphics.ES30.FramebufferTarget,System.Int32,OpenTK.Graphics.ES30.FramebufferAttachment*,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Invalidate portions of the contents of attachments within a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the invalidate operation. Must be Framebuffer.
            |
|numAttachments| 
            Specifies how many attachments are supplied in the attachments list.
            |
|attachments|[length: numAttachments] 
            A list of numAttachments attachments to invalidate.
            |
|x| 
            Specifies the left origin of the pixel rectangle to invalidate, with lower left hand corner at (0,0).
            |
|y| 
            Specifies the bottom origin of the pixel rectangle to invalidate, with lower left hand corner at (0,0).
            |
|width| 
            Specifies the width of the pixel rectangle to invalidate.
            |
|height| 
            Specifies the height of the pixel rectangle to invalidate.
            |


#### IsBuffer
```csharp
OpenTK.Graphics.ES30.GL.IsBuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            Specifies a value that may be the name of a buffer object.
            |


#### IsEnabled
```csharp
OpenTK.Graphics.ES30.GL.IsEnabled(OpenTK.Graphics.ES30.EnableCap)
```
[requires: v2.0 or ES_VERSION_2_0]
 Test whether a capability is enabled

|Parameter Name|Remarks|
|--------------|-------|
|cap| 
            Specifies a symbolic constant indicating a GL capability.
            |


#### IsFramebuffer
```csharp
OpenTK.Graphics.ES30.GL.IsFramebuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer| 
            Specifies a value that may be the name of a framebuffer object.
            |


#### IsProgram
```csharp
OpenTK.Graphics.ES30.GL.IsProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determines if a name corresponds to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies a potential program object.
            |


#### IsQuery
```csharp
OpenTK.Graphics.ES30.GL.IsQuery(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Determine if a name corresponds to a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a query object.
            |


#### IsRenderbuffer
```csharp
OpenTK.Graphics.ES30.GL.IsRenderbuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer| 
            Specifies a value that may be the name of a renderbuffer object.
            |


#### IsSampler
```csharp
OpenTK.Graphics.ES30.GL.IsSampler(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Determine if a name corresponds to a sampler object

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies a value that may be the name of a sampler object.
            |


#### IsShader
```csharp
OpenTK.Graphics.ES30.GL.IsShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determines if a name corresponds to a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies a potential shader object.
            |


#### IsSync
```csharp
OpenTK.Graphics.ES30.GL.IsSync(System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Determine if a name corresponds to a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies a value that may be the name of a sync object.
            |


#### IsTexture
```csharp
OpenTK.Graphics.ES30.GL.IsTexture(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a texture

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies a value that may be the name of a texture.
            |


#### IsTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.IsTransformFeedback(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Determine if a name corresponds to a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a transform feedback object.
            |


#### IsVertexArray
```csharp
OpenTK.Graphics.ES30.GL.IsVertexArray(System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Determine if a name corresponds to a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies a value that may be the name of a vertex array object.
            |


#### LineWidth
```csharp
OpenTK.Graphics.ES30.GL.LineWidth(System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the width of rasterized lines

|Parameter Name|Remarks|
|--------------|-------|
|width| 
            Specifies the width of rasterized lines. The initial value is 1.
            |


#### LinkProgram
```csharp
OpenTK.Graphics.ES30.GL.LinkProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Links a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be linked.
            |


#### MapBufferRange
```csharp
OpenTK.Graphics.ES30.GL.MapBufferRange(OpenTK.Graphics.ES30.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.ES30.BufferAccessMask)
```
[requires: v3.0 or ES_VERSION_3_0]
 Map a section of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target buffer is bound.
            |
|offset| 
            Specifies the starting offset within the buffer of the range to be mapped.
            |
|length| 
            Specifies the length of the range to be mapped.
            |
|access| 
            Specifies a combination of access flags indicating the desired access to the range.
            |


#### ObjectLabel
```csharp
OpenTK.Graphics.ES30.GL.ObjectLabel(OpenTK.Graphics.ES30.ObjectLabelIdentifier,System.UInt32,System.Int32,System.String)
```
Label a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|identifier| 
            The namespace from which the name of the object is allocated.
            |
|name| 
            The name of the object to label.
            |
|length| 
            The length of the label to be used for the object.
            |
|label|[length: label,length] 
            The address of a string containing the label to assign to the object.
            |


#### ObjectPtrLabel
```csharp
OpenTK.Graphics.ES30.GL.ObjectPtrLabel(System.IntPtr,System.Int32,System.String)
```
Label a a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            A pointer identifying a sync object.
            |
|length| 
            The length of the label to be used for the object.
            |
|label|[length: label,length] 
            The address of a string containing the label to assign to the object.
            |


#### ObjectPtrLabel``1
```csharp
OpenTK.Graphics.ES30.GL.ObjectPtrLabel``1(``0@,System.Int32,System.String)
```
Label a a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            A pointer identifying a sync object.
            |
|length| 
            The length of the label to be used for the object.
            |
|label|[length: label,length] 
            The address of a string containing the label to assign to the object.
            |


#### PauseTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.PauseTransformFeedback
```
[requires: v3.0 or ES_VERSION_3_0]
 Pause transform feedback operations

#### PixelStore
```csharp
OpenTK.Graphics.ES30.GL.PixelStore(OpenTK.Graphics.ES30.PixelStoreParameter,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set pixel storage modes

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the symbolic name of the parameter to be set. Six values affect the packing of pixel data into memory: PackRowLength, PackImageHeight, PackSkipPixels, PackSkipRows, PackSkipImages, and PackAlignment. Six more affect the unpacking of pixel data from memory: UnpackRowLength, UnpackImageHeight, UnpackSkipPixels, UnpackSkipRows, UnpackSkipImages, and UnpackAlignment.
            |
|param| 
            Specifies the value that pname is set to.
            |


#### PolygonOffset
```csharp
OpenTK.Graphics.ES30.GL.PolygonOffset(System.Single,System.Single)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set the scale and units used to calculate depth values

|Parameter Name|Remarks|
|--------------|-------|
|factor| 
            Specifies a scale factor that is used to create a variable depth offset for each polygon. The initial value is 0.
            |
|units| 
            Is multiplied by an implementation-specific value to create a constant depth offset. The initial value is 0.
            |


#### PopDebugGroup
```csharp
OpenTK.Graphics.ES30.GL.PopDebugGroup
```
Pop the active debug group

#### ProgramBinary
```csharp
OpenTK.Graphics.ES30.GL.ProgramBinary(System.UInt32,OpenTK.Graphics.ES30.All,System.IntPtr,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Load a program object with a program binary

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object into which to load a program binary.
            |
|binaryFormat| 
            Specifies the format of the binary data in binary.
            |
|binary|[length: length] 
            Specifies the address of an array containing the binary to be loaded into program.
            |
|length| 
            Specifies the number of bytes contained in binary.
            |


#### ProgramBinary``1
```csharp
OpenTK.Graphics.ES30.GL.ProgramBinary``1(System.UInt32,OpenTK.Graphics.ES30.All,``0@,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Load a program object with a program binary

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object into which to load a program binary.
            |
|binaryFormat| 
            Specifies the format of the binary data in binary.
            |
|binary|[length: length] 
            Specifies the address of an array containing the binary to be loaded into program.
            |
|length| 
            Specifies the number of bytes contained in binary.
            |


#### ProgramParameter
```csharp
OpenTK.Graphics.ES30.GL.ProgramParameter(System.UInt32,OpenTK.Graphics.ES30.ProgramParameterName,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a parameter for a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object whose parameter to modify.
            |
|pname| 
            Specifies the name of the parameter to modify.
            |
|value| 
            Specifies the new value of the parameter specified by pname for program.
            |


#### PushDebugGroup
```csharp
OpenTK.Graphics.ES30.GL.PushDebugGroup(OpenTK.Graphics.ES30.All,System.UInt32,System.Int32,System.String)
```
Push a named debug group into the command stream

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of the debug message.
            |
|id| 
            The identifier of the message.
            |
|length| 
            The length of the message to be sent to the debug output stream.
            |
|message|[length: message,length] 
            The a string containing the message to be sent to the debug output stream.
            |


#### ReadBuffer
```csharp
OpenTK.Graphics.ES30.GL.ReadBuffer(OpenTK.Graphics.ES30.ReadBufferMode)
```
[requires: v3.0 or ES_VERSION_3_0]
 Select a color buffer source for pixels

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies a color buffer. Accepted values are Back, None, and ColorAttachmenti.
            |


#### ReadPixels
```csharp
OpenTK.Graphics.ES30.GL.ReadPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Read a block of pixels from the frame buffer

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|y| 
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|width| 
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|height| 
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Rgba, and RgbaInteger. An implementation-chosen format will also be accepted. This can be queried with glGet and ImplementationColorReadFormat.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, UnsignedInt, Int, or Float. An implementation-chosen type will also be accepted. This can be queried with glGet and ImplementationColorReadType.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReadPixels``1
```csharp
OpenTK.Graphics.ES30.GL.ReadPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Read a block of pixels from the frame buffer

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|y| 
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|width| 
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|height| 
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Rgba, and RgbaInteger. An implementation-chosen format will also be accepted. This can be queried with glGet and ImplementationColorReadFormat.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, UnsignedInt, Int, or Float. An implementation-chosen type will also be accepted. This can be queried with glGet and ImplementationColorReadType.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReleaseShaderCompiler
```csharp
OpenTK.Graphics.ES30.GL.ReleaseShaderCompiler
```
[requires: v2.0 or ES_VERSION_2_0]
 Release resources consumed by the implementation's shader compiler

#### RenderbufferStorage
```csharp
OpenTK.Graphics.ES30.GL.RenderbufferStorage(OpenTK.Graphics.ES30.RenderbufferTarget,OpenTK.Graphics.ES30.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Establish data storage, format and dimensions of a renderbuffer object's image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target of the allocation and must be Renderbuffer.
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


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES30.GL.RenderbufferStorageMultisample(OpenTK.Graphics.ES30.RenderbufferTarget,System.Int32,OpenTK.Graphics.ES30.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
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


#### ResumeTransformFeedback
```csharp
OpenTK.Graphics.ES30.GL.ResumeTransformFeedback
```
[requires: v3.0 or ES_VERSION_3_0]
 Resume transform feedback operations

#### SampleCoverage
```csharp
OpenTK.Graphics.ES30.GL.SampleCoverage(System.Single,System.Boolean)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify multisample coverage parameters

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specify a single floating-point sample coverage value.  The value is clamped to the range [0 ,1]. The initial value is 1.0.
            |
|invert| 
            Specify a single boolean value representing if the coverage masks should be inverted.  True and False are accepted.  The initial value is False.
            |


#### SamplerParameter
```csharp
OpenTK.Graphics.ES30.GL.SamplerParameter(System.UInt32,OpenTK.Graphics.ES30.SamplerParameterName,System.Int32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Set sampler parameters

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies the sampler object whose parameter to modify.
            |
|pname| 
            Specifies the symbolic name of a single-valued sampler parameter. pname can be one of the following: TextureWrapS, TextureWrapT, TextureWrapR, TextureMinFilter, TextureMagFilter, TextureMinLod, TextureMaxLod, TextureCompareMode, or TextureCompareFunc.
            |
|param|[length: pname] 
            For the scalar commands, specifies the value of pname.
            |


#### Scissor
```csharp
OpenTK.Graphics.ES30.GL.Scissor(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define the scissor box

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify the lower left corner of the scissor box. Initially (0, 0).
            |
|y| 
            Specify the lower left corner of the scissor box. Initially (0, 0).
            |
|width| 
            Specify the width and height of the scissor box. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |
|height| 
            Specify the width and height of the scissor box. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |


#### ShaderBinary
```csharp
OpenTK.Graphics.ES30.GL.ShaderBinary(System.Int32,System.UInt32*,OpenTK.Graphics.ES30.ShaderBinaryFormat,System.IntPtr,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Load pre-compiled shader binaries

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of shader object handles contained in shaders.
            |
|shaders|[length: count] 
            Specifies the address of an array of shader handles into which to load pre-compiled shader binaries.
            |
|binaryformat| 
            Specifies the format of the shader binaries contained in binary.
            |
|binary|[length: length] 
            Specifies the address of an array of bytes containing pre-compiled binary shader code.
            |
|length| 
            Specifies the length of the array whose address is given in binary.
            |


#### ShaderBinary``1
```csharp
OpenTK.Graphics.ES30.GL.ShaderBinary``1(System.Int32,System.UInt32*,OpenTK.Graphics.ES30.ShaderBinaryFormat,``0@,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Load pre-compiled shader binaries

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of shader object handles contained in shaders.
            |
|shaders|[length: count] 
            Specifies the address of an array of shader handles into which to load pre-compiled shader binaries.
            |
|binaryformat| 
            Specifies the format of the shader binaries contained in binary.
            |
|binary|[length: length] 
            Specifies the address of an array of bytes containing pre-compiled binary shader code.
            |
|length| 
            Specifies the length of the array whose address is given in binary.
            |


#### ShaderSource
```csharp
OpenTK.Graphics.ES30.GL.ShaderSource(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Replaces the source code in a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the handle of the shader object whose source code is to be replaced.
            |
|count| 
            Specifies the number of elements in the string and length arrays.
            |
|@string|[length: count] 
            Specifies an array of pointers to strings containing the source code to be loaded into the shader.
            |
|length|[length: count] 
            Specifies an array of string lengths.
            |


#### StencilFunc
```csharp
OpenTK.Graphics.ES30.GL.StencilFunc(OpenTK.Graphics.ES30.StencilFunction,System.Int32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set front and back function and reference value for stencil testing

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the test function. Eight symbolic constants are valid: Never, Less, Lequal, Greater, Gequal, Equal, Notequal, and Always. The initial value is Always.
            |
|@ref| 
            Specifies the reference value for the stencil test. Stencil comparison operations and queries of ref clamp its value to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilFuncSeparate
```csharp
OpenTK.Graphics.ES30.GL.StencilFuncSeparate(OpenTK.Graphics.ES30.StencilFace,OpenTK.Graphics.ES30.StencilFunction,System.Int32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set front and/or back function and reference value for stencil testing

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies whether front and/or back stencil state is updated. Three symbolic constants are valid: Front, Back, and FrontAndBack.
            |
|func| 
            Specifies the test function. Eight symbolic constants are valid: Never, Less, Lequal, Greater, Gequal, Equal, Notequal, and Always. The initial value is Always.
            |
|@ref| 
            Specifies the reference value for the stencil test. Stencil comparison operations and queries of ref clamp its value to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilMask
```csharp
OpenTK.Graphics.ES30.GL.StencilMask(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Control the front and back writing of individual bits in the stencil planes

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's.
            |


#### StencilMaskSeparate
```csharp
OpenTK.Graphics.ES30.GL.StencilMaskSeparate(OpenTK.Graphics.ES30.StencilFace,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Control the front and/or back writing of individual bits in the stencil planes

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies whether the front and/or back stencil writemask is updated. Three symbolic constants are valid: Front, Back, and FrontAndBack.
            |
|mask| 
            Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's.
            |


#### StencilOp
```csharp
OpenTK.Graphics.ES30.GL.StencilOp(OpenTK.Graphics.ES30.StencilOp,OpenTK.Graphics.ES30.StencilOp,OpenTK.Graphics.ES30.StencilOp)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set front and back stencil test actions

|Parameter Name|Remarks|
|--------------|-------|
|fail| 
            Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: Keep, Zero, Replace, Incr, IncrWrap, Decr, DecrWrap, and Invert. The initial value is Keep.
            |
|zfail| 
            Specifies the stencil action when the stencil test passes, but the depth test fails. dpfail accepts the same symbolic constants as sfail. The initial value is Keep.
            |
|zpass| 
            Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. dppass accepts the same symbolic constants as sfail. The initial value is Keep.
            |


#### StencilOpSeparate
```csharp
OpenTK.Graphics.ES30.GL.StencilOpSeparate(OpenTK.Graphics.ES30.StencilFace,OpenTK.Graphics.ES30.StencilOp,OpenTK.Graphics.ES30.StencilOp,OpenTK.Graphics.ES30.StencilOp)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set front and/or back stencil test actions

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies whether front and/or back stencil state is updated. Three symbolic constants are valid: Front, Back, and FrontAndBack.
            |
|sfail| 
            Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: Keep, Zero, Replace, Incr, IncrWrap, Decr, DecrWrap, and Invert. The initial value is Keep.
            |
|dpfail| 
            Specifies the stencil action when the stencil test passes, but the depth test fails. dpfail accepts the same symbolic constants as sfail. The initial value is Keep.
            |
|dppass| 
            Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. dppass accepts the same symbolic constants as sfail. The initial value is Keep.
            |


#### TexImage2D
```csharp
OpenTK.Graphics.ES30.GL.TexImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.TextureComponentCount,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, or one of the sized internal formats given in Table 2, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 2048 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support texture images that are at least 2048 texels high.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage2D``1
```csharp
OpenTK.Graphics.ES30.GL.TexImage2D``1(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.TextureComponentCount,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, or one of the sized internal formats given in Table 2, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 2048 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support texture images that are at least 2048 texels high.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage3D
```csharp
OpenTK.Graphics.ES30.GL.TexImage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,OpenTK.Graphics.ES30.TextureComponentCount,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be one of Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level  is the n sup th mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, or one of the sized internal formats given in Table 2, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 256 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 3D texture images that are at least 256 texels high.
            |
|depth| 
            Specifies the depth of the texture image, or the number of layers in a texture array. All implementations support 3D texture images that are at least 256 texels deep, and texture arrays that are at least 256 layers deep.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha,
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage3D``1
```csharp
OpenTK.Graphics.ES30.GL.TexImage3D``1(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,OpenTK.Graphics.ES30.TextureComponentCount,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be one of Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level  is the n sup th mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, or one of the sized internal formats given in Table 2, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 256 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 3D texture images that are at least 256 texels high.
            |
|depth| 
            Specifies the depth of the texture image, or the number of layers in a texture array. All implementations support 3D texture images that are at least 256 texels deep, and texture arrays that are at least 256 layers deep.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha,
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexParameter
```csharp
OpenTK.Graphics.ES30.GL.TexParameter(OpenTK.Graphics.ES30.TextureTarget,OpenTK.Graphics.ES30.TextureParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set texture parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture, which must be either Texture2D, Texture3D, Texture2DArray, or TextureCubeMap.
            |
|pname| 
            Specifies the symbolic name of a single-valued texture parameter. pname can be one of the following: TextureBaseLevel, TextureCompareFunc, TextureCompareMode, TextureMinFilter, TextureMagFilter, TextureMinLod, TextureMaxLod, TextureMaxLevel, TextureSwizzleR, TextureSwizzleG, TextureSwizzleB, TextureSwizzleA, TextureWrapS, TextureWrapT, or TextureWrapR.
            |
|@params|[length: pname] 
            Specifies the value of pname.
            |


#### TexStorage2D
```csharp
OpenTK.Graphics.ES30.GL.TexStorage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,OpenTK.Graphics.ES30.SizedInternalFormat,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Simultaneously specify storage for all levels of a two-dimensional texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture2D, or TextureCubeMap.
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
OpenTK.Graphics.ES30.GL.TexStorage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,OpenTK.Graphics.ES30.SizedInternalFormat,System.Int32,System.Int32,System.Int32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Simultaneously specify storage for all levels of a three-dimensional or two-dimensional array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture3D, or Texture2DArray.
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


#### TexSubImage2D
```csharp
OpenTK.Graphics.ES30.GL.TexSubImage2D(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage2D``1
```csharp
OpenTK.Graphics.ES30.GL.TexSubImage2D``1(OpenTK.Graphics.ES30.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage3D
```csharp
OpenTK.Graphics.ES30.GL.TexSubImage3D(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|zoffset| 
            Specifies a texel offset in the z direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|depth| 
            Specifies the depth of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage3D``1
```csharp
OpenTK.Graphics.ES30.GL.TexSubImage3D``1(OpenTK.Graphics.ES30.TextureTarget3d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.PixelFormat,OpenTK.Graphics.ES30.PixelType,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify a three-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D or Texture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|yoffset| 
            Specifies a texel offset in the y direction within the texture array.
            |
|zoffset| 
            Specifies a texel offset in the z direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|height| 
            Specifies the height of the texture subimage.
            |
|depth| 
            Specifies the depth of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, RedInteger, Rg, RgInteger, Rgb, RgbInteger, Rgba, RgbaInteger, DepthComponent, DepthStencil, LuminanceAlpha, Luminance, and Alpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedShort565, UnsignedShort4444, UnsignedShort5551, UnsignedInt2101010Rev, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, UnsignedInt248, and Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TransformFeedbackVaryings
```csharp
OpenTK.Graphics.ES30.GL.TransformFeedbackVaryings(System.UInt32,System.Int32,System.String[],OpenTK.Graphics.ES30.TransformFeedbackMode)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify values to record in transform feedback buffers

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the target program object.
            |
|count| 
            The number of varying variables used for transform feedback.
            |
|varyings|[length: count] 
            An array of count zero-terminated strings specifying the names of the varying variables to use for transform feedback.
            |
|bufferMode| 
            Identifies the mode used to capture the varying variables when transform feedback is active. bufferMode must be InterleavedAttribs or SeparateAttribs.
            |


#### Uniform1
```csharp
OpenTK.Graphics.ES30.GL.Uniform1(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector (glUniform*v) commands, specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix (glUniformMatrix*) commands, specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: count*1] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### Uniform2
```csharp
OpenTK.Graphics.ES30.GL.Uniform2(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector (glUniform*v) commands, specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix (glUniformMatrix*) commands, specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: count*2] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### Uniform3
```csharp
OpenTK.Graphics.ES30.GL.Uniform3(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector (glUniform*v) commands, specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix (glUniformMatrix*) commands, specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: count*3] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### Uniform4
```csharp
OpenTK.Graphics.ES30.GL.Uniform4(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector (glUniform*v) commands, specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix (glUniformMatrix*) commands, specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: count*4] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### UniformBlockBinding
```csharp
OpenTK.Graphics.ES30.GL.UniformBlockBinding(System.UInt32,System.UInt32,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Assign a binding point to an active uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object containing the active uniform block whose binding to assign.
            |
|uniformBlockIndex| 
            The index of the active uniform block within program whose binding to assign.
            |
|uniformBlockBinding| 
            Specifies the binding point to which to bind the uniform block with index uniformBlockIndex within program.
            |


#### UniformMatrix2
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### UniformMatrix2x3
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix2x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix2x4
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix2x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix3
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### UniformMatrix3x2
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix3x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix3x4
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix3x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### UniformMatrix4
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### UniformMatrix4x2
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix4x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix4x3
```csharp
OpenTK.Graphics.ES30.GL.UniformMatrix4x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### UnmapBuffer
```csharp
OpenTK.Graphics.ES30.GL.UnmapBuffer(OpenTK.Graphics.ES30.BufferTarget)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### UseProgram
```csharp
OpenTK.Graphics.ES30.GL.UseProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Installs a program object as part of current rendering state

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object whose executables are to be used as part of current rendering state.
            |


#### ValidateProgram
```csharp
OpenTK.Graphics.ES30.GL.ValidateProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Validates a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be validated.
            |


#### VertexAttrib1
```csharp
OpenTK.Graphics.ES30.GL.VertexAttrib1(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 1] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib2
```csharp
OpenTK.Graphics.ES30.GL.VertexAttrib2(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 2] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib3
```csharp
OpenTK.Graphics.ES30.GL.VertexAttrib3(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 3] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib4
```csharp
OpenTK.Graphics.ES30.GL.VertexAttrib4(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 4] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: v3.0 or ES_VERSION_3_0]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |


#### VertexAttribI4
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribI4(System.UInt32,System.UInt32*)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribIPointer
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribIPointer(System.UInt32,System.Int32,OpenTK.Graphics.ES30.VertexAttribIntegerType,System.Int32,System.IntPtr)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribIPointer``1
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribIPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.ES30.VertexAttribIntegerType,System.Int32,``0@)
```
[requires: v3.0 or ES_VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribPointer
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribPointer(System.UInt32,System.Int32,OpenTK.Graphics.ES30.VertexAttribPointerType,System.Boolean,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by both functions. Additionally HalfFloat, Float, Fixed, Int2101010Rev, and UnsignedInt2101010Rev are accepted by glVertexAttribPointer. The initial value is Float.
            |
|normalized| 
            For glVertexAttribPointer, specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed. This parameter is ignored if type is Fixed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first generic vertex attribute in the array. If a non-zero buffer is currently bound to the ArrayBuffer target, pointer specifies an offset of into the array in the data store of that buffer. The initial value is 0.
            |


#### VertexAttribPointer``1
```csharp
OpenTK.Graphics.ES30.GL.VertexAttribPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.ES30.VertexAttribPointerType,System.Boolean,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by both functions. Additionally HalfFloat, Float, Fixed, Int2101010Rev, and UnsignedInt2101010Rev are accepted by glVertexAttribPointer. The initial value is Float.
            |
|normalized| 
            For glVertexAttribPointer, specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed. This parameter is ignored if type is Fixed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first generic vertex attribute in the array. If a non-zero buffer is currently bound to the ArrayBuffer target, pointer specifies an offset of into the array in the data store of that buffer. The initial value is 0.
            |


#### Viewport
```csharp
OpenTK.Graphics.ES30.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set the viewport

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify the lower left corner of the viewport rectangle, in pixels. The initial value is (0,0).
            |
|y| 
            Specify the lower left corner of the viewport rectangle, in pixels. The initial value is (0,0).
            |
|width| 
            Specify the width and height of the viewport. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |
|height| 
            Specify the width and height of the viewport. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |


#### WaitSync
```csharp
OpenTK.Graphics.ES30.GL.WaitSync(System.IntPtr,OpenTK.Graphics.ES30.WaitSyncFlags,System.UInt64)
```
[requires: v3.0 or ES_VERSION_3_0]
 Instruct the GL server to block until the specified sync object becomes signaled

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies the sync object whose status to wait on.
            |
|flags| 
            A bitfield controlling the command flushing behavior. flags must be zero.
            |
|timeout| 
            Specifies the timeout that the server should wait before continuing. timeout must be TimeoutIgnored.
            |




### Properties

#### SyncRoot
Returns a synchronization token unique for the GL class.

