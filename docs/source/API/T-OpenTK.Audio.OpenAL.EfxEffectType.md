---
title: EfxEffectType
---

# EfxEffectType
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Effect type definitions to be used with EfxEffecti.EffectType.



### Properties

#### Autowah
The Auto-wah effect emulates the sound of a wah-wah pedal used with an electric guitar, or a mute on a brass instrument.
#### Chorus
The Chorus effect essentially replays the input audio accompanied by another slightly delayed version of the signal, creating a "doubling" effect.
#### Compressor
The Compressor will boost quieter portions of the audio, while louder portions will stay the same or may even be reduced.
#### Distortion
The Distortion effect simulates turning up (overdriving) the gain stage on a guitar amplifier or adding a distortion pedal to an instrument's output.
#### EaxReverb
The EAX Reverb has a more advanced parameter set than EfxEffectType.Reverb, but is only natively supported on devices that support the EAX 3.0 or above.
#### Echo
The Echo effect generates discrete, delayed instances of the input signal.
#### Equalizer
The Equalizer is very flexible, providing tonal control over four different adjustable frequency ranges.
#### Flanger
The Flanger effect creates a "tearing" or "whooshing" sound, like a jet flying overhead.
#### FrequencyShifter
The Frequency shifter is a single-sideband modulator, which translates all the component frequencies of the input signal by an equal amount.
#### Null
No Effect, disable. This Effect type is used when an Effect object is initially created.
#### PitchShifter
The Pitch shifter applies time-invariant pitch shifting to the input signal, over a one octave range and controllable at a semi-tone and cent resolution.
#### Reverb
The Reverb effect is the standard Effects Extension's environmental reverberation effect. It is available on all Generic Software and Generic Hardware devices.
#### RingModulator
The Ring modulator multiplies an input signal by a carrier signal in the time domain, resulting in tremolo or inharmonic effects.
#### VocalMorpher
The Vocal morpher consists of a pair of 4-band formant filters, used to impose vocal tract effects upon the input signal.

