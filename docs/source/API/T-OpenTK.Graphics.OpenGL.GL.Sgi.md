---
title: Sgi
---

# Sgi
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### ColorTable
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.ColorTable(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: SGI_color_table]
 Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalformat| 
            The internal format of the color table. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, and Rgba16.
            |
|width| 
            The number of entries in the color lookup table specified by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|table|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the color table.
            |


#### ColorTable``1
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.ColorTable``1(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: SGI_color_table]
 Define a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be one of ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|internalformat| 
            The internal format of the color table. The allowable values are Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, and Rgba16.
            |
|width| 
            The number of entries in the color lookup table specified by data.
            |
|format| 
            The format of the pixel data in data. The allowable values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in data. The allowable values are UnsignedByte, Byte, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev.
            |
|table|[length: format,type,width] 
            Pointer to a one-dimensional array of pixel data that is processed to build the color table.
            |


#### ColorTableParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.ColorTableParameter(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.SgiColorTable,System.Int32*)
```
[requires: SGI_color_table]
 Set color lookup table parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target color table. Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|pname| 
            The symbolic name of a texture color lookup table parameter. Must be one of ColorTableScale or ColorTableBias.
            |
|@params|[length: pname] 
            A pointer to an array where the values of the parameters are stored.
            |


#### CopyColorTable
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.CopyColorTable(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.PixelInternalFormat,System.Int32,System.Int32,System.Int32)
```
[requires: SGI_color_table]
 Copy pixels into a color table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The color table target. Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|internalformat| 
            The internal storage format of the texture image. Must be one of the following symbolic constants: Alpha, Alpha4, Alpha8, Alpha12, Alpha16, Luminance, Luminance4, Luminance8, Luminance12, Luminance16, LuminanceAlpha, Luminance4Alpha4, Luminance6Alpha2, Luminance8Alpha8, Luminance12Alpha4, Luminance12Alpha12, Luminance16Alpha16, Intensity, Intensity4, Intensity8, Intensity12, Intensity16, R3G3B2, Rgb, Rgb4, Rgb5, Rgb8, Rgb10, Rgb12, Rgb16, Rgba, Rgba2, Rgba4, Rgb5A1, Rgba8, Rgb10A2, Rgba12, or Rgba16.
            |
|x| 
            The x coordinate of the lower-left corner of the pixel rectangle to be transferred to the color table.
            |
|y| 
            The y coordinate of the lower-left corner of the pixel rectangle to be transferred to the color table.
            |
|width| 
            The width of the pixel rectangle.
            |


#### GetColorTable
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.GetColorTable(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,System.IntPtr)
```
[requires: SGI_color_table]
 Retrieve contents of a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|format| 
            The format of the pixel data in table. The possible values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in table. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|table|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTable``1
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.GetColorTable``1(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.PixelFormat,OpenTK.Graphics.OpenGL.PixelType,``0@)
```
[requires: SGI_color_table]
 Retrieve contents of a color lookup table

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            Must be ColorTable, PostConvolutionColorTable, or PostColorMatrixColorTable.
            |
|format| 
            The format of the pixel data in table. The possible values are Red, Green, Blue, Alpha, Luminance, LuminanceAlpha, Rgb, Bgr, Rgba, and Bgra.
            |
|type| 
            The type of the pixel data in table. Symbolic constants UnsignedByte, Byte, Bitmap, UnsignedShort, Short, UnsignedInt, Int, Float, UnsignedByte332, UnsignedByte233Rev, UnsignedShort565, UnsignedShort565Rev, UnsignedShort4444, UnsignedShort4444Rev, UnsignedShort5551, UnsignedShort1555Rev, UnsignedInt8888, UnsignedInt8888Rev, UnsignedInt1010102, and UnsignedInt2101010Rev are accepted.
            |
|table|[length: target,format,type] 
            Pointer to a one-dimensional array of pixel data containing the contents of the color table.
            |


#### GetColorTableParameter
```csharp
OpenTK.Graphics.OpenGL.GL.Sgi.GetColorTableParameter(OpenTK.Graphics.OpenGL.SgiColorTable,OpenTK.Graphics.OpenGL.SgiColorTable,System.Int32*)
```
[requires: SGI_color_table]
 Get color lookup table parameters

|Parameter Name|Remarks|
|--------------|-------|
|target| 
            The target color table. Must be ColorTable, PostConvolutionColorTable, PostColorMatrixColorTable, ProxyColorTable, ProxyPostConvolutionColorTable, or ProxyPostColorMatrixColorTable.
            |
|pname| 
            The symbolic name of a color lookup table parameter. Must be one of ColorTableBias, ColorTableScale, ColorTableFormat, ColorTableWidth, ColorTableRedSize, ColorTableGreenSize, ColorTableBlueSize, ColorTableAlphaSize, ColorTableLuminanceSize, or ColorTableIntensitySize.
            |
|@params|[length: pname] 
            A pointer to an array where the values of the parameter will be stored.
            |





