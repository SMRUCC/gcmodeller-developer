---
title: Scanner
---

# Scanner
_namespace: [Oracle.Java.util](N-Oracle.Java.util.html)_



### Methods

#### #ctor
```csharp
Oracle.Java.util.Scanner.#ctor(Oracle.Java.ReadableByteChannel,System.String)
```
Constructs a new Scanner that produces values scanned from the specified channel. Bytes from the source are converted into characters using the specified charset.

|Parameter Name|Remarks|
|--------------|-------|
|source|A channel to scan|
|charsetName|The encoding type used to convert bytes from the channel into characters to be scanned|


#### close
```csharp
Oracle.Java.util.Scanner.close
```
Closes this scanner.
 If this scanner has not yet been closed then if its underlying readable also implements the Closeable interface then the readable's close method will be invoked. If this scanner is already closed then invoking this method will have no effect.
 
 Attempting to perform search operations after a scanner has been closed will result in an IllegalStateException.

#### delimiter
```csharp
Oracle.Java.util.Scanner.delimiter
```
Returns the Pattern this Scanner is currently using to match delimiters.
_returns: this Scanner 's delimiting pattern._

#### findInLine
```csharp
Oracle.Java.util.Scanner.findInLine(Oracle.Java.Pattern)
```
Attempts to find the next occurrence of the specified pattern ignoring delimiters. If the pattern is found before the next line separator, the scanner advances past the input that matched and returns the string that matched the pattern. If no such pattern is detected in the input up to the next line separator, then null is returned and the scanner's position is unchanged. This method may block waiting for input that matches the pattern.
 Since this method continues to search through the input looking for the specified pattern, it may buffer all of the input searching for the desired token if no line separators are present.

|Parameter Name|Remarks|
|--------------|-------|
|pattern|the pattern to scan for|

_returns: the text that matched the specified pattern_

#### findWithinHorizon
```csharp
Oracle.Java.util.Scanner.findWithinHorizon(Oracle.Java.Pattern,System.Int32)
```
Attempts to find the next occurrence of the specified pattern.
 This method searches through the input up to the specified search horizon, ignoring delimiters. If the pattern is found the scanner advances past the input that matched and returns the string that matched the pattern. If no such pattern is detected then the null is returned and the scanner's position remains unchanged. This method may block waiting for input that matches the pattern.
 
 A scanner will never search more than horizon code points beyond its current position. Note that a match may be clipped by the horizon; that is, an arbitrary match result may have been different if the horizon had been larger. The scanner treats the horizon as a transparent, non-anchoring bound (see Matcher.useTransparentBounds(boolean) and Matcher.useAnchoringBounds(boolean)).
 
 If horizon is 0, then the horizon is ignored and this method continues to search through the input looking for the specified pattern without bound. In this case it may buffer all of the input searching for the pattern.
 
 If horizon is negative, then an IllegalArgumentException is thrown.

|Parameter Name|Remarks|
|--------------|-------|
|pattern|the pattern to scan for|
|horizon|-|

_returns: the text that matched the specified pattern_

#### hasNext
```csharp
Oracle.Java.util.Scanner.hasNext(Oracle.Java.Pattern)
```
Returns true if the next complete token matches the specified pattern. A complete token is prefixed and postfixed by input that matches the delimiter pattern. This method may block while waiting for input. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|pattern|the pattern to scan for|

_returns: true if and only if this scanner has another token matching the specified pattern_

#### hasNextBigDecimal
```csharp
Oracle.Java.util.Scanner.hasNextBigDecimal
```
Returns true if the next token in this scanner's input can be interpreted as a BigDecimal using the nextBigDecimal() method. The scanner does not advance past any input.
_returns: true if and only if this scanner's next token is a valid BigDecimal_

#### hasNextBigInteger
```csharp
Oracle.Java.util.Scanner.hasNextBigInteger(System.Int32)
```
Returns true if the next token in this scanner's input can be interpreted as a BigInteger in the specified radix using the nextBigInteger() method. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as an integer|

_returns: true if and only if this scanner's next token is a valid BigInteger_

#### hasNextBoolean
```csharp
Oracle.Java.util.Scanner.hasNextBoolean
```
Returns true if the next token in this scanner's input can be interpreted as a boolean value using a case insensitive pattern created from the string "true|false". The scanner does not advance past the input that matched.
_returns: true if and only if this scanner's next token is a valid boolean value_

#### hasNextByte
```csharp
Oracle.Java.util.Scanner.hasNextByte(System.Int32)
```
Returns true if the next token in this scanner's input can be interpreted as a byte value in the specified radix using the nextByte() method. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as a byte value|

_returns: true if and only if this scanner's next token is a valid byte value_

#### hasNextDouble
```csharp
Oracle.Java.util.Scanner.hasNextDouble
```
Returns true if the next token in this scanner's input can be interpreted as a double value using the nextDouble() method. The scanner does not advance past any input.
_returns: true if and only if this scanner's next token is a valid double value_

