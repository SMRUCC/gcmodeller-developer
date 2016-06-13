---
title: Arb
---

# Arb
_namespace: [OpenTK.Graphics.OpenGL4.GL](N-OpenTK.Graphics.OpenGL4.GL.html)_



### Methods

#### BlendEquation
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.BlendEquation(System.UInt32,OpenTK.Graphics.OpenGL4.BlendEquationMode)
```
[requires: ARB_draw_buffers_blend]
 Specify the equation used for both the RGB blend equation and the Alpha blend equation

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            for glBlendEquationi, specifies the index of the draw buffer for which to set the blend equation.
            |
|mode| 
            specifies how source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendEquationSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.BlendEquationSeparate(System.UInt32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All)
```
[requires: ARB_draw_buffers_blend]
 Set the RGB blend equation and the alpha blend equation separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            for glBlendEquationSeparatei, specifies the index of the draw buffer for which to set the blend equations.
            |
|modeRGB| 
            specifies the RGB blend equation, how the red, green, and blue components of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |
|modeAlpha| 
            specifies the alpha blend equation, how the alpha component of the source and destination colors are combined. It must be FuncAdd, FuncSubtract, FuncReverseSubtract, Min, Max.
            |


#### BlendFunc
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.BlendFunc(System.UInt32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All)
```
[requires: ARB_draw_buffers_blend]
 Specify pixel arithmetic

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            For glBlendFunci, specifies the index of the draw buffer for which to set the blend function.
            |
|src| 
            Specifies how the red, green, blue, and alpha source blending factors are computed. The initial value is One.
            |
|dst| 
            Specifies how the red, green, blue, and alpha destination blending factors are computed. The following symbolic constants are accepted: Zero, One, SrcColor, OneMinusSrcColor, DstColor, OneMinusDstColor, SrcAlpha, OneMinusSrcAlpha, DstAlpha, OneMinusDstAlpha. ConstantColor, OneMinusConstantColor, ConstantAlpha, and OneMinusConstantAlpha. The initial value is Zero.
            |


#### BlendFuncSeparate
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.BlendFuncSeparate(System.UInt32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All)
```
[requires: ARB_draw_buffers_blend]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|buf| 
            For glBlendFuncSeparatei, specifies the index of the draw buffer for which to set the blend functions.
            |
|srcRGB| 
            Specifies how the red, green, and blue blending factors are computed. The initial value is One.
            |
|dstRGB| 
            Specifies how the red, green, and blue destination blending factors are computed. The initial value is Zero.
            |
|srcAlpha| 
            Specified how the alpha source blending factor is computed. The initial value is One.
            |
|dstAlpha| 
            Specified how the alpha destination blending factor is computed. The initial value is Zero.
            |


#### CompileShaderInclude
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.CompileShaderInclude(System.UInt32,System.Int32,System.String[],System.Int32*)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|shader|-|
|count|-|
|path|[length: count]|
|length|[length: count]|


