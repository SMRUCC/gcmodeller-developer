---
title: Image
---

# Image
_namespace: [Microsoft.Windows.Shell.PropertySystem.SystemProperties.System](N-Microsoft.Windows.Shell.PropertySystem.SystemProperties.System.html)_

Image Properties



### Properties

#### BitDepth
Name: System.Image.BitDepth -- PKEY_Image_BitDepthDescription: 
Type: UInt32 -- VT_UI4FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 7 (PIDISI_BITDEPTH)
#### ColorSpace
Name: System.Image.ColorSpace -- PKEY_Image_ColorSpaceDescription: PropertyTagExifColorSpace
Type: UInt16 -- VT_UI2FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 40961
#### CompressedBitsPerPixel
Name: System.Image.CompressedBitsPerPixel -- PKEY_Image_CompressedBitsPerPixelDescription: Calculated from PKEY_Image_CompressedBitsPerPixelNumerator and PKEY_Image_CompressedBitsPerPixelDenominator.
Type: Double -- VT_R8FormatID: {364B6FA9-37AB-482A-BE2B-AE02F60D4318}, 100
#### CompressedBitsPerPixelDenominator
Name: System.Image.CompressedBitsPerPixelDenominator -- PKEY_Image_CompressedBitsPerPixelDenominatorDescription: Denominator of PKEY_Image_CompressedBitsPerPixel.
Type: UInt32 -- VT_UI4FormatID: {1F8844E1-24AD-4508-9DFD-5326A415CE02}, 100
#### CompressedBitsPerPixelNumerator
Name: System.Image.CompressedBitsPerPixelNumerator -- PKEY_Image_CompressedBitsPerPixelNumeratorDescription: Numerator of PKEY_Image_CompressedBitsPerPixel.
Type: UInt32 -- VT_UI4FormatID: {D21A7148-D32C-4624-8900-277210F79C0F}, 100
#### Compression
Name: System.Image.Compression -- PKEY_Image_CompressionDescription: Indicates the image compression level. PropertyTagCompression.
Type: UInt16 -- VT_UI2FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 259
#### CompressionText
Name: System.Image.CompressionText -- PKEY_Image_CompressionTextDescription: This is the user-friendly form of System.Image.Compression. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {3F08E66F-2F44-4BB9-A682-AC35D2562322}, 100
#### Dimensions
Name: System.Image.Dimensions -- PKEY_Image_DimensionsDescription: Indicates the dimensions of the image.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 13 (PIDISI_DIMENSIONS)
#### HorizontalResolution
Name: System.Image.HorizontalResolution -- PKEY_Image_HorizontalResolutionDescription: 
Type: Double -- VT_R8FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 5 (PIDISI_RESOLUTIONX)
#### HorizontalSize
Name: System.Image.HorizontalSize -- PKEY_Image_HorizontalSizeDescription: 
Type: UInt32 -- VT_UI4FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 3 (PIDISI_CX)
#### ImageID
Name: System.Image.ImageID -- PKEY_Image_ImageIDDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {10DABE05-32AA-4C29-BF1A-63E2D220587F}, 100
#### ResolutionUnit
Name: System.Image.ResolutionUnit -- PKEY_Image_ResolutionUnitDescription: Type: Int16 -- VT_I2FormatID: {19B51FA6-1F92-4A5C-AB48-7DF0ABD67444}, 100
#### VerticalResolution
Name: System.Image.VerticalResolution -- PKEY_Image_VerticalResolutionDescription: 
Type: Double -- VT_R8FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 6 (PIDISI_RESOLUTIONY)
#### VerticalSize
Name: System.Image.VerticalSize -- PKEY_Image_VerticalSizeDescription: 
Type: UInt32 -- VT_UI4FormatID: (PSGUID_IMAGESUMMARYINFORMATION) {6444048F-4C8B-11D1-8B70-080036B11A03}, 4 (PIDISI_CY)

