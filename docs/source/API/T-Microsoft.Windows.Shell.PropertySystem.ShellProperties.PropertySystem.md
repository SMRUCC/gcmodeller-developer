---
title: PropertySystem
---

# PropertySystem
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

.System Properties



### Properties

#### AcquisitionID
Name: System.AcquisitionID -- PKEY_AcquisitionIDDescription: Hash to determine acquisition session.
Type: Int32 -- VT_I4FormatID: {65A98875-3C80-40AB-ABBC-EFDAF77DBEE2}, 100
#### ApplicationName
Name: System.ApplicationName -- PKEY_ApplicationNameDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 18 (PIDSI_APPNAME)
#### AppUserModel
System.AppUserModel Properties
#### Audio
System.Audio Properties
#### Author
Name: System.Author -- PKEY_AuthorDescription: 
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 4 (PIDSI_AUTHOR)
#### Calendar
System.Calendar Properties
#### Capacity
Name: System.Capacity -- PKEY_CapacityDescription: The amount of total space in bytes.
Type: UInt64 -- VT_UI8FormatID: (FMTID_Volume) {9B174B35-40FF-11D2-A27E-00C04FC30871}, 3 (PID_VOLUME_CAPACITY) (Filesystem Volume Properties)
#### Category
Name: System.Category -- PKEY_CategoryDescription: Legacy code treats this as VT_LPSTR.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 2 (PIDDSI_CATEGORY)
#### Comment
Name: System.Comment -- PKEY_CommentDescription: Comments.
Type: String -- VT_LPWSTR (For variants: VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 6 (PIDSI_COMMENTS)
#### Communication
System.Communication Properties
#### Company
Name: System.Company -- PKEY_CompanyDescription: The company or publisher.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 15 (PIDDSI_COMPANY)
#### Computer
System.Computer Properties
#### ComputerName
Name: System.ComputerName -- PKEY_ComputerNameDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 5 (PID_COMPUTERNAME)
#### Contact
System.Contact Properties
#### ContainedItems
Name: System.ContainedItems -- PKEY_ContainedItemsDescription: The list of type of items, this item contains. For example, this item contains urls, attachments etc.
This is represented as a vector array of GUIDs where each GUID represents certain type.
Type: Multivalue Guid -- VT_VECTOR | VT_CLSID (For variants: VT_ARRAY | VT_CLSID)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 29
#### ContentStatus
Name: System.ContentStatus -- PKEY_ContentStatusDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 27
#### ContentType
Name: System.ContentType -- PKEY_ContentTypeDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 26
#### Copyright
Name: System.Copyright -- PKEY_CopyrightDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 11 (PIDMSI_COPYRIGHT)
#### DateAccessed
Name: System.DateAccessed -- PKEY_DateAccessedDescription: The time of the last access to the item. The Indexing Service friendly name is 'access'.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 16 (PID_STG_ACCESSTIME)
#### DateAcquired
Name: System.DateAcquired -- PKEY_DateAcquiredDescription: The time the file entered the system via acquisition. This is not the same as System.DateImported.
Examples are when pictures are acquired from a camera, or when music is purchased online.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {2CBAA8F5-D81F-47CA-B17A-F8D822300131}, 100
#### DateArchived
Name: System.DateArchived -- PKEY_DateArchivedDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {43F8D7B7-A444-4F87-9383-52271C9B915C}, 100
#### DateCompleted
Name: System.DateCompleted -- PKEY_DateCompletedDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {72FAB781-ACDA-43E5-B155-B2434F85E678}, 100
#### DateCreated
Name: System.DateCreated -- PKEY_DateCreatedDescription: The date and time the item was created. The Indexing Service friendly name is 'create'.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 15 (PID_STG_CREATETIME)
#### DateImported
Name: System.DateImported -- PKEY_DateImportedDescription: The time the file is imported into a separate database. This is not the same as System.DateAcquired. (Eg, 2003:05:22 13:55:04)
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 18258
#### DateModified
Name: System.DateModified -- PKEY_DateModifiedDescription: The date and time of the last write to the item. The Indexing Service friendly name is 'write'.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 14 (PID_STG_WRITETIME)
#### DescriptionID
Name: System.DescriptionID -- PKEY_DescriptionIDDescription: The contents of a SHDESCRIPTIONID structure as a buffer of bytes.
Type: Buffer -- VT_VECTOR | VT_UI1 (For variants: VT_ARRAY | VT_UI1)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 2 (PID_DESCRIPTIONID)
#### Device
System.Device Properties
#### DeviceInterface
System.DeviceInterface Properties
#### Devices
System.Devices Properties
#### Document
System.Document Properties
#### DRM
System.DRM Properties
#### DueDate
Name: System.DueDate -- PKEY_DueDateDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {3F8472B5-E0AF-4DB2-8071-C53FE76AE7CE}, 100
#### EndDate
Name: System.EndDate -- PKEY_EndDateDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {C75FAA05-96FD-49E7-9CB4-9F601082D553}, 100
#### FileAllocationSize
Name: System.FileAllocationSize -- PKEY_FileAllocationSizeDescription: 
Type: UInt64 -- VT_UI8FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 18 (PID_STG_ALLOCSIZE)
#### FileAttributes
Name: System.FileAttributes -- PKEY_FileAttributesDescription: This is the WIN32_FIND_DATA dwFileAttributes for the file-based item.
Type: UInt32 -- VT_UI4FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 13 (PID_STG_ATTRIBUTES)
#### FileCount
Name: System.FileCount -- PKEY_FileCountDescription: 
Type: UInt64 -- VT_UI8FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 12
#### FileDescription
Name: System.FileDescription -- PKEY_FileDescriptionDescription: This is a user-friendly description of the file.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSFMTID_VERSION) {0CEF7D53-FA64-11D1-A203-0000F81FEDEE}, 3 (PIDVSI_FileDescription)
#### FileExtension
Name: System.FileExtension -- PKEY_FileExtensionDescription: This is the file extension of the file based item, including the leading period. 

