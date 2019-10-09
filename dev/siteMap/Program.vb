Imports Microsoft.VisualBasic.CommandLine

Module Program

    Sub Main()
        If App.Command.StringEmpty Then
            Call CLITools.AppSummary(App.Info, "Static blog site content builder", "sitemap <directory> --toc <path/to/toc.html>", App.StdOut)
        Else
            Call Articles.scanArticles(App.CommandLine.Name)
            Call Articles.createTOC(App.CommandLine.Name, App.CommandLine("--toc"))
        End If
    End Sub

End Module