---
title: QueueStatusFlags
---

# QueueStatusFlags
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Queue status flags for GetQueueStatus() and MsgWaitForMultipleObjects()



### Properties

#### ALLEVENTS
An input, WM_TIMER, WM_PAINT, WM_HOTKEY, or posted message is in the queue.
#### ALLINPUT
Any message is in the queue.
#### ALLPOSTMESSAGE
A posted message (other than those listed here) is in the queue.
#### HOTKEY
A WM_HOTKEY message is in the queue.
#### INPUT
An input message is in the queue. This is composed of KEY, MOUSE and RAWINPUT.
 Windows XP and higher only.
#### INPUT_LEGACY
An input message is in the queue. This is composed of QS_KEY and QS_MOUSE.
 Windows 2000 and earlier.
#### KEY
A WM_KEYUP, WM_KEYDOWN, WM_SYSKEYUP, or WM_SYSKEYDOWN message is in the queue.
#### MOUSE
A WM_MOUSEMOVE message or mouse-button message (WM_LBUTTONUP, WM_RBUTTONDOWN, and so on).
#### MOUSEBUTTON
A mouse-button message (WM_LBUTTONUP, WM_RBUTTONDOWN, and so on).
#### MOUSEMOVE
A WM_MOUSEMOVE message is in the queue.
#### PAINT
A WM_PAINT message is in the queue.
#### POSTMESSAGE
A posted message (other than those listed here) is in the queue.
#### RAWINPUT
A raw input message is in the queue. For more information, see Raw Input.
 Windows XP and higher only.
#### SENDMESSAGE
A message sent by another thread or application is in the queue.
#### TIMER
A WM_TIMER message is in the queue.

