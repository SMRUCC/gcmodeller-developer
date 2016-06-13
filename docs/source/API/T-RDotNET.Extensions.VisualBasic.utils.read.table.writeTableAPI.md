---
title: writeTableAPI
---

# writeTableAPI
_namespace: [RDotNET.Extensions.VisualBasic.utils.read.table](N-RDotNET.Extensions.VisualBasic.utils.read.table.html)_

write.table prints its required argument x (after converting it to a data frame if it is not one nor a matrix) to a file or connection.



### Properties

#### append
logical. Only relevant if file Is a character string. If TRUE, the output Is appended to the file. If FALSE, any existing file of the name Is destroyed.
#### colNames
either a logical value indicating whether the column names of x are to be written along with x, or a character vector of column names to be written. See the section on ‘CSV files’ for the meaning of col.names = NA.
#### dec
the string to use for decimal points in numeric or complex columns: must be a single character.
#### eol
the character(s) to print at the end of each line (row). For example, eol = "\r\n" will produce Windows' line endings on a Unix-alike OS, and eol = "\r" will produce files as expected by Excel:mac 2004.
#### file
either a character string naming a file or a connection open for writing. "" indicates output to the console.
#### fileEncoding
character string: if non-empty declares the encoding to be used on a file (not a connection) so the character data can be re-encoded as they are written. See file.
#### na
the string to use for missing values in the data.
#### qmethod
a character string specifying how to deal with embedded double quote characters when quoting strings. 
 Must be one of "escape" (default for write.table), in which case the quote character is escaped in C style by a backslash, or "double" (default for write.csv and write.csv2), in which case it is doubled. You can specify just the initial letter.
#### quote
a logical value (TRUE or FALSE) or a numeric vector. If TRUE, any character or factor columns will be surrounded by double quotes. 
 If a numeric vector, its elements are taken as the indices of columns to quote. In both cases, row and column names are quoted if they are written. 
 If FALSE, nothing is quoted.
#### rowNames
either a logical value indicating whether the row names of x are to be written along with x, or a character vector of row names to be written.
#### sep
the field separator string. Values within each row of x are separated by this string.
#### x
the object to be written, preferably a matrix or data frame. If not, it is attempted to coerce x to a data frame.

