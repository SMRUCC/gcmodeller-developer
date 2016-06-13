---
title: WindowStyles
---

# WindowStyles
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_





### Properties

#### Border
The window has a thin-line border.
#### Caption
The window has a title bar (includes the WS_BORDER style).
#### Child
The window is a child window. 
 A window with this style cannot have a menu bar. 
 This style cannot be used with the WS_POPUP style.
#### ChildWindow
Same as the WS_CHILD style.
#### ClipChildren
Excludes the area occupied by child windows when drawing occurs within the parent window. 
 This style is used when creating the parent window.
#### ClipSiblings
Clips child windows relative to each other; 
 that is, when a particular child window receives a WM_PAINT message, 
 the WS_CLIPSIBLINGS style clips all other overlapping child windows out of the region of the child window to be updated. 
 If WS_CLIPSIBLINGS is not specified and child windows overlap, it is possible, 
 when drawing within the client area of a child window, to draw within the client area of a neighboring child window.
#### DialogFrame
The window has a border of a style typically used with dialog boxes. 
 A window with this style cannot have a title bar.
#### Disabled
The window is initially disabled. A disabled window cannot receive input from the user. 
 To change this after a window has been created, use the EnableWindow function.
#### Group
The window is the first control of a group of controls. 
 The group consists of this first control and all controls defined after it, up to the next control with the WS_GROUP style. 
 The first control in each group usually has the WS_TABSTOP style so that the user can move from group to group. 
 The user can subsequently change the keyboard focus from one control in the group to the next control 
 in the group by using the direction keys.
 
 You can turn this style on and off to change dialog box navigation. 
 To change this style after a window has been created, use the SetWindowLong function.
#### HorizontalScroll
The window has a horizontal scroll bar.
#### Iconic
The window is initially minimized. 
 Same as the WS_MINIMIZE style.
#### Maximize
The window is initially maximized.
#### MaximizeBox
The window has a maximize button. 
 Cannot be combined with the WS_EX_CONTEXTHELP style. 
 The WS_SYSMENU style must also be specifie
#### Minimize
The window is initially minimized. 
 Same as the WS_ICONIC style.
#### MinimizeBox
The window has a minimize button. 
 Cannot be combined with the WS_EX_CONTEXTHELP style. 
 The WS_SYSMENU style must also be specified.
#### Overlapped
The window is an overlapped window. 
 An overlapped window has a title bar and a border. 
 Same as the WS_TILED style.
#### OverlappedWindowMask
The window is an overlapped window. Same as the WS_TILEDWINDOW style.
#### Popup
The windows is a pop-up window. 
 This style cannot be used with the WS_CHILD style.
#### PopupWindowMask
The window is a pop-up window. 
 The WS_CAPTION and WS_POPUPWINDOW styles must be combined to make the window menu visible.
#### SizeBox
The window has a sizing border. 
 Same as the WS_THICKFRAME style.
#### SystemMenu
The window has a window menu on its title bar. 
 The WS_CAPTION style must also be specified.
#### Tabstop
The window is a control that can receive the keyboard focus when the user presses the TAB key. 
 Pressing the TAB key changes the keyboard focus to the next control with the WS_TABSTOP style.
 
 You can turn this style on and off to change dialog box navigation. 
 To change this style after a window has been created, use the SetWindowLong function. 
 For user-created windows and modeless dialogs to work with tab stops, 
 alter the message loop to call the IsDialogMessage function.
#### ThickFrame
The window has a sizing border. 
 Same as the WS_SIZEBOX style.
#### Tiled
The window is an overlapped window. 
 An overlapped window has a title bar and a border. 
 Same as the WS_OVERLAPPED style.
#### TiledWindowMask
The window is an overlapped window. 
 Same as the WS_OVERLAPPEDWINDOW style.
#### VerticalScroll
The window has a vertical scroll bar.
#### Visible
The window is initially visible.
 
 This style can be turned on and off by using the ShowWindow or SetWindowPos function.

