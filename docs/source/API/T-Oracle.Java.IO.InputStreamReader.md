---
title: InputStreamReader
---

# InputStreamReader
_namespace: [Oracle.Java.IO](N-Oracle.Java.IO.html)_



### Methods

#### #ctor
```csharp
Oracle.Java.IO.InputStreamReader.#ctor(Oracle.Java.IO.InputStream,Oracle.Java.CharsetDecoder)
```
Creates an InputStreamReader that uses the given charset decoder.

|Parameter Name|Remarks|
|--------------|-------|
|in|An InputStream|
|dec|A charset decoder|


#### close
```csharp
Oracle.Java.IO.InputStreamReader.close
```
Closes the stream and releases any system resources associated with it. Once the stream has been closed, further read(), ready(), mark(), reset(), or skip() invocations will throw an IOException. Closing a previously closed stream has no effect.

#### getEncoding
```csharp
Oracle.Java.IO.InputStreamReader.getEncoding
```
Returns the name of the character encoding being used by this stream.
 If the encoding has an historical name then that name is returned; otherwise the encoding's canonical name is returned.
 
 If this instance was created with the InputStreamReader(InputStream, String) constructor then the returned name, being unique for the encoding, may differ from the name passed to the constructor. This method will return null if the stream has been closed.
_returns: The historical name of this encoding, or null if the stream has been closed_

#### read
```csharp
Oracle.Java.IO.InputStreamReader.read(System.Char[],System.Int32,System.Int32)
```
Reads characters into a portion of an array.

|Parameter Name|Remarks|
|--------------|-------|
|cbuf|Destination buffer|
|offset|Offset at which to start storing characters|
|length|Maximum number of characters to read|

_returns: The number of characters read, or -1 if the end of the stream has been reached_

#### ready
```csharp
Oracle.Java.IO.InputStreamReader.ready
```
Tells whether this stream is ready to be read. An InputStreamReader is ready if its input buffer is not empty, or if bytes are available to be read from the underlying byte stream.
_returns: True if the next read() is guaranteed not to block for input, false otherwise. Note that returning false does not guarantee that the next read will block._




