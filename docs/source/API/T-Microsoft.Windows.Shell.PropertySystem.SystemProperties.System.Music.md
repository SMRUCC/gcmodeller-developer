---
title: Music
---

# Music
_namespace: [Microsoft.Windows.Shell.PropertySystem.SystemProperties.System](N-Microsoft.Windows.Shell.PropertySystem.SystemProperties.System.html)_

Music Properties



### Properties

#### AlbumArtist
Name: System.Music.AlbumArtist -- PKEY_Music_AlbumArtistDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 13 (PIDSI_MUSIC_ALBUM_ARTIST)
#### AlbumID
Name: System.Music.AlbumID -- PKEY_Music_AlbumIDDescription: Concatenation of System.Music.AlbumArtist and System.Music.AlbumTitle, suitable for indexing and display.
Used to differentiate albums with the same title from different artists.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 100
#### AlbumTitle
Name: System.Music.AlbumTitle -- PKEY_Music_AlbumTitleDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 4 (PIDSI_MUSIC_ALBUM)
#### Artist
Name: System.Music.Artist -- PKEY_Music_ArtistDescription: 
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 2 (PIDSI_MUSIC_ARTIST)
#### BeatsPerMinute
Name: System.Music.BeatsPerMinute -- PKEY_Music_BeatsPerMinuteDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 35 (PIDSI_MUSIC_BEATS_PER_MINUTE)
#### Composer
Name: System.Music.Composer -- PKEY_Music_ComposerDescription: 
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 19 (PIDMSI_COMPOSER)
#### Conductor
Name: System.Music.Conductor -- PKEY_Music_ConductorDescription: 
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 36 (PIDSI_MUSIC_CONDUCTOR)
#### ContentGroupDescription
Name: System.Music.ContentGroupDescription -- PKEY_Music_ContentGroupDescriptionDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 33 (PIDSI_MUSIC_CONTENT_GROUP_DESCRIPTION)
#### DisplayArtist
Name: System.Music.DisplayArtist -- PKEY_Music_DisplayArtistDescription: This property returns the best representation of Album Artist for a given music file
based upon AlbumArtist, ContributingArtist and compilation info.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {FD122953-FA93-4EF7-92C3-04C946B2F7C8}, 100
#### Genre
Name: System.Music.Genre -- PKEY_Music_GenreDescription: 
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 11 (PIDSI_MUSIC_GENRE)
#### InitialKey
Name: System.Music.InitialKey -- PKEY_Music_InitialKeyDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 34 (PIDSI_MUSIC_INITIAL_KEY)
#### IsCompilation
Name: System.Music.IsCompilation -- PKEY_Music_IsCompilationDescription: Indicates whether the file is part of a compilation.
Type: Boolean -- VT_BOOLFormatID: {C449D5CB-9EA4-4809-82E8-AF9D59DED6D1}, 100
#### Lyrics
Name: System.Music.Lyrics -- PKEY_Music_LyricsDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 12 (PIDSI_MUSIC_LYRICS)
#### Mood
Name: System.Music.Mood -- PKEY_Music_MoodDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 39 (PIDSI_MUSIC_MOOD)
#### PartOfSet
Name: System.Music.PartOfSet -- PKEY_Music_PartOfSetDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 37 (PIDSI_MUSIC_PART_OF_SET)
#### Period
Name: System.Music.Period -- PKEY_Music_PeriodDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 31 (PIDMSI_PERIOD)
#### SynchronizedLyrics
Name: System.Music.SynchronizedLyrics -- PKEY_Music_SynchronizedLyricsDescription: Type: Blob -- VT_BLOBFormatID: {6B223B6A-162E-4AA9-B39F-05D678FC6D77}, 100
#### TrackNumber
Name: System.Music.TrackNumber -- PKEY_Music_TrackNumberDescription: 
Type: UInt32 -- VT_UI4FormatID: (FMTID_MUSIC) {56A3372E-CE9C-11D2-9F0E-006097C686F6}, 7 (PIDSI_MUSIC_TRACK)

