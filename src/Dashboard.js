import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import { Panel } from 'react-bootstrap';

import WeeklyChart from './WeeklyChart';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      access_token: this.props.location.query.access_token,
      hard_token: 'ff7405e4dab6e7d15c7da9aa611bd2638a6aaf48'
    }
  }

  componentDidMount() {
    // TODO: Move to Reducer
    const url = 'https://todoist.com/API/v7/completed/get_stats'
    fetch(`${url}?token=${this.state.hard_token}`)
      .then(response => response.json())
      .then(response => {
        let date = response.days_items.map((data => {
          let day = moment(data.date).format('dddd');
          data.date = day;
          return data;
        }))
        response.days_items = date.reverse().splice(0,6);
        this.setState({
          data: response
        })
      })

  }

  render() {
    console.log(this.state.data);

    // TODO: Modularize Dashboard widgets
    return (
      <div className="container">
        <Panel header="Weekly Productivity">
          <WeeklyChart data={this.state.data.days_items} />
        </Panel>
      </div>
    );
  }
}

export default Dashboard;