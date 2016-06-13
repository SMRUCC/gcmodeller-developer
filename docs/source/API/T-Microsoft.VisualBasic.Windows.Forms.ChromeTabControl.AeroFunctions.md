---
title: AeroFunctions
---

# AeroFunctions
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.html)_

Functions designed to extend the glass of aero into the client.
 Allowing the Chrome look feel more genuine.

### Methods

#### ChromifyWindow
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.AeroFunctions.ChromifyWindow(Microsoft.VisualBasic.Windows.Forms.Form,Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl)
```
Gives a form a transparent tab control strip if the tab control is docked
 as fill.

|Parameter Name|Remarks|
|--------------|-------|
|form|The form to prepare.|


#### IsWindowsAeroEnabled
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.AeroFunctions.IsWindowsAeroEnabled
```
Determines whether or not Aero is enabled on the system.
_returns: True if enabled._

#### MakeWindowGlass
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.AeroFunctions.MakeWindowGlass(System.IntPtr,System.Int32,System.Int32,System.Int32,System.Int32)
```
Makes a form have aero glass extend on it.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|The handle of the form.|
|leftMargin|The left margin.|
|rightMargin|The right margin.|
|topMargin|The top margin.|
|bottomMargin|The bottom margin.|





