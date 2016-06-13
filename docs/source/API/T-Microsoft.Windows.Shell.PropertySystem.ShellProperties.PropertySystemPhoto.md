---
title: PropertySystemPhoto
---

# PropertySystemPhoto
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.Photo Properties



### Properties

#### Aperture
Name: System.Photo.Aperture -- PKEY_Photo_ApertureDescription: PropertyTagExifAperture. Calculated from PKEY_Photo_ApertureNumerator and PKEY_Photo_ApertureDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37378
#### ApertureDenominator
Name: System.Photo.ApertureDenominator -- PKEY_Photo_ApertureDenominatorDescription: Denominator of PKEY_Photo_Aperture
Type: UInt32 -- VT_UI4FormatID: {E1A9A38B-6685-46BD-875E-570DC7AD7320}, 100
#### ApertureNumerator
Name: System.Photo.ApertureNumerator -- PKEY_Photo_ApertureNumeratorDescription: Numerator of PKEY_Photo_Aperture
Type: UInt32 -- VT_UI4FormatID: {0337ECEC-39FB-4581-A0BD-4C4CC51E9914}, 100
#### Brightness
Name: System.Photo.Brightness -- PKEY_Photo_BrightnessDescription: This is the brightness of the photo.

Calculated from PKEY_Photo_BrightnessNumerator and PKEY_Photo_BrightnessDenominator.

