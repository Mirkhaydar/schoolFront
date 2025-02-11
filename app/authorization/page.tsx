import type { Metadata } from 'next';

import RegisterPage from '@/page-components/register'


export const metadata: Metadata = {
  title: 'Регистрация',
};

export default function RegisterPageCollect() {
  return (
    <div>
      <RegisterPage />
    </div>
  );
}