/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { RootState } from './redux/store';

const mutex = new Mutex();
export const base_url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const baseQuery = fetchBaseQuery({
  baseUrl: base_url,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState)?.auth?.authToken ||
      localStorage.getItem("auth_token");
      console.log("Token in headers:", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return headers;
  },
});


const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions: any) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        // const refreshResult:{[key: string]: any} = await baseQuery(
        //   '/auth/token/refresh',
        //   api,
        //   { body: { refresh: (api.getState() as RootState)?.auth?.refresh } }
        // );
        // if (refreshResult && 'access' in refreshResult.data && 'refresh' in refreshResult.data) {
        //   api.dispatch(SET_REFRESH_TOKEN_ACTION(refreshResult.data?.refresh))
        //   api.dispatch(SET_ACCESS_TOKEN_ACTION(refreshResult.data?.access))
        //   // retry the initial query
        //   result = await baseQuery(args, api, { ...extraOptions, headers: { ...extraOptions?.headers, Authorization: `Bearer ${refreshResult.data?.access}` } })
        // } else {
        //   api.dispatch(SET_AUTH_USER_LOGOUT_ACTION())
        // }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}







export const emptySplitApi = createApi({
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
})