// src/shared/api/base-axios.ts
import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios'; // Импортируем AxiosResponse
export type ApiResponse<T> = AxiosResponse<T>;

export const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ErrorResponse {
    response?: AxiosResponse;
    request?: any;
    message?: string;
}

baseAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ErrorResponse>) => {
    if (error.response) {
      console.error('Server error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Network error:', error.message);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);