import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Section,
  Insight,
  Desc,
  Highlight
} from '../../styles/styled-components';
import delay from '../../api/delay';

import data from '../../api/mockActivity';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {}
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          activity: data
        });
      },
      delay
    );
  }

  render() {
    console.log(this.state.activity.data);

    let lineChart = {
      type: 'line',
      labels: this.state.activity.dates,
      datasets: [
        {
          label: 'Completed',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          label: 'Postponed',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          data: [3, 0, 0, 1, 2, 3, 4, 5, 6, 2]
        },
        {
          label: 'Added',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          data: [2, 5, 1, 2, 3, 5, 4, 7, 1, 7]
        }
      ]
    };
    // @TODO: Check postponed to completed/added ratio.
    // @TODO: Tasks completed based on project

    const completedChart = (
      <Line data={lineChart} options={{ animation: { duration: 0 } }} />
    );

    return (
      <Section>
        <Insight bg="#fff">
          {completedChart}
          <Desc>
            Your activity ratio is shit.
          </Desc>
        </Insight>
      </Section>
    );
  }
}

export default Activity;
