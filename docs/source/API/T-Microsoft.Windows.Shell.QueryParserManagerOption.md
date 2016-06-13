---
title: QueryParserManagerOption
---

# QueryParserManagerOption
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Used by IQueryParserManager::SetOption to set parsing options. 
 This can be used to specify schemas and localization options.



### Properties

#### AppendLCIDToLocalizedPath
A VT_BOOL. If TRUE, then the paths for pre-localized and localized binaries 
 have "\(LCID)" appended to them, where language code identifier (LCID) is 
 the decimal locale ID for the localized language. The default is TRUE.
#### LocalizedSchemaBinaryPath
A VT_LPWSTR containing the full path to the folder that contains the 
 localized schema binary that can be read and written to as needed. 
 The default value is "%LOCALAPPDATA%\Microsoft\Windows".
#### LocalizerSupport
A VT_UNKNOWN with an object supporting ISchemaLocalizerSupport. 
 This object will be used instead of the default localizer support object.
#### PreLocalizedSchemaBinaryPath
Either a VT_BOOL or a VT_LPWSTR. If the value is a VT_BOOL and is FALSE, 
 a pre-localized schema will not be used. If the value is a VT_BOOL and is TRUE, 
 IQueryParserManager will use the pre-localized schema binary in 
 "%ALLUSERSPROFILE%\Microsoft\Windows". If the value is a VT_LPWSTR, the value should 
 contain the full path of the folder in which the pre-localized schema binary can be found. 
 The default value is VT_BOOL with TRUE.
#### SchemaBinaryName
A VT_LPWSTR containing the name of the file that contains the schema binary. 
 The default value is StructuredQuerySchema.bin for the SystemIndex catalog 
 and StructuredQuerySchemaTrivial.bin for the trivial catalog.
#### UnlocalizedSchemaBinaryPath
A VT_LPWSTR containing the full path to the folder that contains the 
 unlocalized schema binary. The default value is "%SYSTEMROOT%\System32".

