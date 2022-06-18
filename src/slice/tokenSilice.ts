import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTU0OTczNDgsImlhdCI6MTY1NTQ3OTM0OH0.fHMmUN3L_aH9z1EbWP1tQCxqDoH890wAxXgYEZ9E2IGOQIcqKNXxgDSQzhl-2ErJbZBVSlRih7pEubq8SkZdjA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
