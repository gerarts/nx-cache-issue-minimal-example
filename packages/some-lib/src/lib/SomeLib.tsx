import styles from './SomeLib.module.css';

/* eslint-disable-next-line */
export interface SomeLibProps {}

export function SomeLib(props: SomeLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SomeLib!</h1>
    </div>
  );
}

export default SomeLib;
