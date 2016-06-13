---
title: PreviewHandler
---

# PreviewHandler
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This is the base class for all preview handlers and provides their basic functionality.
 To create a custom preview handler a class must derive from this, use the @"T:Microsoft.Windows.ShellExtensions.PreviewHandlerAttribute",
 and implement 1 or more of the following interfaces: 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile".

### Methods

#### HandleInitializeException
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.HandleInitializeException(System.Exception)
```
Called when an exception occurs during the initialization of the control

|Parameter Name|Remarks|
|--------------|-------|
|caughtException|-|


#### Initialize
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.Initialize
```
Called immediately before the preview is to be shown.

#### Register
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.Register(System.Type)
```
Called when the assembly is registered via RegAsm.

|Parameter Name|Remarks|
|--------------|-------|
|registerType|Type to register.|


#### SetBackground
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.SetBackground(System.Int32)
```
Called when a request is received to set or change the background color according to the user's preferences.

|Parameter Name|Remarks|
|--------------|-------|
|argb|An int representing the ARGB color|


#### SetFocus
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.SetFocus
```
Called when the preview control obtains focus.

#### SetFont
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.SetFont(Microsoft.Windows.ShellExtensions.Interop.LogFont)
```
Called to set the font of the preview control according to the user's preferences.

|Parameter Name|Remarks|
|--------------|-------|
|font|-|


#### SetForeground
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.SetForeground(System.Int32)
```
Called when a request is received to set or change the foreground color according to the user's preferences.

|Parameter Name|Remarks|
|--------------|-------|
|argb|An int representing the ARGB color|


#### SetParentHandle
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.SetParentHandle(System.IntPtr)
```
Called to set the parent of the preview control.

|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### Uninitialize
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.Uninitialize
```
Called when the preview is no longer shown.

#### Unregister
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.Unregister(System.Type)
```
Called when the assembly is Unregistered via RegAsm.

|Parameter Name|Remarks|
|--------------|-------|
|registerType|Type to unregister|


#### UpdateBounds
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandler.UpdateBounds(Microsoft.Windows.Shell.NativeRect)
```
Called to update the bounds and position of the preview control

|Parameter Name|Remarks|
|--------------|-------|
|bounds|-|




### Properties

#### Handle
This should return the window handle to be displayed in the Preview.
#### IsPreviewShowing
Gets whether the preview is currently showing

