<div class="row">
    <div class="small-12 column" id="article">
        
    </div>
</div>

<script>
$ts.getText("/articles/README.md", markdown => {
let config = markedjs.option.Defaults;
let html = marked(markdown, config);

// update article content
$ts("#article").innerHTML = html;
// and then highligh vb code block
vscode.highlightVB(vbcodeStyle);
});
</script>