---
title: CommonFileDialogControlCollection`1
---

# CommonFileDialogControlCollection`1
_namespace: [Microsoft.Windows.Dialogs.Controls](N-Microsoft.Windows.Dialogs.Controls.html)_

Provides a strongly typed collection for dialog controls.

### Methods

#### GetControlbyId
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControlCollection`1.GetControlbyId(System.Int32)
```
Recursively searches for the control who's id matches the value
 passed in the **id** parameter.

|Parameter Name|Remarks|
|--------------|-------|
|id|An integer containing the identifier of the 
 control being searched for.|

_returns: A DialogControl who's id matches the value of the
 **id** parameter._

#### GetSubControlbyId
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControlCollection`1.GetSubControlbyId(System.Collections.Generic.IEnumerable{Microsoft.Windows.Dialogs.DialogControl},System.Int32)
```
Recursively searches for a given control id in the 
 collection passed via the **controlCollection** parameter.

|Parameter Name|Remarks|
|--------------|-------|
|controlCollection|A Collection<CommonFileDialogControl>|
|id|An int containing the identifier of the control 
 being searched for.|

_returns: A DialogControl who's Id matches the value of the
 **id** parameter._

#### InsertItem
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControlCollection`1.InsertItem(System.Int32,`0)
```
Inserts an dialog control at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The location to insert the control.|
|control|The item to insert.|


#### RemoveItem
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControlCollection`1.RemoveItem(System.Int32)
```
Removes the control at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The location of the control to remove.|




### Properties

#### Item
Defines the indexer that supports accessing controls by name. If there is more than one control with the same name, only the first control will be returned.

