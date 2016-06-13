---
title: AudioContext
---

# AudioContext
_namespace: [OpenTK.Audio](N-OpenTK.Audio.html)_

Provides methods to instantiate, use and destroy an audio context for playback.
 Static methods are provided to list available devices known by the driver.

### Methods

#### #cctor
```csharp
OpenTK.Audio.AudioContext.#cctor
```
Runs before the actual class constructor, to load available devices.

#### #ctor
```csharp
OpenTK.Audio.AudioContext.#ctor(System.String,System.Int32,System.Int32,System.Boolean,System.Boolean,OpenTK.Audio.AudioContext.MaxAuxiliarySends)
```
Creates the audio context using the specified device and device parameters.

|Parameter Name|Remarks|
|--------------|-------|
|device|The device descriptor obtained through AudioContext.AvailableDevices.|
|freq|Frequency for mixing output buffer, in units of Hz. Pass 0 for driver default.|
|refresh|Refresh intervals, in units of Hz. Pass 0 for driver default.|
|sync|Flag, indicating a synchronous context.|
|enableEfx|Indicates whether the EFX extension should be initialized, if present.|
|efxMaxAuxSends|Requires EFX enabled. The number of desired Auxiliary Sends per source.|

> For maximum compatibility, you are strongly recommended to use the default constructor.Multiple AudioContexts are not supported at this point.
>             The number of auxilliary EFX sends depends on the audio hardware and drivers. Most Realtek devices, as well
>             as the Creative SB Live!, support 1 auxilliary send. Creative's Audigy and X-Fi series support 4 sends.
>             Values higher than supported will be clamped by the driver.
>             

#### CheckErrors
```csharp
OpenTK.Audio.AudioContext.CheckErrors
```
Checks for ALC error conditions.

#### CreateContext
```csharp
OpenTK.Audio.AudioContext.CreateContext(System.String,System.Int32,System.Int32,System.Boolean,System.Boolean,OpenTK.Audio.AudioContext.MaxAuxiliarySends)
```
Creates the audio context using the specified device.

|Parameter Name|Remarks|
|--------------|-------|
|device|The device descriptor obtained through AudioContext.AvailableDevices, or null for the default device.|
|freq|Frequency for mixing output buffer, in units of Hz. Pass 0 for driver default.|
|refresh|Refresh intervals, in units of Hz. Pass 0 for driver default.|
|sync|Flag, indicating a synchronous context.|
|enableEfx|Indicates whether the EFX extension should be initialized, if present.|
|efxAuxiliarySends|Requires EFX enabled. The number of desired Auxiliary Sends per source.|

> For maximum compatibility, you are strongly recommended to use the default constructor.Multiple AudioContexts are not supported at this point.
>             The number of auxilliary EFX sends depends on the audio hardware and drivers. Most Realtek devices, as well
>             as the Creative SB Live!, support 1 auxilliary send. Creative's Audigy and X-Fi series support 4 sends.
>             Values higher than supported will be clamped by the driver.
>             

#### Dispose
```csharp
OpenTK.Audio.AudioContext.Dispose
```
Disposes of the AudioContext, cleaning up all resources consumed by it.

#### Equals
```csharp
OpenTK.Audio.AudioContext.Equals(System.Object)
```
Compares this instance with another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The instance to compare to.|

_returns: True, if obj refers to this instance; false otherwise._

#### Finalize
```csharp
OpenTK.Audio.AudioContext.Finalize
```
Finalizes this instance.

#### GetHashCode
```csharp
OpenTK.Audio.AudioContext.GetHashCode
```
Calculates the hash code for this instance.

#### MakeCurrent
```csharp
OpenTK.Audio.AudioContext.MakeCurrent
```
Makes the AudioContext current in the calling thread.
> 
>             Only one AudioContext can be current in the application at any time,
>             regardless of the number of threads.
>             

#### Process
```csharp
OpenTK.Audio.AudioContext.Process
```
Processes queued audio events.
> 
>             If AudioContext.IsSynchronized is true, this function will resume
>             the internal audio processing thread. If AudioContext.IsSynchronized is false,
>             you will need to call this function multiple times per second to process
>             audio events.
>             
>             In some implementations this function may have no effect.
>             

#### SupportsExtension
```csharp
OpenTK.Audio.AudioContext.SupportsExtension(System.String)
```
Checks whether the specified OpenAL extension is supported.

|Parameter Name|Remarks|
|--------------|-------|
|extension|The name of the extension to check (e.g. "ALC_EXT_EFX").|

_returns: true if the extension is supported; false otherwise._

#### Suspend
```csharp
OpenTK.Audio.AudioContext.Suspend
```
Suspends processing of audio events.
> 
>             To avoid audio artifacts when calling this function, set audio gain to zero before
>             suspending an AudioContext.
>             
>             In some implementations, it can be faster to suspend processing before changing
>             AudioContext state.
>             
>             In some implementations this function may have no effect.
>             

#### ToString
```csharp
OpenTK.Audio.AudioContext.ToString
```
Returns a @"T:System.String" that desrcibes this instance.
_returns: A @"T:System.String" that desrcibes this instance._



### Properties

#### AvailableDevices
Returns a list of strings containing all known playback devices.
#### CurrentContext
Gets the OpenTK.Audio.AudioContext which is current in the application.
#### CurrentDevice
Gets a System.String with the name of the device used in this context.
#### CurrentError
Returns the ALC error code for this instance.
#### DefaultDevice
Returns the name of the device that will be used as playback default.
#### IsCurrent
Gets or sets a System.Boolean indicating whether the AudioContext
 is current.
#### IsProcessing
Gets a System.Boolean indicating whether the AudioContext is
 currently processing audio events.
#### IsSynchronized
Gets a System.Boolean indicating whether the AudioContext is
 synchronized.

