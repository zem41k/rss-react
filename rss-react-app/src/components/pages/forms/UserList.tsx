import React from 'react';
import { IUser } from 'types/types';
import UserItem from './UserItem';

type UserListProps = {
  users: IUser[];
};

export default function UserList(props: UserListProps) {
  const { users } = props;

  return (
    <div className="users__list">
      {users.map((item) => (
        <UserItem user={item} key={item.id!} />
      ))}
    </div>
  );
}
