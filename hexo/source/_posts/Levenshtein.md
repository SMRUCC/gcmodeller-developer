---
title: Levenshtein Edit Distance
tags: [Levenshtein, algorithm, Palindrome]
date: 2016-06-12
---

Recently, I was working on a tools for finding the imperfect palindrome sequence site in the bacterial genome, a palindrome sequence is a kind of structure which can form the hairpin struct on its transcript RNA molecule sequence or just some restriction enzyme cutting site which theirs structure can be easily understand by the image shown below:

Palindrome
Redraw from Figure 8-18 in Lehninger Principles of Biochemistry, Fifth Edition;


Finding a exactly matched palindrome is much easilier than I think, but the problem is I want to found the palindrome sequence which its mirror sites is not exactly match each other in all nucleotide base residue. The NCBI blast program is an option for accomplish this operation, but it is impossible to integrate the C++ source code into the VisualBasic program and I lack of programming manual to guide me on this work. So that I try another way to implements this sequence similarity works.

<!--more-->

In information theory and computer science, the Levenshtein distance [cite source=''doi'']Sov. Phys. Dokl 01/1966[/cite] is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other. It is named after Vladimir Levenshtein, who considered this distance in 1965. (via Wikipedia: https://en.wikipedia.org/wiki/Levenshtein_distance)

There is already have a program implements Levenshtein distance algorithm on the .NET platform on codeproject article "Levenshtein Edit Distance Algorithm", and this article save my time on the programming.

Implements source code can be download from here: LevenshteinDistance

The module in the source code file contains two main function:

In this create table function i have make a slightly performance improvement of the original source code: change the reference and hypotheses parameters from string to a pre-cache chars'' ASCII array in integer array, this changes will makes the matrix generation more efficiently:

```vbnet
''' <summary>
''' Creates distance table for data visualization 
''' </summary>
''' <param name="reference"></param>
''' <param name="hypotheses"></param>
''' <param name="cost"></param>
''' <returns></returns>
Private Function __createTable(reference As Integer(), hypotheses As Integer(), cost As Double) As Double(,)
    Dim distTable As Double(,) = New Double(reference.Length, hypotheses.Length) {}

    For i As Integer = 0 To reference.Length
        distTable(i, 0) = i * cost
    Next

    For j As Integer = 0 To hypotheses.Length
        distTable(0, j) = j * cost
    Next

    For i As Integer = 1 To reference.Length
        For j As Integer = 1 To hypotheses.Length

            If reference(i - 1) = hypotheses(j - 1) Then
                ''  if the letters are same 
                distTable(i, j) = distTable(i - 1, j - 1)
            Else '' if not add 1 to its neighborhoods and assign minumun of its neighborhoods 
                Dim n As Double = Math.Min(distTable(i - 1, j - 1) + 1, distTable(i - 1, j) + cost)
                distTable(i, j) = Math.Min(n, distTable(i, j - 1) + cost)
            End If
        Next
    Next

    Return distTable
End Function
```
Here is the function how to creates the matrix of Levenshtein distance for each character pair between two sequence in the For loops:

levFormula

In the formula, when the i equals to ZERO or j equals to ZERO, then the function returns the non-ZERO part of the matrix "coordinate", if the two character in the sequence is equals to each other, then the value is ZERO. leva,b(i,j) is the distance between the first i characters of a and the first j characters of b. Note that the first element in the minimum corresponds to deletion (from a to b), the second to insertion and the third to match or mismatch, depending on whether the respective symbols are the same.

Here I make some modifications which makes you more easily to adjust the parameter of the alignment:

```vbnet
''' <summary>
''' The edit distance between two strings is defined as the minimum number of 
''' edit operations required to transform one string into another.
''' </summary>
''' <param name="reference"></param>
''' <param name="hypotheses"></param>
''' <param name="cost"></param>
''' <returns></returns>
<ExportAPI("ComputeDistance", Info:="Implement the Levenshtein Edit Distance algorithm.")>
Public Function ComputeDistance(reference As String, hypotheses As String, Optional cost As Double = 0.7) As DistResult

    If hypotheses Is Nothing Then hypotheses = ""
    If reference Is Nothing Then reference = ""

    Dim css As New List(Of ComponentModel.Collection.Generic.KeyValuePairObject(Of Integer, Integer))
    Dim distTable As Double(,) = __createTable(reference.ToArray(Function(ch) Asc(ch)),
                                               hypotheses.ToArray(Function(ch) Asc(ch)),
                                               cost)
    Dim i As Integer = reference.Length, j As Integer = hypotheses.Length
    Dim evolve As List(Of Char) = New List(Of Char)
    Dim result As DistResult = New DistResult With {
        .Hypotheses = hypotheses,
        .Reference = reference
    }
    Dim Matches As New List(Of Char)

    While True

        Call css.Add({i, j})

        If i = 0 AndAlso j = 0 Then
            Dim evolveRoute As Char() = evolve.ToArray
            Call Array.Reverse(evolveRoute)
            Call css.Add({i, j})

            result.DistTable = distTable.MatrixToVectorList.ToArray
            result.DistResult = New String(evolveRoute)
            result.CSS = css.ToArray
            result.Matches = New String(Matches.ToArray.Reverse.ToArray)

            Exit While

        ElseIf i = 0 AndAlso j > 0 Then   '' delete
            Call evolve.Add("d"c)
            Call css.Add({i, j})
            Call Matches.Add("-"c)
            j -= 1

        ElseIf i > 0 AndAlso j = 0 Then
            Call evolve.Add("i"c)         '' insert
            Call css.Add({i, j})
            Call Matches.Add("-"c)
            i -= 1

        Else
            If distTable(i - 1, j - 1) <= distTable(i - 1, j) AndAlso
                distTable(i - 1, j - 1) <= distTable(i, j - 1) Then
                Call css.Add({i, j})
                If distTable(i - 1, j - 1) = distTable(i, j) Then
                    Call evolve.Add("m"c) '' match
                    Call Matches.Add(hypotheses(j - 1))
                Else
                    Call evolve.Add("s"c) '' substitue
                    Call Matches.Add("-"c)
                End If

                i -= 1
                j -= 1

            ElseIf distTable(i - 1, j) < distTable(i, j - 1) Then
                Call css.Add({i, j})
                Call evolve.Add("i")      '' insert
                Call Matches.Add("-"c)
                i -= 1

            ElseIf distTable(i, j - 1) < distTable(i - 1, j) Then
                Call css.Add({i, j})
                Call evolve.Add("d")      '' delete
                Call Matches.Add("-"c)
                j -= 1

            End If
        End If
    End While

    Return result
End Function
```

Test Alignment Shoal Script:

```
Imports Distance.Levenshtein

Dim    a <- ATGCGACCCGC   As String
Dim    b <- ATGTAACCCGGC  As String
Dim HTML <- {ComputeDistance $a, $b}

Call Write.Xml.DistResult $HTML, ./testAlignment.xml
 HTML <- ToHTML $HTML
$HTML > ./testHTML.html
```

And you can just using this module in your application easily with several statements in VisualBasic:

```vbnet
Dim a As String = "ATGCGACCCGC"
Dim b As String = "ATGTAACCCGGC"
Dim HTML = LevenshteinDistance.ComputeDistance(a, b)
Dim HTMLText As String = HTML.Visualize

Call FileIO.FileSystem.WriteAllText("./test.html", HTMLText, append:=False)
Call FileIO.FileSystem.WriteAllText("./test.xml", HTML.GetXml, append:=False)
```

And here is the generic function for the object xml serialization:

```vbnet
''' <summary>
''' Serialization the target object type into a XML document.
''' </summary>
''' <typeparam name="T">The type of the target object data should be a class object.</typeparam>
''' <param name="obj"></param>
''' <returns></returns>
''' <remarks></remarks>
<Extension> Public Function GetXml(Of T As Class)(obj As T, Optional ThrowEx As Boolean = True) As String
    Dim sBuilder As StringBuilder = New StringBuilder(1024)

    Using StreamWriter As System.IO.StringWriter = New System.IO.StringWriter(sb:=sBuilder)
        Try
            Call (New System.Xml.Serialization.XmlSerializer(GetType(T))).Serialize(StreamWriter, obj)
        Catch ex As Exception
            Call App.LogException(ex)

            If ThrowEx Then
                Throw ex
            Else
                Return Nothing
            End If
        End Try
        Return sBuilder.ToString
    End Using
End Function
```

alignment

Here is the example alignment output: in the table of the alignment matrix, the blue color cell is the operations of how we change the hypotheses sequence to the reference sequence, and the cell in green background color is the path of the alignment.

Download the test output data: Levenshtein-test-out