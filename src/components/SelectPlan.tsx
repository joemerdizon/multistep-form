import Image from 'next/image';
import arcadePic from '../../public/icon-arcade.svg';
import proPic from '../../public/icon-pro.svg';
import advancePic from '../../public/icon-advanced.svg';
import styles from '../../styles/Home.module.css';
import Header from './Header';
import { map } from 'lodash';
import { plansData } from '../../data/plan.data';
import Plan from './Plan';

export default function SelectPlan() {
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
    return map(plansData, (plan, index) => {
      const { text, price, noOfFreeMonths } = plan;

      return (
        <Plan
          key={index}
          text={text}
          price={price}
          noOfFreeMonths={noOfFreeMonths}
          imgSrc={getPlanImage(text)}
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
          <input type='checkbox' />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <label className='text-muted'>Yearly</label>
      </div>
    </>
  );
}
