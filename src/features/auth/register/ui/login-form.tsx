// features/auth/ui/login-form.tsx
'use client';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Alert } from 'antd';
import { useRouter } from 'next/navigation';

import { LoginFormValues } from '../model/auth.types';
import { useAuthStore } from '../model/login.store';

import styles from './login-form.module.scss';
import { SocialButtons } from './social-buttons';


export const LoginForm = observer(() => {
  const store = useAuthStore();
  const router = useRouter();
  const [form] = Form.useForm<LoginFormValues>();

  const onFinish = (values: LoginFormValues) => {
    store.login(new Event('submit'), router, values);
  };

  return (
    <Form form={form} name="login" onFinish={onFinish} layout="vertical">
      <SocialButtons />
      <Form.Item
        name="email"
        label="Электронная почта"
        rules={[
          { required: true, message: 'Введите ваш email!' },
          { type: 'email', message: 'Некорректный email!' },
        ]}
      >
        <Input
          value={store.loginEmail}
          onChange={(e) => store.setLoginEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите ваш пароль!' }]}
      >
        <Input.Password
          value={store.loginPassword}
          onChange={(e) => store.setLoginPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item className={styles.forgotPasswordItem}>
        <Button type="link" className={styles.forgotPassword} onClick={() => router.push('/forgot-password')}>
          Не помнишь пароль?
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={store.isLoading} block>
          Войти
        </Button>
      </Form.Item>
      {store.error && <Alert message={store.error} type="error" showIcon />}
    </Form>
  );
});