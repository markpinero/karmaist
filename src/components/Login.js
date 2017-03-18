import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.dispatch(handleLogin());
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.handleSubmit}>Login</a>
      </div>
    );
  }
}

export default connect()(Login);
