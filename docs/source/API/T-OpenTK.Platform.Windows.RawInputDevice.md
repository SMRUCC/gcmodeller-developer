---
title: RawInputDevice
---

# RawInputDevice
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Defines information for the raw input devices.



### Properties

#### Flags
Mode flag that specifies how to interpret the information provided by UsagePage and Usage.
 It can be zero (the default) or one of the following values.
 By default, the operating system sends raw input from devices with the specified top level collection (TLC)
 to the registered application as long as it has the window focus.
#### Target
Handle to the target window. If NULL it follows the keyboard focus.
#### Usage
Top level collection Usage for the raw input device.
#### UsagePage
Top level collection Usage page for the raw input device.

