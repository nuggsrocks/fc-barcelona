import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './js/app';

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

ReactDOM.render(<App/>, document.getElementById('root')); // eslint-disable-line no-undef