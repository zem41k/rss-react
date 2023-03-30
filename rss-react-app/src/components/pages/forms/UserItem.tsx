import React from 'react';
import { IUser } from '../../../types/types';

type UserProps = {
  user: IUser;
  key: string;
};

export default function UserItem(props: UserProps) {
  const { user } = props;

  return (
    <div className="users__item user">
      <div className="user__photo-box">
        <img className="user__photo" src={URL.createObjectURL(user.photo)} alt="photo" />
      </div>
      <h2 className="user__name">{user.firstName! + ' ' + user.lastName}</h2>
      <p className="user__dob">Born: {user.dateOfBirth}</p>
      <p className="user__country">Country: {user.country}</p>
      <p className="user__gender">Gender: {user.gender}</p>
    </div>
  );
}
