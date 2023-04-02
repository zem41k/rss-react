import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { IUser } from 'types/types';

type IFormProps = {
  addUser: (user: IUser) => void;
};

type FormData = {
  firstName: string;
  lastName: string;
  bday: string;
  country: string;
  gender: string;
  photo: FileList;
};

export default function Form(props: IFormProps) {
  const { addUser } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSumbit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSumbit)}>
      <div className="form__input-box">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          className="form__input-text"
          id="firstName"
          autoComplete="off"
          {...register('firstName', {
            required: 'Please, enter your firstname',
            minLength: {
              value: 3,
              message: 'at least 3 characters',
            },
          })}
        />
        {errors?.firstName && (
          <span className="form__error">{errors?.firstName.message || 'Error'}</span>
        )}
      </div>

      <div className="form__input-box">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          className="form__input-text"
          id="lastName"
          autoComplete="off"
          {...register('lastName', {
            required: 'Please, enter your lastname',
            minLength: {
              value: 3,
              message: 'at least 3 characters',
            },
          })}
        />
        {errors?.lastName && (
          <span className="form__error">{errors?.lastName.message || 'Error'}</span>
        )}
      </div>

      <div className="form__input-box">
        <label htmlFor="bday">Date of birth:</label>
        <input
          type="date"
          id="bday"
          className="form__input-date"
          {...register('bday', {
            required: 'Please, enter your bday',
            validate: {
              notFutureDate: (date) =>
                new Date(date).getTime() < new Date().getTime() || 'Enter corret bday date',
            },
          })}
        />
        {errors?.bday && <span className="form__error">{errors?.bday.message || 'Error'}</span>}
      </div>

      <div className="form__input-box">
        <label htmlFor="country">Country:</label>
        <select {...register('country')} id="country" className="form__input-text">
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="China">China</option>
        </select>
      </div>

      <div className="form__input-radio-box">
        <div>
          <input
            {...register('gender', {
              required: 'Enter your gender',
            })}
            type="radio"
            id="male"
            value="male"
          />
          <label htmlFor="male"> Male </label>
        </div>
        <div>
          <input
            {...register('gender', {
              required: 'Enter your gender',
            })}
            type="radio"
            id="female"
            value="female"
          />
          <label htmlFor="female"> Female </label>
        </div>
        {errors?.gender && <span className="form__error">{errors?.gender.message || 'Error'}</span>}
      </div>

      <div className="form__input-box">
        <label htmlFor="photo">Upload photo</label>
        <input {...register('photo')} type="file" id="photo" />
      </div>

      <button className="form__submit-btn">Submit</button>
    </form>
  );
}
