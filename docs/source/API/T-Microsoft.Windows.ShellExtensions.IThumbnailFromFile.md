---
title: IThumbnailFromFile
---

# IThumbnailFromFile
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This interface exposes the ConsructBitmap function for initializing the 
 Thumbnail Provider with file information.
 This interface can be used in conjunction with the other intialization interfaces,
 but only 1 will be accessed according to the priorities preset by the Windows Shell:
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromStream"
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromShellObject"
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromFile"

### Methods

#### ConstructBitmap
```csharp
Microsoft.Windows.ShellExtensions.IThumbnailFromFile.ConstructBitmap(System.IO.FileInfo,System.Int32)
```
Provides the @"T:System.IO.FileInfo" to the item from which a thumbnail should be created.
 Only 32bpp bitmaps support adornments. 
 While 24bpp bitmaps will be displayed they will not display adornments.
 Additional guidelines for developing thumbnails can be found at http://msdn.microsoft.com/en-us/library/cc144115(v=VS.85).aspx

|Parameter Name|Remarks|
|--------------|-------|
|info|FileInfo to initialize the thumbnail|
|sideSize|Square side dimension in which the thumbnail should fit; the thumbnail will be scaled otherwise.|

_returns: Generated thumbnail_




