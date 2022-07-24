import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg2NTc1NjMsImlhdCI6MTY1ODYzOTU2M30.mwZp6mNW3OeCT3KTwkaPcb4PFq8AB0eUc4M-hZBZI4sTJSSjAfn4oKlMFjIa9l4QEant4MtnsddACHz0HXAoOA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
