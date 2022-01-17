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
    let stdin = $('#input').val()
    if(!stdin) stdin = ''

    let script = editor.getValue()
    if(!script) script = ''

    let version
    let lang = $('#langs option:selected').text()
    if(lang == 'C'){
        lang = 'c'
        version = 5
    }
    else if(lang == 'C++ 17'){
        lang = 'cpp17'
        version = 1
    }
    else if(lang == 'Python 3'){
        lang = 'python3'
        version = 4
    }
    else if(lang == 'Java'){
        lang = 'java'
        version = 4
    }
    else if(!lang){
        lang = ''
        version = 0
    }

    const program = {stdin, script, lang, version}

    fetch('/execute',{
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(program)
    }).then((response)=>{
        response.json().then((programOutput)=>{
            if(programOutput.error){
                return console.log(programOutput.error)
            }
            displayOutput(programOutput.body.output)
        })
    })
}

// Display output
const displayOutput = (output)=>{
    
}

const runBtn = document.getElementById('runButton')
runBtn.addEventListener('click', execute)