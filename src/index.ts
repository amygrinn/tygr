import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';

const app = React.createElement(App);
const router = React.createElement(BrowserRouter, {}, app);

ReactDOM.render(router, document.getElementById('app'));
