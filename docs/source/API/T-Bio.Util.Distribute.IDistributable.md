---
title: IDistributable
---

# IDistributable
_namespace: [Bio.Util.Distribute](N-Bio.Util.Distribute.html)_

An interface specifying that an object can be distributed in a delightfully parallel way.

### Methods

#### Cancel
```csharp
Bio.Util.Distribute.IDistributable.Cancel
```
Will be called when the user enters CTRL+C. This is the signal from the cluster when a job is canceled. 
 If you do not wish to implement, then create an empty function. 
 Note that this will be called by an external thread, and when you return, your job will be canceled. 
 If you need some time, call System.Threading.Thread.Sleep(15 *1000) before returning, which will cause it to sleep
 for 15 seconds (your grace period before the cluster kills the task.
 An example of something to do: set a cancel flag in your loop so that if Cancel is called, you exit out of your loop
 and your result file is properly flushed and disposed. More advanced: serialize your current object graph so you can
 recover where you left off.

#### Cleanup
```csharp
Bio.Util.Distribute.IDistributable.Cleanup(System.Int64)
```
Called when all tasks are complete.

#### RunTasks
```csharp
Bio.Util.Distribute.IDistributable.RunTasks(Bio.Util.RangeCollection,System.Int64)
```
Will run a subset of tasks.

|Parameter Name|Remarks|
|--------------|-------|
|taskCount|Total number of pieces into which work will be divided.|
|tasksToRun|The pieces that should be run.|




### Properties

#### JobName
The name of the job if submitted to the cluster.

