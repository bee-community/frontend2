import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logId: 0,
};

const logIdSlice = createSlice({
  name: 'logId',
  initialState,
  reducers: {
    setLogId: (state, { payload }) => {
      state.logId = payload.value;
    },
  },
});

export const { setLogId } = logIdSlice.actions;
export default logIdSlice.reducer;
