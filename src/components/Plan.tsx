import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { PlanProps } from '../props/PlanProps';

export default function Plan(props: PlanProps) {
  const { imgSrc, text, price, noOfFreeMonths } = props;
  return (
    <>
      <div className='col mb-4' role='button'>
        <div className={`card ${styles.plan} ${styles.plan}`}>
          <Image src={imgSrc} alt='' />
          <h5>{text}</h5>
          <p>{`${price}/mo`}</p>
          <small className='small primary-blue-text-color'>{`${noOfFreeMonths} months free`}</small>
        </div>
      </div>
    </>
  );
}
