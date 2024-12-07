'use client';
import React, { useRef } from 'react';
import { AppStore, makeStore } from './store';
import { Provider } from 'react-redux';

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>();
    if (storeRef.current === undefined) {
        storeRef.current = makeStore()
    }
    if (storeRef.current) {
        storeRef.current.subscribe(() => {
            const state = storeRef.current?.getState();
            if (state?.auth?.user) { localStorage.setItem('user', JSON.stringify(state.auth.user)); }
            if (state?.auth?.authToken) { localStorage.setItem('auth_token', state.auth.authToken); }
        });
    }
    return (<Provider store={storeRef.current}> {children} </Provider>)
}