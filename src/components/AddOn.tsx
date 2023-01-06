import React from 'react';
import styles from '../../styles/Home.module.css';
import { AddOnProps } from '../props/AddOnProps';

export default function AddOn(props: AddOnProps) {
  const { text, description, price, checked, onChecked, id } = props;

  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      onChecked && onChecked(text, price, true);
    } else {
      onChecked && onChecked(text, price, false);
    }
  }

  return (
    <div className='col mb-3'>
      <div
        className={`card ${styles.addOns} ${
          checked ? styles.addOnsActive : styles.addOns
        }`}
      >
        <div className={styles.customCheck}>
          <input
            type='checkbox'
            id={`check-add-on-${id}`}
            onChange={(e) => handleCheck(e)}
            defaultChecked={checked}
          />
          <label htmlFor={`check-add-on-${id}`}></label>
        </div>

        <h5>{text}</h5>
        <p>
          {description}
          <small>{`+$${price}/mo`}</small>
        </p>
      </div>
    </div>
  );
}
