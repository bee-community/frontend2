import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  liveTime: '',
};

const liveTimeSlice = createSlice({
  name: 'liveTime',
  initialState,
  reducers: {
    setLiveTime: (state, { payload }) => {
      state.liveTime = payload.value;
    },
  },
});

export const { setLiveTime } = liveTimeSlice.actions;
export default liveTimeSlice.reducer;
