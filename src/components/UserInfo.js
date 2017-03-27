import React from 'react';
import moment from 'moment';
import delay from '../api/delay';
import {
  UserHeader,
  Heading,
  Avatar,
  JoinDate
} from '../styles/styled-components';

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
          user: data.user
        });
      },
      delay
    );
  }

  render() {
    let avatarUrl = this.state.user.avatar_medium;
    let fullName = `Overview of ${this.state.user.full_name}`;
    let joinDate = moment(this.state.user.join_date).fromNow();
    return (
      <UserHeader>
        <Avatar src={avatarUrl} alt="avatar" />
        <Heading>{fullName}</Heading>
        <JoinDate>Joined Todoist <strong>{joinDate}</strong></JoinDate>
      </UserHeader>
    );
  }
}

export default UserInfo;
