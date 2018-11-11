const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
console.log('DIR', __dirname)
app.use(serveStatic(__dirname + '../dist'))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
