import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/instances';

const instanceDomain = (state: AppState) => state.instances || initialState;

export const selectInstances = createSelector([instanceDomain], (instanceState) => instanceState);
