---
title: AL
---

# AL
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Provides access to the OpenAL 1.1 flat API.

### Methods

#### BindBufferToSource
```csharp
OpenTK.Audio.OpenAL.AL.BindBufferToSource(System.Int32,System.Int32)
```
(Helper) Binds a Buffer to a Source handle.

|Parameter Name|Remarks|
|--------------|-------|
|source|Source name to attach the Buffer to.|
|buffer|Buffer name which is attached to the Source.|


#### BufferData
```csharp
OpenTK.Audio.OpenAL.AL.BufferData(System.Int32,OpenTK.Audio.OpenAL.ALFormat,System.IntPtr,System.Int32,System.Int32)
```
This function fills a buffer with audio buffer. All the pre-defined formats are PCM buffer, but this function may be used by extensions to load other buffer types as well.

|Parameter Name|Remarks|
|--------------|-------|
|bid|buffer Handle/Name to be filled with buffer.|
|format|Format type from among the following: ALFormat.Mono8, ALFormat.Mono16, ALFormat.Stereo8, ALFormat.Stereo16.|
|buffer|Pointer to a pinned audio buffer.|
|size|The size of the audio buffer in bytes.|
|freq|The frequency of the audio buffer.|


#### BufferData``1
```csharp
OpenTK.Audio.OpenAL.AL.BufferData``1(System.Int32,OpenTK.Audio.OpenAL.ALFormat,``0[],System.Int32,System.Int32)
```
This function fills a buffer with audio buffer. All the pre-defined formats are PCM buffer, but this function may be used by extensions to load other buffer types as well.

|Parameter Name|Remarks|
|--------------|-------|
|bid|buffer Handle/Name to be filled with buffer.|
|format|Format type from among the following: ALFormat.Mono8, ALFormat.Mono16, ALFormat.Stereo8, ALFormat.Stereo16.|
|buffer|The audio buffer.|
|size|The size of the audio buffer in bytes.|
|freq|The frequency of the audio buffer.|


#### DeleteBuffer
```csharp
OpenTK.Audio.OpenAL.AL.DeleteBuffer(System.Int32)
```
This function deletes one buffer only, freeing the resources used by the buffer. Buffers which are attached to a source can not be deleted. See AL.Source (ALSourcei) and AL.SourceUnqueueBuffers for information on how to detach a buffer from a source.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|Pointer to a buffer name identifying the buffer to be deleted.|


#### DeleteBuffers
```csharp
OpenTK.Audio.OpenAL.AL.DeleteBuffers(System.Int32[])
```
This function deletes one or more buffers, freeing the resources used by the buffer. Buffers which are attached to a source can not be deleted. See AL.Source (ALSourcei) and AL.SourceUnqueueBuffers for information on how to detach a buffer from a source.

|Parameter Name|Remarks|
|--------------|-------|
|buffers|Pointer to an array of buffer names identifying the buffers to be deleted.|


#### DeleteSource
```csharp
OpenTK.Audio.OpenAL.AL.DeleteSource(System.Int32)
```
This function deletes one source only.

|Parameter Name|Remarks|
|--------------|-------|
|source|Pointer to a source name identifying the source to be deleted.|


#### DeleteSources
```csharp
OpenTK.Audio.OpenAL.AL.DeleteSources(System.Int32[])
```
This function deletes one or more sources.

|Parameter Name|Remarks|
|--------------|-------|
|sources|An array of source names identifying the sources to be deleted.|


#### Disable
```csharp
OpenTK.Audio.OpenAL.AL.Disable(OpenTK.Audio.OpenAL.ALCapability)
```
This function disables a feature of the OpenAL driver.

|Parameter Name|Remarks|
|--------------|-------|
|capability|The name of a capability to disable.|


#### DistanceModel
```csharp
OpenTK.Audio.OpenAL.AL.DistanceModel(OpenTK.Audio.OpenAL.ALDistanceModel)
```
This function selects the OpenAL distance model – ALDistanceModel.InverseDistance, ALDistanceModel.InverseDistanceClamped, ALDistanceModel.LinearDistance, ALDistanceModel.LinearDistanceClamped, ALDistanceModel.ExponentDistance, ALDistanceModel.ExponentDistanceClamped, or ALDistanceModel.None. The default distance model in OpenAL is ALDistanceModel.InverseDistanceClamped.

