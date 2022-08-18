import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataList: [],
  myDataList: [],
};

const chatCountSlice = createSlice({
  name: 'dataList',
  initialState,
  reducers: {
    setDataList: (state, { payload }) => {
      state.dataList = payload.value;
    },
    setMyDataList: (state, { payload }) => {
      state.myDataList = payload.value;
    },
  },
});

export const { setDataList, setMyDataList } = chatCountSlice.actions;
export default chatCountSlice.reducer;
