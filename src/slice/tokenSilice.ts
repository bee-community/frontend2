import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk5NTE4MzAsImlhdCI6MTY1OTkzMzgzMH0.OhFERl6cmFoVVQ-y42A1vjqmQSgdusO3KN8T2v3P0tPBrj3CcwvLkU9ndcG_hsIJWoRH0k91NGGoUaRiwF53WA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
