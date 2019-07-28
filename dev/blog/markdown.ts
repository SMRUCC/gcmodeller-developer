namespace blog {

    /**
     * Website markdown to html render
    */
    export class markdown extends markedjs.htmlRenderer {

        public image(href: string, title: string, text: string): string {
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

        private static isFullName(href: string): boolean {
            return href.toLowerCase().indexOf("://") > -1;
        }

        public blockquote(quote: string): string {
            let lines = Strings.lineTokens(quote);
            let text = "";
            let doi: string;

            for (let line of lines) {
                doi = line.match(/DOI[:]\s*.+?/ig)[0];
                line = line.replace(doi, `<strong>${doi}</strong>`);
                text = text + line + "<br />";
            }

            return `<blockquote>${text}</blockquote>`;
        }

        public code(code: string, infostring: string, escaped: boolean): string {
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
            } else if (lang != "vbnet") {
                let highlight: string = (<any>window).hljs
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
}