import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTc4MTUzODMsImlhdCI6MTY1Nzc5NzM4M30.5woKI1GLs295pNNnUT-EfEm8W6pjDwCGvkDy4upKuQN8askRxEzrHOYibSsHpDCz-s9Eq-BHHtW1M2qRnkp_rg',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
