---
title: IPropertyStoreCache
---

# IPropertyStoreCache
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

An in-memory property store cache

### Methods

#### GetState
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStoreCache.GetState(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Shell.PropertySystem.PropertyStoreCacheState@)
```
Gets the state of a property stored in the cache

|Parameter Name|Remarks|
|--------------|-------|
|key|-|
|state|-|


#### GetValueAndState
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStoreCache.GetValueAndState(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant,Microsoft.Windows.Shell.PropertySystem.PropertyStoreCacheState@)
```
Gets the valeu and state of a property in the cache

|Parameter Name|Remarks|
|--------------|-------|
|propKey|-|
|pv|-|
|state|-|


#### SetState
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStoreCache.SetState(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Shell.PropertySystem.PropertyStoreCacheState)
```
Sets the state of a property in the cache.

|Parameter Name|Remarks|
|--------------|-------|
|propKey|-|
|state|-|


#### SetValueAndState
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStoreCache.SetValueAndState(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant,Microsoft.Windows.Shell.PropertySystem.PropertyStoreCacheState)
```
Sets the value and state in the cache.

|Parameter Name|Remarks|
|--------------|-------|
|propKey|-|
|pv|-|
|state|-|





