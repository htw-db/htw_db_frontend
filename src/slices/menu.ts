import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { menuItems } from '../constants/menu';

interface MenuState {
  containerClassnames: string;
  iterator: number;
  selectMenuItemId: string;
}

export const initialState: MenuState = {
  containerClassnames: 'menu-default',
  iterator: 0,
  selectMenuItemId: menuItems.length > 0 ? menuItems[0].id : '',
};

enum MenuTypes {
  DEFAULT = 'menu-default',
  SUB_HIDDEN = 'menu-sub-hidden',
  HIDDEN = 'menu-hidden',
}

const menuClassOrder: ReadonlyArray<MenuTypes> = [
  MenuTypes.DEFAULT,
  MenuTypes.SUB_HIDDEN,
  MenuTypes.HIDDEN,
  MenuTypes.SUB_HIDDEN,
];

const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchMenu(state) {
      state.iterator = iterateBoundary(state.iterator, 0, menuClassOrder.length);
      state.containerClassnames = menuClassOrder[state.iterator];
    },
    openSubMenu(state) {
      state.iterator = 0;
      state.containerClassnames = menuClassOrder[state.iterator];
    },
    selectMenuItem(state, action: PayloadAction<string>) {
      state.selectMenuItemId = action.payload;
    },
  },
});

const iterateBoundary = (current: number, reset: number, end: number) =>
  current + 1 >= end ? reset : current + 1;

export const { switchMenu, openSubMenu, selectMenuItem } = MenuSlice.actions;

export default MenuSlice.reducer;