If System.FileName is VT_EMPTY, then this property should be too. Otherwise, it should be derived
appropriately by the data source from System.FileName. If System.FileName does not have a file 
extension, this value should be VT_EMPTY.

To obtain the type of any item (including an item that is not a file), use System.ItemType.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" ".txt"
 "\\server\share\mydir\goodnews.doc" ".doc"
 "\\server\share\numbers.xls" ".xls"
 "\\server\share\folder" VT_EMPTY
 "c:\foo\MyFolder" VT_EMPTY
 [desktop] VT_EMPTY
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E4F10A3C-49E6-405D-8288-A23BD4EEAA6C}, 100
#### FileFRN
Name: System.FileFRN -- PKEY_FileFRNDescription: This is the unique file ID, also known as the File Reference Number. For a given file, this is the same value
as is found in the structure variable FILE_ID_BOTH_DIR_INFO.FileId, via GetFileInformationByHandleEx().
Type: UInt64 -- VT_UI8FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 21 (PID_STG_FRN)
#### FileName
Name: System.FileName -- PKEY_FileNameDescription: This is the file name (including extension) of the file.

It is possible that the item might not exist on a filesystem (ie, it may not be opened 
using CreateFile). Nonetheless, if the item is represented as a file from the logical sense 
(and its name follows standard Win32 file-naming syntax), then the data source should emit this property.

If an item is not a file, then the value for this property is VT_EMPTY. See 
System.ItemNameDisplay.

This has the same value as System.ParsingName for items that are provided by the Shell's file folder.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "hello.txt"
 "\\server\share\mydir\goodnews.doc" "goodnews.doc"
 "\\server\share\numbers.xls" "numbers.xls"
 "c:\foo\MyFolder" "MyFolder"
 (email message) VT_EMPTY
 (song on portable device) "song.wma"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {41CF5AE0-F75A-4806-BD87-59C7D9248EB9}, 100
