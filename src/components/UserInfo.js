import React from 'react';
import { UserHeader } from '../styles/styled-components';

import data from '../api/mockUser';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          user: data
        });
      },
      1000
    );
  }

  render() {
    console.log(this.state);
    return (
      <UserHeader>
        Overview of
      </UserHeader>
    );
  }
}

export default UserInfo;
