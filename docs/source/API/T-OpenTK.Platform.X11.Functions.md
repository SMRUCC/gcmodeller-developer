---
title: Functions
---

# Functions
_namespace: [OpenTK.Platform.X11](N-OpenTK.Platform.X11.html)_



### Methods

#### XCreateWindow
```csharp
OpenTK.Platform.X11.Functions.XCreateWindow(System.IntPtr,System.IntPtr,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,OpenTK.Platform.X11.CreateWindowArgs,System.IntPtr,OpenTK.Platform.X11.SetWindowValuemask,System.Nullable{OpenTK.Platform.X11.XSetWindowAttributes})
```
The XCreateWindow function creates an unmapped subwindow for a specified parent window, returns the window ID of the created window, and causes the X server to generate a CreateNotify event. The created window is placed on top in the stacking order with respect to siblings.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|parent|Specifies the parent window.|
|x|Specify the x coordinates, which are the top-left outside corner of the window's borders and are relative to the inside of the parent window's borders.|
|y|Specify the y coordinates, which are the top-left outside corner of the window's borders and are relative to the inside of the parent window's borders.|
|width|Specify the width, which is the created window's inside dimensions and do not include the created window's borders.|
|height|Specify the height, which is the created window's inside dimensions and do not include the created window's borders.|
|border_width|Specifies the width of the created window's border in pixels.|
|depth|Specifies the window's depth. A depth of CopyFromParent means the depth is taken from the parent.|
|class|Specifies the created window's class. You can pass InputOutput, InputOnly, or CopyFromParent. A class of CopyFromParent means the class is taken from the parent.|
|visual|Specifies the visual type. A visual of CopyFromParent means the visual type is taken from the parent.|
|valuemask|Specifies which window attributes are defined in the attributes argument. This mask is the bitwise inclusive OR of the valid attribute mask bits. If valuemask is zero, the attributes are ignored and are not referenced.|
|attributes|Specifies the structure from which the values (as specified by the value mask) are to be taken. The value mask should have the appropriate bits set to indicate which attributes have been set in the structure.|

_returns: The window ID of the created window._
> 
>             The coordinate system has the X axis horizontal and the Y axis vertical with the origin [0, 0] at the upper-left corner. Coordinates are integral, in terms of pixels, and coincide with pixel centers. Each window and pixmap has its own coordinate system. For a window, the origin is inside the border at the inside, upper-left corner. 
>             The border_width for an InputOnly window must be zero, or a BadMatch error results. For class InputOutput, the visual type and depth must be a combination supported for the screen, or a BadMatch error results. The depth need not be the same as the parent, but the parent must not be a window of class InputOnly, or a BadMatch error results. For an InputOnly window, the depth must be zero, and the visual must be one supported by the screen. If either condition is not met, a BadMatch error results. The parent window, however, may have any depth and class. If you specify any invalid window attribute for a window, a BadMatch error results. The created window is not yet displayed (mapped) on the user's display. To display the window, call XMapWindow(). The new window initially uses the same cursor as its parent. A new cursor can be defined for the new window by calling XDefineCursor(). The window will not be visible on the screen unless it and all of its ancestors are mapped and it is not obscured by any of its ancestors. XCreateWindow can generate BadAlloc BadColor, BadCursor, BadMatch, BadPixmap, BadValue, and BadWindow errors. The XCreateSimpleWindow function creates an unmapped InputOutput subwindow for a specified parent window, returns the window ID of the created window, and causes the X server to generate a CreateNotify event. The created window is placed on top in the stacking order with respect to siblings. Any part of the window that extends outside its parent window is clipped. The border_width for an InputOnly window must be zero, or a BadMatch error results. XCreateSimpleWindow inherits its depth, class, and visual from its parent. All other window attributes, except background and border, have their default values. XCreateSimpleWindow can generate BadAlloc, BadMatch, BadValue, and BadWindow errors.

#### XMaskEvent
```csharp
OpenTK.Platform.X11.Functions.XMaskEvent(System.IntPtr,OpenTK.Platform.X11.EventMask,OpenTK.Platform.X11.XEvent@)
```
The XMaskEvent() function searches the event queue for the events associated with the specified mask. When it finds a match, XMaskEvent() removes that event and copies it into the specified XEvent structure. The other events stored in the queue are not discarded. If the event you requested is not in the queue, XMaskEvent() flushes the output buffer and blocks until one is received.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|event_mask|Specifies the event mask.|
|e|Returns the matched event's associated structure.|


#### XPutBackEvent
```csharp
OpenTK.Platform.X11.Functions.XPutBackEvent(System.IntPtr,OpenTK.Platform.X11.XEvent@)
```
The XPutBackEvent() function pushes an event back onto the head of the display's event queue by copying the event into the queue. This can be useful if you read an event and then decide that you would rather deal with it later. There is no limit to the number of times in succession that you can call XPutBackEvent().

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|event|Specifies the event.|


#### XQueryKeymap
```csharp
OpenTK.Platform.X11.Functions.XQueryKeymap(System.IntPtr,System.Byte[])
```
The XQueryKeymap() function returns a bit vector for the logical state of the keyboard, where each bit set to 1 indicates that the corresponding key is currently pressed down. The vector is represented as 32 bytes. Byte N (from 0) contains the bits for keys 8N to 8N + 7 with the least-significant bit in the byte representing key 8N.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|keys|Returns an array of bytes that identifies which keys are pressed down. Each bit represents one key of the keyboard.|

> Note that the logical state of a device (as seen by client applications) may lag the physical state if device event processing is frozen.




