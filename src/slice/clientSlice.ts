import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: {},
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (state, { payload }) => {
      console.log(payload.value);
      console.log(JSON.parse(payload.value));
      state.client = payload.stompClient;
    },
  },
});

export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;
