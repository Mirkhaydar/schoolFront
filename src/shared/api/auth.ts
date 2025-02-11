// src/shared/api/auth.ts
import { baseAxios, type ApiResponse } from '@/shared/api/base-axios';

export const login = async <T>(credentials: T): Promise<ApiResponse<any>> => {
  const response = await baseAxios.post('/users/login', credentials);
  return response;
};

export const register = async <T>(data: T): Promise<ApiResponse<any>> => {
  const response = await baseAxios.post('/users/register', data);
  return response;
};
