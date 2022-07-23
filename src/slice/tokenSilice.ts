import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg1ODE4MDYsImlhdCI6MTY1ODU2MzgwNn0.45TstG9USdcgxHFqA-buKk1zIpN9UtEbMwpQYPm0uYQ83y-DB26k6uGVqz36AMFB0Ko3aida3lWtv_KDZdbAlw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
