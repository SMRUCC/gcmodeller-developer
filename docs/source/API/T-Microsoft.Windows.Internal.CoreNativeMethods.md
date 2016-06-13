---
title: CoreNativeMethods
---

# CoreNativeMethods
_namespace: [Microsoft.Windows.Internal](N-Microsoft.Windows.Internal.html)_

Wrappers for Native Methods and Structs.
 This type is intended for internal use only

### Methods

#### DestroyIcon
```csharp
Microsoft.Windows.Internal.CoreNativeMethods.DestroyIcon(System.IntPtr)
```
Destroys an icon and frees any memory the icon occupied.

|Parameter Name|Remarks|
|--------------|-------|
|hIcon|Handle to the icon to be destroyed. The icon must not be in use. |

_returns: If the function succeeds, the return value is nonzero. If the function fails, the return value is zero. To get extended error information, call GetLastError. _

#### GetHiWord
```csharp
Microsoft.Windows.Internal.CoreNativeMethods.GetHiWord(System.Int64,System.Int32)
```
Gets the HiWord

|Parameter Name|Remarks|
|--------------|-------|
|value|The value to get the hi word from.|
|size|Size|

_returns: The upper half of the dword._

#### GetLoWord
```csharp
Microsoft.Windows.Internal.CoreNativeMethods.GetLoWord(System.Int64)
```
Gets the LoWord

|Parameter Name|Remarks|
|--------------|-------|
|value|The value to get the low word from.|

_returns: The lower half of the dword._

#### PostMessage
```csharp
Microsoft.Windows.Internal.CoreNativeMethods.PostMessage(System.IntPtr,Microsoft.Windows.Internal.WindowMessage,System.IntPtr,System.IntPtr)
```
Places (posts) a message in the message queue associated with the thread that created
 the specified window and returns without waiting for the thread to process the message.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|Handle to the window whose window procedure will receive the message. 
 If this parameter is HWND_BROADCAST, the message is sent to all top-level windows in the system, 
 including disabled or invisible unowned windows, overlapped windows, and pop-up windows; 
 but the message is not sent to child windows.
 |
|message|Specifies the message to be sent.|
|wparam|Specifies additional message-specific information.|
|lparam|Specifies additional message-specific information.|


#### SendMessage
```csharp
Microsoft.Windows.Internal.CoreNativeMethods.SendMessage(System.IntPtr,System.UInt32,System.Int32@,System.Text.StringBuilder)
```
Sends the specified message to a window or windows. The SendMessage function calls 
 the window procedure for the specified window and does not return until the window 
 procedure has processed the message.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|Handle to the window whose window procedure will receive the message. 
 If this parameter is HWND_BROADCAST, the message is sent to all top-level windows in the system, 
 including disabled or invisible unowned windows, overlapped windows, and pop-up windows; 
 but the message is not sent to child windows.
 |
|message|Specifies the message to be sent.|
|wparam|Specifies additional message-specific information.|
|lparam|Specifies additional message-specific information.|

_returns: A return code specific to the message being sent._




