---
title: pdf
---

# pdf
_namespace: [RDotNET.Extensions.VisualBasic.grDevices](N-RDotNET.Extensions.VisualBasic.grDevices.html)_

pdf starts the graphics device driver for producing PDF graphics.



### Properties

#### colormodel
a character string describing the color model: currently allowed values are "srgb", "gray" (or "grey") and "cmyk". Defaults to "srgb". See section ‘Color models’.
#### compress
logical. Should PDF streams be generated with Flate compression? Defaults to TRUE.
#### encoding
the name of an encoding file. See postscript for details. Defaults to "default".
#### fg
the initial foreground color to be used. Defaults to "black".
#### file
a character string giving the name of the file. If it is of the form "|cmd", the output is piped to the command given by cmd. If it is NULL, then no external file is created (effectively, no drawing occurs), but the device may still be queried (e.g., for size of text).
 For use with onefile = FALSE give a C integer format such as "Rplot%03d.pdf" (the default in that case). (See postscript for further details.)
 Tilde expansion(see path.expand) Is done.
#### fillOddEven
logical controlling the polygon fill mode: see polygon for details. Defaults to FALSE.
#### fonts
a character vector specifying R graphics font family names for additional fonts which will be included in the PDF file. Defaults to NULL.
#### onefile
logical: if true (the default) allow multiple figures in one file. If false, generate a file with name containing the page number for each page. 
 Defaults to TRUE, and forced to true if file is a pipe.
#### pagecentre
logical: should the device region be centred on the page? – is only relevant for paper != "special". Defaults to TRUE.
#### paper
the target paper size. The choices are "a4", "letter", "legal" (or "us") and "executive" (and these can be capitalized), or "a4r" and "USr" for rotated (‘landscape’). 
 The default is "special", which means that the width and height specify the paper size. 
 A further choice is "default"; if this is selected, the papersize is taken from the option "papersize" if that is set and as "a4" if it is unset or empty. 
 Defaults to "special".
#### pointsize
the default point size to be used. Strictly speaking, in bp, that is 1/72 of an inch, but approximately in points. Defaults to 12.
#### title
title string to embed as the /Title field in the file. Defaults to "R Graphics Output".
#### useDingbats
logical. Should small circles be rendered via the Dingbats font? Defaults to TRUE, which produces smaller and better output. 
 Setting this to FALSE can work around font display problems in broken PDF viewers: although this font is one of the 14 guaranteed to be available in all PDF viewers, that guarantee is not always honoured.
#### useKerning
logical. Should kerning corrections be included in setting text and calculating string widths? Defaults to TRUE.
#### version
a string describing the PDF version that will be required to view the output. 
 This is a minimum, and will be increased (with a warning) if necessary. Defaults to "1.4", but see ‘Details’.

