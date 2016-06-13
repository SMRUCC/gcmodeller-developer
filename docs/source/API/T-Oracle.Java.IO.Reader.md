---
title: Reader
---

# Reader
_namespace: [Oracle.Java.IO](N-Oracle.Java.IO.html)_

Abstract class for reading character streams. The only methods that a subclass must implement are 
 read(char[], int, int) and close(). Most subclasses, however, will override some of the methods 
 defined here in order to provide higher efficiency, additional functionality, or both.

### Methods

#### #ctor
```csharp
Oracle.Java.IO.Reader.#ctor(System.Object)
```
Creates a new character-stream reader whose critical sections will synchronize on the given object.

|Parameter Name|Remarks|
|--------------|-------|
|lock|The Object to synchronize on.|


#### close
```csharp
Oracle.Java.IO.Reader.close
```
Closes the stream and releases any system resources associated with it. Once the stream has 
 been closed, further read(), ready(), mark(), reset(), or skip() invocations will throw an 
 IOException. Closing a previously closed stream has no effect.

#### mark
```csharp
Oracle.Java.IO.Reader.mark(System.Int32)
```
Marks the present position in the stream. Subsequent calls to reset() will attempt to reposition 
 the stream to this point. Not all character-input streams support the mark() operation.

|Parameter Name|Remarks|
|--------------|-------|
|readAheadLimit|Limit on the number of characters that may be read while still 
 preserving the mark. After reading this many characters, attempting to reset the stream may fail.|


#### markSupported
```csharp
Oracle.Java.IO.Reader.markSupported
```
Tells whether this stream supports the mark() operation. The default implementation always returns false. 
 Subclasses should override this method.
_returns: true if and only if this stream supports the mark operation._

#### read
```csharp
Oracle.Java.IO.Reader.read(System.Char[],System.Int32,System.Int32)
```
Reads characters into a portion of an array. This method will block until some input is available, 
 an I/O error occurs, or the end of the stream is reached.

|Parameter Name|Remarks|
|--------------|-------|
|cbuf|Destination buffer|
|off|Offset at which to start storing characters|
|len|Maximum number of characters to read|

_returns: The number of characters read, or -1 if the end of the stream has been reached_

#### ready
```csharp
Oracle.Java.IO.Reader.ready
```
Tells whether this stream is ready to be read.
_returns: True if the next read() is guaranteed not to block for input, false otherwise. Note that 
 returning false does not guarantee that the next read will block._

#### reset
```csharp
Oracle.Java.IO.Reader.reset
```
Resets the stream. If the stream has been marked, then attempt to reposition it at the mark. 
 If the stream has not been marked, then attempt to reset it in some way appropriate to the 
 particular stream, for example by repositioning it to its starting point. Not all character-input 
 streams support the reset() operation, and some support reset() without supporting mark().

#### skip
```csharp
Oracle.Java.IO.Reader.skip(System.Int64)
```
Skips characters. This method will block until some characters are available, an I/O error occurs, 
 or the end of the stream is reached.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number of characters to skip|

_returns: The number of characters actually skipped_



### Properties

#### lock
The object used to synchronize operations on this stream. For efficiency, a character-stream object may use an object other than itself to protect critical sections. A subclass should therefore use the object in this field rather than this or a synchronized method.

