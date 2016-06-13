---
title: Utils
---

# Utils
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.html)_

Static utility methods.

### Methods

#### DrawImageTransparent
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.DrawImageTransparent(System.Drawing.Graphics,System.Drawing.Bitmap,System.Single,System.Single,System.Single)
```
Draws an image with a specific opacity.

|Parameter Name|Remarks|
|--------------|-------|
|g|The graphics to use.|
|source|The image to draw.|
|x|The x-coordinate to draw to.|
|y|The y-coordinate to draw to.|
|opacityPercent|The opacity as a percent.|


#### DrawPathShadow
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.DrawPathShadow(System.Drawing.Graphics,System.Drawing.RectangleF,System.Int32)
```
Draws a rectangle's shadow.

|Parameter Name|Remarks|
|--------------|-------|
|g|The graphics to use.|
|rect|The retangle to get the shadow of.|
|size|The size of the shadow in pixels.|


#### GetCapsulePath
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.GetCapsulePath(System.Drawing.RectangleF)
```
Returns a capsule according to a base rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|baseRect|The base rectangle to copy from.|

_returns: A capsule as a graphics path._

#### GetRoundedRectanglePath
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.GetRoundedRectanglePath(System.Drawing.RectangleF,System.Single)
```
Returns a rounded rectangle graphics path according to a base rectangle and radius.

|Parameter Name|Remarks|
|--------------|-------|
|baseRect|The rectangle to copy from.|
|radius|The radius of the rounded corners.|

_returns: A rounded rectangle as a graphics path._

#### MovePath
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.MovePath(System.Drawing.Drawing2D.GraphicsPath,System.Single,System.Single)
```
Moves a graphics path a certain amount of pixels.

|Parameter Name|Remarks|
|--------------|-------|
|path|The path to move.|
|xmodifier|The pixels to move in the x position.|
|ymodifier|The pixels to move in the y position.|


#### ResizeBitmap
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.ResizeBitmap(System.Drawing.Bitmap,System.Drawing.Size)
```
Resizes a bitmap to a new size. Unconstrained.

|Parameter Name|Remarks|
|--------------|-------|
|source|The image to resize.|
|size|The size to resize the image to.|

_returns: A resized image as a bitmap._

#### ScalePath
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.ScalePath(System.Drawing.Drawing2D.GraphicsPath,System.Single)
```
Scales a graphics path a specific number of pixels.

|Parameter Name|Remarks|
|--------------|-------|
|path|The path to scale.|
|pixels|The amount to scale in pixels.|


#### SetBitmapOpacity
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.SetBitmapOpacity(System.Drawing.Bitmap,System.Single)
```
Sets the opacity of the bitmap.

|Parameter Name|Remarks|
|--------------|-------|
|source|The bitmap to set the opacity of.|
|opacityPercent|The percent of the opacity between 0 and 100.|

_returns: The new bitmap._

#### TintBitmap
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.Utils.TintBitmap(System.Drawing.Bitmap,System.Drawing.Color,System.Single)
```
Tints an image with a specified color and opacity.

|Parameter Name|Remarks|
|--------------|-------|
|source|The bitmap to tint.|
|tintcolor|The color to tint the bitmap.|
|opacityPercent|The opacity of the tint.|

_returns: The new tinted bitmap._




