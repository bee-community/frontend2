import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk3Mjg3NzksImlhdCI6MTY1OTcxMDc3OX0.M8H9cmoXmNuhNXZYUAD0y3MauzeW5sz9n73t5n4uk682ADtBSrXTr_tm-Vy__w6_6nyeNjnf5plsI0anYtuOvg',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
