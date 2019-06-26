/// <reference path="markdown.ts" />

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
            pathFallback = "/README.md";
        }

        return pathFallback;
    }

    export function initialize() {
        // initialize styles and events
        window.onhashchange = blog.loadDocument;
        config.renderer = new markdown();
        // vbcodeStyle.lineHeight = "5px";

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
    export function renderDocument(ref: string) {
        let count: number = 0;
        let url: string = getTargetFile(ref);
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

            let date: string = markdown.match(/[<][!][-]{2,}\s+\d+([-]\d+){2}\s+[-]{2,}>/g)[0];
            let time: Date = new Date(Date.parse(date.match(/\d+([-]\d+){2}/g)[0]));
            let title: string = blog.updateArticle(html, time);
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
        $ts.getText(url, renderDocumentInternal, {
            nullForNotFound: true
        });
    }
}