#### hasNextFloat
```csharp
Oracle.Java.util.Scanner.hasNextFloat
```
Returns true if the next token in this scanner's input can be interpreted as a float value using the nextFloat() method. The scanner does not advance past any input.
_returns: true if and only if this scanner's next token is a valid float value_

#### hasNextInt
```csharp
Oracle.Java.util.Scanner.hasNextInt(System.Int32)
```
Returns true if the next token in this scanner's input can be interpreted as an int value in the specified radix using the nextInt() method. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as an int value|

_returns: true if and only if this scanner's next token is a valid int value_

#### hasNextLine
```csharp
Oracle.Java.util.Scanner.hasNextLine
```
Returns true if there is another line in the input of this scanner. This method may block while waiting for input. The scanner does not advance past any input.
_returns: true if and only if this scanner has another line of input_

#### hasNextLong
```csharp
Oracle.Java.util.Scanner.hasNextLong(System.Int32)
```
Returns true if the next token in this scanner's input can be interpreted as a long value in the specified radix using the nextLong() method. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as a long value|

_returns: true if and only if this scanner's next token is a valid long value_

#### hasNextShort
```csharp
Oracle.Java.util.Scanner.hasNextShort(System.Int32)
```
Returns true if the next token in this scanner's input can be interpreted as a short value in the specified radix using the nextShort() method. The scanner does not advance past any input.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as a short value|

_returns: true if and only if this scanner's next token is a valid short value in the specified radix_

#### ioException
```csharp
Oracle.Java.util.Scanner.ioException
```
Returns the IOException last thrown by this Scanner's underlying Readable. This method returns null if no such exception exists.
_returns: the last exception thrown by this scanner's readable_

#### locale
```csharp
Oracle.Java.util.Scanner.locale
```
Returns this scanner's locale.
 A Scanner 's locale affects many elements of its default primitive matching regular expressions; see localized numbers above.
_returns: this Scanner 's locale_

#### match
```csharp
Oracle.Java.util.Scanner.match
```
Returns the match result of the last scanning operation performed by this scanner. This method throws IllegalStateException if no match has been performed, or if the last match was not successful.
 The various nextmethods of Scanner make a match result available if they complete without throwing an exception. For instance, after an invocation of the nextInt() method that returned an int, this method returns a MatchResult for the search of the Integer regular expression defined above. Similarly the findInLine(java.lang.String), findWithinHorizon(java.lang.String, int), and skip(java.util.regex.Pattern) methods will make a match available if they succeed.
_returns: a match result for the last match operation_

#### next
```csharp
Oracle.Java.util.Scanner.next(Oracle.Java.Pattern)
```
Returns the next token if it matches the specified pattern. This method may block while waiting for input to scan, even if a previous invocation of hasNext(Pattern) returned true. If the match is successful, the scanner advances past the input that matched the pattern.

|Parameter Name|Remarks|
|--------------|-------|
|pattern|the pattern to scan for|

_returns: the next token_

#### nextBigDecimal
```csharp
Oracle.Java.util.Scanner.nextBigDecimal
```
Scans the next token of the input as a BigDecimal.
 If the next token matches the Decimal regular expression defined above then the token is converted into a BigDecimal value as if by removing all group separators, mapping non-ASCII digits into ASCII digits via the Character.digit, and passing the resulting string to the BigDecimal(String) constructor.
_returns: the BigDecimal scanned from the input_

#### nextBigInteger
```csharp
Oracle.Java.util.Scanner.nextBigInteger(System.Int32)
```
Scans the next token of the input as a BigInteger.
 If the next token matches the Integer regular expression defined above then the token is converted into a BigInteger value as if by removing all group separators, mapping non-ASCII digits into ASCII digits via the Character.digit, and passing the resulting string to the BigInteger(String, int) constructor with the specified radix.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token|

_returns: the BigInteger scanned from the input_

#### nextBoolean
```csharp
Oracle.Java.util.Scanner.nextBoolean
```
Scans the next token of the input into a boolean value and returns that value. This method will throw InputMismatchException if the next token cannot be translated into a valid boolean value. If the match is successful, the scanner advances past the input that matched.
_returns: the boolean scanned from the input_

#### nextByte
```csharp
Oracle.Java.util.Scanner.nextByte(System.Int32)
```
Scans the next token of the input as a byte. This method will throw InputMismatchException if the next token cannot be translated into a valid byte value as described below. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Integer regular expression defined above then the token is converted into a byte value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Byte.parseByte with the specified radix.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as a byte value|

_returns: the byte scanned from the input_

#### nextDouble
```csharp
Oracle.Java.util.Scanner.nextDouble
```
Scans the next token of the input as a double. This method will throw InputMismatchException if the next token cannot be translated into a valid double value. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Float regular expression defined above then the token is converted into a double value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Double.parseDouble. If the token matches the localized NaN or infinity strings, then either "Nan" or "Infinity" is passed to Double.parseDouble as appropriate.
_returns: the double scanned from the input_

