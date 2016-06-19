---
title: ManageSystem
---

# ManageSystem
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.html)_

整个计算引擎的数据采集服务的中枢控制模块



### Methods

#### CloseStorageService
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.ManageSystem.CloseStorageService
```
关闭数据采集服务，断开与数据存储服务的连接并将数据写入文件系统之中

#### Connect
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.ManageSystem.Connect(System.String)
```
数据采集服务与MYSQL数据库服务相连接

|Parameter Name|Remarks|
|--------------|-------|
|Url|-|


#### GetTypeOfDataStorageServiceOfMySQL
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.ManageSystem.GetTypeOfDataStorageServiceOfMySQL(System.String)
```
判断数据存储服务是否为MYSQL数据库服务
_returns: True, 是MYSQL数据库服务，FALSE，是本地数据文件_

#### Join
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.ManageSystem.Join(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.MySQL.IDataAcquisitionService[])
```
向管理层中的处理队列之中添加一个服务实例集合

|Parameter Name|Remarks|
|--------------|-------|
|ServiceInstanceSerials|目标数据采集服务对象实例的集合|


#### TestMySQL
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.Services.DataAcquisition.ManageSystem.TestMySQL(System.String)
```
数据管理服务测试与数据库服务器之间的连接


### Properties

#### SQL_CREATE_STORAGES_TABLE
创建总表定义的SQL语句
