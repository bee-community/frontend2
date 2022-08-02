import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk0NjYzNjcsImlhdCI6MTY1OTQ0ODM2N30.fIg8C6u9-yf7g3qTDRcB08ANFls6RBXek_KXkemvVDfsOYun3YB-2_pbfHbeFwOUERDdgkxXRWrOFsCKzMn9gw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
