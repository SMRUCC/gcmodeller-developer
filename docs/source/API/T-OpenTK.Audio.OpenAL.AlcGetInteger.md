---
title: AlcGetInteger
---

# AlcGetInteger
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Defines available parameters for @"M:OpenTK.Audio.OpenAL.Alc.GetInteger(System.IntPtr,OpenTK.Audio.OpenAL.AlcGetInteger,System.Int32,System.Int32[])".



### Properties

#### AllAttributes
Expects a destination of ALC_ATTRIBUTES_SIZE, and provides an attribute list for the current context of the specified device. NULL is an invalid device.
#### AttributesSize
The size (number of ALCint values) required for a zero-terminated attributes list, for the current context. NULL is an invalid device.
#### CaptureSamples
The number of capture samples available. NULL is an invalid device.
#### EfxMajorVersion
(EFX Extension) This property can be used by the application to retrieve the Major version number of the Effects Extension supported by this OpenAL implementation. As this is a Context property is should be retrieved using alcGetIntegerv.
#### EfxMaxAuxiliarySends
(EFX Extension) This Context property can be passed to OpenAL during Context creation (alcCreateContext) to request a maximum number of Auxiliary Sends desired on each Source. It is not guaranteed that the desired number of sends will be available, so an application should query this property after creating the context using alcGetIntergerv. Default: 2
#### EfxMinorVersion
(EFX Extension) This property can be used by the application to retrieve the Minor version number of the Effects Extension supported by this OpenAL implementation. As this is a Context property is should be retrieved using alcGetIntegerv.
#### MajorVersion
The specification revision for this implementation (major version). NULL is an acceptable device.
#### MinorVersion
The specification revision for this implementation (minor version). NULL is an acceptable device.

