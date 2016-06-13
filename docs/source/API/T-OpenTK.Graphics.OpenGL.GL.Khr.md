---
title: Khr
---

# Khr
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### DebugMessageCallback
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.DebugMessageCallback(OpenTK.Graphics.OpenGL.DebugProcKhr,System.IntPtr)
```
[requires: KHR_debug]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageCallback``1
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.DebugMessageCallback``1(OpenTK.Graphics.OpenGL.DebugProcKhr,``0@)
```
[requires: KHR_debug]
 Specify a callback to receive debugging messages from the GL

|Parameter Name|Remarks|
|--------------|-------|
|callback| 
            The address of a callback function that will be called when a debug message is generated.
            |
|userParam| 
            A user supplied pointer that will be passed on each invocation of callback.
            |


#### DebugMessageControl
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.DebugMessageControl(OpenTK.Graphics.OpenGL.KhrDebug,OpenTK.Graphics.OpenGL.KhrDebug,OpenTK.Graphics.OpenGL.KhrDebug,System.Int32,System.UInt32*,System.Boolean)
```
[requires: KHR_debug]
 Control the reporting of debug messages in a debug context

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of debug messages to enable or disable.
            |
|type| 
            The type of debug messages to enable or disable.
            |
|severity| 
            The severity of debug messages to enable or disable.
            |
|count| 
            The length of the array ids.
            |
|ids| 
            The address of an array of unsigned integers contianing the ids of the messages to enable or disable.
            |
|enabled| 
            A Boolean flag determining whether the selected messages should be enabled or disabled.
            |


#### DebugMessageInsert
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.DebugMessageInsert(OpenTK.Graphics.OpenGL.KhrDebug,OpenTK.Graphics.OpenGL.KhrDebug,System.UInt32,OpenTK.Graphics.OpenGL.KhrDebug,System.Int32,System.String)
```
[requires: KHR_debug]
 Inject an application-supplied message into the debug message queue

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of the debug message to insert.
            |
|type| 
            The type of the debug message insert.
            |
|id| 
            The user-supplied identifier of the message to insert.
            |
|severity| 
            The severity of the debug messages to insert.
            |
|length| 
            The length string contained in the character array whose address is given by message.
            |
|buf| 
            The address of a character array containing the message to insert.
            |


#### GetDebugMessageLog
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetDebugMessageLog(System.UInt32,System.Int32,OpenTK.Graphics.OpenGL.KhrDebug*,OpenTK.Graphics.OpenGL.KhrDebug*,System.UInt32*,OpenTK.Graphics.OpenGL.KhrDebug*,System.Int32*,System.Text.StringBuilder)
```
[requires: KHR_debug]
 Retrieve messages from the debug message log

|Parameter Name|Remarks|
|--------------|-------|
|count| 
            The number of debug messages to retrieve from the log.
            |
|bufSize| 
            The size of the buffer whose address is given by messageLog.
            |
|sources|[length: count] 
            The address of an array of variables to receive the sources of the retrieved messages.
            |
|types|[length: count] 
            The address of an array of variables to receive the types of the retrieved messages.
            |
|ids|[length: count] 
            The address of an array of unsigned integers to receive the ids of the retrieved messages.
            |
|severities|[length: count] 
            The address of an array of variables to receive the severites of the retrieved messages.
            |
|lengths|[length: count] 
            The address of an array of variables to receive the lengths of the received messages.
            |
|messageLog|[length: bufSize] 
            The address of an array of characters that will receive the messages.
            |


#### GetObjectLabel
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetObjectLabel(OpenTK.Graphics.OpenGL.KhrDebug,System.UInt32,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: KHR_debug]
 Retrieve the label of a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|identifier| 
            The namespace from which the name of the object is allocated.
            |
|name| 
            The name of the object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length| 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetObjectPtrLabel
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetObjectPtrLabel(System.IntPtr,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: KHR_debug]
 Retrieve the label of a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            The name of the sync object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length|[length: 1] 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetObjectPtrLabel``1
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetObjectPtrLabel``1(``0@,System.Int32,System.Int32*,System.Text.StringBuilder)
```
[requires: KHR_debug]
 Retrieve the label of a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            The name of the sync object whose label to retrieve.
            |
|bufSize| 
            The length of the buffer whose address is in label.
            |
|length|[length: 1] 
            The address of a variable to receive the length of the object label.
            |
|label|[length: bufSize] 
            The address of a string that will receive the object label.
            |


#### GetPointer
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetPointer(OpenTK.Graphics.OpenGL.KhrDebug,System.IntPtr)
```
[requires: KHR_debug]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|-|


#### GetPointer``1
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.GetPointer``1(OpenTK.Graphics.OpenGL.KhrDebug,``0@)
```
[requires: KHR_debug]

|Parameter Name|Remarks|
|--------------|-------|
|pname|-|
|@params|-|


#### ObjectLabel
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.ObjectLabel(OpenTK.Graphics.OpenGL.KhrDebug,System.UInt32,System.Int32,System.String)
```
[requires: KHR_debug]
 Label a named object identified within a namespace

|Parameter Name|Remarks|
|--------------|-------|
|identifier| 
            The namespace from which the name of the object is allocated.
            |
|name| 
            The name of the object to label.
            |
|length| 
            The length of the label to be used for the object.
            |
|label| 
            The address of a string containing the label to assign to the object.
            |


#### ObjectPtrLabel
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.ObjectPtrLabel(System.IntPtr,System.Int32,System.String)
```
[requires: KHR_debug]
 Label a a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            A pointer identifying a sync object.
            |
|length| 
            The length of the label to be used for the object.
            |
|label| 
            The address of a string containing the label to assign to the object.
            |


#### ObjectPtrLabel``1
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.ObjectPtrLabel``1(``0@,System.Int32,System.String)
```
[requires: KHR_debug]
 Label a a sync object identified by a pointer

|Parameter Name|Remarks|
|--------------|-------|
|ptr| 
            A pointer identifying a sync object.
            |
|length| 
            The length of the label to be used for the object.
            |
|label| 
            The address of a string containing the label to assign to the object.
            |


#### PopDebugGroup
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.PopDebugGroup
```
[requires: KHR_debug]
 Pop the active debug group

#### PushDebugGroup
```csharp
OpenTK.Graphics.OpenGL.GL.Khr.PushDebugGroup(OpenTK.Graphics.OpenGL.KhrDebug,System.UInt32,System.Int32,System.String)
```
[requires: KHR_debug]
 Push a named debug group into the command stream

|Parameter Name|Remarks|
|--------------|-------|
|source| 
            The source of the debug message.
            |
|id| 
            The identifier of the message.
            |
|length| 
            The length of the message to be sent to the debug output stream.
            |
|message| 
            The a string containing the message to be sent to the debug output stream.
            |





