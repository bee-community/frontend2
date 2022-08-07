import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk4NzUyNDgsImlhdCI6MTY1OTg1NzI0OH0.xTXUSCQgncN7Een7jjTTuE84oahlJj-pdqBor89HnsVN8-JyNYD75iPpSTUMfPkfZFq6mHGcvTBmur9gD6OLeg',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
