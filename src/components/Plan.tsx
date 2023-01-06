import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { PlanProps } from '../props/PlanProps';

export default function Plan(props: PlanProps) {
  const { imgSrc, text, price, noOfFreeMonths, showFreeMonths, active } = props;
  return (
    <>
      <div className='col mb-4' role='button' onClick={() => console.log('foo')}>
        <div className={`card ${styles.plan} ${ active ? styles.planActive : styles.plan}`}>
          <Image src={imgSrc} alt='' />
          <h5>{text}</h5>
          <p>{`${price}/mo`}</p>
          { showFreeMonths ? <small className='small primary-blue-text-color'>{`${noOfFreeMonths} months free`}</small> : null}
        </div>
      </div>
    </>
  );
}
