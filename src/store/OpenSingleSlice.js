import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  singlePage: [],
  data: [],
  theme: true,
};

const singlePageSlice = createSlice({
  name: 'singlePage',
  initialState,
  reducers: {
    openSinglePage(state, action) {
      state.singlePage = [];
      // state.singlePage.length = 0;
      state.singlePage.push(action.payload);
    },
    allCountriesData(state, action) {
      state.data = action.payload;
    },
    changeTheme(state) {
      state.theme = !state.theme;
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const {
  openSinglePage,
  clearSinglePage,
  allCountriesData,
  changeTheme,
} = singlePageSlice.actions;

export default singlePageSlice.reducer;
