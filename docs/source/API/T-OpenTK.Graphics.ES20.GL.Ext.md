---
title: Ext
---

# Ext
_namespace: [OpenTK.Graphics.ES20.GL](N-OpenTK.Graphics.ES20.GL.html)_



### Methods

#### ActiveProgram
```csharp
OpenTK.Graphics.ES20.GL.Ext.ActiveProgram(System.UInt32)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|


#### ActiveShaderProgram
```csharp
OpenTK.Graphics.ES20.GL.Ext.ActiveShaderProgram(System.UInt32,System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Set the active program object for a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the program pipeline object to set the active program object for.
            |
|program| 
            Specifies the program object to set as the active program pipeline object pipeline.
            |


#### BeginQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.BeginQuery(OpenTK.Graphics.ES20.QueryTarget,System.UInt32)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Delimit the boundaries of a query object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target type of query object established between glBeginQuery and the subsequent glEndQuery. The symbolic constant must be one of SamplesPassed, AnySamplesPassed, AnySamplesPassedConservative, PrimitivesGenerated, TransformFeedbackPrimitivesWritten, or TimeElapsed.
            |
|id| 
            Specifies the name of a query object.
            |


#### BindProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.BindProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Bind a program pipeline to the current context

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of the pipeline object to bind to the context.
            |


#### BlendEquation
```csharp
OpenTK.Graphics.ES20.GL.Ext.BlendEquation(System.UInt32,OpenTK.Graphics.ES20.BlendEquationMode)
```
[requires: EXT_draw_buffers_indexed]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.ES20.GL.Ext.BlendEquationSeparate(System.UInt32,OpenTK.Graphics.ES20.BlendEquationMode,OpenTK.Graphics.ES20.BlendEquationMode)
```
[requires: EXT_draw_buffers_indexed]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, or FuncReverseSubtract.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.ES20.GL.Ext.BlendFunc(System.UInt32,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All)
```
[requires: EXT_draw_buffers_indexed]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
|src| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |
|dst|-|


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.ES20.GL.Ext.BlendFuncSeparate(System.UInt32,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All)
```
[requires: EXT_draw_buffers_indexed]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            Specifies how the red, green, and blue blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha, ConstantColor, OneMinusConstantColor, ConstantAlpha, OneMinusConstantAlpha, and SrcAlphaSaturate. The initial value is One.
            |
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


#### ColorMask
```csharp
OpenTK.Graphics.ES20.GL.Ext.ColorMask(System.UInt32,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
[requires: EXT_draw_buffers_indexed]
 Enable and disable writing of frame buffer color components

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|r| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|g| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|b| 
            Specify whether red, green, blue, and alpha can or cannot be written into the frame buffer. The initial values are all True, indicating that the color components can be written.
            |
|a|-|


#### CopyImageSubData
```csharp
OpenTK.Graphics.ES20.GL.Ext.CopyImageSubData(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt32,OpenTK.Graphics.ES20.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_copy_image]
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
|srcWidth| 
            The width of the region to be copied.
            |
|srcHeight| 
            The height of the region to be copied.
            |
|srcDepth| 
            The depth of the region to be copied.
            |


#### CreateShaderProgram
```csharp
OpenTK.Graphics.ES20.GL.Ext.CreateShaderProgram(OpenTK.Graphics.ES20.All,System.Int32,System.String[])
```
[requires: EXT_separate_shader_objects]
 Create a stand-alone program from an array of null-terminated source code strings

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the type of shader to create.
            |
|count| 
            Specifies the number of source code strings in the array strings.
            |
|strings|[length: count] 
            Specifies the address of an array of pointers to source code strings from which to create the program object.
            |


#### DeleteProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.DeleteProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteProgramPipelines
```csharp
OpenTK.Graphics.ES20.GL.Ext.DeleteProgramPipelines(System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
 Delete program pipeline objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline objects to delete.
            |
|pipelines|[length: n] 
            Specifies an array of names of program pipeline objects to delete.
            |


#### DeleteQueries
```csharp
OpenTK.Graphics.ES20.GL.Ext.DeleteQueries(System.Int32,System.UInt32*)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of query objects to be deleted.
            |
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### DeleteQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.DeleteQuery(System.UInt32)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Delete named query objects

|Parameter Name|Remarks|
|--------------|-------|
|ids|[length: n] 
            Specifies an array of query objects to be deleted.
            |


#### Disable
```csharp
OpenTK.Graphics.ES20.GL.Ext.Disable(OpenTK.Graphics.ES20.All,System.UInt32)
```
[requires: EXT_draw_buffers_indexed]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|


#### DiscardFramebuffer
```csharp
OpenTK.Graphics.ES20.GL.Ext.DiscardFramebuffer(OpenTK.Graphics.ES20.All,System.Int32,OpenTK.Graphics.ES20.All*)
```
[requires: EXT_discard_framebuffer]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|numAttachments|-|
|attachments|[length: numAttachments]|


#### DrawArraysInstanced
```csharp
OpenTK.Graphics.ES20.GL.Ext.DrawArraysInstanced(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_draw_instanced|EXT_instanced_arrays]
 Draw multiple instances of a range of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, TriangleStrip, TriangleFan, TrianglesLinesAdjacency, LineStripAdjacency, TrianglesAdjacency, TriangleStripAdjacency and Patches are accepted.
            |
|start| 
            Specifies the starting index in the enabled arrays.
            |
|count| 
            Specifies the number of indices to be rendered.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawBuffers
```csharp
OpenTK.Graphics.ES20.GL.Ext.DrawBuffers(System.Int32,OpenTK.Graphics.ES20.DrawBufferMode*)
```
[requires: EXT_draw_buffers]
 Specifies a list of color buffers to be drawn into

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of buffers in bufs.
            |
|bufs| 
            Points to an array of symbolic constants specifying the buffers into which fragment colors or data values will be written.
            |


#### DrawBuffersIndexed
```csharp
OpenTK.Graphics.ES20.GL.Ext.DrawBuffersIndexed(System.Int32,OpenTK.Graphics.ES20.All*,System.Int32*)
```
[requires: EXT_multiview_draw_buffers]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|location|[length: n]|
|indices|[length: n]|


#### DrawElementsInstanced
```csharp
OpenTK.Graphics.ES20.GL.Ext.DrawElementsInstanced(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: EXT_draw_instanced|EXT_instanced_arrays]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### DrawElementsInstanced``1
```csharp
OpenTK.Graphics.ES20.GL.Ext.DrawElementsInstanced``1(OpenTK.Graphics.ES20.PrimitiveType,System.Int32,OpenTK.Graphics.ES20.DrawElementsType,``0@,System.Int32)
```
[requires: EXT_draw_instanced|EXT_instanced_arrays]
 Draw multiple instances of a set of elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count| 
            Specifies the number of elements to be rendered.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: count,type] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the number of instances of the specified range of indices to be rendered.
            |


#### Enable
```csharp
OpenTK.Graphics.ES20.GL.Ext.Enable(OpenTK.Graphics.ES20.All,System.UInt32)
```
[requires: EXT_draw_buffers_indexed]
 Enable or disable server-side GL capabilities

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating a GL capability.
            |
|index|-|


#### EndQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.EndQuery(OpenTK.Graphics.ES20.QueryTarget)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|


#### FlushMappedBufferRange
```csharp
OpenTK.Graphics.ES20.GL.Ext.FlushMappedBufferRange(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr)
```
[requires: EXT_map_buffer_range]
 Indicate modifications to a range of a mapped buffer

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the flush operation. target must be ArrayBuffer, CopyReadBuffer, CopyWriteBuffer, DispatchIndirectBuffer, DrawIndirectBuffer, ElementArrayBuffer, PixelPackBuffer, PixelUnpackBuffer, QueryBuffer, ShaderStorageBuffer, TextureBuffer, TransformFeedbackBuffer, or UniformBuffer.
            |
|offset| 
            Specifies the start of the buffer subrange, in basic machine units.
            |
|length| 
            Specifies the length of the buffer subrange, in basic machine units.
            |


#### FramebufferTexture
```csharp
OpenTK.Graphics.ES20.GL.Ext.FramebufferTexture(OpenTK.Graphics.ES20.FramebufferTarget,OpenTK.Graphics.ES20.All,System.UInt32,System.Int32)
```
[requires: EXT_geometry_shader]
 Attach a level of a texture object as a logical buffer to the currently bound framebuffer object

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the framebuffer target. target must be DrawFramebuffer, ReadFramebuffer, or Framebuffer. Framebuffer is equivalent to DrawFramebuffer.
            |
|attachment| 
            Specifies the attachment point of the framebuffer. attachment must be ColorAttachmenti, DepthAttachment, StencilAttachment or DepthStencilAttachment.
            |
|texture| 
            Specifies the texture object to attach to the framebuffer attachment point named by attachment.
            |
|level| 
            Specifies the mipmap level of texture to attach.
            |


#### FramebufferTexture2DMultisample
```csharp
OpenTK.Graphics.ES20.GL.Ext.FramebufferTexture2DMultisample(OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,System.UInt32,System.Int32,System.Int32)
```
[requires: EXT_multisampled_render_to_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|attachment|-|
|textarget|-|
|texture|-|
|level|-|
|samples|-|


#### GenProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.GenProgramPipeline
```
[requires: EXT_separate_shader_objects]
 Reserve program pipeline object names

#### GenProgramPipelines
```csharp
OpenTK.Graphics.ES20.GL.Ext.GenProgramPipelines(System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
 Reserve program pipeline object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of program pipeline object names to reserve.
            |
|pipelines|[length: n] 
            Specifies an array of into which the reserved names will be written.
            |


#### GenQueries
```csharp
OpenTK.Graphics.ES20.GL.Ext.GenQueries(System.Int32,System.UInt32*)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Generate query object names

|Parameter Name|Remarks|
|--------------|-------|
|n| 
            Specifies the number of query object names to be generated.
            |
|ids|[length: n] 
            Specifies an array in which the generated query object names are stored.
            |


#### GenQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.GenQuery
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Generate query object names

#### GetGraphicsResetStatus
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetGraphicsResetStatus
```
[requires: EXT_robustness]

#### GetInteger
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetInteger(OpenTK.Graphics.ES20.GetIndexedPName,System.UInt32,System.Int32*)
```
[requires: EXT_multiview_draw_buffers]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|index|-|
|data|-|


#### GetnUniform
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetnUniform(System.UInt32,System.Int32,System.Int32,System.Int32*)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|bufSize|-|
|@params|[length: bufSize]|


#### GetObjectLabel
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetObjectLabel(OpenTK.Graphics.ES20.All,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: EXT_debug_label]
 Retrieve the label of a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            The namespace from which the name of the object is allocated.
            |
|@object| 
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


#### GetProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetProgramPipeline(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32*)
```
[requires: EXT_separate_shader_objects]
 Retrieve properties of a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object whose parameter retrieve.
            |
|pname| 
            Specifies the name of the parameter to retrieve.
            |
|@params| 
            Specifies the address of a variable into which will be written the value or values of pname for pipeline.
            |


#### GetProgramPipelineInfoLog
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetProgramPipelineInfoLog(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: EXT_separate_shader_objects]
 Retrieve the info log string from a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object from which to retrieve the info log.
            |
|bufSize| 
            Specifies the maximum number of characters, including the null terminator, that may be written into infoLog.
            |
|length|[length: 1] 
            Specifies the address of a variable into which will be written the number of characters written into infoLog.
            |
|infoLog|[length: bufSize] 
            Specifies the address of an array of characters into which will be written the info log for pipeline.
            |


#### GetQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetQuery(OpenTK.Graphics.ES20.QueryTarget,OpenTK.Graphics.ES20.GetQueryParam,System.Int32*)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|-|


#### GetQueryObject
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetQueryObject(System.UInt32,OpenTK.Graphics.ES20.GetQueryObjectParam,System.UInt32*)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Return parameters of a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies the name of a query object.
            |
|pname| 
            Specifies the symbolic name of a query object parameter. Accepted values are QueryResult or QueryResultAvailable.
            |
|@params| 
            If a buffer is bound to the QueryResultBuffer target, then params is treated as an offset to a location within that buffer's data store to receive the result of the query. If no buffer is bound to QueryResultBuffer, then params is treated as an address in client memory of a variable to receive the resulting data.
            |


#### GetSamplerParameterI
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetSamplerParameterI(System.UInt32,OpenTK.Graphics.ES20.All,System.UInt32*)
```
[requires: EXT_texture_border_clamp]

|Parameter Name|Remarks|
|--------------|-------|
|sampler|-|
|pname|-|
|@params|[length: pname]|


#### GetTexParameterI
```csharp
OpenTK.Graphics.ES20.GL.Ext.GetTexParameterI(OpenTK.Graphics.ES20.TextureTarget,OpenTK.Graphics.ES20.GetTextureParameter,System.UInt32*)
```
[requires: EXT_texture_border_clamp]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### InsertEventMarker
```csharp
OpenTK.Graphics.ES20.GL.Ext.InsertEventMarker(System.Int32,System.String)
```
[requires: EXT_debug_marker]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|marker|-|


#### IsEnabled
```csharp
OpenTK.Graphics.ES20.GL.Ext.IsEnabled(OpenTK.Graphics.ES20.All,System.UInt32)
```
[requires: EXT_draw_buffers_indexed]
 Test whether a capability is enabled

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a symbolic constant indicating a GL capability.
            |
|index|-|


#### IsProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.IsProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Determine if a name corresponds to a program pipeline object

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies a value that may be the name of a program pipeline object.
            |


#### IsQuery
```csharp
OpenTK.Graphics.ES20.GL.Ext.IsQuery(System.UInt32)
```
[requires: EXT_disjoint_timer_query|EXT_occlusion_query_boolean]
 Determine if a name corresponds to a query object

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specifies a value that may be the name of a query object.
            |


#### LabelObject
```csharp
OpenTK.Graphics.ES20.GL.Ext.LabelObject(OpenTK.Graphics.ES20.All,System.UInt32,System.Int32,System.String)
```
[requires: EXT_debug_label]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|@object|-|
|length|-|
|label|-|


#### MapBufferRange
```csharp
OpenTK.Graphics.ES20.GL.Ext.MapBufferRange(OpenTK.Graphics.ES20.BufferTarget,System.IntPtr,System.IntPtr,System.UInt32)
```
[requires: EXT_map_buffer_range]
 Map a section of a buffer object's data store

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target buffer is bound.
            |
|offset| 
            Specifies a the starting offset within the buffer of the range to be mapped.
            |
|length| 
            Specifies a length of the range to be mapped.
            |
|access| 
            Specifies a combination of access flags indicating the desired access to the range.
            |


#### MultiDrawArrays
```csharp
OpenTK.Graphics.ES20.GL.Ext.MultiDrawArrays(OpenTK.Graphics.ES20.PrimitiveType,System.Int32*,System.Int32*,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives from array data

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|first|[length: primcount] 
            Points to an array of starting indices in the enabled arrays.
            |
|count|[length: primcount] 
            Points to an array of the number of indices to be rendered.
            |
|primcount| 
            Specifies the size of the first and count
            |


#### MultiDrawElements
```csharp
OpenTK.Graphics.ES20.GL.Ext.MultiDrawElements(OpenTK.Graphics.ES20.PrimitiveType,System.Int32*,OpenTK.Graphics.ES20.DrawElementsType,System.IntPtr,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: primcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: primcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the size of the count and indices arrays.
            |


#### MultiDrawElements``1
```csharp
OpenTK.Graphics.ES20.GL.Ext.MultiDrawElements``1(OpenTK.Graphics.ES20.PrimitiveType,System.Int32*,OpenTK.Graphics.ES20.DrawElementsType,``0@,System.Int32)
```
[requires: EXT_multi_draw_arrays]
 Render multiple sets of primitives by specifying indices of array data elements

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency and Patches are accepted.
            |
|count|[length: primcount] 
            Points to an array of the elements counts.
            |
|type| 
            Specifies the type of the values in indices. Must be one of UnsignedByte, UnsignedShort, or UnsignedInt.
            |
|indices|[length: primcount] 
            Specifies a pointer to the location where the indices are stored.
            |
|primcount| 
            Specifies the size of the count and indices arrays.
            |


#### PatchParameter
```csharp
OpenTK.Graphics.ES20.GL.Ext.PatchParameter(OpenTK.Graphics.ES20.All,System.Int32)
```
[requires: EXT_tessellation_shader]
 Specifies the parameters for patch primitives

|Parameter Name|Remarks|
|--------------|-------|
|pname| 
            Specifies the name of the parameter to set. The symbolc constants PatchVertices, PatchDefaultOuterLevel, and PatchDefaultInnerLevel are accepted.
            |
|value| 
            Specifies the new value for the parameter given by pname.
            |


#### PopGroupMarker
```csharp
OpenTK.Graphics.ES20.GL.Ext.PopGroupMarker
```
[requires: EXT_debug_marker]

#### PrimitiveBoundingBox
```csharp
OpenTK.Graphics.ES20.GL.Ext.PrimitiveBoundingBox(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
[requires: EXT_primitive_bounding_box]

|Parameter Name|Remarks|
|--------------|-------|
|minX|-|
|minY|-|
|minZ|-|
|minW|-|
|maxX|-|
|maxY|-|
|maxZ|-|
|maxW|-|


#### ProgramParameter
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramParameter(System.UInt32,OpenTK.Graphics.ES20.ProgramParameterName,System.Int32)
```
[requires: EXT_separate_shader_objects]
 Specify a parameter for a program object

|Parameter Name|Remarks|
|--------------|-------|
|program| 
            Specifies the name of a program object whose parameter to modify.
            |
|pname| 
            Specifies the name of the parameter to modify.
            |
|value| 
            Specifies the new value of the parameter specified by pname for program.
            |


#### ProgramUniform1
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniform1(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
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
OpenTK.Graphics.ES20.GL.Ext.ProgramUniform2(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
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
OpenTK.Graphics.ES20.GL.Ext.ProgramUniform3(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
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
OpenTK.Graphics.ES20.GL.Ext.ProgramUniform4(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: EXT_separate_shader_objects]
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


#### ProgramUniformMatrix2
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*4]|


#### ProgramUniformMatrix2x3
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix2x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### ProgramUniformMatrix2x4
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix2x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### ProgramUniformMatrix3
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*9]|


#### ProgramUniformMatrix3x2
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix3x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*6]|


#### ProgramUniformMatrix3x4
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix3x4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### ProgramUniformMatrix4
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix4(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects|EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*16]|


#### ProgramUniformMatrix4x2
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix4x2(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*8]|


#### ProgramUniformMatrix4x3
```csharp
OpenTK.Graphics.ES20.GL.Ext.ProgramUniformMatrix4x3(System.UInt32,System.Int32,System.Int32,System.Boolean,System.Single*)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|transpose|-|
|value|[length: count*12]|


#### PushGroupMarker
```csharp
OpenTK.Graphics.ES20.GL.Ext.PushGroupMarker(System.Int32,System.String)
```
[requires: EXT_debug_marker]

|Parameter Name|Remarks|
|--------------|-------|
|length|-|
|marker|-|


#### QueryCounter
```csharp
OpenTK.Graphics.ES20.GL.Ext.QueryCounter(System.UInt32,OpenTK.Graphics.ES20.All)
```
[requires: EXT_disjoint_timer_query]
 Record the GL time into a query object after all previous commands have reached the GL server but have not yet necessarily executed.

|Parameter Name|Remarks|
|--------------|-------|
|id| 
            Specify the name of a query object into which to record the GL time.
            |
|target| 
            Specify the counter to query. target must be Timestamp.
            |


#### ReadBufferIndexed
```csharp
OpenTK.Graphics.ES20.GL.Ext.ReadBufferIndexed(OpenTK.Graphics.ES20.All,System.Int32)
```
[requires: EXT_multiview_draw_buffers]

|Parameter Name|Remarks|
|--------------|-------|
|src|-|
|index|-|


#### ReadnPixels
```csharp
OpenTK.Graphics.ES20.GL.Ext.ReadnPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,System.Int32,System.IntPtr)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|width|-|
|height|-|
|format|-|
|type|-|
|bufSize|-|
|data|[length: bufSize]|


#### ReadnPixels``1
```csharp
OpenTK.Graphics.ES20.GL.Ext.ReadnPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,System.Int32,``0@)
```
[requires: EXT_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|width|-|
|height|-|
|format|-|
|type|-|
|bufSize|-|
|data|[length: bufSize]|


#### RenderbufferStorageMultisample
```csharp
OpenTK.Graphics.ES20.GL.Ext.RenderbufferStorageMultisample(OpenTK.Graphics.ES20.RenderbufferTarget,System.Int32,OpenTK.Graphics.ES20.RenderbufferInternalFormat,System.Int32,System.Int32)
```
[requires: EXT_multisampled_render_to_texture]
 Establish data storage, format, dimensions and sample count of a renderbuffer object's image

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies a binding to which the target of the allocation and must be Renderbuffer.
            |
|samples| 
            Specifies the number of samples to be used for the renderbuffer object's storage.
            |
|internalformat| 
            Specifies the internal format to use for the renderbuffer object's image.
            |
|width| 
            Specifies the width of the renderbuffer, in pixels.
            |
|height| 
            Specifies the height of the renderbuffer, in pixels.
            |


#### SamplerParameterI
```csharp
OpenTK.Graphics.ES20.GL.Ext.SamplerParameterI(System.UInt32,OpenTK.Graphics.ES20.All,System.UInt32*)
```
[requires: EXT_texture_border_clamp]

|Parameter Name|Remarks|
|--------------|-------|
|sampler|-|
|pname|-|
|param|[length: pname]|


#### TexBuffer
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexBuffer(OpenTK.Graphics.ES20.TextureTarget,OpenTK.Graphics.ES20.All,System.UInt32)
```
[requires: EXT_texture_buffer]
 Attach the storage for a buffer object to the active buffer texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation and must be TextureBuffer.
            |
|internalformat| 
            Specifies the internal format of the data in the store belonging to buffer.
            |
|buffer| 
            Specifies the name of the buffer object whose storage to attach to the active buffer texture.
            |


#### TexBufferRange
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexBufferRange(OpenTK.Graphics.ES20.All,OpenTK.Graphics.ES20.All,System.UInt32,System.IntPtr,System.IntPtr)
```
[requires: EXT_texture_buffer]
 Bind a range of a buffer's data store to a buffer texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specifies the target of the operation and must be TextureBuffer.
            |
|internalformat| 
            Specifies the internal format of the data in the store belonging to buffer.
            |
|buffer| 
            Specifies the name of the buffer object whose storage to attach to the active buffer texture.
            |
|offset| 
            Specifies the offset of the start of the range of the buffer's data store to attach.
            |
|size| 
            Specifies the size of the range of the buffer's data store to attach.
            |


#### TexParameterI
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexParameterI(OpenTK.Graphics.ES20.TextureTarget,OpenTK.Graphics.ES20.TextureParameterName,System.UInt32*)
```
[requires: EXT_texture_border_clamp]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|@params|[length: pname]|


#### TexStorage1D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexStorage1D(OpenTK.Graphics.ES20.All,System.Int32,OpenTK.Graphics.ES20.All,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a one-dimensional texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be either Texture1D or ProxyTexture1D.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |


#### TexStorage2D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexStorage2D(OpenTK.Graphics.ES20.TextureTarget2d,System.Int32,OpenTK.Graphics.ES20.SizedInternalFormat,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a two-dimensional or one-dimensional array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture2D, ProxyTexture2D, Texture1DArray, ProxyTexture1DArray, TextureRectangle, ProxyTextureRectangle, or ProxyTextureCubeMap.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |
|height| 
            Specifies the height of the texture, in texels.
            |


#### TexStorage3D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TexStorage3D(OpenTK.Graphics.ES20.TextureTarget3d,System.Int32,OpenTK.Graphics.ES20.SizedInternalFormat,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]
 Simultaneously specify storage for all levels of a three-dimensional, two-dimensional array or cube-map array texture

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Specify the target of the operation. target must be one of Texture3D, ProxyTexture3D, Texture2DArray, ProxyTexture2DArray, TextureCubeArray, or ProxyTextureCubeArray.
            |
|levels| 
            Specify the number of texture levels.
            |
|internalformat| 
            Specifies the sized internal format to be used to store texture image data.
            |
|width| 
            Specifies the width of the texture, in texels.
            |
|height| 
            Specifies the height of the texture, in texels.
            |
|depth| 
            Specifies the depth of the texture, in texels.
            |


#### TextureStorage1D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TextureStorage1D(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32,OpenTK.Graphics.ES20.All,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|


#### TextureStorage2D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TextureStorage2D(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32,OpenTK.Graphics.ES20.All,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|


#### TextureStorage3D
```csharp
OpenTK.Graphics.ES20.GL.Ext.TextureStorage3D(System.UInt32,OpenTK.Graphics.ES20.All,System.Int32,OpenTK.Graphics.ES20.All,System.Int32,System.Int32,System.Int32)
```
[requires: EXT_texture_storage]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|levels|-|
|internalformat|-|
|width|-|
|height|-|
|depth|-|


#### TextureView
```csharp
OpenTK.Graphics.ES20.GL.Ext.TextureView(System.UInt32,OpenTK.Graphics.ES20.All,System.UInt32,OpenTK.Graphics.ES20.All,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_texture_view]
 Initialize a texture as a data alias of another texture's data store

|Parameter Name|Remarks|
|--------------|-------|
|texture| 
            Specifies the texture object to be initialized as a view.
            |
|target| 
            Specifies the target to be used for the newly initialized texture.
            |
|origtexture| 
            Specifies the name of a texture object of which to make a view.
            |
|internalformat| 
            Specifies the internal format for the newly created view.
            |
|minlevel| 
            Specifies lowest level of detail of the view.
            |
|numlevels| 
            Specifies the number of levels of detail to include in the view.
            |
|minlayer| 
            Specifies the index of the first layer to include in the view.
            |
|numlayers| 
            Specifies the number of layers to include in the view.
            |


#### UseProgramStages
```csharp
OpenTK.Graphics.ES20.GL.Ext.UseProgramStages(System.UInt32,System.UInt32,System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Bind stages of a program object to a program pipeline

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the program pipeline object to which to bind stages from program.
            |
|stages| 
            Specifies a set of program stages to bind to the program pipeline object.
            |
|program| 
            Specifies the program object containing the shader executables to use in pipeline.
            |


#### UseShaderProgram
```csharp
OpenTK.Graphics.ES20.GL.Ext.UseShaderProgram(OpenTK.Graphics.ES20.All,System.UInt32)
```
[requires: EXT_separate_shader_objects]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|program|-|


#### ValidateProgramPipeline
```csharp
OpenTK.Graphics.ES20.GL.Ext.ValidateProgramPipeline(System.UInt32)
```
[requires: EXT_separate_shader_objects]
 Validate a program pipeline object against current GL state

|Parameter Name|Remarks|
|--------------|-------|
|pipeline| 
            Specifies the name of a program pipeline object to validate.
            |


#### VertexAttribDivisor
```csharp
OpenTK.Graphics.ES20.GL.Ext.VertexAttribDivisor(System.UInt32,System.UInt32)
```
[requires: EXT_instanced_arrays]
 Modify the rate at which generic vertex attributes advance during instanced rendering

|Parameter Name|Remarks|
|--------------|-------|
|index| 
            Specify the index of the generic vertex attribute.
            |
|divisor| 
            Specify the number of instances that will pass between updates of the generic attribute at slot index.
            |





