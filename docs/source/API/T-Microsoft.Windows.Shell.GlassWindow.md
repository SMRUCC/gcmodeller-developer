---
title: GlassWindow
---

# GlassWindow
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

WPF Glass Window
 Inherit from this window class to enable glass on a WPF window

### Methods

#### ExcludeElementFromAeroGlass
```csharp
Microsoft.Windows.Shell.GlassWindow.ExcludeElementFromAeroGlass(System.Windows.FrameworkElement)
```
Excludes a UI element from the AeroGlass frame.

|Parameter Name|Remarks|
|--------------|-------|
|element|The element to exclude.|

> Many non-WPF rendered controls (i.e., the ExplorerBrowser control) will not 
>  render properly on top of an AeroGlass frame. 

#### OnSourceInitialized
```csharp
Microsoft.Windows.Shell.GlassWindow.OnSourceInitialized(System.EventArgs)
```
OnSourceInitialized
 Override SourceInitialized to initialize windowHandle for this window.
 A valid windowHandle is available only after the sourceInitialized is completed

|Parameter Name|Remarks|
|--------------|-------|
|e|EventArgs|


#### ResetAeroGlass
```csharp
Microsoft.Windows.Shell.GlassWindow.ResetAeroGlass
```
Resets the AeroGlass exclusion area.

#### SetAeroGlassTransparency
```csharp
Microsoft.Windows.Shell.GlassWindow.SetAeroGlassTransparency
```
Makes the background of current window transparent from both Wpf and Windows Perspective



### Properties

#### AeroGlassCompositionEnabled
Get determines if AeroGlass is enabled on the desktop. Set enables/disables AreoGlass on the desktop.

