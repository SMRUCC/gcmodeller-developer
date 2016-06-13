---
title: ShellThumbnailRetrievalOption
---

# ShellThumbnailRetrievalOption
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Represents the different retrieval options for the thumbnail or icon,
 such as extracting the thumbnail or icon from a file, 
 from the cache only, or from memory only.



### Properties

#### CacheOnly
The CacheOnly behavior returns a cached thumbnail if it is available. Allows access to the disk,
 but only to retrieve a cached item. If no cached thumbnail is available, a cached per-instance icon is returned but 
 a thumbnail or icon is not extracted.
#### Default
The default behavior loads a thumbnail. If there is no thumbnail for the current ShellItem, 
 the icon is retrieved. The thumbnail or icon is extracted if it is not currently cached.
#### MemoryOnly
The MemoryOnly behavior returns the item only if it is in memory. The disk is not accessed even if the item is cached. 
 Note that this only returns an already-cached icon and can fall back to a per-class icon if 
 an item has a per-instance icon that has not been cached yet. Retrieving a thumbnail, 
 even if it is cached, always requires the disk to be accessed, so this method should not be 
 called from the user interface (UI) thread without passing ShellThumbnailCacheOptions.MemoryOnly.