The units are "APEX", normally in the range of -99.99 to 99.99. If the numerator of 
the recorded value is FFFFFFFF.H, "Unknown" should be indicated.
Type: Double -- VT_R8FormatID: {1A701BF6-478C-4361-83AB-3701BB053C58}, 100 (PropertyTagExifBrightness)
#### BrightnessDenominator
Name: System.Photo.BrightnessDenominator -- PKEY_Photo_BrightnessDenominatorDescription: Denominator of PKEY_Photo_Brightness
Type: UInt32 -- VT_UI4FormatID: {6EBE6946-2321-440A-90F0-C043EFD32476}, 100
#### BrightnessNumerator
Name: System.Photo.BrightnessNumerator -- PKEY_Photo_BrightnessNumeratorDescription: Numerator of PKEY_Photo_Brightness
Type: UInt32 -- VT_UI4FormatID: {9E7D118F-B314-45A0-8CFB-D654B917C9E9}, 100
#### CameraManufacturer
Name: System.Photo.CameraManufacturer -- PKEY_Photo_CameraManufacturerDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 271 (PropertyTagEquipMake)
#### CameraModel
Name: System.Photo.CameraModel -- PKEY_Photo_CameraModelDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 272 (PropertyTagEquipModel)
#### CameraSerialNumber
Name: System.Photo.CameraSerialNumber -- PKEY_Photo_CameraSerialNumberDescription: Serial number of camera that produced this photo
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 273
#### Contrast
Name: System.Photo.Contrast -- PKEY_Photo_ContrastDescription: This indicates the direction of contrast processing applied by the camera 
when the image was shot.
Type: UInt32 -- VT_UI4FormatID: {2A785BA9-8D23-4DED-82E6-60A350C86A10}, 100
#### ContrastText
Name: System.Photo.ContrastText -- PKEY_Photo_ContrastTextDescription: This is the user-friendly form of System.Photo.Contrast. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {59DDE9F2-5253-40EA-9A8B-479E96C6249A}, 100
#### DateTaken
Name: System.Photo.DateTaken -- PKEY_Photo_DateTakenDescription: PropertyTagExifDTOrig
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 36867
#### DigitalZoom
Name: System.Photo.DigitalZoom -- PKEY_Photo_DigitalZoomDescription: PropertyTagExifDigitalZoom. Calculated from PKEY_Photo_DigitalZoomNumerator and PKEY_Photo_DigitalZoomDenominator
Type: Double -- VT_R8FormatID: {F85BF840-A925-4BC2-B0C4-8E36B598679E}, 100
#### DigitalZoomDenominator
Name: System.Photo.DigitalZoomDenominator -- PKEY_Photo_DigitalZoomDenominatorDescription: Denominator of PKEY_Photo_DigitalZoom
Type: UInt32 -- VT_UI4FormatID: {745BAF0E-E5C1-4CFB-8A1B-D031A0A52393}, 100
#### DigitalZoomNumerator
Name: System.Photo.DigitalZoomNumerator -- PKEY_Photo_DigitalZoomNumeratorDescription: Numerator of PKEY_Photo_DigitalZoom
Type: UInt32 -- VT_UI4FormatID: {16CBB924-6500-473B-A5BE-F1599BCBE413}, 100
#### Event
Name: System.Photo.Event -- PKEY_Photo_EventDescription: The event at which the photo was taken
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 18248
#### EXIFVersion
Name: System.Photo.EXIFVersion -- PKEY_Photo_EXIFVersionDescription: The EXIF version.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D35F743A-EB2E-47F2-A286-844132CB1427}, 100
#### ExposureBias
Name: System.Photo.ExposureBias -- PKEY_Photo_ExposureBiasDescription: PropertyTagExifExposureBias. Calculated from PKEY_Photo_ExposureBiasNumerator and PKEY_Photo_ExposureBiasDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37380
#### ExposureBiasDenominator
Name: System.Photo.ExposureBiasDenominator -- PKEY_Photo_ExposureBiasDenominatorDescription: Denominator of PKEY_Photo_ExposureBias
Type: Int32 -- VT_I4FormatID: {AB205E50-04B7-461C-A18C-2F233836E627}, 100
#### ExposureBiasNumerator
Name: System.Photo.ExposureBiasNumerator -- PKEY_Photo_ExposureBiasNumeratorDescription: Numerator of PKEY_Photo_ExposureBias
Type: Int32 -- VT_I4FormatID: {738BF284-1D87-420B-92CF-5834BF6EF9ED}, 100
#### ExposureIndex
Name: System.Photo.ExposureIndex -- PKEY_Photo_ExposureIndexDescription: PropertyTagExifExposureIndex. Calculated from PKEY_Photo_ExposureIndexNumerator and PKEY_Photo_ExposureIndexDenominator
Type: Double -- VT_R8FormatID: {967B5AF8-995A-46ED-9E11-35B3C5B9782D}, 100
#### ExposureIndexDenominator
Name: System.Photo.ExposureIndexDenominator -- PKEY_Photo_ExposureIndexDenominatorDescription: Denominator of PKEY_Photo_ExposureIndex
Type: UInt32 -- VT_UI4FormatID: {93112F89-C28B-492F-8A9D-4BE2062CEE8A}, 100
#### ExposureIndexNumerator
Name: System.Photo.ExposureIndexNumerator -- PKEY_Photo_ExposureIndexNumeratorDescription: Numerator of PKEY_Photo_ExposureIndex
Type: UInt32 -- VT_UI4FormatID: {CDEDCF30-8919-44DF-8F4C-4EB2FFDB8D89}, 100
#### ExposureProgram
Name: System.Photo.ExposureProgram -- PKEY_Photo_ExposureProgramDescription: 
Type: UInt32 -- VT_UI4FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 34850 (PropertyTagExifExposureProg)
#### ExposureProgramText
Name: System.Photo.ExposureProgramText -- PKEY_Photo_ExposureProgramTextDescription: This is the user-friendly form of System.Photo.ExposureProgram. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {FEC690B7-5F30-4646-AE47-4CAAFBA884A3}, 100
#### ExposureTime
Name: System.Photo.ExposureTime -- PKEY_Photo_ExposureTimeDescription: PropertyTagExifExposureTime. Calculated from PKEY_Photo_ExposureTimeNumerator and PKEY_Photo_ExposureTimeDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 33434
#### ExposureTimeDenominator
Name: System.Photo.ExposureTimeDenominator -- PKEY_Photo_ExposureTimeDenominatorDescription: Denominator of PKEY_Photo_ExposureTime
Type: UInt32 -- VT_UI4FormatID: {55E98597-AD16-42E0-B624-21599A199838}, 100
#### ExposureTimeNumerator
Name: System.Photo.ExposureTimeNumerator -- PKEY_Photo_ExposureTimeNumeratorDescription: Numerator of PKEY_Photo_ExposureTime
Type: UInt32 -- VT_UI4FormatID: {257E44E2-9031-4323-AC38-85C552871B2E}, 100
#### Flash
Name: System.Photo.Flash -- PKEY_Photo_FlashDescription: PropertyTagExifFlash
Type: Byte -- VT_UI1FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37385
#### FlashEnergy
Name: System.Photo.FlashEnergy -- PKEY_Photo_FlashEnergyDescription: PropertyTagExifFlashEnergy. Calculated from PKEY_Photo_FlashEnergyNumerator and PKEY_Photo_FlashEnergyDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 41483
#### FlashEnergyDenominator
Name: System.Photo.FlashEnergyDenominator -- PKEY_Photo_FlashEnergyDenominatorDescription: Denominator of PKEY_Photo_FlashEnergy
Type: UInt32 -- VT_UI4FormatID: {D7B61C70-6323-49CD-A5FC-C84277162C97}, 100
#### FlashEnergyNumerator
Name: System.Photo.FlashEnergyNumerator -- PKEY_Photo_FlashEnergyNumeratorDescription: Numerator of PKEY_Photo_FlashEnergy
Type: UInt32 -- VT_UI4FormatID: {FCAD3D3D-0858-400F-AAA3-2F66CCE2A6BC}, 100
#### FlashManufacturer
Name: System.Photo.FlashManufacturer -- PKEY_Photo_FlashManufacturerDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {AABAF6C9-E0C5-4719-8585-57B103E584FE}, 100
#### FlashModel
Name: System.Photo.FlashModel -- PKEY_Photo_FlashModelDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {FE83BB35-4D1A-42E2-916B-06F3E1AF719E}, 100
#### FlashText
Name: System.Photo.FlashText -- PKEY_Photo_FlashTextDescription: This is the user-friendly form of System.Photo.Flash. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {6B8B68F6-200B-47EA-8D25-D8050F57339F}, 100
#### FNumber
Name: System.Photo.FNumber -- PKEY_Photo_FNumberDescription: PropertyTagExifFNumber. Calculated from PKEY_Photo_FNumberNumerator and PKEY_Photo_FNumberDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 33437
#### FNumberDenominator
Name: System.Photo.FNumberDenominator -- PKEY_Photo_FNumberDenominatorDescription: Denominator of PKEY_Photo_FNumber
Type: UInt32 -- VT_UI4FormatID: {E92A2496-223B-4463-A4E3-30EABBA79D80}, 100
#### FNumberNumerator
Name: System.Photo.FNumberNumerator -- PKEY_Photo_FNumberNumeratorDescription: Numerator of PKEY_Photo_FNumber
Type: UInt32 -- VT_UI4FormatID: {1B97738A-FDFC-462F-9D93-1957E08BE90C}, 100
#### FocalLength
Name: System.Photo.FocalLength -- PKEY_Photo_FocalLengthDescription: PropertyTagExifFocalLength. Calculated from PKEY_Photo_FocalLengthNumerator and PKEY_Photo_FocalLengthDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37386
#### FocalLengthDenominator
Name: System.Photo.FocalLengthDenominator -- PKEY_Photo_FocalLengthDenominatorDescription: Denominator of PKEY_Photo_FocalLength
Type: UInt32 -- VT_UI4FormatID: {305BC615-DCA1-44A5-9FD4-10C0BA79412E}, 100
#### FocalLengthInFilm
Name: System.Photo.FocalLengthInFilm -- PKEY_Photo_FocalLengthInFilmDescription: Type: UInt16 -- VT_UI2FormatID: {A0E74609-B84D-4F49-B860-462BD9971F98}, 100
#### FocalLengthNumerator
Name: System.Photo.FocalLengthNumerator -- PKEY_Photo_FocalLengthNumeratorDescription: Numerator of PKEY_Photo_FocalLength
Type: UInt32 -- VT_UI4FormatID: {776B6B3B-1E3D-4B0C-9A0E-8FBAF2A8492A}, 100
#### FocalPlaneXResolution
Name: System.Photo.FocalPlaneXResolution -- PKEY_Photo_FocalPlaneXResolutionDescription: PropertyTagExifFocalXRes. Calculated from PKEY_Photo_FocalPlaneXResolutionNumerator and 
PKEY_Photo_FocalPlaneXResolutionDenominator.
Type: Double -- VT_R8FormatID: {CFC08D97-C6F7-4484-89DD-EBEF4356FE76}, 100
#### FocalPlaneXResolutionDenominator
Name: System.Photo.FocalPlaneXResolutionDenominator -- PKEY_Photo_FocalPlaneXResolutionDenominatorDescription: Denominator of PKEY_Photo_FocalPlaneXResolution
Type: UInt32 -- VT_UI4FormatID: {0933F3F5-4786-4F46-A8E8-D64DD37FA521}, 100
#### FocalPlaneXResolutionNumerator
Name: System.Photo.FocalPlaneXResolutionNumerator -- PKEY_Photo_FocalPlaneXResolutionNumeratorDescription: Numerator of PKEY_Photo_FocalPlaneXResolution
Type: UInt32 -- VT_UI4FormatID: {DCCB10AF-B4E2-4B88-95F9-031B4D5AB490}, 100
#### FocalPlaneYResolution
Name: System.Photo.FocalPlaneYResolution -- PKEY_Photo_FocalPlaneYResolutionDescription: PropertyTagExifFocalYRes. Calculated from PKEY_Photo_FocalPlaneYResolutionNumerator and 
PKEY_Photo_FocalPlaneYResolutionDenominator.
Type: Double -- VT_R8FormatID: {4FFFE4D0-914F-4AC4-8D6F-C9C61DE169B1}, 100
#### FocalPlaneYResolutionDenominator
Name: System.Photo.FocalPlaneYResolutionDenominator -- PKEY_Photo_FocalPlaneYResolutionDenominatorDescription: Denominator of PKEY_Photo_FocalPlaneYResolution
Type: UInt32 -- VT_UI4FormatID: {1D6179A6-A876-4031-B013-3347B2B64DC8}, 100
#### FocalPlaneYResolutionNumerator
Name: System.Photo.FocalPlaneYResolutionNumerator -- PKEY_Photo_FocalPlaneYResolutionNumeratorDescription: Numerator of PKEY_Photo_FocalPlaneYResolution
Type: UInt32 -- VT_UI4FormatID: {A2E541C5-4440-4BA8-867E-75CFC06828CD}, 100
#### GainControl
Name: System.Photo.GainControl -- PKEY_Photo_GainControlDescription: This indicates the degree of overall image gain adjustment.

