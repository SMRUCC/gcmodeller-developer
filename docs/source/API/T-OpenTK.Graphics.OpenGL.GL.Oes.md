---
title: Oes
---

# Oes
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### Accumx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Accumx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|value|-|


#### AlphaFuncx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.AlphaFuncx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|
|@ref|-|


#### Bitmapx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Bitmapx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Byte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.BlendColorx(System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|


#### ClearAccumx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.ClearAccumx(System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.ClearColorx(System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.ClearDepth(System.Single)
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
OpenTK.Graphics.OpenGL.GL.Oes.ClearDepthx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|depth|-|


#### ClipPlane
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.ClipPlane(OpenTK.Graphics.OpenGL.OesSinglePrecision,System.Single*)
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
OpenTK.Graphics.OpenGL.GL.Oes.ClipPlanex(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|plane|-|
|equation|[length: 4]|


#### Color3x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Color3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|components|[length: 3]|


#### Color4x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Color4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|components|[length: 4]|


#### ConvolutionParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.ConvolutionParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### DepthRange
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.DepthRange(System.Single,System.Single)
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
OpenTK.Graphics.OpenGL.GL.Oes.DepthRangex(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|f|-|


#### EvalCoord1x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.EvalCoord1x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 1]|


#### EvalCoord2x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.EvalCoord2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### FeedbackBufferx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.FeedbackBufferx(System.Int32,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|type|-|
|buffer|[length: n]|


#### Fogx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Fogx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### Frustum
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Frustum(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
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
OpenTK.Graphics.OpenGL.GL.Oes.Frustumx(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
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


#### GetClipPlane
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetClipPlane(OpenTK.Graphics.OpenGL.OesSinglePrecision,System.Single*)
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
OpenTK.Graphics.OpenGL.GL.Oes.GetClipPlanex(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|plane|-|
|equation|[length: 4]|


#### GetConvolutionParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetConvolutionParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetFixed
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetFixed(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### GetHistogramParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetHistogramParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetLightx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetLightx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### GetMapx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetMapx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|query|-|
|v|[length: query]|


#### GetMaterialx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetMaterialx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|@params|[length: pname]|


#### GetTexEnvx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetTexEnvx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### GetTexGenx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetTexGenx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### GetTexLevelParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.GetTexLevelParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
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
OpenTK.Graphics.OpenGL.GL.Oes.GetTexParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### Indexx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Indexx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|component|[length: 1]|


#### LightModelx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.LightModelx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### Lightx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Lightx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### LineWidthx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.LineWidthx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|width|-|


#### LoadMatrixx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.LoadMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### LoadTransposeMatrixx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.LoadTransposeMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### Map1x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Map1x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.Map2x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
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


#### MapGrid1x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MapGrid1x(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|u1|-|
|u2|-|


#### MapGrid2x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MapGrid2x(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.Materialx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|param|[length: pname]|


#### MultiTexCoord1
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord1(OpenTK.Graphics.OpenGL.OesByteCoordinates,System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord1x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 1]|


#### MultiTexCoord2
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord2(OpenTK.Graphics.OpenGL.OesByteCoordinates,System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord2x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 2]|


#### MultiTexCoord3
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord3(OpenTK.Graphics.OpenGL.OesByteCoordinates,System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord3x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 3]|


#### MultiTexCoord4
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord4(OpenTK.Graphics.OpenGL.OesByteCoordinates,System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.MultiTexCoord4x(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|coords|[length: 4]|


#### MultMatrixx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### MultTransposeMatrixx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.MultTransposeMatrixx(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|m|[length: 16]|


#### Normal3x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Normal3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### Ortho
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Ortho(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
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
OpenTK.Graphics.OpenGL.GL.Oes.Orthox(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.PassThroughx(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|token|-|


#### PixelTransferx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PixelTransferx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### PixelZoomx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PixelZoomx(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|xfactor|-|
|yfactor|-|


#### PointParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PointParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### PointSizex
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PointSizex(System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|


#### PolygonOffsetx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PolygonOffsetx(System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|
|units|-|


#### PrioritizeTexturesx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.PrioritizeTexturesx(System.Int32,System.UInt32*,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|textures|[length: n]|
|priorities|[length: n]|


#### QueryMatrixx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.QueryMatrixx(System.Int32*,System.Int32*)
```
[requires: OES_query_matrix]

|Parameter Name|Remarks|
|--------------|-------|
|mantissa|[length: 16]|
|exponent|[length: 16]|


#### RasterPos2x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.RasterPos2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### RasterPos3x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.RasterPos3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### RasterPos4x
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.RasterPos4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|


#### Rectx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Rectx(System.Int32*,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|v1|[length: 2]|
|v2|[length: 2]|


#### Rotatex
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Rotatex(System.Int32,System.Int32,System.Int32,System.Int32)
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
OpenTK.Graphics.OpenGL.GL.Oes.SampleCoverage(System.Int32,System.Boolean)
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
OpenTK.Graphics.OpenGL.GL.Oes.SampleCoveragex(System.Int32,System.Boolean)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|invert|-|


#### Scalex
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Scalex(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### TexCoord1
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord1(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord1x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 1]|


#### TexCoord2
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord2(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### TexCoord3
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord3(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### TexCoord4
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord4(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.TexCoord4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|


#### TexEnvx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexEnvx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexGenx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexGenx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coord|-|
|pname|-|
|@params|[length: pname]|


#### TexParameterx
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.TexParameterx(OpenTK.Graphics.OpenGL.OesFixedPoint,OpenTK.Graphics.OpenGL.OesFixedPoint,System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### Translatex
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Translatex(System.Int32,System.Int32,System.Int32)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|z|-|


#### Vertex2
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Vertex2(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.Vertex2x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 2]|


#### Vertex3
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Vertex3(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.Vertex3x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 3]|


#### Vertex4
```csharp
OpenTK.Graphics.OpenGL.GL.Oes.Vertex4(System.SByte*)
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
OpenTK.Graphics.OpenGL.GL.Oes.Vertex4x(System.Int32*)
```
[requires: OES_fixed_point]

|Parameter Name|Remarks|
|--------------|-------|
|coords|[length: 4]|





