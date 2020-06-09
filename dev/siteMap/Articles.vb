Imports Microsoft.VisualBasic.FileIO
Imports Microsoft.VisualBasic.Linq
Imports Microsoft.VisualBasic.Serialization.JSON
Imports Microsoft.VisualBasic.ValueTypes
Imports r = System.Text.RegularExpressions.Regex

Module Articles

    Public Sub scanDb(root As String)
        Dim volumns As New List(Of String)
        Dim topics As New Dictionary(Of String, List(Of articleEntry))

        Const repository = ".repository"

        For Each dir As String In root.ListDirectory(SearchOption.SearchTopLevelOnly).Where(Function(a) Not a.BaseName.TextEquals(repository))
            Dim vol = scanArticles(dir)

            volumns.Add(vol.name)

            For Each topic In vol.topics
                If Not topics.ContainsKey(topic.Key) Then
                    topics.Add(topic.Key, New List(Of articleEntry))
                End If

                topics(topic.Key).AddRange(topic.Value)
            Next

            Call vol.GetJson.SaveTo($"{root}/{repository}/{vol.name}.json")
        Next

        Call New DbJson With {
            .topics = topics.ToDictionary(Function(a) a.Key, Function(a) a.Value.ToArray),
            .lastupdated = Now.UnixTimeStamp,
            .volumns = volumns.ToArray
        }.GetJson _
         .SaveTo($"{root}/{repository}/index.json")
    End Sub

    Public Function scanArticles(volumnFolder As String) As VolumnDb
        Return New VolumnDb With {
            .articles = volumnFolder.ListFiles("*.md") _
                .Where(Function(path) Not path.BaseName.TextEquals("readme")) _
                .Select(Function(path)
                            Return parseArticle(path, volumnFolder.GetDirectoryFullPath)
                        End Function) _
                .ToArray,
            .name = volumnFolder.BaseName,
            .topics = .articles _
                .Select(Function(a) a.topics.Select(Function(t) (t, a))) _
                .IteratesALL _
                .GroupBy(Function(a) a.t) _
                .ToDictionary(Function(a) a.Key,
                              Function(a)
                                  Return a _
                                      .Select(Function(r)
                                                  Return New articleEntry With {
                                                      .title = r.a.title,
                                                      .url = r.a.url
                                                  }
                                              End Function) _
                                      .ToArray
                              End Function)
        }
    End Function

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
