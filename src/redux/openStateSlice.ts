import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCategoryOpen: false,
  articleOpen: false,
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
    setArticleToggle: state => {
      state.articleOpen = !state.articleOpen;
      return state;
    },
  },
});

export const { setCategoryOpen, setCategoryToggle, setArticleToggle } = openStateSlice.actions;
export default openStateSlice.reducer;
