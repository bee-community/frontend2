import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTg3MzQ2NzksImlhdCI6MTY1ODcxNjY3OX0.RLrCTB1e7fexpgm9ORo-B02qOTjuUa6NcuWFv62I4wxmqKU4XjZKt79LTJcA7NxzmU-ups3S6QS1xjnLXgLdkQ',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
