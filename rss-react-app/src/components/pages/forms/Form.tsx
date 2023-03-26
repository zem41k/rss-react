import React, { Component, FormEvent } from 'react';
import { IUser } from 'types/types';

type IFormProps = {
  addUser: (user: IUser) => void;
};

export default class Form extends Component<IFormProps> {
  constructor(props: IFormProps) {
    super(props);
  }

  firstNameRef = React.createRef<HTMLInputElement>();
  lastNameRef = React.createRef<HTMLInputElement>();
  dateOfBirthRef = React.createRef<HTMLInputElement>();
  countryRef = React.createRef<HTMLSelectElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  photoRef = React.createRef<HTMLInputElement>();
  agreementRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const gender: string = this.maleRef.current?.checked ? 'male' : 'female';
    const newUser: IUser = {
      id: new Date().getTime().toString(),
      firstName: this.firstNameRef.current?.value,
      lastName: this.lastNameRef.current?.value,
      dateOfBirth: this.dateOfBirthRef.current?.value,
      country: this.countryRef.current?.value,
      gender: gender,
      photo: this.photoRef.current?.value,
      agreement: this.agreementRef.current?.checked,
    };
    console.log(newUser);
    this.props.addUser(newUser);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__input-box">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form__input-text"
            ref={this.firstNameRef}
          />
        </div>
        <div className="form__input-box">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form__input-text"
            ref={this.lastNameRef}
          />
        </div>
        <div className="form__input-box">
          <label htmlFor="bday">Date of birth:</label>
          <input
            type="date"
            name="bday"
            id="bday"
            className="form__input-date"
            ref={this.dateOfBirthRef}
          />
        </div>
        <div className="form__input-box">
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" className="form__input-text" ref={this.countryRef}>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="China">China</option>
          </select>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              ref={this.maleRef}
              defaultChecked
            />
            <label htmlFor="male"> Male </label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" value="female" ref={this.femaleRef} />
            <label htmlFor="female"> Female </label>
          </div>
        </div>
        <div className="form__input-box">
          <label htmlFor="photo">Upload photo</label>
          <input type="file" name="photo" id="photo" ref={this.photoRef} />
        </div>
        <div>
          <input type="checkbox" name="agreement" id="agreement" ref={this.agreementRef} />
          <label htmlFor="agreement"> I agree to data processing</label>
        </div>
        <button className="form__submit-btn">Submit</button>
      </form>
    );
  }
}
