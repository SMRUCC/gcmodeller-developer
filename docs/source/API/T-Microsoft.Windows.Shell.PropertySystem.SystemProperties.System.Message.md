---
title: Message
---

# Message
_namespace: [Microsoft.Windows.Shell.PropertySystem.SystemProperties.System](N-Microsoft.Windows.Shell.PropertySystem.SystemProperties.System.html)_

Message Properties



### Properties

#### AttachmentContents
Name: System.Message.AttachmentContents -- PKEY_Message_AttachmentContentsDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {3143BF7C-80A8-4854-8880-E2E40189BDD0}, 100
#### AttachmentNames
Name: System.Message.AttachmentNames -- PKEY_Message_AttachmentNamesDescription: The names of the attachments in a message
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 21
#### BccAddress
Name: System.Message.BccAddress -- PKEY_Message_BccAddressDescription: Addresses in Bcc: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 2
#### BccName
Name: System.Message.BccName -- PKEY_Message_BccNameDescription: person names in Bcc: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 3
#### CcAddress
Name: System.Message.CcAddress -- PKEY_Message_CcAddressDescription: Addresses in Cc: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 4
#### CcName
Name: System.Message.CcName -- PKEY_Message_CcNameDescription: person names in Cc: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 5
#### ConversationID
Name: System.Message.ConversationID -- PKEY_Message_ConversationIDDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {DC8F80BD-AF1E-4289-85B6-3DFC1B493992}, 100
#### ConversationIndex
Name: System.Message.ConversationIndex -- PKEY_Message_ConversationIndexDescription: 
Type: Buffer -- VT_VECTOR | VT_UI1 (For variants: VT_ARRAY | VT_UI1)FormatID: {DC8F80BD-AF1E-4289-85B6-3DFC1B493992}, 101
#### DateReceived
Name: System.Message.DateReceived -- PKEY_Message_DateReceivedDescription: Date and Time communication was received
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 20
#### DateSent
Name: System.Message.DateSent -- PKEY_Message_DateSentDescription: Date and Time communication was sent
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 19
#### Flags
Name: System.Message.Flags -- PKEY_Message_FlagsDescription: These are flags associated with email messages to know if a read receipt is pending, etc.
The values stored here by Outlook are defined for PR_MESSAGE_FLAGS on MSDN. 
Type: Int32 -- VT_I4FormatID: {A82D9EE7-CA67-4312-965E-226BCEA85023}, 100
#### FromAddress
Name: System.Message.FromAddress -- PKEY_Message_FromAddressDescription: Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 13
#### FromName
Name: System.Message.FromName -- PKEY_Message_FromNameDescription: Address in from field as person name
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 14
#### HasAttachments
Name: System.Message.HasAttachments -- PKEY_Message_HasAttachmentsDescription: 
Type: Boolean -- VT_BOOLFormatID: {9C1FCF74-2D97-41BA-B4AE-CB2E3661A6E4}, 8
#### IsFwdOrReply
Name: System.Message.IsFwdOrReply -- PKEY_Message_IsFwdOrReplyDescription: Type: Int32 -- VT_I4FormatID: {9A9BC088-4F6D-469E-9919-E705412040F9}, 100
#### MessageClass
Name: System.Message.MessageClass -- PKEY_Message_MessageClassDescription: What type of outlook msg this is (meeting, task, mail, etc.)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {CD9ED458-08CE-418F-A70E-F912C7BB9C5C}, 103
#### ProofInProgress
Name: System.Message.ProofInProgress -- PKEY_Message_ProofInProgressDescription: This property will be true if the message junk email proofing is still in progress.
Type: Boolean -- VT_BOOLFormatID: {9098F33C-9A7D-48A8-8DE5-2E1227A64E91}, 100
#### SenderAddress
Name: System.Message.SenderAddress -- PKEY_Message_SenderAddressDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {0BE1C8E7-1981-4676-AE14-FDD78F05A6E7}, 100
#### SenderName
Name: System.Message.SenderName -- PKEY_Message_SenderNameDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {0DA41CFA-D224-4A18-AE2F-596158DB4B3A}, 100
#### Store
Name: System.Message.Store -- PKEY_Message_StoreDescription: The store (aka protocol handler) FILE, MAIL, OUTLOOKEXPRESS
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 15
#### ToAddress
Name: System.Message.ToAddress -- PKEY_Message_ToAddressDescription: Addresses in To: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 16
#### ToDoFlags
Name: System.Message.ToDoFlags -- PKEY_Message_ToDoFlagsDescription: Flags associated with a message flagged to know if it's still active, if it was custom flagged, etc.
Type: Int32 -- VT_I4FormatID: {1F856A9F-6900-4ABA-9505-2D5F1B4D66CB}, 100
#### ToDoTitle
Name: System.Message.ToDoTitle -- PKEY_Message_ToDoTitleDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {BCCC8A3C-8CEF-42E5-9B1C-C69079398BC7}, 100
#### ToName
Name: System.Message.ToName -- PKEY_Message_ToNameDescription: Person names in To: field
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {E3E0584C-B788-4A5A-BB20-7F5A44C9ACDD}, 17

