---
title: Message
---

# Message
_namespace: [Microsoft.Windows.Shell.Interop](N-Microsoft.Windows.Shell.Interop.html)_

Wraps the native Windows MSG structure.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.Interop.Message.#ctor(System.IntPtr,System.UInt32,System.IntPtr,System.IntPtr,System.Int32,Microsoft.Windows.Shell.NativePoint)
```
Creates a new instance of the Message struct

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|Window handle|
|msg|Message|
|wparam|WParam|
|lparam|LParam|
|time|Time|
|point|Point|


#### Equals
```csharp
Microsoft.Windows.Shell.Interop.Message.Equals(System.Object)
```
Determines if this message is equal to another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Another message|

_returns: True if this message is equal argument; false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.Interop.Message.GetHashCode
```
Gets a hash code for the message.
_returns: Hash code for this message._

#### op_Equality
```csharp
Microsoft.Windows.Shell.Interop.Message.op_Equality(Microsoft.Windows.Shell.Interop.Message,Microsoft.Windows.Shell.Interop.Message)
```
Determines if two messages are equal.

|Parameter Name|Remarks|
|--------------|-------|
|first|First message|
|second|Second message|

_returns: True if first and second message are equal; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.Interop.Message.op_Inequality(Microsoft.Windows.Shell.Interop.Message,Microsoft.Windows.Shell.Interop.Message)
```
Determines if two messages are not equal.

|Parameter Name|Remarks|
|--------------|-------|
|first|First message|
|second|Second message|

_returns: True if first and second message are not equal; false otherwise._



### Properties

#### LParam
Gets the LParam
#### Msg
Gets the window message
#### Point
Gets the point
#### Time
Gets the time
#### WindowHandle
Gets the window handle
#### WParam
Gets the WParam

