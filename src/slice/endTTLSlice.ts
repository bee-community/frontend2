import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  endTTL: false,
};

const endTTLSlice = createSlice({
  name: 'endTTL',
  initialState,
  reducers: {
    setEndTTL: (state, { payload }) => {
      state.endTTL = payload.value;
    },
  },
});

export const { setEndTTL } = endTTLSlice.actions;
export default endTTLSlice.reducer;
