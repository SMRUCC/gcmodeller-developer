---
title: TaskDialog
---

# TaskDialog
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Encapsulates a new-to-Vista Win32 TaskDialog window 
 - a powerful successor to the MessageBox available
 in previous versions of Windows.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.TaskDialog.#ctor
```
Creates a basic TaskDialog window

#### ApplyTextConfiguration
```csharp
Microsoft.Windows.Dialogs.TaskDialog.ApplyTextConfiguration(Microsoft.Windows.Dialogs.TaskDialogNativeMethods.TaskDialogConfiguration)
```
Sets important text properties.

|Parameter Name|Remarks|
|--------------|-------|
|dialogConfig|An instance of a @"T:Microsoft.Windows.Dialogs.TaskDialogNativeMethods.TaskDialogConfiguration" object.|


#### Close
```csharp
Microsoft.Windows.Dialogs.TaskDialog.Close(Microsoft.Windows.Dialogs.TaskDialogResult)
```
Close TaskDialog with a given TaskDialogResult

|Parameter Name|Remarks|
|--------------|-------|
|closingResult|TaskDialogResult to return from the TaskDialog.Show() method|


#### Dispose
```csharp
Microsoft.Windows.Dialogs.TaskDialog.Dispose(System.Boolean)
```
Dispose TaskDialog Resources

|Parameter Name|Remarks|
|--------------|-------|
|disposing|If true, indicates that this is being called via Dispose rather than via the finalizer.|


#### Finalize
```csharp
Microsoft.Windows.Dialogs.TaskDialog.Finalize
```
TaskDialog Finalizer

#### Show
```csharp
Microsoft.Windows.Dialogs.TaskDialog.Show
```
Creates and shows a task dialog.
_returns: The dialog result._



### Properties

#### Cancelable
Gets or sets a value that determines if Cancelable is set.
#### Caption
Gets or sets a value that contains the caption text.
#### Controls
Gets a value that contains the TaskDialog controls.
#### DetailsCollapsedLabel
Gets or sets a value that contains the collapsed control text.
#### DetailsExpanded
Gets or sets a value that determines if the details section is expanded.
#### DetailsExpandedLabel
Gets or sets a value that contains the expanded control text.
#### DetailsExpandedText
Gets or sets a value that contains the expanded text in the details section.
#### ExpansionMode
Gets or sets a value that contains the expansion mode for this dialog.
#### FooterCheckBoxChecked
Gets or sets a value that indicates if the footer checkbox is checked.
#### FooterCheckBoxText
Gets or sets a value that contains the footer check box text.
#### FooterIcon
Gets or sets a value that contains the footer icon.
#### FooterText
Gets or sets a value that contains the footer text.
#### HyperlinksEnabled
Gets or sets a value that determines if hyperlinks are enabled.
#### Icon
Gets or sets a value that contains the TaskDialog main icon.
#### InstructionText
Gets or sets a value that contains the instruction text.
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### OwnerWindowHandle
Gets or sets a value that contains the owner window's handle.
#### ProgressBar
Gets or sets the progress bar on the taskdialog. ProgressBar a visual representation 
 of the progress of a long running operation.
#### StandardButtons
Gets or sets a value that contains the standard buttons.
#### StartupLocation
Gets or sets a value that contains the startup location.
#### Text
Gets or sets a value that contains the message text.

