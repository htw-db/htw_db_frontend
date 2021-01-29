import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/auth';

const authDomain = (state: AppState) => state.auth || initialState;

export const selectAuth = createSelector([authDomain], (authState) => authState);
