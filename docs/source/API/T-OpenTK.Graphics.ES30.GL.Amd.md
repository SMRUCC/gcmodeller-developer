---
title: Amd
---

# Amd
_namespace: [OpenTK.Graphics.ES30.GL](N-OpenTK.Graphics.ES30.GL.html)_



### Methods

#### BeginPerfMonitor
```csharp
OpenTK.Graphics.ES30.GL.Amd.BeginPerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|


#### DeletePerfMonitor
```csharp
OpenTK.Graphics.ES30.GL.Amd.DeletePerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitors|[length: n]|


#### DeletePerfMonitors
```csharp
OpenTK.Graphics.ES30.GL.Amd.DeletePerfMonitors(System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|monitors|[length: n]|


#### EndPerfMonitor
```csharp
OpenTK.Graphics.ES30.GL.Amd.EndPerfMonitor(System.UInt32)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|


#### GenPerfMonitor
```csharp
OpenTK.Graphics.ES30.GL.Amd.GenPerfMonitor
```
[requires: AMD_performance_monitor]

#### GenPerfMonitors
```csharp
OpenTK.Graphics.ES30.GL.Amd.GenPerfMonitors(System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|n|-|
|monitors|[length: n]|


#### GetPerfMonitorCounterData
```csharp
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorCounterData(System.UInt32,OpenTK.Graphics.ES30.All,System.Int32,System.UInt32*,System.Int32*)
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
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorCounterInfo(System.UInt32,System.UInt32,OpenTK.Graphics.ES30.All,System.IntPtr)
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
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorCounterInfo``1(System.UInt32,System.UInt32,OpenTK.Graphics.ES30.All,``0@)
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
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorCounters(System.UInt32,System.Int32*,System.Int32*,System.Int32,System.UInt32*)
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
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorCounterString(System.UInt32,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
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
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorGroups(System.Int32*,System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|numGroups|[length: 1]|
|groupsSize|-|
|groups|[length: groupsSize]|


#### GetPerfMonitorGroupString
```csharp
OpenTK.Graphics.ES30.GL.Amd.GetPerfMonitorGroupString(System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|group|-|
|bufSize|-|
|length|[length: 1]|
|groupString|[length: bufSize]|


#### SelectPerfMonitorCounters
```csharp
OpenTK.Graphics.ES30.GL.Amd.SelectPerfMonitorCounters(System.UInt32,System.Boolean,System.UInt32,System.Int32,System.UInt32*)
```
[requires: AMD_performance_monitor]

|Parameter Name|Remarks|
|--------------|-------|
|monitor|-|
|enable|-|
|group|-|
|numCounters|-|
|counterList|[length: numCounters]|





