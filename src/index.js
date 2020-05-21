import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/app';
import {BrowserRouter, Redirect} from 'react-router-dom'; // eslint-disable-line no-undef

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

ReactDOM.render(
    <BrowserRouter basename={'/barcelona'}>
        <App/>
        <Redirect to={'/history'}/>
    </BrowserRouter>, // eslint-disable-line no-undef
    document.getElementById('root')); // eslint-disable-line no-undef