// features/auth/api/auth.api.ts
import { baseAxios } from '@/shared/api/base-axios';

import { LoginFormValues, RegisterFormValues } from '../register/model/auth.types';


export const login = async (credentials: LoginFormValues) => {
  const response = await baseAxios.post('/auth/login', credentials);
  return response.data;
};

export const register = async (data: RegisterFormValues) => {
  const response = await baseAxios.post('/auth/register', data);
  return response.data;
};