import React from 'react';
import styles from '../../styles/Home.module.css';
import { AddOnProps } from '../props/AddOnProps';

export default function AddOn(props: AddOnProps) {
  const { text, description, price } = props;

  const [active, setActive] = React.useState(false);

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div className='col mb-3'>
      <div
        className={`card ${styles.addOns} ${
          active ? styles.addOnsActive : styles.addOns
        }`}
      >
        <div className={styles.customCheck}>
          <input
            type='checkbox'
            id='online-services'
            onChange={(e) => handleCheck(e)}
          />
          <label htmlFor='online-services'></label>
        </div>

        <h5>{text}</h5>
        <p>
          {description}
          <small>{price}</small>
        </p>
      </div>
    </div>
  );
}
