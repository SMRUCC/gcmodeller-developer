---
title: Functions
---

# Functions
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_



### Methods

#### AdjustWindowRect
```csharp
OpenTK.Platform.Windows.Functions.AdjustWindowRect(OpenTK.Platform.Windows.Win32Rectangle@,OpenTK.Platform.Windows.WindowStyle,System.Boolean)
```
Calculates the required size of the window rectangle, based on the desired client-rectangle size. The window rectangle can then be passed to the CreateWindow function to create a window whose client area is the desired size.

|Parameter Name|Remarks|
|--------------|-------|
|lpRect|[in, out] Pointer to a RECT structure that contains the coordinates of the top-left and bottom-right corners of the desired client area. When the function returns, the structure contains the coordinates of the top-left and bottom-right corners of the window to accommodate the desired client area.|
|dwStyle|[in] Specifies the window style of the window whose required size is to be calculated. Note that you cannot specify the WS_OVERLAPPED style.|
|bMenu|[in] Specifies whether the window has a menu.|

_returns: 
            If the function succeeds, the return value is nonzero.
            If the function fails, the return value is zero. To get extended error information, call GetLastError.
            _
> 
>             A client rectangle is the smallest rectangle that completely encloses a client area. A window rectangle is the smallest rectangle that completely encloses the window, which includes the client area and the nonclient area. 
>             The AdjustWindowRect function does not add extra space when a menu bar wraps to two or more rows. 
>             The AdjustWindowRect function does not take the WS_VSCROLL or WS_HSCROLL styles into account. To account for the scroll bars, call the GetSystemMetrics function with SM_CXVSCROLL or SM_CYHSCROLL.
>             Found Winuser.h, user32.dll
>             

#### ChangeDisplaySettings
```csharp
OpenTK.Platform.Windows.Functions.ChangeDisplaySettings(OpenTK.Platform.Windows.DeviceMode,OpenTK.Platform.Windows.ChangeDisplaySettingsEnum)
```
The ChangeDisplaySettings function changes the settings of the default display device to the specified graphics mode.

|Parameter Name|Remarks|
|--------------|-------|
|device_mode|[in] Pointer to a DEVMODE structure that describes the new graphics mode. If lpDevMode is NULL, all the values currently in the registry will be used for the display setting. Passing NULL for the lpDevMode parameter and 0 for the dwFlags parameter is the easiest way to return to the default mode after a dynamic mode change.|
|flags|[in] Indicates how the graphics mode should be changed.|

> To change the settings of a specified display device, use the ChangeDisplaySettingsEx function.
>             To ensure that the DEVMODE structure passed to ChangeDisplaySettings is valid and contains only values supported by the display driver, use the DEVMODE returned by the EnumDisplaySettings function.When the display mode is changed dynamically, the WM_DISPLAYCHANGE message is sent to all running applications.

#### ClientToScreen
```csharp
OpenTK.Platform.Windows.Functions.ClientToScreen(System.IntPtr,System.Drawing.Point@)
```
Converts the client-area coordinates of a specified point to screen coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|Handle to the window whose client area will be used for the conversion.|
|point|Pointer to a POINT structure that contains the client coordinates to be converted. The new screen coordinates are copied into this structure if the function succeeds.|

_returns: If the function succeeds, the return value is nonzero. If the function fails, the return value is zero. Windows NT/2000/XP: To get extended error information, call GetLastError._
> The ClientToScreen function replaces the client-area coordinates in the POINT structure with the screen coordinates. The screen coordinates are relative to the upper-left corner of the screen. Note, a screen-coordinate point that is above the window's client area has a negative y-coordinate. Similarly, a screen coordinate to the left of a client area has a negative x-coordinate.All coordinates are device coordinates.

#### CreateIconIndirect
```csharp
OpenTK.Platform.Windows.Functions.CreateIconIndirect(OpenTK.Platform.Windows.IconInfo@)
```
Creates an icon or cursor from an IconInfo structure.

