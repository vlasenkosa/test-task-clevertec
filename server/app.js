import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/Components/App/App';
import { Provider } from 'react-redux';
import storeFactory from '../src/Components/StoreFactory/index';
import initialState from '../src/Components/StoreFactory/initialState';
import bodyParser from 'body-parser';
import api from './form-api';

const staticCSS = fs.readFileSync(
    path.join(__dirname, '../public/main.css')
);

const fileAssets = express.static(
    path.join(__dirname, '../public')
);

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
};
const store = storeFactory(initialState);

const renderComponentsToHTML = (store) => (
    {
        html: renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
);

const buildHTMLPage = ({html}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test task CLEVERTEC</title>
    <style>${staticCSS}</style>
</head>
<body>
<div id="react-container">${html}</div>
<script type="text/javascript" src="bundle.js"></script>
</body>
</html>`;

const respond = (req, res) => res.status(200).send(buildHTMLPage(renderComponentsToHTML(store)));

export default express()
    .use(logger)
    .use(fileAssets)
    .use(bodyParser.json())
    .use('/api', api)
    .use(respond)