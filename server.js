const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

app.listen(port, host, () => console.log('Server is listening at http://' + host + ':' + port))