---
title: TaskDialogProgressBar
---

# TaskDialogProgressBar
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Provides a visual representation of the progress of a long running operation.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.TaskDialogProgressBar.#ctor(System.Int32,System.Int32,System.Int32)
```
Creates a new instance of this class with the specified 
 minimum, maximum and current values.

|Parameter Name|Remarks|
|--------------|-------|
|minimum__1|The minimum value for this control.|
|maximum__2|The maximum value for this control.|
|value__3|The current value for this control.|


#### Reset
```csharp
Microsoft.Windows.Dialogs.TaskDialogProgressBar.Reset
```
Resets the control to its minimum value.



### Properties

#### HasValidValues
Verifies that the progress bar's value is between its minimum and maximum.
#### Maximum
Gets or sets the maximum value for the control.
#### Minimum
Gets or sets the minimum value for the control.
#### Value
Gets or sets the current value for the control.

