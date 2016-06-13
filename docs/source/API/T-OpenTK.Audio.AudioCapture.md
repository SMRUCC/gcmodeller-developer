---
title: AudioCapture
---

# AudioCapture
_namespace: [OpenTK.Audio](N-OpenTK.Audio.html)_

Provides methods to instantiate, use and destroy an audio device for recording.
 Static methods are provided to list available devices known by the driver.

### Methods

#### #ctor
```csharp
OpenTK.Audio.AudioCapture.#ctor(System.String,System.Int32,OpenTK.Audio.OpenAL.ALFormat,System.Int32)
```
Opens a device for audio recording.

|Parameter Name|Remarks|
|--------------|-------|
|deviceName|The device name.|
|frequency|The frequency that the data should be captured at.|
|sampleFormat|The requested capture buffer format.|
|bufferSize|The size of OpenAL's capture internal ring-buffer. This value expects number of samples, not bytes.|


#### CheckErrors
```csharp
OpenTK.Audio.AudioCapture.CheckErrors
```
Checks for ALC error conditions.

#### Dispose
```csharp
OpenTK.Audio.AudioCapture.Dispose
```
Closes the device and disposes the instance.

#### Finalize
```csharp
OpenTK.Audio.AudioCapture.Finalize
```
Finalizes this instance.

#### ReadSamples
```csharp
OpenTK.Audio.AudioCapture.ReadSamples(System.IntPtr,System.Int32)
```
Fills the specified buffer with samples from the internal capture ring-buffer. This method does not block: it is an error to specify a sampleCount larger than AvailableSamples.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|A pointer to a previously initialized and pinned array.|
|sampleCount|The number of samples to be written to the buffer.|


#### ReadSamples``1
```csharp
OpenTK.Audio.AudioCapture.ReadSamples``1(``0[],System.Int32)
```
Fills the specified buffer with samples from the internal capture ring-buffer. This method does not block: it is an error to specify a sampleCount larger than AvailableSamples.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|The buffer to fill.|
|sampleCount|The number of samples to be written to the buffer.|


#### Start
```csharp
OpenTK.Audio.AudioCapture.Start
```
Start recording samples.
 The number of available samples can be obtained through the @"P:OpenTK.Audio.AudioCapture.AvailableSamples" property.
 The data can be queried with any @"M:OpenTK.Audio.AudioCapture.ReadSamples(System.IntPtr,System.Int32)" method.

#### Stop
```csharp
OpenTK.Audio.AudioCapture.Stop
```
Stop recording samples. This will not clear previously recorded samples.



### Properties

#### AvailableDevices
Returns a list of strings containing all known recording devices.
#### AvailableSamples
Returns the number of available samples for capture.
#### CurrentDevice
The name of the device associated with this instance.
#### CurrentError
Returns the ALC error code for this device.
#### DefaultDevice
Returns the name of the device that will be used as recording default.
#### IsRunning
Gets a value indicating whether this instance is currently capturing samples.
#### SampleFormat
Gets the OpenTK.Audio.ALFormat for this instance.
#### SampleFrequency
Gets the sampling rate for this instance.

