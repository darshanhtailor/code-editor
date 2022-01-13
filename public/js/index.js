// Setting up editor
let editor = ace.edit("editor")
editor.session.setMode("ace/mode/c_cpp")
editor.setTheme("ace/theme/monokai")
editor.setFontSize(20)
editor.setShowPrintMargin(false)

// Changing language
$('#langs').change(()=>{
    editor.session.setMode("ace/mode/" + $('#langs').val())
})

// Changing theme
$('#themes').change(()=>{
    editor.setTheme("ace/theme/" + $('#themes').val())
})

// Execute code
const execute = ()=>{
    const stdin
}

$('#runButton').click(execute())