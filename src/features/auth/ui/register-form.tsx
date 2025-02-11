// features/auth/ui/register-form.tsx
'use client';
import React from 'react';

import { Button, Form, Input, Alert } from 'antd';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/stores/root-store';

import { register, setRegisterName, setRegisterEmail, setRegisterPassword } from '../model/auth.slice';
import { RegisterFormValues } from '../model/auth.types';


export const RegisterForm:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [form] = Form.useForm<RegisterFormValues>();

  const { registerName, registerEmail, registerPassword, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onFinish = (values: RegisterFormValues) => {
    dispatch(register(values, router));
  };

  return (
    <Form form={form} name="register" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Ваше имя"
        rules={[{ required: true, message: 'Введите ваше имя!' }]}
      >
        <Input
          value={registerName}
          onChange={(e) => dispatch(setRegisterName(e.target.value))}
        />
      </Form.Item>

      <Form.Item
        name="email"
        label="Электронная почта"
        rules={[
          { required: true, message: 'Введите ваш email!' },
          { type: 'email', message: 'Некорректный email!' },
        ]}
      >
        <Input
          value={registerEmail}
          onChange={(e) => dispatch(setRegisterEmail(e.target.value))}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите ваш пароль!' }]}
      >
        <Input.Password
          value={registerPassword}
          onChange={(e) => dispatch(setRegisterPassword(e.target.value))}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Зарегистрироваться
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" showIcon />}
    </Form>
  );
};