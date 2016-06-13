---
title: IThumbnailFromShellObject
---

# IThumbnailFromShellObject
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This interface exposes the ConsructBitmap function for initializing the 
 Thumbnail Provider with a @"T:Microsoft.Windows.Shell.ShellObject".
 This interface can be used in conjunction with the other intialization interfaces,
 but only 1 will be accessed according to the priorities preset by the Windows Shell:
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromStream"
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromShellObject"
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromFile"

### Methods

#### ConstructBitmap
```csharp
Microsoft.Windows.ShellExtensions.IThumbnailFromShellObject.ConstructBitmap(Microsoft.Windows.Shell.ShellObject,System.Int32)
```
Provides the @"T:Microsoft.Windows.Shell.ShellObject" to the item from which a thumbnail should be created.
 Only 32bpp bitmaps support adornments. 
 While 24bpp bitmaps will be displayed they will not display adornments.
 Additional guidelines for developing thumbnails can be found at http://msdn.microsoft.com/en-us/library/cc144115(v=VS.85).aspx

|Parameter Name|Remarks|
|--------------|-------|
|shellObject|ShellObject to initialize the thumbnail|
|sideSize|Square side dimension in which the thumbnail should fit; the thumbnail will be scaled otherwise.|

_returns: Generated thumbnail_




