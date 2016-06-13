---
title: Arb
---

# Arb
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### ActiveTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ActiveTexture(OpenTK.Graphics.OpenGL.TextureUnit)
```
[requires: ARB_multitexture]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least 80. texture must be one of Texturei, where i ranges from zero to the value of MaxCombinedTextureImageUnits minus one. The initial value is Texture0.
            |


#### AttachObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.AttachObject(System.UInt32,System.UInt32)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|containerObj|-|
|obj|-|


#### BeginQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BeginQuery(OpenTK.Graphics.OpenGL.ArbOcclusionQuery,System.UInt32)
```
[requires: ARB_occlusion_query]
 Delimit the boundaries of a query object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target type of query object established between glBeginQuery and the subsequent glEndQuery. The symbolic constant must be one of SamplesPassed, AnySamplesPassed, AnySamplesPassedConservative, PrimitivesGenerated, TransformFeedbackPrimitivesWritten, or TimeElapsed.
            |
|id| 
            Specifies the name of a query object.
            |


#### BindAttribLocation
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BindAttribLocation(System.UInt32,System.UInt32,System.String)
```
[requires: ARB_vertex_shader]
 Associates a generic vertex attribute index with a named attribute variable

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
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
OpenTK.Graphics.OpenGL.GL.Arb.BindBuffer(OpenTK.Graphics.OpenGL.BufferTargetArb,System.UInt32)
```
[requires: ARB_vertex_buffer_object]
 Bind a named buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the buffer object is bound. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|buffer| 
            Specifies the name of a buffer object.
            |


#### BindProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BindProgram(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|program|-|


#### BlendEquation
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BlendEquation(System.UInt32,OpenTK.Graphics.OpenGL.BlendEquationMode)
```
[requires: ARB_draw_buffers_blend]
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
OpenTK.Graphics.OpenGL.GL.Arb.BlendEquationSeparate(System.UInt32,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend)
```
[requires: ARB_draw_buffers_blend]
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
OpenTK.Graphics.OpenGL.GL.Arb.BlendFunc(System.UInt32,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend)
```
[requires: ARB_draw_buffers_blend]
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
OpenTK.Graphics.OpenGL.GL.Arb.BlendFuncSeparate(System.UInt32,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend,OpenTK.Graphics.OpenGL.ArbDrawBuffersBlend)
```
[requires: ARB_draw_buffers_blend]
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


#### BufferData
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BufferData(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL.BufferUsageArb)
```
[requires: ARB_vertex_buffer_object]
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
OpenTK.Graphics.OpenGL.GL.Arb.BufferData``1(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,``0@,OpenTK.Graphics.OpenGL.BufferUsageArb)
```
[requires: ARB_vertex_buffer_object]
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


#### BufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.BufferSubData(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: ARB_vertex_buffer_object]
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
OpenTK.Graphics.OpenGL.GL.Arb.BufferSubData``1(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,System.IntPtr,``0@)
```
[requires: ARB_vertex_buffer_object]
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


#### ClampColor
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ClampColor(OpenTK.Graphics.OpenGL.ArbColorBufferFloat,OpenTK.Graphics.OpenGL.ArbColorBufferFloat)
```
[requires: ARB_color_buffer_float]
 Specify whether data read via glReadPixels should be clamped

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Target for color clamping. target must be ClampReadColor.
            |
|clamp| 
            Specifies whether to apply color clamping. clamp must be True or False.
            |


#### ClientActiveTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ClientActiveTexture(OpenTK.Graphics.OpenGL.TextureUnit)
```
[requires: ARB_multitexture]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least two. texture must be one of Texture, where i ranges from 0 to the value of MaxTextureCoords - 1, which is an implementation-dependent value.  The initial value is Texture0.
            |


#### CompileShader
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CompileShader(System.UInt32)
```
[requires: ARB_shader_objects]
 Compiles a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shaderObj| 
            Specifies the shader object to be compiled.
            |


