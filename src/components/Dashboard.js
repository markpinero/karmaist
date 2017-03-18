import React from 'react';
import { connect } from 'react-redux';
import Completed from './Completed';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Completed
          labels={this.props.data.completed.dates}
          data={this.props.data.completed.total_completed}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  data: state.data
});

export default connect(mapStateToProps)(Dashboard);
