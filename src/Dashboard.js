import React, { Component } from 'react';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
// import moment from 'moment';
import { connect } from 'react-redux';
import { Section, Insight, Highlight, Description } from './styled-components';
import { Line } from 'react-chartjs-2';

var lineChart = {
  type: 'line',
  labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [{
    label: 'Tasks completed',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [6, 3, 7, 7, 17, 3, 9]
  }],
  options: {
    responsive: true
  }
};

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: {}
    }
  }

  fetchActivity() {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${this.props.location.query.access_token}&limit=100`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let completed = [];

        _.eachRight(response.days_items, (value, key) => {
          let obj = {
            day: value.date
          }

          completed.push(obj);
        })

        console.log(completed);

        // let completedFunc = _.eachRight(response.days_items, (value, key) => {
        //   let completed = value.total_completed;
        //   console.log(completed);
        // })
        // console.log(completedFunc);

        // let completed = .map((day, index) => {

        //   let date = {};
        //   date[day] = moment(day.date).format('dddd');
        //   // date[day.total_completed] = day.total_completed;

        //   return date;

        // }).reverse();

        // let completedDays = _.map(
        //   response.days_items,
        //   'date').reverse();
        // completedDays = completedDays.map(day => {
        //   return moment(day).format('dddd')
        //   })

        // let data = {
        //   completed: completed
        // }

        // this.parseData(data);
      })
  }

  parseData(props) {
    console.log(props);
    this.setState({
      newData: props
    })
  }

  componentDidMount() {
    this.fetchActivity();
  }

  render() {

    return (
      <div>
        <Section background="red">
          <Insight background="white">
            <Line data={lineChart} />
            <Description>
              Your most productive day this past week was <Highlight>Wednesday</Highlight>
            </Description>
          </Insight>
        </Section>
{/*        <Section background="blue">
          <Insight background="white">

            <Description>
              Your most productive day this past week was <Highlight>Wednesday</Highlight>
            </Description>
          </Insight>
        </Section> */}
      </div>
    );
  }
}

export default connect()(Dashboard);