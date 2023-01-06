import styles from '../../styles/Home.module.css';
import Header from './Header';

export default function Summary() {
  return (
    <>
      <Header
        headerText='Finishing up'
        subHeaderText='Double-check everything looks OK before confirming.'
      />
      <br />
      <div className='w-100'>
        <div className='card bg-light border-0 p-3'>
          <div className={styles.summary}>
            <h5>Arcade (Monthly)</h5>
            <p>
              <a href='#'>Change</a>
              <span>$9/mo</span>
            </p>
          </div>
          <hr />
          <p className={`${styles.subHeader} small mb-2`}>
            Online service
            <span className='float-right primary-blue-text-color small'>
              +$1/mo
            </span>
          </p>
          <p className={`${styles.subHeader} small mb-2`}>
            Larger storage
            <span className='float-right primary-blue-text-color small'>
              +$2/mo
            </span>
          </p>
        </div>
        <p className={`${styles.subHeader} small p-3 mb-2`}>
          Total (per month)
          <span className={styles.total}>+$12/mo</span>
        </p>
      </div>
    </>
  );
}
