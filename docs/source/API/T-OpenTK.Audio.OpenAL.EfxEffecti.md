---
title: EfxEffecti
---

# EfxEffecti
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

A list of valid Int32 Effect/GetEffect parameters



### Properties

#### ChorusPhase
This property controls the phase difference between the left and right low-frequency oscillators. At zero degrees the two low-frequency oscillators are synchronized. Unit: Degrees Range [-180 .. 180] Default: 90
#### ChorusWaveform
This property sets the waveform shape of the low-frequency oscillator that controls the delay time of the delayed signals. Unit: (0) Sinusoid, (1) Triangle Range [0 .. 1] Default: 1
#### CompressorOnoff
Enabling this will result in audio exhibiting smaller variation in intensity between the loudest and quietest portions. Unit: (0) Off, (1) On Range [0 .. 1] Default: 1
#### EaxReverbDecayHFLimit
When this flag is set, the high-frequency decay time automatically stays below a limit value that's derived from the setting of the property AirAbsorptionGainHF. Unit: (0) False, (1) True Range [False, True] Default: True
#### EffectType
Used with the enum EfxEffectType as it's parameter.
#### FlangerPhase
This changes the phase difference between the left and right low-frequency oscillator's. At zero degrees the two low-frequency oscillators are synchronized. Range [-180 .. +180] Default: 0
#### FlangerWaveform
Selects the shape of the low-frequency oscillator waveform that controls the amount of the delay of the sampled signal. Unit: (0) Sinusoid, (1) Triangle Range [0 .. 1] Default: 1
#### FrequencyShifterLeftDirection
These select which internal signals are added together to produce the output. Unit: (0) Down, (1) Up, (2) Off Range [0 .. 2] Default: 0
#### FrequencyShifterRightDirection
These select which internal signals are added together to produce the output. Unit: (0) Down, (1) Up, (2) Off Range [0 .. 2] Default: 0
#### PitchShifterCoarseTune
This sets the number of semitones by which the pitch is shifted. There are 12 semitones per octave. Unit: Semitones Range [-12 .. +12] Default: +12
#### PitchShifterFineTune
This sets the number of cents between Semitones a pitch is shifted. A Cent is 1/100th of a Semitone. Unit: Cents Range [-50 .. +50] Default: 0
#### ReverbDecayHFLimit
When this flag is set, the high-frequency decay time automatically stays below a limit value that's derived from the setting of the property Air Absorption HF. Unit: (0) False, (1) True Range [False, True] Default: True
#### RingModulatorWaveform
This controls which waveform is used as the carrier signal. Traditional ring modulator and tremolo effects generally use a sinusoidal carrier. Unit: (0) Sinusoid, (1) Sawtooth, (2) Square Range [0 .. 2] Default: 0
#### VocalMorpherPhonemeA
Sets the vocal morpher 4-band formant filter A, used to impose vocal tract effects upon the input signal. The vocal morpher is not necessarily intended for use on voice signals; it is primarily intended for pitched noise effects, vocal-like wind effects, etc. Unit: Use enum EfxFormantFilterSettings Range [0 .. 29] Default: 0, "Phoneme A"
#### VocalMorpherPhonemeACoarseTuning
This is used to adjust the pitch of phoneme filter A in 1-semitone increments. Unit: Semitones Range [-24 .. +24] Default: 0
#### VocalMorpherPhonemeB
Sets the vocal morpher 4-band formant filter B, used to impose vocal tract effects upon the input signal. The vocal morpher is not necessarily intended for use on voice signals; it is primarily intended for pitched noise effects, vocal-like wind effects, etc. Unit: Use enum EfxFormantFilterSettings Range [0 .. 29] Default: 10, "Phoneme ER"
#### VocalMorpherPhonemeBCoarseTuning
This is used to adjust the pitch of phoneme filter B in 1-semitone increments. Unit: Semitones Range [-24 .. +24] Default: 0
#### VocalMorpherWaveform
This controls the shape of the low-frequency oscillator used to morph between the two phoneme filters. Unit: (0) Sinusoid, (1) Triangle, (2) Sawtooth Range [0 .. 2] Default: 0

