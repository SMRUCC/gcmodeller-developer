@echo off

"App\sitemap\siteMap.exe" "D:\developer.gcmodeller.org\gcmodeller-hexo\articles" --toc "D:\developer.gcmodeller.org\gcmodeller-hexo\post.html"

"E:\repo\xDoc\App\xDoc.exe"  /build.sitemap /wwwroot "D:\developer.gcmodeller.org\gcmodeller-hexo" /host http://developer.gcmodeller.org

pause