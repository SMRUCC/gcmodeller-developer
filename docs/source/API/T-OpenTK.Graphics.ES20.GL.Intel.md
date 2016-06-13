---
title: Intel
---

# Intel
_namespace: [OpenTK.Graphics.ES20.GL](N-OpenTK.Graphics.ES20.GL.html)_



### Methods

#### BeginPerfQuery
```csharp
OpenTK.Graphics.ES20.GL.Intel.BeginPerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### CreatePerfQuery
```csharp
OpenTK.Graphics.ES20.GL.Intel.CreatePerfQuery(System.UInt32,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|queryHandle|-|


#### DeletePerfQuery
```csharp
OpenTK.Graphics.ES20.GL.Intel.DeletePerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### EndPerfQuery
```csharp
OpenTK.Graphics.ES20.GL.Intel.EndPerfQuery(System.UInt32)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryHandle|-|


#### GetFirstPerfQueryI
```csharp
OpenTK.Graphics.ES20.GL.Intel.GetFirstPerfQueryI(System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|


#### GetNextPerfQueryI
```csharp
OpenTK.Graphics.ES20.GL.Intel.GetNextPerfQueryI(System.UInt32,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryId|-|
|nextQueryId|-|


#### GetPerfCounterInfo
```csharp
OpenTK.Graphics.ES20.GL.Intel.GetPerfCounterInfo(System.UInt32,System.UInt32,System.UInt32,System.Text.StringBuilder,System.UInt32,System.Text.StringBuilder,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt64*)
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
OpenTK.Graphics.ES20.GL.Intel.GetPerfQueryData(System.UInt32,System.UInt32,System.Int32,System.IntPtr,System.UInt32*)
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
OpenTK.Graphics.ES20.GL.Intel.GetPerfQueryData``1(System.UInt32,System.UInt32,System.Int32,``0@,System.UInt32*)
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
OpenTK.Graphics.ES20.GL.Intel.GetPerfQueryIdByName(System.Text.StringBuilder,System.UInt32*)
```
[requires: INTEL_performance_query]

|Parameter Name|Remarks|
|--------------|-------|
|queryName|-|
|queryId|-|


#### GetPerfQueryInfo
```csharp
OpenTK.Graphics.ES20.GL.Intel.GetPerfQueryInfo(System.UInt32,System.UInt32,System.Text.StringBuilder,System.UInt32*,System.UInt32*,System.UInt32*,System.UInt32*)
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





