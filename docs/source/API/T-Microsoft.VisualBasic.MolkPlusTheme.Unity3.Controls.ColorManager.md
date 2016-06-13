---
title: ColorManager
---

# ColorManager
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls](N-Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.html)_



### Methods

#### CMYK_to_RGB
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.CMYK_to_RGB(Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.CMYK)
```
Converts CMYK to RGB

|Parameter Name|Remarks|
|--------------|-------|
|_cmyk|A color to convert|

_returns: A Color object_

#### HSL_to_RGB
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.HSL_to_RGB(Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.HSL)
```
Converts a colour from HSL to RGB

|Parameter Name|Remarks|
|--------------|-------|
|hsl|The HSL value|

_returns: A Color structure containing the equivalent RGB values_
> Adapted from the algoritm in Foley and Van-Dam

#### ModifyBrightness
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.ModifyBrightness(System.Drawing.Color,System.Double)
```
Modifies an existing brightness level

|Parameter Name|Remarks|
|--------------|-------|
|c|The original colour|
|brightness|The luminance delta|

_returns: An adjusted colour_
>  
>  To reduce brightness use a number smaller than 1. To increase brightness use a number larger tnan 1 
>  

#### ModifyHue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.ModifyHue(System.Drawing.Color,System.Double)
```
Modifies an existing Hue level

|Parameter Name|Remarks|
|--------------|-------|
|c|The original colour|
|Hue|The Hue delta|

_returns: An adjusted colour_
>  
>  To reduce Hue use a number smaller than 1. To increase Hue use a number larger tnan 1 
>  

#### ModifySaturation
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.ModifySaturation(System.Drawing.Color,System.Double)
```
Modifies an existing Saturation level

|Parameter Name|Remarks|
|--------------|-------|
|c|The original colour|
|Saturation|The saturation delta|

_returns: An adjusted colour_
>  
>  To reduce Saturation use a number smaller than 1. To increase Saturation use a number larger tnan 1 
>  

#### RGB_to_CMYK
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.RGB_to_CMYK(System.Drawing.Color)
```
Converts RGB to CMYK

|Parameter Name|Remarks|
|--------------|-------|
|c|A color to convert.|

_returns: A CMYK object_

#### RGB_to_HSL
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.RGB_to_HSL(System.Drawing.Color)
```
Converts RGB to HSL

|Parameter Name|Remarks|
|--------------|-------|
|c|A Color to convert|

_returns: An HSL value_
> Takes advantage of whats already built in to .NET by using the Color.GetHue, Color.GetSaturation and Color.GetBrightness methods

#### Round
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.Round(System.Double)
```
Custom rounding function.

|Parameter Name|Remarks|
|--------------|-------|
|val|Value to round|

_returns: Rounded value_

#### SetBrightness
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.SetBrightness(System.Drawing.Color,System.Double)
```
Sets the absolute brightness of a colour

|Parameter Name|Remarks|
|--------------|-------|
|c|Original colour|
|brightness|The luminance level to impose|

_returns: an adjusted colour_

#### SetHue
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.SetHue(System.Drawing.Color,System.Double)
```
Sets the absolute Hue level

|Parameter Name|Remarks|
|--------------|-------|
|c|An original colour|
|Hue|The Hue value to impose|

_returns: An adjusted colour_
> Accepted values 0-1

#### SetSaturation
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Unity3.Controls.ColorManager.SetSaturation(System.Drawing.Color,System.Double)
```
Sets the absolute saturation level

|Parameter Name|Remarks|
|--------------|-------|
|c|An original colour|
|Saturation|The saturation value to impose|

_returns: An adjusted colour_
> Accepted values 0-1




