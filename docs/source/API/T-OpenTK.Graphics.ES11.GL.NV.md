---
title: NV
---

# NV
_namespace: [OpenTK.Graphics.ES11.GL](N-OpenTK.Graphics.ES11.GL.html)_



### Methods

#### DeleteFence
```csharp
OpenTK.Graphics.ES11.GL.NV.DeleteFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fences|[length: n]|


#### DeleteFences
```csharp
OpenTK.Graphics.ES11.GL.NV.DeleteFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### FinishFence
```csharp
OpenTK.Graphics.ES11.GL.NV.FinishFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### GenFence
```csharp
OpenTK.Graphics.ES11.GL.NV.GenFence
```
[requires: NV_fence]

#### GenFences
```csharp
OpenTK.Graphics.ES11.GL.NV.GenFences(System.Int32,System.UInt32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|fences|[length: n]|


#### GetFence
```csharp
OpenTK.Graphics.ES11.GL.NV.GetFence(System.UInt32,OpenTK.Graphics.ES11.All,System.Int32*)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|pname|-|
|@params|[length: pname]|


#### IsFence
```csharp
OpenTK.Graphics.ES11.GL.NV.IsFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|


#### SetFence
```csharp
OpenTK.Graphics.ES11.GL.NV.SetFence(System.UInt32,OpenTK.Graphics.ES11.All)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|
|condition|-|


#### TestFence
```csharp
OpenTK.Graphics.ES11.GL.NV.TestFence(System.UInt32)
```
[requires: NV_fence]

|Parameter Name|Remarks|
|--------------|-------|
|fence|-|





