import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import ToastController from '../../scripts/Toast/ToastController';
import VerifyController from '../../scripts/Verify/VerifyController';
import styles from './Header.module.css';

export default function Header(props) {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setMenuIsOpened(false);

    async function fetchVerify() {
      const isVerify = await VerifyController.verifyTokens();
      if (isVerify) return;
      navigate('/sign-in');
    }
    fetchVerify();
  }, [navigate]);

  function navigateToTask() {
    setMenuIsOpened(false);
    navigate(`/task/new`, { replace: true });
  }

  function navigateToDate() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    const monthNow = timeNow.getMonth() + 1;
    const dateNow = timeNow.getDate();
    setMenuIsOpened(false);
    navigate(`/year/${yearNow}/month/${monthNow}/date/${dateNow}`);
  }

  function navigateToMonth() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    const monthNow = timeNow.getMonth() + 1;
    setMenuIsOpened(false);
    navigate(`/year/${yearNow}/month/${monthNow}`);
  }

  function navigateToYear() {
    const timeNow = new Date();
    const yearNow = timeNow.getFullYear();
    setMenuIsOpened(false);
    navigate(`/year/${yearNow}`);
  }

  function logout() {
    localStorage.clear();
    ToastController.success(`Вы вышли из аккаунта`);
    navigate('/sign-in');
  }

  return (
    <>
      <header className={styles.title_block}>
        <div>
          <button onClick={(event) => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {props.left_buttons}
          <h2>{props.title}</h2>
        </div>
        <button
          className={styles.menu_button}
          onClick={(event) => setMenuIsOpened(!menuIsOpened)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>
      <nav
        className={styles.menu}
        style={{
          display: menuIsOpened ? 'flex' : 'none',
        }}
      >
        <span
          className={styles.close}
          onClick={(event) => setMenuIsOpened(!menuIsOpened)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <ul>
          <li>
            <button onClick={navigateToTask}>Добавить таску</button>
          </li>
          <li>
            <button onClick={navigateToDate}>Таски на день</button>
          </li>
          <li>
            <button onClick={navigateToMonth}>Таски на месяц</button>
          </li>
          <li>
            <button onClick={navigateToYear}>Таски на год</button>
          </li>
          <li>
            <button onClick={logout}>Выйти из аккаунта</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
