'use client';
import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { api } from '../api';

export const makeStore = () => {
  const rootReducer = combineReducers({
    auth: AuthReducer,
    [api.reducerPath]: api.reducer,
  });

  let preloadedState = {};

  if (typeof window !== 'undefined') {
    try {
      const user = localStorage.getItem('user');
      const authToken = localStorage.getItem('auth_token');

      preloadedState = {
        auth: {
          user: user && JSON.parse(user), // Parse only if `user` is valid
          isAuth: !!authToken, // Check if authToken exists
          authToken: authToken || null, // Fallback to null if not found
        },
      };
    } catch (error) {
      // console.error('Error parsing localStorage data:', error);
      preloadedState = {
        auth: {
          user: null,
          isAuth: false,
          authToken: null,
        },
      };
    }
  }

  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;



// 'use client';
// import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
// import AuthReducer from './reducers/AuthReducer';
// import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
// import { api } from '../api';

// export const makeStore = () => {
//   const rootReducer = combineReducers({
//     auth: AuthReducer,
//     [api.reducerPath]: api.reducer,
//   });

//   let preloadedState = {};

//   if (typeof window !== 'undefined') {
//     preloadedState = {
//       auth: {
//         user: localStorage.getItem('user') && (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) ? JSON.parse((localStorage.getItem('user') as string)) : undefined,
//         isAuth: !!localStorage.getItem('auth_token'),
//         authToken: localStorage.getItem('auth_token'),
//       }
//     };
//   }

//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
//   });
// };

// export const store = makeStore();

// export type AppStore = ReturnType<typeof makeStore>

// export type RootState = ReturnType<AppStore['getState']>

// export type AppDispatch = AppStore['dispatch']

// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export const useAppStore: () => AppStore = useStore;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
