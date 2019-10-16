Imports System.Text
Imports Microsoft.VisualBasic.Language
Imports Microsoft.VisualBasic.Linq
Imports Microsoft.VisualBasic.MIME.Markup.MarkDown
Imports Microsoft.VisualBasic.Serialization.JSON
Imports Microsoft.VisualBasic.Text.Parser.HtmlParser
Imports Microsoft.VisualBasic.Text.Xml
Imports Microsoft.VisualBasic.ValueTypes
Imports r = System.Text.RegularExpressions.Regex

Module Articles

    ReadOnly markdown As New MarkdownHTML

    Sub createTOC(root$, save$)
        If save.StringEmpty Then
            Return
        End If

        Dim htmls = root.ListFiles("*.html") _
            .Select(Function(path)
                        Return <p>
                                   <a href=<%= path.GetFullPath.TrimSuffix.Replace("\", "/").Replace(root, "") & ".html" %>>
                                       <%= path.BaseName %>
                                   </a>
                               </p>
                    End Function) _
            .Select(Function(a) a.ToString) _
            .JoinBy(vbCrLf)

        Call sprintf(<html>
                         <title>Table of Contents</title>

                         <body>
                             <h1>Articles</h1>

                             %s
                         </body>
                     </html>, htmls).SaveTo(save)
    End Sub

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
        Dim authors = tags.Where(Function(s) s.StartsWith("@")).ToArray
        Dim externalLinks = tags.Where(Function(s) s.StartsWith("&")).Select(Function(s) s.TrimStart("&"c).Trim).ToArray
        Dim relPath As String = path.GetFullPath.TrimSuffix.Replace("\", "/").Replace(root, "")
        Dim static$ = $"{root}/static/{relPath}.html"
        Dim pub_date$ = If(time.StringEmpty, Now, Date.Parse(time)).ToString

        With Articles.markdown.Transform(markdown)
            Call sprintf(<html>
                             <meta name="pub_date" content=<%= pub_date %>/>

                             <meta property="og:title" content=<%= title %>/>
                             <meta property="og:site_name" content="GCModeller Developer"/>
                             <meta property="og:url" content=<%= "https://developer.gcmodeller.org" & relPath %>/>
                             <meta property="og:description" content=<%= title %>/>
                             <meta property="og:image" content="/logo.png"/>
                             <meta property="og:image:width" content="1200"/>
                             <meta property="og:type" content="article"/>
                             <meta property="article:publisher" content="https://gcmodeller.org/"/>
                             <meta property="article:author" content=<%= authors.JoinBy("; ") %>/>

                             <head>
                                 <title><%= title %></title>
                             </head>
                             <body class="main">%s</body>
                         </html>, .ByRef).SaveTo([static], Encoding.UTF8)
        End With

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
