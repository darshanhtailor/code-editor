const request = require('request')

const runCode = ({stdin, script, lang, version}, callback)=>{
    const program = {
        script : script,
        stdin: stdin,
        language: lang,
        versionIndex: version,
        clientId: "d21cb78a335b3bfc69f727ba0fc7df75",
        clientSecret:"4dba8c36e4bd0ac5bee247b30454ffd1b88b8ea3830b9870c6f196137d2ecda2"
    }
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        json: JSON.stringify(program)
    }, (error, response)=>{
        if(error)
            callback(error)
        else
            callback(undefined, response)
    })
}

module.exports = {
    execute: runCode,
}

