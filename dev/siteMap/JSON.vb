''' <summary>
''' 总的数据库索引
''' </summary>
Public Class DbJson

    ''' <summary>
    ''' collection of file basename and <see cref="VolumnDb.name"/>
    ''' </summary>
    ''' <returns></returns>
    Public Property volumns As String()
    ''' <summary>
    ''' 总的合并在一起的
    ''' </summary>
    ''' <returns></returns>
    Public Property topics As Dictionary(Of String, articleEntry())
    Public Property lastupdated As Long

End Class

''' <summary>
''' 一个年份的文件夹就相当于一个分卷
''' </summary>
Public Class VolumnDb

    ''' <summary>
    ''' the json file basename
    ''' </summary>
    ''' <returns></returns>
    Public Property name As String
    Public Property articles As article()
    ''' <summary>
    ''' 当前的这个分卷的归档
    ''' </summary>
    ''' <returns></returns>
    Public Property topics As Dictionary(Of String, articleEntry())

End Class

Public Class articleEntry

    Public Property title As String
    ''' <summary>
    ''' url of the markdown document of current article
    ''' </summary>
    ''' <returns></returns>
    Public Property url As String

End Class

Public Class article : Inherits articleEntry

    Public Property topics As String()
    Public Property authors As String()
    Public Property time As String
    Public Property external_links As String()

End Class