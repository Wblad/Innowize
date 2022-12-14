import { NavLink } from 'react-router-dom';

import DefaultFrame from '../DefaultFrame/DefaultFrame';
import styles from './Error404Page.module.css';

export default function Error404Page(props) {
  return (
    <DefaultFrame title="Error 404">
      <div className={styles.wrapper}>
        <div className={styles.title_block}>404</div>
        <div className={styles.description_block}>
          <p>{props.message ? props.message : 'Данные не найдены'}</p>
          <p>
            Нажми, чтобы вернуться на <NavLink to="/">домашнюю</NavLink>{' '}
            страницу
          </p>
        </div>
      </div>
    </DefaultFrame>
  );
}
