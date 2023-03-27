import React, { Component, FormEvent } from 'react';
import { IUser } from 'types/types';

type IFormProps = {
  addUser: (user: IUser) => void;
};

type IFormState = {
  isValidFirstname: boolean;
  isValidLastname: boolean;
  isValidDateInput: boolean;
  isValidCountry: boolean;
  isValidGender: boolean;
  isValidPhoto: boolean;
  isAgreement: boolean;
  isPopapShow: boolean;
};

export default class Form extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      isValidFirstname: true,
      isValidLastname: true,
      isValidDateInput: true,
      isValidCountry: true,
      isValidGender: true,
      isValidPhoto: true,
      isAgreement: true,
      isPopapShow: false,
    };
  }

  formRef = React.createRef<HTMLFormElement>();
  firstNameRef = React.createRef<HTMLInputElement>();
  lastNameRef = React.createRef<HTMLInputElement>();
  dateOfBirthRef = React.createRef<HTMLInputElement>();
  countryRef = React.createRef<HTMLSelectElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  photoRef = React.createRef<HTMLInputElement>();
  agreementRef = React.createRef<HTMLInputElement>();

  validateFirstName() {
    const firstNameValue = this.firstNameRef.current?.value;
    const isValidFirstname = firstNameValue?.trim() !== '' && firstNameValue!.length > 3;
    this.setState({ isValidFirstname });
    return isValidFirstname;
  }
  validateLastName() {
    const lastNameValue = this.lastNameRef.current?.value;
    const isValidLastname = lastNameValue?.trim() !== '' && lastNameValue!.length > 3;
    this.setState({ isValidLastname });
    return isValidLastname;
  }

  validateDateInput() {
    const dateInputValue = this.dateOfBirthRef.current?.value;
    const isValidDate = dateInputValue !== '';
    this.setState({ isValidDateInput: isValidDate });
    return isValidDate;
  }

  validatePhoto() {
    const photoInputValue = this.photoRef.current!.files![0];
    const isValidPhoto = photoInputValue !== undefined;
    this.setState({ isValidPhoto });
    return isValidPhoto;
  }

  validateAgreement() {
    const agreementValue = this.agreementRef.current!.checked;
    this.setState({ isAgreement: agreementValue });
    return agreementValue;
  }

  validateForm() {
    const isValidForm = [
      this.validateFirstName(),
      this.validateLastName(),
      this.validateDateInput(),
      this.validatePhoto(),
      this.validateAgreement(),
    ].every((item) => item === true);
    return isValidForm;
  }

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
      photo: this.photoRef.current!.files![0],
      agreement: this.agreementRef.current?.checked,
    };
    console.log(newUser);
    console.log(this.state);
    if (this.validateForm()) {
      this.setState({ isPopapShow: true });
      setTimeout(() => {
        this.setState({ isPopapShow: false });
      }, 2000);
      this.props.addUser(newUser);
      this.formRef.current?.reset();
    }
    console.log(this.photoRef.current?.files);
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
          <div className="form__input-box">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form__input-text"
              ref={this.firstNameRef}
            />
            <span className="form__error" hidden={this.state.isValidFirstname}>
              Please enter your name
            </span>
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
            <span className="form__error" hidden={this.state.isValidLastname}>
              Please enter your lastname
            </span>
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
            <span className="form__error" hidden={this.state.isValidDateInput}>
              Please enter your bday
            </span>
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
            <span className="form__error" hidden={this.state.isValidPhoto}>
              Please upload your photo
            </span>
          </div>
          <div className="form__check-box">
            <input type="checkbox" name="agreement" id="agreement" ref={this.agreementRef} />
            <label htmlFor="agreement"> I agree to data processing</label>
            <div>
              <span className="form__error" hidden={this.state.isAgreement}>
                Please argree with data processing
              </span>
            </div>
          </div>
          <button className="form__submit-btn">Submit</button>
        </form>
        <div className="message" hidden={!this.state.isPopapShow}>
          User add sucess!
        </div>
      </>
    );
  }
}
