---
title: ALSourceType
---

# ALSourceType
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Source type information, can be retrieved by AL.Source() with ALSourcei.SourceType.



### Properties

#### Static
Source is Static if a Buffer has been attached using AL.Source with the parameter Sourcei.Buffer.
#### Streaming
Source is Streaming if one or more Buffers have been attached using AL.SourceQueueBuffers
#### Undetermined
Source is undetermined when it has a null Buffer attached

