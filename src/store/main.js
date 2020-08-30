import { createSlice } from '@reduxjs/toolkit';

export const Menu = [
  { title: 'page1', subHeader: 'page1 subHeader' },
  { title: 'page2', subHeader: 'page2 subHeader' },
  { title: 'page3', subHeader: 'page3 subHeader'},
  { title: 'page4', subHeader: 'page4 subHeader' },
  { title: 'page5', subHeader: 'page5 subHeader' },
];

const mainSlice = createSlice({
  name: 'page',
  initialState: {
    menu: Menu[0],
  },
  reducers: {
    // 페이지 이동시 리듀서
    setPage(state, action) {
      state.menu =  Menu[action.payload];
    },
  }
});

export const { setPage } = mainSlice.actions;
export const selectedMenu = state => state.main.menu;
export default mainSlice.reducer;

