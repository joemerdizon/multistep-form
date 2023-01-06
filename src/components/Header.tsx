import styles from '../../styles/Home.module.css';
import { HeaderProps } from '../props/HeaderProps';

export default function Header(props: HeaderProps) {
  const { headerText, subHeaderText } = props;
  return (
    <>
      <h2 className={styles.header}>{headerText}</h2>
      <p className={styles.subHeader}>{subHeaderText}</p>
    </>
  );
}
