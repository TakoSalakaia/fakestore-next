'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,    
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startAuth: (s)=>{s.loading = true; s.error = null;},
    successAuth: (s, {payload})=>{s.loading=false; s.token=payload.token; s.user=payload.user || null;},
    failAuth: (s, {payload})=>{s.loading=false; s.error=payload || 'Auth failed';},
    logout: (s)=>{s.token=null; s.user=null;}
  }
});

export const { startAuth, successAuth, failAuth, logout } = authSlice.actions;
export default authSlice.reducer;
