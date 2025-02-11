'use client';
import { configureStore, UnknownAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';  

import authReducer from '@/features/auth/model/auth.slice'; 

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;


