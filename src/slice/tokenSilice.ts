import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk4ODU3NTksImlhdCI6MTY1OTg2Nzc1OX0.gCqUoS4BQEwN_BRumCgm6F9RF7XQJGsIUHdLTb7rpJ2xb-1G-YPghLSHYtXPFlJXrMwnv9gY3POPzJdIS2766A',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
