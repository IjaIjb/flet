'use client';
import { createAction} from '@reduxjs/toolkit';

export const getUserDetails = createAction<unknown>('getUserDetails');

export const loginUserSuccess = createAction<{ auth_token: string, user: unknown }>('loginUserSuccess');

export const logoutUser = createAction('logoutUser');

export const verifyUser = createAction<string>('verifyUser');

export const getRegistrationOptions = createAction<unknown>('getRegistrationOptions');