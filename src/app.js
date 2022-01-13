const express = require('express')
const path = require('path')
const runCode = require('./utils/runCode')
const request = require('request')

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/execute', (req, res)=>{
    const qry = req.query
    if(!qry.stdin){
        res.send('Missing stdin')
    }
    else if(!qry.script){
        res.send('Missing script')
    }
    else if(!qry.lang){
        res.send('Missing language')
    }
    else if(!qry.version){
        res.send('Missing version')
    }
    runCode.execute(qry.stdin, qry.script, qry.lang, qry.version, (error, response)=>{
        if(error){
            return res.send(error)
        }
        res.send(response)
    })
})

app.listen(3000, ()=>{
    console.log('Server started')
})