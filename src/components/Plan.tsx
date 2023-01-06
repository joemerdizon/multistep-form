import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { PlanProps } from '../props/PlanProps';
import { useEffect } from 'react';

export default function Plan(props: PlanProps) {
  const {
    imgSrc,
    text,
    price,
    noOfFreeMonths,
    showFreeMonths,
    active,
    onClicked,
  } = props;

  function handleOnclicked() {
    onClicked && onClicked(text, price);
  }

  return (
    <>
      <div className='col mb-4' role='button' onClick={handleOnclicked}>
        <div
          className={`card ${styles.plan} ${
            active ? styles.planActive : styles.plan
          }`}
        >
          <Image src={imgSrc ? imgSrc : ''} alt='' />
          <h5>{text}</h5>
          <p>{`$${price}/mo`}</p>
          {showFreeMonths ? (
            <small className='small primary-blue-text-color'>{`${noOfFreeMonths} months free`}</small>
          ) : null}
        </div>
      </div>
    </>
  );
}
