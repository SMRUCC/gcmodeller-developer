---
title: Intel
---

# Intel
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### BeginPerfQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.BeginPerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### ColorPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.ColorPointer(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.IntPtr)
```
[requires: INTEL_parallel_arrays]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, and Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### ColorPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.ColorPointer``1(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,``0@)
```
[requires: INTEL_parallel_arrays]
 Define an array of colors

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of components per color. Must be 3 or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each color component in the array. Symbolic constants Byte, UnsignedByte, Short, UnsignedShort, Int, UnsignedInt, Float, and Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first component of the first color element in the array. The initial value is 0.
            |


#### CreatePerfQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.CreatePerfQuery(System.UInt32,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|queryHandle|-|


#### DeletePerfQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.DeletePerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### EndPerfQuery
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.EndPerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### GetFirstPerfQueryI
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetFirstPerfQueryI(System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|


#### GetNextPerfQueryI
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetNextPerfQueryI(System.UInt32,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|nextQueryId|-|


#### GetPerfCounterInfo
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetPerfCounterInfo(System.UInt32,System.UInt32,System.UInt32,System.Text.StringBuilder,System.UInt32,System.Text.StringBuilder,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt64*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|counterId|-|
|counterNameLength|-|
|counterName|-|
|counterDescLength|-|
|counterDesc|-|
|counterOffset|-|
|counterDataSize|-|
|counterTypeEnum|-|
|counterDataTypeEnum|-|
|rawCounterMaxValue|-|


#### GetPerfQueryData
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetPerfQueryData(System.UInt32,System.UInt32,System.Int32,System.IntPtr,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|
|flags|-|
|dataSize|-|
|data|-|
|bytesWritten|-|


#### GetPerfQueryData``1
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetPerfQueryData``1(System.UInt32,System.UInt32,System.Int32,``0@,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|
|flags|-|
|dataSize|-|
|data|-|
|bytesWritten|-|


#### GetPerfQueryIdByName
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetPerfQueryIdByName(System.Text.StringBuilder,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryName|-|
|queryId|-|


#### GetPerfQueryInfo
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.GetPerfQueryInfo(System.UInt32,System.UInt32,System.Text.StringBuilder,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|queryNameLength|-|
|queryName|-|
|dataSize|-|
|noCounters|-|
|noInstances|-|
|capsMask|-|


#### MapTexture2D
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.MapTexture2D(System.UInt32,System.Int32,System.UInt32,System.Int32*,OpenTK.Graphics.OpenGL.IntelMapTexture*)
```
[requires: INTEL_map_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|
|access|-|
|stride|[length: 1]|
|layout|[length: 1]|


#### NormalPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.NormalPointer(OpenTK.Graphics.OpenGL.NormalPointerType,System.IntPtr)
```
[requires: INTEL_parallel_arrays]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### NormalPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.NormalPointer``1(OpenTK.Graphics.OpenGL.NormalPointerType,``0@)
```
[requires: INTEL_parallel_arrays]
 Define an array of normals

|Parameter Name|Remarks|
|--------------|-------|
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Byte, Short, Int, Float, and Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first normal in the array. The initial value is 0.
            |


#### SyncTexture
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.SyncTexture(System.UInt32)
```
[requires: INTEL_map_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|


#### TexCoordPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.TexCoordPointer(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.IntPtr)
```
[requires: INTEL_parallel_arrays]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each texture coordinate. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### TexCoordPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.TexCoordPointer``1(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,``0@)
```
[requires: INTEL_parallel_arrays]
 Define an array of texture coordinates

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per array element. Must be 1, 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each texture coordinate. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first texture coordinate set in the array. The initial value is 0.
            |


#### UnmapTexture2D
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.UnmapTexture2D(System.UInt32,System.Int32)
```
[requires: INTEL_map_texture]

|Parameter Name|Remarks|
|--------------|-------|
|texture|-|
|level|-|


#### VertexPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.VertexPointer(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,System.IntPtr)
```
[requires: INTEL_parallel_arrays]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |


#### VertexPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Intel.VertexPointer``1(System.Int32,OpenTK.Graphics.OpenGL.VertexPointerType,``0@)
```
[requires: INTEL_parallel_arrays]
 Define an array of vertex data

|Parameter Name|Remarks|
|--------------|-------|
|size| 
            Specifies the number of coordinates per vertex. Must be 2, 3, or 4. The initial value is 4.
            |
|type| 
            Specifies the data type of each coordinate in the array. Symbolic constants Short, Int, Float, or Double are accepted. The initial value is Float.
            |
|pointer|[length: 4] 
            Specifies a pointer to the first coordinate of the first vertex in the array. The initial value is 0.
            |





