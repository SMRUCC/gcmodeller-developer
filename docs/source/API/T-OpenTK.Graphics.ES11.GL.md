---
title: GL
---

# GL
_namespace: [OpenTK.Graphics.ES11](N-OpenTK.Graphics.ES11.html)_

Provides access to OpenGL ES 1.1 methods.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.ES11.GL.#ctor
```
Constructs a new instance.

#### ActiveTexture
```csharp
OpenTK.Graphics.ES11.GL.ActiveTexture(OpenTK.Graphics.ES11.TextureUnit)
```
[requires: v1.0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least 8. texture must be one of Texture, where i ranges from 0 to (MaxCombinedTextureImageUnits - 1). The initial value is Texture0.
            |


#### AlphaFunc
```csharp
OpenTK.Graphics.ES11.GL.AlphaFunc(OpenTK.Graphics.ES11.AlphaFunction,System.Single)
```
[requires: v1.0]
 Specify the alpha test function

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the alpha comparison function. Symbolic constants Never, Less, Equal, Lequal, Greater, Notequal, Gequal, and Always are accepted. The initial value is Always.
            |
|@ref| 
            Specifies the reference value that incoming alpha values are compared to. This value is clamped to the range [0,1], where 0 represents the lowest possible alpha value and 1 the highest possible value. The initial reference value is 0.
            |


#### AlphaFuncx
```csharp
OpenTK.Graphics.ES11.GL.AlphaFuncx(OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|
|@ref|-|


#### BindBuffer
```csharp
OpenTK.Graphics.ES11.GL.BindBuffer(OpenTK.Graphics.ES11.All,System.UInt32)
```
[requires: v1.0]
 Bind a named buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the buffer object is bound. The symbolic constant must be ArrayBuffer or ElementArrayBuffer.
            |
|buffer| 
            Specifies the name of a buffer object.
            |


#### BindTexture
```csharp
OpenTK.Graphics.ES11.GL.BindTexture(OpenTK.Graphics.ES11.TextureTarget,System.UInt32)
```
[requires: v1.0]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the active texture unit to which the texture is bound. Must be either Texture2D or TextureCubeMap.
            |
|texture| 
            Specifies the name of a texture.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.ES11.GL.BlendFunc(OpenTK.Graphics.ES11.BlendingFactorSrc,OpenTK.Graphics.ES11.BlendingFactorDest)
```
[requires: v1.0]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|sfactor| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
|dfactor| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |


#### BufferData
```csharp
OpenTK.Graphics.ES11.GL.BufferData(OpenTK.Graphics.ES11.All,System.IntPtr,System.IntPtr,OpenTK.Graphics.ES11.All)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.BufferData``1(OpenTK.Graphics.ES11.All,System.IntPtr,``0@,OpenTK.Graphics.ES11.All)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.BufferSubData(OpenTK.Graphics.ES11.All,System.IntPtr,System.IntPtr,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.BufferSubData``1(OpenTK.Graphics.ES11.All,System.IntPtr,System.IntPtr,``0@)
```
[requires: v1.0]
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


#### Clear
```csharp
OpenTK.Graphics.ES11.GL.Clear(System.UInt32)
```
[requires: v1.0]
 Clear buffers to preset values

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Bitwise OR of masks that indicate the buffers to be cleared. The three masks are ColorBufferBit, DepthBufferBit, and StencilBufferBit.
            |


#### ClearColor
```csharp
OpenTK.Graphics.ES11.GL.ClearColor(System.Single,System.Single,System.Single,System.Single)
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


#### ClearColorx
```csharp
OpenTK.Graphics.ES11.GL.ClearColorx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ClearDepth
```csharp
OpenTK.Graphics.ES11.GL.ClearDepth(System.Single)
```
[requires: v1.0]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|d| 
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### ClearDepthx
```csharp
OpenTK.Graphics.ES11.GL.ClearDepthx(System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|depth|-|


#### ClearStencil
```csharp
OpenTK.Graphics.ES11.GL.ClearStencil(System.Int32)
```
[requires: v1.0]
 Specify the clear value for the stencil buffer

|Parameter Name|Remarks|
|--------------|-------|
|s| 
            Specifies the index used when the stencil buffer is cleared. The initial value is 0.
            |


#### ClientActiveTexture
```csharp
OpenTK.Graphics.ES11.GL.ClientActiveTexture(OpenTK.Graphics.ES11.TextureUnit)
```
[requires: v1.0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least two. texture must be one of Texture, where i ranges from 0 to the value of MaxTextureCoords - 1, which is an implementation-dependent value.  The initial value is Texture0.
            |


#### ClipPlane
```csharp
OpenTK.Graphics.ES11.GL.ClipPlane(OpenTK.Graphics.ES11.All,System.Single*)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.ClipPlanex(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|plane|-|
|equation|[length: 4]|


#### Color4
```csharp
OpenTK.Graphics.ES11.GL.Color4(System.Byte,System.Byte,System.Byte,System.Byte)
```
[requires: v1.0]
 Set the current color

|Parameter Name|Remarks|
|--------------|-------|
|red| 
            Specify new red, green, and blue values for the current color.
            |
|green| 
            Specify new red, green, and blue values for the current color.
            |
|blue| 
            Specify new red, green, and blue values for the current color.
            |
|alpha| 
            Specifies a new alpha value for the current color. Included only in the four-argument glColor4 commands.
            |


#### Color4x
```csharp
OpenTK.Graphics.ES11.GL.Color4x(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ColorMask
```csharp
OpenTK.Graphics.ES11.GL.ColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: v1.0]
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


#### ColorPointer
```csharp
OpenTK.Graphics.ES11.GL.ColorPointer(System.Int32,OpenTK.Graphics.ES11.ColorPointerType,System.Int32,System.IntPtr)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### ColorPointer``1
```csharp
OpenTK.Graphics.ES11.GL.ColorPointer``1(System.Int32,OpenTK.Graphics.ES11.ColorPointerType,System.Int32,``0@)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### CompressedTexImage2D
```csharp
OpenTK.Graphics.ES11.GL.CompressedTexImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.CompressedTexImage2D``1(OpenTK.Graphics.ES11.TextureTarget,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.CompressedTexSubImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,System.Int32,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.CompressedTexSubImage2D``1(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,System.Int32,``0@)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.CopyTexImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.CopyTexSubImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]
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


#### CullFace
```csharp
OpenTK.Graphics.ES11.GL.CullFace(OpenTK.Graphics.ES11.CullFaceMode)
```
[requires: v1.0]
 Specify whether front- or back-facing polygons can be culled

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies whether front- or back-facing polygons are candidates for culling. Symbolic constants Front, Back, and FrontAndBack are accepted. The initial value is Back.
            |


#### DeleteBuffer
```csharp
OpenTK.Graphics.ES11.GL.DeleteBuffer(System.UInt32)
```
[requires: v1.0]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteBuffers
```csharp
OpenTK.Graphics.ES11.GL.DeleteBuffers(System.Int32,System.UInt32*)
```
[requires: v1.0]
 Delete named buffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer objects to be deleted.
            |
|buffers|[length: n] 
            Specifies an array of buffer objects to be deleted.
            |


#### DeleteTexture
```csharp
OpenTK.Graphics.ES11.GL.DeleteTexture(System.UInt32)
```
[requires: v1.0]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|textures|[length: n] 
            Specifies an array of textures to be deleted.
            |


#### DeleteTextures
```csharp
OpenTK.Graphics.ES11.GL.DeleteTextures(System.Int32,System.UInt32*)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.DepthFunc(OpenTK.Graphics.ES11.DepthFunction)
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
OpenTK.Graphics.ES11.GL.DepthMask(System.Boolean)
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
OpenTK.Graphics.ES11.GL.DepthRange(System.Single,System.Single)
```
[requires: v1.0]
 Specify mapping of depth values from normalized device coordinates to window coordinates

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|f| 
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DepthRangex
```csharp
OpenTK.Graphics.ES11.GL.DepthRangex(System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|f|-|


#### Disable
```csharp
OpenTK.Graphics.ES11.GL.Disable(OpenTK.Graphics.ES11.EnableCap)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|cap|-|


#### DisableClientState
```csharp
OpenTK.Graphics.ES11.GL.DisableClientState(OpenTK.Graphics.ES11.EnableCap)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|


#### DrawArrays
```csharp
OpenTK.Graphics.ES11.GL.DrawArrays(OpenTK.Graphics.ES11.PrimitiveType,System.Int32,System.Int32)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.DrawElements(OpenTK.Graphics.ES11.PrimitiveType,System.Int32,OpenTK.Graphics.ES11.All,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.DrawElements``1(OpenTK.Graphics.ES11.PrimitiveType,System.Int32,OpenTK.Graphics.ES11.All,``0@)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.Enable(OpenTK.Graphics.ES11.EnableCap)
```
[requires: v1.0]
 Enable or disable server-side GL capabilities

|Parameter Name|Remarks|
|--------------|-------|
|cap| 
            Specifies a symbolic constant indicating a GL capability.
            |


#### EnableClientState
```csharp
OpenTK.Graphics.ES11.GL.EnableClientState(OpenTK.Graphics.ES11.EnableCap)
```
[requires: v1.0]
 Enable or disable client-side capability

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the capability to enable. Symbolic constants ColorArray, EdgeFlagArray, FogCoordArray, IndexArray, NormalArray, SecondaryColorArray, TextureCoordArray, and VertexArray are accepted.
            |


#### Finish
```csharp
OpenTK.Graphics.ES11.GL.Finish
```
[requires: v1.0]
 Block until all GL execution is complete

#### Flush
```csharp
OpenTK.Graphics.ES11.GL.Flush
```
[requires: v1.0]
 Force execution of GL commands in finite time

#### Fog
```csharp
OpenTK.Graphics.ES11.GL.Fog(OpenTK.Graphics.ES11.FogParameter,System.Single*)
```
[requires: v1.0]
 Specify fog parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued fog parameter. FogMode, FogDensity, FogStart, FogEnd, FogIndex, and FogCoordSrc are accepted.
            |
|@params|[length: pname] 
            Specifies the value that pname will be set to.
            |


#### Fogx
```csharp
OpenTK.Graphics.ES11.GL.Fogx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### FrontFace
```csharp
OpenTK.Graphics.ES11.GL.FrontFace(OpenTK.Graphics.ES11.FrontFaceDirection)
```
[requires: v1.0]
 Define front- and back-facing polygons

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies the orientation of front-facing polygons. Cw and Ccw are accepted. The initial value is Ccw.
            |


#### Frustum
```csharp
OpenTK.Graphics.ES11.GL.Frustum(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Multiply the current matrix by a perspective matrix

|Parameter Name|Remarks|
|--------------|-------|
|l| 
            Specify the coordinates for the left and right vertical clipping planes.
            |
|r| 
            Specify the coordinates for the left and right vertical clipping planes.
            |
|b| 
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|t| 
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|n| 
            Specify the distances to the near and far depth clipping planes. Both distances must be positive.
            |
|f| 
            Specify the distances to the near and far depth clipping planes. Both distances must be positive.
            |


#### Frustumx
```csharp
OpenTK.Graphics.ES11.GL.Frustumx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|l|-|
|r|-|
|b|-|
|t|-|
|n|-|
|f|-|


#### GenBuffer
```csharp
OpenTK.Graphics.ES11.GL.GenBuffer
```
[requires: v1.0]
 Generate buffer object names

#### GenBuffers
```csharp
OpenTK.Graphics.ES11.GL.GenBuffers(System.Int32,System.UInt32*)
```
[requires: v1.0]
 Generate buffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffer object names to be generated.
            |
|buffers|[length: n] 
            Specifies an array in which the generated buffer object names are stored.
            |


#### GenTexture
```csharp
OpenTK.Graphics.ES11.GL.GenTexture
```
[requires: v1.0]
 Generate texture names

#### GenTextures
```csharp
OpenTK.Graphics.ES11.GL.GenTextures(System.Int32,System.UInt32*)
```
[requires: v1.0]
 Generate texture names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of texture names to be generated.
            |
|textures|[length: n] 
            Specifies an array in which the generated texture names are stored.
            |


#### GetBoolean
```csharp
OpenTK.Graphics.ES11.GL.GetBoolean(OpenTK.Graphics.ES11.GetPName,System.Boolean*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetBufferParameter
```csharp
OpenTK.Graphics.ES11.GL.GetBufferParameter(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]
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


#### GetClipPlane
```csharp
OpenTK.Graphics.ES11.GL.GetClipPlane(OpenTK.Graphics.ES11.All)
```
[requires: v1.0]
 Return the coefficients of the specified clipping plane

|Parameter Name|Remarks|
|--------------|-------|
|plane|
            Specifies a clipping plane. The number of clipping planes depends on the implementation, but at least six clipping planes are supported. They are identified by symbolic names of the form GL_CLIP_PLANE where i ranges from 0 to the value of GL_MAX_CLIP_PLANES - 1.
            |


#### GetClipPlanex
```csharp
OpenTK.Graphics.ES11.GL.GetClipPlanex(OpenTK.Graphics.ES11.All)
```
[requires: v1.0]
 Return the coefficients of the specified clipping plane

|Parameter Name|Remarks|
|--------------|-------|
|plane|
            Specifies a clipping plane. The number of clipping planes depends on the implementation, but at least six clipping planes are supported. They are identified by symbolic names of the form GL_CLIP_PLANE where i ranges from 0 to the value of GL_MAX_CLIP_PLANES - 1.
            |


#### GetError
```csharp
OpenTK.Graphics.ES11.GL.GetError
```
[requires: v1.0]
 Return error information

#### GetFixed
```csharp
OpenTK.Graphics.ES11.GL.GetFixed(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|-|


#### GetFloat
```csharp
OpenTK.Graphics.ES11.GL.GetFloat(OpenTK.Graphics.ES11.GetPName,System.Single*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetInteger
```csharp
OpenTK.Graphics.ES11.GL.GetInteger(OpenTK.Graphics.ES11.GetPName,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|data|[length: pname]|


#### GetLight
```csharp
OpenTK.Graphics.ES11.GL.GetLight(OpenTK.Graphics.ES11.LightName,OpenTK.Graphics.ES11.LightParameter,System.Single*)
```
[requires: v1.0]
 Return light source parameter values

|Parameter Name|Remarks|
|--------------|-------|
|light| 
            Specifies a light source. The number of possible lights depends on the implementation, but at least eight lights are supported. They are identified by symbolic names of the form Light  where  ranges from 0 to the value of MaxLights - 1.
            |
|pname| 
            Specifies a light source parameter for light. Accepted symbolic names are Ambient, Diffuse, Specular, Position, SpotDirection, SpotExponent, SpotCutoff, ConstantAttenuation, LinearAttenuation, and QuadraticAttenuation.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetLightx
```csharp
OpenTK.Graphics.ES11.GL.GetLightx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### GetMaterial
```csharp
OpenTK.Graphics.ES11.GL.GetMaterial(OpenTK.Graphics.ES11.MaterialFace,OpenTK.Graphics.ES11.MaterialParameter,System.Single*)
```
[requires: v1.0]
 Return material parameters

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies which of the two materials is being queried. Front or Back are accepted, representing the front and back materials, respectively.
            |
|pname| 
            Specifies the material parameter to return. Ambient, Diffuse, Specular, Emission, Shininess, and ColorIndexes are accepted.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetMaterialx
```csharp
OpenTK.Graphics.ES11.GL.GetMaterialx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|@params|[length: pname]|


#### GetPixelMapx
```csharp
OpenTK.Graphics.ES11.GL.GetPixelMapx(OpenTK.Graphics.ES11.All,System.Int32,System.Int32*)
```


|Parameter Name|Remarks|
|--------------|-------|
|map|-|
|size|-|
|values|[length: size]|


#### GetPointer
```csharp
OpenTK.Graphics.ES11.GL.GetPointer(OpenTK.Graphics.ES11.GetPointervPName,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.GetPointer``1(OpenTK.Graphics.ES11.GetPointervPName,``0@)
```
[requires: v1.0]
 Return the address of the specified pointer

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the array or buffer pointer to be returned. Symbolic constants ColorArrayPointer, EdgeFlagArrayPointer, FogCoordArrayPointer, FeedbackBufferPointer, IndexArrayPointer, NormalArrayPointer, SecondaryColorArrayPointer, SelectionBufferPointer, TextureCoordArrayPointer, or VertexArrayPointer are accepted.
            |
|@params|[length: 1] 
            Returns the pointer value specified by pname.
            |


#### GetString
```csharp
OpenTK.Graphics.ES11.GL.GetString(OpenTK.Graphics.ES11.StringName)
```
[requires: v1.0]
 Return a string describing the current GL connection

|Parameter Name|Remarks|
|--------------|-------|
|name| 
            Specifies a symbolic constant, one of Vendor, Renderer, Version, ShadingLanguageVersion, or Extensions.
            |


#### GetTexEnv
```csharp
OpenTK.Graphics.ES11.GL.GetTexEnv(OpenTK.Graphics.ES11.TextureEnvTarget,OpenTK.Graphics.ES11.TextureEnvParameter,System.Int32*)
```
[requires: v1.0]
 Return texture environment parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a texture environment. May be TextureEnv, TextureFilterControl, or PointSprite.
            |
|pname| 
            Specifies the symbolic name of a texture environment parameter. Accepted values are TextureEnvMode, TextureEnvColor, TextureLodBias, CombineRgb, CombineAlpha, Src0Rgb, Src1Rgb, Src2Rgb, Src0Alpha, Src1Alpha, Src2Alpha, Operand0Rgb, Operand1Rgb, Operand2Rgb, Operand0Alpha, Operand1Alpha, Operand2Alpha, RgbScale, AlphaScale, or CoordReplace.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetTexEnvx
```csharp
OpenTK.Graphics.ES11.GL.GetTexEnvx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTexParameter
```csharp
OpenTK.Graphics.ES11.GL.GetTexParameter(OpenTK.Graphics.ES11.TextureTarget,OpenTK.Graphics.ES11.GetTextureParameter,System.Int32*)
```
[requires: v1.0]
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


#### GetTexParameterx
```csharp
OpenTK.Graphics.ES11.GL.GetTexParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### Hint
```csharp
OpenTK.Graphics.ES11.GL.Hint(OpenTK.Graphics.ES11.HintTarget,OpenTK.Graphics.ES11.HintMode)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.IsBuffer(System.UInt32)
```
[requires: v1.0]
 Determine if a name corresponds to a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|buffer| 
            Specifies a value that may be the name of a buffer object.
            |


#### IsEnabled
```csharp
OpenTK.Graphics.ES11.GL.IsEnabled(OpenTK.Graphics.ES11.EnableCap)
```
[requires: v1.0]
 Test whether a capability is enabled

|Parameter Name|Remarks|
|--------------|-------|
|cap| 
            Specifies a symbolic constant indicating a GL capability.
            |


#### IsTexture
```csharp
OpenTK.Graphics.ES11.GL.IsTexture(System.UInt32)
```
[requires: v1.0]
 Determine if a name corresponds to a texture

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies a value that may be the name of a texture.
            |


#### Light
```csharp
OpenTK.Graphics.ES11.GL.Light(OpenTK.Graphics.ES11.LightName,OpenTK.Graphics.ES11.LightParameter,System.Single*)
```
[requires: v1.0]
 Set light source parameters

|Parameter Name|Remarks|
|--------------|-------|
|light| 
            Specifies a light. The number of lights depends on the implementation, but at least eight lights are supported. They are identified by symbolic names of the form Light , where i ranges from 0 to the value of MaxLights - 1.
            |
|pname| 
            Specifies a single-valued light source parameter for light. SpotExponent, SpotCutoff, ConstantAttenuation, LinearAttenuation, and QuadraticAttenuation are accepted.
            |
|@params|[length: pname] 
            Specifies the value that parameter pname of light source light will be set to.
            |


#### LightModel
```csharp
OpenTK.Graphics.ES11.GL.LightModel(OpenTK.Graphics.ES11.LightModelParameter,System.Single*)
```
[requires: v1.0]
 Set the lighting model parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued lighting model parameter. LightModelLocalViewer, LightModelColorControl, and LightModelTwoSide are accepted.
            |
|@params|[length: pname] 
            Specifies the value that param will be set to.
            |


#### LightModelx
```csharp
OpenTK.Graphics.ES11.GL.LightModelx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### Lightx
```csharp
OpenTK.Graphics.ES11.GL.Lightx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### LineWidth
```csharp
OpenTK.Graphics.ES11.GL.LineWidth(System.Single)
```
[requires: v1.0]
 Specify the width of rasterized lines

|Parameter Name|Remarks|
|--------------|-------|
|width| 
            Specifies the width of rasterized lines. The initial value is 1.
            |


#### LineWidthx
```csharp
OpenTK.Graphics.ES11.GL.LineWidthx(System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|width|-|


#### LoadIdentity
```csharp
OpenTK.Graphics.ES11.GL.LoadIdentity
```
[requires: v1.0]
 Replace the current matrix with the identity matrix

#### LoadMatrix
```csharp
OpenTK.Graphics.ES11.GL.LoadMatrix(System.Single*)
```
[requires: v1.0]
 Replace the current matrix with the specified matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16] 
            Specifies a pointer to 16 consecutive values, which are used as the elements of a 4  times  4 column-major matrix.
            |


#### LoadMatrixx
```csharp
OpenTK.Graphics.ES11.GL.LoadMatrixx(System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### LogicOp
```csharp
OpenTK.Graphics.ES11.GL.LogicOp(OpenTK.Graphics.ES11.LogicOp)
```
[requires: v1.0]
 Specify a logical pixel operation for rendering

|Parameter Name|Remarks|
|--------------|-------|
|opcode| 
            Specifies a symbolic constant that selects a logical operation. The following symbols are accepted: Clear, Set, Copy, CopyInverted, Noop, Invert, And, Nand, Or, Nor, Xor, Equiv, AndReverse, AndInverted, OrReverse, and OrInverted. The initial value is Copy.
            |


#### Material
```csharp
OpenTK.Graphics.ES11.GL.Material(OpenTK.Graphics.ES11.MaterialFace,OpenTK.Graphics.ES11.MaterialParameter,System.Single*)
```
[requires: v1.0]
 Specify material parameters for the lighting model

|Parameter Name|Remarks|
|--------------|-------|
|face| 
            Specifies which face or faces are being updated. Must be one of Front, Back, or FrontAndBack.
            |
|pname| 
            Specifies the single-valued material parameter of the face or faces that is being updated. Must be Shininess.
            |
|@params|[length: pname] 
            Specifies the value that parameter Shininess will be set to.
            |


#### Materialx
```csharp
OpenTK.Graphics.ES11.GL.Materialx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|param|[length: pname]|


#### MatrixMode
```csharp
OpenTK.Graphics.ES11.GL.MatrixMode(OpenTK.Graphics.ES11.MatrixMode)
```
[requires: v1.0]
 Specify which matrix is the current matrix

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies which matrix stack is the target for subsequent matrix operations. Three values are accepted: Modelview, Projection, and Texture. The initial value is Modelview. Additionally, if the ARB_imaging extension is supported, Color is also accepted.
            |


#### MultiTexCoord4
```csharp
OpenTK.Graphics.ES11.GL.MultiTexCoord4(OpenTK.Graphics.ES11.TextureUnit,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|s| 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |
|t| 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |
|r| 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |
|q| 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord4x
```csharp
OpenTK.Graphics.ES11.GL.MultiTexCoord4x(OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|s|-|
|t|-|
|r|-|
|q|-|


#### MultMatrix
```csharp
OpenTK.Graphics.ES11.GL.MultMatrix(System.Single*)
```
[requires: v1.0]
 Multiply the current matrix with the specified matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16] 
            Points to 16 consecutive values that are used as the elements of a 4  times  4 column-major matrix.
            |


#### MultMatrixx
```csharp
OpenTK.Graphics.ES11.GL.MultMatrixx(System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### Normal3
```csharp
OpenTK.Graphics.ES11.GL.Normal3(System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Set the current normal vector

|Parameter Name|Remarks|
|--------------|-------|
|nx| 
            Specify the , , and  coordinates of the new current normal. The initial value of the current normal is the unit vector, (0, 0, 1).
            |
|ny| 
            Specify the , , and  coordinates of the new current normal. The initial value of the current normal is the unit vector, (0, 0, 1).
            |
|nz| 
            Specify the , , and  coordinates of the new current normal. The initial value of the current normal is the unit vector, (0, 0, 1).
            |


#### Normal3x
```csharp
OpenTK.Graphics.ES11.GL.Normal3x(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|nx|-|
|ny|-|
|nz|-|


#### NormalPointer
```csharp
OpenTK.Graphics.ES11.GL.NormalPointer(OpenTK.Graphics.ES11.NormalPointerType,System.Int32,System.IntPtr)
```
[requires: v1.0]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: type,stride] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### NormalPointer``1
```csharp
OpenTK.Graphics.ES11.GL.NormalPointer``1(OpenTK.Graphics.ES11.NormalPointerType,System.Int32,``0@)
```
[requires: v1.0]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: type,stride] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### Ortho
```csharp
OpenTK.Graphics.ES11.GL.Ortho(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Multiply the current matrix with an orthographic matrix

|Parameter Name|Remarks|
|--------------|-------|
|l| 
            Specify the coordinates for the left and right vertical clipping planes.
            |
|r| 
            Specify the coordinates for the left and right vertical clipping planes.
            |
|b| 
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|t| 
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|n| 
            Specify the distances to the nearer and farther depth clipping planes. These values are negative if the plane is to be behind the viewer.
            |
|f| 
            Specify the distances to the nearer and farther depth clipping planes. These values are negative if the plane is to be behind the viewer.
            |


#### Orthox
```csharp
OpenTK.Graphics.ES11.GL.Orthox(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|l|-|
|r|-|
|b|-|
|t|-|
|n|-|
|f|-|


#### PixelMapx
```csharp
OpenTK.Graphics.ES11.GL.PixelMapx(OpenTK.Graphics.ES11.All,System.Int32,System.Int32*)
```


|Parameter Name|Remarks|
|--------------|-------|
|map|-|
|size|-|
|values|[length: size]|


#### PixelStore
```csharp
OpenTK.Graphics.ES11.GL.PixelStore(OpenTK.Graphics.ES11.PixelStoreParameter,System.Int32)
```
[requires: v1.0]
 Set pixel storage modes

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the symbolic name of the parameter to be set. One value affects the packing of pixel data into memory: PackAlignment. The other affects the unpacking of pixel data from memory: UnpackAlignment.
            |
|param| 
            Specifies the value that pname is set to.
            |


#### PixelStorex
```csharp
OpenTK.Graphics.ES11.GL.PixelStorex(OpenTK.Graphics.ES11.All,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### PointParameter
```csharp
OpenTK.Graphics.ES11.GL.PointParameter(OpenTK.Graphics.ES11.All,System.Single*)
```
[requires: v1.0]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### PointParameterx
```csharp
OpenTK.Graphics.ES11.GL.PointParameterx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### PointSize
```csharp
OpenTK.Graphics.ES11.GL.PointSize(System.Single)
```
[requires: v1.0]
 Specify the diameter of rasterized points

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the diameter of rasterized points. The initial value is 1.
            |


#### PointSizex
```csharp
OpenTK.Graphics.ES11.GL.PointSizex(System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|


#### PolygonOffset
```csharp
OpenTK.Graphics.ES11.GL.PolygonOffset(System.Single,System.Single)
```
[requires: v1.0]
 Set the scale and units used to calculate depth values

|Parameter Name|Remarks|
|--------------|-------|
|factor| 
            Specifies a scale factor that is used to create a variable depth offset for each polygon. The initial value is 0.
            |
|units| 
            Is multiplied by an implementation-specific value to create a constant depth offset. The initial value is 0.
            |


#### PolygonOffsetx
```csharp
OpenTK.Graphics.ES11.GL.PolygonOffsetx(System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|
|units|-|


#### PopMatrix
```csharp
OpenTK.Graphics.ES11.GL.PopMatrix
```
[requires: v1.0]

#### PushMatrix
```csharp
OpenTK.Graphics.ES11.GL.PushMatrix
```
[requires: v1.0]
 Push and pop the current matrix stack

#### ReadPixels
```csharp
OpenTK.Graphics.ES11.GL.ReadPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,System.IntPtr)
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
OpenTK.Graphics.ES11.GL.ReadPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,``0@)
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
            Specifies the format of the pixel data. The following symbolic values are accepted: Alpha, Rgb, and Rgba.
            |
|type| 
            Specifies the data type of the pixel data. Must be one of UnsignedByte, UnsignedShort565, UnsignedShort4444, or UnsignedShort5551.
            |
|pixels|[length: format,type,width,height] 
            Returns the pixel data.
            |


#### Rotate
```csharp
OpenTK.Graphics.ES11.GL.Rotate(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Multiply the current matrix by a rotation matrix

|Parameter Name|Remarks|
|--------------|-------|
|angle| 
            Specifies the angle of rotation, in degrees.
            |
|x| 
            Specify the x, y, and z coordinates of a vector, respectively.
            |
|y| 
            Specify the x, y, and z coordinates of a vector, respectively.
            |
|z| 
            Specify the x, y, and z coordinates of a vector, respectively.
            |


#### Rotatex
```csharp
OpenTK.Graphics.ES11.GL.Rotatex(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|angle|-|
|x|-|
|y|-|
|z|-|


#### SampleCoverage
```csharp
OpenTK.Graphics.ES11.GL.SampleCoverage(System.Single,System.Boolean)
```
[requires: v1.0]
 Specify multisample coverage parameters

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specify a single floating-point sample coverage value.  The value is clamped to the range [0 ,1]. The initial value is 1.0.
            |
|invert| 
            Specify a single boolean value representing if the coverage masks should be inverted.  True and False are accepted.  The initial value is False.
            |


#### SampleCoveragex
```csharp
OpenTK.Graphics.ES11.GL.SampleCoveragex(System.Int32,System.Boolean)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|invert|-|


#### Scale
```csharp
OpenTK.Graphics.ES11.GL.Scale(System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Multiply the current matrix by a general scaling matrix

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify scale factors along the x, y, and z axes, respectively.
            |
|y| 
            Specify scale factors along the x, y, and z axes, respectively.
            |
|z| 
            Specify scale factors along the x, y, and z axes, respectively.
            |


#### Scalex
```csharp
OpenTK.Graphics.ES11.GL.Scalex(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### Scissor
```csharp
OpenTK.Graphics.ES11.GL.Scissor(System.Int32,System.Int32,System.Int32,System.Int32)
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


#### ShadeModel
```csharp
OpenTK.Graphics.ES11.GL.ShadeModel(OpenTK.Graphics.ES11.ShadingModel)
```
[requires: v1.0]
 Select flat or smooth shading

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies a symbolic value representing a shading technique. Accepted values are Flat and Smooth. The initial value is Smooth.
            |


#### StencilFunc
```csharp
OpenTK.Graphics.ES11.GL.StencilFunc(OpenTK.Graphics.ES11.StencilFunction,System.Int32,System.UInt32)
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


#### StencilMask
```csharp
OpenTK.Graphics.ES11.GL.StencilMask(System.UInt32)
```
[requires: v1.0]
 Control the front and back writing of individual bits in the stencil planes

|Parameter Name|Remarks|
|--------------|-------|
|mask| 
            Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's.
            |


#### StencilOp
```csharp
OpenTK.Graphics.ES11.GL.StencilOp(OpenTK.Graphics.ES11.StencilOp,OpenTK.Graphics.ES11.StencilOp,OpenTK.Graphics.ES11.StencilOp)
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


#### TexCoordPointer
```csharp
OpenTK.Graphics.ES11.GL.TexCoordPointer(System.Int32,OpenTK.Graphics.ES11.TexCoordPointerType,System.Int32,System.IntPtr)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexCoordPointer``1
```csharp
OpenTK.Graphics.ES11.GL.TexCoordPointer``1(System.Int32,OpenTK.Graphics.ES11.TexCoordPointerType,System.Int32,``0@)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexEnv
```csharp
OpenTK.Graphics.ES11.GL.TexEnv(OpenTK.Graphics.ES11.TextureEnvTarget,OpenTK.Graphics.ES11.TextureEnvParameter,System.Int32*)
```
[requires: v1.0]
 Set texture environment parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a texture environment. May be TextureEnv, TextureFilterControl or PointSprite.
            |
|pname| 
            Specifies the symbolic name of a single-valued texture environment parameter. May be either TextureEnvMode, TextureLodBias, CombineRgb, CombineAlpha, Src0Rgb, Src1Rgb, Src2Rgb, Src0Alpha, Src1Alpha, Src2Alpha, Operand0Rgb, Operand1Rgb, Operand2Rgb, Operand0Alpha, Operand1Alpha, Operand2Alpha, RgbScale, AlphaScale, or CoordReplace.
            |
|@params|[length: pname] 
            Specifies a single symbolic constant, one of Add, AddSigned, Interpolate, Modulate, Decal, Blend, Replace, Subtract, Combine, Texture, Constant, PrimaryColor, Previous, SrcColor, OneMinusSrcColor, SrcAlpha, OneMinusSrcAlpha, a single boolean value for the point sprite texture coordinate replacement, a single floating-point value for the texture level-of-detail bias, or 1.0, 2.0, or 4.0 when specifying the RgbScale or AlphaScale.
            |


#### TexEnvx
```csharp
OpenTK.Graphics.ES11.GL.TexEnvx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexImage2D
```csharp
OpenTK.Graphics.ES11.GL.TexImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.TexImage2D``1(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,``0@)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.TexParameter(OpenTK.Graphics.ES11.TextureTarget,OpenTK.Graphics.ES11.TextureParameterName,System.Int32*)
```
[requires: v1.0]
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


#### TexParameterx
```csharp
OpenTK.Graphics.ES11.GL.TexParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexSubImage2D
```csharp
OpenTK.Graphics.ES11.GL.TexSubImage2D(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,System.IntPtr)
```
[requires: v1.0]
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
OpenTK.Graphics.ES11.GL.TexSubImage2D``1(OpenTK.Graphics.ES11.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES11.PixelFormat,OpenTK.Graphics.ES11.PixelType,``0@)
```
[requires: v1.0]
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


#### Translate
```csharp
OpenTK.Graphics.ES11.GL.Translate(System.Single,System.Single,System.Single)
```
[requires: v1.0]
 Multiply the current matrix by a translation matrix

|Parameter Name|Remarks|
|--------------|-------|
|x| 
            Specify the x, y, and z coordinates of a translation vector.
            |
|y| 
            Specify the x, y, and z coordinates of a translation vector.
            |
|z| 
            Specify the x, y, and z coordinates of a translation vector.
            |


#### Translatex
```csharp
OpenTK.Graphics.ES11.GL.Translatex(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### VertexPointer
```csharp
OpenTK.Graphics.ES11.GL.VertexPointer(System.Int32,OpenTK.Graphics.ES11.VertexPointerType,System.Int32,System.IntPtr)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### VertexPointer``1
```csharp
OpenTK.Graphics.ES11.GL.VertexPointer``1(System.Int32,OpenTK.Graphics.ES11.VertexPointerType,System.Int32,``0@)
```
[requires: v1.0]
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
|pointer|[length: size,type,stride] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### Viewport
```csharp
OpenTK.Graphics.ES11.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)
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




### Properties

#### SyncRoot
Returns a synchronization token unique for the GL class.

