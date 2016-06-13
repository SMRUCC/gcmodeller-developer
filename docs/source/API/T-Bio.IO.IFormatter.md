---
title: IFormatter
---

# IFormatter
_namespace: [Bio.IO](N-Bio.IO.html)_

Interface that defines the common properties for a formatter.
 All other formatters must extend this Interface.



### Properties

#### Description
Gets the description of the formatter being implemented.
 This is intended to give the developer some 
 information of the formatter.
#### Name
Gets the name of the formatter being implemented.
 This is intended to give the developer name of the formatter.
#### SupportedFileTypes
Gets the file extensions that the formatter will support.
 If multiple extensions are supported then this property 
 will return a string containing all extensions with a ',' delimited.

