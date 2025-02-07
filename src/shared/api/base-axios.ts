import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';

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
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError<ErrorResponse>): Promise<never> => {
        if (error.response) {
            // Ошибка от сервера (4xx, 5xx)
            console.error('Server error:', error.response.status, error.response.data);
            // Можно показать уведомление пользователю
        } else if (error.request) {
            // Запрос не дошел до сервера (сетевая ошибка)
            console.error('Network error:', error.message);
        } else {
            console.error('Request error:', error.message);
        }
        return Promise.reject(error); 
    }
);