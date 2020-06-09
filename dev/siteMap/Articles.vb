Imports Microsoft.VisualBasic.Linq
Imports Microsoft.VisualBasic.Serialization.JSON
Imports Microsoft.VisualBasic.ValueTypes
Imports r = System.Text.RegularExpressions.Regex

Module Articles

    Sub scanArticles(root As String)
        Call New DbJson With {
            .lastupdated = Now.UnixTimeStamp,
            .articles = root.ListFiles("*.md") _
                .Where(Function(path) Not path.BaseName.TextEquals("readme")) _
                .Select(Function(path)
                            Return parseArticle(path, root.GetDirectoryFullPath)
                        End Function) _
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
        Dim authors = tags.Where(Function(s) s.StartsWith("@")).Select(Function(a) a.Trim("@"c, " "c)).ToArray
        Dim externalLinks = tags.Where(Function(s) s.StartsWith("&")).Select(Function(s) s.TrimStart("&"c).Trim).ToArray
        Dim relPath As String = path.GetFullPath.TrimSuffix.Replace("\", "/").Replace(root, "")
        Dim pub_date$ = If(time.StringEmpty, Now, Date.Parse(time)).ToString

        Return New article With {
            .url = relPath,
            .time = pub_date,
            .topics = topics,
            .title = title,
            .authors = authors,
            .external_links = externalLinks
        }
    End Function
End Module
