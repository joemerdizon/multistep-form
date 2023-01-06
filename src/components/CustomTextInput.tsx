import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { CustomInputProps } from '../props/CustomInputProps';

export default function CustomTextInput(props: CustomInputProps) {
  const { id, label, placeHolder, onChange, value, hasError } = props;

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(id, event.target.value);
  }

  return (
    <>
      <div className='form-group'>
        <label htmlFor='name'>{label}</label>
        <small
          id={`${id}Help`}
          className='form-text float-right text-danger font-weight-bold'
        >
          {hasError ? 'This field is required' : null}
        </small>
        <input
          type='text'
          className={`form-control form-control-lg ${
            hasError ? 'input-error' : ''
          } `}
          id={id}
          aria-describedby={`${id}Help`}
          placeholder={placeHolder}
          value={value}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </>
  );
}
