import React from 'react';

import { RegisterForm } from '@/features/auth/register';



const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;