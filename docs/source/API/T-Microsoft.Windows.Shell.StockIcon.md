---
title: StockIcon
---

# StockIcon
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Represents a standard system icon.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.StockIcon.#ctor(Microsoft.Windows.Shell.StockIconIdentifier,Microsoft.Windows.Shell.StockIconSize,System.Boolean,System.Boolean)
```
Creates a new StockIcon instance with the specified identifer and options.

|Parameter Name|Remarks|
|--------------|-------|
|id|A value that identifies the icon represented by this instance.|
|size|A value that indicates the size of the stock icon.|
|isLinkOverlay|A bool value that indicates whether the icon has a link overlay.|
|isSelected|A bool value that indicates whether the icon is in a selected state.|


#### Dispose
```csharp
Microsoft.Windows.Shell.StockIcon.Dispose
```
Release the native objects

#### Finalize
```csharp
Microsoft.Windows.Shell.StockIcon.Finalize
```




### Properties

#### Bitmap
Gets the icon image in @"T:System.Drawing.Bitmap" format.
#### BitmapSource
Gets the icon image in @"T:System.Windows.Media.Imaging.BitmapSource" format.
#### CurrentSize
Gets or sets a value that controls the size of the Stock Icon.
#### Icon
Gets the icon image in @"T:System.Drawing.Icon" format.
#### Identifier
Gets or sets the Stock Icon identifier associated with this icon.
#### LinkOverlay
Gets or sets a value that cotrols whether to put a link overlay on the icon.
#### Selected
Gets or sets a value indicating whether the icon appears selected.

