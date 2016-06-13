---
title: ColorBox
---

# ColorBox
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls](N-Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.html)_

Provides a interface to edit color values

### Methods

#### ClearMarker
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.ClearMarker
```
Redraws only the content over the marker

#### Dispose
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Dispose(System.Boolean)
```
Clean up any resources being used.

#### Draw_Style_Blue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Blue
```
Draws the content of the control filling in all color values with the provided Blue value.

#### Draw_Style_Green
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Green
```
Draws the content of the control filling in all color values with the provided Green value.

#### Draw_Style_Hue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Hue
```
Draws the content of the control filling in all color values with the provided Hue value.

#### Draw_Style_Luminance
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Luminance
```
Draws the content of the control filling in all color values with the provided Luminance or Brightness value.

#### Draw_Style_Red
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Red
```
Draws the content of the control filling in all color values with the provided Red value.

#### Draw_Style_Saturation
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Draw_Style_Saturation
```
Draws the content of the control filling in all color values with the provided Saturation value.

#### DrawBorder
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.DrawBorder
```
Draws the border around the control.

#### DrawContent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.DrawContent
```
Evaluates the DrawStyle of the control and calls the appropriate
 drawing function for content

#### DrawMarker
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.DrawMarker(System.Int32,System.Int32,System.Boolean)
```
Draws the marker (circle) inside the box

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|
|Unconditional|-|


#### GetColor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.GetColor(System.Int32,System.Int32)
```
Returns the graphed color at the x,y position on the control

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|


#### InitializeComponent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.InitializeComponent
```
Required method for Designer support - do not modify 
 the contents of this method with the code editor.

#### Redraw_Control
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Redraw_Control
```
Calls all the functions neccessary to redraw the entire control.

#### Reset_Marker
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Reset_Marker(System.Boolean)
```
Resets the marker position of the slider to match the controls color. Gives the option of redrawing the slider.

|Parameter Name|Remarks|
|--------------|-------|
|Redraw|Set to true if you want the function to redraw the slider after determining the best position|


#### ResetHSLRGB
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.ResetHSLRGB
```
Resets the controls color (both HSL and RGB variables) based on the current marker position

#### Round
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorBox.Round(System.Double)
```
Kindof self explanitory, I really need to look up the .NET function that does this.

|Parameter Name|Remarks|
|--------------|-------|
|val|double value to be rounded to an integer|




### Properties

#### components
Required designer variable.
#### DrawStyle
The drawstyle of the contol (Hue, Saturation, Brightness, Red, Green or Blue)
#### HSL
The HSL color of the control, changing the HSL will automatically change the RGB color for the control.
#### RGB
The RGB color of the control, changing the RGB will automatically change the HSL color for the control.

