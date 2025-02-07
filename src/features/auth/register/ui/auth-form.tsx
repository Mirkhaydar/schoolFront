// features/auth/ui/auth-form.tsx
'use client';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';


import { useAuthStore } from '../model/login.store';

import styles from './auth-form.module.scss';
import { RegisterForm } from './register-form';
import { LoginForm } from './login-form';


const AuthForm = observer(() => {
  const store = useAuthStore();

  return (
    <div className={styles.container}>
      <div className={styles.authFormWrapper}>
        <h1>{store.isRegisterMode ? 'Регистрация' : 'Войти'}</h1>
        {store.isRegisterMode ? <RegisterForm /> : <LoginForm />}
        <Button type="link" onClick={() => store.toggleMode()} className={styles.registerLink}>
          {store.isRegisterMode ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
        </Button>
        <div className={styles.ssoText}>
          Компания использует систему единого входа (SSO)?
        </div>
      </div>
    </div>
  );
});

export default AuthForm;