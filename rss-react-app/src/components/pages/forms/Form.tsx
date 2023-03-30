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
          })}
        />
      </div>

      <button className="form__submit-btn">Submit</button>
    </form>
  );
}
