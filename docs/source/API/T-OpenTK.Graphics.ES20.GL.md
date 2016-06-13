---
title: GL
---

# GL
_namespace: [OpenTK.Graphics.ES20](N-OpenTK.Graphics.ES20.html)_

Provides access to OpenGL ES 2.0 methods.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.ES20.GL.#ctor
```
Constructs a new instance.

#### ActiveTexture
```csharp
OpenTK.Graphics.ES20.GL.ActiveTexture(OpenTK.Graphics.ES20.TextureUnit)
```
[requires: v2.0 or ES_VERSION_2_0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least 8. texture must be one of Texture, where i ranges from 0 to (MaxCombinedTextureImageUnits - 1). The initial value is Texture0.
            |


#### AttachShader
```csharp
OpenTK.Graphics.ES20.GL.AttachShader(System.UInt32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attach a shader object to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to which a shader object will be attached.
            |
|shader| 
            Specifies the shader object that is to be attached.
            |


#### BindAttribLocation
```csharp
OpenTK.Graphics.ES20.GL.BindAttribLocation(System.UInt32,System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Associate a generic vertex attribute index with a named attribute variable

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
OpenTK.Graphics.ES20.GL.BindBuffer(OpenTK.Graphics.ES20.BufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the buffer object is bound. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
            |
|buffer| 
            Specifies the name of a buffer object.
            |


#### BindFramebuffer
```csharp
OpenTK.Graphics.ES20.GL.BindFramebuffer(OpenTK.Graphics.ES20.FramebufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the framebuffer object is bound. The symbolic constant must be Framebuffer.
            |
|framebuffer| 
            Specifies the name of a framebuffer object.
            |


#### BindRenderbuffer
```csharp
OpenTK.Graphics.ES20.GL.BindRenderbuffer(OpenTK.Graphics.ES20.RenderbufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the renderbuffer object is bound. The symbolic constant must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the name of a renderbuffer object.
            |


#### BindTexture
```csharp
OpenTK.Graphics.ES20.GL.BindTexture(OpenTK.Graphics.ES20.TextureTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the active texture unit to which the texture is bound. Must be either Texture2D or TextureCubeMap.
            |
|texture| 
            Specifies the name of a texture.
            |


#### BlendColor
```csharp
OpenTK.Graphics.ES20.GL.BlendColor(System.Single,System.Single,System.Single,System.Single)
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
OpenTK.Graphics.ES20.GL.BlendEquation(OpenTK.Graphics.ES20.BlendEquationMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.ES20.GL.BlendEquationSeparate(OpenTK.Graphics.ES20.BlendEquationMode,OpenTK.Graphics.ES20.BlendEquationMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.ES20.GL.BlendFunc(OpenTK.Graphics.ES20.BlendingFactorSrc,OpenTK.Graphics.ES20.BlendingFactorDest)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|sfactor| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
|dfactor| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.ES20.GL.BlendFuncSeparate(OpenTK.Graphics.ES20.BlendingFactorSrc,OpenTK.Graphics.ES20.BlendingFactorDest,OpenTK.Graphics.ES20.BlendingFactorSrc,OpenTK.Graphics.ES20.BlendingFactorDest)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|sfactorRGB| 
            Specifies how the red, green, and blue blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
|dfactorRGB| 
            Specifies how the red, green, and blue destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |
|sfactorAlpha| 
            Specified how the alpha source blending factor is computed.  The same symbolic constants are accepted as for srcRGB. The initial value is One.
            |
|dfactorAlpha| 
            Specified how the alpha destination blending factor is computed.  The same symbolic constants are accepted as for dstRGB. The initial value is Zero.
            |


#### BufferData
```csharp
OpenTK.Graphics.ES20.GL.BufferData(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr,OpenTK.Graphics.ES20.BufferUsageHint)
```
[requires: v2.0 or ES_VERSION_2_0]
 Create and initialize a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|usage| 
            Specifies the expected usage pattern of the data store. The symbolic constant must be StreamDraw, StaticDraw, or DynamicDraw.
            |


#### BufferData``1
```csharp
OpenTK.Graphics.ES20.GL.BufferData``1(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,``0@,OpenTK.Graphics.ES20.BufferUsageHint)
```
[requires: v2.0 or ES_VERSION_2_0]
 Create and initialize a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
            |
|size| 
            Specifies the size in bytes of the buffer object's new data store.
            |
|data|[length: size] 
            Specifies a pointer to data that will be copied into the data store for initialization, or Null if no data is to be copied.
            |
|usage| 
            Specifies the expected usage pattern of the data store. The symbolic constant must be StreamDraw, StaticDraw, or DynamicDraw.
            |


#### BufferSubData
```csharp
OpenTK.Graphics.ES20.GL.BufferSubData(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Update a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
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
OpenTK.Graphics.ES20.GL.BufferSubData``1(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Update a subset of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
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
OpenTK.Graphics.ES20.GL.CheckFramebufferStatus(OpenTK.Graphics.ES20.FramebufferTarget)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the framebuffer completeness status of a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target framebuffer object. The symbolic constant must be Framebuffer.
            |


#### Clear
```csharp
OpenTK.Graphics.ES20.GL.Clear(OpenTK.Graphics.ES20.ClearBufferMask)
```
[requires: v2.0 or ES_VERSION_2_0]
 Clear buffers to preset values

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Bitwise OR of masks that indicate the buffers to be cleared. The three masks are ColorBufferBit, DepthBufferBit, and StencilBufferBit.
            |


#### ClearColor
```csharp
OpenTK.Graphics.ES20.GL.ClearColor(System.Single,System.Single,System.Single,System.Single)
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
OpenTK.Graphics.ES20.GL.ClearDepth(System.Single)
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
OpenTK.Graphics.ES20.GL.ClearStencil(System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the clear value for the stencil buffer

|Parameter Name|Remarks|
|--------------|-------|
|s| 
            Specifies the index used when the stencil buffer is cleared. The initial value is 0.
            |


#### ColorMask
```csharp
OpenTK.Graphics.ES20.GL.ColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable and disable writing of frame buffer color components

|Parameter Name|Remarks|
|--------------|-------|
|red| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|green| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|blue| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|alpha| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |


#### CompileShader
```csharp
OpenTK.Graphics.ES20.GL.CompileShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Compile a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be compiled.
            |


#### CompressedTexImage2D
```csharp
OpenTK.Graphics.ES20.GL.CompressedTexImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexImage2D``1
```csharp
OpenTK.Graphics.ES20.GL.CompressedTexImage2D``1(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.CompressedInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the format of the compressed image data stored at address data.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |
|imageSize| 
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|[length: imageSize] 
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage2D
```csharp
OpenTK.Graphics.ES20.GL.CompressedTexSubImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
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
OpenTK.Graphics.ES20.GL.CompressedTexSubImage2D``1(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
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


#### CopyTexImage2D
```csharp
OpenTK.Graphics.ES20.GL.CopyTexImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.TextureCopyComponentCount,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Copy pixels into a 2D texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the internal format of the texture. Must be one of the following symbolic constants: Alpha, Luminance, LuminanceAlpha, Rgb, or Rgba.
            |
|x| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|y| 
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image. All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |


#### CopyTexSubImage2D
```csharp
OpenTK.Graphics.ES20.GL.CopyTexSubImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Copy a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
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


#### CreateProgram
```csharp
OpenTK.Graphics.ES20.GL.CreateProgram
```
[requires: v2.0 or ES_VERSION_2_0]
 Create a program object

#### CreateShader
```csharp
OpenTK.Graphics.ES20.GL.CreateShader(OpenTK.Graphics.ES20.ShaderType)
```
[requires: v2.0 or ES_VERSION_2_0]
 Create a shader object

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the type of shader to be created. Must be either VertexShader or FragmentShader.
            |


#### CullFace
```csharp
OpenTK.Graphics.ES20.GL.CullFace(OpenTK.Graphics.ES20.CullFaceMode)
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
OpenTK.Graphics.ES20.GL.DebugMessageCallback(OpenTK.Graphics.ES20.DebugProc,System.IntPtr)
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
OpenTK.Graphics.ES20.GL.DebugMessageCallback``1(OpenTK.Graphics.ES20.DebugProc,``0@)
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
OpenTK.Graphics.ES20.GL.DebugMessageControl(OpenTK.Graphics.ES20.DebugSourceControl,OpenTK.Graphics.ES20.DebugTypeControl,OpenTK.Graphics.ES20.DebugSeverityControl,System.Int32,System.UInt32*,System.Boolean)
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
OpenTK.Graphics.ES20.GL.DebugMessageInsert(OpenTK.Graphics.ES20.DebugSourceExternal,OpenTK.Graphics.ES20.DebugType,System.UInt32,OpenTK.Graphics.ES20.DebugSeverity,System.Int32,System.String)
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
OpenTK.Graphics.ES20.GL.DeleteBuffer(System.UInt32)
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
OpenTK.Graphics.ES20.GL.DeleteBuffers(System.Int32,System.UInt32*)
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
OpenTK.Graphics.ES20.GL.DeleteFramebuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: n] 
            Specifies an array of framebuffer objects to be deleted.
            |


#### DeleteFramebuffers
```csharp
OpenTK.Graphics.ES20.GL.DeleteFramebuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer objects to be deleted.
            |
|framebuffers|[length: n] 
            Specifies an array of framebuffer objects to be deleted.
            |


#### DeleteProgram
```csharp
OpenTK.Graphics.ES20.GL.DeleteProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be deleted.
            |


#### DeleteRenderbuffer
```csharp
OpenTK.Graphics.ES20.GL.DeleteRenderbuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: n] 
            Specifies an array of renderbuffer objects to be deleted.
            |


#### DeleteRenderbuffers
```csharp
OpenTK.Graphics.ES20.GL.DeleteRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete named renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer objects to be deleted.
            |
|renderbuffers|[length: n] 
            Specifies an array of renderbuffer objects to be deleted.
            |


#### DeleteShader
```csharp
OpenTK.Graphics.ES20.GL.DeleteShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Delete a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies the shader object to be deleted.
            |


#### DeleteTexture
```csharp
OpenTK.Graphics.ES20.GL.DeleteTexture(System.UInt32)
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
OpenTK.Graphics.ES20.GL.DeleteTextures(System.Int32,System.UInt32*)
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


#### DepthFunc
```csharp
OpenTK.Graphics.ES20.GL.DepthFunc(OpenTK.Graphics.ES20.DepthFunction)
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
OpenTK.Graphics.ES20.GL.DepthMask(System.Boolean)
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
OpenTK.Graphics.ES20.GL.DepthRange(System.Single,System.Single)
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
OpenTK.Graphics.ES20.GL.DetachShader(System.UInt32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Detach a shader object from a program object

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
OpenTK.Graphics.ES20.GL.Disable(OpenTK.Graphics.ES20.EnableCap)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|cap|-|


#### DisableVertexAttribArray
```csharp
OpenTK.Graphics.ES20.GL.DisableVertexAttribArray(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### DrawArrays
```csharp
OpenTK.Graphics.ES20.GL.DrawArrays(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, and Triangles are accepted.
            |
|first| 
            Specifies the starting index in the enabled arrays.
            |
|count| 
            Specifies the number of indices to be rendered.
            |


#### DrawElements
```csharp
OpenTK.Graphics.ES20.GL.DrawElements(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, and Triangles are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be UnsignedByte or UnsignedShort.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |


#### DrawElements``1
```csharp
OpenTK.Graphics.ES20.GL.DrawElements``1(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, and Triangles are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be UnsignedByte or UnsignedShort.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |


#### Enable
```csharp
OpenTK.Graphics.ES20.GL.Enable(OpenTK.Graphics.ES20.EnableCap)
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
OpenTK.Graphics.ES20.GL.EnableVertexAttribArray(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Enable or disable a generic vertex attribute array

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be enabled or disabled.
            |


#### Finish
```csharp
OpenTK.Graphics.ES20.GL.Finish
```
[requires: v2.0 or ES_VERSION_2_0]
 Block until all GL execution is complete

#### Flush
```csharp
OpenTK.Graphics.ES20.GL.Flush
```
[requires: v2.0 or ES_VERSION_2_0]
 Force execution of GL commands in finite time

#### FramebufferRenderbuffer
```csharp
OpenTK.Graphics.ES20.GL.FramebufferRenderbuffer(OpenTK.Graphics.ES20.FramebufferTarget,OpenTK.Graphics.ES20.FramebufferSlot,OpenTK.Graphics.ES20.RenderbufferTarget,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attach a renderbuffer object to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. The symbolic constant must be Framebuffer.
            |
|attachment| 
            Specifies the attachment point to which renderbuffer should be attached. Must be one of the following symbolic constants: ColorAttachment0, DepthAttachment, or StencilAttachment.
            |
|renderbuffertarget| 
            Specifies the renderbuffer target. The symbolic constant must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the renderbuffer object that is to be attached.
            |


#### FramebufferTexture2D
```csharp
OpenTK.Graphics.ES20.GL.FramebufferTexture2D(OpenTK.Graphics.ES20.FramebufferTarget,OpenTK.Graphics.ES20.FramebufferSlot,OpenTK.Graphics.ES20.TextureTarget,System.UInt32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Attach a texture image to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. The symbolic constant must be Framebuffer.
            |
|attachment| 
            Specifies the attachment point to which an image from texture should be attached. Must be one of the following symbolic constants: ColorAttachment0, DepthAttachment, or StencilAttachment.
            |
|textarget| 
            Specifies the texture target. Must be one of the following symbolic constants: Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|texture| 
            Specifies the texture object whose image is to be attached.
            |
|level| 
            Specifies the mipmap level of the texture image to be attached, which must be 0.
            |


#### FrontFace
```csharp
OpenTK.Graphics.ES20.GL.FrontFace(OpenTK.Graphics.ES20.FrontFaceDirection)
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
OpenTK.Graphics.ES20.GL.GenBuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate buffer object names

#### GenBuffers
```csharp
OpenTK.Graphics.ES20.GL.GenBuffers(System.Int32,System.UInt32*)
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
OpenTK.Graphics.ES20.GL.GenerateMipmap(OpenTK.Graphics.ES20.TextureTarget)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate a complete set of mipmaps for a texture object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture target of the active texture unit to which the texture object is bound whose mipmaps will be generated.  Must be one of the following symbolic constants: Texture2D or TextureCubeMap.
            |


#### GenFramebuffer
```csharp
OpenTK.Graphics.ES20.GL.GenFramebuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate framebuffer object names

#### GenFramebuffers
```csharp
OpenTK.Graphics.ES20.GL.GenFramebuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate framebuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer object names to be generated.
            |
|framebuffers|[length: n] 
            Specifies an array in which the generated framebuffer object names are stored.
            |


#### GenRenderbuffer
```csharp
OpenTK.Graphics.ES20.GL.GenRenderbuffer
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate renderbuffer object names

#### GenRenderbuffers
```csharp
OpenTK.Graphics.ES20.GL.GenRenderbuffers(System.Int32,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate renderbuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer object names to be generated.
            |
|renderbuffers|[length: n] 
            Specifies an array in which the generated renderbuffer object names are stored.
            |


#### GenTexture
```csharp
OpenTK.Graphics.ES20.GL.GenTexture
```
[requires: v2.0 or ES_VERSION_2_0]
 Generate texture names

#### GenTextures
```csharp
OpenTK.Graphics.ES20.GL.GenTextures(System.Int32,System.UInt32*)
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


#### GetActiveAttrib
```csharp
OpenTK.Graphics.ES20.GL.GetActiveAttrib(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.ES20.All*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return information about an active attribute variable

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
OpenTK.Graphics.ES20.GL.GetActiveUniform(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.ES20.All*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return information about an active uniform variable

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


#### GetAttachedShaders
```csharp
OpenTK.Graphics.ES20.GL.GetAttachedShaders(System.UInt32,System.Int32,System.Int32*,System.UInt32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the handles of the shader objects attached to a program object

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
OpenTK.Graphics.ES20.GL.GetAttribLocation(System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the location of an attribute variable

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
OpenTK.Graphics.ES20.GL.GetBoolean(OpenTK.Graphics.ES20.GetPName,System.Boolean*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetBufferParameter
```csharp
OpenTK.Graphics.ES20.GL.GetBufferParameter(OpenTK.Graphics.ES20.BufferTarget,OpenTK.Graphics.ES20.BufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return parameters of a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
            |
|pname| 
            Specifies the symbolic name of a buffer object parameter. Accepted values are BufferSize or BufferUsage.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.ES20.GL.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.ES20.DebugSourceExternal*,OpenTK.Graphics.ES20.DebugType*,System.UInt32*,OpenTK.Graphics.ES20.DebugSeverity*,System.Int32*,System.Text.StringBuilder)
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
OpenTK.Graphics.ES20.GL.GetError
```
[requires: v2.0 or ES_VERSION_2_0]
 Return error information

#### GetFloat
```csharp
OpenTK.Graphics.ES20.GL.GetFloat(OpenTK.Graphics.ES20.GetPName,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetFramebufferAttachmentParameter
```csharp
OpenTK.Graphics.ES20.GL.GetFramebufferAttachmentParameter(OpenTK.Graphics.ES20.FramebufferTarget,OpenTK.Graphics.ES20.FramebufferSlot,OpenTK.Graphics.ES20.FramebufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return attachment parameters of a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target framebuffer object. The symbolic constant must be Framebuffer.
            |
|attachment| 
            Specifies the symbolic name of a framebuffer object attachment point. Accepted values are ColorAttachment0, DepthAttachment, and StencilAttachment.
            |
|pname| 
            Specifies the symbolic name of a framebuffer object attachment parameter. Accepted values are FramebufferAttachmentObjectType, FramebufferAttachmentObjectName, FramebufferAttachmentTextureLevel, and FramebufferAttachmentTextureCubeMapFace.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetInteger
```csharp
OpenTK.Graphics.ES20.GL.GetInteger(OpenTK.Graphics.ES20.GetPName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetObjectLabel
```csharp
OpenTK.Graphics.ES20.GL.GetObjectLabel(OpenTK.Graphics.ES20.ObjectLabelIdentifier,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
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
OpenTK.Graphics.ES20.GL.GetObjectPtrLabel(System.IntPtr,System.Int32,System.Int32*,System.Text.StringBuilder)
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
OpenTK.Graphics.ES20.GL.GetObjectPtrLabel``1(``0@,System.Int32,System.Int32*,System.Text.StringBuilder)
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
OpenTK.Graphics.ES20.GL.GetPointer(OpenTK.Graphics.ES20.GetPointervPName,System.IntPtr)
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
OpenTK.Graphics.ES20.GL.GetPointer``1(OpenTK.Graphics.ES20.GetPointervPName,``0@)
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
OpenTK.Graphics.ES20.GL.GetProgram(System.UInt32,OpenTK.Graphics.ES20.ProgramParameter,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return a parameter from a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the program object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are DeleteStatus, LinkStatus, ValidateStatus, InfoLogLength, AttachedShaders, ActiveAttributes, ActiveAttributeMaxLength, ActiveUniforms, ActiveUniformMaxLength.
            |
|@params|[length: pname] 
            Returns the requested object parameter.
            |


#### GetProgramInfoLog
```csharp
OpenTK.Graphics.ES20.GL.GetProgramInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the information log for a program object

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


#### GetRenderbufferParameter
```csharp
OpenTK.Graphics.ES20.GL.GetRenderbufferParameter(OpenTK.Graphics.ES20.RenderbufferTarget,OpenTK.Graphics.ES20.RenderbufferParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return parameters of a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target renderbuffer object. The symbolic constant must be Renderbuffer.
            |
|pname| 
            Specifies the symbolic name of a renderbuffer object parameter. Accepted values are RenderbufferWidth, RenderbufferHeight, RenderbufferInternalFormat, RenderbufferRedSize, RenderbufferGreenSize, RenderbufferBlueSize, RenderbufferAlphaSize, RenderbufferDepthSize, or RenderbufferStencilSize.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetShader
```csharp
OpenTK.Graphics.ES20.GL.GetShader(System.UInt32,OpenTK.Graphics.ES20.ShaderParameter,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return a parameter from a shader object

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
OpenTK.Graphics.ES20.GL.GetShaderInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the information log for a shader object

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
OpenTK.Graphics.ES20.GL.GetShaderPrecisionFormat(OpenTK.Graphics.ES20.ShaderType,OpenTK.Graphics.ES20.ShaderPrecision,System.Int32*,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the range and precision for different shader numeric formats

|Parameter Name|Remarks|
|--------------|-------|
|shadertype| 
            Specifies the type of shader to query. Must be either VertexShader or FragmentShader.
            |
|precisiontype| 
            Specifies the numeric format to query, corresponding to a shader precision qualifier and variable type. Must be one of LowFloat, MediumFloat, HighFloat, LowInt, MediumInt, or HighInt.
            |
|range|[length: 2] 
            Specifies a pointer to the two-element array in which the log sub 2 of the minimum and maximum representable magnitudes of the format are returned.
            |
|precision|[length: 2] 
            Specifies a pointer to the location in which the log sub 2 of the precision of the format is returned.
            |


#### GetShaderSource
```csharp
OpenTK.Graphics.ES20.GL.GetShaderSource(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the source code string from a shader object

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
OpenTK.Graphics.ES20.GL.GetString(OpenTK.Graphics.ES20.StringName)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return a string describing the current GL connection

|Parameter Name|Remarks|
|--------------|-------|
|name| 
            Specifies a symbolic constant, one of Vendor, Renderer, Version, ShadingLanguageVersion, or Extensions.
            |


#### GetTexParameter
```csharp
OpenTK.Graphics.ES20.GL.GetTexParameter(OpenTK.Graphics.ES20.TextureTarget,OpenTK.Graphics.ES20.GetTextureParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return texture parameter values

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the symbolic name of the target texture of the active texture unit. Texture2D and TextureCubeMap are accepted.
            |
|pname| 
            Specifies the symbolic name of a texture parameter. TextureMagFilter, TextureMinFilter, TextureWrapS, and TextureWrapT are accepted.
            |
|@params|[length: pname] 
            Returns the texture parameter.
            |


#### GetUniform
```csharp
OpenTK.Graphics.ES20.GL.GetUniform(System.UInt32,System.Int32,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the value of a uniform variable

|Parameter Name|Remarks|
|--------------|-------|
|program| 
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
OpenTK.Graphics.ES20.GL.GetUniformLocation(System.UInt32,System.String)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return the location of a uniform variable

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
OpenTK.Graphics.ES20.GL.GetVertexAttrib(System.UInt32,OpenTK.Graphics.ES20.VertexAttribParameter,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Return a generic vertex attribute parameter

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the generic vertex attribute parameter to be queried.
            |
|pname| 
            Specifies the symbolic name of the vertex attribute parameter to be queried. Accepted values are VertexAttribArrayBufferBinding, VertexAttribArrayEnabled, VertexAttribArraySize, VertexAttribArrayStride, VertexAttribArrayType, VertexAttribArrayNormalized, or CurrentVertexAttrib.
            |
|@params|[length: 4] 
            Returns the requested data.
            |


#### GetVertexAttribPointer
```csharp
OpenTK.Graphics.ES20.GL.GetVertexAttribPointer(System.UInt32,OpenTK.Graphics.ES20.VertexAttribPointerParameter,System.IntPtr)
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
OpenTK.Graphics.ES20.GL.GetVertexAttribPointer``1(System.UInt32,OpenTK.Graphics.ES20.VertexAttribPointerParameter,``0@)
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
OpenTK.Graphics.ES20.GL.Hint(OpenTK.Graphics.ES20.HintTarget,OpenTK.Graphics.ES20.HintMode)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify implementation-specific hints

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating the behavior to be controlled. GenerateMipmapHint is accepted.
            |
|mode| 
            Specifies a symbolic constant indicating the desired behavior. Fastest, Nicest, and DontCare are accepted.
            |


#### IsBuffer
```csharp
OpenTK.Graphics.ES20.GL.IsBuffer(System.UInt32)
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
OpenTK.Graphics.ES20.GL.IsEnabled(OpenTK.Graphics.ES20.EnableCap)
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
OpenTK.Graphics.ES20.GL.IsFramebuffer(System.UInt32)
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
OpenTK.Graphics.ES20.GL.IsProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies a potential program object.
            |


#### IsRenderbuffer
```csharp
OpenTK.Graphics.ES20.GL.IsRenderbuffer(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer| 
            Specifies a value that may be the name of a renderbuffer object.
            |


#### IsShader
```csharp
OpenTK.Graphics.ES20.GL.IsShader(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a shader object

|Parameter Name|Remarks|
|--------------|-------|
|shader| 
            Specifies a potential shader object.
            |


#### IsTexture
```csharp
OpenTK.Graphics.ES20.GL.IsTexture(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Determine if a name corresponds to a texture

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies a value that may be the name of a texture.
            |


#### LineWidth
```csharp
OpenTK.Graphics.ES20.GL.LineWidth(System.Single)
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
OpenTK.Graphics.ES20.GL.LinkProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Link a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be linked.
            |


#### ObjectLabel
```csharp
OpenTK.Graphics.ES20.GL.ObjectLabel(OpenTK.Graphics.ES20.ObjectLabelIdentifier,System.UInt32,System.Int32,System.String)
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
OpenTK.Graphics.ES20.GL.ObjectPtrLabel(System.IntPtr,System.Int32,System.String)
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
OpenTK.Graphics.ES20.GL.ObjectPtrLabel``1(``0@,System.Int32,System.String)
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


#### PixelStore
```csharp
OpenTK.Graphics.ES20.GL.PixelStore(OpenTK.Graphics.ES20.PixelStoreParameter,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set pixel storage modes

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the symbolic name of the parameter to be set. One value affects the packing of pixel data into memory: PackAlignment. The other affects the unpacking of pixel data from memory: UnpackAlignment.
            |
|param| 
            Specifies the value that pname is set to.
            |


#### PolygonOffset
```csharp
OpenTK.Graphics.ES20.GL.PolygonOffset(System.Single,System.Single)
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
OpenTK.Graphics.ES20.GL.PopDebugGroup
```
Pop the active debug group

#### PushDebugGroup
```csharp
OpenTK.Graphics.ES20.GL.PushDebugGroup(OpenTK.Graphics.ES20.All,System.UInt32,System.Int32,System.String)
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


#### ReadPixels
```csharp
OpenTK.Graphics.ES20.GL.ReadPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,System.IntPtr)
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Alpha, Rgb, and Rgba.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, UnsignedShort565, UnsignedShort4444, or UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReadPixels``1
```csharp
OpenTK.Graphics.ES20.GL.ReadPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,``0@)
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Alpha, Rgb, and Rgba.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, UnsignedShort565, UnsignedShort4444, or UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### ReleaseShaderCompiler
```csharp
OpenTK.Graphics.ES20.GL.ReleaseShaderCompiler
```
[requires: v2.0 or ES_VERSION_2_0]
 Release resources allocated by the shader compiler

#### RenderbufferStorage
```csharp
OpenTK.Graphics.ES20.GL.RenderbufferStorage(OpenTK.Graphics.ES20.RenderbufferTarget,OpenTK.Graphics.ES20.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Create and initialize a renderbuffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the renderbuffer target.  The symbolic constant must be Renderbuffer.
            |
|internalformat| 
            Specifies the color-renderable, depth-renderable, or stencil-renderable format of the renderbuffer. Must be one of the following symbolic constants: Rgba4, Rgb565, Rgb5A1, DepthComponent16, or StencilIndex8.
            |
|width| 
            Specifies the width of the renderbuffer in pixels.
            |
|height| 
            Specifies the height of the renderbuffer in pixels.
            |


#### SampleCoverage
```csharp
OpenTK.Graphics.ES20.GL.SampleCoverage(System.Single,System.Boolean)
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


#### Scissor
```csharp
OpenTK.Graphics.ES20.GL.Scissor(System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.ES20.GL.ShaderBinary(System.Int32,System.UInt32*,OpenTK.Graphics.ES20.ShaderBinaryFormat,System.IntPtr,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Load a precompiled shader binary

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of shader object handles present in shaders.
            |
|shaders|[length: count] 
            Specifies a pointer to an array of shader object handles into which the shader binary will be loaded.
            |
|binaryformat| 
            Specifies the shader binary format.
            |
|binary|[length: length] 
            Specifies a pointer to the shader binary data in client memory.
            |
|length| 
            Specifies the length of the shader binary data in bytes.
            |


#### ShaderBinary``1
```csharp
OpenTK.Graphics.ES20.GL.ShaderBinary``1(System.Int32,System.UInt32*,OpenTK.Graphics.ES20.ShaderBinaryFormat,``0@,System.Int32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Load a precompiled shader binary

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            Specifies the number of shader object handles present in shaders.
            |
|shaders|[length: count] 
            Specifies a pointer to an array of shader object handles into which the shader binary will be loaded.
            |
|binaryformat| 
            Specifies the shader binary format.
            |
|binary|[length: length] 
            Specifies a pointer to the shader binary data in client memory.
            |
|length| 
            Specifies the length of the shader binary data in bytes.
            |


#### ShaderSource
```csharp
OpenTK.Graphics.ES20.GL.ShaderSource(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Replace the source code in a shader object

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
OpenTK.Graphics.ES20.GL.StencilFunc(OpenTK.Graphics.ES20.StencilFunction,System.Int32,System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
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
OpenTK.Graphics.ES20.GL.StencilFuncSeparate(OpenTK.Graphics.ES20.StencilFace,OpenTK.Graphics.ES20.StencilFunction,System.Int32,System.UInt32)
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
            Specifies the reference value for the stencil test. ref is clamped to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilMask
```csharp
OpenTK.Graphics.ES20.GL.StencilMask(System.UInt32)
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
OpenTK.Graphics.ES20.GL.StencilMaskSeparate(OpenTK.Graphics.ES20.StencilFace,System.UInt32)
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
OpenTK.Graphics.ES20.GL.StencilOp(OpenTK.Graphics.ES20.StencilOp,OpenTK.Graphics.ES20.StencilOp,OpenTK.Graphics.ES20.StencilOp)
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
OpenTK.Graphics.ES20.GL.StencilOpSeparate(OpenTK.Graphics.ES20.StencilFace,OpenTK.Graphics.ES20.StencilOp,OpenTK.Graphics.ES20.StencilOp,OpenTK.Graphics.ES20.StencilOp)
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
OpenTK.Graphics.ES20.GL.TexImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.TextureComponentCount,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the internal format of the texture. Must be one of the following symbolic constants: Alpha, Luminance, LuminanceAlpha, Rgb, Rgba.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |
|format| 
            Specifies the format of the texel data.  Must match internalformat. The following symbolic values are accepted: Alpha, Rgb, Rgba, Luminance, and LuminanceAlpha.
            |
|type| 
            Specifies the data type of the texel data. The following symbolic values are accepted: UnsignedByte, UnsignedShort565, UnsignedShort4444, and UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexImage2D``1
```csharp
OpenTK.Graphics.ES20.GL.TexImage2D``1(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.TextureComponentCount,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
            |
|level| 
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat| 
            Specifies the internal format of the texture. Must be one of the following symbolic constants: Alpha, Luminance, LuminanceAlpha, Rgb, Rgba.
            |
|width| 
            Specifies the width of the texture image. All implementations support 2D texture images that are at least 64 texels wide and cube-mapped texture images that are at least 16 texels wide.
            |
|height| 
            Specifies the height of the texture image All implementations support 2D texture images that are at least 64 texels high and cube-mapped texture images that are at least 16 texels high.
            |
|border| 
            Specifies the width of the border. Must be 0.
            |
|format| 
            Specifies the format of the texel data.  Must match internalformat. The following symbolic values are accepted: Alpha, Rgb, Rgba, Luminance, and LuminanceAlpha.
            |
|type| 
            Specifies the data type of the texel data. The following symbolic values are accepted: UnsignedByte, UnsignedShort565, UnsignedShort4444, and UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexParameter
```csharp
OpenTK.Graphics.ES20.GL.TexParameter(OpenTK.Graphics.ES20.TextureTarget,OpenTK.Graphics.ES20.TextureParameterName,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Set texture parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit, which must be either Texture2D or TextureCubeMap.
            |
|pname| 
            Specifies the symbolic name of a single-valued texture parameter. pname can be one of the following: TextureMinFilter, TextureMagFilter, TextureWrapS, or TextureWrapT.
            |
|@params|[length: pname] 
            Specifies the value of pname.
            |


#### TexSubImage2D
```csharp
OpenTK.Graphics.ES20.GL.TexSubImage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Alpha, Rgb, Rgba, Luminance, and LuminanceAlpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, UnsignedShort565, UnsignedShort4444, and UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage2D``1
```csharp
OpenTK.Graphics.ES20.GL.TexSubImage2D``1(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.PixelFormat,OpenTK.Graphics.ES20.PixelType,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target texture of the active texture unit. Must be Texture2D, TextureCubeMapPositiveX, TextureCubeMapNegativeX, TextureCubeMapPositiveY, TextureCubeMapNegativeY, TextureCubeMapPositiveZ, or TextureCubeMapNegativeZ.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Alpha, Rgb, Rgba, Luminance, and LuminanceAlpha.
            |
|type| 
            Specifies the data type of the pixel data. The following symbolic values are accepted: UnsignedByte, UnsignedShort565, UnsignedShort4444, and UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Specifies a pointer to the image data in memory.
            |


#### Uniform1
```csharp
OpenTK.Graphics.ES20.GL.Uniform1(System.Int32,System.Int32,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            Specifies the new values to be used for the specified uniform variable.
            |
|value|[length: count*1] 
            Specifies the new values to be used for the specified uniform variable.
            |


#### Uniform2
```csharp
OpenTK.Graphics.ES20.GL.Uniform2(System.Int32,System.Int32,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            Specifies the new values to be used for the specified uniform variable.
            |
|value|[length: count*2] 
            Specifies the new values to be used for the specified uniform variable.
            |


#### Uniform3
```csharp
OpenTK.Graphics.ES20.GL.Uniform3(System.Int32,System.Int32,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            Specifies the new values to be used for the specified uniform variable.
            |
|value|[length: count*3] 
            Specifies the new values to be used for the specified uniform variable.
            |


#### Uniform4
```csharp
OpenTK.Graphics.ES20.GL.Uniform4(System.Int32,System.Int32,System.Int32*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a uniform variable for the current program object

|Parameter Name|Remarks|
|--------------|-------|
|location| 
            Specifies the location of the uniform variable to be modified.
            |
|count| 
            Specifies the new values to be used for the specified uniform variable.
            |
|value|[length: count*4] 
            Specifies the new values to be used for the specified uniform variable.
            |


#### UniformMatrix2
```csharp
OpenTK.Graphics.ES20.GL.UniformMatrix2(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### UniformMatrix3
```csharp
OpenTK.Graphics.ES20.GL.UniformMatrix3(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### UniformMatrix4
```csharp
OpenTK.Graphics.ES20.GL.UniformMatrix4(System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### UseProgram
```csharp
OpenTK.Graphics.ES20.GL.UseProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Install a program object as part of current rendering state

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object whose executables are to be used as part of current rendering state.
            |


#### ValidateProgram
```csharp
OpenTK.Graphics.ES20.GL.ValidateProgram(System.UInt32)
```
[requires: v2.0 or ES_VERSION_2_0]
 Validate a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the handle of the program object to be validated.
            |


#### VertexAttrib1
```csharp
OpenTK.Graphics.ES20.GL.VertexAttrib1(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 1] 
            Specifies the new values to be used for the specified vertex attribute.
            |


#### VertexAttrib2
```csharp
OpenTK.Graphics.ES20.GL.VertexAttrib2(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 2] 
            Specifies the new values to be used for the specified vertex attribute.
            |


#### VertexAttrib3
```csharp
OpenTK.Graphics.ES20.GL.VertexAttrib3(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 3] 
            Specifies the new values to be used for the specified vertex attribute.
            |


#### VertexAttrib4
```csharp
OpenTK.Graphics.ES20.GL.VertexAttrib4(System.UInt32,System.Single*)
```
[requires: v2.0 or ES_VERSION_2_0]
 Specify the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 4] 
            Specifies the new values to be used for the specified vertex attribute.
            |


#### VertexAttribPointer
```csharp
OpenTK.Graphics.ES20.GL.VertexAttribPointer(System.UInt32,System.Int32,OpenTK.Graphics.ES20.VertexAttribPointerType,System.Boolean,System.Int32,System.IntPtr)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Fixed, or Float are accepted. The initial value is Float.
            |
|normalized| 
            Specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first generic vertex attribute in the array. The initial value is 0.
            |


#### VertexAttribPointer``1
```csharp
OpenTK.Graphics.ES20.GL.VertexAttribPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.ES20.VertexAttribPointerType,System.Boolean,System.Int32,``0@)
```
[requires: v2.0 or ES_VERSION_2_0]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|size| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Fixed, or Float are accepted. The initial value is Float.
            |
|normalized| 
            Specifies whether fixed-point data values should be normalized (True) or converted directly as fixed-point values (False) when they are accessed.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first generic vertex attribute in the array. The initial value is 0.
            |


#### Viewport
```csharp
OpenTK.Graphics.ES20.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)
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




### Properties

#### SyncRoot
Returns a synchronization token unique for the GL class.

