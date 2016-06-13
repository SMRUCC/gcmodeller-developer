---
title: WinFormsPreviewHandler
---

# WinFormsPreviewHandler
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This is the base class for all WinForms-based preview handlers and provides their basic functionality.
 To create a custom preview handler that contains a WinForms user control,
 a class must derive from this, use the @"T:Microsoft.Windows.ShellExtensions.PreviewHandlerAttribute",
 and implement 1 or more of the following interfaces: 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile".

### Methods

#### HandleInitializeException
```csharp
Microsoft.Windows.ShellExtensions.WinFormsPreviewHandler.HandleInitializeException(System.Exception)
```
Called when an exception is thrown during itialization of the preview control.

|Parameter Name|Remarks|
|--------------|-------|
|caughtException|-|




### Properties

#### Control
This control must be populated by the deriving class before the preview is shown.