|Parameter Name|Remarks|
|--------------|-------|
|iconInfo|
            A pointer to an IconInfo structure the function uses to create the 
            icon or cursor.
            |

_returns: 
            If the function succeeds, the return value is a handle to the icon
            or cursor that is created.
            
            If the function fails, the return value is null. To get extended 
            error information, call Marshal.GetLastWin32Error.
            _
> 
>             The system copies the bitmaps in the IconInfo structure before 
>             creating the icon or cursor. Because the system may temporarily 
>             select the bitmaps in a device context, the hbmMask and hbmColor 
>             members of the IconInfo structure should not already be selected 
>             into a device context. The application must continue to manage the 
>             original bitmaps and delete them when they are no longer necessary.
>             When you are finished using the icon, destroy it using the 
>             DestroyIcon function.
>             

#### DefRawInputProc
```csharp
OpenTK.Platform.Windows.Functions.DefRawInputProc(OpenTK.Platform.Windows.RawInput[],System.Int32,System.UInt32)
```
calls the default raw input procedure to provide default processing for
 any raw input messages that an application does not process.
 This function ensures that every message is processed.
 DefRawInputProc is called with the same parameters received by the window procedure.

|Parameter Name|Remarks|
|--------------|-------|
|RawInput|Pointer to an array of RawInput structures.|
|Input|Number of RawInput structures pointed to by paRawInput.|
|SizeHeader|Size, in bytes, of the RawInputHeader structure.|

_returns: If successful, the function returns S_OK. Otherwise it returns an error value._

#### DestroyIcon
```csharp
OpenTK.Platform.Windows.Functions.DestroyIcon(System.IntPtr)
```
Destroys an icon and frees any memory the icon occupied.

|Parameter Name|Remarks|
|--------------|-------|
|hIcon|
            A handle to the icon to be destroyed. The icon must not be in use.
            |

_returns: 
            If the function succeeds, the return value is nonzero.
            
            If the function fails, the return value is zero. To get extended 
            error information, call Marshal.GetLastWin32Error.
            _
> 
>             It is only necessary to call DestroyIcon for icons and cursors 
>             created with the following functions: CreateIconFromResourceEx 
>             (if called without the LR_SHARED flag), CreateIconIndirect, and 
>             CopyIcon. Do not use this function to destroy a shared icon. A 
>             shared icon is valid as long as the module from which it was loaded
>             remains in memory. The following functions obtain a shared icon.
>             
>             LoadIcon
>             LoadImage (if you use the LR_SHARED flag)
>             CopyImage (if you use the LR_COPYRETURNORG flag and the hImage parameter is a shared icon)
>             CreateIconFromResource
>             CreateIconFromResourceEx (if you use the LR_SHARED flag)
>             

#### FreeLibrary
```csharp
OpenTK.Platform.Windows.Functions.FreeLibrary(System.IntPtr)
```


|Parameter Name|Remarks|
|--------------|-------|
|handle|-|


#### GetClientRect
```csharp
OpenTK.Platform.Windows.Functions.GetClientRect(System.IntPtr,OpenTK.Platform.Windows.Win32Rectangle@)
```
The GetClientRect function retrieves the coordinates of a window's client area. The client coordinates specify the upper-left and lower-right corners of the client area. Because client coordinates are relative to the upper-left corner of a window's client area, the coordinates of the upper-left corner are (0,0).

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|Handle to the window whose client coordinates are to be retrieved.|
|clientRectangle|Pointer to a RECT structure that receives the client coordinates. The left and top members are zero. The right and bottom members contain the width and height of the window.|

_returns: If the function succeeds, the return value is nonzero.If the function fails, the return value is zero. To get extended error information, call GetLastError._
> In conformance with conventions for the RECT structure, the bottom-right coordinates of the returned rectangle are exclusive. In other words, the pixel at (right, bottom) lies immediately outside the rectangle.

