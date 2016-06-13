---
title: Drawing
---

# Drawing
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Renderer](N-Microsoft.VisualBasic.MolkPlusTheme.Renderer.html)_



### Methods

#### colorFromAHSB
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.colorFromAHSB(System.Int32,System.Single,System.Single,System.Single)
```
Get a color structure from an AHSB value

|Parameter Name|Remarks|
|--------------|-------|
|a|Alpha value from the color.|
|h|Hue value from the color.|
|s|Saturation value from the color.|
|b|Brightness value from the color.|

_returns: A color structure represent AHSB value._

#### drawTriangle
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.drawTriangle(System.Drawing.Graphics,System.Drawing.Rectangle,System.Drawing.Color,System.Drawing.Color,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.TriangleDirection,System.Int32)
```
Draw a shadowed triangle in the center of a rectangle, overloaded.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the triangle to be drawn.|
|rect|Rectangle where the triangle to be drawn.|
|color|Color of the triangle.|
|shadowColor|Shadow color of the triangle.|
|direction|@"T:Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.TriangleDirection"[TriangleDirection], direction of the triangle.|
|size|Size of the triangle.|


#### getGlowingPath
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.getGlowingPath(System.Drawing.Rectangle,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.LightingGlowPoint,System.Int32,System.Int32,System.Int32,System.Int32)
```
Create a lighting glow path from a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|rect|The rectangle where lighting glow path to be created.|
|glowPoint|One of @"T:Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.LightingGlowPoint"[LightingGlowPoint] enumeration value.  Determine where the light starts.|
|percentWidth|Percentage of rectangle's width used to create the path.|
|percentHeight|Percentage of rectangle's height used to create the path.|
|customX|X location where the light starts.  Used when glowPoint value is LightingGlowPoint.Custom.|
|customY|Y location where the light starts.  Used when glowPoint value is LightingGlowPoint.Custom.|

_returns: A GraphicsPath object that represent a lighting glow._

#### getImageRectangle
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.getImageRectangle(System.Drawing.Image,System.Drawing.Rectangle,System.Int32,System.Int32)
```
Get a resized bounding rectangle of an image specified by maximum width and maximum height inside of a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|img|Image to measure.|
|rect|Rectangle where the result to be placed.|
|maxWidth|Maximum width of the result.|
|maxHeight|Maximum height of the result.|

_returns: A rectangle represent resized bounding of an image._
> If image is nothing, rect parameter returned.

#### getInnerShadowPath
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.getInnerShadowPath(System.Drawing.Rectangle,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.ShadowPoint,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
Create a GraphicsPath object represent an inner shadow of a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|rect|The rectangle where shadow path to be created.|
|shadow|One of @"T:Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.ShadowPoint"[ShadowPoint] enumeration value.  Determine the place of the shadow inside the rectangle.|
|verticalRange|Shadow height, calculated from top or bottom of the rectange.|
|horizontalRange|Shadow width, calculated from left or right of the rectangle.|
|topLeft|Rounded range of the rectangle's top left corner.|
|topRight|Rounded range of the rectangle's top right corner.|
|bottomLeft|Rounded range of the rectangle's bottom left corner.|
|bottomRight|Rounded range of the rectangle's bottom right corner.|

_returns: A GraphicsPath object that represent an inner shadow._
> @"T:Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.ShadowPoint"

#### grayscaledImage
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.grayscaledImage(System.Drawing.Image,System.Drawing.Rectangle,System.Drawing.Graphics)
```
Draw a grayscaled image from an image inside a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|image|Image to be drawn.|
|rect|Rectangle where a grayscaled image to be drawn.|
|g|Graphics object where the grayscaled image to be drawn.|


#### roundedRectangle
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.roundedRectangle(System.Drawing.Rectangle,System.Int32,System.Int32,System.Int32,System.Int32)
```
Create a rounded corner rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|rect|The rectangle to be rounded.|
|topLeft|Range of the top left corner from the rectangle to be rounded.|
|topRight|Range of the top right corner from the rectangle to be rounded.|
|bottomLeft|Range of the bottom left corner from the rectangle to be rounded.|
|bottomRight|Range of the bottom right corner from the rectangle to be rounded.|

_returns: A GraphicsPath object that represent a rectangle that have its corners rounded._
> The range must be greater than or equal with zero, and must be less then or equal with a half of its rectangle's width or height.
>  If the range value less than zero, then its return the rect parameter.
>  If rectangle width greater than its height, then maximum value of range is a half of rectangle height.
>  There are optionally rounded on its four corner.

#### scaleImage
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.scaleImage(System.Drawing.Image,System.Int32)
```
Resize an image to fit maximum value.

|Parameter Name|Remarks|
|--------------|-------|
|image|Image to measure.|
|max|Maximum width or height of the result.|

_returns: A size represent resized image size._
> If image is nothing, a (0, 0) size returned.




