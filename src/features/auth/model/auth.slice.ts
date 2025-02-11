import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/entities/user';
import { ApiResponse } from '@/shared/api/base-axios';
import * as AuthApi from '@/shared/api/auth'; 
import { AppThunk } from '@/app/stores/root-store';

import { LoginFormValues, RegisterFormValues } from '../index';




interface AuthState {
    user: User | null;
    loginEmail: string;
    loginPassword: string;
    registerName: string;
    registerEmail: string;
    registerPassword: string;
    isLoading: boolean;
    error: string | null;
    isRegisterMode: boolean;
}

const initialState: AuthState = {
    user: null,
    loginEmail: '',
    loginPassword: '',
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    isLoading: false,
    error: null,
    isRegisterMode: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginEmail: (state, action: PayloadAction<string>) => {
            state.loginEmail = action.payload;
        },
        setLoginPassword: (state, action: PayloadAction<string>) => {
            state.loginPassword = action.payload;
        },
        setRegisterName: (state, action: PayloadAction<string>) => {
            state.registerName = action.payload;
        },
        setRegisterEmail: (state, action: PayloadAction<string>) => {
            state.registerEmail = action.payload;
        },
        setRegisterPassword: (state, action: PayloadAction<string>) => {
            state.registerPassword = action.payload;
        },
        toggleMode: (state) => {
            state.isRegisterMode = !state.isRegisterMode;
            state.error = null; // Clear error on mode toggle
        },
        loginRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        registerRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess: (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        registerFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    setLoginEmail,
    setLoginPassword,
    setRegisterName,
    setRegisterEmail,
    setRegisterPassword,
    toggleMode,
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure

} = authSlice.actions;

export default authSlice.reducer;

// Thunks for async actions
export const login = (values: LoginFormValues, router: any): AppThunk => async (dispatch) => {
  dispatch(loginRequest());
  try {
      const response: ApiResponse<User> = await AuthApi.login(values);
      dispatch(loginSuccess(response.data));
      router.push('/profile');
  } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
  }
};

export const register = (values: RegisterFormValues, router: any): AppThunk => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response: ApiResponse<User> = await AuthApi.register(values);
    dispatch(registerSuccess(response.data));
    router.push('/profile');
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message || "Registration failed";
    dispatch(registerFailure(errorMessage));
  }
};