#### FileOwner
Name: System.FileOwner -- PKEY_FileOwnerDescription: This is the owner of the file, according to the file system.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Misc) {9B174B34-40FF-11D2-A27E-00C04FC30871}, 4 (PID_MISC_OWNER)
#### FileVersion
Name: System.FileVersion -- PKEY_FileVersionDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSFMTID_VERSION) {0CEF7D53-FA64-11D1-A203-0000F81FEDEE}, 4 (PIDVSI_FileVersion)
#### FindData
Name: System.FindData -- PKEY_FindDataDescription: WIN32_FIND_DATAW in buffer of bytes.
Type: Buffer -- VT_VECTOR | VT_UI1 (For variants: VT_ARRAY | VT_UI1)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 0 (PID_FINDDATA)
#### FlagColor
Name: System.FlagColor -- PKEY_FlagColorDescription: 
Type: UInt16 -- VT_UI2FormatID: {67DF94DE-0CA7-4D6F-B792-053A3E4F03CF}, 100
#### FlagColorText
Name: System.FlagColorText -- PKEY_FlagColorTextDescription: This is the user-friendly form of System.FlagColor. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {45EAE747-8E2A-40AE-8CBF-CA52ABA6152A}, 100
#### FlagStatus
Name: System.FlagStatus -- PKEY_FlagStatusDescription: Status of Flag. Values: (0=none 1=white 2=Red). cdoPR_FLAG_STATUS
Type: Int32 -- VT_I4FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 12
#### FlagStatusText
Name: System.FlagStatusText -- PKEY_FlagStatusTextDescription: This is the user-friendly form of System.FlagStatus. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {DC54FD2E-189D-4871-AA01-08C2F57A4ABC}, 100
#### FreeSpace
Name: System.FreeSpace -- PKEY_FreeSpaceDescription: The amount of free space in bytes.
Type: UInt64 -- VT_UI8FormatID: (FMTID_Volume) {9B174B35-40FF-11D2-A27E-00C04FC30871}, 2 (PID_VOLUME_FREE) (Filesystem Volume Properties)
#### FullText
Name: System.FullText -- PKEY_FullTextDescription: This PKEY is used to specify search terms that should be applied as broadly as possible,
across all valid properties for the data source(s) being searched. It should not be
emitted from a data source.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {1E3EE840-BC2B-476C-8237-2ACD1A839B22}, 6
#### GPS
System.GPS Properties
#### Identity
System.Identity Properties
#### IdentityProperty
Name: System.Identity -- PKEY_IdentityDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A26F4AFC-7346-4299-BE47-EB1AE613139F}, 100
#### IdentityProvider
System.IdentityProvider Properties
#### Image
System.Image Properties
#### ImageParsingName
Name: System.ImageParsingName -- PKEY_ImageParsingNameDescription: Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D7750EE0-C6A4-48EC-B53E-B87B52E6D073}, 100
#### Importance
Name: System.Importance -- PKEY_ImportanceDescription: Type: Int32 -- VT_I4FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 11
#### ImportanceText
Name: System.ImportanceText -- PKEY_ImportanceTextDescription: This is the user-friendly form of System.Importance. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A3B29791-7713-4E1D-BB40-17DB85F01831}, 100
#### InfoTipText
Name: System.InfoTipText -- PKEY_InfoTipTextDescription: The text (with formatted property values) to show in the infotip.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {C9944A21-A406-48FE-8225-AEC7E24C211B}, 17
#### InternalName
Name: System.InternalName -- PKEY_InternalNameDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSFMTID_VERSION) {0CEF7D53-FA64-11D1-A203-0000F81FEDEE}, 5 (PIDVSI_InternalName)
#### IsAttachment
Name: System.IsAttachment -- PKEY_IsAttachmentDescription: Identifies if this item is an attachment.
Type: Boolean -- VT_BOOLFormatID: {F23F425C-71A1-4FA8-922F-678EA4A60408}, 100
#### IsDefaultNonOwnerSaveLocation
Name: System.IsDefaultNonOwnerSaveLocation -- PKEY_IsDefaultNonOwnerSaveLocationDescription: Identifies the default save location for a library for non-owners of the library
Type: Boolean -- VT_BOOLFormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 5
#### IsDefaultSaveLocation
Name: System.IsDefaultSaveLocation -- PKEY_IsDefaultSaveLocationDescription: Identifies the default save location for a library for the owner of the library
Type: Boolean -- VT_BOOLFormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 3
#### IsDeleted
Name: System.IsDeleted -- PKEY_IsDeletedDescription: Type: Boolean -- VT_BOOLFormatID: {5CDA5FC8-33EE-4FF3-9094-AE7BD8868C4D}, 100
#### IsEncrypted
Name: System.IsEncrypted -- PKEY_IsEncryptedDescription: Is the item encrypted?
Type: Boolean -- VT_BOOLFormatID: {90E5E14E-648B-4826-B2AA-ACAF790E3513}, 10
#### IsFlagged
Name: System.IsFlagged -- PKEY_IsFlaggedDescription: Type: Boolean -- VT_BOOLFormatID: {5DA84765-E3FF-4278-86B0-A27967FBDD03}, 100
#### IsFlaggedComplete
Name: System.IsFlaggedComplete -- PKEY_IsFlaggedCompleteDescription: Type: Boolean -- VT_BOOLFormatID: {A6F360D2-55F9-48DE-B909-620E090A647C}, 100
#### IsIncomplete
Name: System.IsIncomplete -- PKEY_IsIncompleteDescription: Identifies if the message was not completely received for some error condition.
Type: Boolean -- VT_BOOLFormatID: {346C8BD1-2E6A-4C45-89A4-61B78E8E700F}, 100
#### IsLocationSupported
Name: System.IsLocationSupported -- PKEY_IsLocationSupportedDescription: A bool value to know if a location is supported (locally indexable, or remotely indexed).
Type: Boolean -- VT_BOOLFormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 8
#### IsPinnedToNamespaceTree
Name: System.IsPinnedToNameSpaceTree -- PKEY_IsPinnedToNameSpaceTreeDescription: A bool value to know if a shell folder is pinned to the navigation pane
Type: Boolean -- VT_BOOLFormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 2
#### IsRead
Name: System.IsRead -- PKEY_IsReadDescription: Has the item been read?
Type: Boolean -- VT_BOOLFormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 10
#### IsSearchOnlyItem
Name: System.IsSearchOnlyItem -- PKEY_IsSearchOnlyItemDescription: Identifies if a location or a library is search only
Type: Boolean -- VT_BOOLFormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 4
#### IsSendToTarget
Name: System.IsSendToTarget -- PKEY_IsSendToTargetDescription: Provided by certain shell folders. Return TRUE if the folder is a valid Send To target.
Type: Boolean -- VT_BOOLFormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 33
#### IsShared
Name: System.IsShared -- PKEY_IsSharedDescription: Is this item shared? This only checks for ACLs that are not inherited.
Type: Boolean -- VT_BOOLFormatID: {EF884C5B-2BFE-41BB-AAE5-76EEDF4F9902}, 100
#### ItemAuthors
Name: System.ItemAuthors -- PKEY_ItemAuthorsDescription: This is the generic list of authors associated with an item. 

