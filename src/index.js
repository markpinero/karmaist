import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './Store';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Test from './components/Test';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="test" component={Test} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
