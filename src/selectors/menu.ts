import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/menu';

const menuDomain = (state: AppState) => state.menu || initialState;

export const selectMenu = createSelector([menuDomain], (menuState) => menuState);
