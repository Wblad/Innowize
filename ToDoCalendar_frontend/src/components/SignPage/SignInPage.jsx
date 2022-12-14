import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import SignController from '../../scripts/Sign/SignController';
import styles from './SignPage.module.css';
import ToastController from '../../scripts/Toast/ToastController';

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    ToastController.success('Данные в форму введены верно', 'SignInPage.jsx');
    const isLogin = await SignController.login(data.username, data.password);
    if (isLogin) {
      navigate('/');
    }
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Форма входа</h1>
        <label>
          <input
            {...register('username', {
              required: 'Поле username не может быть пустым',
              pattern: {
                value: /^[A-Za-z]+[A-Za-z0-9]{2,150}$/,
                message:
                  'Логин должен содержать пробелов\n' +
                  'Логин не должен начинаться с цифр\n' +
                  'Логин должен содержать только латинские буквы\n',
              },
              maxLength: {
                value: 150,
                message: 'Максимальная длина username 150 символов',
              },
              minLength: {
                value: 3,
                message: 'Минимальная длина username 3 символа',
              },
            })}
            className={[
              errors.username?.message && styles.input_required,
              errors.username === {} && styles.input_is_success,
              errors.username?.message && styles.input_is_not_success,
            ].join(' ')}
            placeholder="Имя пользователя"
            type="text"
          />
          {errors.username?.message && (
            <div className={styles.error_block}>
              <pre>{errors.username.message}</pre>
            </div>
          )}
        </label>
        <label>
          <input
            {...register('password', {
              required: 'Поле password не может быть пустым',
              pattern: {
                value:
                  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                message: 'Плохой пароль',
              },
            })}
            className={[
              errors.password?.message && styles.input_required,
              errors.password === {} && styles.input_is_success,
              errors.password?.message && styles.input_is_not_success,
            ].join(' ')}
            placeholder="Пароль"
            type="password"
          />
          {errors.password?.message && (
            <div className={styles.error_block}>{errors.password.message}</div>
          )}
        </label>

        <Link to="/sign-up">У меня нет аккаунта</Link>
        <input type="submit" value="Продолжить" />
      </form>
    </div>
  );
}
