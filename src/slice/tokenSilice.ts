import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTc2OTU3NTEsImlhdCI6MTY1NzY3Nzc1MX0.gZcFom44AksDMrEkhp0N_gogW2OrN11-2EjaQcIDZoQult7b8fQLhR2fIBhQ89ZU-koaHl1QmByWKkVFI72Hfg',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
