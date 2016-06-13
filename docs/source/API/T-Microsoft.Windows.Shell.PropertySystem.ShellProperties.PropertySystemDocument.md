---
title: PropertySystemDocument
---

# PropertySystemDocument
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.Document Properties



### Properties

#### ByteCount
Name: System.Document.ByteCount -- PKEY_Document_ByteCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 4 (PIDDSI_BYTECOUNT)
#### CharacterCount
Name: System.Document.CharacterCount -- PKEY_Document_CharacterCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 16 (PIDSI_CHARCOUNT)
#### ClientID
Name: System.Document.ClientID -- PKEY_Document_ClientIDDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {276D7BB0-5B34-4FB0-AA4B-158ED12A1809}, 100
#### Contributor
Name: System.Document.Contributor -- PKEY_Document_ContributorDescription: Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {F334115E-DA1B-4509-9B3D-119504DC7ABB}, 100
#### DateCreated
Name: System.Document.DateCreated -- PKEY_Document_DateCreatedDescription: This property is stored in the document, not obtained from the file system.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 12 (PIDSI_CREATE_DTM)
#### DatePrinted
Name: System.Document.DatePrinted -- PKEY_Document_DatePrintedDescription: Legacy name: "DocLastPrinted".
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 11 (PIDSI_LASTPRINTED)
#### DateSaved
Name: System.Document.DateSaved -- PKEY_Document_DateSavedDescription: Legacy name: "DocLastSavedTm".
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 13 (PIDSI_LASTSAVE_DTM)
#### Division
Name: System.Document.Division -- PKEY_Document_DivisionDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {1E005EE6-BF27-428B-B01C-79676ACD2870}, 100
#### DocumentID
Name: System.Document.DocumentID -- PKEY_Document_DocumentIDDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E08805C8-E395-40DF-80D2-54F0D6C43154}, 100
#### HiddenSlideCount
Name: System.Document.HiddenSlideCount -- PKEY_Document_HiddenSlideCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 9 (PIDDSI_HIDDENCOUNT)
#### LastAuthor
Name: System.Document.LastAuthor -- PKEY_Document_LastAuthorDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 8 (PIDSI_LASTAUTHOR)
#### LineCount
Name: System.Document.LineCount -- PKEY_Document_LineCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 5 (PIDDSI_LINECOUNT)
#### Manager
Name: System.Document.Manager -- PKEY_Document_ManagerDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 14 (PIDDSI_MANAGER)
#### MultimediaClipCount
Name: System.Document.MultimediaClipCount -- PKEY_Document_MultimediaClipCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 10 (PIDDSI_MMCLIPCOUNT)
#### NoteCount
Name: System.Document.NoteCount -- PKEY_Document_NoteCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 8 (PIDDSI_NOTECOUNT)
#### PageCount
Name: System.Document.PageCount -- PKEY_Document_PageCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 14 (PIDSI_PAGECOUNT)
#### ParagraphCount
Name: System.Document.ParagraphCount -- PKEY_Document_ParagraphCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 6 (PIDDSI_PARCOUNT)
#### PresentationFormat
Name: System.Document.PresentationFormat -- PKEY_Document_PresentationFormatDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 3 (PIDDSI_PRESFORMAT)
#### RevisionNumber
Name: System.Document.RevisionNumber -- PKEY_Document_RevisionNumberDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 9 (PIDSI_REVNUMBER)
#### Security
Name: System.Document.Security -- PKEY_Document_SecurityDescription: Access control information, from SummaryInfo propset
Type: Int32 -- VT_I4FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 19
#### SlideCount
Name: System.Document.SlideCount -- PKEY_Document_SlideCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 7 (PIDDSI_SLIDECOUNT)
#### Template
Name: System.Document.Template -- PKEY_Document_TemplateDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 7 (PIDSI_TEMPLATE)
#### TotalEditingTime
Name: System.Document.TotalEditingTime -- PKEY_Document_TotalEditingTimeDescription: 100ns units, not milliseconds. VT_FILETIME for IPropertySetStorage handlers (legacy)
Type: UInt64 -- VT_UI8FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 10 (PIDSI_EDITTIME)
#### Version
Name: System.Document.Version -- PKEY_Document_VersionDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 29
#### WordCount
Name: System.Document.WordCount -- PKEY_Document_WordCountDescription: 
Type: Int32 -- VT_I4FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 15 (PIDSI_WORDCOUNT)

