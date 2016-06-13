---
title: Link
---

# Link
_namespace: [Microsoft.Windows.Shell.PropertySystem.SystemProperties.System](N-Microsoft.Windows.Shell.PropertySystem.SystemProperties.System.html)_

Link Properties



### Properties

#### Arguments
Name: System.Link.Arguments -- PKEY_Link_ArgumentsDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {436F2667-14E2-4FEB-B30A-146C53B5B674}, 100
#### Comment
Name: System.Link.Comment -- PKEY_Link_CommentDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_LINK) {B9B4B3FC-2B51-4A42-B5D8-324146AFCF25}, 5
#### DateVisited
Name: System.Link.DateVisited -- PKEY_Link_DateVisitedDescription: Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {5CBF2787-48CF-4208-B90E-EE5E5D420294}, 23 (PKEYs relating to URLs. Used by IE History.)
#### Description
Name: System.Link.Description -- PKEY_Link_DescriptionDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {5CBF2787-48CF-4208-B90E-EE5E5D420294}, 21 (PKEYs relating to URLs. Used by IE History.)
#### Status
Name: System.Link.Status -- PKEY_Link_StatusDescription: 
Type: Int32 -- VT_I4FormatID: (PSGUID_LINK) {B9B4B3FC-2B51-4A42-B5D8-324146AFCF25}, 3 (PID_LINK_TARGET_TYPE)
#### TargetExtension
Name: System.Link.TargetExtension -- PKEY_Link_TargetExtensionDescription: The file extension of the link target. See System.File.Extension
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {7A7D76F4-B630-4BD7-95FF-37CC51A975C9}, 2
#### TargetParsingPath
Name: System.Link.TargetParsingPath -- PKEY_Link_TargetParsingPathDescription: This is the shell namespace path to the target of the link item. This path may be passed to 
SHParseDisplayName to parse the path to the correct shell folder.

If the target item is a file, the value is identical to System.ItemPathDisplay.

If the target item cannot be accessed through the shell namespace, this value is VT_EMPTY.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (PSGUID_LINK) {B9B4B3FC-2B51-4A42-B5D8-324146AFCF25}, 2 (PID_LINK_TARGET)
#### TargetSFGAOFlags
Name: System.Link.TargetSFGAOFlags -- PKEY_Link_TargetSFGAOFlagsDescription: IShellFolder::GetAttributesOf flags for the target of a link, with SFGAO_PKEYSFGAOMASK 
attributes masked out.
Type: UInt32 -- VT_UI4FormatID: (PSGUID_LINK) {B9B4B3FC-2B51-4A42-B5D8-324146AFCF25}, 8
#### TargetSFGAOFlagsStrings
Name: System.Link.TargetSFGAOFlagsStrings -- PKEY_Link_TargetSFGAOFlagsStringsDescription: Expresses the SFGAO flags of a link as string values and is used as a query optimization. See 
PKEY_Shell_SFGAOFlagsStrings for possible values of this.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D6942081-D53B-443D-AD47-5E059D9CD27A}, 3
#### TargetUrl
Name: System.Link.TargetUrl -- PKEY_Link_TargetUrlDescription: Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {5CBF2787-48CF-4208-B90E-EE5E5D420294}, 2 (PKEYs relating to URLs. Used by IE History.)

