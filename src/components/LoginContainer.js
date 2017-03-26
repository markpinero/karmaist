import React from 'react';
import cookie from 'react-cookie';
import { onLogin } from '../actions';
import Login from './Login';
import Dashboard from './Dashboard';

class LoginContainer extends React.Component {
  componentWillMount() {
    this.state = { userId: cookie.load(config.session.key) };
  }

  onLogin(userId) {
    this.setState({ userId });

  }

  render() {
    return (

    )
  }
}