Calculated from PKEY_Photo_GainControlNumerator and PKEY_Photo_GainControlDenominator.
Type: Double -- VT_R8FormatID: {FA304789-00C7-4D80-904A-1E4DCC7265AA}, 100 (PropertyTagExifGainControl)
#### GainControlDenominator
Name: System.Photo.GainControlDenominator -- PKEY_Photo_GainControlDenominatorDescription: Denominator of PKEY_Photo_GainControl
Type: UInt32 -- VT_UI4FormatID: {42864DFD-9DA4-4F77-BDED-4AAD7B256735}, 100
#### GainControlNumerator
Name: System.Photo.GainControlNumerator -- PKEY_Photo_GainControlNumeratorDescription: Numerator of PKEY_Photo_GainControl
Type: UInt32 -- VT_UI4FormatID: {8E8ECF7C-B7B8-4EB8-A63F-0EE715C96F9E}, 100
#### GainControlText
Name: System.Photo.GainControlText -- PKEY_Photo_GainControlTextDescription: This is the user-friendly form of System.Photo.GainControl. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {C06238B2-0BF9-4279-A723-25856715CB9D}, 100
#### ISOSpeed
Name: System.Photo.ISOSpeed -- PKEY_Photo_ISOSpeedDescription: PropertyTagExifISOSpeed
Type: UInt16 -- VT_UI2FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 34855
#### LensManufacturer
Name: System.Photo.LensManufacturer -- PKEY_Photo_LensManufacturerDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E6DDCAF7-29C5-4F0A-9A68-D19412EC7090}, 100
#### LensModel
Name: System.Photo.LensModel -- PKEY_Photo_LensModelDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E1277516-2B5F-4869-89B1-2E585BD38B7A}, 100
#### LightSource
Name: System.Photo.LightSource -- PKEY_Photo_LightSourceDescription: PropertyTagExifLightSource
Type: UInt32 -- VT_UI4FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37384
#### MakerNote
Name: System.Photo.MakerNote -- PKEY_Photo_MakerNoteDescription: Type: Buffer -- VT_VECTOR | VT_UI1 (For variants: VT_ARRAY | VT_UI1)FormatID: {FA303353-B659-4052-85E9-BCAC79549B84}, 100
#### MakerNoteOffset
Name: System.Photo.MakerNoteOffset -- PKEY_Photo_MakerNoteOffsetDescription: Type: UInt64 -- VT_UI8FormatID: {813F4124-34E6-4D17-AB3E-6B1F3C2247A1}, 100
#### MaxAperture
Name: System.Photo.MaxAperture -- PKEY_Photo_MaxApertureDescription: Calculated from PKEY_Photo_MaxApertureNumerator and PKEY_Photo_MaxApertureDenominator
Type: Double -- VT_R8FormatID: {08F6D7C2-E3F2-44FC-AF1E-5AA5C81A2D3E}, 100
#### MaxApertureDenominator
Name: System.Photo.MaxApertureDenominator -- PKEY_Photo_MaxApertureDenominatorDescription: Denominator of PKEY_Photo_MaxAperture
Type: UInt32 -- VT_UI4FormatID: {C77724D4-601F-46C5-9B89-C53F93BCEB77}, 100
#### MaxApertureNumerator
Name: System.Photo.MaxApertureNumerator -- PKEY_Photo_MaxApertureNumeratorDescription: Numerator of PKEY_Photo_MaxAperture
Type: UInt32 -- VT_UI4FormatID: {C107E191-A459-44C5-9AE6-B952AD4B906D}, 100
#### MeteringMode
Name: System.Photo.MeteringMode -- PKEY_Photo_MeteringModeDescription: PropertyTagExifMeteringMode
Type: UInt16 -- VT_UI2FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37383
#### MeteringModeText
Name: System.Photo.MeteringModeText -- PKEY_Photo_MeteringModeTextDescription: This is the user-friendly form of System.Photo.MeteringMode. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {F628FD8C-7BA8-465A-A65B-C5AA79263A9E}, 100
#### Orientation
Name: System.Photo.Orientation -- PKEY_Photo_OrientationDescription: This is the image orientation viewed in terms of rows and columns.
Type: UInt16 -- VT_UI2FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 274 (PropertyTagOrientation)
#### OrientationText
Name: System.Photo.OrientationText -- PKEY_Photo_OrientationTextDescription: This is the user-friendly form of System.Photo.Orientation. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A9EA193C-C511-498A-A06B-58E2776DCC28}, 100
#### PeopleNames
Name: System.Photo.PeopleNames -- PKEY_Photo_PeopleNamesDescription: The people tags on an image.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: {E8309B6E-084C-49B4-B1FC-90A80331B638}, 100
#### PhotometricInterpretation
Name: System.Photo.PhotometricInterpretation -- PKEY_Photo_PhotometricInterpretationDescription: This is the pixel composition. In JPEG compressed data, a JPEG marker is used 
instead of this property.
Type: UInt16 -- VT_UI2FormatID: {341796F1-1DF9-4B1C-A564-91BDEFA43877}, 100
#### PhotometricInterpretationText
Name: System.Photo.PhotometricInterpretationText -- PKEY_Photo_PhotometricInterpretationTextDescription: This is the user-friendly form of System.Photo.PhotometricInterpretation. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {821437D6-9EAB-4765-A589-3B1CBBD22A61}, 100
#### ProgramMode
Name: System.Photo.ProgramMode -- PKEY_Photo_ProgramModeDescription: This is the class of the program used by the camera to set exposure when the 
picture is taken.
Type: UInt32 -- VT_UI4FormatID: {6D217F6D-3F6A-4825-B470-5F03CA2FBE9B}, 100
#### ProgramModeText
Name: System.Photo.ProgramModeText -- PKEY_Photo_ProgramModeTextDescription: This is the user-friendly form of System.Photo.ProgramMode. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {7FE3AA27-2648-42F3-89B0-454E5CB150C3}, 100
#### RelatedSoundFile
Name: System.Photo.RelatedSoundFile -- PKEY_Photo_RelatedSoundFileDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {318A6B45-087F-4DC2-B8CC-05359551FC9E}, 100
#### Saturation
Name: System.Photo.Saturation -- PKEY_Photo_SaturationDescription: This indicates the direction of saturation processing applied by the camera when 
the image was shot.
Type: UInt32 -- VT_UI4FormatID: {49237325-A95A-4F67-B211-816B2D45D2E0}, 100
#### SaturationText
Name: System.Photo.SaturationText -- PKEY_Photo_SaturationTextDescription: This is the user-friendly form of System.Photo.Saturation. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {61478C08-B600-4A84-BBE4-E99C45F0A072}, 100
#### Sharpness
Name: System.Photo.Sharpness -- PKEY_Photo_SharpnessDescription: This indicates the direction of sharpness processing applied by the camera when 
the image was shot.
Type: UInt32 -- VT_UI4FormatID: {FC6976DB-8349-4970-AE97-B3C5316A08F0}, 100
#### SharpnessText
Name: System.Photo.SharpnessText -- PKEY_Photo_SharpnessTextDescription: This is the user-friendly form of System.Photo.Sharpness. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {51EC3F47-DD50-421D-8769-334F50424B1E}, 100
#### ShutterSpeed
Name: System.Photo.ShutterSpeed -- PKEY_Photo_ShutterSpeedDescription: PropertyTagExifShutterSpeed. Calculated from PKEY_Photo_ShutterSpeedNumerator and PKEY_Photo_ShutterSpeedDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37377
#### ShutterSpeedDenominator
Name: System.Photo.ShutterSpeedDenominator -- PKEY_Photo_ShutterSpeedDenominatorDescription: Denominator of PKEY_Photo_ShutterSpeed
Type: Int32 -- VT_I4FormatID: {E13D8975-81C7-4948-AE3F-37CAE11E8FF7}, 100
#### ShutterSpeedNumerator
Name: System.Photo.ShutterSpeedNumerator -- PKEY_Photo_ShutterSpeedNumeratorDescription: Numerator of PKEY_Photo_ShutterSpeed
Type: Int32 -- VT_I4FormatID: {16EA4042-D6F4-4BCA-8349-7C78D30FB333}, 100
#### SubjectDistance
Name: System.Photo.SubjectDistance -- PKEY_Photo_SubjectDistanceDescription: PropertyTagExifSubjectDist. Calculated from PKEY_Photo_SubjectDistanceNumerator and PKEY_Photo_SubjectDistanceDenominator
Type: Double -- VT_R8FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 37382
#### SubjectDistanceDenominator
Name: System.Photo.SubjectDistanceDenominator -- PKEY_Photo_SubjectDistanceDenominatorDescription: Denominator of PKEY_Photo_SubjectDistance
Type: UInt32 -- VT_UI4FormatID: {0C840A88-B043-466D-9766-D4B26DA3FA77}, 100
#### SubjectDistanceNumerator
Name: System.Photo.SubjectDistanceNumerator -- PKEY_Photo_SubjectDistanceNumeratorDescription: Numerator of PKEY_Photo_SubjectDistance
Type: UInt32 -- VT_UI4FormatID: {8AF4961C-F526-43E5-AA81-DB768219178D}, 100
#### TagViewAggregate
Name: System.Photo.TagViewAggregate -- PKEY_Photo_TagViewAggregateDescription: A read-only aggregation of tag-like properties for use in building views.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: {B812F15D-C2D8-4BBF-BACD-79744346113F}, 100
#### TranscodedForSync
Name: System.Photo.TranscodedForSync -- PKEY_Photo_TranscodedForSyncDescription: Type: Boolean -- VT_BOOLFormatID: {9A8EBB75-6458-4E82-BACB-35C0095B03BB}, 100
#### WhiteBalance
Name: System.Photo.WhiteBalance -- PKEY_Photo_WhiteBalanceDescription: This indicates the white balance mode set when the image was shot.
Type: UInt32 -- VT_UI4FormatID: {EE3D3D8A-5381-4CFA-B13B-AAF66B5F4EC9}, 100
#### WhiteBalanceText
Name: System.Photo.WhiteBalanceText -- PKEY_Photo_WhiteBalanceTextDescription: This is the user-friendly form of System.Photo.WhiteBalance. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {6336B95E-C7A7-426D-86FD-7AE3D39C84B4}, 100

