import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/app';
import {BrowserRouter, Redirect} from 'react-router-dom'; // eslint-disable-line no-undef

ReactDOM.render(
    <BrowserRouter>
        <App/>
        <Redirect to={'/history'}/>
    </BrowserRouter>, // eslint-disable-line no-undef
    document.getElementById('root') // eslint-disable-line no-undef
);