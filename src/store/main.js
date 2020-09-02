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
    size: {
      width: 0,
      height: 0,
    },
  },
  reducers: {
    // 페이지 이동시 리듀서
    setPage(state, action) {
      state.menu =  Menu[action.payload];
    },
    setSize(state, action) {
      state.size = action.payload;
    },
  }
});

export const { setPage, setSize } = mainSlice.actions;
export const selectedMenu = state => state.main.menu;
export const windowSize = state => state.main.size;
export default mainSlice.reducer;

