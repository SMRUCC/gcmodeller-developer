---
title: CreateStruct
---

# CreateStruct
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_





### Properties

#### cx
Specifies the width of the new window, in pixels.
#### cy
Specifies the height of the new window, in pixels.
#### dwExStyle
Specifies the extended window style for the new window.
#### hInstance
Handle to the module that owns the new window.
#### hMenu
Handle to the menu to be used by the new window.
#### hwndParent
Handle to the parent window, if the window is a child window.
 If the window is owned, this member identifies the owner window.
 If the window is not a child or owned window, this member is NULL.
#### lpCreateParams
Contains additional data which may be used to create the window.
#### lpszClass
Either a pointer to a null-terminated string or an atom that specifies the class name
 of the new window.
 
 Note Because the lpszClass member can contain a pointer to a local (and thus inaccessable) atom,
 do not obtain the class name by using this member. Use the GetClassName function instead.
#### lpszName
Pointer to a null-terminated string that specifies the name of the new window.
#### style
Specifies the style for the new window.
#### x
Specifies the x-coordinate of the upper left corner of the new window.
 If the new window is a child window, coordinates are relative to the parent window.
 Otherwise, the coordinates are relative to the screen origin.
#### y
Specifies the y-coordinate of the upper left corner of the new window.
 If the new window is a child window, coordinates are relative to the parent window.
 Otherwise, the coordinates are relative to the screen origin.

