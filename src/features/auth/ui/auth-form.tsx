// src/features/auth/ui/auth-form.tsx
'use client';

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/app/stores/root-store';
import { Button } from '@/shared/ui/button';

import { toggleMode } from '../model/auth.slice'; // Import from the slice

import styles from './auth-form.module.scss';
import { RegisterForm } from './register-form';
import { LoginForm } from './login-form';


const AuthForm: React.FC = () => {
  const isRegisterMode = useSelector((state: RootState) => state.auth.isRegisterMode);
  const dispatch = useDispatch();

  const handleToggleMode = () => {
    dispatch(toggleMode());
  };

  return (
    <div className={styles.container}>
      <div className={styles.authFormWrapper}>
        <h1>{isRegisterMode ? 'Регистрация' : 'Войти'}</h1>
        {isRegisterMode ? <RegisterForm /> : <LoginForm />}
        <Button type="link" onClick={handleToggleMode} className={styles.registerLink}>
          {isRegisterMode ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
        </Button>
        <div className={styles.ssoText}>
          Компания использует систему единого входа (SSO)?
        </div>
      </div>
    </div>
  );
};

export default AuthForm;