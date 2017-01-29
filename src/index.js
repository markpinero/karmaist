import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import Store from './Store';

import App from './App';
// import Authorize from './Authorize';
import Dashboard from './Dashboard';
import Login from './Login';

import 'bootstrap/dist/css/bootstrap.css';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        {/* <Route path="authorize" component={Authorize} /> */}
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);