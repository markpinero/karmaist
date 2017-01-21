import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO move to actions
    window.location = 'https://todoist.com/oauth/authorize?client_id=9f76fb38a227416ea00df4d7e46784a8&scope=data:read&state=helloworld';
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

export default Login;