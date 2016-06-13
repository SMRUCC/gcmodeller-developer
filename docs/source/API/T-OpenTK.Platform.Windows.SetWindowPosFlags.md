---
title: SetWindowPosFlags
---

# SetWindowPosFlags
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_





### Properties

#### DRAWFRAME
Draws a frame (defined in the window's class description) around the window.
#### FRAMECHANGED
Sends a WM_NCCALCSIZE message to the window, even if the window's size is not being changed.
 If this flag is not specified, WM_NCCALCSIZE is sent only when the window's size is being changed.
#### HIDEWINDOW
Hides the window.
#### NOACTIVATE
Does not activate the window. If this flag is not set,
 the window is activated and moved to the top of either the topmost or non-topmost group
 (depending on the setting of the hwndInsertAfter member).
#### NOCOPYBITS
Discards the entire contents of the client area. If this flag is not specified,
 the valid contents of the client area are saved and copied back into the client area 
 after the window is sized or repositioned.
#### NOMOVE
Retains the current position (ignores the x and y parameters).
#### NOOWNERZORDER
Does not change the owner window's position in the Z order.
#### NOREDRAW
Does not redraw changes. If this flag is set, no repainting of any kind occurs.
 This applies to the client area, the nonclient area (including the title bar and scroll bars),
 and any part of the parent window uncovered as a result of the window being moved.
 When this flag is set, the application must explicitly invalidate or redraw any parts
 of the window and parent window that need redrawing.
#### NOREPOSITION
Same as the NOOWNERZORDER flag.
#### NOSENDCHANGING
Prevents the window from receiving the WM_WINDOWPOSCHANGING message.
#### NOSIZE
Retains the current size (ignores the cx and cy parameters).
#### NOZORDER
Retains the current Z order (ignores the hwndInsertAfter parameter).
#### SHOWWINDOW
Displays the window.

