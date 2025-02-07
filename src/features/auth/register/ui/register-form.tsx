// features/auth/ui/register-form.tsx
'use client';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Alert } from 'antd';
import { useRouter } from 'next/navigation';

import { RegisterFormValues } from '../model/auth.types';
import { useAuthStore } from '../model/login.store';

import styles from './register-form.module.scss';

export const RegisterForm = observer(() => {
  const store = useAuthStore();
  const router = useRouter();
  const [form] = Form.useForm<RegisterFormValues>();

  const onFinish = (values: RegisterFormValues) => {
    store.register(new Event('submit'), router, values);
  };

  return (
    <Form form={form} name="register" onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Ваше имя"
        rules={[{ required: true, message: 'Введите ваше имя!' }]}
      >
        <Input
          value={store.registerName}
          onChange={(e) => store.setRegisterName(e.target.value)}
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
          value={store.registerEmail}
          onChange={(e) => store.setRegisterEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: 'Введите ваш пароль!' }]}
      >
        <Input.Password
          value={store.registerPassword}
          onChange={(e) => store.setRegisterPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={store.isLoading} block>
          Зарегистрироваться
        </Button>
      </Form.Item>
      {store.error && <Alert message={store.error} type="error" showIcon />}
    </Form>
  );
});