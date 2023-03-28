import React, { Component } from 'react';
import { IUser } from 'types/types';
import Form from './Form';
import UserList from './UserList';

type FormState = {
  users: IUser[];
};

export default class Forms extends Component {
  state: FormState = {
    users: [],
  };

  addUser = (user: IUser) => {
    this.setState({ users: [...this.state.users, user] });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h2 className="forms__title">Add user</h2>
        <Form addUser={this.addUser} />
        <UserList users={this.state.users} />
      </>
    );
  }
}
