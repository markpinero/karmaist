import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {requestToken} from './Actions';

export class Authorize extends Component {
  componentDidMount() {
    // this.props.dispatch(requestToken(this.props.location.query.code));
  }
  render() {
    return null
  }
}

export default connect()(Authorize);