---
title: ShellThumbnailFormatOption
---

# ShellThumbnailFormatOption
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Represents the format options for the thumbnails and icons.



### Properties

#### Default
The default behavior loads a thumbnail. An HBITMAP for the icon of the item is retrieved if there is no thumbnail for the current Shell Item.
#### IconOnly
The IconOnly behavior returns only the icon, never the thumbnail.
#### ThumbnailOnly
The ThumbnailOnly behavior returns only the thumbnails, never the icon. Note that not all items have thumbnails 
 so ShellThumbnailFormatOption.ThumbnailOnly can fail in these cases.