#### GetCursor
```csharp
OpenTK.Platform.Windows.Functions.GetCursor
```
Retrieves a handle to the current cursor.
_returns: 
            The return value is the handle to the current cursor. If there is 
            no cursor, the return value is null.
            _

#### GetCursorPos
```csharp
OpenTK.Platform.Windows.Functions.GetCursorPos(OpenTK.Platform.Windows.POINT@)
```
Retrieves the cursor's position, in screen coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|point|Pointer to a POINT structure that receives the screen coordinates of the cursor.|

_returns: Returns nonzero if successful or zero otherwise. To get extended error information, call GetLastError._
> The cursor position is always specified in screen coordinates and is not affected by the mapping mode of the window that contains the cursor.The calling process must have WINSTA_READATTRIBUTES access to the window station.The input desktop must be the current desktop when you call GetCursorPos. Call OpenInputDesktop to determine whether the current desktop is the input desktop. If it is not, call SetThreadDesktop with the HDESK returned by OpenInputDesktop to switch to that desktop.

#### GetDC
```csharp
OpenTK.Platform.Windows.Functions.GetDC(System.IntPtr)
```


|Parameter Name|Remarks|
|--------------|-------|
|hwnd|-|


#### GetIconInfo
```csharp
OpenTK.Platform.Windows.Functions.GetIconInfo(System.IntPtr,OpenTK.Platform.Windows.IconInfo@)
```
Retrieves information about the specified icon or cursor.

|Parameter Name|Remarks|
|--------------|-------|
|hIcon|A handle to the icon or cursor.|
|pIconInfo|
            A pointer to an IconInfo structure. The function fills in the 
            structure's members.
            |

_returns: 
            If the function succeeds, the return value is nonzero and the 
            function fills in the members of the specified IconInfo structure.
            
            If the function fails, the return value is zero. To get extended 
            error information, call Marshal.GetLastWin32Error.
            _
> 
>             GetIconInfo creates bitmaps for the hbmMask and hbmColor members 
>             of IconInfo. The calling application must manage these bitmaps and
>             delete them when they are no longer necessary.
>             

#### GetMessage
```csharp
OpenTK.Platform.Windows.Functions.GetMessage(OpenTK.Platform.Windows.MSG@,System.IntPtr,System.Int32,System.Int32)
```
Low-level WINAPI function that retrieves the next message in the queue.

|Parameter Name|Remarks|
|--------------|-------|
|msg|The pending message (if any) is stored here.|
|windowHandle|Not used|
|messageFilterMin|Not used|
|messageFilterMax|Not used|

_returns: 
            Nonzero indicates that the function retrieves a message other than WM_QUIT.
            Zero indicates that the function retrieves the WM_QUIT message, or that lpMsg is an invalid pointer.
            1 indicates that an error occurred  for example, the function fails if hWnd is an invalid window handle.
            To get extended error information, call GetLastError.
            _

#### GetMessageTime
```csharp
OpenTK.Platform.Windows.Functions.GetMessageTime
```
Retrieves the message time for the last message retrieved by the 
 GetMessage function. The time is a long integer that specifies the 
 elapsed time, in milliseconds, from the time the system was started 
 to the time the message was created (that is, placed in the thread's
 message queue).
_returns: The return value specifies the message time._

#### GetMouseMovePointsEx
```csharp
OpenTK.Platform.Windows.Functions.GetMouseMovePointsEx(System.UInt32,OpenTK.Platform.Windows.MouseMovePoint*,OpenTK.Platform.Windows.MouseMovePoint*,System.Int32,System.UInt32)
```
Retrieves a history of up to 64 previous coordinates of the mouse or pen.

|Parameter Name|Remarks|
|--------------|-------|
|cbSize|The size, in bytes, of the MouseMovePoint structure.|
|pointsIn|
            A pointer to a MOUSEMOVEPOINT structure containing valid mouse 
            coordinates (in screen coordinates). It may also contain a time 
            stamp.
            |
