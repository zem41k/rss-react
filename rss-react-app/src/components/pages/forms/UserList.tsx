import React, { Component } from 'react';
import UserItem from './UserItem';

export default class UserList extends Component {
  render() {
    return (
      <div>
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    );
  }
}
