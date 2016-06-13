---
title: DialogControlCollection`1
---

# DialogControlCollection`1
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Strongly typed collection for dialog controls.

### Methods

#### GetControlbyId
```csharp
Microsoft.Windows.Dialogs.DialogControlCollection`1.GetControlbyId(System.Int32)
```
Searches for the control who's id matches the value
 passed in the **id** parameter.

|Parameter Name|Remarks|
|--------------|-------|
|id|An integer containing the identifier of the 
 control being searched for.|

_returns: A DialogControl who's id matches the value of the
 **id** parameter._

#### InsertItem
```csharp
Microsoft.Windows.Dialogs.DialogControlCollection`1.InsertItem(System.Int32,`0)
```
Inserts an dialog control at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The location to insert the control.|
|control|The item to insert.|


#### RemoveItem
```csharp
Microsoft.Windows.Dialogs.DialogControlCollection`1.RemoveItem(System.Int32)
```
Removes the control at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The location of the control to remove.|




### Properties

#### Item
Defines the indexer that supports accessing controls by name. If there is more than one control with the same name, only the first control will be returned.

