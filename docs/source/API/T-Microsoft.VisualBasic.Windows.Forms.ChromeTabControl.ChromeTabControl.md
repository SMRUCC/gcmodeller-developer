---
title: ChromeTabControl
---

# ChromeTabControl
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.html)_



### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.#ctor
```
Creates a new tab control.

#### CreateCloseButtonImages
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.CreateCloseButtonImages
```
Creates the array of images used to close tabs.
_returns: An array of bitmaps with the close tab images._

#### DrawTab
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.DrawTab(System.Drawing.Graphics,System.Int32,System.Drawing.RectangleF)
```
Draws a specific tab to the control.

|Parameter Name|Remarks|
|--------------|-------|
|g|The graphics to use when drawing.|
|index|The index of the tab.|
|rect|The rectangle associated with the tab.|


#### GetNewTabButtonRect
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.GetNewTabButtonRect(Microsoft.VisualBasic.List{System.Drawing.RectangleF})
```
Gets the rectangle associated with the new tab button.

|Parameter Name|Remarks|
|--------------|-------|
|rects|The rectangles |


#### OnPaint
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.OnPaint(System.Windows.Forms.PaintEventArgs)
```
Gets called when the control gets painted.

|Parameter Name|Remarks|
|--------------|-------|
|e|The PaintEventArgs for this event.|


#### OnPaintBackground
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.OnPaintBackground(System.Windows.Forms.PaintEventArgs)
```
Gets called when the control paints its background.

|Parameter Name|Remarks|
|--------------|-------|
|pevent|-|


#### OnResize
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.OnResize(System.EventArgs)
```
Gets called when this control gets resized.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event paramaters.|


#### PointToTabIndex
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.PointToTabIndex(System.Drawing.PointF)
```
Returns the tab page index given a point on the screen.

|Parameter Name|Remarks|
|--------------|-------|
|pnt|The point on the screen.|

_returns: The index of the tab that the point is over._

#### ReclipMouse
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.ReclipMouse
```
Causes the mouse move event to be triggered without the mouse having to be moved.

#### SetCanvas
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.SetCanvas(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage)
```
Sets the current page to act as the canvas.

|Parameter Name|Remarks|
|--------------|-------|
|page|The page to set.|


#### UpdateAreas
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl.UpdateAreas
```
Updates the areas to draw into. Usually called when resized.



### Properties

#### NewTabButton
Whether or not to show the new tab button.
#### TabPages
The currently opened pages.
#### TabWidth
The current width of normal tabs.
#### TrayItems
The current tray items being shown.

