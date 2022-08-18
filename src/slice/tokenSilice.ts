import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NjAxMTgzMDksImlhdCI6MTY2MDEwMDMwOX0.Jbeuj_ZKBbg9yD1jpk-eEvgGpQ-_Wsvrj4sPUW-9g6GzR2xt2o7iBA0qUMgOm_FdCyAwIp50OXheGOQlnvJfMw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
