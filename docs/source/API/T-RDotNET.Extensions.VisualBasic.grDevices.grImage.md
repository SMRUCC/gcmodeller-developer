---
title: grImage
---

# grImage
_namespace: [RDotNET.Extensions.VisualBasic.grDevices](N-RDotNET.Extensions.VisualBasic.grDevices.html)_

Graphics devices for BMP, JPEG, PNG and TIFF format bitmap files.



### Properties

#### antialias
Length-one character vector.
 For allowed values And their effect on fonts with type = "windows" see windows: For that type if the argument Is missing the default Is taken from windows.options()$bitmap.aa.win.
 For allowed values And their effect (on fonts And lines, but Not fills) with type = "cairo" see svg.
#### filename
the name of the output file, up to 511 characters. The page number is substituted if a C integer format is included in the character string, as in the default, and tilde-expansion is performed (see path.expand). (The result must be less than 600 characters long. See postscript for further details.)
#### pointsize
the default pointsize of plotted text, interpreted as big points (1/72 inch) at res ppi.
#### res
The nominal resolution in ppi which will be recorded in the bitmap file, if a positive integer. Also used for units other than the default. If not specified, taken as 72 ppi to set the size of text and line widths.
#### restoreConsole
See the ‘Details’ section of windows. For type == "windows" only.
#### type
Should be plotting be done using Windows GDI or cairographics?
#### units
The units in which height and width are given. Can be px (pixels, the default), in (inches), cm or mm.

