import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './components/Main';
import 'antd-mobile/dist/antd-mobile.css';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
