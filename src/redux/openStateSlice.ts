import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCategoryOpen: false,
};

const openStateSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCategoryToggle: state => {
      state.isCategoryOpen = !state.isCategoryOpen;
      return state;
    },
    setCategoryOpen: state => {
      state.isCategoryOpen = true;
      return state;
    },
  },
});

export const { setCategoryOpen, setCategoryToggle } = openStateSlice.actions;
export default openStateSlice.reducer;
