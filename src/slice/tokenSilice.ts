import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk3OTE3ODEsImlhdCI6MTY1OTc3Mzc4MX0.K5jnTw9P0DEt2moZPOdQjsrKtfVfrQTznN6w6hFBpU7PNaqytgp4r3RTI4efiwuHlatwyZpO41rzzo5iZ5OTZw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
