const express = require('express')
const path = require('path')
const runCode = require('./utils/runCode')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/execute', jsonParser, (req, res)=>{
    runCode.execute(req.body, (error, response)=>{
        if(error){
            return res.send(error)
        }
        res.send(response)
    })
})

app.listen(3000, ()=>{
    console.log('Server started')
})