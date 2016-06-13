---
title: XRamExtension
---

# XRamExtension
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

The X-Ram Extension is provided on the top-end Sound Blaster X-Fi solutions (Sound Blaster X-Fi Fatal1ty, Sound Blaster X-Fi Elite Pro, or later).
 These products feature 64MB of X-Ram that can only be used for audio purposes, which can be controlled by this Extension.

### Methods

#### #ctor
```csharp
OpenTK.Audio.OpenAL.XRamExtension.#ctor
```
Constructs a new XRamExtension instance.

#### GetBufferMode
```csharp
OpenTK.Audio.OpenAL.XRamExtension.GetBufferMode(System.Int32@)
```
This function is used to retrieve the storage Mode of a single OpenAL Buffer.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|The handle of an OpenAL Buffer.|

_returns: The current Mode of the Buffer._

#### SetBufferMode
```csharp
OpenTK.Audio.OpenAL.XRamExtension.SetBufferMode(System.Int32,System.Int32@,OpenTK.Audio.OpenAL.XRamExtension.XRamStorage)
```
This function is used to set the storage Mode of an array of OpenAL Buffers.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number of OpenAL Buffers pointed to by buffer.|
|buffer|An array of OpenAL Buffer handles.|
|mode|The storage mode that should be used for all the given buffers. Should be the value of one of the following enum names: XRamStorage.Automatic, XRamStorage.Hardware, XRamStorage.Accessible|

_returns: True if all the Buffers were successfully set to the requested storage mode, False otherwise._



### Properties

#### GetRamFree
Query free X-RAM available in bytes.
#### GetRamSize
Query total amount of X-RAM in bytes.
#### IsInitialized
Returns True if the X-Ram Extension has been found and could be initialized.

