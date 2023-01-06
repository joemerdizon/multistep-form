import Image from 'next/image';
import arcadePic from '../../public/icon-arcade.svg';
import proPic from '../../public/icon-pro.svg';
import advancePic from '../../public/icon-advanced.svg';
import styles from '../../styles/Home.module.css';
import Header from './Header';
import { get, map, sumBy } from 'lodash';
import { plansData } from '../../data/plan.data';
import Plan from './Plan';
import React, { useEffect, useState } from 'react';
import { PlanProps } from '../props/PlanProps';
import { useDispatch, useSelector } from 'react-redux';
import { addPlan, changeTerm } from '../../slices/createOrderSlice';
import { RootState } from '../../store';

export default function SelectPlan() {
  const [showFreeMonths, setShowFreeMonths] = React.useState(true);
  const [selectedPlan, setSelectedPlan] = React.useState<string>();
  const [plans, setPlans] = React.useState<PlanProps[]>();

  const dispatch = useDispatch();
  const createOrder = useSelector((state: RootState) => state.createOrder);

  useEffect(() => {
    const plans = map(plansData, (plan) => {
      const planType = get(createOrder.plan, 'type');
      return {
        text: plan.text,
        price: plan.price,
        noOfFreeMonths: plan.noOfFreeMonths,
        showFreeMonths: false,
        active: planType === plan.text ? true : false,
      };
    });
    setPlans(plans);
  }, []);

  function handlePlanClick(planType: string, price: number) {
    const newPlans = map(plans, (plan) => {
      return {
        ...plan,
        active: planType === plan.text ? true : false,
      };
    });
    dispatch(addPlan({ type: planType, price }));
    setPlans(newPlans);
  }

  function handleToogle(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setShowFreeMonths(false);
      dispatch(changeTerm('Yearly'));
    } else {
      setShowFreeMonths(true);
      dispatch(changeTerm('Monthly'));
    }
  }

  function getPlanImage(plan: string) {
    switch (plan) {
      case 'Arcade': {
        return arcadePic;
      }
      case 'Advanced': {
        return advancePic;
      }
      case 'Pro': {
        return proPic;
      }
    }
  }

  function loadPlans() {
    return map(plans, (plan, index) => {
      const { text, price, noOfFreeMonths, active } = plan;

      return (
        <Plan
          key={index}
          text={text}
          price={price}
          noOfFreeMonths={noOfFreeMonths}
          imgSrc={getPlanImage(text)}
          showFreeMonths={showFreeMonths}
          active={active}
          onClicked={handlePlanClick}
        />
      );
    });
  }
  return (
    <>
      <Header
        headerText='Select your plan'
        subHeaderText='You have the option of monthly or yearly billing.'
      />
      <br />
      <div className='w-100'>
        <div className='row row-cols-1 row-cols-md-3'>{loadPlans()}</div>
      </div>

      <div className={`w-100 bg-light ${styles.planSlider}`}>
        <label>Monthly</label>
        <label className={styles.switch}>
          <input type='checkbox' onChange={(e) => handleToogle(e)} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <label className='text-muted'>Yearly</label>
      </div>
    </>
  );
}
