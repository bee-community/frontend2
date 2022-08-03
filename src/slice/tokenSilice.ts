import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk1MTUzNDQsImlhdCI6MTY1OTQ5NzM0NH0.IVeGC0Mhagw6u0K_ZbmSMZjvU0DDFx0nZrVltn8NmXFkDWIwjFBygKH4Mm6xWzgcPDBo69MinjqeR1dJp0v3Kw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
