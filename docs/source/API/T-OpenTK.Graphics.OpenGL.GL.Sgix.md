---
title: Sgix
---

# Sgix
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### AsyncMarker
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.AsyncMarker(System.UInt32)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|marker|-|


#### Deform
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.Deform(System.UInt32)
```
[requires: SGIX_polynomial_ffd]

|Parameter Name|Remarks|
|--------------|-------|
|mask|-|


#### DeformationMap3
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.DeformationMap3(OpenTK.Graphics.OpenGL.SgixPolynomialFfd,System.Single,System.Single,System.Int32,System.Int32,System.Single,System.Single,System.Int32,System.Int32,System.Single,System.Single,System.Int32,System.Int32,System.Single*)
```
[requires: SGIX_polynomial_ffd]

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
|w1|-|
|w2|-|
|wstride|-|
|worder|-|
|points|[length: target,ustride,uorder,vstride,vorder,wstride,worder]|


#### DeleteAsyncMarkers
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.DeleteAsyncMarkers(System.UInt32,System.Int32)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|marker|-|
|range|-|


#### FinishAsync
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FinishAsync(System.UInt32*)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|markerp|[length: 1]|


#### FlushRaster
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FlushRaster
```
[requires: SGIX_flush_raster]

#### FragmentColorMaterial
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FragmentColorMaterial(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.MaterialParameter)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|mode|-|


#### FragmentLight
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FragmentLight(OpenTK.Graphics.OpenGL.SgixFragmentLighting,OpenTK.Graphics.OpenGL.SgixFragmentLighting,System.Int32*)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### FragmentLightModel
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FragmentLightModel(OpenTK.Graphics.OpenGL.SgixFragmentLighting,System.Int32*)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### FragmentMaterial
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FragmentMaterial(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.MaterialParameter,System.Int32*)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|@params|[length: pname]|


#### FrameZoom
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.FrameZoom(System.Int32)
```
[requires: SGIX_framezoom]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|


#### GenAsyncMarkers
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.GenAsyncMarkers(System.Int32)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|range|-|


#### GetFragmentLight
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.GetFragmentLight(OpenTK.Graphics.OpenGL.SgixFragmentLighting,OpenTK.Graphics.OpenGL.SgixFragmentLighting,System.Int32*)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|light|-|
|pname|-|
|@params|[length: pname]|


#### GetFragmentMaterial
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.GetFragmentMaterial(OpenTK.Graphics.OpenGL.MaterialFace,OpenTK.Graphics.OpenGL.MaterialParameter,System.Int32*)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|pname|-|
|@params|[length: pname]|


#### GetInstruments
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.GetInstruments
```
[requires: SGIX_instruments]

#### GetListParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.GetListParameter(System.UInt32,OpenTK.Graphics.OpenGL.ListParameterName,System.Int32*)
```
[requires: SGIX_list_priority]

|Parameter Name|Remarks|
|--------------|-------|
|list|-|
|pname|-|
|@params|[length: pname]|


#### IglooInterface
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.IglooInterface(OpenTK.Graphics.OpenGL.SgixIglooInterface,System.IntPtr)
```
[requires: SGIX_igloo_interface]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### IglooInterface``1
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.IglooInterface``1(OpenTK.Graphics.OpenGL.SgixIglooInterface,``0@)
```
[requires: SGIX_igloo_interface]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### InstrumentsBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.InstrumentsBuffer(System.Int32,System.Int32*)
```
[requires: SGIX_instruments]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|buffer|[length: size]|


#### IsAsyncMarker
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.IsAsyncMarker(System.UInt32)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|marker|-|


#### LightEnv
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.LightEnv(OpenTK.Graphics.OpenGL.SgixFragmentLighting,System.Int32)
```
[requires: SGIX_fragment_lighting]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### ListParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.ListParameter(System.UInt32,OpenTK.Graphics.OpenGL.ListParameterName,System.Int32*)
```
[requires: SGIX_list_priority]

|Parameter Name|Remarks|
|--------------|-------|
|list|-|
|pname|-|
|@params|[length: pname]|


#### LoadIdentityDeformationMap
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.LoadIdentityDeformationMap(System.UInt32)
```
[requires: SGIX_polynomial_ffd]

|Parameter Name|Remarks|
|--------------|-------|
|mask|-|


#### PixelTexGen
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.PixelTexGen(OpenTK.Graphics.OpenGL.SgixPixelTexture)
```
[requires: SGIX_pixel_texture]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### PollAsync
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.PollAsync(System.UInt32*)
```
[requires: SGIX_async]

|Parameter Name|Remarks|
|--------------|-------|
|markerp|[length: 1]|


#### PollInstruments
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.PollInstruments(System.Int32*)
```
[requires: SGIX_instruments]

|Parameter Name|Remarks|
|--------------|-------|
|marker_p|[length: 1]|


#### ReadInstruments
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.ReadInstruments(System.Int32)
```
[requires: SGIX_instruments]

|Parameter Name|Remarks|
|--------------|-------|
|marker|-|


#### ReferencePlane
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.ReferencePlane(System.Double*)
```
[requires: SGIX_reference_plane]

|Parameter Name|Remarks|
|--------------|-------|
|equation|[length: 4]|


#### SpriteParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.SpriteParameter(OpenTK.Graphics.OpenGL.SgixSprite,System.Int32*)
```
[requires: SGIX_sprite]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### StartInstruments
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.StartInstruments
```
[requires: SGIX_instruments]

#### StopInstruments
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.StopInstruments(System.Int32)
```
[requires: SGIX_instruments]

|Parameter Name|Remarks|
|--------------|-------|
|marker|-|


#### TagSampleBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Sgix.TagSampleBuffer
```
[requires: SGIX_tag_sample_buffer]




