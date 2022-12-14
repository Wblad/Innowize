import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import SignController from '../../scripts/Sign/SignController';
import styles from './SignPage.module.css';
import ToastController from '../../scripts/Toast/ToastController';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: false,
  });
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    ToastController.success('Данные в форму введены вверно', 'SignUpPage.jsx');
    const isRegistred = await SignController.signup(
      data.email,
      data.username,
      data.password
    );
    if (!isRegistred) {
      return;
    }

    const isLogin = await SignController.login(data.username, data.password);
    if (isLogin) {
      navigate('/');
    }
  };

  return (
    <div className={styles.background}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Форма регистрации</h1>
        <label>
          <input
            {...register('email', {
              required: 'Поле email не может быть пустым',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:
                  'Электронная почта должна быть формата\nимя@сайт.домен',
              },
              maxLength: {
                value: 254,
                message: 'Максимальная длина email 254 символа',
              },
              minLength: {
                value: 6,
                message: 'Минимальная длина email 6 символов',
              },
            })}
            className={[
              errors.email?.message && styles.input_required,
              errors.email === {} && styles.input_is_success,
              errors.email?.message && styles.input_is_not_success,
            ].join(' ')}
            placeholder="Электронная почта"
            type="text"
          />
          {errors.email?.message && (
            <div className={styles.error_block}>{errors.email.message}</div>
          )}
        </label>
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
        <Link to="/sign-in">У меня есть аккаунт</Link>
        <input type="submit" value="Продолжить" />
      </form>
    </div>
  );
}
