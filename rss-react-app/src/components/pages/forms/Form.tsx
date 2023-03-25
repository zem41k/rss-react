import React, { Component } from 'react';

interface IFormProps {
  addCard: (event: MouseEvent) => void;
}

export default class Form extends Component {
  constructor(props: IFormProps) {
    super(props);
  }
  render() {
    return (
      <form className="form">
        <div className="form__input-box">
          <label htmlFor="firstName">First name:</label>
          <input type="text" name="firstName" id="firstName" className="form__input-text" />
        </div>
        <div className="form__input-box">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" id="lastName" className="form__input-text" />
        </div>
        <div className="form__input-box">
          <label htmlFor="bday">Date of birth:</label>
          <input type="date" name="bday" id="bday" className="form__input-date" />
        </div>
        <div className="form__input-box">
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" className="form__input-text">
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="China">China</option>
          </select>
        </div>
        <div>
          <div>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male"> Male </label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female"> Female </label>
          </div>
        </div>
        <div className="form__input-box">
          <label htmlFor="photo">Upload photo</label>
          <input type="file" name="photo" id="photo" />
        </div>
        <div>
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement"> I agree to data processing</label>
        </div>
        <button className="form__submit-btn">Submit</button>
      </form>
    );
  }
}
