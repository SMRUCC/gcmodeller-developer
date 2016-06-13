---
title: VerticalColorSlider
---

# VerticalColorSlider
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls](N-Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.html)_

A vertical slider control that shows a range for a color property (a.k.a. Hue, Saturation, Brightness,
 Red, Green, Blue) and sends an event when the slider is changed.

### Methods

#### ClearSlider
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.ClearSlider
```
Redraws the background over the slider area on both sides of the control

#### Dispose
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Dispose(System.Boolean)
```
Clean up any resources being used.

#### Draw_Style_Blue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Blue
```
Fills in the content of the control showing all values of Blue (0 to 255) for the given
 Red and Green.

#### Draw_Style_Green
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Green
```
Fills in the content of the control showing all values of Green (0 to 255) for the given
 Red and Blue.

#### Draw_Style_Hue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Hue
```
Fills in the content of the control showing all values of Hue (from 0 to 360)

#### Draw_Style_Luminance
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Luminance
```
Fills in the content of the control showing all values of Luminance (0 to 100%) for the given
 Hue and Saturation.

#### Draw_Style_Red
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Red
```
Fills in the content of the control showing all values of Red (0 to 255) for the given
 Green and Blue.

#### Draw_Style_Saturation
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Draw_Style_Saturation
```
Fills in the content of the control showing all values of Saturation (0 to 100%) for the given
 Hue and Luminance.

#### DrawBorder
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.DrawBorder
```
Draws the border around the control, in this case the border around the content area between
 the slider arrows.

#### DrawContent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.DrawContent
```
Evaluates the DrawStyle of the control and calls the appropriate
 drawing function for content

#### DrawSlider
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.DrawSlider(System.Int32,System.Boolean)
```
Draws the slider arrows on both sides of the control.

|Parameter Name|Remarks|
|--------------|-------|
|position|position value of the slider, lowest being at the bottom.  The range
 is between 0 and the controls height-9.  The values will be adjusted if too large/small|
|Unconditional|If Unconditional is true, the slider is drawn, otherwise some logic 
 is performed to determine is drawing is really neccessary.|


#### InitializeComponent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.InitializeComponent
```
Required method for Designer support - do not modify 
 the contents of this method with the code editor.

#### Redraw_Control
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Redraw_Control
```
Calls all the functions neccessary to redraw the entire control.

#### Reset_Slider
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Reset_Slider(System.Boolean)
```
Resets the vertical position of the slider to match the controls color. Gives the option of redrawing the slider.

|Parameter Name|Remarks|
|--------------|-------|
|Redraw|Set to true if you want the function to redraw the slider after determining the best position|


#### ResetHSLRGB
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.ResetHSLRGB
```
Resets the controls color (both HSL and RGB variables) based on the current slider position

#### Round
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.VerticalColorSlider.Round(System.Double)
```
Kindof self explanitory, I really need to look up the .NET function that does this.

|Parameter Name|Remarks|
|--------------|-------|
|val|double value to be rounded to an integer|




### Properties

#### DrawStyle
The drawstyle of the contol (Hue, Saturation, Brightness, Red, Green or Blue)
#### HSL
The HSL color of the control, changing the HSL will automatically change the RGB color for the control.
#### RGB
The RGB color of the control, changing the RGB will automatically change the HSL color for the control.

