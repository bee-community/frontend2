import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTkxODQ4ODksImlhdCI6MTY1OTE2Njg4OX0.EHltFSJwmSeYmB3AL0OmQI_YRolX6_48RId6Yau_vLlp2iJwH-cF5BkuTvHOQRb-A5N7HtVbYl9h9GU4kmgnAA',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
