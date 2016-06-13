---
title: Amd
---

# Amd
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### BeginPerfMonitor
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.BeginPerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|


#### BlendEquationIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.BlendEquationIndexed(System.UInt32,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend)
```
[requires: AMD_draw_buffers_blend]

|Parameter Name|Remarks|
|--------------|-------|
|buf|-|
|mode|-|


#### BlendEquationSeparateIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.BlendEquationSeparateIndexed(System.UInt32,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend)
```
[requires: AMD_draw_buffers_blend]

|Parameter Name|Remarks|
|--------------|-------|
|buf|-|
|modeRGB|-|
|modeAlpha|-|


#### BlendFuncIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.BlendFuncIndexed(System.UInt32,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend)
```
[requires: AMD_draw_buffers_blend]

|Parameter Name|Remarks|
|--------------|-------|
|buf|-|
|src|-|
|dst|-|


#### BlendFuncSeparateIndexed
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.BlendFuncSeparateIndexed(System.UInt32,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend,OpenTK.Graphics.OpenGL.AmdDrawBuffersBlend)
```
[requires: AMD_draw_buffers_blend]

|Parameter Name|Remarks|
|--------------|-------|
|buf|-|
|srcRGB|-|
|dstRGB|-|
|srcAlpha|-|
|dstAlpha|-|


