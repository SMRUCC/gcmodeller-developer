---
title: XRamStorage
---

# XRamStorage
_namespace: [OpenTK.Audio.OpenAL.XRamExtension](N-OpenTK.Audio.OpenAL.XRamExtension.html)_

This enum is used to abstract the need of using AL.GetEnumValue() with the Extension. The values do NOT correspond to AL_STORAGE_* tokens!



### Properties

#### Accessible
Force an Open AL Buffer into 'accessible' (currently host) RAM, good for streaming buffers.
#### Automatic
Put an Open AL Buffer into X-RAM if memory is available, otherwise use host RAM. This is the default mode.
#### Hardware
Force an Open AL Buffer into X-RAM, good for non-streaming buffers.

