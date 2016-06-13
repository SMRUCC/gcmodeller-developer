---
title: NV
---

# NV
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### ActiveVarying
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ActiveVarying(System.UInt32,System.String)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|name|[length: name]|


#### AreProgramsResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.AreProgramsResident(System.Int32,System.UInt32*,System.Boolean*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|programs|[length: n]|
|residences|[length: n]|


#### BeginConditionalRender
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BeginConditionalRender(System.UInt32,OpenTK.Graphics.OpenGL.NvConditionalRender)
```
[requires: NV_conditional_render]
 Start conditional rendering

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies the name of an occlusion query object whose results are used to determine if the rendering commands are discarded.
            |
|mode| 
            Specifies how glBeginConditionalRender interprets the results of the occlusion query.
            |


#### BeginOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BeginOcclusionQuery(System.UInt32)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### BeginTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BeginTransformFeedback(OpenTK.Graphics.OpenGL.NvTransformFeedback)
```
[requires: NV_transform_feedback]
 Start transform feedback operation

|Parameter Name|Remarks|
|--------------|-------|
|primitiveMode| 
            Specify the output type of the primitives that will be recorded into the buffer objects that are bound for transform feedback.
            |


#### BeginVideoCapture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BeginVideoCapture(System.UInt32)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|


#### BindBufferBase
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindBufferBase(OpenTK.Graphics.OpenGL.NvTransformFeedback,System.UInt32,System.UInt32)
```
[requires: NV_transform_feedback]
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
OpenTK.Graphics.OpenGL.GL.NV.BindBufferOffset(OpenTK.Graphics.OpenGL.NvTransformFeedback,System.UInt32,System.UInt32,System.IntPtr)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|buffer|-|
|offset|-|


#### BindBufferRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindBufferRange(OpenTK.Graphics.OpenGL.NvTransformFeedback,System.UInt32,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: NV_transform_feedback]
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


#### BindProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindProgram(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|id|-|


#### BindTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindTransformFeedback(OpenTK.Graphics.OpenGL.NvTransformFeedback2,System.UInt32)
```
[requires: NV_transform_feedback2]
 Bind a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target to which to bind the transform feedback object id. target must be TransformFeedback.
            |
|id| 
            Specifies the name of a transform feedback object reserved by glGenTransformFeedbacks.
            |


#### BindVideoCaptureStreamBuffer
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindVideoCaptureStreamBuffer(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvVideoCapture,System.IntPtr)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|stream|-|
|frame_region|-|
|offset|-|


#### BindVideoCaptureStreamTexture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BindVideoCaptureStreamTexture(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvVideoCapture,OpenTK.Graphics.OpenGL.NvVideoCapture,System.UInt32)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|stream|-|
|frame_region|-|
|target|-|
|texture|-|


#### BlendBarrier
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BlendBarrier
```
[requires: NV_blend_equation_advanced]

#### BlendParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BlendParameter(OpenTK.Graphics.OpenGL.NvBlendEquationAdvanced,System.Int32)
```
[requires: NV_blend_equation_advanced]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|value|-|


#### BufferAddressRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.BufferAddressRange(OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.UInt32,System.UInt64,System.IntPtr)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|index|-|
|address|-|
|length|-|


#### ClearDepth
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ClearDepth(System.Double)
```
[requires: NV_depth_buffer_float]
 Specify the clear value for the depth buffer

|Parameter Name|Remarks|
|--------------|-------|
|depth| 
            Specifies the depth value used when the depth buffer is cleared. The initial value is 1.
            |


#### Color3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Color3h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### Color4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Color4h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 4]|


#### ColorFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ColorFormat(System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|


#### CombinerInput
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CombinerInput(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|portion|-|
|variable|-|
|input|-|
|mapping|-|
|componentUsage|-|


#### CombinerOutput
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CombinerOutput(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,System.Boolean,System.Boolean,System.Boolean)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|portion|-|
|abOutput|-|
|cdOutput|-|
|sumOutput|-|
|scale|-|
|bias|-|
|abDotProduct|-|
|cdDotProduct|-|
|muxSum|-|


#### CombinerParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CombinerParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners,System.Int32*)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|[length: pname]|


#### CombinerStageParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CombinerStageParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners2,OpenTK.Graphics.OpenGL.NvRegisterCombiners2,System.Single*)
```
[requires: NV_register_combiners2]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|pname|-|
|@params|[length: pname]|


#### CopyImageSubData
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CopyImageSubData(System.UInt32,OpenTK.Graphics.OpenGL.NvCopyImage,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt32,OpenTK.Graphics.OpenGL.NvCopyImage,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: NV_copy_image]
 Perform a raw data copy between two images

|Parameter Name|Remarks|
|--------------|-------|
|srcName| 
            The name of a texture or renderbuffer object from which to copy.
            |
|srcTarget| 
            The target representing the namespace of the source name srcName.
            |
|srcLevel| 
            The mipmap level to read from the source.
            |
|srcX| 
            The X coordinate of the left edge of the souce region to copy.
            |
|srcY| 
            The Y coordinate of the top edge of the souce region to copy.
            |
|srcZ| 
            The Z coordinate of the near edge of the souce region to copy.
            |
|dstName| 
            The name of a texture or renderbuffer object to which to copy.
            |
|dstTarget| 
            The target representing the namespace of the destination name dstName.
            |
|dstLevel| 
            The X coordinate of the left edge of the destination region.
            |
|dstX| 
            The X coordinate of the left edge of the destination region.
            |
|dstY| 
            The Y coordinate of the top edge of the destination region.
            |
|dstZ| 
            The Z coordinate of the near edge of the destination region.
            |
|width| 
            The height of the region to be copied.
            |
|height| 
            The depth of the region to be copied.
            |
|depth|-|


#### CopyPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CopyPath(System.UInt32,System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|resultPath|-|
|srcPath|-|


#### CoverFillPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverFillPath(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|coverMode|-|


#### CoverFillPathInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverFillPathInstanced(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|coverMode|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### CoverFillPathInstanced``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverFillPathInstanced``1(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|coverMode|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### CoverStrokePath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverStrokePath(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|coverMode|-|


#### CoverStrokePathInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverStrokePathInstanced(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|coverMode|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### CoverStrokePathInstanced``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.CoverStrokePathInstanced``1(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|coverMode|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### DeleteFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fences|[length: n]|


#### DeleteFences
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### DeleteOcclusionQueries
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteOcclusionQueries(System.Int32,System.UInt32*)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|ids|[length: n]|


#### DeleteOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteOcclusionQuery(System.UInt32)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n]|


#### DeletePath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeletePath(System.UInt32,System.Int32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|range|-|


#### DeleteProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteProgram(System.Int32,System.UInt32*)
```
[requires: NV_vertex_program]
 Deletes a program object

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the program object to be deleted.
            |
|programs|[length: n]|


#### DeleteTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteTransformFeedback(System.UInt32)
```
[requires: NV_transform_feedback2]
 Delete transform feedback objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of names of transform feedback objects to delete.
            |


#### DeleteTransformFeedbacks
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DeleteTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: NV_transform_feedback2]
 Delete transform feedback objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of transform feedback objects to delete.
            |
|ids|[length: n] 
            Specifies an array of names of transform feedback objects to delete.
            |


#### DepthBounds
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DepthBounds(System.Double,System.Double)
```
[requires: NV_depth_buffer_float]

|Parameter Name|Remarks|
|--------------|-------|
|zmin|-|
|zmax|-|


#### DepthRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DepthRange(System.Double,System.Double)
```
[requires: NV_depth_buffer_float]
 Specify mapping of depth values from normalized device coordinates to window coordinates

|Parameter Name|Remarks|
|--------------|-------|
|zNear| 
            Specifies the mapping of the near clipping plane to window coordinates. The initial value is 0.
            |
|zFar| 
            Specifies the mapping of the far clipping plane to window coordinates. The initial value is 1.
            |


#### DrawTexture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DrawTexture(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: NV_draw_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|sampler|-|
|x0|-|
|y0|-|
|x1|-|
|y1|-|
|z|-|
|s0|-|
|t0|-|
|s1|-|
|t1|-|


#### DrawTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.DrawTransformFeedback(OpenTK.Graphics.OpenGL.PrimitiveType,System.UInt32)
```
[requires: NV_transform_feedback2]
 Render primitives using a count derived from a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|id| 
            Specifies the name of a transform feedback object from which to retrieve a primitive count.
            |


#### EdgeFlagFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EdgeFlagFormat(System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|stride|-|


#### EndConditionalRender
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EndConditionalRender
```
[requires: NV_conditional_render]

#### EndOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EndOcclusionQuery
```
[requires: NV_occlusion_query]

#### EndTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EndTransformFeedback
```
[requires: NV_transform_feedback]

#### EndVideoCapture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EndVideoCapture(System.UInt32)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|


