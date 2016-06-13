---
title: GlassForm
---

# GlassForm
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Windows Glass Form
 Inherit from this form to be able to enable glass on Windows Form

### Methods

#### ExcludeControlFromAeroGlass
```csharp
Microsoft.Windows.Shell.GlassForm.ExcludeControlFromAeroGlass(System.Windows.Forms.Control)
```
Excludes a Control from the AeroGlass frame.

|Parameter Name|Remarks|
|--------------|-------|
|control|The control to exclude.|

> Many non-WPF rendered controls (i.e., the ExplorerBrowser control) will not 
>  render properly on top of an AeroGlass frame. 

#### OnLoad
```csharp
Microsoft.Windows.Shell.GlassForm.OnLoad(System.EventArgs)
```
Initializes the Form for AeroGlass

|Parameter Name|Remarks|
|--------------|-------|
|e|The arguments for this event|


#### OnPaint
```csharp
Microsoft.Windows.Shell.GlassForm.OnPaint(System.Windows.Forms.PaintEventArgs)
```
Overide OnPaint to paint the background as black.

|Parameter Name|Remarks|
|--------------|-------|
|e|PaintEventArgs|


#### ResetAeroGlass
```csharp
Microsoft.Windows.Shell.GlassForm.ResetAeroGlass
```
Resets the AeroGlass exclusion area.

#### SetAeroGlassTransparency
```csharp
Microsoft.Windows.Shell.GlassForm.SetAeroGlassTransparency
```
Makes the background of current window transparent

#### WndProc
```csharp
Microsoft.Windows.Shell.GlassForm.WndProc(System.Windows.Forms.Message@)
```
Catches the DWM messages to this window and fires the appropriate event.

|Parameter Name|Remarks|
|--------------|-------|
|m|-|




### Properties

#### AeroGlassCompositionEnabled
Get determines if AeroGlass is enabled on the desktop. Set enables/disables AreoGlass on the desktop.

