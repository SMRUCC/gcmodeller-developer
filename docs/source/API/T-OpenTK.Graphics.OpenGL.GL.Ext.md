---
title: Ext
---

# Ext
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### ActiveProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ActiveProgram(System.UInt32)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|


#### ActiveShaderProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ActiveShaderProgram(System.UInt32,System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Set the active program object for a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the program pipeline object to set the active program object for.
            |
|program| 
            Specifies the program object to set as the active program pipeline object pipeline.
            |


#### ActiveStencilFace
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ActiveStencilFace(OpenTK.Graphics.OpenGL.ExtStencilTwoSide)
```
[requires: EXT_stencil_two_side]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|


#### ApplyTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ApplyTexture(OpenTK.Graphics.OpenGL.ExtLightTexture)
```
[requires: EXT_light_texture]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### AreTexturesResident
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.AreTexturesResident(System.Int32,System.UInt32*,System.Boolean*)
```
[requires: EXT_texture_object]
 Determine if textures are loaded in texture memory

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of textures to be queried.
            |
|textures|[length: n] 
            Specifies an array containing the names of the textures to be queried.
            |
|residences|[length: n] 
            Specifies an array in which the texture residence status is returned. The residence status of a texture named by an element of textures is returned in the corresponding element of residences.
            |


#### ArrayElement
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ArrayElement(System.Int32)
```
[requires: EXT_vertex_array]
 Render a vertex using the specified vertex array element

|Parameter Name|Remarks|
|--------------|-------|
|i| 
            Specifies an index into the enabled vertex data arrays.
            |


#### BeginTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BeginTransformFeedback(OpenTK.Graphics.OpenGL.ExtTransformFeedback)
```
[requires: EXT_transform_feedback]
 Start transform feedback operation

|Parameter Name|Remarks|
|--------------|-------|
|primitiveMode| 
            Specify the output type of the primitives that will be recorded into the buffer objects that are bound for transform feedback.
            |


#### BeginVertexShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BeginVertexShader
```
[requires: EXT_vertex_shader]

#### BindBufferBase
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindBufferBase(OpenTK.Graphics.OpenGL.ExtTransformFeedback,System.UInt32,System.UInt32)
```
[requires: EXT_transform_feedback]
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


#### BindBufferOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindBufferOffset(OpenTK.Graphics.OpenGL.ExtTransformFeedback,System.UInt32,System.UInt32,System.IntPtr)
```
[requires: EXT_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|buffer|-|
|offset|-|


#### BindBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindBufferRange(OpenTK.Graphics.OpenGL.ExtTransformFeedback,System.UInt32,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: EXT_transform_feedback]
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


#### BindFragDataLocation
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindFragDataLocation(System.UInt32,System.UInt32,System.String)
```
[requires: EXT_gpu_shader4]
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


#### BindFramebuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindFramebuffer(OpenTK.Graphics.OpenGL.FramebufferTarget,System.UInt32)
```
[requires: EXT_framebuffer_object]
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
OpenTK.Graphics.OpenGL.GL.Ext.BindImageTexture(System.UInt32,System.UInt32,System.Int32,System.Boolean,System.Int32,OpenTK.Graphics.OpenGL.ExtShaderImageLoadStore,System.Int32)
```
[requires: EXT_shader_image_load_store]
 Bind a level of a texture to an image unit

|Parameter Name|Remarks|
|--------------|-------|
|index| 
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


#### BindLightParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindLightParameter(OpenTK.Graphics.OpenGL.LightName,OpenTK.Graphics.OpenGL.LightParameter)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|value|-|


#### BindMaterialParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindMaterialParameter(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.MaterialParameter)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|value|-|


#### BindMultiTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindMultiTexture(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|texture|-|


#### BindParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindParameter(OpenTK.Graphics.OpenGL.ExtVertexShader)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### BindProgramPipeline
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Bind a program pipeline to the current context

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of the pipeline object to bind to the context.
            |


#### BindRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindRenderbuffer(OpenTK.Graphics.OpenGL.RenderbufferTarget,System.UInt32)
```
[requires: EXT_framebuffer_object]
 Bind a renderbuffer to a renderbuffer target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the renderbuffer target of the binding operation. target must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the name of the renderbuffer object to bind.
            |


#### BindTexGenParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindTexGenParameter(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureCoordName,OpenTK.Graphics.OpenGL.TextureGenParameter)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|unit|-|
|coord|-|
|value|-|


#### BindTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindTexture(OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32)
```
[requires: EXT_texture_object]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture is bound. Must be one of Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray, TextureRectangle, TextureCubeMap, TextureCubeMapArray, TextureBuffer, Texture2DMultisample or Texture2DMultisampleArray.
            |
|texture| 
            Specifies the name of a texture.
            |


#### BindTextureUnitParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindTextureUnitParameter(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.ExtVertexShader)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|unit|-|
|value|-|


#### BindVertexShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BindVertexShader(System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### Binormal3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Binormal3(System.Int16*)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### BinormalPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BinormalPointer(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### BinormalPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BinormalPointer``1(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,``0@)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### BlendColor
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BlendColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: EXT_blend_color]
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
OpenTK.Graphics.OpenGL.GL.Ext.BlendEquation(OpenTK.Graphics.OpenGL.ExtBlendMinmax)
```
[requires: EXT_blend_minmax]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BlendEquationSeparate(OpenTK.Graphics.OpenGL.ExtBlendEquationSeparate,OpenTK.Graphics.OpenGL.ExtBlendEquationSeparate)
```
[requires: EXT_blend_equation_separate]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BlendFuncSeparate(OpenTK.Graphics.OpenGL.ExtBlendFuncSeparate,OpenTK.Graphics.OpenGL.ExtBlendFuncSeparate,OpenTK.Graphics.OpenGL.ExtBlendFuncSeparate,OpenTK.Graphics.OpenGL.ExtBlendFuncSeparate)
```
[requires: EXT_blend_func_separate]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|sfactorRGB| 
            For glBlendFuncSeparatei, specifies the index of the draw buffer for which to set the blend functions.
            |
|dfactorRGB| 
            Specifies how the red, green, and blue blending factors are computed. The initial value is One.
            |
|sfactorAlpha| 
            Specifies how the red, green, and blue destination blending factors are computed. The initial value is Zero.
            |
|dfactorAlpha| 
            Specified how the alpha source blending factor is computed. The initial value is One.
            |


#### BlitFramebuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.BlitFramebuffer(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.ClearBufferMask,OpenTK.Graphics.OpenGL.ExtFramebufferBlit)
```
[requires: EXT_framebuffer_blit]
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


#### CheckFramebufferStatus
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CheckFramebufferStatus(OpenTK.Graphics.OpenGL.FramebufferTarget)
```
[requires: EXT_framebuffer_object]
 Check the completeness status of a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the framebuffer completeness check.
            |


#### CheckNamedFramebufferStatus
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CheckNamedFramebufferStatus(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferTarget)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|target|-|


#### ClearColorI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClearColorI(System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_texture_integer]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ClearNamedBufferData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClearNamedBufferData(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|internalformat|-|
|format|-|
|type|-|
|data|[length: format,type]|


#### ClearNamedBufferData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClearNamedBufferData``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|internalformat|-|
|format|-|
|type|-|
|data|[length: format,type]|


#### ClearNamedBufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClearNamedBufferSubData(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

#### ClearNamedBufferSubData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClearNamedBufferSubData``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,System.IntPtr,``0@)
```
[requires: EXT_direct_state_access]

#### ClientAttribDefault
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ClientAttribDefault(OpenTK.Graphics.OpenGL.ClientAttribMask)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mask|-|


#### ColorMaskIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ColorMaskIndexed(System.UInt32,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|r|-|
|g|-|
|b|-|
|a|-|


#### ColorPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ColorPointer(System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_array]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### ColorPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ColorPointer``1(System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,System.Int32,``0@)
```
[requires: EXT_vertex_array]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### ColorSubTable
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ColorSubTable(OpenTK.Graphics.OpenGL.ColorTableTarget,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_color_subtable]
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
OpenTK.Graphics.OpenGL.GL.Ext.ColorSubTable``1(OpenTK.Graphics.OpenGL.ColorTableTarget,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_color_subtable]
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
OpenTK.Graphics.OpenGL.GL.Ext.ColorTable(OpenTK.Graphics.OpenGL.ColorTableTarget,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_paletted_texture]
 Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalFormat| 
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
OpenTK.Graphics.OpenGL.GL.Ext.ColorTable``1(OpenTK.Graphics.OpenGL.ColorTableTarget,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_paletted_texture]
 Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalFormat| 
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


#### CompressedMultiTexImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage1D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage2D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage3D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexImage3D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage1D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage2D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage3D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedMultiTexSubImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedMultiTexSubImage3D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage1D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage2D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage3D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureImage3D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage1D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage2D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage3D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### CompressedTextureSubImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CompressedTextureSubImage3D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|imageSize|-|
|bits|[length: imageSize]|


#### ConvolutionFilter1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ConvolutionFilter1D(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.ConvolutionFilter1D``1(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.ConvolutionFilter2D(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.ConvolutionFilter2D``1(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.ConvolutionParameter(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.ExtConvolution,System.Int32*)
```
[requires: EXT_convolution]
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


#### CopyColorSubTable
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyColorSubTable(OpenTK.Graphics.OpenGL.ColorTableTarget,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_color_subtable]
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


#### CopyConvolutionFilter1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyConvolutionFilter1D(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.CopyConvolutionFilter2D(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_convolution]
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


#### CopyMultiTexImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyMultiTexImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|x|-|
|y|-|
|width|-|
|border|-|


#### CopyMultiTexImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyMultiTexImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|x|-|
|y|-|
|width|-|
|height|-|
|border|-|


#### CopyMultiTexSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyMultiTexSubImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|x|-|
|y|-|
|width|-|


#### CopyMultiTexSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyMultiTexSubImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|x|-|
|y|-|
|width|-|
|height|-|


#### CopyMultiTexSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyMultiTexSubImage3D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|x|-|
|y|-|
|width|-|
|height|-|


#### CopyTexImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTexImage1D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_texture]
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
OpenTK.Graphics.OpenGL.GL.Ext.CopyTexImage2D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_texture]
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
OpenTK.Graphics.OpenGL.GL.Ext.CopyTexSubImage1D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_texture]
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
OpenTK.Graphics.OpenGL.GL.Ext.CopyTexSubImage2D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_texture]
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
OpenTK.Graphics.OpenGL.GL.Ext.CopyTexSubImage3D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_texture]
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


#### CopyTextureImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTextureImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|x|-|
|y|-|
|width|-|
|border|-|


#### CopyTextureImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTextureImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|x|-|
|y|-|
|width|-|
|height|-|
|border|-|


#### CopyTextureSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTextureSubImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|x|-|
|y|-|
|width|-|


#### CopyTextureSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTextureSubImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|x|-|
|y|-|
|width|-|
|height|-|


#### CopyTextureSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CopyTextureSubImage3D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|x|-|
|y|-|
|width|-|
|height|-|


#### CreateShaderProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CreateShaderProgram(OpenTK.Graphics.OpenGL.ExtSeparateShaderObjects,System.Int32,System.String[])
```
[requires: EXT_separate_shader_objects]
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


#### CullParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.CullParameter(OpenTK.Graphics.OpenGL.ExtCullVertex,System.Single*)
```
[requires: EXT_cull_vertex]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: 4]|


#### DeleteFramebuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteFramebuffer(System.UInt32)
```
[requires: EXT_framebuffer_object]
 Delete framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: n] 
            A pointer to an array containing n framebuffer objects to be deleted.
            |


#### DeleteFramebuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteFramebuffers(System.Int32,System.UInt32*)
```
[requires: EXT_framebuffer_object]
 Delete framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer objects to be deleted.
            |
|framebuffers|[length: n] 
            A pointer to an array containing n framebuffer objects to be deleted.
            |


#### DeleteProgramPipeline
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteProgramPipelines
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteProgramPipelines(System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline objects to delete.
            |
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteRenderbuffer(System.UInt32)
```
[requires: EXT_framebuffer_object]
 Delete renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: n] 
            A pointer to an array containing n renderbuffer objects to be deleted.
            |


#### DeleteRenderbuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteRenderbuffers(System.Int32,System.UInt32*)
```
[requires: EXT_framebuffer_object]
 Delete renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer objects to be deleted.
            |
|renderbuffers|[length: n] 
            A pointer to an array containing n renderbuffer objects to be deleted.
            |


#### DeleteTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteTexture(System.UInt32)
```
[requires: EXT_texture_object]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteTextures
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteTextures(System.Int32,System.UInt32*)
```
[requires: EXT_texture_object]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of textures to be deleted.
            |
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteVertexShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DeleteVertexShader(System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### DepthBounds
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DepthBounds(System.Double,System.Double)
```
[requires: EXT_depth_bounds_test]

|Parameter Name|Remarks|
|--------------|-------|
|zmin|-|
|zmax|-|


