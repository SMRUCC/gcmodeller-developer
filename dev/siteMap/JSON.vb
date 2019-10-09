
Public Class DbJson

    Public Property articles As article()
    Public Property lastupdated As Long

End Class

Public Class article

    Public Property title As String
    ''' <summary>
    ''' url of the markdown document of current article
    ''' </summary>
    ''' <returns></returns>
    Public Property url As String

    Public Property topics As String()
    Public Property authors As String()
    Public Property time As String
    Public Property external_links As String()

End Class