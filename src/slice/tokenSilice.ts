import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg3NTQxMjYsImlhdCI6MTY1ODczNjEyNn0.FpiTcP35cga0ZKbzwP4fhTFcBnOXmSe0s2TAJ9hNj77TFAq03CBeUl1OTGPI74wxoX7qnB9e2WbsUHpW4UxF0Q',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
