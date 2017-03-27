import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';

class routes extends React.Component {
  render() {
    return <Route exact path="/" component={App} />;
  }
}

export default routes;
