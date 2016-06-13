---
title: TaskDialogButtonBase
---

# TaskDialogButtonBase
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Defines the abstract base class for task dialog buttons. 
 Classes that inherit from this class will inherit 
 the Text property defined in this class.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.TaskDialogButtonBase.#ctor(System.String,System.String)
```
Creates a new instance on a task dialog button with
 the specified name and text.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name for this button.|
|text|The label for this button.|


#### ToString
```csharp
Microsoft.Windows.Dialogs.TaskDialogButtonBase.ToString
```
Returns the Text property value for this button.
_returns: A @"T:System.String"._



### Properties

#### Default
Gets or sets a value that indicates whether
 this button is the default button.
#### Enabled
Gets or sets a value that determines whether the
 button is enabled. The enabled state can cannot be changed
 before the dialog is shown.
#### Text
Gets or sets the button text.

