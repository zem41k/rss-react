import React, { Component } from 'react';
import { IUser } from 'types/types';
import UserItem from './UserItem';

type UserListProps = {
  users: IUser[];
};

export default class UserList extends Component<UserListProps> {
  constructor(props: UserListProps) {
    super(props);
  }
  render() {
    return (
      <div className="users__list">
        {this.props.users.map((item) => (
          <UserItem user={item} key={item.id!} />
        ))}
      </div>
    );
  }
}
