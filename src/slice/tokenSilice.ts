import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg5MDU0NjgsImlhdCI6MTY1ODg4NzQ2OH0.emGH3OOjCqEmRGTVVWVrDGuBUT4RmQnA9k_eaBobbo72EPLuoOLkl9Frl3_s7AgVcjFOs8eP55GUJMnSahsDiA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
