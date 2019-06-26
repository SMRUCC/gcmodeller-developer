var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var blog;
(function (blog) {
    /**
     * Website markdown to html render
    */
    var markdown = /** @class */ (function (_super) {
        __extends(markdown, _super);
        function markdown() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        markdown.prototype.image = function (href, title, text) {
            href = markedjs.helpers.cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) {
                return text;
            }
            else if (!markdown.isFullName(href)) {
                href = "/docs/" + href;
            }
            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) {
                out += ' title="' + title + '"';
            }
            out += this.options.xhtml ? '/>' : '>';
            return out;
        };
        markdown.isFullName = function (href) {
            return href.toLowerCase().indexOf("://") > -1;
        };
        markdown.prototype.code = function (code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(code, lang);
                if (out != null && out !== code) {
                    escaped = true;
                    code = out;
                }
            }
            if (!lang) {
                return '<pre><code>'
                    + (escaped ? code : markedjs.helpers.escape.doescape(code, true))
                    + '</code></pre>';
            }
            else if (lang != "vbnet") {
                var highlight = window.hljs
                    .highlightAuto(code)
                    .value;
                code = "<pre><code class=\"highlight " + lang + " hljs\">" + highlight + "</code></pre>";
                return code;
            }
            return '<pre><code class="highlight ' + lang + '">'
                + (escaped ? code : markedjs.helpers.escape.doescape(code, true))
                + '</code></pre>\n';
        };
        return markdown;
    }(markedjs.htmlRenderer));
    blog.markdown = markdown;
})(blog || (blog = {}));
/// <reference path="markdown.ts" />
var blog;
(function (blog) {
    var config = markedjs.option.Defaults;
    var vbcodeStyle = vscode.VisualStudio;
    /**
     * A stack for enable back to previous article
    */
    var history = [];
    function getTargetFile(fileName) {
        if (fileName === void 0) { fileName = $ts.location.hash(); }
        var pathFallback;
        if (!Strings.Empty(fileName, true)) {
            pathFallback = "/articles/" + fileName + ".md";
        }
        else {
            // show home page
            pathFallback = "/README.md";
        }
        return pathFallback;
    }
    function initialize() {
        // initialize styles and events
        window.onhashchange = blog.loadDocument;
        config.renderer = new blog.markdown();
        // vbcodeStyle.lineHeight = "5px";
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
        var h1;
        var dateTag;
        // update article content
        $ts("#article").innerHTML = html;
        // and then highligh vb code block
        vscode.highlightVB(vbcodeStyle);
        h1 = $ts("#article").getElementsByTagName("h1")[0];
        dateTag = $ts("<span>", {
            style: "color: grey; font-size: 0.8em;"
        }).display("#" + time.toLocaleDateString() + "#");
        var diff = Date.now() - time.getTime();
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (!isNullOrUndefined(h1)) {
            document.title = h1.innerText;
            h1.insertAdjacentElement("afterend", dateTag);
            if (days > 30) {
                var warn = $ts("<p>", {
                    style: "color: lightgrey; background-color: yellow;"
                }).display("This article is posted " + days + " days before, information in this article may be obsolete...");
                dateTag.insertAdjacentElement("afterend", warn);
                dateTag.insertAdjacentElement("afterend", $ts("<br>"));
            }
        }
        return h1.innerText;
    }
    blog.updateArticle = updateArticle;
    /**
     * Render a given markdown document to html and display on the document body
     *
     * @param ref The document fullname reference or file basename
    */
    function renderDocument(ref) {
        var count = 0;
        var url = getTargetFile(ref);
        var renderDocumentInternal = function (markdown) {
            var html;
            if (Strings.Empty(markdown, true)) {
                // 目标文档查找失败
                html = "\n<h1>404 Not Found</h1>\n<p>The requested URL <strong>" + url + "</strong> was not found on this server.</p>";
            }
            else {
                html = marked(markdown, config);
            }
            var date = markdown.match(/[<][!][-]{2,}\s+\d+([-]\d+){2}\s+[-]{2,}>/g)[0];
            var time = new Date(Date.parse(date.match(/\d+([-]\d+){2}/g)[0]));
            var title = blog.updateArticle(html, time);
            // push stack
            var frame = new NamedValue(title, $ts.location.hash({
                trimprefix: false
            }));
            if (history.length == 0) {
                $ts("#goback").hide();
            }
            else {
                var back_1 = history[history.length - 1];
                var a = $ts("<a>", {
                    title: back_1.name,
                    href: executeJavaScript,
                    onclick: function () {
                        if (history.length > 0) {
                            history.pop();
                        }
                        if (back_1.value == window.location.hash) {
                            $ts("goback").hide();
                        }
                        else {
                            window.location.hash = back_1.value;
                        }
                    }
                }).display(back_1.name);
                $ts("#previous-article-title").display(a);
                $ts("#goback").show();
            }
            history.push(frame);
        };
        if (isNullOrUndefined(url)) {
            // stop render when path is nothing
            return;
        }
        // fetch markdown document from server and run renderer
        $ts.getText(url, renderDocumentInternal, {
            nullForNotFound: true
        });
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
//# sourceMappingURL=blog.js.map