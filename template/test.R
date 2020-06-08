imports "html" from "reportKit";

as.object(template("./index.html"))$html :> writeLines(con = "./tmp.html");