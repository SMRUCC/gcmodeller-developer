---
title: Button
---

# Button
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Renderer](N-Microsoft.VisualBasic.MolkPlusTheme.Renderer.html)_

Class for rendering button and menu item, just a little part that have supports for BlackBlue color theme.

### Methods

#### draw
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Button.draw(System.Drawing.Graphics,System.Drawing.Rectangle,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.ColorTheme,System.Int32,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean)
```
Draw a button on a Graphics object.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the button to be drawn.|
|rect|Bounding rectangle of the button.|
|theme|Theme used to paint.|
|rounded|Rounded range of the corners of the rectangle.|
|enabled|Determine whether the button is enabled.|
|pressed|Determine whether the button is pressed.|
|selected|Determine whether the button is selected.|
|hlited|Determine whether the button is highlited.|
|focused|Determine whether the button has input focus.|


#### drawSplit
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.Button.drawSplit(System.Drawing.Graphics,System.Drawing.Rectangle,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Button.SplitLocation,System.Int32,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Drawing.ColorTheme,System.Int32,System.Boolean,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Button.SplitEffectLocation,System.Boolean,Microsoft.VisualBasic.MolkPlusTheme.Renderer.Button.SplitEffectLocation,System.Boolean)
```
Draw a split button on a Graphics object.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the button to be drawn.|
|rect|Bounding rectangle of the button.|
|split|Split location of the split button.|
|splitSize|Size of the split.|
|theme|Theme used to paint.|
|rounded|Rounded range of the corners of the rectangle.|
|enabled|Determine whether the button is enabled.|
|pressed|Determine where the pressed state takes effect.|
|selected|Determine whether the button is selected.|
|hlited|Determine where the highlited state takes effect.|
|focused|Determine whether the button has input focus.|




### Properties

#### DisabledBlend
Represent a color blend on a disabled button.
#### DisabledBorderPen
Represent a border pen on a disabled button.
#### DisabledGlow
Represent a glowing color on a disabled button.
#### FocusedBlend
Represent a color blend on a focused button.
#### FocusedBorderPen
Represent a border pen on a focused button.
#### FocusedGlow
Represent a glowing color on a focused button.
#### HLitedBlend
Represent a color blend on a highlited (mouse hover) button.
#### HLitedBorderPen
Represent a border pen on a highlited button.
#### HLitedGlow
Represent a glowing color on a highlited button.
#### HLitedLightBlend
Represent a color blend on a highlited button, but mouse didn't hover on the button.
#### HLitedSeparatorPen
Represent a separator pen on a highlited button.
#### NormalBlend
Represent a color blend on a normal button.
#### NormalBorderPen
Represent a border pen on a normal button.
#### NormalGlow
Represent a glowing color on a normal button.
#### NormalSeparatorPen
Represent a separator pen on a normal button.
#### PressedBlend
Represent a color blend on a pressed button.
#### PressedGlow
Represent a glowing color on a pressed button.
#### PressedSeparatorPen
Represent a separator pen on a pressed button.
#### SelectedBlend
Represent a color blend on a selected button.
#### SelectedBorderPen
Represent a border pen on a selected button.
#### SelectedGlow
Represent a glowing color on a selected button.
#### SelectedHLiteBlend
Represent a color blend on a highlited selected button.
#### SelectedHLiteGlow
Represent a glowing color on a selected highlited button.
#### SelectedSeparatorPen
Represent a separator pen on a selected button.

