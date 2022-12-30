import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCategoryOpen: false,
  articleOpen: false,
  articleEdit: { state: false, articleId: '' },
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
    setArticleEditOpen: (state, { payload }) => {
      state.articleEdit.state = true;
      state.articleEdit.articleId = payload.articleId;
      return state;
    },
    setArticleEditClose: state => {
      state.articleEdit.state = false;
      return state;
    },
  },
});

export const { setCategoryOpen, setCategoryToggle, setArticleToggle, setArticleEditOpen, setArticleEditClose } =
  openStateSlice.actions;
export default openStateSlice.reducer;
