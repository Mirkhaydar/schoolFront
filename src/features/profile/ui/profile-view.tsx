'use client';
import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '@/app/stores/root-store';

import styles from './profile-view.module.scss';

export const ProfileView: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.header}>Личный кабинет</div>
      <div className={styles.details}>
        {/* <div className={styles.detailItem}>Имя: {user.name}</div> */}
        <div className={styles.detailItem}>Email: {user.email}</div>
        {/* <div className={styles.detailItem}>Дата регистрации: {user.registrationDate}</div> */}
      </div>
    </div>
  );
};