|pointsBufferOut|
            A pointer to a buffer that will receive the points. It should be at 
            least cbSize * nBufPoints in size.
            |
|nBufPoints|The number of points to be retrieved.|
|resolution|
            The resolution desired. This parameter can GMMP_USE_DISPLAY_POINTS 
            or GMMP_USE_HIGH_RESOLUTION_POINTS.
            |


#### GetQueueStatus
```csharp
OpenTK.Platform.Windows.Functions.GetQueueStatus(OpenTK.Platform.Windows.QueueStatusFlags)
```
Indicates the type of messages found in the calling thread's message queue.

|Parameter Name|Remarks|
|--------------|-------|
|flags|-|

_returns: 
            The high-order word of the return value indicates the types of messages currently in the queue.
            The low-order word indicates the types of messages that have been added to the queue and that are still
            in the queue since the last call to the GetQueueStatus, GetMessage, or PeekMessage function.
            _
> 
>             The presence of a QS_ flag in the return value does not guarantee that
>             a subsequent call to the GetMessage or PeekMessage function will return a message.
>             GetMessage and PeekMessage perform some internal filtering that may cause the message
>             to be processed internally. For this reason, the return value from GetQueueStatus
>             should be considered only a hint as to whether GetMessage or PeekMessage should be called. 
>             
>             The QS_ALLPOSTMESSAGE and QS_POSTMESSAGE flags differ in when they are cleared.
>             QS_POSTMESSAGE is cleared when you call GetMessage or PeekMessage, whether or not you are filtering messages.
>             QS_ALLPOSTMESSAGE is cleared when you call GetMessage or PeekMessage without filtering messages
>             (wMsgFilterMin and wMsgFilterMax are 0). This can be useful when you call PeekMessage multiple times
>             to get messages in different ranges.
>             

#### GetRawInputBuffer
```csharp
OpenTK.Platform.Windows.Functions.GetRawInputBuffer(OpenTK.Platform.Windows.RawInput[],System.UInt32@,System.UInt32)
```
Does a buffered read of the raw input data.

|Parameter Name|Remarks|
|--------------|-------|
|Data|
            Pointer to a buffer of RawInput structures that contain the raw input data.
            If NULL, the minimum required buffer, in bytes, is returned in Size.
            |
|Size|Pointer to a variable that specifies the size, in bytes, of a RawInput structure.|
|SizeHeader|Size, in bytes, of RawInputHeader.|

_returns: 
            If Data is NULL and the function is successful, the return value is zero.
            If Data is not NULL and the function is successful, the return value is the number
            of RawInput structures written to Data.
            If an error occurs, the return value is (UINT)-1. Call GetLastError for the error code.
            _

#### GetRawInputData
```csharp
OpenTK.Platform.Windows.Functions.GetRawInputData(System.IntPtr,OpenTK.Platform.Windows.GetRawInputDataEnum,OpenTK.Platform.Windows.RawInput@,System.Int32@,System.Int32)
```
Gets the raw input from the specified device.

|Parameter Name|Remarks|
|--------------|-------|
|RawInput|Handle to the RawInput structure. This comes from the lParam in WM_INPUT.|
|Command|
            Command flag. This parameter can be one of the following values. 
            RawInputDateEnum.INPUT
            Get the raw data from the RawInput structure.
            RawInputDateEnum.HEADER
            Get the header information from the RawInput structure.
            |
|Data|Pointer to the data that comes from the RawInput structure. This depends on the value of uiCommand. If Data is NULL, the required size of the buffer is returned in Size.|
|Size|Pointer to a variable that specifies the size, in bytes, of the data in Data.|
|SizeHeader|Size, in bytes, of RawInputHeader.|

_returns: If Data is NULL and the function is successful, the return value is 0. If Data is not NULL and the function is successful, the return value is the number of bytes copied into Data.If there is an error, the return value is (UINT)-1._
> 
>             GetRawInputData gets the raw input one RawInput structure at a time. In contrast, GetRawInputBuffer gets an array of RawInput structures.
>             

