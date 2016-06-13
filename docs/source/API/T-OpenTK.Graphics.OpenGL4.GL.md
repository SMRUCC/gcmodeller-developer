---
title: GL
---

# GL
_namespace: [OpenTK.Graphics.OpenGL4](N-OpenTK.Graphics.OpenGL4.html)_

Provides access to OpenGL 4.x methods for the core profile.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.OpenGL4.GL.#ctor
```
Constructs a new instance.

#### ActiveShaderProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.ActiveShaderProgram(System.UInt32,System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Set the active program object for a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the program pipeline object to set the active program object for.
            |
|program| 
            Specifies the program object to set as the active program pipeline object pipeline.
            |


#### ActiveTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.ActiveTexture(OpenTK.Graphics.OpenGL4.TextureUnit)
```
[requires: v1.3]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least 80. texture must be one of Texturei, where i ranges from zero to the value of MaxCombinedTextureImageUnits minus one. The initial value is Texture0.
            |


#### AttachShader
```csharp
OpenTK.Graphics.OpenGL4.GL.AttachShader(System.UInt32,System.UInt32)
```
[requires: v2.0]
 Attaches a shader object to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to which a shader object will be attached.
            |
|shader| 
            Specifies the shader object that is to be attached.
            |


#### BeginConditionalRender
```csharp
OpenTK.Graphics.OpenGL4.GL.BeginConditionalRender(System.UInt32,OpenTK.Graphics.OpenGL4.ConditionalRenderType)
```
[requires: v3.0]
 Start conditional rendering

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies the name of an occlusion query object whose results are used to determine if the rendering commands are discarded.
            |
|mode| 
            Specifies how glBeginConditionalRender interprets the results of the occlusion query.
            |


#### BeginQuery
```csharp
OpenTK.Graphics.OpenGL4.GL.BeginQuery(OpenTK.Graphics.OpenGL4.QueryTarget,System.UInt32)
```
[requires: v1.5]
 Delimit the boundaries of a query object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target type of query object established between glBeginQuery and the subsequent glEndQuery. The symbolic constant must be one of SamplesPassed, AnySamplesPassed, AnySamplesPassedConservative, PrimitivesGenerated, TransformFeedbackPrimitivesWritten, or TimeElapsed.
            |
|id| 
            Specifies the name of a query object.
            |


#### BeginQueryIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.BeginQueryIndexed(OpenTK.Graphics.OpenGL4.QueryTarget,System.UInt32,System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback3|VERSION_4_0]
 Delimit the boundaries of a query object on an indexed target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target type of query object established between glBeginQueryIndexed and the subsequent glEndQueryIndexed. The symbolic constant must be one of SamplesPassed, AnySamplesPassed, PrimitivesGenerated, TransformFeedbackPrimitivesWritten, or TimeElapsed.
            |
|index| 
            Specifies the index of the query target upon which to begin the query.
            |
|id| 
            Specifies the name of a query object.
            |


#### BeginTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.BeginTransformFeedback(OpenTK.Graphics.OpenGL4.TransformFeedbackPrimitiveType)
```
[requires: v3.0]
 Start transform feedback operation

|Parameter Name|Remarks|
|--------------|-------|
|primitiveMode| 
            Specify the output type of the primitives that will be recorded into the buffer objects that are bound for transform feedback.
            |


#### BindAttribLocation
```csharp
OpenTK.Graphics.OpenGL4.GL.BindAttribLocation(System.UInt32,System.UInt32,System.String)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.BindBuffer(OpenTK.Graphics.OpenGL4.BufferTarget,System.UInt32)
```
[requires: v1.5]
 Bind a named buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the buffer object is bound. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|buffer| 
            Specifies the name of a buffer object.
            |


#### BindBufferBase
```csharp
OpenTK.Graphics.OpenGL4.GL.BindBufferBase(OpenTK.Graphics.OpenGL4.BufferRangeTarget,System.UInt32,System.UInt32)
```
[requires: v3.0]
 Bind a buffer object to an indexed buffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be one of AtomicCounterBuffer, TransformFeedbackBuffer, UniformBuffer or ShaderStorageBuffer.
            |
|index| 
            Specify the index of the binding point within the array specified by target.
            |
|buffer| 
            The name of a buffer object to bind to the specified binding point.
            |


#### BindBufferRange
```csharp
OpenTK.Graphics.OpenGL4.GL.BindBufferRange(OpenTK.Graphics.OpenGL4.BufferRangeTarget,System.UInt32,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: v3.0]
 Bind a range within a buffer object to an indexed buffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be one of AtomicCounterBuffer, TransformFeedbackBuffer, UniformBuffer, or ShaderStorageBuffer.
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


#### BindBuffersBase
```csharp
OpenTK.Graphics.OpenGL4.GL.BindBuffersBase(OpenTK.Graphics.OpenGL4.BufferRangeTarget,System.UInt32,System.Int32,System.UInt32*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind one or more buffer objects to a sequence of indexed buffer targets

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be one of AtomicCounterBuffer, TransformFeedbackBuffer, UniformBuffer or ShaderStorageBuffer.
            |
|first| 
            Specify the index of the first binding point within the array specified by target.
            |
|count| 
            Specify the number of contiguous binding points to which to bind buffers.
            |
|buffers|[length: count] 
            A pointer to an array of names of buffer objects to bind to the targets on the specified binding point, or Null.
            |


#### BindBuffersRange
```csharp
OpenTK.Graphics.OpenGL4.GL.BindBuffersRange(OpenTK.Graphics.OpenGL4.BufferRangeTarget,System.UInt32,System.Int32,System.UInt32*,System.IntPtr*,System.IntPtr*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind ranges of one or more buffer objects to a sequence of indexed buffer targets

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the bind operation. target must be one of AtomicCounterBuffer, TransformFeedbackBuffer, UniformBuffer or ShaderStorageBuffer.
            |
|first| 
            Specify the index of the first binding point within the array specified by target.
            |
|count| 
            Specify the number of contiguous binding points to which to bind buffers.
            |
|buffers|[length: count] 
            A pointer to an array of names of buffer objects to bind to the targets on the specified binding point, or Null.
            |
|offsets|[length: count]|
|sizes|[length: count]|


#### BindFragDataLocation
```csharp
OpenTK.Graphics.OpenGL4.GL.BindFragDataLocation(System.UInt32,System.UInt32,System.String)
```
[requires: v3.0]
 Bind a user-defined varying out variable to a fragment shader color number

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the program containing varying out variable whose binding to modify
            |
|color| 
            The color number to bind the user-defined varying out variable to
            |
|name|[length: name] 
            The name of the user-defined varying out variable whose binding to modify
            |


#### BindFragDataLocationIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.BindFragDataLocationIndexed(System.UInt32,System.UInt32,System.UInt32,System.String)
```
[requires: v3.3 or ARB_blend_func_extended|VERSION_3_3]
 Bind a user-defined varying out variable to a fragment shader color number and index

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the program containing varying out variable whose binding to modify
            |
|colorNumber| 
            The color number to bind the user-defined varying out variable to
            |
|index| 
            The index of the color input to bind the user-defined varying out variable to
            |
|name| 
            The name of the user-defined varying out variable whose binding to modify
            |


#### BindFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.BindFramebuffer(OpenTK.Graphics.OpenGL4.FramebufferTarget,System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Bind a framebuffer to a framebuffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target of the binding operation.
            |
|framebuffer| 
            Specifies the name of the framebuffer object to bind.
            |


#### BindImageTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.BindImageTexture(System.UInt32,System.UInt32,System.Int32,System.Boolean,System.Int32,OpenTK.Graphics.OpenGL4.TextureAccess,OpenTK.Graphics.OpenGL4.SizedInternalFormat)
```
[requires: v4.2 or ARB_shader_image_load_store|VERSION_4_2]
 Bind a level of a texture to an image unit

|Parameter Name|Remarks|
|--------------|-------|
|unit| 
            Specifies the index of the image unit to which to bind the texture
            |
|texture| 
            Specifies the name of the texture to bind to the image unit.
            |
|level| 
            Specifies the level of the texture that is to be bound.
            |
|layered| 
            Specifies whether a layered texture binding is to be established.
            |
|layer| 
            If layered is False, specifies the layer of texture to be bound to the image unit. Ignored otherwise.
            |
|access| 
            Specifies a token indicating the type of access that will be performed on the image.
            |
|format| 
            Specifies the format that the elements of the image will be treated as for the purposes of formatted stores.
            |


#### BindImageTextures
```csharp
OpenTK.Graphics.OpenGL4.GL.BindImageTextures(System.UInt32,System.Int32,System.UInt32*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind one or more named texture images to a sequence of consecutive image units

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the first image unit to which a texture is to be bound.
            |
|count| 
            Specifies the number of textures to bind.
            |
|textures|[length: count] 
            Specifies the address of an array of names of existing texture objects.
            |


#### BindProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.BindProgramPipeline(System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Bind a program pipeline to the current context

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of the pipeline object to bind to the context.
            |


#### BindRenderbuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.BindRenderbuffer(OpenTK.Graphics.OpenGL4.RenderbufferTarget,System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.BindSampler(System.UInt32,System.UInt32)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Bind a named sampler to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|unit| 
            Specifies the index of the texture unit to which the sampler is bound.
            |
|sampler| 
            Specifies the name of a sampler.
            |


#### BindSamplers
```csharp
OpenTK.Graphics.OpenGL4.GL.BindSamplers(System.UInt32,System.Int32,System.UInt32*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind one or more named sampler objects to a sequence of consecutive sampler units

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the first sampler unit to which a sampler object is to be bound.
            |
|count| 
            Specifies the number of samplers to bind.
            |
|samplers|[length: count] 
            Specifies the address of an array of names of existing sampler objects.
            |


#### BindTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.BindTexture(OpenTK.Graphics.OpenGL4.TextureTarget,System.UInt32)
```
[requires: v1.1]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture is bound. Must be one of Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, TextureCubeMap, TextureCubeMapArray, TextureBuffer, Texture2DMultisample or Texture2DMultisampleArray.
            |
|texture| 
            Specifies the name of a texture.
            |


#### BindTextures
```csharp
OpenTK.Graphics.OpenGL4.GL.BindTextures(System.UInt32,System.Int32,System.UInt32*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind one or more named textures to a sequence of consecutive texture units

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the first texture unit to which a texture is to be bound.
            |
|count| 
            Specifies the number of textures to bind.
            |
|textures|[length: count] 
            Specifies the address of an array of names of existing texture objects.
            |


#### BindTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.BindTransformFeedback(OpenTK.Graphics.OpenGL4.TransformFeedbackTarget,System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
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
OpenTK.Graphics.OpenGL4.GL.BindVertexArray(System.UInt32)
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
 Bind a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the name of the vertex array to bind.
            |


#### BindVertexBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.BindVertexBuffer(System.UInt32,System.UInt32,System.IntPtr,System.Int32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]
 Bind a buffer to a vertex buffer bind point

|Parameter Name|Remarks|
|--------------|-------|
|bindingindex| 
            The index of the vertex buffer binding point to which to bind the buffer.
            |
|buffer| 
            The name of an existing buffer to bind to the vertex buffer binding point.
            |
|offset| 
            The offset of the first element of the buffer.
            |
|stride| 
            The distance between elements within the buffer.
            |


#### BindVertexBuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.BindVertexBuffers(System.UInt32,System.Int32,System.UInt32*,System.IntPtr*,System.Int32*)
```
[requires: v4.4 or ARB_multi_bind|VERSION_4_4]
 Bind one or more named buffer objects to a sequence of consecutive vertex buffer binding points

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the first vertex buffer binding point to which a buffer object is to be bound.
            |
|count| 
            Specifies the number of buffers to bind.
            |
|buffers|[length: count] 
            Specifies the address of an array of names of existing buffer objects.
            |
|offsets|[length: count] 
            Specifies the address of an array of offsets to associate with the binding points.
            |
|strides|[length: count] 
            Specifies the address of an array of strides to associate with the binding points.
            |


#### BlendColor
```csharp
OpenTK.Graphics.OpenGL4.GL.BlendColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.4 or ARB_imaging|VERSION_1_4]
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
OpenTK.Graphics.OpenGL4.GL.BlendEquation(System.UInt32,OpenTK.Graphics.OpenGL4.BlendEquationMode)
```
[requires: v4.0]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            for glBlendEquationi, specifies the index of the draw buffer for which to set the blend equation.
            |
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.BlendEquationSeparate(System.UInt32,OpenTK.Graphics.OpenGL4.BlendEquationMode,OpenTK.Graphics.OpenGL4.BlendEquationMode)
```
[requires: v4.0]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            for glBlendEquationSeparatei, specifies the index of the draw buffer for which to set the blend equations.
            |
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.OpenGL4.GL.BlendFunc(System.UInt32,OpenTK.Graphics.OpenGL4.BlendingFactorSrc,OpenTK.Graphics.OpenGL4.BlendingFactorDest)
```
[requires: v4.0]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            For glBlendFunci, specifies the index of the draw buffer for which to set the blend function.
            |
|src| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The initial value is One.
            |
|dst| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.BlendFuncSeparate(System.UInt32,OpenTK.Graphics.OpenGL4.BlendingFactorSrc,OpenTK.Graphics.OpenGL4.BlendingFactorDest,OpenTK.Graphics.OpenGL4.BlendingFactorSrc,OpenTK.Graphics.OpenGL4.BlendingFactorDest)
```
[requires: v4.0]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            For glBlendFuncSeparatei, specifies the index of the draw buffer for which to set the blend functions.
            |
|srcRGB| 
            Specifies how the red, green, and blue blending factors are computed. The initial value is One.
            |
|dstRGB| 
            Specifies how the red, green, and blue destination blending factors are computed. The initial value is Zero.
            |
|srcAlpha| 
            Specified how the alpha source blending factor is computed. The initial value is One.
            |
|dstAlpha| 
            Specified how the alpha destination blending factor is computed. The initial value is Zero.
            |


#### BlitFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.BlitFramebuffer(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.ClearBufferMask,OpenTK.Graphics.OpenGL4.BlitFramebufferFilter)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.BufferData(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL4.BufferUsageHint)
```
[requires: v1.5]
 Creates and initializes a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
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
OpenTK.Graphics.OpenGL4.GL.BufferData``1(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,``0@,OpenTK.Graphics.OpenGL4.BufferUsageHint)
```
[requires: v1.5]
 Creates and initializes a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
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


#### BufferStorage
```csharp
OpenTK.Graphics.OpenGL4.GL.BufferStorage(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL4.BufferStorageFlags)
```
[requires: v4.4 or ARB_buffer_storage|VERSION_4_4]
 Creates and initializes a buffer object's immutable data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|flags| 
            Specifies the intended usage of the buffer's data store. Must be a bitwise combination of the following flags. DynamicStorageBit, MapReadBitMapWriteBit, MapPersistentBit, MapCoherentBit, and ClientStorageBit.
            |


#### BufferStorage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.BufferStorage``1(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,``0@,OpenTK.Graphics.OpenGL4.BufferStorageFlags)
```
[requires: v4.4 or ARB_buffer_storage|VERSION_4_4]
 Creates and initializes a buffer object's immutable data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|flags| 
            Specifies the intended usage of the buffer's data store. Must be a bitwise combination of the following flags. DynamicStorageBit, MapReadBitMapWriteBit, MapPersistentBit, MapCoherentBit, and ClientStorageBit.
            |


#### BufferSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.BufferSubData(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v1.5]
 Updates a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
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
OpenTK.Graphics.OpenGL4.GL.BufferSubData``1(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,``0@)
```
[requires: v1.5]
 Updates a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
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
OpenTK.Graphics.OpenGL4.GL.CheckFramebufferStatus(OpenTK.Graphics.OpenGL4.FramebufferTarget)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Check the completeness status of a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the framebuffer completeness check.
            |


#### ClampColor
```csharp
OpenTK.Graphics.OpenGL4.GL.ClampColor(OpenTK.Graphics.OpenGL4.ClampColorTarget,OpenTK.Graphics.OpenGL4.ClampColorMode)
```
[requires: v3.0]
 Specify whether data read via glReadPixels should be clamped

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Target for color clamping. target must be ClampReadColor.
            |
|clamp| 
            Specifies whether to apply color clamping. clamp must be True or False.
            |


#### Clear
```csharp
OpenTK.Graphics.OpenGL4.GL.Clear(OpenTK.Graphics.OpenGL4.ClearBufferMask)
```
[requires: v1.0]
 Clear buffers to preset values

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Bitwise OR of masks that indicate the buffers to be cleared. The three masks are ColorBufferBit, DepthBufferBit, and StencilBufferBit.
            |


#### ClearBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearBuffer(OpenTK.Graphics.OpenGL4.ClearBuffer,System.Int32,System.UInt32*)
```
[requires: v3.0]
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


#### ClearBufferData
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearBufferData(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.All,System.IntPtr)
```
[requires: v4.3 or ARB_clear_buffer_object|VERSION_4_3]
 Fill a buffer object's data store with a fixed value

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of the global buffer binding targets.
            |
|internalformat| 
            The internal format with which the data will be stored in the buffer object.
            |
|format| 
            The format of the data in memory addressed by data.
            |
|type| 
            The type of the data in memory addressed by data.
            |
|data|[length: format,type] 
            The address of a memory location storing the data to be replicated into the buffer's data store.
            |


#### ClearBufferData``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearBufferData``1(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.All,``0@)
```
[requires: v4.3 or ARB_clear_buffer_object|VERSION_4_3]
 Fill a buffer object's data store with a fixed value

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of the global buffer binding targets.
            |
|internalformat| 
            The internal format with which the data will be stored in the buffer object.
            |
|format| 
            The format of the data in memory addressed by data.
            |
|type| 
            The type of the data in memory addressed by data.
            |
|data|[length: format,type] 
            The address of a memory location storing the data to be replicated into the buffer's data store.
            |


#### ClearBufferSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearBufferSubData(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.All,System.IntPtr)
```
[requires: v4.3 or ARB_clear_buffer_object|VERSION_4_3]
 Fill all or part of buffer object's data store with a fixed value

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of the global buffer binding targets.
            |
|internalformat| 
            The internal format with which the data will be stored in the buffer object.
            |
|offset| 
            The offset, in basic machine units into the buffer object's data store at which to start filling.
            |
|size| 
            The size, in basic machine units of the range of the data store to fill.
            |
|format| 
            The format of the data in memory addressed by data.
            |
|type| 
            The type of the data in memory addressed by data.
            |
|data|[length: format,type] 
            The address of a memory location storing the data to be replicated into the buffer's data store.
            |


#### ClearBufferSubData``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearBufferSubData``1(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.All,``0@)
```
[requires: v4.3 or ARB_clear_buffer_object|VERSION_4_3]
 Fill all or part of buffer object's data store with a fixed value

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of the global buffer binding targets.
            |
|internalformat| 
            The internal format with which the data will be stored in the buffer object.
            |
|offset| 
            The offset, in basic machine units into the buffer object's data store at which to start filling.
            |
|size| 
            The size, in basic machine units of the range of the data store to fill.
            |
|format| 
            The format of the data in memory addressed by data.
            |
|type| 
            The type of the data in memory addressed by data.
            |
|data|[length: format,type] 
            The address of a memory location storing the data to be replicated into the buffer's data store.
            |


#### ClearColor
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0]
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
OpenTK.Graphics.OpenGL4.GL.ClearDepth(System.Single)
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|d| 
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### ClearStencil
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearStencil(System.Int32)
```
[requires: v1.0]
 Specify the clear value for the stencil buffer

|Parameter Name|Remarks|
|--------------|-------|
|s| 
            Specifies the index used when the stencil buffer is cleared. The initial value is 0.
            |


#### ClearTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearTexImage(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v4.4 or ARB_clear_texture|VERSION_4_4]
 Fills all a texture image with a constant value

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of an existing texture object containing the image to be cleared.
            |
|level| 
            The level of texture containing the region to be cleared.
            |
|format| 
            The format of the data whose address in memory is given by data.
            |
|type| 
            The type of the data whose address in memory is given by data.
            |
|data|[length: format,type] 
            The address in memory of the data to be used to clear the specified region.
            |


#### ClearTexImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearTexImage``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v4.4 or ARB_clear_texture|VERSION_4_4]
 Fills all a texture image with a constant value

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of an existing texture object containing the image to be cleared.
            |
|level| 
            The level of texture containing the region to be cleared.
            |
|format| 
            The format of the data whose address in memory is given by data.
            |
|type| 
            The type of the data whose address in memory is given by data.
            |
|data|[length: format,type] 
            The address in memory of the data to be used to clear the specified region.
            |


#### ClearTexSubImage
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearTexSubImage(System.UInt32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v4.4 or ARB_clear_texture|VERSION_4_4]
 Fills all or part of a texture image with a constant value

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of an existing texture object containing the image to be cleared.
            |
|level| 
            The level of texture containing the region to be cleared.
            |
|xoffset| 
            The coordinate of the left edge of the region to be cleared.
            |
|yoffset| 
            The coordinate of the lower edge of the region to be cleared.
            |
|zoffset| 
            The coordinate of the front of the region to be cleared.
            |
|width| 
            The width of the region to be cleared.
            |
|height| 
            The height of the region to be cleared.
            |
|depth| 
            The depth of the region to be cleared.
            |
|format| 
            The format of the data whose address in memory is given by data.
            |
|type| 
            The type of the data whose address in memory is given by data.
            |
|data|[length: format,type] 
            The address in memory of the data to be used to clear the specified region.
            |


#### ClearTexSubImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ClearTexSubImage``1(System.UInt32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v4.4 or ARB_clear_texture|VERSION_4_4]
 Fills all or part of a texture image with a constant value

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of an existing texture object containing the image to be cleared.
            |
|level| 
            The level of texture containing the region to be cleared.
            |
|xoffset| 
            The coordinate of the left edge of the region to be cleared.
            |
|yoffset| 
            The coordinate of the lower edge of the region to be cleared.
            |
|zoffset| 
            The coordinate of the front of the region to be cleared.
            |
|width| 
            The width of the region to be cleared.
            |
|height| 
            The height of the region to be cleared.
            |
|depth| 
            The depth of the region to be cleared.
            |
|format| 
            The format of the data whose address in memory is given by data.
            |
|type| 
            The type of the data whose address in memory is given by data.
            |
|data|[length: format,type] 
            The address in memory of the data to be used to clear the specified region.
            |


#### ClientWaitSync
```csharp
OpenTK.Graphics.OpenGL4.GL.ClientWaitSync(System.IntPtr,OpenTK.Graphics.OpenGL4.ClientWaitSyncFlags,System.UInt64)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
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
OpenTK.Graphics.OpenGL4.GL.ColorMask(System.UInt32,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: v3.0]
 Enable and disable writing of frame buffer color components

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            For glColorMaski, specifies the index of the draw buffer whose color mask to set.
            |
|r| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|g| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|b| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |
|a| 
            Specify whether red, green, blue, and alpha are to be written into the frame buffer. The initial values are all True, indicating that the color components are written.
            |


#### ColorP3
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorP3(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|color|[length: 1]|


#### ColorP4
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorP4(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|color|[length: 1]|


#### ColorSubTable
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorSubTable(OpenTK.Graphics.OpenGL4.ColorTableTarget,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Respecify a portion of a color table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|start| 
            The starting index of the portion of the color table to be replaced.
            |
|count| 
            The number of table entries to replace.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|data|[length: format,type,count] 
            Pointer to a one-dimensional array of pixel data that is processed to replace the specified region of the color table.
            |


#### ColorSubTable``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorSubTable``1(OpenTK.Graphics.OpenGL4.ColorTableTarget,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Respecify a portion of a color table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|start| 
            The starting index of the portion of the color table to be replaced.
            |
|count| 
            The number of table entries to replace.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|data|[length: format,type,count] 
            Pointer to a one-dimensional array of pixel data that is processed to replace the specified region of the color table.
            |


#### ColorTable
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorTable(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalformat| 
            The internal format of the color table. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, and Rgba16.
            |
|width| 
            The number of entries in the color lookup table specified by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|table|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the color table.
            |


#### ColorTable``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorTable``1(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalformat| 
            The internal format of the color table. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, and Rgba16.
            |
|width| 
            The number of entries in the color lookup table specified by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|table|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the color table.
            |


#### ColorTableParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.ColorTableParameter(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.ColorTableParameterPName,System.Int32*)
```
Set color lookup table parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target color table. Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|pname| 
            The symbolic name of a texture color lookup table parameter. Must be one of ColorTableScale or ColorTableBias.
            |
|@params|[length: pname] 
            A pointer to an array where the values of the parameters are stored.
            |


#### CompileShader
```csharp
OpenTK.Graphics.OpenGL4.GL.CompileShader(System.UInt32)
```
[requires: v2.0]
 Compiles a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be compiled.
            |


#### CompressedTexImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Specify a one-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D or ProxyTexture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 64 texels wide. The height of the 1D texture image is 1.
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


#### CompressedTexImage1D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage1D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v1.3]
 Specify a one-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D or ProxyTexture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 64 texels wide. The height of the 1D texture image is 1.
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


#### CompressedTexImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or ProxyTextureCubeMap.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture and cube map texture images that are at least 16384 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D texture and cube map texture images that are at least 16384 texels high.
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage2D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v1.3]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or ProxyTextureCubeMap.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture and cube map texture images that are at least 16384 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D texture and cube map texture images that are at least 16384 texels high.
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage3D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Specify a three-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D, ProxyTexture3D, Texture2DArray or ProxyTexture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 3D texture images that are at least 16 texels high.
            |
|depth| 
            Specifies the depth of the texture image. All implementations support 3D texture images that are at least 16 texels deep.
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexImage3D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v1.3]
 Specify a three-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D, ProxyTexture3D, Texture2DArray or ProxyTexture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 3D texture images that are at least 16 texels high.
            |