#### DebugMessageCallback
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DebugMessageCallback(OpenTK.Graphics.OpenGL.DebugProcAmd,System.IntPtr)
```
[requires: AMD_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageCallback``1
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DebugMessageCallback``1(OpenTK.Graphics.OpenGL.DebugProcAmd,``0@)
```
[requires: AMD_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageEnable
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DebugMessageEnable(OpenTK.Graphics.OpenGL.AmdDebugOutput,OpenTK.Graphics.OpenGL.AmdDebugOutput,System.Int32,System.UInt32*,System.Boolean)
```
[requires: AMD_debug_output]

|Parameter Name|Remarks|
|--------------|-------|
|category|-|
|severity|-|
|count|-|
|ids|[length: count]|
|enabled|-|


#### DebugMessageInsert
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DebugMessageInsert(OpenTK.Graphics.OpenGL.AmdDebugOutput,OpenTK.Graphics.OpenGL.AmdDebugOutput,System.UInt32,System.Int32,System.String)
```
[requires: AMD_debug_output]
 Inject an application-supplied message into the debug message queue

|Parameter Name|Remarks|
|--------------|-------|
|category| 
            The source of the debug message to insert.
            |
|severity| 
            The severity of the debug messages to insert.
            |
|id| 
            The user-supplied identifier of the message to insert.
            |
|length| 
            The length string contained in the character array whose address is given by message.
            |
|buf|[length: length] 
            The length string contained in the character array whose address is given by message.
            |


#### DeleteNames
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DeleteNames(OpenTK.Graphics.OpenGL.AmdNameGenDelete,System.UInt32,System.UInt32*)
```
[requires: AMD_name_gen_delete]

|Parameter Name|Remarks|
|--------------|-------|
|identifier|-|
|num|-|
|names|[length: num]|


#### DeletePerfMonitor
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DeletePerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitors|[length: n]|


#### DeletePerfMonitors
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.DeletePerfMonitors(System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|monitors|[length: n]|


#### EndPerfMonitor
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.EndPerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|


#### GenNames
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GenNames(OpenTK.Graphics.OpenGL.AmdNameGenDelete,System.UInt32,System.UInt32*)
```
[requires: AMD_name_gen_delete]

|Parameter Name|Remarks|
|--------------|-------|
|identifier|-|
|num|-|
|names|[length: num]|


#### GenPerfMonitor
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GenPerfMonitor
```
[requires: AMD_performance_monitor]

#### GenPerfMonitors
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GenPerfMonitors(System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|monitors|[length: n]|


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.AmdDebugOutput*,System.UInt32*,System.UInt32*,System.Int32*,System.Text.StringBuilder)
```
[requires: AMD_debug_output]
 Retrieve messages from the debug message log

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            The number of debug messages to retrieve from the log.
            |
|bufsize| 
            The size of the buffer whose address is given by messageLog.
            |
|categories|[length: count] 
            The address of an array of variables to receive the sources of the retrieved messages.
            |
|severities|[length: count] 
            The address of an array of variables to receive the severites of the retrieved messages.
            |
|ids|[length: count] 
            The address of an array of unsigned integers to receive the ids of the retrieved messages.
            |
|lengths|[length: count] 
            The address of an array of variables to receive the lengths of the received messages.
            |
|message|[length: bufsize] 
            The address of an array of variables to receive the lengths of the received messages.
            |


#### GetPerfMonitorCounterData
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorCounterData(System.UInt32,OpenTK.Graphics.OpenGL.AmdPerformanceMonitor,System.Int32,System.UInt32*,System.Int32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|
|pname|-|
|dataSize|-|
|data|[length: dataSize]|
|bytesWritten|[length: 1]|


#### GetPerfMonitorCounterInfo
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorCounterInfo(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.AmdPerformanceMonitor,System.IntPtr)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|counter|-|
|pname|-|
|data|[length: pname]|


#### GetPerfMonitorCounterInfo``1
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorCounterInfo``1(System.UInt32,System.UInt32,OpenTK.Graphics.OpenGL.AmdPerformanceMonitor,``0@)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|counter|-|
|pname|-|
|data|[length: pname]|


#### GetPerfMonitorCounters
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorCounters(System.UInt32,System.Int32*,System.Int32*,System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|numCounters|[length: 1]|
|maxActiveCounters|[length: 1]|
|counterSize|-|
|counters|[length: counterSize]|


#### GetPerfMonitorCounterString
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorCounterString(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|counter|-|
|bufSize|-|
|length|[length: 1]|
|counterString|[length: bufSize]|


#### GetPerfMonitorGroups
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorGroups(System.Int32*,System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|numGroups|[length: 1]|
|groupsSize|-|
|groups|[length: groupsSize]|


#### GetPerfMonitorGroupString
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.GetPerfMonitorGroupString(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|bufSize|-|
|length|[length: 1]|
|groupString|[length: bufSize]|


#### IsName
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.IsName(OpenTK.Graphics.OpenGL.AmdNameGenDelete,System.UInt32)
```
[requires: AMD_name_gen_delete]

|Parameter Name|Remarks|
|--------------|-------|
|identifier|-|
|name|-|


#### MultiDrawArraysIndirect
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.MultiDrawArraysIndirect(OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,System.IntPtr,System.Int32,System.Int32)
```
[requires: AMD_multi_draw_indirect]
 Render multiple sets of primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect| 
            Specifies the address of an array of structures containing the draw parameters.
            |
|primcount| 
            Specifies the the number of elements in the array of draw parameter structures.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawArraysIndirect``1
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.MultiDrawArraysIndirect``1(OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,``0@,System.Int32,System.Int32)
```
[requires: AMD_multi_draw_indirect]
 Render multiple sets of primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|indirect| 
            Specifies the address of an array of structures containing the draw parameters.
            |
|primcount| 
            Specifies the the number of elements in the array of draw parameter structures.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawElementsIndirect
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.MultiDrawElementsIndirect(OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,System.IntPtr,System.Int32,System.Int32)
```
[requires: AMD_multi_draw_indirect]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect| 
            Specifies the address of a structure containing an array of draw parameters.
            |
|primcount| 
            Specifies the number of elements in the array addressed by indirect.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### MultiDrawElementsIndirect``1
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.MultiDrawElementsIndirect``1(OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,OpenTK.Graphics.OpenGL.AmdMultiDrawIndirect,``0@,System.Int32,System.Int32)
```
[requires: AMD_multi_draw_indirect]
 Render indexed primitives from array data, taking parameters from memory

|Parameter Name|Remarks|
|--------------|-------|
|mode| 
            Specifies what kind of primitives to render. Symbolic constants Points, LineStrip, LineLoop, Lines, LineStripAdjacency, LinesAdjacency, TriangleStrip, TriangleFan, Triangles, TriangleStripAdjacency, TrianglesAdjacency, and Patches are accepted.
            |
|type| 
            Specifies the type of data in the buffer bound to the ElementArrayBuffer binding.
            |
|indirect| 
            Specifies the address of a structure containing an array of draw parameters.
            |
|primcount| 
            Specifies the number of elements in the array addressed by indirect.
            |
|stride| 
            Specifies the distance in basic machine units between elements of the draw parameter array.
            |


#### QueryObjectParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.QueryObjectParameter(OpenTK.Graphics.OpenGL.AmdOcclusionQueryEvent,System.UInt32,OpenTK.Graphics.OpenGL.AmdOcclusionQueryEvent,OpenTK.Graphics.OpenGL.OcclusionQueryEventMaskAmd)
```
[requires: AMD_occlusion_query_event]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|id|-|
|pname|-|
|param|-|


#### SelectPerfMonitorCounters
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.SelectPerfMonitorCounters(System.UInt32,System.Boolean,System.UInt32,System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|
|enable|-|
|group|-|
|numCounters|-|
|counterList|[length: numCounters]|


#### SetMultisample
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.SetMultisample(OpenTK.Graphics.OpenGL.AmdSamplePositions,System.UInt32,System.Single*)
```
[requires: AMD_sample_positions]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|index|-|
|val|[length: 2]|


#### StencilOpValue
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.StencilOpValue(OpenTK.Graphics.OpenGL.AmdStencilOperationExtended,System.UInt32)
```
[requires: AMD_stencil_operation_extended]

|Parameter Name|Remarks|
|--------------|-------|
|face|-|
|value|-|


#### TessellationFactor
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.TessellationFactor(System.Single)
```
[requires: AMD_vertex_shader_tessellator]

|Parameter Name|Remarks|
|--------------|-------|
|factor|-|


#### TessellationMode
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.TessellationMode(OpenTK.Graphics.OpenGL.AmdVertexShaderTessellator)
```
[requires: AMD_vertex_shader_tessellator]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|


#### TexStorageSparse
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.TexStorageSparse(OpenTK.Graphics.OpenGL.AmdSparseTexture,OpenTK.Graphics.OpenGL.AmdSparseTexture,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt32)
```
[requires: AMD_sparse_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|internalFormat|-|
|width|-|
|height|-|
|depth|-|
|layers|-|
|flags|-|


#### TextureStorageSparse
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.TextureStorageSparse(System.UInt32,OpenTK.Graphics.OpenGL.AmdSparseTexture,OpenTK.Graphics.OpenGL.AmdSparseTexture,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt32)
```
[requires: AMD_sparse_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|target|-|
|internalFormat|-|
|width|-|
|height|-|
|depth|-|
|layers|-|
|flags|-|


#### VertexAttribParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Amd.VertexAttribParameter(System.UInt32,OpenTK.Graphics.OpenGL.AmdInterleavedElements,System.Int32)
```
[requires: AMD_interleaved_elements]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|param|-|