#### CreateSyncFromCLevent
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.CreateSyncFromCLevent(System.IntPtr*,System.IntPtr*,System.UInt32)
```
[requires: ARB_cl_event]

|Parameter Name|Remarks|
|--------------|-------|
|context|-|
|@event|-|
|flags|-|


#### DebugMessageCallback
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DebugMessageCallback(OpenTK.Graphics.OpenGL4.DebugProcArb,System.IntPtr)
```
[requires: ARB_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam|[length: callback] 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageCallback``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DebugMessageCallback``1(OpenTK.Graphics.OpenGL4.DebugProcArb,``0@)
```
[requires: ARB_debug_output]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam|[length: callback] 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageControl
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DebugMessageControl(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.UInt32*,System.Boolean)
```
[requires: ARB_debug_output]
 Control the reporting of debug messages in a debug context

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of debug messages to enable or disable.
            |
|type| 
            The type of debug messages to enable or disable.
            |
|severity| 
            The severity of debug messages to enable or disable.
            |
|count| 
            The length of the array ids.
            |
|ids|[length: count] 
            The address of an array of unsigned integers contianing the ids of the messages to enable or disable.
            |
|enabled| 
            A Boolean flag determining whether the selected messages should be enabled or disabled.
            |


#### DebugMessageInsert
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DebugMessageInsert(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.UInt32,OpenTK.Graphics.OpenGL4.All,System.Int32,System.String)
```
[requires: ARB_debug_output]
 Inject an application-supplied message into the debug message queue

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of the debug message to insert.
            |
|type| 
            The type of the debug message insert.
            |
|id| 
            The user-supplied identifier of the message to insert.
            |
|severity| 
            The severity of the debug messages to insert.
            |
|length| 
            The length string contained in the character array whose address is given by message.
            |
|buf|[length: length] 
            The address of a character array containing the message to insert.
            |


#### DeleteNamedString
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DeleteNamedString(System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|


#### DispatchComputeGroupSize
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.DispatchComputeGroupSize(System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: ARB_compute_variable_group_size]

|Parameter Name|Remarks|
|--------------|-------|
|num_groups_x|-|
|num_groups_y|-|
|num_groups_z|-|
|group_size_x|-|
|group_size_y|-|
|group_size_z|-|


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL4.All*,OpenTK.Graphics.OpenGL4.All*,System.UInt32*,OpenTK.Graphics.OpenGL4.All*,System.Int32*,System.Text.StringBuilder)
```
[requires: ARB_debug_output]
 Retrieve messages from the debug message log

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            The number of debug messages to retrieve from the log.
            |
|bufSize| 
            The size of the buffer whose address is given by messageLog.
            |
|sources|[length: count] 
            The address of an array of variables to receive the sources of the retrieved messages.
            |
|types|[length: count] 
            The address of an array of variables to receive the types of the retrieved messages.
            |
|ids|[length: count] 
            The address of an array of unsigned integers to receive the ids of the retrieved messages.
            |
|severities|[length: count] 
            The address of an array of variables to receive the severites of the retrieved messages.
            |
|lengths|[length: count] 
            The address of an array of variables to receive the lengths of the received messages.
            |
|messageLog|[length: bufSize] 
            The address of an array of characters that will receive the messages.
            |


#### GetGraphicsResetStatus
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetGraphicsResetStatus
```
[requires: ARB_robustness]

#### GetImageHandle
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetImageHandle(System.UInt32,System.Int32,System.Boolean,System.Int32,OpenTK.Graphics.OpenGL4.All)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|
|layered|-|
|layer|-|
|format|-|


#### GetNamedString
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetNamedString(System.Int32,System.String,OpenTK.Graphics.OpenGL4.All,System.Int32*)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|
|pname|-|
|@params|[length: pname]|


#### GetnColorTable
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnColorTable(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|table|[length: bufSize]|


#### GetnColorTable``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnColorTable``1(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|table|[length: bufSize]|


#### GetnCompressedTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnCompressedTexImage(OpenTK.Graphics.OpenGL4.All,System.Int32,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|lod|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnCompressedTexImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnCompressedTexImage``1(OpenTK.Graphics.OpenGL4.All,System.Int32,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|lod|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnConvolutionFilter
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnConvolutionFilter(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|image|[length: bufSize]|


#### GetnConvolutionFilter``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnConvolutionFilter``1(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|bufSize|-|
|image|[length: bufSize]|


#### GetnHistogram
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnHistogram(OpenTK.Graphics.OpenGL4.All,System.Boolean,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnHistogram``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnHistogram``1(OpenTK.Graphics.OpenGL4.All,System.Boolean,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnMap
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnMap(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.Int32*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|query|-|
|bufSize|-|
|v|[length: bufSize]|


#### GetnMinmax
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnMinmax(OpenTK.Graphics.OpenGL4.All,System.Boolean,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnMinmax``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnMinmax``1(OpenTK.Graphics.OpenGL4.All,System.Boolean,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|reset|-|
|format|-|
|type|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnPixelMap
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnPixelMap(OpenTK.Graphics.OpenGL4.All,System.Int32,System.UInt16*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|map|-|
|bufSize|-|
|values|[length: bufSize]|


#### GetnPolygonStipple
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnPolygonStipple(System.Int32,System.Byte*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|bufSize|-|
|pattern|[length: bufSize]|


#### GetnSeparableFilter
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnSeparableFilter(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr,System.Int32,System.IntPtr,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|rowBufSize|-|
|row|[length: rowBufSize]|
|columnBufSize|-|
|column|[length: columnBufSize]|
|span|[length: 0]|


#### GetnSeparableFilter``3
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnSeparableFilter``3(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@,System.Int32,``1@,``2@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|format|-|
|type|-|
|rowBufSize|-|
|row|[length: rowBufSize]|
|columnBufSize|-|
|column|[length: columnBufSize]|
|span|[length: 0]|


#### GetnTexImage
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnTexImage(OpenTK.Graphics.OpenGL4.All,System.Int32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|format|-|
|type|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnTexImage``1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnTexImage``1(OpenTK.Graphics.OpenGL4.All,System.Int32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|format|-|
|type|-|
|bufSize|-|
|img|[length: bufSize]|


#### GetnUniform
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetnUniform(System.UInt32,System.Int32,System.Int32,System.UInt32*)
```
[requires: ARB_robustness]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|bufSize|-|
|@params|[length: bufSize]|


#### GetTextureHandle
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetTextureHandle(System.UInt32)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|


#### GetTextureSamplerHandle
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetTextureSamplerHandle(System.UInt32,System.UInt32)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|sampler|-|


#### GetVertexAttribL
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.GetVertexAttribL(System.UInt32,OpenTK.Graphics.OpenGL4.VertexAttribParameterArb,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|pname|-|
|@params|-|


#### IsImageHandleResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.IsImageHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### IsNamedString
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.IsNamedString(System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|namelen|-|
|name|[length: namelen]|


#### IsTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.IsTextureHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeImageHandleNonResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MakeImageHandleNonResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeImageHandleResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MakeImageHandleResident(System.UInt64,OpenTK.Graphics.OpenGL4.All)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|
|access|-|


#### MakeTextureHandleNonResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MakeTextureHandleNonResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MakeTextureHandleResident
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MakeTextureHandleResident(System.UInt64)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### MinSampleShading
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MinSampleShading(System.Single)
```
[requires: ARB_sample_shading]
 Specifies minimum rate at which sample shaing takes place

|Parameter Name|Remarks|
|--------------|-------|
|value| 
            Specifies the rate at which samples are shaded within each covered pixel.
            |


#### MultiDrawArraysIndirectCount
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MultiDrawArraysIndirectCount(OpenTK.Graphics.OpenGL4.All,System.IntPtr,System.IntPtr,System.Int32,System.Int32)
```
[requires: ARB_indirect_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|indirect|-|
|drawcount|-|
|maxdrawcount|-|
|stride|-|


#### MultiDrawElementsIndirectCount
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.MultiDrawElementsIndirectCount(OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.IntPtr,System.IntPtr,System.Int32,System.Int32)
```
[requires: ARB_indirect_parameters]

|Parameter Name|Remarks|
|--------------|-------|
|mode|-|
|type|-|
|indirect|-|
|drawcount|-|
|maxdrawcount|-|
|stride|-|


#### NamedString
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.NamedString(OpenTK.Graphics.OpenGL4.All,System.Int32,System.String,System.Int32,System.String)
```
[requires: ARB_shading_language_include]

|Parameter Name|Remarks|
|--------------|-------|
|type|-|
|namelen|-|
|name|[length: namelen]|
|stringlen|-|
|@string|[length: stringlen]|


#### ProgramUniformHandle
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.ProgramUniformHandle(System.UInt32,System.Int32,System.Int32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|location|-|
|count|-|
|values|[length: count]|


#### ReadnPixels
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.ReadnPixels(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,System.IntPtr)
```
[requires: ARB_robustness]

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
OpenTK.Graphics.OpenGL4.GL.Arb.ReadnPixels``1(System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.OpenGL4.All,OpenTK.Graphics.OpenGL4.All,System.Int32,``0@)
```
[requires: ARB_robustness]

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


#### TexPageCommitment
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.TexPageCommitment(OpenTK.Graphics.OpenGL4.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Boolean)
```
[requires: ARB_sparse_texture]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|level|-|
|xoffset|-|
|yoffset|-|
|zoffset|-|
|width|-|
|height|-|
|depth|-|
|resident|-|


#### UniformHandle
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.UniformHandle(System.Int32,System.Int32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|location|-|
|count|-|
|value|[length: count]|


#### VertexAttribL1
```csharp
OpenTK.Graphics.OpenGL4.GL.Arb.VertexAttribL1(System.UInt32,System.UInt64*)
```
[requires: ARB_bindless_texture]

|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|v|-|





