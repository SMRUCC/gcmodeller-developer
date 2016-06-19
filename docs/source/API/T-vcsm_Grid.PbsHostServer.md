---
title: PbsHostServer
---

# PbsHostServer
_namespace: [vcsm_Grid](N-vcsm_Grid.html)_

Pbs任务提交和数据处理服务器



### Methods

#### __protocolImplementer
```csharp
vcsm_Grid.PbsHostServer.__protocolImplementer(System.Int64,Microsoft.VisualBasic.Net.Protocols.RequestStream,System.Net.IPEndPoint)
```
当节点进程以附属节点的形式启动的时候，会根据命令行参数的网络地址主动询问主节点，然后得到一个动态分配的ID编号，注册进入节点网络之中

|Parameter Name|Remarks|
|--------------|-------|
|Node|-|


#### InternalThreadsDetection
```csharp
vcsm_Grid.PbsHostServer.InternalThreadsDetection
```
计算线程的状态检测线程，每隔一段时间刷新一次线程的数据


