import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTU2MTQzNDIsImlhdCI6MTY1NTU5NjM0Mn0.PAWe1tjI8ZQb5CeP0El0YrwNIm3NnQuBe3eFn-DHSvXywS-Kr2a2nnENuyvhLRm6hY6ywG795Ut0xbFdcJfJ-w',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
