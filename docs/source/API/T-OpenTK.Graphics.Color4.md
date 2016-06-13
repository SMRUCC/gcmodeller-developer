---
title: Color4
---

# Color4
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Represents a color with 4 floating-point components (R, G, B, A).

### Methods

#### #ctor
```csharp
OpenTK.Graphics.Color4.#ctor(System.Drawing.Color)
```
Constructs a new Color4 structure from the specified System.Drawing.Color.

|Parameter Name|Remarks|
|--------------|-------|
|color|The System.Drawing.Color containing the component values.|


#### Equals
```csharp
OpenTK.Graphics.Color4.Equals(OpenTK.Graphics.Color4)
```
Compares whether this Color4 structure is equal to the specified Color4.

|Parameter Name|Remarks|
|--------------|-------|
|other|The Color4 structure to compare to.|

_returns: True if both Color4 structures contain the same components; false otherwise._

#### GetHashCode
```csharp
OpenTK.Graphics.Color4.GetHashCode
```
Calculates the hash code for this Color4 structure.
_returns: A System.Int32 containing the hashcode of this Color4 structure._

#### op_Equality
```csharp
OpenTK.Graphics.Color4.op_Equality(OpenTK.Graphics.Color4,OpenTK.Graphics.Color4)
```
Compares the specified Color4 structures for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left-hand side of the comparison.|
|right|The right-hand side of the comparison.|

_returns: True if left is equal to right; false otherwise._

#### op_Explicit
```csharp
OpenTK.Graphics.Color4.op_Explicit(OpenTK.Graphics.Color4)~System.Drawing.Color
```
Converts the specified Color4 to a System.Drawing.Color structure.

|Parameter Name|Remarks|
|--------------|-------|
|color|The Color4 to convert.|

_returns: A new System.Drawing.Color structure containing the converted components._

#### op_Implicit
```csharp
OpenTK.Graphics.Color4.op_Implicit(System.Drawing.Color)~OpenTK.Graphics.Color4
```
Converts the specified System.Drawing.Color to a Color4 structure.

|Parameter Name|Remarks|
|--------------|-------|
|color|The System.Drawing.Color to convert.|

_returns: A new Color4 structure containing the converted components._

#### op_Inequality
```csharp
OpenTK.Graphics.Color4.op_Inequality(OpenTK.Graphics.Color4,OpenTK.Graphics.Color4)
```
Compares the specified Color4 structures for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left-hand side of the comparison.|
|right|The right-hand side of the comparison.|

_returns: True if left is not equal to right; false otherwise._

#### ToArgb
```csharp
OpenTK.Graphics.Color4.ToArgb
```
Converts this color to an integer representation with 8 bits per channel.
_returns: A @"T:System.Int32" that represents this instance._
> This method is intended only for compatibility with System.Drawing. It compresses the color into 8 bits per channel, which means color information is lost.

#### ToString
```csharp
OpenTK.Graphics.Color4.ToString
```
Creates a System.String that describes this Color4 structure.
_returns: A System.String that describes this Color4 structure._



### Properties

