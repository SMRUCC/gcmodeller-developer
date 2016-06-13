---
title: PrintStream
---

# PrintStream
_namespace: [Oracle.Java.IO](N-Oracle.Java.IO.html)_



### Methods

#### #ctor
```csharp
Oracle.Java.IO.PrintStream.#ctor(Oracle.Java.IO.File,System.String)
```
Creates a new print stream, without automatic line flushing, with the specified file and charset. This convenience constructor creates the necessary intermediate OutputStreamWriter, which will encode characters using the provided charset.

|Parameter Name|Remarks|
|--------------|-------|
|File|The file to use as the destination of this print stream. If the file exists, then it will be truncated to zero size; otherwise, a new file will be created. The output will be written to the file and is buffered.|
|csn|The name of a supported charset|


#### append
```csharp
Oracle.Java.IO.PrintStream.append(System.Char)
```
Appends the specified character to this output stream.
 An invocation of this method of the form out.append(c) behaves in exactly the same way as the invocation
 
 out.print(c)

|Parameter Name|Remarks|
|--------------|-------|
|c|The 16-bit character to append|

_returns: This output stream_

#### checkError
```csharp
Oracle.Java.IO.PrintStream.checkError
```
Flushes the stream and checks its error state. The internal error state is set to true when the underlying output stream throws an IOException other than InterruptedIOException, and when the setError method is invoked. If an operation on the underlying output stream throws an InterruptedIOException, then the PrintStream converts the exception back into an interrupt by doing:
 Thread.currentThread().interrupt();
 
 or the equivalent.
_returns: true if and only if this stream has encountered an IOException other than InterruptedIOException, or the setError method has been invoked_

#### clearError
```csharp
Oracle.Java.IO.PrintStream.clearError
```
Clears the internal error state of this stream.
 This method will cause subsequent invocations of checkError() to return false until another write operation fails and invokes setError().

#### close
```csharp
Oracle.Java.IO.PrintStream.close
```
Closes the stream. This is done by flushing the stream and then closing the underlying output stream.

#### flush
```csharp
Oracle.Java.IO.PrintStream.flush
```
Flushes the stream. This is done by writing any buffered output bytes to the underlying output stream and then flushing that stream.

#### format
```csharp
Oracle.Java.IO.PrintStream.format(Oracle.Java.Locale,System.String,System.Object[])
```
Writes a formatted string to this output stream using the specified format string and arguments.

|Parameter Name|Remarks|
|--------------|-------|
|l|The locale to apply during formatting. If l is null then no localization is applied.|
|sformat|A format string as described in Format string syntax|
|args|Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java™ Virtual Machine Specification. The behaviour on a null argument depends on the conversion.|

_returns: This output stream_

#### print
```csharp
Oracle.Java.IO.PrintStream.print(System.Object)
```
Prints an object. The string produced by the String.valueOf(Object) method is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the write(int) method.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object to be printed|


#### printf
```csharp
Oracle.Java.IO.PrintStream.printf(Oracle.Java.Locale,System.String,System.Object[])
```
A convenience method to write a formatted string to this output stream using the specified format string and arguments.
 An invocation of this method of the form out.printf(l, format, args) behaves in exactly the same way as the invocation
 
 out.format(l, Format, args)

|Parameter Name|Remarks|
|--------------|-------|
|l|The locale to apply during formatting. If l is null then no localization is applied.|
|format|A format string as described in Format string syntax|
|args|Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java™ Virtual Machine Specification. The behaviour on a null argument depends on the conversion.|

_returns: This output stream_

#### println
```csharp
Oracle.Java.IO.PrintStream.println(System.Object)
```
Prints an Object and then terminate the line. This method calls at first String.valueOf(x) to get the printed object's string value, then behaves as though it invokes print(String) and then println().

|Parameter Name|Remarks|
|--------------|-------|
|x|The Object to be printed.|


#### setError
```csharp
Oracle.Java.IO.PrintStream.setError
```
Sets the error state of the stream to true.
 This method will cause subsequent invocations of checkError() to return true until clearError() is invoked.

#### write
```csharp
Oracle.Java.IO.PrintStream.write(System.Byte[],System.Int32,System.Int32)
```
Writes len bytes from the specified byte array starting at offset off to this stream. If automatic flushing is enabled then the flush method will be invoked.
 Note that the bytes will be written as given; to write characters that will be translated according to the platform's default character encoding, use the print(char) or println(char) methods.

|Parameter Name|Remarks|
|--------------|-------|
|buf|A byte array|
|off|Offset from which to start taking bytes|
|len|Number of bytes to write|





