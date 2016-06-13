---
title: AlcContextAttributes
---

# AlcContextAttributes
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Defines available context attributes.



### Properties

#### EfxMaxAuxiliarySends
(EFX Extension) This Context property can be passed to OpenAL during Context creation (alcCreateContext) to request a maximum number of Auxiliary Sends desired on each Source. It is not guaranteed that the desired number of sends will be available, so an application should query this property after creating the context using alcGetIntergerv. Default: 2
#### Frequency
Followed by System.Int32 Hz
#### MonoSources
Followed by System.Int32 Num of requested Mono (3D) Sources
#### Refresh
Followed by System.Int32 Hz
#### StereoSources
Followed by System.Int32 Num of requested Stereo Sources
#### Sync
Followed by AlBoolean.True, or AlBoolean.False

