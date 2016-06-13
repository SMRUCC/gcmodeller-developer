---
title: GL
---

# GL
_namespace: [OpenTK.Graphics.ES10](N-OpenTK.Graphics.ES10.html)_

Provides access to OpenGL ES 1.0 methods.

### Methods

#### ActiveTexture
```csharp
OpenTK.Graphics.ES10.GL.ActiveTexture(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture|
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least two. texture must be one of GL_TEXTUREi, where i ranges from 0 (GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1). The initial value is GL_TEXTURE0.
            |


#### AlphaFunc
```csharp
OpenTK.Graphics.ES10.GL.AlphaFunc(OpenTK.Graphics.ES10.All,System.Single)
```
[requires: v1.0 and 1.0]
 Specify the alpha test function

|Parameter Name|Remarks|
|--------------|-------|
|func|
            Specifies the alpha comparison function. Symbolic constants GL_NEVER, GL_LESS, GL_EQUAL, GL_LEQUAL, GL_GREATER, GL_NOTEQUAL, GL_GEQUAL, and GL_ALWAYS are accepted. The initial value is GL_ALWAYS.
            |
|ref|
            Specifies the reference value that incoming alpha values are compared to. This value is clamped to the range [0,1], where 0 represents the lowest possible alpha value and 1 the highest possible value. The initial reference value is 0.
            |


#### AlphaFuncx
```csharp
OpenTK.Graphics.ES10.GL.AlphaFuncx(OpenTK.Graphics.ES10.All,System.Int32)
```
[requires: v1.0 and 1.0]

#### BindTexture
```csharp
OpenTK.Graphics.ES10.GL.BindTexture(OpenTK.Graphics.ES10.All,System.UInt32)
```
[requires: v1.0 and 1.0]
 Bind a named texture to a texturing target

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target to which the texture is bound. Must be either GL_TEXTURE_1D, GL_TEXTURE_2D, GL_TEXTURE_3D, or GL_TEXTURE_1D_ARRAY, GL_TEXTURE_2D_ARRAY, GL_TEXTURE_RECTANGLE, GL_TEXTURE_CUBE_MAP, GL_TEXTURE_2D_MULTISAMPLE or GL_TEXTURE_2D_MULTISAMPLE_ARRAY.
            |
|texture|
            Specifies the name of a texture.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.ES10.GL.BlendFunc(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|sfactor|
            Specifies how the red, green, blue, and alpha source blending factors are computed. The initial value is GL_ONE.
            |
|dfactor|
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: GL_ZERO, GL_ONE, GL_SRC_COLOR, GL_ONE_MINUS_SRC_COLOR, GL_DST_COLOR, GL_ONE_MINUS_DST_COLOR, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, GL_DST_ALPHA, GL_ONE_MINUS_DST_ALPHA. GL_CONSTANT_COLOR, GL_ONE_MINUS_CONSTANT_COLOR, GL_CONSTANT_ALPHA, and GL_ONE_MINUS_CONSTANT_ALPHA. The initial value is GL_ZERO.
            |


#### Clear
```csharp
OpenTK.Graphics.ES10.GL.Clear(System.UInt32)
```
[requires: v1.0 and 1.0]
 Clear buffers to preset values

|Parameter Name|Remarks|
|--------------|-------|
|mask|
            Bitwise OR of masks that indicate the buffers to be cleared. The three masks are GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, and GL_STENCIL_BUFFER_BIT.
            |


#### ClearColor
```csharp
OpenTK.Graphics.ES10.GL.ClearColor(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Specify clear values for the color buffers

|Parameter Name|Remarks|
|--------------|-------|
|red|
            Specify the red, green, blue, and alpha values used when the color buffers are cleared. The initial values are all 0.
            |


#### ClearColorx
```csharp
OpenTK.Graphics.ES10.GL.ClearColorx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### ClearDepth
```csharp
OpenTK.Graphics.ES10.GL.ClearDepth(System.Single)
```
[requires: v1.0 and 1.0]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|depth|
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### ClearDepthx
```csharp
OpenTK.Graphics.ES10.GL.ClearDepthx(System.Int32)
```
[requires: v1.0 and 1.0]

#### ClearStencil
```csharp
OpenTK.Graphics.ES10.GL.ClearStencil(System.Int32)
```
[requires: v1.0 and 1.0]
 Specify the clear value for the stencil buffer

|Parameter Name|Remarks|
|--------------|-------|
|s|
            Specifies the index used when the stencil buffer is cleared. The initial value is 0.
            |


#### ClientActiveTexture
```csharp
OpenTK.Graphics.ES10.GL.ClientActiveTexture(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Select active texture unit

|Parameter Name|Remarks|
|--------------|-------|
|texture|
            Specifies which texture unit to make active. The number of texture units is implementation dependent, but must be at least two. texture must be one of GL_TEXTURE, where i ranges from 0 to the value of GL_MAX_TEXTURE_COORDS - 1, which is an implementation-dependent value. The initial value is GL_TEXTURE0.
            |


#### Color4
```csharp
OpenTK.Graphics.ES10.GL.Color4(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Set the current color

|Parameter Name|Remarks|
|--------------|-------|
|red|
            Specify new red, green, and blue values for the current color.
            |
|alpha|
            Specifies a new alpha value for the current color. Included only in the four-argument glColor4 commands.
            |


#### Color4x
```csharp
OpenTK.Graphics.ES10.GL.Color4x(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### ColorMask
```csharp
OpenTK.Graphics.ES10.GL.ColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: v1.0 and 1.0]
 Enable and disable writing of frame buffer color components

|Parameter Name|Remarks|
|--------------|-------|
|red|
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all GL_TRUE, indicating that the color components can be written.
            |


#### ColorPointer
```csharp
OpenTK.Graphics.ES10.GL.ColorPointer(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each color component in the array. Symbolic constants GL_BYTE, GL_UNSIGNED_BYTE, GL_SHORT, GL_UNSIGNED_SHORT, GL_INT, GL_UNSIGNED_INT, GL_FLOAT, and GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### ColorPointer``1
```csharp
OpenTK.Graphics.ES10.GL.ColorPointer``1(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each color component in the array. Symbolic constants GL_BYTE, GL_UNSIGNED_BYTE, GL_SHORT, GL_UNSIGNED_SHORT, GL_INT, GL_UNSIGNED_INT, GL_FLOAT, and GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive colors. If stride is 0, the colors are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### CompressedTexImage2D
```csharp
OpenTK.Graphics.ES10.GL.CompressedTexImage2D(OpenTK.Graphics.ES10.All,System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_PROXY_TEXTURE_2D, GL_TEXTURE_1D_ARRAY, GL_PROXY_TEXTURE_1D_ARRAY, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, or GL_PROXY_TEXTURE_CUBE_MAP.
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
            This value must be 0.
            |
|imageSize|
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexImage2D``1
```csharp
OpenTK.Graphics.ES10.GL.CompressedTexImage2D``1(OpenTK.Graphics.ES10.All,System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture image in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_PROXY_TEXTURE_2D, GL_TEXTURE_1D_ARRAY, GL_PROXY_TEXTURE_1D_ARRAY, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, or GL_PROXY_TEXTURE_CUBE_MAP.
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
            This value must be 0.
            |
|imageSize|
            Specifies the number of unsigned bytes of image data starting at the address specified by data.
            |
|data|
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage2D
```csharp
OpenTK.Graphics.ES10.GL.CompressedTexSubImage2D(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
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
|data|
            Specifies a pointer to the compressed image data in memory.
            |


#### CompressedTexSubImage2D``1
```csharp
OpenTK.Graphics.ES10.GL.CompressedTexSubImage2D``1(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture subimage in a compressed format

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
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
|data|
            Specifies a pointer to the compressed image data in memory.
            |


#### CopyTexImage2D
```csharp
OpenTK.Graphics.ES10.GL.CopyTexImage2D(OpenTK.Graphics.ES10.All,System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]
 Copy pixels into a 2D texture image

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
            |
|level|
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image.
            |
|internalformat|
            Specifies the internal format of the texture. Must be one of the following symbolic constants: GL_COMPRESSED_RED, GL_COMPRESSED_RG, GL_COMPRESSED_RGB, GL_COMPRESSED_RGBA. GL_COMPRESSED_SRGB, GL_COMPRESSED_SRGB_ALPHA. GL_DEPTH_COMPONENT, GL_DEPTH_COMPONENT16, GL_DEPTH_COMPONENT24, GL_DEPTH_COMPONENT32, GL_RED, GL_RG, GL_RGB, GL_R3_G3_B2, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, GL_RGBA16, GL_SRGB, GL_SRGB8, GL_SRGB_ALPHA, or GL_SRGB8_ALPHA8.
            |
|x|
            Specify the window coordinates of the lower left corner of the rectangular region of pixels to be copied.
            |
|width|
            Specifies the width of the texture image. Must be 0 or 2 sup n + 2 ( border ) for some integer .
            |
|height|
            Specifies the height of the texture image. Must be 0 or 2 sup m + 2 ( border ) for some integer .
            |
|border|
            Specifies the width of the border. Must be either 0 or 1.
            |


#### CopyTexSubImage2D
```csharp
OpenTK.Graphics.ES10.GL.CopyTexSubImage2D(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]
 Copy a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
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
|width|
            Specifies the width of the texture subimage.
            |
|height|
            Specifies the height of the texture subimage.
            |


#### CullFace
```csharp
OpenTK.Graphics.ES10.GL.CullFace(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify whether front- or back-facing facets can be culled

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies whether front- or back-facing facets are candidates for culling. Symbolic constants GL_FRONT, GL_BACK, and GL_FRONT_AND_BACK are accepted. The initial value is GL_BACK.
            |


#### DeleteTextures
```csharp
OpenTK.Graphics.ES10.GL.DeleteTextures(System.Int32,System.UInt32*)
```
[requires: v1.0 and 1.0]
 Delete named textures

|Parameter Name|Remarks|
|--------------|-------|
|n|
            Specifies the number of textures to be deleted.
            |
|textures|
            Specifies an array of textures to be deleted.
            |


#### DepthFunc
```csharp
OpenTK.Graphics.ES10.GL.DepthFunc(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify the value used for depth buffer comparisons

|Parameter Name|Remarks|
|--------------|-------|
|func|
            Specifies the depth comparison function. Symbolic constants GL_NEVER, GL_LESS, GL_EQUAL, GL_LEQUAL, GL_GREATER, GL_NOTEQUAL, GL_GEQUAL, and GL_ALWAYS are accepted. The initial value is GL_LESS.
            |


#### DepthMask
```csharp
OpenTK.Graphics.ES10.GL.DepthMask(System.Boolean)
```
[requires: v1.0 and 1.0]
 Enable or disable writing into the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|flag|
            Specifies whether the depth buffer is enabled for writing. If flag is GL_FALSE, depth buffer writing is disabled. Otherwise, it is enabled. Initially, depth buffer writing is enabled.
            |


#### DepthRange
```csharp
OpenTK.Graphics.ES10.GL.DepthRange(System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Specify mapping of depth values from normalized device coordinates to window coordinates

|Parameter Name|Remarks|
|--------------|-------|
|nearVal|
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|farVal|
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DepthRangex
```csharp
OpenTK.Graphics.ES10.GL.DepthRangex(System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### Disable
```csharp
OpenTK.Graphics.ES10.GL.Disable(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]

#### DisableClientState
```csharp
OpenTK.Graphics.ES10.GL.DisableClientState(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]

#### DrawArrays
```csharp
OpenTK.Graphics.ES10.GL.DrawArrays(OpenTK.Graphics.ES10.All,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies what kind of primitives to render. Symbolic constants GL_POINTS, GL_LINE_STRIP, GL_LINE_LOOP, GL_LINES, GL_LINE_STRIP_ADJACENCY, GL_LINES_ADJACENCY, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN, GL_TRIANGLES, GL_TRIANGLE_STRIP_ADJACENCY, GL_TRIANGLES_ADJACENCY and GL_PATCHES are accepted.
            |
|first|
            Specifies the starting index in the enabled arrays.
            |
|count|
            Specifies the number of indices to be rendered.
            |


#### DrawElements
```csharp
OpenTK.Graphics.ES10.GL.DrawElements(OpenTK.Graphics.ES10.All,System.Int32,OpenTK.Graphics.ES10.All,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies what kind of primitives to render. Symbolic constants GL_POINTS, GL_LINE_STRIP, GL_LINE_LOOP, GL_LINES, GL_LINE_STRIP_ADJACENCY, GL_LINES_ADJACENCY, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN, GL_TRIANGLES, GL_TRIANGLE_STRIP_ADJACENCY, GL_TRIANGLES_ADJACENCY and GL_PATCHES are accepted.
            |
|count|
            Specifies the number of elements to be rendered.
            |
|type|
            Specifies the type of the values in indices. Must be one of GL_UNSIGNED_BYTE, GL_UNSIGNED_SHORT, or GL_UNSIGNED_INT.
            |
|indices|
            Specifies a pointer to the location where the indices are stored.
            |


#### DrawElements``1
```csharp
OpenTK.Graphics.ES10.GL.DrawElements``1(OpenTK.Graphics.ES10.All,System.Int32,OpenTK.Graphics.ES10.All,``0@)
```
[requires: v1.0 and 1.0]
 Render primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies what kind of primitives to render. Symbolic constants GL_POINTS, GL_LINE_STRIP, GL_LINE_LOOP, GL_LINES, GL_LINE_STRIP_ADJACENCY, GL_LINES_ADJACENCY, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN, GL_TRIANGLES, GL_TRIANGLE_STRIP_ADJACENCY, GL_TRIANGLES_ADJACENCY and GL_PATCHES are accepted.
            |
|count|
            Specifies the number of elements to be rendered.
            |
|type|
            Specifies the type of the values in indices. Must be one of GL_UNSIGNED_BYTE, GL_UNSIGNED_SHORT, or GL_UNSIGNED_INT.
            |
|indices|
            Specifies a pointer to the location where the indices are stored.
            |


#### Enable
```csharp
OpenTK.Graphics.ES10.GL.Enable(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Enable or disable server-side GL capabilities

|Parameter Name|Remarks|
|--------------|-------|
|cap|
            Specifies a symbolic constant indicating a GL capability.
            |


#### EnableClientState
```csharp
OpenTK.Graphics.ES10.GL.EnableClientState(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Enable or disable client-side capability

|Parameter Name|Remarks|
|--------------|-------|
|cap|
            Specifies the capability to enable. Symbolic constants GL_COLOR_ARRAY, GL_EDGE_FLAG_ARRAY, GL_FOG_COORD_ARRAY, GL_INDEX_ARRAY, GL_NORMAL_ARRAY, GL_SECONDARY_COLOR_ARRAY, GL_TEXTURE_COORD_ARRAY, and GL_VERTEX_ARRAY are accepted.
            |


#### Finish
```csharp
OpenTK.Graphics.ES10.GL.Finish
```
[requires: v1.0 and 1.0]
 Block until all GL execution is complete

#### Flush
```csharp
OpenTK.Graphics.ES10.GL.Flush
```
[requires: v1.0 and 1.0]
 Force execution of GL commands in finite time

#### Fog
```csharp
OpenTK.Graphics.ES10.GL.Fog(OpenTK.Graphics.ES10.All,System.Single*)
```
[requires: v1.0 and 1.0]
 Specify fog parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname|
            Specifies a single-valued fog parameter. GL_FOG_MODE, GL_FOG_DENSITY, GL_FOG_START, GL_FOG_END, GL_FOG_INDEX, and GL_FOG_COORD_SRC are accepted.
            |
|param|
            Specifies the value that pname will be set to.
            |


#### Fogx
```csharp
OpenTK.Graphics.ES10.GL.Fogx(OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### FrontFace
```csharp
OpenTK.Graphics.ES10.GL.FrontFace(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Define front- and back-facing polygons

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies the orientation of front-facing polygons. GL_CW and GL_CCW are accepted. The initial value is GL_CCW.
            |


#### Frustum
```csharp
OpenTK.Graphics.ES10.GL.Frustum(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix by a perspective matrix

|Parameter Name|Remarks|
|--------------|-------|
|left|
            Specify the coordinates for the left and right vertical clipping planes.
            |
|bottom|
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|nearVal|
            Specify the distances to the near and far depth clipping planes. Both distances must be positive.
            |


#### Frustumx
```csharp
OpenTK.Graphics.ES10.GL.Frustumx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### GenTextures
```csharp
OpenTK.Graphics.ES10.GL.GenTextures(System.Int32,System.UInt32*)
```
[requires: v1.0 and 1.0]
 Generate texture names

|Parameter Name|Remarks|
|--------------|-------|
|n|
            Specifies the number of texture names to be generated.
            |
|textures|
            Specifies an array in which the generated texture names are stored.
            |


#### GetError
```csharp
OpenTK.Graphics.ES10.GL.GetError
```
[requires: v1.0 and 1.0]
 Return error information

#### GetInteger
```csharp
OpenTK.Graphics.ES10.GL.GetInteger(OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### GetString
```csharp
OpenTK.Graphics.ES10.GL.GetString(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Return a string describing the current GL connection

|Parameter Name|Remarks|
|--------------|-------|
|name|
            Specifies a symbolic constant, one of GL_VENDOR, GL_RENDERER, GL_VERSION, or GL_SHADING_LANGUAGE_VERSION. Additionally, glGetStringi accepts the GL_EXTENSIONS token.
            |
|index|
            For glGetStringi, specifies the index of the string to return.
            |


#### Hint
```csharp
OpenTK.Graphics.ES10.GL.Hint(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify implementation-specific hints

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies a symbolic constant indicating the behavior to be controlled. GL_LINE_SMOOTH_HINT, GL_POLYGON_SMOOTH_HINT, GL_TEXTURE_COMPRESSION_HINT, and GL_FRAGMENT_SHADER_DERIVATIVE_HINT are accepted.
            |
|mode|
            Specifies a symbolic constant indicating the desired behavior. GL_FASTEST, GL_NICEST, and GL_DONT_CARE are accepted.
            |


#### Light
```csharp
OpenTK.Graphics.ES10.GL.Light(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Single*)
```
[requires: v1.0 and 1.0]
 Set light source parameters

|Parameter Name|Remarks|
|--------------|-------|
|light|
            Specifies a light. The number of lights depends on the implementation, but at least eight lights are supported. They are identified by symbolic names of the form GL_LIGHT , where i ranges from 0 to the value of GL_MAX_LIGHTS - 1.
            |
|pname|
            Specifies a single-valued light source parameter for light. GL_SPOT_EXPONENT, GL_SPOT_CUTOFF, GL_CONSTANT_ATTENUATION, GL_LINEAR_ATTENUATION, and GL_QUADRATIC_ATTENUATION are accepted.
            |
|param|
            Specifies the value that parameter pname of light source light will be set to.
            |


#### LightModel
```csharp
OpenTK.Graphics.ES10.GL.LightModel(OpenTK.Graphics.ES10.All,System.Single*)
```
[requires: v1.0 and 1.0]
 Set the lighting model parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname|
            Specifies a single-valued lighting model parameter. GL_LIGHT_MODEL_LOCAL_VIEWER, GL_LIGHT_MODEL_COLOR_CONTROL, and GL_LIGHT_MODEL_TWO_SIDE are accepted.
            |
|param|
            Specifies the value that param will be set to.
            |


#### LightModelx
```csharp
OpenTK.Graphics.ES10.GL.LightModelx(OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### Lightx
```csharp
OpenTK.Graphics.ES10.GL.Lightx(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### LineWidth
```csharp
OpenTK.Graphics.ES10.GL.LineWidth(System.Single)
```
[requires: v1.0 and 1.0]
 Specify the width of rasterized lines

|Parameter Name|Remarks|
|--------------|-------|
|width|
            Specifies the width of rasterized lines. The initial value is 1.
            |


#### LineWidthx
```csharp
OpenTK.Graphics.ES10.GL.LineWidthx(System.Int32)
```
[requires: v1.0 and 1.0]

#### LoadIdentity
```csharp
OpenTK.Graphics.ES10.GL.LoadIdentity
```
[requires: v1.0 and 1.0]
 Replace the current matrix with the identity matrix

#### LoadMatrix
```csharp
OpenTK.Graphics.ES10.GL.LoadMatrix(System.Single*)
```
[requires: v1.0 and 1.0]
 Replace the current matrix with the specified matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|
            Specifies a pointer to 16 consecutive values, which are used as the elements of a 4 times 4 column-major matrix.
            |


#### LoadMatrixx
```csharp
OpenTK.Graphics.ES10.GL.LoadMatrixx(System.Int32*)
```
[requires: v1.0 and 1.0]

#### LogicOp
```csharp
OpenTK.Graphics.ES10.GL.LogicOp(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify a logical pixel operation for rendering

|Parameter Name|Remarks|
|--------------|-------|
|opcode|
            Specifies a symbolic constant that selects a logical operation. The following symbols are accepted: GL_CLEAR, GL_SET, GL_COPY, GL_COPY_INVERTED, GL_NOOP, GL_INVERT, GL_AND, GL_NAND, GL_OR, GL_NOR, GL_XOR, GL_EQUIV, GL_AND_REVERSE, GL_AND_INVERTED, GL_OR_REVERSE, and GL_OR_INVERTED. The initial value is GL_COPY.
            |


#### Material
```csharp
OpenTK.Graphics.ES10.GL.Material(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Single*)
```
[requires: v1.0 and 1.0]
 Specify material parameters for the lighting model

|Parameter Name|Remarks|
|--------------|-------|
|face|
            Specifies which face or faces are being updated. Must be one of GL_FRONT, GL_BACK, or GL_FRONT_AND_BACK.
            |
|pname|
            Specifies the single-valued material parameter of the face or faces that is being updated. Must be GL_SHININESS.
            |
|param|
            Specifies the value that parameter GL_SHININESS will be set to.
            |


#### Materialx
```csharp
OpenTK.Graphics.ES10.GL.Materialx(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### MatrixMode
```csharp
OpenTK.Graphics.ES10.GL.MatrixMode(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Specify which matrix is the current matrix

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies which matrix stack is the target for subsequent matrix operations. Three values are accepted: GL_MODELVIEW, GL_PROJECTION, and GL_TEXTURE. The initial value is GL_MODELVIEW. Additionally, if the ARB_imaging extension is supported, GL_COLOR is also accepted.
            |


#### MultiTexCoord4
```csharp
OpenTK.Graphics.ES10.GL.MultiTexCoord4(OpenTK.Graphics.ES10.All,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of GL_TEXTURE, where i ranges from 0 to GL_MAX_TEXTURE_COORDS - 1, which is an implementation-dependent value.
            |
|s|
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord4x
```csharp
OpenTK.Graphics.ES10.GL.MultiTexCoord4x(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### MultMatrix
```csharp
OpenTK.Graphics.ES10.GL.MultMatrix(System.Single*)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix with the specified matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|
            Points to 16 consecutive values that are used as the elements of a 4 times 4 column-major matrix.
            |


#### MultMatrixx
```csharp
OpenTK.Graphics.ES10.GL.MultMatrixx(System.Int32*)
```
[requires: v1.0 and 1.0]

#### Normal3
```csharp
OpenTK.Graphics.ES10.GL.Normal3(System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Set the current normal vector

|Parameter Name|Remarks|
|--------------|-------|
|nx|
            Specify the , , and coordinates of the new current normal. The initial value of the current normal is the unit vector, (0, 0, 1).
            |


#### Normal3x
```csharp
OpenTK.Graphics.ES10.GL.Normal3x(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### NormalPointer
```csharp
OpenTK.Graphics.ES10.GL.NormalPointer(OpenTK.Graphics.ES10.All,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type|
            Specifies the data type of each coordinate in the array. Symbolic constants GL_BYTE, GL_SHORT, GL_INT, GL_FLOAT, and GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### NormalPointer``1
```csharp
OpenTK.Graphics.ES10.GL.NormalPointer``1(OpenTK.Graphics.ES10.All,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type|
            Specifies the data type of each coordinate in the array. Symbolic constants GL_BYTE, GL_SHORT, GL_INT, GL_FLOAT, and GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive normals. If stride is 0, the normals are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### Ortho
```csharp
OpenTK.Graphics.ES10.GL.Ortho(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix with an orthographic matrix

|Parameter Name|Remarks|
|--------------|-------|
|left|
            Specify the coordinates for the left and right vertical clipping planes.
            |
|bottom|
            Specify the coordinates for the bottom and top horizontal clipping planes.
            |
|nearVal|
            Specify the distances to the nearer and farther depth clipping planes. These values are negative if the plane is to be behind the viewer.
            |


#### Orthox
```csharp
OpenTK.Graphics.ES10.GL.Orthox(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### PixelStore
```csharp
OpenTK.Graphics.ES10.GL.PixelStore(OpenTK.Graphics.ES10.All,System.Int32)
```
[requires: v1.0 and 1.0]
 Set pixel storage modes

|Parameter Name|Remarks|
|--------------|-------|
|pname|
            Specifies the symbolic name of the parameter to be set. Six values affect the packing of pixel data into memory: GL_PACK_SWAP_BYTES, GL_PACK_LSB_FIRST, GL_PACK_ROW_LENGTH, GL_PACK_IMAGE_HEIGHT, GL_PACK_SKIP_PIXELS, GL_PACK_SKIP_ROWS, GL_PACK_SKIP_IMAGES, and GL_PACK_ALIGNMENT. Six more affect the unpacking of pixel data from memory: GL_UNPACK_SWAP_BYTES, GL_UNPACK_LSB_FIRST, GL_UNPACK_ROW_LENGTH, GL_UNPACK_IMAGE_HEIGHT, GL_UNPACK_SKIP_PIXELS, GL_UNPACK_SKIP_ROWS, GL_UNPACK_SKIP_IMAGES, and GL_UNPACK_ALIGNMENT.
            |
|param|
            Specifies the value that pname is set to.
            |


#### PointSize
```csharp
OpenTK.Graphics.ES10.GL.PointSize(System.Single)
```
[requires: v1.0 and 1.0]
 Specify the diameter of rasterized points

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the diameter of rasterized points. The initial value is 1.
            |


#### PointSizex
```csharp
OpenTK.Graphics.ES10.GL.PointSizex(System.Int32)
```
[requires: v1.0 and 1.0]

#### PolygonOffset
```csharp
OpenTK.Graphics.ES10.GL.PolygonOffset(System.Single,System.Single)
```
[requires: v1.0 and 1.0]
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
OpenTK.Graphics.ES10.GL.PolygonOffsetx(System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### PopMatrix
```csharp
OpenTK.Graphics.ES10.GL.PopMatrix
```
[requires: v1.0 and 1.0]

#### PushMatrix
```csharp
OpenTK.Graphics.ES10.GL.PushMatrix
```
[requires: v1.0 and 1.0]
 Push and pop the current matrix stack

#### ReadPixels
```csharp
OpenTK.Graphics.ES10.GL.ReadPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Read a block of pixels from the frame buffer

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|width|
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|format|
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_STENCIL_INDEX, GL_DEPTH_COMPONENT, GL_DEPTH_STENCIL, GL_RED, GL_GREEN, GL_BLUE, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. Must be one of GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_HALF_FLOAT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, GL_UNSIGNED_INT_2_10_10_10_REV, GL_UNSIGNED_INT_24_8, GL_UNSIGNED_INT_10F_11F_11F_REV, GL_UNSIGNED_INT_5_9_9_9_REV, or GL_FLOAT_32_UNSIGNED_INT_24_8_REV.
            |
|data|
            Returns the pixel data.
            |


#### ReadPixels``1
```csharp
OpenTK.Graphics.ES10.GL.ReadPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,``0@)
```
[requires: v1.0 and 1.0]
 Read a block of pixels from the frame buffer

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify the window coordinates of the first pixel that is read from the frame buffer. This location is the lower left corner of a rectangular block of pixels.
            |
|width|
            Specify the dimensions of the pixel rectangle. width and height of one correspond to a single pixel.
            |
|format|
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_STENCIL_INDEX, GL_DEPTH_COMPONENT, GL_DEPTH_STENCIL, GL_RED, GL_GREEN, GL_BLUE, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. Must be one of GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_HALF_FLOAT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, GL_UNSIGNED_INT_2_10_10_10_REV, GL_UNSIGNED_INT_24_8, GL_UNSIGNED_INT_10F_11F_11F_REV, GL_UNSIGNED_INT_5_9_9_9_REV, or GL_FLOAT_32_UNSIGNED_INT_24_8_REV.
            |
|data|
            Returns the pixel data.
            |


#### Rotate
```csharp
OpenTK.Graphics.ES10.GL.Rotate(System.Single,System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix by a rotation matrix

|Parameter Name|Remarks|
|--------------|-------|
|angle|
            Specifies the angle of rotation, in degrees.
            |
|x|
            Specify the x, y, and z coordinates of a vector, respectively.
            |


#### Rotatex
```csharp
OpenTK.Graphics.ES10.GL.Rotatex(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### SampleCoverage
```csharp
OpenTK.Graphics.ES10.GL.SampleCoverage(System.Single,System.Boolean)
```
[requires: v1.0 and 1.0]
 Specify multisample coverage parameters

|Parameter Name|Remarks|
|--------------|-------|
|value|
            Specify a single floating-point sample coverage value. The value is clamped to the range [0 ,1]. The initial value is 1.0.
            |
|invert|
            Specify a single boolean value representing if the coverage masks should be inverted. GL_TRUE and GL_FALSE are accepted. The initial value is GL_FALSE.
            |


#### SampleCoveragex
```csharp
OpenTK.Graphics.ES10.GL.SampleCoveragex(System.Int32,System.Boolean)
```
[requires: v1.0 and 1.0]

#### Scale
```csharp
OpenTK.Graphics.ES10.GL.Scale(System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix by a general scaling matrix

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify scale factors along the x, y, and z axes, respectively.
            |


#### Scalex
```csharp
OpenTK.Graphics.ES10.GL.Scalex(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### Scissor
```csharp
OpenTK.Graphics.ES10.GL.Scissor(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]
 Define the scissor box

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify the lower left corner of the scissor box. Initially (0, 0).
            |
|width|
            Specify the width and height of the scissor box. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |


#### ShadeModel
```csharp
OpenTK.Graphics.ES10.GL.ShadeModel(OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Select flat or smooth shading

|Parameter Name|Remarks|
|--------------|-------|
|mode|
            Specifies a symbolic value representing a shading technique. Accepted values are GL_FLAT and GL_SMOOTH. The initial value is GL_SMOOTH.
            |


#### StencilFunc
```csharp
OpenTK.Graphics.ES10.GL.StencilFunc(OpenTK.Graphics.ES10.All,System.Int32,System.UInt32)
```
[requires: v1.0 and 1.0]
 Set front and back function and reference value for stencil testing

|Parameter Name|Remarks|
|--------------|-------|
|func|
            Specifies the test function. Eight symbolic constants are valid: GL_NEVER, GL_LESS, GL_LEQUAL, GL_GREATER, GL_GEQUAL, GL_EQUAL, GL_NOTEQUAL, and GL_ALWAYS. The initial value is GL_ALWAYS.
            |
|ref|
            Specifies the reference value for the stencil test. ref is clamped to the range [0, 2 sup n - 1], where is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask|
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilMask
```csharp
OpenTK.Graphics.ES10.GL.StencilMask(System.UInt32)
```
[requires: v1.0 and 1.0]
 Control the front and back writing of individual bits in the stencil planes

|Parameter Name|Remarks|
|--------------|-------|
|mask|
            Specifies a bit mask to enable and disable writing of individual bits in the stencil planes. Initially, the mask is all 1's.
            |


#### StencilOp
```csharp
OpenTK.Graphics.ES10.GL.StencilOp(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All)
```
[requires: v1.0 and 1.0]
 Set front and back stencil test actions

|Parameter Name|Remarks|
|--------------|-------|
|sfail|
            Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: GL_KEEP, GL_ZERO, GL_REPLACE, GL_INCR, GL_INCR_WRAP, GL_DECR, GL_DECR_WRAP, and GL_INVERT. The initial value is GL_KEEP.
            |
|dpfail|
            Specifies the stencil action when the stencil test passes, but the depth test fails. dpfail accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
            |
|dppass|
            Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. dppass accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
            |


#### TexCoordPointer
```csharp
OpenTK.Graphics.ES10.GL.TexCoordPointer(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each texture coordinate. Symbolic constants GL_SHORT, GL_INT, GL_FLOAT, or GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive texture coordinate sets. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexCoordPointer``1
```csharp
OpenTK.Graphics.ES10.GL.TexCoordPointer``1(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each texture coordinate. Symbolic constants GL_SHORT, GL_INT, GL_FLOAT, or GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive texture coordinate sets. If stride is 0, the array elements are understood to be tightly packed. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexEnv
```csharp
OpenTK.Graphics.ES10.GL.TexEnv(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Single*)
```
[requires: v1.0 and 1.0]
 Set texture environment parameters

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies a texture environment. May be GL_TEXTURE_ENV, GL_TEXTURE_FILTER_CONTROL or GL_POINT_SPRITE.
            |
|pname|
            Specifies the symbolic name of a single-valued texture environment parameter. May be either GL_TEXTURE_ENV_MODE, GL_TEXTURE_LOD_BIAS, GL_COMBINE_RGB, GL_COMBINE_ALPHA, GL_SRC0_RGB, GL_SRC1_RGB, GL_SRC2_RGB, GL_SRC0_ALPHA, GL_SRC1_ALPHA, GL_SRC2_ALPHA, GL_OPERAND0_RGB, GL_OPERAND1_RGB, GL_OPERAND2_RGB, GL_OPERAND0_ALPHA, GL_OPERAND1_ALPHA, GL_OPERAND2_ALPHA, GL_RGB_SCALE, GL_ALPHA_SCALE, or GL_COORD_REPLACE.
            |
|param|
            Specifies a single symbolic constant, one of GL_ADD, GL_ADD_SIGNED, GL_INTERPOLATE, GL_MODULATE, GL_DECAL, GL_BLEND, GL_REPLACE, GL_SUBTRACT, GL_COMBINE, GL_TEXTURE, GL_CONSTANT, GL_PRIMARY_COLOR, GL_PREVIOUS, GL_SRC_COLOR, GL_ONE_MINUS_SRC_COLOR, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, a single boolean value for the point sprite texture coordinate replacement, a single floating-point value for the texture level-of-detail bias, or 1.0, 2.0, or 4.0 when specifying the GL_RGB_SCALE or GL_ALPHA_SCALE.
            |


#### TexEnvx
```csharp
OpenTK.Graphics.ES10.GL.TexEnvx(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Int32*)
```
[requires: v1.0 and 1.0]

#### TexImage2D
```csharp
OpenTK.Graphics.ES10.GL.TexImage2D(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_PROXY_TEXTURE_2D, GL_TEXTURE_1D_ARRAY, GL_PROXY_TEXTURE_1D_ARRAY, GL_TEXTURE_RECTANGLE, GL_PROXY_TEXTURE_RECTANGLE, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, or GL_PROXY_TEXTURE_CUBE_MAP.
            |
|level|
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. If target is GL_TEXTURE_RECTANGLE or GL_PROXY_TEXTURE_RECTANGLE, level must be 0.
            |
|internalFormat|
            Specifies the number of color components in the texture. Must be one of the following symbolic constants: GL_COMPRESSED_RED, GL_COMPRESSED_RG, GL_COMPRESSED_RGB, GL_COMPRESSED_RGBA, GL_COMPRESSED_SRGB, GL_COMPRESSED_SRGB_ALPHA, GL_DEPTH_COMPONENT, GL_DEPTH_COMPONENT16, GL_DEPTH_COMPONENT24, GL_DEPTH_COMPONENT32, GL_R3_G3_B2, GL_RED, GL_RG, GL_RGB, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, GL_RGBA16, GL_SRGB, GL_SRGB8, GL_SRGB_ALPHA, or GL_SRGB8_ALPHA8.
            |
|width|
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide.
            |
|height|
            Specifies the height of the texture image, or the number of layers in a texture array, in the case of the GL_TEXTURE_1D_ARRAY and GL_PROXY_TEXTURE_1D_ARRAY targets. All implementations support 2D texture images that are at least 1024 texels high, and texture arrays that are at least 256 layers deep.
            |
|border|
            This value must be 0.
            |
|format|
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_RED, GL_RG, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. The following symbolic values are accepted: GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV.
            |
|data|
            Specifies a pointer to the image data in memory.
            |


#### TexImage2D``1
```csharp
OpenTK.Graphics.ES10.GL.TexImage2D``1(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,``0@)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture image

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_PROXY_TEXTURE_2D, GL_TEXTURE_1D_ARRAY, GL_PROXY_TEXTURE_1D_ARRAY, GL_TEXTURE_RECTANGLE, GL_PROXY_TEXTURE_RECTANGLE, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, or GL_PROXY_TEXTURE_CUBE_MAP.
            |
|level|
            Specifies the level-of-detail number. Level 0 is the base image level. Level n is the nth mipmap reduction image. If target is GL_TEXTURE_RECTANGLE or GL_PROXY_TEXTURE_RECTANGLE, level must be 0.
            |
|internalFormat|
            Specifies the number of color components in the texture. Must be one of the following symbolic constants: GL_COMPRESSED_RED, GL_COMPRESSED_RG, GL_COMPRESSED_RGB, GL_COMPRESSED_RGBA, GL_COMPRESSED_SRGB, GL_COMPRESSED_SRGB_ALPHA, GL_DEPTH_COMPONENT, GL_DEPTH_COMPONENT16, GL_DEPTH_COMPONENT24, GL_DEPTH_COMPONENT32, GL_R3_G3_B2, GL_RED, GL_RG, GL_RGB, GL_RGB4, GL_RGB5, GL_RGB8, GL_RGB10, GL_RGB12, GL_RGB16, GL_RGBA, GL_RGBA2, GL_RGBA4, GL_RGB5_A1, GL_RGBA8, GL_RGB10_A2, GL_RGBA12, GL_RGBA16, GL_SRGB, GL_SRGB8, GL_SRGB_ALPHA, or GL_SRGB8_ALPHA8.
            |
|width|
            Specifies the width of the texture image. All implementations support texture images that are at least 1024 texels wide.
            |
|height|
            Specifies the height of the texture image, or the number of layers in a texture array, in the case of the GL_TEXTURE_1D_ARRAY and GL_PROXY_TEXTURE_1D_ARRAY targets. All implementations support 2D texture images that are at least 1024 texels high, and texture arrays that are at least 256 layers deep.
            |
|border|
            This value must be 0.
            |
|format|
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_RED, GL_RG, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. The following symbolic values are accepted: GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV.
            |
|data|
            Specifies a pointer to the image data in memory.
            |


#### TexParameter
```csharp
OpenTK.Graphics.ES10.GL.TexParameter(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Single)
```
[requires: v1.0 and 1.0]
 Set texture parameters

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture, which must be either GL_TEXTURE_1D, GL_TEXTURE_2D, GL_TEXTURE_3D, GL_TEXTURE_1D_ARRAY, GL_TEXTURE_2D_ARRAY, GL_TEXTURE_RECTANGLE, or GL_TEXTURE_CUBE_MAP.
            |
|pname|
            Specifies the symbolic name of a single-valued texture parameter. pname can be one of the following: GL_TEXTURE_BASE_LEVEL, GL_TEXTURE_COMPARE_FUNC, GL_TEXTURE_COMPARE_MODE, GL_TEXTURE_LOD_BIAS, GL_TEXTURE_MIN_FILTER, GL_TEXTURE_MAG_FILTER, GL_TEXTURE_MIN_LOD, GL_TEXTURE_MAX_LOD, GL_TEXTURE_MAX_LEVEL, GL_TEXTURE_SWIZZLE_R, GL_TEXTURE_SWIZZLE_G, GL_TEXTURE_SWIZZLE_B, GL_TEXTURE_SWIZZLE_A, GL_TEXTURE_WRAP_S, GL_TEXTURE_WRAP_T, or GL_TEXTURE_WRAP_R.
            |
|param|
            Specifies the value of pname.
            |


#### TexParameterx
```csharp
OpenTK.Graphics.ES10.GL.TexParameterx(OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.Int32)
```
[requires: v1.0 and 1.0]

#### TexSubImage2D
```csharp
OpenTK.Graphics.ES10.GL.TexSubImage2D(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_RED, GL_RG, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. The following symbolic values are accepted: GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV.
            |
|data|
            Specifies a pointer to the image data in memory.
            |


#### TexSubImage2D``1
```csharp
OpenTK.Graphics.ES10.GL.TexSubImage2D``1(OpenTK.Graphics.ES10.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES10.All,OpenTK.Graphics.ES10.All,``0@)
```
[requires: v1.0 and 1.0]
 Specify a two-dimensional texture subimage

|Parameter Name|Remarks|
|--------------|-------|
|target|
            Specifies the target texture. Must be GL_TEXTURE_2D, GL_TEXTURE_CUBE_MAP_POSITIVE_X, GL_TEXTURE_CUBE_MAP_NEGATIVE_X, GL_TEXTURE_CUBE_MAP_POSITIVE_Y, GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, GL_TEXTURE_CUBE_MAP_POSITIVE_Z, or GL_TEXTURE_CUBE_MAP_NEGATIVE_Z.
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
            Specifies the format of the pixel data. The following symbolic values are accepted: GL_RED, GL_RG, GL_RGB, GL_BGR, GL_RGBA, and GL_BGRA.
            |
|type|
            Specifies the data type of the pixel data. The following symbolic values are accepted: GL_UNSIGNED_BYTE, GL_BYTE, GL_UNSIGNED_SHORT, GL_SHORT, GL_UNSIGNED_INT, GL_INT, GL_FLOAT, GL_UNSIGNED_BYTE_3_3_2, GL_UNSIGNED_BYTE_2_3_3_REV, GL_UNSIGNED_SHORT_5_6_5, GL_UNSIGNED_SHORT_5_6_5_REV, GL_UNSIGNED_SHORT_4_4_4_4, GL_UNSIGNED_SHORT_4_4_4_4_REV, GL_UNSIGNED_SHORT_5_5_5_1, GL_UNSIGNED_SHORT_1_5_5_5_REV, GL_UNSIGNED_INT_8_8_8_8, GL_UNSIGNED_INT_8_8_8_8_REV, GL_UNSIGNED_INT_10_10_10_2, and GL_UNSIGNED_INT_2_10_10_10_REV.
            |
|data|
            Specifies a pointer to the image data in memory.
            |


#### Translate
```csharp
OpenTK.Graphics.ES10.GL.Translate(System.Single,System.Single,System.Single)
```
[requires: v1.0 and 1.0]
 Multiply the current matrix by a translation matrix

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify the x, y, and z coordinates of a translation vector.
            |


#### Translatex
```csharp
OpenTK.Graphics.ES10.GL.Translatex(System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]

#### VertexPointer
```csharp
OpenTK.Graphics.ES10.GL.VertexPointer(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,System.IntPtr)
```
[requires: v1.0 and 1.0]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each coordinate in the array. Symbolic constants GL_SHORT, GL_INT, GL_FLOAT, or GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive vertices. If stride is 0, the vertices are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### VertexPointer``1
```csharp
OpenTK.Graphics.ES10.GL.VertexPointer``1(System.Int32,OpenTK.Graphics.ES10.All,System.Int32,``0@)
```
[requires: v1.0 and 1.0]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size|
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type|
            Specifies the data type of each coordinate in the array. Symbolic constants GL_SHORT, GL_INT, GL_FLOAT, or GL_DOUBLE are accepted. The initial value is GL_FLOAT.
            |
|stride|
            Specifies the byte offset between consecutive vertices. If stride is 0, the vertices are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### Viewport
```csharp
OpenTK.Graphics.ES10.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: v1.0 and 1.0]
 Set the viewport

|Parameter Name|Remarks|
|--------------|-------|
|x|
            Specify the lower left corner of the viewport rectangle, in pixels. The initial value is (0,0).
            |
|width|
            Specify the width and height of the viewport. When a GL context is first attached to a window, width and height are set to the dimensions of that window.
            |





