import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataList: [],
};

const chatCountSlice = createSlice({
  name: 'dataList',
  initialState,
  reducers: {
    setDataList: (state, { payload }) => {
      state.dataList = payload.value;
    },
  },
});

export const { setDataList } = chatCountSlice.actions;
export default chatCountSlice.reducer;
