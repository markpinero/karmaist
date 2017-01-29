import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LoginAPI} from './Actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(LoginAPI());
  }

  render() {
    return (
      <div className="container text-center">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      )
  }
}

export default connect()(Login);