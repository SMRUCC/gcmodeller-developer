---
title: Sgis
---

# Sgis
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### DetailTexFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.DetailTexFunc(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Single*)
```
[requires: SGIS_detail_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|n|-|
|points|[length: n*2]|


#### FogFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.FogFunc(System.Int32,System.Single*)
```
[requires: SGIS_fog_function]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|points|[length: n*2]|


#### GetDetailTexFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.GetDetailTexFunc(OpenTK.Graphics.OpenGL.TextureTarget,System.Single*)
```
[requires: SGIS_detail_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|points|[length: target]|


#### GetFogFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.GetFogFunc(System.Single*)
```
[requires: SGIS_fog_function]

|Parameter Name|Remarks|
|--------------|-------|
|points|-|


#### GetPixelTexGenParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.GetPixelTexGenParameter(OpenTK.Graphics.OpenGL.SgisPixelTexture,System.Int32*)
```
[requires: SGIS_pixel_texture]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### GetSharpenTexFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.GetSharpenTexFunc(OpenTK.Graphics.OpenGL.TextureTarget,System.Single*)
```
[requires: SGIS_sharpen_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|points|[length: target]|


#### GetTexFilterFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.GetTexFilterFunc(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.SgisTextureFilter4,System.Single*)
```
[requires: SGIS_texture_filter4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|filter|-|
|weights|[length: target,filter]|


#### PixelTexGenParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.PixelTexGenParameter(OpenTK.Graphics.OpenGL.SgisPixelTexture,System.Int32*)
```
[requires: SGIS_pixel_texture]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### PointParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.PointParameter(OpenTK.Graphics.OpenGL.SgisPointParameters,System.Single*)
```
[requires: SGIS_point_parameters]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### SampleMask
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.SampleMask(System.Single,System.Boolean)
```
[requires: SGIS_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|invert|-|


#### SamplePattern
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.SamplePattern(OpenTK.Graphics.OpenGL.SgisMultisample)
```
[requires: SGIS_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|pattern|-|


#### SharpenTexFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.SharpenTexFunc(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Single*)
```
[requires: SGIS_sharpen_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|n|-|
|points|[length: n*2]|


#### TexFilterFunc
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TexFilterFunc(OpenTK.Graphics.OpenGL.TextureTarget,OpenTK.Graphics.OpenGL.SgisTextureFilter4,System.Int32,System.Single*)
```
[requires: SGIS_texture_filter4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|filter|-|
|n|-|
|weights|[length: n]|


#### TexImage4D
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TexImage4D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: SGIS_texture4D]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|size4d|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth,size4d]|


#### TexImage4D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TexImage4D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: SGIS_texture4D]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|
|size4d|-|
|border|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth,size4d]|


#### TexSubImage4D
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TexSubImage4D(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: SGIS_texture4D]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|woffset|-|
|width|-|
|height|-|
|depth|-|
|size4d|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth,size4d]|


#### TexSubImage4D``1
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TexSubImage4D``1(OpenTK.Graphics.OpenGL.TextureTarget,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: SGIS_texture4D]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|woffset|-|
|width|-|
|height|-|
|depth|-|
|size4d|-|
|format|-|
|type|-|
|pixels|[length: format,type,width,height,depth,size4d]|


#### TextureColorMask
```csharp
OpenTK.Graphics.OpenGL.GL.Sgis.TextureColorMask(System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: SGIS_texture_color_mask]

|Parameter Name|Remarks|
|--------------|-------|
|red|-|
|green|-|
|blue|-|
|alpha|-|





