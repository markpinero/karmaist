import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section, Insight, Highlight, Description } from './styled-components';
import { Line } from 'react-chartjs-2';

export class Dashboard extends Component {
  render() {
    let lineChart = {
      type: 'line',
      labels: this.props.data.dates,
      datasets: [{
        label: 'Tasks completed',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: this.props.data.total_completed
      }],
      options: {
        responsive: true
      }
    };

    const completedChart = <Line data={lineChart} />;

    return (
      <div>
        <Section background="red">
          <Insight background="white">
            {completedChart}
            <Description>
              Your most productive day this past week was <Highlight>Wednesday</Highlight>
            </Description>
          </Insight>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  token: state.token,
  data: state.data
})

export default connect(mapStateToProps)(Dashboard);