---
title: API
---

# API
_namespace: [OpenTK.Platform.X11](N-OpenTK.Platform.X11.html)_



### Methods

#### CheckIfEvent
```csharp
OpenTK.Platform.X11.API.CheckIfEvent(System.IntPtr,OpenTK.Platform.X11.XEvent@,OpenTK.Platform.X11.API.CheckEventPredicate,System.IntPtr)
```
When the predicate procedure finds a match, XCheckIfEvent() copies the matched event into the client-supplied XEvent structure and returns True. (This event is removed from the queue.) If the predicate procedure finds no match, XCheckIfEvent() returns False, and the output buffer will have been flushed. All earlier events stored in the queue are not discarded.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|event_return|Returns a copy of the matched event's associated structure.|
|predicate|Specifies the procedure that is to be called to determine if the next event in the queue matches what you want|
|arg|Specifies the user-supplied argument that will be passed to the predicate procedure.|

_returns: true if the predicate returns true for some event, false otherwise_

#### DisplayKeycodes
```csharp
OpenTK.Platform.X11.API.DisplayKeycodes(System.IntPtr,System.Int32@,System.Int32@)
```
The XDisplayKeycodes() function returns the min-keycodes and max-keycodes supported by the specified display.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|min_keycodes_return|Returns the minimum number of KeyCodes|
|max_keycodes_return|Returns the maximum number of KeyCodes.|

>  The minimum number of KeyCodes returned is never less than 8, and the maximum number of KeyCodes returned is never greater than 255. Not all KeyCodes in this range are required to have corresponding keys.

#### Free
```csharp
OpenTK.Platform.X11.API.Free(System.IntPtr)
```
Frees the memory used by an X structure. Only use on unmanaged structures!

|Parameter Name|Remarks|
|--------------|-------|
|buffer|A pointer to the structure that will be freed.|


#### GetKeyboardMapping
```csharp
OpenTK.Platform.X11.API.GetKeyboardMapping(System.IntPtr,System.Byte,System.Int32,System.Int32@)
```
The XGetKeyboardMapping() function returns the symbols for the specified number of KeyCodes starting with first_keycode.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|first_keycode|Specifies the first KeyCode that is to be returned.|
|keycode_count|Specifies the number of KeyCodes that are to be returned|
|keysyms_per_keycode_return|Returns the number of KeySyms per KeyCode.|

> The value specified in first_keycode must be greater than or equal to min_keycode as returned by XDisplayKeycodes(), or a BadValue error results. In addition, the following expression must be less than or equal to max_keycode as returned by XDisplayKeycodes(): first_keycode + keycode_count - 1 If this is not the case, a BadValue error results. The number of elements in the KeySyms list is: keycode_count * keysyms_per_keycode_return KeySym number N, counting from zero, for KeyCode K has the following index in the list, counting from zero:  (K - first_code) * keysyms_per_code_return + N The X server arbitrarily chooses the keysyms_per_keycode_return value to be large enough to report all requested symbols. A special KeySym value of NoSymbol is used to fill in unused elements for individual KeyCodes. To free the storage returned by XGetKeyboardMapping(), use XFree(). XGetKeyboardMapping() can generate a BadValue error.Diagnostics:BadValue:    Some numeric value falls outside the range of values accepted by the request. Unless a specific range is specified for an argument, the full range defined by the argument's type is accepted. Any argument defined as a set of alternatives can generate this error.

#### SelectInput
```csharp
OpenTK.Platform.X11.API.SelectInput(System.IntPtr,System.IntPtr,OpenTK.Platform.X11.EventMask)
```
The XSelectInput() function requests that the X server report the events associated
 with the specified event mask.

|Parameter Name|Remarks|
|--------------|-------|
|display|Specifies the connection to the X server.|
|w|Specifies the window whose events you are interested in.|
|event_mask|Specifies the event mask.|

> 
>             Initially, X will not report any of these events.
>             Events are reported relative to a window.
>             If a window is not interested in a device event,
>             it usually propagates to the closest ancestor that is interested,
>             unless the do_not_propagate mask prohibits it.
>             Setting the event-mask attribute of a window overrides any previous call for the same window but not for other clients. Multiple clients can select for the same events on the same window with the following restrictions: 
>             Multiple clients can select events on the same window because their event masks are disjoint. When the X server generates an event, it reports it to all interested clients. Only one client at a time can select CirculateRequest, ConfigureRequest, or MapRequest events, which are associated with the event mask SubstructureRedirectMask. Only one client at a time can select a ResizeRequest event, which is associated with the event mask ResizeRedirectMask. Only one client at a time can select a ButtonPress event, which is associated with the event mask ButtonPressMask. The server reports the event to all interested clients. XSelectInput() can generate a BadWindow error.




