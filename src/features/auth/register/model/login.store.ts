import { makeAutoObservable, runInAction } from 'mobx';

import { login, register } from '../../api/login.api';

import { LoginFormValues, RegisterFormValues } from './auth.types';



class AuthStore {
    // Состояние для формы входа
    loginEmail = '';
    loginPassword = '';

    // Состояние для формы регистрации
    registerName = '';
    registerEmail = '';
    registerPassword = '';

    isLoading = false;
    error: string | null = null;
    isRegisterMode = false; // Режим: вход (false) / регистрация (true)

    constructor() {
        makeAutoObservable(this);
    }

    setLoginEmail(email: string) {
        this.loginEmail = email;
    }

    setLoginPassword(password: string) {
        this.loginPassword = password;
    }

    setRegisterName(name: string) {
        this.registerName = name;
    }

    setRegisterEmail(email: string) {
        this.registerEmail = email;
    }

    setRegisterPassword(password: string) {
        this.registerPassword = password;
    }

    toggleMode() {
        this.isRegisterMode = !this.isRegisterMode;
        this.error = null; // Сбрасываем ошибку при переключении
    }

    async login(event: React.FormEvent, router: any, values: LoginFormValues) {
        event.preventDefault();
        this.isLoading = true;
        this.error = null;

        try {
            await login(values);
            router.push('/profile');
        } catch (error: any) {
            runInAction(() => {
                this.error = error.response?.data?.message || error.message || 'Login failed';
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async register(event: React.FormEvent, router: any, values: RegisterFormValues) {
        event.preventDefault();
        this.isLoading = true;
        this.error = null;

        try {
            await register(values);
            router.push('/profile'); // Или на другую страницу после регистрации
        } catch (error: any) {
            runInAction(() => {
                this.error = error.response?.data?.message || error.message || 'Registration failed';
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}

let authStoreInstance: AuthStore;

export const useAuthStore = () => {
    if (!authStoreInstance) {
        authStoreInstance = new AuthStore();
    }
    return authStoreInstance;
};