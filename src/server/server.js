import React from 'react';
import express from 'express';
const app = express();
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import App from '../js/app';
const fs = require('fs');

const port = process.env.PORT;

app.use(express.static(__dirname));

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const indexFile = './dist/index.html';
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('whoops! this page did not load correctly!');
        }

        if (context.status === 404) {
            res.status(404);
        }

        if (context.url) {
            return res.redirect(301, context.url);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.listen(port);