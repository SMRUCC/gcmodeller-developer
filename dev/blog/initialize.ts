﻿/// <reference path="markdown.ts" />

namespace blog {

    let config: markedjs.option = markedjs.option.Defaults;
    let vbcodeStyle: vscode.CSS = vscode.VisualStudio;

    /**
     * A stack for enable back to previous article
    */
    let history: NamedValue<string>[] = [];
  
    function getTargetFile(fileName: string = $ts.location.hash()): string {
        let pathFallback: string;

        if (!Strings.Empty(fileName, true)) {
            pathFallback = `/articles/${fileName}.md`;
        } else {
            // show home page
            pathFallback = null;
        }

        return pathFallback;
    }

    export function initialize() {
        // initialize styles and events
        window.onhashchange = blog.loadDocument;
        config.addcodeTag = false;
        config.renderer = new markdown(config);        

        console.log(config);

        blog.renderDocument(getTargetFile());
    }

    export function loadDocument() {
        blog.renderDocument(getTargetFile());
    }

    /**
     * This function returns title of the article
    */
    export function updateArticle(html: string, time: Date): string {
        let h1: HTMLHeadingElement;
        let dateTag: HTMLElement;

        // update article content
        $ts("#article").innerHTML = html;

        h1 = $ts("#article").getElementsByTagName("h1")[0];
        dateTag = $ts("<span>", {
            class:"post-time"            
        }).display("#" + time.toLocaleDateString() + "#")

        let diff = Date.now() - time.getTime();
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (!isNullOrUndefined(h1)) {
            document.title = h1.innerText;
            h1.insertAdjacentElement("afterend", $ts("<p>").display(dateTag));

            if (days > 30) {
                let warn = $ts("<div>", {
                    class: "alert-box info"
                }).display(`This article is posted ${days} days before, information in this article may be obsolete...`);

                dateTag.insertAdjacentElement("afterend", warn);
                // dateTag.insertAdjacentElement("afterend", $ts("<br>"));
            }
        }

        // and then highligh vb code block
        vscode.highlightVB(vbcodeStyle);

        return h1.innerText;
    }

    const dateTagPattern: RegExp = /[<][!][-]{2,}\s+\d+([-]\d+){2}\s+[-]{2,}>/g;

    function tryParseDate(markdown: string): Date {
        let dateFind = markdown.match(dateTagPattern);
        let dateStr = dateFind ? dateFind[0] : "";

        dateFind = dateStr.match(/\d+([-]\d+){2}/g);
        dateStr = dateFind ? dateFind[0] : null;

        let time: Date;

        if (dateStr) {
            time = new Date(Date.parse(dateStr));
        } else {
            time = new Date();
        }

        return time;
    }

    /**
     * Render a given markdown document to html and display on the document body
     * 
     * @param ref The document fullname reference or file basename 
    */
    export function renderDocument(url: string) {
        let count: number = 0;
        let renderDocumentInternal = function (markdown: string) {
            let html: string;

            if (Strings.Empty(markdown, true)) {
                // 目标文档查找失败
                html = `
<h1>404 Not Found</h1>
<p>The requested URL <strong>${url}</strong> was not found on this server.</p>`;
            } else {
                html = marked(markdown, config);
            }

            let title: string = blog.updateArticle(html, tryParseDate(markdown));
            // push stack
            let frame = new NamedValue<string>(title, $ts.location.hash(<Internal.hashArgument>{
                trimprefix: false
            }));

            if (history.length == 0) {
                $ts("#goback-row").hide();
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
                            $ts("goback-row").hide();
                        } else {
                            window.location.hash = back.value;
                        }
                    }
                }).display(back.name);

                $ts("#previous-article-title").display(a);
                $ts("#goback-row").show();
            }

            history.push(frame);
        }

        if (isNullOrUndefined(url)) {
            // render the index page when url is null
            blog.initializeTree();
        } else {
            // fetch markdown document from server and run renderer
            $ts.getText(url, renderDocumentInternal, {
                nullForNotFound: true
            });
        }
    }
}