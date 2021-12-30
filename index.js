// Setting up editor
let editor = ace.edit("editor")
editor.session.setMode("ace/mode/c_cpp")
editor.setTheme("ace/theme/monokai")
editor.setFontSize(20)
editor.setShowPrintMargin(false)

// Changing language
$('#langs').change(()=>{
    editor.session.setMode("ace/mode/" + $('#langs').val())
});

// Changing theme
$('#themes').change(()=>{
    editor.setTheme("ace/theme/" + $('#themes').val())
});

// Executing code
// var request = require('request');

// var program = {
//     script : `
//     #include <bits/stdc++.h>
//     using namespace std;
//     typedef long long int ll;

//     int main(){
//         int n;
//         cin >> n;
//         cout << "Hello World! " << n;
//         return 0;
//     }
//     `,
//     // stdin: ,
//     language: "cpp17",
//     versionIndex: "0",
//     clientId: "d21cb78a335b3bfc69f727ba0fc7df75",
//     clientSecret:"4dba8c36e4bd0ac5bee247b30454ffd1b88b8ea3830b9870c6f196137d2ecda2"
// };
// request({
//     url: 'https://api.jdoodle.com/v1/execute',
//     method: "POST",
//     json: program
// },
// function (error, response) {
//     if(error)
//         console.log('Unable to reach the server. Please check your network.')
//     else
//         console.log(response.body.output);
// });