import React from 'react';
import ReactDom from 'react-dom';
import './style.less';
import App from './app';

const appElement = document.getElementById('body');
ReactDom.render(<App />, appElement);
