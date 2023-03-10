import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { Ubuntu } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Step from '../src/components/Step';
import { stepsData } from '../data/step.data';
import { filter, find, get, gte, isEmpty, lt, lte, map, remove } from 'lodash';
import React, { useState } from 'react';
import PersonalInfo from '../src/components/PersonalInfo';
import SelectPlan from '../src/components/SelectPlan';
import PickAddOns from '../src/components/PickAddOns';
import Summary from '../src/components/Summary';
import ThankYou from '../src/components/ThankYou';
import { Error } from '../libs/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { PersonalInfoDto } from '../libs/dto/order.dto';
import { addError, updateErrors } from '../slices/createOrderSlice';

const ubuntu = Ubuntu({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [errors, setErros] = React.useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoDto>();

  const dispatch = useDispatch();
  const createOrder = useSelector((state: RootState) => state.createOrder);

  React.useEffect(() => {
    setPersonalInfo(createOrder.personalInfo);
  }, []);

  function checkStep() {
    switch (activeStep) {
      case 1: {
        return <PersonalInfo data={personalInfo} erros={errors} />;
      }
      case 2: {
        return <SelectPlan />;
      }
      case 3: {
        return <PickAddOns />;
      }
      case 4: {
        return <Summary />;
      }
      case 5: {
        return <ThankYou />;
      }
    }
  }

  function loadSteps() {
    return map(stepsData, (step, index) => {
      const { order, text } = step;
      return (
        <Step
          key={index}
          order={order}
          text={text}
          active={order === activeStep ? true : false}
        />
      );
    });
  }

  function validatePersonalInfo(): boolean {
    let flag: boolean = true;
    let updatedErrors: string[] = [];
    const name = get(createOrder.personalInfo, 'name');
    const email = get(createOrder.personalInfo, 'email');
    const phoneNumber = get(createOrder.personalInfo, 'phoneNumber');

    console.log(isEmpty(createOrder.errors));

    if (name === '') {
      !find(createOrder.errors, (err) => err === 'name') &&
        dispatch(addError('name'));
      flag = false;
    } else {
      updatedErrors = filter(createOrder.errors, (err) => err !== 'name');
      dispatch(updateErrors(updatedErrors));
    }

    if (email === '') {
      !find(createOrder.errors, (err) => err === 'email') &&
        dispatch(addError('email'));
      flag = false;
    } else {
      updatedErrors = filter(createOrder.errors, (err) => err !== 'email');
      dispatch(updateErrors(updatedErrors));
    }

    if (phoneNumber === '') {
      !find(createOrder.errors, (err) => err === 'phoneNumber') &&
        dispatch(addError('phoneNumber'));
      flag = false;
    } else {
      updatedErrors = filter(
        createOrder.errors,
        (err) => err !== 'phoneNumber'
      );
      dispatch(updateErrors(updatedErrors));
    }

    return flag;
  }

  function handleNextStep() {
    const isFormValid = validatePersonalInfo();

    /*if (isEmpty(createOrder.personalInfo?.name)) {
      const errorIsExist = find(errors, (error) => error === 'name');
      !errorIsExist && setErros([...errors, 'name']);
    } else {
      const newErrors = filter(errors, (error) => error !== 'name');
      setErros(newErrors);
    }

    if (isEmpty(createOrder.personalInfo?.email)) {
      const errorIsExist = find(errors, (error) => error === 'email');
      !errorIsExist && setErros([...errors, 'email']);
    } else {
      const newErrors = filter(errors, (error) => error !== 'email');
      setErros(newErrors);
    }

    if (isEmpty(createOrder.personalInfo?.phoneNumber)) {
      const errorIsExist = find(errors, (error) => error === 'phoneNumber');
      !errorIsExist && setErros([...errors, 'phoneNumber']);
    } else {
      const newErrors = filter(errors, (error) => error !== 'phoneNumber');
      setErros(newErrors);
    }*/

    if (isFormValid) {
      if (lte(stepsData.length, 4)) {
        setActiveStep(activeStep + 1);
      }
    }
  }

  function handleBack() {
    if (gte(activeStep, 2)) {
      setActiveStep(activeStep - 1);
    }
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | Multi-step form</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <main className={`${styles.main} ${ubuntu.className}`}>
        <div className='container d-flex h-100'>
          <div className='row justify-content-center align-self-center w-100'>
            <div className={`col-12 card ${styles.cardMain}`}>
              <div className='row h-100'>
                <div
                  className={`col-sm-3 p-4 m-4 ${styles.sidePanelBackground}`}
                >
                  {loadSteps()}
                </div>
                <div className='form-options-wrapper offset-1 col-sm-6 pt-5'>
                  {checkStep()}

                  {lte(activeStep, 4) ? (
                    <div className={`w-100 ${styles.formOptionsFooter}`}>
                      {gte(activeStep, 2) ? (
                        <button
                          className={`btn ${styles.btnCustom} btn-lg float-left`}
                          onClick={handleBack}
                        >
                          Go Back
                        </button>
                      ) : null}
                      <button
                        className={`btn ${styles.btnPrimaryCustom} btn-lg float-right`}
                        onClick={() => handleNextStep()}
                      >
                        {`${lte(activeStep, 3) ? 'Next Step' : 'Confirm'}`}
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='attribution mt-5'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target=''>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Your Name Here</a>.
        </div>
      </main>
    </>
  );
}
