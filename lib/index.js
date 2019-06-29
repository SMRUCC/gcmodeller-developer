$ts.getText("/articles/README.md", markdown => {
let config = markedjs.option.Defaults;
let html = marked(markdown, config);
let vbcodeStyle = vscode.VisualStudio;

// update article content
$ts("#article").innerHTML = html;
// and then highligh vb code block
vscode.highlightVB(vbcodeStyle);
});