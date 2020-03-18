import React from 'react';
import ReactDom from 'react-dom';
import "./style.less";
import App from './app';
import initialize from './core/initialize.js'

const appElement = document.getElementById('body');
ReactDom.render(<App />, appElement);

initialize();
