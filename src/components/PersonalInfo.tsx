import { find, isEmpty } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonalInfoDto } from '../../libs/dto/order.dto';
import { Error } from '../../libs/types';
import { updatePersonalInfo } from '../../slices/createOrderSlice';
import { RootState } from '../../store';
import styles from '../../styles/Home.module.css';
import { PersonalInfoProps } from '../props/PersonalInfoProps';
import CustomTextInput from './CustomTextInput';
import Header from './Header';

export default function PersonalInfo(props: PersonalInfoProps) {
  const { data, erros } = props;

  const dispatch = useDispatch();
  const createOrder = useSelector((state: RootState) => state.createOrder);

  function handleFieldChange(field: string, value: string) {
    dispatch(
      updatePersonalInfo({
        ...createOrder.personalInfo,
        [field]: value,
      })
    );
  }

  function checkIfHasError(field: string): boolean {
    return find(createOrder.errors, (err) => err === field) ? true : false;
  }

  return (
    <>
      <Header
        headerText='Personal info'
        subHeaderText='Please provide your name, email address, and phone number.'
      />
      <br />

      <CustomTextInput
        id='name'
        label='Name'
        placeHolder='e.g. Stephen King'
        onChange={handleFieldChange}
        value={createOrder.personalInfo?.name}
        hasError={checkIfHasError('name')}
      />

      <CustomTextInput
        id='email'
        label='Email Address'
        placeHolder='e.g. stephenking@lorem.com'
        onChange={handleFieldChange}
        value={createOrder.personalInfo?.email}
        hasError={checkIfHasError('email')}
      />

      <CustomTextInput
        id='phoneNumber'
        label='Phone Number'
        placeHolder='e.g. +1 234 567 890'
        onChange={handleFieldChange}
        value={createOrder.personalInfo?.phoneNumber}
        hasError={checkIfHasError('phoneNumber')}
      />
    </>
  );
}