|Parameter Name|Remarks|
|--------------|-------|
|distancemodel|-|

> 
>             The ALDistanceModel .InverseDistance model works according to the following formula:
>             gain = ALSourcef.ReferenceDistance / (ALSourcef.ReferenceDistance + ALSourcef.RolloffFactor * (distance – ALSourcef.ReferenceDistance));
>             
>             The ALDistanceModel .InverseDistanceClamped model works according to the following formula:
>             distance = max(distance,ALSourcef.ReferenceDistance);
>             distance = min(distance,ALSourcef.MaxDistance);
>             gain = ALSourcef.ReferenceDistance / (ALSourcef.ReferenceDistance + ALSourcef.RolloffFactor * (distance – ALSourcef.ReferenceDistance));
>             
>             The ALDistanceModel.LinearDistance model works according to the following formula: 
>             distance = min(distance, ALSourcef.MaxDistance) // avoid negative gain
>             gain = (1 – ALSourcef.RolloffFactor * (distance – ALSourcef.ReferenceDistance) / (ALSourcef.MaxDistance – ALSourcef.ReferenceDistance))
>             
>             The ALDistanceModel.LinearDistanceClamped model works according to the following formula:
>             distance = max(distance, ALSourcef.ReferenceDistance)
>             distance = min(distance, ALSourcef.MaxDistance)
>             gain = (1 – ALSourcef.RolloffFactor * (distance – ALSourcef.ReferenceDistance) / (ALSourcef.MaxDistance – ALSourcef.ReferenceDistance))
>             
>             The ALDistanceModel.ExponentDistance model works according to the following formula:
>             gain = (distance / ALSourcef.ReferenceDistance) ^ (- ALSourcef.RolloffFactor) 
>             
>             The ALDistanceModel.ExponentDistanceClamped model works according to the following formula:
>             distance = max(distance, ALSourcef.ReferenceDistance)
>             distance = min(distance, ALSourcef.MaxDistance)
>             gain = (distance / ALSourcef.ReferenceDistance) ^ (- ALSourcef.RolloffFactor)
>             
>             The ALDistanceModel.None model works according to the following formula:
>             gain = 1f;
>             

#### DopplerFactor
```csharp
OpenTK.Audio.OpenAL.AL.DopplerFactor(System.Single)
```
AL.DopplerFactor is a simple scaling of source and listener velocities to exaggerate or deemphasize the Doppler (pitch) shift resulting from the calculation.

|Parameter Name|Remarks|
|--------------|-------|
|value|A negative value will result in an error, the command is then ignored. The default value is 1f. The current setting can be queried using AL.Get with parameter ALGetFloat.SpeedOfSound.|


#### DopplerVelocity
```csharp
OpenTK.Audio.OpenAL.AL.DopplerVelocity(System.Single)
```
This function is deprecated and should not be used.

|Parameter Name|Remarks|
|--------------|-------|
|value|The default is 1.0f.|


#### Enable
```csharp
OpenTK.Audio.OpenAL.AL.Enable(OpenTK.Audio.OpenAL.ALCapability)
```
This function enables a feature of the OpenAL driver. There are no capabilities defined in OpenAL 1.1 to be used with this function, but it may be used by an extension.

|Parameter Name|Remarks|
|--------------|-------|
|capability|The name of a capability to enable.|


#### GenBuffer
```csharp
OpenTK.Audio.OpenAL.AL.GenBuffer(System.UInt32@)
```
This function generates one buffer only, which contain audio data (see AL.BufferData). References to buffers are uint values, which are used wherever a buffer reference is needed (in calls such as AL.DeleteBuffers, AL.Source with parameter ALSourcei, AL.SourceQueueBuffers, and AL.SourceUnqueueBuffers).

|Parameter Name|Remarks|
|--------------|-------|
|buffer|Pointer to an uint value which will store the names of the new buffer.|

_returns: Pointer to an uint value which will store the name of the new buffer._