#### CompileShaderInclude
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CompileShaderInclude(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|shader|-|
|count|-|
|path|[length: count]|
|length|[length: count]|


#### CompressedTexImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage1D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage1D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage2D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage2D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage3D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexImage3D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage1D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage1D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage2D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage2D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage3D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.CompressedTexSubImage3D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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


#### CreateProgramObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CreateProgramObject
```
[requires: ARB_shader_objects]

#### CreateShaderObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CreateShaderObject(OpenTK.Graphics.OpenGL.ArbShaderObjects)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|shaderType|-|


#### CreateSyncFromCLevent
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CreateSyncFromCLevent(System.IntPtr*,System.IntPtr*,System.UInt32)
```
[requires: ARB_cl_event]

|Parameter Name|Remarks|
|--------------|-------|
|context|-|
|@event|-|
|flags|-|


#### CurrentPaletteMatrix
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.CurrentPaletteMatrix(System.Int32)
```
[requires: ARB_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### DebugMessageCallback
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DebugMessageCallback(OpenTK.Graphics.OpenGL.DebugProcArb,System.IntPtr)
```
[requires: ARB_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam|[length: callback] 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageCallback``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DebugMessageCallback``1(OpenTK.Graphics.OpenGL.DebugProcArb,``0@)
```
[requires: ARB_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam|[length: callback] 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageControl
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DebugMessageControl(OpenTK.Graphics.OpenGL.ArbDebugOutput,OpenTK.Graphics.OpenGL.ArbDebugOutput,OpenTK.Graphics.OpenGL.ArbDebugOutput,System.Int32,System.UInt32*,System.Boolean)
```
[requires: ARB_debug_output]
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
OpenTK.Graphics.OpenGL.GL.Arb.DebugMessageInsert(OpenTK.Graphics.OpenGL.ArbDebugOutput,OpenTK.Graphics.OpenGL.ArbDebugOutput,System.UInt32,OpenTK.Graphics.OpenGL.ArbDebugOutput,System.Int32,System.String)
```
[requires: ARB_debug_output]
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
|buf|[length: length] 
            The address of a character array containing the message to insert.
            |


#### DeleteBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteBuffer(System.UInt32)
```
[requires: ARB_vertex_buffer_object]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteBuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteBuffers(System.Int32,System.UInt32*)
```
[requires: ARB_vertex_buffer_object]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer objects to be deleted.
            |
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteNamedString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteNamedString(System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|


#### DeleteObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteObject(System.UInt32)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|


#### DeleteProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteProgram(System.Int32,System.UInt32*)
```
[requires: ARB_fragment_program|ARB_vertex_program]
 Deletes a program object

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the program object to be deleted.
            |
|programs|[length: n]|


#### DeleteQueries
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DeleteQueries(System.Int32,System.UInt32*)
```
[requires: ARB_occlusion_query]
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
OpenTK.Graphics.OpenGL.GL.Arb.DeleteQuery(System.UInt32)
```
[requires: ARB_occlusion_query]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### DetachObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DetachObject(System.UInt32,System.UInt32)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|containerObj|-|
|attachedObj|-|


#### DisableVertexAttribArray
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DisableVertexAttribArray(System.UInt32)
```
[requires: ARB_vertex_program|ARB_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### DispatchComputeGroupSize
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DispatchComputeGroupSize(System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ARB_compute_variable_group_size]

|Parameter Name|Remarks|
|--------------|-------|
|num_groups_x|-|
|num_groups_y|-|
|num_groups_z|-|
|group_size_x|-|
|group_size_y|-|
|group_size_z|-|


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.DrawArraysInstanced(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: ARB_draw_instanced]
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
OpenTK.Graphics.OpenGL.GL.Arb.DrawBuffers(System.Int32,OpenTK.Graphics.OpenGL.ArbDrawBuffers*)
```
[requires: ARB_draw_buffers]
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
OpenTK.Graphics.OpenGL.GL.Arb.DrawElementsInstanced(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: ARB_draw_instanced]
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
OpenTK.Graphics.OpenGL.GL.Arb.DrawElementsInstanced``1(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,``0@,System.Int32)
```
[requires: ARB_draw_instanced]
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


#### EnableVertexAttribArray
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.EnableVertexAttribArray(System.UInt32)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
 Enable or disable a generic vertex attribute array

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be enabled or disabled.
            |


#### EndQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.EndQuery(OpenTK.Graphics.OpenGL.ArbOcclusionQuery)
```
[requires: ARB_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### FramebufferTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.FramebufferTexture(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32)
```
[requires: ARB_geometry_shader4]
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


#### FramebufferTextureFace
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.FramebufferTextureFace(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.TextureTarget)
```
[requires: ARB_geometry_shader4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|texture|-|
|level|-|
|face|-|


#### FramebufferTextureLayer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.FramebufferTextureLayer(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,System.Int32)
```
[requires: ARB_geometry_shader4]
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


#### GenBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GenBuffer
```
[requires: ARB_vertex_buffer_object]
 Generate buffer object names

#### GenBuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GenBuffers(System.Int32,System.UInt32*)
```
[requires: ARB_vertex_buffer_object]
 Generate buffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer object names to be generated.
            |
|buffers|[length: n] 
            Specifies an array in which the generated buffer object names are stored.
            |


#### GenProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GenProgram(System.Int32,System.UInt32*)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|programs|[length: n]|


#### GenQueries
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GenQueries(System.Int32,System.UInt32*)
```
[requires: ARB_occlusion_query]
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
OpenTK.Graphics.OpenGL.GL.Arb.GenQuery
```
[requires: ARB_occlusion_query]
 Generate query object names

#### GetActiveAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetActiveAttrib(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL.ArbVertexShader*,System.Text.StringBuilder)
```
[requires: ARB_vertex_shader]
 Returns information about an active attribute variable for the specified program object

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the program object to be queried.
            |
|index| 
            Specifies the index of the attribute variable to be queried.
            |
|maxLength| 
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
|name|[length: maxLength] 
            Returns a null terminated string containing the name of the attribute variable.
            |


#### GetActiveUniform
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetActiveUniform(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL.ArbShaderObjects*,System.Text.StringBuilder)
```
[requires: ARB_shader_objects]
 Returns information about an active uniform variable for the specified program object

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the program object to be queried.
            |
|index| 
            Specifies the index of the uniform variable to be queried.
            |
|maxLength| 
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
|name|[length: maxLength] 
            Returns a null terminated string containing the name of the uniform variable.
            |


#### GetAttachedObjects
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetAttachedObjects(System.UInt32,System.Int32,System.Int32*,System.UInt32*)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|containerObj|-|
|maxCount|-|
|count|[length: 1]|
|obj|[length: maxCount]|


#### GetAttribLocation
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetAttribLocation(System.UInt32,System.String)
```
[requires: ARB_vertex_shader]
 Returns the location of an attribute variable

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the program object to be queried.
            |
|name| 
            Points to a null terminated string containing the name of the attribute variable whose location is to be queried.
            |


#### GetBufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetBufferParameter(OpenTK.Graphics.OpenGL.BufferTargetArb,OpenTK.Graphics.OpenGL.BufferParameterNameArb,System.Int32*)
```
[requires: ARB_vertex_buffer_object]
 Return parameters of a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the symbolic name of a buffer object parameter. Accepted values are BufferAccess, BufferMapped, BufferSize, or BufferUsage.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetBufferPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetBufferPointer(OpenTK.Graphics.OpenGL.BufferTargetArb,OpenTK.Graphics.OpenGL.BufferPointerNameArb,System.IntPtr)
```
[requires: ARB_vertex_buffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: 1]|


#### GetBufferPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetBufferPointer``1(OpenTK.Graphics.OpenGL.BufferTargetArb,OpenTK.Graphics.OpenGL.BufferPointerNameArb,``0@)
```
[requires: ARB_vertex_buffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: 1]|


#### GetBufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetBufferSubData(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: ARB_vertex_buffer_object]
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
OpenTK.Graphics.OpenGL.GL.Arb.GetBufferSubData``1(OpenTK.Graphics.OpenGL.BufferTargetArb,System.IntPtr,System.IntPtr,``0@)
```
[requires: ARB_vertex_buffer_object]
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


#### GetCompressedTexImage
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetCompressedTexImage(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.IntPtr)
```
[requires: ARB_texture_compression]
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
OpenTK.Graphics.OpenGL.GL.Arb.GetCompressedTexImage``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,``0@)
```
[requires: ARB_texture_compression]
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


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ArbDebugOutput*,OpenTK.Graphics.OpenGL.ArbDebugOutput*,System.UInt32*,OpenTK.Graphics.OpenGL.ArbDebugOutput*,System.Int32*,System.Text.StringBuilder)
```
[requires: ARB_debug_output]
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


#### GetGraphicsResetStatus
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetGraphicsResetStatus
```
[requires: ARB_robustness]

#### GetHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetHandle(OpenTK.Graphics.OpenGL.ArbShaderObjects)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|


#### GetImageHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetImageHandle(System.UInt32,System.Int32,System.Boolean,System.Int32,OpenTK.Graphics.OpenGL.ArbBindlessTexture)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|
|layered|-|
|layer|-|
|format|-|


#### GetInfoLog
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|
|maxLength|-|
|length|[length: 1]|
|infoLog|[length: maxLength]|


#### GetNamedString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetNamedString(System.Int32,System.String,OpenTK.Graphics.OpenGL.ArbShadingLanguageInclude,System.Int32*)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|
|pname|-|
|@params|[length: pname]|


#### GetnColorTable
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnColorTable(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|table|[length: bufSize]|


#### GetnColorTable``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnColorTable``1(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|table|[length: bufSize]|


#### GetnCompressedTexImage
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnCompressedTexImage(OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|lod|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnCompressedTexImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnCompressedTexImage``1(OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|lod|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnConvolutionFilter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnConvolutionFilter(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|image|[length: bufSize]|


#### GetnConvolutionFilter``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnConvolutionFilter``1(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|image|[length: bufSize]|


#### GetnHistogram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnHistogram(OpenTK.Graphics.OpenGL.ArbRobustness,System.Boolean,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnHistogram``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnHistogram``1(OpenTK.Graphics.OpenGL.ArbRobustness,System.Boolean,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnMap
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnMap(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.Int32*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|query|-|
|bufSize|-|
|v|[length: bufSize]|


#### GetnMinmax
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnMinmax(OpenTK.Graphics.OpenGL.ArbRobustness,System.Boolean,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnMinmax``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnMinmax``1(OpenTK.Graphics.OpenGL.ArbRobustness,System.Boolean,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnPixelMap
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnPixelMap(OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.UInt16*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|map|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnPolygonStipple
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnPolygonStipple(System.Int32,System.Byte*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|bufSize|-|
|pattern|[length: bufSize]|


#### GetnSeparableFilter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnSeparableFilter(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr,System.Int32,System.IntPtr,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|rowBufSize|-|
|row|[length: rowBufSize]|
|columnBufSize|-|
|column|[length: columnBufSize]|
|span|[length: 0]|


#### GetnSeparableFilter``3
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnSeparableFilter``3(OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@,System.Int32,``1@,``2@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|rowBufSize|-|
|row|[length: rowBufSize]|
|columnBufSize|-|
|column|[length: columnBufSize]|
|span|[length: 0]|


#### GetnTexImage
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnTexImage(OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|format|-|
|type|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnTexImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnTexImage``1(OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|format|-|
|type|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnUniform
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetnUniform(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|bufSize|-|
|@params|[length: bufSize]|


#### GetObjectParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetObjectParameter(System.UInt32,OpenTK.Graphics.OpenGL.ArbShaderObjects,System.Int32*)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|
|pname|-|
|@params|[length: pname]|


#### GetProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetProgram(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.Int32*)
```
[requires: ARB_fragment_program|ARB_vertex_program]
 Returns a parameter from a program object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the program object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are DeleteStatus, LinkStatus, ValidateStatus, InfoLogLength, AttachedShaders, ActiveAtomicCounterBuffers, ActiveAttributes, ActiveAttributeMaxLength, ActiveUniforms, ActiveUniformBlocks, ActiveUniformBlockMaxNameLength, ActiveUniformMaxLength, ComputeWorkGroupSizeProgramBinaryLength, TransformFeedbackBufferMode, TransformFeedbackVaryings, TransformFeedbackVaryingMaxLength, GeometryVerticesOut, GeometryInputType, and GeometryOutputType.
            |
|@params|[length: 1] 
            Returns the requested object parameter.
            |


#### GetProgramEnvParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetProgramEnvParameter(OpenTK.Graphics.OpenGL.ArbVertexProgram,System.UInt32,System.Single*)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetProgramLocalParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetProgramLocalParameter(OpenTK.Graphics.OpenGL.ArbVertexProgram,System.UInt32,System.Single*)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetProgramString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetProgramString(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.IntPtr)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@string|[length: target,pname]|


#### GetProgramString``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetProgramString``1(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,``0@)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@string|[length: target,pname]|


#### GetQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetQuery(OpenTK.Graphics.OpenGL.ArbOcclusionQuery,OpenTK.Graphics.OpenGL.ArbOcclusionQuery,System.Int32*)
```
[requires: ARB_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetQueryObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetQueryObject(System.UInt32,OpenTK.Graphics.OpenGL.ArbOcclusionQuery,System.UInt32*)
```
[requires: ARB_occlusion_query]
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


#### GetShaderSource
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetShaderSource(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: ARB_shader_objects]
 Returns the source code string from a shader object

|Parameter Name|Remarks|
|--------------|-------|
|obj| 
            Specifies the shader object to be queried.
            |
|maxLength| 
            Specifies the size of the character buffer for storing the returned source code string.
            |
|length|[length: 1] 
            Returns the length of the string returned in source (excluding the null terminator).
            |
|source|[length: maxLength] 
            Specifies an array of characters that is used to return the source code string.
            |


#### GetTextureHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetTextureHandle(System.UInt32)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|


#### GetTextureSamplerHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetTextureSamplerHandle(System.UInt32,System.UInt32)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|sampler|-|


#### GetUniform
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetUniform(System.UInt32,System.Int32,System.Int32*)
```
[requires: ARB_shader_objects]
 Returns the value of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the program object to be queried.
            |
|location| 
            Specifies the location of the uniform variable to be queried.
            |
|@params|[length: program, location] 
            Returns the value of the specified uniform variable.
            |


#### GetUniformLocation
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetUniformLocation(System.UInt32,System.String)
```
[requires: ARB_shader_objects]
 Returns the location of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the program object to be queried.
            |
|name| 
            Points to a null terminated string containing the name of the uniform variable whose location is to be queried.
            |


#### GetVertexAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetVertexAttrib(System.UInt32,OpenTK.Graphics.OpenGL.VertexAttribParameterArb,System.Int32*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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


#### GetVertexAttribL
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetVertexAttribL(System.UInt32,OpenTK.Graphics.OpenGL.VertexAttribParameterArb,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|-|


#### GetVertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetVertexAttribPointer(System.UInt32,OpenTK.Graphics.OpenGL.VertexAttribPointerParameterArb,System.IntPtr)
```
[requires: ARB_vertex_program|ARB_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|pointer|[length: 1]|


#### GetVertexAttribPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.GetVertexAttribPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.VertexAttribPointerParameterArb,``0@)
```
[requires: ARB_vertex_program|ARB_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|pointer|[length: 1]|


#### IsBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsBuffer(System.UInt32)
```
[requires: ARB_vertex_buffer_object]
 Determine if a name corresponds to a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            Specifies a value that may be the name of a buffer object.
            |


#### IsImageHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsImageHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### IsNamedString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsNamedString(System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|


#### IsProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsProgram(System.UInt32)
```
[requires: ARB_fragment_program|ARB_vertex_program]
 Determines if a name corresponds to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies a potential program object.
            |


#### IsQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsQuery(System.UInt32)
```
[requires: ARB_occlusion_query]
 Determine if a name corresponds to a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a query object.
            |


#### IsTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.IsTextureHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### LinkProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.LinkProgram(System.UInt32)
```
[requires: ARB_shader_objects]
 Links a program object

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the handle of the program object to be linked.
            |


#### LoadTransposeMatrix
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.LoadTransposeMatrix(System.Single*)
```
[requires: ARB_transpose_matrix]
 Replace the current matrix with the specified row-major ordered matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16] 
            Specifies a pointer to 16 consecutive values, which are used as the elements of a 4  times  4 row-major matrix.
            |


#### MakeImageHandleNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MakeImageHandleNonResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeImageHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MakeImageHandleResident(System.UInt64,OpenTK.Graphics.OpenGL.ArbBindlessTexture)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|
|access|-|


#### MakeTextureHandleNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MakeTextureHandleNonResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MakeTextureHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MapBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MapBuffer(OpenTK.Graphics.OpenGL.BufferTargetArb,OpenTK.Graphics.OpenGL.BufferAccessArb)
```
[requires: ARB_vertex_buffer_object]
 Map a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object being mapped. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer or UniformBuffer.
            |
|access| 
            For glMapBuffer only, specifies the access policy, indicating whether it will be possible to read from, write to, or both read from and write to the buffer object's mapped data store. The symbolic constant must be ReadOnly, WriteOnly, or ReadWrite.
            |


#### MatrixIndex
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MatrixIndex(System.Int32,System.UInt16*)
```
[requires: ARB_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|indices|[length: size]|


#### MatrixIndexPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MatrixIndexPointer(System.Int32,OpenTK.Graphics.OpenGL.ArbMatrixPalette,System.Int32,System.IntPtr)
```
[requires: ARB_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MatrixIndexPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MatrixIndexPointer``1(System.Int32,OpenTK.Graphics.OpenGL.ArbMatrixPalette,System.Int32,``0@)
```
[requires: ARB_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MinSampleShading
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MinSampleShading(System.Single)
```
[requires: ARB_sample_shading]
 Specifies minimum rate at which sample shaing takes place

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specifies the rate at which samples are shaded within each covered pixel.
            |


#### MultiDrawArraysIndirectCount
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiDrawArraysIndirectCount(OpenTK.Graphics.OpenGL.ArbIndirectParameters,System.IntPtr,System.IntPtr,System.Int32,System.Int32)
```
[requires: ARB_indirect_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|indirect|-|
|drawcount|-|
|maxdrawcount|-|
|stride|-|


#### MultiDrawElementsIndirectCount
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiDrawElementsIndirectCount(OpenTK.Graphics.OpenGL.ArbIndirectParameters,OpenTK.Graphics.OpenGL.ArbIndirectParameters,System.IntPtr,System.IntPtr,System.Int32,System.Int32)
```
[requires: ARB_indirect_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|type|-|
|indirect|-|
|drawcount|-|
|maxdrawcount|-|
|stride|-|


#### MultiTexCoord1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiTexCoord1(OpenTK.Graphics.OpenGL.TextureUnit,System.Int16*)
```
[requires: ARB_multitexture]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|v|[length: 1] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord2
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiTexCoord2(OpenTK.Graphics.OpenGL.TextureUnit,System.Int16*)
```
[requires: ARB_multitexture]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|v|[length: 2] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord3
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiTexCoord3(OpenTK.Graphics.OpenGL.TextureUnit,System.Int16*)
```
[requires: ARB_multitexture]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|v|[length: 3] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord4
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultiTexCoord4(OpenTK.Graphics.OpenGL.TextureUnit,System.Int16*)
```
[requires: ARB_multitexture]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|v|[length: 4] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultTransposeMatrix
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.MultTransposeMatrix(System.Single*)
```
[requires: ARB_transpose_matrix]
 Multiply the current matrix with the specified row-major ordered matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16] 
            Points to 16 consecutive values that are used as the elements of a 4  times  4 row-major matrix.
            |


#### NamedString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.NamedString(OpenTK.Graphics.OpenGL.ArbShadingLanguageInclude,System.Int32,System.String,System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|namelen|-|
|name|[length: namelen]|
|stringlen|-|
|@string|[length: stringlen]|


#### PointParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.PointParameter(OpenTK.Graphics.OpenGL.ArbPointParameters,System.Single*)
```
[requires: ARB_point_parameters]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### ProgramEnvParameter4
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramEnvParameter4(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.Single*)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### ProgramLocalParameter4
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramLocalParameter4(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.Single*)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### ProgramParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramParameter(System.UInt32,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.Int32)
```
[requires: ARB_geometry_shader4]
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


#### ProgramString
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramString(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,OpenTK.Graphics.OpenGL.ArbVertexProgram,System.Int32,System.IntPtr)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|len|-|
|@string|[length: len]|


#### ProgramString``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramString``1(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,OpenTK.Graphics.OpenGL.ArbVertexProgram,System.Int32,``0@)
```
[requires: ARB_fragment_program|ARB_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|len|-|
|@string|[length: len]|


#### ProgramUniformHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ProgramUniformHandle(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|values|[length: count]|


#### ReadnPixels
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ReadnPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

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
OpenTK.Graphics.OpenGL.GL.Arb.ReadnPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.ArbRobustness,OpenTK.Graphics.OpenGL.ArbRobustness,System.Int32,``0@)
```
[requires: ARB_robustness]

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


#### SampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.SampleCoverage(System.Single,System.Boolean)
```
[requires: ARB_multisample]
 Specify multisample coverage parameters

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specify a single floating-point sample coverage value.  The value is clamped to the range [0 ,1]. The initial value is 1.0.
            |
|invert| 
            Specify a single boolean value representing if the coverage masks should be inverted.  True and False are accepted.  The initial value is False.
            |


#### ShaderSource
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ShaderSource(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: ARB_shader_objects]
 Replaces the source code in a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shaderObj| 
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


#### TexBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.TexBuffer(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.ArbTextureBufferObject,System.UInt32)
```
[requires: ARB_texture_buffer_object]
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


#### TexPageCommitment
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.TexPageCommitment(OpenTK.Graphics.OpenGL.ArbSparseTexture,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: ARB_sparse_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|resident|-|


#### Uniform1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.Uniform1(System.Int32,System.Int32,System.Int32*)
```
[requires: ARB_shader_objects]
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
OpenTK.Graphics.OpenGL.GL.Arb.Uniform2(System.Int32,System.Int32,System.Int32*)
```
[requires: ARB_shader_objects]
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
OpenTK.Graphics.OpenGL.GL.Arb.Uniform3(System.Int32,System.Int32,System.Int32*)
```
[requires: ARB_shader_objects]
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
OpenTK.Graphics.OpenGL.GL.Arb.Uniform4(System.Int32,System.Int32,System.Int32*)
```
[requires: ARB_shader_objects]
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


#### UniformHandle
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UniformHandle(System.Int32,System.Int32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|value|[length: count]|


#### UniformMatrix2
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UniformMatrix2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### UniformMatrix3
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UniformMatrix3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### UniformMatrix4
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UniformMatrix4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### UnmapBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UnmapBuffer(OpenTK.Graphics.OpenGL.BufferTargetArb)
```
[requires: ARB_vertex_buffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### UseProgramObject
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.UseProgramObject(System.UInt32)
```
[requires: ARB_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|programObj|-|


#### ValidateProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.ValidateProgram(System.UInt32)
```
[requires: ARB_shader_objects]
 Validates a program object

|Parameter Name|Remarks|
|--------------|-------|
|programObj| 
            Specifies the handle of the program object to be validated.
            |


#### VertexAttrib1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttrib1(System.UInt32,System.Int16*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttrib2(System.UInt32,System.Int16*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttrib3(System.UInt32,System.Int16*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttrib4(System.UInt32,System.UInt16*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttrib4N(System.UInt32,System.UInt16*)
```
[requires: ARB_vertex_program|ARB_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: ARB_instanced_arrays]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |


#### VertexAttribL1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttribL1(System.UInt32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|-|


#### VertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttribPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribPointerTypeArb,System.Boolean,System.Int32,System.IntPtr)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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
OpenTK.Graphics.OpenGL.GL.Arb.VertexAttribPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribPointerTypeArb,System.Boolean,System.Int32,``0@)
```
[requires: ARB_vertex_program|ARB_vertex_shader]
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


#### VertexBlend
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.VertexBlend(System.Int32)
```
[requires: ARB_vertex_blend]

|Parameter Name|Remarks|
|--------------|-------|
|count|-|


#### Weight
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.Weight(System.Int32,System.UInt16*)
```
[requires: ARB_vertex_blend]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|weights|[length: size]|


#### WeightPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.WeightPointer(System.Int32,OpenTK.Graphics.OpenGL.ArbVertexBlend,System.Int32,System.IntPtr)
```
[requires: ARB_vertex_blend]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### WeightPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.WeightPointer``1(System.Int32,OpenTK.Graphics.OpenGL.ArbVertexBlend,System.Int32,``0@)
```
[requires: ARB_vertex_blend]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### WindowPos2
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.WindowPos2(System.Int16*)
```
[requires: ARB_window_pos]
 Specify the raster position in window coordinates for pixel operations

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 2] 
            Specify the , ,  coordinates for the raster position.
            |


#### WindowPos3
```csharp
OpenTK.Graphics.OpenGL.GL.Arb.WindowPos3(System.Int16*)
```
[requires: ARB_window_pos]
 Specify the raster position in window coordinates for pixel operations

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3] 
            Specify the , ,  coordinates for the raster position.
            |





