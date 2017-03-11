import React, { Component } from 'react';
import { Section, Insight, Highlight, Description } from '../styled-components';
import { Line } from 'react-chartjs-2';

export default class Completed extends Component {
  render() {
    let lineChart = {
      type: 'line',
      labels: this.props.labels,
      datasets: [{
        label: 'Tasks completed',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.props.data
      }]
    };

    const completedChart = <Line data={lineChart} />;

    return (
      <Section background="red">
        <Insight background="white">
          {completedChart}
          <Description>
            Your most productive day this past week was <Highlight>Friday</Highlight>
          </Description>
        </Insight>
      </Section>
    );
  }
}