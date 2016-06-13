---
title: RawInputHeader
---

# RawInputHeader
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Contains the header information that is part of the raw input data.



### Properties

#### Device
Handle to the device generating the raw input data.
#### Param
Value passed in the wParam parameter of the WM_INPUT message.
#### Size
Size, in bytes, of the entire input packet of data. This includes the RawInput struct plus possible extra input reports in the RAWHID variable length array.
#### Type
Type of raw input.

