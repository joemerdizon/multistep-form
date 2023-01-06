import styles from '../../styles/Home.module.css';
import Header from './Header';

export default function PersonalInfo() {
  return (
    <>
      <Header
        headerText='Personal info'
        subHeaderText='Please provide your name, email address, and phone number.'
      />
      <br />
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <small
          id='nameHelp'
          className='form-text float-right text-danger font-weight-bold'
        ></small>
        <input
          type='text'
          className='form-control form-control-lg'
          id='name'
          aria-describedby='nameHelp'
          placeholder='e.g. Stephen King'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <small
          id='emailHelp'
          className='form-text float-right text-danger font-weight-bold'
        ></small>
        <input
          type='email'
          className='form-control form-control-lg'
          id='email'
          aria-describedby='emailHelp'
          placeholder='e.g. stephenking@lorem.com'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <small
          id='phoneNumberHelp'
          className='form-text float-right text-danger font-weight-bold'
        >
          This field is required
        </small>
        <input
          type='text'
          className='form-control form-control-lg input-error'
          id='phoneNumber'
          aria-describedby='phoneNumberHelp'
          placeholder='e.g. +1 234 567 890'
        />
      </div>
    </>
  );
}
