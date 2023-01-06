import { map } from 'lodash';
import { addOnsData } from '../../data/addon.data';
import styles from '../../styles/Home.module.css';
import AddOn from './AddOn';
import Header from './Header';
export default function PickAddOns() {
  function loadAddOns() {
    return map(addOnsData, (addOn, index) => {
      const { text, description, price } = addOn;
      return (
        <AddOn
          key={index}
          text={text}
          description={description}
          price={price}
        />
      );
    });
  }

  return (
    <>
      <Header
        headerText='Pick add-ons'
        subHeaderText='Add-ons help enhance your gaming experience.'
      />
      <br />
      <div className='w-100'>
        <div className='row row-cols-1 row-cols-md-1'>{loadAddOns()}</div>
      </div>
    </>
  );
}
