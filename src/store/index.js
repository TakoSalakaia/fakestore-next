'use client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from './cartSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default store;
