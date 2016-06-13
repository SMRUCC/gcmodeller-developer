---
title: IPreviewFromShellObject
---

# IPreviewFromShellObject
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This interface exposes the @"M:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject.Load(Microsoft.Windows.Shell.ShellObject)" function for initializing the 
 Preview Handler with a @"T:Microsoft.Windows.Shell.ShellObject".
 This interface can be used in conjunction with the other intialization interfaces,
 but only 1 will be accessed according to the priorities preset by the Windows Shell:
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile"

### Methods

#### Load
```csharp
Microsoft.Windows.ShellExtensions.IPreviewFromShellObject.Load(Microsoft.Windows.Shell.ShellObject)
```
Provides the @"T:Microsoft.Windows.Shell.ShellObject" from which a preview should be created.

|Parameter Name|Remarks|
|--------------|-------|
|shellObject|ShellObject for the previewed file, this ShellObject is only available in the scope of this method.|





