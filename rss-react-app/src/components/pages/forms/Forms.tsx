import React, { Component } from 'react';
import Form from './Form';
import UserList from './UserList';

export default class Forms extends Component {
  state = {
    cards: [],
  };

  render() {
    return (
      <>
        <Form />
        <UserList />
      </>
    );
  }
}
