const express = require('express');
const app = express();

const port = process.env.PORT;

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

app.listen(port, () => console.log('server is running at http://localhost:' + port));