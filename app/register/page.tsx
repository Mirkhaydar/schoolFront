import type { Metadata } from 'next';

import { RegisterForm } from '@/features/auth/register';


export const metadata: Metadata = {
  title: 'Регистрация',
};

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}