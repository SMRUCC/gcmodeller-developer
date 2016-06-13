---
title: Alc
---

# Alc
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Alc = Audio Library Context

### Methods

#### CaptureCloseDevice
```csharp
OpenTK.Audio.OpenAL.Alc.CaptureCloseDevice(System.IntPtr)
```
This function closes the specified capture device.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a capture device.|

_returns: Returns True if the close operation was successful, False on failure._

#### CaptureOpenDevice
```csharp
OpenTK.Audio.OpenAL.Alc.CaptureOpenDevice(System.String,System.Int32,OpenTK.Audio.OpenAL.ALFormat,System.Int32)
```
This function opens a capture device by name.

|Parameter Name|Remarks|
|--------------|-------|
|devicename|a pointer to a device name string.|
|frequency|the frequency that the buffer should be captured at.|
|format|the requested capture buffer format.|
|buffersize|the size of the capture buffer in samples, not bytes.|

_returns: Returns the capture device pointer, or NULL on failure._

#### CaptureSamples
```csharp
OpenTK.Audio.OpenAL.Alc.CaptureSamples(System.IntPtr,System.IntPtr,System.Int32)
```
This function completes a capture operation, and does not block.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a capture device.|
|buffer|a pointer to a buffer, which must be large enough to accommodate the number of samples.|
|samples|the number of samples to be retrieved.|


#### CaptureSamples``1
```csharp
],System.Int32)
```
This function completes a capture operation, and does not block.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a capture device.|
|buffer|a buffer, which must be large enough to accommodate the number of samples.|
|samples|the number of samples to be retrieved.|


#### CaptureStart
```csharp
OpenTK.Audio.OpenAL.Alc.CaptureStart(System.IntPtr)
```
This function begins a capture operation.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a capture device.|

> alcCaptureStart will begin recording to an internal ring buffer of the size specified when opening the capture device. The application can then retrieve the number of samples currently available using the ALC_CAPTURE_SAPMPLES token with alcGetIntegerv. When the application determines that enough samples are available for processing, then it can obtain them with a call to alcCaptureSamples.

#### CaptureStop
```csharp
OpenTK.Audio.OpenAL.Alc.CaptureStop(System.IntPtr)
```
This function stops a capture operation.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a capture device.|


#### CloseDevice
```csharp
OpenTK.Audio.OpenAL.Alc.CloseDevice(System.IntPtr)
```
This function closes a device by name.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to an opened device|

_returns: True will be returned on success or False on failure. Closing a device will fail if the device contains any contexts or buffers._

#### CreateContext
```csharp
OpenTK.Audio.OpenAL.Alc.CreateContext(System.IntPtr,System.Int32[])
```
This function creates a context using a specified device.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to a device|
|attriblist|an array of a set of attributes: ALC_FREQUENCY, ALC_MONO_SOURCES, ALC_REFRESH, ALC_STEREO_SOURCES, ALC_SYNC|

_returns: Returns a pointer to the new context (NULL on failure)._
> The attribute list can be NULL, or a zero terminated list of integer pairs composed of valid ALC attribute tokens and requested values.

#### DestroyContext
```csharp
OpenTK.Audio.OpenAL.Alc.DestroyContext(OpenTK.ContextHandle)
```
This function destroys a context.

|Parameter Name|Remarks|
|--------------|-------|
|context|a pointer to the new context.|


#### GetContextsDevice
```csharp
OpenTK.Audio.OpenAL.Alc.GetContextsDevice(OpenTK.ContextHandle)
```
This function retrieves a context's device pointer.

|Parameter Name|Remarks|
|--------------|-------|
|context|a pointer to a context.|

_returns: Returns a pointer to the specified context's device._

#### GetCurrentContext
```csharp
OpenTK.Audio.OpenAL.Alc.GetCurrentContext
```
This function retrieves the current context.
_returns: Returns a pointer to the current context._

#### GetEnumValue
```csharp
OpenTK.Audio.OpenAL.Alc.GetEnumValue(System.IntPtr,System.String)
```
This function retrieves the enum value for a specified enumeration name.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to be queried.|
|enumname|a null terminated string describing the enum value.|

_returns: Returns the enum value described by the enumName string. This is most often used for querying an enum value for an ALC extension._

#### GetError
```csharp
OpenTK.Audio.OpenAL.Alc.GetError(System.IntPtr)
```
This function retrieves the current context error state.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to retrieve the error state from|

