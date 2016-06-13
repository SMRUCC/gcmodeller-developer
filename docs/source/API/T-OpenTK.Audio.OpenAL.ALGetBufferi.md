---
title: ALGetBufferi
---

# ALGetBufferi
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

A list of valid Int32 GetBuffer parameters



### Properties

#### Bits
Bit depth of the buffer. Should be 8 or 16.
#### Channels
Number of channels in buffer. > 1 is valid, but buffer won’t be positioned when played. 1 for Mono, 2 for Stereo.
#### Frequency
Sound sample's frequency, in units of hertz [Hz]. This is the number of samples per second. Half of the sample frequency marks the maximum significant frequency component.
#### Size
size of the Buffer in bytes.

