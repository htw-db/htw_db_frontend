import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddInstanceInterface, InstanceInterface, InstanceStatus } from '../types';

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
    addInstanceStart(state, { payload }: PayloadAction<AddInstanceInterface>) {
      state.error = undefined;
      state.instances = [
        ...state.instances,
        { ...payload, id: NaN, personId: NaN, status: InstanceStatus.LOADING },
      ];
    },
    addInstanceSuccess(state, { payload }: PayloadAction<InstanceInterface>) {
      state.instances = [
        ...state.instances.filter(
          (instance) =>
            instance.prefix === undefined && `${instance.prefix}${instance.name}` !== payload.name,
        ),
        payload,
      ];
      state.error = undefined;
      state.isLoading = false;
    },
    addInstanceFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getInstancesStart,
  getInstancesSuccess,
  getInstancesFailed,
  addInstanceStart,
  addInstanceSuccess,
  addInstanceFailed,
} = InstanceSlice.actions;

export default InstanceSlice.reducer;