#### GetRawInputDeviceInfo
```csharp
OpenTK.Platform.Windows.Functions.GetRawInputDeviceInfo(System.IntPtr,OpenTK.Platform.Windows.RawInputDeviceInfoEnum,OpenTK.Platform.Windows.RawInputDeviceInfo,System.UInt32@)
```
Gets information about the raw input device.

|Parameter Name|Remarks|
|--------------|-------|
|Device|
            Handle to the raw input device. This comes from the lParam of the WM_INPUT message,
            from RawInputHeader.Device, or from GetRawInputDeviceList.
            It can also be NULL if an application inserts input data, for example, by using SendInput.
            |
|Command|
            Specifies what data will be returned in pData. It can be one of the following values. 
            RawInputDeviceInfoEnum.PREPARSEDDATA
            Data points to the previously parsed data.
            RawInputDeviceInfoEnum.DEVICENAME
            Data points to a string that contains the device name. 
            For this Command only, the value in Size is the character count (not the byte count).
            RawInputDeviceInfoEnum.DEVICEINFO
            Data points to an RawInputDeviceInfo structure.
            |
|Data|
            ointer to a buffer that contains the information specified by Command.
            If Command is RawInputDeviceInfoEnum.DEVICEINFO, set RawInputDeviceInfo.Size to sizeof(RawInputDeviceInfo)
            before calling GetRawInputDeviceInfo. (This is done automatically in OpenTK)
            |
|Size|
            Pointer to a variable that contains the size, in bytes, of the data in Data.
            |

_returns: If successful, this function returns a non-negative number indicating the number of bytes copied to Data.If Data is not large enough for the data, the function returns -1. If Data is NULL, the function returns a value of zero. In both of these cases, Size is set to the minimum size required for the Data buffer.Call GetLastError to identify any other errors._

#### GetRawInputDeviceList
```csharp
OpenTK.Platform.Windows.Functions.GetRawInputDeviceList(System.IntPtr,System.UInt32@,System.UInt32)
```
Enumerates the raw input devices attached to the system.

|Parameter Name|Remarks|
|--------------|-------|
|RawInputDeviceList|
            ointer to buffer that holds an array of RawInputDeviceList structures
            for the devices attached to the system.
            If NULL, the number of devices are returned in NumDevices.
            |
|NumDevices|
            Pointer to a variable. If RawInputDeviceList is NULL, it specifies the number
            of devices attached to the system. Otherwise, it contains the size, in bytes,
            of the preallocated buffer pointed to by pRawInputDeviceList.
            However, if NumDevices is smaller than needed to contain RawInputDeviceList structures,
            the required buffer size is returned here.
            |
|Size|
            Size of a RawInputDeviceList structure.
            |

_returns: 
            If the function is successful, the return value is the number of devices stored in the buffer
            pointed to by RawInputDeviceList.
            If RawInputDeviceList is NULL, the return value is zero. 
            If NumDevices is smaller than needed to contain all the RawInputDeviceList structures,
            the return value is (UINT) -1 and the required buffer is returned in NumDevices.
            Calling GetLastError returns ERROR_INSUFFICIENT_BUFFER.
            On any other error, the function returns (UINT) -1 and GetLastError returns the error indication.
            _

#### GetRegisteredRawInputDevices
```csharp
OpenTK.Platform.Windows.Functions.GetRegisteredRawInputDevices(OpenTK.Platform.Windows.RawInput[],System.UInt32@,System.UInt32)
```
Gets the information about the raw input devices for the current application.

|Parameter Name|Remarks|
|--------------|-------|
|RawInputDevices|
            Pointer to an array of RawInputDevice structures for the application.
            |
|NumDevices|
            Number of RawInputDevice structures in RawInputDevices.
            |
|cbSize|
            Size, in bytes, of a RawInputDevice structure.
            |

