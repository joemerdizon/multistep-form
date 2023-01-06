import { get, map, sumBy } from 'lodash';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from '../../styles/Home.module.css';
import Header from './Header';

export default function Summary() {
  const createOrder = useSelector((state: RootState) => state.createOrder);

  function computeTotal(): number {
    const planPrice = get(createOrder.plan, 'price');
    const sumAddOns = sumBy(createOrder.addOns, (addOn) => addOn.price);

    return (planPrice ? planPrice : 0) + sumAddOns;
  }

  function fetchAddOns() {
    return map(createOrder.addOns, (addOn, index) => {
      return (
        <p key={index} className={`${styles.subHeader} small mb-2`}>
          {addOn.name}
          <span className='float-right primary-blue-text-color small'>
            {`+$${addOn.price}/mo`}
          </span>
        </p>
      );
    });
  }
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
            <h5>
              {createOrder.plan?.type} {`(${createOrder.term})`}
            </h5>
            <p>
              <a href='#'>Change</a>
              <span>{`$${createOrder.plan?.price}/mo`}</span>
            </p>
          </div>
          <hr />
          {fetchAddOns()}
        </div>
        <p className={`${styles.subHeader} small p-3 mb-2`}>
          Total (per month)
          <span className={styles.total}>{`+$${computeTotal()}/mo`}</span>
        </p>
      </div>
    </>
  );
}
