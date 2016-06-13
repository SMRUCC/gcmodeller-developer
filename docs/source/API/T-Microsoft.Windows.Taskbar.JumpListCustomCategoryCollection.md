---
title: JumpListCustomCategoryCollection
---

# JumpListCustomCategoryCollection
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents a collection of custom categories

### Methods

#### Add
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.Add(Microsoft.Windows.Taskbar.JumpListCustomCategory)
```
Add the specified category to this collection

|Parameter Name|Remarks|
|--------------|-------|
|category|Category to add|


#### Clear
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.Clear
```
Clear all items from the collection

#### Contains
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.Contains(Microsoft.Windows.Taskbar.JumpListCustomCategory)
```
Determine if this collection contains the specified item

|Parameter Name|Remarks|
|--------------|-------|
|category|Category to search for|

_returns: True if category was found_

#### CopyTo
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.CopyTo(Microsoft.Windows.Taskbar.JumpListCustomCategory[],System.Int32)
```
Copy this collection to a compatible one-dimensional array,
 starting at the specified index of the target array

|Parameter Name|Remarks|
|--------------|-------|
|array|Array to copy to|
|index|Index of target array to start copy|


#### IEnumerable_GetEnumerator
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.IEnumerable_GetEnumerator
```
Returns an enumerator that iterates through this collection.
_returns: Enumerator to iterate through this collection._

#### IEnumerable_GetEnumerator1
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.IEnumerable_GetEnumerator1
```
Returns an enumerator that iterates through this collection.
_returns: Enumerator to iterate through this collection._

#### Remove
```csharp
Microsoft.Windows.Taskbar.JumpListCustomCategoryCollection.Remove(Microsoft.Windows.Taskbar.JumpListCustomCategory)
```
Remove the specified category from this collection

|Parameter Name|Remarks|
|--------------|-------|
|category|Category item to remove|

_returns: True if item was removed._



### Properties

#### Count
The number of items in this collection
#### IsReadOnly
Determines if this collection is read-only

