---
title: IPropertyStore
---

# IPropertyStore
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

A property store

### Methods

#### Commit
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStore.Commit
```
Commits the changes.

#### GetAt
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStore.GetAt(System.UInt32,Microsoft.Windows.Shell.PropertySystem.PropertyKey@)
```
Get a property key located at a specific index.

|Parameter Name|Remarks|
|--------------|-------|
|propertyIndex|-|
|key|-|


#### GetCount
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStore.GetCount(System.UInt32@)
```
Gets the number of properties contained in the property store.

|Parameter Name|Remarks|
|--------------|-------|
|propertyCount|-|


#### GetValue
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStore.GetValue(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant)
```
Gets the value of a property from the store

|Parameter Name|Remarks|
|--------------|-------|
|key|-|
|pv|-|


#### SetValue
```csharp
Microsoft.Windows.Shell.PropertySystem.IPropertyStore.SetValue(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant)
```
Sets the value of a property in the store

|Parameter Name|Remarks|
|--------------|-------|
|key|-|
|pv|-|





