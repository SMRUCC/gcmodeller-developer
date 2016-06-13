---
title: GZIPInputStream
---

# GZIPInputStream
_namespace: [Oracle.Java.util.zip](N-Oracle.Java.util.zip.html)_



### Methods

#### close
```csharp
Oracle.Java.util.zip.GZIPInputStream.close
```
Closes this input stream and releases any system resources associated with the stream.

#### read
```csharp
Oracle.Java.util.zip.GZIPInputStream.read(System.Byte[],System.Int32,System.Int32)
```
Reads uncompressed data into an array Of bytes. If len Is Not zero, the method will block until some input can be decompressed; otherwise, no bytes are read And 0 Is returned.

|Parameter Name|Remarks|
|--------------|-------|
|buf|the buffer into which the data Is read|
|off|the start offset in the destination array b|
|len|the maximum number of bytes read|

_returns: the actual number Of bytes read, Or -1 If the End Of the compressed input stream Is reached_