#### nextFloat
```csharp
Oracle.Java.util.Scanner.nextFloat
```
Scans the next token of the input as a float. This method will throw InputMismatchException if the next token cannot be translated into a valid float value as described below. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Float regular expression defined above then the token is converted into a float value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Float.parseFloat. If the token matches the localized NaN or infinity strings, then either "Nan" or "Infinity" is passed to Float.parseFloat as appropriate.
_returns: the float scanned from the input_

#### nextInt
```csharp
Oracle.Java.util.Scanner.nextInt(System.Int32)
```
Scans the next token of the input as an int. This method will throw InputMismatchException if the next token cannot be translated into a valid int value as described below. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Integer regular expression defined above then the token is converted into an int value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Integer.parseInt with the specified radix.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as an int value|

_returns: the int scanned from the input_

#### nextLine
```csharp
Oracle.Java.util.Scanner.nextLine
```
Advances this scanner past the current line and returns the input that was skipped. This method returns the rest of the current line, excluding any line separator at the end. The position is set to the beginning of the next line.
 Since this method continues to search through the input looking for a line separator, it may buffer all of the input searching for the line to skip if no line separators are present.
_returns: the line that was skipped_

#### nextLong
```csharp
Oracle.Java.util.Scanner.nextLong(System.Int32)
```
Scans the next token of the input as a long. This method will throw InputMismatchException if the next token cannot be translated into a valid long value as described below. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Integer regular expression defined above then the token is converted into an long value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Long.parseLong with the specified radix.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as an int value|

_returns: the long scanned from the input_

#### nextShort
```csharp
Oracle.Java.util.Scanner.nextShort(System.Int32)
```
Scans the next token of the input as a short. This method will throw InputMismatchException if the next token cannot be translated into a valid short value as described below. If the translation is successful, the scanner advances past the input that matched.
 If the next token matches the Integer regular expression defined above then the token is converted into a short value as if by removing all locale specific prefixes, group separators, and locale specific suffixes, then mapping non-ASCII digits into ASCII digits via Character.digit, prepending a negative sign (-) if the locale specific negative prefixes and suffixes were present, and passing the resulting string to Short.parseShort with the specified radix.

|Parameter Name|Remarks|
|--------------|-------|
|radix|the radix used to interpret the token as a short value|

_returns: the short scanned from the input_

#### radix
```csharp
Oracle.Java.util.Scanner.radix
```
Returns this scanner's default radix.
 A Scanner 's radix affects elements of its default number matching regular expressions; see localized numbers above.
_returns: the default radix of this scanner_

#### remove
```csharp
Oracle.Java.util.Scanner.remove
```
The remove operation is not supported by this implementation of Iterator.
 Specified by
 remove in interface Iterator

#### skip
```csharp
Oracle.Java.util.Scanner.skip(System.String)
```
Skips input that matches a pattern constructed from the specified string.
 An invocation of this method of the form skip(pattern) behaves in exactly the same way as the invocation skip(Pattern.compile(pattern)).

|Parameter Name|Remarks|
|--------------|-------|
|pattern|a string specifying the pattern to skip over|

_returns: this Scanner_

#### ToString
```csharp
Oracle.Java.util.Scanner.ToString
```
Returns the string representation of this Scanner. The string representation of a Scanner contains information that may be useful for debugging. The exact format is unspecified.
_returns: The string representation of this scanner_

#### useDelimiter
```csharp
Oracle.Java.util.Scanner.useDelimiter(System.String)
```
Sets this scanner's delimiting pattern to a pattern constructed from the specified String.
 An invocation of this method of the form useDelimiter(pattern) behaves in exactly the same way as the invocation hasDelimiter(Pattern.compile(pattern)).

|Parameter Name|Remarks|
|--------------|-------|
|pattern|A string specifying a delimiting pattern|

_returns: this Scanner_

#### useLocale
```csharp
Oracle.Java.util.Scanner.useLocale(Oracle.Java.Locale)
```
Sets this scanner's locale to the specified locale.
 A Scanner 's locale affects many elements of its default primitive matching regular expressions; see localized numbers above.

|Parameter Name|Remarks|
|--------------|-------|
|locale|A string specifying the locale to use|

_returns: this Scanner_

#### useRadix
```csharp
Oracle.Java.util.Scanner.useRadix(System.Int32)
```
Sets this scanner's default radix to the specified radix.
 A Scanner 's radix affects elements of its default number matching regular expressions; see localized numbers above.

 If the radix is less than Character.MIN_RADIX or greater than Character.MAX_RADIX, then an IllegalArgumentException is thrown.

|Parameter Name|Remarks|
|--------------|-------|
|radix|The radix to use when scanning numbers|

_returns: this Scanner_




