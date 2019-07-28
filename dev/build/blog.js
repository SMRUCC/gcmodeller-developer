var blog;
(function (blog) {
    /**
     * Website markdown to html render
    */
    class markdown extends markedjs.htmlRenderer {
        image(href, title, text) {
            href = markedjs.helpers.cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) {
                return text;
            }
            else if (!markdown.isFullName(href)) {
                href = `/docs/${href}`;
            }
            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) {
                out += ' title="' + title + '"';
            }
            out += this.options.xhtml ? '/>' : '>';
            return out;
        }
        static isFullName(href) {
            return href.toLowerCase().indexOf("://") > -1;
        }
        code(code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(code, lang);
                if (out != null && out !== code) {
                    escaped = true;
                    code = out;
                }
            }
            if (!lang) {
                return '<pre>'
                    + (escaped ? code : markedjs.helpers.escape.doescape(code, true))
                    + '</pre>';
            }
            else if (lang != "vbnet") {
                let highlight = window.hljs
                    .highlightAuto(code)
                    .value;
                code = `<pre class="highlight ${lang} hljs">${highlight}</pre>`;
                return code;
            }
            return '<pre class="highlight ' + lang + '">'
                + (escaped ? code : markedjs.helpers.escape.doescape(code, true))
                + '</pre>\n';
        }
    }
    blog.markdown = markdown;
})(blog || (blog = {}));
/// <reference path="markdown.ts" />
var blog;
(function (blog) {
    let config = markedjs.option.Defaults;
    let vbcodeStyle = vscode.VisualStudio;
    /**
     * A stack for enable back to previous article
    */
    let history = [];
    function getTargetFile(fileName = $ts.location.hash()) {
        let pathFallback;
        if (!Strings.Empty(fileName, true)) {
            pathFallback = `/articles/${fileName}.md`;
        }
        else {
            // show home page
            pathFallback = null;
        }
        return pathFallback;
    }
    function initialize() {
        // initialize styles and events
        window.onhashchange = blog.loadDocument;
        config.addcodeTag = false;
        config.renderer = new blog.markdown(config);
        console.log(config);
        blog.renderDocument(getTargetFile());
    }
    blog.initialize = initialize;
    function loadDocument() {
        blog.renderDocument(getTargetFile());
    }
    blog.loadDocument = loadDocument;
    /**
     * This function returns title of the article
    */
    function updateArticle(html, time) {
        let h1;
        let dateTag;
        // update article content
        $ts("#article").innerHTML = html;
        h1 = $ts("#article").getElementsByTagName("h1")[0];
        dateTag = $ts("<span>", {
            class: "post-time"
        }).display("#" + time.toLocaleDateString() + "#");
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
    blog.updateArticle = updateArticle;
    const dateTagPattern = /[<][!][-]{2,}\s+\d+([-]\d+){2}\s+[-]{2,}>/g;
    function tryParseDate(markdown) {
        let dateFind = markdown.match(dateTagPattern);
        let dateStr = dateFind ? dateFind[0] : "";
        dateFind = dateStr.match(/\d+([-]\d+){2}/g);
        dateStr = dateFind ? dateFind[0] : null;
        let time;
        if (dateStr) {
            time = new Date(Date.parse(dateStr));
        }
        else {
            time = new Date();
        }
        return time;
    }
    /**
     * Render a given markdown document to html and display on the document body
     *
     * @param ref The document fullname reference or file basename
    */
    function renderDocument(url) {
        let count = 0;
        let renderDocumentInternal = function (markdown) {
            let html;
            if (Strings.Empty(markdown, true)) {
                // 目标文档查找失败
                html = `
<h1>404 Not Found</h1>
<p>The requested URL <strong>${url}</strong> was not found on this server.</p>`;
            }
            else {
                html = marked(markdown, config);
            }
            let title = blog.updateArticle(html, tryParseDate(markdown));
            // push stack
            let frame = new NamedValue(title, $ts.location.hash({
                trimprefix: false
            }));
            if (history.length == 0) {
                $ts("#goback-row").hide();
            }
            else {
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
                        }
                        else {
                            window.location.hash = back.value;
                        }
                    }
                }).display(back.name);
                $ts("#previous-article-title").display(a);
                $ts("#goback-row").show();
            }
            history.push(frame);
        };
        if (isNullOrUndefined(url)) {
            // render the index page when url is null
            blog.initializeTree();
        }
        else {
            // fetch markdown document from server and run renderer
            $ts.getText(url, renderDocumentInternal, {
                nullForNotFound: true
            });
        }
    }
    blog.renderDocument = renderDocument;
})(blog || (blog = {}));
/// <reference path="../build/linq.d.ts" />
/// <reference path="../build/marked.d.ts" />
/// <reference path="../build/vbcode.d.ts" />
/// <reference path="initialize.ts" />
$ts.mode = Modes.debug;
// run web app
$ts(blog.initialize);
var blog;
(function (blog) {
    /**
     * 数据库文件总是位于这个位置的
    */
    const dbfile = "/articles/db.json";
    let blogDb;
    function initializeTree() {
        $ts("goback-row").hide();
        $ts.get(dbfile, json => buildIndex(json));
    }
    blog.initializeTree = initializeTree;
    function buildIndex(db) {
        // 默认是按照时间排序的
        let articles = $ts(db.articles).OrderBy(a => a.time).GroupBy(a => new Date(a.time).getFullYear());
        let displays = articles.Select(g => {
            var grouptitle = $ts("<h3>").display(g.Key.toString());
            var list = g.Select(a => $ts("<div>", { class: "" }).display($ts("<a>", { href: `#${a.url}` }).display(a.title)));
            var section = $ts("<div>");
            section.appendChild(grouptitle);
            list.ForEach(a => section.appendChild(a));
            return section;
        });
        let main = $ts("#article");
        main.clear();
        main.appendChild($ts("<h1>").display("Articles"));
        displays.ForEach(g => main.appendChild(g));
    }
})(blog || (blog = {}));
$ts(function () {
    let size = DOM.clientSize();
    let iframe = document.getElementsByTagName("iframe");
    // fix for padding
    size[0] = size[0] * 0.95;
    if (size[0] <= 500) {
        for (var i = 0; i < iframe.length; i++) {
            let frame = iframe.item(i);
            let w = parseInt((/\d+/ig).exec(frame.width)[0]);
            let h = parseInt((/\d+/ig).exec(frame.height)[0]);
            frame.width = `${size[0]}px`;
            frame.height = `${size[0] * h / w}px`;
        }
    }
});
//# sourceMappingURL=blog.js.map