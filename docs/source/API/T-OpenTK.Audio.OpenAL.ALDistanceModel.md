---
title: ALDistanceModel
---

# ALDistanceModel
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Used by AL.DistanceModel(), the distance model can be retrieved by AL.Get() with ALGetInteger.DistanceModel



### Properties

#### ExponentDistance
AL_EXT_EXPONENT_DISTANCE extension.
#### ExponentDistanceClamped
AL_EXT_EXPONENT_DISTANCE extension.
#### InverseDistance
InverseDistance is equivalent to the IASIG I3DL2 model with the exception that ALSourcef.ReferenceDistance does not imply any clamping.
#### InverseDistanceClamped
InverseDistanceClamped is the IASIG I3DL2 model, with ALSourcef.ReferenceDistance indicating both the reference distance and the distance below which gain will be clamped.
#### LinearDistance
AL_EXT_LINEAR_DISTANCE extension.
#### LinearDistanceClamped
AL_EXT_LINEAR_DISTANCE extension.
#### None
Bypasses all distance attenuation calculation for all Sources.