For example, the artist name for a track is the item author.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D0A04F0A-462A-48A4-BB2F-3706E88DBD7D}, 100
#### ItemClassType
Name: System.ItemClassType -- PKEY_ItemClassTypeDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {048658AD-2DB8-41A4-BBB6-AC1EF1207EB1}, 100
#### ItemDate
Name: System.ItemDate -- PKEY_ItemDateDescription: This is the main date for an item. The date of interest. 

For example, for photos this maps to System.Photo.DateTaken.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {F7DB74B4-4287-4103-AFBA-F1B13DCD75CF}, 100
#### ItemFolderNameDisplay
Name: System.ItemFolderNameDisplay -- PKEY_ItemFolderNameDisplayDescription: This is the user-friendly display name of the parent folder of an item.

If System.ItemFolderPathDisplay is VT_EMPTY, then this property should be too. Otherwise, it 
should be derived appropriately by the data source from System.ItemFolderPathDisplay.

If the folder is a file folder, the value will be localized if a localized name is available.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "bar"
 "\\server\share\mydir\goodnews.doc" "mydir"
 "\\server\share\numbers.xls" "share"
 "c:\foo\MyFolder" "foo"
 "/Mailbox Account/Inbox/'Re: Hello!'" "Inbox"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 2 (PID_STG_DIRECTORY)
#### ItemFolderPathDisplay
Name: System.ItemFolderPathDisplay -- PKEY_ItemFolderPathDisplayDescription: This is the user-friendly display path of the parent folder of an item.

If System.ItemPathDisplay is VT_EMPTY, then this property should be too. Otherwise, it should 
be derived appropriately by the data source from System.ItemPathDisplay.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "c:\foo\bar"
 "\\server\share\mydir\goodnews.doc" "\\server\share\mydir"
 "\\server\share\numbers.xls" "\\server\share"
 "c:\foo\MyFolder" "c:\foo"
 "/Mailbox Account/Inbox/'Re: Hello!'" "/Mailbox Account/Inbox"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 6
#### ItemFolderPathDisplayNarrow
Name: System.ItemFolderPathDisplayNarrow -- PKEY_ItemFolderPathDisplayNarrowDescription: This is the user-friendly display path of the parent folder of an item. The format of the string
should be tailored such that the folder name comes first, to optimize for a narrow viewing column.

If the folder is a file folder, the value includes localized names if they are present.

If System.ItemFolderPathDisplay is VT_EMPTY, then this property should be too. Otherwise, it should
be derived appropriately by the data source from System.ItemFolderPathDisplay.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "bar (c:\foo)"
 "\\server\share\mydir\goodnews.doc" "mydir (\\server\share)"
 "\\server\share\numbers.xls" "share (\\server)"
 "c:\foo\MyFolder" "foo (c:\)"
 "/Mailbox Account/Inbox/'Re: Hello!'" "Inbox (/Mailbox Account)"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {DABD30ED-0043-4789-A7F8-D013A4736622}, 100
#### ItemName
Name: System.ItemName -- PKEY_ItemNameDescription: This is the base-name of the System.ItemNameDisplay.

If the item is a file this property
includes the extension in all cases, and will be localized if a localized name is available.

If the item is a message, then the value of this property does not include the forwarding or
reply prefixes (see System.ItemNamePrefix).
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {6B8DA074-3B5C-43BC-886F-0A2CDCE00B6F}, 100
#### ItemNameDisplay
Name: System.ItemNameDisplay -- PKEY_ItemNameDisplayDescription: This is the display name in "most complete" form. This is the best effort unique representation
of the name of an item that makes sense for end users to read. It is the concatentation of
System.ItemNamePrefix and System.ItemName.

