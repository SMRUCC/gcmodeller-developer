---
title: Ati
---

# Ati
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### AlphaFragmentOp1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.AlphaFragmentOp1(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|


#### AlphaFragmentOp2
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.AlphaFragmentOp2(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|
|arg2|-|
|arg2Rep|-|
|arg2Mod|-|


#### AlphaFragmentOp3
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.AlphaFragmentOp3(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|
|arg2|-|
|arg2Rep|-|
|arg2Mod|-|
|arg3|-|
|arg3Rep|-|
|arg3Mod|-|


#### ArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ArrayObject(OpenTK.Graphics.OpenGL.EnableCap,System.Int32,OpenTK.Graphics.OpenGL.AtiVertexArrayObject,System.Int32,System.UInt32,System.UInt32)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|size|-|
|type|-|
|stride|-|
|buffer|-|
|offset|-|


#### BeginFragmentShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.BeginFragmentShader
```
[requires: ATI_fragment_shader]

#### BindFragmentShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.BindFragmentShader(System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### ClientActiveVertexStream
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ClientActiveVertexStream(OpenTK.Graphics.OpenGL.AtiVertexStreams)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|


#### ColorFragmentOp1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ColorFragmentOp1(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMask|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|


#### ColorFragmentOp2
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ColorFragmentOp2(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMask|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|
|arg2|-|
|arg2Rep|-|
|arg2Mod|-|


#### ColorFragmentOp3
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ColorFragmentOp3(OpenTK.Graphics.OpenGL.AtiFragmentShader,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|op|-|
|dst|-|
|dstMask|-|
|dstMod|-|
|arg1|-|
|arg1Rep|-|
|arg1Mod|-|
|arg2|-|
|arg2Rep|-|
|arg2Mod|-|
|arg3|-|
|arg3Rep|-|
|arg3Mod|-|


#### DeleteFragmentShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.DeleteFragmentShader(System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### DrawBuffers
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.DrawBuffers(System.Int32,OpenTK.Graphics.OpenGL.AtiDrawBuffers*)
```
[requires: ATI_draw_buffers]
 Specifies a list of color buffers to be drawn into

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffers in bufs.
            |
|bufs|[length: n] 
            Points to an array of symbolic constants specifying the buffers into which fragment colors or data values will be written.
            |


#### DrawElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.DrawElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32)
```
[requires: ATI_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|count|-|


#### DrawRangeElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.DrawRangeElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32,System.UInt32,System.Int32)
```
[requires: ATI_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|start|-|
|end|-|
|count|-|


#### ElementPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ElementPointer(OpenTK.Graphics.OpenGL.AtiElementArray,System.IntPtr)
```
[requires: ATI_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|pointer|[length: type]|


#### ElementPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.ElementPointer``1(OpenTK.Graphics.OpenGL.AtiElementArray,``0@)
```
[requires: ATI_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|pointer|[length: type]|


#### EndFragmentShader
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.EndFragmentShader
```
[requires: ATI_fragment_shader]

#### FreeObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.FreeObjectBuffer(System.UInt32)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### GenFragmentShaders
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GenFragmentShaders(System.UInt32)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|range|-|


#### GetArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GetArrayObject(OpenTK.Graphics.OpenGL.EnableCap,OpenTK.Graphics.OpenGL.AtiVertexArrayObject,System.Int32*)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|pname|-|
|@params|[length: 1]|


#### GetObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GetObjectBuffer(System.UInt32,OpenTK.Graphics.OpenGL.AtiVertexArrayObject,System.Int32*)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|pname|-|
|@params|[length: 1]|


#### GetTexBumpParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GetTexBumpParameter(OpenTK.Graphics.OpenGL.AtiEnvmapBumpmap,System.Int32*)
```
[requires: ATI_envmap_bumpmap]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### GetVariantArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GetVariantArrayObject(System.UInt32,OpenTK.Graphics.OpenGL.AtiVertexArrayObject,System.Int32*)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|pname|-|
|@params|[length: 1]|


#### GetVertexAttribArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.GetVertexAttribArrayObject(System.UInt32,OpenTK.Graphics.OpenGL.AtiVertexAttribArrayObject,System.Int32*)
```
[requires: ATI_vertex_attrib_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: pname]|


#### IsObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.IsObjectBuffer(System.UInt32)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### MapObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.MapObjectBuffer(System.UInt32)
```
[requires: ATI_map_object_buffer]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### NewObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.NewObjectBuffer(System.Int32,System.IntPtr,OpenTK.Graphics.OpenGL.AtiVertexArrayObject)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|pointer|[length: size]|
|usage|-|


#### NewObjectBuffer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.NewObjectBuffer``1(System.Int32,``0@,OpenTK.Graphics.OpenGL.AtiVertexArrayObject)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|pointer|[length: size]|
|usage|-|


#### NormalStream3
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.NormalStream3(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int16*)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|
|coords|[length: 3]|


#### PassTexCoord
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.PassTexCoord(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.AtiFragmentShader)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|dst|-|
|coord|-|
|swizzle|-|


#### PNTriangles
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.PNTriangles(OpenTK.Graphics.OpenGL.AtiPnTriangles,System.Int32)
```
[requires: ATI_pn_triangles]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### SampleMap
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.SampleMap(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.AtiFragmentShader)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|dst|-|
|interp|-|
|swizzle|-|


#### SetFragmentShaderConstant
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.SetFragmentShaderConstant(System.UInt32,System.Single*)
```
[requires: ATI_fragment_shader]

|Parameter Name|Remarks|
|--------------|-------|
|dst|-|
|value|[length: 4]|


#### StencilFuncSeparate
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.StencilFuncSeparate(OpenTK.Graphics.OpenGL.StencilFunction,OpenTK.Graphics.OpenGL.StencilFunction,System.Int32,System.UInt32)
```
[requires: ATI_separate_stencil]
 Set front and/or back function and reference value for stencil testing

|Parameter Name|Remarks|
|--------------|-------|
|frontfunc| 
            Specifies whether front and/or back stencil state is updated. Three symbolic constants are valid: Front, Back, and FrontAndBack.
            |
|backfunc| 
            Specifies the test function. Eight symbolic constants are valid: Never, Less, Lequal, Greater, Gequal, Equal, Notequal, and Always. The initial value is Always.
            |
|@ref| 
            Specifies the reference value for the stencil test. ref is clamped to the range [0, 2 sup n - 1], where  is the number of bitplanes in the stencil buffer. The initial value is 0.
            |
|mask| 
            Specifies a mask that is ANDed with both the reference value and the stored stencil value when the test is done. The initial value is all 1's.
            |


#### StencilOpSeparate
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.StencilOpSeparate(OpenTK.Graphics.OpenGL.AtiSeparateStencil,OpenTK.Graphics.OpenGL.StencilOp,OpenTK.Graphics.OpenGL.StencilOp,OpenTK.Graphics.OpenGL.StencilOp)
```
[requires: ATI_separate_stencil]
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


#### TexBumpParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.TexBumpParameter(OpenTK.Graphics.OpenGL.AtiEnvmapBumpmap,System.Int32*)
```
[requires: ATI_envmap_bumpmap]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|[length: pname]|


#### UnmapObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.UnmapObjectBuffer(System.UInt32)
```
[requires: ATI_map_object_buffer]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### UpdateObjectBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.UpdateObjectBuffer(System.UInt32,System.UInt32,System.Int32,System.IntPtr,OpenTK.Graphics.OpenGL.AtiVertexArrayObject)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|pointer|[length: size]|
|preserve|-|


#### UpdateObjectBuffer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.UpdateObjectBuffer``1(System.UInt32,System.UInt32,System.Int32,``0@,OpenTK.Graphics.OpenGL.AtiVertexArrayObject)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|offset|-|
|size|-|
|pointer|[length: size]|
|preserve|-|


#### VariantArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VariantArrayObject(System.UInt32,OpenTK.Graphics.OpenGL.AtiVertexArrayObject,System.Int32,System.UInt32,System.UInt32)
```
[requires: ATI_vertex_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|type|-|
|stride|-|
|buffer|-|
|offset|-|


#### VertexAttribArrayObject
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexAttribArrayObject(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribPointerType,System.Boolean,System.Int32,System.UInt32,System.UInt32)
```
[requires: ATI_vertex_attrib_array_object]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|normalized|-|
|stride|-|
|buffer|-|
|offset|-|


#### VertexBlendEnv
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexBlendEnv(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int32)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### VertexStream1
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexStream1(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int16*)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|
|coords|[length: 1]|


#### VertexStream2
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexStream2(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int16*)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|
|coords|[length: 2]|


#### VertexStream3
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexStream3(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int16*)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|
|coords|[length: 3]|


#### VertexStream4
```csharp
OpenTK.Graphics.OpenGL.GL.Ati.VertexStream4(OpenTK.Graphics.OpenGL.AtiVertexStreams,System.Int16*)
```
[requires: ATI_vertex_streams]

|Parameter Name|Remarks|
|--------------|-------|
|stream|-|
|coords|[length: 4]|





