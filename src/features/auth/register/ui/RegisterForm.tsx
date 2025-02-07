"use client";
import React, { useState } from "react";

import { Button, Form, Input } from "antd";
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import { AiFillGoogleCircle } from "react-icons/ai";

import styles from './RegisterForm.module.scss'; // Assuming you'll use CSS Modules


const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // Start in login mode

  const onFinish = async (values: any) => {
    setLoading(true);
    // Your login logic here
    console.log("Logging in with values: ", values);
    setLoading(false);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h1>Войти</h1>

        {!isRegister && (
          <div className={styles.socialButtons}>
            <Button icon={<AiFillGoogleCircle />} block className={styles.socialButton}>
              Вход с аккаунтом Google
            </Button>
            <Button icon={<AppleOutlined />} block className={styles.socialButton}>
              Продолжить с Apple
            </Button>
            <Button icon={<FacebookOutlined />} block className={styles.socialButton}>
              Продолжить с Facebook
            </Button>

            <div className={styles.separator}>или</div>
          </div>
        )}

        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Электронная почта"
            rules={[{ required: true, message: "Введите ваш email!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item className={styles.changeAuthType}>
            {/* <Button type="link" className={styles.usePhoneNumber}>
              Использовать номер мобильного телефона
            </Button> */}
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            rules={[{ required: true, message: "Введите ваш пароль!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className={styles.forgotPasswordItem}>
            <Button type="link" className={styles.forgotPassword}>
              Не помнишь пароль?
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Войти
            </Button>
          </Form.Item>
        </Form>
        <Button type="link" onClick={toggleForm} className={styles.registerLink}>
            {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
        </Button>

        <div className={styles.ssoText}>
          Компания использует систему единого входа (SSO)?
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;