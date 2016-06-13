---
title: IParser
---

# IParser
_namespace: [Bio.IO](N-Bio.IO.html)_

Common interface for all parsers.
 Used in Framework abstraction layer and auto registration mechanism.



### Properties

#### Description
Gets the description of the parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### Name
Gets the name of the parser being implemented. 
 This is intended to give the developer name of the parser.
#### SupportedFileTypes
Gets the file extensions that the parser supports.
 If multiple extensions are supported then this property 
 will return a string containing all extensions with a ',' delimited.

