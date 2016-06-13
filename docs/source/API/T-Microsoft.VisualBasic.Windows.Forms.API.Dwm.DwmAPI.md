---
title: DwmAPI
---

# DwmAPI
_namespace: [Microsoft.VisualBasic.Windows.Forms.API.Dwm](N-Microsoft.VisualBasic.Windows.Forms.API.Dwm.html)_

Metro UI (Zune like) Interface (form)
 lipinho, 27 Dec 2010 CPOL

 The future of Windows Interfaces is probably the Zune-like ones, with a borderless form and some controls inside of it.
 The problem is: if you're using WindowsForm, creating that borderless form with shadows and resizing stuff isn't as easy as it seems.
 This article will show you how to create those forms using a bit of DWM and some other Windows APIs.

 (http://www.codeproject.com/Articles/138661/Metro-UI-Zune-like-Interface-form)

### Methods

#### SetWindowThemeAttribute
```csharp
Microsoft.VisualBasic.Windows.Forms.API.Dwm.DwmAPI.SetWindowThemeAttribute(System.IntPtr,Microsoft.VisualBasic.Windows.Forms.API.Dwm.WindowThemeAttributeType,Microsoft.VisualBasic.Windows.Forms.API.Dwm.WTA_OPTIONS@,System.UInt32)
```
Set The Window's Theme Attributes

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|The Handle to the Window|
|wtype|What Type of Attributes|
|attributes|The Attributes to Add/Remove|
|size|The Size of the Attributes Struct|

_returns: If The Call Was Successful or Not_



### Properties

#### WTNCA_NODRAWCAPTION
Do Not Draw The Caption (Text)
#### WTNCA_NODRAWICON
Do Not Draw the Icon
#### WTNCA_NOMIRRORHELP
Do Not Mirror the Question mark Symbol
#### WTNCA_NOSYSMENU
Do Not Show the System Menu

