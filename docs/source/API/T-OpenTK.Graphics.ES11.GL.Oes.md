---
title: Oes
---

# Oes
_namespace: [OpenTK.Graphics.ES11.GL](N-OpenTK.Graphics.ES11.GL.html)_



### Methods

#### Accumx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Accumx(OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|value|-|


#### AlphaFuncx
```csharp
OpenTK.Graphics.ES11.GL.Oes.AlphaFuncx(OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|
|@ref|-|


#### BindFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.BindFramebuffer(OpenTK.Graphics.ES11.All,System.UInt32)
```
[requires: OES_framebuffer_object]
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
OpenTK.Graphics.ES11.GL.Oes.BindRenderbuffer(OpenTK.Graphics.ES11.All,System.UInt32)
```
[requires: OES_framebuffer_object]
 Bind a named renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which the renderbuffer object is bound. The symbolic constant must be Renderbuffer.
            |
|renderbuffer| 
            Specifies the name of a renderbuffer object.
            |


#### BindVertexArray
```csharp
OpenTK.Graphics.ES11.GL.Oes.BindVertexArray(System.UInt32)
```
[requires: OES_vertex_array_object]
 Bind a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the name of the vertex array to bind.
            |


#### Bitmapx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Bitmapx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Byte*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|width|-|
|height|-|
|xorig|-|
|yorig|-|
|xmove|-|
|ymove|-|
|bitmap|[length: width,height]|


#### BlendColorx
```csharp
OpenTK.Graphics.ES11.GL.Oes.BlendColorx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### BlendEquation
```csharp
OpenTK.Graphics.ES11.GL.Oes.BlendEquation(OpenTK.Graphics.ES11.All)
```
[requires: OES_blend_subtract]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.ES11.GL.Oes.BlendEquationSeparate(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All)
```
[requires: OES_blend_equation_separate]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.ES11.GL.Oes.BlendFuncSeparate(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All)
```
[requires: OES_blend_func_separate]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|srcRGB| 
            Specifies how the red, green, and blue blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
|dstRGB| 
            Specifies how the red, green, and blue destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |
|srcAlpha| 
            Specified how the alpha source blending factor is computed.  The same symbolic constants are accepted as for srcRGB. The initial value is One.
            |
|dstAlpha| 
            Specified how the alpha destination blending factor is computed.  The same symbolic constants are accepted as for dstRGB. The initial value is Zero.
            |


#### CheckFramebufferStatus
```csharp
OpenTK.Graphics.ES11.GL.Oes.CheckFramebufferStatus(OpenTK.Graphics.ES11.All)
```
[requires: OES_framebuffer_object]
 Return the framebuffer completeness status of a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target framebuffer object. The symbolic constant must be Framebuffer.
            |


#### ClearAccumx
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClearAccumx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ClearColorx
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClearColorx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ClearDepth
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClearDepth(System.Single)
```
[requires: OES_single_precision]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|depth| 
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### ClearDepthx
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClearDepthx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|depth|-|


#### ClipPlane
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClipPlane(OpenTK.Graphics.ES11.All,System.Single*)
```
[requires: OES_single_precision]
 Specify a plane against which all geometry is clipped

|Parameter Name|Remarks|
|--------------|-------|
|plane| 
            Specifies which clipping plane is being positioned. Symbolic names of the form ClipPlanei, where i is an integer between 0 and MaxClipPlanes - 1, are accepted.
            |
|equation|[length: 4] 
            Specifies the address of an array of four double-precision floating-point values. These values are interpreted as a plane equation.
            |


#### ClipPlanex
```csharp
OpenTK.Graphics.ES11.GL.Oes.ClipPlanex(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|plane|-|
|equation|[length: 4]|


#### Color3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Color3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|components|[length: 3]|


#### Color4x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Color4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|components|[length: 4]|


#### ConvolutionParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.ConvolutionParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### CurrentPaletteMatrix
```csharp
OpenTK.Graphics.ES11.GL.Oes.CurrentPaletteMatrix(System.UInt32)
```
[requires: OES_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|matrixpaletteindex|-|


#### DeleteFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteFramebuffer(System.UInt32)
```
[requires: OES_framebuffer_object]
 Delete named framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: n] 
            Specifies an array of framebuffer objects to be deleted.
            |


