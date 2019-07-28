/// <reference path="linq.d.ts" />
/// <reference path="marked.d.ts" />
/// <reference path="vbcode.d.ts" />
declare namespace blog {
    /**
     * Website markdown to html render
    */
    class markdown extends markedjs.htmlRenderer {
        image(href: string, title: string, text: string): string;
        private static isFullName;
        code(code: string, infostring: string, escaped: boolean): string;
    }
}
declare namespace blog {
    function initialize(): void;
    function loadDocument(): void;
    /**
     * This function returns title of the article
    */
    function updateArticle(html: string, time: Date): string;
    /**
     * Render a given markdown document to html and display on the document body
     *
     * @param ref The document fullname reference or file basename
    */
    function renderDocument(url: string): void;
}
declare namespace blog {
    interface database {
        articles: article[];
        lastupdated: number;
    }
    interface article {
        title: string;
        url: string;
        topics: string[];
        authors: string[];
        time: number;
        external_links: string[];
    }
    function initializeTree(): void;
}
