---
title: PropertySystemGPS
---

# PropertySystemGPS
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.GPS Properties



### Properties

#### Altitude
Name: System.GPS.Altitude -- PKEY_GPS_AltitudeDescription: Indicates the altitude based on the reference in PKEY_GPS_AltitudeRef. Calculated from PKEY_GPS_AltitudeNumerator and 
PKEY_GPS_AltitudeDenominator
Type: Double -- VT_R8FormatID: {827EDB4F-5B73-44A7-891D-FDFFABEA35CA}, 100
#### AltitudeDenominator
Name: System.GPS.AltitudeDenominator -- PKEY_GPS_AltitudeDenominatorDescription: Denominator of PKEY_GPS_Altitude
Type: UInt32 -- VT_UI4FormatID: {78342DCB-E358-4145-AE9A-6BFE4E0F9F51}, 100
#### AltitudeNumerator
Name: System.GPS.AltitudeNumerator -- PKEY_GPS_AltitudeNumeratorDescription: Numerator of PKEY_GPS_Altitude
Type: UInt32 -- VT_UI4FormatID: {2DAD1EB7-816D-40D3-9EC3-C9773BE2AADE}, 100
#### AltitudeRef
Name: System.GPS.AltitudeRef -- PKEY_GPS_AltitudeRefDescription: Indicates the reference for the altitude property. (eg: above sea level, below sea level, absolute value)
Type: Byte -- VT_UI1FormatID: {46AC629D-75EA-4515-867F-6DC4321C5844}, 100
#### AreaInformation
Name: System.GPS.AreaInformation -- PKEY_GPS_AreaInformationDescription: Represents the name of the GPS area
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {972E333E-AC7E-49F1-8ADF-A70D07A9BCAB}, 100
#### Date
Name: System.GPS.Date -- PKEY_GPS_DateDescription: Date and time of the GPS record
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {3602C812-0F3B-45F0-85AD-603468D69423}, 100
#### DestinationBearing
Name: System.GPS.DestBearing -- PKEY_GPS_DestBearingDescription: Indicates the bearing to the destination point. Calculated from PKEY_GPS_DestBearingNumerator and 
PKEY_GPS_DestBearingDenominator.
Type: Double -- VT_R8FormatID: {C66D4B3C-E888-47CC-B99F-9DCA3EE34DEA}, 100
#### DestinationBearingDenominator
Name: System.GPS.DestBearingDenominator -- PKEY_GPS_DestBearingDenominatorDescription: Denominator of PKEY_GPS_DestBearing
Type: UInt32 -- VT_UI4FormatID: {7ABCF4F8-7C3F-4988-AC91-8D2C2E97ECA5}, 100
#### DestinationBearingNumerator
Name: System.GPS.DestBearingNumerator -- PKEY_GPS_DestBearingNumeratorDescription: Numerator of PKEY_GPS_DestBearing
Type: UInt32 -- VT_UI4FormatID: {BA3B1DA9-86EE-4B5D-A2A4-A271A429F0CF}, 100
#### DestinationBearingRef
Name: System.GPS.DestBearingRef -- PKEY_GPS_DestBearingRefDescription: Indicates the reference used for the giving the bearing to the destination point. (eg: true direction, magnetic direction)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {9AB84393-2A0F-4B75-BB22-7279786977CB}, 100
#### DestinationDistance
Name: System.GPS.DestDistance -- PKEY_GPS_DestDistanceDescription: Indicates the distance to the destination point. Calculated from PKEY_GPS_DestDistanceNumerator and 
PKEY_GPS_DestDistanceDenominator.
Type: Double -- VT_R8FormatID: {A93EAE04-6804-4F24-AC81-09B266452118}, 100
#### DestinationDistanceDenominator
Name: System.GPS.DestDistanceDenominator -- PKEY_GPS_DestDistanceDenominatorDescription: Denominator of PKEY_GPS_DestDistance
Type: UInt32 -- VT_UI4FormatID: {9BC2C99B-AC71-4127-9D1C-2596D0D7DCB7}, 100
#### DestinationDistanceNumerator
Name: System.GPS.DestDistanceNumerator -- PKEY_GPS_DestDistanceNumeratorDescription: Numerator of PKEY_GPS_DestDistance
Type: UInt32 -- VT_UI4FormatID: {2BDA47DA-08C6-4FE1-80BC-A72FC517C5D0}, 100
#### DestinationDistanceRef
Name: System.GPS.DestDistanceRef -- PKEY_GPS_DestDistanceRefDescription: Indicates the unit used to express the distance to the destination. (eg: kilometers, miles, knots)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {ED4DF2D3-8695-450B-856F-F5C1C53ACB66}, 100
#### DestinationLatitude
Name: System.GPS.DestLatitude -- PKEY_GPS_DestLatitudeDescription: Indicates the latitude of the destination point. This is an array of three values. Index 0 is the degrees, index 1 
is the minutes, index 2 is the seconds. Each is calculated from the values in PKEY_GPS_DestLatitudeNumerator and 
PKEY_GPS_DestLatitudeDenominator.
Type: Multivalue Double -- VT_VECTOR | VT_R8 (For variants: VT_ARRAY | VT_R8)FormatID: {9D1D7CC5-5C39-451C-86B3-928E2D18CC47}, 100
#### DestinationLatitudeDenominator
Name: System.GPS.DestLatitudeDenominator -- PKEY_GPS_DestLatitudeDenominatorDescription: Denominator of PKEY_GPS_DestLatitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {3A372292-7FCA-49A7-99D5-E47BB2D4E7AB}, 100
#### DestinationLatitudeNumerator
Name: System.GPS.DestLatitudeNumerator -- PKEY_GPS_DestLatitudeNumeratorDescription: Numerator of PKEY_GPS_DestLatitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {ECF4B6F6-D5A6-433C-BB92-4076650FC890}, 100
#### DestinationLatitudeRef
Name: System.GPS.DestLatitudeRef -- PKEY_GPS_DestLatitudeRefDescription: Indicates whether the latitude destination point is north or south latitude
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {CEA820B9-CE61-4885-A128-005D9087C192}, 100
#### DestinationLongitude
Name: System.GPS.DestLongitude -- PKEY_GPS_DestLongitudeDescription: Indicates the latitude of the destination point. This is an array of three values. Index 0 is the degrees, index 1 
is the minutes, index 2 is the seconds. Each is calculated from the values in PKEY_GPS_DestLongitudeNumerator and 
PKEY_GPS_DestLongitudeDenominator.
Type: Multivalue Double -- VT_VECTOR | VT_R8 (For variants: VT_ARRAY | VT_R8)FormatID: {47A96261-CB4C-4807-8AD3-40B9D9DBC6BC}, 100
#### DestinationLongitudeDenominator
Name: System.GPS.DestLongitudeDenominator -- PKEY_GPS_DestLongitudeDenominatorDescription: Denominator of PKEY_GPS_DestLongitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {425D69E5-48AD-4900-8D80-6EB6B8D0AC86}, 100
#### DestinationLongitudeNumerator
Name: System.GPS.DestLongitudeNumerator -- PKEY_GPS_DestLongitudeNumeratorDescription: Numerator of PKEY_GPS_DestLongitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {A3250282-FB6D-48D5-9A89-DBCACE75CCCF}, 100
#### DestinationLongitudeRef
Name: System.GPS.DestLongitudeRef -- PKEY_GPS_DestLongitudeRefDescription: Indicates whether the longitude destination point is east or west longitude
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {182C1EA6-7C1C-4083-AB4B-AC6C9F4ED128}, 100
#### Differential
Name: System.GPS.Differential -- PKEY_GPS_DifferentialDescription: Indicates whether differential correction was applied to the GPS receiver
Type: UInt16 -- VT_UI2FormatID: {AAF4EE25-BD3B-4DD7-BFC4-47F77BB00F6D}, 100
#### DOP
Name: System.GPS.DOP -- PKEY_GPS_DOPDescription: Indicates the GPS DOP (data degree of precision). Calculated from PKEY_GPS_DOPNumerator and PKEY_GPS_DOPDenominator
Type: Double -- VT_R8FormatID: {0CF8FB02-1837-42F1-A697-A7017AA289B9}, 100
#### DOPDenominator
Name: System.GPS.DOPDenominator -- PKEY_GPS_DOPDenominatorDescription: Denominator of PKEY_GPS_DOP
Type: UInt32 -- VT_UI4FormatID: {A0BE94C5-50BA-487B-BD35-0654BE8881ED}, 100
#### DOPNumerator
Name: System.GPS.DOPNumerator -- PKEY_GPS_DOPNumeratorDescription: Numerator of PKEY_GPS_DOP
Type: UInt32 -- VT_UI4FormatID: {47166B16-364F-4AA0-9F31-E2AB3DF449C3}, 100
#### ImageDirection
Name: System.GPS.ImgDirection -- PKEY_GPS_ImgDirectionDescription: Indicates direction of the image when it was captured. Calculated from PKEY_GPS_ImgDirectionNumerator and 
PKEY_GPS_ImgDirectionDenominator.
Type: Double -- VT_R8FormatID: {16473C91-D017-4ED9-BA4D-B6BAA55DBCF8}, 100
#### ImageDirectionDenominator
Name: System.GPS.ImgDirectionDenominator -- PKEY_GPS_ImgDirectionDenominatorDescription: Denominator of PKEY_GPS_ImgDirection
Type: UInt32 -- VT_UI4FormatID: {10B24595-41A2-4E20-93C2-5761C1395F32}, 100
#### ImageDirectionNumerator
Name: System.GPS.ImgDirectionNumerator -- PKEY_GPS_ImgDirectionNumeratorDescription: Numerator of PKEY_GPS_ImgDirection
Type: UInt32 -- VT_UI4FormatID: {DC5877C7-225F-45F7-BAC7-E81334B6130A}, 100
#### ImageDirectionRef
Name: System.GPS.ImgDirectionRef -- PKEY_GPS_ImgDirectionRefDescription: Indicates reference for giving the direction of the image when it was captured. (eg: true direction, magnetic direction)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A4AAA5B7-1AD0-445F-811A-0F8F6E67F6B5}, 100
#### Latitude
Name: System.GPS.Latitude -- PKEY_GPS_LatitudeDescription: Indicates the latitude. This is an array of three values. Index 0 is the degrees, index 1 is the minutes, index 2 
is the seconds. Each is calculated from the values in PKEY_GPS_LatitudeNumerator and PKEY_GPS_LatitudeDenominator.
Type: Multivalue Double -- VT_VECTOR | VT_R8 (For variants: VT_ARRAY | VT_R8)FormatID: {8727CFFF-4868-4EC6-AD5B-81B98521D1AB}, 100
#### LatitudeDenominator
Name: System.GPS.LatitudeDenominator -- PKEY_GPS_LatitudeDenominatorDescription: Denominator of PKEY_GPS_Latitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {16E634EE-2BFF-497B-BD8A-4341AD39EEB9}, 100
#### LatitudeNumerator
Name: System.GPS.LatitudeNumerator -- PKEY_GPS_LatitudeNumeratorDescription: Numerator of PKEY_GPS_Latitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {7DDAAAD1-CCC8-41AE-B750-B2CB8031AEA2}, 100
#### LatitudeRef
Name: System.GPS.LatitudeRef -- PKEY_GPS_LatitudeRefDescription: Indicates whether latitude is north or south latitude 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {029C0252-5B86-46C7-ACA0-2769FFC8E3D4}, 100
#### Longitude
Name: System.GPS.Longitude -- PKEY_GPS_LongitudeDescription: Indicates the longitude. This is an array of three values. Index 0 is the degrees, index 1 is the minutes, index 2 
is the seconds. Each is calculated from the values in PKEY_GPS_LongitudeNumerator and PKEY_GPS_LongitudeDenominator.
Type: Multivalue Double -- VT_VECTOR | VT_R8 (For variants: VT_ARRAY | VT_R8)FormatID: {C4C4DBB2-B593-466B-BBDA-D03D27D5E43A}, 100
#### LongitudeDenominator
Name: System.GPS.LongitudeDenominator -- PKEY_GPS_LongitudeDenominatorDescription: Denominator of PKEY_GPS_Longitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {BE6E176C-4534-4D2C-ACE5-31DEDAC1606B}, 100
#### LongitudeNumerator
Name: System.GPS.LongitudeNumerator -- PKEY_GPS_LongitudeNumeratorDescription: Numerator of PKEY_GPS_Longitude
Type: Multivalue UInt32 -- VT_VECTOR | VT_UI4 (For variants: VT_ARRAY | VT_UI4)FormatID: {02B0F689-A914-4E45-821D-1DDA452ED2C4}, 100
#### LongitudeRef
Name: System.GPS.LongitudeRef -- PKEY_GPS_LongitudeRefDescription: Indicates whether longitude is east or west longitude
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {33DCF22B-28D5-464C-8035-1EE9EFD25278}, 100
#### MapDatum
Name: System.GPS.MapDatum -- PKEY_GPS_MapDatumDescription: Indicates the geodetic survey data used by the GPS receiver
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {2CA2DAE6-EDDC-407D-BEF1-773942ABFA95}, 100
#### MeasureMode
Name: System.GPS.MeasureMode -- PKEY_GPS_MeasureModeDescription: Indicates the GPS measurement mode. (eg: 2-dimensional, 3-dimensional)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A015ED5D-AAEA-4D58-8A86-3C586920EA0B}, 100
#### ProcessingMethod
Name: System.GPS.ProcessingMethod -- PKEY_GPS_ProcessingMethodDescription: Indicates the name of the method used for location finding
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {59D49E61-840F-4AA9-A939-E2099B7F6399}, 100
#### Satellites
Name: System.GPS.Satellites -- PKEY_GPS_SatellitesDescription: Indicates the GPS satellites used for measurements
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {467EE575-1F25-4557-AD4E-B8B58B0D9C15}, 100
#### Speed
Name: System.GPS.Speed -- PKEY_GPS_SpeedDescription: Indicates the speed of the GPS receiver movement. Calculated from PKEY_GPS_SpeedNumerator and 
PKEY_GPS_SpeedDenominator.
Type: Double -- VT_R8FormatID: {DA5D0862-6E76-4E1B-BABD-70021BD25494}, 100
#### SpeedDenominator
Name: System.GPS.SpeedDenominator -- PKEY_GPS_SpeedDenominatorDescription: Denominator of PKEY_GPS_Speed
Type: UInt32 -- VT_UI4FormatID: {7D122D5A-AE5E-4335-8841-D71E7CE72F53}, 100
#### SpeedNumerator
Name: System.GPS.SpeedNumerator -- PKEY_GPS_SpeedNumeratorDescription: Numerator of PKEY_GPS_Speed
Type: UInt32 -- VT_UI4FormatID: {ACC9CE3D-C213-4942-8B48-6D0820F21C6D}, 100
#### SpeedRef
Name: System.GPS.SpeedRef -- PKEY_GPS_SpeedRefDescription: Indicates the unit used to express the speed of the GPS receiver movement. (eg: kilometers per hour, 
miles per hour, knots).
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {ECF7F4C9-544F-4D6D-9D98-8AD79ADAF453}, 100
#### Status
Name: System.GPS.Status -- PKEY_GPS_StatusDescription: Indicates the status of the GPS receiver when the image was recorded. (eg: measurement in progress, 
measurement interoperability).
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {125491F4-818F-46B2-91B5-D537753617B2}, 100
#### Track
Name: System.GPS.Track -- PKEY_GPS_TrackDescription: Indicates the direction of the GPS receiver movement. Calculated from PKEY_GPS_TrackNumerator and 
PKEY_GPS_TrackDenominator.
Type: Double -- VT_R8FormatID: {76C09943-7C33-49E3-9E7E-CDBA872CFADA}, 100
#### TrackDenominator
Name: System.GPS.TrackDenominator -- PKEY_GPS_TrackDenominatorDescription: Denominator of PKEY_GPS_Track
Type: UInt32 -- VT_UI4FormatID: {C8D1920C-01F6-40C0-AC86-2F3A4AD00770}, 100
#### TrackNumerator
Name: System.GPS.TrackNumerator -- PKEY_GPS_TrackNumeratorDescription: Numerator of PKEY_GPS_Track
Type: UInt32 -- VT_UI4FormatID: {702926F4-44A6-43E1-AE71-45627116893B}, 100
#### TrackRef
Name: System.GPS.TrackRef -- PKEY_GPS_TrackRefDescription: Indicates reference for the direction of the GPS receiver movement. (eg: true direction, magnetic direction)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {35DBE6FE-44C3-4400-AAAE-D2C799C407E8}, 100
#### VersionID
Name: System.GPS.VersionID -- PKEY_GPS_VersionIDDescription: Indicates the version of the GPS information
Type: Buffer -- VT_VECTOR | VT_UI1 (For variants: VT_ARRAY | VT_UI1)FormatID: {22704DA4-C6B2-4A99-8E56-F16DF8C92599}, 100

