---
title: IDataAcquisitionService
---

# IDataAcquisitionService
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.html)_

子系统模块之中的数据采集服务对象类型的抽象接口

### Methods

#### Close
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.IDataAcquisitionService.Close
```
Disconnect the connection between the data acquisition service and data storage service and then write the cache data into the filesystem.
 (数据采集服务关闭与数据存储服务之间的连接并将缓冲区中的数据写入磁盘文件之中)

#### Connect
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.IDataAcquisitionService.Connect(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.DataSerializer.DataSerializer)
```
本数据采集服务对象实例连接至数据存储服务

|Parameter Name|Remarks|
|--------------|-------|
|StorageService|-|


#### Initialize
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.IDataAcquisitionService.Initialize
```
Initialize the data acquisition service module.(数据采集服务模块执行初始化操作)

#### Tick
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.IDataAcquisitionService.Tick(System.Int32)
```
执行一次数据采集操作

|Parameter Name|Remarks|
|--------------|-------|
|RTime|-|




### Properties

#### TableName
本数据采集服务所映射到的数据库中的表或者CSV文件名

