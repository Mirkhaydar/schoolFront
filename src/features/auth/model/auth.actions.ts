// src/features/auth/model/auth.actions.ts
import { createAction } from '@reduxjs/toolkit';

import { User } from '@/entities/user';

import { LoginFormValues, RegisterFormValues } from '../index';


export const setLoginEmail = createAction<string>('auth/setLoginEmail');
export const setLoginPassword = createAction<string>('auth/setLoginPassword');
export const setRegisterName = createAction<string>('auth/setRegisterName');
export const setRegisterEmail = createAction<string>('auth/setRegisterEmail');
export const setRegisterPassword = createAction<string>('auth/setRegisterPassword');
export const toggleMode = createAction('auth/toggleMode');
export const loginRequest = createAction<LoginFormValues>('auth/loginRequest'); 
export const loginSuccess = createAction<User>('auth/loginSuccess');
export const loginFailure = createAction<string>('auth/loginFailure');
export const registerRequest = createAction<RegisterFormValues>('auth/registerRequest'); 
export const registerSuccess = createAction<User>('auth/registerSuccess');
export const registerFailure = createAction<string>('auth/registerFailure');