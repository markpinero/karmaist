import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Section,
  Insight,
  Desc,
  Highlight
} from '../../styles/styled-components';
import delay from '../../api/delay';

import data from '../../api/mockCompletedStats';

class WeekCompleted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: {}
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          completed: data
        });
      },
      delay
    );
  }

  render() {
    console.log(this.state);

    let barChart = {
      type: 'bar',
      labels: this.state.completed.dates,
      datasets: [
        {
          backgroundColor: '#578aee',
          data: this.state.completed.total_completed
        }
      ]
    };

    const hiddenLabels = {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{ gridLines: { display: false } }],
        yAxes: [{ gridLines: { display: false }, ticks: { display: false } }]
      }
    };

    const completedChart = <Bar data={barChart} options={hiddenLabels} />;

    return (
      <Section>
        <Insight bg="#fff">
          {completedChart}
          <Desc>
            Your most productive day this past week was
            {' '}
            <Highlight bg="#578aee">{this.state.completed.bestDay}</Highlight>
          </Desc>
        </Insight>
      </Section>
    );
  }
}

export default WeekCompleted;
