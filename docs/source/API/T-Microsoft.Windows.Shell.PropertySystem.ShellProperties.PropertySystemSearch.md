---
title: PropertySystemSearch
---

# PropertySystemSearch
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.Search Properties



### Properties

#### AutoSummary
Name: System.Search.AutoSummary -- PKEY_Search_AutoSummaryDescription: General Summary of the document.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {560C36C0-503A-11CF-BAA1-00004C752A9A}, 2
#### ContainerHash
Name: System.Search.ContainerHash -- PKEY_Search_ContainerHashDescription: Hash code used to identify attachments to be deleted based on a common container url
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {BCEEE283-35DF-4D53-826A-F36A3EEFC6BE}, 100
#### Contents
Name: System.Search.Contents -- PKEY_Search_ContentsDescription: The contents of the item. This property is for query restrictions only; it cannot be retrieved in a 
query result. The Indexing Service friendly name is 'contents'.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: (FMTID_Storage) {B725F130-47EF-101A-A5F1-02608C9EEBAC}, 19 (PID_STG_CONTENTS)
#### EntryID
Name: System.Search.EntryID -- PKEY_Search_EntryIDDescription: The entry ID for an item within a given catalog in the Windows Search Index.
This value may be recycled, and therefore is not considered unique over time.
Type: Int32 -- VT_I4FormatID: (FMTID_Query) {49691C90-7E17-101A-A91C-08002B2ECDA9}, 5 (PROPID_QUERY_WORKID)
#### ExtendedProperties
Name: System.Search.ExtendedProperties -- PKEY_Search_ExtendedPropertiesDescription: Type: Blob -- VT_BLOBFormatID: {7B03B546-FA4F-4A52-A2FE-03D5311E5865}, 100
#### GatherTime
Name: System.Search.GatherTime -- PKEY_Search_GatherTimeDescription: The Datetime that the Windows Search Gatherer process last pushed properties of this document to the Windows Search Gatherer Plugins.
Type: DateTime -- VT_FILETIME (For variants: VT_DATE)FormatID: {0B63E350-9CCC-11D0-BCDB-00805FCCCE04}, 8
#### HitCount
Name: System.Search.HitCount -- PKEY_Search_HitCountDescription: When using CONTAINS over the Windows Search Index, this is the number of matches of the term.
If there are multiple CONTAINS, an AND computes the min number of hits and an OR the max number of hits.
Type: Int32 -- VT_I4FormatID: (FMTID_Query) {49691C90-7E17-101A-A91C-08002B2ECDA9}, 4 (PROPID_QUERY_HITCOUNT)
#### IsClosedDirectory
Name: System.Search.IsClosedDirectory -- PKEY_Search_IsClosedDirectoryDescription: If this property is emitted with a value of TRUE, then it indicates that this URL's last modified time applies to all of it's children, and if this URL is deleted then all of it's children are deleted as well. For example, this would be emitted as TRUE when emitting the URL of an email so that all attachments are tied to the last modified time of that email.
Type: Boolean -- VT_BOOLFormatID: {0B63E343-9CCC-11D0-BCDB-00805FCCCE04}, 23
#### IsFullyContained
Name: System.Search.IsFullyContained -- PKEY_Search_IsFullyContainedDescription: Any child URL of a URL which has System.Search.IsClosedDirectory=TRUE must emit System.Search.IsFullyContained=TRUE. This ensures that the URL is not deleted at the end of a crawl because it hasn't been visited (which is the normal mechanism for detecting deletes). For example an email attachment would emit this property
Type: Boolean -- VT_BOOLFormatID: {0B63E343-9CCC-11D0-BCDB-00805FCCCE04}, 24
#### QueryFocusedSummary
Name: System.Search.QueryFocusedSummary -- PKEY_Search_QueryFocusedSummaryDescription: Query Focused Summary of the document.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {560C36C0-503A-11CF-BAA1-00004C752A9A}, 3
#### QueryFocusedSummaryWithFallback
Name: System.Search.QueryFocusedSummaryWithFallback -- PKEY_Search_QueryFocusedSummaryWithFallbackDescription: Query Focused Summary of the document, if none is available it returns the AutoSummary.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {560C36C0-503A-11CF-BAA1-00004C752A9A}, 4
#### Rank
Name: System.Search.Rank -- PKEY_Search_RankDescription: Relevance rank of row. Ranges from 0-1000. Larger numbers = better matches. Query-time only.
Type: Int32 -- VT_I4FormatID: (FMTID_Query) {49691C90-7E17-101A-A91C-08002B2ECDA9}, 3 (PROPID_QUERY_RANK)
#### Store
Name: System.Search.Store -- PKEY_Search_StoreDescription: The identifier for the protocol handler that produced this item. (E.g. MAPI, CSC, FILE etc.)
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {A06992B3-8CAF-4ED7-A547-B259E32AC9FC}, 100
#### UrlToIndex
Name: System.Search.UrlToIndex -- PKEY_Search_UrlToIndexDescription: This property should be emitted by a container IFilter for each child URL within the container. The children will eventually be crawled by the indexer if they are within scope.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {0B63E343-9CCC-11D0-BCDB-00805FCCCE04}, 2
#### UrlToIndexWithModificationTime
Name: System.Search.UrlToIndexWithModificationTime -- PKEY_Search_UrlToIndexWithModificationTimeDescription: This property is the same as System.Search.UrlToIndex except that it includes the time the URL was last modified. This is an optimization for the indexer as it doesn't have to call back into the protocol handler to ask for this information to determine if the content needs to be indexed again. The property is a vector with two elements, a VT_LPWSTR with the URL and a VT_FILETIME for the last modified time.
Type: Multivalue Any -- VT_VECTOR | VT_NULL (For variants: VT_ARRAY | VT_NULL)FormatID: {0B63E343-9CCC-11D0-BCDB-00805FCCCE04}, 12

