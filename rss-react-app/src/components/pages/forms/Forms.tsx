import React, { useState } from 'react';
import { IUser } from 'types/types';
import Form from './Form';
import UserList from './UserList';

export default function Forms() {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <h2 className="forms__title">Add user</h2>
      <Form addUser={addUser} />
      <UserList users={users} />
    </>
  );
}
