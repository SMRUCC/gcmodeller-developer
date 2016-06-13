---
title: ParallelOptionsScope
---

# ParallelOptionsScope
_namespace: [Bio.Util](N-Bio.Util.html)_

ParallelOptionsScope

### Methods

#### Create
```csharp
Bio.Util.ParallelOptionsScope.Create(System.Threading.Tasks.ParallelOptions)
```
Creates a new ParallelOptionsScope using the specified options. Must be used in a using statement.

#### CreateFullyParallel
```csharp
Bio.Util.ParallelOptionsScope.CreateFullyParallel
```
Creates a new ParallelOptionsScope that sets the number of threads to be equal to the number of cores in the
 current environment. Must be used in a using statement.

#### CreateSingleThreaded
```csharp
Bio.Util.ParallelOptionsScope.CreateSingleThreaded
```
Creates a new ParallelOptionsScope that specified that a single thread should be used. Must be used in a using
 statement.

#### Dispose
```csharp
Bio.Util.ParallelOptionsScope.Dispose
```
Dispose

#### Suspend
```csharp
Bio.Util.ParallelOptionsScope.Suspend
```
Suspend



### Properties

#### Current
Current
#### Exists
Exists
#### FullyParallelOptions
A ParallelOptions instance in which MaxDegreeOfParallelism is equal to the number of cores in the current
 environment.
#### SingleThreadedOptions
A ParallelOptions instance in which MaxDegreeOfParallelism is 1.

