import React, { Component } from 'react';
import { connect } from 'react-redux';
import Completed from './Completed';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <center>
          {/*}<img
            src={this.props.user.avatar}
            alt="avatar"
            style={{ borderRadius: '50%' }}
          />*/}
        </center>
        <h1>Overview of <strong>{this.props.user.name}</strong></h1>
        <Completed
          labels={this.props.data.completed.dates}
          data={this.props.data.completed.total_completed}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  data: state.data,
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);
