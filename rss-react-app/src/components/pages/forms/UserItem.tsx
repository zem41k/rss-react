import React, { Component } from 'react';
import { IUser } from 'types/types';

type UserProps = {
  user: IUser;
  key: string;
};

export default class UserItem extends Component<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }
  render() {
    return (
      <div className="users__item user">
        <div className="user__photo-box">
          <img
            className="user__photo"
            src={URL.createObjectURL(this.props.user.photo)}
            alt="photo"
          />
        </div>
        <h2 className="user__name">
          {this.props.user.firstName! + ' ' + this.props.user.lastName}
        </h2>
        <p className="user__dob">Born: {this.props.user.dateOfBirth}</p>
        <p className="user__country">Country: {this.props.user.country}</p>
        <p className="user__gender">Gender: {this.props.user.gender}</p>
      </div>
    );
  }
}
