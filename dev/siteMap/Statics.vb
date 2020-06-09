Imports System.Text
Imports Microsoft.VisualBasic.Language
Imports Microsoft.VisualBasic.MIME.Markup.MarkDown
Imports Microsoft.VisualBasic.Text.Xml

Module Statics

    ReadOnly markdown As New MarkdownHTML

    Sub createTOC(root$, save$)
        If save.StringEmpty Then
            Return
        Else
            root = root.GetFullPath.TrimSuffix.Replace("\", "/").Trim("/"c)
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

    Public Sub html(path$, root$, article As article)
        Dim markdown As String = path.ReadAllText
        Dim static$ = $"{root}/static/{article.url}.html"

        With Statics.markdown.Transform(markdown)
            Call sprintf(<html>
                             <meta name="pub_date" content=<%= article.time %>/>

                             <meta property="og:title" content=<%= article.title %>/>
                             <meta property="og:site_name" content="GCModeller Developer"/>
                             <meta property="og:url" content=<%= "https://developer.gcmodeller.org" & article.url %>/>
                             <meta property="og:description" content=<%= article.title %>/>
                             <meta property="og:image" content="/logo.png"/>
                             <meta property="og:image:width" content="1200"/>
                             <meta property="og:type" content="article"/>
                             <meta property="article:publisher" content="https://gcmodeller.org/"/>
                             <meta property="article:author" content=<%= article.authors.JoinBy("; ") %>/>

                             <head>
                                 <title><%= article.title %></title>
                             </head>
                             <body class="main">%s</body>
                         </html>, .ByRef).SaveTo([static], Encoding.UTF8)
        End With
    End Sub
End Module