#### GenBuffers
```csharp
OpenTK.Audio.OpenAL.AL.GenBuffers(System.Int32)
```
This function generates one or more buffers, which contain audio data (see AL.BufferData). References to buffers are uint values, which are used wherever a buffer reference is needed (in calls such as AL.DeleteBuffers, AL.Source with parameter ALSourcei, AL.SourceQueueBuffers, and AL.SourceUnqueueBuffers).

|Parameter Name|Remarks|
|--------------|-------|
|n|The number of buffers to be generated.|

_returns: Pointer to an array of uint values which will store the names of the new buffers._

#### GenSource
```csharp
OpenTK.Audio.OpenAL.AL.GenSource(System.UInt32@)
```
This function generates one source only. References to sources are uint values, which are used wherever a source reference is needed (in calls such as AL.DeleteSources and AL.Source with parameter ALSourcei).

|Parameter Name|Remarks|
|--------------|-------|
|source|Pointer to an uint value which will store the name of the new source.|

_returns: Pointer to an int value which will store the name of the new source._

#### GenSources
```csharp
OpenTK.Audio.OpenAL.AL.GenSources(System.Int32)
```
This function generates one or more sources. References to sources are int values, which are used wherever a source reference is needed (in calls such as AL.DeleteSources and AL.Source with parameter ALSourcei).

|Parameter Name|Remarks|
|--------------|-------|
|n|The number of sources to be generated.|

_returns: Pointer to an array of int values which will store the names of the new sources._

#### Get
```csharp
OpenTK.Audio.OpenAL.AL.Get(OpenTK.Audio.OpenAL.ALGetFloat)
```
This function returns a floating-point OpenAL state.

|Parameter Name|Remarks|
|--------------|-------|
|param|the state to be queried: DopplerFactor, SpeedOfSound.|

_returns: The floating-point state described by param will be returned._

#### GetBuffer
```csharp
OpenTK.Audio.OpenAL.AL.GetBuffer(System.Int32,OpenTK.Audio.OpenAL.ALGetBufferi,System.Int32@)
```
This function retrieves an integer property of a buffer.

|Parameter Name|Remarks|
|--------------|-------|
|bid|Buffer name whose attribute is being retrieved|
|param|The name of the attribute to be retrieved: ALGetBufferi.Frequency, Bits, Channels, Size, and the currently hidden AL_DATA (dangerous).|
|value|A pointer to an int to hold the retrieved buffer|


#### GetDistanceModel
```csharp
OpenTK.Audio.OpenAL.AL.GetDistanceModel
```
Returns the @"T:OpenTK.Audio.OpenAL.ALDistanceModel" of the current context.
_returns: The @"T:OpenTK.Audio.OpenAL.ALDistanceModel" of the current context._

#### GetEnumValue
```csharp
OpenTK.Audio.OpenAL.AL.GetEnumValue(System.String)
```
This function returns the enumeration value of an OpenAL token, described by a string.

|Parameter Name|Remarks|
|--------------|-------|
|ename|A string describing an OpenAL token. Example "AL_DISTANCE_MODEL"|

_returns: Returns the actual ALenum described by a string. Returns 0 if the string doesn’t describe a valid OpenAL token._

#### GetError
```csharp
OpenTK.Audio.OpenAL.AL.GetError
```
Error support. Obtain the most recent error generated in the AL state machine. When an error is detected by AL, a flag is set and the error code is recorded. Further errors, if they occur, do not affect this recorded code. When alGetError is called, the code is returned and the flag is cleared, so that a further error will again record its code.
_returns: The first error that occured. can be used with AL.GetString. Returns an Alenum representing the error state. When an OpenAL error occurs, the error state is set and will not be changed until the error state is retrieved using alGetError. Whenever alGetError is called, the error state is cleared and the last state (the current state when the call was made) is returned. To isolate error detection to a specific portion of code, alGetError should be called before the isolated section to clear the current error state._

#### GetErrorString
```csharp
OpenTK.Audio.OpenAL.AL.GetErrorString(OpenTK.Audio.OpenAL.ALError)
```
This function retrieves an OpenAL string property.

|Parameter Name|Remarks|
|--------------|-------|
|param|The human-readable errorstring to be returned.|

_returns: Returns a pointer to a null-terminated string._

