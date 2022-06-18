import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEnterNumber: [],
};

const userEnterNumberSlice = createSlice({
  name: 'userEnterNumber',
  initialState,
  reducers: {
    setUserEnterNumber: (state, { payload }) => {
      state.userEnterNumber = payload.value;
    },
  },
});

export const { setUserEnterNumber } = userEnterNumberSlice.actions;
export default userEnterNumberSlice.reducer;
