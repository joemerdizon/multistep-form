import styles from '../../styles/Home.module.css';
import { StepProp } from '../props/StepProps';

export default function Step(props: StepProp) {
  const { order, text, active } = props;
  return (
    <a href='index.html'>
      <div className='row pt-4'>
        <div className='col-2'>
          <div className={`${active ? styles.circleActive : styles.circle}`}>
            {`${order}`}
          </div>
        </div>
        <div className='col-10 pl-4'>
          <p className={styles.step}>{`STEP ${order}`}</p>
          <p className={styles.stepDescription}>{text}</p>
        </div>
      </div>
    </a>
  );
}
