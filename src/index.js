import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './Store';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);