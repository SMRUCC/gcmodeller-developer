---
title: TrayItem
---

# TrayItem
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.html)_

Items that go in the tab cotrol's tray.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TrayItem.#ctor(System.Drawing.Bitmap)
```
Creates a new tray item given an icon.

|Parameter Name|Remarks|
|--------------|-------|
|icon|The icon to display for this item.|


#### RaiseClicked
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TrayItem.RaiseClicked(System.Drawing.RectangleF)
```
Raises a clicked event for this tray item.

|Parameter Name|Remarks|
|--------------|-------|
|rect|The rectangle of this item.|


#### RefreshControl
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TrayItem.RefreshControl
```
Invalidates the tab control that owns this tray item.

#### SetOwnerTabControl
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TrayItem.SetOwnerTabControl(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl)
```
Sets the TabControl that owns this tray item.
 This is used for refreshing the TabControl when
 this item is updated.

|Parameter Name|Remarks|
|--------------|-------|
|owner|The TabControl that owns this tray item.|




### Properties

#### Image
Sets the image for this tray item.
#### Image16
The 16x16 image for this tray item.
#### Image16Dark
The 16x16 dark image for this tray item.
#### Image16Transparent
The 16x16 slightly transparent image for this tray item.
#### Type
The tray item type for this tray item.
 This decides what functionality the item has.

