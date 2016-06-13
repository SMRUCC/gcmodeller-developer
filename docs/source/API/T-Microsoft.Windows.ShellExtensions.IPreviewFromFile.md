---
title: IPreviewFromFile
---

# IPreviewFromFile
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This interface exposes the @"M:Microsoft.Windows.ShellExtensions.IPreviewFromFile.Load(System.IO.FileInfo)" function for initializing the 
 Preview Handler with a @"T:System.IO.FileInfo".
 This interface can be used in conjunction with the other intialization interfaces,
 but only 1 will be accessed according to the priorities preset by the Windows Shell:
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile"

### Methods

#### Load
```csharp
Microsoft.Windows.ShellExtensions.IPreviewFromFile.Load(System.IO.FileInfo)
```
Provides the @"T:System.IO.FileInfo" to the item from which a preview should be created.

|Parameter Name|Remarks|
|--------------|-------|
|info|File information to the previewed file.|





