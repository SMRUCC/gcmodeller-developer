---
title: StorageStream
---

# StorageStream
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

A wrapper for the native IStream object.

### Methods

#### Dispose
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.Dispose(System.Boolean)
```
Disposes the stream.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|True if called from Dispose(), false if called from finalizer.|


#### Flush
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.Flush
```
Commits data to be written to the stream if it is being cached.

#### Read
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.Read(System.Byte[],System.Int32,System.Int32)
```
Reads a buffer worth of bytes from the stream.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|Buffer to fill|
|offset|Offset to start filling in the buffer|
|count|Number of bytes to read from the stream|


#### ReadByte
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.ReadByte
```
Reads a single byte from the stream, moving the current position ahead by 1.
_returns: A single byte from the stream, -1 if end of stream._

#### Seek
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.Seek(System.Int64,System.IO.SeekOrigin)
```
Seeks within the underlying IStream.

|Parameter Name|Remarks|
|--------------|-------|
|offset|Offset|
|origin|Where to start seeking|


#### SetLength
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.SetLength(System.Int64)
```
Sets the length of the stream

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### Write
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.Write(System.Byte[],System.Int32,System.Int32)
```
Writes a buffer to the stream if able to do so.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|Buffer to write|
|offset|Offset in buffer to start writing|
|count|Number of bytes to write to the stream|


#### WriteByte
```csharp
Microsoft.Windows.ShellExtensions.StorageStream.WriteByte(System.Byte)
```
Writes a single byte to the stream

|Parameter Name|Remarks|
|--------------|-------|
|value|Byte to write to stream|




### Properties

#### CanRead
Gets whether the stream can be read from.
#### CanSeek
Gets whether seeking is supported by the stream.
#### CanWrite
Gets whether the stream can be written to.
 Always false.
#### Length
Gets the length of the IStream
#### Position
Gets or sets the current position within the underlying IStream.

