import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router'
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import store from './store'

React.axios=axios

const app=()=> ReactDOM.render(
    <Router />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
app()
store.subscribe(app)