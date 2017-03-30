import React from 'react';
import UserInfo from './UserInfo';
import WeekCompleted from './graphs/WeekCompleted';
import Averages from './graphs/Averages';
import Activity from './graphs/Activity';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <WeekCompleted />
        <Averages />
        <Activity />
      </div>
    );
  }
}

export default App;
