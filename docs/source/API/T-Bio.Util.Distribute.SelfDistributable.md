---
title: SelfDistributable
---

# SelfDistributable
_namespace: [Bio.Util.Distribute](N-Bio.Util.Distribute.html)_

Convince base class for classes that wish to be executed from the command line with a -Distribute option for
 submitting to cluster.

### Methods

#### Cancel
```csharp
Bio.Util.Distribute.SelfDistributable.Cancel
```
A do-nothing implementation.

#### Cleanup
```csharp
Bio.Util.Distribute.SelfDistributable.Cleanup(System.Int64)
```
Cleanup.

|Parameter Name|Remarks|
|--------------|-------|
|taskCount|Task Count.|


#### Run
```csharp
Bio.Util.Distribute.SelfDistributable.Run
```
Run.

#### RunTasks
```csharp
Bio.Util.Distribute.SelfDistributable.RunTasks(Bio.Util.RangeCollection,System.Int64)
```
Run tasks.

|Parameter Name|Remarks|
|--------------|-------|
|tasksToRun|Tasks To Run.|
|taskCount|Task Count.|




### Properties

#### Distribute
How to distribute this object.
#### JobName
The name

