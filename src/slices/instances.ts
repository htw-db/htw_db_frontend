import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InstanceInterface } from '../types';

interface InstanceState {
  instances: InstanceInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: InstanceState = { instances: [], isLoading: false };

const InstanceSlice = createSlice({
  name: 'instance',
  initialState,
  reducers: {
    getInstancesStart(state) {
      state.isLoading = true;
      state.instances = [];
      state.error = undefined;
    },
    getInstancesSuccess(state, { payload }: PayloadAction<InstanceInterface[]>) {
      state.instances = payload;
      state.error = undefined;
      state.isLoading = false;
    },
    getInstancesFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getInstancesStart, getInstancesSuccess, getInstancesFailed } = InstanceSlice.actions;

export default InstanceSlice.reducer;
