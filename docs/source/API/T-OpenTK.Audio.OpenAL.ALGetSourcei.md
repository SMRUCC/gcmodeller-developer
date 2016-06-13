---
title: ALGetSourcei
---

# ALGetSourcei
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

A list of valid Int32 GetSource parameters



### Properties

#### Buffer
Indicate the Buffer to provide sound samples. Type: uint Range: any valid Buffer Handle.
#### BuffersProcessed
The number of buffers in the queue that have been processed.
#### BuffersQueued
The number of buffers queued on this source.
#### ByteOffset
The playback position, expressed in bytes. AL_EXT_OFFSET Extension.
#### SampleOffset
The playback position, expressed in samples. AL_EXT_OFFSET Extension.
#### SourceState
The state of the source (Stopped, Playing, etc.) Use the enum AlSourceState for comparison.
#### SourceType
Source type (Static, Streaming or undetermined). Use enum AlSourceType for comparison.

