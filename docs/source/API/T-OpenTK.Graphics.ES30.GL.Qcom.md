---
title: Qcom
---

# Qcom
_namespace: [OpenTK.Graphics.ES30.GL](N-OpenTK.Graphics.ES30.GL.html)_



### Methods

#### AlphaFunc
```csharp
OpenTK.Graphics.ES30.GL.Qcom.AlphaFunc(OpenTK.Graphics.ES30.All,System.Single)
```
[requires: QCOM_alpha_test]
 Specify the alpha test function

|Parameter Name|Remarks|
|--------------|-------|
|func| 
            Specifies the alpha comparison function. Symbolic constants Never, Less, Equal, Lequal, Greater, Notequal, Gequal, and Always are accepted. The initial value is Always.
            |
|@ref| 
            Specifies the reference value that incoming alpha values are compared to. This value is clamped to the range [0,1], where 0 represents the lowest possible alpha value and 1 the highest possible value. The initial reference value is 0.
            |


#### DisableDriverControl
```csharp
OpenTK.Graphics.ES30.GL.Qcom.DisableDriverControl(System.UInt32)
```
[requires: QCOM_driver_control]

|Parameter Name|Remarks|
|--------------|-------|
|driverControl|-|


#### EnableDriverControl
```csharp
OpenTK.Graphics.ES30.GL.Qcom.EnableDriverControl(System.UInt32)
```
[requires: QCOM_driver_control]

|Parameter Name|Remarks|
|--------------|-------|
|driverControl|-|


#### EndTiling
```csharp
OpenTK.Graphics.ES30.GL.Qcom.EndTiling(System.UInt32)
```
[requires: QCOM_tiled_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|preserveMask|-|


#### ExtGetBufferPointer
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetBufferPointer(OpenTK.Graphics.ES30.All,System.IntPtr)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|@params|-|


#### ExtGetBufferPointer``1
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetBufferPointer``1(OpenTK.Graphics.ES30.All,``0@)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|@params|-|


#### ExtGetBuffers
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetBuffers(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|buffers|[length: maxBuffers]|
|maxBuffers|-|
|numBuffers|[length: 1]|


#### ExtGetFramebuffers
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetFramebuffers(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|framebuffers|[length: maxFramebuffers]|
|maxFramebuffers|-|
|numFramebuffers|[length: 1]|


#### ExtGetProgram
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetProgram(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get2]

|Parameter Name|Remarks|
|--------------|-------|
|programs|[length: maxPrograms]|
|maxPrograms|-|
|numPrograms|[length: 1]|


#### ExtGetProgramBinarySource
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetProgramBinarySource(System.UInt32,OpenTK.Graphics.ES30.All,System.Text.StringBuilder,System.Int32*)
```
[requires: QCOM_extended_get2]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|
|shadertype|-|
|source|-|
|length|-|


#### ExtGetRenderbuffers
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetRenderbuffers(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|renderbuffers|[length: maxRenderbuffers]|
|maxRenderbuffers|-|
|numRenderbuffers|[length: 1]|


#### ExtGetShaders
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetShaders(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get2]

|Parameter Name|Remarks|
|--------------|-------|
|shaders|[length: maxShaders]|
|maxShaders|-|
|numShaders|[length: 1]|


#### ExtGetTexLevelParameter
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetTexLevelParameter(System.UInt32,OpenTK.Graphics.ES30.All,System.Int32,OpenTK.Graphics.ES30.All,System.Int32*)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|face|-|
|level|-|
|pname|-|
|@params|-|


#### ExtGetTexSubImage
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetTexSubImage(OpenTK.Graphics.ES30.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.All,OpenTK.Graphics.ES30.All,System.IntPtr)
```
[requires: QCOM_extended_get]

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
|format|-|
|type|-|
|texels|-|


#### ExtGetTexSubImage``1
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetTexSubImage``1(OpenTK.Graphics.ES30.All,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ES30.All,OpenTK.Graphics.ES30.All,``0@)
```
[requires: QCOM_extended_get]

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
|format|-|
|type|-|
|texels|-|


#### ExtGetTextures
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtGetTextures(System.UInt32*,System.Int32,System.Int32*)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|textures|-|
|maxTextures|-|
|numTextures|-|


#### ExtIsProgramBinary
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtIsProgramBinary(System.UInt32)
```
[requires: QCOM_extended_get2]

|Parameter Name|Remarks|
|--------------|-------|
|program|-|


#### ExtTexObjectStateOverride
```csharp
OpenTK.Graphics.ES30.GL.Qcom.ExtTexObjectStateOverride(OpenTK.Graphics.ES30.All,OpenTK.Graphics.ES30.All,System.Int32)
```
[requires: QCOM_extended_get]

|Parameter Name|Remarks|
|--------------|-------|
|target|-|
|pname|-|
|param|-|


#### GetDriverControl
```csharp
OpenTK.Graphics.ES30.GL.Qcom.GetDriverControl(System.Int32*,System.Int32,System.UInt32*)
```
[requires: QCOM_driver_control]

|Parameter Name|Remarks|
|--------------|-------|
|num|-|
|size|-|
|driverControls|[length: size]|


#### GetDriverControlString
```csharp
OpenTK.Graphics.ES30.GL.Qcom.GetDriverControlString(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: QCOM_driver_control]

|Parameter Name|Remarks|
|--------------|-------|
|driverControl|-|
|bufSize|-|
|length|-|
|driverControlString|[length: bufSize]|


#### StartTiling
```csharp
OpenTK.Graphics.ES30.GL.Qcom.StartTiling(System.UInt32,System.UInt32,System.UInt32,System.UInt32,System.UInt32)
```
[requires: QCOM_tiled_rendering]

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|width|-|
|height|-|
|preserveMask|-|





