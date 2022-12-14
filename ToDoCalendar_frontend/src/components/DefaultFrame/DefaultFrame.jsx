import Header from '../Header/Header';
import styles from './DefaultFrame.module.css';

export default function DefaultFrame(props) {
  return (
    <div className={styles.wrapper}>
      <Header title={props.title} left_buttons={props.left_buttons} />
      {props.children}
    </div>
  );
}