#### EvalMap
```csharp
OpenTK.Graphics.OpenGL.GL.NV.EvalMap(OpenTK.Graphics.OpenGL.NvEvaluators,OpenTK.Graphics.OpenGL.NvEvaluators)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|mode|-|


#### ExecuteProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ExecuteProgram(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.Single*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|id|-|
|@params|[length: 4]|


#### FinalCombinerInput
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FinalCombinerInput(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|variable|-|
|input|-|
|mapping|-|
|componentUsage|-|


#### FinishFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FinishFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### FlushPixelDataRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FlushPixelDataRange(OpenTK.Graphics.OpenGL.NvPixelDataRange)
```
[requires: NV_pixel_data_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### FlushVertexArrayRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FlushVertexArrayRange
```
[requires: NV_vertex_array_range]

#### FogCoordFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FogCoordFormat(OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|


#### FogCoordh
```csharp
OpenTK.Graphics.OpenGL.GL.NV.FogCoordh(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|fog|[length: 1]|


#### GenFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenFence
```
[requires: NV_fence]

#### GenFences
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### GenOcclusionQueries
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenOcclusionQueries(System.Int32,System.UInt32*)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|ids|[length: n]|


#### GenOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenOcclusionQuery
```
[requires: NV_occlusion_query]

#### GenPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenPath(System.Int32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|range|-|


#### GenProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenProgram(System.Int32,System.UInt32*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|programs|[length: n]|


#### GenTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenTransformFeedback
```
[requires: NV_transform_feedback2]
 Reserve transform feedback object names

#### GenTransformFeedbacks
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GenTransformFeedbacks(System.Int32,System.UInt32*)
```
[requires: NV_transform_feedback2]
 Reserve transform feedback object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of transform feedback object names to reserve.
            |
|ids|[length: n] 
            Specifies an array of into which the reserved names will be written.
            |


#### GetActiveVarying
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetActiveVarying(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Int32*,OpenTK.Graphics.OpenGL.NvTransformFeedback*,System.Text.StringBuilder)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|index|-|
|bufSize|-|
|length|[length: 1]|
|size|[length: 1]|
|type|[length: 1]|
|name|[length: program,index,bufSize]|


#### GetBufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetBufferParameter(OpenTK.Graphics.OpenGL.NvShaderBufferLoad,OpenTK.Graphics.OpenGL.NvShaderBufferLoad,System.UInt64*)
```
[requires: NV_shader_buffer_load]
 Return parameters of a buffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target buffer object. The symbolic constant must be ArrayBuffer, AtomicCounterBuffer, CopyReadBuffer, CopyWriteBuffer, DrawIndirectBuffer, DispatchIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|pname| 
            Specifies the symbolic name of a buffer object parameter. Accepted values are BufferAccess, BufferMapped, BufferSize, or BufferUsage.
            |
|@params|[length: pname] 
            Returns the requested parameter.
            |


#### GetCombinerInputParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetCombinerInputParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,System.Int32*)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|portion|-|
|variable|-|
|pname|-|
|@params|[length: pname]|


#### GetCombinerOutputParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetCombinerOutputParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,System.Int32*)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|portion|-|
|pname|-|
|@params|[length: pname]|


#### GetCombinerStageParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetCombinerStageParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners2,OpenTK.Graphics.OpenGL.NvRegisterCombiners2,System.Single*)
```
[requires: NV_register_combiners2]

|Parameter Name|Remarks|
|--------------|-------|
|stage|-|
|pname|-|
|@params|[length: pname]|


#### GetFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetFence(System.UInt32,OpenTK.Graphics.OpenGL.NvFence,System.Int32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|pname|-|
|@params|[length: pname]|


#### GetFinalCombinerInputParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetFinalCombinerInputParameter(OpenTK.Graphics.OpenGL.NvRegisterCombiners,OpenTK.Graphics.OpenGL.NvRegisterCombiners,System.Int32*)
```
[requires: NV_register_combiners]

|Parameter Name|Remarks|
|--------------|-------|
|variable|-|
|pname|-|
|@params|[length: pname]|


#### GetImageHandle
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetImageHandle(System.UInt32,System.Int32,System.Boolean,System.Int32,OpenTK.Graphics.OpenGL.NvBindlessTexture)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|
|layered|-|
|layer|-|
|format|-|


#### GetInteger
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetInteger(OpenTK.Graphics.OpenGL.NvShaderBufferLoad,System.UInt64*)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|result|[length: value]|


#### GetIntegerui64
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetIntegerui64(OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.UInt32,System.UInt64*)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|index|-|
|result|[length: value]|


#### GetMapAttribParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetMapAttribParameter(OpenTK.Graphics.OpenGL.NvEvaluators,System.UInt32,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32*)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|pname|-|
|@params|[length: pname]|


#### GetMapControlPoints
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetMapControlPoints(OpenTK.Graphics.OpenGL.NvEvaluators,System.UInt32,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32,System.Int32,System.Boolean,System.IntPtr)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|type|-|
|ustride|-|
|vstride|-|
|packed|-|
|points|[length: target]|


#### GetMapControlPoints``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetMapControlPoints``1(OpenTK.Graphics.OpenGL.NvEvaluators,System.UInt32,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32,System.Int32,System.Boolean,``0@)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|type|-|
|ustride|-|
|vstride|-|
|packed|-|
|points|[length: target]|


#### GetMapParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetMapParameter(OpenTK.Graphics.OpenGL.NvEvaluators,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32*)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: target,pname]|


#### GetMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetMultisample(OpenTK.Graphics.OpenGL.NvExplicitMultisample,System.UInt32,System.Single*)
```
[requires: NV_explicit_multisample]
 Retrieve the location of a sample

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the sample parameter name. pname must be SamplePosition.
            |
|index| 
            Specifies the index of the sample whose position to query.
            |
|val|[length: 2] 
            Specifies the address of an array to receive the position of the sample.
            |


#### GetNamedBufferParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetNamedBufferParameter(System.UInt32,OpenTK.Graphics.OpenGL.NvShaderBufferLoad,System.UInt64*)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|pname|-|
|@params|[length: pname]|


#### GetOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetOcclusionQuery(System.UInt32,OpenTK.Graphics.OpenGL.NvOcclusionQuery,System.UInt32*)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|pname|-|
|@params|[length: pname]|


#### GetPathColorGen
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathColorGen(OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|color|-|
|pname|-|
|value|[length: pname]|


#### GetPathCommand
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathCommand(System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|


#### GetPathCommands
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathCommands(System.UInt32,System.Byte*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|commands|[length: path]|


#### GetPathCoord
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathCoord(System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|


#### GetPathCoords
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathCoords(System.UInt32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|coords|[length: path]|


#### GetPathDashArray
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathDashArray(System.UInt32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|dashArray|[length: path]|


#### GetPathLength
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathLength(System.UInt32,System.Int32,System.Int32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|startSegment|-|
|numSegments|-|


#### GetPathMetric
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathMetric(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,System.Int32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|metricQueryMask|-|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|stride|-|
|metrics|[length: metricQueryMask,numPaths,stride]|


#### GetPathMetric``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathMetric``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,System.Int32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|metricQueryMask|-|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|stride|-|
|metrics|[length: metricQueryMask,numPaths,stride]|


#### GetPathMetricRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathMetricRange(System.UInt32,System.UInt32,System.Int32,System.Int32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|metricQueryMask|-|
|firstPathName|-|
|numPaths|-|
|stride|-|
|metrics|[length: metricQueryMask,numPaths,stride]|


#### GetPathParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathParameter(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|pname|-|
|value|[length: 4]|


#### GetPathSpacing
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathSpacing(OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,System.Single,System.Single,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|pathListMode|-|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|advanceScale|-|
|kerningScale|-|
|transformType|-|
|returnedSpacing|[length: pathListMode,numPaths]|


#### GetPathSpacing``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathSpacing``1(OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,System.Single,System.Single,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|pathListMode|-|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|advanceScale|-|
|kerningScale|-|
|transformType|-|
|returnedSpacing|[length: pathListMode,numPaths]|


#### GetPathTexGen
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetPathTexGen(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|texCoordSet|-|
|pname|-|
|value|[length: pname]|


#### GetProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgram(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,System.Int32*)
```
[requires: NV_vertex_program]
 Returns a parameter from a program object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies the program object to be queried.
            |
|pname| 
            Specifies the object parameter. Accepted symbolic names are DeleteStatus, LinkStatus, ValidateStatus, InfoLogLength, AttachedShaders, ActiveAtomicCounterBuffers, ActiveAttributes, ActiveAttributeMaxLength, ActiveUniforms, ActiveUniformBlocks, ActiveUniformBlockMaxNameLength, ActiveUniformMaxLength, ComputeWorkGroupSizeProgramBinaryLength, TransformFeedbackBufferMode, TransformFeedbackVaryings, TransformFeedbackVaryingMaxLength, GeometryVerticesOut, GeometryInputType, and GeometryOutputType.
            |
|@params|[length: 4] 
            Returns the requested object parameter.
            |


#### GetProgramEnvParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramEnvParameterI(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetProgramLocalParameterI
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramLocalParameterI(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### GetProgramNamedParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramNamedParameter(System.UInt32,System.Int32,System.Byte*,System.Single*)
```
[requires: NV_fragment_program]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|len|-|
|name|[length: 1]|
|@params|[length: 4]|


#### GetProgramParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramParameter(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.Single*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|pname|-|
|@params|[length: 4]|


#### GetProgramString
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramString(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,System.Byte*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|pname|-|
|program|[length: id,pname]|


#### GetProgramSubroutineParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetProgramSubroutineParameter(OpenTK.Graphics.OpenGL.NvGpuProgram5,System.UInt32,System.UInt32*)
```
[requires: NV_gpu_program5]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|param|[length: target]|


#### GetTextureHandle
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetTextureHandle(System.UInt32)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|


#### GetTextureSamplerHandle
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetTextureSamplerHandle(System.UInt32,System.UInt32)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|sampler|-|


#### GetTrackMatrix
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetTrackMatrix(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,OpenTK.Graphics.OpenGL.AssemblyProgramParameterArb,System.Int32*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|address|-|
|pname|-|
|@params|[length: 1]|


#### GetTransformFeedbackVarying
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetTransformFeedbackVarying(System.UInt32,System.UInt32,System.Int32*)
```
[requires: NV_transform_feedback]
 Retrieve information about varying variables selected for transform feedback

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the target program object.
            |
|index| 
            The index of the varying variable whose information to retrieve.
            |
|location|[length: 1] 
            The maximum number of characters, including the null terminator, that may be written into name.
            |


#### GetUniform
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetUniform(System.UInt32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_shader_buffer_load]
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


#### GetVaryingLocation
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVaryingLocation(System.UInt32,System.String)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|name|[length: name]|


#### GetVertexAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVertexAttrib(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,System.Int32*)
```
[requires: NV_vertex_program]
 Return a generic vertex attribute parameter

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the generic vertex attribute parameter to be queried.
            |
|pname| 
            Specifies the symbolic name of the vertex attribute parameter to be queried. Accepted values are VertexAttribArrayBufferBinding, VertexAttribArrayEnabled, VertexAttribArraySize, VertexAttribArrayStride, VertexAttribArrayType, VertexAttribArrayNormalized, VertexAttribArrayInteger, VertexAttribArrayDivisor, or CurrentVertexAttrib.
            |
|@params|[length: 1] 
            Returns the requested data.
            |


#### GetVertexAttribL
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVertexAttribL(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexAttribInteger64bit,System.UInt64*)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|[length: pname]|


#### GetVertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVertexAttribPointer(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,System.IntPtr)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|pointer|[length: 1]|


#### GetVertexAttribPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVertexAttribPointer``1(System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,``0@)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|pointer|[length: 1]|


#### GetVideo
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVideo(System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32*)
```
[requires: NV_present_video]

|Parameter Name|Remarks|
|--------------|-------|
|video_slot|-|
|pname|-|
|@params|[length: pname]|


#### GetVideoCapture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVideoCapture(System.UInt32,OpenTK.Graphics.OpenGL.NvVideoCapture,System.Int32*)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|pname|-|
|@params|[length: pname]|


#### GetVideoCaptureStream
```csharp
OpenTK.Graphics.OpenGL.GL.NV.GetVideoCaptureStream(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvVideoCapture,System.Int32*)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|stream|-|
|pname|-|
|@params|[length: pname]|


#### IndexFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IndexFormat(OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|


#### InterpolatePath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.InterpolatePath(System.UInt32,System.UInt32,System.UInt32,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|resultPath|-|
|pathA|-|
|pathB|-|
|weight|-|


#### IsBufferResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsBufferResident(OpenTK.Graphics.OpenGL.NvShaderBufferLoad)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### IsFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### IsImageHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsImageHandleResident(System.UInt64)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### IsNamedBufferResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsNamedBufferResident(System.UInt32)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### IsOcclusionQuery
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsOcclusionQuery(System.UInt32)
```
[requires: NV_occlusion_query]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|


#### IsPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsPath(System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|


#### IsPointInFillPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsPointInFillPath(System.UInt32,System.UInt32,System.Single,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|mask|-|
|x|-|
|y|-|


#### IsPointInStrokePath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsPointInStrokePath(System.UInt32,System.Single,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|x|-|
|y|-|


#### IsProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsProgram(System.UInt32)
```
[requires: NV_vertex_program]
 Determines if a name corresponds to a program object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a potential program object.
            |


#### IsTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsTextureHandleResident(System.UInt64)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### IsTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.IsTransformFeedback(System.UInt32)
```
[requires: NV_transform_feedback2]
 Determine if a name corresponds to a transform feedback object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a transform feedback object.
            |


#### LoadProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.LoadProgram(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.Int32,System.Byte*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|id|-|
|len|-|
|program|[length: len]|


#### MakeBufferNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeBufferNonResident(OpenTK.Graphics.OpenGL.NvShaderBufferLoad)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### MakeBufferResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeBufferResident(OpenTK.Graphics.OpenGL.NvShaderBufferLoad,OpenTK.Graphics.OpenGL.NvShaderBufferLoad)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|access|-|


#### MakeImageHandleNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeImageHandleNonResident(System.UInt64)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeImageHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeImageHandleResident(System.UInt64,OpenTK.Graphics.OpenGL.NvBindlessTexture)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|
|access|-|


#### MakeNamedBufferNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeNamedBufferNonResident(System.UInt32)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|


#### MakeNamedBufferResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeNamedBufferResident(System.UInt32,OpenTK.Graphics.OpenGL.NvShaderBufferLoad)
```
[requires: NV_shader_buffer_load]

|Parameter Name|Remarks|
|--------------|-------|
|buffer|-|
|access|-|


#### MakeTextureHandleNonResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeTextureHandleNonResident(System.UInt64)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MakeTextureHandleResident(System.UInt64)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MapControlPoints
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MapControlPoints(OpenTK.Graphics.OpenGL.NvEvaluators,System.UInt32,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean,System.IntPtr)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|type|-|
|ustride|-|
|vstride|-|
|uorder|-|
|vorder|-|
|packed|-|
|points|[length: target,uorder,vorder]|


#### MapControlPoints``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MapControlPoints``1(OpenTK.Graphics.OpenGL.NvEvaluators,System.UInt32,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean,``0@)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|type|-|
|ustride|-|
|vstride|-|
|uorder|-|
|vorder|-|
|packed|-|
|points|[length: target,uorder,vorder]|


#### MapParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MapParameter(OpenTK.Graphics.OpenGL.NvEvaluators,OpenTK.Graphics.OpenGL.NvEvaluators,System.Int32*)
```
[requires: NV_evaluators]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: target,pname]|


#### MultiDrawArraysIndirectBindles
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiDrawArraysIndirectBindles(OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,System.IntPtr,System.Int32,System.Int32,System.Int32)
```
[requires: NV_bindless_multi_draw_indirect]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|indirect|-|
|drawCount|-|
|stride|-|
|vertexBufferCount|-|


#### MultiDrawArraysIndirectBindles``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiDrawArraysIndirectBindles``1(OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,``0@,System.Int32,System.Int32,System.Int32)
```
[requires: NV_bindless_multi_draw_indirect]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|indirect|-|
|drawCount|-|
|stride|-|
|vertexBufferCount|-|


#### MultiDrawElementsIndirectBindles
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiDrawElementsIndirectBindles(OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,System.IntPtr,System.Int32,System.Int32,System.Int32)
```
[requires: NV_bindless_multi_draw_indirect]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|type|-|
|indirect|-|
|drawCount|-|
|stride|-|
|vertexBufferCount|-|


#### MultiDrawElementsIndirectBindles``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiDrawElementsIndirectBindles``1(OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,OpenTK.Graphics.OpenGL.NvBindlessMultiDrawIndirect,``0@,System.Int32,System.Int32,System.Int32)
```
[requires: NV_bindless_multi_draw_indirect]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|type|-|
|indirect|-|
|drawCount|-|
|stride|-|
|vertexBufferCount|-|


#### MultiTexCoord1h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiTexCoord1h(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|v|[length: 1]|


#### MultiTexCoord2h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiTexCoord2h(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|v|[length: 2]|


#### MultiTexCoord3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiTexCoord3h(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|v|[length: 3]|


#### MultiTexCoord4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.MultiTexCoord4h(OpenTK.Graphics.OpenGL.TextureUnit,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|v|[length: 4]|


#### Normal3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Normal3h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### NormalFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.NormalFormat(OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|stride|-|


#### PathColorGen
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathColorGen(OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|color|-|
|genMode|-|
|colorFormat|-|
|coeffs|[length: genMode,colorFormat]|


#### PathCommands
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathCommands(System.UInt32,System.Int32,System.Byte*,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|numCommands|-|
|commands|[length: numCommands]|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathCommands``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathCommands``1(System.UInt32,System.Int32,System.Byte*,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|numCommands|-|
|commands|[length: numCommands]|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathCoords
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathCoords(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathCoords``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathCoords``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathCoverDepthFunc
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathCoverDepthFunc(OpenTK.Graphics.OpenGL.DepthFunction)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|


#### PathDashArray
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathDashArray(System.UInt32,System.Int32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|dashCount|-|
|dashArray|[length: dashCount]|


#### PathFogGen
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathFogGen(OpenTK.Graphics.OpenGL.NvPathRendering)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|genMode|-|


#### PathGlyph
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathGlyph(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|firstPathName|-|
|fontTarget|-|
|fontName|[length: fontTarget,fontName]|
|fontStyle|-|
|numGlyphs|-|
|type|-|
|charcodes|[length: numGlyphs,type,charcodes]|
|handleMissingGlyphs|-|
|pathParameterTemplate|-|
|emScale|-|


#### PathGlyph``2
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathGlyph``2(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``1@,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|firstPathName|-|
|fontTarget|-|
|fontName|[length: fontTarget,fontName]|
|fontStyle|-|
|numGlyphs|-|
|type|-|
|charcodes|[length: numGlyphs,type,charcodes]|
|handleMissingGlyphs|-|
|pathParameterTemplate|-|
|emScale|-|


#### PathGlyphRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathGlyphRange(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|firstPathName|-|
|fontTarget|-|
|fontName|[length: fontTarget,fontName]|
|fontStyle|-|
|firstGlyph|-|
|numGlyphs|-|
|handleMissingGlyphs|-|
|pathParameterTemplate|-|
|emScale|-|


#### PathGlyphRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathGlyphRange``1(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|firstPathName|-|
|fontTarget|-|
|fontName|[length: fontTarget,fontName]|
|fontStyle|-|
|firstGlyph|-|
|numGlyphs|-|
|handleMissingGlyphs|-|
|pathParameterTemplate|-|
|emScale|-|


#### PathParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathParameter(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|pname|-|
|value|[length: pname]|


#### PathStencilDepthOffset
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathStencilDepthOffset(System.Single,System.Single)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|
|units|-|


#### PathStencilFunc
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathStencilFunc(OpenTK.Graphics.OpenGL.StencilFunction,System.Int32,System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|func|-|
|@ref|-|
|mask|-|


#### PathString
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathString(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32,System.IntPtr)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|format|-|
|length|-|
|pathString|[length: length]|


#### PathString``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathString``1(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32,``0@)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|format|-|
|length|-|
|pathString|[length: length]|


#### PathSubCommands
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathSubCommands(System.UInt32,System.Int32,System.Int32,System.Int32,System.Byte*,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|commandStart|-|
|commandsToDelete|-|
|numCommands|-|
|commands|[length: numCommands]|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathSubCommands``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathSubCommands``1(System.UInt32,System.Int32,System.Int32,System.Int32,System.Byte*,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|commandStart|-|
|commandsToDelete|-|
|numCommands|-|
|commands|[length: numCommands]|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathSubCoords
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathSubCoords(System.UInt32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|coordStart|-|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathSubCoords``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathSubCoords``1(System.UInt32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|coordStart|-|
|numCoords|-|
|coordType|-|
|coords|[length: numCoords,coordType]|


#### PathTexGen
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PathTexGen(OpenTK.Graphics.OpenGL.NvPathRendering,OpenTK.Graphics.OpenGL.NvPathRendering,System.Int32,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|texCoordSet|-|
|genMode|-|
|components|-|
|coeffs|[length: genMode,components]|


#### PauseTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PauseTransformFeedback
```
[requires: NV_transform_feedback2]
 Pause transform feedback operations

#### PixelDataRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PixelDataRange(OpenTK.Graphics.OpenGL.NvPixelDataRange,System.Int32,System.IntPtr)
```
[requires: NV_pixel_data_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|length|-|
|pointer|[length: length]|


#### PixelDataRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PixelDataRange``1(OpenTK.Graphics.OpenGL.NvPixelDataRange,System.Int32,``0@)
```
[requires: NV_pixel_data_range]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|length|-|
|pointer|[length: length]|


#### PointAlongPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PointAlongPath(System.UInt32,System.Int32,System.Int32,System.Single,System.Single*,System.Single*,System.Single*,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|startSegment|-|
|numSegments|-|
|distance|-|
|x|[length: 1]|
|y|[length: 1]|
|tangentX|[length: 1]|
|tangentY|[length: 1]|


#### PointParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PointParameter(OpenTK.Graphics.OpenGL.NvPointSprite,System.Int32*)
```
[requires: NV_point_sprite]
 Specify point parameters

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies a single-valued point parameter. PointFadeThresholdSize, and PointSpriteCoordOrigin are accepted.
            |
|@params|[length: pname] 
            For glPointParameterf and glPointParameteri, specifies the value that pname will be set to.
            |


#### PresentFrameDualFill
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PresentFrameDualFill(System.UInt32,System.UInt64,System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32)
```
[requires: NV_present_video]

|Parameter Name|Remarks|
|--------------|-------|
|video_slot|-|
|minPresentTime|-|
|beginPresentTimeId|-|
|presentDurationId|-|
|type|-|
|target0|-|
|fill0|-|
|target1|-|
|fill1|-|
|target2|-|
|fill2|-|
|target3|-|
|fill3|-|


#### PresentFrameKeye
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PresentFrameKeye(System.UInt32,System.UInt64,System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvPresentVideo,System.UInt32,System.UInt32)
```
[requires: NV_present_video]

|Parameter Name|Remarks|
|--------------|-------|
|video_slot|-|
|minPresentTime|-|
|beginPresentTimeId|-|
|presentDurationId|-|
|type|-|
|target0|-|
|fill0|-|
|key0|-|
|target1|-|
|fill1|-|
|key1|-|


#### PrimitiveRestart
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PrimitiveRestart
```
[requires: NV_primitive_restart]

#### PrimitiveRestartIndex
```csharp
OpenTK.Graphics.OpenGL.GL.NV.PrimitiveRestartIndex(System.UInt32)
```
[requires: NV_primitive_restart]
 Specify the primitive restart index

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the value to be interpreted as the primitive restart index.
            |


#### ProgramBufferParameters
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramBufferParameters(OpenTK.Graphics.OpenGL.NvParameterBufferObject,System.UInt32,System.UInt32,System.Int32,System.Single*)
```
[requires: NV_parameter_buffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|bindingIndex|-|
|wordIndex|-|
|count|-|
|@params|[length: count]|


#### ProgramBufferParametersI
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramBufferParametersI(OpenTK.Graphics.OpenGL.NvParameterBufferObject,System.UInt32,System.UInt32,System.Int32,System.UInt32*)
```
[requires: NV_parameter_buffer_object]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|bindingIndex|-|
|wordIndex|-|
|count|-|
|@params|[length: count]|


#### ProgramEnvParameterI4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramEnvParameterI4(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### ProgramEnvParametersI4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramEnvParametersI4(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.Int32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### ProgramLocalParameterI4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramLocalParameterI4(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|@params|[length: 4]|


#### ProgramLocalParametersI4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramLocalParametersI4(OpenTK.Graphics.OpenGL.NvGpuProgram4,System.UInt32,System.Int32,System.UInt32*)
```
[requires: NV_gpu_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|count|-|
|@params|[length: count*4]|


#### ProgramNamedParameter4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramNamedParameter4(System.UInt32,System.Int32,System.Byte*,System.Single*)
```
[requires: NV_fragment_program]

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|len|-|
|name|[length: 1]|
|v|[length: 4]|


#### ProgramParameter4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramParameter4(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.Single*)
```
[requires: NV_vertex_program]
 Specify a parameter for a program object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the name of a program object whose parameter to modify.
            |
|index| 
            Specifies the name of the parameter to modify.
            |
|v|[length: 4] 
            Specifies the new value of the parameter specified by pname for program.
            |


#### ProgramParameters4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramParameters4(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,System.UInt32,System.Single*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|count|-|
|v|[length: count*4]|


#### ProgramSubroutineParameters
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramSubroutineParameters(OpenTK.Graphics.OpenGL.NvGpuProgram5,System.Int32,System.UInt32*)
```
[requires: NV_gpu_program5]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|count|-|
|@params|[length: count]|


#### ProgramUniform
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniform(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: NV_shader_buffer_load]
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


#### ProgramUniform1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniform1(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniform2(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniform3(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniform4(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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


#### ProgramUniformHandle
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramUniformHandle(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|values|[length: count]|


#### ProgramVertexLimit
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ProgramVertexLimit(OpenTK.Graphics.OpenGL.NvGeometryProgram4,System.Int32)
```
[requires: NV_geometry_program4]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|limit|-|


#### RenderbufferStorageMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.NV.RenderbufferStorageMultisampleCoverage(OpenTK.Graphics.OpenGL.RenderbufferTarget,System.Int32,System.Int32,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32)
```
[requires: NV_framebuffer_multisample_coverage]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|coverageSamples|-|
|colorSamples|-|
|internalformat|-|
|width|-|
|height|-|


#### RequestResidentProgram
```csharp
OpenTK.Graphics.OpenGL.GL.NV.RequestResidentProgram(System.Int32,System.UInt32*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|programs|[length: n]|


#### ResumeTransformFeedback
```csharp
OpenTK.Graphics.OpenGL.GL.NV.ResumeTransformFeedback
```
[requires: NV_transform_feedback2]
 Resume transform feedback operations

#### SampleMaskIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.NV.SampleMaskIndexed(System.UInt32,System.UInt32)
```
[requires: NV_explicit_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|mask|-|


#### SecondaryColor3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.SecondaryColor3h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### SecondaryColorFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.SecondaryColorFormat(System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|


#### SetFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.SetFence(System.UInt32,OpenTK.Graphics.OpenGL.NvFence)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|condition|-|


#### StencilFillPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilFillPath(System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|fillMode|-|
|mask|-|


#### StencilFillPathInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilFillPathInstanced(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|fillMode|-|
|mask|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### StencilFillPathInstanced``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilFillPathInstanced``1(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|fillMode|-|
|mask|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### StencilStrokePath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilStrokePath(System.UInt32,System.Int32,System.UInt32)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|reference|-|
|mask|-|


#### StencilStrokePathInstanced
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilStrokePathInstanced(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,System.IntPtr,System.UInt32,System.Int32,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|reference|-|
|mask|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### StencilStrokePathInstanced``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.StencilStrokePathInstanced``1(System.Int32,OpenTK.Graphics.OpenGL.NvPathRendering,``0@,System.UInt32,System.Int32,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|numPaths|-|
|pathNameType|-|
|paths|[length: numPaths,pathNameType,paths]|
|pathBase|-|
|reference|-|
|mask|-|
|transformType|-|
|transformValues|[length: numPaths,transformType]|


#### TestFence
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TestFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### TexCoord1h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexCoord1h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 1]|


#### TexCoord2h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexCoord2h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 2]|


#### TexCoord3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexCoord3h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### TexCoord4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexCoord4h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 4]|


#### TexCoordFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexCoordFormat(System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|


#### TexImage2DMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexImage2DMultisampleCoverage(OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|coverageSamples|-|
|colorSamples|-|
|internalFormat|-|
|width|-|
|height|-|
|fixedSampleLocations|-|


#### TexImage3DMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexImage3DMultisampleCoverage(OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|coverageSamples|-|
|colorSamples|-|
|internalFormat|-|
|width|-|
|height|-|
|depth|-|
|fixedSampleLocations|-|


#### TexRenderbuffer
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TexRenderbuffer(OpenTK.Graphics.OpenGL.TextureTarget,System.UInt32)
```
[requires: NV_explicit_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|renderbuffer|-|


#### TextureBarrier
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TextureBarrier
```
[requires: NV_texture_barrier]

#### TextureImage2DMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TextureImage2DMultisample(System.UInt32,OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|samples|-|
|internalFormat|-|
|width|-|
|height|-|
|fixedSampleLocations|-|


#### TextureImage2DMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TextureImage2DMultisampleCoverage(System.UInt32,OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|coverageSamples|-|
|colorSamples|-|
|internalFormat|-|
|width|-|
|height|-|
|fixedSampleLocations|-|


#### TextureImage3DMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TextureImage3DMultisample(System.UInt32,OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|samples|-|
|internalFormat|-|
|width|-|
|height|-|
|depth|-|
|fixedSampleLocations|-|


#### TextureImage3DMultisampleCoverage
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TextureImage3DMultisampleCoverage(System.UInt32,OpenTK.Graphics.OpenGL.NvTextureMultisample,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: NV_texture_multisample]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|coverageSamples|-|
|colorSamples|-|
|internalFormat|-|
|width|-|
|height|-|
|depth|-|
|fixedSampleLocations|-|


#### TrackMatrix
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TrackMatrix(OpenTK.Graphics.OpenGL.AssemblyProgramTargetArb,System.UInt32,OpenTK.Graphics.OpenGL.NvVertexProgram,OpenTK.Graphics.OpenGL.NvVertexProgram)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|address|-|
|matrix|-|
|transform|-|


#### TransformFeedbackAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TransformFeedbackAttrib(System.Int32,System.Int32*,OpenTK.Graphics.OpenGL.NvTransformFeedback)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|count|-|
|attribs|[length: count]|
|bufferMode|-|


#### TransformFeedbackStreamAttrib
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TransformFeedbackStreamAttrib(System.Int32,System.Int32*,System.Int32,System.Int32*,OpenTK.Graphics.OpenGL.NvTransformFeedback)
```
[requires: NV_transform_feedback]

|Parameter Name|Remarks|
|--------------|-------|
|count|-|
|attribs|[length: count]|
|nbuffers|-|
|bufstreams|[length: nbuffers]|
|bufferMode|-|


#### TransformFeedbackVaryings
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TransformFeedbackVaryings(System.UInt32,System.Int32,System.Int32*,OpenTK.Graphics.OpenGL.NvTransformFeedback)
```
[requires: NV_transform_feedback]
 Specify values to record in transform feedback buffers

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            The name of the target program object.
            |
|count| 
            The number of varying variables used for transform feedback.
            |
|locations|[length: count] 
            An array of count zero-terminated strings specifying the names of the varying variables to use for transform feedback.
            |
|bufferMode| 
            Identifies the mode used to capture the varying variables when transform feedback is active. bufferMode must be InterleavedAttribs or SeparateAttribs.
            |


#### TransformPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.TransformPath(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvPathRendering,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|resultPath|-|
|srcPath|-|
|transformType|-|
|transformValues|[length: transformType]|


#### Uniform
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Uniform(System.Int32,System.Int32,System.UInt64*)
```
[requires: NV_shader_buffer_load]
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


#### Uniform1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Uniform1(System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.Uniform2(System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.Uniform3(System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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
OpenTK.Graphics.OpenGL.GL.NV.Uniform4(System.Int32,System.Int32,System.UInt64*)
```
[requires: AMD_gpu_shader_int64|NV_gpu_shader5]
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


#### UniformHandle
```csharp
OpenTK.Graphics.OpenGL.GL.NV.UniformHandle(System.Int32,System.Int32,System.UInt64*)
```
[requires: NV_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|value|[length: count]|


#### VDPAUFin
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUFin
```
[requires: NV_vdpau_interop]

#### VDPAUGetSurface
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUGetSurface(System.IntPtr,OpenTK.Graphics.OpenGL.NvVdpauInterop,System.Int32,System.Int32*,System.Int32*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|surface|-|
|pname|-|
|bufSize|-|
|length|-|
|values|[length: bufSize]|


#### VDPAUInit
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUInit(System.IntPtr,System.IntPtr)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpDevice|-|
|getProcAddress|-|


#### VDPAUInit``2
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUInit``2(``0@,``1@)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpDevice|-|
|getProcAddress|-|


#### VDPAUIsSurface
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUIsSurface(System.IntPtr)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|surface|-|


#### VDPAUMapSurfaces
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUMapSurfaces(System.Int32,System.IntPtr*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|numSurfaces|-|
|surfaces|[length: numSurfaces]|


#### VDPAURegisterOutputSurface
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAURegisterOutputSurface(System.IntPtr,OpenTK.Graphics.OpenGL.NvVdpauInterop,System.Int32,System.UInt32*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpSurface|-|
|target|-|
|numTextureNames|-|
|textureNames|[length: numTextureNames]|


#### VDPAURegisterOutputSurface``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAURegisterOutputSurface``1(``0@,OpenTK.Graphics.OpenGL.NvVdpauInterop,System.Int32,System.UInt32*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpSurface|-|
|target|-|
|numTextureNames|-|
|textureNames|[length: numTextureNames]|


#### VDPAURegisterVideoSurface
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAURegisterVideoSurface(System.IntPtr,OpenTK.Graphics.OpenGL.NvVdpauInterop,System.Int32,System.UInt32*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpSurface|-|
|target|-|
|numTextureNames|-|
|textureNames|[length: numTextureNames]|


#### VDPAURegisterVideoSurface``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAURegisterVideoSurface``1(``0@,OpenTK.Graphics.OpenGL.NvVdpauInterop,System.Int32,System.UInt32*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|vdpSurface|-|
|target|-|
|numTextureNames|-|
|textureNames|[length: numTextureNames]|


#### VDPAUSurfaceAccess
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUSurfaceAccess(System.IntPtr,OpenTK.Graphics.OpenGL.NvVdpauInterop)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|surface|-|
|access|-|


#### VDPAUUnmapSurfaces
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUUnmapSurfaces(System.Int32,System.IntPtr*)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|numSurface|-|
|surfaces|[length: numSurface]|


#### VDPAUUnregisterSurface
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VDPAUUnregisterSurface(System.IntPtr)
```
[requires: NV_vdpau_interop]

|Parameter Name|Remarks|
|--------------|-------|
|surface|-|


#### Vertex2h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Vertex2h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 2]|


#### Vertex3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Vertex3h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 3]|


#### Vertex4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.Vertex4h(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|v|[length: 4]|


#### VertexArrayRange
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexArrayRange(System.Int32,System.IntPtr)
```
[requires: NV_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|


#### VertexArrayRange``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexArrayRange``1(System.Int32,``0@)
```
[requires: NV_vertex_array_range]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|pointer|[length: length]|


#### VertexAttrib1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib1(System.UInt32,System.Int16*)
```
[requires: NV_vertex_program]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 1] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib1h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib1h(System.UInt32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttrib2
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib2(System.UInt32,System.Int16*)
```
[requires: NV_vertex_program]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 2] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib2h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib2h(System.UInt32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttrib3
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib3(System.UInt32,System.Int16*)
```
[requires: NV_vertex_program]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 3] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib3h(System.UInt32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttrib4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib4(System.UInt32,System.Byte*)
```
[requires: NV_vertex_program]
 Specifies the value of a generic vertex attribute

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|v|[length: 4] 
            For the vector commands (glVertexAttrib*v), specifies a pointer to an array of values to be used for the generic vertex attribute.
            |


#### VertexAttrib4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttrib4h(System.UInt32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Boolean,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]
 Specify the organization of vertex arrays

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            The generic vertex attribute array being described.
            |
|size| 
            The number of values per vertex that are stored in the array.
            |
|type| 
            The type of the data stored in the array.
            |
|normalized| 
            The distance between elements within the buffer.
            |
|stride| 
            The distance between elements within the buffer.
            |


#### VertexAttribIFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribIFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|


#### VertexAttribL1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribL1(System.UInt32,System.UInt64*)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 1]|


#### VertexAttribL2
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribL2(System.UInt32,System.UInt64*)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 2]|


#### VertexAttribL3
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribL3(System.UInt32,System.UInt64*)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 3]|


#### VertexAttribL4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribL4(System.UInt32,System.UInt64*)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|[length: 4]|


#### VertexAttribLFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribLFormat(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.NvVertexAttribInteger64bit,System.Int32)
```
[requires: NV_vertex_attrib_integer_64bit]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|size|-|
|type|-|
|stride|-|


#### VertexAttribPointer
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribPointer(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribParameterArb,System.Int32,System.IntPtr)
```
[requires: NV_vertex_program]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|fsize| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. Additionally, the symbolic constant Bgra is accepted by glVertexAttribPointer. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by glVertexAttribPointer and glVertexAttribIPointer. Additionally HalfFloat, Float, Double, Fixed, Int2101010Rev, UnsignedInt2101010Rev and UnsignedInt10F11F11FRev are accepted by glVertexAttribPointer. Double is also accepted by glVertexAttribLPointer and is the only token accepted by the type parameter for that function. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: fsize,type,stride] 
            Specifies a offset of the first component of the first generic vertex attribute in the array in the data store of the buffer currently bound to the ArrayBuffer target. The initial value is 0.
            |


#### VertexAttribPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribPointer``1(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.VertexAttribParameterArb,System.Int32,``0@)
```
[requires: NV_vertex_program]
 Define an array of generic vertex attribute data

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specifies the index of the generic vertex attribute to be modified.
            |
|fsize| 
            Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4. Additionally, the symbolic constant Bgra is accepted by glVertexAttribPointer. The initial value is 4.
            |
|type| 
            Specifies the data type of each component in the array. The symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, and UnsignedInt are accepted by glVertexAttribPointer and glVertexAttribIPointer. Additionally HalfFloat, Float, Double, Fixed, Int2101010Rev, UnsignedInt2101010Rev and UnsignedInt10F11F11FRev are accepted by glVertexAttribPointer. Double is also accepted by glVertexAttribLPointer and is the only token accepted by the type parameter for that function. The initial value is Float.
            |
|stride| 
            Specifies the byte offset between consecutive generic vertex attributes. If stride is 0, the generic vertex attributes are understood to be tightly packed in the array. The initial value is 0.
            |
|pointer|[length: fsize,type,stride] 
            Specifies a offset of the first component of the first generic vertex attribute in the array in the data store of the buffer currently bound to the ArrayBuffer target. The initial value is 0.
            |


#### VertexAttribs1
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs1(System.UInt32,System.Int32,System.Int16*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|count|-|
|v|[length: count]|


#### VertexAttribs1h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs1h(System.UInt32,System.Int32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|n|-|
|v|[length: n]|


#### VertexAttribs2
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs2(System.UInt32,System.Int32,System.Int16*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|count|-|
|v|[length: count*2]|


#### VertexAttribs2h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs2h(System.UInt32,System.Int32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|n|-|
|v|[length: n]|


#### VertexAttribs3
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs3(System.UInt32,System.Int32,System.Int16*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|count|-|
|v|[length: count*3]|


#### VertexAttribs3h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs3h(System.UInt32,System.Int32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|n|-|
|v|[length: n]|


#### VertexAttribs4
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs4(System.UInt32,System.Int32,System.Byte*)
```
[requires: NV_vertex_program]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|count|-|
|v|[length: count*4]|


#### VertexAttribs4h
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexAttribs4h(System.UInt32,System.Int32,OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|n|-|
|v|[length: n]|


#### VertexFormat
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexFormat(System.Int32,OpenTK.Graphics.OpenGL.NvVertexBufferUnifiedMemory,System.Int32)
```
[requires: NV_vertex_buffer_unified_memory]

|Parameter Name|Remarks|
|--------------|-------|
|size|-|
|type|-|
|stride|-|


#### VertexWeighth
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VertexWeighth(OpenTK.Half*)
```
[requires: NV_half_float]

|Parameter Name|Remarks|
|--------------|-------|
|weight|[length: 1]|


#### VideoCapture
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VideoCapture(System.UInt32,System.UInt32*,System.UInt64*)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|sequence_num|-|
|capture_time|-|


#### VideoCaptureStreamParameter
```csharp
OpenTK.Graphics.OpenGL.GL.NV.VideoCaptureStreamParameter(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.NvVideoCapture,System.Int32*)
```
[requires: NV_video_capture]

|Parameter Name|Remarks|
|--------------|-------|
|video_capture_slot|-|
|stream|-|
|pname|-|
|@params|[length: pname]|


#### WeightPath
```csharp
OpenTK.Graphics.OpenGL.GL.NV.WeightPath(System.UInt32,System.Int32,System.UInt32*,System.Single*)
```
[requires: NV_path_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|resultPath|-|
|numPaths|-|
|paths|[length: numPaths]|
|weights|[length: numPaths]|