#### DisableClientState
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableClientState(OpenTK.Graphics.OpenGL.ArrayCap,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|index|-|


#### DisableClientStateIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableClientStateIndexed(OpenTK.Graphics.OpenGL.EnableCap,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|index|-|


#### DisableIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableIndexed(OpenTK.Graphics.OpenGL.IndexedEnableCap,System.UInt32)
```
[requires: EXT_direct_state_access|EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### DisableVariantClientState
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableVariantClientState(System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### DisableVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableVertexArray(System.UInt32,OpenTK.Graphics.OpenGL.EnableCap)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|array|-|


#### DisableVertexArrayAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DisableVertexArrayAttrib(System.UInt32,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|index|-|


#### DrawArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DrawArrays(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,System.Int32)
```
[requires: EXT_vertex_array]
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


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DrawArraysInstanced(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_draw_instanced]
 Draw multiple instances of a range of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, TrianglesLinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
            |
|start| 
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
OpenTK.Graphics.OpenGL.GL.Ext.DrawElementsInstanced(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: EXT_draw_instanced]
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
OpenTK.Graphics.OpenGL.GL.Ext.DrawElementsInstanced``1(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,``0@,System.Int32)
```
[requires: EXT_draw_instanced]
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


#### DrawRangeElements
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.DrawRangeElements(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,System.IntPtr)
```
[requires: EXT_draw_range_elements]
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
OpenTK.Graphics.OpenGL.GL.Ext.DrawRangeElements``1(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.DrawElementsType,``0@)
```
[requires: EXT_draw_range_elements]
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


#### EdgeFlagPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EdgeFlagPointer(System.Int32,System.Int32,System.Boolean*)
```
[requires: EXT_vertex_array]
 Define an array of edge flags

|Parameter Name|Remarks|
|--------------|-------|
|stride| 
            Specifies the byte offset between consecutive edge flags. If stride is 0, the edge flags are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first edge flag in the array. The initial value is 0.
            |
|pointer|[length: stride,count] 
            Specifies a pointer to the first edge flag in the array. The initial value is 0.
            |


#### EnableClientState
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableClientState(OpenTK.Graphics.OpenGL.ArrayCap,System.UInt32)
```
[requires: EXT_direct_state_access]
 Enable or disable client-side capability

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the capability to enable. Symbolic constants ColorArray, EdgeFlagArray, FogCoordArray, IndexArray, NormalArray, SecondaryColorArray, TextureCoordArray, and VertexArray are accepted.
            |
|index|-|


#### EnableClientStateIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableClientStateIndexed(OpenTK.Graphics.OpenGL.EnableCap,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|index|-|


#### EnableIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableIndexed(OpenTK.Graphics.OpenGL.IndexedEnableCap,System.UInt32)
```
[requires: EXT_direct_state_access|EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### EnableVariantClientState
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableVariantClientState(System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### EnableVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableVertexArray(System.UInt32,OpenTK.Graphics.OpenGL.EnableCap)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|array|-|


#### EnableVertexArrayAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EnableVertexArrayAttrib(System.UInt32,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|index|-|


#### EndTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EndTransformFeedback
```
[requires: EXT_transform_feedback]

#### EndVertexShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.EndVertexShader
```
[requires: EXT_vertex_shader]

#### ExtractComponent
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ExtractComponent(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|res|-|
|src|-|
|num|-|


#### FlushMappedNamedBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FlushMappedNamedBufferRange(System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|length|-|


#### FogCoord
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FogCoord(System.Single*)
```
[requires: EXT_fog_coord]
 Set the current fog coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coord|[length: 1] 
            Specify the fog distance.
            |


#### FogCoordPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FogCoordPointer(OpenTK.Graphics.OpenGL.FogPointerTypeExt,System.Int32,System.IntPtr)
```
[requires: EXT_fog_coord]
 Define an array of fog coordinates

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each fog coordinate. Symbolic constants Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive fog coordinates. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|pointer|[length: type,stride] 
            Specifies a pointer to the first coordinate of the first fog coordinate in the array. The initial value is 0.
            |


#### FogCoordPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FogCoordPointer``1(OpenTK.Graphics.OpenGL.FogPointerTypeExt,System.Int32,``0@)
```
[requires: EXT_fog_coord]
 Define an array of fog coordinates

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each fog coordinate. Symbolic constants Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive fog coordinates. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|pointer|[length: type,stride] 
            Specifies a pointer to the first coordinate of the first fog coordinate in the array. The initial value is 0.
            |


#### FramebufferDrawBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferDrawBuffer(System.UInt32,OpenTK.Graphics.OpenGL.DrawBufferMode)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|mode|-|


#### FramebufferDrawBuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferDrawBuffers(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.DrawBufferMode*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|n|-|
|bufs|[length: n]|


#### FramebufferReadBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferReadBuffer(System.UInt32,OpenTK.Graphics.OpenGL.ReadBufferMode)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|mode|-|


#### FramebufferRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferRenderbuffer(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.RenderbufferTarget,System.UInt32)
```
[requires: EXT_framebuffer_object]
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
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTexture(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32)
```
[requires: NV_geometry_program4]
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
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTexture1D(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32)
```
[requires: EXT_framebuffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### FramebufferTexture2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTexture2D(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32)
```
[requires: EXT_framebuffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### FramebufferTexture3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTexture3D(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_framebuffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|zoffset|-|


#### FramebufferTextureFace
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTextureFace(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.TextureTarget)
```
[requires: NV_geometry_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|texture|-|
|level|-|
|face|-|


#### FramebufferTextureLayer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.FramebufferTextureLayer(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_texture_array|NV_geometry_program4]
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


#### GenerateMipmap
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenerateMipmap(OpenTK.Graphics.OpenGL.GenerateMipmapTarget)
```
[requires: EXT_framebuffer_object]
 Generate mipmaps for a specified texture target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the texture whose mimaps to generate is bound. target must be Texture1D, Texture2D, Texture3D, Texture1DArray, Texture2DArray or TextureCubeMap.
            |


#### GenerateMultiTexMipmap
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenerateMultiTexMipmap(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|


#### GenerateTextureMipmap
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenerateTextureMipmap(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|


#### GenFramebuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenFramebuffer
```
[requires: EXT_framebuffer_object]
 Generate framebuffer object names

#### GenFramebuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenFramebuffers(System.Int32,System.UInt32*)
```
[requires: EXT_framebuffer_object]
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
OpenTK.Graphics.OpenGL.GL.Ext.GenProgramPipeline
```
[requires: EXT_separate_shader_objects]
 Reserve program pipeline object names

#### GenProgramPipelines
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenProgramPipelines(System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
 Reserve program pipeline object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline object names to reserve.
            |
|pipelines|[length: n] 
            Specifies an array of into which the reserved names will be written.
            |


#### GenRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenRenderbuffer
```
[requires: EXT_framebuffer_object]
 Generate renderbuffer object names

#### GenRenderbuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenRenderbuffers(System.Int32,System.UInt32*)
```
[requires: EXT_framebuffer_object]
 Generate renderbuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer object names to generate.
            |
|renderbuffers|[length: n] 
            Specifies an array in which the generated renderbuffer object names are stored.
            |


#### GenSymbol
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenSymbol(OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|datatype|-|
|storagetype|-|
|range|-|
|components|-|


#### GenTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenTexture
```
[requires: EXT_texture_object]
 Generate texture names

#### GenTextures
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenTextures(System.Int32,System.UInt32*)
```
[requires: EXT_texture_object]
 Generate texture names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of texture names to be generated.
            |
|textures|[length: n] 
            Specifies an array in which the generated texture names are stored.
            |


#### GenVertexShaders
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GenVertexShaders(System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|range|-|


#### GetBooleanIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetBooleanIndexed(OpenTK.Graphics.OpenGL.ExtDrawBuffers2,System.UInt32,System.Boolean*)
```
[requires: EXT_direct_state_access|EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: target]|


#### GetColorTable
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetColorTable(OpenTK.Graphics.OpenGL.ColorTableTarget,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_paletted_texture]
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
|data|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTable``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetColorTable``1(OpenTK.Graphics.OpenGL.ColorTableTarget,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_paletted_texture]
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
|data|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTableParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetColorTableParameter(OpenTK.Graphics.OpenGL.ColorTableTarget,OpenTK.Graphics.OpenGL.GetColorTableParameterPName,System.Int32*)
```
[requires: EXT_paletted_texture]
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


#### GetCompressedMultiTexImage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetCompressedMultiTexImage(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|lod|-|
|img|[length: target,lod]|


#### GetCompressedMultiTexImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetCompressedMultiTexImage``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|lod|-|
|img|[length: target,lod]|


#### GetCompressedTextureImage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetCompressedTextureImage(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|lod|-|
|img|[length: target,lod]|


#### GetCompressedTextureImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetCompressedTextureImage``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|lod|-|
|img|[length: target,lod]|


#### GetConvolutionFilter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetConvolutionFilter(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetConvolutionFilter``1(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_convolution]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetConvolutionParameter(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.ExtConvolution,System.Int32*)
```
[requires: EXT_convolution]
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


#### GetDouble
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetDouble(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Double*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|index|-|
|@params|[length: target]|


#### GetDoubleIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetDoubleIndexed(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Double*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: target]|


#### GetFloat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetFloat(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|index|-|
|@params|[length: target]|


#### GetFloatIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetFloatIndexed(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: target]|


#### GetFragDataLocation
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetFragDataLocation(System.UInt32,System.String)
```
[requires: EXT_gpu_shader4]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetFramebufferAttachmentParameter(OpenTK.Graphics.OpenGL.FramebufferTarget,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.FramebufferParameterName,System.Int32*)
```
[requires: EXT_framebuffer_object]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetFramebufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32*)
```
[requires: EXT_direct_state_access]
 Retrieve a named parameter from a framebuffer

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer| 
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
OpenTK.Graphics.OpenGL.GL.Ext.GetHistogram(OpenTK.Graphics.OpenGL.HistogramTargetExt,System.Boolean,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_histogram]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetHistogram``1(OpenTK.Graphics.OpenGL.HistogramTargetExt,System.Boolean,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_histogram]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetHistogramParameter(OpenTK.Graphics.OpenGL.HistogramTargetExt,OpenTK.Graphics.OpenGL.GetHistogramParameterPNameExt,System.Int32*)
```
[requires: EXT_histogram]
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


#### GetIntegerIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetIntegerIndexed(OpenTK.Graphics.OpenGL.GetIndexedPName,System.UInt32,System.Int32*)
```
[requires: EXT_direct_state_access|EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: target]|


#### GetInvariantBoolean
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetInvariantBoolean(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Boolean*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetInvariantFloat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetInvariantFloat(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Single*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetInvariantInteger
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetInvariantInteger(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Int32*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetLocalConstantBoolean
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetLocalConstantBoolean(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Boolean*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetLocalConstantFloat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetLocalConstantFloat(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Single*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetLocalConstantInteger
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetLocalConstantInteger(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Int32*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetMinmax
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMinmax(OpenTK.Graphics.OpenGL.MinmaxTargetExt,System.Boolean,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_histogram]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetMinmax``1(OpenTK.Graphics.OpenGL.MinmaxTargetExt,System.Boolean,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_histogram]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetMinmaxParameter(OpenTK.Graphics.OpenGL.MinmaxTargetExt,OpenTK.Graphics.OpenGL.GetMinmaxParameterPNameExt,System.Int32*)
```
[requires: EXT_histogram]
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


#### GetMultiTexEnv
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexEnv(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureEnvTarget,OpenTK.Graphics.OpenGL.TextureEnvParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetMultiTexGen
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexGen(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureCoordName,OpenTK.Graphics.OpenGL.TextureGenParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### GetMultiTexImage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexImage(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|format|-|
|type|-|
|pixels|[length: target,level,format,type]|


#### GetMultiTexImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexImage``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|format|-|
|type|-|
|pixels|[length: target,level,format,type]|


#### GetMultiTexLevelParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexLevelParameter(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.GetTextureParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|pname|-|
|@params|[length: pname]|


#### GetMultiTexParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexParameter(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.GetTextureParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetMultiTexParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetMultiTexParameterI(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.GetTextureParameter,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetNamedBufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedBufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|pname|-|
|@params|[length: pname]|


#### GetNamedBufferPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedBufferPointer(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|pname|-|
|@params|[length: 1]|


#### GetNamedBufferPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedBufferPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|pname|-|
|@params|[length: 1]|


#### GetNamedBufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedBufferSubData(System.UInt32,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|data|[length: size]|


#### GetNamedBufferSubData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedBufferSubData``1(System.UInt32,System.IntPtr,System.IntPtr,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|data|[length: size]|


#### GetNamedFramebufferAttachmentParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedFramebufferAttachmentParameter(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|pname|-|
|@params|[length: pname]|


#### GetNamedFramebufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedFramebufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|pname|-|
|@params|[length: pname]|


#### GetNamedProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedProgram(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.ProgramProperty,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|pname|-|
|@params|[length: 1]|


#### GetNamedProgramLocalParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedProgramLocalParameter(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetNamedProgramLocalParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedProgramLocalParameterI(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetNamedProgramString
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedProgramString(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|pname|-|
|@string|[length: program,pname]|


#### GetNamedProgramString``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedProgramString``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|pname|-|
|@string|[length: program,pname]|


#### GetNamedRenderbufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetNamedRenderbufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.RenderbufferParameterName,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer|-|
|pname|-|
|@params|[length: pname]|


#### GetObjectLabel
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetObjectLabel(OpenTK.Graphics.OpenGL.ExtDebugLabel,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: EXT_debug_label]
 Retrieve the label of a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            The namespace from which the name of the object is allocated.
            |
|@object| 
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


#### GetPixelTransformParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetPixelTransformParameter(OpenTK.Graphics.OpenGL.ExtPixelTransform,OpenTK.Graphics.OpenGL.ExtPixelTransform,System.Int32*)
```
[requires: EXT_pixel_transform]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetPointer(OpenTK.Graphics.OpenGL.GetPointervPName,System.IntPtr)
```
[requires: EXT_vertex_array]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: 1]|


#### GetPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetPointer``1(OpenTK.Graphics.OpenGL.GetPointervPName,``0@)
```
[requires: EXT_vertex_array]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: 1]|


#### GetPointerIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetPointerIndexed(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: 1]|


#### GetPointerIndexed``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetPointerIndexed``1(OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|[length: 1]|


#### GetProgramPipeline
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetProgramPipeline(System.UInt32,OpenTK.Graphics.OpenGL.ExtSeparateShaderObjects,System.Int32*)
```
[requires: EXT_separate_shader_objects]
 Retrieve properties of a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object whose parameter retrieve.
            |
|pname| 
            Specifies the name of the parameter to retrieve.
            |
|@params| 
            Specifies the address of a variable into which will be written the value or values of pname for pipeline.
            |


#### GetProgramPipelineInfoLog
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetProgramPipelineInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: EXT_separate_shader_objects]
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


#### GetQueryObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetQueryObject(System.UInt32,OpenTK.Graphics.OpenGL.ExtTimerQuery,System.UInt64*)
```
[requires: EXT_timer_query]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetRenderbufferParameter(OpenTK.Graphics.OpenGL.RenderbufferTarget,OpenTK.Graphics.OpenGL.RenderbufferParameterName,System.Int32*)
```
[requires: EXT_framebuffer_object]
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


#### GetSeparableFilter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetSeparableFilter(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,System.IntPtr,System.IntPtr)
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target|
            The separable filter to be retrieved. Must be GL_SEPARABLE_2D.
            |
|format|
            Format of the output images. Must be one of GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR GL_RGBA, GL_BGRA, GL_LUMINANCE, or GL_LUMINANCE_ALPHA.
            |
|type|
            Data type of components in the output images. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to storage for the row filter image.
            |
|column|
            Pointer to storage for the column filter image.
            |
|span|
            Pointer to storage for the span filter image (currently unused).
            |


#### GetSeparableFilter``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetSeparableFilter``1(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,System.IntPtr,``0@)
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target|
            The separable filter to be retrieved. Must be GL_SEPARABLE_2D.
            |
|format|
            Format of the output images. Must be one of GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR GL_RGBA, GL_BGRA, GL_LUMINANCE, or GL_LUMINANCE_ALPHA.
            |
|type|
            Data type of components in the output images. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to storage for the row filter image.
            |
|column|
            Pointer to storage for the column filter image.
            |
|span|
            Pointer to storage for the span filter image (currently unused).
            |


#### GetSeparableFilter``2
```csharp
])
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target|
            The separable filter to be retrieved. Must be GL_SEPARABLE_2D.
            |
|format|
            Format of the output images. Must be one of GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR GL_RGBA, GL_BGRA, GL_LUMINANCE, or GL_LUMINANCE_ALPHA.
            |
|type|
            Data type of components in the output images. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to storage for the row filter image.
            |
|column|
            Pointer to storage for the column filter image.
            |
|span|
            Pointer to storage for the span filter image (currently unused).
            |


#### GetSeparableFilter``3
```csharp
])
```
Get separable convolution filter kernel images

|Parameter Name|Remarks|
|--------------|-------|
|target|
            The separable filter to be retrieved. Must be GL_SEPARABLE_2D.
            |
|format|
            Format of the output images. Must be one of GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR GL_RGBA, GL_BGRA, GL_LUMINANCE, or GL_LUMINANCE_ALPHA.
            |
|type|
            Data type of components in the output images. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to storage for the row filter image.
            |
|column|
            Pointer to storage for the column filter image.
            |
|span|
            Pointer to storage for the span filter image (currently unused).
            |


#### GetTexParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTexParameterI(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.GetTextureParameter,System.UInt32*)
```
[requires: EXT_texture_integer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTextureImage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTextureImage(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|format|-|
|type|-|
|pixels|[length: target,level,format,type]|


#### GetTextureImage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTextureImage``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|format|-|
|type|-|
|pixels|[length: target,level,format,type]|


#### GetTextureLevelParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTextureLevelParameter(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.GetTextureParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|pname|-|
|@params|[length: pname]|


#### GetTextureParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTextureParameter(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.GetTextureParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTextureParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTextureParameterI(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.GetTextureParameter,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTransformFeedbackVarying
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetTransformFeedbackVarying(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL.ExtTransformFeedback*,System.Text.StringBuilder)
```
[requires: EXT_transform_feedback]
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
OpenTK.Graphics.OpenGL.GL.Ext.GetUniform(System.UInt32,System.Int32,System.UInt32*)
```
[requires: EXT_gpu_shader4]
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


#### GetUniformBufferSize
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetUniformBufferSize(System.UInt32,System.Int32)
```
[requires: EXT_bindable_uniform]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|


#### GetUniformOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetUniformOffset(System.UInt32,System.Int32)
```
[requires: EXT_bindable_uniform]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|


#### GetVariantBoolean
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVariantBoolean(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Boolean*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetVariantFloat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVariantFloat(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Single*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetVariantInteger
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVariantInteger(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.Int32*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetVariantPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVariantPointer(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.IntPtr)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetVariantPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVariantPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,``0@)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|value|-|
|data|[length: id]|


#### GetVertexArrayInteger
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVertexArrayInteger(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|pname|-|
|param|-|


#### GetVertexArrayPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVertexArrayPointer(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|pname|-|
|param|[length: 1]|


#### GetVertexArrayPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVertexArrayPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|pname|-|
|param|[length: 1]|


#### GetVertexAttribI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVertexAttribI(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram4,System.UInt32*)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: 1]|


#### GetVertexAttribL
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.GetVertexAttribL(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexAttrib64bit,System.Double*)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: pname]|


#### Histogram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Histogram(OpenTK.Graphics.OpenGL.HistogramTargetExt,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Boolean)
```
[requires: EXT_histogram]
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


#### ImportSync
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ImportSync(OpenTK.Graphics.OpenGL.ExtX11SyncObject,System.IntPtr,System.UInt32)
```
[requires: EXT_x11_sync_object]

|Parameter Name|Remarks|
|--------------|-------|
|external_sync_type|-|
|external_sync|-|
|flags|-|


#### IndexFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IndexFunc(OpenTK.Graphics.OpenGL.ExtIndexFunc,System.Single)
```
[requires: EXT_index_func]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|
|@ref|-|


#### IndexMaterial
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IndexMaterial(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.ExtIndexMaterial)
```
[requires: EXT_index_material]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|mode|-|


#### IndexPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IndexPointer(OpenTK.Graphics.OpenGL.IndexPointerType,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_array]
 Define an array of color indexes

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each color index in the array. Symbolic constants UnsignedByte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive color indexes. If stride is 0, the color indexes are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first index in the array. The initial value is 0.
            |
|pointer|[length: type,stride,count] 
            Specifies a pointer to the first index in the array. The initial value is 0.
            |


#### IndexPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IndexPointer``1(OpenTK.Graphics.OpenGL.IndexPointerType,System.Int32,System.Int32,``0@)
```
[requires: EXT_vertex_array]
 Define an array of color indexes

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each color index in the array. Symbolic constants UnsignedByte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive color indexes. If stride is 0, the color indexes are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first index in the array. The initial value is 0.
            |
|pointer|[length: type,stride,count] 
            Specifies a pointer to the first index in the array. The initial value is 0.
            |


#### InsertComponent
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.InsertComponent(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|res|-|
|src|-|
|num|-|


#### InsertEventMarker
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.InsertEventMarker(System.Int32,System.String)
```
[requires: EXT_debug_marker]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|marker|-|


#### IsEnabledIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsEnabledIndexed(OpenTK.Graphics.OpenGL.IndexedEnableCap,System.UInt32)
```
[requires: EXT_direct_state_access|EXT_draw_buffers2]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### IsFramebuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsFramebuffer(System.UInt32)
```
[requires: EXT_framebuffer_object]
 Determine if a name corresponds to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer| 
            Specifies a value that may be the name of a framebuffer object.
            |


#### IsProgramPipeline
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Determine if a name corresponds to a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies a value that may be the name of a program pipeline object.
            |


#### IsRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsRenderbuffer(System.UInt32)
```
[requires: EXT_framebuffer_object]
 Determine if a name corresponds to a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer| 
            Specifies a value that may be the name of a renderbuffer object.
            |


#### IsTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsTexture(System.UInt32)
```
[requires: EXT_texture_object]
 Determine if a name corresponds to a texture

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies a value that may be the name of a texture.
            |


#### IsVariantEnabled
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.IsVariantEnabled(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|cap|-|


#### LabelObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.LabelObject(OpenTK.Graphics.OpenGL.ExtDebugLabel,System.UInt32,System.Int32,System.String)
```
[requires: EXT_debug_label]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|@object|-|
|length|-|
|label|-|


#### LockArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.LockArrays(System.Int32,System.Int32)
```
[requires: EXT_compiled_vertex_array]

|Parameter Name|Remarks|
|--------------|-------|
|first|-|
|count|-|


#### MapNamedBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MapNamedBuffer(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|access|-|


#### MapNamedBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MapNamedBufferRange(System.UInt32,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL.BufferAccessMask)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|length|-|
|access|-|


#### MatrixFrustum
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixFrustum(OpenTK.Graphics.OpenGL.MatrixMode,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|left|-|
|right|-|
|bottom|-|
|top|-|
|zNear|-|
|zFar|-|


#### MatrixLoad
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixLoad(OpenTK.Graphics.OpenGL.MatrixMode,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|m|[length: 16]|


#### MatrixLoadIdentity
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixLoadIdentity(OpenTK.Graphics.OpenGL.MatrixMode)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### MatrixLoadTranspose
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixLoadTranspose(OpenTK.Graphics.OpenGL.MatrixMode,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|m|[length: 16]|


#### MatrixMult
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixMult(OpenTK.Graphics.OpenGL.MatrixMode,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|m|[length: 16]|


#### MatrixMultTranspose
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixMultTranspose(OpenTK.Graphics.OpenGL.MatrixMode,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|m|[length: 16]|


#### MatrixOrtho
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixOrtho(OpenTK.Graphics.OpenGL.MatrixMode,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|left|-|
|right|-|
|bottom|-|
|top|-|
|zNear|-|
|zFar|-|


#### MatrixPop
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixPop(OpenTK.Graphics.OpenGL.MatrixMode)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### MatrixPush
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixPush(OpenTK.Graphics.OpenGL.MatrixMode)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### MatrixRotate
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixRotate(OpenTK.Graphics.OpenGL.MatrixMode,System.Single,System.Single,System.Single,System.Single)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|angle|-|
|x|-|
|y|-|
|z|-|


#### MatrixScale
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixScale(OpenTK.Graphics.OpenGL.MatrixMode,System.Single,System.Single,System.Single)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|x|-|
|y|-|
|z|-|


#### MatrixTranslate
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MatrixTranslate(OpenTK.Graphics.OpenGL.MatrixMode,System.Single,System.Single,System.Single)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|x|-|
|y|-|
|z|-|


#### MemoryBarrier
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MemoryBarrier(System.UInt32)
```
[requires: EXT_shader_image_load_store]
 Defines a barrier ordering memory transactions

|Parameter Name|Remarks|
|--------------|-------|
|barriers| 
            Specifies the barriers to insert. Must be a bitwise combination of VertexAttribArrayBarrierBit, ElementArrayBarrierBit, UniformBarrierBit, TextureFetchBarrierBit, ShaderImageAccessBarrierBit, CommandBarrierBit, PixelBufferBarrierBit, TextureUpdateBarrierBit, BufferUpdateBarrierBit, FramebufferBarrierBit, TransformFeedbackBarrierBit, AtomicCounterBarrierBit, or ShaderStorageBarrierBit. If the special value AllBarrierBits is specified, all supported barriers will be inserted.
            |


#### Minmax
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Minmax(OpenTK.Graphics.OpenGL.MinmaxTargetExt,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Boolean)
```
[requires: EXT_histogram]
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


#### MultiDrawArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiDrawArrays(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32*,System.Int32*,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Ext.MultiDrawElements(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL.DrawElementsType,System.IntPtr,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Ext.MultiDrawElements``1(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32*,OpenTK.Graphics.OpenGL.DrawElementsType,``0@,System.Int32)
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


#### MultiTexBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexBuffer(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|internalformat|-|
|buffer|-|


#### MultiTexCoordPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexCoordPointer(OpenTK.Graphics.OpenGL.TextureUnit,System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MultiTexCoordPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexCoordPointer``1(OpenTK.Graphics.OpenGL.TextureUnit,System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MultiTexEnv
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexEnv(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureEnvTarget,OpenTK.Graphics.OpenGL.TextureEnvParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### MultiTexGen
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexGen(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureCoordName,OpenTK.Graphics.OpenGL.TextureGenParameter,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### MultiTexGend
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexGend(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureCoordName,OpenTK.Graphics.OpenGL.TextureGenParameter,System.Double)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|coord|-|
|pname|-|
|param|-|


#### MultiTexImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### MultiTexImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage1D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### MultiTexImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### MultiTexImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage2D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### MultiTexImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage3D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### MultiTexImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexImage3D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### MultiTexParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexParameter(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.TextureParameterName,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### MultiTexParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexParameterI(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.TextureParameterName,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### MultiTexRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexRenderbuffer(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|renderbuffer|-|


#### MultiTexSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage1D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### MultiTexSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage1D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### MultiTexSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage2D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### MultiTexSubImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage2D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### MultiTexSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage3D(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### MultiTexSubImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.MultiTexSubImage3D``1(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texunit|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### NamedBufferData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferData(System.UInt32,System.IntPtr,System.IntPtr,OpenTK.Graphics.OpenGL.ExtDirectStateAccess)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|size|-|
|data|[length: size]|
|usage|-|


#### NamedBufferData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferData``1(System.UInt32,System.IntPtr,``0@,OpenTK.Graphics.OpenGL.ExtDirectStateAccess)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|size|-|
|data|[length: size]|
|usage|-|


#### NamedBufferStorage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferStorage(System.UInt32,System.IntPtr,System.IntPtr,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|size|-|
|data|[length: size]|
|flags|-|


#### NamedBufferStorage``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferStorage``1(System.UInt32,System.IntPtr,``0@,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|size|-|
|data|[length: size]|
|flags|-|


#### NamedBufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferSubData(System.UInt32,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|data|[length: size]|


#### NamedBufferSubData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedBufferSubData``1(System.UInt32,System.IntPtr,System.IntPtr,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|data|[length: size]|


#### NamedCopyBufferSubData
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedCopyBufferSubData(System.UInt32,System.UInt32,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|readBuffer|-|
|writeBuffer|-|
|readOffset|-|
|writeOffset|-|
|size|-|


#### NamedFramebufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferParameterName,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|pname|-|
|param|-|


#### NamedFramebufferRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferRenderbuffer(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.RenderbufferTarget,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|renderbuffertarget|-|
|renderbuffer|-|


#### NamedFramebufferTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTexture(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|texture|-|
|level|-|


#### NamedFramebufferTexture1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTexture1D(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### NamedFramebufferTexture2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTexture2D(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|


#### NamedFramebufferTexture3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTexture3D(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|zoffset|-|


#### NamedFramebufferTextureFace
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTextureFace(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.TextureTarget)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|texture|-|
|level|-|
|face|-|


#### NamedFramebufferTextureLayer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedFramebufferTextureLayer(System.UInt32,OpenTK.Graphics.OpenGL.FramebufferAttachment,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer|-|
|attachment|-|
|texture|-|
|level|-|
|layer|-|


#### NamedProgramLocalParameter4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramLocalParameter4(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|@params|[length: 4]|


#### NamedProgramLocalParameterI4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramLocalParameterI4(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|@params|[length: 4]|


#### NamedProgramLocalParameters4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramLocalParameters4(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Int32,System.Single*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### NamedProgramLocalParametersI4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramLocalParametersI4(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.Int32,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### NamedProgramString
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramString(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|format|-|
|len|-|
|@string|[length: len]|


#### NamedProgramString``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedProgramString``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|target|-|
|format|-|
|len|-|
|@string|[length: len]|


#### NamedRenderbufferStorage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedRenderbufferStorage(System.UInt32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer|-|
|internalformat|-|
|width|-|
|height|-|


#### NamedRenderbufferStorageMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedRenderbufferStorageMultisample(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer|-|
|samples|-|
|internalformat|-|
|width|-|
|height|-|


#### NamedRenderbufferStorageMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NamedRenderbufferStorageMultisampleCoverage(System.UInt32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer|-|
|coverageSamples|-|
|colorSamples|-|
|internalformat|-|
|width|-|
|height|-|


#### NormalPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NormalPointer(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_array]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |
|pointer|[length: type,stride,count] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### NormalPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.NormalPointer``1(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,System.Int32,``0@)
```
[requires: EXT_vertex_array]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |
|pointer|[length: type,stride,count] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### PixelTransformParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PixelTransformParameter(OpenTK.Graphics.OpenGL.ExtPixelTransform,OpenTK.Graphics.OpenGL.ExtPixelTransform,System.Int32*)
```
[requires: EXT_pixel_transform]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: 1]|


#### PointParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PointParameter(OpenTK.Graphics.OpenGL.ExtPointParameters,System.Single*)
```
[requires: EXT_point_parameters]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### PolygonOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PolygonOffset(System.Single,System.Single)
```
[requires: EXT_polygon_offset]
 Set the scale and units used to calculate depth values

|Parameter Name|Remarks|
|--------------|-------|
|factor| 
            Specifies a scale factor that is used to create a variable depth offset for each polygon. The initial value is 0.
            |
|bias| 
            Is multiplied by an implementation-specific value to create a constant depth offset. The initial value is 0.
            |


#### PopGroupMarker
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PopGroupMarker
```
[requires: EXT_debug_marker]

#### PrioritizeTextures
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PrioritizeTextures(System.Int32,System.UInt32*,System.Single*)
```
[requires: EXT_texture_object]
 Set texture residence priority

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of textures to be prioritized.
            |
|textures|[length: n] 
            Specifies an array containing the names of the textures to be prioritized.
            |
|priorities|[length: n] 
            Specifies an array containing the texture priorities. A priority given in an element of priorities applies to the texture named by the corresponding element of textures.
            |


#### ProgramEnvParameters4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramEnvParameters4(OpenTK.Graphics.OpenGL.ExtGpuProgramParameters,System.UInt32,System.Int32,System.Single*)
```
[requires: EXT_gpu_program_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### ProgramLocalParameters4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramLocalParameters4(OpenTK.Graphics.OpenGL.ExtGpuProgramParameters,System.UInt32,System.Int32,System.Single*)
```
[requires: EXT_gpu_program_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### ProgramParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramParameter(System.UInt32,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.Int32)
```
[requires: EXT_geometry_shader4|EXT_separate_shader_objects]
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
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniform1(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]
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
|value|[length: count] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniform2(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]
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
|value|[length: count*2] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniform3(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]
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
|value|[length: count*3] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniform4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniform4(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]
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
|value|[length: count*4] 
            For the vector and matrix commands, specifies a pointer to an array of count values that will be used to update the specified uniform variable.
            |


#### ProgramUniformMatrix2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### ProgramUniformMatrix2x3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix2x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### ProgramUniformMatrix2x4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix2x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### ProgramUniformMatrix3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### ProgramUniformMatrix3x2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix3x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### ProgramUniformMatrix3x4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix3x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### ProgramUniformMatrix4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### ProgramUniformMatrix4x2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix4x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### ProgramUniformMatrix4x3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProgramUniformMatrix4x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_direct_state_access|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### ProvokingVertex
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ProvokingVertex(OpenTK.Graphics.OpenGL.ExtProvokingVertex)
```
[requires: EXT_provoking_vertex]
 Specifiy the vertex to be used as the source of data for flat shaded varyings

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies the vertex to be used as the source of data for flat shaded varyings.
            |


#### PushClientAttribDefault
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PushClientAttribDefault(OpenTK.Graphics.OpenGL.ClientAttribMask)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|mask|-|


#### PushGroupMarker
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.PushGroupMarker(System.Int32,System.String)
```
[requires: EXT_debug_marker]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|marker|-|


#### RenderbufferStorage
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.RenderbufferStorage(OpenTK.Graphics.OpenGL.RenderbufferTarget,OpenTK.Graphics.OpenGL.RenderbufferStorage,System.Int32,System.Int32)
```
[requires: EXT_framebuffer_object]
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
OpenTK.Graphics.OpenGL.GL.Ext.RenderbufferStorageMultisample(OpenTK.Graphics.OpenGL.RenderbufferTarget,System.Int32,OpenTK.Graphics.OpenGL.RenderbufferStorage,System.Int32,System.Int32)
```
[requires: EXT_framebuffer_multisample]
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
OpenTK.Graphics.OpenGL.GL.Ext.ResetHistogram(OpenTK.Graphics.OpenGL.HistogramTargetExt)
```
[requires: EXT_histogram]
 Reset histogram table entries to zero

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Histogram.
            |


#### ResetMinmax
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ResetMinmax(OpenTK.Graphics.OpenGL.MinmaxTargetExt)
```
[requires: EXT_histogram]
 Reset minmax table entries to initial values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be Minmax.
            |


#### SampleMask
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SampleMask(System.Single,System.Boolean)
```
[requires: EXT_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|invert|-|


#### SamplePattern
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SamplePattern(OpenTK.Graphics.OpenGL.ExtMultisample)
```
[requires: EXT_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|pattern|-|


#### SecondaryColor3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SecondaryColor3(System.UInt16*)
```
[requires: EXT_secondary_color]
 Set the current secondary color

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3] 
            Specify new red, green, and blue values for the current secondary color.
            |


#### SecondaryColorPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SecondaryColorPointer(System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_secondary_color]
 Define an array of secondary colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### SecondaryColorPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SecondaryColorPointer``1(System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,``0@)
```
[requires: EXT_secondary_color]
 Define an array of secondary colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### SeparableFilter2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SeparableFilter2D(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,System.IntPtr)
```
Define a separable two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Must be GL_SEPARABLE_2D.
            |
|internalformat|
            The internal format of the convolution filter kernel. The allowable values are GL_ALPHA, GL_ALPHA4, GL_ALPHA8, GL_ALPHA12, GL_ALPHA16, GL_LUMINANCE, GL_LUMINANCE4, GL_LUMINANCE8, GL_LUMINANCE12, GL_LUMINANCE16, GL_LUMINANCE_ALPHA, GL_LUMINANCE4_ALPHA4, GL_LUMINANCE6_ALPHA2, GL_LUMINANCE8_ALPHA8, GL_LUMINANCE12_ALPHA4, GL_LUMINANCE12_ALPHA12, GL_LUMINANCE16_ALPHA16, GL_INTENSITY, GL_INTENSITY4, GL_INTENSITY8, GL_INTENSITY12, GL_INTENSITY16, GL_R3_G3_B2, GL_RGB, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, or GL_RGBA16.
            |
|width|
            The number of elements in the pixel array referenced by row. (This is the width of the separable filter kernel.)
            |
|height|
            The number of elements in the pixel array referenced by column. (This is the height of the separable filter kernel.)
            |
|format|
            The format of the pixel data in row and column. The allowable values are GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR, GL_RGBA, GL_BGRA, GL_INTENSITY, GL_LUMINANCE, and GL_LUMINANCE_ALPHA.
            |
|type|
            The type of the pixel data in row and column. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to a one-dimensional array of pixel data that is processed to build the row filter kernel.
            |
|column|
            Pointer to a one-dimensional array of pixel data that is processed to build the column filter kernel.
            |


#### SeparableFilter2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SeparableFilter2D``1(OpenTK.Graphics.OpenGL.ExtConvolution,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr,``0@)
```
Define a separable two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Must be GL_SEPARABLE_2D.
            |
|internalformat|
            The internal format of the convolution filter kernel. The allowable values are GL_ALPHA, GL_ALPHA4, GL_ALPHA8, GL_ALPHA12, GL_ALPHA16, GL_LUMINANCE, GL_LUMINANCE4, GL_LUMINANCE8, GL_LUMINANCE12, GL_LUMINANCE16, GL_LUMINANCE_ALPHA, GL_LUMINANCE4_ALPHA4, GL_LUMINANCE6_ALPHA2, GL_LUMINANCE8_ALPHA8, GL_LUMINANCE12_ALPHA4, GL_LUMINANCE12_ALPHA12, GL_LUMINANCE16_ALPHA16, GL_INTENSITY, GL_INTENSITY4, GL_INTENSITY8, GL_INTENSITY12, GL_INTENSITY16, GL_R3_G3_B2, GL_RGB, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, or GL_RGBA16.
            |
|width|
            The number of elements in the pixel array referenced by row. (This is the width of the separable filter kernel.)
            |
|height|
            The number of elements in the pixel array referenced by column. (This is the height of the separable filter kernel.)
            |
|format|
            The format of the pixel data in row and column. The allowable values are GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR, GL_RGBA, GL_BGRA, GL_INTENSITY, GL_LUMINANCE, and GL_LUMINANCE_ALPHA.
            |
|type|
            The type of the pixel data in row and column. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to a one-dimensional array of pixel data that is processed to build the row filter kernel.
            |
|column|
            Pointer to a one-dimensional array of pixel data that is processed to build the column filter kernel.
            |


#### SeparableFilter2D``2
```csharp
])
```
Define a separable two-dimensional convolution filter

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Must be GL_SEPARABLE_2D.
            |
|internalformat|
            The internal format of the convolution filter kernel. The allowable values are GL_ALPHA, GL_ALPHA4, GL_ALPHA8, GL_ALPHA12, GL_ALPHA16, GL_LUMINANCE, GL_LUMINANCE4, GL_LUMINANCE8, GL_LUMINANCE12, GL_LUMINANCE16, GL_LUMINANCE_ALPHA, GL_LUMINANCE4_ALPHA4, GL_LUMINANCE6_ALPHA2, GL_LUMINANCE8_ALPHA8, GL_LUMINANCE12_ALPHA4, GL_LUMINANCE12_ALPHA12, GL_LUMINANCE16_ALPHA16, GL_INTENSITY, GL_INTENSITY4, GL_INTENSITY8, GL_INTENSITY12, GL_INTENSITY16, GL_R3_G3_B2, GL_RGB, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, or GL_RGBA16.
            |
|width|
            The number of elements in the pixel array referenced by row. (This is the width of the separable filter kernel.)
            |
|height|
            The number of elements in the pixel array referenced by column. (This is the height of the separable filter kernel.)
            |
|format|
            The format of the pixel data in row and column. The allowable values are GL_RED, GL_GREEN, GL_BLUE, GL_ALPHA, GL_RGB, GL_BGR, GL_RGBA, GL_BGRA, GL_INTENSITY, GL_LUMINANCE, and GL_LUMINANCE_ALPHA.
            |
|type|
            The type of the pixel data in row and column. Symbolic constants GL_UNSIGNED_BYTE, GL_BYTE, GL_BITMAP, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV are accepted.
            |
|row|
            Pointer to a one-dimensional array of pixel data that is processed to build the row filter kernel.
            |
|column|
            Pointer to a one-dimensional array of pixel data that is processed to build the column filter kernel.
            |


#### SetInvariant
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SetInvariant(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.IntPtr)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|addr|[length: id,type]|


#### SetInvariant``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SetInvariant``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,``0@)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|addr|[length: id,type]|


#### SetLocalConstant
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SetLocalConstant(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.IntPtr)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|addr|[length: id,type]|


#### SetLocalConstant``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.SetLocalConstant``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,``0@)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|addr|[length: id,type]|


#### ShaderOp1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ShaderOp1(OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|res|-|
|arg1|-|


#### ShaderOp2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ShaderOp2(OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|res|-|
|arg1|-|
|arg2|-|


#### ShaderOp3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ShaderOp3(OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|res|-|
|arg1|-|
|arg2|-|
|arg3|-|


#### StencilClearTag
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.StencilClearTag(System.Int32,System.UInt32)
```
[requires: EXT_stencil_clear_tag]

|Parameter Name|Remarks|
|--------------|-------|
|stencilTagBits|-|
|stencilClearTag|-|


#### Swizzle
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Swizzle(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|res|-|
|@in|-|
|outX|-|
|outY|-|
|outZ|-|
|outW|-|


#### Tangent3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Tangent3(System.Int16*)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### TangentPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TangentPointer(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### TangentPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TangentPointer``1(OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,``0@)
```
[requires: EXT_coordinate_frame]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### TexBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexBuffer(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.ExtTextureBufferObject,System.UInt32)
```
[requires: EXT_texture_buffer_object]
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


#### TexCoordPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexCoordPointer(System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_array]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each texture coordinate. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive texture coordinate sets. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexCoordPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexCoordPointer``1(System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,System.Int32,``0@)
```
[requires: EXT_vertex_array]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each texture coordinate. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive texture coordinate sets. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexImage3D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_texture3D]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexImage3D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_texture3D]
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


#### TexParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexParameterI(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.TextureParameterName,System.UInt32*)
```
[requires: EXT_texture_integer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage1D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_subtexture]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage1D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_subtexture]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage2D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_subtexture]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage2D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_subtexture]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage3D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_texture3D]
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
OpenTK.Graphics.OpenGL.GL.Ext.TexSubImage3D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_texture3D]
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


#### TextureBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureBuffer(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|internalformat|-|
|buffer|-|


#### TextureBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureBufferRange(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|internalformat|-|
|buffer|-|
|offset|-|
|size|-|


#### TextureImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### TextureImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage1D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### TextureImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### TextureImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage2D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### TextureImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage3D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### TextureImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureImage3D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### TextureLight
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureLight(OpenTK.Graphics.OpenGL.ExtLightTexture)
```
[requires: EXT_light_texture]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|


#### TextureMaterial
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureMaterial(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.MaterialParameter)
```
[requires: EXT_light_texture]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|mode|-|


#### TextureNormal
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureNormal(OpenTK.Graphics.OpenGL.ExtTexturePerturbNormal)
```
[requires: EXT_texture_perturb_normal]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### TexturePageCommitment
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TexturePageCommitment(System.UInt32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|resident|-|


#### TextureParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureParameter(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.TextureParameterName,System.Int32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TextureParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureParameterI(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.TextureParameterName,System.UInt32*)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TextureRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureRenderbuffer(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|renderbuffer|-|


#### TextureStorage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureStorage1D(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|


#### TextureStorage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureStorage2D(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|


#### TextureStorage2DMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureStorage2DMultisample(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Boolean)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|samples|-|
|internalformat|-|
|width|-|
|height|-|
|fixedsamplelocations|-|


#### TextureStorage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureStorage3D(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|


#### TextureStorage3DMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureStorage3DMultisample(System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|samples|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|fixedsamplelocations|-|


#### TextureSubImage1D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage1D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### TextureSubImage1D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage1D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|width|-|
|format|-|
|type|-|
|pixels|[length: format,type,width]|


#### TextureSubImage2D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage2D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### TextureSubImage2D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage2D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|width|-|
|height|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height]|


#### TextureSubImage3D
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage3D(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### TextureSubImage3D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TextureSubImage3D``1(System.UInt32,OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth]|


#### TransformFeedbackVaryings
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.TransformFeedbackVaryings(System.UInt32,System.Int32,System.String[],OpenTK.Graphics.OpenGL.ExtTransformFeedback)
```
[requires: EXT_transform_feedback]
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
OpenTK.Graphics.OpenGL.GL.Ext.Uniform1(System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_gpu_shader4]
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
OpenTK.Graphics.OpenGL.GL.Ext.Uniform2(System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_gpu_shader4]
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
OpenTK.Graphics.OpenGL.GL.Ext.Uniform3(System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_gpu_shader4]
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
OpenTK.Graphics.OpenGL.GL.Ext.Uniform4(System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_gpu_shader4]
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


#### UniformBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.UniformBuffer(System.UInt32,System.Int32,System.UInt32)
```
[requires: EXT_bindable_uniform]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|buffer|-|


#### UnlockArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.UnlockArrays
```
[requires: EXT_compiled_vertex_array]

#### UnmapNamedBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.UnmapNamedBuffer(System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### UseProgramStages
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.UseProgramStages(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_separate_shader_objects]
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


#### UseShaderProgram
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.UseShaderProgram(OpenTK.Graphics.OpenGL.ExtSeparateShaderObjects,System.UInt32)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|program|-|


#### ValidateProgramPipeline
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.ValidateProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Validate a program pipeline object against current GL state

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object to validate.
            |


#### Variant
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.Variant(System.UInt32,System.UInt16*)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|addr|[length: id]|


#### VariantPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VariantPointer(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32,System.IntPtr)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|stride|-|
|addr|[length: id,type,stride]|


#### VariantPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VariantPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,System.UInt32,``0@)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|stride|-|
|addr|[length: id,type,stride]|


#### VertexArrayBindVertexBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayBindVertexBuffer(System.UInt32,System.UInt32,System.UInt32,System.IntPtr,System.Int32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|bindingindex|-|
|buffer|-|
|offset|-|
|stride|-|


#### VertexArrayColorOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayColorOffset(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayEdgeFlagOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayEdgeFlagOffset(System.UInt32,System.UInt32,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|stride|-|
|offset|-|


#### VertexArrayFogCoordOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayFogCoordOffset(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.FogPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayIndexOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayIndexOffset(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.IndexPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayMultiTexCoordOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayMultiTexCoordOffset(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|texunit|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayNormalOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayNormalOffset(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NormalPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArraySecondaryColorOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArraySecondaryColorOffset(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ColorPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayTexCoordOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayTexCoordOffset(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.TexCoordPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayVertexAttribBinding
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribBinding(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|attribindex|-|
|bindingindex|-|


#### VertexArrayVertexAttribDivisor
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribDivisor(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|index|-|
|divisor|-|


#### VertexArrayVertexAttribFormat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribFormat(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Boolean,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|attribindex|-|
|size|-|
|type|-|
|normalized|-|
|relativeoffset|-|


#### VertexArrayVertexAttribIFormat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribIFormat(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|attribindex|-|
|size|-|
|type|-|
|relativeoffset|-|


#### VertexArrayVertexAttribIOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribIOffset(System.UInt32,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|index|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayVertexAttribLFormat
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribLFormat(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtDirectStateAccess,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|attribindex|-|
|size|-|
|type|-|
|relativeoffset|-|


#### VertexArrayVertexAttribLOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribLOffset(System.UInt32,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtVertexAttrib64bit,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|index|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexArrayVertexAttribOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexAttribOffset(System.UInt32,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribPointerType,System.Boolean,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|index|-|
|size|-|
|type|-|
|normalized|-|
|stride|-|
|offset|-|


#### VertexArrayVertexBindingDivisor
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexBindingDivisor(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|bindingindex|-|
|divisor|-|


#### VertexArrayVertexOffset
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexArrayVertexOffset(System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.Int32,System.IntPtr)
```
[requires: EXT_direct_state_access]

|Parameter Name|Remarks|
|--------------|-------|
|vaobj|-|
|buffer|-|
|size|-|
|type|-|
|stride|-|
|offset|-|


#### VertexAttribI1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribI1(System.UInt32,System.UInt32*)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttribI2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribI2(System.UInt32,System.UInt32*)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttribI3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribI3(System.UInt32,System.UInt32*)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttribI4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribI4(System.UInt32,System.UInt16*)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribIPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribIPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvVertexProgram4,System.Int32,System.IntPtr)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribIPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribIPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvVertexProgram4,System.Int32,``0@)
```
[requires: NV_vertex_program4]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### VertexAttribL1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribL1(System.UInt32,System.Double*)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttribL2
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribL2(System.UInt32,System.Double*)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttribL3
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribL3(System.UInt32,System.Double*)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttribL4
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribL4(System.UInt32,System.Double*)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribLPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribLPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtVertexAttrib64bit,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size]|


#### VertexAttribLPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexAttribLPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.ExtVertexAttrib64bit,System.Int32,``0@)
```
[requires: EXT_vertex_attrib_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size]|


#### VertexPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexPointer(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.Int32,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_array]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive vertices. If stride is 0, the vertices are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### VertexPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexPointer``1(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.Int32,System.Int32,``0@)
```
[requires: EXT_vertex_array]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive vertices. If stride is 0, the vertices are understood to be tightly packed in the array. The initial value is 0.
            |
|count| 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride,count] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### VertexWeight
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexWeight(System.Single*)
```
[requires: EXT_vertex_weighting]

|Parameter Name|Remarks|
|--------------|-------|
|weight|[length: 1]|


#### VertexWeightPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexWeightPointer(System.Int32,OpenTK.Graphics.OpenGL.ExtVertexWeighting,System.Int32,System.IntPtr)
```
[requires: EXT_vertex_weighting]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### VertexWeightPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.VertexWeightPointer``1(System.Int32,OpenTK.Graphics.OpenGL.ExtVertexWeighting,System.Int32,``0@)
```
[requires: EXT_vertex_weighting]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### WriteMask
```csharp
OpenTK.Graphics.OpenGL.GL.Ext.WriteMask(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader,OpenTK.Graphics.OpenGL.ExtVertexShader)
```
[requires: EXT_vertex_shader]

|Parameter Name|Remarks|
|--------------|-------|
|res|-|
|@in|-|
|outX|-|
|outY|-|
|outZ|-|
|outW|-|





