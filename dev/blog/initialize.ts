/// <reference path="markdown.ts" />

namespace vanillavb.app {

    let config: markedjs.option = markedjs.option.Defaults;
    let vbcodeStyle: vscode.CSS = vscode.VisualStudio;
    let language: string = lang();

    /**
     * A stack for enable back to previous article
    */
    let history: NamedValue<string>[] = [];

    function lang() {
        let folder = $ts.location.path;

        if (Strings.Empty(folder) || folder == "/") {
            return "";
        } else if (folder.charAt(0) == "#") {
            return "";
        } else {
            return folder.split("/")[0];
        }
    }

    function getTargetFile(fileName: string = $ts.location.hash(), multipleLanguage: boolean = true): DocumentFullName {
        let pathFallback: string;
        let path: string;
        let folder: string = lang();

        if (folder == "vbscripts") {
            if (!Strings.Empty(fileName, true)) {
                pathFallback = `/vbscripts/docs/${fileName}.md`;
            } else {
                fileName = $ts.location.fileName;

                if (fileName == "index.html" || Strings.Empty(fileName, true)) {
                    // show home page
                    pathFallback = "/vbscripts/README.md";
                } else {
                    return null;
                }
            }

            path = pathFallback;
        } else {
            if (!Strings.Empty(fileName, true)) {
                pathFallback = `/docs/${fileName}.md`;
                path = pathFallback;

                if (multipleLanguage && !Strings.Empty(language, true)) {
                    path = `/docs/${fileName}.${language}.md`;
                }
            } else {
                // show home page
                pathFallback = "/README.md";
                path = pathFallback;

                if (multipleLanguage && !Strings.Empty(language, true)) {
                    path = `/README.${language}.md`;
                }
            }
        }

        return <DocumentFullName>{
            path: path,
            pathFallback: pathFallback
        }
    }

    export function initialize() {
        // initialize styles and events
        window.onhashchange = app.loadDocument;
        config.renderer = new markdown();
        vbcodeStyle.lineHeight = "5px";
        language = lang();

        app.renderDocument(getTargetFile());
    }

    export function loadDocument() {
        app.renderDocument(getTargetFile());
    }

    /**
     * This function returns title of the article
    */
    export function updateArticle(html: string, time: Date): string {
        let h1: HTMLHeadingElement;
        let dateTag: HTMLElement;

        // update article content
        $ts("#article").innerHTML = html;
        // and then highligh vb code block
        vscode.highlightVB(vbcodeStyle);

        h1 = $ts("#article").getElementsByTagName("h1")[0];
        dateTag = $ts("<span>", {
            style: "color: grey; font-size: 0.8em;"
        }).display("#" + time.toLocaleDateString() + "#")

        let diff = Date.now() - time.getTime();
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (!isNullOrUndefined(h1)) {
            document.title = h1.innerText;
            h1.insertAdjacentElement("afterend", dateTag);

            if (days > 30) {
                let warn = $ts("<p>", {
                    style: "color: lightgrey; background-color: yellow;"
                }).display(`This article is posted ${days} days before, information in this article may be obsolete...`);
                                
                dateTag.insertAdjacentElement("afterend", warn);
                dateTag.insertAdjacentElement("afterend", $ts("<br>"));
            }
        }

        return h1.innerText;
    }

    /**
     * Render a given markdown document to html and display on the document body
     * 
     * @param ref The document fullname reference or file basename 
    */
    export function renderDocument(ref: DocumentFullName | string) {
        let count: number = 0;
        let url: DocumentFullName = (function () {
            if (typeof ref == "string") {
                return getTargetFile(ref);
            } else {
                return ref;
            }
        })();
        let renderDocumentInternal = function (markdown: string) {
            let html: string;

            if (Strings.Empty(markdown, true)) {
                // 404的时候返回的是空字符串
                if (count == 0) {
                    count++;

                    // request for fallback document path
                    $ts.getText(url.pathFallback, renderDocumentInternal, {
                        nullForNotFound: true
                    });
                    return;
                } else {
                    // 目标文档查找失败
                    html = `
<h1>404 Not Found</h1>
<p>The requested URL <strong>${url.path}</strong> was not found on this server.</p>`;
                }
            } else {
                html = marked(markdown, config);
            }

            let date: string = markdown.match(/[<][!][-]{2,}\s+\d+([-]\d+){2}\s+[-]{2,}>/g)[0];
            let time: Date = new Date(Date.parse(date.match(/\d+([-]\d+){2}/g)[0]));
            let title: string = vanillavb.app.updateArticle(html, time);
            // push stack
            let frame = new NamedValue<string>(title, $ts.location.hash(<Internal.hashArgument>{
                trimprefix: false
            }));

            if (history.length == 0) {
                $ts("#goback").hide();
            } else {
                let back = history[history.length - 1];
                let a = $ts("<a>", {
                    title: back.name,
                    href: executeJavaScript,
                    onclick: function () {
                        if (history.length > 0) {
                            history.pop();
                        }

                        if (back.value == window.location.hash) {
                            $ts("goback").hide();
                        } else {
                            window.location.hash = back.value;
                        }
                    }
                }).display(back.name);

                $ts("#previous-article-title").display(a);
                $ts("#goback").show();
            }

            history.push(frame);
        }

        if (isNullOrUndefined(url)) {
            // stop render when path is nothing
            return;
        }

        // fetch markdown document from server and run renderer
        $ts.getText(url.path, renderDocumentInternal, {
            nullForNotFound: true
        });
    }

    export interface DocumentFullName {
        /**
         * 带有当前的语言翻译的文档的位置
        */
        path: string;
        /**
         * 如果目标文档查找失败，则使用这个相对应的默认英文的文档的路径
        */
        pathFallback: string;
    }
}