#### DeleteFramebuffers
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteFramebuffers(System.Int32,System.UInt32*)
```
[requires: OES_framebuffer_object]
 Delete named framebuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of framebuffer objects to be deleted.
            |
|framebuffers|[length: n] 
            Specifies an array of framebuffer objects to be deleted.
            |


#### DeleteRenderbuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteRenderbuffer(System.UInt32)
```
[requires: OES_framebuffer_object]
 Delete named renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: n] 
            Specifies an array of renderbuffer objects to be deleted.
            |


#### DeleteRenderbuffers
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteRenderbuffers(System.Int32,System.UInt32*)
```
[requires: OES_framebuffer_object]
 Delete named renderbuffer objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer objects to be deleted.
            |
|renderbuffers|[length: n] 
            Specifies an array of renderbuffer objects to be deleted.
            |


#### DeleteVertexArray
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteVertexArray(System.UInt32)
```
[requires: OES_vertex_array_object]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DeleteVertexArrays
```csharp
OpenTK.Graphics.ES11.GL.Oes.DeleteVertexArrays(System.Int32,System.UInt32*)
```
[requires: OES_vertex_array_object]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array objects to be deleted.
            |
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DepthRange
```csharp
OpenTK.Graphics.ES11.GL.Oes.DepthRange(System.Single,System.Single)
```
[requires: OES_single_precision]
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
OpenTK.Graphics.ES11.GL.Oes.DepthRangex(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|f|-|


#### DrawTex
```csharp
OpenTK.Graphics.ES11.GL.Oes.DrawTex(System.Int16*)
```
[requires: OES_draw_texture]

|Parameter Name|Remarks|
|--------------|-------|
|coords|-|


#### DrawTexx
```csharp
OpenTK.Graphics.ES11.GL.Oes.DrawTexx(System.Int32*)
```
[requires: OES_draw_texture]

|Parameter Name|Remarks|
|--------------|-------|
|coords|-|


#### EGLImageTargetRenderbufferStorage
```csharp
OpenTK.Graphics.ES11.GL.Oes.EGLImageTargetRenderbufferStorage(OpenTK.Graphics.ES11.All,System.IntPtr)
```
[requires: OES_EGL_image]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|image|-|


#### EGLImageTargetTexture2D
```csharp
OpenTK.Graphics.ES11.GL.Oes.EGLImageTargetTexture2D(OpenTK.Graphics.ES11.All,System.IntPtr)
```
[requires: OES_EGL_image]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|image|-|


#### EvalCoord1x
```csharp
OpenTK.Graphics.ES11.GL.Oes.EvalCoord1x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 1]|


#### EvalCoord2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.EvalCoord2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### FeedbackBufferx
```csharp
OpenTK.Graphics.ES11.GL.Oes.FeedbackBufferx(System.Int32,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|type|-|
|buffer|[length: n]|


#### Fogx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Fogx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### FramebufferRenderbuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.FramebufferRenderbuffer(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.UInt32)
```
[requires: OES_framebuffer_object]
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
OpenTK.Graphics.ES11.GL.Oes.FramebufferTexture2D(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.UInt32,System.Int32)
```
[requires: OES_framebuffer_object]
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


#### Frustum
```csharp
OpenTK.Graphics.ES11.GL.Oes.Frustum(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: OES_single_precision]
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
OpenTK.Graphics.ES11.GL.Oes.Frustumx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|l|-|
|r|-|
|b|-|
|t|-|
|n|-|
|f|-|


#### GenerateMipmap
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenerateMipmap(OpenTK.Graphics.ES11.All)
```
[requires: OES_framebuffer_object]
 Generate a complete set of mipmaps for a texture object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the texture target of the active texture unit to which the texture object is bound whose mipmaps will be generated.  Must be one of the following symbolic constants: Texture2D or TextureCubeMap.
            |


#### GenFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenFramebuffer
```
[requires: OES_framebuffer_object]
 Generate framebuffer object names

#### GenFramebuffers
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenFramebuffers(System.Int32,System.UInt32*)
```
[requires: OES_framebuffer_object]
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
OpenTK.Graphics.ES11.GL.Oes.GenRenderbuffer
```
[requires: OES_framebuffer_object]
 Generate renderbuffer object names

#### GenRenderbuffers
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenRenderbuffers(System.Int32,System.UInt32*)
```
[requires: OES_framebuffer_object]
 Generate renderbuffer object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of renderbuffer object names to be generated.
            |
|renderbuffers|[length: n] 
            Specifies an array in which the generated renderbuffer object names are stored.
            |


#### GenVertexArray
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenVertexArray
```
[requires: OES_vertex_array_object]
 Generate vertex array object names

#### GenVertexArrays
```csharp
OpenTK.Graphics.ES11.GL.Oes.GenVertexArrays(System.Int32,System.UInt32*)
```
[requires: OES_vertex_array_object]
 Generate vertex array object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array object names to generate.
            |
|arrays|[length: n] 
            Specifies an array in which the generated vertex array object names are stored.
            |


#### GetBufferPointer
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetBufferPointer(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.IntPtr)
```
[requires: OES_mapbuffer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|-|


#### GetBufferPointer``1
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetBufferPointer``1(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,``0@)
```
[requires: OES_mapbuffer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|-|


#### GetClipPlane
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetClipPlane(OpenTK.Graphics.ES11.All,System.Single*)
```
[requires: OES_single_precision]
 Return the coefficients of the specified clipping plane

|Parameter Name|Remarks|
|--------------|-------|
|plane| 
            Specifies a clipping plane. The number of clipping planes depends on the implementation, but at least six clipping planes are supported. They are identified by symbolic names of the form ClipPlane  where i ranges from 0 to the value of MaxClipPlanes - 1.
            |
|equation|[length: 4] 
            Returns four double-precision values that are the coefficients of the plane equation of plane in eye coordinates. The initial value is (0, 0, 0, 0).
            |


#### GetClipPlanex
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetClipPlanex(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|plane|-|
|equation|[length: 4]|


#### GetConvolutionParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetConvolutionParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetFixed
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetFixed(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### GetFramebufferAttachmentParameter
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetFramebufferAttachmentParameter(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_framebuffer_object]
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


#### GetHistogramParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetHistogramParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetLightx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetLightx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### GetMapx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetMapx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|query|-|
|v|[length: query]|


#### GetMaterialx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetMaterialx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|@params|[length: pname]|


#### GetRenderbufferParameter
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetRenderbufferParameter(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_framebuffer_object]
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


#### GetTexEnvx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetTexEnvx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTexGen
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetTexGen(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_texture_cube_map]
 Return texture coordinate generation parameters

|Parameter Name|Remarks|
|--------------|-------|
|coord| 
            Specifies a texture coordinate. Must be S, T, R, or Q.
            |
|pname| 
            Specifies the symbolic name of the value(s) to be returned. Must be either TextureGenMode or the name of one of the texture generation plane equations: ObjectPlane or EyePlane.
            |
|@params|[length: pname] 
            Returns the requested data.
            |


#### GetTexGenx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetTexGenx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point|OES_texture_cube_map]

|Parameter Name|Remarks|
|--------------|-------|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### GetTexLevelParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetTexLevelParameterx(OpenTK.Graphics.ES11.All,System.Int32,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|pname|-|
|@params|[length: pname]|


#### GetTexParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.GetTexParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### Indexx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Indexx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|component|[length: 1]|


#### IsFramebuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.IsFramebuffer(System.UInt32)
```
[requires: OES_framebuffer_object]
 Determine if a name corresponds to a framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|framebuffer| 
            Specifies a value that may be the name of a framebuffer object.
            |


#### IsRenderbuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.IsRenderbuffer(System.UInt32)
```
[requires: OES_framebuffer_object]
 Determine if a name corresponds to a renderbuffer object

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffer| 
            Specifies a value that may be the name of a renderbuffer object.
            |


#### IsVertexArray
```csharp
OpenTK.Graphics.ES11.GL.Oes.IsVertexArray(System.UInt32)
```
[requires: OES_vertex_array_object]
 Determine if a name corresponds to a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies a value that may be the name of a vertex array object.
            |


#### LightModelx
```csharp
OpenTK.Graphics.ES11.GL.Oes.LightModelx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### Lightx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Lightx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### LineWidthx
```csharp
OpenTK.Graphics.ES11.GL.Oes.LineWidthx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|width|-|


#### LoadMatrixx
```csharp
OpenTK.Graphics.ES11.GL.Oes.LoadMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### LoadPaletteFromModelViewMatrix
```csharp
OpenTK.Graphics.ES11.GL.Oes.LoadPaletteFromModelViewMatrix
```
[requires: OES_matrix_palette]

#### LoadTransposeMatrixx
```csharp
OpenTK.Graphics.ES11.GL.Oes.LoadTransposeMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### Map1x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Map1x(OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|u1|-|
|u2|-|
|stride|-|
|order|-|
|points|-|


#### Map2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Map2x(OpenTK.Graphics.ES11.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|u1|-|
|u2|-|
|ustride|-|
|uorder|-|
|v1|-|
|v2|-|
|vstride|-|
|vorder|-|
|points|-|


#### MapBuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.MapBuffer(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All)
```
[requires: OES_mapbuffer]
 Map a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object being mapped. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer or UniformBuffer.
            |
|access| 
            For glMapBuffer only, specifies the access policy, indicating whether it will be possible to read from, write to, or both read from and write to the buffer object's mapped data store. The symbolic constant must be ReadOnly, WriteOnly, or ReadWrite.
            |


#### MapGrid1x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MapGrid1x(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|u1|-|
|u2|-|


#### MapGrid2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MapGrid2x(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|u1|-|
|u2|-|
|v1|-|
|v2|-|


#### Materialx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Materialx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|param|[length: pname]|


#### MatrixIndexPointer
```csharp
OpenTK.Graphics.ES11.GL.Oes.MatrixIndexPointer(System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.IntPtr)
```
[requires: OES_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MatrixIndexPointer``1
```csharp
OpenTK.Graphics.ES11.GL.Oes.MatrixIndexPointer``1(System.Int32,OpenTK.Graphics.ES11.All,System.Int32,``0@)
```
[requires: OES_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: size,type,stride]|


#### MultiTexCoord1
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord1(OpenTK.Graphics.ES11.All,System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|coords|[length: 1] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord1x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord1x(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 1]|


#### MultiTexCoord2
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord2(OpenTK.Graphics.ES11.All,System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|coords|[length: 2] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord2x(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 2]|


#### MultiTexCoord3
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord3(OpenTK.Graphics.ES11.All,System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|coords|[length: 3] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord3x(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 3]|


#### MultiTexCoord4
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord4(OpenTK.Graphics.ES11.All,System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture unit whose coordinates should be modified. The number of texture units is implementation dependent, but must be at least two. Symbolic constant must be one of Texture, where i ranges from 0 to MaxTextureCoords - 1, which is an implementation-dependent value.
            |
|coords|[length: 4] 
            Specify s, t, r, and q texture coordinates for target texture unit. Not all parameters are present in all forms of the command.
            |


#### MultiTexCoord4x
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultiTexCoord4x(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 4]|


#### MultMatrixx
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### MultTransposeMatrixx
```csharp
OpenTK.Graphics.ES11.GL.Oes.MultTransposeMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### Normal3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Normal3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### Ortho
```csharp
OpenTK.Graphics.ES11.GL.Oes.Ortho(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: OES_single_precision]
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
OpenTK.Graphics.ES11.GL.Oes.Orthox(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|l|-|
|r|-|
|b|-|
|t|-|
|n|-|
|f|-|


#### PassThroughx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PassThroughx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|token|-|


#### PixelTransferx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PixelTransferx(OpenTK.Graphics.ES11.All,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### PixelZoomx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PixelZoomx(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|xfactor|-|
|yfactor|-|


#### PointParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PointParameterx(OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### PointSizePointer
```csharp
OpenTK.Graphics.ES11.GL.Oes.PointSizePointer(OpenTK.Graphics.ES11.All,System.Int32,System.IntPtr)
```
[requires: OES_point_size_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### PointSizePointer``1
```csharp
OpenTK.Graphics.ES11.GL.Oes.PointSizePointer``1(OpenTK.Graphics.ES11.All,System.Int32,``0@)
```
[requires: OES_point_size_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### PointSizex
```csharp
OpenTK.Graphics.ES11.GL.Oes.PointSizex(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|


#### PolygonOffsetx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PolygonOffsetx(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|
|units|-|


#### PrioritizeTexturesx
```csharp
OpenTK.Graphics.ES11.GL.Oes.PrioritizeTexturesx(System.Int32,System.UInt32*,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|textures|[length: n]|
|priorities|[length: n]|


#### QueryMatrixx
```csharp
OpenTK.Graphics.ES11.GL.Oes.QueryMatrixx(System.Int32*,System.Int32*)
```
[requires: OES_query_matrix]

|Parameter Name|Remarks|
|--------------|-------|
|mantissa|[length: 16]|
|exponent|[length: 16]|


#### RasterPos2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.RasterPos2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### RasterPos3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.RasterPos3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### RasterPos4x
```csharp
OpenTK.Graphics.ES11.GL.Oes.RasterPos4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|


#### Rectx
```csharp
OpenTK.Graphics.ES11.GL.Oes.Rectx(System.Int32*,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|v1|[length: 2]|
|v2|[length: 2]|


#### RenderbufferStorage
```csharp
OpenTK.Graphics.ES11.GL.Oes.RenderbufferStorage(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32,System.Int32)
```
[requires: OES_framebuffer_object]
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


#### Rotatex
```csharp
OpenTK.Graphics.ES11.GL.Oes.Rotatex(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|angle|-|
|x|-|
|y|-|
|z|-|


#### SampleCoverage
```csharp
OpenTK.Graphics.ES11.GL.Oes.SampleCoverage(System.Int32,System.Boolean)
```
[requires: OES_fixed_point]
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
OpenTK.Graphics.ES11.GL.Oes.SampleCoveragex(System.Int32,System.Boolean)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|invert|-|


#### Scalex
```csharp
OpenTK.Graphics.ES11.GL.Oes.Scalex(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### TexCoord1
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord1(System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 1] 
            Specify s, t, r, and q  texture coordinates. Not all parameters are present in all forms of the command.
            |


#### TexCoord1x
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord1x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 1]|


#### TexCoord2
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord2(System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2] 
            Specify s, t, r, and q  texture coordinates. Not all parameters are present in all forms of the command.
            |


#### TexCoord2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### TexCoord3
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord3(System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3] 
            Specify s, t, r, and q  texture coordinates. Not all parameters are present in all forms of the command.
            |


#### TexCoord3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### TexCoord4
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord4(System.SByte*)
```
[requires: OES_byte_coordinates]
 Set the current texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4] 
            Specify s, t, r, and q  texture coordinates. Not all parameters are present in all forms of the command.
            |


#### TexCoord4x
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexCoord4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|


#### TexEnvx
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexEnvx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexGen
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexGen(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_texture_cube_map]
 Control the generation of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|coord| 
            Specifies a texture coordinate. Must be one of S, T, R, or Q.
            |
|pname| 
            Specifies the symbolic name of the texture-coordinate generation function. Must be TextureGenMode.
            |
|@params|[length: pname] 
            Specifies a single-valued texture generation parameter, one of ObjectLinear, EyeLinear, SphereMap, NormalMap, or ReflectionMap.
            |


#### TexGenx
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexGenx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point|OES_texture_cube_map]

|Parameter Name|Remarks|
|--------------|-------|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### TexParameterx
```csharp
OpenTK.Graphics.ES11.GL.Oes.TexParameterx(OpenTK.Graphics.ES11.All,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### Translatex
```csharp
OpenTK.Graphics.ES11.GL.Oes.Translatex(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### UnmapBuffer
```csharp
OpenTK.Graphics.ES11.GL.Oes.UnmapBuffer(OpenTK.Graphics.ES11.All)
```
[requires: OES_mapbuffer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### Vertex2
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex2(System.SByte*)
```
[requires: OES_byte_coordinates]
 Specify a vertex

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2] 
            Specify x, y, z, and w coordinates of a vertex. Not all parameters are present in all forms of the command.
            |


#### Vertex2x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### Vertex3
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex3(System.SByte*)
```
[requires: OES_byte_coordinates]
 Specify a vertex

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3] 
            Specify x, y, z, and w coordinates of a vertex. Not all parameters are present in all forms of the command.
            |


#### Vertex3x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### Vertex4
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex4(System.SByte*)
```
[requires: OES_byte_coordinates]
 Specify a vertex

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4] 
            Specify x, y, z, and w coordinates of a vertex. Not all parameters are present in all forms of the command.
            |


#### Vertex4x
```csharp
OpenTK.Graphics.ES11.GL.Oes.Vertex4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|


#### WeightPointer
```csharp
OpenTK.Graphics.ES11.GL.Oes.WeightPointer(System.Int32,OpenTK.Graphics.ES11.All,System.Int32,System.IntPtr)
```
[requires: OES_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|


#### WeightPointer``1
```csharp
OpenTK.Graphics.ES11.GL.Oes.WeightPointer``1(System.Int32,OpenTK.Graphics.ES11.All,System.Int32,``0@)
```
[requires: OES_matrix_palette]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|
|pointer|[length: type,stride]|