If the item is a file this property
includes the extension in all cases, and will be localized if a localized name is available.

There are acceptable cases when System.FileName is not VT_EMPTY, yet the value of this property 
is completely different. Email messages are a key example. If the item is an email message, 
the item name is likely the subject. In that case, the value must be the concatenation of the
System.ItemNamePrefix and System.ItemName. Since the value of System.ItemNamePrefix excludes
any trailing whitespace, the concatenation must include a whitespace when generating System.ItemNameDisplay.

Note that this property is not guaranteed to be unique, but the idea is to promote the most likely
candidate that can be unique and also makes sense for end users. For example, for documents, you
might think about using System.Title as the System.ItemNameDisplay, but in practice the title of
the documents may not be useful or unique enough to be of value as the sole System.ItemNameDisplay. 
Instead, providing the value of System.FileName as the value of System.ItemNameDisplay is a better
candidate. In Windows Mail, the emails are stored in the file system as .eml files and the 
System.FileName for those files are not human-friendly as they contain GUIDs. In this example, 
promoting System.Subject as System.ItemNameDisplay makes more sense.

Compatibility notes:

Shell folder implementations on Vista: use PKEY_ItemNameDisplay for the name column when
you want Explorer to call ISF::GetDisplayNameOf(SHGDN_NORMAL) to get the value of the name. Use
another PKEY (like PKEY_ItemName) when you want Explorer to call either the folder's property store or
ISF2::GetDetailsEx in order to get the value of the name.

Shell folder implementations on XP: the first column needs to be the name column, and Explorer
will call ISF::GetDisplayNameOf to get the value of the name. The PKEY/SCID does not matter.

Example values:

 File: "hello.txt"
 Message: "Re: Let's talk about Tom's argyle socks!"
 Device folder: "song.wma"
 Folder: "Documents"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 10 (PID_STG_NAME)
#### ItemNamePrefix
Name: System.ItemNamePrefix -- PKEY_ItemNamePrefixDescription: This is the prefix of an item, used for email messages.
where the subject begins with "Re:" which is the prefix.

If the item is a file, then the value of this property is VT_EMPTY.

If the item is a message, then the value of this property is the forwarding or reply 
prefixes (including delimiting colon, but no whitespace), or VT_EMPTY if there is no prefix.

Example values:

System.ItemNamePrefix System.ItemName System.ItemNameDisplay
--------------------- ------------------- ----------------------
VT_EMPTY "Great day" "Great day"
"Re:" "Great day" "Re: Great day"
"Fwd: " "Monthly budget" "Fwd: Monthly budget"
VT_EMPTY "accounts.xls" "accounts.xls"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D7313FF1-A77A-401C-8C99-3DBDD68ADD36}, 100
#### ItemParticipants
Name: System.ItemParticipants -- PKEY_ItemParticipantsDescription: This is the generic list of people associated with an item and who contributed 
to the item. 

For example, this is the combination of people in the To list, Cc list and 
sender of an email message.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D4D0AA16-9948-41A4-AA85-D97FF9646993}, 100
#### ItemPathDisplay
Name: System.ItemPathDisplay -- PKEY_ItemPathDisplayDescription: This is the user-friendly display path to the item.

If the item is a file or folder this property
includes the extension in all cases, and will be localized if a localized name is available.

For other items,this is the user-friendly equivalent, assuming the item exists in hierarchical storage.

Unlike System.ItemUrl, this property value does not include the URL scheme.

To parse an item path, use System.ItemUrl or System.ParsingPath. To reference shell 
namespace items using shell APIs, use System.ParsingPath.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "c:\foo\bar\hello.txt"
 "\\server\share\mydir\goodnews.doc" "\\server\share\mydir\goodnews.doc"
 "\\server\share\numbers.xls" "\\server\share\numbers.xls"
 "c:\foo\MyFolder" "c:\foo\MyFolder"
 "/Mailbox Account/Inbox/'Re: Hello!'" "/Mailbox Account/Inbox/'Re: Hello!'"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 7
#### ItemPathDisplayNarrow
Name: System.ItemPathDisplayNarrow -- PKEY_ItemPathDisplayNarrowDescription: This is the user-friendly display path to the item. The format of the string should be 
tailored such that the name comes first, to optimize for a narrow viewing column.

If the item is a file, the value excludes the file extension, and includes localized names if they are present.
If the item is a message, the value includes the System.ItemNamePrefix.

