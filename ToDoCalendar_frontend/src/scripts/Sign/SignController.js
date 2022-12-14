import VerifyController from '../Verify/VerifyController';
import ToastController from '../Toast/ToastController';

/**
 * Класс содержит методы
 * - login() - для проверки входа
 * - singup() - для проверки регистрации
 */
export default class SignController {
  /**
   * Функция отправляет в POST имя пользователя и пароль. Ответ сервера:
   * 200 - ввошел (записываем refresh в LocalStorage)
   * 401 - ошибка входа
   *
   * @param {string} username - имя пользователя
   * @param {string} password - пароль
   * @returns {boolean}
   * - true - успешный вход
   * - false - не ввошли в аккаунт
   */
  static async login(username = '', password = '') {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/login/`;

      const body = {
        username: username,
        password: password,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const status = response.status;
      const data = await response.json();

      if (status === 200) {
        const refresh_token = '' + data.refresh;
        const access_token = '' + data.access;

        localStorage.setItem('refresh', refresh_token);
        localStorage.setItem('access', access_token);

        const isVerify = await VerifyController.verifyTokens();
        if (isVerify) {
          ToastController.success('Авторизовались', 'POST /login/');
          return true;
        }

        ToastController.warning('Не авторизовались', 'POST /login/');
        return false;
      }

      ToastController.warning(
        `Не авторизовались <pre>${JSON.stringify(data, null, 2)}</pre>`,
        'POST /login/'
      );
      return false;
    } catch (error) {
      ToastController.error(error, 'POST /login/');
      return false;
    }
  }

  /**
   * Функция, которая отправляет POST для регистрации пользователя
   * @param {*} email
   * @param {*} username
   * @param {*} password
   *
   * @returns {boolean}
   * - true - успешная регистрация
   * - false - не зарегестрировались
   */
  static async signup(email, username, password) {
    const URL = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/v1/register/`;
    const body = {
      email,
      username,
      password,
    };
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const status = response.status;
      if (status === 201) {
        ToastController.success('Зарегистрировались', 'POST /register/');
        return true;
      }

      const data = await response.json();
      ToastController.warning(
        `Не зарегистрировались <pre>${JSON.stringify(data, null, 2)}</pre>`,
        'POST /register/'
      );
      return false;
    } catch (error) {
      ToastController.error(error, 'POST /register/');
      return false;
    }
  }

  static logout() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    // navigate('/'); в коде
  }
}
