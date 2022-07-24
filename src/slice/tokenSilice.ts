import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg2NzU3MjUsImlhdCI6MTY1ODY1NzcyNX0.YGb8bFGXlWbstd76RsejcIkhfX3xE0_3dfM88dzLYeAgRWJDmBnlnL-PmqzzuM1qNaPgravvXdR8JtiJAhIrpw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
