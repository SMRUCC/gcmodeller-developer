---
title: ShowWindowCommand
---

# ShowWindowCommand
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

ShowWindow() Commands



### Properties

#### FORCEMINIMIZE
Windows 2000/XP: Minimizes a window, even if the thread that owns the window is not responding. This flag should only be used when minimizing windows from a different thread.
#### HIDE
Hides the window and activates another window.
#### MINIMIZE
Minimizes the specified window and activates the next top-level window in the Z order.
#### RESTORE
Activates and displays the window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag when restoring a minimized window.
#### SHOW
Activates the window and displays it in its current size and position.
#### SHOWDEFAULT
Sets the show state based on the SW_ value specified in the STARTUPINFO structure passed to the CreateProcess function by the program that started the application.
#### SHOWMAXIMIZED
Activates the window and displays it as a maximized window.
#### SHOWMINIMIZED
Activates the window and displays it as a minimized window.
#### SHOWMINNOACTIVE
Displays the window as a minimized window. This value is similar to SW_SHOWMINIMIZED, except the window is not activated.
#### SHOWNA
Displays the window in its current size and position. This value is similar to SW_SHOW, except the window is not activated.
#### SHOWNOACTIVATE
Displays the window as a minimized window. This value is similar to SW_SHOWMINIMIZED, except the window is not activated.
#### SHOWNORMAL
Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag when displaying the window for the first time.

