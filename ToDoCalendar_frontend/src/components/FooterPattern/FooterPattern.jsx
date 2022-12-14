import styles from './FooterPattern.module.css';

function FooterPattern(props) {
  return (
    <div className={styles.footer_pattern__wrapper}>
      <div className={styles.footer_pattern__not_footer}>{props.NotFooter}</div>
      <div className={styles.footer_pattern__footer}>{props.Footer}</div>
    </div>
  );
}

export default FooterPattern;
