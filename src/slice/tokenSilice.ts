import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTcxODg5MjUsImlhdCI6MTY1NzE3MDkyNX0.jPjPFH7Xa9-KJ5Z0F0ucUpuaW-ia8Wc24WKtX8zKLrJF4kJDHdfmePzYlXOYYCW0pFN3sZSslwlyWcSEi62ijA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
