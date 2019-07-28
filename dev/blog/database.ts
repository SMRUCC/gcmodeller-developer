namespace blog {

    export interface database {
        articles: article[];
        lastupdated: number;
    }

    export interface article {
        title: string;
        url: string;
        topics: string[];
        authors: string[];
        time: number;
        external_links: string[];
    }

    /**
     * 数据库文件总是位于这个位置的
    */
    const dbfile: string = "/articles/db.json";

    let blogDb: database;

    export function initializeTree() {
        $ts("goback-row").hide();
        $ts.get(dbfile, json => buildIndex(<any>json));
    }

    function buildIndex(db: database) {
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
        displays.ForEach(g => main.appendChild(g));
    }
}