import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken: localStorage.getItem('access_token'),
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {
    setJWTToken: (state, { payload }) => {
      state.JWTtoken = payload.value;
    },
  },
});

export const { setJWTToken } = tokenSlice.actions;
export default tokenSlice.reducer;
