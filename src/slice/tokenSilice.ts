import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk4Nzk2NjksImlhdCI6MTY1OTg2MTY2OX0.96kqTe0WkqlG9I42umJPJ1Ukng64coDbL9aR9XE8k_DyZUAvs9WdGtlAXwg9Peh5JST8ST4CvUUtoIr8rlMd3w',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
