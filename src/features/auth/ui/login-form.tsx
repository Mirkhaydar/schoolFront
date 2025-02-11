// features/auth/ui/login-form.tsx
'use client';
import React from 'react';

import { Button, Form, Input, Alert } from 'antd';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks

import { AppDispatch, RootState } from '@/app/stores/root-store';

import { login, setLoginEmail, setLoginPassword } from '../model/auth.slice'; // Import actions
import { LoginFormValues } from '../model/auth.types';

import styles from './login-form.module.scss';
import { SocialButtons } from './social-buttons';


export const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [form] = Form.useForm<LoginFormValues>();

  const { loginEmail, loginPassword, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onFinish = (values: LoginFormValues) => {
    dispatch(login(values, router));
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
          value={loginEmail}
          onChange={(e) => dispatch(setLoginEmail(e.target.value))}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите ваш пароль!' }]}
      >
        <Input.Password
          value={loginPassword}
          onChange={(e) => dispatch(setLoginPassword(e.target.value))}
        />
      </Form.Item>

      <Form.Item className={styles.forgotPasswordItem}>
        <Button type="link" className={styles.forgotPassword} onClick={() => router.push('/forgot-password')}>
          Не помнишь пароль?
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Войти
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" showIcon />}
    </Form>
  );
};