To parse an item path, use System.ItemUrl or System.ParsingPath.

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "hello (c:\foo\bar)"
 "\\server\share\mydir\goodnews.doc" "goodnews (\\server\share\mydir)"
 "\\server\share\folder" "folder (\\server\share)"
 "c:\foo\MyFolder" "MyFolder (c:\foo)"
 "/Mailbox Account/Inbox/'Re: Hello!'" "Re: Hello! (/Mailbox Account/Inbox)"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 8
#### ItemType
Name: System.ItemType -- PKEY_ItemTypeDescription: This is the canonical type of the item and is intended to be programmatically
parsed.

If there is no canonical type, the value is VT_EMPTY.

If the item is a file (ie, System.FileName is not VT_EMPTY), the value is the same as
System.FileExtension.

Use System.ItemTypeText when you want to display the type to end users in a view. (If
 the item is a file, passing the System.ItemType value to PSFormatForDisplay will
 result in the same value as System.ItemTypeText.)

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" ".txt"
 "\\server\share\mydir\goodnews.doc" ".doc"
 "\\server\share\folder" "Directory"
 "c:\foo\MyFolder" "Directory"
 [desktop] "Folder"
 "/Mailbox Account/Inbox/'Re: Hello!'" "MAPI/IPM.Message"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 11
#### ItemTypeText
Name: System.ItemTypeText -- PKEY_ItemTypeTextDescription: This is the user friendly type name of the item. This is not intended to be
programmatically parsed.

If System.ItemType is VT_EMPTY, the value of this property is also VT_EMPTY.

If the item is a file, the value of this property is the same as if you passed the 
file's System.ItemType value to PSFormatForDisplay.

This property should not be confused with System.Kind, where System.Kind is a high-level
user friendly kind name. For example, for a document, System.Kind = "Document" and 
System.Item.Type = ".doc" and System.Item.TypeText = "Microsoft Word Document"

Example values:

 If the path is... The property value is...
 ----------------- ------------------------
 "c:\foo\bar\hello.txt" "Text File"
 "\\server\share\mydir\goodnews.doc" "Microsoft Word Document"
 "\\server\share\folder" "File Folder"
 "c:\foo\MyFolder" "File Folder"
 "/Mailbox Account/Inbox/'Re: Hello!'" "Outlook E-Mail Message"
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 4 (PID_STG_STORAGETYPE)
#### ItemUrl
Name: System.ItemUrl -- PKEY_ItemUrlDescription: This always represents a well formed URL that points to the item. 

To reference shell namespace items using shell APIs, use System.ParsingPath.

Example values:

 Files: "file:///c:/foo/bar/hello.txt"
 "csc://{GUID}/..."
 Messages: "mapi://..."
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Query) {49691C90-7E17-101A-A91C-08002B2ECDA9}, 9 (DISPID_QUERY_VIRTUALPATH)
#### Journal
System.Journal Properties
#### Keywords
Name: System.Keywords -- PKEY_KeywordsDescription: The keywords for the item. Also referred to as tags.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 5 (PIDSI_KEYWORDS)
#### Kind
Name: System.Kind -- PKEY_KindDescription: System.Kind is used to map extensions to various .Search folders.
Extensions are mapped to Kinds at HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Explorer\KindMap
The list of kinds is not extensible.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {1E3EE840-BC2B-476C-8237-2ACD1A839B22}, 3
#### KindText
Name: System.KindText -- PKEY_KindTextDescription: This is the user-friendly form of System.Kind. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {F04BEF95-C585-4197-A2B7-DF46FDC9EE6D}, 100
#### Language
Name: System.Language -- PKEY_LanguageDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_DocumentSummaryInformation) {D5CDD502-2E9C-101B-9397-08002B2CF9AE}, 28
#### LayoutPattern
System.LayoutPattern Properties
#### Link
System.Link Properties
#### Media
System.Media Properties
#### Message
System.Message Properties
#### MileageInformation
Name: System.MileageInformation -- PKEY_MileageInformationDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {FDF84370-031A-4ADD-9E91-0D775F1C6605}, 100
#### MIMEType
Name: System.MIMEType -- PKEY_MIMETypeDescription: The MIME type. Eg, for EML files: 'message/rfc822'.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {0B63E350-9CCC-11D0-BCDB-00805FCCCE04}, 5
#### Music
System.Music Properties
#### NamespaceClsid
Name: System.NamespaceCLSID -- PKEY_NamespaceCLSIDDescription: The CLSID of the name space extension for an item, the object that implements IShellFolder for this item
Type: Guid -- VT_CLSIDFormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 6
#### Note
System.Note Properties
#### Null
Name: System.Null -- PKEY_NullDescription: Type: Null -- VT_NULLFormatID: {00000000-0000-0000-0000-000000000000}, 0
#### OfflineAvailability
Name: System.OfflineAvailability -- PKEY_OfflineAvailabilityDescription: Type: UInt32 -- VT_UI4FormatID: {A94688B6-7D9F-4570-A648-E3DFC0AB2B3F}, 100
#### OfflineStatus
Name: System.OfflineStatus -- PKEY_OfflineStatusDescription: Type: UInt32 -- VT_UI4FormatID: {6D24888F-4718-4BDA-AFED-EA0FB4386CD8}, 100
#### OriginalFileName
Name: System.OriginalFileName -- PKEY_OriginalFileNameDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSFMTID_VERSION) {0CEF7D53-FA64-11D1-A203-0000F81FEDEE}, 6
#### OwnerSid
Name: System.OwnerSID -- PKEY_OwnerSIDDescription: SID of the user that owns the library.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {5D76B67F-9B3D-44BB-B6AE-25DA4F638A67}, 6
#### ParentalRating
Name: System.ParentalRating -- PKEY_ParentalRatingDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 21 (PIDMSI_PARENTAL_RATING)
#### ParentalRatingReason
Name: System.ParentalRatingReason -- PKEY_ParentalRatingReasonDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {10984E0A-F9F2-4321-B7EF-BAF195AF4319}, 100
#### ParentalRatingsOrganization
Name: System.ParentalRatingsOrganization -- PKEY_ParentalRatingsOrganizationDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A7FE0840-1344-46F0-8D37-52ED712A4BF9}, 100
#### ParsingBindContext
Name: System.ParsingBindContext -- PKEY_ParsingBindContextDescription: used to get the IBindCtx for an item for parsing
Type: Any -- VT_NULL Legacy code may treat this as VT_UNKNOWN.FormatID: {DFB9A04D-362F-4CA3-B30B-0254B17B5B84}, 100
#### ParsingName
Name: System.ParsingName -- PKEY_ParsingNameDescription: The shell namespace name of an item relative to a parent folder. This name may be passed to 
IShellFolder::ParseDisplayName() of the parent shell folder.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 24
#### ParsingPath
Name: System.ParsingPath -- PKEY_ParsingPathDescription: This is the shell namespace path to the item. This path may be passed to 
SHParseDisplayName to parse the path to the correct shell folder.

