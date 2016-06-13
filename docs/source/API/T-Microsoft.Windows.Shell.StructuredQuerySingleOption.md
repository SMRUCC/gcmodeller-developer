---
title: StructuredQuerySingleOption
---

# StructuredQuerySingleOption
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Provides a set of flags to be used with IQueryParser::SetOption and 
 IQueryParser::GetOption to indicate individual options.



### Properties

#### AutomaticWildcard
The value should be VT_BOOL with VARIANT_TRUE to generate query expressions
 as if each word in the query had a star appended to it (unless followed by punctuation
 other than a parenthesis), or VT_EMPTY or VT_BOOL with VARIANT_FALSE to
 use the words as they are (the default). A word-wheeling application
 will generally want to set this option to true.
 Retrieving the option always returns a VT_BOOL.
#### ConnectorCase
This setting decides whether there are special requirements on the case of connector keywords (such
 as AND or OR). The value must be a VT_UI4 that is a CASE_REQUIREMENT value.
 It defaults to CASE_REQUIREMENT_UPPER_IF_AQS.
#### ImplicitConnector
This setting decides what connector should be assumed between conditions when none is specified.
 The value must be a VT_UI4 that is a CONDITION_TYPE. Only CT_AND_CONDITION and CT_OR_CONDITION
 are valid. It defaults to CT_AND_CONDITION.
#### LanguageKeywords
The value must be a VT_UI4 that is a LANGID. It defaults to the default user UI language.
#### Locale
The value must be VT_EMPTY (the default) or a VT_UI4 that is an LCID. It is used
 as the locale of contents (not keywords) in the query to be searched for, when no
 other information is available. The default value is the current keyboard locale.
 Retrieving the value always returns a VT_UI4.
#### NaturalSyntax
The value should be VT_EMPTY or VT_BOOL with VARIANT_TRUE to allow natural query
 syntax (the default) or VT_BOOL with VARIANT_FALSE to allow only advanced query syntax.
 Retrieving the option always returns a VT_BOOL.
 This option is now deprecated, use SQSO_SYNTAX.
#### Schema
The value should be VT_LPWSTR and the path to a file containing a schema binary.
#### Syntax
The value must be a VT_UI4 that is a STRUCTURED_QUERY_SYNTAX value.
 It defaults to SQS_NATURAL_QUERY_SYNTAX.
#### TimeZone
The value must be a VT_BLOB that is a copy of a TIME_ZONE_INFORMATION structure.
 It defaults to the current time zone.
#### TraceLevel
Reserved. The value should be VT_EMPTY (the default) or VT_I4.
 Retrieving the option always returns a VT_I4.
#### WordBreaker
This option is used to override the default word breaker used when identifying keywords
 in queries. The default word breaker is chosen according to the language of the keywords
 (cf. SQSO_LANGUAGE_KEYWORDS below). When setting this option, the value should be VT_EMPTY
 for using the default word breaker, or a VT_UNKNOWN with an object supporting
 the IWordBreaker interface. Retrieving the option always returns a VT_UNKNOWN with an object
 supporting the IWordBreaker interface.

