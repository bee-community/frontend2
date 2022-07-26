import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg4MjI0MDMsImlhdCI6MTY1ODgwNDQwM30.cavCkA_h1AOAwm9Fq84gU21YfuYO-vCL46S4a_9Ji6uQa3r1vlb_LfJ-nc8JzoQi7qdsXLF-9wcYnBqhtThAEg',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
