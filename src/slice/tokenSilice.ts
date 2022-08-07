import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk5MzMwMjUsImlhdCI6MTY1OTkxNTAyNX0.S38i9J4wMgEtEToi72X7WjPEm2uoc0hP0zTBCN_9HpbIQM40ZQWeo8CKg4vGMpA9s_X1-SLK5jARcO5mynx9wQ',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
