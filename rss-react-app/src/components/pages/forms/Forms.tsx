import React, { Component } from 'react';
import Form from './Form';
import UserList from './UserList';

export default class Forms extends Component {
  state = {};

  render() {
    return (
      <>
        <Form />
        <UserList />
      </>
    );
  }
}
