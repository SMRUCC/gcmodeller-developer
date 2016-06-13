---
title: IPreviewFromStream
---

# IPreviewFromStream
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This interface exposes the @"M:Microsoft.Windows.ShellExtensions.IPreviewFromStream.Load(System.IO.Stream)" function for initializing the 
 Preview Handler with a @"T:System.IO.Stream".
 This interface can be used in conjunction with the other intialization interfaces,
 but only 1 will be accessed according to the priorities preset by the Windows Shell:
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromStream"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromShellObject"
 @"T:Microsoft.Windows.ShellExtensions.IPreviewFromFile"

### Methods

#### Load
```csharp
Microsoft.Windows.ShellExtensions.IPreviewFromStream.Load(System.IO.Stream)
```
Provides the @"T:System.IO.Stream" to the item from which a preview should be created.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to the previewed file, this stream is only available in the scope of this method.|





