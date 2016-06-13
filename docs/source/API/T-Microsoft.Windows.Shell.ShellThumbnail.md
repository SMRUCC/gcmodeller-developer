---
title: ShellThumbnail
---

# ShellThumbnail
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Represents a thumbnail or an icon for a ShellObject.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.ShellThumbnail.#ctor(Microsoft.Windows.Shell.ShellObject)
```
Internal constructor that takes in a parent ShellObject.

|Parameter Name|Remarks|
|--------------|-------|
|shellObject|-|




### Properties

#### AllowBiggerSize
Gets or sets a value that determines if the user can manually stretch the returned image.
 The default value is false.
#### Bitmap
Gets the thumbnail or icon image in @"T:System.Drawing.Bitmap" format.
 Null is returned if the ShellObject does not have a thumbnail or icon image.
#### BitmapSource
Gets the thumbnail or icon image in @"T:System.Windows.Media.Imaging.BitmapSource" format. 
 Null is returned if the ShellObject does not have a thumbnail or icon image.
#### CurrentSize
Gets or sets the default size of the thumbnail or icon. The default is 32x32 pixels for icons and 
 256x256 pixels for thumbnails.
#### ExtraLargeBitmap
Gets the thumbnail or icon in extra large size and @"T:System.Drawing.Bitmap" format.
#### ExtraLargeBitmapSource
Gets the thumbnail or icon in Extra Large size and @"T:System.Windows.Media.Imaging.BitmapSource" format.
#### ExtraLargeIcon
Gets the thumbnail or icon in Extra Large size and @"T:System.Drawing.Icon" format.
#### FormatOption
Gets or sets a value that determines if the current format option is thumbnail or icon, thumbnail only, or icon only.
 The default is thumbnail or icon.
#### Icon
Gets the thumbnail or icon image in @"T:System.Drawing.Icon" format. 
 Null is returned if the ShellObject does not have a thumbnail or icon image.
#### LargeBitmap
Gets the thumbnail or icon in large size and @"T:System.Drawing.Bitmap" format.
#### LargeBitmapSource
Gets the thumbnail or icon in large size and @"T:System.Windows.Media.Imaging.BitmapSource" format.
#### LargeIcon
Gets the thumbnail or icon in Large size and @"T:System.Drawing.Icon" format.
#### m_currentSize
Internal member to keep track of the current size
#### MediumBitmap
Gets the thumbnail or icon in Medium size and @"T:System.Drawing.Bitmap" format.
#### MediumBitmapSource
Gets the thumbnail or icon in medium size and @"T:System.Windows.Media.Imaging.BitmapSource" format.
#### MediumIcon
Gets the thumbnail or icon in Medium size and @"T:System.Drawing.Icon" format.
#### RetrievalOption
Gets or sets a value that determines if the current retrieval option is cache or extract, cache only, or from memory only.
 The default is cache or extract.
#### shellItemNative
Native shellItem
#### SmallBitmap
Gets the thumbnail or icon in small size and @"T:System.Drawing.Bitmap" format.
#### SmallBitmapSource
Gets the thumbnail or icon in small size and @"T:System.Windows.Media.Imaging.BitmapSource" format.
#### SmallIcon
Gets the thumbnail or icon in small size and @"T:System.Drawing.Icon" format.

