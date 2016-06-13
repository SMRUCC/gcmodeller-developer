---
title: Apple
---

# Apple
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### BindVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.BindVertexArray(System.UInt32)
```
[requires: APPLE_vertex_array_object]
 Bind a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies the name of the vertex array to bind.
            |


#### BufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.BufferParameter(OpenTK.Graphics.OpenGL.BufferTarget,OpenTK.Graphics.OpenGL.BufferParameterApple,System.Int32)
```
[requires: APPLE_flush_buffer_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|param|-|


#### DeleteFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DeleteFence(System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fences|[length: n]|


#### DeleteFences
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DeleteFences(System.Int32,System.UInt32*)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### DeleteVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DeleteVertexArray(System.UInt32)
```
[requires: APPLE_vertex_array_object]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DeleteVertexArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DeleteVertexArrays(System.Int32,System.UInt32*)
```
[requires: APPLE_vertex_array_object]
 Delete vertex array objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array objects to be deleted.
            |
|arrays|[length: n] 
            Specifies the address of an array containing the n names of the objects to be deleted.
            |


#### DisableVertexAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DisableVertexAttrib(System.UInt32,OpenTK.Graphics.OpenGL.AppleVertexProgramEvaluators)
```
[requires: APPLE_vertex_program_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|


#### DrawElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DrawElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32,System.Int32)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|first|-|
|count|-|


#### DrawRangeElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.DrawRangeElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32,System.UInt32,System.Int32,System.Int32)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|start|-|
|end|-|
|first|-|
|count|-|


#### ElementPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.ElementPointer(OpenTK.Graphics.OpenGL.AppleElementArray,System.IntPtr)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|pointer|[length: type]|


#### ElementPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.ElementPointer``1(OpenTK.Graphics.OpenGL.AppleElementArray,``0@)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|pointer|[length: type]|


#### EnableVertexAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.EnableVertexAttrib(System.UInt32,OpenTK.Graphics.OpenGL.AppleVertexProgramEvaluators)
```
[requires: APPLE_vertex_program_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|


#### FinishFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.FinishFence(System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### FinishObject
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.FinishObject(OpenTK.Graphics.OpenGL.AppleFence,System.Int32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|@object|-|
|name|-|


#### FlushMappedBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.FlushMappedBufferRange(OpenTK.Graphics.OpenGL.BufferTarget,System.IntPtr,System.IntPtr)
```
[requires: APPLE_flush_buffer_range]
 Indicate modifications to a range of a mapped buffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the flush operation. target must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, DispatchIndirectBuffer, DrawIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the start of the buffer subrange, in basic machine units.
            |
|size| 
            Specifies the length of the buffer subrange, in basic machine units.
            |


#### FlushVertexArrayRange
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.FlushVertexArrayRange(System.Int32,System.IntPtr)
```
[requires: APPLE_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|


#### FlushVertexArrayRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.FlushVertexArrayRange``1(System.Int32,``0@)
```
[requires: APPLE_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|


#### GenFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GenFence
```
[requires: APPLE_fence]

#### GenFences
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GenFences(System.Int32,System.UInt32*)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### GenVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GenVertexArray
```
[requires: APPLE_vertex_array_object]
 Generate vertex array object names

#### GenVertexArrays
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GenVertexArrays(System.Int32,System.UInt32*)
```
[requires: APPLE_vertex_array_object]
 Generate vertex array object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of vertex array object names to generate.
            |
|arrays|[length: n] 
            Specifies an array in which the generated vertex array object names are stored.
            |


#### GetObjectParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GetObjectParameter(OpenTK.Graphics.OpenGL.AppleObjectPurgeable,System.UInt32,OpenTK.Graphics.OpenGL.AppleObjectPurgeable,System.Int32*)
```
[requires: APPLE_object_purgeable]

|Parameter Name|Remarks|
|--------------|-------|
|objectType|-|
|name|-|
|pname|-|
|@params|[length: pname]|


#### GetTexParameterPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GetTexParameterPointer(OpenTK.Graphics.OpenGL.AppleTextureRange,OpenTK.Graphics.OpenGL.AppleTextureRange,System.IntPtr)
```
[requires: APPLE_texture_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: 1]|


#### GetTexParameterPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.GetTexParameterPointer``1(OpenTK.Graphics.OpenGL.AppleTextureRange,OpenTK.Graphics.OpenGL.AppleTextureRange,``0@)
```
[requires: APPLE_texture_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: 1]|


#### IsFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.IsFence(System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### IsVertexArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.IsVertexArray(System.UInt32)
```
[requires: APPLE_vertex_array_object]
 Determine if a name corresponds to a vertex array object

|Parameter Name|Remarks|
|--------------|-------|
|array| 
            Specifies a value that may be the name of a vertex array object.
            |


#### IsVertexAttribEnabled
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.IsVertexAttribEnabled(System.UInt32,OpenTK.Graphics.OpenGL.AppleVertexProgramEvaluators)
```
[requires: APPLE_vertex_program_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|


#### MapVertexAttrib1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.MapVertexAttrib1(System.UInt32,System.UInt32,System.Single,System.Single,System.Int32,System.Int32,System.Single*)
```
[requires: APPLE_vertex_program_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|u1|-|
|u2|-|
|stride|-|
|order|-|
|points|[length: size,stride,order]|


#### MapVertexAttrib2
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.MapVertexAttrib2(System.UInt32,System.UInt32,System.Single,System.Single,System.Int32,System.Int32,System.Single,System.Single,System.Int32,System.Int32,System.Single*)
```
[requires: APPLE_vertex_program_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|u1|-|
|u2|-|
|ustride|-|
|uorder|-|
|v1|-|
|v2|-|
|vstride|-|
|vorder|-|
|points|[length: size,ustride,uorder,vstride,vorder]|


#### MultiDrawElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.MultiDrawElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.Int32*,System.Int32*,System.Int32)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|first|[length: primcount]|
|count|[length: primcount]|
|primcount|-|


#### MultiDrawRangeElementArray
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.MultiDrawRangeElementArray(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32,System.UInt32,System.Int32*,System.Int32*,System.Int32)
```
[requires: APPLE_element_array]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|start|-|
|end|-|
|first|[length: primcount]|
|count|[length: primcount]|
|primcount|-|


#### ObjectPurgeable
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.ObjectPurgeable(OpenTK.Graphics.OpenGL.AppleObjectPurgeable,System.UInt32,OpenTK.Graphics.OpenGL.AppleObjectPurgeable)
```
[requires: APPLE_object_purgeable]

|Parameter Name|Remarks|
|--------------|-------|
|objectType|-|
|name|-|
|option|-|


#### ObjectUnpurgeable
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.ObjectUnpurgeable(OpenTK.Graphics.OpenGL.AppleObjectPurgeable,System.UInt32,OpenTK.Graphics.OpenGL.AppleObjectPurgeable)
```
[requires: APPLE_object_purgeable]

|Parameter Name|Remarks|
|--------------|-------|
|objectType|-|
|name|-|
|option|-|


#### SetFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.SetFence(System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### TestFence
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.TestFence(System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### TestObject
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.TestObject(OpenTK.Graphics.OpenGL.AppleFence,System.UInt32)
```
[requires: APPLE_fence]

|Parameter Name|Remarks|
|--------------|-------|
|@object|-|
|name|-|


#### TextureRange
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.TextureRange(OpenTK.Graphics.OpenGL.AppleTextureRange,System.Int32,System.IntPtr)
```
[requires: APPLE_texture_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|length|-|
|pointer|[length: length]|


#### TextureRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.TextureRange``1(OpenTK.Graphics.OpenGL.AppleTextureRange,System.Int32,``0@)
```
[requires: APPLE_texture_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|length|-|
|pointer|[length: length]|


#### VertexArrayParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.VertexArrayParameter(OpenTK.Graphics.OpenGL.AppleVertexArrayRange,System.Int32)
```
[requires: APPLE_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|param|-|


#### VertexArrayRange
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.VertexArrayRange(System.Int32,System.IntPtr)
```
[requires: APPLE_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|


#### VertexArrayRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.Apple.VertexArrayRange``1(System.Int32,``0@)
```
[requires: APPLE_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|





