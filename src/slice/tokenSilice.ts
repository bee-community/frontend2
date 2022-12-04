import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NzAxNzA0NDIsImlhdCI6MTY3MDE1MjQ0Mn0.DS4FVkdDKlvlRLRTnMi1Q2s8F6NGezr9EyCkZXBFeVcTqkp_7TDacLdGHVkFL2eZWNs1ui8THBsGZbYlNKdDzA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