_returns: Errorcode Int32._

#### GetInteger
```csharp
OpenTK.Audio.OpenAL.Alc.GetInteger(System.IntPtr,OpenTK.Audio.OpenAL.AlcGetInteger,System.Int32,System.Int32[])
```
This function returns integers related to the context.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to be queried.|
|param|an attribute to be retrieved: ALC_MAJOR_VERSION, ALC_MINOR_VERSION, ALC_ATTRIBUTES_SIZE, ALC_ALL_ATTRIBUTES|
|size|the size of the destination buffer provided, in number of integers.|
|data|a pointer to the buffer to be returned|


#### GetProcAddress
```csharp
OpenTK.Audio.OpenAL.Alc.GetProcAddress(System.IntPtr,System.String)
```
This function retrieves the address of a specified context extension function.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to be queried for the function.|
|funcname|a null-terminated string describing the function.|

_returns: Returns the address of the function, or NULL if it is not found._

#### GetString
```csharp
OpenTK.Audio.OpenAL.Alc.GetString(System.IntPtr,OpenTK.Audio.OpenAL.AlcGetStringList)
```
This function returns a List of strings related to the context.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to be queried.|
|param|an attribute to be retrieved: ALC_DEVICE_SPECIFIER, ALC_CAPTURE_DEVICE_SPECIFIER, ALC_ALL_DEVICES_SPECIFIER|

_returns: A List of strings containing the names of the Devices._
> 
>             ALC_DEVICE_SPECIFIER will return the name of the specified output device if a pointer is supplied, or will return a list of all available devices if a NULL device pointer is supplied. A list is a pointer to a series of strings separated by NULL characters, with the list terminated by two NULL characters. See Enumeration Extension for more details.
>             ALC_CAPTURE_DEVICE_SPECIFIER will return the name of the specified capture device if a pointer is supplied, or will return a list of all available devices if a NULL device pointer is supplied.
>             ALC_EXTENSIONS returns a list of available context extensions, with each extension separated by a space and the list terminated by a NULL character.
>             

#### IsExtensionPresent
```csharp
OpenTK.Audio.OpenAL.Alc.IsExtensionPresent(System.IntPtr,System.String)
```
This function queries if a specified context extension is available.

|Parameter Name|Remarks|
|--------------|-------|
|device|a pointer to the device to be queried for an extension.|
|extname|a null-terminated string describing the extension.|

_returns: Returns True if the extension is available, False if the extension is not available._

#### MakeContextCurrent
```csharp
OpenTK.Audio.OpenAL.Alc.MakeContextCurrent(OpenTK.ContextHandle)
```
This function makes a specified context the current context.

|Parameter Name|Remarks|
|--------------|-------|
|context|A pointer to the new context.|

_returns: Returns True on success, or False on failure._

#### OpenDevice
```csharp
OpenTK.Audio.OpenAL.Alc.OpenDevice(System.String)
```
This function opens a device by name.

|Parameter Name|Remarks|
|--------------|-------|
|devicename|a null-terminated string describing a device.|

_returns: Returns a pointer to the opened device. The return value will be NULL if there is an error._

#### ProcessContext
```csharp
OpenTK.Audio.OpenAL.Alc.ProcessContext(OpenTK.ContextHandle)
```
This function tells a context to begin processing. When a context is suspended, changes in OpenAL state will be accepted but will not be processed. alcSuspendContext can be used to suspend a context, and then all the OpenAL state changes can be applied at once, followed by a call to alcProcessContext to apply all the state changes immediately. In some cases, this procedure may be more efficient than application of properties in a non-suspended state. In some implementations, process and suspend calls are each a NOP.

|Parameter Name|Remarks|
|--------------|-------|
|context|a pointer to the new context|


#### SuspendContext
```csharp
OpenTK.Audio.OpenAL.Alc.SuspendContext(OpenTK.ContextHandle)
```
This function suspends processing on a specified context. When a context is suspended, changes in OpenAL state will be accepted but will not be processed. A typical use of alcSuspendContext would be to suspend a context, apply all the OpenAL state changes at once, and then call alcProcessContext to apply all the state changes at once. In some cases, this procedure may be more efficient than application of properties in a non-suspended state. In some implementations, process and suspend calls are each a NOP.

|Parameter Name|Remarks|
|--------------|-------|
|context|a pointer to the context to be suspended.|





