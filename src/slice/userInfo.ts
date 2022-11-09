import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state = payload.value;
      return state;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
