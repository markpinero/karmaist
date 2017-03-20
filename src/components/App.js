import React, { Component } from 'react';
import { handleLogin } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a
          href="#"
          onClick={() => {
            this.props.dispatch(handleLogin(true));
          }}>
          Login
        </a>
      </div>
    );
  }
}

export default connect()(App);
