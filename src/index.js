import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Login from './Login';

import 'bootstrap/dist/css/bootstrap.css';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);