#### GetListener
```csharp
OpenTK.Audio.OpenAL.AL.GetListener(OpenTK.Audio.OpenAL.ALListenerfv,OpenTK.Vector3@,OpenTK.Vector3@)
```
This function retrieves two Math.Vector3 properties of the listener.

|Parameter Name|Remarks|
|--------------|-------|
|param|the name of the attribute to be retrieved: ALListenerfv.Orientation|
|at|A Math.Vector3 for the At-Vector.|
|up|A Math.Vector3 for the Up-Vector.|


#### GetProcAddress
```csharp
OpenTK.Audio.OpenAL.AL.GetProcAddress(System.String)
```
This function returns the address of an OpenAL extension function. Handle with care.

|Parameter Name|Remarks|
|--------------|-------|
|fname|A string containing the function name.|

_returns: The return value is a pointer to the specified function. The return value will be IntPtr.Zero if the function is not found._

#### GetSource
```csharp
OpenTK.Audio.OpenAL.AL.GetSource(System.Int32,OpenTK.Audio.OpenAL.ALSourceb,System.Boolean@)
```
This function retrieves a bool property of a source.

|Parameter Name|Remarks|
|--------------|-------|
|sid|Source name whose attribute is being retrieved.|
|param|The name of the attribute to get: ALSourceb.SourceRelative, Looping.|
|value|A pointer to the bool value being retrieved.|


#### GetSourceState
```csharp
OpenTK.Audio.OpenAL.AL.GetSourceState(System.Int32)
```
(Helper) Returns Source state information.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The source to be queried.|

_returns: state information from OpenAL._

#### GetSourceType
```csharp
OpenTK.Audio.OpenAL.AL.GetSourceType(System.Int32)
```
(Helper) Returns Source type information.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The source to be queried.|

_returns: type information from OpenAL._

#### IsBuffer
```csharp
OpenTK.Audio.OpenAL.AL.IsBuffer(System.Int32)
```
This function tests if a buffer name is valid, returning True if valid, False if not.

|Parameter Name|Remarks|
|--------------|-------|
|bid|A buffer Handle previously allocated with @"M:OpenTK.Audio.OpenAL.AL.GenBuffers(System.Int32)".|

_returns: Success._

#### IsEnabled
```csharp
OpenTK.Audio.OpenAL.AL.IsEnabled(OpenTK.Audio.OpenAL.ALCapability)
```
This function returns a boolean indicating if a specific feature is enabled in the OpenAL driver.

|Parameter Name|Remarks|
|--------------|-------|
|capability|The name of a capability to enable.|

_returns: True if enabled, False if disabled._

#### IsExtensionPresent
```csharp
OpenTK.Audio.OpenAL.AL.IsExtensionPresent(System.String)
```
This function tests if a specific Extension is available for the OpenAL driver.

|Parameter Name|Remarks|
|--------------|-------|
|extname|A string naming the desired extension. Example: "EAX-RAM"|

_returns: Returns True if the Extension is available or False if not available._

#### IsSource
```csharp
OpenTK.Audio.OpenAL.AL.IsSource(System.Int32)
```
This function tests if a source name is valid, returning True if valid and False if not.

|Parameter Name|Remarks|
|--------------|-------|
|sid|A source name to be tested for validity|

_returns: Success._

#### Listener
```csharp
OpenTK.Audio.OpenAL.AL.Listener(OpenTK.Audio.OpenAL.ALListenerfv,OpenTK.Vector3@,OpenTK.Vector3@)
```
This function sets two Math.Vector3 properties of the listener.

|Parameter Name|Remarks|
|--------------|-------|
|param|The name of the attribute to be set: ALListenerfv.Orientation|
|at|A Math.Vector3 for the At-Vector.|
|up|A Math.Vector3 for the Up-Vector.|


#### Source
```csharp
OpenTK.Audio.OpenAL.AL.Source(System.Int32,OpenTK.Audio.OpenAL.ALSource3i,System.Int32,System.Int32,System.Int32)
```
This function sets 3 integer properties of a source. This property is used to establish connections between Sources and Auxiliary Effect Slots.

