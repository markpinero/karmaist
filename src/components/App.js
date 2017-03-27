import React from 'react';
import UserInfo from './UserInfo';
import WeekCompleted from './graphs/WeekCompleted';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <WeekCompleted />
      </div>
    );
  }
}

export default App;
