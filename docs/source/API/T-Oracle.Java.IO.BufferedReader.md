---
title: BufferedReader
---

# BufferedReader
_namespace: [Oracle.Java.IO](N-Oracle.Java.IO.html)_

Reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.
 The buffer size may be specified, or the default size may be used. The default is large enough for most purposes.
 
 In general, each read request made of a Reader causes a corresponding read request to be made of the underlying character or byte stream. 
 It is therefore advisable to wrap a BufferedReader around any Reader whose read() operations may be costly, such as FileReaders and InputStreamReaders. 
 For example, BufferedReader in
 
 = New BufferedReader(nNew FileReader("foo.in"))
 
 will buffer the input from the specified file. Without buffering, each invocation of read() or readLine() could cause bytes to be read from the file, 
 converted into characters, and then returned, which can be very inefficient.
 Programs that use DataInputStreams for textual input can be localized by replacing each DataInputStream with an appropriate BufferedReader.

### Methods

#### #ctor
```csharp
Oracle.Java.IO.BufferedReader.#ctor(Oracle.Java.IO.Reader)
```
Creates a buffering character-input stream that uses a default-sized input buffer.

|Parameter Name|Remarks|
|--------------|-------|
|in|A Reader|


#### close
```csharp
Oracle.Java.IO.BufferedReader.close
```
Closes the stream and releases any system resources associated with it. Once the stream has been closed, further read(), ready(), mark(), reset(), or skip() invocations will throw an IOException. Closing a previously closed stream has no effect.

#### mark
```csharp
Oracle.Java.IO.BufferedReader.mark(System.Int32)
```
Marks the present position in the stream. Subsequent calls to reset() will attempt to reposition the stream to this point.

|Parameter Name|Remarks|
|--------------|-------|
|readAheadLimit|Limit on the number of characters that may be read while still preserving the mark. An attempt to reset the stream after reading characters up to this limit or beyond may fail. A limit value larger than the size of the input buffer will cause a new buffer to be allocated whose size is no smaller than limit. Therefore large values should be used with care.|


#### markSupported
```csharp
Oracle.Java.IO.BufferedReader.markSupported
```
Tells whether this stream supports the mark() operation, which it does.
_returns: true if and only if this stream supports the mark operation._

#### read
```csharp
Oracle.Java.IO.BufferedReader.read(System.Char[],System.Int32,System.Int32)
```
Reads characters into a portion of an array.
 This method implements the general contract of the corresponding read method of the Reader class. As an additional convenience, it attempts to read as many characters as possible by repeatedly invoking the read method of the underlying stream. This iterated read continues until one of the following conditions becomes true:
 
 The specified number of characters have been read,
 The read method of the underlying stream returns -1, indicating end-of-file, or
 The ready method of the underlying stream returns false, indicating that further input requests would block.
 If the first read on the underlying stream returns -1 to indicate end-of-file then this method returns -1. Otherwise this method returns the number of characters actually read.
 Subclasses of this class are encouraged, but not required, to attempt to read as many characters as possible in the same fashion.
 
 Ordinarily this method takes characters from this stream's character buffer, filling it from the underlying stream as necessary. If, however, the buffer is empty, the mark is not valid, and the requested length is at least as large as the buffer, then this method will read characters directly from the underlying stream into the given array. Thus redundant BufferedReaders will not copy data unnecessarily.

|Parameter Name|Remarks|
|--------------|-------|
|cbuf|Destination buffer|
|off|Offset at which to start storing characters|
|len|Maximum number of characters to read|

_returns: The number of characters read, or -1 if the end of the stream has been reached_

#### readLine
```csharp
Oracle.Java.IO.BufferedReader.readLine
```
Reads a line of text. A line is considered to be terminated by any one of a line feed ('\n'), a carriage return ('\r'), or a carriage 
 return followed immediately by a linefeed.
_returns: A String containing the contents of the line, not including any line-termination characters, or null if the end of the stream 
 has been reached_

#### ready
```csharp
Oracle.Java.IO.BufferedReader.ready
```
Tells whether this stream is ready to be read. A buffered character stream is ready if the buffer is not empty, or if the underlying character stream is ready.
_returns: 
 True if the next read() is guaranteed not to block for input, false otherwise. Note that returning false does not guarantee that the next read will block.
 _

#### reset
```csharp
Oracle.Java.IO.BufferedReader.reset
```
Resets the stream to the most recent mark.

#### skip
```csharp
Oracle.Java.IO.BufferedReader.skip(System.Int64)
```
Skips characters.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number of characters to skip|

_returns: The number of characters actually skipped_



### Properties

#### idx
当前所读取的行指针
#### p
当前所读取的行指针