_returns: 
            If successful, the function returns a non-negative number that is
            the number of RawInputDevice structures written to the buffer. 
            
            If the pRawInputDevices buffer is too small or NULL, the function sets
            the last error as ERROR_INSUFFICIENT_BUFFER, returns -1,
            and sets NumDevices to the required number of devices.
            
            If the function fails for any other reason, it returns -1. For more details, call GetLastError.
            _

#### GetWindowRect
```csharp
OpenTK.Platform.Windows.Functions.GetWindowRect(System.IntPtr,OpenTK.Platform.Windows.Win32Rectangle@)
```
The GetWindowRect function retrieves the dimensions of the bounding rectangle of the specified window. The dimensions are given in screen coordinates that are relative to the upper-left corner of the screen.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|Handle to the window whose client coordinates are to be retrieved.|
|windowRectangle| Pointer to a structure that receives the screen coordinates of the upper-left and lower-right corners of the window.|

_returns: If the function succeeds, the return value is nonzero.If the function fails, the return value is zero. To get extended error information, call GetLastError._
> In conformance with conventions for the RECT structure, the bottom-right coordinates of the returned rectangle are exclusive. In other words, the pixel at (right, bottom) lies immediately outside the rectangle.

#### GetWindowText
```csharp
OpenTK.Platform.Windows.Functions.GetWindowText(System.IntPtr,System.Text.StringBuilder,System.Int32)
```
The GetWindowText function copies the text of the specified window's title bar (if it has one) into a buffer. If the specified window is a control, the text of the control is copied. However, GetWindowText cannot retrieve the text of a control in another application.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|[in] Handle to the window or control containing the text.|
|lpString|[out] Pointer to the buffer that will receive the text. If the string is as long or longer than the buffer, the string is truncated and terminated with a NULL character.|
|nMaxCount|[in] Specifies the maximum number of characters to copy to the buffer, including the NULL character. If the text exceeds this limit, it is truncated.|

_returns: 
            If the function succeeds, the return value is the length, in characters, of the copied string, not including the terminating NULL character. If the window has no title bar or text, if the title bar is empty, or if the window or control handle is invalid, the return value is zero. To get extended error information, call GetLastError.
            This function cannot retrieve the text of an edit control in another application._
> If the target window is owned by the current process, GetWindowText causes a WM_GETTEXT message to be sent to the specified window or control. If the target window is owned by another process and has a caption, GetWindowText retrieves the window caption text. If the window does not have a caption, the return value is a null string. This behavior is by design. It allows applications to call GetWindowText without becoming unresponsive if the process that owns the target window is not responding. However, if the target window is not responding and it belongs to the calling application, GetWindowText will cause the calling application to become unresponsive.To retrieve the text of a control in another process, send a WM_GETTEXT message directly instead of calling GetWindowText.Windows 95/98/Me: GetWindowTextW is supported by the Microsoft Layer for Unicode (MSLU). To use this, you must add certain files to your application, as outlined in Microsoft Layer for Unicode on Windows 95/98/Me

