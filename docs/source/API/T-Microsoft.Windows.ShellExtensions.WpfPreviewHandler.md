---
title: WpfPreviewHandler
---

# WpfPreviewHandler
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This is the base class for all WPF-based preview handlers and provides their basic functionality.
 To create a custom preview handler that contains a WPF user control,
 a class must derive from this, use the @"T:Microsoft.Windows.ShellExtensions.PreviewHandlerAttribute",
 and implement 1 or more of the following interfaces: 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject", 
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile".

### Methods

#### Dispose
```csharp
Microsoft.Windows.ShellExtensions.WpfPreviewHandler.Dispose(System.Boolean)
```
Provides means to dispose the object.
 When overriden, it is imperative that base.Dispose(true) is called within the implementation.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Finalize
```csharp
Microsoft.Windows.ShellExtensions.WpfPreviewHandler.Finalize
```
Preview handler control finalizer

#### ThrowIfNoControl
```csharp
Microsoft.Windows.ShellExtensions.WpfPreviewHandler.ThrowIfNoControl
```
Throws an exception if the Control property has not been populated.

#### UpdatePlacement
```csharp
Microsoft.Windows.ShellExtensions.WpfPreviewHandler.UpdatePlacement
```
Updates the placement of the Control.



### Properties

#### Control
This control must be populated by the deriving class before the preview is shown.