#### A
The alpha component of this Color4 structure.
#### AliceBlue
Gets the system color with (R, G, B, A) = (240, 248, 255, 255).
#### AntiqueWhite
Gets the system color with (R, G, B, A) = (250, 235, 215, 255).
#### Aqua
Gets the system color with (R, G, B, A) = (0, 255, 255, 255).
#### Aquamarine
Gets the system color with (R, G, B, A) = (127, 255, 212, 255).
#### Azure
Gets the system color with (R, G, B, A) = (240, 255, 255, 255).
#### B
The blue component of this Color4 structure.
#### Beige
Gets the system color with (R, G, B, A) = (245, 245, 220, 255).
#### Bisque
Gets the system color with (R, G, B, A) = (255, 228, 196, 255).
#### Black
Gets the system color with (R, G, B, A) = (0, 0, 0, 255).
#### BlanchedAlmond
Gets the system color with (R, G, B, A) = (255, 235, 205, 255).
#### Blue
Gets the system color with (R, G, B, A) = (0, 0, 255, 255).
#### BlueViolet
Gets the system color with (R, G, B, A) = (138, 43, 226, 255).
#### Brown
Gets the system color with (R, G, B, A) = (165, 42, 42, 255).
#### BurlyWood
Gets the system color with (R, G, B, A) = (222, 184, 135, 255).
#### CadetBlue
Gets the system color with (R, G, B, A) = (95, 158, 160, 255).
#### Chartreuse
Gets the system color with (R, G, B, A) = (127, 255, 0, 255).
#### Chocolate
Gets the system color with (R, G, B, A) = (210, 105, 30, 255).
#### Coral
Gets the system color with (R, G, B, A) = (255, 127, 80, 255).
#### CornflowerBlue
Gets the system color with (R, G, B, A) = (100, 149, 237, 255).
#### Cornsilk
Gets the system color with (R, G, B, A) = (255, 248, 220, 255).
#### Crimson
Gets the system color with (R, G, B, A) = (220, 20, 60, 255).
#### Cyan
Gets the system color with (R, G, B, A) = (0, 255, 255, 255).
#### DarkBlue
Gets the system color with (R, G, B, A) = (0, 0, 139, 255).
#### DarkCyan
Gets the system color with (R, G, B, A) = (0, 139, 139, 255).
#### DarkGoldenrod
Gets the system color with (R, G, B, A) = (184, 134, 11, 255).
#### DarkGray
Gets the system color with (R, G, B, A) = (169, 169, 169, 255).
#### DarkGreen
Gets the system color with (R, G, B, A) = (0, 100, 0, 255).
#### DarkKhaki
Gets the system color with (R, G, B, A) = (189, 183, 107, 255).
#### DarkMagenta
Gets the system color with (R, G, B, A) = (139, 0, 139, 255).
#### DarkOliveGreen
Gets the system color with (R, G, B, A) = (85, 107, 47, 255).
#### DarkOrange
Gets the system color with (R, G, B, A) = (255, 140, 0, 255).
#### DarkOrchid
Gets the system color with (R, G, B, A) = (153, 50, 204, 255).
#### DarkRed
Gets the system color with (R, G, B, A) = (139, 0, 0, 255).
#### DarkSalmon
Gets the system color with (R, G, B, A) = (233, 150, 122, 255).
#### DarkSeaGreen
Gets the system color with (R, G, B, A) = (143, 188, 139, 255).
#### DarkSlateBlue
Gets the system color with (R, G, B, A) = (72, 61, 139, 255).
#### DarkSlateGray
Gets the system color with (R, G, B, A) = (47, 79, 79, 255).
#### DarkTurquoise
Gets the system color with (R, G, B, A) = (0, 206, 209, 255).
#### DarkViolet
Gets the system color with (R, G, B, A) = (148, 0, 211, 255).
#### DeepPink
Gets the system color with (R, G, B, A) = (255, 20, 147, 255).
#### DeepSkyBlue
Gets the system color with (R, G, B, A) = (0, 191, 255, 255).
#### DimGray
Gets the system color with (R, G, B, A) = (105, 105, 105, 255).
#### DodgerBlue
Gets the system color with (R, G, B, A) = (30, 144, 255, 255).
#### Firebrick
Gets the system color with (R, G, B, A) = (178, 34, 34, 255).
#### FloralWhite
Gets the system color with (R, G, B, A) = (255, 250, 240, 255).
#### ForestGreen
Gets the system color with (R, G, B, A) = (34, 139, 34, 255).
#### Fuchsia
Gets the system color with (R, G, B, A) = (255, 0, 255, 255).
#### G
The green component of this Color4 structure.
#### Gainsboro
Gets the system color with (R, G, B, A) = (220, 220, 220, 255).
#### GhostWhite
Gets the system color with (R, G, B, A) = (248, 248, 255, 255).
#### Gold
Gets the system color with (R, G, B, A) = (255, 215, 0, 255).
#### Goldenrod
Gets the system color with (R, G, B, A) = (218, 165, 32, 255).
#### Gray
Gets the system color with (R, G, B, A) = (128, 128, 128, 255).
#### Green
Gets the system color with (R, G, B, A) = (0, 128, 0, 255).
#### GreenYellow
Gets the system color with (R, G, B, A) = (173, 255, 47, 255).
#### Honeydew
Gets the system color with (R, G, B, A) = (240, 255, 240, 255).
#### HotPink
Gets the system color with (R, G, B, A) = (255, 105, 180, 255).
#### IndianRed
Gets the system color with (R, G, B, A) = (205, 92, 92, 255).
#### Indigo
Gets the system color with (R, G, B, A) = (75, 0, 130, 255).
#### Ivory
Gets the system color with (R, G, B, A) = (255, 255, 240, 255).
#### Khaki
Gets the system color with (R, G, B, A) = (240, 230, 140, 255).
#### Lavender
Gets the system color with (R, G, B, A) = (230, 230, 250, 255).
#### LavenderBlush
Gets the system color with (R, G, B, A) = (255, 240, 245, 255).
#### LawnGreen
Gets the system color with (R, G, B, A) = (124, 252, 0, 255).
#### LemonChiffon
Gets the system color with (R, G, B, A) = (255, 250, 205, 255).
#### LightBlue
Gets the system color with (R, G, B, A) = (173, 216, 230, 255).
#### LightCoral
Gets the system color with (R, G, B, A) = (240, 128, 128, 255).
#### LightCyan
Gets the system color with (R, G, B, A) = (224, 255, 255, 255).
#### LightGoldenrodYellow
Gets the system color with (R, G, B, A) = (250, 250, 210, 255).
#### LightGray
Gets the system color with (R, G, B, A) = (211, 211, 211, 255).
#### LightGreen
Gets the system color with (R, G, B, A) = (144, 238, 144, 255).
#### LightPink
Gets the system color with (R, G, B, A) = (255, 182, 193, 255).
#### LightSalmon
Gets the system color with (R, G, B, A) = (255, 160, 122, 255).
#### LightSeaGreen
Gets the system color with (R, G, B, A) = (32, 178, 170, 255).
#### LightSkyBlue
Gets the system color with (R, G, B, A) = (135, 206, 250, 255).
#### LightSlateGray
Gets the system color with (R, G, B, A) = (119, 136, 153, 255).
#### LightSteelBlue
Gets the system color with (R, G, B, A) = (176, 196, 222, 255).
#### LightYellow
Gets the system color with (R, G, B, A) = (255, 255, 224, 255).
#### Lime
Gets the system color with (R, G, B, A) = (0, 255, 0, 255).
#### LimeGreen
Gets the system color with (R, G, B, A) = (50, 205, 50, 255).
#### Linen
Gets the system color with (R, G, B, A) = (250, 240, 230, 255).
#### Magenta
Gets the system color with (R, G, B, A) = (255, 0, 255, 255).
#### Maroon
Gets the system color with (R, G, B, A) = (128, 0, 0, 255).
#### MediumAquamarine
Gets the system color with (R, G, B, A) = (102, 205, 170, 255).
#### MediumBlue
Gets the system color with (R, G, B, A) = (0, 0, 205, 255).
#### MediumOrchid
Gets the system color with (R, G, B, A) = (186, 85, 211, 255).
#### MediumPurple
Gets the system color with (R, G, B, A) = (147, 112, 219, 255).
#### MediumSeaGreen
Gets the system color with (R, G, B, A) = (60, 179, 113, 255).
#### MediumSlateBlue
Gets the system color with (R, G, B, A) = (123, 104, 238, 255).
#### MediumSpringGreen
Gets the system color with (R, G, B, A) = (0, 250, 154, 255).
#### MediumTurquoise
Gets the system color with (R, G, B, A) = (72, 209, 204, 255).
#### MediumVioletRed
Gets the system color with (R, G, B, A) = (199, 21, 133, 255).
#### MidnightBlue
Gets the system color with (R, G, B, A) = (25, 25, 112, 255).
#### MintCream
Gets the system color with (R, G, B, A) = (245, 255, 250, 255).
#### MistyRose
Gets the system color with (R, G, B, A) = (255, 228, 225, 255).
#### Moccasin
Gets the system color with (R, G, B, A) = (255, 228, 181, 255).
#### NavajoWhite
Gets the system color with (R, G, B, A) = (255, 222, 173, 255).
#### Navy
Gets the system color with (R, G, B, A) = (0, 0, 128, 255).
#### OldLace
Gets the system color with (R, G, B, A) = (253, 245, 230, 255).
#### Olive
Gets the system color with (R, G, B, A) = (128, 128, 0, 255).
#### OliveDrab
Gets the system color with (R, G, B, A) = (107, 142, 35, 255).
#### Orange
Gets the system color with (R, G, B, A) = (255, 165, 0, 255).
#### OrangeRed
Gets the system color with (R, G, B, A) = (255, 69, 0, 255).
#### Orchid
Gets the system color with (R, G, B, A) = (218, 112, 214, 255).
#### PaleGoldenrod
Gets the system color with (R, G, B, A) = (238, 232, 170, 255).
#### PaleGreen
Gets the system color with (R, G, B, A) = (152, 251, 152, 255).
#### PaleTurquoise
Gets the system color with (R, G, B, A) = (175, 238, 238, 255).
#### PaleVioletRed
Gets the system color with (R, G, B, A) = (219, 112, 147, 255).
#### PapayaWhip
Gets the system color with (R, G, B, A) = (255, 239, 213, 255).
#### PeachPuff
Gets the system color with (R, G, B, A) = (255, 218, 185, 255).
#### Peru
Gets the system color with (R, G, B, A) = (205, 133, 63, 255).
#### Pink
Gets the system color with (R, G, B, A) = (255, 192, 203, 255).
#### Plum
Gets the system color with (R, G, B, A) = (221, 160, 221, 255).
#### PowderBlue
Gets the system color with (R, G, B, A) = (176, 224, 230, 255).
#### Purple
Gets the system color with (R, G, B, A) = (128, 0, 128, 255).
#### R
The red component of this Color4 structure.
#### Red
Gets the system color with (R, G, B, A) = (255, 0, 0, 255).
#### RosyBrown
Gets the system color with (R, G, B, A) = (188, 143, 143, 255).
#### RoyalBlue
Gets the system color with (R, G, B, A) = (65, 105, 225, 255).
#### SaddleBrown
Gets the system color with (R, G, B, A) = (139, 69, 19, 255).
#### Salmon
Gets the system color with (R, G, B, A) = (250, 128, 114, 255).
#### SandyBrown
Gets the system color with (R, G, B, A) = (244, 164, 96, 255).
#### SeaGreen
Gets the system color with (R, G, B, A) = (46, 139, 87, 255).
#### SeaShell
Gets the system color with (R, G, B, A) = (255, 245, 238, 255).
#### Sienna
Gets the system color with (R, G, B, A) = (160, 82, 45, 255).
#### Silver
Gets the system color with (R, G, B, A) = (192, 192, 192, 255).
#### SkyBlue
Gets the system color with (R, G, B, A) = (135, 206, 235, 255).
#### SlateBlue
Gets the system color with (R, G, B, A) = (106, 90, 205, 255).
#### SlateGray
Gets the system color with (R, G, B, A) = (112, 128, 144, 255).
#### Snow
Gets the system color with (R, G, B, A) = (255, 250, 250, 255).
#### SpringGreen
Gets the system color with (R, G, B, A) = (0, 255, 127, 255).
#### SteelBlue
Gets the system color with (R, G, B, A) = (70, 130, 180, 255).
#### Tan
Gets the system color with (R, G, B, A) = (210, 180, 140, 255).
#### Teal
Gets the system color with (R, G, B, A) = (0, 128, 128, 255).
#### Thistle
Gets the system color with (R, G, B, A) = (216, 191, 216, 255).
#### Tomato
Gets the system color with (R, G, B, A) = (255, 99, 71, 255).
#### Transparent
Gets the system color with (R, G, B, A) = (255, 255, 255, 0).
#### Turquoise
Gets the system color with (R, G, B, A) = (64, 224, 208, 255).
#### Violet
Gets the system color with (R, G, B, A) = (238, 130, 238, 255).
#### Wheat
Gets the system color with (R, G, B, A) = (245, 222, 179, 255).
#### White
Gets the system color with (R, G, B, A) = (255, 255, 255, 255).
#### WhiteSmoke
Gets the system color with (R, G, B, A) = (245, 245, 245, 255).
#### Yellow
Gets the system color with (R, G, B, A) = (255, 255, 0, 255).
#### YellowGreen
Gets the system color with (R, G, B, A) = (154, 205, 50, 255).

