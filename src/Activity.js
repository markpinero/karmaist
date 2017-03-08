import React, { Component } from 'react';
import { Section, Insight, Highlight, Description } from './styled-components';
import { Line } from 'react-chartjs-2';

export default class Activity extends Component {
  render() {
    let lineChart = {
      type: 'line',
      data: {
        datasets: [{
          label: 'Completed',
          data: this.props.completed,
          fill: false
        }, {
          label: 'Updated',
          data: this.props.updated,
          fill: false
        }, {
          label: 'Added',
          data: this.props.added
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }]
        }
      }
    }

    return (
      <Section background="blue">
        <Insight background="white">
          <Description>
            Your activity
          </Description>
        </Insight>
      </Section>
    );
  }
}
