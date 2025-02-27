'use client';
import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '@/app/stores/root-store';
import { ProfileView } from '@/features/profile';


export const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div >
     <ProfileView></ProfileView>
    </div>
  );
};