If the item is a file, the value is identical to System.ItemPathDisplay.

If the item cannot be accessed through the shell namespace, this value is VT_EMPTY.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 30
#### PerceivedType
Name: System.PerceivedType -- PKEY_PerceivedTypeDescription: The perceived type of a shell item, based upon its canonical type.
Type: Int32 -- VT_I4FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 9
#### PercentFull
Name: System.PercentFull -- PKEY_PercentFullDescription: The amount filled as a percentage, multiplied by 100 (ie, the valid range is 0 through 100).
Type: UInt32 -- VT_UI4FormatID: (FMTID_Volume) {9B174B35-40FF-11D2-A27E-00C04FC30871}, 5 (Filesystem Volume Properties)
#### Photo
System.Photo Properties
#### Priority
Name: System.Priority -- PKEY_PriorityDescription: 
Type: UInt16 -- VT_UI2FormatID: {9C1FCF74-2D97-41BA-B4AE-CB2E3661A6E4}, 5
#### PriorityText
Name: System.PriorityText -- PKEY_PriorityTextDescription: This is the user-friendly form of System.Priority. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D98BE98B-B86B-4095-BF52-9D23B2E0A752}, 100
#### Project
Name: System.Project -- PKEY_ProjectDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {39A7F922-477C-48DE-8BC8-B28441E342E3}, 100
#### PropGroup
System.PropGroup Properties
#### PropList
System.PropList Properties
#### ProviderItemID
Name: System.ProviderItemID -- PKEY_ProviderItemIDDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {F21D9941-81F0-471A-ADEE-4E74B49217ED}, 100
#### Rating
Name: System.Rating -- PKEY_RatingDescription: Indicates the users preference rating of an item on a scale of 1-99 (1-12 = One Star, 
13-37 = Two Stars, 38-62 = Three Stars, 63-87 = Four Stars, 88-99 = Five Stars).
Type: UInt32 -- VT_UI4FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 9 (PIDMSI_RATING)
#### RatingText
Name: System.RatingText -- PKEY_RatingTextDescription: This is the user-friendly form of System.Rating. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {90197CA7-FD8F-4E8C-9DA3-B57E1E609295}, 100
#### RecordedTV
System.RecordedTV Properties
#### Search
System.Search Properties
#### Sensitivity
Name: System.Sensitivity -- PKEY_SensitivityDescription: 
Type: UInt16 -- VT_UI2FormatID: {F8D3F6AC-4874-42CB-BE59-AB454B30716A}, 100
#### SensitivityText
Name: System.SensitivityText -- PKEY_SensitivityTextDescription: This is the user-friendly form of System.Sensitivity. Not intended to be parsed 
programmatically.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D0C7F054-3F72-4725-8527-129A577CB269}, 100
#### SFGAOFlags
Name: System.SFGAOFlags -- PKEY_SFGAOFlagsDescription: IShellFolder::GetAttributesOf flags, with SFGAO_PKEYSFGAOMASK attributes masked out.
Type: UInt32 -- VT_UI4FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 25
#### SharedWith
Name: System.SharedWith -- PKEY_SharedWithDescription: Who is the item shared with?
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {EF884C5B-2BFE-41BB-AAE5-76EEDF4F9902}, 200
#### ShareUserRating
Name: System.ShareUserRating -- PKEY_ShareUserRatingDescription: 
Type: UInt32 -- VT_UI4FormatID: (PSGUID_MEDIAFILESUMMARYINFORMATION) {64440492-4C8B-11D1-8B70-080036B11A03}, 12 (PIDMSI_SHARE_USER_RATING)
#### SharingStatus
Name: System.SharingStatus -- PKEY_SharingStatusDescription: What is the item's sharing status (not shared, shared, everyone (homegroup or everyone), or private)?
Type: UInt32 -- VT_UI4FormatID: {EF884C5B-2BFE-41BB-AAE5-76EEDF4F9902}, 300
#### Shell
System.Shell Properties
#### SimpleRating
Name: System.SimpleRating -- PKEY_SimpleRatingDescription: Indicates the users preference rating of an item on a scale of 0-5 (0=unrated, 1=One Star, 2=Two Stars, 3=Three Stars,
4=Four Stars, 5=Five Stars)
Type: UInt32 -- VT_UI4FormatID: {A09F084E-AD41-489F-8076-AA5BE3082BCA}, 100
#### Size
Name: System.Size -- PKEY_SizeDescription: 
Type: UInt64 -- VT_UI8FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 12 (PID_STG_SIZE)
#### Software
System.Software Properties
#### SoftwareUsed
Name: System.SoftwareUsed -- PKEY_SoftwareUsedDescription: PropertyTagSoftwareUsed
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_ImageProperties) {14B81DA1-0135-4D31-96D9-6CBFC9671A99}, 305
#### SourceItem
Name: System.SourceItem -- PKEY_SourceItemDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {668CDFA5-7A1B-4323-AE4B-E527393A1D81}, 100
#### StartDate
Name: System.StartDate -- PKEY_StartDateDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {48FD6EC8-8A12-4CDF-A03E-4EC5A511EDDE}, 100
#### Status
Name: System.Status -- PKEY_StatusDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_IntSite) {000214A1-0000-0000-C000-000000000046}, 9
#### Subject
Name: System.Subject -- PKEY_SubjectDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 3 (PIDSI_SUBJECT)
#### Sync
System.Sync Properties
#### Task
System.Task Properties
#### Thumbnail
Name: System.Thumbnail -- PKEY_ThumbnailDescription: A data that represents the thumbnail in VT_CF format.
Type: Clipboard -- VT_CFFormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 17 (PIDSI_THUMBNAIL)
#### ThumbnailCacheId
Name: System.ThumbnailCacheId -- PKEY_ThumbnailCacheIdDescription: Unique value that can be used as a key to cache thumbnails. The value changes when the name, volume, or data modified 
of an item changes.
Type: UInt64 -- VT_UI8FormatID: {446D16B1-8DAD-4870-A748-402EA43D788C}, 100
#### ThumbnailStream
Name: System.ThumbnailStream -- PKEY_ThumbnailStreamDescription: Data that represents the thumbnail in VT_STREAM format that GDI+/WindowsCodecs supports (jpg, png, etc).
Type: Stream -- VT_STREAMFormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 27
#### Title
Name: System.Title -- PKEY_TitleDescription: Title of item.
Type: String -- VT_LPWSTR (For variants: VT_BSTR) Legacy code may treat this as VT_LPSTR.FormatID: (FMTID_SummaryInformation) {F29F85E0-4FF9-1068-AB91-08002B27B3D9}, 2 (PIDSI_TITLE)
#### TotalFileSize
Name: System.TotalFileSize -- PKEY_TotalFileSizeDescription: 
Type: UInt64 -- VT_UI8FormatID: (FMTID_ShellDetails) {28636AA6-953D-11D2-B5D6-00C04FD918D0}, 14
#### Trademarks
Name: System.Trademarks -- PKEY_TrademarksDescription: 
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSFMTID_VERSION) {0CEF7D53-FA64-11D1-A203-0000F81FEDEE}, 9 (PIDVSI_Trademarks)
#### Video
System.Video Properties
#### Volume
System.Volume Properties

