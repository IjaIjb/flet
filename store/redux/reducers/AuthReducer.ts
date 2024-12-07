"use client";
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { getUserDetails, loginUserSuccess, logoutUser } from '../actions/AuthAction';

interface InitialStateProp {
  user?: unknown;
  isAuth: boolean;
  authToken: string | null;
}

const initialState: InitialStateProp = {
  isAuth: false, 
  user: undefined, 
  authToken: null
};

const AuthReducer = createReducer(initialState, (builder) => {
  builder.addCase(getUserDetails, (state, action: PayloadAction<unknown>) => {
    return {
      ...state, 
      user: action.payload, 
    }
  });
  
  builder.addCase(loginUserSuccess, (state, action: PayloadAction<{ auth_token: string, user: unknown }>) => {
    const { auth_token, user } = action.payload;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('auth_token', auth_token);
    return {
      ...state, 
      isAuth: true, 
      user: user, 
      authToken: auth_token
    }
  });
  
  builder.addCase(logoutUser, (state) => {
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
    return {
      ...state, 
      isAuth: false, 
      user: undefined, 
      authToken: null
    }
  });
});

export default AuthReducer;
