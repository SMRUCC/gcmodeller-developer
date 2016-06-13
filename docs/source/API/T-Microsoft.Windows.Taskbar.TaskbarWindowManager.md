---
title: TaskbarWindowManager
---

# TaskbarWindowManager
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_



### Methods

#### DispatchMessage
```csharp
Microsoft.Windows.Taskbar.TaskbarWindowManager.DispatchMessage(System.Windows.Forms.Message@,Microsoft.Windows.Taskbar.TaskbarWindow)
```
Dispatches a window message so that the appropriate events
 can be invoked. This is used for the Taskbar's thumbnail toolbar feature.

|Parameter Name|Remarks|
|--------------|-------|
|m|The window message, typically obtained
 from a Windows Forms or WPF window procedure.|
|taskbarWindow|Taskbar window for which we are intercepting the messages|

_returns: Returns true if this method handles the window message_

#### GrabBitmap
```csharp
Microsoft.Windows.Taskbar.TaskbarWindowManager.GrabBitmap(Microsoft.Windows.Taskbar.TaskbarWindow,System.Drawing.Size)
```
Helper function to capture a bitmap for a given window handle or incase of WPF app,
 an UIElement.

|Parameter Name|Remarks|
|--------------|-------|
|taskbarWindow|The proxy window for which a bitmap needs to be created|
|requestedSize|Size for the requested bitmap image|

_returns: Bitmap captured from the window handle or UIElement. Null if the window is hidden or it's size is zero._




