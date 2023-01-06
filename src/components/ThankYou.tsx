import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import thankYouPic from '../../public/icon-thank-you.svg';

export default function ThankYou() {
  return (
    <>
      <div className='d-flex h-100 col-12'>
        <div className='row justify-content-center align-self-center w-100'>
          <div className='col-12 text-center'>
            <Image src={thankYouPic} alt='' />
            <h2 className={styles.header}>Thank you!</h2>
            <p className={styles.subHeader}>
              Thanks for confirming your subscription! We hope you have
              <br />
              fun using our platform. If you ever need support, please feel
              <br />
              free to email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
