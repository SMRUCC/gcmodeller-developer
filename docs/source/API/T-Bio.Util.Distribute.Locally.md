---
title: Locally
---

# Locally
_namespace: [Bio.Util.Distribute](N-Bio.Util.Distribute.html)_

Runs tasks locally.

### Methods

#### Distribute
```csharp
Bio.Util.Distribute.Locally.Distribute(Bio.Util.Distribute.IDistributable)
```
Runs Tasks locally on distributableObject.

|Parameter Name|Remarks|
|--------------|-------|
|distributableObject|The object that will run the tasks.|


#### FinalizeParse
```csharp
Bio.Util.Distribute.Locally.FinalizeParse
```
Finalize Parse.



### Properties

#### cleanup
Specifies whether cleanup should be run when this task is complete.
#### parallelOptions
Specifies the local parallel options
#### taskCount
How many pieces should the work be divided into?
#### tasks
The set of Tasks that should be run by this instance

