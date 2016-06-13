---
title: RawInputDeviceFlags
---

# RawInputDeviceFlags
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_





### Properties

#### APPKEYS
Microsoft Windows XP Service Pack 1 (SP1): If set, the application command keys are handled. APPKEYS can be specified only if NOLEGACY is specified for a keyboard device.
#### CAPTUREMOUSE
If set, the mouse button click does not activate the other window.
#### EXCLUDE
If set, this specifies the top level collections to exclude when reading a complete usage page.
 This flag only affects a TLC whose usage page is already specified with RawInputDeviceEnum.PAGEONLY.
#### EXINPUTSINK
If set, this enables the caller to receive input in the background only if the foreground application
 does not process it. In other words, if the foreground application is not registered for raw input,
 then the background application that is registered will receive the input.
#### INPUTSINK
If set, this enables the caller to receive the input even when the caller is not in the foreground.
 Note that Target must be specified in RawInputDevice.
#### NOHOTKEYS
If set, the application-defined keyboard device hotkeys are not handled.
 However, the system hotkeys; for example, ALT+TAB and CTRL+ALT+DEL, are still handled.
 By default, all keyboard hotkeys are handled.
 NOHOTKEYS can be specified even if NOLEGACY is not specified and Target is NULL in RawInputDevice.
#### NOLEGACY
If set, this prevents any devices specified by UsagePage or Usage from generating legacy messages.
 This is only for the mouse and keyboard. See RawInputDevice Remarks.
#### PAGEONLY
If set, this specifies all devices whose top level collection is from the specified UsagePage.
 Note that usUsage must be zero. To exclude a particular top level collection, use EXCLUDE.
#### REMOVE
If set, this removes the top level collection from the inclusion list.
 This tells the operating system to stop reading from a device which matches the top level collection.