|Parameter Name|Remarks|
|--------------|-------|
|sid|Source name whose attribute is being set.|
|param|The name of the attribute to set: EfxAuxiliarySendFilter|
|value1|The value to set the attribute to. (EFX Extension) The destination Auxiliary Effect Slot ID|
|value2|The value to set the attribute to. (EFX Extension) The Auxiliary Send number.|
|value3|The value to set the attribute to. (EFX Extension) optional Filter ID.|


#### SourcePause
```csharp
OpenTK.Audio.OpenAL.AL.SourcePause(System.Int32)
```
This function pauses a source. The paused source will have its state changed to ALSourceState.Paused.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to be paused.|


#### SourcePlay
```csharp
OpenTK.Audio.OpenAL.AL.SourcePlay(System.Int32)
```
This function plays, replays or resumes a source. The playing source will have it's state changed to ALSourceState.Playing. When called on a source which is already playing, the source will restart at the beginning. When the attached buffer(s) are done playing, the source will progress to the ALSourceState.Stopped state.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to be played.|


#### SourceQueueBuffer
```csharp
OpenTK.Audio.OpenAL.AL.SourceQueueBuffer(System.Int32,System.Int32)
```
This function queues a set of buffers on a source. All buffers attached to a source will be played in sequence, and the number of processed buffers can be detected using AL.GetSource with parameter ALGetSourcei.BuffersProcessed. When first created, a source will be of type ALSourceType.Undetermined. A successful AL.SourceQueueBuffers call will change the source type to ALSourceType.Streaming.

|Parameter Name|Remarks|
|--------------|-------|
|source|The name of the source to queue buffers onto.|
|buffer|The name of the buffer to be queued.|


#### SourceQueueBuffers
```csharp
OpenTK.Audio.OpenAL.AL.SourceQueueBuffers(System.UInt32,System.Int32,System.UInt32@)
```
This function queues a set of buffers on a source. All buffers attached to a source will be played in sequence, and the number of processed buffers can be detected using AL.GetSource with parameter ALGetSourcei.BuffersProcessed. When first created, a source will be of type ALSourceType.Undetermined. A successful AL.SourceQueueBuffers call will change the source type to ALSourceType.Streaming.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to queue buffers onto.|
|numEntries|The number of buffers to be queued.|
|bids|A pointer to an array of buffer names to be queued.|


#### SourceRewind
```csharp
OpenTK.Audio.OpenAL.AL.SourceRewind(System.Int32)
```
This function stops the source and sets its state to ALSourceState.Initial.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to be rewound.|


#### SourceStop
```csharp
OpenTK.Audio.OpenAL.AL.SourceStop(System.Int32)
```
This function stops a source. The stopped source will have it's state changed to ALSourceState.Stopped.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to be stopped.|


#### SourceUnqueueBuffer
```csharp
OpenTK.Audio.OpenAL.AL.SourceUnqueueBuffer(System.Int32)
```
This function unqueues a set of buffers attached to a source. The number of processed buffers can be detected using AL.GetSource with parameter ALGetSourcei.BuffersProcessed, which is the maximum number of buffers that can be unqueued using this call. The unqueue operation will only take place if all n buffers can be removed from the queue.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to unqueue buffers from.|


#### SourceUnqueueBuffers
```csharp
OpenTK.Audio.OpenAL.AL.SourceUnqueueBuffers(System.Int32,System.Int32)
```
This function unqueues a set of buffers attached to a source. The number of processed buffers can be detected using AL.GetSource with parameter ALGetSourcei.BuffersProcessed, which is the maximum number of buffers that can be unqueued using this call. The unqueue operation will only take place if all n buffers can be removed from the queue.

|Parameter Name|Remarks|
|--------------|-------|
|sid|The name of the source to unqueue buffers from.|
|numEntries|The number of buffers to be unqueued.|


#### SpeedOfSound
```csharp
OpenTK.Audio.OpenAL.AL.SpeedOfSound(System.Single)
```
AL.SpeedOfSound allows the application to change the reference (propagation) speed used in the Doppler calculation. The source and listener velocities should be expressed in the same units as the speed of sound.

|Parameter Name|Remarks|
|--------------|-------|
|value|A negative or zero value will result in an error, and the command is ignored. Default: 343.3f (appropriate for velocity units of meters and air as the propagation medium). The current setting can be queried using AL.Get with parameter ALGetFloat.SpeedOfSound.|