#### LoadLibrary
```csharp
OpenTK.Platform.Windows.Functions.LoadLibrary(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|dllName|-|


#### PeekMessage
```csharp
OpenTK.Platform.Windows.Functions.PeekMessage(OpenTK.Platform.Windows.MSG@,System.IntPtr,System.Int32,System.Int32,OpenTK.Platform.Windows.PeekMessageFlags)
```
Low-level WINAPI function that checks the next message in the queue.

|Parameter Name|Remarks|
|--------------|-------|
|msg|The pending message (if any) is stored here.|
|hWnd|Not used|
|messageFilterMin|Not used|
|messageFilterMax|Not used|
|flags|Not used|

_returns: True if there is a message pending._

#### QueryPerformanceCounter
```csharp
OpenTK.Platform.Windows.Functions.QueryPerformanceCounter(System.Int64@)
```


|Parameter Name|Remarks|
|--------------|-------|
|PerformanceCount|-|


#### QueryPerformanceFrequency
```csharp
OpenTK.Platform.Windows.Functions.QueryPerformanceFrequency(System.Int64@)
```


|Parameter Name|Remarks|
|--------------|-------|
|PerformanceFrequency|-|


#### RegisterRawInputDevices
```csharp
OpenTK.Platform.Windows.Functions.RegisterRawInputDevices(OpenTK.Platform.Windows.RawInputDevice[],System.UInt32,System.UInt32)
```
Registers the devices that supply the raw input data.

|Parameter Name|Remarks|
|--------------|-------|
|RawInputDevices|
            Pointer to an array of RawInputDevice structures that represent the devices that supply the raw input.
            |
|NumDevices|
            Number of RawInputDevice structures pointed to by RawInputDevices.
            |
|Size|
            Size, in bytes, of a RAWINPUTDEVICE structure.
            |

_returns: 
            TRUE if the function succeeds; otherwise, FALSE. If the function fails, call GetLastError for more information.
            _

#### ReleaseDC
```csharp
OpenTK.Platform.Windows.Functions.ReleaseDC(System.IntPtr,System.IntPtr)
```


|Parameter Name|Remarks|
|--------------|-------|
|hwnd|-|
|DC|-|


#### ScreenToClient
```csharp
OpenTK.Platform.Windows.Functions.ScreenToClient(System.IntPtr,System.Drawing.Point@)
```
Converts the screen coordinates of a specified point on the screen to client-area coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|Handle to the window whose client area will be used for the conversion.|
|point|Pointer to a POINT structure that specifies the screen coordinates to be converted.|

_returns: If the function succeeds, the return value is nonzero. If the function fails, the return value is zero. Windows NT/2000/XP: To get extended error information, call GetLastError._
> The function uses the window identified by the hWnd parameter and the screen coordinates given in the POINT structure to compute client coordinates. It then replaces the screen coordinates with the client coordinates. The new coordinates are relative to the upper-left corner of the specified window's client area. The ScreenToClient function assumes the specified point is in screen coordinates. All coordinates are in device units.Do not use ScreenToClient when in a mirroring situation, that is, when changing from left-to-right layout to right-to-left layout. Instead, use MapWindowPoints. For more information, see "Window Layout and Mirroring" in Window Features.

#### SetCursor
```csharp
OpenTK.Platform.Windows.Functions.SetCursor(System.IntPtr)
```
Sets the cursor shape.

|Parameter Name|Remarks|
|--------------|-------|
|hCursor|
            A handle to the cursor. The cursor must have been created by the 
            CreateCursor function or loaded by the LoadCursor or LoadImage 
            function. If this parameter is IntPtr.Zero, the cursor is removed 
            from the screen.
            |

_returns: 
            The return value is the handle to the previous cursor, if there was one.
            
            If there was no previous cursor, the return value is null.
            _
> 
>             The cursor is set only if the new cursor is different from the 
>             previous cursor; otherwise, the function returns immediately.
>             
>             The cursor is a shared resource. A window should set the cursor 
>             shape only when the cursor is in its client area or when the window 
>             is capturing mouse input. In systems without a mouse, the window 
>             should restore the previous cursor before the cursor leaves the 
>             client area or before it relinquishes control to another window.
>             
>             If your application must set the cursor while it is in a window, 
>             make sure the class cursor for the specified window's class is set 
>             to NULL. If the class cursor is not NULL, the system restores the 
>             class cursor each time the mouse is moved.
>             
>             The cursor is not shown on the screen if the internal cursor 
>             display count is less than zero. This occurs if the application 
>             uses the ShowCursor function to hide the cursor more times than to 
>             show the cursor.
>             

#### SetPixelFormat
```csharp
OpenTK.Platform.Windows.Functions.SetPixelFormat(System.IntPtr,System.Int32,OpenTK.Platform.Windows.PixelFormatDescriptor@)
```


|Parameter Name|Remarks|
|--------------|-------|
|dc|-|
|format|-|
|pfd|-|


#### SetProcessDPIAware
```csharp
OpenTK.Platform.Windows.Functions.SetProcessDPIAware
```
Sets the current process as dots per inch (dpi) aware.
 Note: SetProcessDPIAware is subject to a possible race condition
 if a DLL caches dpi settings during initialization.
 For this reason, it is recommended that dpi-aware be set through
 the application (.exe) manifest rather than by calling SetProcessDPIAware.
_returns: 
            If the function succeeds, the return value is true.
            Otherwise, the return value is false.
            _
> 
>             DLLs should accept the dpi setting of the host process
>             rather than call SetProcessDPIAware themselves.
>             To be set properly, dpiAware should be specified as part
>             of the application (.exe) manifest.
>             

#### SetWindowText
```csharp
OpenTK.Platform.Windows.Functions.SetWindowText(System.IntPtr,System.String)
```
The SetWindowText function changes the text of the specified window's title bar (if it has one). If the specified window is a control, the text of the control is changed. However, SetWindowText cannot change the text of a control in another application.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|[in] Handle to the window or control whose text is to be changed.|
|lpString|[in] Pointer to a null-terminated string to be used as the new title or control text.|

_returns: If the function succeeds, the return value is nonzero.If the function fails, the return value is zero. To get extended error information, call GetLastError._
> If the target window is owned by the current process, SetWindowText causes a WM_SETTEXT message to be sent to the specified window or control. If the control is a list box control created with the WS_CAPTION style, however, SetWindowText sets the text for the control, not for the list box entries. To set the text of a control in another process, send the WM_SETTEXT message directly instead of calling SetWindowText. The SetWindowText function does not expand tab characters (ASCII code 0x09). Tab characters are displayed as vertical bar (|) characters. Windows 95/98/Me: SetWindowTextW is supported by the Microsoft Layer for Unicode (MSLU). To use this, you must add certain files to your application, as outlined in Microsoft Layer for Unicode on Windows 95/98/Me Systems .

#### ShowWindow
```csharp
OpenTK.Platform.Windows.Functions.ShowWindow(System.IntPtr,OpenTK.Platform.Windows.ShowWindowCommand)
```
The ShowWindow function sets the specified window's show state.

|Parameter Name|Remarks|
|--------------|-------|
|hWnd|[in] Handle to the window.|
|nCmdShow|[in] Specifies how the window is to be shown. This parameter is ignored the first time an application calls ShowWindow, if the program that launched the application provides a STARTUPINFO structure. Otherwise, the first time ShowWindow is called, the value should be the value obtained by the WinMain function in its nCmdShow parameter. In subsequent calls, this parameter can be one of the ShowWindowEnum values.|

_returns: If the window was previously visible, the return value is true. Otherwise false._
> To perform certain special effects when showing or hiding a window, use AnimateWindow.The first time an application calls ShowWindow, it should use the WinMain function's nCmdShow parameter as its nCmdShow parameter. Subsequent calls to ShowWindow must use one of the values in the given list, instead of the one specified by the WinMain function's nCmdShow parameter.As noted in the discussion of the nCmdShow parameter, the nCmdShow value is ignored in the first call to ShowWindow if the program that launched the application specifies startup information in the structure. In this case, ShowWindow uses the information specified in the STARTUPINFO structure to show the window. On subsequent calls, the application must call ShowWindow with nCmdShow set to SW_SHOWDEFAULT to use the startup information provided by the program that launched the application. This behavior is designed for the following situations:Applications create their main window by calling CreateWindow with the WS_VISIBLE flag set.Applications create their main window by calling CreateWindow with the WS_VISIBLE flag cleared, and later call ShowWindow with the SW_SHOW flag set to make it visible.

#### TimeBeginPeriod
```csharp
OpenTK.Platform.Windows.Functions.TimeBeginPeriod(System.Int32)
```
Sets the timing resolution of the GetTime (?) method.

|Parameter Name|Remarks|
|--------------|-------|
|period|Timing resolution in msec (?)|

_returns: (?)_




