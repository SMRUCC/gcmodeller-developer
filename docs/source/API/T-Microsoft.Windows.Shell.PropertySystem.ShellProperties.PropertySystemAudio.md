---
title: PropertySystemAudio
---

# PropertySystemAudio
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.Audio Properties



### Properties

#### ChannelCount
Name: System.Audio.ChannelCount -- PKEY_Audio_ChannelCountDescription: Indicates the channel count for the audio file. Values: 1 (mono), 2 (stereo).
Type: UInt32 -- VT_UI4FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 7 (PIDASI_CHANNEL_COUNT)
#### Compression
Name: System.Audio.Compression -- PKEY_Audio_CompressionDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 10 (PIDASI_COMPRESSION)
#### EncodingBitrate
Name: System.Audio.EncodingBitrate -- PKEY_Audio_EncodingBitrateDescription: Indicates the average data rate in Hz for the audio file in "bits per second".
Type: UInt32 -- VT_UI4FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 4 (PIDASI_AVG_DATA_RATE)
#### Format
Name: System.Audio.Format -- PKEY_Audio_FormatDescription: Indicates the format of the audio file.
Type: String -- VT_LPWSTR (For variants: VT_BSTR) Legacy code may treat this as VT_BSTR.FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 2 (PIDASI_FORMAT)
#### IsVariableBitrate
Name: System.Audio.IsVariableBitRate -- PKEY_Audio_IsVariableBitRateDescription: Type: Boolean -- VT_BOOLFormatID: {E6822FEE-8C17-4D62-823C-8E9CFCBD1D5C}, 100
#### PeakValue
Name: System.Audio.PeakValue -- PKEY_Audio_PeakValueDescription: Type: UInt32 -- VT_UI4FormatID: {2579E5D0-1116-4084-BD9A-9B4F7CB4DF5E}, 100
#### SampleRate
Name: System.Audio.SampleRate -- PKEY_Audio_SampleRateDescription: Indicates the audio sample rate for the audio file in "samples per second".
Type: UInt32 -- VT_UI4FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 5 (PIDASI_SAMPLE_RATE)
#### SampleSize
Name: System.Audio.SampleSize -- PKEY_Audio_SampleSizeDescription: Indicates the audio sample size for the audio file in "bits per sample".
Type: UInt32 -- VT_UI4FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 6 (PIDASI_SAMPLE_SIZE)
#### StreamName
Name: System.Audio.StreamName -- PKEY_Audio_StreamNameDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 9 (PIDASI_STREAM_NAME)
#### StreamNumber
Name: System.Audio.StreamNumber -- PKEY_Audio_StreamNumberDescription: 
Type: UInt16 -- VT_UI2FormatID: (FMTID_AudioSummaryInformation) {64440490-4C8B-11D1-8B70-080036B11A03}, 8 (PIDASI_STREAM_NUMBER)

