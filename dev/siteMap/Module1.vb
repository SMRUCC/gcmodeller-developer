Imports Microsoft.VisualBasic.Linq
Imports Microsoft.VisualBasic.Serialization.JSON
Imports Microsoft.VisualBasic.ValueTypes
Imports r = System.Text.RegularExpressions.Regex

Module Module1

    Sub Main()
        Call scanArticles(App.Command)
    End Sub

    Sub scanArticles(root As String)
        Call New DbJson With {
            .lastupdated = Now.UnixTimeStamp,
            .articles = root.EnumerateFiles("*.md") _
                .Select(Function(path) parseArticle(path, root.GetDirectoryFullPath)) _
                .ToArray
        }.GetJson _
         .SaveTo($"{root}/db.json")
    End Sub

    Private Function parseArticle(path As String, root As String) As article
        Dim markdown As String = path.ReadAllText
        Dim tags = r.Matches(markdown, "[<]![-]{2}.+?[-]{2}[>]", RegexICSng) _
            .EachValue _
            .Select(Function(tag)
                        Dim str = Mid(tag, 5)
                        Dim text = Mid(str, 1, str.Length - 3)

                        Return text.Trim
                    End Function) _
            .ToArray
        Dim time = tags.FirstOrDefault(Function(s) s.IsPattern("\d+([-]\d+){2}"))
        Dim topics = tags.Where(Function(s) s.StartsWith("::")) _
            .Select(Function(s) s.Trim(":"c, " "c).StringSplit("[;,]")) _
            .IteratesALL _
            .Distinct _
            .Select(AddressOf LCase) _
            .ToArray
        Dim title = markdown.Match("[#].+", RegexICMul).TrimStart("#"c).TrimNewLine.Trim

        Return New article With {
            .url = path.GetFullPath.Replace(root, ""),
            .time = If(time.StringEmpty, Now, Date.Parse(time)).UnixTimeStamp,
            .topics = topics,
            .title = title
        }
    End Function

End Module

Public Class DbJson

    Public Property articles As article()
    Public Property lastupdated As Long

End Class

Public Class article

    Public Property title As String
    Public Property url As String
    Public Property topics As String()
    Public Property time As Long

End Class