|depth| 
            Specifies the depth of the texture image. All implementations support 3D texture images that are at least 16 texels deep.
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


#### CompressedTexSubImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Specify a one-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
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


#### CompressedTexSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage1D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,``0@)
```
[requires: v1.3]
 Specify a one-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
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


#### CompressedTexSubImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v1.3]
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage2D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,``0@)
```
[requires: v1.3]
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage3D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Specify a three-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D.
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
            Specifies the width of the texture subimage.
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
OpenTK.Graphics.OpenGL4.GL.CompressedTexSubImage3D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,System.Int32,``0@)
```
[requires: v1.3]
 Specify a three-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture3D.
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
            Specifies the width of the texture subimage.
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


#### ConvolutionFilter1D
```csharp
OpenTK.Graphics.OpenGL4.GL.ConvolutionFilter1D(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Define a one-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution1D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The width of the pixel array referenced by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Alpha, Luminance, LuminanceAlpha, Intensity, Rgb, and Rgba.
            |
|type| 
            The type of the pixel data in data. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the convolution filter kernel.
            |


#### ConvolutionFilter1D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ConvolutionFilter1D``1(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Define a one-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution1D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The width of the pixel array referenced by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Alpha, Luminance, LuminanceAlpha, Intensity, Rgb, and Rgba.
            |
|type| 
            The type of the pixel data in data. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the convolution filter kernel.
            |


#### ConvolutionFilter2D
```csharp
OpenTK.Graphics.OpenGL4.GL.ConvolutionFilter2D(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Define a two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution2D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The width of the pixel array referenced by data.
            |
|height| 
            The height of the pixel array referenced by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, and LuminanceAlpha.
            |
|type| 
            The type of the pixel data in data. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: format,type,width,height] 
            Pointer to a two-dimensional array of pixel data that is processed to build the convolution filter kernel.
            |


#### ConvolutionFilter2D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ConvolutionFilter2D``1(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Define a two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution2D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The width of the pixel array referenced by data.
            |
|height| 
            The height of the pixel array referenced by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, and LuminanceAlpha.
            |
|type| 
            The type of the pixel data in data. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: format,type,width,height] 
            Pointer to a two-dimensional array of pixel data that is processed to build the convolution filter kernel.
            |


#### ConvolutionParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.ConvolutionParameter(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.ConvolutionParameter,System.Int32*)
```
Set convolution parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target for the convolution parameter. Must be one of Convolution1D, Convolution2D, or Separable2D.
            |
|pname| 
            The parameter to be set. Must be ConvolutionBorderMode.
            |
|@params|[length: pname] 
            The parameter value. Must be one of Reduce, ConstantBorder, ReplicateBorder.
            |


#### CopyBufferSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyBufferSubData(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v3.1 or ARB_copy_buffer|VERSION_3_1]
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


#### CopyColorSubTable
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyColorSubTable(OpenTK.Graphics.OpenGL4.ColorTableTarget,System.Int32,System.Int32,System.Int32,System.Int32)
```
Respecify a portion of a color table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|start| 
            The starting index of the portion of the color table to be replaced.
            |
|x| 
            The window coordinates of the left corner of the row of pixels to be copied.
            |
|y| 
            The window coordinates of the left corner of the row of pixels to be copied.
            |
|width| 
            The number of table entries to replace.
            |


#### CopyColorTable
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyColorTable(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32)
```
Copy pixels into a color table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The color table target. Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|internalformat| 
            The internal storage format of the texture image. Must be one of the following symbolic constants: Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|x| 
            The x coordinate of the lower-left corner of the pixel rectangle to be transferred to the color table.
            |
|y| 
            The y coordinate of the lower-left corner of the pixel rectangle to be transferred to the color table.
            |
|width| 
            The width of the pixel rectangle.
            |


#### CopyConvolutionFilter1D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyConvolutionFilter1D(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32)
```
Copy pixels into a one-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution1D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|x| 
            The window space coordinates of the lower-left coordinate of the pixel array to copy.
            |
|y| 
            The window space coordinates of the lower-left coordinate of the pixel array to copy.
            |
|width| 
            The width of the pixel array to copy.
            |


#### CopyConvolutionFilter2D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyConvolutionFilter2D(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32)
```
Copy pixels into a two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Convolution2D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|x| 
            The window space coordinates of the lower-left coordinate of the pixel array to copy.
            |
|y| 
            The window space coordinates of the lower-left coordinate of the pixel array to copy.
            |
|width| 
            The width of the pixel array to copy.
            |
|height| 
            The height of the pixel array to copy.
            |


#### CopyImageSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyImageSubData(System.UInt32,OpenTK.Graphics.OpenGL4.ImageTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt32,OpenTK.Graphics.OpenGL4.ImageTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_copy_image|VERSION_4_3]
 Perform a raw data copy between two images

|Parameter Name|Remarks|
|--------------|-------|
|srcName| 
            The name of a texture or renderbuffer object from which to copy.
            |
|srcTarget| 
            The target representing the namespace of the source name srcName.
            |
|srcLevel| 
            The mipmap level to read from the source.
            |
|srcX| 
            The X coordinate of the left edge of the souce region to copy.
            |
|srcY| 
            The Y coordinate of the top edge of the souce region to copy.
            |
|srcZ| 
            The Z coordinate of the near edge of the souce region to copy.
            |
|dstName| 
            The name of a texture or renderbuffer object to which to copy.
            |
|dstTarget| 
            The target representing the namespace of the destination name dstName.
            |
|dstLevel| 
            The X coordinate of the left edge of the destination region.
            |
|dstX| 
            The X coordinate of the left edge of the destination region.
            |
|dstY| 
            The Y coordinate of the top edge of the destination region.
            |
|dstZ| 
            The Z coordinate of the near edge of the destination region.
            |
|srcWidth| 
            The width of the region to be copied.
            |
|srcHeight| 
            The height of the region to be copied.
            |
|srcDepth| 
            The depth of the region to be copied.
            |


#### CopyTexImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyTexImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.1]
 Copy pixels into a 1D texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the internal format of the texture. Must be one of the following symbolic constants: CompressedRed, CompressedRg, CompressedRgb, CompressedRgba. CompressedSrgb, CompressedSrgbAlpha. DepthComponent, DepthComponent16, DepthComponent24, DepthComponent32, StencilIndex8, Red, Rg, Rgb, R3G3B2, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, Rgba16, Srgb, Srgb8, SrgbAlpha, or Srgb8Alpha8.
            |
|x| 
            Specify the window coordinates of the left corner of the row of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the left corner of the row of pixels to be copied.
            |
|width| 
            Specifies the width of the texture image. The height of the texture image is 1.
            |
|border| 
            Must be 0.
            |


#### CopyTexImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyTexImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.1]
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
            Specifies the internal format of the texture. Must be one of the following symbolic constants: CompressedRed, CompressedRg, CompressedRgb, CompressedRgba. CompressedSrgb, CompressedSrgbAlpha. DepthComponent, DepthComponent16, DepthComponent24, DepthComponent32, StencilIndex8, Red, Rg, Rgb, R3G3B2, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, Rgba16, Srgb, Srgb8, SrgbAlpha, or Srgb8Alpha8.
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
            Must be 0.
            |


#### CopyTexSubImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyTexSubImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.1]
 Copy a one-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies the texel offset within the texture array.
            |
|x| 
            Specify the window coordinates of the left corner of the row of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the left corner of the row of pixels to be copied.
            |
|width| 
            Specifies the width of the texture subimage.
            |


#### CopyTexSubImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.CopyTexSubImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.1]
 Copy a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or Texture1DArray.
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
OpenTK.Graphics.OpenGL4.GL.CopyTexSubImage3D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.2]
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
OpenTK.Graphics.OpenGL4.GL.CreateProgram
```
[requires: v2.0]
 Creates a program object

#### CreateShader
```csharp
OpenTK.Graphics.OpenGL4.GL.CreateShader(OpenTK.Graphics.OpenGL4.ShaderType)
```
[requires: v2.0]
 Creates a shader object

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the type of shader to be created. Must be one of ComputeShader, VertexShader, TessControlShader, TessEvaluationShader, GeometryShader, or FragmentShader.
            |


#### CreateShaderProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.CreateShaderProgram(OpenTK.Graphics.OpenGL4.ShaderType,System.Int32,System.String[])
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Create a stand-alone program from an array of null-terminated source code strings

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the type of shader to create.
            |
|count| 
            Specifies the number of source code strings in the array strings.
            |
|strings|[length: count] 
            Specifies the address of an array of pointers to source code strings from which to create the program object.
            |


#### CullFace
```csharp
OpenTK.Graphics.OpenGL4.GL.CullFace(OpenTK.Graphics.OpenGL4.CullFaceMode)
```
[requires: v1.0]
 Specify whether front- or back-facing facets can be culled

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies whether front- or back-facing facets are candidates for culling. Symbolic constants Front, Back, and FrontAndBack are accepted. The initial value is Back.
            |


#### DebugMessageCallback
```csharp
OpenTK.Graphics.OpenGL4.GL.DebugMessageCallback(OpenTK.Graphics.OpenGL4.DebugProc,System.IntPtr)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.DebugMessageCallback``1(OpenTK.Graphics.OpenGL4.DebugProc,``0@)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.DebugMessageControl(OpenTK.Graphics.OpenGL4.DebugSourceControl,OpenTK.Graphics.OpenGL4.DebugTypeControl,OpenTK.Graphics.OpenGL4.DebugSeverityControl,System.Int32,System.UInt32*,System.Boolean)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.DebugMessageInsert(OpenTK.Graphics.OpenGL4.DebugSourceExternal,OpenTK.Graphics.OpenGL4.DebugType,System.UInt32,OpenTK.Graphics.OpenGL4.DebugSeverity,System.Int32,System.String)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.DeleteBuffer(System.UInt32)
```
[requires: v1.5]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteBuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteBuffers(System.Int32,System.UInt32*)
```
[requires: v1.5]
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
OpenTK.Graphics.OpenGL4.GL.DeleteFramebuffer(System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Delete framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: n] 
            A pointer to an array containing n framebuffer objects to be deleted.
            |


#### DeleteFramebuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteFramebuffers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.DeleteProgram(System.UInt32)
```
[requires: v2.0]
 Deletes a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be deleted.
            |


#### DeleteProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteProgramPipeline(System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteProgramPipelines
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteProgramPipelines(System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline objects to delete.
            |
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteQueries
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteQueries(System.Int32,System.UInt32*)
```
[requires: v1.5]
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
OpenTK.Graphics.OpenGL4.GL.DeleteQuery(System.UInt32)
```
[requires: v1.5]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### DeleteRenderbuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteRenderbuffer(System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Delete renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: n] 
            A pointer to an array containing n renderbuffer objects to be deleted.
            |


#### DeleteRenderbuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.DeleteSampler(System.UInt32)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Delete named sampler objects

|Parameter Name|Remarks|
|--------------|-------|
|samplers|[length: count] 
            Specifies an array of sampler objects to be deleted.
            |


#### DeleteSamplers
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteSamplers(System.Int32,System.UInt32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
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
OpenTK.Graphics.OpenGL4.GL.DeleteShader(System.UInt32)
```
[requires: v2.0]
 Deletes a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be deleted.
            |


#### DeleteSync
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteSync(System.IntPtr)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
 Delete a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            The sync object to be deleted.
            |


#### DeleteTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteTexture(System.UInt32)
```
[requires: v1.1]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteTextures
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteTextures(System.Int32,System.UInt32*)
```
[requires: v1.1]
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
OpenTK.Graphics.OpenGL4.GL.DeleteTransformFeedback(System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Delete transform feedback objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of names of transform feedback objects to delete.
            |


#### DeleteTransformFeedbacks
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
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
OpenTK.Graphics.OpenGL4.GL.DeleteVertexArray(System.UInt32)
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DeleteVertexArrays
```csharp
OpenTK.Graphics.OpenGL4.GL.DeleteVertexArrays(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.DepthFunc(OpenTK.Graphics.OpenGL4.DepthFunction)
```
[requires: v1.0]
 Specify the value used for depth buffer comparisons

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the depth comparison function. Symbolic constants Never, Less, Equal, Lequal, Greater, Notequal, Gequal, and Always are accepted. The initial value is Less.
            |


#### DepthMask
```csharp
OpenTK.Graphics.OpenGL4.GL.DepthMask(System.Boolean)
```
[requires: v1.0]
 Enable or disable writing into the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|flag| 
            Specifies whether the depth buffer is enabled for writing. If flag is False, depth buffer writing is disabled. Otherwise, it is enabled. Initially, depth buffer writing is enabled.
            |


#### DepthRange
```csharp
OpenTK.Graphics.OpenGL4.GL.DepthRange(System.Single,System.Single)
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
 Specify mapping of depth values from normalized device coordinates to window coordinates

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|f| 
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DepthRangeArray
```csharp
OpenTK.Graphics.OpenGL4.GL.DepthRangeArray(System.UInt32,System.Int32,System.Double*)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Specify mapping of depth values from normalized device coordinates to window coordinates for a specified set of viewports

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the index of the first viewport whose depth range to update.
            |
|count| 
            Specifies the number of viewports whose depth range to update.
            |
|v|[length: count] 
            Specifies the address of an array containing the near and far values for the depth range of each modified viewport.
            |


#### DepthRangeIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.DepthRangeIndexed(System.UInt32,System.Double,System.Double)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Specify mapping of depth values from normalized device coordinates to window coordinates for a specified viewport

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the viewport whose depth range to update.
            |
|n| 
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|f| 
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DetachShader
```csharp
OpenTK.Graphics.OpenGL4.GL.DetachShader(System.UInt32,System.UInt32)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.Disable(OpenTK.Graphics.OpenGL4.IndexedEnableCap,System.UInt32)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### DisableVertexAttribArray
```csharp
OpenTK.Graphics.OpenGL4.GL.DisableVertexAttribArray(System.UInt32)
```
[requires: v2.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### DispatchCompute
```csharp
OpenTK.Graphics.OpenGL4.GL.DispatchCompute(System.UInt32,System.UInt32,System.UInt32)
```
[requires: v4.3 or ARB_compute_shader|VERSION_4_3]
 Launch one or more compute work groups

|Parameter Name|Remarks|
|--------------|-------|
|num_groups_x| 
            The number of work groups to be launched in the X dimension.
            |
|num_groups_y| 
            The number of work groups to be launched in the Y dimension.
            |
|num_groups_z| 
            The number of work groups to be launched in the Z dimension.
            |


#### DispatchComputeIndirect
```csharp
OpenTK.Graphics.OpenGL4.GL.DispatchComputeIndirect(System.IntPtr)
```
[requires: v4.3 or ARB_compute_shader|VERSION_4_3]
 Launch one or more compute work groups using parameters stored in a buffer

|Parameter Name|Remarks|
|--------------|-------|
|indirect| 
            The offset into the buffer object currently bound to the DispatchIndirectBuffer buffer target at which the dispatch parameters are stored.
            |


#### DrawArrays
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawArrays(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,System.Int32)
```
[requires: v1.1]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|first| 
            Specifies the starting index in the enabled arrays.
            |
|count| 
            Specifies the number of indices to be rendered.
            |


#### DrawArraysIndirect
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawArraysIndirect(OpenTK.Graphics.OpenGL4.PrimitiveType,System.IntPtr)
```
[requires: v4.0 or ARB_draw_indirect|VERSION_4_0]
 Render primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect| 
            Specifies the address of a structure containing the draw parameters.
            |


#### DrawArraysIndirect``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawArraysIndirect``1(OpenTK.Graphics.OpenGL4.PrimitiveType,``0@)
```
[requires: v4.0 or ARB_draw_indirect|VERSION_4_0]
 Render primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect| 
            Specifies the address of a structure containing the draw parameters.
            |


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawArraysInstanced(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: v3.1]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawArraysInstancedBaseInstance
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawArraysInstancedBaseInstance(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,System.Int32,System.Int32,System.UInt32)
```
[requires: v4.2 or ARB_base_instance|VERSION_4_2]
 Draw multiple instances of a range of elements with offset applied to instanced attributes

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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |
|baseinstance| 
            Specifies the base instance for use in fetching instanced vertex attributes.
            |


#### DrawBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawBuffer(OpenTK.Graphics.OpenGL4.DrawBufferMode)
```
[requires: v1.0]
 Specify which color buffers are to be drawn into

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies up to four color buffers to be drawn into. Symbolic constants None, FrontLeft, FrontRight, BackLeft, BackRight, Front, Back, Left, Right, and FrontAndBack are accepted. The initial value is Front for single-buffered contexts, and Back for double-buffered contexts.
            |


#### DrawBuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawBuffers(System.Int32,OpenTK.Graphics.OpenGL4.DrawBuffersEnum*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.DrawElements(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr)
```
[requires: v1.1]
 Render primitives from array data

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


#### DrawElements``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElements``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@)
```
[requires: v1.1]
 Render primitives from array data

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


#### DrawElementsBaseVertex
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsBaseVertex(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawElementsBaseVertex``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsBaseVertex``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawElementsIndirect
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsIndirect(OpenTK.Graphics.OpenGL4.PrimitiveType,OpenTK.Graphics.OpenGL4.All,System.IntPtr)
```
[requires: v4.0 or ARB_draw_indirect|VERSION_4_0]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect| 
            Specifies the address of a structure containing the draw parameters.
            |


#### DrawElementsIndirect``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsIndirect``1(OpenTK.Graphics.OpenGL4.PrimitiveType,OpenTK.Graphics.OpenGL4.All,``0@)
```
[requires: v4.0 or ARB_draw_indirect|VERSION_4_0]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect| 
            Specifies the address of a structure containing the draw parameters.
            |


#### DrawElementsInstanced
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstanced(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: v3.1]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstanced``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstanced``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32)
```
[requires: v3.1]
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
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstancedBaseInstance
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseInstance(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32,System.UInt32)
```
[requires: v4.2 or ARB_base_instance|VERSION_4_2]
 Draw multiple instances of a set of elements with offset applied to instanced attributes

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
|indices|[length: count] 
            Specifies a pointer to the location where the indices are stored.
            |
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |
|baseinstance| 
            Specifies the base instance for use in fetching instanced vertex attributes.
            |


#### DrawElementsInstancedBaseInstance``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseInstance``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32,System.UInt32)
```
[requires: v4.2 or ARB_base_instance|VERSION_4_2]
 Draw multiple instances of a set of elements with offset applied to instanced attributes

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
|indices|[length: count] 
            Specifies a pointer to the location where the indices are stored.
            |
|instancecount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |
|baseinstance| 
            Specifies the base instance for use in fetching instanced vertex attributes.
            |


#### DrawElementsInstancedBaseVertex
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseVertex(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render multiple instances of a set of primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
            Specifies the number of instances of the indexed geometry that should be drawn.
            |
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawElementsInstancedBaseVertex``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseVertex``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render multiple instances of a set of primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
            Specifies the number of instances of the indexed geometry that should be drawn.
            |
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawElementsInstancedBaseVertexBaseInstance
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseVertexBaseInstance(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32,System.Int32,System.UInt32)
```
[requires: v4.2 or ARB_base_instance|VERSION_4_2]
 Render multiple instances of a set of primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count] 
            Specifies a pointer to the location where the indices are stored.
            |
|instancecount| 
            Specifies the number of instances of the indexed geometry that should be drawn.
            |
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |
|baseinstance| 
            Specifies the base instance for use in fetching instanced vertex attributes.
            |


#### DrawElementsInstancedBaseVertexBaseInstance``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawElementsInstancedBaseVertexBaseInstance``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32,System.Int32,System.UInt32)
```
[requires: v4.2 or ARB_base_instance|VERSION_4_2]
 Render multiple instances of a set of primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count] 
            Specifies a pointer to the location where the indices are stored.
            |
|instancecount| 
            Specifies the number of instances of the indexed geometry that should be drawn.
            |
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |
|baseinstance| 
            Specifies the base instance for use in fetching instanced vertex attributes.
            |


#### DrawRangeElements
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawRangeElements(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr)
```
[requires: v1.2]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
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
OpenTK.Graphics.OpenGL4.GL.DrawRangeElements``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@)
```
[requires: v1.2]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
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


#### DrawRangeElementsBaseVertex
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawRangeElementsBaseVertex(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawRangeElementsBaseVertex``1
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawRangeElementsBaseVertex``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render primitives from array data with a per-element offset

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, Triangles, LinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
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
|basevertex| 
            Specifies a constant that should be added to each element of indices when chosing elements from the enabled vertex arrays.
            |


#### DrawTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawTransformFeedback(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Render primitives using a count derived from a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|id| 
            Specifies the name of a transform feedback object from which to retrieve a primitive count.
            |


#### DrawTransformFeedbackInstanced
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawTransformFeedbackInstanced(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.Int32)
```
[requires: v4.2 or ARB_transform_feedback_instanced|VERSION_4_2]
 Render multiple instances of primitives using a count derived from a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|id| 
            Specifies the name of a transform feedback object from which to retrieve a primitive count.
            |
|instancecount| 
            Specifies the number of instances of the geometry to render.
            |


#### DrawTransformFeedbackStream
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawTransformFeedbackStream(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback3|VERSION_4_0]
 Render primitives using a count derived from a specifed stream of a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|id| 
            Specifies the name of a transform feedback object from which to retrieve a primitive count.
            |
|stream| 
            Specifies the index of the transform feedback stream from which to retrieve a primitive count.
            |


#### DrawTransformFeedbackStreamInstanced
```csharp
OpenTK.Graphics.OpenGL4.GL.DrawTransformFeedbackStreamInstanced(OpenTK.Graphics.OpenGL4.PrimitiveType,System.UInt32,System.UInt32,System.Int32)
```
[requires: v4.2 or ARB_transform_feedback_instanced|VERSION_4_2]
 Render multiple instances of primitives using a count derived from a specifed stream of a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|id| 
            Specifies the name of a transform feedback object from which to retrieve a primitive count.
            |
|stream| 
            Specifies the index of the transform feedback stream from which to retrieve a primitive count.
            |
|instancecount| 
            Specifies the number of instances of the geometry to render.
            |


#### Enable
```csharp
OpenTK.Graphics.OpenGL4.GL.Enable(OpenTK.Graphics.OpenGL4.IndexedEnableCap,System.UInt32)
```
[requires: v3.0]
 Enable or disable server-side GL capabilities

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating a GL capability.
            |
|index| 
            Specifies the index of the switch to disable (for glEnablei and glDisablei only).
            |


#### EnableVertexAttribArray
```csharp
OpenTK.Graphics.OpenGL4.GL.EnableVertexAttribArray(System.UInt32)
```
[requires: v2.0]
 Enable or disable a generic vertex attribute array

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be enabled or disabled.
            |


#### EndConditionalRender
```csharp
OpenTK.Graphics.OpenGL4.GL.EndConditionalRender
```
[requires: v3.0]

#### EndQuery
```csharp
OpenTK.Graphics.OpenGL4.GL.EndQuery(OpenTK.Graphics.OpenGL4.QueryTarget)
```
[requires: v1.5]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### EndQueryIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.EndQueryIndexed(OpenTK.Graphics.OpenGL4.QueryTarget,System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback3|VERSION_4_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### EndTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.EndTransformFeedback
```
[requires: v3.0]

#### FenceSync
```csharp
OpenTK.Graphics.OpenGL4.GL.FenceSync(OpenTK.Graphics.OpenGL4.SyncCondition,OpenTK.Graphics.OpenGL4.WaitSyncFlags)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
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
OpenTK.Graphics.OpenGL4.GL.Finish
```
[requires: v1.0]
 Block until all GL execution is complete

#### Flush
```csharp
OpenTK.Graphics.OpenGL4.GL.Flush
```
[requires: v1.0]
 Force execution of GL commands in finite time

#### FlushMappedBufferRange
```csharp
OpenTK.Graphics.OpenGL4.GL.FlushMappedBufferRange(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr)
```
[requires: v3.0 or ARB_map_buffer_range|VERSION_3_0]
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


#### FramebufferParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferParameter(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferDefaultParameter,System.Int32)
```
[requires: v4.3 or ARB_framebuffer_no_attachments|VERSION_4_3]
 Set a named parameter of a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target of the operation, which must be ReadFramebuffer, DrawFramebuffer or Framebuffer.
            |
|pname| 
            A token indicating the parameter to be modified.
            |
|param| 
            The new value for the parameter named pname.
            |


#### FramebufferRenderbuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferRenderbuffer(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,OpenTK.Graphics.OpenGL4.RenderbufferTarget,System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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


#### FramebufferTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferTexture(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,System.UInt32,System.Int32)
```
[requires: v3.2]
 Attach a level of a texture object as a logical buffer to the currently bound framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer. attachment must be ColorAttachmenti, DepthAttachment, StencilAttachment or DepthStencilAttachment.
            |
|texture| 
            Specifies the texture object to attach to the framebuffer attachment point named by attachment.
            |
|level| 
            Specifies the mipmap level of texture to attach.
            |


#### FramebufferTexture1D
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferTexture1D(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,OpenTK.Graphics.OpenGL4.TextureTarget,System.UInt32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### FramebufferTexture2D
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferTexture2D(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,OpenTK.Graphics.OpenGL4.TextureTarget,System.UInt32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### FramebufferTexture3D
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferTexture3D(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,OpenTK.Graphics.OpenGL4.TextureTarget,System.UInt32,System.Int32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|zoffset|-|


#### FramebufferTextureLayer
```csharp
OpenTK.Graphics.OpenGL4.GL.FramebufferTextureLayer(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,System.UInt32,System.Int32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Attach a single layer of a texture to a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer. attachment must be ColorAttachmenti, DepthAttachment, StencilAttachment or DepthStencilAttachment.
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
OpenTK.Graphics.OpenGL4.GL.FrontFace(OpenTK.Graphics.OpenGL4.FrontFaceDirection)
```
[requires: v1.0]
 Define front- and back-facing polygons

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies the orientation of front-facing polygons. Cw and Ccw are accepted. The initial value is Ccw.
            |


#### GenBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.GenBuffer
```
[requires: v1.5]
 Generate buffer object names

#### GenBuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.GenBuffers(System.Int32,System.UInt32*)
```
[requires: v1.5]
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
OpenTK.Graphics.OpenGL4.GL.GenerateMipmap(OpenTK.Graphics.OpenGL4.GenerateMipmapTarget)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Generate mipmaps for a specified texture target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture whose mimaps to generate is bound. target must be Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray or TextureCubeMap.
            |


#### GenFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.GenFramebuffer
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Generate framebuffer object names

#### GenFramebuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.GenFramebuffers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Generate framebuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer object names to generate.
            |
|framebuffers|[length: n] 
            Specifies an array in which the generated framebuffer object names are stored.
            |


#### GenProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.GenProgramPipeline
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Reserve program pipeline object names

#### GenProgramPipelines
```csharp
OpenTK.Graphics.OpenGL4.GL.GenProgramPipelines(System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Reserve program pipeline object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline object names to reserve.
            |
|pipelines|[length: n] 
            Specifies an array of into which the reserved names will be written.
            |


#### GenQueries
```csharp
OpenTK.Graphics.OpenGL4.GL.GenQueries(System.Int32,System.UInt32*)
```
[requires: v1.5]
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
OpenTK.Graphics.OpenGL4.GL.GenQuery
```
[requires: v1.5]
 Generate query object names

#### GenRenderbuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.GenRenderbuffer
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Generate renderbuffer object names

#### GenRenderbuffers
```csharp
OpenTK.Graphics.OpenGL4.GL.GenRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.GenSampler
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Generate sampler object names

#### GenSamplers
```csharp
OpenTK.Graphics.OpenGL4.GL.GenSamplers(System.Int32,System.UInt32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
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
OpenTK.Graphics.OpenGL4.GL.GenTexture
```
[requires: v1.1]
 Generate texture names

#### GenTextures
```csharp
OpenTK.Graphics.OpenGL4.GL.GenTextures(System.Int32,System.UInt32*)
```
[requires: v1.1]
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
OpenTK.Graphics.OpenGL4.GL.GenTransformFeedback
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Reserve transform feedback object names

#### GenTransformFeedbacks
```csharp
OpenTK.Graphics.OpenGL4.GL.GenTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
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
OpenTK.Graphics.OpenGL4.GL.GenVertexArray
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
 Generate vertex array object names

#### GenVertexArrays
```csharp
OpenTK.Graphics.OpenGL4.GL.GenVertexArrays(System.Int32,System.UInt32*)
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
 Generate vertex array object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array object names to generate.
            |
|arrays|[length: n] 
            Specifies an array in which the generated vertex array object names are stored.
            |


#### GetActiveAtomicCounterBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveAtomicCounterBuffer(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL4.AtomicCounterBufferParameter,System.Int32*)
```
[requires: v4.2 or ARB_shader_atomic_counters|VERSION_4_2]
 Retrieve information about the set of active atomic counter buffers for a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object from which to retrieve information.
            |
|bufferIndex| 
            Specifies index of an active atomic counter buffer.
            |
|pname| 
            Specifies which parameter of the atomic counter buffer to retrieve.
            |
|@params|[length: pname] 
            Specifies the address of a variable into which to write the retrieved information.
            |


#### GetActiveAttrib
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveAttrib(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL4.ActiveAttribType*,System.Text.StringBuilder)
```
[requires: v2.0]
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


#### GetActiveSubroutineName
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveSubroutineName(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Query the name of an active shader subroutine

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing the subroutine.
            |
|shadertype| 
            Specifies the shader stage from which to query the subroutine name.
            |
|index| 
            Specifies the index of the shader subroutine uniform.
            |
|bufsize| 
            Specifies the size of the buffer whose address is given in name.
            |
|length|[length: 1] 
            Specifies the address of a variable which is to receive the length of the shader subroutine uniform name.
            |
|name|[length: bufsize] 
            Specifies the address of an array into which the name of the shader subroutine uniform will be written.
            |


#### GetActiveSubroutineUniform
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveSubroutineUniform(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,System.UInt32,OpenTK.Graphics.OpenGL4.ActiveSubroutineUniformParameter,System.Int32*)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Query a property of an active shader subroutine uniform

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing the subroutine.
            |
|shadertype| 
            Specifies the shader stage from which to query for the subroutine parameter. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|index| 
            Specifies the index of the shader subroutine uniform.
            |
|pname| 
            Specifies the parameter of the shader subroutine uniform to query. pname must be NumCompatibleSubroutines, CompatibleSubroutines, UniformSize or UniformNameLength.
            |
|values|[length: pname] 
            Specifies the address of a into which the queried value or values will be placed.
            |


#### GetActiveSubroutineUniformName
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveSubroutineUniformName(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Query the name of an active shader subroutine uniform

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing the subroutine.
            |
|shadertype| 
            Specifies the shader stage from which to query for the subroutine parameter. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|index| 
            Specifies the index of the shader subroutine uniform.
            |
|bufsize| 
            Specifies the size of the buffer whose address is given in name.
            |
|length|[length: 1] 
            Specifies the address of a variable into which is written the number of characters copied into name.
            |
|name|[length: bufsize] 
            Specifies the address of a buffer that will receive the name of the specified shader subroutine uniform.
            |


#### GetActiveUniform
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveUniform(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL4.ActiveUniformType*,System.Text.StringBuilder)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetActiveUniformBlock(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL4.ActiveUniformBlockParameter,System.Int32*)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
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
OpenTK.Graphics.OpenGL4.GL.GetActiveUniformBlockName(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
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


#### GetActiveUniformName
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveUniformName(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
 Query the name of an active uniform

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program containing the active uniform index uniformIndex.
            |
|uniformIndex| 
            Specifies the index of the active uniform whose name to query.
            |
|bufSize| 
            Specifies the size of the buffer, in units of GLchar, of the buffer whose address is specified in uniformName.
            |
|length|[length: 1] 
            Specifies the address of a variable that will receive the number of characters that were or would have been written to the buffer addressed by uniformName.
            |
|uniformName|[length: bufSize] 
            Specifies the address of a buffer into which the GL will place the name of the active uniform at uniformIndex within program.
            |


#### GetActiveUniforms
```csharp
OpenTK.Graphics.OpenGL4.GL.GetActiveUniforms(System.UInt32,System.Int32,System.UInt32*,OpenTK.Graphics.OpenGL4.ActiveUniformParameter,System.Int32*)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
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
OpenTK.Graphics.OpenGL4.GL.GetAttachedShaders(System.UInt32,System.Int32,System.Int32*,System.UInt32*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetAttribLocation(System.UInt32,System.String)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetBoolean(OpenTK.Graphics.OpenGL4.GetPName,System.Boolean*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetBufferParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetBufferParameter(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.BufferParameterName,System.Int32*)
```
[requires: v1.5]
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
OpenTK.Graphics.OpenGL4.GL.GetBufferPointer(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.BufferPointer,System.IntPtr)
```
[requires: v1.5]
 Return the pointer to a mapped buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the pointer to be returned.  The symbolic constant must be BufferMapPointer.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetBufferPointer``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetBufferPointer``1(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.BufferPointer,``0@)
```
[requires: v1.5]
 Return the pointer to a mapped buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the pointer to be returned.  The symbolic constant must be BufferMapPointer.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetBufferSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.GetBufferSubData(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v1.5]
 Returns a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryResultBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the offset into the buffer object's data store from which data will be returned, measured in bytes.
            |
|size| 
            Specifies the size in bytes of the data store region being returned.
            |
|data|[length: size] 
            Specifies a pointer to the location where buffer object data is returned.
            |


#### GetBufferSubData``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetBufferSubData``1(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,``0@)
```
[requires: v1.5]
 Returns a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryResultBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the offset into the buffer object's data store from which data will be returned, measured in bytes.
            |
|size| 
            Specifies the size in bytes of the data store region being returned.
            |
|data|[length: size] 
            Specifies a pointer to the location where buffer object data is returned.
            |


#### GetColorTable
```csharp
OpenTK.Graphics.OpenGL4.GL.GetColorTable(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Retrieve contents of a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|format| 
            The format of the pixel data in table. The possible values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in table. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|table|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTable``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetColorTable``1(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Retrieve contents of a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|format| 
            The format of the pixel data in table. The possible values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in table. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|table|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTableParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetColorTableParameter(OpenTK.Graphics.OpenGL4.ColorTableTarget,OpenTK.Graphics.OpenGL4.GetColorTableParameterPName,System.Int32*)
```
Get color lookup table parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target color table. Must be ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|pname| 
            The symbolic name of a color lookup table parameter. Must be one of ColorTableBias, ColorTableScale, ColorTableFormat, ColorTableWidth, ColorTableRedSize, ColorTableGreenSize, ColorTableBlueSize, ColorTableAlphaSize, ColorTableLuminanceSize, or ColorTableIntensitySize.
            |
|@params|[length: pname] 
            A pointer to an array where the values of the parameter will be stored.
            |


#### GetCompressedTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.GetCompressedTexImage(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.IntPtr)
```
[requires: v1.3]
 Return a compressed texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies which texture is to be obtained. Texture1D, Texture2D, Texture3D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, and TextureCubeMapNegativeZ are accepted.
            |
|level| 
            Specifies the level-of-detail number of the desired image. Level 0 is the base image level. Level  is the th mipmap reduction image.
            |
|img|[length: target,level] 
            Returns the compressed texture image.
            |


#### GetCompressedTexImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetCompressedTexImage``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,``0@)
```
[requires: v1.3]
 Return a compressed texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies which texture is to be obtained. Texture1D, Texture2D, Texture3D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, and TextureCubeMapNegativeZ are accepted.
            |
|level| 
            Specifies the level-of-detail number of the desired image. Level 0 is the base image level. Level  is the th mipmap reduction image.
            |
|img|[length: target,level] 
            Returns the compressed texture image.
            |


#### GetConvolutionFilter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetConvolutionFilter(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Get current 1D or 2D convolution filter kernel

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The filter to be retrieved. Must be one of Convolution1D or Convolution2D.
            |
|format| 
            Format of the output image. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            Data type of components in the output image. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: target,format,type] 
            Pointer to storage for the output image.
            |


#### GetConvolutionFilter``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetConvolutionFilter``1(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Get current 1D or 2D convolution filter kernel

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The filter to be retrieved. Must be one of Convolution1D or Convolution2D.
            |
|format| 
            Format of the output image. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            Data type of components in the output image. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|image|[length: target,format,type] 
            Pointer to storage for the output image.
            |


#### GetConvolutionParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetConvolutionParameter(OpenTK.Graphics.OpenGL4.ConvolutionTarget,OpenTK.Graphics.OpenGL4.GetConvolutionParameterPName,System.Int32*)
```
Get convolution parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The filter whose parameters are to be retrieved. Must be one of Convolution1D, Convolution2D, or Separable2D.
            |
|pname| 
            The parameter to be retrieved. Must be one of ConvolutionBorderMode, ConvolutionBorderColor, ConvolutionFilterScale, ConvolutionFilterBias, ConvolutionFormat, ConvolutionWidth, ConvolutionHeight, MaxConvolutionWidth, or MaxConvolutionHeight.
            |
|@params|[length: pname] 
            Pointer to storage for the parameters to be retrieved.
            |


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.OpenGL4.GL.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.DebugSource*,OpenTK.Graphics.OpenGL4.DebugType*,System.UInt32*,OpenTK.Graphics.OpenGL4.DebugSeverity*,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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


#### GetDouble
```csharp
OpenTK.Graphics.OpenGL4.GL.GetDouble(OpenTK.Graphics.OpenGL4.GetPName,System.Double*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetError
```csharp
OpenTK.Graphics.OpenGL4.GL.GetError
```
[requires: v1.0]
 Return error information

#### GetFloat
```csharp
OpenTK.Graphics.OpenGL4.GL.GetFloat(OpenTK.Graphics.OpenGL4.GetPName,System.Single*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetFragDataIndex
```csharp
OpenTK.Graphics.OpenGL4.GL.GetFragDataIndex(System.UInt32,System.String)
```
[requires: v3.3 or ARB_blend_func_extended|VERSION_3_3]
 Query the bindings of color indices to user-defined varying out variables

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the program containing varying out variable whose binding to query
            |
|name| 
            The name of the user-defined varying out variable whose index to query
            |


#### GetFragDataLocation
```csharp
OpenTK.Graphics.OpenGL4.GL.GetFragDataLocation(System.UInt32,System.String)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.GetFramebufferAttachmentParameter(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferAttachment,OpenTK.Graphics.OpenGL4.FramebufferParameterName,System.Int32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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


#### GetFramebufferParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetFramebufferParameter(OpenTK.Graphics.OpenGL4.FramebufferTarget,OpenTK.Graphics.OpenGL4.FramebufferDefaultParameter,System.Int32*)
```
[requires: v4.3 or ARB_framebuffer_no_attachments|VERSION_4_3]
 Retrieve a named parameter from a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target of the operation, which must be ReadFramebuffer, DrawFramebuffer or Framebuffer.
            |
|pname| 
            A token indicating the parameter to be retrieved.
            |
|@params|[length: pname] 
            The address of a variable to receive the value of the parameter named pname.
            |


#### GetHistogram
```csharp
OpenTK.Graphics.OpenGL4.GL.GetHistogram(OpenTK.Graphics.OpenGL4.HistogramTarget,System.Boolean,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Get histogram table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Histogram.
            |
|reset| 
            If True, each component counter that is actually returned is reset to zero.  (Other counters are unaffected.) If False, none of the counters in the histogram table is modified.
            |
|format| 
            The format of values to be returned in values. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            The type of values to be returned in values. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|values|[length: target,format,type] 
            A pointer to storage for the returned histogram table.
            |


#### GetHistogram``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetHistogram``1(OpenTK.Graphics.OpenGL4.HistogramTarget,System.Boolean,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Get histogram table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Histogram.
            |
|reset| 
            If True, each component counter that is actually returned is reset to zero.  (Other counters are unaffected.) If False, none of the counters in the histogram table is modified.
            |
|format| 
            The format of values to be returned in values. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            The type of values to be returned in values. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|values|[length: target,format,type] 
            A pointer to storage for the returned histogram table.
            |


#### GetHistogramParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetHistogramParameter(OpenTK.Graphics.OpenGL4.HistogramTarget,OpenTK.Graphics.OpenGL4.GetHistogramParameterPName,System.Int32*)
```
Get histogram parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of Histogram or ProxyHistogram.
            |
|pname| 
            The name of the parameter to be retrieved. Must be one of HistogramWidth, HistogramFormat, HistogramRedSize, HistogramGreenSize, HistogramBlueSize, HistogramAlphaSize, HistogramLuminanceSize, or HistogramSink.
            |
|@params|[length: pname] 
            Pointer to storage for the returned values.
            |


#### GetInteger
```csharp
OpenTK.Graphics.OpenGL4.GL.GetInteger(OpenTK.Graphics.OpenGL4.GetPName,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetInteger64
```csharp
OpenTK.Graphics.OpenGL4.GL.GetInteger64(OpenTK.Graphics.OpenGL4.GetPName,System.Int64*)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetInternalformat
```csharp
OpenTK.Graphics.OpenGL4.GL.GetInternalformat(OpenTK.Graphics.OpenGL4.ImageTarget,OpenTK.Graphics.OpenGL4.SizedInternalFormat,OpenTK.Graphics.OpenGL4.InternalFormatParameter,System.Int32,System.Int32*)
```
[requires: v4.2 or ARB_internalformat_query|VERSION_4_2]
 Retrieve information about implementation-dependent support for internal formats

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Indicates the usage of the internal format. target must be Texture1D, Texture1DArray, Texture2D, Texture2DArray, Texture3D, TextureCubeMap, TextureCubeMapArray, TextureRectangle, TextureBuffer, Renderbuffer, Texture2DMultisample or Texture2DMultisampleArray.
            |
|internalformat| 
            Specifies the internal format about which to retrieve information.
            |
|pname| 
            Specifies the type of information to query.
            |
|bufSize| 
            Specifies the maximum number of basic machine units that may be written to params by the function.
            |
|@params|[length: bufSize] 
            Specifies the address of a variable into which to write the retrieved information.
            |


#### GetMinmax
```csharp
OpenTK.Graphics.OpenGL4.GL.GetMinmax(OpenTK.Graphics.OpenGL4.MinmaxTarget,System.Boolean,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
Get minimum and maximum pixel values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Minmax.
            |
|reset| 
            If True, all entries in the minmax table that are actually returned are reset to their initial values.  (Other entries are unaltered.) If False, the minmax table is unaltered.
            |
|format| 
            The format of the data to be returned in values. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            The type of the data to be returned in values. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|values|[length: target,format,type] 
            A pointer to storage for the returned values.
            |


#### GetMinmax``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetMinmax``1(OpenTK.Graphics.OpenGL4.MinmaxTarget,System.Boolean,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
Get minimum and maximum pixel values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Minmax.
            |
|reset| 
            If True, all entries in the minmax table that are actually returned are reset to their initial values.  (Other entries are unaltered.) If False, the minmax table is unaltered.
            |
|format| 
            The format of the data to be returned in values. Must be one of Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            The type of the data to be returned in values. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|values|[length: target,format,type] 
            A pointer to storage for the returned values.
            |


#### GetMinmaxParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetMinmaxParameter(OpenTK.Graphics.OpenGL4.MinmaxTarget,OpenTK.Graphics.OpenGL4.GetMinmaxParameterPName,System.Int32*)
```
Get minmax parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Minmax.
            |
|pname| 
            The parameter to be retrieved. Must be one of MinmaxFormat or MinmaxSink.
            |
|@params|[length: pname] 
            A pointer to storage for the retrieved parameters.
            |


#### GetMultisample
```csharp
OpenTK.Graphics.OpenGL4.GL.GetMultisample(OpenTK.Graphics.OpenGL4.GetMultisamplePName,System.UInt32,System.Single*)
```
[requires: v3.2 or ARB_texture_multisample|VERSION_3_2]
 Retrieve the location of a sample

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the sample parameter name. pname must be SamplePosition.
            |
|index| 
            Specifies the index of the sample whose position to query.
            |
|val|[length: pname] 
            Specifies the address of an array to receive the position of the sample.
            |


#### GetObjectLabel
```csharp
OpenTK.Graphics.OpenGL4.GL.GetObjectLabel(OpenTK.Graphics.OpenGL4.ObjectLabelIdentifier,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.GetObjectPtrLabel(System.IntPtr,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.GetObjectPtrLabel``1(``0@,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.GetPointer(OpenTK.Graphics.OpenGL4.GetPointervPName,System.IntPtr)
```
[requires: v4.3 or KHR_debug|VERSION_4_3|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.GetPointer``1(OpenTK.Graphics.OpenGL4.GetPointervPName,``0@)
```
[requires: v4.3 or KHR_debug|VERSION_4_3|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.GetProgram(System.UInt32,OpenTK.Graphics.OpenGL4.GetProgramParameterName,System.Int32*)
```
[requires: v2.0]
 Returns a parameter from a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are DeleteStatus, LinkStatus, ValidateStatus, InfoLogLength, AttachedShaders, ActiveAtomicCounterBuffers, ActiveAttributes, ActiveAttributeMaxLength, ActiveUniforms, ActiveUniformBlocks, ActiveUniformBlockMaxNameLength, ActiveUniformMaxLength, ComputeWorkGroupSizeProgramBinaryLength, TransformFeedbackBufferMode, TransformFeedbackVaryings, TransformFeedbackVaryingMaxLength, GeometryVerticesOut, GeometryInputType, and GeometryOutputType.
            |
|@params|[length: pname] 
            Returns the requested object parameter.
            |


#### GetProgramBinary
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramBinary(System.UInt32,System.Int32,System.Int32*,OpenTK.Graphics.OpenGL4.BinaryFormat*,System.IntPtr)
```
[requires: v4.1 or ARB_get_program_binary|VERSION_4_1]
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
OpenTK.Graphics.OpenGL4.GL.GetProgramBinary``1(System.UInt32,System.Int32,System.Int32*,OpenTK.Graphics.OpenGL4.BinaryFormat*,``0@)
```
[requires: v4.1 or ARB_get_program_binary|VERSION_4_1]
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
OpenTK.Graphics.OpenGL4.GL.GetProgramInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0]
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


#### GetProgramInterface
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramInterface(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,OpenTK.Graphics.OpenGL4.ProgramInterfaceParameter,System.Int32*)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Query a property of an interface in a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose interface to query.
            |
|programInterface| 
            A token identifying the interface within program to query.
            |
|pname| 
            The name of the parameter within programInterface to query.
            |
|@params|[length: pname] 
            The address of a variable to retrieve the value of pname for the program interface.
            |


#### GetProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramPipeline(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramPipelineParameter,System.Int32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Retrieve properties of a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object whose parameter retrieve.
            |
|pname| 
            Specifies the name of the parameter to retrieve.
            |
|@params|[length: pname] 
            Specifies the address of a variable into which will be written the value or values of pname for pipeline.
            |


#### GetProgramPipelineInfoLog
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramPipelineInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Retrieve the info log string from a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object from which to retrieve the info log.
            |
|bufSize| 
            Specifies the maximum number of characters, including the null terminator, that may be written into infoLog.
            |
|length|[length: 1] 
            Specifies the address of a variable into which will be written the number of characters written into infoLog.
            |
|infoLog|[length: bufSize] 
            Specifies the address of an array of characters into which will be written the info log for pipeline.
            |


#### GetProgramResource
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramResource(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.ProgramProperty*,System.Int32,System.Int32*,System.Int32*)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Retrieve values for multiple properties of a single active resource within a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose resources to query.
            |
|programInterface| 
            A token identifying the interface within program containing the resource named name.
            |
|index|-|
|propCount|-|
|props|[length: propCount]|
|bufSize|-|
|length|[length: 1]|
|@params|[length: bufSize]|


#### GetProgramResourceIndex
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramResourceIndex(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,System.String)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Query the index of a named resource within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose resources to query.
            |
|programInterface| 
            A token identifying the interface within program containing the resource named name.
            |
|name|[length: name] 
            The name of the resource to query the index of.
            |


#### GetProgramResourceLocation
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramResourceLocation(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,System.String)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Query the location of a named resource within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose resources to query.
            |
|programInterface| 
            A token identifying the interface within program containing the resource named name.
            |
|name|[length: name] 
            The name of the resource to query the location of.
            |


#### GetProgramResourceLocationIndex
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramResourceLocationIndex(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,System.String)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Query the fragment color index of a named variable within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose resources to query.
            |
|programInterface| 
            A token identifying the interface within program containing the resource named name.
            |
|name|[length: name] 
            The name of the resource to query the location of.
            |


#### GetProgramResourceName
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramResourceName(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramInterface,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v4.3 or ARB_program_interface_query|VERSION_4_3]
 Query the name of an indexed resource within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of a program object whose resources to query.
            |
|programInterface| 
            A token identifying the interface within program containing the indexed resource.
            |
|index| 
            The index of the resource within programInterface of program.
            |
|bufSize| 
            The size of the character array whose address is given by name.
            |
|length|[length: 1] 
            The address of a variable which will receive the length of the resource name.
            |
|name|[length: bufSize] 
            The address of a character array into which will be written the name of the resource.
            |


#### GetProgramStage
```csharp
OpenTK.Graphics.OpenGL4.GL.GetProgramStage(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,OpenTK.Graphics.OpenGL4.ProgramStageParameter,System.Int32*)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Retrieve properties of a program object corresponding to a specified shader stage

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing shader stage.
            |
|shadertype| 
            Specifies the shader stage from which to query for the subroutine parameter. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|pname| 
            Specifies the parameter of the shader to query. pname must be ActiveSubroutineUniforms, ActiveSubroutineUniformLocations, ActiveSubroutines, ActiveSubroutineUniformMaxLength, or ActiveSubroutineMaxLength.
            |
|values|[length: 1] 
            Specifies the address of a variable into which the queried value or values will be placed.
            |


#### GetQuery
```csharp
OpenTK.Graphics.OpenGL4.GL.GetQuery(OpenTK.Graphics.OpenGL4.QueryTarget,OpenTK.Graphics.OpenGL4.GetQueryParam,System.Int32*)
```
[requires: v1.5]
 Return parameters of a query object target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a query object target. Must be SamplesPassed, AnySamplesPassed, AnySamplesPassedConservativePrimitivesGenerated, TransformFeedbackPrimitivesWritten, TimeElapsed, or Timestamp.
            |
|pname| 
            Specifies the symbolic name of a query object target parameter. Accepted values are CurrentQuery or QueryCounterBits.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetQueryIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.GetQueryIndexed(OpenTK.Graphics.OpenGL4.QueryTarget,System.UInt32,OpenTK.Graphics.OpenGL4.GetQueryParam,System.Int32*)
```
[requires: v4.0 or ARB_transform_feedback3|VERSION_4_0]
 Return parameters of an indexed query object target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a query object target. Must be SamplesPassed, AnySamplesPassed, AnySamplesPassedConservativePrimitivesGenerated, TransformFeedbackPrimitivesWritten, TimeElapsed, or Timestamp.
            |
|index| 
            Specifies the index of the query object target.
            |
|pname| 
            Specifies the symbolic name of a query object target parameter. Accepted values are CurrentQuery or QueryCounterBits.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetQueryObject
```csharp
OpenTK.Graphics.OpenGL4.GL.GetQueryObject(System.UInt32,OpenTK.Graphics.OpenGL4.GetQueryObjectParam,System.UInt32*)
```
[requires: v1.5]
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
            If a buffer is bound to the QueryResultBuffer target, then params is treated as an offset to a location within that buffer's data store to receive the result of the query. If no buffer is bound to QueryResultBuffer, then params is treated as an address in client memory of a variable to receive the resulting data.
            |


#### GetRenderbufferParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetRenderbufferParameter(OpenTK.Graphics.OpenGL4.RenderbufferTarget,OpenTK.Graphics.OpenGL4.RenderbufferParameterName,System.Int32*)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.GetSamplerParameter(System.UInt32,OpenTK.Graphics.OpenGL4.SamplerParameterName,System.Int32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Return sampler parameter values

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies name of the sampler object from which to retrieve parameters.
            |
|pname| 
            Specifies the symbolic name of a sampler parameter. TextureMagFilter, TextureMinFilter, TextureMinLod, TextureMaxLod, TextureLodBias, TextureWrapS, TextureWrapT, TextureWrapR, TextureBorderColor, TextureCompareMode, and TextureCompareFunc are accepted.
            |
|@params|[length: pname] 
            Returns the sampler parameters.
            |


#### GetSamplerParameterI
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSamplerParameterI(System.UInt32,OpenTK.Graphics.OpenGL4.All,System.UInt32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|sampler|-|
|pname|-|
|@params|[length: pname]|


#### GetSeparableFilter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSeparableFilter(OpenTK.Graphics.OpenGL4.SeparableTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr,System.IntPtr,System.IntPtr)
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The separable filter to be retrieved. Must be Separable2D.
            |
|format| 
            Format of the output images. Must be one of Red, Green, Blue, Alpha, Rgb, BgrRgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            Data type of components in the output images. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|row|[length: target,format,type] 
            Pointer to storage for the row filter image.
            |
|column|[length: target,format,type] 
            Pointer to storage for the column filter image.
            |
|span|[length: target,format,type] 
            Pointer to storage for the span filter image (currently unused).
            |


#### GetSeparableFilter``3
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSeparableFilter``3(OpenTK.Graphics.OpenGL4.SeparableTarget,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@,``1@,``2@)
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The separable filter to be retrieved. Must be Separable2D.
            |
|format| 
            Format of the output images. Must be one of Red, Green, Blue, Alpha, Rgb, BgrRgba, Bgra, Luminance, or LuminanceAlpha.
            |
|type| 
            Data type of components in the output images. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|row|[length: target,format,type] 
            Pointer to storage for the row filter image.
            |
|column|[length: target,format,type] 
            Pointer to storage for the column filter image.
            |
|span|[length: target,format,type] 
            Pointer to storage for the span filter image (currently unused).
            |


#### GetShader
```csharp
OpenTK.Graphics.OpenGL4.GL.GetShader(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderParameter,System.Int32*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetShaderInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetShaderPrecisionFormat(OpenTK.Graphics.OpenGL4.ShaderType,OpenTK.Graphics.OpenGL4.ShaderPrecision,System.Int32*,System.Int32*)
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
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
OpenTK.Graphics.OpenGL4.GL.GetShaderSource(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetString(OpenTK.Graphics.OpenGL4.StringNameIndexed,System.UInt32)
```
[requires: v3.0]
 Return a string describing the current GL connection

|Parameter Name|Remarks|
|--------------|-------|
|name| 
            Specifies a symbolic constant, one of Vendor, Renderer, Version, or ShadingLanguageVersion. Additionally, glGetStringi accepts the Extensions token.
            |
|index| 
            For glGetStringi, specifies the index of the string to return.
            |


#### GetSubroutineIndex
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSubroutineIndex(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,System.String)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Retrieve the index of a subroutine uniform of a given shader stage within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing shader stage.
            |
|shadertype| 
            Specifies the shader stage from which to query for subroutine uniform index. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|name| 
            Specifies the name of the subroutine uniform whose index to query.
            |


#### GetSubroutineUniformLocation
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSubroutineUniformLocation(System.UInt32,OpenTK.Graphics.OpenGL4.ShaderType,System.String)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Retrieve the location of a subroutine uniform of a given shader stage within a program

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of the program containing shader stage.
            |
|shadertype| 
            Specifies the shader stage from which to query for subroutine uniform index. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|name| 
            Specifies the name of the subroutine uniform whose index to query.
            |


#### GetSync
```csharp
OpenTK.Graphics.OpenGL4.GL.GetSync(System.IntPtr,OpenTK.Graphics.OpenGL4.SyncParameterName,System.Int32,System.Int32*,System.Int32*)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
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


#### GetTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTexImage(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.0]
 Return a texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies which texture is to be obtained. Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, and TextureCubeMapNegativeZ are accepted.
            |
|level| 
            Specifies the level-of-detail number of the desired image. Level 0 is the base image level. Level  is the th mipmap reduction image.
            |
|format| 
            Specifies a pixel format for the returned data. The supported formats are StencilIndex, DepthComponent, DepthStencil, Red, Green, Blue, Rg, Rgb, Rgba, Bgr, Bgra, RedInteger, GreenInteger, BlueInteger, RgInteger, RgbInteger, RgbaInteger, BgrInteger, BgraInteger.
            |
|type| 
            Specifies a pixel type for the returned data. The supported types are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, UnsignedInt2101010Rev, UnsignedInt248, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, and Float32UnsignedInt248Rev.
            |
|pixels|[length: target,level,format,type] 
            Returns the texture image. Should be a pointer to an array of the type specified by type.
            |


#### GetTexImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTexImage``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.0]
 Return a texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies which texture is to be obtained. Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, and TextureCubeMapNegativeZ are accepted.
            |
|level| 
            Specifies the level-of-detail number of the desired image. Level 0 is the base image level. Level  is the th mipmap reduction image.
            |
|format| 
            Specifies a pixel format for the returned data. The supported formats are StencilIndex, DepthComponent, DepthStencil, Red, Green, Blue, Rg, Rgb, Rgba, Bgr, Bgra, RedInteger, GreenInteger, BlueInteger, RgInteger, RgbInteger, RgbaInteger, BgrInteger, BgraInteger.
            |
|type| 
            Specifies a pixel type for the returned data. The supported types are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, UnsignedInt2101010Rev, UnsignedInt248, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, and Float32UnsignedInt248Rev.
            |
|pixels|[length: target,level,format,type] 
            Returns the texture image. Should be a pointer to an array of the type specified by type.
            |


#### GetTexLevelParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTexLevelParameter(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.GetTextureParameter,System.Int32*)
```
[requires: v1.0]
 Return texture parameter values for a specific level of detail

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the symbolic name of the target texture, one of Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, Texture2DMultisample, Texture2DMultisampleArray, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, ProxyTexture1D, ProxyTexture2D, ProxyTexture3D, ProxyTexture1DArray, ProxyTexture2DArray, ProxyTextureRectangle, ProxyTexture2DMultisample, ProxyTexture2DMultisampleArray, ProxyTextureCubeMap, or TextureBuffer.
            |
|level| 
            Specifies the level-of-detail number of the desired image. Level 0 is the base image level. Level  is the th mipmap reduction image.
            |
|pname| 
            Specifies the symbolic name of a texture parameter. TextureWidth, TextureHeight, TextureDepth, TextureInternalFormat, TextureRedSize, TextureGreenSize, TextureBlueSize, TextureAlphaSize, TextureDepthSize, TextureCompressed, TextureCompressedImageSize, and TextureBufferOffset are accepted.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetTexParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTexParameter(OpenTK.Graphics.OpenGL4.TextureTarget,OpenTK.Graphics.OpenGL4.GetTextureParameter,System.Int32*)
```
[requires: v1.0]
 Return texture parameter values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the symbolic name of the target texture. Texture1D, Texture2D, Texture1DArray, Texture2DArray, Texture3D, TextureRectangle, TextureCubeMap, and TextureCubeMapArray are accepted.
            |
|pname| 
            Specifies the symbolic name of a texture parameter. DepthStencilTextureMode, TextureBaseLevel, TextureBorderColor, TextureCompareMode, TextureCompareFunc, TextureImmutableFormat, TextureImmutableLevels, TextureLodBias, TextureMagFilter, TextureMaxLevel, TextureMaxLod, TextureMinFilter, TextureMinLod, TextureSwizzleR, TextureSwizzleG, TextureSwizzleB, TextureSwizzleA, TextureSwizzleRgba, TextureViewMinLayer, TextureViewMinLevel, TextureViewNumLayers, TextureViewNumLevels, TextureWrapS, TextureWrapT, and TextureWrapR are accepted.
            |
|@params|[length: pname] 
            Returns the texture parameters.
            |


#### GetTexParameterI
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTexParameterI(OpenTK.Graphics.OpenGL4.TextureTarget,OpenTK.Graphics.OpenGL4.GetTextureParameter,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTransformFeedbackVarying
```csharp
OpenTK.Graphics.OpenGL4.GL.GetTransformFeedbackVarying(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL4.TransformFeedbackType*,System.Text.StringBuilder)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.GetUniform(System.UInt32,System.Int32,System.UInt32*)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.GetUniformBlockIndex(System.UInt32,System.String)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
 Retrieve the index of a named uniform block

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program containing the uniform block.
            |
|uniformBlockName| 
            Specifies the address an array of characters to containing the name of the uniform block whose index to retrieve.
            |


#### GetUniformIndices
```csharp
OpenTK.Graphics.OpenGL4.GL.GetUniformIndices(System.UInt32,System.Int32,System.String[],System.UInt32*)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
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
OpenTK.Graphics.OpenGL4.GL.GetUniformLocation(System.UInt32,System.String)
```
[requires: v2.0]
 Returns the location of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|name| 
            Points to a null terminated string containing the name of the uniform variable whose location is to be queried.
            |


#### GetUniformSubroutine
```csharp
OpenTK.Graphics.OpenGL4.GL.GetUniformSubroutine(OpenTK.Graphics.OpenGL4.ShaderType,System.Int32,System.UInt32*)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Retrieve the value of a subroutine uniform of a given shader stage of the current program

|Parameter Name|Remarks|
|--------------|-------|
|shadertype| 
            Specifies the shader stage from which to query for subroutine uniform index. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|location| 
            Specifies the location of the subroutine uniform.
            |
|@params|[length: 1] 
            Specifies the address of a variable to receive the value or values of the subroutine uniform.
            |


#### GetVertexAttrib
```csharp
OpenTK.Graphics.OpenGL4.GL.GetVertexAttrib(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribParameter,System.Int32*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetVertexAttribI(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribParameter,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: 1]|


#### GetVertexAttribL
```csharp
OpenTK.Graphics.OpenGL4.GL.GetVertexAttribL(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribParameter,System.Double*)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: pname]|


#### GetVertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL4.GL.GetVertexAttribPointer(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribPointerParameter,System.IntPtr)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.GetVertexAttribPointer``1(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribPointerParameter,``0@)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.Hint(OpenTK.Graphics.OpenGL4.HintTarget,OpenTK.Graphics.OpenGL4.HintMode)
```
[requires: v1.0]
 Specify implementation-specific hints

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating the behavior to be controlled. LineSmoothHint, PolygonSmoothHint, TextureCompressionHint, and FragmentShaderDerivativeHint are accepted.
            |
|mode| 
            Specifies a symbolic constant indicating the desired behavior. Fastest, Nicest, and DontCare are accepted.
            |


#### Histogram
```csharp
OpenTK.Graphics.OpenGL4.GL.Histogram(OpenTK.Graphics.OpenGL4.HistogramTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Boolean)
```
Define histogram table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The histogram whose parameters are to be set. Must be one of Histogram or ProxyHistogram.
            |
|width| 
            The number of entries in the histogram table.  Must be a power of 2.
            |
|internalformat| 
            The format of entries in the histogram table. Must be one of Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|sink| 
            If True, pixels will be consumed by the histogramming process and no drawing or texture loading will take place. If False, pixels will proceed to the minmax process after histogramming.
            |


#### InvalidateBufferData
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateBufferData(System.UInt32)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate the content of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            The name of a buffer object whose data store to invalidate.
            |


#### InvalidateBufferSubData
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateBufferSubData(System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate a region of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            The name of a buffer object, a subrange of whose data store to invalidate.
            |
|offset| 
            The offset within the buffer's data store of the start of the range to be invalidated.
            |
|length| 
            The length of the range within the buffer's data store to be invalidated.
            |


#### InvalidateFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateFramebuffer(OpenTK.Graphics.OpenGL4.FramebufferTarget,System.Int32,OpenTK.Graphics.OpenGL4.FramebufferAttachment*)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate the content some or all of a framebuffer object's attachments

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target to which the framebuffer is attached. target must be Framebuffer, DrawFramebuffer, or ReadFramebuffer.
            |
|numAttachments| 
            The number of entries in the attachments array.
            |
|attachments|[length: numAttachments] 
            The address of an array identifying the attachments to be invalidated.
            |


#### InvalidateSubFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateSubFramebuffer(OpenTK.Graphics.OpenGL4.FramebufferTarget,System.Int32,OpenTK.Graphics.OpenGL4.FramebufferAttachment*,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate the content of a region of some or all of a framebuffer object's attachments

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target to which the framebuffer is attached. target must be Framebuffer, DrawFramebuffer, or ReadFramebuffer.
            |
|numAttachments| 
            The number of entries in the attachments array.
            |
|attachments|[length: numAttachments] 
            The address of an array identifying the attachments to be invalidated.
            |
|x| 
            The X offset of the region to be invalidated.
            |
|y| 
            The Y offset of the region to be invalidated.
            |
|width| 
            The width of the region to be invalidated.
            |
|height| 
            The height of the region to be invalidated.
            |


#### InvalidateTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateTexImage(System.UInt32,System.Int32)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate the entirety a texture image

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of a texture object to invalidate.
            |
|level| 
            The level of detail of the texture object to invalidate.
            |


#### InvalidateTexSubImage
```csharp
OpenTK.Graphics.OpenGL4.GL.InvalidateTexSubImage(System.UInt32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_invalidate_subdata|VERSION_4_3]
 Invalidate a region of a texture image

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            The name of a texture object a subregion of which to invalidate.
            |
|level| 
            The level of detail of the texture object within which the region resides.
            |
|xoffset| 
            The X offset of the region to be invalidated.
            |
|yoffset| 
            The Y offset of the region to be invalidated.
            |
|zoffset| 
            The Z offset of the region to be invalidated.
            |
|width| 
            The width of the region to be invalidated.
            |
|height| 
            The height of the region to be invalidated.
            |
|depth| 
            The depth of the region to be invalidated.
            |


#### IsBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.IsBuffer(System.UInt32)
```
[requires: v1.5]
 Determine if a name corresponds to a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            Specifies a value that may be the name of a buffer object.
            |


#### IsEnabled
```csharp
OpenTK.Graphics.OpenGL4.GL.IsEnabled(OpenTK.Graphics.OpenGL4.IndexedEnableCap,System.UInt32)
```
[requires: v3.0]
 Test whether a capability is enabled

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating a GL capability.
            |
|index| 
            Specifies the index of the capability.
            |


#### IsFramebuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.IsFramebuffer(System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Determine if a name corresponds to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer| 
            Specifies a value that may be the name of a framebuffer object.
            |


#### IsProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.IsProgram(System.UInt32)
```
[requires: v2.0]
 Determines if a name corresponds to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies a potential program object.
            |


#### IsProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.IsProgramPipeline(System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Determine if a name corresponds to a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies a value that may be the name of a program pipeline object.
            |


#### IsQuery
```csharp
OpenTK.Graphics.OpenGL4.GL.IsQuery(System.UInt32)
```
[requires: v1.5]
 Determine if a name corresponds to a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a query object.
            |


#### IsRenderbuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.IsRenderbuffer(System.UInt32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
 Determine if a name corresponds to a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer| 
            Specifies a value that may be the name of a renderbuffer object.
            |


#### IsSampler
```csharp
OpenTK.Graphics.OpenGL4.GL.IsSampler(System.UInt32)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Determine if a name corresponds to a sampler object

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies a value that may be the name of a sampler object.
            |


#### IsShader
```csharp
OpenTK.Graphics.OpenGL4.GL.IsShader(System.UInt32)
```
[requires: v2.0]
 Determines if a name corresponds to a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies a potential shader object.
            |


#### IsSync
```csharp
OpenTK.Graphics.OpenGL4.GL.IsSync(System.IntPtr)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
 Determine if a name corresponds to a sync object

|Parameter Name|Remarks|
|--------------|-------|
|sync| 
            Specifies a value that may be the name of a sync object.
            |


#### IsTexture
```csharp
OpenTK.Graphics.OpenGL4.GL.IsTexture(System.UInt32)
```
[requires: v1.1]
 Determine if a name corresponds to a texture

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies a value that may be the name of a texture.
            |


#### IsTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.IsTransformFeedback(System.UInt32)
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Determine if a name corresponds to a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a transform feedback object.
            |


#### IsVertexArray
```csharp
OpenTK.Graphics.OpenGL4.GL.IsVertexArray(System.UInt32)
```
[requires: v3.0 or ARB_vertex_array_object|VERSION_3_0]
 Determine if a name corresponds to a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies a value that may be the name of a vertex array object.
            |


#### LineWidth
```csharp
OpenTK.Graphics.OpenGL4.GL.LineWidth(System.Single)
```
[requires: v1.0]
 Specify the width of rasterized lines

|Parameter Name|Remarks|
|--------------|-------|
|width| 
            Specifies the width of rasterized lines. The initial value is 1.
            |


#### LinkProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.LinkProgram(System.UInt32)
```
[requires: v2.0]
 Links a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be linked.
            |


#### LogicOp
```csharp
OpenTK.Graphics.OpenGL4.GL.LogicOp(OpenTK.Graphics.OpenGL4.LogicOp)
```
[requires: v1.0]
 Specify a logical pixel operation for rendering

|Parameter Name|Remarks|
|--------------|-------|
|opcode| 
            Specifies a symbolic constant that selects a logical operation. The following symbols are accepted: Clear, Set, Copy, CopyInverted, Noop, Invert, And, Nand, Or, Nor, Xor, Equiv, AndReverse, AndInverted, OrReverse, and OrInverted. The initial value is Copy.
            |


#### MapBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.MapBuffer(OpenTK.Graphics.OpenGL4.BufferTarget,OpenTK.Graphics.OpenGL4.BufferAccess)
```
[requires: v1.5]
 Map a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object being mapped. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer or UniformBuffer.
            |
|access| 
            For glMapBuffer only, specifies the access policy, indicating whether it will be possible to read from, write to, or both read from and write to the buffer object's mapped data store. The symbolic constant must be ReadOnly, WriteOnly, or ReadWrite.
            |


#### MapBufferRange
```csharp
OpenTK.Graphics.OpenGL4.GL.MapBufferRange(OpenTK.Graphics.OpenGL4.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL4.BufferAccessMask)
```
[requires: v3.0 or ARB_map_buffer_range|VERSION_3_0]
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


#### MemoryBarrier
```csharp
OpenTK.Graphics.OpenGL4.GL.MemoryBarrier(OpenTK.Graphics.OpenGL4.MemoryBarrierFlags)
```
[requires: v4.2 or ARB_shader_image_load_store|VERSION_4_2]
 Defines a barrier ordering memory transactions

|Parameter Name|Remarks|
|--------------|-------|
|barriers| 
            Specifies the barriers to insert. Must be a bitwise combination of VertexAttribArrayBarrierBit, ElementArrayBarrierBit, UniformBarrierBit, TextureFetchBarrierBit, ShaderImageAccessBarrierBit, CommandBarrierBit, PixelBufferBarrierBit, TextureUpdateBarrierBit, BufferUpdateBarrierBit, FramebufferBarrierBit, TransformFeedbackBarrierBit, AtomicCounterBarrierBit, or ShaderStorageBarrierBit. If the special value AllBarrierBits is specified, all supported barriers will be inserted.
            |


#### Minmax
```csharp
OpenTK.Graphics.OpenGL4.GL.Minmax(OpenTK.Graphics.OpenGL4.MinmaxTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Boolean)
```
Define minmax table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The minmax table whose parameters are to be set. Must be Minmax.
            |
|internalformat| 
            The format of entries in the minmax table. Must be one of Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|sink| 
            If True, pixels will be consumed by the minmax process and no drawing or texture loading will take place. If False, pixels will proceed to the final conversion process after minmax.
            |


#### MinSampleShading
```csharp
OpenTK.Graphics.OpenGL4.GL.MinSampleShading(System.Single)
```
[requires: v4.0]
 Specifies minimum rate at which sample shaing takes place

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specifies the rate at which samples are shaded within each covered pixel.
            |


#### MultiDrawArrays
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawArrays(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32*,System.Int32*,System.Int32)
```
[requires: v1.4]
 Render multiple sets of primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|first|[length: count] 
            Points to an array of starting indices in the enabled arrays.
            |
|count|[length: drawcount] 
            Points to an array of the number of indices to be rendered.
            |
|drawcount| 
            Specifies the size of the first and count
            |


#### MultiDrawArraysIndirect
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawArraysIndirect(OpenTK.Graphics.OpenGL4.PrimitiveType,System.IntPtr,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_multi_draw_indirect|VERSION_4_3]
 Render multiple sets of primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect|[length: drawcount,stride] 
            Specifies the address of an array of structures containing the draw parameters.
            |
|drawcount| 
            Specifies the the number of elements in the array of draw parameter structures.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawArraysIndirect``1
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawArraysIndirect``1(OpenTK.Graphics.OpenGL4.PrimitiveType,``0@,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_multi_draw_indirect|VERSION_4_3]
 Render multiple sets of primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect|[length: drawcount,stride] 
            Specifies the address of an array of structures containing the draw parameters.
            |
|drawcount| 
            Specifies the the number of elements in the array of draw parameter structures.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawElements
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElements(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: v1.4]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: drawcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: drawcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|drawcount| 
            Specifies the size of the count and indices arrays.
            |


#### MultiDrawElements``1
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElements``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32)
```
[requires: v1.4]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: drawcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: drawcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|drawcount| 
            Specifies the size of the count and indices arrays.
            |


#### MultiDrawElementsBaseVertex
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElementsBaseVertex(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL4.DrawElementsType,System.IntPtr,System.Int32,System.Int32*)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render multiple sets of primitives by specifying indices of array data elements and an index to apply to each index

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: drawcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: drawcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|drawcount| 
            Specifies the size of the count, indices and basevertex arrays.
            |
|basevertex|[length: drawcount] 
            Specifies a pointer to the location where the base vertices are stored.
            |


#### MultiDrawElementsBaseVertex``1
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElementsBaseVertex``1(OpenTK.Graphics.OpenGL4.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL4.DrawElementsType,``0@,System.Int32,System.Int32*)
```
[requires: v3.2 or ARB_draw_elements_base_vertex|VERSION_3_2]
 Render multiple sets of primitives by specifying indices of array data elements and an index to apply to each index

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: drawcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: drawcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|drawcount| 
            Specifies the size of the count, indices and basevertex arrays.
            |
|basevertex|[length: drawcount] 
            Specifies a pointer to the location where the base vertices are stored.
            |


#### MultiDrawElementsIndirect
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElementsIndirect(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.IntPtr,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_multi_draw_indirect|VERSION_4_3]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect|[length: drawcount,stride] 
            Specifies the address of a structure containing an array of draw parameters.
            |
|drawcount| 
            Specifies the number of elements in the array addressed by indirect.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawElementsIndirect``1
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiDrawElementsIndirect``1(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,``0@,System.Int32,System.Int32)
```
[requires: v4.3 or ARB_multi_draw_indirect|VERSION_4_3]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect|[length: drawcount,stride] 
            Specifies the address of a structure containing an array of draw parameters.
            |
|drawcount| 
            Specifies the number of elements in the array addressed by indirect.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiTexCoordP1
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiTexCoordP1(OpenTK.Graphics.OpenGL4.TextureUnit,OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|type|-|
|coords|[length: 1]|


#### MultiTexCoordP2
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiTexCoordP2(OpenTK.Graphics.OpenGL4.TextureUnit,OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|type|-|
|coords|[length: 1]|


#### MultiTexCoordP3
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiTexCoordP3(OpenTK.Graphics.OpenGL4.TextureUnit,OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|type|-|
|coords|[length: 1]|


#### MultiTexCoordP4
```csharp
OpenTK.Graphics.OpenGL4.GL.MultiTexCoordP4(OpenTK.Graphics.OpenGL4.TextureUnit,OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|type|-|
|coords|[length: 1]|


#### NormalP3
```csharp
OpenTK.Graphics.OpenGL4.GL.NormalP3(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|coords|[length: 1]|


#### ObjectLabel
```csharp
OpenTK.Graphics.OpenGL4.GL.ObjectLabel(OpenTK.Graphics.OpenGL4.ObjectLabelIdentifier,System.UInt32,System.Int32,System.String)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.ObjectPtrLabel(System.IntPtr,System.Int32,System.String)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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
OpenTK.Graphics.OpenGL4.GL.ObjectPtrLabel``1(``0@,System.Int32,System.String)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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


#### PatchParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.PatchParameter(OpenTK.Graphics.OpenGL4.PatchParameterInt,System.Int32)
```
[requires: v4.0 or ARB_tessellation_shader|VERSION_4_0]
 Specifies the parameters for patch primitives

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the name of the parameter to set. The symbolc constants PatchVertices, PatchDefaultOuterLevel, and PatchDefaultInnerLevel are accepted.
            |
|value| 
            Specifies the new value for the parameter given by pname.
            |


#### PauseTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.PauseTransformFeedback
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Pause transform feedback operations

#### PixelStore
```csharp
OpenTK.Graphics.OpenGL4.GL.PixelStore(OpenTK.Graphics.OpenGL4.PixelStoreParameter,System.Int32)
```
[requires: v1.0]
 Set pixel storage modes

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the symbolic name of the parameter to be set. Six values affect the packing of pixel data into memory: PackSwapBytes, PackLsbFirst, PackRowLength, PackImageHeight, PackSkipPixels, PackSkipRows, PackSkipImages, and PackAlignment. Six more affect the unpacking of pixel data from memory: UnpackSwapBytes, UnpackLsbFirst, UnpackRowLength, UnpackImageHeight, UnpackSkipPixels, UnpackSkipRows, UnpackSkipImages, and UnpackAlignment.
            |
|param| 
            Specifies the value that pname is set to.
            |


#### PointParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.PointParameter(OpenTK.Graphics.OpenGL4.PointParameterName,System.Int32*)
```
[requires: v1.4]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### PointSize
```csharp
OpenTK.Graphics.OpenGL4.GL.PointSize(System.Single)
```
[requires: v1.0]
 Specify the diameter of rasterized points

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the diameter of rasterized points. The initial value is 1.
            |


#### PolygonMode
```csharp
OpenTK.Graphics.OpenGL4.GL.PolygonMode(OpenTK.Graphics.OpenGL4.MaterialFace,OpenTK.Graphics.OpenGL4.PolygonMode)
```
[requires: v1.0]
 Select a polygon rasterization mode

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies the polygons that mode applies to. Must be FrontAndBack for front- and back-facing polygons.
            |
|mode| 
            Specifies how polygons will be rasterized. Accepted values are Point, Line, and Fill. The initial value is Fill for both front- and back-facing polygons.
            |


#### PolygonOffset
```csharp
OpenTK.Graphics.OpenGL4.GL.PolygonOffset(System.Single,System.Single)
```
[requires: v1.1]
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
OpenTK.Graphics.OpenGL4.GL.PopDebugGroup
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
 Pop the active debug group

#### PrimitiveRestartIndex
```csharp
OpenTK.Graphics.OpenGL4.GL.PrimitiveRestartIndex(System.UInt32)
```
[requires: v3.1]
 Specify the primitive restart index

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the value to be interpreted as the primitive restart index.
            |


#### ProgramBinary
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramBinary(System.UInt32,OpenTK.Graphics.OpenGL4.BinaryFormat,System.IntPtr,System.Int32)
```
[requires: v4.1 or ARB_get_program_binary|VERSION_4_1]
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
            Specifies the address an array containing the binary to be loaded into program.
            |
|length| 
            Specifies the number of bytes contained in binary.
            |


#### ProgramBinary``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramBinary``1(System.UInt32,OpenTK.Graphics.OpenGL4.BinaryFormat,``0@,System.Int32)
```
[requires: v4.1 or ARB_get_program_binary|VERSION_4_1]
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
            Specifies the address an array containing the binary to be loaded into program.
            |
|length| 
            Specifies the number of bytes contained in binary.
            |


#### ProgramParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramParameter(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramParameterName,System.Int32)
```
[requires: v4.1 or ARB_get_program_binary|VERSION_4_1]
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


#### ProgramUniform1
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniform1(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Specify the value of a uniform variable for a specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program containing the uniform variable to be modified.
            |
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector commands (glProgramUniform*v), specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix commands (glProgramUniformMatrix*), specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: 1] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform2
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniform2(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Specify the value of a uniform variable for a specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program containing the uniform variable to be modified.
            |
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector commands (glProgramUniform*v), specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix commands (glProgramUniformMatrix*), specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: 2] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform3
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniform3(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Specify the value of a uniform variable for a specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program containing the uniform variable to be modified.
            |
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector commands (glProgramUniform*v), specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix commands (glProgramUniformMatrix*), specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: 3] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform4
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniform4(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Specify the value of a uniform variable for a specified program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program containing the uniform variable to be modified.
            |
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            For the vector commands (glProgramUniform*v), specifies the number of elements that are to be modified. This should be 1 if the targeted uniform variable is not an array, and 1 or more if it is an array.  For the matrix commands (glProgramUniformMatrix*), specifies the number of matrices that are to be modified. This should be 1 if the targeted uniform variable is not an array of matrices, and 1 or more if it is an array of matrices.
            |
|value|[length: 4] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniformMatrix2
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: 2]|


#### ProgramUniformMatrix2x3
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix2x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProgramUniformMatrix2x4
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix2x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProgramUniformMatrix3
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: 3]|


#### ProgramUniformMatrix3x2
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix3x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProgramUniformMatrix3x4
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix3x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProgramUniformMatrix4
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: 4]|


#### ProgramUniformMatrix4x2
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix4x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProgramUniformMatrix4x3
```csharp
OpenTK.Graphics.OpenGL4.GL.ProgramUniformMatrix4x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count]|


#### ProvokingVertex
```csharp
OpenTK.Graphics.OpenGL4.GL.ProvokingVertex(OpenTK.Graphics.OpenGL4.ProvokingVertexMode)
```
[requires: v3.2 or ARB_provoking_vertex|VERSION_3_2]
 Specifiy the vertex to be used as the source of data for flat shaded varyings

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies the vertex to be used as the source of data for flat shaded varyings.
            |


#### PushDebugGroup
```csharp
OpenTK.Graphics.OpenGL4.GL.PushDebugGroup(OpenTK.Graphics.OpenGL4.DebugSourceExternal,System.UInt32,System.Int32,System.String)
```
[requires: v4.3 or KHR_debug|VERSION_4_3]
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


#### QueryCounter
```csharp
OpenTK.Graphics.OpenGL4.GL.QueryCounter(System.UInt32,OpenTK.Graphics.OpenGL4.QueryCounterTarget)
```
[requires: v3.3 or ARB_timer_query|VERSION_3_3]
 Record the GL time into a query object after all previous commands have reached the GL server but have not yet necessarily executed.

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specify the name of a query object into which to record the GL time.
            |
|target| 
            Specify the counter to query. target must be Timestamp.
            |


#### ReadBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.ReadBuffer(OpenTK.Graphics.OpenGL4.ReadBufferMode)
```
[requires: v1.0]
 Select a color buffer source for pixels

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies a color buffer. Accepted values are FrontLeft, FrontRight, BackLeft, BackRight, Front, Back, Left, Right, and the constants ColorAttachmenti.
            |


#### ReadPixels
```csharp
OpenTK.Graphics.OpenGL4.GL.ReadPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.0]
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
            Specifies the format of the pixel data. The following symbolic values are accepted: StencilIndex, DepthComponent, DepthStencil, Red, Green, Blue, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, UnsignedInt2101010Rev, UnsignedInt248, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, or Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReadPixels``1
```csharp
OpenTK.Graphics.OpenGL4.GL.ReadPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.0]
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
            Specifies the format of the pixel data. The following symbolic values are accepted: StencilIndex, DepthComponent, DepthStencil, Red, Green, Blue, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, HalfFloat, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, UnsignedInt2101010Rev, UnsignedInt248, UnsignedInt10F11F11FRev, UnsignedInt5999Rev, or Float32UnsignedInt248Rev.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReleaseShaderCompiler
```csharp
OpenTK.Graphics.OpenGL4.GL.ReleaseShaderCompiler
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
 Release resources consumed by the implementation's shader compiler

#### RenderbufferStorage
```csharp
OpenTK.Graphics.OpenGL4.GL.RenderbufferStorage(OpenTK.Graphics.OpenGL4.RenderbufferTarget,OpenTK.Graphics.OpenGL4.RenderbufferStorage,System.Int32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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
OpenTK.Graphics.OpenGL4.GL.RenderbufferStorageMultisample(OpenTK.Graphics.OpenGL4.RenderbufferTarget,System.Int32,OpenTK.Graphics.OpenGL4.RenderbufferStorage,System.Int32,System.Int32)
```
[requires: v3.0 or ARB_framebuffer_object|VERSION_3_0]
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


#### ResetHistogram
```csharp
OpenTK.Graphics.OpenGL4.GL.ResetHistogram(OpenTK.Graphics.OpenGL4.HistogramTarget)
```
Reset histogram table entries to zero

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Histogram.
            |


#### ResetMinmax
```csharp
OpenTK.Graphics.OpenGL4.GL.ResetMinmax(OpenTK.Graphics.OpenGL4.MinmaxTarget)
```
Reset minmax table entries to initial values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Minmax.
            |


#### ResumeTransformFeedback
```csharp
OpenTK.Graphics.OpenGL4.GL.ResumeTransformFeedback
```
[requires: v4.0 or ARB_transform_feedback2|VERSION_4_0]
 Resume transform feedback operations

#### SampleCoverage
```csharp
OpenTK.Graphics.OpenGL4.GL.SampleCoverage(System.Single,System.Boolean)
```
[requires: v1.3]
 Specify multisample coverage parameters

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specify a single floating-point sample coverage value.  The value is clamped to the range [0 ,1]. The initial value is 1.0.
            |
|invert| 
            Specify a single boolean value representing if the coverage masks should be inverted.  True and False are accepted.  The initial value is False.
            |


#### SampleMask
```csharp
OpenTK.Graphics.OpenGL4.GL.SampleMask(System.UInt32,System.UInt32)
```
[requires: v3.2 or ARB_texture_multisample|VERSION_3_2]
 Set the value of a sub-word of the sample mask

|Parameter Name|Remarks|
|--------------|-------|
|maskNumber| 
            Specifies which 32-bit sub-word of the sample mask to update.
            |
|mask| 
            Specifies the new value of the mask sub-word.
            |


#### SamplerParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.SamplerParameter(System.UInt32,OpenTK.Graphics.OpenGL4.SamplerParameterName,System.Int32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]
 Set sampler parameters

|Parameter Name|Remarks|
|--------------|-------|
|sampler| 
            Specifies the sampler object whose parameter to modify.
            |
|pname| 
            Specifies the symbolic name of a sampler parameter. pname can be one of the following: TextureWrapS, TextureWrapT, TextureWrapR, TextureMinFilter, TextureMagFilter, TextureBorderColor, TextureMinLod, TextureMaxLod, TextureLodBiasTextureCompareMode, or TextureCompareFunc.
            |
|param|[length: pname] 
            For the scalar commands, specifies the value of pname.
            |


#### SamplerParameterI
```csharp
OpenTK.Graphics.OpenGL4.GL.SamplerParameterI(System.UInt32,OpenTK.Graphics.OpenGL4.SamplerParameterName,System.UInt32*)
```
[requires: v3.3 or ARB_sampler_objects|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|sampler|-|
|pname|-|
|param|[length: pname]|


#### Scissor
```csharp
OpenTK.Graphics.OpenGL4.GL.Scissor(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]
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


#### ScissorArray
```csharp
OpenTK.Graphics.OpenGL4.GL.ScissorArray(System.UInt32,System.Int32,System.Int32*)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Define the scissor box for multiple viewports

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specifies the index of the first viewport whose scissor box to modify.
            |
|count| 
            Specifies the number of scissor boxes to modify.
            |
|v|[length: count] 
            Specifies the address of an array containing the left, bottom, width and height of each scissor box, in that order.
            |


#### ScissorIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.ScissorIndexed(System.UInt32,System.Int32*)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Define the scissor box for a specific viewport

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the viewport whose scissor box to modify.
            |
|v|[length: 4] 
            For glScissorIndexedv, specifies the address of an array containing the left, bottom, width and height of each scissor box, in that order.
            |


#### SecondaryColorP3
```csharp
OpenTK.Graphics.OpenGL4.GL.SecondaryColorP3(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|color|[length: 1]|


#### SeparableFilter2D
```csharp
OpenTK.Graphics.OpenGL4.GL.SeparableFilter2D(OpenTK.Graphics.OpenGL4.SeparableTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr,System.IntPtr)
```
Define a separable two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Separable2D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The number of elements in the pixel array referenced by row. (This is the width of the separable filter kernel.)
            |
|height| 
            The number of elements in the pixel array referenced by column. (This is the height of the separable filter kernel.)
            |
|format| 
            The format of the pixel data in row and column. The allowable values are Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Intensity, Luminance, and LuminanceAlpha.
            |
|type| 
            The type of the pixel data in row and column. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|row|[length: target,format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the row filter kernel.
            |
|column|[length: target,format,type,height] 
            Pointer to a one-dimensional array of pixel data that is processed to build the column filter kernel.
            |


#### SeparableFilter2D``2
```csharp
OpenTK.Graphics.OpenGL4.GL.SeparableFilter2D``2(OpenTK.Graphics.OpenGL4.SeparableTarget,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@,``1@)
```
Define a separable two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Separable2D.
            |
|internalformat| 
            The internal format of the convolution filter kernel. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|width| 
            The number of elements in the pixel array referenced by row. (This is the width of the separable filter kernel.)
            |
|height| 
            The number of elements in the pixel array referenced by column. (This is the height of the separable filter kernel.)
            |
|format| 
            The format of the pixel data in row and column. The allowable values are Red, Green, Blue, Alpha, Rgb, Bgr, Rgba, Bgra, Intensity, Luminance, and LuminanceAlpha.
            |
|type| 
            The type of the pixel data in row and column. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|row|[length: target,format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the row filter kernel.
            |
|column|[length: target,format,type,height] 
            Pointer to a one-dimensional array of pixel data that is processed to build the column filter kernel.
            |


#### ShaderBinary
```csharp
OpenTK.Graphics.OpenGL4.GL.ShaderBinary(System.Int32,System.UInt32*,OpenTK.Graphics.OpenGL4.BinaryFormat,System.IntPtr,System.Int32)
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
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
OpenTK.Graphics.OpenGL4.GL.ShaderBinary``1(System.Int32,System.UInt32*,OpenTK.Graphics.OpenGL4.BinaryFormat,``0@,System.Int32)
```
[requires: v4.1 or ARB_ES2_compatibility|VERSION_4_1]
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
OpenTK.Graphics.OpenGL4.GL.ShaderSource(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: v2.0]
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


#### ShaderStorageBlockBinding
```csharp
OpenTK.Graphics.OpenGL4.GL.ShaderStorageBlockBinding(System.UInt32,System.UInt32,System.UInt32)
```
[requires: v4.3 or ARB_shader_storage_buffer_object|VERSION_4_3]
 Change an active shader storage block binding

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the program containing the block whose binding to change.
            |
|storageBlockIndex| 
            The index storage block within the program.
            |
|storageBlockBinding| 
            The index storage block binding to associate with the specified storage block.
            |


#### StencilFunc
```csharp
OpenTK.Graphics.OpenGL4.GL.StencilFunc(OpenTK.Graphics.OpenGL4.StencilFunction,System.Int32,System.UInt32)
```
[requires: v1.0]
 Set front and back function and reference value for stencil testing

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the test function. Eight symbolic constants are valid: Never, Less, Lequal, Greater, Gequal, Equal, Notequal, and Always. The initial value is Always.
            |
|@ref| 
            Specifies the reference value for the stencil test. ref is clamped to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilFuncSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.StencilFuncSeparate(OpenTK.Graphics.OpenGL4.StencilFace,OpenTK.Graphics.OpenGL4.StencilFunction,System.Int32,System.UInt32)
```
[requires: v2.0]
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
            Specifies the reference value for the stencil test. ref is clamped to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilMask
```csharp
OpenTK.Graphics.OpenGL4.GL.StencilMask(System.UInt32)
```
[requires: v1.0]
 Control the front and back writing of individual bits in the stencil planes

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's.
            |


#### StencilMaskSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.StencilMaskSeparate(OpenTK.Graphics.OpenGL4.StencilFace,System.UInt32)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.StencilOp(OpenTK.Graphics.OpenGL4.StencilOp,OpenTK.Graphics.OpenGL4.StencilOp,OpenTK.Graphics.OpenGL4.StencilOp)
```
[requires: v1.0]
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
OpenTK.Graphics.OpenGL4.GL.StencilOpSeparate(OpenTK.Graphics.OpenGL4.StencilFace,OpenTK.Graphics.OpenGL4.StencilOp,OpenTK.Graphics.OpenGL4.StencilOp,OpenTK.Graphics.OpenGL4.StencilOp)
```
[requires: v2.0]
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


#### TexBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.TexBuffer(OpenTK.Graphics.OpenGL4.TextureBufferTarget,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.UInt32)
```
[requires: v3.1]
 Attach the storage for a buffer object to the active buffer texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation and must be TextureBuffer.
            |
|internalformat| 
            Specifies the internal format of the data in the store belonging to buffer.
            |
|buffer| 
            Specifies the name of the buffer object whose storage to attach to the active buffer texture.
            |


#### TexBufferRange
```csharp
OpenTK.Graphics.OpenGL4.GL.TexBufferRange(OpenTK.Graphics.OpenGL4.TextureBufferTarget,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: v4.3 or ARB_texture_buffer_range|VERSION_4_3]
 Bind a range of a buffer's data store to a buffer texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation and must be TextureBuffer.
            |
|internalformat| 
            Specifies the internal format of the data in the store belonging to buffer.
            |
|buffer| 
            Specifies the name of the buffer object whose storage to attach to the active buffer texture.
            |
|offset| 
            Specifies the offset of the start of the range of the buffer's data store to attach.
            |
|size| 
            Specifies the size of the range of the buffer's data store to attach.
            |


#### TexCoordP1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexCoordP1(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|coords|[length: 1]|


#### TexCoordP2
```csharp
OpenTK.Graphics.OpenGL4.GL.TexCoordP2(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|coords|[length: 1]|


#### TexCoordP3
```csharp
OpenTK.Graphics.OpenGL4.GL.TexCoordP3(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|coords|[length: 1]|


#### TexCoordP4
```csharp
OpenTK.Graphics.OpenGL4.GL.TexCoordP4(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|coords|[length: 1]|


#### TexImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.0]
 Specify a one-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D or ProxyTexture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide. The height of the 1D texture image is 1.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage1D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage1D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.0]
 Specify a one-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D or ProxyTexture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide. The height of the 1D texture image is 1.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureRectangle, ProxyTextureRectangle, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or ProxyTextureCubeMap.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. If target is TextureRectangle or ProxyTextureRectangle, level must be 0.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide.
            |
|height| 
            Specifies the height of the texture image, or the number of layers in a texture array, in the case of the Texture1DArray and ProxyTexture1DArray targets. All implementations support 2D texture images that are at least 1024 texels high, and texture arrays that are at least 256 layers deep.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage2D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage2D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureRectangle, ProxyTextureRectangle, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or ProxyTextureCubeMap.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. If target is TextureRectangle or ProxyTextureRectangle, level must be 0.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide.
            |
|height| 
            Specifies the height of the texture image, or the number of layers in a texture array, in the case of the Texture1DArray and ProxyTexture1DArray targets. All implementations support 2D texture images that are at least 1024 texels high, and texture arrays that are at least 256 layers deep.
            |
|border| 
            This value must be 0.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage2DMultisample
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage2DMultisample(OpenTK.Graphics.OpenGL4.TextureTargetMultisample,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Boolean)
```
[requires: v3.2 or ARB_texture_multisample|VERSION_3_2]
 Establish the data storage, format, dimensions, and number of samples of a multisample texture's image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation. target must be Texture2DMultisample or ProxyTexture2DMultisample.
            |
|samples| 
            The number of samples in the multisample texture's image.
            |
|internalformat| 
            The internal format to be used to store the multisample texture's image. internalformat must specify a color-renderable, depth-renderable, or stencil-renderable format.
            |
|width| 
            The width of the multisample texture's image, in texels.
            |
|height| 
            The height of the multisample texture's image, in texels.
            |
|fixedsamplelocations| 
            Specifies whether the image will use identical sample locations and the same number of samples for all texels in the image, and the sample locations will not depend on the internal format or size of the image.
            |


#### TexImage3D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage3D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.2]
 Specify a three-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be one of Texture3D, ProxyTexture3D, Texture2DArray or ProxyTexture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level  is the n sup th mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 16 texels wide.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage3D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage3D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.2]
 Specify a three-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be one of Texture3D, ProxyTexture3D, Texture2DArray or ProxyTexture2DArray.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level  is the n sup th mipmap reduction image.
            |
|internalformat| 
            Specifies the number of color components in the texture. Must be one of base internal formats given in Table 1, one of the sized internal formats given in Table 2, or one of the compressed internal formats given in Table 3, below.
            |
|width| 
            Specifies the width of the texture image. All implementations support 3D texture images that are at least 16 texels wide.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, RedInteger, RgInteger, RgbInteger, BgrInteger, RgbaInteger, BgraInteger, StencilIndex, DepthComponent, DepthStencil.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage3DMultisample
```csharp
OpenTK.Graphics.OpenGL4.GL.TexImage3DMultisample(OpenTK.Graphics.OpenGL4.TextureTargetMultisample,System.Int32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: v3.2 or ARB_texture_multisample|VERSION_3_2]
 Establish the data storage, format, dimensions, and number of samples of a multisample texture's image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation. target must be Texture2DMultisampleArray or ProxyTexture2DMultisampleArray.
            |
|samples| 
            The number of samples in the multisample texture's image.
            |
|internalformat| 
            The internal format to be used to store the multisample texture's image. internalformat must specify a color-renderable, depth-renderable, or stencil-renderable format.
            |
|width| 
            The width of the multisample texture's image, in texels.
            |
|height| 
            The height of the multisample texture's image, in texels.
            |
|depth| 
            Specifies whether the image will use identical sample locations and the same number of samples for all texels in the image, and the sample locations will not depend on the internal format or size of the image.
            |
|fixedsamplelocations| 
            Specifies whether the image will use identical sample locations and the same number of samples for all texels in the image, and the sample locations will not depend on the internal format or size of the image.
            |


#### TexParameter
```csharp
OpenTK.Graphics.OpenGL4.GL.TexParameter(OpenTK.Graphics.OpenGL4.TextureTarget,OpenTK.Graphics.OpenGL4.TextureParameterName,System.Int32*)
```
[requires: v1.0]
 Set texture parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture, which must be either Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, or TextureCubeMap.
            |
|pname| 
            Specifies the symbolic name of a single-valued texture parameter. pname can be one of the following: DepthStencilTextureMode, TextureBaseLevel, TextureCompareFunc, TextureCompareMode, TextureLodBias, TextureMinFilter, TextureMagFilter, TextureMinLod, TextureMaxLod, TextureMaxLevel, TextureSwizzleR, TextureSwizzleG, TextureSwizzleB, TextureSwizzleA, TextureWrapS, TextureWrapT, or TextureWrapR.  For the vector commands (glTexParameter*v), pname can also be one of TextureBorderColor or TextureSwizzleRgba.
            |
|@params|[length: pname] 
            For the scalar commands, specifies the value of pname.
            |


#### TexParameterI
```csharp
OpenTK.Graphics.OpenGL4.GL.TexParameterI(OpenTK.Graphics.OpenGL4.TextureTarget,OpenTK.Graphics.OpenGL4.TextureParameterName,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexStorage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexStorage1D(OpenTK.Graphics.OpenGL4.TextureTarget1d,System.Int32,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.Int32)
```
[requires: v4.2 or ARB_texture_storage|VERSION_4_2]
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
OpenTK.Graphics.OpenGL4.GL.TexStorage2D(OpenTK.Graphics.OpenGL4.TextureTarget2d,System.Int32,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.Int32,System.Int32)
```
[requires: v4.2 or ARB_texture_storage|VERSION_4_2]
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


#### TexStorage2DMultisample
```csharp
OpenTK.Graphics.OpenGL4.GL.TexStorage2DMultisample(OpenTK.Graphics.OpenGL4.TextureTargetMultisample2d,System.Int32,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.Int32,System.Int32,System.Boolean)
```
[requires: v4.3 or ARB_texture_storage_multisample|VERSION_4_3]
 Specify storage for a two-dimensional multisample texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be Texture2DMultisample or ProxyTexture2DMultisample.
            |
|samples| 
            Specify the number of samples in the texture.
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
|fixedsamplelocations| 
            Specifies whether the image will use identical sample locations and the same number of samples for all texels in the image, and the sample locations will not depend on the internal format or size of the image.
            |


#### TexStorage3D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexStorage3D(OpenTK.Graphics.OpenGL4.TextureTarget3d,System.Int32,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.Int32,System.Int32,System.Int32)
```
[requires: v4.2 or ARB_texture_storage|VERSION_4_2]
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


#### TexStorage3DMultisample
```csharp
OpenTK.Graphics.OpenGL4.GL.TexStorage3DMultisample(OpenTK.Graphics.OpenGL4.TextureTargetMultisample3d,System.Int32,OpenTK.Graphics.OpenGL4.SizedInternalFormat,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: v4.3 or ARB_texture_storage_multisample|VERSION_4_3]
 Specify storage for a two-dimensional multisample array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be Texture2DMultisampleArray or ProxyTexture2DMultisampleMultisample.
            |
|samples| 
            Specify the number of samples in the texture.
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
            Specifies the depth of the texture, in layers.
            |
|fixedsamplelocations| 
            Specifies whether the image will use identical sample locations and the same number of samples for all texels in the image, and the sample locations will not depend on the internal format or size of the image.
            |


#### TexSubImage1D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage1D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.1]
 Specify a one-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage1D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.1]
 Specify a one-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture1D.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|xoffset| 
            Specifies a texel offset in the x direction within the texture array.
            |
|width| 
            Specifies the width of the texture subimage.
            |
|format| 
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage2D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage2D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.1]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or Texture1DArray.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage2D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage2D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.1]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, TextureCubeMapNegativeZ, or Texture1DArray.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, Bgra, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage3D
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage3D(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,System.IntPtr)
```
[requires: v1.2]
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage3D``1
```csharp
OpenTK.Graphics.OpenGL4.GL.TexSubImage3D``1(OpenTK.Graphics.OpenGL4.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.PixelFormat,OpenTK.Graphics.OpenGL4.PixelType,``0@)
```
[requires: v1.2]
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Red, Rg, Rgb, Bgr, Rgba, DepthComponent, and StencilIndex.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|pixels|[length: format,type,width,height,depth] 
            Specifies a pointer to the image data in memory.
            |


#### TextureView
```csharp
OpenTK.Graphics.OpenGL4.GL.TextureView(System.UInt32,OpenTK.Graphics.OpenGL4.TextureTarget,System.UInt32,OpenTK.Graphics.OpenGL4.PixelInternalFormat,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: v4.3 or ARB_texture_view|VERSION_4_3]
 Initialize a texture as a data alias of another texture's data store

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture object to be initialized as a view.
            |
|target| 
            Specifies the target to be used for the newly initialized texture.
            |
|origtexture| 
            Specifies the name of a texture object of which to make a view.
            |
|internalformat| 
            Specifies the internal format for the newly created view.
            |
|minlevel| 
            Specifies lowest level of detail of the view.
            |
|numlevels| 
            Specifies the number of levels of detail to include in the view.
            |
|minlayer| 
            Specifies the index of the first layer to include in the view.
            |
|numlayers| 
            Specifies the number of layers to include in the view.
            |


#### TransformFeedbackVaryings
```csharp
OpenTK.Graphics.OpenGL4.GL.TransformFeedbackVaryings(System.UInt32,System.Int32,System.String[],OpenTK.Graphics.OpenGL4.TransformFeedbackMode)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.Uniform1(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.Uniform2(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.Uniform3(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.Uniform4(System.Int32,System.Int32,System.UInt32*)
```
[requires: v3.0]
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
OpenTK.Graphics.OpenGL4.GL.UniformBlockBinding(System.UInt32,System.UInt32,System.UInt32)
```
[requires: v3.1 or ARB_uniform_buffer_object|VERSION_3_1]
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
OpenTK.Graphics.OpenGL4.GL.UniformMatrix2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### UniformMatrix2x3
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix2x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix2x4
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix2x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix3
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### UniformMatrix3x2
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix3x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### UniformMatrix3x4
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix3x4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### UniformMatrix4
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### UniformMatrix4x2
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix4x2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### UniformMatrix4x3
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformMatrix4x3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.1]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### UniformSubroutines
```csharp
OpenTK.Graphics.OpenGL4.GL.UniformSubroutines(OpenTK.Graphics.OpenGL4.ShaderType,System.Int32,System.UInt32*)
```
[requires: v4.0 or ARB_shader_subroutine|VERSION_4_0]
 Load active subroutine uniforms

|Parameter Name|Remarks|
|--------------|-------|
|shadertype| 
            Specifies the shader stage from which to query for subroutine uniform index. shadertype must be one of VertexShader, TessControlShader, TessEvaluationShader, GeometryShader or FragmentShader.
            |
|count| 
            Specifies the number of uniform indices stored in indices.
            |
|indices|[length: count] 
            Specifies the address of an array holding the indices to load into the shader subroutine variables.
            |


#### UnmapBuffer
```csharp
OpenTK.Graphics.OpenGL4.GL.UnmapBuffer(OpenTK.Graphics.OpenGL4.BufferTarget)
```
[requires: v1.5]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### UseProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.UseProgram(System.UInt32)
```
[requires: v2.0]
 Installs a program object as part of current rendering state

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object whose executables are to be used as part of current rendering state.
            |


#### UseProgramStages
```csharp
OpenTK.Graphics.OpenGL4.GL.UseProgramStages(System.UInt32,OpenTK.Graphics.OpenGL4.ProgramStageMask,System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Bind stages of a program object to a program pipeline

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the program pipeline object to which to bind stages from program.
            |
|stages| 
            Specifies a set of program stages to bind to the program pipeline object.
            |
|program| 
            Specifies the program object containing the shader executables to use in pipeline.
            |


#### ValidateProgram
```csharp
OpenTK.Graphics.OpenGL4.GL.ValidateProgram(System.UInt32)
```
[requires: v2.0]
 Validates a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be validated.
            |


#### ValidateProgramPipeline
```csharp
OpenTK.Graphics.OpenGL4.GL.ValidateProgramPipeline(System.UInt32)
```
[requires: v4.1 or ARB_separate_shader_objects|VERSION_4_1]
 Validate a program pipeline object against current GL state

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object to validate.
            |


#### VertexAttrib1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttrib1(System.UInt32,System.Int16*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.VertexAttrib2(System.UInt32,System.Int16*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.VertexAttrib3(System.UInt32,System.Int16*)
```
[requires: v2.0]
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
OpenTK.Graphics.OpenGL4.GL.VertexAttrib4(System.UInt32,System.UInt16*)
```
[requires: v2.0]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 4] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib4N
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttrib4N(System.UInt32,System.UInt16*)
```
[requires: v2.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribBinding
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribBinding(System.UInt32,System.UInt32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]
 Associate a vertex attribute and a vertex buffer binding

|Parameter Name|Remarks|
|--------------|-------|
|attribindex| 
            The index of the attribute to associate with a vertex buffer binding.
            |
|bindingindex| 
            The index of the vertex buffer binding with which to associate the generic vertex attribute.
            |


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: v3.3]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |


#### VertexAttribFormat
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribType,System.Boolean,System.UInt32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]
 Specify the organization of vertex arrays

|Parameter Name|Remarks|
|--------------|-------|
|attribindex| 
            The generic vertex attribute array being described.
            |
|size| 
            The number of values per vertex that are stored in the array.
            |
|type| 
            The type of the data stored in the array.
            |
|normalized| 
            The distance between elements within the buffer.
            |
|relativeoffset| 
            The distance between elements within the buffer.
            |


#### VertexAttribI1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribI1(System.UInt32,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttribI2
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribI2(System.UInt32,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttribI3
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribI3(System.UInt32,System.UInt32*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttribI4
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribI4(System.UInt32,System.UInt16*)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribIFormat
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribIFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribIntegerType,System.UInt32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]

|Parameter Name|Remarks|
|--------------|-------|
|attribindex|-|
|size|-|
|type|-|
|relativeoffset|-|


#### VertexAttribIPointer
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribIPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribIntegerType,System.Int32,System.IntPtr)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribIPointer``1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribIPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribIntegerType,System.Int32,``0@)
```
[requires: v3.0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribL1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribL1(System.UInt32,System.Double*)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttribL2
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribL2(System.UInt32,System.Double*)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttribL3
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribL3(System.UInt32,System.Double*)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttribL4
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribL4(System.UInt32,System.Double*)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribLFormat
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribLFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribDoubleType,System.UInt32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]

|Parameter Name|Remarks|
|--------------|-------|
|attribindex|-|
|size|-|
|type|-|
|relativeoffset|-|


#### VertexAttribLPointer
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribLPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribDoubleType,System.Int32,System.IntPtr)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size]|


#### VertexAttribLPointer``1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribLPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribDoubleType,System.Int32,``0@)
```
[requires: v4.1 or ARB_vertex_attrib_64bit|VERSION_4_1]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size]|


#### VertexAttribP1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribP1(System.UInt32,OpenTK.Graphics.OpenGL4.PackedPointerType,System.Boolean,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|type|-|
|normalized|-|
|value|[length: 1]|


#### VertexAttribP2
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribP2(System.UInt32,OpenTK.Graphics.OpenGL4.PackedPointerType,System.Boolean,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|type|-|
|normalized|-|
|value|[length: 1]|


#### VertexAttribP3
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribP3(System.UInt32,OpenTK.Graphics.OpenGL4.PackedPointerType,System.Boolean,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|type|-|
|normalized|-|
|value|[length: 1]|


#### VertexAttribP4
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribP4(System.UInt32,OpenTK.Graphics.OpenGL4.PackedPointerType,System.Boolean,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|type|-|
|normalized|-|
|value|[length: 1]|


#### VertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribPointerType,System.Boolean,System.Int32,System.IntPtr)
```
[requires: v2.0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. Additionally, the symbolic constant Bgra is accepted by glVertexAttribPointer. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by glVertexAttribPointer and glVertexAttribIPointer. Additionally HalfFloat, Float, Double, Fixed, Int2101010Rev, UnsignedInt2101010Rev and UnsignedInt10F11F11FRev are accepted by glVertexAttribPointer. Double is also accepted by glVertexAttribLPointer and is the only token accepted by the type parameter for that function. The initial value is Float.
            |
|normalized| 
            For glVertexAttribPointer, specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a offset of the first component of the first generic vertex attribute in the array in the data store of the buffer currently bound to the ArrayBuffer target. The initial value is 0.
            |


#### VertexAttribPointer``1
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexAttribPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.VertexAttribPointerType,System.Boolean,System.Int32,``0@)
```
[requires: v2.0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. Additionally, the symbolic constant Bgra is accepted by glVertexAttribPointer. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by glVertexAttribPointer and glVertexAttribIPointer. Additionally HalfFloat, Float, Double, Fixed, Int2101010Rev, UnsignedInt2101010Rev and UnsignedInt10F11F11FRev are accepted by glVertexAttribPointer. Double is also accepted by glVertexAttribLPointer and is the only token accepted by the type parameter for that function. The initial value is Float.
            |
|normalized| 
            For glVertexAttribPointer, specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a offset of the first component of the first generic vertex attribute in the array in the data store of the buffer currently bound to the ArrayBuffer target. The initial value is 0.
            |


#### VertexBindingDivisor
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexBindingDivisor(System.UInt32,System.UInt32)
```
[requires: v4.3 or ARB_vertex_attrib_binding|VERSION_4_3]
 Modify the rate at which generic vertex attributes advance

|Parameter Name|Remarks|
|--------------|-------|
|bindingindex| 
            The index of the binding whose divisor to modify.
            |
|divisor| 
            The new value for the instance step rate to apply.
            |


#### VertexP2
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexP2(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|value|[length: 1]|


#### VertexP3
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexP3(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|value|[length: 1]|


#### VertexP4
```csharp
OpenTK.Graphics.OpenGL4.GL.VertexP4(OpenTK.Graphics.OpenGL4.PackedPointerType,System.UInt32*)
```
[requires: v3.3 or ARB_vertex_type_2_10_10_10_rev|VERSION_3_3]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|value|[length: 1]|


#### Viewport
```csharp
OpenTK.Graphics.OpenGL4.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]
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


#### ViewportArray
```csharp
OpenTK.Graphics.OpenGL4.GL.ViewportArray(System.UInt32,System.Int32,System.Single*)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Set multiple viewports

|Parameter Name|Remarks|
|--------------|-------|
|first| 
            Specify the first viewport to set.
            |
|count| 
            Specify the number of viewports to set.
            |
|v|[length: count] 
            Specify the address of an array containing the viewport parameters.
            |


#### ViewportIndexed
```csharp
OpenTK.Graphics.OpenGL4.GL.ViewportIndexed(System.UInt32,System.Single*)
```
[requires: v4.1 or ARB_viewport_array|VERSION_4_1]
 Set a specified viewport

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the first viewport to set.
            |
|v|[length: 4] 
            For glViewportIndexedfv, specifies the address of an array containing the viewport parameters.
            |


#### WaitSync
```csharp
OpenTK.Graphics.OpenGL4.GL.WaitSync(System.IntPtr,OpenTK.Graphics.OpenGL4.WaitSyncFlags,System.UInt64)
```
[requires: v3.2 or ARB_sync|VERSION_3_2]
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




### Properties

#### SyncRoot
Returns a synchronization token unique for the GL class.

