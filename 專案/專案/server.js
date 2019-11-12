const express = require('express')
const app = express()
const http = require('http').createServer(app)

app.use('/', express.static('./'))


http.listen(3000, ()=>{
    console.log(' server is listen 3000 ...')
})