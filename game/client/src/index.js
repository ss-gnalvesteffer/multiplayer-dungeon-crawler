import React from 'react';
import ReactDom from 'react-dom';
import './style.less';
import App from './app';

const appElement = document.getElementById('app');
ReactDom.render(<App />, appElement);
