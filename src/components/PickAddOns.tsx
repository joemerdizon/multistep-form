import { filter, find, get, map, remove, sumBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOnsData } from '../../data/addon.data';
import { addAddOn, updateAddOns } from '../../slices/createOrderSlice';
import { RootState } from '../../store';
import { AddOnProps } from '../props/AddOnProps';
import AddOn from './AddOn';
import Header from './Header';
export default function PickAddOns() {
  const [addOns, setAddOns] = useState<AddOnProps[]>([]);

  const dispatch = useDispatch();
  const createOrder = useSelector((state: RootState) => state.createOrder);

  useEffect(() => {
    const addOns = map(addOnsData, (addOn) => {
      const { addOns } = createOrder;
      const { text, description, price, id } = addOn;
      return {
        id,
        text,
        description,
        price,
        checked: find(addOns, (addOn) => addOn.name === text) ? true : false,
      };
    });

    setAddOns(addOns);
  }, []);

  function handleCheckAddOn(text: string, price: number, checked: boolean) {
    const newAddOns = map(addOns, (addOn) => {
      return {
        ...addOn,
        checked: addOn.text === text ? checked : false,
      };
    });

    if (checked) {
      dispatch(addAddOn({ name: text, price: price }));
      setAddOns(newAddOns);
    } else {
      const filteredAddOns = filter(newAddOns, (addOn) => {
        return addOn.checked === true;
      });
      dispatch(
        updateAddOns(
          map(filteredAddOns, (addOn) => {
            return {
              name: addOn.text,
              price: addOn.price,
            };
          })
        )
      );
    }
  }

  function loadAddOns() {
    return map(addOns, (addOn, index) => {
      const { text, description, price, id } = addOn;
      const checked = get(addOn, 'checked');
      return (
        <AddOn
          key={index}
          id={id}
          text={text}
          description={description}
          price={price}
          checked={checked}
          onChecked={handleCheckAddOn}
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
